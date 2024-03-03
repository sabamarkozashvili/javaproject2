// Function to add two numbers
function add(a, b) {
    return a + b;
  }
  
  // Function to subtract two numbers
  function subtract(a, b) {
    return a - b;
  }
  
  // Function to multiply two numbers
  function multiply(a, b) {
    return a * b;
  }
  
  // Function to divide two numbers
  function divide(a, b) {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a / b;
  }
  
  // Function to perform calculation based on operator
  function calculate(a, b, operator) {
    switch (operator) {
      case "+":
        return add(a, b);
      case "-":
        return subtract(a, b);
      case "*":
        return multiply(a, b);
      case "/":
        return divide(a, b);
      default:
        return "Invalid operator";
    }
  }
  
  // Example usage
  console.log(calculate(5, 3, "+")); // Output: 8
  console.log(calculate(5, 3, "-")); // Output: 2
  console.log(calculate(5, 3, "*")); // Output: 15
  console.log(calculate(5, 3, "/")); // Output: 1.6666666666666667
  console.log(calculate(5, 0, "/")); // Output: Error: Division by zero
  console.log(calculate(5, 3, "^")); // Output: Invalid operator
  
  