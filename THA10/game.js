var turn=document.querySelectorAll('.card');
var flipped=false;
var moves=0;
var points=0;
document.getElementById('score').innerHTML="score : "+points;
document.getElementById('moves').innerHTML="moves : "+moves;
var first,second;
lockboard=false;
function flipcard(){
    if(lockboard)return;
    if(this===first)return;
    this.classList.add('flip');
    if(!flipped){
        flipped=true;
        first=this;
    }
    else{
        second=this;
        flipped=false;
        moves++;
        document.getElementById('moves').innerHTML="moves : "+moves;
        check();
}
}
function check(){
    let isMatch=second.dataset.planet===first.dataset.planet;
    isMatch?disable():flipagain();
}
function disable(){
    first.removeEventListener('click',flipcard);
    second.removeEventListener('click',flipcard);
    lockboard=true;
    setTimeout(()=>{
    first.innerHTML='';first.classList.remove('card');first.classList.add('card_remove');
    second.innerHTML="";second.classList.remove('card');second.classList.add('card_remove');
    points+=10;
    document.getElementById('score').innerHTML="score : "+points;
    reset();
    },1000);
}
function flipagain(){
    lockboard=true;
    setTimeout(()=>{
        first.classList.remove('flip');
        second.classList.remove('flip');
        reset();
    },1500)
}
function reset(){
    [lockboard,flipped]=[false,false];
    [first,second]=[null,null];
} 
(function shuffle()
{
    turn.forEach((card)=>{
        let ran=Math.floor(Math.random()*12);
        card.style.order=ran;
    }
    )
})();
turn.forEach((x)=>{
    x.addEventListener('click',flipcard)});
      