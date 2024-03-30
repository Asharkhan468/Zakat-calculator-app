
let cashField=document.querySelector("cash-field");
let goldField=document.querySelector("gold-field");
let paragraph=document.querySelector("#para");

let goldPrice=19780;


function calculateZakat(){

    let totalAmount=+goldField.value * goldPrice + +cashField.value;
    paragraph.innerHTML+=`The Zakat `
    
    
}