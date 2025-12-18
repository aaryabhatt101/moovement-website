(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  if(toggle && nav){
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();