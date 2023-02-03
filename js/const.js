let literalsJson = {
    "En": {},
    "Ru": {}
}

literalsJson.En.aboutMe = `AAA Equipping yourself with the right "about us" template can help you expertly lay out your vision faster. <br>
That's why our team gathered five templates to help you build the perfect about page.<br>
Like other about pages, the about section of your website should include your mission, purpose, <br>
and who's on your team. But there are other best practices for crafting a stellar about page. <br><br>
<strong>In this post, you'll explore:</strong> <br>
<ul>
    <li>What makes a good about page?</li>
    <li>How to write an about page</li>
    <li>About us page design</li>
    <li>The Best About Us Page Templates and Examples</li>
    <li>The Best About Me Page Templates and Examples</li>
</ul>
`
literalsJson.En.contacts = `
    Adress: 3225. Sokak, Ciftlikkoy, Yenisehir, Mersin. <br>
    Tel.: +90-536-017-33-98<br>
    E-mail: Ruslan.Bairamuk.09@gmail.com <br>
`
literalsJson.Ru.aboutMe = `Снабдив себя правильным шаблоном "о нас", вы сможете быстрее профессионально изложить свое видение. <br>
Вот почему наша команда собрала пять шаблонов, которые помогут вам создать идеальную страницу информации.<br>
Как и на других страницах "О нас", раздел "О нас" на вашем веб-сайте должен содержать информацию о вашей миссии, целях, <br>
и кто в вашей команде. Но есть и другие рекомендации по созданию звездной страницы «о себе». <br><br>
<strong>В этом посте вы узнаете:</strong> <br>
<ul>
     <li>Чем хороша страница информации о себе?</li>
     <li>Как написать страницу информации о себе</li>
     <li>Дизайн страницы "о нас"</li>
     <li>Лучшие шаблоны и примеры страниц о нас</li>
     <li>Лучшие шаблоны и примеры страницы «Обо мне»</li>
</ul>
`
literalsJson.Ru.contacts = `
    Адрес: ул. 3225, Чифлиткой, Енишехир, Мерсин. <br>
    Tel.: +90-536-017-33-98<br>
    E-mail: Ruslan.Bairamuk.09@gmail.com <br>
`
//choosenLanguege()

function choosenLanguege() {
    let lang = document.getElementById('langSwitcher').innerHTML 
    console.log(lang)
    document.getElementById('paragraph1').innerHTML = literalsJson[lang].aboutMe
    document.getElementById('contacts').innerHTML = literalsJson[lang].contacts
}
