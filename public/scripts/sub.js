"use strict";
const optionsData = [{
    "name": "dance",
    "value": 20
  },
  {
    "name": "sing",
    "value": 17
  },
  {
    "name": "run",
    "value": 9
  },
  {
    "name": "wave",
    "value": 30
  },
  {
    "name": "jump",
    "value": 21
  },
  {
    "name": "sit",
    "value": 2
  },
  {
    "name": "shoot",
    "value": 9
  }
];

$(document).ready(function () {

  for (let i = 0; i < optionsData.length; i++) {
    let name = optionsData[i].name;
    let $listItem = $("<li>").addClass("listItem");
    $listItem.text(name);
    $('#data').append($listItem);
  }

  const foo = document.getElementById("dataItems");
  const bar = document.getElementById("optionItems");
  Sortable.create(foo, {
    group: 'foo',
    animation: 100
  });

  Sortable.create(bar, {
    group: {
      name: 'bar',
    },
    animation: 100
  });
});
