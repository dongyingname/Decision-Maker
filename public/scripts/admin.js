"use strict";
const arr = [{
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





$(document).ready(function() {
  let myChart = document.getElementById("myChart").getContext("2d");

  let massPopChart = new Chart(myChart, {
    type: 'doughnut',
    data: {
      labels: ['rock-climbing', 'hunting', 'soccer', 'spelunking'],
      datasets: [{
        label:'value',
        data: [
          5,
          12,
          5,
          10
        ],
        backgroundColor:[
          '#e6beff',
          '#9a6324',
          '#fffac8',
          '#800000',
          '#aaffc3',
          '#808000',
          '#ffd8b1',
          '#000075',
          '#808080',
          '#ffffff',
          '#000000'
        ],
      }]
    },
    options: {
      title:{
        display:true,
        text:'Current Poll Results',
        fontSize: 25
      },
      animation:{
        duration: 2000
      },
      legend:{
        labels:{
          fontSize: 17
        }
      }
    }
  });
});


// $(document).ready(function () {
  // for (let i = 0; i < arr.length; i++) {
  //   let name = arr[i].name;
  //   let $decision = $("<div>").addClass("decision");

  //   $decision.text(name);
  //   $('#data').append($decision);
  // }
// });


