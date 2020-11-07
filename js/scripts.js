// PizzaCart Code --- //
function PizzaCart() {
  this.pizzaList = [];
}

PizzaCart.prototype.addPizza = function(pizza) {
  this.pizzaList.push(pizza);
}

// Pizza Code --- //
function Pizza(size, crust, sauce, cheese, meat, veggie) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.veggie = veggie;
}

// 

// Document Ready:
$(document).ready(function() {
  $("form#build-a-pizza").submit(function(e) {
    e.preventDefault();
  })

  $("button#add-pizza-btn").click(function() {
    let pizzaCart = new PizzaCart();
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

    let customerPizza = new Pizza(pSize, pCrust, pSauce, pCheese, pProtein, pVeggie);
    pizzaCart.addPizza(customerPizza);
    console.log(pizzaCart);
  });
})