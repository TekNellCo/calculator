

const numberKey = document.querySelectorAll('.button');
const screen = document.querySelector('.screen');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const back = document.querySelector('.back');
const plusminus =document.querySelector('.plusminus');
const operator =document.querySelector('.operator');

const audio = new Audio('sounds/click.mp3')

plusminus.addEventListener('click',()=>{ audio.cloneNode().play();screen.value == screen.value ? screen.value = -screen.value : screen.value; });

numberKey.forEach(whatever => {
    whatever.addEventListener('click', (e)=>{
        audio.cloneNode().play();
        let value = e.target.dataset.num
        screen.value += value;
     
    })
})

equal.addEventListener('click',(e)=>{
    audio.cloneNode().play();
    if(screen.value === ''){
        screen.value = '';
    }else{
        let answer = Function(`return ${screen.value}`)();
        screen.value = answer;
    }
});

clear.addEventListener('click',()=>{
    screen.value= '';
});

back.addEventListener('click',()=>{
    audio.cloneNode().play();
    screen.value = screen.value.toString().slice(0,-1);
    playAudio();

});










