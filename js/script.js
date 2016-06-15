$(function() {
  $(".button-collapse").sideNav();
  $('select').material_select();

  //Test Chart.JS
  Chart.defaults.global.defaultFontFamily = "Roboto";
  Chart.defaults.global.defaultFontSize = 14;
  Chart.defaults.global.defaultFontColor = '#263238';

  var topCardsChartContainer = $("#TopCards");
  var bangCardsChartContainer = $("#BangCards");
  var topCardsChart = new Chart(topCardsChartContainer, {
    type: 'horizontalBar',
    data: {
      labels: ["NVIDIA GTX 980 Ti", "AMD RX 480", "Yellow", "Green", "Purple"],
      datasets: [{
        label: 'Score',
        data: [1000, 640, 400, 200, 110],
        backgroundColor: [
          'rgba(211,84,0,1)',
          'rgba(52,73,94,1)',
          'rgba(52,73,94,1)',
          'rgba(52,73,94,1)',
          'rgba(52,73,94,1)',
        ],
        borderWidth: 0
      }]
    },

    options: {
      legend: {
        display: false,
      }
      /*
          title: {
            display: true,
            text: 'Custom Chart Title'
          },
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },*/
    }
  });
  var bangCardsChart = new Chart(bangCardsChartContainer, {
    type: 'horizontalBar',
    data: {
      labels: ["NVIDIA GTX 980 Ti", "AMD RX 480", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: 'Score',
        data: [1000, 640, 400, 200, 110, 20],
        backgroundColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 0
      }]
    },

    options: {
      legend: {
        display: false,
      }
      /*
      		title: {
      			display: true,
      			text: 'Custom Chart Title'
      		},
      		scales: {
      			yAxes: [{
      				ticks: {
      					beginAtZero: true
      				}
      			}]
      		},*/
    }
  });
});
