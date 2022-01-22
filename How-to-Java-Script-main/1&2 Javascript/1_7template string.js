//template string
const title = 'Meta Realm';
const author = 'Cbot';
const likes = 30;

//concatination way
//let result = 'The game called ' + title + ' by ' + author + ' has ' + likes + ' likes'
//console.log(result)
//template string way
let result = `The game called ${title} by ${author} has ${likes} likes`
console.log(result)
//creating html templates 
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This game has ${likes} likes </span>
`;
console.log(html);