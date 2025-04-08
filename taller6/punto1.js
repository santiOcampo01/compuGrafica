document.addEventListener("DOMContentLoaded", function() {
    buttonCalculate = document.getElementById("calculate");
    buttonDelete = document.getElementById("clear");
    inputNumber = document.getElementById('number')
    inputLimit = document.getElementById("limit");
    result = document.getElementById("resultList");

    buttonCalculate.addEventListener("click", generateNumbers);
    buttonDelete.addEventListener("click", clearNumbers);
    generateNumbers()

    function generateNumbers() {
        const number = parseInt(inputNumber.value)
        const limit = parseInt(inputLimit.value);
        if (isNaN(number) || isNaN(limit) || limit <= 0) {
            result.textContent = "Por favor ingrese un número válido y un límite mayor a 0";
            return;
        }
    let table = '';
        for (let i = 1; i <= limit; i++) {
            table += `${number} x ${i} = ${number * i}\n`;
        }
        result.textContent = table;
    }

    function clearNumbers() {
        result.textContent = '';
    }

})
