let persons = Array.from(document.querySelectorAll('h4'));
let input = document.querySelector('input');

input.addEventListener('input',checker)

function checker() {
    let valid = persons.filter(function (e) {
        let text = e.innerText.toLowerCase();
        let int = (input.value).toLowerCase();
        return text.startsWith(int);
    });
    let Invalid = persons.filter(function (e) {
        let text = e.innerText.toLowerCase();
        let int = (input.value).toLowerCase();
        return text.startsWith(int)!= true;
    })
    for (let item of valid) {
        item.parentElement.style.display = "block";
    }
    for (let item of Invalid) {
        item.parentElement.style.display = "none";
    }
}