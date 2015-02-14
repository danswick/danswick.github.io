var totalAmount = 0;

document.getElementById('entry').onsubmit = addValue;


function addValue(e) {
	e.preventDefault();
	
	var newAmount = document.getElementById('newEntry').value;

	newAmount = parseFloat(newAmount);

	totalAmount += newAmount;

	document.getElementById('entries').innerHTML += '<li>' + dollarFormat(newAmount) + '</li>';
	document.getElementById('total').innerHTML = dollarFormat(totalAmount);
	document.getElementById('newEntry').value = '';
}


function dollarFormat(n) {
	return "$" + n.toFixed(2);
}
