$(function() {
    console.log("start");
    var myLatlng = new google.maps.LatLng(-34.397, 150.644);
    var myOptions = {
        zoom: 8,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    
    var MENU_SIZE = 150;
    $("#map_canvas").height($(window).height()-MENU_SIZE);
    $(window).resize(function() {
        $("#map_canvas").height($("#map_canvas").height($(window).height()-MENU_SIZE));
    });
    console.log("finish");
});