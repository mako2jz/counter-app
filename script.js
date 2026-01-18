let count = document.getElementById("count");

count.innerHTML = 0;

function decrementCount() {
    count.innerHTML = count.innerHTML - 1;
}

function incrementCount() {
    count.innerHTML = parseInt(count.innerHTML) + 1;
}

function setToZero() {
    count.innerHTML = 0;
}