const allProject = document.querySelector('.js_all_project');

new function () {
    showProjects();
}

function showProjects() {
    if (localStorage.length == 0) {
        return;
    }

    let projects = []
    for(let i = 0; i < localStorage.length; i++){
        projects.push(JSON.parse(localStorage.getItem(i)));
    }

    console.log(projects);

    projects.forEach(project => {
        card = mountCard(project);
        allProject.innerHTML += card;
        const htmlCode = allProject.querySelector(`[data-id="${project.id}"]`);
        htmlCode.querySelector('code').innerText = project.projectDetails.code;
    });

    hljs.highlightAll();
}

function mountCard(project) {
    let card = `
        <section class="community__wrap" data-id="${project.id}">
            <div class="screen_community__wrap" id="screen_bg" style="background-color: ${project.projectDetails.screenColor};">
                <pre class="screen_community__area">
                    <div class="screen__prompt">
                        <div class="screen__dot_output screen__dot-red"></div>
                        <div class="screen__dot_output screen__dot-yellow"></div>
                        <div class="screen__dot_output screen__dot-green"></div>
                    </div>
                    <code name="screen__editor_output" cols="30" rows="10" class="screen__editor hljs ${project.projectDetails.language}" id='screen__editor_bg'></code>
                </pre>
            </div>
            <div class="communtiy__content__wrap">
                <p class="communtiy__title">${project.projectDetails.name}</p>
                <p class="community__description">${project.projectDetails.description}</p>
                <div class="community__social_wrap">
                    <div class="community__social">
                        <div class="community__comment_wrap">
                            <img src="assets/img/icon-comment.svg" alt="ícone de commentário" class="community__comment_img">
                            <p class="communtiy__comment_val">0</p>
                        </div>
                        <div class="community__like_wrap">
                            <img src="assets/img/icon-like.svg" alt="ícone de like" class="community__like_img" data-like="false">
                            <p class="community__like_val">0</p>
                        </div>
                    </div>
                    <div class="community__profile-bg">
                        <img src="assets/img/profile.jpg" alt="Imagem do perfil" class="community__profile__photo">
                        <p class="community__profile__name">@Magico</p>
                    </div>
                </div>
            </div>
        </section>
    `;
    return card;
}