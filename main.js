document.addEventListener( "click" , showcolor );

document.getElementById( "botao" ).addEventListener( "click" , exibenome );

document.getElementById( "numero1" ).addEventListener( "click" , exibenumero );

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

function exibenumero()
{
    document.getElementById( "numero1" ).innerHTML = "" + ""; 
}