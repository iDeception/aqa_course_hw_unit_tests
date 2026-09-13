/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrays) {
  const result = [];
  for(const array of arrays) {
   result.push(...array);
  }
  return result;
}

console.log(mergeArrays([1,2], [3,4], [5,6], [7,8], [9,10]));

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его.
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем.
    - Пример: I am super engineer => i_Am_Super_Engineer
  */


function devideBy(sentence) {
  if (sentence === "") {
        return "";
      }
  const words = sentence.split(" ");  
    for (let i = 0; i < words.length; i++) {
        if(words[i] === "") {
          continue;
        }  
        if (i === 0) {
         words[i] = words[i][0].toLowerCase() + words[i].slice(1).toLowerCase();
      } else {
         words[i] = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      }
    }
    const newSentence = words.join("_");
    
  return newSentence;  
}
console.log(devideBy("I   am   super    engineer"));


/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  const arr = [0, 1];
  if (n < 2) {
    return arr[n - 1];
}
  for(let i = 2; i <= n; i++) {
    arr[i] = arr[i-1] + arr[i-2];
  }
  return arr[n - 1];
}

console.log(fibonacci(2));


export { mergeArrays, fibonacci, devideBy };
