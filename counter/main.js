const btns = document.querySelectorAll('.btn');
const counter = document.querySelector('.counter');
let count = 0;

btns.forEach((btn) => {
    btn.addEventListener(('click'), (e) => {
        const event = e.currentTarget.classList;
        
        if(event.contains('decrease')) {
            count--;
        } else if (event.contains('increase')) {
            count++;
        } else (count = 0);
        
        if(count < 0) {
            counter.style.color = '#e74343';
        } else if (count > 0) {
            counter.style.color = '#51e743';
        } else (counter.style.color = '#e6e6e6');
        
        counter.textContent = count;
    });
});

