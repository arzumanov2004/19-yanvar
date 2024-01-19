const myDiv = document.getElementById('myDiv')

function getBasket() {
    myDiv.innerHTML = ''
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.map((item,index) =>{
        const box = document.createElement('div')
            box.className = 'myBox col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
                <img src="${item.image}" alt="">
                <h5>${item.title}</h5>
                <h3>$${item.price}</h3>
                <h2>Urun Sayi:${item.count}</h2>
                <button onclick="deleteCart(${index})">delete</button>
            `;
            myDiv.appendChild(box);
    })
}

function deleteCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(cart))
    getBasket()
}
getBasket()