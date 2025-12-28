let products = [
    {
        id:1,
        name:"Miss Dior",
        image:"img/miss-dior___240131.webp",
        price:3100,
        type: "floral"
    },
    {
        id:2,
        name:"Farmasi Tonteria",
        image:"img/farmasi.jpg",
        price:950,
        type: "floral"
    },
    {
        id:3,
        name:"Versace Versense",
        image:"img/versense___171113.webp",
        price:3500,
        type: "wooden"
    },
    {
        id:4,
        name:"Nasomatto Black Afgano",
        image:"img/rcqsxiaynroh.jpg",
        price:10175,
        type: "wooden"
    },
    {
        id:5,
        name:"Jean Paul Gaultier Scandal",
        image:"img/завантаження.jpg",
        price:805,
        type: "citrus"
    },

];

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let productsContainer = document.querySelector(".products-div")
let btnGroup = document.querySelector('.btn-group')

function renderProducts(items){
    productsContainer.innerHTML = ""
    if(items.length ==0){
        productsContainer.innerHTML = '<p>Товарів не знайдено</p>'
        return;
    }

    items.forEach(function(item){
        let productHTML = `
            <article class="product" data-id=${item.id}>
                <img src="${item.image}" alt="" class="product-img">
                    <h3 class="product-title">${item.name}</h3>
                    <p class="product-price">${item.price}</p>
                    <button type="button" class="btn-k">До кошику</button>
            </article>
            ` 
            productsContainer.innerHTML +=productHTML
    })
}

function applyFilters(categoryType){
    if (categoryType == "all") {
        renderProducts(products)
    }else {
        let filteredProducts = products.filter(product => product.type == categoryType);
        renderProducts(filteredProducts)
    }
}
function addToCart(productId){
    let cartProduct = cart.find(p => p.id == productId);
    if (cartProduct){
        cartProduct.quantity +=1;
    }
    else {
        let product = products.find(p => p.id == productId);
        cart.push({...product,quantity: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Товар додано")
}
let productsMap = {
    "Всі": "all",
    "Квіткові": "floral",
    "Дерев'яні": "wooden",
    "Цитрусові": "citrus",
}

function setoupFilterButtons(){
    for (let button of btnGroup.children){
        button.addEventListener("click", function() {
            let category = productsMap[button.innerHTML]
            applyFilters(category)
        })
    }
}
productsContainer.addEventListener("click", function(event){
    if(event.target.classList.contains('btn-k')){
        let productCard = event.target.closest('.product')
        let productId = parseInt(productCard.dataset.id)
        addToCart(productId)
    }
})

renderProducts(products)
setoupFilterButtons()