function calculateNumbers() {
    let number1 = document.getElementById('number1').value;
    let number2 = document.getElementById('number2').value;
    let result = document.getElementById('result');
    result.innerHTML = number1 * number2;
}