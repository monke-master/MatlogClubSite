document.addEventListener('DOMContentLoaded', function () {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const clearCartButton = document.querySelector('.clear-cart');
  const cartList = document.querySelector('.cart-list');
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  const filterButton = document.getElementById('filter-btn');
  const cancelFilterButton = document.getElementById('cancel-filter-btn');
  
  const cartItems = [];

  attachSortListeners();

  addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      const item = this.parentNode;
      const title = item.querySelector('.title').value;
      const price = item.querySelector('.price').value;
      const quantity = item.querySelector('.quantity').value;

      item.querySelector('.title').value = "";
      item.querySelector('.price').value = "";
      item.querySelector('.quantity').value = "";

      if (quantity > 0) {
        const cartItem = {
          title: title,
          price: parseFloat(price),
          quantity: parseInt(quantity)
        };

        cartItems.push(cartItem);
        const cartItemElement = createCartItemElement(cartItem);
        cartList.appendChild(cartItemElement);
        attachRemoveListener();
        attachPlusListener();
        updateTotalSum();
      } else {
        alert('Please enter a valid quantity.');
      }
      
    });
  });

  clearCartButton.addEventListener('click', function () {
    cartList.innerHTML = '';
    updateTotalSum();
  });

  filterButton.addEventListener('click', function () {
    const minPrice = parseFloat(minPriceInput.value) || 0;
    const maxPrice = parseFloat(maxPriceInput.value) || Number.MAX_SAFE_INTEGER;

    const filteredItems = filterItemsByPriceRange(cartItems, minPrice, maxPrice);
    displayFilteredItems(filteredItems);

  });

  cancelFilterButton.addEventListener('click', function () {
    displayFilteredItems(cartItems);
    minPriceInput.value = '';
    maxPriceInput.value = '';
    updateTotalSum();
  });

  function createCartItemElement(item) {
    const cartItem = document.createElement('li');
    cartItem.classList.add('cart-item');
    cartItem.innerHTML = `
      <span>${item.title}</span>
      <span>₪${item.price}</span>
      <span class="quantity">${item.quantity}</span>
      <button class="remove-from-cart">Удалить</button>
      <button class="plus">+</button>
    `;
    return cartItem;
  }

  function attachRemoveListener() {
    const removeButtons = document.querySelectorAll('.remove-from-cart');
    removeButtons.forEach(removeButton => {
      removeButton.addEventListener('click', function () {
        const itemElement = this.parentNode;
        const index = Array.from(itemElement.parentNode.children).indexOf(itemElement);
        cartItems.splice(index, 1); // Remove item from cartItems array
        itemElement.remove();
        updateTotalSum();
      });
    });
  }

  function attachPlusListener() {
    const plusButtons = document.querySelectorAll('.plus');
    plusButtons.forEach(plusButton => {
      plusButton.addEventListener('click', function () {
        const quantitySpan = this.parentNode.querySelector('.quantity');
        const index = Array.from(quantitySpan.parentNode.parentNode.children).indexOf(quantitySpan.parentNode);
        let quantity = parseInt(quantitySpan.textContent);
        quantity++;
        quantitySpan.textContent = quantity;
        cartItems[index].quantity = quantity;
        updateTotalSum();
      });
    });
  }

  function filterItemsByPriceRange(cartItemsArray, minPrice, maxPrice) {
    return cartItemsArray.filter(item => item.price >= minPrice && item.price <= maxPrice);
  }

  function displayFilteredItems(filteredItems) {
    cartList.innerHTML = '';

    filteredItems.forEach(item => {
      const cartItemElement = createCartItemElement(item);
      cartList.appendChild(cartItemElement);
    });

    attachRemoveListener();
    attachPlusListener();
    updateTotalSum();
  }

  function updateTotalSum() {
    const totalAmountSpan = document.getElementById('total-amount');
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    totalAmountSpan.textContent = `₪${totalAmount.toFixed(2)}`;
  }


  function attachSortListeners() {
    const sortAscButton = document.getElementById('sort-asc');
    const sortDescButton = document.getElementById('sort-desc');

    sortAscButton.addEventListener('click', function () {
      const sortedItemsAsc = [...cartItems].sort((a, b) => a.price - b.price);
      displayFilteredItems(sortedItemsAsc);
    });

    sortDescButton.addEventListener('click', function () {
      const sortedItemsDesc = [...cartItems].sort((a, b) => b.price - a.price);
      displayFilteredItems(sortedItemsDesc);
    });
  }


});