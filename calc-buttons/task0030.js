document.addEventListener("DOMContentLoaded", () => {
    const inputElem = document.querySelector("input")
    inputElem.addEventListener("input", calculate)


document.getElementById("num_1").addEventListener('click', () => {
    inputElem.value += '1'
})
document.getElementById("num_2").addEventListener("click", () => {
    inputElem.value += '2'
})
document.getElementById("num_3").addEventListener("click", () => {
    inputElem.value += '3'
})
document.getElementById("num_4").addEventListener("click", () => {
    inputElem.value += '4'
})
document.getElementById("num_5").addEventListener("click", () => {
    inputElem.value += '5'
})
document.getElementById("num_6").addEventListener("click", () => {
    inputElem.value += '6'
})
document.getElementById("num_7").addEventListener("click", () => {
    inputElem.value += '7'
})
document.getElementById("num_8").addEventListener("click", () => {
    inputElem.value += '8'
})
document.getElementById("num_9").addEventListener("click", () => {
    inputElem.value += '9'
})
document.getElementById("num_0").addEventListener("click", () => {
    inputElem.value += '0'
})
document.getElementById("add").addEventListener("click", () => {
    inputElem.value += '+'
})
document.getElementById("divide").addEventListener("click", () => {
    inputElem.value += '/'
})
document.getElementById("subtract").addEventListener("click", () => {
    inputElem.value += '-'
})
document.getElementById("multiply").addEventListener("click", () => {
    inputElem.value += '*'
})
document.getElementById("clear").addEventListener("click", () => {
    inputElem.value = ''
})

})
function calculate (){
    let symbolIndex = 0
    let text = document.querySelector("input").value
    for (let i =0; i<text.length; i++){
        if ("+-/*".includes(text[i])){
            symbolIndex = i
        }
}
    const firstNum = Number(text.slice(0, symbolIndex))
    const secondNum = Number(text.slice(symbolIndex+1, text.length))
    let result = 0
    if (text[symbolIndex] === "+") result = firstNum + secondNum
    else if (text[symbolIndex] === "-") result = firstNum - secondNum
    else if (text[symbolIndex]=== "/") result = firstNum / secondNum
    else if (text[symbolIndex]=== "*") result = firstNum * secondNum
 
    
    document.querySelector("input").value = result
    
}
document.getElementById("equal").addEventListener("click", () => {
    inputElem.value = result
})