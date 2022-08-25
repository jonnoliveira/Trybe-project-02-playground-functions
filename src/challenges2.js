// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  }
  else if (lineB > lineA + lineC  || lineB < Math.abs(lineA - lineC)) {
    return false;
  }
  else if (lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)) {
    return false;
  }
  return true;
}


  // Desafio 13
  function hydrate() {
    // seu código aqui
  }

  module.exports = {
    generatePhoneNumber,
    hydrate,
    triangleCheck,
  };
