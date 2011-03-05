$(function() {
    if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map_canvas"));
        map.setCenter(new GLatLng(37.4419, -122.1419), 13);
        map.setUIToDefault();
    }
    var MENU_SIZE = 150;
    $("#map_canvas").height($(window).height()-MENU_SIZE);
    $(window).resize(function() {
        $("#map_canvas").height($("#map_canvas").height($(window).height()-MENU_SIZE));
    });
});
