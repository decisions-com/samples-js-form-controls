import { Chart } from 'chart.js';

/**
 * @typedef ChartJSModel
 * @property {string} name
 * @property {string} value
 */

/**
 * @typedef DecisionsJsControl
 * @property {function} DecisionsJsControl.initialize - (host: JQuery, component: any): void;
 * @property {function} DecisionsJsControl.resize - (height: number, width: number): void;
 * @property {function} DecisionsJsControl.setValue - (data: YourInputs): void;
 * @property {function} DecisionsJsControl.getValue - (): YourOutputs;
 */

if (process.env.NODE_ENV === 'development') {
  // place things here that you need to load or do only in the dev environment.
  // this code will be removed in production.
}

/**
 * JSControl class. Name of class will become name of functional constructor that
 * Decisions will call to create an instance of your control.
 * 1. Rename to reflect the name of your JS Control
 * @typedef {DecisionsJsControl} ChartJsControl
 */
export class ChartJsControl {
  /** @type {HTMLElement} parent element, within which to render your control. */
  parentElement;

  /** @type {JQuery<HTMLElement>} host */
  host;

  /** @type {HTMLCanvasElement} */
  canvas;

  /** @type {CanvasRenderingContext2D} */
  ctx;

  chart;

  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.className = 'chart-js__canvas';
  }

  /**
   * @param {JQuery<HTMLElement>} host jquery element to append custom content into
   */
  initialize(host) {
    this.host = host;
    this.parentElement = host[0];
    this.parentElement.style.position = 'relative';
    this.parentElement.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
  }

  /**
   * @param {YourInputs} value - an object with keys for each input. In this case a ChartJS model.
   */
  setValue(value) {
    if (process.env.NODE_ENV === 'development') {
      this.renderChart(value);
    } else {
      // in production chart.js will be loaded as a script control...
      // to avoid re-bundling moment.js
      if (Chart) {
        return this.renderChart(value);
      }
      $.when(
        $DP.ScriptLoader.LoadScript(virtualPath + '/scripts/FormControls/jsFiles/chart.js')
      ).then(() => {
        this.renderChart(value);
      });
    }
  }

  renderChart(value) {
    const options = getChartOptions(value);
    this.chart = new Chart(this.ctx, options);
  }

  /**
   * If your control requires programmatic resize, handle it here.
   * @param {number} height in pixels
   * @param {number} width in pixels
   */
  resize(height, width) {
    this.chart.update();
  }

  /**
   * Return values if control needs to output data.
   */
  getValue() {
    return {};
  }
}

// add constructor to global context.
window.ChartJsControl = ChartJsControl;

// helpers:

function getChartOptions(value) {
  if (value.raw) {
    // assume it's a fully customized model in one stringified JSON value.
    return typeof value.raw === 'object' ? value.raw : JSON.parse(value.raw);
  }

  if (typeof value.datasets === 'string') {
    // handle string versions of complex inputs, because they wouldn't come through
    // in older versions of Decisions.
    value.datasets = JSON.parse(value.datasets);
  }

  // handle if individual datasets are passed as strings within an array instead,
  // which is probably the friendlier option on the Decisions side.
  value.datasets = value.datasets.map(dataset =>
    typeof dataset === 'object' ? dataset : JSON.parse(dataset)
  );

  switch (value.type) {
    case 'line':
      return getLineOptions(value);
    case 'bar':
      return getBarOptions(value);
    case 'pie':
    case 'donut':
      return getPieOptions(value);
    case 'scatter':
      return getScatterOptions(value);
    case 'bubble':
      return getBubbleOptions(value);
  }
}

function getLineOptions(value) {
  const { type, labels, datasets } = value;
  return {
    type,
    data: {
      labels,
      datasets,
    },
    options: getGenericChartOptions(),
  };
}

function getBarOptions(value) {
  const { type, labels, datasets } = value;
  return {
    type,
    data: {
      labels,
      datasets,
    },
    options: getGenericChartOptions(),
  };
}

function getPieOptions(value) {
  const { type, labels, datasets, cutoutPercentage } = value;
  return {
    type,
    data: {
      labels,
      datasets,
    },
    options: {
      cutoutPercentage,
    },
  };
}

function getScatterOptions(value) {
  const { type, labels, datasets, cutoutPercentage } = value;
  return {
    type,
    data: {
      labels,
      datasets,
    },
    options: {
      scales: {
        xAxes: [
          {
            type: 'linear',
            position: 'bottom',
          },
        ],
      },
    },
  };
}

function getBubbleOptions(value) {
  const { type, labels, datasets, cutoutPercentage } = value;
  return {
    type,
    data: {
      labels,
      datasets,
    },
    options: {
      scales: {
        xAxes: [
          {
            type: 'linear',
            position: 'bottom',
          },
        ],
      },
    },
  };
}

function getGenericChartOptions() {
  return {
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
  };
}
