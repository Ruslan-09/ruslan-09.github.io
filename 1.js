let array = []

function insert(contentId, buttonId) {
    for (item of ["about", "calc", "tableButton", "contact"]) {
        document.getElementById(item).classList.remove('selected');
    }
    document.getElementById(buttonId).classList.add('selected');
    document.getElementById("section1").innerHTML = document.getElementById(contentId).innerHTML
}

function addPet() {   
    let pet = {
                "kindIn": "kindStr", 
                "nameIn": "nameStr", 
                "colorIn": "colorStr", 
                "weightIn": "weightStr"
               }
    let pet1 = []
    let i = 0
    let tr = document.createElement('tr') 
    document.getElementById("tableBody").append(tr) 
    for (it of ["kindIn", "nameIn", "colorIn", "weightIn"]) {
        let td = document.createElement('td') 
        tr.append(td) 
        td.id = pet[it]
        pet1[i] = document.getElementById(it).value
        document.getElementById(it).value = ''
        td.innerHTML = pet1[i]
        i++
    }
}

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
