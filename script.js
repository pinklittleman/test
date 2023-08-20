let body = document.querySelector("body")
let title = document.querySelector('title')
let elements2 = []
let counter = 0
let newcounter = document.documentElement.scrollHeight
let mouseX,mouseY

class text {
    constructor(x,y){
        this.x = x
        this.y = y
        this.colour = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
        this.text = document.createElement("div")
        elements2.push(this)
        this.pos = elements2.indexOf(this)
    }
    draw(){
        this.text.innerHTML = "Based. Based on what?"
        this.text.style.color = this.colour
        this.text.style.position = "absolute"
        this.text.style.left = `${this.x}px`
        this.text.style.top = `${this.y}px`
        body.appendChild(this.text)
        counter++
    }
    // offscr(){
    //     if(this.x > innerWidth){
    //         elements2.slice(this.pos,1)
    //     }
    // }
}


// document.onscroll = function(){
//     for (let j = 0; j < 45; j++) {
//         elements2[j] = document.createElement("div")
//         elements2[j].innerHTML = "Based. Based on what?"
//         elements2[j].style.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
//         elements2[j].style.position = "absolute"
//         elements2[j].style.left = `${Math.random()*innerWidth}px`
//         elements2[j].style.top = `${Math.random()*((innerHeight)+(counter)+(newcounter))/1.1}px`
//         body.appendChild(elements2[j])
//         counter++
//     }
// }


document.onmousemove = (event) =>{
    mouseX = event.clientX
    mouseY = event.clientY
}

function loop(){
    newcounter = document.documentElement.scrollHeight
    title.innerText = newcounter + "px"

    elements2.forEach(text => {
        if(this.x > innerWidth){
            text.x = 1
        }
        else{
            text.draw()
            text.y += Math.random()
            text.x += Math.floor(Math.random()*10)
        }
    });

    requestAnimationFrame(loop)
}

for (let i = 0; i < 40; i++) {
    new text(Math.random()*innerWidth-120,Math.random()*((innerHeight)+(newcounter)/2))
}

// setInterval(() => {
//     new text(Math.random()*innerWidth-120,Math.random()*((innerHeight)+(newcounter)/2))
// }, 200);

requestAnimationFrame(loop)