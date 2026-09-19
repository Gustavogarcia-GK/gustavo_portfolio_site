const phone='5512991283100';
document.querySelectorAll('.wa').forEach(el=>{el.href=`https://wa.me/${phone}?text=${encodeURIComponent(el.dataset.msg||'Olá Gustavo!')}`;el.target='_blank';el.rel='noopener'});
document.getElementById('year').textContent=new Date().getFullYear();
const menu=document.querySelector('.menu'), header=document.querySelector('.nav');menu.addEventListener('click',()=>header.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));
document.querySelectorAll('.design-image img').forEach(img=>{img.parentElement.addEventListener('click',()=>{const box=document.querySelector('.design-lightbox');box.querySelector('img').src=img.src;box.querySelector('img').alt=img.alt;box.classList.add('open');box.setAttribute('aria-hidden','false')})});
const lightbox=document.querySelector('.design-lightbox');if(lightbox){const close=()=>{lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')};lightbox.querySelector('.lightbox-close').addEventListener('click',close);lightbox.addEventListener('click',e=>{if(e.target===lightbox)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})}

// Acabamento final: animacoes discretas, menu ativo e profundidade no hero.
const revealTargets=document.querySelectorAll('.section-head,.about-grid,.card,.site-card,.design-work,.quote-services article,.contact-inner');
revealTargets.forEach(el=>el.classList.add('js-reveal'));
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}})},{threshold:.12,rootMargin:'0px 0px -35px 0px'});
revealTargets.forEach(el=>revealObserver.observe(el));

const sections=[...document.querySelectorAll('main section[id]')],navLinks=[...document.querySelectorAll('.nav nav a')];
const sectionObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${entry.target.id}`))}})},{rootMargin:'-42% 0px -52% 0px'});
sections.forEach(s=>sectionObserver.observe(s));

const heroBg=document.querySelector('.hero-bg');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>24);if(heroBg&&window.innerWidth>980&&window.scrollY<window.innerHeight){heroBg.style.transform=`scale(1.04) translateY(${window.scrollY*.045}px)`}},{passive:true});
