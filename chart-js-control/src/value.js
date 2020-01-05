/**
 * Test values object. Decisions will pass inputs as keys/values on an object, as below.
 *
 * Edit this to reflect the data your control is expecting.
 */

export function getLineValue() {
  return {
    type: 'line',
    labels: ['January', 'February', 'March'],
    datasets: [
      {
        label: 'DatasetOne',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 3,
        pointRadius: 9,
        steppedLine: false,
        fill: false,
      },
      {
        label: 'Dataset Two',
        data: [5, 7, 11],
        backgroundColor: [
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
        borderWidth: 2,
        pointRadius: 9,
        steppedLine: false,
        // fill: false,
      },
    ],
  };
}

export function getBarValue() {
  return {
    type: 'bar',
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
}

export function getPieValue() {
  return {
    type: 'pie',
    labels: ['Blocks', 'Trains', 'Action Figures'],
    datasets: [
      {
        label: 'DatasetOne',
        data: [12, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 206, 86, 0.4)',
        ],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
        borderWidth: 1,
        pointRadius: 9,
        steppedLine: true,
        fill: false,
      },
    ],
    cutoutPercentage: 30,
  };
}

export function getScatterValue() {
  return {
    type: 'scatter',
    datasets: [
      {
        label: 'Scatter Dataset',
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        pointRadius: 9,
        data: [
          {
            x: -10,
            y: 0,
          },
          {
            x: 0,
            y: 10,
          },
          {
            x: 10,
            y: 5,
          },
          {
            x: -5,
            y: 2,
          },
          {
            x: 3,
            y: 7,
          },
          {
            x: 7,
            y: 4,
          },
        ],
      },
    ],
  };
}

export function getBubbleValue() {
  return {
    type: 'bubble',
    datasets: JSON.stringify([
      {
        label: 'Turtles',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        data: [{ x: -3, y: 0, r: 10 }],
      },
      {
        label: 'Newts',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        data: [{ x: 0, y: 10, r: 20 }],
      },
      {
        label: 'Anoles',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        data: [{ x: 10, y: 5, r: 15 }],
      },
      {
        label: 'Chameleons',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        data: [{ x: -5, y: 2, r: 12 }],
      },
      {
        label: 'Snakes',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        data: [{ x: 3, y: 7, r: 7 }],
      },
      {
        label: 'Raptors',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        data: [{ x: 7, y: 4, r: 40 }],
      },
    ]),
  };
}

export function getRawDataSet() {
  return {
    raw: JSON.stringify({
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Bar Dataset',
            data: [10, 20, 30, 40],
          },
          {
            label: 'Line Dataset',
            data: [50, 50, 50, 50],

            // Changes this dataset to become a line
            type: 'line',
          },
        ],
        labels: ['January', 'February', 'March', 'April'],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    }),
  };
}
