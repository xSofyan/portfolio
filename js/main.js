// tahun footer otomatis
document.getElementById('year').textContent = new Date().getFullYear();

// smooth scroll for anchor links (modern browsers)
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
