// // Build the Pizza
// function Pizza(size, crust, sauce, cheese, meat, veggie) {
//     this.size = size;
//     this.crust = crust;
//     this.sauce = sauce;
//     this.cheese = cheese;
//     this.meat = meat;
//     this.veggie = veggie;
//   }
  // test:
  // let pizza = new Pizza("s", "c", "s", "c", "m", "v")
  // call `pizza`
  // receive {
// cheese:c
// crust:c
// meat:m
// sauce:s
// size:s
// veggie:v
// }
// so that one works.

//  

// build the pizza cart
function PizzaCart() {
  this.pizzaList = [];
}

PizzaCart.prototype.addPizza = function(pizza) {
  this.pizzaList.push(pizza);
}

function Pizza(size, crust, sauce, cheese, meat, veggie) {
    this.size = size;
    this.crust = crust;
    this.sauce = sauce;
    this.cheese = cheese;
    this.meat = meat;
    this.veggie = veggie;
  }
let pizzaCart = new PizzaCart();
let pizza = new Pizza("big", "crunch", "red", "w", "pep", "olive");
let pizza2 = new Pizza(1,2,3,4,5,6);
pizzaCart.addPizza(pizza);
pizzaCart.addPizza(pizza2);
pizzaCart

//okay and this set works....... still not sure what problem was with previous code??? will look.
