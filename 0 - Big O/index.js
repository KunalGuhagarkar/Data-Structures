// function addUpto(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

// console.log(addUpto(5));

// function addUpto(n) {
//   return n * (n + 1) / 2;
// }

// console.log(addUpto(5));

// Using timers
// function addUpto(n) {
//   let total = 0;
//   for (let i = 1; i <= n; i++) {
//     total += i;
//   }
//   return total;
// }

function addUpto(n) {
  return n * (n + 1) / 2;
}

let t1 = performance.now();
addUpto(10000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);