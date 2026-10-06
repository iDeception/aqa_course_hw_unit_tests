/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/
const arr = [2,5,1,6];


function findMissingNumber(numbers) {
  if (!Array.isArray(numbers)) return; 
  if (numbers.length === 0) return;

  const areAllNumbers = numbers.every((el) => typeof(el) === "number" && !Number.isNaN(el));
  if (!areAllNumbers) return;

  const hasInvalidNumbers = numbers.some((el) => {
  return el < 1 || !Number.isInteger(el);
});
  if (hasInvalidNumbers) return;


  const sortedArr = numbers.toSorted((a, b) => a - b);
  if (sortedArr.length === 1) {
    if (sortedArr[0] === 1) return 2;
    if (sortedArr[0] === 2) return 1;
  }
  if (sortedArr[0] > 2) {
    return;
  }
  
  const hasDuplicates = sortedArr.some((el, i, array) => {
    if (i === 0) return false;
    return el === array[i-1];
  });
    if (hasDuplicates) return;

  const gapsCount = sortedArr.reduce((count, el, i, array) => {
    if (i === 0) return count;
    return count + (el - array[i - 1] - 1);
  },0);
  if (gapsCount > 1) return;

  const found = sortedArr.find((el, i, array) => {
    if (i === 0) return false;
    if (el - array[i-1] !== 1) return el;
  });
  if (sortedArr[0] === 2) {
    if (!found) return 1;
    return;
  }
  return found ? found - 1 : sortedArr.length + 1;
}  
console.log(findMissingNumber(arr));

export { findMissingNumber };
