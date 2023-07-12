

const numberKey = document.querySelectorAll('.button');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const screen = document.querySelector('.screen');

// zero.addEventListener('click', ()=> console.log(calculator[0])); 
// one.addEventListener('click', ()=> console.log(calculator[1])); 
// two.addEventListener('click', ()=> 2 ); 
// three.addEventListener('click', ()=> 3 ); 
// four.addEventListener('click', ()=> 4 ); 
// five.addEventListener('click', ()=> 5 ); 
// six.addEventListener('click', ()=> 6 ); 
// seven.addEventListener('click', ()=> 7 ); 
// eight.addEventListener('click', ()=> 8 ); 
// nine.addEventListener('click', ()=> 9 ); 
// add.addEventListener('click', ()=> '+' ); 
// multiply.addEventListener('click', ()=> '*' ); 
// divide.addEventListener('click', ()=> "/" ); 
// subtract.addEventListener('click', ()=> '-' ); 

// const calculator = [0,1,2,3,4,5,6,7,8,9]

numberKey.forEach(whatever => {
    whatever.addEventListener('click', (e)=>{
        let value = e.target.dataset.num
        screen.innerText += value;
    })
})








