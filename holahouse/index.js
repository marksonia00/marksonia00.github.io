function initMap() {
    var uluru = {lat: 22.742657, lng: 121.150854};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});
  }