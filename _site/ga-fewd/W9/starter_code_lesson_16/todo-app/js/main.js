// Feature requirements ----------------------------

//---- ADD ITEM ----//
$('#addNewTask').on('submit', function(e) {
	e.preventDefault();
	var userValue = $('#mainAddItem').val();
	var inputHTML = '<li><input type="checkbox" name="completed" value="done" class="done-check"><span class="item">' 
		+ userValue 
		+ ' </span><a href="#" class="edit">Edit</a><a href="#" class="remove">Remove</a><hr></li>';
	$('#taskList').append(inputHTML);
	$('#mainAddItem').val("");
	countUpdate();
});


//---- EDIT EXISTING ITEM ----//
// Listen for click on edit buttons 
$('#taskList').on('click', '.edit', function(e) {
	var oldItem = $(this).parent().find('.item').text();

	$(this).parent().html(
		'<form class="item-edit"><input type="text" name="item-name" class="item-text-box" id="newEditBox" value="'
		+ oldItem
		+ '"></form><hr>');
	$('#newEditBox').focus();
	countUpdate();
});
	
// Save user's form edit
$('#taskList').on('submit', '.item-edit', function(e) {
	e.preventDefault();
	var userValue = $(this).find('.item-text-box').val();
	var inputHTMLOpen = '<input type="checkbox" name="completed" value="done" class="done-check"><span class="item">' 
		+ userValue 
		+ ' </span><a href="#" class="edit">Edit</a><a href="#" class="remove">Remove</a><hr>';
	var inputHTMLDone = '<input type="checkbox" name="completed" value="done" class="done-check" checked><span class="item">' 
		+ userValue 
		+ ' </span><a href="#" class="edit">Edit</a><a href="#" class="remove">Remove</a><hr>';

	if($(this).parent().hasClass('completed')) {
		$(this).parent().html(inputHTMLDone);
	} else {
		$(this).parent().html(inputHTMLOpen);
	}
	countUpdate();
});
	

	

//---- REMOVE A TASK ----//
$('#taskList').on('click', '.remove', function(e) {
	$(this).parent().remove();
	countUpdate();
});




//---- MARK AS DONE ----//
$('#taskList').on('change', '.done-check', function() {
	$(this).parent().toggleClass('completed');
	countUpdate();
});
 



//---- CLEAR COMPLETED TASKS ----//
$('#clearCompleted').on('click', function(e){
	e.preventDefault();
	$('.completed').remove();
	countUpdate();
});



//---- CLEAR OUT LIST ----//
$('#deleteTasks').on('click', function(e){
	e.preventDefault();
	$('#taskList li').remove();
	countUpdate();
});



//---- UPDATE COUNT OF UNCOMPLETE TASKS ----//
function countUpdate() {
	var taskCount = $('#taskList li').length;
	var taskCompleted = $('#taskList .completed').length;
	var taskLeft = taskCount - taskCompleted;
	$('.count-wrapper .count').text(taskLeft + ' todos');
	if(taskLeft === 0) {
		$('.count-wrapper p').after('<span class="congrats"> Nice job!<span>');
	} else {
		$('.congrats').remove();
	}
}

countUpdate();



// Nice to have features----------------------------

// store list of tasks
// add a due date
// add a reminder
// postpone a task 
// tag another person on a task 
// search for an item 
// sort by due date, alpha 
// filter for open items
// Accounts / permissions levels (admin, editor, view, etc)
// share todo list with friends via social 
// add a label or color, priority level 
// log date that task is completed
// add sub-tasks 