// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 20.00, description: 'Description for Product 1', image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 15.00, description: 'Description for Product 2', image: 'product2.jpg' },
    // Add more products as needed
];

// Cart array to hold added items
let cart = [];

// Open the modal and populate it with product details
document.querySelectorAll('.product').forEach(productElement => {
    productElement.addEventListener('click', () => {
        const productId = productElement.getAttribute('data-id');
        const product = products.find(p => p.id == productId);

        // Update modal with product details
        document.getElementById('productTitle').textContent = product.name;
        document.getElementById('productImage').src = product.image;
        document.getElementById('productDescription').textContent = product.description;
        document.getElementById('productPrice').textContent = product.price;
        document.getElementById('addToCartButton').setAttribute('data-id', product.id);

        // Show the modal
        document.getElementById('productModal').style.display = 'flex';
    });
});

// Close the modal
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('productModal').style.display = 'none';
});

// Add the product to the cart
document.getElementById('addToCartButton').addEventListener('click', () => {
    const productId = document.getElementById('addToCartButton').getAttribute('data-id');
    const quantity = parseInt(document.getElementById('quantity').value);
    const product = products.find(p => p.id == productId);

    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    // Close the modal after adding to cart
    document.getElementById('productModal').style.display = 'none';

    // Optionally, you could update a cart icon or show a cart summary here
    alert('Product added to cart!');
});
