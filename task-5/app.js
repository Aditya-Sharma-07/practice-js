let btns = document.querySelectorAll('button');
let h2 = document.querySelector('h2');
let id1;
let counter = 0;
btns[0].addEventListener('click',() => {
    id1 = setInterval(() => {
        h2.innerText = counter + " " + "sec";
        counter++;
    },1000)
})

btns[1].addEventListener('click',() => {
    h2.innerText = `Paused at ${counter} seconds`;
    counter = 0;
    setTimeout(() => {
        clearInterval(id1);
    }, 0);
})