let items = document.querySelectorAll('.slider .terminal');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 2;

function loadSlider() {
    let state = 0;

    items[active].style.transform = `none`;
    items[active].style.zIndex = items.length;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;

    for (var i = active + 1; i < items.length; i++) {
        state++;
        items[i].style.transform = `translateX(${120 * state}px) scale(${1 - 0.2 * state}) perspective(16px) rotateY(-0.5deg)`;
        items[i].style.zIndex = items.length - state;
        items[i].style.filter = 'blur(1px)';
        items[i].style.opacity = state > 2 ? 0 : 0.6;
    }

    state = 0;

    for (var i = active - 1; i >= 0; i--) {
        state++;
        items[i].style.transform = `translateX(${-120 * state}px) scale(${1 - 0.2 * state}) perspective(16px) rotateY(0.5deg)`;
        items[i].style.zIndex = items.length - state;
        items[i].style.filter = 'blur(1px)';
        items[i].style.opacity = state > 2 ? 0 : 0.6;
    }
}

loadSlider();

next.onclick = function() {
    active = active + 1 < items.length ? active + 1 : active;
    loadSlider();
}

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : active;
    loadSlider();
}