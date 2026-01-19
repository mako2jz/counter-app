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

function countTo100() {
    let i = 0;
    let limit = 100;
    let intervalMS = 50;

    let countLoop = setInterval(function() {
        count.innerHTML = i;

        i++;

        if(i == limit){
            clearInterval(countLoop);
            count.innerHTML = limit;
        }
    }, intervalMS);
}

function countToNumber() {
    let i = 0;
    let limit = document.getElementById("customNumber").value;
    let intervalMS = 50;
    let countLoop;

    if(limit > 0){
        countLoop = setInterval(function() {
            count.innerHTML = i;

            i++;

            if(i == limit){
                clearInterval(countLoop);
                count.innerHTML = limit;
                window.alert("Stole your API keys!");
            }
        }, intervalMS);
    } else if(limit < 0){
        countLoop = setInterval(function() {
            count.innerHTML = i;

            i--;

            if(i == limit){
                clearInterval(countLoop);
                count.innerHTML = limit;
            }
        }, intervalMS);
    } else {
        window.alert("Cannot count from 0 to 0!");
    }
}