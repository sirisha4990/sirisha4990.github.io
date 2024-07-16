console.log("basicMap.js");

// CPCC Coordinates: 35.2176665 N, 80.831473 W ->35.2176665, -80.831473

let map = L.map("map",{
  center:[35.2176665, -80.831473],
  zoom: 16
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([35.2176665, -80.831473], {
  title:"What's up from CPCC!"
}).bindPopup(`
<center>
<h2>Hello from CPCC!</h2>
<hr>
<a href="https://www.cpcc.edu"><Click Here to Visit CPCC's Website</a><br>
<iframe width="280" height="160" src="https://www.youtube.com/embed/nKrZk6cOcEU?si=LChpk8VL5ZQkoD4-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</center>
`)
	.addTo(map);
