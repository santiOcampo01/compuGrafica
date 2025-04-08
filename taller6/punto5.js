document.addEventListener('DOMContentLoaded', function () {
  const validateBtn = document.getElementById('validate')
  const clearBtn = document.getElementById('clear')
  const inputCorreo = document.getElementById('correo')
  const resultText = document.getElementById('resultCorreo')

  validateBtn.addEventListener('click', function () {
    const correo = inputCorreo.value.trim()
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (regexCorreo.test(correo)) {
      resultText.textContent = `"${correo}" es un correo electrónico válido.`
    } else {
      resultText.textContent = `"${correo}" NO es un correo electrónico válido.`
    }
  })

  clearBtn.addEventListener('click', function () {
    inputCorreo.value = ''
    resultText.textContent = ''
  })
})
