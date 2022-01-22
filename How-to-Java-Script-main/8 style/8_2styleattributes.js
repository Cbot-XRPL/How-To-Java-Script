//modify style

const title = document.querySelector('h1');

//DO NOT DO STYLE THIS WAY
//title.setAttribute('style','margin: 50px;');

console.log(title.style);
console.log(title.style.color);

//element//attribute//sub-attribute
title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';
//remove
title.style.margin = '';
