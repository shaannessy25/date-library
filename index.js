const months_f = ["January", "February", "March", "April", "May",
"June", "July", "August", "September", "October", "November", "December" ]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
'Sep', 'Oct', 'Nov', 'Dec']

class D {
  constructor(...args){
    this.date = new Date(...args)
    this.chars = {
      'Y': this.year,
      'y': this.year % 100,
      'M': months_f[this.month],
      'm': months[this.month],
      'D': this.day,
      'd': this.day,
      'H': this.hour,
      'h': this.hour,
      'I': this.min,
      'i': this.min,
      'S': this.secs,
      's': this.secs
    }
  }
  get year(){
    return this.date.getFullYear()
  }

  get month(){
    return this.date.getMonth()
  }
  get day(){
    return this.date.getDate()
  }

  get hour() {
    return this.date.getHours()
  }

  get min() {
    return this.date.getMinutes()
  }
  get secs(){
    return this.date.getSeconds()
  }
  format(f=false) {

    if (f === false) {
      return `${this.year} ${months_f[this.month]} ${this.day}`
    }
    else {
      let time = ""
      for (let i = 0; i < f.length; i += 1) {
        if (f[i] in this.chars) {
          time += this.chars[f[i]]
        }
        else {
          time += f[i]
        }
      }
      return time
    }
  }

}


const d = new D(2017, 0, 2, 3, 4, 5)
console.log(d.format())              // 2017 January 02
console.log(d.format('y/m/d'))       // 17/Jan/2
console.log(d.format('H:I:S'))       // 03:04:05
console.log(d.format('h:i:s'))       // 3:4:5
console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 


module.exports.D = D



















