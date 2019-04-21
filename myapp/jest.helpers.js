/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

global.seeElement = (selector, wrapper) => {
  expect(wrapper.contains(selector)).toBe(true);
};
