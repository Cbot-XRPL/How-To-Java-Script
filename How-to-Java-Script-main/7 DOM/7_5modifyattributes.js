

//modify attributes

const link = document.querySelector('a');


console.log(link.getAttribute('href'));

             //attibute to change   //new attibute
link.setAttribute('href','https://www.thenetninja.co.uk');
link.innerText = 'TheNet Ninja Website'

//console.log(link.getAttribute('href'));

const mssg = document.querySelector('p');

//console.log(mssg.getAttribute('class'));

mssg.setAttribute('class','success')
                //text color change   //color
mssg.setAttribute('style','color: green;')

console.log(mssg.getAttribute('class'));