const vizualizeScreen = document.querySelector('.screen__vizualize');
const vizualizeScreenEditor = document.querySelectorAll('.screen__editor');
const vizualizeSelector = document.querySelector('.sidebar__selected span');
const saveProject_btn = document.querySelector('.sidebar__submit');
const projectName = document.querySelector('.sidebar__input');
const projectDescription = document.querySelector('.sidebar__description');
const screenBg = document.querySelector('#screen_bg');

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

saveProject_btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (typeof(Storage) != "undefined"){
        console.log('supports localStorage');

        let projeto = mountProject();
        saveProject(projeto);
    } else {
        console.log("doesn't support localStorage");
    }
})

function mountProject () {
    if (screenBg.style.backgroundColor != '') {
        color = screenBg.style.backgroundColor;
    }
    else {
        color = '#6BD1FF';
    }
    let project = {
        'id': atribuiId(),
        'projectDetails': {
            'name': projectName.value,
            'description': projectDescription.value,
            'language': vizualizeSelector.innerText,
            'screenColor': color,
            'code': vizualizeScreenEditor[0].innerText,
        }
    }
    console.log(project);
    return project;
}

function saveProject(jsonObject) {
    localStorage.setItem(jsonObject.id, JSON.stringify(jsonObject));
}

function atribuiId() {
    return localStorage.length;
}