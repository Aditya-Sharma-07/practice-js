let loader = document.querySelector(".progress");
let counter = 0;
console.log(loader)
let id1 = setInterval(() => {
    if (counter >= 100) {
        document.querySelector('h4').innerText = "Download Completed!!";
        clearInterval(id1);
    }
    counter++;
    loader.style.width = counter + "%";
}, 45);