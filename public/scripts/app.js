//Doesn't need a input. Create a textarea DOM element and return this element
function createDecision(data) {

  const $decision = $("<textarea>").attr("name", "decision").attr("placeholder", "Enter Option").addClass("decision");
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
  $("#form").on("submit", function (e) {
    e.preventDefault()
    var input = $('#form').serializeArray()
    let optionCheck = false;
    const email = input[0];
    const title = input[1]
    const description = input[2]

    for (let i = 3; i < input.length; i++) {
      console.log(input[i])
      if (!input[i].value) {
        optionCheck = false;
        //dislplay errors
      } else {
        optionCheck = true;
      }
      console.log(optionCheck)
    }
    if (optionCheck) {
      // run knex
    }
  });
});



