let container = document.getElementById('container');

function createGrid(size){
    container.innerHTML = '';

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i=0;i<size*size;i++){
        const square = document.createElement('div');

        square.classList.add('grid-square');
        square.addEventListener('mouseenter', () => {
            square.style.backgroundColor = 'black';
        });
        
        container.appendChild(square);
    }
}
createGrid(16);

let reset = document.getElementById('reset');

reset.addEventListener('click',  () => {
    let newSize = +prompt('Choose new size', '');

    if(Number.isInteger(newSize >= 1 && newSize <= 100)){
        createGrid(newSize);
    } else {
        alert("Enter a whole number from 1 to 100!");
    }
});

