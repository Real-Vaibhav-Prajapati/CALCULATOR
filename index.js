const display= document.getElementById("display");
/* creating functions for operations*/ 

function appendtodisplay(input){
    display.value += input; /*function to take input on dislay */
 
}

function cleardisplay(){
    display.value= ""; /*function to clear display*/

}

function calculate(){   /*NEED TO DO EXCEPTION HANDLING ,FOR EX: IF WE TYPE 7+ AND THEN EQUAL THEN SHOULD THROUGH ERROR */
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR";

    }
}