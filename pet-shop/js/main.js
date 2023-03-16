let petPhotos = ['kitten1', 'kitten2', 'kitten3', 'kitten4']

let width = window.innerWidth;

let kindSet = getKindSet()

let counters = getCounters()

createButtons()

function getKindSet() {
    let set = new Set()

    for (pet of pets) {
        set.add(pet.kind)
    }
    set.add(ALL_BUTTON_ID)
    return set
}

function createButtons() {
    for (kind of kindSet) {
        let div = document.createElement('div')
        div.setAttribute('id', kind)
        div.setAttribute('style', 'display: none')
        document.body.append(div)

        document.getElementById('nav').innerHTML += `<button id='${kind}Button' class='nav' onclick="insertContent('${kind}Button', '${kind}')">${camelize(kind)} - ${counters[kind]}</button>`
    }
}

function getCounters() {

    let counters = {}

    kindSet.forEach(kind => {

        let petsCount = 0
        
        pets.forEach(pet => {
            if (kind === pet.kind || kind === ALL_BUTTON_ID) {
                petsCount++
            }
        })        
        counters[kind] = petsCount
        
    }) 
    return counters
}

function fillContent(contentId) {

    let petsList = ''

    for (pet of pets) {
        if (contentId === pet.kind || contentId === ALL_BUTTON_ID) {
            petsList += `<div class="pet">
                <div id="${pet.id}" onclick="insertDescription('${pet.id}', 'descriptionSection')">
                    ${pet.photo}<br>
                    <figcaption>
                        <h6>${pet.name}</h3>
                        <p>Age: ${pet.age}</p>
                        <p>Color: ${pet.color}</p>
                        <p><strong>${pet.price}: Priceless</strong></p>
                    </figcaption>
                </div>
                <button class="addToCart" onclick="addToCart(${pet.id})">Add to cart</button>
            </div>`
        }
    }
    document.getElementById(contentId).innerHTML = petsList
}

function insertContent(buttonId, contentId) {

    fillContent(contentId)

    for (kind of kindSet) {
        document.getElementById(`${kind}Button`).classList.remove('selected')
    }
    document.getElementById(buttonId).classList.add('selected')
    document.getElementById("section1").innerHTML = document.getElementById(contentId).innerHTML
}

function insertDescription(petId, contentId) {
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

function getX() {
    let subString = document.getElementById("imageZoomDiv").getElementsByTagName('img')[0].getAttribute('src').split('.')[0]
    return subString.charAt(subString.length - 1)
}

function right() {
    let x = getX()
    x++
    if (x > petPhotos.length) {
        x = 1
    }
    document.getElementById('imageZoomDiv').innerHTML = document.getElementById("imgChoose" + x).innerHTML
}

function left() {
    let x = getX()
    x--
    if (x < 1) {
        x = petPhotos.length
    }
    document.getElementById('imageZoomDiv').innerHTML = document.getElementById("imgChoose" + x).innerHTML
}

function sendComment() {
    const date = new Date()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()

    if (document.getElementById('inputNane').value != '' && document.getElementById('textarea').value != '') {

        let div = document.createElement('div')
        let t = document.createElement('t')
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

        document.getElementById('dateP').innerHTML = (day + '.' + (+month + 1) + '.' + year)
        document.getElementById('commentH4').innerHTML = (camelize(document.getElementById('inputNane').value)) + ' :'
        document.getElementById('commentP').innerHTML = '« ' + document.getElementById('textarea').value + ' »'

        document.getElementById('inputNane').value = ''
        document.getElementById('textarea').value = ''

    } else {
        M.toast({ html: 'Enter your name and your comment, please!' })
    }

}

function addToCart(petId, cartItemId) {
    M.toast({ html: 'Added to your cart!' })

    let div = document.createElement('div')
    div.setAttribute('class', 'cart-item')
    document.getElementById('cartWrapper').append(div)
}

if (width < 820) {

    window.addEventListener('scroll', function () {

        let header = document.getElementById('header')
        let nav = document.getElementById('nav')
        let btn = document.getElementById('btnBlock')

        header.setAttribute('style', 'zoom: 0.63; height: 50px; transition: 0.5s;')
        nav.setAttribute('style', 'zoom: 0.85; position: sticky; top: 40px; transition: 0.5s;')
        btn.setAttribute('style', 'position: absolute; top: 5px; right: 5%; transition: 0.5s;')
    })
}

function camelize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

M.toast({ html: 'Still under development' })
