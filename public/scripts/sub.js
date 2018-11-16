"use strict";
// console.log(decisions);
// const optionsData = [{
//     "name": "dance",
//     "value": 20
//   },
//   {
//     "name": "sing",
//     "value": 17
//   },
//   {
//     "name": "run",
//     "value": 9
//   },
//   {
//     "name": "wave",
//     "value": 30
//   },
//   {
//     "name": "jump",
//     "value": 21
//   },
//   {
//     "name": "sit",
//     "value": 2
//   },
//   {
//     "name": "shoot",
//     "value": 9
//   }
// ];

$(document).ready(function () {
  const foo = document.getElementById("dataItems");
  Sortable.create(foo, {
    group: 'foo',
    animation: 100,
    chosenClass: "sortable-chosen"
  });

});
