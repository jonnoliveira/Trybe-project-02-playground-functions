// // Desafio 11
function generatePhoneNumber(array) {

  let number = [];
  let menor = 0;
  let maior = 0;

  for (let index of array) {
    if (index < 0) {
      menor += 1;
    }
    if (index > 9) {
      maior += 1;
    }
  }

  let num = 0;
  let sum = 0;
  let sum2 = 0;

  for (let i = 0; i < array.length; i += 1) {
    num = array[i];
    for (let i2 = 0; i2 < array.length; i2 += 1) {
      if (array[i2] === num) {
        sum2 += 1
      }
    }
    if (sum2 > sum) {
      sum = sum2;
    }
    sum2 = 0;
  }

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  else if (menor > 0 || maior > 0) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  else if (sum >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  else {
    number.push('(', array[0], array[1], ')', ' ', array[2], array[3], array[4], array[5], array[6], '-', array[7], array[8], array[9], array[10]);

    return number.join('');
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  }
  else if (lineB > lineA + lineC || lineB < Math.abs(lineA - lineC)) {
    return false;
  }
  else if (lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(str) {

  let a = str.match(/\d/g);
  let b = 0;
  for (let i = 0; i < a.length; i += 1) {
    b += parseInt(a[i]);
  }
  if (b >= 2) {
    let resposta = b + ' copos de água';
    return resposta;
  }
  else {
    let resposta = b + ' copo de água';
    return resposta;
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
