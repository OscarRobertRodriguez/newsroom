(function () {
    'use strict';
    const pageWrapper = document.querySelector('.page-wrapper');
    const scrollbar = document.querySelector('.scrollspy-bar');
    const viewportHeight = window.innerHeight;

    document.addEventListener('scroll', scrollspy);

    function scrollspy() {
        const scrolled = document.documentElement.scrollTop;
        const wrapperHeight = pageWrapper.offsetHeight - viewportHeight;
        scrollbar.style.width = `${scrolled * 100 / wrapperHeight}%`;
    }
})();