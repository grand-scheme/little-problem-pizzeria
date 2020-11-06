// 



// 



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
})

