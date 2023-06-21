let typed = new Typed("#typing", {
    strings: ["Martin Vojneski", "Coding", "Learning"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
let typing2 = new Typed("#typing2", {
    strings: ["."],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
})
let typing3 = new Typed("#typing3", {
    strings: ["...."],
    typeSpeed: 200,
    backSpeed: 200,
    loop: true
})
let progressSection = document.querySelector('.progress-section')
let progressBar = document.querySelector('.progress-bar')
let progressNum = document.querySelector('.progress-num')

let x, y

let updateProgressBar = () => {
    progressBar.style.height = `${getScrollPercentage()}%`
    progressNum.innerText = `${Math.ceil(getScrollPercentage())}%`
    requestAnimationFrame(updateProgressBar)
}
let getScrollPercentage = () => {
    return (window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100)
}
updateProgressBar()

let sections = document.querySelectorAll(".wrapper")

var moving = false;
var loadMoreButton = document.querySelectorAll(".load-more");

loadMoreButton.forEach(e => {
    e.addEventListener("click", function () {
        if (!moving) {
            moving = true;
            e.classList.add("active");

            setTimeout(function () {
                e.addEventListener("animationiteration", function animationIterationHandler() {
                    e.classList.remove("active");
                    e.removeEventListener("animationiteration", animationIterationHandler);
                    let num = e.getAttribute('number')
                    sections[parseInt(num)].scrollIntoView({ behavior: "smooth" })
                    e.addEventListener("transitionend", function transitionEndHandler() {
                        moving = false;
                        e.removeEventListener("transitionend", transitionEndHandler);
                    });
                });
            }, 2000);
        }
    });
})

