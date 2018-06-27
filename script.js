function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
	document.getElementById("spanmenu").style.opacity = "0";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
	document.getElementById("spanmenu").style.opacity = "100";
}

function openCPE(){
	document.getElementById("HOME").style.display = "none";
	document.getElementById("CPE").style.display = "block";
	document.getElementById("CE").style.display = "none";
	document.getElementById("ECE").style.display = "none"
	document.getElementById("AE").style.display = "none";
	document.getElementById("EE").style.display = "none";
	document.getElementById("CHE").style.display = "none";
	document.getElementById("ABOUT").style.display = "none";	
}

function openCHE(){
	document.getElementById("HOME").style.display = "none";
	document.getElementById("CPE").style.display = "none";
	document.getElementById("CHE").style.display = "block";
	document.getElementById("CE").style.display = "none";
	document.getElementById("ECE").style.display = "none"
	document.getElementById("AE").style.display = "none";
	document.getElementById("EE").style.display = "none";
	document.getElementById("ABOUT").style.display = "none";
}

function openCE(){
	document.getElementById("HOME").style.display = "none";
	document.getElementById("CPE").style.display = "none";
	document.getElementById("CE").style.display = "block";
	document.getElementById("ECE").style.display = "none";
	document.getElementById("AE").style.display = "none";
	document.getElementById("EE").style.display = "none";
	document.getElementById("CHE").style.display = "none";
	document.getElementById("ABOUT").style.display = "none";
}

function openHOME(){
	document.getElementById("HOME").style.display = "block";
	document.getElementById("CPE").style.display = "none";
	document.getElementById("CE").style.display = "none";
	document.getElementById("ECE").style.display = "none"
	document.getElementById("AE").style.display = "none";
	document.getElementById("EE").style.display = "none";
	document.getElementById("CHE").style.display = "none";
	document.getElementById("ABOUT").style.display = "none";
}

function openECE(){
	document.getElementById("HOME").style.display = "none";
	document.getElementById("CPE").style.display = "none";
	document.getElementById("CE").style.display = "none";
	document.getElementById("ECE").style.display = "block";
	document.getElementById("AE").style.display = "none";
	document.getElementById("EE").style.display = "none";
	document.getElementById("CHE").style.display = "none";
	document.getElementById("ABOUT").style.display = "none";
}

function openAE(){
	document.getElementById("HOME").style.display = "none";
	document.getElementById("CPE").style.display = "none";
	document.getElementById("CE").style.display = "none";
	document.getElementById("ECE").style.display = "none";
	document.getElementById("AE").style.display = "block";
	document.getElementById("EE").style.display = "none";
	document.getElementById("CHE").style.display = "none";
	document.getElementById("ABOUT").style.display = "none";
}

function openEE(){
	document.getElementById("HOME").style.display = "none";
	document.getElementById("CPE").style.display = "none";
	document.getElementById("CE").style.display = "none";
	document.getElementById("ECE").style.display = "none";
	document.getElementById("AE").style.display = "none";
	document.getElementById("EE").style.display = "block";
	document.getElementById("CHE").style.display = "none";
	document.getElementById("ABOUT").style.display = "none";
}

function openABOUT(){
	document.getElementById("HOME").style.display = "none";
	document.getElementById("CPE").style.display = "none";
	document.getElementById("CE").style.display = "none";
	document.getElementById("ECE").style.display = "none";
	document.getElementById("AE").style.display = "none";
	document.getElementById("CHE").style.display = "none";
	document.getElementById("EE").style.display = "none";
	document.getElementById("ABOUT").style.display = "block";
}

