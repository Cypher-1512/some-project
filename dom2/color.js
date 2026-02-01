var btn=document.querySelector('button');
var bx=document.querySelector('#box');

btn.addEventListener("click",function(){
    c1=Math.floor(Math.random()*256);
    c2=Math.floor(Math.random()*256);
    c3=Math.floor(Math.random()*256);
    bx.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
    btn.style.backgroundColor=`rgb(${c3},${c2},${c1})`;
    
    
})