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

//  ------------- //

// build the pizza cart
// function PizzaCart() {
//   this.pizzaList = [];
// }

// PizzaCart.prototype.addPizza = function(pizza) {
//   this.pizzaList.push(pizza);
// }

// function Pizza(size, crust, sauce, cheese, meat, veggie) {
//   this.size = size;
//   this.crust = crust;
//   this.sauce = sauce;
//   this.cheese = cheese;
//   this.meat = meat;
//   this.veggie = veggie;
// }
// let pizzaCart = new PizzaCart();
// let pizza = new Pizza("big", "crunch", "red", "w", "pep", "olive");
// let pizza2 = new Pizza(1,2,3,4,5,6);
// pizzaCart.addPizza(pizza);
// pizzaCart.addPizza(pizza2);
// pizzaCart

//okay and this set works....... still not sure what problem was with previous code??? 

//  ------------- //

// // Build the PIZZACART ---
// function PizzaCart() {
//   this.pizzaList = [];
//   this.pizzaID = 0;
// }

// PizzaCart.prototype.addPizza = function(pizza) {
//   pizza.id = this.idThisPizza(); 
//   this.pizzaList.push(pizza);
// }

// PizzaCart.prototype.idThisPizza = function() {
//   this.pizzaID += 1;
//   return this.pizzaID;
// }

// // Build the PIZZA ---
// function Pizza(size, crust, sauce, cheese, meat, veggie) {
//   this.size = size;
//   this.crust = crust;
//   this.sauce = sauce;
//   this.cheese = cheese;
//   this.meat = meat;
//   this.veggie = veggie;
// }

// // this stuff would be user interface stuff when we get there
// let pizzaCart = new PizzaCart();
// let pizza = new Pizza("big", "crunch", "red", "w", "pep", "olive");
// let pizza2 = new Pizza(1,2,3,4,5,6);
// pizzaCart.addPizza(pizza);
// pizzaCart.addPizza(pizza2);
// pizzaCart

// this all works. cool.

//  ------------- //

// Build the PIZZACART ---
function PizzaCart() {
  this.pizzaList = [];
  this.pizzaID = 0;
}

PizzaCart.prototype.addPizza = function(pizza) {
  pizza.pzID = this.idThisPizza(); 
  this.pizzaList.push(pizza);
}
PizzaCart.prototype.idThisPizza = function() {
  this.pizzaID += 1;
  return this.pizzaID;
}

PizzaCart.prototype.locatePizza = function(pzID) {
  for (let i=0; i< this.pizzaList.length; i++) {
    if (this.pizzaList[i].pzID == pzID) {
      return this.pizzaList[i];
    }
  };
  return false;
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
pizza2;
pizza;
  // pizzaCart.locatePizza(2) -->
  // {
  //   "size": 1,
  //   "crust": 2,
  //   "sauce": 3,
  //   "cheese": 4,
  //   "meat": 5,
  //   "veggie": 6,
  //   "pzID": 2
  // }

  // so this works too. sweet.