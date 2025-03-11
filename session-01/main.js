function greetings(name) {
  console.log(`Salut, ${name}!`);
}
greetings("Ion");
greetings("Maria");

function sum(a, b) {
  return `Suma celor doua numere este: ${a + b}!`;
}
console.log(sum(3, 5));

function estePar(n) {
  if (n % 2 === 0) {
    return `Numarul ${n} este par!`;
  } else {
    return `Numarul ${n} nu este par`;
  }
}
console.log(estePar(4));
console.log(estePar(5));

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(6));

function inverseazaSir(sir) {
  let sirInversat = "";

  for (let i = sir.length - 1; i >= 0; i--) {
    sirInversat += sir[i];
  }

  return sirInversat;
}

console.log(inverseazaSir("Ion"));
console.log(inverseazaSir("Maria"));

function inverseazaSir(sir) {
  return sir.split("").reverse().join("");
}

console.log(inverseazaSir("Ion"));
console.log(inverseazaSir("Maria"));

function estePrim(n) {
  if (n <= 1) {
    return `Numarul ${n} nu este prim`;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return `Numarul ${n} nu este prim`;
    }
  }

  return `Numarul ${n} este prim`;
}

console.log(estePrim(7));
console.log(estePrim(10));

function sumaCifrelor(numar) {
  let suma = 0;

  while (numar > 0) {
    suma += numar % 10; //
    numar = Math.floor(numar / 10);
  }

  return suma;
}

console.log(sumaCifrelor(1234));
console.log(sumaCifrelor(5678));
