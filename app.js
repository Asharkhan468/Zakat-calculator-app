
let cashField=document.querySelector("#cash-field");
let goldField=document.querySelector("#gold-field");
let paragraph=document.querySelector("#para");
let otherAssets=document.querySelector("#other-assets");
let goldPrice=document.querySelector("#gold-price")


function calculateZakat(){



    let totalAmount=+goldField.value * +goldPrice.value + +cashField.value + +otherAssets.value;
    let zakatAmount=2.5*totalAmount/100
    paragraph.innerHTML=`Your total wealth is Rs ${totalAmount}/- So you have to pay 2.5% of Zakat which is Rs ${zakatAmount}/- `
    
    
}