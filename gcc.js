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

// Make sure items have correct display value in their css
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
             //level 2
             {
                 location: {lat: 34.154769, long: -118.345413},
                 accidents: [
                     {
                         location: {lat: 34.154769, long: -118.345413},
                         type: "robbery",
                         incidents: [
                             {
                             	type: "robber",
                             	time: 30.0
                             },
                             {
                             	type: "robber",
                             	time: 30.0
                             },
                             {
                             	type: "robber",
                             	time: 30.0
                             }
                         ]
                     }
                 ],
                 stations: [
                     {
                         type: "policestation",
                         location: {lat: 34.154254, long: -118.336015},
                         units: 1,
                         unittype: "policecar"
                     },
                     {
                         type: "policestation",
                         location: {lat: 34.159901, long: -118.345091},
                         units: 2,
                         unittype: "policecar"
                     },
                     {
                         type: "hospital",
                         location: {lat: 34.159084, long: -118.338954},
                         units: 1,
                         unittype: "ambulance"
                     }
                 ],
                 description: {
                     title: "Bank robbery",
                     description: "Bank robbery in progress, at the Bank of America. 2x suspects, heavily armed and wearing body armor, 1x person has been shot, status unknown. Extreme caution advised.... also my money's there so you need to get that back."
                 }
             },
         //level 1
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
        },
       
    ],
    images: {
		stations: {
			firestation: {
				sidebar: "assets/pics/firestation-icon.png",
				marker: "assets/pics/firestation-icon.png",
				aniUnitMarker : "assets/pics/firetruck_32.png"
			},
			policestation: {
				sidebar: "assets/pics/policestation-icon.png",
				marker: "assets/pics/policestation-icon.png",
				aniUnitMarker: "assets/pics/police_32.png"
			},
			hospital: {
				sidebar: "assets/pics/hospital-icon.png",
				marker: "assets/pics/hospital-icon.png",
				aniUnitMarker: "assets/pics/ambulance_32.png"
			}
		},
		accidents: {
			fire: {
				dock: "assets/pics/fire-icon.png",
				marker: "assets/pics/fire-icon.png",
			},
			carcrash: {
				dock: "assets/pics/carcrash-icon.png",
				marker: "assets/pics/carcrash-icon.png",
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
		},
		graphic: {
			arrowUp: "assets/pics/arrow_up.png",
			arrowDown: "assets/pics/arrow_left.png",
			arrowRight: "assets/pics/arrow_right.png",
			arrowLeft: "assets/pics/arrow_left.png"
		},
		aniMarkers:
		{
			policecar: "assets/pics/police_32.png",
			ambulance: "assets/pics/ambulance_32.png",
			firetruck: "assets/pics/firetruck_32.png"
		}
	}
};

UNIT_INTERVAL = 1;
UNIT_UPDATE = 20;

// Game
gcc.Game = function(id) {
    var self = this;
    
    this.time = 0;
    this.lastUpdate = new Date().getTime();
    this.timedEvents = [];
    
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
		.append(this.DOM.controlBox)
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
    this.directionsService = new google.maps.DirectionsService();
    
    this.running = false;
    
    setInterval(function() {
    	self.update();
    }, 30);
    this.updateUnits();
};

    gcc.Game.prototype = {
        DOM: {
            map: $('<div class="map_canvas"></div>'),
            dock: $('<div class="dock"></div>'),
            sidebar: $('<div class="sidebar"></div>'),
            dockLink: $('<div class="backlink"><img src="' + gcc.images.graphic.arrowLeft + '" alt="Back"/></div>'),
            sidebarLink: $('<div class="backlink"><img src="' + gcc.images.graphic.arrowUp + '" alt="Back"/></div>'),
            controlBox: controlBoxObject.getControlBox()
		},
        mapOptions: {
            zoom: 16,
            center: new google.maps.LatLng(0, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        MENU_SIZE: 150,
        INFOBOX_RATIO: 0.75,
        
		/* Methods for the control box, CB is shorthand for Control Box */
        
        startLevel: function(level) {
        	var self = this,
        		messagebox,
        		i;
        	
        	$('.infobox', this.DOM.dock).remove();
        	$('.infobox', this.DOM.sidebar).remove();
        	
        	this.DOM.dockLink.hide();
        	this.DOM.sidebarLink.hide();
        	
            this.accidents = [];
            this.stations = [];
            this.units = [];
            
            this.map.setCenter(new google.maps.LatLng(level.location.lat, level.location.long));
            
            for(i = 0; i < level.accidents.length; i++)
                this.addAccident(new gcc.Accident(level.accidents[i]));
            
            for(i = 0; i < level.stations.length; i++)
                this.addStation(new gcc.Station(level.stations[i]));
            
        	messagebox = $('<div title="Level ' + (this.currentLevel+1) + ": " + level.description.title + '"><p>' + level.description.description + '</p></div>');
        	messagebox.dialog({
        		modal: true,
        		draggable: false,
        		resizeable: false,
        		close: function(event, ui) {
        			self.play();
        		}
        	});
        	
        	this.pause();
        },
        nextLevel: function() {
        	this.currentLevel = (this.currentLevel+1) % gcc.levels.length;
        	this.startLevel(gcc.levels[this.currentLevel]);
        },
        addUnit: function(unit) {
        },
        addAccident: function(accident) {
            this.accidents.push(accident);
            
            accident.marker.setMap(this.map);
            this.DOM.dock.append(accident.DOM);
        },
        addStation: function(station) {
        	var i;
        	
            this.stations.push(station);
            
            station.marker.setMap(this.map);
            this.DOM.sidebar.append(station.DOM);
            
            for(i = 0; i < station.units.length; i++)
            	this.addUnit(station.units[i]);
        },
        addUnit: function(unit) {
        	this.units.push(unit);
        },
        pause: function() {
        	this.running = false;
        },
        play: function() {
        	this.running = true;
        },
        
        displayAccidents: function() {
            var dock = this.DOM.dock,
            	i;
            dock.children().hide();
            
            for(i = 0; i < this.accidents.length; i++)
                this.accidents[i].DOM.displayItem();
        },
        displayStations: function() {
            var sidebar = this.DOM.sidebar,
            	i;
            sidebar.children().hide();
            
            for(i = 0; i < this.stations.length; i++)
                this.stations[i].DOM.displayItem();
        },
        updateUnits: function() {
        	var self = this,
        		i,
        		unit;
        	
            setTimeout(function() {
            	self.updateUnits();
            }, UNIT_UPDATE);
        	if(!this.running)
        		return;
        	
        	for(i = 0; i < this.units.length; i++) {
        		unit = this.units[i];
    			if(unit.marker.isVisible())
    				unit.marker.move();
        	}
        },
        update: function() {
        	var currTime = new Date().getTime(),
        		i,
        		event;
        	if(this.running)
        		this.time += currTime - this.lastUpdate;
        	this.lastUpdate = currTime;
        	
        	while(this.timedEvents.length != 0) {
        		event = this.timedEvents[0];
        		if(event.time > this.time)
        			break;
        		event.closure.call(window);
        		this.timedEvents.shift();
        	}
        },
        addTimedEvent: function(closure, delay) {
        	this.timedEvents.push({
        		time: this.time + delay,
        		closure: closure
        	});
        	this.timedEvents.sort(function(a,b) {
        		return a.time - b.time;
        	});
        },
        checkWinningConditions: function() {
        	var incidents,
        		messagebox,
        		i,
        		j;
        	
        	for(i = 0; i < this.accidents.length; i++) {
        		incidents = this.accidents[i].incidents;
        		for(j = 0; j < incidents.length; j++)
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
    var self = this,
    	i;
    
    this.location = new google.maps.LatLng(accident.location.lat, accident.location.long);
    this.type = accident.type;
    this.incidents = [];
    
    for(i = 0; i < accident.incidents.length; i++) {
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
            var dock = gcc.game.DOM.dock,
            	i;
            
            dock.children().hide();
            gcc.game.DOM.dockLink.displayItem();
            for(i = 0; i < this.incidents.length; i++)
                this.incidents[i].DOM.displayItem();
            
            return false;
        }
    };

gcc.Station = function(station, game) {
    var self = this,
        description,
        unit,
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
    for(i = 0; i < station.units; i++) {
    	var unit = new gcc.Unit(this, station.unittype);
        this.units.push(unit);
        gcc.game.addUnit(unit);
    }
};

    gcc.Station.prototype = {
        displayUnits: function() {
    		var sidebar = gcc.game.DOM.sidebar,
    			i;
    		
            sidebar.children().hide();
            gcc.game.DOM.sidebarLink.displayItem();
            for(i = 0; i < this.units.length; i++)
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
    			var accepts = self.acceptsUnits[self.type],
    				i;
    			for(i = 0; i < accepts.length; i++)
    				if(draggable.hasClass(accepts[i]))
    					return true;
    			return false;
    		},
    		drop: function(event, ui) {
    			var unit = ui.draggable.data('unit');
    			unit.marker.goTo(self.accident.location);
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

    this.station = station;
    this.type = type;

    this.DOM = gcc.getInfobox("sidebar", "unit " + this.type, gcc.images.units[this.type])
    	.draggable(this.dragOpts)
    	.hide()
    	.data('unit', this);
    gcc.game.DOM.sidebar.append(this.DOM);
    
    this.marker = new gcc.AnimatedMarker(this, this.station.location);
};
	gcc.Unit.prototype = {
		dragOpts: {
			containment: "html",
			revert: true
		}
	};

gcc.AnimatedMarker = function(unit, startPos) {
	var self = this;
	this.unit = unit;
	
	console.log();
	
	this.marker = new google.maps.Marker({
        position: startPos,
        map: gcc.game.map,
		icon: gcc.images.aniMarkers[unit.type],
		visible: false
    });
	this.polyline = new google.maps.Polyline({
		path: [startPos],
		strokeColor: '#FF0000',
		strokeWeight: 0,
		strokeOpacity: 1.0
	});
	this.directionsResults = null;
	this.running = false;
	this.steps = [];
};
	gcc.AnimatedMarker.prototype = {
		goTo: function(destPos) {
			var self = this,
				request = {
					origin: this.marker.getPosition(),
					destination: destPos,
					travelMode: google.maps.DirectionsTravelMode.DRIVING
				};
			gcc.game.directionsService.route(request, function(response, status){
                if (status != google.maps.DirectionsStatus.OK)
                	return;
                
                var legs = response.routes[0].legs,
                	overview_path = response.routes[0].overview_path,
                	steps,
                	i,
                	j,
                	k,
                	count = 0;
                
                self.directionsResults = response;
                for(i=0; i < legs.length; i++) {
                    steps = legs[i].steps;
                    for (j=0; j < steps.length; j++) {
                        var nextSegment = steps[j].path;
                        for (k=0;k<nextSegment.length;k++) {
                            self.polyline.getPath().push(nextSegment[k]);
                            count++;
                        }
                    }
                }
                self.steps = self.polyline.GetPointsAtDistance(UNIT_INTERVAL);
                self.polyline.getPath().clear();
                for(i=0; i < self.steps.length; i++)
                	self.polyline.getPath().push(self.steps[i]);
                self.running = true;
			});
			this.marker.setVisible(true);
		},
		move: function() {
			var path = this.polyline.getPath(),
				pos = path.getAt(0);
			if(!this.running)
				return;
			
			if(pos) {
				this.marker.setPosition(pos);
				path.removeAt(0);
			} else {
				this.marker.setVisible(false);
				this.running = false;
			}
			return pos;
		},
		isVisible: function() {
			return this.marker.getVisible();
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
	$('#controlbox').click(function() {controlBoxObject.click();});
});