"use strict"

$(document).ready(function () {
  const foo = document.getElementById("dataItems");
  Sortable.create(foo, {
    group: 'foo',
    animation: 100,
    chosenClass: "sortable-chosen"
  });

  const url = window.location.pathname.split('/')
  const id = url[url.length - 1];
  

  $("#result_link").on("click", function () {
    window.location.href = "/admin/poll/" + id;
  })

  
  $("#sub").on('click', function (e) {
    const user_name = $("#user_name").val();
    e.preventDefault();
    const lists = $("#dataItems").find($(".listItem"));
    const points = [];
    const decs = [];
    
    for (let i = 0; i < lists.length; i++) {
      points.push(lists.length - i);
      decs.push(lists[i].innerHTML);
    }

    $.ajax({
      url: "/sub/poll/" + id,
      type: 'PUT',
      data: {
        points,
        decs,
        id,
        user_name
      },
      complete: function () {
        $("#success").show("slow");
        $(".list").hide();
        $("#sub").hide();
      },
      // success: window.setTimeout(function () {

      //   window.location.href = "/poll/5" + id;
      // }, 3000),

      error: function (error) {
        console.log("error", error);
      }
    })
  });
});
