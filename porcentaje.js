const originalPrice = 100;
const discont = 15; 

function calPriceWithDiscont (price, discont) {
    const percentageDiscontPrice = 100 - discont;
    const priceWithDiscont = (price * percentageDiscontPrice) / 100;
    console.log(priceWithDiscont);
}



 

//console.log({
//    originalPrice,
//    discont,
//    percentageDiscontPrice,
//    priceWithDiscont,
//});

