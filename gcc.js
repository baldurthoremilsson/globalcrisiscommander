// http://plugins.jquery.com/project/autocenter
(function($){
     $.fn.extend({
          center: function (opt) {
               var options =  $.extend({ // Default values
                    inside:window, // element, center into window
                    transition: 0, // millisecond, transition time
                    minX:0, // pixel, minimum left element value
                    minY:0, // pixel, minimum top element value
                    vertical:true, // booleen, center vertical
                    withScrolling:true, // booleen, take care of element inside scrollTop when minX < 0 and window is small or when window is big
                    horizontal:true // booleen, center horizontal
               }, opt);
               return this.each(function() {
                    var props = {position:'absolute'};
                    if (options.vertical) {
                    	var top = $(options.inside).height();
                    	if($(this).attr('height'))
                    		top -= $(this).attr('height');
                    	else
                    		top -= $(this).outerHeight();
                    	top /= 2;
                    	if (options.withScrolling)
                    		top += $(options.inside).scrollTop() || 0;
                    	top = (top > options.minY ? top : options.minY);
                    	$.extend(props, {top: top+'px'});
                    }
                    if (options.horizontal) {
                    	var left = $(options.inside).width();
                    	if($(this).attr('width'))
                    		left -= $(this).attr('width');
                    	else
                    		left -= $(this).outerWidth();
                    	left /= 2;
                    	if (options.withScrolling)
                    		left += $(options.inside).scrollLeft() || 0;
                    	left = (left > options.minX ? left : options.minX);
                    	$.extend(props, {left: left+'px'});
                    }
                    if (options.transition > 0)
                    	$(this).animate(props, options.transition);
                    else
                    	$(this).css(props);
                    return $(this);
               });
          }
     });
})(jQuery);

// https://gist.github.com/268257
(function($) {
	$.fn.extend({
		imagesLoaded: function(callback){
			var elems = this.filter('img'),
				len = elems.length;
		      
			elems.bind('load',function(){
				if (--len <= 0){ callback.call(elems,this); }
			}).each(function(){
				// cached images don't fire load sometimes, so we reset src.
				if (this.complete || this.complete === undefined){
					var src = this.src;
					// webkit hack from http://groups.google.com/group/jquery-dev/browse_thread/thread/eee6ab7b2da50e1f
					// data uri bypasses webkit log warning (thx doug jones)
					this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
					this.src = src;
				}
			});

			return this;
		}
	});
})(jQuery);

// homebrew
(function($) {
	$.fn.extend({
		displayItem: function() {
			$(this).show().css('display', "inline-block");
			return this;
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
                    incidents: [
                        {
                        	type: "injury",
                        	time: 30.0
                        },
                        {
                        	type: "trappedInCar",
                        	time: 30.0
                        },
                        {
                        	type: "trafficjam",
                        	time: 30.0
                        }
                    ]
                }
            ],
            stations: [
                {
                    type: "firestation",
                    location: {lat: 34.437416, long: -119.802518},
                    units: 1,
                    unittype: "firetruck"
                },
                {
                    type: "hospital",
                    location: {lat: 34.434753, long: -119.794664},
                    units: 2,
                    unittype: "ambulance"
                },
                {
                    type: "policestation",
                    location: {lat: 34.438469, long: -119.796177},
                    units: 1,
                    unittype: "policecar"
                }
            ],
            description: {
                title: "Car accident",
                description: "There has been a three car crash on Hollister Avenue, Santa Barbara. Two people are injured, one of which is trapped in their car. Traffic is jammed near the accident."
            }
        }
    ],
    images: {
		stations: {
			firestation: {
				sidebar: "assets/pics/firestation-icon.png",
				marker: "assets/pics/firestation-icon.png"
			},
			policestation: {
				sidebar: "assets/pics/policestation-icon.png",
				marker: "assets/pics/policestation-icon.png"
			},
			hospital: {
				sidebar: "assets/pics/hospital-icon.png",
				marker: "assets/pics/hospital-icon.png"
			}
		},
		accidents: {
			fire: {
				dock: "assets/pics/fire-icon.png",
				marker: "assets/pics/fire-icon.png"
			},
			carcrash: {
				dock: "assets/pics/carcrash-icon.png",
				marker: "assets/pics/carcrash-icon.png"
			},
			robbery: {
				dock: "assets/pics/robbery-icon.png",
				marker: "assets/pics/robbery-icon.png"
			}
		},
		incidents: {
			injury: "assets/pics/injury.png",
			burningHouse: "assets/pics/burning_house.gif",
			trappedInHouse: "assets/pics/trapped_in_house.png",
			trappedInCar: "assets/pics/trapped_in_car.gif",
			burningCar: "assets/pics/burning_car.gif",
			robber: "assets/pics/robber_32.png",
			trafficjam: "assets/pics/trafficjam.gif"
		},
		units: {
			firetruck: "assets/pics/firetruck_128.png",
			policecar: "assets/pics/policecar_128.png",
			ambulance: "assets/pics/ambulance_128.png"
		}
	}
};

// Game
gcc.Game = function(id) {
    var self = this;
    
    this.DOM.board = $("#" + id);
    
    this.DOM.dockLink
    	.click(function() {
    		self.displayAccidents();
    	})
    	.hide();
    this.DOM.sidebarLink
    	.click(function() {
    		self.displayStations();
    	})
    	.hide();
    
    this.DOM.dock.append(this.DOM.dockLink);
    this.DOM.sidebar.append(this.DOM.sidebarLink);
    
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
    
    this.currentLevel = 0;
};

    gcc.Game.prototype = {
        DOM: {
            map: $('<div class="map_canvas"></div>'),
            dock: $('<div class="dock"></div>'),
            sidebar: $('<div class="sidebar"></div>'),
            dockLink: $('<div class="backlink">Back</div>'),
            sidebarLink: $('<div class="backlink">Back</div>')
        },
        mapOptions: {
            zoom: 16,
            center: new google.maps.LatLng(0, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        MENU_SIZE: 150,
        INFOBOX_RATIO: 0.75,
        
        
        startLevel: function(level) {
        	var messagebox;
        	
        	$('.infobox', this.DOM.dock).remove();
        	$('.infobox', this.DOM.sidebar).remove();
        	
        	this.DOM.dockLink.hide();
        	this.DOM.sidebarLink.hide();
        	
            this.accidents = [];
            this.stations = [];
            
            this.map.setCenter(new google.maps.LatLng(level.location.lat, level.location.long));
            
            for(i in level.accidents)
                this.addAccident(level.accidents[i]);
            
            for(i in level.stations)
                this.addStation(level.stations[i]);
            
        	messagebox = $('<div title="Level ' + (this.currentLevel+1) + ": " + level.description.title + '"><p>' + level.description.description + '</p></div>');
        	messagebox.dialog({
        		modal: true,
        		draggable: false,
        		resizeable: false
        	});
        },
        nextLevel: function() {
        	var nextlvl = this.currentLevel % gcc.levels.length;
        	this.startLevel(gcc.levels[nextlvl]);
        },
        addUnit: function(unit) {
        },
        addAccident: function(accident) {
            var acc = new gcc.Accident(accident);
            this.accidents.push(acc);
            
            acc.marker.setMap(this.map);
            this.DOM.dock.append(acc.DOM);
        },
        addStation: function(station) {
            var st = new gcc.Station(station);
            this.stations.push(st);
            
            st.marker.setMap(this.map);
            this.DOM.sidebar.append(st.DOM);
        },
        pause: function() {
        },
        play: function() {
        },
        
        displayAccidents: function() {
            var dock = this.DOM.dock;
            dock.children().hide();
            
            for(i in this.accidents)
                this.accidents[i].DOM.displayItem();
        },
        displayStations: function() {
            var sidebar = this.DOM.sidebar;
            sidebar.children().hide();
            
            for(i in this.stations)
                this.stations[i].DOM.displayItem();
        },
        checkWinningConditions: function() {
        	var incidents,
        		messagebox;
        	for(i in this.accidents) {
        		incidents = this.accidents[i].incidents;
        		for(j in incidents)
        			if(!incidents[j].resolved)
        				return;
        	}
        	
        	messagebox = $('<div title="YOU WON!"><p>You are a true hero :)</p></div>');
        	messagebox.dialog({
        		modal: true,
        		draggable: false,
        		resizeable: false,
        		close: function() {
        			gcc.game.nextLevel();
        		}
        	});
        }
    };


// Accidents
gcc.Accident = function(accident) {
    var self = this;
    
    this.location = new google.maps.LatLng(accident.location.lat, accident.location.long);
    this.type = accident.type;
    this.incidents = [];
    
    for(i in accident.incidents) {
    	this.incidents.push(new gcc.Incident(this, accident.incidents[i]));
    }
    
    this.DOM = gcc.getInfobox("dock", "accident", gcc.images.accidents[this.type].dock)
    	.data("accident", this)
    	.click(function() {
    		self.displayIncidents();
    	});
    
    this.marker = new google.maps.Marker({
        position: this.location,
        icon: gcc.images.accidents[this.type].marker
    });
    
    google.maps.event.addListener(this.marker, 'click', function() {
        self.displayIncidents();
    });
};

    gcc.Accident.prototype = {
        displayIncidents: function() {
            var dock = gcc.game.DOM.dock;
            dock.children().hide();
            gcc.game.DOM.dockLink.displayItem();
            for(i in this.incidents)
                this.incidents[i].DOM.displayItem();
            
            return false;
        }
    };

gcc.Station = function(station) {
    var self = this,
        description,
        unit;
        i;
    
    this.location = new google.maps.LatLng(station.location.lat, station.location.long);
    this.type = station.type;
    
    this.DOM = this.DOM = gcc.getInfobox("sidebar", "station", gcc.images.stations[this.type].sidebar)
    	.data("station", this)
    	.click(function() {
    		self.displayUnits();
    	});
    
    this.marker = new google.maps.Marker({
        position: this.location,
        icon: gcc.images.stations[this.type].marker
    });
    google.maps.event.addListener(this.marker, 'click', function() {
        self.displayUnits();
    });
    
    this.units = [];
    for(i = 0; i < station.units; i++)
        this.units.push(new gcc.Unit(this, station.unittype));
};

    gcc.Station.prototype = {
        displayUnits: function() {
    		var sidebar = gcc.game.DOM.sidebar;
            sidebar.children().hide();
            gcc.game.DOM.sidebarLink.displayItem();
            for(i in this.units)
                this.units[i].DOM.displayItem();
            
            return false;
        }
    };

gcc.Incident = function(accident, incident) {
	var self = this;
	
    this.accident = accident;
    this.type = incident.type;
    
    this.resolved = false;
    
    this.DOM = gcc.getInfobox("dock", "incident", gcc.images.incidents[this.type])
    	.data("incident", this)
    	.droppable({
    		accept: function(draggable) {
    			var accepts = self.acceptsUnits[self.type];
    			for(i in accepts)
    				if(draggable.hasClass(accepts[i]))
    					return true;
    			return false;
    		},
    		drop: function(event, ui) {
    			$(this).css('background-color', "green");
    			$(this).data("incident").resolved = true;
    			gcc.game.checkWinningConditions();
    		}
    	})
    	.hide();
    gcc.game.DOM.dock.append(this.DOM);
};
	gcc.Incident.prototype = {
		acceptsUnits: {
			injury: ["ambulance"],
			burningHouse: ["firetruck"],
			trappedInBurningHouse: ["firetruck", "ambulance"],
			trappedInBurningCar: ["firetruck", "ambulance"],
			trappedInCar: ["firetruck", "ambulance"],
			burningCar: ["firetruck"],
			robber: ["policecar"],
			trafficjam: ["policecar"]
		}
	};

gcc.Unit = function(station, type) {
    var self = this;
    
    this.type = type;

    this.DOM = gcc.getInfobox("sidebar", "unit " + this.type, gcc.images.units[this.type])
    	.draggable(this.dragOpts)
    	.hide();
    gcc.game.DOM.sidebar.append(this.DOM);
};
	gcc.Unit.prototype = {
		dragOpts: {
			containment: "html",
			revert: true
		}
	};

gcc.getInfobox = function(type, className, img) {
	var infoBox,
		width,
		height;
	
	switch(type) {
		case "dock":
			height = this.game.MENU_SIZE - 24;
			width = height * this.game.INFOBOX_RATIO;
			break;
		case "sidebar":
			width = this.game.MENU_SIZE - 24;
			height = width * this.game.INFOBOX_RATIO;
			break;
	}
	
	infoBox = $(
		'<div class="infobox ' + className + '">' +
			'<img src="' + img + '">' +
			'<div class="description">' +
				'<div class="text">' +
					'description' +
				'</div>' +
			'<div class="background"></div>' +
		'</div>'
	).width(width).height(height);
	
	$('img', infoBox).imagesLoaded(function() {
		var $this = $(this);
		$this.center({
			inside: infoBox,
			minX: -$this.attr('width')/2,
			minY: -$this.attr('height')/2});
	});
	
	return infoBox;
};

$(function() {
    gcc.game = new gcc.Game("board");
    gcc.game.startLevel(gcc.levels[0]);
});