const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.querySelector('#btn');
const value = document.querySelector('#value');

btn.addEventListener('click', () => {
    let randomColor = '#'
    for(i=0; i<6; i++) {
        randomColor += colors[getRandomColor()];
    };

    document.body.style.backgroundColor = randomColor;
    value.textContent = randomColor;
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}