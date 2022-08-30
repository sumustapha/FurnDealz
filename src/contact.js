function getContactPage (){
const mainContact = document.createElement('main')
    mainContact.classList.add('mainContact')
const location = document.createElement('img')
    location.src = 'images/location.png'
    location.alt = 'Negeri Store location'
const contactCard = document.createElement('article')
contactCard.classList.add('contactCard')
    const email = document.createElement('p')
    email.textContent = 'email : dealz4furn@gmail.com'
    const phone = document.createElement('p')
    phone.textContent = "Phone: +601660114437"
    const address = document.createElement('p')
    address.textContent = "Address: 143, Negeri Sembilan, Malyasia"
contactCard.appendChild(email)
contactCard.appendChild(phone)
contactCard.appendChild(address)

mainContact.appendChild(location)
mainContact.appendChild(contactCard)

 return mainContact
}

export default getContactPage