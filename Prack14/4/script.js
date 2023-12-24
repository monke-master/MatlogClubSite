const productsList = document.getElementById('products-list');
const cartList = document.getElementById('cart-list');
const totalPrice = document.getElementById('total-price');

let cartPrice = 0;

productsList.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', event.target.dataset.price);
});

cartList.addEventListener('dragover', (event) => {
  event.preventDefault();
  cartList.classList.add('droppable-hover');
});

cartList.addEventListener('dragleave', () => {
  cartList.classList.remove('droppable-hover');
});

cartList.addEventListener('drop', (event) => {
  event.preventDefault();
  cartList.classList.remove('droppable-hover');
  const price = parseInt(event.dataTransfer.getData('text/plain'));
  cartPrice += price;
  totalPrice.textContent = `Итоговая стоимость: ${cartPrice}`;
  const newItem = document.createElement('div');
  newItem.textContent = `Товар за ${price}`;
  cartList.appendChild(newItem);
});
