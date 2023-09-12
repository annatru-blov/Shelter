(function () {
    const burgerItem = document.querySelector('.burger');
    console.log(burgerItem);
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.nav-link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav_active');
    });
    //console.log(window.innerWidth);
    if (window.innerWidth <= 1500) {

        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('nav_active');
            });
        }
    }

}());