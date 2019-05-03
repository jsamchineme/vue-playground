/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

const testHelpers = {
  wrapper: null,
  seeElement(selector) {
    expect(this.wrapper.contains(selector)).toBe(true);
  },
  notSeeElement(selector) {
    expect(this.wrapper.contains(selector)).toBe(false);
  },
  seeString(string) {
    expect(this.wrapper.html().indexOf(string) !== -1).toBe(true);
  },
};

export default testHelpers;
