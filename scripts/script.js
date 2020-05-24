function isUserDummi(){
	var radios = document.getElementsByName('fry-answer');

	for (var i = 0, length = radios.length; i < length; i++) {
	  if (radios[i].checked) {
	    // do whatever you want with the checked radio
	    if(radios[i].value == "1"){
	    	alert("Good. You're sane.");
	    } else if(radios[i].value == "0"){
	    	alert("MONSTER")
	    }

	    // only one radio can be logically checked, don't check the rest
	    break;
	  }
	}
	return false;
}


if(document.getElementById("html-aboutme")){
	var slideIndex = 1;
	showSlides(slideIndex);

	// Next/previous controls
	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	// Thumbnail image controls
	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("mySlides");
	  var dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {slideIndex = 1}
	  if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	      slides[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
	      dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex-1].style.display = "block";
	  dots[slideIndex-1].className += " active";
	}
}



// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	var scrolled = (winScroll / height) * 100;
	if(document.getElementById("myBar")){
		document.getElementById("myBar").style.width = scrolled + "%";
	}
}




// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyBIrORQafmq65UfCANcQ4keEGv140m7Ufw",
	authDomain: "computernetworking-5f028.firebaseapp.com",
	databaseURL: "https://computernetworking-5f028.firebaseio.com",
	projectId: "computernetworking-5f028",
	storageBucket: "computernetworking-5f028.appspot.com",
	messagingSenderId: "90100809260",
	appId: "1:90100809260:web:cb5158022a37d420879b89",
	measurementId: "G-GPC2XRKC7E",
	databaseURL: "https://computernetworking-5f028.firebaseio.com"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

window.onload = function(){
	function newLoginHappened(user){
		if(user){
			console.log("user exists");
		}else{
			let provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithRedirect(provider);
			if(parseInt(getCookie("points")) <= 0){
				createCookie("points", "0");
			}
		}
		if(document.getElementById("name")){
			document.getElementById("name").innerHTML = "For, " + user.displayName;
		}
	}
	firebase.auth().onAuthStateChanged(newLoginHappened);
}


function awardPoints(amt){
	document.cookie = "points=" + (parseInt(getCookie("points"))+amt) + "; path=/;  Max-Age=2147483647;";
}

function createCookie(key, value){
	document.cookie = ""+key+"="+value+"; path=/; Max-Age=2147483647;";
}
function getCookie(name){
	let nameEQ = name + "=";
	let ca = document.cookie.split(';');
	for(var i=0; i < ca.length; i++){
		let c = ca[i];
		while(c.charAt(0)==' ') c = c.substring(1,c.length);
		if(c.indexOf(nameEQ)==0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

document.getElementById("replaceMyInner").innerHTML = getCookie("points");



function httpPost(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", theUrl, true ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

if(getCookie("points") < 0){
	console.log("Yo");
	httpPost("how-bro.html");
}




// Hiding sections until adequate knowledge is obtained.
if(document.getElementById("CS372")){
	if(getCookie("points") < 5){
		document.getElementById("Overview of Networking").setAttribute("hidden", "true");
		document.getElementById("ON").innerHTML = "Locked until 5 Points";

		document.getElementById("Circuit Switching and Packet Switching").setAttribute("hidden", "true");
		document.getElementById("CSPS").innerHTML = "Locked until 10 Points";

		document.getElementById("Packet Switched vs. Circuit Switched Networks").setAttribute("hidden", "true");
		document.getElementById("PSCSN").innerHTML = "Locked until 15 Points";

		document.getElementById("Network Structure and Performance").setAttribute("hidden", "true");
		document.getElementById("NSP").innerHTML = "Locked until 20 Points";

		document.getElementById("Access Networks and Physical Media").setAttribute("hidden", "true");
		document.getElementById("ANPM").innerHTML = "Locked until 25 Points";
	} else if(getCookie("points") < 10){
		document.getElementById("Circuit Switching and Packet Switching").setAttribute("hidden", "true");
		document.getElementById("CSPS").innerHTML = "Locked until 10 Points";

		document.getElementById("Packet Switched vs. Circuit Switched Networks").setAttribute("hidden", "true");
		document.getElementById("PSCSN").innerHTML = "Locked until 15 Points";

		document.getElementById("Network Structure and Performance").setAttribute("hidden", "true");
		document.getElementById("NSP").innerHTML = "Locked until 20 Points";

		document.getElementById("Access Networks and Physical Media").setAttribute("hidden", "true");
		document.getElementById("ANPM").innerHTML = "Locked until 25 Points";
	} else if(getCookie("points") < 15){
		document.getElementById("Packet Switched vs. Circuit Switched Networks").setAttribute("hidden", "true");
		document.getElementById("PSCSN").innerHTML = "Locked until 15 Points";

		document.getElementById("Network Structure and Performance").setAttribute("hidden", "true");
		document.getElementById("NSP").innerHTML = "Locked until 20 Points";

		document.getElementById("Access Networks and Physical Media").setAttribute("hidden", "true");
		document.getElementById("ANPM").innerHTML = "Locked until 25 Points";
	} else if(getCookie("points") < 20){
		document.getElementById("Network Structure and Performance").setAttribute("hidden", "true");
		document.getElementById("NSP").innerHTML = "Locked until 20 Points";

		document.getElementById("Access Networks and Physical Media").setAttribute("hidden", "true");
		document.getElementById("ANPM").innerHTML = "Locked until 25 Points";
	} else if(getCookie("points") < 25){
		document.getElementById("Access Networks and Physical Media").setAttribute("hidden", "true");
		document.getElementById("ANPM").innerHTML = "Locked until 25 Points";
	}
}


// Customization Preferences
function setPurple(){
	createCookie("background-color", "background-color: #ecdeff;");
	location.reload();
}

function setWhite(){
	createCookie("background-color", "background-color: white;");
	location.reload();
}

function setBlack(){
	createCookie("background-color", "background-color: #525151;");

	location.reload();
}

document.getElementById("bg").setAttribute("style", getCookie("background-color"));


if(getCookie("background-color") == "background-color: #525151"){
	document.getElementById("ss").setAttribute("href","stylesheets/dark.css");
	//document.getElementById("profile-icon").setAttribute("src","images/social-media.svg");
	//document.getElementById("points-icon").setAttribute("src","images/shining.svg");
	//document.getElementById("github-icon").setAttribute("src","images/white-github.svg");
	//document.getElementById("linkedin-icon").setAttribute("src","images/linkedin.svg");
}

if(getCookie("background-color") == "background-color: white"){
	document.getElementById("ss").setAttribute("href","stylesheets/stylesheet.css");
	//document.getElementById("profile-icon").setAttribute("src","images/social-media.svg");
	//document.getElementById("points-icon").setAttribute("src","images/shining.svg");
	//document.getElementById("github-icon").setAttribute("src","images/white-github.svg");
	//document.getElementById("linkedin-icon").setAttribute("src","images/linkedin.svg");
}

if(getCookie("background-color") == "background-color: #ecdeff"){
	document.getElementById("ss").setAttribute("href","stylesheets/purple.css");
}


if(document.getElementById("CS372")){
	// automatically hide correctly answered questions
	if(getCookie("s1-q1") == "1"){
		document.getElementById("s1-q1-f").hidden = true;
		if(getCookie("s1-q2") != "1"){
			document.getElementById("s1-q2-f").hidden = false;
		} else if(getCookie("s1-q3") != "1"){
			document.getElementById("s1-q3-f").hidden = false;
		} else if(getCookie("s1-q4") != "1"){
			document.getElementById("s1-q4-f").hidden = false;
		} else if(getCookie("s1-q5") != "1"){
			document.getElementById("s1-q5-f").hidden = false;
		} else if(getCookie("s1-q6") != "1"){
			document.getElementById("s1-q6-f").hidden = false;
		} else{
			document.getElementById("end-cp-msg").hidden = false;
		}
	}

	if(getCookie("s2-q1") == "1"){
		document.getElementById("s2-q1-f").hidden = true;
		if(getCookie("s2-q2") != "1"){
			document.getElementById("s2-q2-f").hidden = false;
		} else if(getCookie("s2-q3") != "1"){
			document.getElementById("s2-q3-f").hidden = false;
		} else if(getCookie("s2-q4") != "1"){
			document.getElementById("s2-q4-f").hidden = false;
		} else if(getCookie("s2-q5") != "1"){
			document.getElementById("s2-q5-f").hidden = false;
		} else if(getCookie("s2-q6") != "1"){
			document.getElementById("s2-q6-f").hidden = false;
		} else{
			document.getElementById("end-cp-msg").hidden = false;
		}
	}





	// Change display message at end of section 1
	if(parseInt(getCookie("s1-points")) == 6){
		document.getElementById("s1-end-cp-msg").innerHTML = "Perfect!";
	} else if(parseInt(getCookie("s1-points")) == 5){
		document.getElementById("s1-end-cp-msg").innerHTML = "Awesome Job!";
	} else if(parseInt(getCookie("s1-points")) == 4){
		document.getElementById("s1-end-cp-msg").innerHTML = "Good Job!";
	} else if(parseInt(getCookie("s1-points")) <= 3){
		document.getElementById("s1-end-cp-msg").innerHTML = "";
	}

	if(parseInt(getCookie("s2-points")) == 3){
		document.getElementById("s2-end-cp-msg").innerHTML = "Perfect!";
	} else if(parseInt(getCookie("s2-points")) == 2){
		document.getElementById("s2-end-cp-msg").innerHTML = "Awesome Job!";
	} else if(parseInt(getCookie("s2-points")) == 1){
		document.getElementById("s2-end-cp-msg").innerHTML = "Good Job!";
	} else if(parseInt(getCookie("s2-points")) <= 0){
		document.getElementById("s2-end-cp-msg").innerHTML = "";
	}

	if(parseInt(getCookie("s3-points")) == 5){
		document.getElementById("s3-end-cp-msg").innerHTML = "Perfect!";
	} else if(parseInt(getCookie("s3-points")) == 4){
		document.getElementById("s3-end-cp-msg").innerHTML = "Awesome Job!";
	} else if(parseInt(getCookie("s3-points")) == 3){
		document.getElementById("s3-end-cp-msg").innerHTML = "Good Job!";
	} else if(parseInt(getCookie("s3-points")) <= 2){
		document.getElementById("s3-end-cp-msg").innerHTML = "";
	}





	// submitting answer to question logic (just mc logic in rn)
	document.getElementById("s1-q1-f").onsubmit=function(){
		let points = parseInt(document.querySelector('input[name = "s1-q1-input"]:checked').value);
		let current_score = parseInt(document.getElementById("section1-score").innerHTML);
		let new_score = points+current_score;
		document.getElementById("section1-score").innerHTML = new_score;
		awardPoints(1);

		document.getElementById("s1-q1-f").hidden = true;
		if(points){
			createCookie("s1-q1","1");
			createCookie( "s1-points",1);
		}
		document.getElementById("s1-q2-f").hidden = false;

		return false;
	}

	document.getElementById("s1-q2-f").onsubmit=function(){
		let points = parseInt(document.querySelector('input[name = "s1-q2-input"]:checked').value);
		let current_score = parseInt(document.getElementById("section1-score").innerHTML);
		let new_score = points+current_score;
		document.getElementById("section1-score").innerHTML = new_score;
		awardPoints(1);

		document.getElementById("s1-q2-f").hidden = true;
		if(points){
			createCookie("s1-q2","1");
			createCookie( "s1-points", (parseInt(getCookie("s1-points"))+1) );
		}
		document.getElementById("s1-q3-f").hidden = false;

		return false;
	}

	document.getElementById("s1-q3-f").onsubmit=function(){
		let points = parseInt(document.querySelector('input[name = "s1-q3-input"]:checked').value);
		let current_score = parseInt(document.getElementById("section1-score").innerHTML);
		let new_score = points+current_score;
		console.log(new_score);
		document.getElementById("section1-score").innerHTML = new_score;
		awardPoints(1);

		document.getElementById("s1-q3-f").hidden = true;
		if(points){
			createCookie("s1-q3","1");
			createCookie( "s1-points", (parseInt(getCookie("s1-points"))+1) );
		}
		document.getElementById("s1-q4-f").hidden = false;

		return false;
	}

	document.getElementById("s1-q4-f").onsubmit=function(){
		let points = parseInt(document.querySelector('input[name = "s1-q4-input"]:checked').value);
		let current_score = parseInt(document.getElementById("section1-score").innerHTML);
		let new_score = points+current_score;
		console.log(new_score);
		document.getElementById("section1-score").innerHTML = new_score;
		awardPoints(1);

		document.getElementById("s1-q4-f").hidden = true;
		if(points){
			createCookie("s1-q4","1");
			createCookie( "s1-points", (parseInt(getCookie("s1-points"))+1) );
		}
		document.getElementById("s1-q5-f").hidden = false;

		return false;
	}

	document.getElementById("s1-q5-f").onsubmit=function(){
		let points = parseInt(document.querySelector('input[name = "s1-q5-input"]:checked').value);
		let current_score = parseInt(document.getElementById("section1-score").innerHTML);
		let new_score = points+current_score;
		document.getElementById("section1-score").innerHTML = new_score;
		awardPoints(1);

		document.getElementById("s1-q5-f").hidden = true;
		if(points){
			createCookie("s1-q5","1");
			createCookie( "s1-points", (parseInt(getCookie("s1-points"))+1) );
		}
		document.getElementById("s1-q6-f").hidden = false;

		return false;
	}

	document.getElementById("s1-q6-f").onsubmit=function(){
		let points = parseInt(document.querySelector('input[name = "s1-q6-input"]:checked').value);
		let current_score = parseInt(document.getElementById("section1-score").innerHTML);
		let new_score = points+current_score;
		document.getElementById("section1-score").innerHTML = new_score;
		awardPoints(1);

		document.getElementById("s1-q6-f").hidden = true;
		if(points){
			createCookie("s1-q6","1");
			createCookie( "s1-points", (parseInt(getCookie("s1-points"))+1) );
		}
		document.getElementById("end-cp-msg").hidden = false;

		return false;
	}

	document.getElementById("section1-score").innerHTML = getCookie("s1-points")





	// Refresh button logic
	document.getElementById("s1-f-refresh").onsubmit=function(){
		if(getCookie("s1-q1") == "1"){
			awardPoints(-1);
			createCookie("s1-q1", "0");
			createCookie( "s1-points", (parseInt(getCookie("s1-points"))-1) );
		}
		if(getCookie("s1-q2") == "1"){
			awardPoints(-1);
			createCookie("s1-q2", "0");
			createCookie( "s1-points", (parseInt(getCookie("s1-points"))-1) );
		}
		if(getCookie("s1-q3") == "1"){
			awardPoints(-1);
			createCookie("s1-q3", "0");
			createCookie( "s1-points", (parseInt(getCookie("s1-points"))-1) );
		}
		if(getCookie("s1-q4") == "1"){
			awardPoints(-1);
			createCookie("s1-q4", "0");
			createCookie( "s1-points", (parseInt(getCookie("s1-points"))-1) );
		}
		if(getCookie("s1-q5") == "1"){
			awardPoints(-1);
			createCookie("s1-q5", "0");
			createCookie( "s1-points", (parseInt(getCookie("s1-points"))-1) );
		}
		if(getCookie("s1-q6") == "1"){
			awardPoints(-1);
			createCookie("s1-q6", "0");
			createCookie( "s1-points", (parseInt(getCookie("s1-points"))-1) );
		}
	}
}