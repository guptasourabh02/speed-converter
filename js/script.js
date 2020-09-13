function kphConverter(){
	document.getElementById("mph").value = document.getElementById("kph").value / 1.609344;
	document.getElementById("knots").value = document.getElementById("kph").value / 1.852;
	document.getElementById("mach").value = document.getElementById("kph").value / 1225.044;
	if(document.getElementById("kph").value == '') {
		document.getElementById("mph").value = '';
		document.getElementById("knots").value = '';
		document.getElementById("mach").value = '';
	}
}
function mphConverter(){
	document.getElementById("kph").value = document.getElementById("mph").value * 1.609344;
	document.getElementById("knots").value = document.getElementById("mph").value / 1.150779;
	document.getElementById("mach").value = document.getElementById("mph").value / 761.207;
	if(document.getElementById("mph").value == '') {
		document.getElementById("kph").value = '';
		document.getElementById("knots").value = '';
		document.getElementById("mach").value = '';
	}
}
function knotsConverter(){
	document.getElementById("kph").value = document.getElementById("knots").value * 1.852;
	document.getElementById("mph").value = document.getElementById("knots").value * 1.150779;
	document.getElementById("mach").value = document.getElementById("knots").value / 661.4708;
	if(document.getElementById("knots").value == '') {
		document.getElementById("mph").value = '';
		document.getElementById("kph").value = '';
		document.getElementById("mach").value = '';
	}
}
function machConverter(){
	document.getElementById("kph").value = document.getElementById("mach").value * 1225.044;
	document.getElementById("mph").value = document.getElementById("mach").value * 761.207;
	document.getElementById("knots").value = document.getElementById("mach").value * 661.4708;
	if(document.getElementById("mach").value == '') {
		document.getElementById("mph").value = '';
		document.getElementById("kph").value = '';
		document.getElementById("knots").value = '';
	}
}
function resetValues() {
	document.getElementById("speed-converter").reset();
}