const myDiv = document.getElementById('myDiv')

function getWishlist() {
    myDiv.innerHTML = ''
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.map((item,index) =>{
        const box = document.createElement('div')
            box.className = 'myBox col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12'
            box.innerHTML = `
                <img src="${item.image}" alt="">
                <h5>${item.title}</h5>
                <h3>$${item.price}</h3>
                <button onclick="deleteCart(${index})">delete</button>
            `;
            myDiv.appendChild(box);
    })
}

function deleteCart(index) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    wishlist.splice(index,1)
    localStorage.setItem('wishlist',JSON.stringify(wishlist))
    getWishlist()
}
getWishlist()