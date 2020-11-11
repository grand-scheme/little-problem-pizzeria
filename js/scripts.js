// Build the PIZZACART ---
function PizzaCart() {
  this.pizzaList = [];
  this.pizzaID = 700;
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
    if (this.pizzaList[i]) {
      if (this.pizzaList[i].pzID == pzID) {
        return this.pizzaList[i];
      }
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
  this.cost = (this.size * .90 ) + (this.meat.length) + (this.veggie.length * 0.75);
}

Pizza.prototype.orderReturn = function() {
  return `Your pizza:
  ${this.size}" ${this.crust} crust
  Made with ${this.sauce} and ${this.cheese}
  Topped with ${this.meat}, and ${this.veggie}.
  Your total comes to $\${this.cost}`
}

// USER INTERFACE LOGIC //
let pizzaCart = new PizzaCart();

function resetMenu() {
  $("input[type=radio]").prop("checked", function () {
    return this.getAttribute("checked") == "";
  });
  $("input[type=checkbox]").prop("checked", function () {
    return this.getAttribute("checked") == "";
  });
}

function assemblePizza() {
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
// => customerPizza

function displayPizza(pizzaToDisplay) {
  let cartedPizza = $("ul#show-pizza-cart");
  let pizzaHTML = "";
  pizzaToDisplay.pizzaList.forEach(function(pizza) {
    if (pizza.meat.length === 0) {
      pizza.meat.push(`no protein`)
    }
    pizzaHTML += `<li id="${pizza.pzID}"> One ${pizza.size}" ${pizza.cheese} & ${pizza.sauce} pizza with a ${pizza.crust} crust, topped with ${pizza.meat[0]} and ${(pizza.meat.length -1) + (pizza.veggie.length)} other toppings. </li>`
  });
  cartedPizza.html(pizzaHTML);
}

function revealPizzaDetails(number) {
  const pizza = pizzaCart.locatePizza(number);
  $("#show-pizza-details").show();
  // console.log(pizza);
  $(".order-size").html(pizza.size);
  $(".order-crust").html(pizza.crust);
  $(".order-sauce").html(pizza.sauce);
  $(".order-cheese").html(pizza.cheese);
  $(".order-meat").html(pizza.meat);
  $(".order-veggie").html(pizza.veggie);
  $(".order-cost").html(pizza.cost);
  let deletePizza = $("#removal-button");
  deletePizza.empty();
  deletePizza.append(`<button class="delete-button" id="${pizza.pzID}">Remove Pizza</button>`);
}

function listeners() {
  $("ul#show-pizza-cart").on("click", "li", function() {
    revealPizzaDetails(this.id);
    });
  
    $("#removal-button").on("click", ".delete-button", function() {
    pizzaCart.destroyPizza(this.pzID);
    $("#show-pizza-details").hide();
    displayPizza(pizzaCart);
  });
}

$(document).ready(function() {
  listeners();
  
  $("form#build-a-pizza").submit(function(e) {
    e.preventDefault();
  });
  
  $("button#add-pizza-btn").click(function() {
    customerPizza = {};
    assemblePizza();
    pizzaCart.addPizza(customerPizza);
    displayPizza(pizzaCart);
  });
  
  $("button#reset-pizza-btn").click(function() {
    resetMenu();
  });

});