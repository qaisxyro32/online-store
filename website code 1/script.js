// Sample product data (you can replace this with your actual product data)
const products = [
    {
        name: "Handy Stitch Sewing Machine",
        description: "Make stitching Easy With This Product.",
        price: "1999",
        image: "https://cartmines.shop/cdn/shop/products/71ed4340fead386a33dadc88d198638f.jpg?v=1688582610&width=713",
        collections: ["collection1", "collection2", "all-products"]
    },
    {
        name: "Handy Stitch Sewing Machine",
        description: "Make stitching Easy With This Product.",
        price: "1999",
        image: "https://cartmines.shop/cdn/shop/products/71ed4340fead386a33dadc88d198638f.jpg?v=1688582610&width=713",
        collections: ["collection1", "collection2", "all-products"]
    },
    {
        name: "Handy Stitch Sewing Machine",
        description: "Make stitching Easy With This Product.",
        price: "1999",
        image: "https://cartmines.shop/cdn/shop/products/71ed4340fead386a33dadc88d198638f.jpg?v=1688582610&width=713",
        collections: ["collection1", "collection2", "all-products"]
    },
    {
        name: "Handy Stitch Sewing Machine",
        description: "Make stitching Easy With This Product.",
        price: "1999",
        image: "https://cartmines.shop/cdn/shop/products/71ed4340fead386a33dadc88d198638f.jpg?v=1688582610&width=713",
        collections: ["collection1", "collection2", "all-products"]
    },
    {
        name: "Product 2",
        description: "Description of Product 2.",
        price: "$15.00",
        image: "product2.jpg",
        collections: ["collection2", "all-products"]
    },
    // Add more products with collection properties here
];

// Function to create a product listing element
function createProductElement(product) {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

    const productName = document.createElement("h2");
    productName.textContent = product.name;

    const productDescription = document.createElement("p");
    productDescription.textContent = product.description;

    const productPrice = document.createElement("p");
    productPrice.textContent = "Price: " + product.price;

    // Create WhatsApp button for each product
    const whatsappButton = document.createElement("a");
    whatsappButton.href = "https://wa.me/923190425228";
    whatsappButton.textContent = "Order Now on WhatsApp";
    whatsappButton.target = "_blank"; // Open WhatsApp link in a new tab

    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productDescription);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(whatsappButton);

    return productDiv;
}

// Function to display products on the page
function displayProducts() {
    const main = document.querySelector("main");

    products.forEach((product) => {
        const productElement = createProductElement(product);
        main.appendChild(productElement);
    });
}

// Function to filter products by collection
function filterByCollection(collectionName) {
    const main = document.querySelector("main");
    main.innerHTML = ''; // Clear the previous product listings

    products.forEach((product) => {
        if (product.collections.includes(collectionName)) {
            const productElement = createProductElement(product);
            main.appendChild(productElement);
        }
    });
}

// Function to show all products
function showAllProducts() {
    const main = document.querySelector("main");
    main.innerHTML = ''; // Clear the previous product listings

    products.forEach((product) => {
        const productElement = createProductElement(product);
        main.appendChild(productElement);
    });
}

// Function to perform product search
function searchProducts() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const main = document.querySelector("main");
    main.innerHTML = ''; // Clear the previous product listings

    products.forEach((product) => {
        if (product.name.toLowerCase().includes(searchInput)) {
            const productElement = createProductElement(product);
            main.appendChild(productElement);
        }
    });
}

// Call the displayProducts function to list the products when the page loads
window.addEventListener("load", displayProducts);
