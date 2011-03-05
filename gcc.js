$(function() {
    if (GBrowserIsCompatible()) {
        var map = new GMap2(document.getElementById("map_canvas"));
        map.setCenter(new GLatLng(37.4419, -122.1419), 13);
        map.setUIToDefault();
    }
    $("#map_canvas").height($(window).height()-200);
    $(window).resize($("#map_canvas").height($("#map_canvas").height($(window).height()-200)));
});
