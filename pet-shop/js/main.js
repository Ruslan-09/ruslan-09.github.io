let petPhotos = ['kitten1', 'kitten2', 'kitten3', 'kitten4']

let width = window.innerWidth;

let kindSet = getKindSet()

let cartCounter = 0

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
    document.getElementById('btnBlock').innerHTML += `
        <button id="cartButton" class="cart" data-count="${cartCounter}" onclick="showCart()"><img class="cartIcon" src="images/cart.png">Cart</button>
        <button class="logIn" onclick="M.toast({html: 'Still under development'})">Log in</button>`

    for (kind of kindSet) {
        let div = document.createElement('div')
        div.setAttribute('id', kind)
        div.setAttribute('style', 'display: none')
        document.body.append(div)

        document.getElementById('nav').innerHTML += `<button id='${kind}Button' class='nav' data-count="${counters[kind]}" onclick="insertContent('${kind}Button', '${kind}')">${camelize(kind)}</button>`
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
                                <img id='kitten1-img' class='pet' src='${pet.photo1}'><br>
                                <figcaption>
                                    <h6>${pet.name}</h3>
                                    <p>Age: ${pet.age}</p>
                                    <p>Color: ${pet.color}</p>
                                    <p><strong>${pet.price}: Priceless</strong></p>
                                </figcaption>
                            </div>
                            <button class="addToCart" onclick="addToCart('${pet.id}')">Add to cart</button>
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
    for (pet of pets) {
        if (petId === pet.id) {
            let description = `
                    <div style="float: left;">
                        <figure class="pets-photo">
                            <div id="imgPhotoMain" class="wrapper exmpl" onclick="zoom()"> 
                                <img src='${pet.photo1}'>
                            </div> 
                            <figcaption id="123">
                                <div class="wrapper1 exmpl1" id="imgChoose1" onclick="insertPetsPhoto('imgChoose1', 'imgPhotoMain')">
                                    <img src="${pet.photo1}">
                                </div>
                                <div class="wrapper1 exmpl1" id="imgChoose2" onclick="insertPetsPhoto('imgChoose2', 'imgPhotoMain')">
                                    <img src="${pet.photo2}">
                                </div>
                                <div class="wrapper1 exmpl1" id="imgChoose3" onclick="insertPetsPhoto('imgChoose3', 'imgPhotoMain')">
                                    <img src="${pet.photo3}">
                                </div>
                                <div class="wrapper1 exmpl1" id="imgChoose4" onclick="insertPetsPhoto('imgChoose4', 'imgPhotoMain')">
                                    <img src="${pet.photo4}">
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div id="imageZoomDivWrapper" class="imageZoomDivWrapper" style="display: none;">
                        <div id="imageZoomDiv" class="imageZoom Div" onclick="closeImage()"></div>
                        <div id="leftArrow" class="left arrow" onclick="left()">
                            <img class="left-right-img" src="images/left.png" alt="">
                        </div>
                        <div id="rightArrow" class="right arrow" onclick="right()">
                            <img class="left-right-img" src="images/right.png" alt="">
                        </div>
                        <div id="closeSign" class="closeSign" onclick="closeImage()">
                            <img src="images/close.png" alt="">
                        </div>
                    </div>
                    <div style="display: inline-block; margin-left: 5%;">
                        <button class="buy" onclick="M.toast({html: 'Still under development'})">Take me home</button>
                        <button class="buy" onclick="addToCart('${pet.id}')">Add to cart</button>
                        <h5>Name: ${pet.name}</h5>
                        <p>Age: ${pet.age}</p>
                        <p>Color: ${pet.color}</p>
                        <p><strong>Price: ${pet.price}</strong></p>
                        <h5>Description:</h5> 
                        <p>${pet.description}</p>
                    </div>	
                    <div id="commentSection" class="comment-section">
                        <h6>Leave your comment:</h6>
                        <hr>
                        <div id="commentAdd"></div><br>
                        <input type="text" name="" id="inputNane" placeholder="Your name" style="zoom: 0.7; width: 60%;"><br>
                        <textarea name="" id="textarea" class="materialize-textarea" placeholder="Your comment" cols="60" rows="10"></textarea><br>
                        <button class="addToCart" style="width: 80px;" onclick="sendComment()">Send</button>
                    </div>`
            document.getElementById(contentId).innerHTML = description
            document.getElementById('section1').innerHTML = document.getElementById(contentId).innerHTML
        }
    }

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

function addToCart(petId) {
    if (cart[petId] === undefined) {
        cart[petId] = 1
        M.toast({ html: 'Added to your cart.' })
        cartCounter++
    } else {
        cart[petId]++
        M.toast({ html: 'Already added to your cart.' })
    }

    document.getElementById('cartButton').setAttribute('data-count', cartCounter)
}

function showCart() {
    document.getElementById('cartWrapper').style.display='block'
    document.getElementById('cartWrapper').innerHTML = `
        <div id="closeSignCart" class="closeCart" onclick="document.getElementById('cartWrapper').style.display='none'">
            <img src="images/close.png" alt="">
        </div>
        <div class='btnBuy'>
            <button id="buyButton" class="cart" data-count="${cartCounter}" onclick="M.toast({ html: 'Still under development' })">Take home</button>
        </div class='btnBuy'>`

    Object.keys(cart).forEach(id => {
        document.getElementById('cartWrapper').innerHTML += `
            <div class="cart-item">
                <img id='kitten1-img' class='pet' src='${getPetById(id).photo1}'>
                <div>
                    <strong>${getPetById(id).name}</strong> <br>
                    Age: ${getPetById(id).age} <br>
                    Color: ${getPetById(id).color} <br>
                    Price: ${getPetById(id).price}
                </div>
                <img class="deleteIcon" onclick="this.parentElement.remove(), removeItemFromCart('${id}')" src="images/delete.png"> <br>
            </div>`
    }) 
}

function removeItemFromCart(id) {
    delete cart[id]
    cartCounter--
    document.getElementById('buyButton').setAttribute('data-count', cartCounter)
    document.getElementById('cartButton').setAttribute('data-count', cartCounter)
}

function getPetById(petId) {
    let pet = pets.find(pet => {
        return pet.id === petId
    })
    return pet
}

if (width < 820) {

    window.addEventListener('scroll', function () {

        let header = document.getElementById('header')
        let nav = document.getElementById('nav')
        let btn = document.getElementById('btnBlock')

        header.setAttribute('style', 'zoom: 0.63; height: 50px; transition: 0.5s;')
        nav.setAttribute('style', 'zoom: 0.7; position: sticky; top: 40px; transition: 0.5s;')
        btn.setAttribute('style', 'position: absolute; top: 5px; right: 5%; transition: 0.5s;')
    })
}

function camelize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

M.toast({ html: 'Still under development' })
