const formulario = document.getElementById('form-deposito');
const numero01 = document.getElementById('numero01');
const numero02 = document.getElementById('numero02');
let mensagem = document.getElementById('mensagem');


function validaForm(n1,n2){
   return  parseInt(n2) > parseInt(n1);
}

formulario.addEventListener('submit',function(e){
  e.preventDefault();


let formValidado = validaForm(numero01.value,numero02.value);
console.log(formValidado);
if(formValidado){
    console.log("Sucesso!!!");
    mensagem.classList.add('sucess');
    document.querySelector('#mensagem').innerHTML = "Formulário Validado Número 2 > Número 1!!!!";
    document.querySelector('#mensagem').style.display = 'block';
}else{
    console.log("Erro!!!");
    mensagem.classList.add('error');
    document.querySelector('#mensagem').innerHTML = "Formulário Invalido Número 2 < Número 1!!!!";
    document.querySelector('#mensagem').style.display = 'block';
}

});