export function calc() {
    let sum = 0
    for (item of array) {
        sum += item
    }
    document.getElementById("avarage").innerHTML = "Avarage = " + sum/array.length
}

export function max() {
    let maxV = array[0]
    for (item of array){
        if (maxV < item){
            maxV = item
        }
    }
    document.getElementById("maxValue").innerHTML = "Max value = " + maxV
}

export function min() {
    let minV = array[0]
    for (item of array){
        if (minV > item){
            minV = item
        }
    }
    document.getElementById("minValue").innerHTML = "Min value = " + minV
}
