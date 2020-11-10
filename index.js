


class D {
  constructor(...args){
    this.date = new Date(...args)
  }
  year(){
    return this.date.getFullYear()
  }
  month(){
    return this.date.getMonth()
  }
}

// Create a date from a string (single parameter)
const d = new D('9/26/1965') 
// Create a date from some numbers (list of parameters)
let e = new D(1970, 1, 1, 0, 0, 0)





module.exports.D = D



















