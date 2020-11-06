// 



// 



// Document Ready:
$(document).ready(function() {
  $("form#build-a-pizza").submit(function(e) {
    e.preventDefault();
  })
})

// retrieve input from html:
// `$("element#id-name")`
// `$("input:TYPE[NAME OR ID=THE NAME OR THE ID]:checked")`
// To get all elements from a multiple-choice question:
  // $("input:[all that stuff above]:checked").each(function () {
  //   defaultPizza.toppings = $(this).val();
  // });
