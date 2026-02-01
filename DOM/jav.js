var h=document.querySelector("button");
var bo=document.querySelector("h3");
let fact=0;
h.addEventListener('click',function(){
    if(fact==0){
    console.log("Now you can See his messsage  ")
    bo.style.color="green";
    bo.innerHTML='unblocked on chatts';
    h.innerHTML='block';
    fact=1;
    
    }
    else{
         console.log('You have blocked him ')
         bo.style.color="Red";
         bo.innerHTML='blocked on chatts';
         h.innerHTML='unblock';
         fact=0;
    }
})


