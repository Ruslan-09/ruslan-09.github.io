function aboutUs() {
    document.getElementById("section1").innerHTML = document.getElementById("paragraph1").innerHTML
}

function calculate() {
    document.getElementById("section1").innerHTML = document.getElementById("calculation").innerHTML
}

function contactUs() {
    document.getElementById("section1").innerHTML = document.getElementById("contacts").innerHTML
}

let array = []

function add(){
	let number = document.getElementById("number").value
    array.push(Number(number))
    document.getElementById("array").innerHTML = array
    document.getElementById("number").value = ''
}

function calc(){
    let sum = 0
    for (item of array) {
        sum += item
    }
    document.getElementById("avarage").innerHTML = "Avarage = " + sum/array.length
}

function max(){
    let maxV = array[0]
    for (item of array){
        if (maxV < item){
            maxV = item
        }
    }
    document.getElementById("maxValue").innerHTML = "Max value = " + maxV
}

function min(){
    let minV = array[0]
    for (item of array){
        if (minV > item){
            minV = item
        }
    }
    document.getElementById("minValue").innerHTML = "Min value = " + minV
}
