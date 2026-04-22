/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let n;
let number;
n = 7;
number = String(n);
let result = n + Number(number + number) + Number(number + number + number);
console.log(result);