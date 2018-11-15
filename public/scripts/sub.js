"use strict";
const arr = [{
    "decision": "dance",
    "points": 20
  },
  {
    "decision": "sing",
    "points": 17
  },
  {
    "decision": "run",
    "points": 9
  },
  {
    "decision": "wave",
    "points": 30
  },
  {
    "decision": "jump",
    "points": 21
  },
  {
    "decision": "sit",
    "points": 2
  },
  {
    "decision": "shoot",
    "points": 9
  }
];

$(document).ready(function () {
  //   console.log($("#data"));
  for (let i = 0; i < arr.length; i++) {
    // console.log(i);
    let dec = arr[i].decision;
    // let points = arr[i].points;
    let $decision = $("<div>").addClass("decision");
    // console.log($("#ha"));


    $decision.text(dec);
    console.log($decision);
    $('#data').append($decision);
  }

  const foo = document.getElementById("data");
  const bar = document.getElementById("option");
  Sortable.create(foo, {
    group: 'foo',
    animation: 100
  });

  Sortable.create(bar, {
    group: {
      name: 'bar',
      put: ['foo']
    },
    animation: 100
  });
});
