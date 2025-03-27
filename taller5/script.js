//--------------------------------------------------------------------------Punto 1--------------------------------------------------------------------------//
function drawCircle(color, x, y) {
  let canva1 = document.getElementById('punto1')
  let canvaContext = canva1.getContext('2d')
  canvaContext.strokeStyle = color
  canvaContext.beginPath()
  canvaContext.arc(x, y, 150, 0, 2 * Math.PI)
  canvaContext.stroke()
}

drawCircle('green', 160, 160)
drawCircle('blue', 340, 160)
drawCircle('purple', 250, 340)

//--------------------------------------------------------------------------Punto 2--------------------------------------------------------------------------//
function figures(canvas, color, xi, yi, xf, yf) {
  let canva2 = document.getElementById(canvas)
  let canvaContext = canva2.getContext('2d')
  canvaContext.strokeStyle = color
  canvaContext.beginPath()
  canvaContext.moveTo(xi, yi)
  canvaContext.lineTo(xf, yf)
  canvaContext.stroke()
}

figures('punto2', 'red', 10, 400, 490, 400) //linea roja
figures('punto2', 'black', 250, 400, 490, 355) //base del derecha cubo
figures('punto2', 'black', 490, 355, 490, 200) //recta hacia rriba despues de la base derecha
figures('punto2', 'black', 250, 400, 10, 355) //base del izquierda cubo
figures('punto2', 'black', 10, 355, 10, 200) //recta hacia arriba despues de la base izquierda
figures('punto2', 'black', 250, 400, 250, 250) //recta central
figures('punto2', 'black', 10, 200, 250, 250) //coneccion izquierda a centro
figures('punto2', 'black', 490, 200, 250, 250) //coneccion derecha a centro
figures('punto2', 'black', 490, 200, 250, 150) //recta derecha a centro superior
figures('punto2', 'black', 10, 200, 250, 150) //recta izquierda a centro superior
figures('punto2', 'black', 80, 200, 250, 230) //cuadrado central
figures('punto2', 'black', 250, 230, 410, 200) //cuadrado central
figures('punto2', 'black', 410, 200, 250, 170) //cuadrado central
figures('punto2', 'black', 250, 170, 80, 200) //cuadrado central
figures('punto2', 'black', 250, 170, 250, 230) //cuadrado central

//--------------------------------------------------------------------------Punto 3--------------------------------------------------------------------------//
// Triángulo
figures('punto3', 'black', 55, 245, 145, 155)
figures('punto3', 'black', 145, 155, 235, 245)
figures('punto3', 'black', 235, 245, 55, 245)

// Rectángulo
figures('punto3', 'black', 245, 155, 445, 155)
figures('punto3', 'black', 445, 155, 445, 245)
figures('punto3', 'black', 445, 245, 245, 245)
figures('punto3', 'black', 245, 245, 245, 155)

// Trapecio
figures('punto3', 'black', 55, 265, 235, 265)
figures('punto3', 'black', 235, 265, 195, 345)
figures('punto3', 'black', 195, 345, 95, 345)
figures('punto3', 'black', 95, 345, 55, 265)

// Hexágono
figures('punto3', 'black', 245, 305, 295, 265)
figures('punto3', 'black', 295, 265, 395, 265)
figures('punto3', 'black', 395, 265, 445, 305)
figures('punto3', 'black', 445, 305, 395, 345)
figures('punto3', 'black', 395, 345, 295, 345)
figures('punto3', 'black', 295, 345, 245, 305)

//--------------------------------------------------------------------------Punto 4--------------------------------------------------------------------------//
const canvas = document.getElementById('punto4')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'lightblue'//llena el fondo de color
ctx.fillRect(20, 20, 100, 50) // Dibuja un rectángulo 

ctx.strokeStyle = 'red' //color de las lienas
ctx.lineWidth = 3 //grosor de las lineas
ctx.strokeRect(150, 20, 100, 50) // Dibuja el contorno de un rectángulo

ctx.fillStyle = 'green' //llena el fondo de color
ctx.fillRect(20, 100, 100, 50) // Dibuja un rectángulo verde
ctx.clearRect(40, 110, 40, 30) // Limpia una porción del rectángulo


ctx.beginPath() // Funcion para comenzar a dibujar
ctx.moveTo(20, 200) // Punto inicial
ctx.lineTo(120, 200) // Línea desde el punto inicial hasta x, y
ctx.lineTo(70, 150) // Línea desde el punto anterior hasta x, y
ctx.closePath() // Cierra el camino volviendo al punto inicial
ctx.fillStyle = 'yellow'
ctx.fill() // Rellena el triángulo
ctx.strokeStyle = 'black'
ctx.stroke() // Dibuja el contorno


ctx.beginPath()// Funcion para comenzar a dibujar
ctx.arc(200, 200, 40, 0, Math.PI * 2) // funcion que dibuja un circulo x, y, radio, inicio, fin, sentido antihorario
ctx.fillStyle = 'purple' //color de relleno
ctx.fill() //rellena el circulo
ctx.stroke() //dibuja el contorno


ctx.beginPath() // Funcion para comenzar a dibujar
ctx.moveTo(20, 300) // Punto inicial
ctx.quadraticCurveTo(70, 250, 120, 300) // punto de control y destino
ctx.strokeStyle = 'orange' //color de las lineas
ctx.stroke() //dibuja el contorno


ctx.beginPath() // Funcion para comenzar a dibujar
ctx.moveTo(150, 300) // Punto inicial
ctx.bezierCurveTo(170, 250, 230, 350, 250, 300) // dos puntos de control y destino 
ctx.strokeStyle = 'blue' //color de las lineas
ctx.stroke() //dibuja el contorno


ctx.save() //guarda el estado actual


ctx.translate(300, 50) //traslada el contexto
ctx.rotate(Math.PI / 4) // Rota 45 grados
ctx.scale(1.5, 1.5) // aumenta el tamaño
ctx.fillStyle = 'pink' //color de relleno
ctx.fillRect(0, 0, 50, 50) // Dibuja un rectángulo transformado


ctx.restore() //restaura el estado guardado


const grad = ctx.createLinearGradient(300, 200, 400, 200) //crea un cuadrado para hacerle un degradado
grad.addColorStop(0, 'red') //color de inicio
grad.addColorStop(1, 'blue') //color de fin
ctx.fillStyle = grad //color de relleno
ctx.fillRect(300, 200, 100, 50) // Dibuja un rectángulo con degradado


ctx.font = '20px Arial' //fuente y tamaño
ctx.fillStyle = 'black' //color de relleno
ctx.fillText('Texto En canvas', 300, 320) // Texto relleno
ctx.strokeStyle = 'red' //color del contorno
ctx.strokeText('Texto en canvas', 300, 350) // Texto contorneado

const metrics = ctx.measureText('Canvas API')
ctx.fillText('Ancho del texto: ' + metrics.width, 300, 380) // Ancho del texto


ctx.save() //guarda el estado actual
ctx.fillStyle = 'green' //color de relleno
ctx.fillRect(20, 400, 100, 50) // Dibuja un rectángulo
ctx.restore() //restaura el estado guardado
// Después de restaurar, se vuelve a usar el estilo original
ctx.fillRect(150, 400, 100, 50) // Dibuja un rectángulo
