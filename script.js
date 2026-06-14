/* ==========================
   CONTADORES ANIMADOS
========================== */

function animarContador(id, valorFinal){

const elemento = document.getElementById(id);

if(!elemento) return;

let atual = 0;

const incremento = valorFinal / 120;

const intervalo = setInterval(() => {

atual += incremento;

if(atual >= valorFinal){

atual = valorFinal;

clearInterval(intervalo);

}

elemento.textContent =
Math.floor(atual).toLocaleString('pt-BR');

}, 20);

}

animarContador("contadorCampo", 12500);
animarContador("contadorTecnologia", 4800);
animarContador("contadorEducacao", 25000);
animarContador("contadorSustentabilidade", 9200);

/* ==========================
   QUIZ
========================== */

let pontuacao = 0;

function verificarResposta(opcao){

const resultado =
document.getElementById("resultadoQuiz");

const pontuacaoTexto =
document.getElementById("pontuacaoQuiz");

if(opcao === "a"){

resultado.innerHTML =
"✅ Correto! Os drones são amplamente utilizados para monitorar plantações.";

pontuacao += 10;

}else{

resultado.innerHTML =
"❌ Resposta incorreta. A alternativa correta é Drone.";

}

pontuacaoTexto.innerHTML =
"Pontuação: " + pontuacao;

}

/* ==========================
   CALCULADORA SUSTENTÁVEL
========================== */

function calcularSustentabilidade(){

const agua =
parseInt(document.getElementById("agua").value);

const reciclagem =
parseInt(document.getElementById("reciclagem").value);

const alimentos =
parseInt(document.getElementById("alimentos").value);

const total =
agua + reciclagem + alimentos;

const resultado =
document.getElementById(
"resultadoSustentabilidade"
);

if(total >= 50){

resultado.innerHTML =
"🌱 Excelente! Você possui hábitos sustentáveis.";

}
else if(total >= 20){

resultado.innerHTML =
"♻️ Bom resultado! Continue evoluindo.";

}
else{

resultado.innerHTML =
"🌎 Pequenas mudanças podem fazer grande diferença.";

}

}

/* ==========================
   GRÁFICO 1
========================== */

const grafico1 =
document.getElementById(
"graficoSustentabilidade"
);

if(grafico1){

new Chart(grafico1,{

type:"line",

data:{

labels:[
"2022",
"2023",
"2024",
"2025",
"2026"
],

datasets:[{

label:"Agricultura Sustentável (%)",

data:[
55,
65,
74,
86,
95
],

fill:true,

tension:0.4

}]

},

options:{
responsive:true
}

});

}

/* ==========================
   GRÁFICO 2
========================== */

const grafico2 =
document.getElementById(
"graficoTecnologias"
);

if(grafico2){

new Chart(grafico2,{

type:"doughnut",

data:{

labels:[
"Drones",
"IA",
"GPS",
"Sensores"
],

datasets:[{

data:[
30,
25,
20,
25
]

}]

},

options:{
responsive:true
}

});

}

/* ==========================
   GRÁFICO 3
========================== */

const grafico3 =
document.getElementById(
"graficoInvestimentos"
);

if(grafico3){

new Chart(grafico3,{

type:"pie",

data:{

labels:[
"Educação",
"Tecnologia",
"Pesquisa",
"Sustentabilidade"
],

datasets:[{

data:[
25,
35,
15,
25
]

}]

},

options:{
responsive:true
}

});

}

/* ==========================
   GRÁFICO 4
========================== */

const grafico4 =
document.getElementById(
"graficoEducacao"
);

if(grafico4){

new Chart(grafico4,{

type:"bar",

data:{

labels:[
"2022",
"2023",
"2024",
"2025",
"2026"
],

datasets:[{

label:"Participação Estudantil",

data:[
1200,
1800,
2500,
3200,
4500
]

}]

},

options:{
responsive:true
}

});

}

/* ==========================
   ANIMAÇÕES AO ROLAR
========================== */

const elementos =
document.querySelectorAll(
".tech-card, .ods-card, .parana-card, .mini-card, .grafico-card, .estatistica-card"
);

const observador =
new IntersectionObserver((entradas)=>{

entradas.forEach((entrada)=>{

if(entrada.isIntersecting){

entrada.target.style.opacity = "1";

entrada.target.style.transform =
"translateY(0)";

}

});

},
{
threshold:0.15
});

elementos.forEach((elemento)=>{

elemento.style.opacity = "0";

elemento.style.transform =
"translateY(40px)";

elemento.style.transition =
"all 0.8s ease";

observador.observe(elemento);

});

/* ==========================
   MENU MOBILE
========================== */

const menuMobile =
document.querySelector(".menu-mobile");

const menu =
document.querySelector(".menu");

if(menuMobile && menu){

menuMobile.addEventListener("click", ()=>{

if(menu.style.display === "flex"){

menu.style.display = "none";

}else{

menu.style.display = "flex";
menu.style.flexDirection = "column";
menu.style.position = "absolute";
menu.style.top = "80px";
menu.style.right = "20px";
menu.style.padding = "20px";
menu.style.background = "#fff";
menu.style.borderRadius = "15px";
menu.style.boxShadow =
"0 10px 30px rgba(0,0,0,.15)";

}

});

}

/* ==========================
   BOTÃO TOPO
========================== */

const botaoTopo =
document.createElement("button");

botaoTopo.innerHTML = "⬆";

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "20px";
botaoTopo.style.right = "20px";
botaoTopo.style.width = "55px";
botaoTopo.style.height = "55px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.fontSize = "22px";
botaoTopo.style.display = "none";
botaoTopo.style.zIndex = "999";

document.body.appendChild(botaoTopo);

window.addEventListener("scroll",()=>{

if(window.scrollY > 500){

botaoTopo.style.display = "block";

}else{

botaoTopo.style.display = "none";

}

});

botaoTopo.addEventListener("click",()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

});

/* ==========================
   ANO AUTOMÁTICO NO FOOTER
========================== */

const footer =
document.querySelector(".footer");

if(footer){

footer.innerHTML +=
`<p style="margin-top:15px;">
Projeto Agrinho Paraná ${new Date().getFullYear()}
</p>`;

}