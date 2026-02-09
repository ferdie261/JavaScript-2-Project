// quantity button
document.addEventListener('DOMContentLoaded', () => {
    const unitPrice = 1200;
    let quantity = 1;

    const quantitySpan = document.getElementById('quantity');
    const totalSpan = document.getElementById('total');
    const addButton = document.getElementById('addButton');
    const minusButton = document.getElementById('minusButton');
    const checkoutBtn = document.getElementById('purchaseButton');

    function updateTotal() {
        quantitySpan.textContent = quantity;
        totalSpan.textContent = (quantity * unitPrice).toFixed(2);
    }

    addButton.addEventListener ('click', () => {
        quantity++;
        updateTotal();
});

    minusButton.addEventListener ('click', () => {
        if (quantity > 1) {
            quantity--;
            updateTotal();
        }
});

    checkoutBtn.addEventListener('click', ()=> {
    const total = quantity * unitPrice;
    window.location.href = `checkout.html?product=One%20Piece%20Knife&qty=${quantity}&total=${total}`;
 
});
    updateTotal();
});


//Product Image code

let images = [
    'images/onepieceknife1.png',
    'images/onepieceknife2.png',
    'images/onepieceknife3.png'
];

let index = 0;

function changeImage(imageSrc) {
    document.getElementById('largeImage').src = imageSrc;
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById('largeImage').src = images[index];
}

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById('largeImage').src = images[index];
}










//Popupimage

const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupCaption = document.getElementById("popup-caption");
const closeBtn = document.getElementById("close-btn");
const largeImage =document.getElementById("largeImage")

// Add click event to each image in the gallery
// document.querySelectorAll(".large-image").forEach(img => {
//     img.addEventListener("click", () => {
//         popupImg.src = img.src;
//         popupCaption.textContent = img.dataset.caption;
//         popup.style.display = "flex";
//     });
// });

// code test
// largeImage.addEventListener('click', function () {
//     document.querySelectorAll(".image-gallery img").forEach(img => {
//         popupImg.src = img.src;
//         popupCaption.textContent = img.dataset.caption;
//         popup.style.display = "flex";
//     });

// });

largeImage.addEventListener('click', function () {
    // Find the thumbnail that matches the large image src
    const currentThumb = Array.from(document.querySelectorAll(".image-gallery img"))
        .find(img => img.src === largeImage.src);

    if (currentThumb) {
        popupImg.src = currentThumb.src;
        popupCaption.textContent = currentThumb.dataset.caption;
        popup.style.display = "flex";
    }
});


//code test end



//Close the popup when close button is clicked
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

//show cartList
document.querySelector('.bx-cart').addEventListener('click', () => {
document.getElementById('itemList').classList.toggle('show');
});

document.querySelector('.purchaseButton').addEventListener('click', () => {
  alert('Proceeding to checkout...');
  // You can redirect to a checkout page or handle payment logic here
});

//cart list content



//cart popup
const cart = document.getElementById('cart');
cart.addEventListener ('click', function () {
    if (itemList.style.display === 'none' ) {
        itemList.style.display = 'block';
    }
    else {itemList.style.display = 'none'}
});

//counts


//item list
// const addtoCart = document.getElementById('addtoCart');
// const itemList = document.getElementById('itemList');

// addtoCart.addEventListener('click', function () {
//     if (quantity > 0) {
//         let existingBolt = document.getElementById('boltItem');
//         if (existingBolt) {
//             existingBolt.textContent = `M10 x 50 mm Hex Bolt = ${quantity} pcs`;
//         } else {
//             const item = document.createElement('p');
//             item.id = 'boltItem';
//             item.textContent = `M10 x 50 mm Hex Bolt = ${quantity} pcs`;
//             itemList.appendChild(item);
//         }
//     }
// });


// addtoCart.addEventListener('click', function () {
//     if (quantity > 0) {
//             let existingItem = document.getElementById('knifeItem');
//             if (existingItem) {
//                 existingItem.textContent = `Knife = ${quantity} pcs`;
//             } else {
//                 const item = document.createElement('p');
//                 item.id = 'knifeItem';
//                 item.textContent = `Knife = ${quantity} pcs`;
//                 itemList.appendChild(item);
//         }
//     }
// });


const addtoCart = document.getElementById('addtoCart');
const itemList = document.getElementById('itemList');
const quantityElement = document.getElementById('quantity');
const cartcolor = document.getElementById('cart');
const unitPrice = 1200

addtoCart.addEventListener('click', function () {
    let quantity = parseInt(quantityElement.textContent);

    if (quantity > 0) {
        let existingItem = document.getElementById('knifeItem');
        if (existingItem) {
            existingItem.textContent = `${quantity}x One Piece Knife 180mm = ₱${(quantity*unitPrice).toFixed(2)}`;
            
        } else {
            const item = document.createElement('p');
            item.id = 'knifeItem';
            item.textContent = `${quantity}x One Piece Knife 180mm = ₱${(quantity*unitPrice).toFixed(2)}`;
            itemList.appendChild(item);
            cartcolor.style.color = "red";
        }
    }
});


//clear button

const clearButton = document.getElementById('clearButton');

clearButton.addEventListener('click', function () {
    // Select all <p> elements inside itemList except cart-actions
    const items = itemList.querySelectorAll('p');
    items.forEach(item => item.remove());
    cartcolor.style.color = "white";
    
});

//toast notification
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.classList.add("show");

//Hide it after 3 seconds
setTimeout(() => {
    toast.classList.remove("show");
}, 1000);
}

document.getElementById("addtoCart").addEventListener("click", () => {
    showToast('Item added to cart!');
});






