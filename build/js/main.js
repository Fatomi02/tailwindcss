const initApp = () => {
    const hamburger = document.getElementById('mobile-open-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggle = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburger.classList.toggle('toggle-btn')
    }

    hamburger.addEventListener('click', toggle);
    mobileMenu.addEventListener('click', toggle);
}


document.addEventListener('DOMContentLoaded', initApp)