let count = 0;
var output = document.querySelector(".output");

function increase() {
    count++;
    output.innerHTML = count;

    if (count < 0) {
        output.style.color = "crimson";
    } else if (count > 0) {
        output.style.color = "#06623b";
    } else if (count == 0) {
        output.style.color = "#363636";
    }
}

function decrease() {
    count--;
    output.innerHTML = count;
    if (count < 0) {
        output.style.color = "crimson";
    } else if (count > 0) {
        output.style.color = "#06623b";
    } else if (count == 0) {
        output.style.color = "#363636";
    }
}

function reset() {
    count = 0;
    output.innerHTML = count;
    output.style.color = "#363636";
}

console.log(count);

if (count < 0) {
    output.style.color = "red";
} else if (count > 0) {
    output.style.color = "greem";
}