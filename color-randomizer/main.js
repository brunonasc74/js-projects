const colors = ['Red', 'FireBrick', 'DeepPink', 'OrangeRed', 'Orange', 'Gold', 'Purple', 'Lime', 'Aqua', 'DeepSkyBlue', 'MidnightBlue'];

const btn = document.querySelector('#btn');
const value = document.querySelector('#value');

btn.addEventListener('click', () => {
    let randomColor = colors[getRandomColor()];

    document.body.style.backgroundColor = randomColor;
    value.textContent = randomColor;
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length);
}