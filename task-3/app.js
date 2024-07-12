let form = document.querySelector('form')
let inputs = document.querySelectorAll('.fields')

form.addEventListener("submit",(e) => {
    e.preventDefault();
    if (inputs[0].value == "" || inputs[1].value == "" || inputs[2].value == "" ) {
        alert('Please Enter Details Carefully');
    }
    if(inputs[1] != inputs[2]) {
        alert("Please fill password correctly");
    }
})
