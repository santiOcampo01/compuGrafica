document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.getElementById('calculate')
  const clearBtn = document.getElementById('clear')
  const inputCantidad = document.getElementById('numerosMax')
  const inputNumero = document.getElementById('numeros')
  const resultList = document.getElementById('resultList')

  let cantidad = 0
  let contador = 0
  let anterior = null
  let suma = 0
  let esperandoCantidad = true

  calculateBtn.addEventListener('click', function () {
    if (esperandoCantidad) {
      cantidad = parseInt(inputCantidad.value)
      if (isNaN(cantidad) || cantidad <= 0) {
        resultList.textContent = 'Por favor, ingrese una cantidad válida de números.'
        return
      }
      esperandoCantidad = false
      resultList.textContent = 'Ingrese un número:'
      return
    }

    let numero = parseInt(inputNumero.value)

    if (isNaN(numero)) {
      resultList.textContent = 'Por favor, escriba un número válido.'
      return
    }

    if (numero === anterior) {
      resultList.textContent += `\n¡${numero} no es distinto de ${anterior}!\nEscriba un número distinto de ${anterior}:`
    } else {
      suma += numero
      anterior = numero
      contador++

      if (contador < cantidad) {
        resultList.textContent += `\nEscriba un número distinto de ${anterior}:`
      } else {
        resultList.textContent += `\nGracias por su colaboración.\nLa sumatoria de todos los números es: ${suma}`
        calculateBtn.disabled = true
      }
    }

    inputNumero.value = ''
    inputNumero.focus()
  })

  clearBtn.addEventListener('click', function () {
    inputCantidad.value = ''
    inputNumero.value = ''
    resultList.textContent = ''
    cantidad = 0
    contador = 0
    anterior = null
    suma = 0
    esperandoCantidad = true
    calculateBtn.disabled = false
  })
})
