let container = document.getElementById('container');

let coloredSquare = [];

function createGrid(size){
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    coloredSquare = [];

    for (let i=0;i<size*size;i++){
        const square = document.createElement('div');

        square.classList.add('grid-square');
        square.addEventListener('mouseenter', () => {
            let r = Math.floor(Math.random()*256);
            let g = Math.floor(Math.random()*256);
            let b = Math.floor(Math.random()*256);
            square.style.backgroundColor =  `rgb(${r},${g},${b})`;

            coloredSquare.push(square);

            if(coloredSquare.length > 15){
                let oldestSquare = coloredSquare.shift();
                oldestSquare.style.backgroundColor = 'white';
            }
        });

        container.appendChild(square);
    }
}
createGrid(16);

let reset = document.getElementById('reset');

reset.addEventListener('click',  () => {
    let newSize = +prompt('Choose new size', '');

    if(!newSize){
        return ;
    }
    if(Number.isInteger (newSize) && newSize >= 1 && newSize <= 100){
        createGrid(newSize);
    } else {
        alert("Enter a whole number from 1 to 100!");
    }
});

