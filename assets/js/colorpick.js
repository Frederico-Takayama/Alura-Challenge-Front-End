document.getElementById("favcolor").addEventListener('change', (e) => {
    color = e.target.value;
    changeScreenBackground(color);
})

function changeScreenBackground(color) {
    document.getElementById("screen_bg").style.backgroundColor = color;
}