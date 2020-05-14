
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
			createCookie("points", "0");
		}
	}
	firebase.auth().onAuthStateChanged(newLoginHappened);
}


function awardPoints(amt){
	document.cookie = "points=" + (parseInt(getCookie("points"))+amt) + "; path=/;";
}

function createCookie(key, value){
	document.cookie = ""+key+"="+value+"; path=/;";
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
	document.getElementById("profile-icon").setAttribute("src","images/social-media.svg");
	document.getElementById("points-icon").setAttribute("src","images/shining.svg");
	document.getElementById("github-icon").setAttribute("src","images/white-github.svg");
	document.getElementById("linkedin-icon").setAttribute("src","images/linkedin.svg");
}

if(getCookie("background-color") == "background-color: white"){
	document.getElementById("ss").setAttribute("href","stylesheets/stylesheet.css");
	document.getElementById("profile-icon").setAttribute("src","images/social-media.svg");
	document.getElementById("points-icon").setAttribute("src","images/shining.svg");
	document.getElementById("github-icon").setAttribute("src","images/white-github.svg");
	document.getElementById("linkedin-icon").setAttribute("src","images/linkedin.svg");
}

if(getCookie("background-color") == "background-color: #ecdeff"){
	document.getElementById("ss").setAttribute("href","stylesheets/purple.css");
}


