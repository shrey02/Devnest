const questions = [
    {
        question:"Q1: Which of the following is also know as fourth dimension?",
        option1 :"gravity",
        option2:"time",
        option3:"singularity",
        option4:"none of the above",
        ans:"an2"
    },
    {
        question:"Q2: Which is the closest galaxy to Milky Way?",
        option1 :"Canis Major Dwarf Galaxy",
        option2:"The Sagittarius Dwarf Elliptical Galaxy",
        option3:"Andromeda Galaxy",
        option4:"Black eye Galaxy",
        ans:"an1"
    },
    {
        question:"Q3: Which is the largest constellation seen in our sky?",
        option1 :"Hydra",
        option2:"Aquarius",
        option3:"Aries",
        option4:"Antlia",
        ans:"an1"
    },
    {
        question:"Q4: What does M stand for in M-theory?",
        option1 :"Magic",
        option2:"Mystery",
        option3:"Membrane",
        option4:"All of the above",
        ans:"an4"
    },
    {
        question:"Q5: According to string theory how many dimensions are there?",
        option1 :"12",
        option2:"10",
        option3:"3",
        option4:"5",
        ans:"an2"
    }
];
const main=document.querySelector('#main_in');
const question=document.querySelector('.ques');
const ques1=document.querySelector('#an1');
const ques2=document.querySelector('#an2');
const ques3=document.querySelector('#an3');
const ques4=document.querySelector('#an4');
const hide=document.querySelector('.hide');
let que_count=0;
const answers=document.querySelectorAll('.in2');
const show_score=document.querySelector('#area');
let count=0;
const start=document.querySelector('#start');
start.addEventListener('click',()=>{
   main.classList.remove('score');
   start.classList.add('score');
   loadques();
   const restart=()=>{
       que_count=0;
       loadques();
   }
   answers.forEach((ans)=>{
  ans.addEventListener('click',()=>{
       const checkAns=ans.id;
       console.log(checkAns);
       if(checkAns===questions[que_count].ans){
           count++;
           ans.classList.add('correct');
       }
       else{
           ans.classList.add('wrong');
       }
       que_count++;
       console.log(count);
       if(que_count<questions.length){
          setTimeout(()=>{
            setTimeout(()=>{loadques();ans.classList.remove('correct');ans.classList.remove('wrong');},500);
            hide.classList.add('flip') 
          },1000);
          hide.classList.remove('flip');
       }
       else{
           setTimeout(()=>{ show_score.innerHTML=`
           <h2>score ${count}/5 &nbsp; &#127881;&#127881;</h2> 
           <btn id="restart">Restart</btn>
           `;
           hide.classList.add('score');
           show_score.classList.remove('score');
           const restar=document.querySelector('#restart');
           restar.addEventListener('click',()=>{
               window.location.reload();  
           })
               },1500);  
       }
   });})
})

const loadques=()=>{
const ques=questions[que_count];
question.innerHTML=ques.question;
ques1.innerHTML=ques.option1;
ques2.innerHTML=ques.option2;
ques3.innerHTML=ques.option3;
ques4.innerHTML=ques.option4;
}
