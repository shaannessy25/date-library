// import{ captilize, allCaps } from '../index'
const { expect } = require('@jest/globals')
const dateLib = require('../index')



test("Testing Get Full Year",  () => {
    const d = new dateLib.D(2020, 0, 1)
    expect(d.year()).toBe(2020)
    expect(d.month()).toBe("Jan")
    expect(d.day()).toBe("Wed")

     
})


