import _ from 'lodash'

import mainContact from './contact'
import mainProduct from './products'

import './home.css'

const header = document.createElement('header')
header.classList.add('header')
const heroHead = document.createElement('h1')
heroHead.classList.add('heroHead')
heroHead.textContent='FURNDEALZ'

const nav = document.createElement('nav')
const headul = document.createElement('ul')
headul.classList.add('headul')

const home = document.createElement('li')
    const homeLink = document.createElement('a')
    homeLink.href = "#"
    homeLink.textContent='Home'
    homeLink.addEventListener('click', tabSelect)
home.appendChild(homeLink)

const product = document.createElement('li')
    const productLink = document.createElement('a')
    productLink.href = "#"
    productLink.textContent='Products'
    productLink.addEventListener('click', tabSelect)
product.appendChild(productLink)

const contact = document.createElement('li')
    const contactLink = document.createElement('a')
    contactLink.href = "#"
    contactLink.textContent='Contact'
    contactLink.addEventListener('click', tabSelect)
    contact.appendChild(contactLink)

headul.appendChild(home)
headul.appendChild(product)
headul.appendChild(contact)

nav.appendChild(headul)

header.appendChild(heroHead)
header.appendChild(nav)

document.body.appendChild(header)
//check button assign main display
const homeMain = document.createElement('main')
    homeMain.classList.add('main')
    const container = document.createElement('section')
    container.classList.add('container')
        const homep = document.createElement('p')
            homep.textContent = "Bring you the best deals in the country"
        const heroImg = document.createElement('img')
            heroImg.src = "https://www.pngall.com/wp-content/uploads/2016/04/50-Off-Transparent-Free-PNG.png"
            heroImg.alt="50% off"
            heroImg.id = "hero"
        const visit = document.createElement('p')
            visit.textContent = 'Visit the store or '
        const span = document.createElement('span')
        const order = document.createElement('a')
            order.id = 'order'
            order.href = '#'
            order.textContent='Order online'
        span.appendChild(order)
        visit.appendChild(span)

        container.appendChild(homep)
        container.appendChild(heroImg)
        container.appendChild(visit)
    homeMain.appendChild(container)

const footer = document.createElement('footer')
footer.classList.add('footer')
    const pfoot = document.createElement('p')
    pfoot.textContent = 'SUMustapha, 2022'
    footer.appendChild(pfoot)

document.body.appendChild(homeMain)
const productMain = mainProduct()
const contactMain = mainContact()
document.body.appendChild(productMain)
document.body.appendChild(contactMain)

function tabSelect(e){
    const homeKey = document.querySelector('.main')
    const tab = e.target.innerText
    switch(tab) {
        case 'Home':
            homeKey.style.display = 'flex'
            productMain.style.display='none'
            contactMain.style.display = 'none'
            break
        case 'Products':
            homeKey.style.display = 'none'
            productMain.style.display='grid'
            contactMain.style.display = 'none'
            break
        case 'Contact':
            homeKey.style.display = 'none'
            productMain.style.display='none'
            contactMain.style.display = 'flex'
            break
        default: document.body.appendChild(homeMain)
    }

}

document.body.appendChild(footer)


