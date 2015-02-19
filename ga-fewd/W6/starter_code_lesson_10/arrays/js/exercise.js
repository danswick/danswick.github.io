/**
 * Javascript Exercise: Data Types
 * Most of your answers should be stored in variables called q1, q2 etc.. and the variables will be printed to the console.
 
 	(i.e) console.log("Question 1" + q1)
 */

/**
 * Question 1
 * Create an array of image sources and store it to the variable q1. Use image1.jpeg, image2.jpeg, and image3.jpeg as the array values.
 */

var q1 = ['image1.jpeg', 'image2.jpeg', 'image3.jpeg'];

/**
 * Question 2
 * Using the array from Question 1, store the first element of the array in variable q2.
 */

var q2 = q1[0];

/**
 * Question 3
 * Get the length of the first array (number of elements in the array) and store it in variable q3
 */

var q3 = q1.length;

/**
 * Question 4
 *  Using the array from Question 1, store the last element of the array in variable q4. Hint: How can we get the number of elements in the array?
 */

var q4 = q1[q1.length-1];

/**
 * Question 5
 *  Using the variables from questions 2 and 4, write code that would change the src of the first image on a web page to the src stored in q2 and the last image on a web page to the src stored in q4. For extra credit, troubleshoot why the images still don't show up.
 */

$("img").first().attr('src', "images/" + q2);
$("img").last().attr('src', "images/" + q4);