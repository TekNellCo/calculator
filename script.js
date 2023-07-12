

const numberKey = document.querySelectorAll('.button');
const screen = document.querySelector('.screen');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const back = document.querySelector('.back');

numberKey.forEach(whatever => {
    whatever.addEventListener('click', (e)=>{
        let value = e.target.dataset.num
        screen.value += value;
        
    })
})

equal.addEventListener('click',(e)=>{
    if(screen.value === ''){
        screen.value = '';
    }else{
        let answer = eval(screen.value);
        screen.value = answer;
    }
});

clear.addEventListener('click',()=>{
    screen.value= '';
});

back.addEventListener('click',()=>{
    screen.value = screen.value.toString().slice(0,-1);

});










