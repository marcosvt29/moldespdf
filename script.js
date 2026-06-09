(() => {

'use strict';


/* =========================
 CONFIGURAÇÕES
========================= */

const WHATSAPP_NUMBER = '5551998899069';

const SITE_NAME = "MOLDES DO PORTO";


/* =========================
 PRODUTOS
========================= */

const PRODUCTS = [

{
id:1,
name:"Molde Base Corpo Feminino (36 ao 52)",
category:"Grades",
priceLabel:"R$ 29,50",
img:"imagens/a1.png",
images:[
"imagens/a1.png",
"imagens/a2.png"
],

hotmart:
"https://go.hotmart.com/A106211345R?dp=1",

description:
"O Molde Corpo Base Feminino é a fundação indispensável para quem trabalha com criação, sob medida ou confecção industrial. Esta base blusa foi projetada e equilibrada milimetricamente para servir como o ponto de partida perfeito no desenvolvimento de qualquer peça superior do vestuário feminino, garantindo vestibilidade imediata e eliminando a necessidade de testes exaustivos de peça-piloto.",

specs:{
Grade:"36 ao 52",
Arquivo:"PDF",
Folhas:"A4 e A1"
}

},

{
id:2,
name:"Molde Base Recorte Princesa (36 ao 52)",
category:"Grades",
priceLabel:"R$ 29,50",
img:"imagens/b1.png",
images:[
"imagens/b1.png",
"imagens/b111.png",
"imagens/b2.png"
],

hotmart:
"https://go.hotmart.com/G106211605N?dp=1",

description:
"O Molde Base de Corpo com Recorte Princesa é a ferramenta definitiva para quem busca precisão industrial, caimento impecável e agilidade na produção de vestuário feminino. Desenvolvido com foco na anatomia e na alta vestibilidade, este molde elimina a necessidade de ajustes complexos, distribuindo os volumes do busto e da cintura de forma harmônica e sofisticada.",

specs:{
Grade:"36 ao 52",
Arquivo:"PDF",
Folhas:"A4 e A1"
}

},


{
id:3,
name:"Molde Base Calça Social Feminina (38 ao 52)",
category:"Grades",
priceLabel:"R$ 39,50",
img:"imagens/r1.png",
images:[
"imagens/r1.png",
"imagens/r2.png"
],

hotmart:
"https://go.hotmart.com/J106211772G?dp=1",


description:
"A Calça Social Feminina é uma das peças mais complexas da modelagem e exige um equilíbrio milimétrico para alcançar o caimento perfeito. Desenvolvida seguindo os mais rigorosos padrões da engenharia têxtil, esta base foi projetada para eliminar problemas crônicos de vestibilidade — como sobras de tecido no gancho, calças que puxam ao sentar ou defeitos na linha de quadril.",


specs:{
Grade:"38 ao 52",
Arquivo:"PDF",
Folhas:"A4 e A0"
}

}
,
    
    
{
id:4,
name:"Molde Camisa Social Feminina (P AO GG)",
category:"Grades",
priceLabel:"R$ 39,50",
img:"imagens/d2.png",
images:[
"imagens/d2.png",
"imagens/d3.png",
"imagens/d4.png"

],

hotmart:
"https://go.hotmart.com/R106211890K?dp=1",


description:
"Este molde apresenta a modelagem completa para o desenvolvimento de uma Camisa Social Feminina de Manga Longa, com corte clássico e detalhes tradicionais da camisaria. O modelo oferece uma silhueta levemente estruturada e caimento anatômico, ideal para tecidos planos (como tricoline, viscose pesada, linho ou jeans leve).",


specs:{
Grade:"P ao GG",
Arquivo:"PDF",
Folhas:"A4 e A0"
}

}
    ,
    
    {
id:5,
name:"Molde Tomara que Caia Decote Coração  Recorte Princesa Cropped (36 ao 46)",
category:"Grades",
priceLabel:"R$ 32,50",
img:"imagens/f3.png",
images:[
"imagens/f3.png",
"imagens/f1.png",
"imagens/f2.png"

],

hotmart:
"https://go.hotmart.com/N106212112S?dp=1",


description:
"Nossa modelagem foi desenvolvida com foco em alta performance industrial, utilizando técnicas avançadas de rotação de pences e camuflagem anatômica diretamente no ambiente digital. Um corset tomara-que-caia legítimo que abraça o tórax, desenha o busto de forma perfeitamente arredondada e fica totalmente selado ao osso do esterno. Elegância, sustentação e segurança em uma única peça.",


specs:{
Grade:"36 ao 46",
Arquivo:"PDF",
Folhas:"A4 e A2"
}

},
    
    
    
{
id:6,
name:"Molde Sob Medida Tomara que caia Decote Coração Recorte Princesa Cropped",
category:"Sob Medida",
priceLabel:"R$ 45,50",

img:"imagens/m01.png",

images:[
"imagens/m1.png",
"imagens/m2.png",
"imagens/m3.png",
"imagens/m4.png",
"imagens/m5.png",
"imagens/m6.png"
],

buttonText:"Falar no WhatsApp",

buttonLink:"https://wa.me/5551998899069",

hotmart:
"https://pay.hotmart.com/SEU_LINK_AQUI",

description:
"Para elaboração do molde sob-medida, é preciso tirar as medidas com a fitá métrica do seu corpo. Indicado tirar as medidas com uma roupa justa e vestindo um sutiã de sua preferência. Todas as medidas necessárias estão nas fotos ao lado. Solicite o molde via WhatsApp.",

specs:{
Grade:"Sob Medida",
Arquivo:"PDF",
Folhas:"A4 e A2"
}

} ,
    
    
    
        
{
id:7,
name:"Molde Sob Medida Corpo Base Fem.",
category:"Sob Medida",
priceLabel:"R$ 45,50",

img:"imagens/n1.png",

images:[
"imagens/m1.png",
"imagens/m2.png",
"imagens/m3.png",
"imagens/m4.png",
"imagens/m5.png",
"imagens/m6.png"
],

buttonText:"Falar no WhatsApp",

buttonLink:"https://wa.me/5551998899069",

hotmart:
"https://pay.hotmart.com/SEU_LINK_AQUI",

description:
"Para elaboração do molde sob-medida, é preciso tirar as medidas com a fitá métrica do seu corpo. Indicado tirar as medidas com uma roupa justa e vestindo um sutiã de sua preferência. Todas as medidas necessárias estão nas fotos ao lado. Solicite o molde via WhatsApp.",

specs:{
Grade:"Sob Medida",
Arquivo:"PDF",
Folhas:"A4 e A2"
}

}    
       ,
    
        
{
id:8,
name:"Curso - Método Corpinho Base Sob Medida Fem",
category:"Curso",
priceLabel:"R$ 97,00",
img:"imagens/capamolde.jpg",
images:[
"imagens/cc01.png",
"imagens/cc02.png",
"imagens/cc03.png",
"imagens/cc04.png",
"imagens/cc05.png",
"imagens/cc06.png",
"imagens/cc07.png",
"imagens/dp01.png"

],

hotmart:
"https://go.hotmart.com/F105441660J?dp=1",


description:
"O método é uma introdução ao mundo da modelagem, você vai compreender a função das principais pences. Desenvolver o molde base no papel. Tirar as medidas necessárias do corpo, e transferir tudo para o papel. Onde faço o passo a passo do molde do corpinho base, frente e costas,  no papel mostrando cada detalhe. Depois faço uma boa abordagem sobre as pences fundamentais e para que servem.Você vai compreender a como fazer um molde base com precisão.O  Curso é on line 100% em vídeo narrado, diretamente pela plataforma Hotmart, com total segurança e qualidade. Durabilidade de 01 ano inteiro, você pode assistir a hora que quiser quantas vezes quiser. Junto com meu suporte on line de 01 mês pra qualquer dúvida que tiver em alguma das aulas.",


specs:{
Mídia :"100% vídeo narrado",
Durabilidade :"01 ano",
Mensalidade:"sem mensalidade"
}

}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
       
    
    
];



/* =========================
 UTILIDADES
========================= */

const grid =
document.getElementById("prodGrid");


const empty =
document.getElementById("emptyState");


function escapeHtml(text){

return String(text)
.replace(/[&<>"']/g,
m=>({
"&":"&amp;",
"<":"&lt;",
">":"&gt;",
'"':"&quot;",
"'":"&#039;"
}[m]));

}



/* =========================
 LISTAGEM
========================= */


function renderProducts(list){


if(!grid) return;


grid.innerHTML="";


if(!list.length){

empty.hidden=false;

return;

}


empty.hidden=true;



list.forEach(product=>{


const card=document.createElement("article");


card.className="card";


card.innerHTML=`

<a 
href="${product.page ? product.page : 'produto.html?id='+product.id}"
class="card-link">


<div class="zoom-wrapper">


<img 
src="${product.img}"
alt="${escapeHtml(product.name)}">


</div>


<div class="card-body">


<strong>
${escapeHtml(product.name)}
</strong>


<div class="price">

${product.priceLabel}

</div>


</div>


</a>

`;



grid.appendChild(card);


});


}




/* =========================
 FILTROS
========================= */


document
.querySelectorAll(".menu-btn")
.forEach(btn=>{


btn.addEventListener("click",()=>{


document
.querySelectorAll(".menu-btn")
.forEach(b=>b.classList.remove("active"));


btn.classList.add("active");



let cat=btn.dataset.cat;



if(cat==="all"){

renderProducts(PRODUCTS);

}

else{


renderProducts(
PRODUCTS.filter(
p=>p.category===cat
)
);


}


});


});






/* =========================
 PÁGINA PRODUTO
========================= */


function renderProduct(){


const page =
document.getElementById("productPage");


if(!page) return;



const id =
Number(
new URLSearchParams(location.search)
.get("id")
);



const p =
PRODUCTS.find(x=>x.id===id);



if(!p){

page.innerHTML=
"<h2>Produto não encontrado</h2>";

return;

}




document.title =
p.name+" - "+SITE_NAME;



page.innerHTML=`


<div class="product-gallery">


<div 
class="zoom-wrapper"
id="zoomWrapper">


<img 
id="mainProductImg"
src="${p.images[0]}"
>


</div>



<div class="mini-thumbs">


${p.images.map((img,i)=>`

<img 
src="${img}"
class="${i===0?'active':''}"
onclick="changeImage('${img}')">

`).join("")}


</div>


</div>





<div class="product-info">


<h1>

${escapeHtml(p.name)}

</h1>



<div class="price-current">

${p.priceLabel}

</div>




<p>

${escapeHtml(p.description)}

</p>




<h3>
Especificações
</h3>



<table>


${Object.entries(p.specs)
.map(([a,b])=>`

<tr>

<td><b>${a}</b></td>

<td>${b}</td>

</tr>

`).join("")}


</table>




<br>



<button 
class="btn"
id="buyBtn">

${p.buttonText || "Comprar agora"}

</button>



</div>



`;




document
.getElementById("buyBtn")
.onclick=()=>{


window.open(
p.buttonLink || p.hotmart,
"_blank"
);


};




initZoom();


}




window.changeImage=function(src){

document
.getElementById("mainProductImg")
.src=src;

};






/* =========================
 ZOOM
========================= */

function initZoom(){

const box =
document.getElementById("zoomWrapper");

const img =
document.getElementById("mainProductImg");


if(!box || !img) return;



img.style.transition =
"transform .35s ease";

img.style.transform =
"scale(1)";



box.onmousemove = (e)=>{


const rect =
box.getBoundingClientRect();


const x =
((e.clientX - rect.left) / rect.width) * 100;


const y =
((e.clientY - rect.top) / rect.height) * 100;



img.style.transformOrigin =
`${x}% ${y}%`;



img.style.transform =
"scale(1.25)";


};



box.onmouseleave = ()=>{


img.style.transform =
"scale(1)";


img.style.transformOrigin =
"center center";


};


}



/* =========================
 WHATSAPP
========================= */


const wa =
document.getElementById("waFab");


if(wa){


wa.onclick=()=>{


window.open(
`https://wa.me/${5551998899069}`,
"_blank"
);


};


}





/* =========================
 INICIAR
========================= */


document.addEventListener(
"DOMContentLoaded",
()=>{


if(grid){

renderProducts(PRODUCTS);

}


renderProduct();



const ano =
document.getElementById("ano");


if(ano){

ano.textContent =
new Date().getFullYear();

}


});



})();