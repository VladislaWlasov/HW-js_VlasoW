// 1
const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzas = ['Margherita', 'Peperoni', 'BBQ Chicken', 'Hawai', 'Caprichosa'];

function getUniquePizzas(myPizzas) {
  const lowerCompetitorPizzas = competitorPizzas.map(pizza => pizza.toLowerCase());
  const lowerMyPizzas = myPizzas.map(pizza => pizza.toLowerCase());

  const uniquePizzas = [];
  for (let i = 0; i < lowerMyPizzas.length; i++) {
    if (!lowerCompetitorPizzas.includes(lowerMyPizzas[i])) {
      uniquePizzas.push(myPizzas[i]); 
    }
  }

  if (uniquePizzas.length === 0) {
    return null;
  }

  return uniquePizzas;
}

console.log(getUniquePizzas(myPizzas)); // ['Margherita', 'BBQ Chicken']


// 2
function findLongestWords(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;
    const longestWords = [];
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWords.length = 0;
        longestWords.push(words[i]);
      } else if (words[i].length === maxLength) {
        longestWords.push(words[i]);
      }
    }
  
    console.log(longestWords.join(', '));
  }
  
  const sentence = "I am a manual QA and love (try) js";
  findLongestWords(sentence); //  "manual"
  


  // 3
  function removeDuplicates(array) {
    const uniqueArray = [];
  
    for (let i = 0; i < array.length; i++) {
      const number = array[i];
      if (!uniqueArray.includes(number)) {
        uniqueArray.push(number);
      }
    }
  
    return uniqueArray;
  }
  
  const numbers = [1, 2, 3, 1, 4, 2, 5, 3];
  console.log(removeDuplicates(numbers)); //  [1, 2, 3, 4, 5]
  

  // 4
  function isPalindrome(word) {
    word = word.toLowerCase();
  
    for (let i = 0; i < word.length / 2; i++) {
      if (word[i] !== word[word.length - 1 - i]) {
        return false; //слово не является палиндромом
      }
    }
  
    // слово является палиндромом
    return true;
  }
  
  console.log(isPalindrome("level")); // true
  console.log(isPalindrome("word"));  // false

  