// product = {
//     image: '',
//     name: '', 
// }

/* class product {
    constructor(image, name, stars, count, price ) {
        this.image = image;
        this.name = name;
        this.stars = stars;
        this.count = count;
        // saved in Cents
        this.price = price;
    }
}

const products = [new product(
                "images/products/athletic-cotton-socks-6-pairs.jpg", 
                'Black and Gray Athletic Cotton Socks - 6 Pairs',
                4.5,
                87,
                1090
                ),
            new product(
                'images/products/intermediate-composite-basketball.jpg',
                'Intermediate Size Basketball',
                4,
                127,
                2095
            ),
            new product(
                'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
                'Adults Plain Cotton T-Shirt - 2 Pack',
                4.5,
                56,
                799
            ),
            new product(
                'images/products/black-2-slot-toaster.jpg',
                '2 Slot Toaster - Black',
                5,
                2197,
                1899
            ),
            new product(
                'images/products/6-piece-white-dinner-plate-set.jpg',
                '6 Piece White Dinner Plate Set',
                4,
                37,
                2067
            )
        ];
 */

        let htmlProducts = ``;

products.forEach((product) => {
    htmlProducts += 
        `<div class="product-container">
        <div class="product-image-container">
            <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
            ${product.name}
        </div>

        <div class="product-rating-container">
            <img class="product-rating-stars"
            src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
            ${product.rating.count}
            </div>
        </div>

        <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
        </div>

        <div class="product-quantity-container">
            <select>
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            </select>
        </div>

        <div class="product-spacer"></div>

        <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
        </div>

        <button class="add-to-cart-button button-primary jsAddToCart"
        data-product-id = "${product.id}">
            Add to Cart
        </button>
        </div>`;
})

document.querySelector('.js-product-grid').innerHTML = htmlProducts;


// Add to Cart Logic

const cart = [];

document.querySelectorAll('.jsAddToCart').forEach((button) => {
    button.addEventListener('click', () => {
        const productId = button.dataset.productId;
        let matchingItem;
        cart.forEach((item) => {
            if(item.productId === productId){
                matchingItem = item;
            }
        });

        if (matchingItem){
            matchingItem.quantity += 1;
        }else{

        cart.push({
            productId : productId,
            quantity: 1
        });
        };

        let cartItems = 0;

        cart.forEach((item) => {
            cartItems += item.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartItems;
    });

});