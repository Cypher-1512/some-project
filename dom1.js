let btn=document.querySelector("button");
let text=document.querySelector("h4");
let tog=0;
btn.addEventListener('click',function(){
       if(tog==0){
       btn.innerHTML="Requested"
       text.innerHTML="Sending...."
       text.style.color="yellow"
       setTimeout(function(){
        btn.innerHTML="Remove";
        text.innerHTML="Friends";
        text.style.color="green";
        tog=1;
       },4000)
       
       
} 
else{
    btn.innerHTML="Add to friend"
       text.innerHTML="Stranger"
       text.style.color="red";
       tog=0;   
}}

)
