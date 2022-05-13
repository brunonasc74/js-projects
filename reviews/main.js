const img = document.getElementById('profile-img');
const author = document.getElementById('name');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let count = 0;

window.addEventListener('DOMContentLoaded', () => {
    getPerson(count);
});

function getPerson(person) {
    let currentPerson = reviews[person];
    img.src = currentPerson.img;
    author.textContent = currentPerson.name;
    job.textContent = currentPerson.job;
    info.textContent = currentPerson.text;
};

prevBtn.addEventListener('click', () => {
    count--;
    if(count < 0) {
        count = reviews.length -1;
    };
    getPerson(count);
});

nextBtn.addEventListener('click', () => {
    count++;
    if(count > reviews.length -1) {
        count = 0;
    };
    getPerson(count);
});

randomBtn.addEventListener('click', () => {
    count = Math.floor(Math.random() * reviews.length);
    getPerson(count);
});