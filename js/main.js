//Listen for form submissions

document.getElementById('contactForm').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

//Get values
var name = getInputVal('name');
var email = getInputVal('email');
var product = getInputVal('product');
var description = getInputVal('description');

console.log(name)


}

//Function to get input values
function getInputVal(id){
    return document.getElementById(id).value;
}