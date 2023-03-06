window.addEventListener("resize", AutoScale); //Масштабируем страницу при растягивании окна

AutoScale(); 

function AutoScale()
{
    let width = window.innerWidth;

    if(width > 820)
    {
        document.getElementById('main').setAttribute('href', 'css/main-normal.css')
    } else {
        document.getElementById('main').setAttribute('href', 'css/main-small.css')
    }
}

