const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Dummy products array
let products = [
  { id: 1, name: 'iPhone 12 Pro', price: 1099.99 },
  { id: 2, name: 'Samsung Galaxy S21', price: 999.99 },
  { id: 3, name: 'Sony PlayStation 5', price: 499.99 },
  { id: 4, name: 'MacBook Pro 16', price: 2399.99 },
  { id: 5, name: 'DJI Mavic Air 2', price: 799.99 },
];

// Routes
// Implement GET /products
app.get('/products', (req, res) => {
  res.json(products);
});

// Implement GET /products/:id
app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// Implement GET /products/search
app.get('/products/search/by', (req, res) => {
  const { q, minPrice, maxPrice } = req.query;

  let filteredProducts = products;

  // Search by name
  if (q) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(q.toLowerCase())
    );
  }

  // Filter by minPrice
  if (minPrice) {
    filteredProducts = filteredProducts.filter(
      p => p.price >= parseFloat(minPrice)
    );
  }

  // Filter by maxPrice
  if (maxPrice) {
    filteredProducts = filteredProducts.filter(
      p => p.price <= parseFloat(maxPrice)
    );
  }

  // Return filtered products (even if empty)
  res.json(filteredProducts);
});


// Implement POST /products
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json({ error: 'Name and price are required' });
  }

  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    name,
    price: parseFloat(price),
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Implement PUT /products/:id
app.put('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  if (name) product.name = name;
  if (price !== undefined) product.price = parseFloat(price);

  res.json(product);
});

// Implement DELETE /products/:id
app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const deletedProduct = products.splice(index, 1);
  res.json({ message: 'Product deleted', product: deletedProduct[0] });
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
