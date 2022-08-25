// Desafio 11
function generatePhoneNumber() {
  
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
