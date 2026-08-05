function verificar(correta){

    const mensagem=document.getElementById("mensagem");

    const proximo=document.getElementById("proximo");

    if(correta){

        mensagem.style.color="green";

        mensagem.innerHTML="🎉 Resposta correta!";

        proximo.style.display="block";

    }

    else{

        mensagem.style.color="red";

        mensagem.innerHTML="❌ Resposta errada. Tente novamente.";

    }

}