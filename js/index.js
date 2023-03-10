let array = []
let x = 0

function insertContent(contentId, buttonId) {
    for (item of ["about", "calc", "tableButton", "contact"]) {
        document.getElementById(item).classList.remove('selected')
    }
    document.getElementById(buttonId).classList.add('selected')
    document.getElementById("section1").innerHTML = document.getElementById(contentId).innerHTML
}

function addPet() {   
    let pet = {
                "kindInput3": "kindStr", 
                "nameInput3": "nameStr", 
                "colorInput3": "colorStr", 
                "weightInput3": "weightStr"
               }
    let tr = document.createElement('tr') 
    document.getElementById("tableBody3").append(tr) 
    for (it of ["kindInput3", "nameInput3", "colorInput3", "weightInput3"]) {
        let td = document.createElement('td') 
        tr.append(td) 
        td.id = pet[it]
        td.innerHTML = (document.getElementById(it).value.charAt(0).toUpperCase() + document.getElementById(it).value.slice(1))
        console.log(document.getElementById(it).value)
        document.getElementById(it).value = ''
    }
    x++
    let td = document.createElement('td') 
    tr.id = 'newLine'+x
    td.id = 'newBox'+x
    let but = document.createElement('button') 
        if (document.getElementById('langSwitcher').innerHTML === 'En') {
            but.innerHTML = 'Remove'
        } else {
            but.innerHTML = 'Удалить'
        }
    but.setAttribute("onclick", "this.parentElement.parentElement.remove()")
    but.classList.add('table')
    document.getElementById('newLine'+x).append(td) 
    document.getElementById('newBox'+x).append(but) 
}

function addNumber() {
	let number = document.getElementById("number").value
    array.push(Number(number))
    document.getElementById("array").innerHTML = array
    document.getElementById("number").value = ''
}

function calcAvarage() {
    let sum = 0
    for (item of array) {
        sum += item
    }
    if (document.getElementById('langSwitcher').innerHTML === 'En') {
        document.getElementById("avarage").innerHTML = 'Avarage = ' + sum/array.length
    } else {
        document.getElementById("avarage").innerHTML = 'Среднее значение = ' + sum/array.length
    }
}

function max() {
    let maxV = array[0]
    for (item of array){
        if (maxV < item){
            maxV = item
        }
    }
    if (document.getElementById('langSwitcher').innerHTML === 'En') {
        document.getElementById("maxValue").innerHTML = 'Max value = ' + maxV
    } else {
        document.getElementById("maxValue").innerHTML = 'Максимальное значение = ' + maxV
    }
}

function min() {
    let minV = array[0]
    for (item of array){
        if (minV > item){
            minV = item
        }
    }
    if (document.getElementById('langSwitcher').innerHTML === 'En') {
        document.getElementById("minValue").innerHTML = 'Min value = ' + minV
    } else {
        document.getElementById("minValue").innerHTML = 'Минимальное значение = ' + minV
    }
}

function convertData() {

    let outputJson = {}

    let input = document.getElementById('converterInput').value
        .split("\n")
        .filter(it => it.charAt(0) != ';')
        .filter(it => it != '\t\t\t')
        .filter(it => it != '')
        .forEach(it => {
            if (it.charAt(0) === '[') {
                console.log(it)
            } else {
                outputJson[it.split('=')[0]] = it.split('=')[1]
                console.log(outputJson)
            }
        })

    document.getElementById('converterOutput').innerHTML =  JSON.stringify(outputJson, null, 2)
}
