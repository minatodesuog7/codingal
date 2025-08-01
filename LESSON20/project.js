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

// Example calls:
console.log("Add: " + add(5, 3));         // 8
console.log("Subtract: " + subtract(5, 3)); // 2
console.log("Multiply: " + multiply(5, 3)); // 15
console.log("Divide: " + divide(6, 2));     // 3
