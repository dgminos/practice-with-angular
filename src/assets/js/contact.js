var pxLat = 40.767812,
          pxLng = -73.962014;
      
      // When the window has finished loading create our google map below
      var map = google.maps.event.addDomListener(window, 'load', init);
      
      function init() {
          // Basic options for a simple Google Map
          // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
          var mapOptions = {
              // How zoomed in you want the map to start at (always required)
              zoom: 15,
      
              disableDefaultUI: true,
              disableDoubleClickZoom: true,
              scrollwheel: false,
              // The latitude and longitude to center the map (always required)
              center: new google.maps.LatLng(pxLat, pxLng), // New York
      
              // How you would like to style the map. 
              // This is where you would paste any style found on Snazzy Maps.
              styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
          };
      
          // Get the HTML DOM element that will contain your map 
          // We are using a div with id="map" seen below in the <body>
          var mapElement = document.getElementById('map');
      
          // Create the Google Map using our element and options defined above
          map = new google.maps.Map(mapElement, mapOptions);
      
          // Let's also add a marker while we're at it
          var marker = new google.maps.Marker({
              icon: {
                fillColor: "#f52654",
                fillOpacity: 1,
                strokeWeight: 0,
                path: "M15,0C6.7,0,0,6.7,0,15c0,0,0,0.1,0,0.1c0,0.5,0,1.1,0.1,1.8c0.6,5.4,3.7,9.7,6.6,13.8c3.5,4.8,6.8,9.4,6.8,15.9c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5c0-6.5,3.3-11,6.8-15.9c3-4.1,6-8.4,6.6-13.8C30,16.2,30,15.6,30,15C30,6.7,23.3,0,15,0z",
                scale: 1
              },
              position: new google.maps.LatLng(pxLat, pxLng),
              map: map,
              title: 'Pixeden!'
          });
      
          //- map.addListener('center_changed', function() {
          //-     window.setTimeout(function() {
          //-       map.panTo(marker.getPosition());
          //-     }, 500);
          //- });
      }
      
      function newLocation(level) {
      
         if(map.getZoom() > 15) { map.setZoom(15) } else { map.setZoom(level) }
      }
      
      document.querySelector('#map-arrow').addEventListener('click', function() {
        newLocation(Math.round(Math.random()*10) + 13);
      }, false);