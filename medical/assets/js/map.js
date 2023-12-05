/*
Author       : Dreamguys
Template Name: Doccure - Bootstrap Template
Version      : 1.3
*/

google.maps.visualRefresh = true;
var slider, infowindow = null;
var bounds = new google.maps.LatLngBounds();
var map, current = 0;
var locations =[{
	"id":01,
	"doc_name":"Dr. Ruby Perrin",
	"speciality":"MDS - Periodontology and Oral Implantology, BDS",
	"address":"Florida, USA",
	"next_available":"Available on Fri, 22 Mar",
	"amount":"$300 - $1000",
	"lat":53.470692,
	"lng":-2.220328,
	"icons":"default",
	"profile_link":"profile.html",
	"total_review":"17",
	"image":'assets/img/doctors/doctor-01.jpg'
	}, {
		
	"id":02,
	"doc_name":"Dr. Darren Elder",
	"speciality":"BDS, MDS - Oral & Maxillofacial Surgery",
	"address":"Newyork, USA",
	"next_available":"Available on Fri, 23 Mar",
	"amount":"$50 - $300",
	"lat":53.469189,
	"lng":-2.199262,
	"icons":"default",
	"profile_link":"profile.html",
	"total_review":"35",
	"image":'assets/img/doctors/doctor-02.jpg'
	}, {
	"id":03,
	"doc_name":"Dr. Deborah Angel",
	"speciality":"MBBS, MD - General Medicine, DNB - Cardiology",
	"address":"Georgia, USA",
	"next_available":"Available on Fri, 24 Mar",
	"amount":"$100 - $400",
	"lat":53.468665,
	"lng":-2.189269,
	"icons":"default",
	"profile_link":"profile.html",
	"total_review":"27",
	"image":'assets/img/doctors/doctor-03.jpg'
	}, {
	"id":04,
	"doc_name":"Dr. Sofia Brient",
	"speciality":"MBBS, MS - General Surgery, MCh - Urology",
	"address":"Louisiana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$150 - $250",
	"lat":53.463894,
	"lng":-2.177880,
	"icons":"default",
	"profile_link":"profile.html",
	"total_review":"4",
	"image":'assets/img/doctors/doctor-04.jpg'
	}, {
	"id":05,
	"doc_name":"Dr. Marvin Campbell",
	"speciality":"MBBS, MD - Ophthalmology, DNB - Ophthalmology",
	"address":"Michigan, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$50 - $700",
	"lat":53.466359,
	"lng":-2.213314,
	"icons":"default",
	"profile_link":"profile.html",
	"total_review":"66",
	"image":'assets/img/doctors/doctor-05.jpg'
	}, {
	"id":06,
	"doc_name":"Dr. Katharine Berthold",
	"speciality":"MS - Orthopaedics, MBBS, M.Ch - Orthopaedics",
	"address":"Texas, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $500",
	"lat":53.463906,
	"lng":-2.213271,
	"icons":"default",
	"profile_link":"profile.html",
	"total_review":"52",
	"image":'assets/img/doctors/doctor-06.jpg'
	}, {
	"id":07,
	"doc_name":"Dr. Linda Tobin",
	"speciality":"MBBS, MD - General Medicine, DM - Neurology",
	"address":"Kansas, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $1000",
	"lat":53.461974,
	"lng":-2.210661,
	"icons":"default",
	"profile_link":"profile.html",
	"total_review":"43",
	"image":'assets/img/doctors/doctor-07.jpg'
	}, {
	"id":08,
	"doc_name":"Dr. Paul Richard",
	"speciality":"MDS - Periodontology and Oral Implantology, BDS",
	"address":"California, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$100 - $400",
	"lat":53.458785,
	"lng":-2.188532,
	"icons":"default",
	"profile_link":"profile.html",
	"total_review":"49",
	"image":'assets/img/doctors/doctor-08.jpg'
	}, {
	"id":09,
	"doc_name":"Dr. John Gibbs",
	"speciality":"MBBS, MD - Dermatology , Venereology & Lepros",
	"address":"Oklahoma, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$500 - $2500",
	"lat":53.4558571,
	"lng":-2.1950372,
	"icons":"default",
	"profile_link":"profile.html",
	"total_review":"112",
	"image":'assets/img/doctors/doctor-09.jpg'
	}, {
	"id":10,
	"doc_name":"Dr. Olga Barlow",
	"speciality":"MDS - Periodontology and Oral Implantology, BDS",
	"address":"Montana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$75 - $250",
	"lat":53.458850,
	"lng":-2.194549,
	"icons":"default",
	"profile_link":"profile.html",
	"total_review":"65",
	"image":'assets/img/doctors/doctor-10.jpg'
	}, {
	"id":11,
	"doc_name":"Dr. Julia Washington",
	"speciality":"MBBS, MD - General Medicine, DM - Endocrinology",
	"address":"Oklahoma, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$275 - $450",
	"lat":53.461733,
	"lng":-2.194502,
	"icons":"default",
	"profile_link":"profile.html",
	"total_review":"5",
	"image":'assets/img/doctors/doctor-11.jpg'
	}, {
	"id":12,
	"doc_name":"Dr. Shaun Aponte",
	"speciality":"MBBS, MS - ENT, Diploma in Otorhinolaryngology (DLO)",
	"address":"Indiana, USA",
	"next_available":"Available on Fri, 25 Mar",
	"amount":"$150 - $350",
	"lat":53.460548,
	"lng":-2.190956,
	"icons":"default",
	"profile_link":"profile.html",
	"total_review":"5",
	"image":'assets/img/doctors/doctor-12.jpg'
	}
	];

var icons = {
  'default':'assets/img/marker.png'
};

function show() {
    infowindow.close();
  if (!map.slide) {
    return;
  }
    var next, marker;
    if (locations.length == 0 ) {
       return
     } else if (locations.length == 1 ) {
       next = 0;
     }
    if (locations.length >1) {
      do {
        next = Math.floor (Math.random()*locations.length);
      } while (next == current)
    }
    current = next;
    marker = locations[next];
    setInfo(marker);
    infowindow.open(map, marker);
}

function initialize() {
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        zoom: 14,
		center: new google.maps.LatLng(53.470692, -2.220328),
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
		
    };
  
     map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.slide = true;

    setMarkers(map, locations);
    infowindow = new google.maps.InfoWindow({
        content: "loading..."
    });
    google.maps.event.addListener(infowindow, 'closeclick',function(){
       infowindow.close();
    });
    slider = window.setTimeout(show, 3000);
}

function setInfo(marker) {
  var content = 
'<div class="profile-widget" style="width: 100%; display: inline-block;">'+
	'<div class="doc-img">'+
		'<a href="' + marker.profile_link + '" tabindex="0" target="_blank">'+
			'<img class="img-fluid" alt="' + marker.doc_name + '" src="' + marker.image + '">'+
		'</a>'+
	'</div>'+
	'<div class="pro-content">'+
		'<h3 class="title">'+
			'<a href="' + marker.profile_link + '" tabindex="0">' + marker.doc_name + '</a>'+
			'<i class="fas fa-check-circle verified"></i>'+
		'</h3>'+
		'<p class="speciality">' + marker.speciality + '</p>'+
		'<div class="rating">'+
			'<i class="fas fa-star filled"></i>'+
			'<i class="fas fa-star filled"></i>'+
			'<i class="fas fa-star filled"></i>'+
			'<i class="fas fa-star filled"></i>'+
			'<i class="fas fa-star"></i>'+
			'<span class="d-inline-block average-rating"> (' + marker.total_review + ')</span>'+
		'</div>'+
		'<ul class="available-info">'+
			'<li><i class="fas fa-map-marker-alt"></i> ' + marker.address + ' </li>'+
			'<li><i class="far fa-clock"></i> ' + marker.next_available + '</li>'+
			'<li><i class="far fa-money-bill-alt"></i> ' + marker.amount + '</li>'+
		'</ul>'+
	'</div>'+
'</div>';
  infowindow.setContent(content);
}

function setMarkers(map, markers) {
  for (var i = 0; i < markers.length; i++) {
    var item = markers[i];
    var latlng = new google.maps.LatLng(item.lat, item.lng);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        doc_name: item.doc_name,
        address: item.address,
        speciality: item.speciality,
        next_available: item.next_available,
        amount: item.amount,
        profile_link: item.profile_link,
        total_review: item.total_review,
        animation: google.maps.Animation.DROP,
        icon: icons[item.icons],
        image: item.image
        });
        bounds.extend(marker.position);
        markers[i] = marker;
        google.maps.event.addListener(marker, "click", function () {
            setInfo(this);
            infowindow.open(map, this);
            window.clearTimeout(slider);
        });
    }
    map.fitBounds(bounds);
  google.maps.event.addListener(map, 'zoom_changed', function() {
    if (map.zoom > 16) map.slide = false;
  });
}

google.maps.event.addDomListener(window, 'load', initialize);