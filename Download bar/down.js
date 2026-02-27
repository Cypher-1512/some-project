var growth=document.querySelector('#growth');
var percent=document.querySelector('#percent');
var btn=document.querySelector('button');
var grow=0;
btn.addEventListener('click',function(){
    var int=setInterval(() => {
        grow++;
        percent.innerHTML= grow+"%";
        growth.style.width=grow+'%';

        
    },40);
    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML='Downloaded';
        btn.style.opacity=0.5;
        
    },4000);
})
