let form = document.querySelector('form')
let inputs = document.querySelectorAll('.fields')

form.addEventListener("submit",(e) => {
    e.preventDefault();
    if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "" ) {
        alert('Please Enter Details Carefully');
    }
})
