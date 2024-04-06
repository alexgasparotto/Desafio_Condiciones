/* Inicio EJERCICIO 1 */

const imagen = document.querySelector ('#randomImage');
imagen.addEventListener ('click', function(){
    console.log(this);
    console.log(this.classList)
    if(this.classList.contains('border')){
        console.log("contiene")
        this.classList.remove('border');
    }else{
        console.log("no contiene")
        this.classList.add('border')
    }
    console.log(this)
} )


/* Inicio segundo ejercicio */;

const input1 = document.querySelector('.card1');
const input2 = document.querySelector('.card2');
const input3 = document.querySelector('.card3');
const verificar = document.querySelector('#verificar');
const parrafo = document.querySelector ('#text')

/* evento de ingresos en los inputs */
input1.addEventListener('input', miFuncion);
input2.addEventListener('input', miFuncion);
input3.addEventListener('input', miFuncion);

function miFuncion (){
    let valor = parseFloat(this.value);
    if (valor < 0){
        this.value = '';
    }
}
verificar.addEventListener('click', function() {
    let sumaTotal = +input1.value + +input2.value + +input3.value;
    if (sumaTotal <= 10) {
        parrafo.innerText = "llevas " + sumaTotal + ' stickers'
    }else {
        parrafo.innerText = "llevas demasiados stickers"
    }
})

/* Fin del desafio 2 */

/* inicio del tercer desafio */


const selector1 = document.querySelector ('#selector1')
const selector2 = document.querySelector ('#selector2')
const selector3 = document.querySelector ('#selector3')
const button = document.querySelector ('#ingresar')
const textSecreto = document.querySelector ('#text_secreto')

button.addEventListener('click', function (){
    let password = selector1.value + selector2.value + selector3.value;
    console.log (password)
    if (password === '911'){
        console.log('Password 1 correcto');
        textSecreto.innerText = ('Password 1 correcto!');
    } else if (password === '714'){
        console.log('Password 2 correcto');
        textSecreto.innerText = ('Password 2 correcto!');
    }else{
        console.log('password incorrecto');
        textSecreto.innerText = ('Password incorrecto!');
    }
})