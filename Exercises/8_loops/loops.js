// var i = 0;
//
// while (i <= 50) {
//   console.log(i)
//   i+=2;
// }

//Exercise 2
// var n = 100, song = '<ul class="lyrics">'
//
// while ( n >= 0) {
//   if ( n !== 0){
//     song = song + '<li>' + n + " bottle" + (n === 1 ? '' : 's' + " of beer on the wall! chug, chug, chug</li>")
//   } else {
//     song+= "<li>no bottles of beer! stumble, stumble, stumble...</li>"
//   }
//   n--
// }
// song += "</ul>"
//
// document.querySelector('.lyrics').innerHTML = song;

// Exercise 3
// var n = 8;
// var i = 0;
// var printLine = '';
//
// while (i <= n) {
//    console.log(i)
//    printLine = printLine + i + (i === 8 ? '' : ',')
//    i++;
// }
// console.log(printLine);

// Exercise 4: Cumulative Sum
// var n = 1;
// var product = 1;
//
// while (n <= 5) {
//   product *= n
//   n++
// }
// console.log(product)

// Exercise 6: FizzBuzz
// var n = 1;
//
// while (n <= 100) {
//   if (n%3 === 0 && n%5 === 0){
//     console.log("FizzBuzz" + n)
//   } else if (n%5){
//     console.log("Buzz" + n)
//   } else if (n%3) {
//     console.log("Fizz" + n)
//       }
//   else {
//     console.log(n)
//   }
//   n++;
// }
// document.querySelector('')

//Exercise 11
var sbal = 1000
var tbal = 2000
var intrate = .05
var count = 0

while (sbal <= tbal) {
  sbal += (sbal*intrate)
  count++
}

console.log(count);
document.querySelector("#output").textContent = "To grow initial investment of $1000 to $2000 at 5% will require 15 months."
