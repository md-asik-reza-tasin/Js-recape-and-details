// function counter() {
//   let total = 0;
//   function add() {
//     return total += 1;
//   }

//   return add;
// }

// const count = counter();
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());

// const count2 = counter();
// console.log(count2());
// console.log(count2());
// console.log(count2());
// // console.log(count2());
// console.log(count2());

// function bankAccount() {
//   let balance = 0;

//   return {
//     deposit: function (ammount) {
//       return (balance += ammount);
//     },
//     withdraw: function (ammount) {
//       return (balance -= ammount);
//     },
//   };
// }

// const myAccount = bankAccount();
// console.log(myAccount.deposit(500));
// console.log(myAccount.withdraw(100));

// function createFunction(num) {
//   const functionA = [];

//   for (let i = 0; i <= num; i++) {
//     functionA.push(function () {
//       return i;
//     });
//   }

//   return functionA;
// }

// const a = createFunction(4);
// console.log(a[0]());


