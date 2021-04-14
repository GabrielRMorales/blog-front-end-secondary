// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
require('jest-localstorage-mock');

import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();
/*
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};

global.localStorage = localStorageMock;*/

// class LocalStorageMock {
//     constructor() {
//       this.store = {};
//     }
  
//     clear() {
//       this.store = {};
//     }
  
//     getItem(key) {
//       return this.store[key] || null;
//     }
  
//     setItem(key, value) {
//       this.store[key] = value;
//     }
  
//     removeItem(key) {
//       delete this.store[key];
//     }
//   }
  
//   global.localStorage = new LocalStorageMock();
