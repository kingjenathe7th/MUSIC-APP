window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        '#60d394',
        '#d36060',
        '#c060d3',
        '#d3d160',
        '#ff9900',
        '#007816'
    ];
    //THE SOUND

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            //Stop sound if its alrady playing
            sounds[index].currentTime = 0;
            //play corresponding sound
            sounds[index].play();


            createbubbles(index);
        });
    });

    //function that makes bubbles

    const createbubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease"
        bubble.addEventListener('animationend', function () {
            visual.removeChild(this);
        });
    };
});