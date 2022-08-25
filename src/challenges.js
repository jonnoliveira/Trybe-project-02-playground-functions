// Desafio 1
function compareTrue(value1, value2) {
  let cafe = value1;
  let leite = value2;

  if (cafe && leite === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;

}

// Desafio 3
function splitSentence(str) {
  return str.split(" ");

}

// Desafio 4
function concatName(str) {
  return str[str.length - 1] + ', ' + str[0];

}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6
function highestCount(numbers) {

  let maior = numbers[0];
  let sum = 0;

  for (let i = 1; i < numbers.length; i += 1) {
    if (maior < numbers[i]) {
      maior = numbers[i];
    }
  }

  for (let i = 0; i < numbers.length; i += 1) {
    if (maior === numbers[i]) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7
function catAndMouse(number, number2, number3) {
  let mouse = number;
  let cat1 = number2;
  let cat2 = number3;

  if (Math.abs((cat1 - mouse)) === 3 && Math.abs((cat2 - mouse)) === 2) {
    return 'cat2';
  }
  else if (Math.abs((cat1 - mouse)) === 6 && Math.abs((cat2 - mouse)) === 12) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numero) {
  let array = [];

  for (let index of numero) {

    if (index % 3 === 0 && index % 5 === 0) {
      array.push('fizzBuzz')
    }
    else if (index % 3 === 0) {
      array.push('fizz')
    }
    else if (index % 5 === 0) {
      array.push('buzz')
    }
    else {
      array.push('bug!')
    }
  }
  return array;
}

// Desafio 9
function encode(str) {

  let string = str.split('');

  for (let index in string) {
    if (string[index] === 'a') {
      string[index] = 1;
    }
    else if (string[index] === 'e') {
      string[index] = 2;
    }
    else if (string[index] === 'i') {
      string[index] = 3;
    }
    else if (string[index] === 'o') {
      string[index] = 4;
    }
    else if (string[index] === 'u') {
      string[index] = 5;
    }
  }
  return string.join('');
}

function decode(str){

  let string = str.split('');

  for (let index in string) {
    if (string[index] === '1') {
      string[index] = 'a';
    }
    else if (string[index] === '2') {
      string[index] = 'e';
    }
    else if (string[index] === '3') {
      string[index] = 'i';
    }
    else if (string[index] === '4') {
      string[index] = 'o';
    }
    else if (string[index] === '5') {
      string[index] = 'u';
    }
  }
  return string.join('');

}
// Desafio 10
function techList() {
  
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
