"use strict";

function createChart(data) {
  var labelsArr = [];
  var dataArr = [];
  for (let i = 0; i < data.length; i++) {
    labelsArr.push(data[i].name);
    dataArr.push(data[i].value);
  }

  let myChart = document.getElementById("myChart").getContext("2d");
  const pollChart = new Chart(myChart, {
    type: 'doughnut',
    data: {
      labels: labelsArr,
      datasets: [{
        label:'value',
        data: dataArr,
        backgroundColor:[
          '#7423B2',
          '#6B2AB4',
          '#6231B6',
          '#5937B8',
          '#503EBA',
          '#4745BC',
          '#3D4CBE',
          '#3453C0',
          '#2B59C2',
          '#2260C4',
          '#1967C6'
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
return pollChart;
}
