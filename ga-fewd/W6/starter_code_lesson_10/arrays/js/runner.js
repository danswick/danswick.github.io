// Runner for the exercises
function check(num, answer) {
  if(answer) {
	$("body").append("<p>Question " + num + ": Correct!</p>");
  } else {
	$("body").append("<p style=\"color:red;\">Question " + num + ": Try Again.</p>");
  }
  $("body").append("<p>- - - - - - - - - - - - - - - - - - - - - -</p>")
}

function is_empty(obj) {
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  if (obj.length && obj.length > 0)    return false;
  for (var key in obj) {
	if (hasOwnProperty.call(obj, key))    return false;
  }
  return true;
}


check(1, q1 && q1.length == 3 && q1[0] == 'image1.jpeg' && q1[1] == 'image2.jpeg' && q1[2] == 'image3.jpeg');
check(2, q2 && q2 == 'image1.jpeg');
check(3, q3 && q3 == 3);
check(4, q3 && q4 == 'image3.jpeg');
check(5,$("img").eq(0).attr("src")=="image1.jpeg" && $("img").eq(1).attr("src")=="image3.jpeg");
$("body").append("<h3>Checking Complete!</h3>");