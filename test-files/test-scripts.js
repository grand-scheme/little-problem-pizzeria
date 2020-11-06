function PizzaCart() {
  this.pizzaList = [];
  this.pizzaID = 0;
}

PizzaCart.prototype.addPizza = function(pizza) {
  pizza.id = this.idThePizza();
  this.pizzaList.push(pizza);
}

PizzaCart.prototype.idThePizza = function() {
  this.pizzaID += 1;
  return this.pizzaID;
}




function Pizza(size, crust, sauce, cheese, meat, veggie) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.veggie = veggie;
}

Pizza.prototype.calculateBill = function() {
  return (this.size * .90 ) + (this.meat.length -1) + ((this.veggie.length -1) * 0.75)
}



// retrieve input from html:
`$("element#id-name")`
`$("input:TYPE[NAME OR ID=THE NAME OR THE ID]:checked")`
// To get all elements from a multiple-choice question:
  $("input:[all that stuff above]:checked").each(function () {
    questionArray = $(this).val();
  });
// to get it all from a single-choice:
    questionArray = $("input#question-name").val();
// to set these things
let customerPizza = new Pizza(the, individually, named, arrays)



  
// Document Ready:
$(document).ready(function() {
  $("form#build-a-pizza").submit(function(e) {
    e.preventDefault();
  })

  $("button#add-pizza-btn").click(function() {
    let pSize = $("input:radio[name=pizza-size]:checked").val();
    let pCrust = $("input:radio[name=pizza-crust]:checked").val();
    let pSauce = $("input:radio[name=pizza-sauce]:checked").val();
    let pCheese = $("input:radio[name=pizza-cheese]:checked").val();
    let pProtein = [];
    let pVeggie = [];

    $("input:checkbox[name=pizza-protein]:checked").each(function () {
      let proteinChoice = $(this).val();
      pProtein.push(proteinChoice);
    });
    $("input:checkbox[name=pizza-veggie]:checked").each (function () {
      let veggieChoice = $(this).val();
      pVeggie.push(veggieChoice);
    });

    console.log(pSize);
    console.log(pCrust);
    console.log(pSauce);
    console.log(pCheese);
    console.log(pProtein);
    console.log(pVeggie);
  })