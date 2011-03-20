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

var enableAnimation = true;

function addAccident(accident, map) {
    var marker = new google.maps.Marker({
        position: accident.location,
        map: map,
        title: accident.title,
        icon: icons.accidents[accident.type]
    });
    google.maps.event.addListener(marker, 'click', function() {
        $("#dock").empty();
        var dockitem = $('<div class="dockitem"><div id="item_desc">Ble</div><div id="item_image"><img class="accident" src="assets/pics/fire.jpg\></div></div>').droppable({
            drop: function( event, ui ) {
                alert('YOU WIN');
            }
        }).mouseenter(function() {
            if(enableAnimation) 
            {
                enableAnimation = false;
                $(this).find("#item_image").css({"opacity":"0.6"});
                $(this).find("#item_desc").fadeIn('fast');
            }
        }).mouseleave(function() { 
            $(this).find("#item_desc").fadeOut('fast',function(){enableAnimation = true;});
            $(this).find("#item_image").css({"opacity":"1.0"});

        });
        // Place the image in the center
        var width = $(dockitem).width();
        var height = $(dockitem).height();
        var imgwidth = $(dockitem).find("img").width();
        var imgheight = $(dockitem).find("img").height();
        $(dockitem).find("img").css({"top":height/2-imgheight/2, "left":width/2-imgwidth/2});
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
        var sidebaritem = $('<div class="sidebaritem"><div id="item_desc">Ble</div><div id="item_image"><img class="accident" src="assets/pics/firestation.png\></div></div>').draggable({revert: true}).mouseenter(function() {
            $(this).find("#item_image").css({"opacity":"0.6"});
            $(this).find("#item_desc").fadeIn('fast');
        }).mouseleave(function() { 
            $(this).find("#item_desc").fadeOut('fast',function(){enableAnimation = true;});
            $(this).find("#item_image").css({"opacity":"1.0"});

        });
   // Place the image in the center
        var width = $(sidebaritem).width();
        var height = $(sidebaritem).height();
        var imgwidth = $(sidebaritem).find("img").width();
        var imgheight = $(sidebaritem).find("img").height();
        $(sidebaritem).find("img").css({"top":height/2-imgheight/2, "left":width/2-imgwidth/2});
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
    
    var MENU_SIZE = 152;
    $("#map_canvas")
        .height($(window).height()-MENU_SIZE)
        .width($(window).width()-MENU_SIZE);
    $(window).resize(function() {
        $("#map_canvas")
            .height($(window).height()-MENU_SIZE)
            .width($(window).width()-MENU_SIZE);
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

$().ready(function(){
	//SETUP Mp3 files player example
	var playerMp3 = new SWFObject("player.swf","myplayer1","0","0","9");
	//playerMp3.addVariable("logo","css/images/logo.jpg");
	playerMp3.addVariable("file","assets/songs/BraveHeart.mp3");
	playerMp3.addVariable("icons","false");
	playerMp3.write("player1");
	//create a javascript object to allow us send events to the flash player
	var player1 = document.getElementById("myplayer1");
	var mute1 = 0;
	var status1 = $("#status1");
	
	//EVENTS for Mp3 files player
	$("#play1").click(function(){
		player1.sendEvent("PLAY","true");
		status1.text("PLAYING...");
	});
	$("#pause1").click(function(){
		player1.sendEvent("PLAY","false");
		status1.text("PAUSED");
	});
	$("#mute1").click(function(){
		if(mute1 == 0){
			player1.sendEvent("mute","true");
			mute1 = 1;
		}
		else{
			player1.sendEvent("mute","false");
			mute1 = 0;
		}
	});
});
