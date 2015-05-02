var result = 0;
var resultMessage = "result not found";


// ----------------------------------------------------------
// show live changes to the input slider here!
// ----------------------------------------------------------

document.getElementById('inputTemp').addEventListener("mousemove", inputBoxUpdate);

function inputBoxUpdate() {
	document.getElementById('inputBox').innerHTML = document.getElementById('inputTemp').value;
}


// ----------------------------------------------------------
// conversion functions 
// ----------------------------------------------------------

function convertF() {
  result = (inputTemp - 32)  * ( 5 / 9 );
} 

function convertC() {
  result = inputTemp * ( 9 / 5 ) + 32;
}

document.getElementById('submit').onclick = convertIt;

function convertIt() {
  if(document.getElementById('choice').value === "f2c") {
    inputTemp = parseInt(document.getElementById('inputTemp').value, 10); // this must be inside the function in order to re-check the value in 'inputTemp'
    convertF();
    result = Math.round(result * 10) / 10;
    resultMessage = "You entered: " + inputTemp.toString() + " degrees Fahrenheit." + "<br><br>" + " Converted to Celsius, your temperature is: " + result.toString() + " degrees.";
  }
  else if(document.getElementById('choice').value === "c2f") {
  	inputTemp = parseInt(document.getElementById('inputTemp').value, 10); 
  	convertC();
  	result = Math.round(result * 10) / 10;
    resultMessage = "You entered: " + inputTemp.toString() + " degrees Celsius." + "<br><br>" + " Converted to Fahrenheit, your temperature is: " + result.toString() + " degrees.";
  }
  document.getElementById('result').innerHTML = resultMessage; // if this is outside of the function, resultMesage will not update on click.
  backgroundColor(); 
}


// ----------------------------------------------------------
// dynamically change the background color 
// ----------------------------------------------------------

function backgroundColor() {
	if(document.getElementById('choice').value === "f2c") {
		if(inputTemp < 32) {
			document.body.style.backgroundColor = "#3288bd";
			document.body.style.color = "#fff";
		}
		else if(inputTemp < 50) {
			document.body.style.backgroundColor = "#99d594";
			document.body.style.color = "#111";
		}
		else if(inputTemp < 70) {
			document.body.style.backgroundColor = "#e6f598";
			document.body.style.color = "#111";
		}
		else if(inputTemp < 90) {
			document.body.style.backgroundColor = "#ffffbf";
			document.body.style.color = "#111";
		}
		else if(inputTemp < 120) {
			document.body.style.backgroundColor = "#fee08b";
			document.body.style.color = "#111";
		}
		else if(inputTemp < 170) {
			document.body.style.backgroundColor = "#fc8d59";
			document.body.style.color = "#fff";
		}
		else {
			document.body.style.backgroundColor = "#d53e4f";
			document.body.style.color = "#fff";
		}
	}
	else {
		if(inputTemp < 10) {
			document.body.style.backgroundColor = "#3288bd";
			document.body.style.color = "#fff";
		}
		else if(inputTemp < 20) {
			document.body.style.backgroundColor = "#99d594";
			document.body.style.color = "#111";
		}
		else if(inputTemp < 40) {
			document.body.style.backgroundColor = "#e6f598";
			document.body.style.color = "#111";
		}
		else if(inputTemp < 60) {
			document.body.style.backgroundColor = "#ffffbf";
			document.body.style.color = "#111";
		}
		else if(inputTemp < 80) {
			document.body.style.backgroundColor = "#fee08b";
			document.body.style.color = "#111";
		}
		else if(inputTemp < 100) {
			document.body.style.backgroundColor = "#fc8d59";
			document.body.style.color = "#fff";
		}
		else {
			document.body.style.backgroundColor = "#d53e4f";
			document.body.style.color = "#fff";
		}
	}
}