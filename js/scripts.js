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

PizzaCart.prototype.destroyPizza = function(pzID) {
  for (let i=0; i< this.pizzaList.length; i++) {
    if (this.pizzaList[i]) {
        if (this.pizzaList[i].pzID == pzID) {
        delete this.pizzaList[i];
        return true;
      }
    }
  };
  return false;
}

// Build the PIZZA ---
function Pizza(size, crust, sauce, cheese, meat, veggie, cost) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.veggie = veggie;
  this.cost = (this.size * .90 ) + (this.meat.length -1) + ((this.veggie.length -1) * 0.75);
}

// USER INTERFACE LOGIC //
function assemblePizza() {
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
  
  let pCost = 0;

  customerPizza = new Pizza(pSize, pCrust, pSauce, pCheese, pProtein, pVeggie, pCost);
}



$(document).ready(function() {
  let pizzaCart = new PizzaCart();
  
  $("form#build-a-pizza").submit(function(e) {
    e.preventDefault();
  });
  
  $("button#add-pizza-btn").click(function() {
    customerPizza = {};
    assemblePizza();
    pizzaCart.addPizza(customerPizza);
    console.log(pizzaCart);
    });
});