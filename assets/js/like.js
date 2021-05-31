const like_wrap_list = document.querySelectorAll('.community__like_wrap');

like_wrap_list.forEach(like_wrap => {
    like_wrap.addEventListener('click', toogleHeart);
})

function toogleHeart() {
    let like_img = this.querySelector('.community__like_img');
    let like_val = this.querySelector('.community__like_val');

    if (like_img.getAttribute('data-like') == 'false') {
        like_img.src = "assets/img/icon-like-active.svg";
        like_val.textContent = parseInt(like_val.textContent) + 1;
        like_img.setAttribute('data-like', 'true');
    } else {
        like_img.src = "assets/img/icon-like.svg";
        like_val.textContent = parseInt(like_val.textContent) -1;
        like_img.setAttribute('data-like', 'false');
    }
}