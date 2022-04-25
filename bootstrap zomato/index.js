const input = document.getElementById('email')
const button = document.getElementById('button')
const error = document.getElementById('error')

button.addEventListener('click' , () => {
    const value = email.value;

    if (value.includes('@') && value.indexOf('@') > 0) {
        setSucces(error)
    } else {
        setError(error)
    }
})

const setError = (element) => {
    element.innerText = "Enter a valid email"
    element.style.color = 'red'
}

const setSucces = (element) => {
    element.innerText = ""
    element.display = 'none'
}