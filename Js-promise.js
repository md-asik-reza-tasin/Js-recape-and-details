//Enroll in a course
//Confirmation
//Course running
//Certificate based on condition

const payment = 3000;

const enroll = new Promise((resolve, reject) => {
  if (payment !== 5000) {
    reject("Payment need!");
  } else {
    console.log("Enrollment Successfully!!!");
    resolve();
  }
});

const course = new Promise((resolve, reject) => {
  let marks = 80;
  if (marks < 80) {
    reject("Failed");
  } else {
    console.log("Congratulation you're pass!!");
    resolve();
  }
});

const certificate = new Promise((resolve, reject) => {
  console.log("Take Certicate");
  resolve();
});

// enroll
//   .then((res) => course.then((res) => console.log(res)))
//   .catch((err) => console.log(err));


async function complete (){
    const a = await enroll;
    const b = await course;
    const c = await certificate;   
}

console.log(complete());
