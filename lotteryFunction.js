// below func genarates random integer numbers from 1 to 49
let arr = Array.from(
  {
    length: 50,
  },
  (v, i) => {
    let min = 1;
    let max = 50;
    min = Math.ceil(min);
    max = Math.floor(max);
    return (num = Math.floor(Math.random() * (max - min)) + min);
  }
);

// then select 6 numbers in random array above
let selected = arr.slice(0, 7);

// after, sort this 6 numbers in an asceding array.
let sortedArr = selected.sort((a, b) => {
    return a - b;
})

// finally taking uniqe numbers in sorted array
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  
var unique = sortedArr.filter(onlyUnique);

console.log(unique);

