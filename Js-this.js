// console.log(this);

// const user = {
//   nameA: "tasin",
//   rename: function () {
//     return this.nameA;
//   },
// };

// const usera = {
//     nameA: "tasin",
//     rename : this.nameA
//   };

// console.log(user.rename());

// function myFunction () {
//     console.log(this);

// }

// myFunction();

// function myFunction() {
//   console.log(this);
// }

// myFunction();

// {
//   console.log(this);
// }

// const user = {
//   first: "tasin",
//   welcome: this,
// };

// console.log(user.welcome);

// const user2 = {
//   first: "tasin",
//   welcome: function () {
//     console.log(this);
//   },
//   arrow: () => {
//     console.log(this);
//   },
// };

// user2.welcome();
// user2.arrow();

// const user3 = {
//   first: "tasin",
//   welcome: () => {
//     console.log(this);
//   },
// };

// user3.welcome();

// Function --- this

// function myfunc () {
//   return this;
// }

// console.log(myfunc());

// Method --- this

// const person = {
//   first : 'Tasin',
//   second : 'Pronoy',
//   fullName : function(){                            //Implicity
//     return this.first + ' ' + this.second
//   }
// }

// console.log(person.fullName());

//Alone

// console.log(this);

//Strict Mode

// "use strict"

// function a (){
//   return this;
// }

// console.log(a());

//event

// document.getElementById("btn").onclick = function () {
//   this.style.backgroundColor = "red";
// };

//Explicit ----

// const person = {
//   fullName: function () {
//     return this.first;
//   },
// };

// const user = {
//   first: "Tasin",
// };

// console.log(person.fullName.call(user));

// const user = {
//   first : 'Tasin',
//   fullName : () => {
//     return this.first
//   }
// }

// console.log(user.fullName());

// const user = {
//   first: "Tasin",
//   last: {
//     lastName: "Pronoy",
//     lastNa: () => {
//       return this.lastName;
//     },
//   },
// };

// console.log(user.last.lastNa());

// const a = () => {
//   console.log(this);

// }

// a();

// document.getElementById("btn").onclick = function() {
//   console.log(this);

// };

// var twoSum = function (nums, target) {
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       let add = nums[i] + nums[j];
//       if (add === target) {
//         result.push(i, j);
//       }
//     }
//   }

//   return result;
// };

// const num = [3,2,4];
// console.log(twoSum(num, 6));

// var isPalindrome = function (x) {
//   const reverseArr = [];
//   const newArr = x
//     .toString()
//     .split("")
//     .map((num) => num);

//   for (let i = newArr.length - 1; i >= 0; i--) {
//     reverseArr.push(newArr[i]);
//   }
//   const y = Number(reverseArr.join(""));

//   if (y === x) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrome(121212121212121));

var romanToInt = function (s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  const newArr = s.split("").map((num) => num);

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < newArr[i + 1]) {
      let sub = romanNumerals[newArr[i]] - romanNumerals[newArr[i + 1]];
      result += sub;
      i + 2;
    } else {
      result += romanNumerals[newArr[i]];
    }
  }

  return result;
};

console.log(romanToInt("MCMXCIV"));
