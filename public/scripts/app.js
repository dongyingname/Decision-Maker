//Doesn't need a input. Create a textarea DOM element and return this element
function createDecision(data) {

  const $decision = $('<textarea>').attr('name', 'decision').attr('placeholder', 'Enter Option').addClass('decision');
  return $decision;
}
//Take a DOM element and append it to a parent container #form
function append(textarea) {
  $("#decisions").append(textarea);
}

//When #add button is clicked, append a empty textarea to to the form
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
    $('#email, #poll_title, .decision').each(function() {
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
