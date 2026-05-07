const container = document.getElementById("productContainer");
const loading = document.getElementById("loading");

const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");

let allProducts = [];


// Loading State
loading.innerHTML = "Loading...";


// Fetch API
fetch("https://fakestoreapi.com/products/")

  .then(response => {

    if (!response.ok) {
      throw new Error("API Error");
    }

    return response.json();
  })

  .then(data => {

    loading.style.display = "none";

    allProducts = data;

    displayProducts(allProducts);

    loadCategories(allProducts);
  })


  // Error Handling
  .catch(error => {

    loading.innerHTML = "Failed to load data";

    console.log(error);
  });



// Display Products
function displayProducts(data) {

  container.innerHTML = "";

  data.forEach(product => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `

      <img src="${product.image}" alt="">

      <h3>
        ${product.title.substring(0,50)}
      </h3>

      <p class="price">
        $${product.price}
      </p>

      <p>
        ${product.description.substring(0,60)}...
      </p>

      <button onclick="viewMore(
        '${product.title}',
        '${product.description}',
        '${product.price}'
      )">

        View More

      </button>
    `;

    container.appendChild(card);
  });
}




// View More
function viewMore(title, description, price) {

  alert(
    "Title: " + title +

    "\n\nDescription: " + description +

    "\n\nPrice: $" + price
  );
}




// Search Functionality
searchInput.addEventListener("input", () => {

  const value = searchInput.value.toLowerCase();

  const filteredProducts = allProducts.filter(product =>

    product.title.toLowerCase().includes(value)
  );

  displayProducts(filteredProducts);
});




// Load Categories
function loadCategories(products) {

  const categories = [...new Set(products.map(product => product.category))];

  categories.forEach(category => {

    const option = document.createElement("option");

    option.value = category;

    option.textContent = category;

    categoryFilter.appendChild(option);
  });
}



// Category Filter
categoryFilter.addEventListener("change", () => {

  if (categoryFilter.value === "all") {

    displayProducts(allProducts);
  }

  else {

    const filteredCategory = allProducts.filter(product =>

      product.category === categoryFilter.value
    );

    displayProducts(filteredCategory);
  }
});