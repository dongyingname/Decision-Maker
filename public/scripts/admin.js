"use strict";


//take data object from the route and render them into pie-chart
//on the admin page using hard-coded colors

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
        label: 'value',
        data: dataArr,
        backgroundColor: [
          '#7423B2',
          '#1967C6',
          '#6B2AB4',
          '#2260C4',
          '#6231B6',
          '#2B59C2',
          '#5937B8',
          '#3453C0',
          '#503EBA',
          '#3D4CBE',
          '#4745BC',
          '#7423B2',
          '#1967C6',
          '#6B2AB4',
          '#2260C4',
          '#6231B6',
          '#2B59C2',
          '#5937B8',
          '#3453C0',
          '#503EBA',
          '#3D4CBE',
          '#4745BC',
        ],
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Current Poll Results',
        fontSize: 25,
        fontColor: 'black'
      },
      animation: {
        duration: 2000
      },
      legend: {
        labels: {
          fontSize: 17,
          fontColor: 'black'
        }
      }
    }
  });
  return pollChart;
}

// When DOM nodes are loaded event handler will hide $('.voters')
// if no name is required. 
$(document).ready(function () {
  if (!$('.user_names').text())
    $('.voters').hide();
})
