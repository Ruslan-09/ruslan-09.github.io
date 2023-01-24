function insertContent(contentId, buttonId) {
    for (item of ["about", "calc", "tableButton", "contact"]) {
        document.getElementById(item).classList.remove('selected')
    }
    document.getElementById(buttonId).classList.add('selected')
    document.getElementById("section1").innerHTML = document.getElementById(contentId).innerHTML
}

function insertTable (TableId) {
    document.getElementById("section1").append(document.getElementById(TableId))
    document.getElementById("tables1").innerHTML = document.getElementById(TableId).innerHTML
}

