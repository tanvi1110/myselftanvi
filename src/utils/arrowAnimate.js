
export function arrowAnimate() {
    const detailsElement = document.querySelector(".uiuxdetails");
    const arrowIcon1 = document.querySelector("#arrow-icon1");
    const arrowIcon2 = document.querySelector("#arrow-icon2");

    function toggleArrows() {
        if (detailsElement.hasAttribute("open")) {
            arrowIcon1.style.opacity = 0;
            arrowIcon2.style.opacity = 1;
        } else {
            arrowIcon1.style.opacity = 1;
            arrowIcon2.style.opacity = 0;
        }
    }

    // Initial check
    toggleArrows();

    // Listen for the toggle event
    detailsElement.addEventListener("toggle", toggleArrows);
}
