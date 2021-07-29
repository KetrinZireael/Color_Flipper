let $start = document.querySelector('#start');
let $backgoundColor = document.querySelector('body');
let $color = document.querySelector('#color');

let arrayColors = ['red', 'blue', 'green', 'yellow', 'pink', 'orange', 'salmon', 
'paleGreen', 'mediumSpringGreen', 'lightSeaGreen', 'teal', 'moccasin', 'steelBlue', 
'violet', 'mediumPurple', 'purple', 'indigo', 'slateBlue', 'sandyBrown',
'chocolate', 'darkSlateGray', 'mistyRose', 'coral', 'tomato'];

$start.addEventListener('click', startGame);

function startGame() {
    let randomColors = getRandom(0, arrayColors.length);

    $backgoundColor.style.backgroundColor = arrayColors[randomColors];
    $color.innerHTML = arrayColors[randomColors];
}

function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}