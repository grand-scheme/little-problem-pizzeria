_This project is not currently in presentation format. Please come back later._

## _[ TITLE ]_  

### _An HTML website using jQuery, bootstrap, and custom JavaScript and CSS, November 6th, 2020_  

#### Description  

[ tbd ] 

#### Project Criteria:  

As referenced from the [Epicodus](https://epicodus.com) program's cirriculum:  

> Allow the user to choose toppings and size for the pizza they'd like to order.  
> 
> Create a pizza object constructor with properties for toppings and size.
> 
> Create a prototype method for the cost of a pizza depending on the selections chosen. 
> 
> \[...\]
> 
>  

-------------------------------

#### Project Specs:  

**Describe:** = $("input:radio[...]") value\
**Test:** Allow user's selection in a radio button to be assigned to a string.\
**Code:** `let pizzaSize = $("input:radio[name=` // name of the pizza-size value // `]:checked").val();`\
**Expect:** If user selects 9" crust, then `let pizzaSize = 9`

**Describe:** = $("input:checkbox[...]") value\
**Test:** Allow user's selection(s) in a checkbox list to be assigned to an array.\
**Code:**\
`$("input:checkbox[` // name of the pizza protein group // `]:checked").each(function ()`\
`let` temporary Protein String `= $(this).val();`\
`pizzaProteinArray.push(` temporary Protein String`)`\
**Expect:** If user selects Pepperoni, Anchovies, and Sausage, then `pizzaProteinArray = ["Pepperoni", "Anchovies", "Sausage"]`


 $("input:checkbox[name=pizza-protein]:checked").each(function () {
      let proteinChoice = 
   


$("input:checkbox[name=` // name of the pizza-size value // `]:checked").val();`\
**Expect:** If user selects 9" crust, then `let pizzaSize = 9`


-------------------------------

#### Known Issues / Bugs:    
None currently known.

-------------------------------

#### Setup:  
##### To view live on the web:  
Please visit [this GitHub.io page](https://grantskis.github.io/ [ PROJECT NAME ] ).

##### To view locally on your machine:  
1. Find the green **Code** button above the file list on this project's [main GitHub repository page](https://grantskis.github.io/ [ PROJECT NAME ] ).
2. Select the button to open a drop-down menu. Select "Open with GitHub Desktop" or, if you do not have this program installed, download the compressed .zip file.
3. Extract the .zip file to your local machine.
4. Use your browser of choice to launch _index.html_.
5. Directions were accurate as of Nov. 6th, 2020. If GitHub has since changed their protocol, please see [the GitHub help docs](https://docs.github.com/en) for up-to-date information.

##### To clone this project to your machine:  
1. Launch your terminal of choice. 

> The following directions are based on Git Bash for a Windows machine; you may have to adjust terminology based on your local specs.

2. Navigate to the containing directory you would like to clone this project.
3. Input:\
`$ git clone https://github.com/grantskis/ [PROJECT NAME] `
4. This will clone the project to a folder called "[ PROJECT NAME ]." If you wish to clone it into a directory of a different name, append the new folder name to the end of the string, like so:\
`$ git clone https://github.com/grantskis/ [PROJECT NAME] NEW-FOLDER`\
where `NEW-FOLDER` is where you would type the name of the folder you would like to use.  
5. Directions were accurate as of Nov. 6th, 2020. If GitHub has since changed their protocol, please see [the GitHub help docs](https://docs.github.com/en) for up-to-date information.

-------------------------------

#### Technologies Used:  
- Website, CSS, and JavaScript coded in Visual Studio Code.  
- JavaScript testing, breaking, and retesting conducted in [jsconsole](https://jsconsole.com/).  
<!-- - Icons used are open source and are provided by [Boxicons](https://boxicons.com/). -->
<!-- - Color scheme generated with the help of [Coolors](https://coolors.co/). -->

##### License
- _GNU AGPLv3_  
- Project copyright (c) 2020 **_Shannon Grantski_**  
- Project criteria quoted text copyright (c) 2020 Epicodus, Inc  