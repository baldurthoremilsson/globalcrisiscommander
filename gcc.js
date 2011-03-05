var gcc = {
    accidents: [{
        location: new google.maps.LatLng(48.855801, 2.324073),
        type: "fire",
        title: "Fire at the bakery"
    }],
    stations: [{
        location: new google.maps.LatLng(48.861815, 2.343256),
        type: "firestation"
    }]
};

var icons = {
    accidents: {
        fire: "assets/pics/fire-icon.png"
    },
    stations: {
        firestation: "assets/pics/firestation-icon.png"
    }
}

function addAccident(accident, map) {
    var marker = new google.maps.Marker({
        position: accident.location,
        map: map,
        title: accident.title,
        icon: icons.accidents[accident.type]
    });
    google.maps.event.addListener(marker, 'click', function() {
        $("#dock").empty();
        var dockitem = $('<div class="dockitem">THERE IS A FIRE</div>').droppable({
            drop: function( event, ui ) {
                alert('YOU WIN');
            }
        });
        $("#dock").append(dockitem);
    });
}

function addStation(station, map) {
    var marker = new google.maps.Marker({
        position: station.location,
        map: map,
        title: station.title,
        icon: icons.stations[station.type]
    });
    google.maps.event.addListener(marker, 'click', function() {
        $("#sidebar").empty();
        var sidebaritem = $('<div class="sidebaritem">FIRETRUCK</div>').draggable({revert: true});
        $("#sidebar").append(sidebaritem);
    });
}

$(function() {
    var myLatlng = new google.maps.LatLng(48.860706, 2.341182);
    var myOptions = {
        zoom: 15,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    
    var MENU_SIZE = 150;
    $("#map_canvas").height($(window).height()-MENU_SIZE);
    $(window).resize(function() {
        $("#map_canvas").height($("#map_canvas").height($(window).height()-MENU_SIZE));
    });
    
    for(i = 0; i < gcc.accidents.length; i++) {
        addAccident(gcc.accidents[i], map);
    }
    for(i = 0; i < gcc.stations.length; i++) {
        addStation(gcc.stations[i], map);
    }
});

function dockItem() {
    
}