const canvas = document.getElementById('lineChart')
const ctx = canvas.getContext('2d')
const drawButton = document.getElementById('drawButton')
const dataInput = document.getElementById('dataInput')

const margin = { top: 20, right: 20, bottom: 40, left: 40 }
const width = canvas.width - margin.left - margin.right
const height = canvas.height - margin.top - margin.bottom

function parseData(input) {
  return input
    .split(',')
    .map(s => parseFloat(s.trim()))
    .filter(n => !isNaN(n))
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function yScale(value, minValue, maxValue) {
  return margin.top + height - ((value - minValue) / (maxValue - minValue)) * height
}

function xScale(index, length) {
  return margin.left + (index / (length - 1)) * width
}

function drawAxes() {
  ctx.beginPath()
  ctx.moveTo(margin.left, margin.top)
  ctx.lineTo(margin.left, margin.top + height)
  ctx.lineTo(margin.left + width, margin.top + height)
  ctx.strokeStyle = '#333'
  ctx.lineWidth = 2
  ctx.stroke()
}

function drawLabels(data, minValue, maxValue) {
  ctx.fillStyle = '#333'
  ctx.font = '12px Arial'
  const steps = 5
  for (let i = 0; i <= steps; i++) {
    const value = minValue + ((maxValue - minValue) / steps) * i
    const y = yScale(value, minValue, maxValue)
    ctx.fillText(value.toFixed(0), margin.left - 30, y + 3)
    ctx.beginPath()
    ctx.moveTo(margin.left - 5, y)
    ctx.lineTo(margin.left, y)
    ctx.stroke()
  }
  data.forEach((_, i) => {
    const x = xScale(i, data.length)
    ctx.fillText(i + 1, x - 3, margin.top + height + 20)
  })
}

function drawLineAndPoints(data, minValue, maxValue) {
  ctx.beginPath()
  ctx.moveTo(xScale(0, data.length), yScale(data[0], minValue, maxValue))
  for (let i = 1; i < data.length; i++) {
    ctx.lineTo(xScale(i, data.length), yScale(data[i], minValue, maxValue))
  }
  ctx.strokeStyle = 'blue'
  ctx.lineWidth = 2
  ctx.stroke()

  data.forEach((value, i) => {
    ctx.beginPath()
    ctx.arc(xScale(i, data.length), yScale(value, minValue, maxValue), 3, 0, Math.PI * 2)
    ctx.fillStyle = 'blue'
    ctx.fill()
  })
}

function drawChart(data) {
  if (data.length < 2) {
    alert('Introduce al menos dos valores para graficar')
    return
  }
  const maxValue = Math.max(...data)
  const minValue = Math.min(...data)
  clearCanvas()
  drawAxes()
  drawLabels(data, minValue, maxValue)
  drawLineAndPoints(data, minValue, maxValue)
}

drawButton.addEventListener('click', () => {
  const data = parseData(dataInput.value)
  drawChart(data)
})
