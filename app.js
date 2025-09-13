
function ready(f){/in/.test(document.readyState)?setTimeout(function(){ready(f)},9):f()}
function startTimer(sec, el, cb){let s=sec; el.textContent=s+'s'; const i=setInterval(()=>{s--; el.textContent=s+'s'; if(s<=0){clearInterval(i); cb&&cb();}},1000);}
ready(()=>{
  const t=document.querySelector('[data-timer]'); const btn=document.querySelector('[data-validate]');
  if(t && btn){ startTimer(parseInt(t.dataset.timer,10)||15, t, ()=>btn.removeAttribute('disabled')); }
});
