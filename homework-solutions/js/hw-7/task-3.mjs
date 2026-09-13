/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  if (typeof number !== "number") {
    return "Incorrect data";
  }
  if (number < 10) {
    return number;
  }
  const str = number.toString();
  const digits = str.split("");
  let sum = 0;
  for (let i = 0; i < digits.length; i++) {
    sum += Number(digits[i]);
  }
  if (sum <= 9) {
    return sum;
  }
  return digitalRoot(sum);
}
console.log(digitalRoot(9007199254740991));

export { digitalRoot };
