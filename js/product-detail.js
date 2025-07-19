const detailDiv = document.getElementById("product-detail");
const countryToggle = document.getElementById("countryToggle");

// Get product id from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products.find(p => p.id === productId) || null;

function renderProductDetail(country) {
  if (!product) {
    detailDiv.innerHTML = "<p>Product not found!</p>";
    return;
  }
  let price = (country === "us") ? product.priceUS : product.priceIN;
  let buyLink = (country === "us") ? product.linkUS : product.linkIN;
  detailDiv.innerHTML = `
    <div class="product-card">
      <img src="${product.img}" alt="${product.name}">
      <div class="product-title">${product.name}</div>
      <div class="product-desc">${product.desc}</div>
      <div class="product-price">${price}</div>
      <div class="buy-buttons">
        <a href="${buyLink}" class="buy-btn" target="_blank">Buy Now</a>
        <a href="index.html" class="details-link">Back to Products</a>
      </div>
    </div>
  `;
}

renderProductDetail(countryToggle.value);

countryToggle.addEventListener('change', () => {
  renderProductDetail(countryToggle.value);
});
