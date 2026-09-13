/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== "string") {
    return false;
  }  
  let newWord = word.toLowerCase();
  let wordBackwards = "";
  for(let i = word.length-1; i >= 0; i--) {
      wordBackwards += word[i].toLowerCase();
  }
  return wordBackwards === newWord; 
}
console.log(isPalindrom("level"));


/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (sentence === "") {
        return [];
      }
  if (typeof sentence !== "string") {
        return [];
      }    
  const array = sentence.split(" ");
  let maxLength = 0;
  const longestWord = [];
    for (let i = 0; i < array.length; i++) {
      if(array[i].length > maxLength) {
        maxLength = array[i].length;
        longestWord.length = 0;
        longestWord.push(array[i]);
      }
      else if(array[i].length === maxLength) {
        longestWord.push(array[i]);
      }
      else continue;  
    }
    return longestWord; 
  } 


console.log(findLongestWords("I am super puper QA engineer"));

export { isPalindrom, findLongestWords };
