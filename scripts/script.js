
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
let db = firebase.database();
let s = firebase.storage().ref();

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
