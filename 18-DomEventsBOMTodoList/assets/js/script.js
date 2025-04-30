function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultBox = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
      resultBox.textContent = "Please enter the numbers";
      return;
    }

    let result;
    switch (operation) {
      case 'plus':
        result = num1 + num2;
        break;
      case 'minus':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num2 === 0 ? "Cannot be divided by 0" : num1 / num2;
        break;
      default:
        result = '';
    }

    resultBox.textContent = `The Result: ${result}`;
  }