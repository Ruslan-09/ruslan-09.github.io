let pets = ['kitten1', 'kitten2', 'kitten3', 'kitten4']

let width = window.innerWidth;

if(width < 820) {

   window.addEventListener('scroll', function() {

    let header = document.getElementById('header')
    let nav = document.getElementById('nav')
    let btn = document.getElementById('btnBlock')
    
    header.setAttribute('style', 'zoom: 0.63; height: 50px; transition: 1s;')
    nav.setAttribute('style', 'zoom: 0.8; position: sticky; top: 40px; transition: 0.3s;')
    btn.setAttribute('style', 'position: absolute; top: 5px; right: 5%; transition: 0.3s;')
  })
}

function insertContent(buttonId, contentId) {
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
    let array = document.getElementById("imageZoomDiv").innerHTML
    let x = array.charAt(array.length-14)

    x++
    if (x > pets.length) {
        x = 1
    }
    document.getElementById('imageZoomDiv').innerHTML = document.getElementById("imgChoose"+x).innerHTML
}

function left() {
    let array = document.getElementById("imageZoomDiv").innerHTML
    let x = array.charAt(array.length-14)
    
    x--
    if (x < 1) {
        x = 4
    }
    document.getElementById('imageZoomDiv').innerHTML = document.getElementById("imgChoose"+x).innerHTML
}

function sendComment() {
    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    if (document.getElementById('inputNane').value != '' && document.getElementById('textarea').value != '') {

        let div = document.createElement('div')  
        let t = document.createElement('p')  
        let name = document.createElement('h6') 
        let comment = document.createElement('p') 
        let hr = document.createElement('hr') 

        div.setAttribute('class', 'commemt-div')
        t.setAttribute('id', 'dateP')  
        name.setAttribute('id', 'commentH4') 
        comment.setAttribute('id', 'commentP') 

        document.getElementById('commentAdd').prepend(div)       
        div.prepend(comment)       
        div.prepend(name)
        div.prepend(t)
        div.append(hr)

        document.getElementById('dateP').innerHTML = (day + '.' + (+month+1) + '.' + year)
        document.getElementById('commentH4').innerHTML = (document.getElementById('inputNane').value.charAt(0).toUpperCase() + document.getElementById('inputNane').value.slice(1)) + ' :'
        document.getElementById('commentP').innerHTML = '« ' + document.getElementById('textarea').value + ' »'
           
        document.getElementById('inputNane').value = ''
        document.getElementById('textarea').value = ''

    } else {
        M.toast({html: 'Enter your name and your comment, please!'})
    }
    
}

function addToCart(petId, cartItemId) {
    M.toast({html: 'Added to your cart!'})

    let div = document.createElement('div')
    div.setAttribute('class', 'cart-item')
    document.getElementById('cartWrapper').append(div) 
}

M.toast({html: 'Still under development'})
