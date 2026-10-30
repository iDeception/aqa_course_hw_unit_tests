/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function vowelPerWord(word) {
    const vowels = 'aeiouy';    
    const vowelCount = [...word].filter((letter) => vowels.includes(letter)).length;
      return vowelCount
}

function sortedByVowels(wordsArray) {
 return wordsArray.toSorted((a, b) => vowelPerWord(a) - vowelPerWord(b));
}

console.log(sortedByVowels(words));



export { sortedByVowels };
