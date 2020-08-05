var questions = [
    'Qual o seu nome ?',
    'De onde você é?',
    'Quantos anos você tem?',
    'Em que perfil você esta trabalhando?',
    'Foi um prazer conversar com você :)'
];
var num = 0;

var inputBox = document.querySelector("#ans");
var output = document.querySelector("#result");
output.innerHTML = questions[num];

function showResponse() {
  var input = inputBox.value;
  if(inputBox.value == "") {
    
  }else {
  if(num == 0) {
    output.innerHTML = `Olá ${input}`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Aguarde 2 segundos");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 1) {
    output.innerHTML = `${input} deve ser um bom lugar`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Aguarde 2 segundos");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 2) {
    output.innerHTML = `Então você nasceu em ${2020 - input} `;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Aguarde 2 segundos");
    ++num;
    setTimeout(changeQuestion, 2000);
  } else if(num == 3) {
    output.innerHTML = `Impressionante ${input}`;
    inputBox.value = "";
    inputBox.setAttribute("placeholder", "Aguarde 2 segundos");
    ++num;
    setTimeout(changeQuestion, 2000);
  }
  }
}

function changeQuestion() {
  inputBox.setAttribute("placeholder", "Digite sua resposta");
  output.innerHTML = questions[num];
  if(num == 4) {
    inputBox.style.display = "none";
  }
}

$(document).on('keypress', function(e) {
  if(e.which == 13) {
    showResponse();
  }
})

$( "#ans" ).focus();
