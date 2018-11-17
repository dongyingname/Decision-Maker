//Doesn't need a input. Create a textarea DOM element and return this element
function createDecision(data) {

  const $decision = $("<textarea>").attr("name", "decision").attr("placeholder", "Enter Option").addClass("decision");
  return $decision;
}
//Take a DOM element and append it to a parent container #form
function append(textarea) {
  $("#decisions").append(textarea);
}

//When DOM elements are loaded, alert in console "document ready"
//When #add button is clicked, append a empty textarea to to the form
$(document).ready(function () {
  console.log("docunent ready");
  $("#add").on("click", function (event) {
    append(createDecision());
  });

  $("form").submit(function (event) {
    event.preventDefault();
    const email = $('#email').val();
    const title = $('#poll_title').val();
    const decisions = $('#decisions').find(".decision");
    console.log()
    if (!email){
      alert("Please Type In Email");
    }
    if (!title){
      alert("Please Type In Title");
    }
    let num = 0;
    
    // console.log("email", email);
    // console.log("title", title);
    // console.log("decision",decisions);
    const arr = decisions.split(" ");
    console.log(typeof(arr));
    console.log(arr);


    
  });
});








// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });
