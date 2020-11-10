


class D {
  constructor(...args){
    this.date = new Date(...args)
  }
  year(){
    return this.date.getFullYear()
  }
}

// Create a date from a string (single parameter)
const d = new D('9/26/1965') 
// Create a date from some numbers (list of parameters)
const e = new D(1970, 1, 1, 0, 0, 0)

























