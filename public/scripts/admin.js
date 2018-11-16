"use strict";
// const arr = [{
//     "name": "dance",
//     "value": 20
//   },
//   {
//     "name": "sing",
//     "value": 17
//   },
//   {
//     "name": "gliding",
//     "value": 9
//   },
//   {
//     "name": "swimming",
//     "value": 30
//   },
//   {
//     "name": "running",
//     "value": 50
//   },
//   {
//     "name": "games",
//     "value": 7
//   },
//   {
//     "name": "rockClimbing",
//     "value": 9
//   }
// ];

function createChart(data) {
  var labelsArr = [];
  var dataArr = [];
  for (let i = 0; i < data.length; i++) {
    labelsArr.push(data[i].name)
    dataArr.push(data[i].value)
  }

  let myChart = document.getElementById("myChart").getContext("2d");
  var pollChart = new Chart(myChart, {
    type: 'doughnut',
    data: {
      labels: labelsArr,
      datasets: [{
        label:'value',
        data: dataArr,
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
        fontSize: 25,
        fontColor: 'black'
      },
      animation:{
        duration: 2000
      },
      legend:{
        labels:{
          fontSize: 17,
          fontColor: 'black'
        }
      }
    }
  });
return pollChart
}

$(document).ready(function() {
createChart(arr)
})



