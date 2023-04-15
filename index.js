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

//<<<<============Submit Button event handler========>>>>>
const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click",function(){
    document.getElementById("phonesQuantity").value = "1";
    document.getElementById("phonesPrice").innerText = "1219";
    document.getElementById("casingQuantity").value = "1";
    document.getElementById("casingPrice").innerText = "59";
    document.getElementById("subtotal").innerText = "1278";
    document.getElementById("tax").innerText = "192";
    document.getElementById("total").innerText = "1470";
    // alert("Thank you so much");
    confirm("Thanks For Shopping!");
    
})




//common function
function btnEventHandler(idOfInput,idOfAmount,productPrice,isIncrease) {
    const input = document.getElementById(idOfInput);
    const quantity = parseInt(input.value);
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
    calculateTotal();
}

function calculateTotal () {
    const phoneCount = getInputCount("phonesQuantity")
    const caseCount = getInputCount("casingQuantity")
    const subtotal = phoneCount*1219+caseCount*59;
    const tax = Math.round(subtotal * (15/100));//15%D
    const totalPrice = subtotal + tax;
    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("total").innerText = totalPrice;
    console.log(phoneCount,caseCount,totalPrice,tax);
}
function getInputCount(product){
    const input = document.getElementById(product)
    const count = parseInt(input.value);
    return count
}