var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var currentX
var currentY
var lastX
var lastY
var color = "green"
var width = 1

if(screen.width<992){
    canvas.width=screen.width-70
    canvas.height=screen.height-300
    document.body.style.overflow="hidden"
}

canvas.addEventListener("touchstart", myTouchStart)
function myTouchStart(e) {
    color = document.getElementById("colors").value
    width = document.getElementById("lineWidth").value
    lastX = e.touches[0].clientX - canvas.offsetLeft
    lastY = e.touches[0].clientY - canvas.offsetTop
}

canvas.addEventListener("touchmove", myTouchMove)
function myTouchMove(e) {
    currentX = e.touches[0].clientX - canvas.offsetLeft
    currentY = e.touches[0].clientY - canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()
    lastX = currentX
    lastY = currentY
}


function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}