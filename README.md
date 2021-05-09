
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/min/@shaanhurley/datelib)
![NPM](https://img.shields.io/npm/l/datelib)

# Date Library
This npm package allows you to quickly get the exact date along with the format you would like to use

## Install
```
npm install @shaanhurley/datelib
```

## Usage
1. 'Y' -> 2019 (Year full)
2. 'y' -> 19 (Year short)
3. 'M' -> July (Month full)
4. 'm' -> Jul (Month short)
5. 'D' ->  01 (date padded)
6. 'd' -> 1 (date)
7. 'H' -> 05 (Hours padded)
8. 'h' -> 5 (Hours)
9. 'I' -> 08 (Minutes padded)
10. 'i' -> 8 (Minutes)
11. 'S' -> 04 (Seconds padded)
12.  's' -> 4 (Seconds)
```
    // Make a date with values for Y, M, D etc.
    const d = new D(2017, 0, 2, 3, 4, 5)
    console.log(d.format())              // 2017 January 02
    console.log(d.format('y/m/d'))       // 17/Jan/2
    console.log(d.format('H:I:S'))       // 03:04:05
    console.log(d.format('h:i:s'))       // 3:4:5
    console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05 
```