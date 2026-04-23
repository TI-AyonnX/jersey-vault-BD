let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    localStorage.setItem('cart', JSON.stringify(cart)); 
    updateCartCount();
    alert(`Awesome! ${itemName} has been added to your cart.`);
}

function updateCartCount() {
    let count = cart.length;
    let cartElements = document.querySelectorAll('.cart-count');
    cartElements.forEach(el => el.innerText = count);
}

function checkout() {
    if(cart.length === 0) {
        alert("Your cart is empty! Add some jerseys first.");
        return;
    }
    
    let message = "Hi! I want to order the following jerseys via Cash on Delivery:%0A%0A";
    let total = 0;
    
    cart.forEach(item => {
        message += `- ${item.name} (৳${item.price})%0A`;
        total += item.price;
    });
    
    message += `%0A*Total: ৳${total}*`;
    
    let whatsappUrl = `https://wa.me/88001737565543?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

window.onload = updateCartCount;