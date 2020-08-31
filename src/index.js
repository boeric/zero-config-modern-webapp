/* eslint-disable no-console */
// @flow

import 'regenerator-runtime/runtime';
import './styles.css';

import * as d3 from 'd3';

import a, {
  nonDefaultExport as b,
  Aclass,
} from './module';

// Variables
let value;
let obj;

console.log('Testing...');

// Test imported functions
console.log(a());
console.log(b());

// Test imported class
const inst0 = new Aclass(1);
console.log(inst0.methodA('test-string'));
console.log(`class properties work: ${String(inst0.createCount === 1)}`);
console.log(`static methods work: ${String(Aclass.returnCreateCount() === 1)}`);

// Test template string
value = 'template string works';
console.log(`${value}`);

// Test tagged template
function tag(strings, t, w) {
  return `tagged ${t} ${w}s`;
}
const template = 'template';
const work = 'work';
console.log(tag`${template} ${work}?`);

// Test arrow functions
const arrow = (d) => {
  console.log(d);
};
arrow('arrow function works');

// Test arrow iife
(() => {
  console.log('arrow iife works');
})();

// Test async function
async function asyncTest() {
  console.log('async function works');
}
asyncTest();

// Test async iife function
(async () => {
  console.log('async iife works');
})();

// Test async/await (will show up late in the log, due to execution at the next tick
// of the event loop)
(async () => {
  function returnPromise() {
    return Promise.resolve('async/await works');
  }
  const awaitValue = await returnPromise();
  console.log(awaitValue);
})();

// Test spread
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArray = [...Array(10).keys()];
if (array.length === newArray.length && array.every((d, i) => d === newArray[i])) {
  console.log('spread works');
} else {
  console.log('spread does not work', array, newArray);
}

// Test generator
function* generator() {
  while (true) {
    yield 'generator works';
  }
}
const gen = generator();
console.log(gen.next().value);

// Test Map
const map = new Map();
map.set('key', 'Map works');
console.log(map.get('key'));

// Test Set
const set = new Set();
set.add('Set works');
console.log([...set.values()][0]);

// Test WeakMap
const weakMap0 = new WeakMap();
const objArr = [{}, {}];
weakMap0.set(objArr[0], 'value0');
weakMap0.set(objArr[1], 'value1');

objArr.length = 1; // Remove item 1
if (weakMap0.has(objArr[0]) && !weakMap0.has(objArr[1])) {
  console.log('Weakmap does work');
} else {
  console.error(`Weakmap does NOT work (${String(weakMap0.has(objArr[1]))})`);
}

// Test WeakMap 1 (have to do flow overrides here)
const weakMap1 = new WeakMap();
const mapObj = {
  key0: {},
  key1: {},
};
value = 'some value';
weakMap1.set(mapObj.key0, value);
weakMap1.set(mapObj.key1, '1');
// $FlowFixMe
mapObj.key1 = null;
// $FlowFixMe
if (weakMap1.has(mapObj.key1) === true) {
  console.log('Weakmap does NOT work');
} else if (weakMap1.get(mapObj.key0) === value) {
  console.log('Weakmap does work');
}

// Test WeakSet (hav to do flow overrides here)
const weakSet = new WeakSet();
obj = {
  obj0: {},
  obj1: {},
};
weakSet.add(obj.obj0);
weakSet.add(obj.obj1);

// $FlowFixMe
delete obj.obj1;
if (weakSet.has(obj.obj0) && !weakSet.has(obj.obj1)) {
  console.log('WeakSet works');
} else {
  console.log('WeakSet does NOT work');
}

// Test getter/setter
obj = {
  internal: 'getter works',
  get string() {
    return this.internal;
  },
  set newString(newValue) {
    this.internal = newValue;
  },
};
console.log(obj.string);
obj.newString = 'setter works';
console.log(obj.string);

// Test optional chaining
try {
  obj = {
    prop0: {
      prop00: {},
    },
  };
  value = obj?.prop0?.prop00?.prop000 || 'optional chaining works';
  console.log(value);
} catch (e) {
  console.log(`optional chaining does NOT work: ${e}`);
}

// Test d3
d3.selectAll('div').text(`Hello from index.js and d3! (d3 version ${d3.version})`);
