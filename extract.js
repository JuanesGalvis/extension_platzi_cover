const Cover = document.querySelector('meta[property="og:image"]');
const Icon = document.querySelector('.Hero-badge img');

console.log(`Icon: ${Icon.src} ~ Cover: ${Cover.content}`);