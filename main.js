document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome );

document.getElementById( "btn-soma" ).addEventListener( "click" , exibesoma );

document.getElementById( "somar" ).addEventListener( "click" , exibirdivisao );

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usuario = document.getElementById( "nome" ).value;
    document.getElementById( "mensagem" ).innerHTML = "Meu Nome É: " + usuario;
    document.getElementById( "nome" ).value = "";
}

function exibesoma()
{
    let numero1 = document.getElementById( "numero1" ).value;
    let numero2 = document.getElementById( "numero2" ).value;
    document.getElementById( "resultado1" ).innerHTML = parseFloat(numero1) + parseFloat(numero2);

}

function exibirdivisao()
{
    let numero3 = document.getElementById( "numero3" ).value;
    let numero4 = document.getElementById( "numero4" ).value;
    document.getElementById( "resultado2" ).innerHTML = parseFloat(numero3) + parseFloat(numero4);

}