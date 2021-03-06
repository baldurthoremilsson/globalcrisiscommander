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
		//64.141017,-21.959782 (Naustið)
         location: {lat: 64.141017, long: -21.959782},
         accidents: [
             {
                 location: {lat: 64.138855, long: -21.956082},
                 type: "fire",
                 address: "Dunhagi 5",
                 incidents: [
					{
						type: "burningHouse",
						timeout: 120
					},
                     {
                     	type: "injury",
                     	timeout: 45.0
                     },
                     {
                     	type: "injury",
                     	timeout: 45.0
                     },
                     {
                     	type: "injury",
                     	timeout: 45.0
                     },
					{
						type: "injury",
						timeout: 60
					},
					{
						type: "robber",
						timeout: 120
					}
                 ]
             },
			{
                 location: {lat: 64.139117, long: -21.951682},
                 type: "fire",
                 address: "Dunhagi 5",
                 incidents: [
                     {
                     	type: "injury",
                     	timeout: 40.0
                     },
					{
						type: "burningHouse",
						timeout: 60
					},
                     {
                     	type: "injury",
                     	timeout: 40.0
                     },
                     {
                     	type: "injury",
                     	timeout: 40.0
                     },
                 ]
             }
         ],
         stations: [
             {
				 //64.138396,-21.927166 Landspítalinn
                 type: "hospital",
                 location: {lat: 64.138396, long: -21.927166},
                 address: "Hringbraut",
                 units: 4,
                 unittype: "ambulance"
             },
             {
				 //64.121955,-21.888628 Bogginn
                 type: "hospital",
                 location: {lat: 64.121955, long: -21.888628},
                 address: "Fossvogsvegur",
                 units: 3,
                 unittype: "ambulance"
             },	
			 {
					//hjá landspítalanum: 64.138976,-21.930084
                    type: "policestation",
                    location: {lat: 64.138976, long: -21.930084},
                    address: "Hringbraut",
                    units: 1,
                    unittype: "policecar"
                },
				{
					//hjá landspítalanum: 64.138976,-21.930084
                    type: "firestation",
                    location: {lat: 64.130976, long: -21.930084},
                    address: "Hringbraut",
                    units: 5,
                    unittype: "firetruck"
                },
         ],
         description: {
             title: "FIRE FIRE FIRE",
             description: "TUESDAY APRIL 19th. Baldur having failed in his duties as webmaster for nord.is has decided to burn down the servers. Baldur is currently keeping 4 hostages in Naustid, each of the hostages is heavily wounded and require immediate medical assistance. Things however are not so simple because the fire has spread (somehow) to the University main building"
         }
     },
             //level 1
             {
                 location: {lat: 34.156769, long: -118.342013},
                 accidents: [
                     {
                         location: {lat: 34.154769, long: -118.345413},
                         type: "robbery",
                         address: "North Pass Avenue",
                         incidents: [
                             {
                             	type: "robber",
                             	timeout: 60.0
                             },
                             {
                             	type: "robber",
                             	timeout: 60.0
                             },
                             {
                             	type: "robber",
                             	timeout: 60.0
                             }
                         ]
                     }
                 ],
                 stations: [
                     {
                         type: "policestation",
                         location: {lat: 34.155254, long: -118.338015},
                         address: "West Olive Avenue",
                         units: 1,
                         unittype: "policecar"
                     },
                     {
                         type: "policestation",
                         location: {lat: 34.159901, long: -118.345091},
                         address: "West Verdugo Avenue",
                         units: 2,
                         unittype: "policecar"
                     },
                     {
                         type: "hospital",
                         location: {lat: 34.159084, long: -118.338954},
                         address: "West Oak Street",
                         units: 1,
                         unittype: "ambulance"
                     }
                 ],
                 description: {
                     title: "Bank robbery",
                     description: "Bank robbery in progress, at the Bank of America. 2x suspects, heavily armed and wearing body armor, 1x person has been shot, status unknown. Extreme caution advised.... also my money's there so you need to get that back."
                 }
             },
			
         //level 3
        {
            location: {lat: 34.435169, long: -119.797239},
            accidents: [
                {
                    location: {lat: 34.435169, long: -119.797239},
                    type: "carcrash",
                    address: "Hollister Avenue",
                    incidents: [
                        {
                        	type: "injury",
                        	timeout: 60.0
                        },
                        {
                        	type: "trappedInCar",
                        	timeout: 60.0
                        },
                        {
                        	type: "trafficjam",
                        	timeout: 60.0
                        }
                    ]
                }
            ],
            stations: [
                {
                    type: "firestation",
                    location: {lat: 34.437416, long: -119.802518},
                    address: "Santa Ana Avenue",
                    units: 1,
                    unittype: "firetruck"
                },
                {
                    type: "hospital",
                    location: {lat: 34.434753, long: -119.794664},
                    address: "Hollister Avenue",
                    units: 2,
                    unittype: "ambulance"
                },
                {
                    type: "policestation",
                    location: {lat: 34.438469, long: -119.796177},
                    address: "South San Marcos Road",
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
				marker: "assets/pics/firestation-icon.png",
				hoverMarker: "assets/pics/firestation-icon_sel.png"
			},
			policestation: {
				marker: "assets/pics/policestation-icon.png",
				hoverMarker: "assets/pics/policestation-icon_sel.png" 
			},
			hospital: {
				marker: "assets/pics/hospital-icon.png",
				hoverMarker: "assets/pics/hospital-icon_sel.png" 
			}
		},
		accidents: {
			fire: {
				marker: "assets/pics/fire-icon.png",
				hoverMarker: "assets/pics/fire-icon_sel.png" 
			},
			carcrash: {
				marker: "assets/pics/carcrash-icon.png",
				hoverMarker: "assets/pics/carcrash-icon_sel.png" 
			},
			robbery: {
				marker: "assets/pics/robbery-icon.png",
				hoverMarker: "assets/pics/robbery-icon_sel.png" 
			}
		},
		units: {
                firetruck: 
				{	
					marker : "assets/pics/firetruck_32.png",
					hoverMarker : "assets/pics/firetruck_32_sel.png" 
				},
				
                policecar: 
				{
					marker : "assets/pics/policecar_32.png",
					hoverMarker: "assets/pics/policecar_32_sel.png" 
				},
                ambulance: 
				{
					marker: "assets/pics/ambulance_32.png",
					hoverMarker: "assets/pics/ambulance_32_sel.png" 
            	},

		},
		graphic: {
			arrowUp: "assets/pics/arrow_up.png",
			arrowDown: "assets/pics/arrow_left.png",
			arrowRight: "assets/pics/arrow_right.png",
			arrowLeft: "assets/pics/arrow_left.png"
		},
	},
	info: {
        title: {
            policestation: "Police station",
            firestation: "Fire station",
            hospital: "Hospital",
            
            policecar: "Police car",
            firetruck: "Firetruck",
            ambulance: "Ambulance",
            
            fire: "Fire",
            carcrash: "Car crash",
            robbery: "Robbery",
            
            injury: "Injury",
            burningHouse: "Burning house",
            trappedInHouse: "Trapped in burning house",
            trappedInCar: "Trapped in burning car",
            burningCar: "Burning car",
            robber: "Robber",
            trafficjam: "Traffic jam"
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
    this.units = [];
    
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
            maxZoom: 16,
            minZoom: 14,
            center: new google.maps.LatLng(0, 0),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            draggable: true
        },
        MENU_SIZE: 150,
        INFOBOX_RATIO: 0.75,
        
		/* Methods for the control box, CB is shorthand for Control Box */
        
        startLevel: function(level) {
        	var self = this,
        		messagebox,
        		i;
        	
            while(this.accidents.length > 0) {
                o = this.accidents.pop();
                o.remove();
            }
            while(this.stations.length > 0) {
                o = this.stations.pop();
                o.remove();
            }
            
        	this.DOM.dockLink.hide();
        	this.DOM.sidebarLink.hide();
        	
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
        	
            this.time = 0;
        	this.pause();
        },
        nextLevel: function() {
        	this.currentLevel = (this.currentLevel+1) % gcc.levels.length;
        	this.startLevel(gcc.levels[this.currentLevel]);
            controlBoxObject.setLevel(this.currentLevel);
        },
        addUnit: function(unit) {
        },
        addAccident: function(accident) {
            this.accidents.push(accident);
            
            accident.marker.setMap(this.map);
            this.DOM.dock.append(accident.infobox.DOM);
        },
        addStation: function(station) {
        	var i;
        	
            this.stations.push(station);
            
            station.marker.setMap(this.map);
            this.DOM.sidebar.append(station.infobox.DOM);
            
            for(i = 0; i < station.units.length; i++)
            	this.addUnit(station.units[i]);
        },
        addUnit: function(unit) {
        	this.units.push(unit);
        },
        removeUnit: function(unit) {
            var i;
            for(i = 0; i < this.units.length; i++) {
                if(this.units[i] === unit) {
                    this.units.splice(i, 1);
                    break;
                }
            }
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
                this.accidents[i].infobox.DOM.displayItem();
        },
        displayStations: function() {
            var sidebar = this.DOM.sidebar,
            	i;
            sidebar.children().hide();
            
            for(i = 0; i < this.stations.length; i++)
                this.stations[i].infobox.DOM.displayItem();
        },
        updateUnits: function() {
        	var i,
        		unit;
        	
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
            
        	if(this.running) {
        		this.time += currTime - this.lastUpdate;
                this.updateUnits();
                controlBoxObject.setTimer(parseInt(this.time/1000));
            }
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
		//FIXME
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
        	
        	messagebox = $('<div title="YOU WON!"><p>Mission Accomplished</p></div>');
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
    
    this.address = accident.address;
    this.location = new google.maps.LatLng(accident.location.lat, accident.location.long);
    this.type = accident.type;
    this.incidents = [];
    
    for(i = 0; i < accident.incidents.length; i++) {
        this.addIncident(accident.incidents[i]);
    }

    this.infobox = new gcc.Infobox("dock", "accident", this.type, this.address)
    this.infobox.DOM
    	.data("accident", this)
    	.click(function() {
    		self.displayIncidents();
    	})
    	.hover(function() {
            self.marker.setIcon(gcc.images.accidents[self.type].hoverMarker);
        }, function() {
            self.marker.setIcon(gcc.images.accidents[self.type].marker);
        });
    this.marker = new google.maps.Marker({
        position: this.location,
        icon: gcc.images.accidents[this.type].marker
    });
    
    this.markerListener = google.maps.event.addListener(this.marker, 'click', function() {
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
                this.incidents[i].infobox.DOM.displayItem();
            
            return false;
        },
        addIncident: function(incident) {
            this.incidents.push(new gcc.Incident(this, incident));
        },
        remove: function() {
            var incident;
            
            this.infobox.remove();
            this.marker.setMap(null);
            google.maps.event.removeListener(this.markerListener);
            
            while(this.incidents.length > 0) {
                incident = this.incidents.pop();
                incident.remove();
            }
        }
    };

gcc.Station = function(station, game) {
    var self = this,
        description,
        unit,
        i;
    
    this.address = station.address;
    this.location = new google.maps.LatLng(station.location.lat, station.location.long);
    this.type = station.type;
    
    this.infobox = new gcc.Infobox("sidebar", "station", this.type, this.address);
    this.infobox.DOM
    	.data("station", this)
    	.click(function() {
    		self.displayUnits();
    	})
    	.hover(function() {
            self.marker.setIcon(gcc.images.stations[self.type].hoverMarker);
        }, function() {
            self.marker.setIcon(gcc.images.stations[self.type].marker);
        });
    
    this.marker = new google.maps.Marker({
        position: this.location,
        icon: gcc.images.stations[this.type].marker
    });
    this.markerListener = google.maps.event.addListener(this.marker, 'click', function() {
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
                this.units[i].infobox.DOM.displayItem();
            
            return false;
        },
        remove: function() {
            var unit;
            
            this.infobox.remove();
            this.marker.setMap(null);
            google.maps.event.removeListener(this.markerListener);
            
            while(this.units.length > 0) {
                unit = this.units.pop();
                gcc.game.removeUnit(unit);
                unit.remove();
            }
        }
    };

gcc.Incident = function(accident, incident) {
	var self = this;
	
    this.accident = accident;
    this.type = incident.type;
    
    this.resolved = false;
    this.expired = false;
    
    this.infobox = new gcc.Infobox("dock", "incident", this.type, this.accident.address);
    this.infobox.DOM
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
                if(unit.occupied || self.expired)
                    return;
                
    			unit.goTo(self.accident.location, self);
    		}
    	})
    	.hide();
    gcc.game.DOM.dock.append(this.infobox.DOM);
    
    this.timeoutHandle = setTimeout(function() {
        self.timeout();
    }, incident.timeout * 1000);
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
		},
		resolve: function() {
            this.resolved = true;
            this.infobox.DOM.css('background-color', "green");
            gcc.game.checkWinningConditions();
        },
        timeout: function() {
            switch(this.type) {
                case "injury":
                    this.expire();
                    break;
                case "burningHouse":
                    this.expire();
                    var i;
                    for(i = 0; i < 2; i++) {
                        this.accident.addIncident({type: "burningHouse", timeout: 30000});
                    }
                    break;
                case "trappedInHouse":
                    this.expire();
                    break;
                case "trappedInCar":
                    this.expire();
                    break;
                case "burningCar":
                    this.expire();
                    var i;
                    for(i = 0; i < 10; i++) {
                        this.accident.addIncident({type: "injury", timeout: 30000});
                    }
                    break;
                case "robber":
                    this.expire();
                    break;
                case "trafficjam":
                    this.accident.addIncident({type: "injury", timeout: 30000});
                    break;
            }
        },
        expire: function() {
            this.expired = true;
            this.infobox.setStatus("Expired");
            this.infobox.DOM.css('background-color', "#FF0000");
        },
		remove: function() {
            this.infobox.remove();
            clearTimeout(this.timeoutHandle);
        }
	};

gcc.Unit = function(station, type) {
    var self = this;

    this.station = station;
    this.type = type;
    this.target = null;
    this.occupied = false;

    this.infobox = new gcc.Infobox("sidebar", "unit", this.type, this.station.address);
    this.infobox.DOM
    	.draggable(this.dragOpts)
    	.hide()
    	.data('unit', this)
    	.hover(function() {
            self.marker.marker.setIcon(gcc.images.units[self.type].hoverMarker);
        }, function() {
            self.marker.marker.setIcon(gcc.images.units[self.type].marker);
        });
    gcc.game.DOM.sidebar.append(this.infobox.DOM);
    
    this.marker = new gcc.AnimatedMarker(this, this.station.location);
};
	gcc.Unit.prototype = {
		dragOpts: {
			containment: "html",
			revert: true
		},
		remove: function() {
            this.infobox.remove();
            this.marker.remove();
        },
        goTo: function(location, incident) {
            this.marker.goTo(location);
            this.target = incident;
        },
        goToStation: function() {
            this.goTo(this.station.location, this.station);
        },
        arrived: function() {
            switch(this.type) {
                case "policecar":
                    if(this.target.type == "robber") {
                        this.target.resolve();
                        this.occupied = true;
                        this.target = null;
                        this.goToStation();
                    }
                    else if(this.target.type == "trafficjam") {
                        this.target.resolve();
                        this.target = null;
                    }
                    else if(this.target.type == "policestation") {
                        this.occupied = false;
                        this.target = null;
                    }
                    break;
                case "ambulance":
                    if(this.target.type == "injury") {
                        this.target.resolve();
                        // FIXME the unit has to return to base
                        this.occupied = true;
                        this.target = null;
                        this.goToStation();
                    }
                    else if(this.target.type == "trappedInHouse") {
                        this.target.resolve();
                        this.target = null;
                    }
                    else if(this.target.type == "trappedInCar") {
                        this.target.resolve();
                        this.target = null;
                    }
                    break;
                case "firetruck":
                    if(this.target.type == "burningHouse") {
                        this.target.resolve();
                        this.target = null;
                    }
                    else if(this.target.type == "trappedInHouse") {
                        this.target.resolve();
                        this.target = null;
                    }
                    else if(this.target.type == "trappedInCar") {
                        this.target.resolve();
                        this.target = null;
                    }
                    else if(this.target.type == "burningCar") {
                        this.target.resolve();
                        this.target = null;
                    }
                    break;
            };
        }
	};

gcc.AnimatedMarker = function(unit, startPos) {
	var self = this;
	this.unit = unit;
	this.marker = new google.maps.Marker({
        position: startPos,
        map: gcc.game.map, // FIXME add to map in gcc.game.addUnit

		icon: gcc.images.units[unit.type].marker,
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
                this.unit.arrived();
			}
			return pos;
		},
		isVisible: function() {
			return this.marker.getVisible();
		},
		remove: function() {
            this.marker.setMap(null);
        }
	};

// Infoboxes are displayed in the dock and sidebar
gcc.Infobox = function(position, category, type, address) {
	var width,
		height;
	
	switch(position) {
		case "dock":
			height = gcc.game.MENU_SIZE - 24;
			width = height * gcc.game.INFOBOX_RATIO;
			break;
		case "sidebar":
			width = gcc.game.MENU_SIZE - 24;
			height = width * gcc.game.INFOBOX_RATIO;
			break;
	}
	
	this.DOM = $('<div class="infobox ' + category + ' ' + type + '"></div>');
    this.title = $('<h1>' + gcc.info.title[type] + '</h1>');
    this.position = $('<div class="position">' + address + '</div>');
    this.status = $('<div class="status">Active</div>');
    
    this.DOM
        .width(width)
        .height(height)
        .append($('<div class="background"></div>'))
        .append($('<div class="description"></div>')
            .append(this.title)
            .append(this.position)
            .append(this.status)
        );
};
    gcc.Infobox.prototype = {
        setTitle: function(title) {
            this.title.text(title);
        },
        setPosition: function(position) {
            this.position.text(position);
        },
        setStatus: function(status) {
            this.status.text(status);
        },
        remove: function() {
            this.DOM.remove();
        }
    };

