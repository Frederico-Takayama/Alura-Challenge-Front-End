const colorpickColorpicker = document.getElementById("favcolor");
const colorpickScreenBg = document.getElementById("screen_bg")

colorpickColorpicker.addEventListener('change', (e) => {
    color = e.target.value;
    colorpickColorpicker.setAttribute('value', color);
    changeScreenBackground(color);
})

function changeScreenBackground(color) {
    colorpickScreenBg.style.backgroundColor = color;
}