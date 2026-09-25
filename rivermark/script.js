const form=document.querySelector('[data-demo-form]');
if(form){form.addEventListener('submit',event=>{event.preventDefault();const status=form.querySelector('.form-status');status.classList.add('show');status.focus();});}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
