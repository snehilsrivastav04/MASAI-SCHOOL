// Sample data storage
let products = [];

// Event Listener to add products
document.getElementById('addProduct').addEventListener('click', () => {
  const name = document.getElementById('productName').value;
  const price = parseFloat(document.getElementById('productPrice').value);
  const rating = parseFloat(document.getElementById('productRating').value);

  if (name && price && rating) {
    products.push({ name, price, rating });
    updateGraphs();
  }
});

// Event Listener to sort by price
document.getElementById('sortPrice').addEventListener('click', () => {
  products.sort((a, b) => a.price - b.price);
  updateGraphs();
});

// Event Listener to sort by rating
document.getElementById('sortRating').addEventListener('click', () => {
  products.sort((a, b) => a.rating - b.rating);
  updateGraphs();
});

// Function to update graphs
function updateGraphs() {
  const priceGraph = document.getElementById('priceGraph');
  const ratingGraph = document.getElementById('ratingGraph');
  
  // Clear existing graphs
  priceGraph.innerHTML = '';
  ratingGraph.innerHTML = '';
  
  products.forEach(product => {
    // Create Price Bar
    const priceBar = document.createElement('div');
    priceBar.classList.add('bar');
    priceBar.innerHTML = `<span class="bar-name">${product.name}</span>
                          <div class="bar-graph price" style="width: ${product.price * 10}px"></div>`;
    priceGraph.appendChild(priceBar);
    
    // Create Rating Bar
    const ratingBar = document.createElement('div');
    ratingBar.classList.add('bar');
    ratingBar.innerHTML = `<span class="bar-name">${product.name}</span>
                          <div class="bar-graph rating" style="width: ${product.rating * 40}px"></div>`;
    ratingGraph.appendChild(ratingBar);
  });
}
