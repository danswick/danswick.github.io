document.getElementById('celsius_to_farenheit').onclick = celsiusToFahrenheit;
document.getElementById('farenheit_to_celsius').onclick = fahrenheitToCelsius;

function fahrenheitToCelsius() {
	var userInput = document.getElementById('temperature').value;
    var celsius = (userInput - 32) / 1.8;
    document.getElementById('result').innerHTML = celsius + "\xb0C = " + userInput + "\xb0F";
};

function celsiusToFahrenheit() {
	var userInput = document.getElementById('temperature').value;
    var fahrenheit = 1.8 * userInput + 32;
    document.getElementById('result').innerHTML = userInput + "\xb0C = " + fahrenheit + "\xb0F";
};