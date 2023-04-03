//<<<<============phones event handler========>>>
//add button event listener
const addBtn = document.getElementById("addPhone");
addBtn.addEventListener("click",function(){
    increaseAmount("phonesQuantity","phonesPrice",1219);
})
//remove button event Listener
const removeBtn = document.getElementById("removePhone");
removeBtn.addEventListener("click",function(){
    decreaseAmount("phonesQuantity","phonesPrice",1219);
})


//<<<<============Casing event handler========>>>>>
//add button event listener
const addCasingQuantity = document.getElementById("addCasingQuantity");
addCasingQuantity.addEventListener("click",function(){
   increaseAmount("casingQuantity","casingPrice",59);
})
//remove button event listener
const removeCasingQuantity = document.getElementById("removeCasingQuantity");
removeCasingQuantity.addEventListener("click",function(){
    decreaseAmount("casingQuantity","casingPrice",59);
})

//<<<<============Total Price========>>>>>





//common function
function increaseAmount(btnId,valueId,productPriceNumber) {
    const productQuantity = document.getElementById(btnId).value;
    const productNumber = parseFloat(productQuantity);
    const totalQuantity = productNumber + 1;
    document.getElementById(btnId).value = totalQuantity;
    //update parches amount
    amount(totalQuantity,productPriceNumber,valueId);
}
function decreaseAmount(btnId,valueId,productPriceNumber) {
    const productQuantity = document.getElementById(btnId).value;
    const productNumber = parseFloat(productQuantity);
    const totalQuantity = productNumber - 1;
    document.getElementById(btnId).value = totalQuantity;
    // //update parches amount
    amount(totalQuantity,productPriceNumber,valueId);
}

function amount(totalQuantity,productPriceNumber,valueId) {
    const totalPrice = productPriceNumber*totalQuantity;
    document.getElementById(valueId).innerText = totalPrice;
}