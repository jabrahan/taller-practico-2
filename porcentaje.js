function priceWithDiscont (price, discont) {
    const percentageDiscontPrice = 100 - discont;
    const priceWithDiscont = (price * percentageDiscontPrice) / 100;
    return priceWithDiscont;
}
//<p id=resultP></p> 

 //   const resultP = document.getElementById("resultP");
 //   resultP.innerText = "El precio con descuento es: " + priceWithDiscont; 
 // 

function calPriceWithDiscont () {
    const inputPrice = document.getElementById("priceValue");
    const price = inputPrice.value;
    const inputDiscont = document.getElementById("discont");
    const discont = inputDiscont.value;

    const priceFinal = priceWithDiscont(price,discont);
    
    const priceR = document.getElementById("priceF");

    priceR.innerText = "El precio Final es de: " + priceFinal;
}

const disconts = [
    {
        name: "SUPER",
        descuento: 30,
    },
    {
        name: "MIDDLE",
        descuento: 15,
    },
    {
        name: "LOW",
        descuento: 10,
    }
]
 

function validDiscont () {
    
    const inputCoupon = document.getElementById("coupon"); //UBICO LA POSICION EN MEMORIA DEL ELEMENTO QUE AGREGA LE USUARIO EN EL INPUT
    const couponValue = inputCoupon.value; // GUARDO EL ELEMENTO EN UNA VARIABLE


    const isCouponValueValid = function (discont) { // EJECUTO UNA FUNCION QUE ME PERMITA SABER SI EL ELEMENTO SE ENCUENTRA EN MI ARREGLO DE OBJETOS 
        return discont.name === couponValue; // RETORNO SI ES VERDAD O FALSO 
    };

    const userCoupon = disconts.find(isCouponValueValid); // PARA USAR EL METODO FIND ES NECESARIO EJECUTAR UNA FUNCION DENTRO DEL MISMO QUE HAGA EL RECORRIDO DENTRO DEL ARRAY Y ARROJE UN VALOR VERDADERO O FALSO 

    if (!userCoupon) {  // SI NO SE ENCUENTRA EL CUPON ARROJA ESTE VALOR 
        alert("El cupón " + couponValue + " no es válido");
    }
    else { // SI EL CUPON SE ENCUENTRA EN EL ARREGLO EJECUTA EL SIGUIENTE CODIGO 
        const inputPrice = document.getElementById("priceValue");
        const price = inputPrice.value;
        const descuento = userCoupon.descuento;
        const precioConDescuento = priceWithDiscont(price, descuento);
    
        const priceR = document.getElementById("priceF");
        priceR.innerText = "El precio con descuento son: $" + precioConDescuento; }

}





