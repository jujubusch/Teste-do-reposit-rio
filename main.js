document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome );

document.getElementById( "btn-soma" ).addEventListener( "click" , exibesoma );

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
    document.getElementById( "resultado1" ).innerHTML = numero1 + parseFloat(numero2);

}