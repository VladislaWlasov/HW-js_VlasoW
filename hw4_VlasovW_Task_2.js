    let age = "12";
    const age_2 = 18;
    const age_3 = 60;

    switch (true) {
        case age < age_2 : {
            console.log("You don’t have access cause your age is " + age + " It’s less than " + age_2)
            break
        }
        case age >= age_2 && age <= age_3 : {
            console.log("Welcome")
            break
        }
        case age > age_3 : {
            console.log("Keep calm and look Culture channel")
            break
        }
        default : {
            console.log("Technical work")
        }
    }

    
// // 2
let minAge = 18;
let maxAge = 60;
//let age = 10; 

if (typeof age !== 'number') {
    console.log("Error")
} else
switch (true) {
  case (age < minAge): {
    console.log("You don’t have access cause your age is " + age + " It’s less than " + minAge)
    break
  }
  case (age >= minAge && age < maxAge): {
    console.log("Welcome!")
    break
  } 
  case (age > maxAge): {
    console.log("Keep calm and look Culture channel");
    break
  } 
  default: {
    console.log("Technical work")
  }
}


// 3

if (typeof age !== 'number') {
    if (typeof age === 'string' && age.trim() !== '' && !isNaN(age)) {
      age = Number(age);
    } else {
      console.error("Error: not a number");
    }
  }
  
  if (typeof age === 'number') {
    switch (true) {
      case (age < minAge):
        console.log("You don’t have access cause your age is " + age + " It’s less than " + minAge);
        break
      case (age >= minAge && age < maxAge):
        console.log("Welcome!")
        break
      case (age > maxAge):
        console.log("Keep calm and look Culture channel")
        break
      default:
        console.log("Technical work")
    }
  }