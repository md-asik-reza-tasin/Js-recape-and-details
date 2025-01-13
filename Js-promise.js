//Enroll in a course
//Confirmation
//Course running
//Certificate based on condition

// const payment = 3000;

// const enroll = new Promise((resolve, reject) => {
//   if (payment !== 5000) {
//     reject("Payment needed!");
//   } else {
//     console.log("Enrollment Successful!!!");
//     resolve("Enrolled");
//   }
// });

// const course = new Promise((resolve, reject) => {
//   let marks = 80;
//   if (marks < 80) {
//     reject("Failed");
//   } else {
//     console.log("Congratulations, you passed!!");
//     resolve("Course completed");
//   }
// });

// const certificate = new Promise((resolve) => {
//   console.log("Take Certificate");
//   resolve("Certificate received");
// });

// // enroll
// //   .then((res) => course.then((res) => console.log(res)))
// //   .catch((err) => console.log(err));

// async function complete() {
//   try {
//     const a = await enroll;
//     console.log(a); // Log enrollment result
//     const b = await course;
//     console.log(b); // Log course result
//     const c = await certificate;
//     console.log(c); // Log certificate result
//   } catch (err) {
//     console.log(err); // Catch and handle errors
//   }
// }

// complete();

// var longestCommonPrefix = function (strs) {
//   if (strs.length === 0) return ""; // Handle empty input

//   let prefix = strs[0]; // Use the first word as the initial prefix

//   // Loop through the rest of the words
//   for (let i = 1; i < strs.length; i++) {
//     while (strs[i].indexOf(prefix) !== 0) {
//       // Reduce the prefix length until a match is found
//       prefix = prefix.substring(0, prefix.length - 1);
//       if (prefix === "") return ""; // Return early if no common prefix
//     }
//   }

//   return prefix; // Return the longest common prefix
// };

// const strs = ["flower", "flow", "flight"];
// console.log(longestCommonPrefix(strs));

// var isValid = function (s) {
//   let splitS = s.split("");
//   for(let one of splitS){
//     console.log(one);
    
//   }
// };

// let s = "()";
// console.log(isValid(s));



function math(a, b){
  return a + b;
}

const result = math(1, 2);

console.log(result);



