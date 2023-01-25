const password = document.getElementById('password')
const username = document.getElementById('username')
//const event = document.getElementById('form')

document.getElementById('form').addEventListener('submit',  (event)=>{
event.preventDefault()
    valid=true

//add your checks here:
const password_value = password.value
const username_value = username.value

if(username_value < 5 || password_value.length < 7) {
    alert('The form has not been submitted: \n - A field is not valid.')
    valid=false 
}
if (valid)
alert('The form has been submitted: \n - We will proceed with the sending.')
//submit the form if everything is valid:
// if (valid) event.target.submit();
})