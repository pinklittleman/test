let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")
// let elem = document.body

canvas.width = innerWidth
canvas.height = innerHeight
// elem.mozRequestFullScreen()

let shapes =  []
let colours = ["#E01A4F", "#F15946", "#F9C22E", "#53B3CB"]

class Square{
    constructor(x,y){
        this.x = x
        this.y = y
        this.colour = colours[Math.floor(Math.random()*colours.length)]
        this.L_Xoff = 55
        this.R_Xoff
        this.L_Yoff
        this.R_Yoff

        shapes.push(this)
    }
    draw(){
        ctx.beginPath()
        ctx.lineWidth = 8
        ctx.strokeStyle = this.colour
        // ctx.fillStyle = "rgb(255,25,25)"
        ctx.moveTo(this.x,this.y)
        ctx.lineTo(this.x-this.L_Xoff,this.y)
        ctx.lineTo(this.x-55,this.y-55)
        ctx.lineTo(this.x,this.y-55)
        ctx.lineTo(this.x,this.y)
        ctx.closePath()
        ctx.stroke();
    }
    tran(){

    }
}

class Circle{
    constructor(x,y){
        this.x = x
        this.y = y
        this.colour

        shapes.push(this)
    }
    draw(){
        ctx.arc(this.x,this.y,10,Math.pi*2,0)
    }
}

class Triangle{
    constructor(x,y){
        this.x = x
        this.y = y
        this.colour

        shapes.push(this)
    }
    draw(){

    }
}

for (let i = 0; i < 500; i++) {
    const randomX = Math.floor(Math.random() * canvas.width);
    const randomY = Math.floor(Math.random() * canvas.height);
    const square = new Square(randomX, randomY);
    
}

setInterval(() => {
    shapes.splice(Math.floor(Math.random()*shapes.length),1)
    const randomX = Math.floor(Math.random() * canvas.width);
    const randomY = Math.floor(Math.random() * canvas.height);
    const square = new Square(randomX, randomY);
}, 50);

function drawloop(){

    ctx.clearRect(0,0,canvas.width,canvas.height)

    shapes.forEach(shape => {
        
        shape.draw()
        shape.tran()

    });

    requestAnimationFrame(drawloop)
}

requestAnimationFrame(drawloop)