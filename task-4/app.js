let btn = document.querySelector("button");
let input = document.querySelector("input");
let items = [];
btn.addEventListener('click',() => {
    let dlt = document.createElement('button');
    let li = document.createElement('li');
    li.innerText = input.value + " ";
    input.value = "";
    dlt.innerText = "Delete";
    items.push(dlt)
    dlt.classList.add("remove");
    document.querySelector('ul').appendChild(li)
    li.append(dlt)
    func()
    
});
function func() {
    for (let index = 0; index < items.length; index++) {
       items[index].addEventListener('click',() => {
        items[index].parentElement.remove();
       })
    }
}