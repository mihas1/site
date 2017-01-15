ymaps.ready(init);
    var myMap,
    	myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.93615697, 30.32328019],
            zoom: 10,
            controls: ["zoomControl"]
        });

        var coords = [
		    [59.99009354, 30.29871396],
		    [59.98579320, 30.42608670],
		    [59.93052921, 30.43775968],
		    [59.91569597, 30.32007291]
		],
		    myCollection = new ymaps.GeoObjectCollection({}, {
		    	iconLayout: 'default#image',
		    	iconImageHref: './img/icons/map-marker.svg',
		    	iconImageSize: [46, 58],
        		iconImageOffset: [-3, -42]
		    });

		for (var i = 0; i < coords.length; i++) {
		    myCollection.add(new ymaps.Placemark(coords[i]));
		}
		myMap.behaviors.disable('scrollZoom');
		myMap.geoObjects.add(myCollection);
		;
    }

