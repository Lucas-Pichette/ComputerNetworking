
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

