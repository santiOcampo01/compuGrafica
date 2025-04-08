document.addEventListener('DOMContentLoaded', function () {
  const cantidadInput = document.getElementById('cantidad')
  const cadenaInput = document.getElementById('cadena')
  const addBtn = document.getElementById('add')
  const clearBtn = document.getElementById('clear')
  const resultArea = document.getElementById('resultCadenas')

  let totalCadenas = 0
  let contador = 0
  let sumaLongitudes = 0
  let resultados = ''

  addBtn.addEventListener('click', function () {
    if (contador === 0) {
      totalCadenas = parseInt(cantidadInput.value)
      if (isNaN(totalCadenas) || totalCadenas <= 0) {
        resultArea.textContent = 'Por favor, indique una cantidad válida.'
        return
      }
      resultados = ''
    }

    const texto = cadenaInput.value.trim()
    if (texto === '') {
      resultArea.textContent = 'Por favor, ingrese una cadena no vacía.'
      return
    }

    const longitud = texto.length
    sumaLongitudes += longitud
    contador++
    resultados += `Cadena ${contador}: "${texto}" - Longitud: ${longitud}\n`

    if (contador === totalCadenas) {
      resultados += `\n✅ Longitud total de todas las cadenas: ${sumaLongitudes}`
      addBtn.disabled = true
    }

    resultArea.textContent = resultados
    cadenaInput.value = ''
    cadenaInput.focus()
  })

  clearBtn.addEventListener('click', function () {
    cantidadInput.value = ''
    cadenaInput.value = ''
    resultArea.textContent = ''
    totalCadenas = 0
    contador = 0
    sumaLongitudes = 0
    resultados = ''
    addBtn.disabled = false
  })
})
