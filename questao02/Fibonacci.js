
const numberToVerify = 13; 
let sequencia = [0, 1];
let index = 2;


function fibonacciChecker(number) {
  if (number < 2) {
    return number
  };

  return fibonacciChecker(number - 1) + fibonacciChecker(number - 2);
 }
 


 while (sequencia[index - 1] <= numberToVerify) {
  sequencia.push(fibonacciChecker(index));
  
  index++;
 }
 

 if (sequencia.includes(numberToVerify)) {
  console.log(`O número ${numberToVerify} pertence à sequência de Fibonacci.`);
 } else {
  console.log(`O número ${numberToVerify} não pertence à sequência de Fibonacci.`);  
 }