const metodoDepago = 'Efectivo'; 

switch(metodoDepago){
    case 'Efectivo':
 //       console.log(`El usuario pagó con ${metodoDepago}`);
        pagar();
        break;
        case 'Cheque':
            console.log('El usuario pago con cheque');
            break;
    case 'Tarjeta':
        console.log('El usuario pago con tarjeta');
        break;
    default: 
        console.log('El método de pago no es válido');
        break;          
}

function pagar(){
    console.log(`El usuario pagó con ${metodoDepago}`);
}
