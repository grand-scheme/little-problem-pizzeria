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

PizzaCart.prototype.idThisPizza = function(pzID) {
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
pizzaCart





// USER INTERFACE LOGIC //


function assemblePizza(customerPizza) {
  // let pizzaCart = new PizzaCart();
  let pSize = $("input:radio[name=pizza-size]:checked").val();
  let pCrust = $("input:radio[name=pizza-crust]:checked").val();
  let pSauce = $("input:radio[name=pizza-sauce]:checked").val();
  let pCheese = $("input:radio[name=pizza-cheese]:checked").val();

  let pProtein = [];
  $("input:checkbox[name=pizza-protein]:checked").each(function () {
    let proteinChoice = $(this).val();
    pProtein.push(proteinChoice);
  });
  
  let pVeggie = [];
  $("input:checkbox[name=pizza-veggie]:checked").each (function () {
    let veggieChoice = $(this).val();
    pVeggie.push(veggieChoice);
  });

    customerPizza = new Pizza(pSize, pCrust, pSauce, pCheese, pProtein, pVeggie);
    console.log(customerPizza);
}



$(document).ready(function() {
  $("form#build-a-pizza").submit(function(e) {
    e.preventDefault();
  });
  $("button#add-pizza-btn").click(function() {
    customerPizza = {};
    console.log(customerPizza);
    console.log("before assembly");
    assemblePizza(customerPizza);
    });
});