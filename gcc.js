(function($){
     $.fn.extend({
          center: function (options) {
               var options =  $.extend({ // Default values
                    inside:window, // element, center into window
                    transition: 0, // millisecond, transition time
                    minX:0, // pixel, minimum left element value
                    minY:0, // pixel, minimum top element value
                    vertical:true, // booleen, center vertical
                    withScrolling:true, // booleen, take care of element inside scrollTop when minX < 0 and window is small or when window is big
                    horizontal:true // booleen, center horizontal
               }, options);
               return this.each(function() {
                    var props = {position:'absolute'};
                    if (options.vertical) {
                         var top = ($(options.inside).height() - $(this).outerHeight()) / 2;
                         if (options.withScrolling) top += $(options.inside).scrollTop() || 0;
                         top = (top > options.minY ? top : options.minY);
                         $.extend(props, {top: top+'px'});
                    }
                    if (options.horizontal) {
                          var left = ($(options.inside).width() - $(this).outerWidth()) / 2;
                          if (options.withScrolling) left += $(options.inside).scrollLeft() || 0;
                          left = (left > options.minX ? left : options.minX);
                          $.extend(props, {left: left+'px'});
                    }
                    if (options.transition > 0) $(this).animate(props, options.transition);
                    else $(this).css(props);
                    return $(this);
               });
          }
     });
})(jQuery);

var gcc = {
    levels: [
        {
            location: {lat: 34.435169, long: -119.797239},
            accidents: [
                {
                    location: {lat: 34.435169, long: -119.797239},
                    type: "carcrash",
                    incidents: []
                }
            ],
            stations: [
                {
                    type: "firestation",
                    location: {lat: 34.437416, long: -119.802518},
                    units: 1
                },
                {
                    type: "hospital",
                    location: {lat: 34.434753, long: -119.794664},
                    units: 2
                },
                {
                    type: "policestation",
                    location: {lat: 34.438469, long: -119.796177},
                    units: 1
                }
            ],
            description: {
                title: "Car accident",
                description: "There has been a three car crash on Hollister Avenue, Santa Barbara. Two people are injured, one of which is trapped in their car. Traffic is jammed near the accident."
            }
        }
    ]
};

// Game
gcc.Game = function(id) {
    var self = this;
    
    this.DOM.board = $("#" + id);
    
    this.DOM.board
        .append(this.DOM.map)
        .append(this.DOM.dock)
        .append(this.DOM.sidebar);
    
    this.map = new google.maps.Map(this.DOM.map[0], this.mapOptions);
    this.accidents = [];
    this.stations = [];
    
    $(window).resize(function() {
        self.DOM.map
            .height($(window).height()-self.MENU_SIZE+2)
            .width($(window).width()-self.MENU_SIZE+2);
        self.DOM.sidebar
            .height($(window).height())
            .width(self.MENU_SIZE);
        self.DOM.dock
            .height(self.MENU_SIZE)
            .width($(window).width()-self.MENU_SIZE);
        self.map.setCenter(self.location);
    });
    $(window).resize();
};

    gcc.Game.prototype = {
        DOM: {
            map: $('<div class="map_canvas"></div>'),
            dock: $('<div class="dock"></div>'),
            sidebar: $('<div class="sidebar"></div>')
        },
        mapOptions: {
            zoom: 16,
            center: new google.maps.LatLng(0, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        MENU_SIZE: 150,
        INFOBOX_RATIO: 0.75,
        
        
        startLevel: function(level) {
            this.accidents = [];
            this.stations = [];
            
            this.map.setCenter(new google.maps.LatLng(level.location.lat, level.location.long));
            
            for(i in level.accidents)
                this.addAccident(level.accidents[i]);
            
            for(i in level.stations)
                this.addStation(level.stations[i]);
            
            this.displayAccidents();
            this.displayStations();
        },
        addUnit: function(unit) {
        },
        addAccident: function(accident) {
            var acc = new gcc.Accident(accident);
            this.accidents.push(acc);
            
            acc.marker.setMap(this.map);
        },
        addStation: function(station) {
            var st = new gcc.Station(station);
            this.stations.push(st);
            
            st.marker.setMap(this.map);
        },
        pause: function() {
        },
        play: function() {
        },
        
        displayAccidents: function() {
            var dock = this.DOM.dock;
            
            dock.empty();
            for(i in this.accidents) {
                // FIXME: this logic should be in the Accident constructor
                var acc = this.accidents[i];
                acc.DOM
                    .data("accident", acc)
                    .click(function() {
                        $(this).data("accident").click();
                    });
                dock.append(acc.DOM);
            }
        },
        displayStations: function() {
            var sidebar = this.DOM.sidebar;
            
            sidebar.empty();
            for(i in this.stations) {
                var st = this.stations[i];
                // FIXME: this logic should be in the Station constructor
                st.DOM
                    .data("station", st)
                    .click(function() {
                        $(this).data("station").click();
                    });
                sidebar.append(st.DOM);
            }
        }
    };


// Accidents
gcc.Accident = function(accident) {
    var self = this,
        dockImage,
        markerImage;
    
    this.location = new google.maps.LatLng(accident.location.lat, accident.location.long);
    this.type = accident.type;
    
    switch(this.type) {
        case "fire":
            dockImage = "assets/pics/fire-icon.png";
            markerImage = "assets/pics/fire-icon.png";
            break;
        case "carcrash":
            dockImage = "assets/pics/carcrash-icon.png";
            markerImage = "assets/pics/carcrash-icon.png";
            break;
        case "robbery":
            dockImage = "assets/pics/robbery-icon.png";
            markerImage = "assets/pics/robbery-icon.png";
            break;
    }
    
    this.DOM = gcc.getInfobox("dock", "accident", dockImage);
    
    this.marker = new google.maps.Marker({
        position: this.location,
        icon: markerImage
    });
    google.maps.event.addListener(this.marker, 'click', function() {
        self.click();
    });
};

    gcc.Accident.prototype = {
        click: function() {
            var link = $('<a href="#">Back</a>').click(function() {
                    gcc.game.displayAccidents();
                });
            gcc.game.DOM.dock.empty().append(link);
            for(i in this.incidents) {
                var incident = this.incidents[i];
                incident.DOM
                    .data("incident", incident)
                    .droppable();
                gcc.game.DOM.dock.append(this.incidents[i].DOM);
            }
            
            return false;
        }
    };

gcc.Station = function(station) {
    var self = this,
        dockImage,
        markerImage,
        description,
        unit;
        i;
    
    this.location = new google.maps.LatLng(station.location.lat, station.location.long);
    this.type = station.type;
    
    switch(this.type) {
        case "firestation":
            dockImage = "assets/pics/firestation-icon.png";
            markerImage = "assets/pics/firestation-icon.png";
            description = "Firestation";
            break;
        case "policestation":
            dockImage = "assets/pics/policestation-icon.png";
            markerImage = "assets/pics/policestation-icon.png";
            description = "Policestation";
            break;
        case "hospital":
            dockImage = "assets/pics/hospital-icon.png";
            markerImage = "assets/pics/hospital-icon.png";
            description = "Hospital";
            break;
    }
    
    this.DOM = this.DOM = gcc.getInfobox("sidebar", "station", dockImage);
    
    this.marker = new google.maps.Marker({
        position: this.location,
        icon: markerImage
    });
    google.maps.event.addListener(this.marker, 'click', function() {
        self.click();
    });
    
    this.units = [];
    for(i = 0; i < station.units; i++)
        this.units.push(new gcc.Unit(this));
};

    gcc.Station.prototype = {
        click: function() {
            var link = $('<a href="#">Back</a>').click(function() {
                    gcc.game.displayStations();
                });
            gcc.game.DOM.sidebar.empty().append(link);
            
            for(i in this.units) {
                var unit = this.units[i];
                unit.DOM
                    .data("unit", unit)
                    .draggable(unit.draggable);
                gcc.game.DOM.sidebar.append(unit.DOM);
            }
            
            return false;
        }
    };

gcc.Incident = function(accident) {
    this.accident = accident;
    this.DOM = gcc.getInfobox("dock", "incident", "");
};
	gcc.Incident.prototype = {
	};

gcc.Unit = function(station) {
    var self = this;
    
    this.station = station;
    this.DOM = gcc.getInfobox("sidebar", "unit", "");
};
	gcc.Unit.prototype = {
	};

gcc.getInfobox = function(type, className, img) {
	var infoBox,
		infoBoxClass,
		width,
		height;
	
	switch(type) {
		case "dock":
			infoBoxClass = "dockitem";
			height = this.game.MENU_SIZE - 24;
			width = height * this.game.INFOBOX_RATIO;
			break;
		case "sidebar":
			infoBoxClass = "sidebaritem";
			width = this.game.MENU_SIZE - 24;
			height = width * this.game.INFOBOX_RATIO;
			break;
	}
	
	infoBox = $(
		'<div class="' + infoBoxClass + " " + className + '">' +
			'<img src="' + img + '">' +
			'<div class="description">' +
				'<div class="text">' +
					'description' +
				'</div>' +
			'<div class="background"></div>' +
		'</div>'
	).width(width).height(height);
	
	$('img', infoBox).load(function() {
		$(this).center({
			inside: infoBox,
			minX: -$(this).width()/2,
			minY: -$(this).height()/2});
	});
	
	return infoBox;
};

$(function() {
    gcc.game = new gcc.Game("board");
    gcc.game.startLevel(gcc.levels[0]);
});