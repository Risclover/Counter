var minusBtn = document.querySelector('.minus');
var plusBtn = document.querySelector('.plus');
const count = document.querySelector('.count');
const countBox = document.querySelector('.countbox');
const countChange = document.querySelector('.countchange');
const resetBtn = document.querySelector('.reset');

var mousedownFired = false;
let incrementer = 0;

minusBtn.addEventListener('mousedown', minusDown);
minusBtn.addEventListener('click', minusClick);
minusBtn.addEventListener('mouseup', minusUp);
minusBtn.addEventListener('mouseout', minusOut);
plusBtn.addEventListener('mousedown', plusDown);
plusBtn.addEventListener('click', plusClick);
plusBtn.addEventListener('mouseup', plusUp);
plusBtn.addEventListener('mouseout', plusOut);
resetBtn.addEventListener('click', resetClick);
countBox.addEventListener('click', countInputChange);
document.addEventListener('keydown', keyboardFunction);
countChange.addEventListener('blur', blurInput);

function minusDown() {
    mousedownFired = true;
    incrementer -= 1;
    count.textContent = incrementer;
    minusBtn = setTimeout(function() {
        minusBtn = setInterval(function () {
            incrementer -= 1;
            count.textContent = incrementer;
        }, 100);
        return false;
    }, 500)
}

function minusClick() {
    if (mousedownFired) {
        mousedownFired = false;
        return;
    }
    incrementer -= 1;
    count.textContent = incrementer;
}

function minusUp() {
    clearInterval(minusBtn);
    return false;
}

function minusOut() {
    clearInterval(minusBtn);
    return false;
}



function plusDown() {
    mousedownFired = true;
    incrementer += 1;
    count.textContent = incrementer;
    plusBtn = setTimeout(function() {
        plusBtn = setInterval(function () {
            incrementer += 1;
            count.textContent = incrementer;
        }, 100);
        return false;
    }, 500)
}

function plusClick() {
    if (mousedownFired) {
        mousedownFired = false;
        return;
    }
    incrementer += 1;
    count.textContent = incrementer;
}

function plusUp() {
    clearInterval(plusBtn);
    return false;
}

function plusOut() {
    clearInterval(plusBtn);
    return false;
}


function keyboardFunction(e) {
    if(e.key === "-") {
        mousedownFired = false;
        minusBtn.click();
    } else if (e.key === "+") {
        mousedownFired = false;
        plusBtn.click();
    } else if (e.key === "r") {
        resetBtn.click();
    }
}

function resetClick() {
    incrementer = 0;
    count.textContent = incrementer;
}


function countInputChange() {
    countChange.style.display = "block";
    count.style.display = "none";
    countChange.value = incrementer;
    countChange.focus();
    countChange.addEventListener('keydown', function(e) {
        if(e.key === "Enter") {
            countChange.style.display = "none";
            count.style.display = "block";
            incrementer = Number(countChange.value);
            count.textContent = incrementer;
        }
    })
}



function blurInput() {
    countChange.style.display = "none";
    count.style.display = "block";
    incrementer = Number(countChange.value);
    count.textContent = incrementer;
}



