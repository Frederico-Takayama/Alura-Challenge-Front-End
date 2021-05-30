const vizualizeScreen = document.querySelector('.screen__vizualize');
const vizualizeScreenEditor = document.querySelectorAll('.screen__editor');
const vizualizeSelector = document.querySelector('.custom-select__trigger span');

vizualizeScreen.addEventListener('click', function() {
    language = getLanguage();

    updateScreenEditorLanguage(language);

    vizualizeScreenEditor.forEach(block => {
        hljs.highlightElement(block);
    });
})

function getLanguage() {
    let language = vizualizeSelector.innerHTML;
    return language;
}

function updateScreenEditorLanguage(language) {
    vizualizeScreenEditor[0].removeAttribute("class");

    let classList = ['screen__editor', 'hljs', `${language}`];
    classList.forEach(element => {
        vizualizeScreenEditor[0].classList.add(element);
    });
}
