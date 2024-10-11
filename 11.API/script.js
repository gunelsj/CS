const API_URL = "https://jsonplaceholder.typicode.com/users"

const container = document.querySelector(".container")
const box = document.querySelector(".box")

async function getAllUsersData() {
    const response = await fetch(API_URL)
    const data = await response.json()
    container.innerHTML = ''
    data.forEach((item) => {
        const div = document.createElement('div')
        div.className = 'box'
        div.innerHTML = `
        <h5>${item.id}</h5>
        <h3>Name: ${item.name}</h3>
        <p>Phone: ${item.phone}</p>
        <p>Email: ${item.email}</p>
        <p>Street: ${item.streer}</p>
        <p>City:   ${item.city}</p>
        `
        container.appendChild(div)
    })
}

getAllUsersData()

// email, street, city, name 
