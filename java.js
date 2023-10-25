let container = document.getElementById('container');

const buttonStart = document.querySelector('#start');
const buttonReset = document.querySelector('#reset');
const buttonChoose = document.querySelector('#size');











 


buttonChoose.addEventListener('click',


function createDivs(x) {


let userInput = prompt('Size?');



 x = userInput


if(x < 100 ) {

    for(let i = 1; i <= x; i++) {

    let div = document.createElement('div');

div.classList.add('box');

container.appendChild(div);




for ( let i = 1;i <= x;i++){
    var color = [, "#3C9EE7", "#E7993C",
            "#E73C99", "#3CE746", "#E7993C"];
let grid = document.createElement('div');
grid.classList.add('box1');
buttonStart.addEventListener('click', () => { grid.addEventListener('mouseover', () => {

grid.style.backgroundColor = color[(Math.floor(Math.random() * color.length))];

}) 

})



div.appendChild(grid);

}

}

} else {

    return alert('Wrong, type a number under 100!')
}

}
  );



 
buttonReset.addEventListener('click', () => {

   container.innerHTML = "";

})










