function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function() {
    var newValue = prompt('Enter the new value to add:');
    this.value += +newValue;
    document.getElementById('totalValue').textContent = this.value;
  };
}

var cart = new Accumulator(0);
document.getElementById('addToCart').addEventListener('click', function() {
  cart.read();
});