//Create a textarea DOM element and return this element
function createDecision(data) {
  const $decision = $('<textarea>').attr('name', 'decision').attr('placeholder', 'Enter Option').addClass('decision');
  return $decision;
}
//Take a DOM element(object) and append it to a parent container #decisions
function append(textarea) {
  $("#decisions").append(textarea);
}

// When the DOM nodes are loaded attach event listeners to DOM elements
$(document).ready(function () {

  $("#add").on("click", function (event) {
    
    append(createDecision());
  });

  $('#delete').on('click', function (event) {
    if ($('.decision').serializeArray().length > 2) {
      $('#decisions').children().last().remove();
    }
  });
  
  $("#form").on("submit", function (e) {
    $('#email, #poll_title, .decision').each(function () {
      if ($(this).val() == '') {
        e.preventDefault();
        $('.main_body').css("margin-top", "10px");
        $('.error').css("display", "inline-block");
        $('.error').html("Please enter in email, title, and atleast 2 options");
        $('.error').fadeIn();
      }
    });
  });
});
