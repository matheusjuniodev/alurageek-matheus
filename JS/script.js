document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("productContainer");
    const addProductForm = document.getElementById("addProductForm");
    const noProductsMessage = document.getElementById("noProductsMessage");

    const products = [
        {
            name: "Stormtrooper",
            price: 60.00,
            image: "./IMG/stormtrooper.jpg"
        },
        {
            name: "Game Boy Classic",
            price: 60.00,
            image: "./IMG/gameboy.jpg"
        }
    ];

    function displayProducts() {
        productContainer.innerHTML = '';
        if (products.length === 0) {
            noProductsMessage.style.display = 'block';
        } else {
            noProductsMessage.style.display = 'none';
            products.forEach(product => {
                const productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$ ${product.price.toFixed(2)}</p>
                `;
                productContainer.appendChild(productDiv);
            });
        }
    }

    addProductForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("productName").value;
        const price = parseFloat(document.getElementById("productPrice").value);
        const image = document.getElementById("productImage").value;

        products.push({ name, price, image });
        displayProducts();
        addProductForm.reset();
    });

    displayProducts();
});
