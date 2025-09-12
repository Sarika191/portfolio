  const texts = [
    "Hello, I'm Sarika Kaushal!",
    "Tech Enthusiast | Web Developer | ML Trainee"
  ];

  let tIndex = 0; 
  let cIndex = 0; 
  const speed = 50;
  const titleEl = document.getElementById('typewriter-title');
  const descEl  = document.getElementById('typewriter-desc');

  function typeNext(){
    if(tIndex >= texts.length) return;
    const targetEl = (tIndex === 0) ? titleEl : descEl;
    if(!targetEl) return;

    if (cIndex < texts[tIndex].length){
      targetEl.textContent += texts[tIndex].charAt(cIndex);
      cIndex++;
      setTimeout(typeNext, speed);
    } else {

      cIndex = 0;
      tIndex++;
      setTimeout(typeNext, speed + 300);
    }
  }

  window.addEventListener('load', ()=>{

    const loader = document.getElementById('loadingScreen');
    if(loader){
        loader.classList.add('hidden'); 
        loader.setAttribute('aria-hidden','true');
    }
    setTimeout(typeNext, 500);
});

  window.addEventListener('load', ()=>{
    setTimeout(()=> {
      const loader = document.getElementById('loadingScreen');
      if(loader){ loader.classList.add('hidden'); loader.setAttribute('aria-hidden','true'); }
      typeNext();
    }, 700);
  });

  function handleSubmit(e){
    e.preventDefault();
    alert("Thank you for contacting me! I'll get back to you soon.");
    e.target.reset();
  }

  const navLinks = document.querySelectorAll('.navbar a');
  const sections = document.querySelectorAll('main section[id]');

  navLinks.forEach(a=>{
    a.addEventListener('click', (ev)=>{
      ev.preventDefault();
      const target = a.getAttribute('href') || a.dataset.target;
      if(!target) return;
      const el = document.querySelector(target);
      if(el){

        el.scrollIntoView({behavior:'smooth', block:'start'});
      }

      navLinks.forEach(n=>n.classList.remove('active'));
      a.classList.add('active');
    });
  });

  const obsOptions = {
    root: null,
    rootMargin: '0px 0px -40% 0px', 
    threshold: 0
  };
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const id = entry.target.getAttribute('id');
        if(!id) return;
        navLinks.forEach(l=>{
          l.classList.toggle('active', (l.getAttribute('href') === ('#'+id) || l.dataset.target === id));
        });
      }
    });
  }, obsOptions);

  sections.forEach(s => observer.observe(s));

  function goHome(){
    document.querySelector('#hero').scrollIntoView({behavior:'smooth', block:'start'});
  }
  
  (function maybeReloadProfileImage(){
    try{
      const img = document.getElementById('profileImage');
      if(img && img.src.includes('raw.githubusercontent.com')){
        const sep = img.src.includes('?') ? '&' : '?';
        img.src = img.src.split('?')[0] + sep + 'v=' + Date.now();
      }
    }catch(e){}
  })();
