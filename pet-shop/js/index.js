let pets = ['kitten1', 'kitten2', 'kitten3', 'kitten4']
let x = 3

function insertContent(contentId, buttonId) {
    for (item of ["kittensButton", "puppiesButton", "snakesButton", "contact"]) {
        document.getElementById(item).classList.remove('selected')
    }
    document.getElementById(buttonId).classList.add('selected')
    document.getElementById("section1").innerHTML = document.getElementById(contentId).innerHTML
}

function insertPetsPhoto(imgButtonId, divId) {
    document.getElementById(divId).innerHTML = document.getElementById(imgButtonId).innerHTML
}

function zoom() {
    document.getElementById("imageZoomDiv").innerHTML = document.getElementById("imgPhotoMain").innerHTML
    document.getElementById("imageZoomDivWrapper").setAttribute('style', 'display: block')
}

function closeImage() {
    document.getElementById("imageZoomDiv").innerHTML = ''
    document.getElementById("imageZoomDivWrapper").setAttribute('style', 'display: none')
}

function right() {
    console.log(document.getElementById('imageZoomDiv').innerHTML);
    document.getElementById('imageZoomDiv').innerHTML = document.getElementById("imgPhotoButton"+x).innerHTML
    console.log(document.getElementById('imageZoomDiv').innerHTML);
    x++
    if (x > pets.length) {
        x = 1
    }
}

function left() {
    console.log(document.getElementById('imageZoomDiv').innerHTML);
    document.getElementById('imageZoomDiv').innerHTML = document.getElementById("imgPhotoButton"+x).innerHTML
    console.log(document.getElementById('imageZoomDiv').innerHTML);
    x--
    if (x < 1) {
        x = 4
    }

}

function sendComment() {

    const date = new Date()

    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    if (document.getElementById('inputNane').value != '' && document.getElementById('textarea').value != '') {

        let h4 = document.createElement('h4').setAttribute('id', 'commentH4')
        let Timme = document.createElement('p').setAttribute('id', 'dateP')
        let p = document.createElement('p').setAttribute('id', 'commentP')

        document.getElementById('commentH4').innerHTML = document.getElementById('inputNane').value + ':'
        document.getElementById('dateP').innerHTML = day + '.' + (+month+1) + '.' + year
        document.getElementById('commentP').innerHTML = '« ' + document.getElementById('textarea').value + ' »'
            
        document.getElementById('inputNane').value = ''
        document.getElementById('textarea').value = ''
    } else {
        alert('Input your name and your comment!')
    }
    
}

M.toast({html: 'Still under development'})
