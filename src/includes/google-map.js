// SETTINGS
// Put your office coordinates in the array below
// First "point" is also used as a map center.

var mapLocations = [
	[29.7063428,-95.40526,"Main office"]
];
var zoomValue = 17;


// Don't change code below this line... or change at your own risk.
//-----------------------------------------------------------------

var map;
function init() {
	var mapOptions = {
		center: new google.maps.LatLng(mapLocations[0][0],mapLocations[0][1]),
		zoom: zoomValue,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL,
		},
		disableDoubleClickZoom: true,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
		},
		scaleControl: true,
		scrollwheel: true,
		streetViewControl: true,
		draggable : true,
		overviewMapControl: false,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [
		{
			featureType: "landscape",
			stylers: [
			{ saturation: -100 },
			{ lightness: 65 },
			{ visibility: "on" }
			]
		},{
			featureType: "poi",
			stylers: [
			{ saturation: -100 },
			{ lightness: 51 },
			{ visibility: "simplified" }
			]
		},{
			featureType: "road.highway",
			stylers: [
			{ saturation: -100 },
			{ visibility: "simplified" }
			]
		},{
			featureType: "road.arterial",
			stylers: [
			{ saturation: -100 },
			{ lightness: 30 },
			{ visibility: "on" }
			]
		},{
			featureType: "road.local",
			stylers: [
			{ saturation: -100 },
			{ lightness: 40 },
			{ visibility: "on" }
			]
		},{
			featureType: "transit",
			stylers: [
			{ saturation: -100 },
			{ visibility: "simplified" }
			]
		},{
			featureType: "administrative.province",
			stylers: [
			{ visibility: "off" }
			]
	/** /
		},{
			featureType: "administrative.locality",
			stylers: [
				{ visibility: "off" }
			]
		},{
			featureType: "administrative.neighborhood",
			stylers: [
				{ visibility: "on" }
			]
			/**/
		},{
			featureType: "water",
			elementType: "labels",
			stylers: [
			{ visibility: "on" },
			{ lightness: -25 },
			{ saturation: -100 }
			]
		},{
			featureType: "water",
			elementType: "geometry",
			stylers: [
			{ hue: "#ffff00" },
			{ lightness: -25 },
			{ saturation: -97 }
			]
		}
		],

	}

	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);

	for (i = 0; i < mapLocations.length; i++) {
		marker = new google.maps.Marker({
			icon: '',
			position: new google.maps.LatLng(mapLocations[i][0], mapLocations[i][1]),
			map: map,
			title:mapLocations[i][2]
		});
	}
}

google.maps.event.addDomListener(window, 'load', init);
