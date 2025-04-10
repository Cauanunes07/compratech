const cart = [];
 
function addToCart(productId) {
  const products = {
    'rog-phone': {
      name: 'Rog Phone 8 Pro',
      price: 8960.00
    },
    'xiaomi-poco': {
      name: 'Xiaomi Poco X6 5G',
      price: 1950.00
    },
    'galaxy-s25': {
      name: 'Samsung Galaxy S25 Pro Max',
      price: 7789.00
    },
    'iphone-16': {
      name: 'Iphone 16',
      price: 8190.00
    }
  };
 
  const product = products[productId];
 
  if (product) {
    cart.push(product);
    alert(`${product.name} foi adicionado ao carrinho!`);
    updateCartView();
  } else {
    alert('Produto não encontrado!');
  }
}
 
function updateCartView() {
  let cartContainer = document.getElementById('cart');
  if (!cartContainer) {
    cartContainer = document.createElement('section');
    cartContainer.id = 'cart';
    cartContainer.innerHTML = '<h2>Carrinho de Compras</h2><ul id="cart-items"></ul><p id="cart-total"></p>';
    document.querySelector('main').appendChild(cartContainer);
  }
 
  const cartItemsList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
 
  // Limpa a lista atual
  cartItemsList.innerHTML = '';
 
  // Atualiza com os itens do carrinho
  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });
 
  cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}