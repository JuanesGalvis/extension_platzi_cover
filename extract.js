const Web = window.location.href;

let Cover;
let Icon;

if (Web.includes('cursos')) {
    Cover = document.querySelector('meta[property="og:image"]');
    Icon = document.querySelector('.Hero-badge img');
    console.log(`Icon: ${Icon.src} ~ Cover: ${Cover.content}`);
    
} else if (Web.includes('clases')) {
    Cover = document.querySelector('meta[property="og:image"]');
    Icon = document.querySelector('.CourseDetail-left-figure img');
    console.log(`Icon: ${Icon.src} ~ Cover: ${Cover.content}`); 
} else {
    // Validación si se ejecuta la extensión fuera de Platzi
    console.log("✋🏻 ESTA EXTENSIÓN SOLO FUNCIONA EN CURSOS DE PLATZI 💚")
}

