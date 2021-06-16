var screen=document.getElementById('screen');
var button=document.querySelectorAll('button');
var display="";
for(item of button){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
    if(buttonText=='X'){
       buttonText='*';
       display+=buttonText;
       screen.value=display; 
    }
    else if(buttonText=='='){
        screen.value=eval(display);
        display=screen.value;
    }
    else if(buttonText=='C'){
        display="";
        screen.value=display;
    }
    else if(buttonText=='Del'){
        display=screen.value.slice(0,-1);
        screen.value=display;
    }
    else{
        display+=buttonText;
        screen.value=display; 
    }
})

}