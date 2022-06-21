

// 1 -> Scriviamo una funzione che accetta due parametri e torna la somma di entrambi
function sum(numOne, numTwo) {
  return numOne + numTwo;
}
console.log(sum(1, 3));


// 2 -> Scriviamo una versione miglirata della prima che controlla l'esistenza dei due parametri e che siano numeri
function sum2(numOne, numTwo) {
  if (isNaN(numOne) && isNaN(numTwo)) {
    console.error("insert valid number");
  } else {
    console.log(numOne + numTwo);
  }
}
sum2(1, 3);


// 3 -> Scriviamo come per il punto due, anche per moltiplicazione, divisione, e sottrazione
// div(2,0) -> il programma di deve dire che non posso dividere per 0
function sub(numOne, numTwo) {
  if (isNaN(numOne) && isNaN(numTwo)) {
    console.error("insert valid number");
  } else {
    console.log(numOne - numTwo);
  }
}
sub(1, 3);

function mul(numOne, numTwo) {
  if (isNaN(numOne) && isNaN(numTwo)) {
    console.error("insert valid number");
  } else {
    console.log(numOne * numTwo);
  }
}
mul(1, 3);

function div(numOne, numTwo) {
  if (isNaN(numOne) && isNaN(numTwo)) {
    console.error("insert valid number");
  } else if (numTwo === 0) {
    console.error("division by zero is not allowed");
  } else {
    console.log(numOne / numTwo);
  }
}
div(1, 3);
div(1, 0);
// 4 -> Scriviamo una funzione che possa eseguire le 4 precedenti

const calculator = function (operation, numOne, numTwo) {
  operation(numOne, numTwo)
};

calculator(sum2, 3, 3); // per stampare l'addizione
calculator(sub, 1, 3); // per stampare la sottrazione
calculator(mul, 1, 3);   // per stampare la moltiplicazione
calculator(div, 1, 3); // per stampare la divisione
