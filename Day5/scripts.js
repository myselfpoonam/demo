let num1 = document.querySelector(".num1")
let num2 = document.querySelector(".num2")
let addbtn = document.getElementById('add')
let subbtn = document.getElementById("sub")
let divbtn = document.getElementById("div")
let multibtn = document.getElementById("multi")
let result = document.querySelector("h1")




addbtn.addEventListener('click', () => {
    const a = +num1.value
    const b = +num2.value
    total = a + b
    document.querySelector("#result").textContent = total

})
subbtn.addEventListener('click', () => {
    const a = +num1.value
    const b = +num2.value
    total = a - b
    document.querySelector('#result').textContent = total
})
divbtn.addEventListener("click", () => {
    const a = +num1.value
    const b = +num2.value
    total = a / b
    document.querySelector("#result").textContent = total
})
multibtn.addEventListener("click", () => {
    const a = +num1.value
    const b = +num2.value
    total = a * b
    document.querySelector("#result").textContent = total
})


function Welcome(role) {
    if (role == "intern") {
        return ("I am a intern")
    } else {
        return ("I am not a intern")
    }
}
const developer = Welcome("intern")
console.log(developer)