
let cashField=document.getElementById("cash-field");
let goldField=document.getElementById("gold-field");


let goldPrice=19780;

function calculateZakat(){

    console.log(+goldField.value * goldPrice + +cashField.value);
    
    
}