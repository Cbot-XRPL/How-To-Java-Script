//modify element inner text

const para = document.querySelector('p');
/* 
console.log(para.innerText);

para.innerText = 'ninjas are awsome!' */

//modify mutiple tags text at once

const paras = document.querySelectorAll('p');

/* paras.forEach(para =>{
    console.log(para.innerText);
    para.innerText += ' new text';
   
}); */

 //modify class html
const content = document.querySelector('.content');

//content.innerHTML += '<h2>THIS IS A NEW H2</h2>'

const people = ['mario', 'lugi','yoshi']

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`
});



