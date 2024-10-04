const firstName = document.getElementById('firstName')
const password = document.getElementById('password')
const email = document.getElementById('email')
const user_form = document.getElementById('user_form')

firstName.addEventListener('input', (e) => {
    console.log(e.target.value);
})

password.addEventListener('input', (e) => {
    console.log(e.target.value);
})

email.addEventListener('input', (e) => {
    console.log(e.target.value);
})

const users = []

user_form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = {
        firstName: '',
        email: '',
        password: '',
    }
    user.firstName = firstName.value
    user.email = email.value
    user.password = password.value
    users.push(user)
    console.log('users', users)
})
