// //GLOBAL SCOPE
// //We can access global scope variables in anywhere - in function scope, block scope

// function funScope() {
//   //Functions Scope --- can access the variables only in this local scope scope
//   // Also it's called a local scope cause the variables declare can access only in this scope
// }

// {
//   //Block scope --- can access let and const variable in this block scope
//   // Issue --- var scope can't understand the block scope
//   //let , const ---- block scope variable
//   // Var ------- Global scope variable

//   //Also it's called a local scope when we use let or const
//   //VAR --- did not understand block scope
// }

// const globalScope = 10;

// function functionScope() {
//   const functionScopeV = 20;

//   console.log(globalScope, functionScopeV); //--------- we can acess from global scope inside function scope
// }

// functionScope();

// // console.log(functionScopeV);

// var a = 10;

// function b () {
//     var a = 20;
// }

// console.log(a);

// function one() {
//   const a = "tasin";
//   function two() {
//     const b = 'mithila';
//     console.log(a);
//   }
//   console.log(b);
//   two();
// }

// one();

// if(true){
//     let a = 20;

// }

// console.log(a);

//LEXICAL

// function outer() {
//   let a = 1;
//   function inner() {
//     return a = a + 1;
//   }

//   return inner;
// }

// const ref = outer();
// console.dir(ref);
// console.log(ref());
// console.log(ref());
// console.log(ref());
// console.log(ref());
// console.log(ref());
// console.log(ref());
// console.log(ref());
// console.log(ref());
// console.log(ref());
// console.log(ref());

// function varsity() {

//   let totalNeedToPayment = 50000;
//   let totalPay = 0;


//   return {
//     payment: function (amount) {
//       totalNeedToPayment = totalNeedToPayment - amount;
//       totalPay += amount;
//       return totalNeedToPayment;
//     },
//     pay: function () {
//       return totalPay;
//     },
//   };
// }

// const final = varsity();
// console.log(final.payment(40000), final.pay());
