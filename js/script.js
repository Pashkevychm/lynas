let products = [
    {
        id:1,
        name:"Miss Dior",
        image:"img\miss-dior___240131.webp",
        price:3100
    }
];
let cart = [];
let productsContainer = document.querySelector(".products-div")
let btnGroup = document.querySelector('.btn-group')

function renderProducts(items){
    productsContainer.innerHTML = ""
    if(items.lenght ==0){
        productsContainer.innerHTML = '<p>Товарів не знайдено</p>'
        return;
    }

    items.forEach(function(item){
        let productHTML = `
            <article class="product">
                <img src="${item.image}" alt="" class="product-img">
                    <h3 class="product-title">${item.name}</h3>
                    <p class="product-price">${item.price}</p>
                    <button type="button" class="btn-k">До кошику</button>
            </article>
            ` 
            productsContainer.innerHTML +=productHTML
    })
}
renderProducts(products)