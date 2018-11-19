"user strict";

//Create a textarea DOM element and return this element
function createDecision(data) {
  const $decision = $('<textarea>').attr('name', 'decision').attr('placeholder', 'Enter Option').addClass('decision');
  return $decision;
}
//Take a DOM element(object) and append it to a parent container #decisions
function append(textarea) {
  $("#decisions").append(textarea);
}

// Add click eventlistener on $('#delete'). When clicked remove last of
// $('#decisions')
function remove() {
  $('#delete').on('click', function (event) {
    if ($('.decision').serializeArray().length > 2) {
      $('#decisions').children().last().remove();
    }
  });
}

// Add click eventlistener on $('#add'). When clicked call function append,
// which will add an extra textarea element
function add() {
  $("#add").on("click", function (event) {
    append(createDecision());
  });
}

// Add click eventlistener on $('#form'). When submit error messages will
// pop up if the required text field has no input
function submit() {
  $("#form").on("submit", function (e) {
    $('#email, #poll_title, .decision').each(function () {
      if ($(this).val() == '' || !/[a-zA-Z0-9]/.test($(this).val()) ) {
        e.preventDefault();
        $('.main_body').css("margin-top", "10px");
        $('.error').css("display", "inline-block");
        $('.error').html("Please enter in email, title, and atleast 2 options that don't contain special characters");
        $('.error').fadeIn();
      }
    });
  });
}

// When the DOM nodes are loaded attach event listeners to DOM elements
$(document).ready(function () {

  add();
  remove();
  submit();
});
