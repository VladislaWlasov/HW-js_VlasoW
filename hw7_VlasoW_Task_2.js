// 1
function transformString(text) {
    const lowerCaseSentence = text.toLowerCase();
    const count = {};
  
    for (let char of lowerCaseSentence) {
      if (char.match(/[a-z]/)) { 
        count[char] = (count[char] || 0) + 1;
      }
    }
  
    let result = '';
    for (let char of lowerCaseSentence) {
      if (count[char]) {
        result += count[char];
      } else {
        result += char;
      }
    }
  
    return result;
  }

  // 2
  
  const text = "I am the best AQA ever!";
  console.log(transformString(text)); // 1 12 1 122 2211 111 1 411
  
  const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

function calculatePrices(prices) {
  const total = prices.reduce((sum, price) => sum + price, 0);
  const average = total / prices.length;
  
  console.log(`Итого: ${total} $, средняя цена товара ${average.toFixed(1)} $`);
}

calculatePrices(prices);
// Итого: 84995 $, средняя цена товара 3391.4 $


// 3
function countVowels(word) {
  const vowels = 'aeiouy';
  let count = 0;
  
  for (let char of word.toLowerCase()) {
      if (vowels.includes(char)) {
          count++;
      }
  }
  
  return count;
}

function sortWordsByVowels(words) {
  return words.sort((word1, word2) => countVowels(word1) - countVowels(word2));
}

const words = ['Olga', 'Ann', 'Vladislav', 'Tima', 'Andreiy'];
const sortedWords = sortWordsByVowels(words);
console.log(sortedWords); // [ 'Ann', 'Olga', 'Tima', 'Vladislav', 'Andreiy' ]

// 4

function checkBrackets(arr) {
  const flattenedArray = arr.flat(Infinity);
  const stack = [];

  for (let char of flattenedArray) {
      if (char === '(') {
          stack.push(char)
      } else if (char === ')') {
          if (stack.length === 0) {
              return false
          }
          stack.pop();
      }
  }
  
  return stack.length === 0
}

const arr1 = [[['(']], ')', '(', ')', ')', ['(', ['('], [')']]]
const arr2 = [['('], ')', '(', ')', '(', ')']
const arr3 = ['(', '(', ')', ')', '(']

console.log(checkBrackets(arr1)); // false
console.log(checkBrackets(arr2)); // true
console.log(checkBrackets(arr3)); // false
