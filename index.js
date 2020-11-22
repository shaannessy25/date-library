const months_f = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

class D {
  constructor(...args) {
    this.date = new Date(...args);
    this.chars = {
      Y: this.year,
      y: this.year % 100,
      M: months_f[this.month],
      m: months[this.month],
      D: this.day,
      d: this.day,
      H: this.hour,
      h: this.hour,
      I: this.min,
      i: this.min,
      S: this.secs,
      s: this.secs,
    };
  }

  get year() {
    return this.date.getFullYear();
  }

  get month() {
    return this.date.getMonth();
  }

  get day() {
    return this.date.getDate();
  }

  get hour() {
    return this.date.getHours();
  }

  get min() {
    return this.date.getMinutes();
  }
  get secs() {
    return this.date.getSeconds();
  }

  format(f = false) {
    if (f === false) {
      return `${this.year} ${months_f[this.month]} ${this.day}`;
    } else {
      let time = "";
      for (let i = 0; i < f.length; i += 1) {
        if (f[i] in this.chars) {
          time += this.chars[f[i]];
        } else {
          time += f[i];
        }
      }
      return time;
    }
  }
  when() {
    const todaysDate = new Date();
    let diff = todaysDate.getTime() - this.date.getTime();
    if (diff === 0) {
      return "today";
    }
    diff /= 1000;
    if (Math.abs(diff) < 60) {
      return (
        `${diff.toFixed(0)} second${diff.toFixed(0) > 1 ? "s" : ""}` +
        (diff < 0 ? ` from now` : ` ago`)
      );
    }
    diff /= 60;
    if (Math.abs(diff) < 60) {
      return (
        `${diff.toFixed(0)} minute${diff.toFixed(0) > 1 ? "s" : ""}` +
        (diff < 0 ? ` from now` : ` ago`)
      );
    }
    diff /= 60;
    if (Math.abs(diff) < 24) {
      return (
        `${diff.toFixed(0)} hour${diff.toFixed(0) > 1 ? "s" : ""}` +
        (diff < 0 ? ` from now` : ` ago`)
      );
    }
    diff /= 24;
    if (Math.abs(diff) < 30) {
      return (
        `${diff.toFixed(0)} day${diff.toFixed(0) > 1 ? "s" : ""}` +
        (diff < 0 ? ` from now` : ` ago`)
      );
    }
    diff /= 30;
    diff -= 1;
    if (Math.abs(diff) < 12) {
      return (
        `${diff.toFixed(0)} month${diff.toFixed(0) > 1 ? "s" : ""}` +
        (diff < 0 ? ` from now` : ` ago`)
      );
    }
    diff /= 12;
    diff -= 1;
    return (
      `${diff.toFixed(0)} year${diff.toFixed(0) > 1 ? "s" : ""}` +
      (diff < 0 ? ` from now` : ` ago`)
    );
  }
}

module.exports.D = D;
