const assert = require('assert').strict
const PropTypes = require('prop-types')
const { createPropCases } = require('./')

const MyComponent = {
  propTypes: {
    a: PropTypes.bool,
    b: PropTypes.bool.isRequired
  }
}

const propCases = createPropCases(MyComponent)
const expected = [
  { a: true, b: true },
  { a: false, b: true },
  { a: void 0, b: true },
  { a: true, b: false },
  { a: false, b: false },
  { a: void 0, b: false }
]

assert.deepEqual(propCases, expected)
