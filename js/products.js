const productListDiv = document.getElementById('product-list');
const countryToggle = document.getElementById('countryToggle');
const searchInput = document.getElementById('searchInput');

function createProductCard(product, country) {
  let price = (country === "us") ? product.priceUS : product.priceIN;
  let buyLink = (country === "us") ? product.linkUS : product.linkIN;
  return `
    <div class="product-card">
      <img src="${product.img}" alt="${product.name}">
      <div class="product-title">${product.name}</div>
      <div class="product-desc">${product.desc}</div>
      <div class="product-price">${price}</div>
      <div class="buy-buttons">
        <a href="${buyLink}" class="buy-btn" target="_blank">Buy Now</a>
        <a href="product.html?id=${product.id}" class="details-link">More Details</a>
      </div>
    </div>
  `;
}

function renderProducts(productArr, country) {
  productListDiv.innerHTML = productArr.map(p => createProductCard(p, country)).join('');
}

function filterProducts() {
  const keyword = searchInput.value.toLowerCase();
  const country = countryToggle.value;
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword) ||
    p.desc.toLowerCase().includes(keyword)
  );
  renderProducts(filtered, country);
}

// Initial render
renderProducts(products, countryToggle.value);

// Event listeners
countryToggle.addEventListener('change', filterProducts);
searchInput.addEventListener('input', filterProducts);
