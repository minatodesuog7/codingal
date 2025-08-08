function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Cannot divide by zero!";
  }
}

function modulus(a, b) {
  return a % b;
}

function square(a) {
  return a * a;
}

function power(a, b) {
  return a ** b;
}

function average(a, b) {
  return (a + b) / 2;
}

// Example calls:
console.log("Add: " + add(5, 3));
console.log("Subtract: " + subtract(5, 3));
console.log("Multiply: " + multiply(5, 3));
console.log("Divide: " + divide(6, 2));
console.log("Modulus: " + modulus(5, 3));
console.log("Square: " + square(4));
console.log("Power: " + power(2, 5));
console.log("Average: " + average(5, 3));
