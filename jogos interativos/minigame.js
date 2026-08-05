const palavras = [

    "Olá",
    "princesa,",
    "quanto",
    "tempo",
    "está",
    "me",
    "ignorando?"
    
    ];
    
    let indice = 0;
    
    const frase = document.getElementById("frase");
    const mensagem = document.getElementById("mensagem");
    const area = document.getElementById("areaJogo");
    
    palavras.forEach(criarPalavra);
    
    function criarPalavra(texto){
    
        let div = document.createElement("div");
    
        div.className="palavra";
    
        div.innerHTML=texto;
    
        div.style.left=Math.random()*(window.innerWidth-150)+"px";
    
        div.style.top=Math.random()*(window.innerHeight-150)+120+"px";
    
        area.appendChild(div);
    
        let dx=(Math.random()*4)-2;
        let dy=(Math.random()*4)-2;
    
        setInterval(()=>{
    
            let x=div.offsetLeft+dx;
            let y=div.offsetTop+dy;
    
            if(x<0 || x>window.innerWidth-120) dx*=-1;
            if(y<90 || y>window.innerHeight-60) dy*=-1;
    
            div.style.left=x+"px";
            div.style.top=y+"px";
    
        },20);
    
        document.addEventListener("mousemove",(e)=>{
    
            let px=div.offsetLeft+50;
            let py=div.offsetTop+20;
    
            let dist=Math.sqrt(
                (e.clientX-px)*(e.clientX-px)+
                (e.clientY-py)*(e.clientY-py)
            );
    
            if(dist<120){
    
                let ang=Math.atan2(py-e.clientY,px-e.clientX);
    
                div.style.left=(div.offsetLeft+Math.cos(ang)*15)+"px";
                div.style.top=(div.offsetTop+Math.sin(ang)*15)+"px";
    
            }
    
        });
    
        div.onclick=function(){
    
            if(texto===palavras[indice]){
    
                frase.innerHTML+=texto+" ";
    
                indice++;
    
                div.remove();
    
                mensagem.innerHTML="";
                if(indice===palavras.length){

                    mensagem.style.color="green";
                
                    mensagem.innerHTML="🎉 Você conseguiu montar a frase!";
                
                    const botao = document.getElementById("proximoCapitulo");
                
                    botao.style.display = "inline-block";
                
                }
            }
    
            else{
    
                mensagem.style.color="red";
    
                mensagem.innerHTML="Errado!";
    
                div.style.transform="scale(1.4)";
    
                setTimeout(()=>{
    
                    div.style.transform="scale(1)";
    
                },200);
    
            }
    
        }
    
    }