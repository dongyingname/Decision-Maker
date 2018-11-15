"use strict";
const arr = [
  {
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

for (let i = 0; i < arr.length; i++) {
let dec = arr[i].decision;
let points = arr[i].points;
const $decision = $("<div>").addClass("decision");

    
    
    const element = array[i];
    
}
//   $(document).ready(function () {
//     console.log("docunent ready");
//     $("#add").on("click", function (event) {
//       append(createDecision());
//     });
//   });

function createDecision(data) {

    const $decision = $("<div>").addClass("decision");
    return $decision;
  }
//Take a DOM element and append it to a parent container #form
  function append(textarea) {
    $("#form").append(textarea);
  }