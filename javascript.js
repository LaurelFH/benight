//Google Maps Yelp Boys Night and Random Events and Outdoor/festival
///////////////////////////////////////////////////////////////////////////////////////////
//GENERAL FLOW
//
//User will enter a query in the form of a location 
//I want to pass that query through maps API (geocoding) to bring up a map of the area in a new div 
//
//
//
//
//
/////////////////////////////////////////////////////////////////////////////////////////


// GOOGLE MAPS GEOCODE-- 


//test code function 
// function loadMap() {
//  var mapOptions = {
//  	//specificies the location where we want to center the map
//  	center:new google.maps.LatLng(17.240498, 82.287598),
// 	 //specifies the zoom level of the map 
// 	 zoom:9,
// 	 //specifies the type of map -- roadmap, satellite (photographic), hybrid(phto plus roads/city names). terrain (Mts, rivers etc.)
//  	mapTypeId: google.maps.MapTypeId.ROADMAP
//  };
// //convert to Jquery?
// var map =new google.maps.Map(document.getElementById("mapspace"), 
// 	mapOptions);
function initMap() {
  var map = new google.maps.Map(document.getElementById('mapspace'), {
    zoom: 8,
    center: {lat: -34.397, lng: 150.644}
  });
  var geocoder = new google.maps.Geocoder();

  document.getElementById('submit').addEventListener('click', function() {
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {
  var address = document.getElementById('address').value;
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') {
      resultsMap.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: resultsMap,
        position: results[0].geometry.location
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}

////////////////////////////////////////////////////////////////////////////////////////

//YELP
// var yelpapiKey =
// var yelpqueryURL = "https://api.yelp.com/v3/businesses/search"
// var searchQuery = 
//
//
//calling the search API from YELP       
//     //ajax call 
//     $.ajax({
//         url: (yelpqueryURL + searchQuery + yelpapiKey),
//         method: "GET"
//     }).done(function(response) {
// 	    //see what matches up 
// 	    console.log(response);
// 
///////////////////////////////////////////////////////////////////////////////////////

//EVENTS AND CALLS 
// $(document).ready(function(){
// 	console.log("document is ready");
// 	loadMap();
// 	console.log("map is setting up");
// 	var mapOptions = {
// 		//specificies the location where we want to center the map
// 	 	center:new google.maps.LatLng(17.240498, 82.287598),
// 		 //specifies the zoom level of the map 
// 		 zoom:9,
// 		 //specifies the type of map -- roadmap, satellite (photographic), hybrid(phto plus roads/city names). terrain (Mts, rivers etc.)
// 	 	mapTypeId: google.maps.MapTypeId.ROADMAP
//  };
// 	var map = new google.maps.Map(document.getElementById("mapspace"), mapOptions);
// }
// loadMap();
	
// });

$(document).ready(function(){

	initMap();
	geocodeAddress();

}

);






///////////////////////////////////////////////////////////////////////////////////////
//TASKS TO FINISH










///////////////////////////////////////////////////////////////////////////////////////
//RESOURCES
//
//Key Yelp 
////Client ID
// ImyIU6DHaqlzfq2Y-v7UPw
// Client Secret
// SOC31MI8AVBkGCnk6At0ScKs8qxdhl3CWtDfX7BF1OoTgSPBUbGONwhNb1i8Ozy1
//
//Key Google Maps
//https://developers.google.com/maps/documentation/geocoding/start
//https://developers.google.com/maps/documentation/javascript/
//https://stackoverflow.com/questions/21411358/google-maps-geocoding-a-string
// http://en.marnoto.com/2015/06/aprende-google-maps-geocoding-exemplos.html
// http://www.wikihow.com/Geocode-an-Address-in-Google-Maps-Javascript
//https://hpneo.github.io/gmaps/examples/geocoding.html


//API Google maps JS API
//AIzaSyDmZyph_0mPWdXM8yXSLT669Z_G3lttS_U




//You already have credentials that are suitable for this purpose
// Server key (auto created by Google Service)
// Key	
// AIzaSyC8nCjKsy9EIVkmqrCTberMfRtiCA_wHQE
// Type	
// None
// Creation date	
// Jul 7, 2017, 9:45:48 PM
// Browser key (auto created by Google Service)

// Key	
// AIzaSyDJBPs135vP7VHNPJKzdMZ39fRMXeyd8dY
// Type	
// None
// Creation date	
// Jul 7, 2017, 