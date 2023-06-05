let num1 = document.querySelector(".num1")
let num2 = document.querySelector(".num2")
let addbtn = document.querySelector('#add')
let subbtn = document.getElementById("sub")
let divbtn = document.getElementById("div")
let multibtn = document.getElementById("multi")
let result = document.querySelector("h1")



function sum() {
    const number1 = parseInt(num1.value)
    const number2 = parseInt(num2.value)
    const addition = number1 + number2
    document.querySelector("#result").textContent = addition
}

addbtn.addEventListener('click', sum)

function diff() {
    const number1 = parseInt(num1.value)
    const number2 = parseInt(num2.value)
    const subtraction = number1 - number2
    document.querySelector("#result").textContent = subtraction
}

subbtn.addEventListener('click', diff)

function product() {
    const number1 = parseInt(num1.value)
    const number2 = parseInt(num2.value)
    const multiplication = number1 * number2
    document.querySelector("#result").textContent = multiplication
}

multibtn.addEventListener('click', product)

function divsion() {
    const number1 = parseInt(num1.value)
    const number2 = parseInt(num2.value)
    const divide = number1 / number2
    document.querySelector("#result").textContent = divide
}
divbtn.addEventListener('click', divsion)