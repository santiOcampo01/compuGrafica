let canva1 = document.getElementById('canvas')
let canvaContext = canva1.getContext('2d')

canvaContext.beginPath()
//parte superior
canvaContext.moveTo(50, 100)
canvaContext.lineTo(150, 50)
canvaContext.lineTo(190, 80)
canvaContext.lineTo(100, 130)
canvaContext.lineTo(50, 100)
canvaContext.fillStyle = 'red'
canvaContext.fill()
//parte izquierda
canvaContext.moveTo(50, 100)
canvaContext.lineTo(50, 220)
canvaContext.lineTo(140, 270)
canvaContext.lineTo(140, 210)
canvaContext.lineTo(100, 190)
canvaContext.lineTo(100, 130)
canvaContext.lineTo(50, 100)
canvaContext.fillStyle = 'red'
canvaContext.fill()
//parte abajo derecha
canvaContext.moveTo(140, 270)
canvaContext.lineTo(240, 210)
canvaContext.lineTo(240, 155)
canvaContext.lineTo(140, 210)
canvaContext.lineTo(140, 270)
canvaContext.fillStyle = 'red'
canvaContext.fill()
//parte centro derecha
canvaContext.moveTo(240, 155)
canvaContext.lineTo(190, 80)
canvaContext.lineTo(150, 102)
canvaContext.lineTo(200, 178)
canvaContext.lineTo(240, 155)
canvaContext.fillStyle = 'red'
canvaContext.fill()
//parte centro triangulo
canvaContext.moveTo(150, 102)
canvaContext.lineTo(150, 160)
canvaContext.lineTo(200, 178)
canvaContext.lineTo(150, 102)
canvaContext.fillStyle = 'red'
canvaContext.fill()
//parte cuadrado izquierdo
canvaContext.moveTo(150, 160)
canvaContext.lineTo(100, 190)
canvaContext.lineTo(100, 130)
canvaContext.lineTo(150, 102)
canvaContext.lineTo(150, 160)
canvaContext.fillStyle = 'red'
canvaContext.fill()
//parte cuadrado central
canvaContext.moveTo(150, 160)
canvaContext.lineTo(200, 178)
canvaContext.lineTo(140, 210)
canvaContext.lineTo(100, 190)
canvaContext.lineTo(150, 160)
canvaContext.fillStyle = 'red'
canvaContext.fill()
canvaContext.stroke()

let canva2 = document.getElementById('canvas2')
let canvaContext2 = canva2.getContext('2d')

// Parte superior
canvaContext2.beginPath()
canvaContext2.moveTo(250, 100)
canvaContext2.lineTo(150, 50)
canvaContext2.lineTo(50, 100)
canvaContext2.lineTo(100, 130)
canvaContext2.lineTo(150, 100)
canvaContext2.lineTo(200, 130)
canvaContext2.fillStyle = 'purple'
canvaContext2.fill()
canvaContext2.stroke()

// Parte izquierda
canvaContext2.beginPath()
canvaContext2.moveTo(50, 100)
canvaContext2.lineTo(50, 220)
canvaContext2.lineTo(150, 260)
canvaContext2.lineTo(150, 210)
canvaContext2.lineTo(100, 190)
canvaContext2.lineTo(100, 130)
canvaContext2.fillStyle = 'indigo'
canvaContext2.fill()
canvaContext2.stroke()

// // Parte  derecha
canvaContext2.beginPath()
canvaContext2.moveTo(250, 100)
canvaContext2.lineTo(250, 220)
canvaContext2.lineTo(150, 260)
canvaContext2.lineTo(150, 210)
canvaContext2.lineTo(200, 190)
canvaContext2.lineTo(200, 130)
canvaContext2.lineTo(250, 100)
canvaContext2.fillStyle = 'indigo'
canvaContext2.fill()
canvaContext2.stroke()

// cuadrado derecho
canvaContext2.beginPath()
canvaContext2.moveTo(150, 100)
canvaContext2.lineTo(150, 160)
canvaContext2.lineTo(200, 190)
canvaContext2.lineTo(200, 130)
canvaContext2.lineTo(150, 100)
canvaContext2.fillStyle = 'indigo'
canvaContext2.fill()
canvaContext2.stroke()

// cuadrado izquierdo
canvaContext2.beginPath()
canvaContext2.moveTo(150, 160)
canvaContext2.lineTo(100, 190)
canvaContext2.lineTo(100, 130)
canvaContext2.lineTo(150, 100)
canvaContext2.lineTo(150, 160)
canvaContext2.fillStyle = 'indigo'
canvaContext2.fill()
canvaContext2.stroke()

// cuadrado central
canvaContext2.beginPath()
canvaContext2.moveTo(150, 160)
canvaContext2.lineTo(100, 190)
canvaContext2.lineTo(150, 210)
canvaContext2.lineTo(200, 190)
canvaContext2.fillStyle = 'purple'
canvaContext2.fill()
canvaContext2.stroke()



let canva3 = document.getElementById('canvas3')
let canvaContext3 = canva3.getContext('2d')

canvaContext3.beginPath()
canvaContext3.moveTo(100,75)
canvaContext3.lineTo(145,50)
canvaContext3.lineTo(190,75)
canvaContext3.lineTo(145,100)
canvaContext3.lineTo(100,75)
canvaContext3.lineTo(50,102)
canvaContext3.lineTo(50,210)
canvaContext3.lineTo(145,265)
canvaContext3.lineTo(235,210)
canvaContext3.lineTo(235,145)
canvaContext3.lineTo(145,195)
canvaContext3.lineTo(100,170)
canvaContext3.lineTo(50,100)
canvaContext3.lineTo(100,170)
canvaContext3.lineTo(145,145)
canvaContext3.lineTo(190,170)
canvaContext3.lineTo(145,145)
canvaContext3.lineTo(100,75)
canvaContext3.lineTo(145,145)
canvaContext3.lineTo(190,170)
canvaContext3.lineTo(145,100)
canvaContext3.lineTo(190,170)
canvaContext3.lineTo(235,145)
canvaContext3.lineTo(235,145)
canvaContext3.lineTo(190,75)
canvaContext3.lineTo(235,145)
canvaContext3.lineTo(145,195)
canvaContext3.lineTo(145,265)
canvaContext3.stroke() 


let canva4 = document.getElementById('canvas4')
let canvaContext4 = canva4.getContext('2d')

canvaContext.beginPath()
canvaContext4.moveTo(100, 75)
canvaContext4.lineTo(145,50)
canvaContext4.lineTo(190,75)
canvaContext4.lineTo(145,100)
canvaContext4.lineTo(100,75)
canvaContext4.lineTo(50,102)
canvaContext4.lineTo(50,210)
canvaContext4.lineTo(145,265)
canvaContext4.lineTo(50,102)
canvaContext4.moveTo(95,176)
canvaContext4.lineTo(145,145)
canvaContext4.lineTo(100,75)
canvaContext4.lineTo(50,102)
canvaContext4.moveTo(145,145)
canvaContext4.lineTo(145,100)
canvaContext4.lineTo(100,75)

canvaContext4.moveTo(145, 145)
canvaContext4.lineTo(190,117)
canvaContext4.lineTo(190,75)
canvaContext4.lineTo(145,100)
canvaContext4.moveTo(190,117)
canvaContext4.lineTo(245,145)
canvaContext4.lineTo(245,195)
canvaContext4.lineTo(145,265)
canvaContext4.lineTo(185,180)
canvaContext4.lineTo(245,145)
canvaContext4.moveTo(185,180)
canvaContext4.lineTo(95,176)
canvaContext4.lineTo(190,117)
canvaContext4.lineTo(245,145)
canvaContext4.moveTo(185, 180)
canvaContext4.lineTo(145,265)
canvaContext4.lineTo(95,176)
canvaContext4.moveTo(95, 176)
canvaContext4.lineTo(50,102)



canvaContext4.fillStyle = 'lightgreen'
canvaContext4.fill()

canvaContext4.stroke()