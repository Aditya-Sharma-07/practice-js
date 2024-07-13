let btns = document.querySelectorAll('button');
let para = document.querySelectorAll('p')
for (let index = 0; index < btns.length; index++) {
    btns[index].addEventListener('click',() => {
                hidder();
                para[index].classList.remove("hide");
            })
    
}
function hidder() {
    for (p of para) {
        p.classList.add("hide");
    }
   
}