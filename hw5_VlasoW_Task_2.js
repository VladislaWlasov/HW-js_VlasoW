//1. Написать скрипт, переводящий количество байт в нужные единицы
//   bytes => kB Mb Gb Tb
//   16 565 846 bytes (16,6 Mb)

//   1 Kb = 1024 byte
//   1 Mb = 1024 Kb
//   1 Gb = 1024 Mb
//   1 Tb = 1024 Gb

//   // Пример: ~ 1000
//   4 548 = 4,5 Kb (Real 4,4 Kb)
//   454 548 = 454,5 Kb
//   1 454 548 = 1,5 Mb

// function convertByte(bytes){
//     if (bytes < 1024) {
//         return bytes + "byte"
//     } else if (bytes < 1024**2) {
//         return (bytes / 1024).toFixed(1) + "Kb"
//     } else if (bytes < 1024**3) {
//         return (bytes / (1024**2)).toFixed(1) + "Mb" 
//     } else if (bytes < 1024**4) {
//         return (bytes / (1024**3)).toFixed(1) + "Gb"
//     } else {
//         return (bytes / (1024**4)).toFixed(1) + "Tb"
//     }  
// }
// console.log(convertByte(4548))
// console.log(convertByte(4545488))  
// console.log(convertByte(1454548))

function convertByte(bytes) {
  let unit = 'Bytes'; 
  let size = bytes;

  
  for (let i = 0; size >= 1024; size /= 1024) {
    if (unit === 'Bytes') {
      unit = 'KB';
    } else if (i === 'KB') {
      unit = 'MB';
    } else if (i === 'MB') {
      unit = 'GB';
    } else if (i === 'GB') {
      unit = 'TB';
    } else {
      break; 
    }
  }
  size = size.toFixed(1);

  return size + ' ' + unit;
}

console.log(convertByte(4548));        
console.log(convertByte(454548));      
console.log(convertByte(1454548));     
console.log(convertByte(16565846));    


//2
function triangl(height) {
    for (let i = 1; i <= height; i++) {
      let spaces = ' '.repeat(height - i);
      let stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);
    }
  }
  
  triangl(5);
  
  //Ромб
  function rhombus(height) {
    let n = Math.floor(height / 2);
  
    // Верхняя часть ромба
    for (let i = 0; i <= n; i++) {
      let spaces = ' '.repeat(n - i);
      let stars = '*'.repeat(2 * i + 1);
      console.log(spaces + stars);
    }
  
    // Нижняя часть ромба
    for (let i = n - 1; i >= 0; i--) {
      let spaces = ' '.repeat(n - i);
      let stars = '*'.repeat(2 * i + 1);
      console.log(spaces + stars);
    }
  }
  
  rhombus(9);
  
  //3

  for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
      console.log(i + " - делится и на 3 и на 5");
    } else if (i % 3 === 0) {
      console.log(i + " - делится на 3");
    } else if (i % 5 === 0) {
      console.log(i + " - делится на 5");
    } else {
      console.log(i);
    }
  }

  //4
  function toCamelCase(str) {
    let words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      // Первое слово - в нижний регистр
      if (i === 0) {
        words[i] = words[i].toLowerCase();
      } else {
        // Остальные слова - с первой заглавной буквой
        words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      }
    }
  
    
    return words.join('');
  }
  
  console.log(toCamelCase('I am super engineer')); 
  console.log(toCamelCase('HELLO world'));         
  console.log(toCamelCase('JavaScript is fun'));   
  