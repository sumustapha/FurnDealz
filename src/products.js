function getProductPage(){

const mainProduct = document.createElement('main')
mainProduct.classList.add('mainProduct')

const firstCard = document.createElement('div')
    firstCard.classList.add('productCard')
        const featured = document.createElement('img')
            featured.src = "images/featured.jpg"
            featured.alt = "featuredProduct"
        const featuredPrice = document.createElement('p')
            featuredPrice.classList.add('price')
            featuredPrice.textContent = "Now: $399.99"
    firstCard.appendChild(featured)
    firstCard.appendChild(featuredPrice)

    const secondCard = document.createElement('div')
    secondCard.classList.add('productCard')
        const second = document.createElement('img')
            second.src = "images/chair.jpg"
            second.alt = "Chair"
        const secondPrice = document.createElement('p')
            secondPrice.classList.add('price')
            secondPrice.textContent = "Now: $79.99"
    secondCard.appendChild(second)
    secondCard.appendChild(secondPrice)

    const thirdCard = document.createElement('div')
    thirdCard.classList.add('productCard')
        const third = document.createElement('img')
            third.src = "images/table.jpg"
            third.alt = "table"
        const thirdPrice = document.createElement('p')
            thirdPrice.classList.add('price')
            thirdPrice.textContent = "Now: $89.99"
    thirdCard.appendChild(third)
    thirdCard.appendChild(thirdPrice)

    const fourthCard = document.createElement('div')
    fourthCard.classList.add('productCard')
        const fourth = document.createElement('img')
            fourth.src = "images/lamp.jpg"
            fourth.alt = "lamp"
        const fourthPrice = document.createElement('p')
            fourthPrice.classList.add('price')
            fourthPrice.textContent = "Now: $9.99"
    fourthCard.appendChild(fourth)
    fourthCard.appendChild(fourthPrice)

    const fifthCard = document.createElement('div')
    fifthCard.classList.add('productCard')
        const fifth = document.createElement('img')
            fifth.src = "images/sofa.jpg"
            fifth.alt = "sofa"
        const fifthPrice = document.createElement('p')
            fifthPrice.classList.add('price')
            fifthPrice.textContent = "Now: $69.99"
    fifthCard.appendChild(fifth)
    fifthCard.appendChild(fifthPrice)

    const lastCard = document.createElement('div')
    lastCard.classList.add('productCard')
        const last = document.createElement('img')
            last.src = "images/laptop.jpg"
            last.alt = "laptop"
        const lastPrice = document.createElement('p')
            lastPrice.classList.add('price')
            lastPrice.textContent = "Now: $1799.99"
    lastCard.appendChild(last)
    lastCard.appendChild(lastPrice)

mainProduct.appendChild(firstCard)
mainProduct.appendChild(secondCard)
mainProduct.appendChild(thirdCard)
mainProduct.appendChild(fourthCard)
mainProduct.appendChild(fifthCard)
mainProduct.appendChild(lastCard)

return mainProduct
}

export default getProductPage
