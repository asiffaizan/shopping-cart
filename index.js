//<<<<============phones event handler========>>>
//add button event listener
const addPhonesQuantity = document.getElementById("addPhone");
addPhonesQuantity.addEventListener("click",function(){
    btnEventHandler("phonesQuantity","phonesPrice",1219,true);
})
//remove button event Listener
const removePhonesQuantity = document.getElementById("removePhone");
removePhonesQuantity.addEventListener("click",function(){
    btnEventHandler("phonesQuantity","phonesPrice",1219,false);
})

//<<<<============Casing event handler========>>>>>
//add button event listener
const addCasingQuantity = document.getElementById("addCasingQuantity");
addCasingQuantity.addEventListener("click",function(){
   btnEventHandler("casingQuantity","casingPrice",59, true);
})
//remove button event listener
const removeCasingQuantity = document.getElementById("removeCasingQuantity");
removeCasingQuantity.addEventListener("click",function(){
    btnEventHandler("casingQuantity","casingPrice",59, false);
})

//common function
function btnEventHandler(idOfInput,idOfAmount,productPrice,isIncrease) {
    const input = document.getElementById(idOfInput);
    const quantity = parseFloat(input.value);
    let newQuantity = quantity;
    if (isIncrease == true){
        newQuantity = quantity + 1;
    }
    if (isIncrease == false && quantity > 0){
        newQuantity = quantity - 1;
    }
    input.value = newQuantity;
    //update parches amount
    const totalPrice = productPrice*newQuantity;
    document.getElementById(idOfAmount).innerText = totalPrice;
}