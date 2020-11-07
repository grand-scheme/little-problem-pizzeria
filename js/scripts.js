// Build the PIZZACART ---
function PizzaCart() {
  this.pizzaList = [];
  this.pizzaID = 0;
}

PizzaCart.prototype.addPizza = function(pizza) {
  pizza.id = this.idThisPizza(); 
  this.pizzaList.push(pizza);
}

PizzaCart.prototype.idThisPizza = function() {
  this.pizzaID += 1;
  return this.pizzaID;
}

// Build the PIZZA ---
function Pizza(size, crust, sauce, cheese, meat, veggie) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.veggie = veggie;
}



// this stuff would be user interface stuff when we get there
let pizzaCart = new PizzaCart();
let pizza = new Pizza("big", "crunch", "red", "w", "pep", "olive");
let pizza2 = new Pizza(1,2,3,4,5,6);
pizzaCart.addPizza(pizza);
pizzaCart.addPizza(pizza2);
pizzaCart