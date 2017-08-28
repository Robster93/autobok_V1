function responsiveNavAdjuster() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function openTab(tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    /*tablinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }*/



    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    //evt.currentTarget.className += " active";
} 

var slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  /*
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }*/
  slides[slideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
} 


var slideIndex2 = 0;

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2> slides.length) {slideIndex2 = 1}
    slides[slideIndex2-1].style.display = "block";
    setTimeout(showSlides2, 5000); // Change image every 5 seconds
} 

function loadJSON(callback) {
	//document.getElementById("carContainer").innerHTML = "Hello";
	
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.overrideMimeType("application/json");
	
	xmlhttp.open("GET", "data.json", true);
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
				callback(xmlhttp.responseText);
			}
		};
				
	xmlhttp.send(null);
}

function init() {
	loadJSON(function(response) {
		var actual_JSON = JSON.parse(response);

		var carsArray;

		for (i = 0; actual_JSON.cars.length - 1; i++) {
			//carsArray.push(new car(actual_JSON.cars[i].name, actual_JSON.cars[i].builtYear));
			var newCar = new car(actual_JSON.cars[i].name, actual_JSON.cars[i].builtYear);
            //document.getElementById("Angebote").innerHTML += '<h2>' + newCar.title + '</h2>' + '<p>' + newCar.builtYear + '</p>';
            document.getElementById("Angebote").innerHTML += '<div class="teamContainer">' +
                '<table style="width: 100%">' +
                    '<tr>' +
                        '<th style="width: 20%; height: 50%; padding: 1em" ><img src="Images/testbild.jpeg" style="width: 80%"  ></th>' +
                        '<td>' +
                            '<h3>' + newCar.title +'</h3>' +
                            '<p>Baujahr: ' + newCar.builtYear + ' Preis: <span style="color:red">3000,00 €</span></p>' +                            
                            '<p><ins>Details:</ins></p> ' +
                            '<p style="width: 80%">Sitzheizung, Rückfahrkamera ...</p>' +
                        '</td>' +
                    '</tr>' +
                '</table>' +
            '</div>'
		}


		//alert("It's a " + actual_JSON.name);
	});
}

function car(title, builtYear) {
	this.title = title;
	this.builtYear = builtYear;
}


// -------------- Login modal -----------
function showLoginModal() {
    document.getElementById("loginModal").style.display = "block";

    var button = document.getElementById("submitButton");
        
}

function hideLoginModal() {
    document.getElementById("loginModal").style.display = "none";
}

function login() {
    var uname = document.getElementById('uname').value;
    var pw = document.getElementById('psw').value;
    
    window.location.href = "editorBereich.html";
    //document.getElementById("loginModal").style.display = "none";

    

}

//---------------------------------------