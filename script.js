let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    const body = document.body;

    // Get current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scrolling down
        body.classList.add("scrolling-down");
        body.classList.remove("scrolling-up");
    } else {
        // Scrolling up
        body.classList.remove("scrolling-down");
        body.classList.add("scrolling-up");
    }

    // Update last scroll position
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});
