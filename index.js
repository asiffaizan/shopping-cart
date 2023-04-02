//phones event handler
//remove button event Listener
const removeBtn = document.getElementById("removePhone");
removeBtn.addEventListener("click",function(){
    const phonesQuantity = document.getElementById("phonesQuantity").value;
    const phonesQuantityNumber = parseFloat(phonesQuantity);
    const totalQuantity = phonesQuantityNumber - 1;
    document.getElementById("phonesQuantity").value = totalQuantity;

    //update parches amount
    const phonesPrice = document.getElementById("phonesPrice").innerText;
    const phonesPriceNumber = parseFloat(phonesPrice);
    const totalPrice = phonesPriceNumber*phonesQuantityNumber;
    // document.getElementById("phonesPrice").innerText = totalPrice;
    console.log("this is remove button : ",totalPrice);
})

//add button event listener
const addBtn = document.getElementById("addPhone");
addBtn.addEventListener("click",function(){
    const phonesQuantity = document.getElementById("phonesQuantity").value;
    const phonesQuantityNumber = parseFloat(phonesQuantity);
    const totalQuantity = phonesQuantityNumber + 1;
    document.getElementById("phonesQuantity").value = totalQuantity;
    //update parches amount
    const phonesPrice = document.getElementById("phonesPrice").innerText;
    const phonesPriceNumber = parseFloat(phonesPrice);
    const totalPrice = phonesPriceNumber*totalQuantity;
    document.getElementById("phonesPrice").innerText = totalPrice;
    console.log("add button : ", totalPrice," phonesQuantity", phonesQuantity," totalQuantity ", totalQuantity," phonesPrice ", phonesPrice," phonesPriceNumber ", phonesPriceNumber);
})


//Casing event handler

//add button event listener
const addCasingQuantity = document.getElementById("addCasingQuantity");
addCasingQuantity.addEventListener("click",function(){
    const casingQuantity = document.getElementById("casingQuantity").value;
    const casingQuantityNumber = parseFloat(casingQuantity);
    const totalQuantity = casingQuantityNumber + 1;
    document.getElementById("casingQuantity").value = totalQuantity;
    //update parches amount
    const casingPrice = document.getElementById("casingPrice").innerText;
    const casingPriceNumber = parseFloat(casingPrice);
    const totalPrice = casingPriceNumber*totalQuantity;
    document.getElementById("casingPrice").innerText = totalPrice;
    console.log("add button : ", totalPrice," casingQuantity", casingQuantity," totalQuantity ", totalQuantity," casingPrice ", casingPrice," casingPriceNumber ", casingPriceNumber);
})

//add button event listener
const removeCasingQuantity = document.getElementById("removeCasingQuantity");
removeCasingQuantity.addEventListener("click",function(){
    const casingQuantity = document.getElementById("casingQuantity").value;
    const casingQuantityNumber = parseFloat(casingQuantity);
    const totalQuantity = casingQuantityNumber - 1;
    document.getElementById("casingQuantity").value = totalQuantity;
    //update parches amount
    const casingPrice = document.getElementById("casingPrice").innerText;
    const casingPriceNumber = parseFloat(casingPrice);
    const totalPrice = casingPriceNumber*totalQuantity;
    document.getElementById("casingPrice").innerText = totalPrice;
    console.log("add button : ", totalPrice," casingQuantity", casingQuantity," totalQuantity ", totalQuantity," casingPrice ", casingPrice," casingPriceNumber ", casingPriceNumber);
})


//common function
