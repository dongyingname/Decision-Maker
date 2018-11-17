"use strict";

$(document).ready(function () {
  const foo = document.getElementById("dataItems");
  Sortable.create(foo, {
    group: 'foo',
    animation: 100,
    chosenClass: "sortable-chosen"
  });

  // Returns path only)
  $("#sub").on('click', function (e) {
    e.preventDefault();
    const lists = $("#dataItems").find($(".listItem"));
    const points = [];
    const decs = [];
    const url = window.location.pathname.split('/')
    const id = url[url.length - 1];

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
        id
      },
      success: function (data) {
        console.log("data success", data);
      },
      error: function (error) {
        console.log("error", error);
      }
    })






  });

});
