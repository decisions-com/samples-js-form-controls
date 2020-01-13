/**
 * @typedef DecisionsJsControl
 * @property {function} DecisionsJsControl.initialize - (host: JQuery, component: any): void;
 * @property {function} DecisionsJsControl.resize - (height: number, width: number): void;
 * @property {function} DecisionsJsControl.setValue - (data: YourInputs): void;
 * @property {function} DecisionsJsControl.getValue - (): YourOutputs;
 */

/**
 * JSControl class. Name of class will become name of functional constructor that
 * Decisions will call to create an instance of your control.
 * @typedef {DecisionsJsControl} GoogleMapsControl
 */
export class GoogleMapsControl {
  /**
   * @typedef MapsControlValue
   * @property {string} apiKey
   * @property {number} lat
   * @property {number} lng
   * @property {number} zoom
   * @property {string | google.maps.MapOptions} options
   */

  /** @type {HTMLElement} parent element, within which to render your control. */
  parentElement;

  /** @type {JQuery<HTMLElement>} host */
  host;

  /**
   * @param {JQuery<HTMLElement>} host jquery element to append custom content into
   */
  initialize(host) {
    this.host = host;
    this.parentElement = host[0];
    this.parentElement.style.position = 'relative';
  }

  /**
   * @param {MapsControlValue} value
   */
  setValue(value) {
    if (mapsApiLoaded()) {
      return this.renderMap(value);
    }
    const mapsUrl = `https://maps.googleapis.com/maps/api/js?key=${value.apiKey}`;
    $DP.ScriptLoader.LoadScript(mapsUrl)
      .then(() => this.renderMap(value))
      .catch(err => {
        console.error('something went wrong loading google maps API', err);
      });
  }

  /**
   * @param {MapsControlValue} value
   */
  renderMap(value) {
    // take individual
    const { lat, lng, zoom, options } = value;

    const baseOptions = {
      center: { lat: lat || -34.397, lng: lng || 150.644 },
      zoom: zoom || 8,
    };
    if (typeof options === 'string') {
      options = JSON.parse(options);
    }
    options = options ? { ...baseOptions, ...options } : baseOptions;
    this.map = new google.maps.Map(this.parentElement, options);
  }

  /**
   * If your control requires programmatic resize, handle it here.
   * @param {number} height in pixels
   * @param {number} width in pixels
   */
  resize(height, width) {}

  /**
   * Return values if control needs to output data.
   */
  getValue() {
    return {};
  }
}

// add constructor to global context.
window.GoogleMapsControl = GoogleMapsControl;

function mapsApiLoaded() {
  return (
    typeof google !== 'undefined' &&
    typeof google.maps !== 'undefined' &&
    typeof google.maps.Map !== 'undefined'
  );
}
