document.querySelector('.hamb')?.addEventListener('click',()=>{const links=document.querySelector('.links');links.classList.toggle('open')});
document.querySelectorAll('.links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.links').classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();