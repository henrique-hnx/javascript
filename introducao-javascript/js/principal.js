console.log("O arquivo separado está funcionando")

//--------- Daqui para baixo 
// alteração do titulo
//console.log(document)
//cria a variavel titulo e armazena o conteudo de classe titulo nela

let titulo = document.querySelector('.titulo');

//console.log(titulo)
//atribuição de um novo valor na variável titulo

titulo.textContent = "Zé do bill nutrição"

//alteração da tabela

let paciente = document.querySelector ("#primeiro-paciente")
 
let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura");

let peso = tdPeso.textContent;
let altura = tdAltura.textContent;

let imc = peso / (altura * altura);
console.log (imc)