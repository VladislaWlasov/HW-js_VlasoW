const age = 60;
const age_2 = 18;
const age_3 = 60;

if  (age < age_2) {
    console.log("You don’t have access cause your age is " + age + " It’s less than " + age_2)
} else if (age >= age_2 && age <= age_3 ) {
    console.log("Welcome")
} else if (age > age_3) {
    console.log("Keep calm and look Culture channel")
} else {
    console.log("Technical work")
}

// Решение 2
let minAge = 18;
let maxAge = 60;

let testAges = [10, 17, 18, 19, 59, 60, 61];


testAges.forEach(age => {
  if (age < minAge) {
    console.log("You don’t have access cause your age is " + age + " It’s less than " + minAge);
  } else if (age >= minAge && age <= maxAge) {
    console.log("Welcome!");
  } else if (age > maxAge) {
    console.log("Keep calm and look Culture channel");
  } else {
    console.log("Technical work");
  }
});
