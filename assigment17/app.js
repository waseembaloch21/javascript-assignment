let products = [];

fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        products = data;
        displayProducts(products);
    })
    .catch(err => console.error("Error fetching products:", err));

const productContainer = document.getElementById('productContainer');

function displayProducts(products) {
    productContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

function searchProducts() {
    const searchQuery = document.getElementById('searchBar').value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchQuery)
    );
    displayProducts(filteredProducts);
}

function filterByPrice(maxPrice) {
    const filteredProducts = products.filter(product => product.price <= maxPrice);
    displayProducts(filteredProducts);
}