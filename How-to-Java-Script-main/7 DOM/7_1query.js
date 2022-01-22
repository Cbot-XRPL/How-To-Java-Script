

//querying the dom

       //css sing tag selector
//const para = document.querySelector('p');

       // css class selector
//const para = document.querySelector('.error');

       // css div and class selector
//const para = document.querySelector('div.error');

//console.log(para);

    //group selector and filtering arry like sturtures

        //all one tag
    //const paras = document.querySelectorAll('p');
       //all one class
    const paras = document.querySelectorAll('.error')
        

paras.forEach(para => {
    console.log(para);
});

console.log(paras[0]);