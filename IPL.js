let arr =[
    {team:'CSK',
     primary:'yellow',
     seconadry:'purple'
    },
    {
     team:'MI',
     primary:'blue',
     seconadry:'gold'
    },
    {
     team:'RCB',
     primary:'greenyellow',
     seconadry:'black'
    },
    {
     team:'DC',
     primary:'skyblue',
     seconadry:'red'
    },
    {
     team:'PBKS',
     primary:'red',
     seconadry:'white'
    },
    {
     team:'SRH',
     primary:'orange',
     seconadry:'white'
    },

    ];
let btn=document.querySelector('button');
let bo=document.querySelector('#box');
let h=document.querySelector('#jj');
btn.addEventListener('click',function(){
    c1=Math.floor(Math.random()*arr.length);
    var winner=arr[c1]
    h.innerHTML=winner.team;
    bo.style.backgroundColor=winner.primary;
    h.style.color=winner.seconadry;
    
    
})