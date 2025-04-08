document.addEventListener('DOMContentLoaded', function () {
  const buttonCalculate = document.getElementById('calculate')
  const buttonDelete = document.getElementById('clear')
  const result = document.getElementById('resultList')

  buttonCalculate.addEventListener('click', generarCuadrado)
  buttonDelete.addEventListener('click', clearNumbers)
  generarCuadrado()

  function generarCuadrado() {
    let inputCaracter = document.getElementById('caracter').value
    let inputAncho = parseInt(document.getElementById('ancho').value)
    let inputAlto = parseInt(document.getElementById('alto').value)


    if (inputCaracter === '') {
        inputCaracter = '#'
    }else {
        inputCaracter = inputCaracter[0]
    }
    if (isNaN(inputAncho) || isNaN(inputAlto) || inputAncho <= 0 || inputAlto <= 0) {
      result.textContent = 'Por favor ingrese un número válido y un límite mayor a 0'
      return
    }


    let table = ''
    for (let i = 1; i <= inputAlto; i++) {
      for(let j = 1; j <= inputAncho; j++){
        if (i === 1  || i === inputAlto) {
          table += inputCaracter
        }else if (j === 1 || j === inputAncho) {
          table += inputCaracter
        }else {
          table += ' '
        }
      }
      table += '\n'
    }
    result.textContent = table
  }

  function clearNumbers() {
    result.textContent = ''
  }
})
