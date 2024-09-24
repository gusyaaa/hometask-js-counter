let increase = document.getElementById("1")
let decrease = document.getElementById("2")
let increase5 = document.getElementById("3")
let decrease5 = document.getElementById("4")
let color = document.getElementById("5")
let sizeIncrease = document.getElementById("6")
let sizeDecrease = document.getElementById("7")
let counterp = document.querySelector("p")

let a = 0;
increase.addEventListener("click", () =>{
    counterp.innerHTML = a++;
})
decrease.addEventListener("click", () =>{
    counterp.innerHTML = a -= 1;
})
increase5.addEventListener("click", () =>{
    counterp.innerHTML = a += 5;
})
decrease5.addEventListener("click", () =>{
    counterp.innerHTML = a -= 5;
})

function getRandomColor(){
    let r1 = Math.floor(Math.random() * 255)
    let r2 = Math.floor(Math.random() * 255)
    let r3 = Math.floor(Math.random() * 255)
    return `rgb(${r1}, ${r2}, ${r3})`
}

color.addEventListener("click", () =>{
    counterp.style.color = getRandomColor()
})

let fontSize = 16;
sizeIncrease.addEventListener("click", () =>{
    fontSize++
    counterp.style.fontSize = fontSize +"px"
})
sizeDecrease.addEventListener("click", () =>{
    fontSize--
    counterp.style.fontSize = fontSize +"px"
})