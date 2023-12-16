const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const div = document.getElementById('map');

function setLocation1() {
    div.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.270057751583!2d-51.14796552359354!3d-29.769831718597906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95196851aaa1d4cf%3A0x91788326d2e4e696!2sR.%20S%C3%A3o%20Caetano%2C%20350%20-%20Sala%201%20-%20Centro%2C%20S%C3%A3o%20Leopoldo%20-%20RS%2C%2093010-090!5e0!3m2!1spt-BR!2sbr!4v1702751530863!5m2!1spt-BR!2sbr" width="100%" height="500px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
}

function setLocation2() {
    div.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1829.0886930236056!2d-46.34166078437792!3d-23.52612155943796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7ae0db6066ab%3A0x6b67ad7d1bc13ba9!2sRua%20Maria%20Janoni%20Novazzi%2C%20333%20-%20Centro%2C%20Po%C3%A1%20-%20SP%2C%2008561-400!5e0!3m2!1spt-BR!2sbr!4v1702751768816!5m2!1spt-BR!2sbr" width="100%" height="500px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
}

function setLocation3() {
    div.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.169177560461!2d-34.841704321365086!3d-7.981457575786435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab3d14eb32b447%3A0x35c1d608bc570cf9!2sR.%20Carlos%20Leite%20Moreira%2C%20235%20-%20Casa%20Caiada%2C%20Olinda%20-%20PE%2C%2053130-470!5e0!3m2!1spt-BR!2sbr!4v1702752117516!5m2!1spt-BR!2sbr" width="100%" height="500px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
}

button1.addEventListener('click', setLocation1);
button2.addEventListener('click', setLocation2);
button3.addEventListener('click', setLocation3);
