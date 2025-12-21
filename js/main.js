// File: js/main.js
// Purpose: Minimal interactivity (mobile navigation toggle)

(function(){
  const btn=document.querySelector('.menu-toggle');
  const menu=document.getElementById('main-menu');
  if(!btn||!menu) return;

  btn.addEventListener('click',()=>{
    const expanded=btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded',String(!expanded));

    if(menu.style.display==='flex'){
      menu.style.display='';
    }else{
      menu.style.display='flex';
      menu.style.flexDirection='column';
      menu.style.alignItems='flex-end';
      menu.style.background='#fff';
      menu.style.padding='1rem';
      menu.style.borderRadius='8px';
      menu.style.boxShadow='0 10px 30px rgba(0,0,0,0.08)';
    }
  });
})();

