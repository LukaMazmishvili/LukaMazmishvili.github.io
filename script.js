let docTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "Come Back ;(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
})

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const expandButtons = document.querySelectorAll('.seeMore');
const containers = document.querySelectorAll('.project');


function burgerMenu() {
    var x = document.getElementById("navbar");
    var header = document.getElementById("header")
    if (x.className === "navbar") {
        header.className += " responsive"
        x.className += " responsive";
    } else {
        x.className = "navbar";
        header.className = "header"
    }
}

for (var i = 0; i < navLinks.length - 1; i++) {
    navLinks[i].addEventListener('click', function() {
        var x = document.getElementById("navbar");
        x.className = "navbar";
    });
}

expandButtons.forEach((button, index) => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        containers.forEach((container, containerIndex) => {
            if (containerIndex === index) {
                container.classList.toggle('expand');
            } else {
                container.classList.remove('expand');
            }
            document.getElementById("navbar").classList.remove('responsive')
        });
    });
});

document.addEventListener('click', function() {
    containers.forEach(container => {
        container.classList.remove('expand');
    });
});


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
            updateURLFragment(id);
            setActiveSection(id);
            setActiveNavLink(correspondingNavLink);
        }
    });
}, options);

function updateURLFragment(id) {
    history.pushState(null, '', `#${id}`);
    history.replaceState(null, '', `#${id}`);
}

function setActiveSection(id) {
    const activeSection = document.getElementById(id);
    const containers = activeSection.querySelectorAll('.container');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    containers.forEach(container => {
        container.classList.remove('active');
    });
    activeSection.classList.add('active');
    containers.forEach(container => {
        container.classList.add('active');
    });
    previousSectionId = activeSectionId;
    activeSectionId = id;
    console.log("active: " + activeSectionId);

    if (previousSectionId) {
        const previousSection = document.getElementById(previousSectionId);
        const previousContainers = previousSection.querySelectorAll('.container');
        previousContainers.forEach(container => {
            container.classList.remove('active');
        });
    }
}

sections.forEach(section => {
    observer.observe(section);
});

function setActiveNavLink(activeNavLink) {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    activeNavLink.classList.add('active');
}
