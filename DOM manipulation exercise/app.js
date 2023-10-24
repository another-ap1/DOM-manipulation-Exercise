//#1
const cont = document.getElementById('container');

//#2
const container = document.querySelector('#container');

//#3
const second = document.getElementsByClassName('second');

//#4
const olThird = document.querySelector('ol li.third');

//#5
//container.innerText = 'Hello!';

//#6
let footer = document.querySelector('.footer');
footer.classList.add('main');

//#7
footer.classList.remove('main');

//#8
const newLi = document.createElement('li');
//#9
newLi.textContent = 'four';
//#10
const ul = document.querySelector('ul');
ul.append(newLi);

//#11
const ol = document.querySelectorAll('ol');
for(let i = 0; i < ol.length; i++){
    ol[i].style.backgroundColor = "green";
}

//#12
footer.remove();