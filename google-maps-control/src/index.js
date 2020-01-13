import './testbed.css';
import { initializeTestBed } from './testbed';
import { GoogleMapsControl } from './js-control';

/**
 * This is mock container app that simulates how Decisions will
 * instantiate, initialize, and setValue, getValue, resize, etc.
 */

const control = new GoogleMapsControl();
const host = initializeTestBed(control, setValue);
control.initialize(host);

document.addEventListener('resize', () => {
  const size = host[0].getBoundingClientRect();
  control.resize(size.height, size.width);
});

function setValue(value) {
  control.setValue(value);
}
