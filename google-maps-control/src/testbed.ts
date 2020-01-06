import './testbed.css';
import $ from 'jquery';

interface DecisionsJsControl {
  initialize(host: JQuery, component: any): void;
  resize(height: number, width: number): void;
  setValue(data: {}): void;
  getValue(): {};
}
import {
  getLineValue,
  getBarValue,
  getPieValue,
  getScatterValue,
  getBubbleValue,
  getRawDataSet,
} from './value';

const body = document.getElementsByTagName('body')[0];

export function initializeTestBed(control: DecisionsJsControl, setValue: (value: any) => void) {
  // create a frame within which to view & test your control
  const container = document.createElement('div');
  container.className = 'testbed__container';

  const sidebar = document.createElement('div');
  sidebar.className = 'testbed__sidebar';
  sidebar.innerText = `Edit your control to see it update in the area on the right.
  
  The area below will keep a readout of your component's 'getValue' result, also available on the console.
  
  `;

  const testbed = document.createElement('div');
  testbed.className = 'testbed';

  const valuePreview = document.createElement('pre');
  valuePreview.className = 'testbed__value';

  const getValueBtn = document.createElement('button');
  getValueBtn.innerText = 'Get Value';

  const getLineValueBtn = document.createElement('button');
  getLineValueBtn.addEventListener('click', () => setValue(getLineValue()));
  getLineValueBtn.innerText = 'Get Line Value';
  const getBarValueBtn = document.createElement('button');
  getBarValueBtn.addEventListener('click', () => setValue(getBarValue()));
  getBarValueBtn.innerText = 'Get Bar Value';
  const getPieValueBtn = document.createElement('button');
  getPieValueBtn.addEventListener('click', () => setValue(getPieValue()));
  getPieValueBtn.innerText = 'Get Pie Value';
  const getScatterValueBtn = document.createElement('button');
  getScatterValueBtn.addEventListener('click', () => setValue(getScatterValue()));
  getScatterValueBtn.innerText = 'Get Scatter Value';
  const getBubbleValueBtn = document.createElement('button');
  getBubbleValueBtn.addEventListener('click', () => setValue(getBubbleValue()));
  getBubbleValueBtn.innerText = 'Get Bubble Value';
  const getRawDataSetBtn = document.createElement('button');
  getRawDataSetBtn.addEventListener('click', () => setValue(getRawDataSet()));
  getRawDataSetBtn.innerText = 'Get Raw Data Set';


  const updateValue = () => {
    const value = control.getValue();
    valuePreview.innerText = JSON.stringify(value, undefined, 4);

    console.log('JS Control Value:', value);
  };

  // these listeners will automatically update the value readout, unless those events
  // are prevented from bubbling.
  container.addEventListener('keyup', updateValue);
  container.addEventListener('click', updateValue);

  // button is convenient fallback.
  getValueBtn.addEventListener('click', updateValue);

  sidebar.append(getLineValueBtn);
  sidebar.append(getBarValueBtn);
  sidebar.append(getPieValueBtn);
  sidebar.append(getScatterValueBtn);
  sidebar.append(getBubbleValueBtn);
  sidebar.append(getRawDataSetBtn);
  sidebar.append(getValueBtn);
  sidebar.append(valuePreview);

  testbed.append(sidebar);
  testbed.append(container);

  body.append(testbed);

  // track instance, so FuseBox HMR doesn't re-bootstrap every time.
  (window as any).controlInstance = control;
  
  return $([container]);
}
