const mensagens = document.querySelectorAll(".msg");

let apagadas = 0;

mensagens.forEach(msg=>{

let inicioX = 0;

msg.addEventListener("mousedown",function(e){

inicioX = e.clientX;

function mover(ev){

let distancia = ev.clientX - inicioX;

if(distancia < 0){

msg.style.left = distancia + "px";

}

}

function soltar(ev){

let distancia = ev.clientX - inicioX;

document.removeEventListener("mousemove",mover);

document.removeEventListener("mouseup",soltar);

if(distancia < -150){

msg.style.transition=".5s";

msg.style.left="-600px";

msg.style.opacity="0";

setTimeout(()=>{

msg.remove();

apagadas++;

verificarFinal();

},500);

}else{

msg.style.left="0px";

}

}

document.addEventListener("mousemove",mover);

document.addEventListener("mouseup",soltar);

});

});

function verificarFinal(){

if(apagadas==4){

document.getElementById("textoFinal").innerHTML=

"✨ As mensagens desapareceram...<br><br>Mas as lembranças permanecerão para sempre.<br><br>Obrigado por jogar! ❤️";

document.getElementById("proximo").style.display="block";

}

}