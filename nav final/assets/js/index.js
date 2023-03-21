const input = document.querySelector("input");
const body = document.querySelector("body");
const togglethememode = () => {
    body.classList.toggle("dark");
};
input.onchange = togglethememode;

const hello = document.getElementById("hello");
const redBtn = document.getElementById("red1");
const orangeBtn = document.getElementById("orange1");
const yellowBtn = document.getElementById("yellow1");
const greenBtn = document.getElementById("green1");
const blueBtn = document.getElementById("blue1");
const indigoBtn = document.getElementById("indigo1");
const violetBtn = document.getElementById("violet1");

redBtn.addEventListener("click", () => {
    hello.style.backgroundColor = "#3A3F51";
});

orangeBtn.addEventListener("click", () => {
    hello.style.backgroundColor = "#F896BC";
});

yellowBtn.addEventListener("click", () => {
    hello.style.backgroundColor = "#909DE4";
});

greenBtn.addEventListener("click", () => {
    hello.style.backgroundColor = "#03A9F3";
});

blueBtn.addEventListener("click", () => {
    hello.style.backgroundColor = "#57D68F";
});

indigoBtn.addEventListener("click", () => {
    hello.style.backgroundColor = "#FFB463";
});

violetBtn.addEventListener("click", () => {
    hello.style.backgroundColor = "#01D8DA";
});
const emailInput = document.getElementById('email');
window.addEventListener('load', function () {
    const loader = document.querySelector('#loader');
    const content = document.querySelector('#page-content');

    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 1100); 
});
