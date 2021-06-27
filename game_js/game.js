var start=document.querySelector('.btn');
var sword=document.querySelector('.sword');
var rule=document.querySelector('.rule');
var score=document.querySelector('.score');
var card=document.querySelector('.card');
card.classList.add('hide');
score.classList.add('hide');
start.addEventListener('click',()=>{
     sword.classList.add('hide');
     rule.classList.add('hide');
     if(score.classList.contains('hide')){
     score.classList.remove('hide');
     }
     if(card.classList.contains('hide')){
        
     card.classList.remove('hide');
     }
})