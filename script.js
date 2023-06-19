let docTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "Come Back ;(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
})

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

let activeSectionId = null;
let previousSectionId = null;

const options = {
    threshold: 0.8
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const correspondingNavLink = document.querySelector(`nav a[href="#${id}"]`);

        if (entry.intersectionRatio > 0) {
            setActiveNavLink(correspondingNavLink);
            previousSectionId = activeSectionId;
            activeSectionId = id;
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

function setActiveNavLink(activeNavLink) {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    activeNavLink.classList.add('active');
}
