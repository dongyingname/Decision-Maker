
  function createDecision(data) {

    const $decision = $("<textarea>").attr("name", "decision").attr("placeholder", "decision").addClass("decision");
    return $decision;
  }

  function append(textarea) {
    $("#decisions").append(textarea);
  }
  $(document).ready(function () {
    console.log("docunent ready");
    $("#add").on("click", function (event) {
      append(createDecision());
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
