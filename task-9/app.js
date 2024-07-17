let textarea = document.querySelector('textarea');
let span = document.querySelector('span')
let counter = 0;
textarea.addEventListener('input',() => {
    counter = textarea.value.length;
    if (counter < 151) {
        span.innerText = `${counter}`;
    }
    if (counter >= 150) {
        textarea.value = textarea.value.slice(0,150);
        // alert('Limit Reached');
    }
})
