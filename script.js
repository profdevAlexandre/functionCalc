function main()
{
  //Declaracao das variaveis
 let resp = document.getElementById('resp');
 let num1 = parseFloat(document.getElementById("num1").value);
 let num2 = parseFloat(document.getElementById("num2").value);
 let texto='';

 //Verifica qual operacao foi selecionada e chama a funcao correspondente
 if(document.getElementById('soma').checked)
  texto = soma(num1, num2);
 if(document.getElementById('subtracao').checked)
  texto = subtracao(num1, num2);
 if(document.getElementById('multiplicacao').checked)
  texto = multiplicacao(num1, num2);
 if(document.getElementById('divisao').checked)
  texto = divisao(num1, num2);
  if(document.getElementById('resto').checked)
  texto = resto(num1, num2);
  
//exibe a resposta usando innerHTML 
 resp.innerHTML = texto;
}

//funcao das operacoes matematicas  
function soma(x, y)
{
  
  return (x+y);
}

function subtracao(x, y)
{
  
  return (x-y);
}

function multiplicacao(x, y)
{
  
  return (x*y);
}

function divisao(x, y)
{
  
  return (x/y);
}

function resto(x,y)
{
  return (x%y);
}