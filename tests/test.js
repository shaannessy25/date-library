// import{ captilize, allCaps } from '../index'
const { expect } = require('@jest/globals')
const dateLib = require('../index')



test("Testing Get Full Year",  () => {
    const d = new dateLib.D(2020, 0, 1)
    const d2 = new dateLib.D(2019, 0, 1)
    const d3 = new dateLib.D(2020, 2, 3)
    expect(d.year).toBe(2020)
    expect(d2.year).toBe(2019)
    expect(d3.year).toBe(2020)
})

test("Testing Get Month", () => {
    const d = new dateLib.D(2020, 0, 1)
    const d2 = new dateLib.D(2019, 3, 1)
    const d3 = new dateLib.D(2020, 4, 3)
    expect(d.month).toBe(0)
    expect(d2.month).toBe(3)
    expect(d3.month).toBe(4)

})

