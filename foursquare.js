       //example call from SO 
        /**********FourSquare***************/

       var CLIENT_ID = "PCF5FZ1ZQSULICPVC1L5SKVMMPY1ELIUV12AZOWP20LX5G31";
       var CLIENT_SECRET = "SLUV4VW3E2QYXZ44CCDBZDXAVDFRMDHVW4SQQB0ISQO5Y42Y";

    $.ajax({
        url:'https://api.foursquare.com/v2/venues/search',
        dataType: 'json',
        data: 'limit=10' +
                '&ll='+ placeItem.lat() +','+ placeItem.lng() +
                '&?client_id='+ CLIENT_ID +
                '&client_secret='+ CLIENT_SECRET +
                '&v=20140806' +
                '&m=foursquare',
        async: true,

        success: function (data) {
            var result = data.response.venue;
            var contact = result.hasOwnProperty('contact') ? result.contact : '';
            if (contact.hasOwnProperty('formattedPhone')) {
                placeItem.phone(contact.formattedPhone || '');
            }

            var location = result.hasOwnProperty('location') ? result.location : '';
            if (location.hasOwnProperty('address')) {
                placeItem.address(location.address || '');
            }

            var bestPhoto = result.hasOwnProperty('bestPhoto') ? result.bestPhoto : '';
            if (bestPhoto.hasOwnProperty('prefix')) {
                placeItem.photoPrefix(bestPhoto.prefix || '');
            }

            if (bestPhoto.hasOwnProperty('suffix')) {
                placeItem.photoSuffix(bestPhoto.suffix || '');
            }

            var description = result.hasOwnProperty('description') ? result.description : '';
            placeItem.description(description || '');

            var rating = result.hasOwnProperty('rating') ? result.rating : '';
            placeItem.rating(rating || 'none');

            var url = result.hasOwnProperty('url') ? result.url : '';
            placeItem.url(url || '');

            placeItem.canonicalUrl(result.canonicalUrl);

            // Infowindow code is in the success function so that the error message

            // Content of the infowindow
            var contentString = '<div id="iWindow"><h4>' + placeItem.name() + '</h4><div id="pic"><img src="' +
                    placeItem.photoPrefix() + '110x110' + placeItem.photoSuffix() +
                    '" alt="Image Location"></div><p>Information from Foursquare:</p><p>' +
                    placeItem.phone() + '</p><p>' + placeItem.address() + '</p><p>' +
                    placeItem.description() + '</p><p>Rating: ' + placeItem.rating() +
                    '</p><p><a href=' + placeItem.url() + '>' + placeItem.url() +
                    '</a></p><p><a target="_blank" href=' + placeItem.canonicalUrl() +
                    '>Foursquare Page</a></p><p><a target="_blank" href=https://www.google.com/maps/dir/Current+Location/' +
                    placeItem.lat() + ',' + placeItem.lng() + '>Directions</a></p></div>';

            // Add infowindows
                google.maps.event.addListener(placeItem.marker, 'click', function () {
                infowindow.open(map, this);
                // Bounce animation
                placeItem.marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(function () {
                    placeItem.marker.setAnimation(null);
                }, 800);
                infowindow.setContent(contentString);
            });
    },

        // Alert the user on error.
        error: function (e) {
            infowindow.setContent('<h5>Foursquare data is unavailable.</h5>');
            document.getElementById("error").innerHTML = "<h4>Foursquare data is unavailable. Please try refreshing.</h4>";
    }
    });