const Web = window.location.href;

let Cover;
let Icon;
let Clases;

if (Web.includes('cursos')) {
    
    Cover = document.querySelector('meta[property="og:image"]');
    Icon = document.querySelector('.Hero-badge img');
    Clases = document.querySelectorAll('li.ContentBlock-list-item');
    console.log(`Icon: ${Icon?.src} ~ Cover: ${Cover?.content} ~ Clases: ${Clases?.length}`);
    
} else {
    // Validación si se ejecuta la extensión fuera de Platzi
    console.log("✋🏻 ESTA EXTENSIÓN SOLO FUNCIONA EN LA PÁGINA DE ALGÚN CURSO DE PLATZI 💚")
}
