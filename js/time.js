// MAIN
function findOutMore() {
    alert('more');
}

function playDemo() {
    alert('demo');
}



// REVIEWS

let elements = document.querySelectorAll("#reviews .arrows button");

function mouseOverArrow() {
    console.log('mouse overed') 
    elements.forEach(element => {
        element.addEventListener('mouseover', function(event) {
            event.target.className = 'arrowbuttononmouseover';
            console.log('added overclass')
        });
    });
}

function mouseLeftArrow() {
    console.log('mouse left')
    elements.forEach(element => {
        element.addEventListener('mouseleave', function(event) {
            element.className = 'arrowbuttononmouseleave';
            console.log('added leftclass')
        });
    });
}

function downArrow() {
    let rev = document.querySelector('.rev-wrap');
    rev.classList.remove('rev-wrap');
    let dsnone = document.querySelector('.displaynone');
    rev.className = 'displaynone';
    let nextRev = document.querySelector('.next-review');
    nextRev.classList.remove('next-review');
    nextRev.className = ' rev-wrap'
    dsnone.classList.remove('displaynone');
    dsnone.className = 'next-review';
}

function upArrow() {
    let rev = document.querySelector('.displaynone');
    rev.classList.remove('displaynone');
    let dsnone = document.querySelector('.next-review');
    rev.className = 'next-review';
    let nextRev = document.querySelector('.rev-wrap');
    nextRev.classList.remove('rev-wrap');
    nextRev.className = ' displaynone'
    dsnone.classList.remove('next-review');
    dsnone.className = 'rev-wrap';
}