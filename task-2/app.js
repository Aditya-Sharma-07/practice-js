const images = document.querySelectorAll("img");
document.querySelector("button").addEventListener('click',() => {
    let src1 = images[0].getAttribute('src');
    images[0].src = images[1].src;
    images[1].src = src1;
})