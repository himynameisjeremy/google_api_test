var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 44.832917, lng: -93.300153},
    zoom: 18
  });
  var contentString = '<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">Kappa Cohort</h1>'+
'<div id="bodyContent">'+
'<p><b>Kappa Cats, Ho!</b> The Kappa Cohort is a cohort currently going through Prime Digital Academy.  They code and feed the monster, Aesop.</p>'+
'</div>'+
'</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  var marker = new google.maps.Marker({
    position: {lat: 44.832917, lng: -93.300153},
    map: map,
    title: 'Kappa Cats, Ho!'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}
