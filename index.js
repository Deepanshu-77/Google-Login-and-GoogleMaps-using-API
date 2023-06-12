const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const form = document.getElementById("form");
const login = document.getElementById("loginbutton");
const login2 = document.getElementById("loginbutton2");
const numberinput = document.querySelector("#exampleInputEmail1");
const homepage = document.getElementById("button4");
const data = document.getElementById("data");
const mappage = document.getElementById("mappage");
const mapCanvas = document.getElementById("map");
const submitbtn = document.getElementById("submit");
const mapbutton = document.getElementById("mapbutton");
const listbutton = document.getElementById("listbutton");
const table = document.getElementById("table");

login.addEventListener("click", () => {
  form.style.display = "block";
  homepage.style.display = "none";
  login.style.display = "none";
  login2.style.display = "none";
  mapCanvas.style.display = "none";

  table.style.display = "none";
  mapbutton.style.display = "none";
  listbutton.style.display = "none";
});
login2.addEventListener("click", () => {
  form.style.display = "block";
  homepage.style.display = "none";
  login.style.display = "block";
  login2.style.display = "none";
  mapCanvas.style.display = "none";

  table.style.display = "none";
});
numberinput.addEventListener("keyup", stateHandle);
function stateHandle() {
  if (document.querySelector("#exampleInputEmail1").value === "") {
    button1.disabled = true;
  } else {
    button1.disabled = false;
  }
}
button1.addEventListener("click", () => {
  homepage.style.display = "none";
  form.style.display = "none";

  data.style.display = "block";

  table.style.display = "none";
  login.style.display = "block";
  login.innerHTML = "Log out";
});
button2.addEventListener("click", () => {
  setTimeout(() => {
    homepage.style.display = "none";
    form.style.display = "none";

    data.style.display = "block";

    table.style.display = "none";
    login.style.display = "block";
  }, 6000);
});
button3.addEventListener("click", () => {
  setTimeout(() => {
    homepage.style.display = "none";
    form.style.display = "none";

    data.style.display = "block";

    table.style.display = "none";
    login.style.display = "block";
  }, 500);
});

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  homepage.style.display = "none";
  form.style.display = "none";

  data.style.display = "block";

  table.style.display = "none";
}
submitbtn.addEventListener("click", () => {
  mapCanvas.style.display = "block";
  initMap();
  data.style.display = "none";
  mappage.style.display = "block";
  login.style.display = "block";
});

listbutton.addEventListener("click", () => {
  table.style.display = "block";
  mapCanvas.style.display = "none";
});
mapbutton.addEventListener("click", () => {
  table.style.display = "none";
  mapCanvas.style.display = "block";
});

function initMap() {
  var map;
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    mapTypeId: "roadmap",
  };

  // Display a map on the web page
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  map.setTilt(50);
  var longi = document.getElementById("longitude").value;
  var lati = document.getElementById("latitude").value;
  // Multiple markers location, latitude, and longitude
  var markers = [
    ["Khadki , Pune", 18.56639775919182, 73.83851296931093],
    ["Khadki Pune", 18.56448825647721, 73.83767986997688],
    ["Pimple Saudagar, Pune", 18.59941482022125, 73.79228913953241],
    ["KhadadiKhadadi, Pune", 18.564528299860857, 73.95034719553216],
    ["Hinjewadi, Pune", 18.579354440961446, 73.68963942242554],
    // ['Location, Pune', lati, longi],
  ];

  // Add multiple markers to map
  var infoWindow = new google.maps.InfoWindow(),
    marker,
    i;

  // Place each marker on the map
  for (i = 0; i < markers.length; i++) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
      position: position,
      map: map,
      title: markers[i][0],
    });

    // Add info window to marker
    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
        };
      })(marker, i)
    );

    // Center the map to fit all markers on the screen
    map.fitBounds(bounds);
  }

  // Set zoom level
  var boundsListener = google.maps.event.addListener(
    map,
    "bounds_changed",
    function (event) {
      this.setZoom(14);
      google.maps.event.removeListener(boundsListener);
    }
  );
}

window.initMap = initMap;
