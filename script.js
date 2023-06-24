let docTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "Come Back ;(";
});

window.addEventListener("focus", () => {
    document.title = docTitle;
})

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

const navLinks = document.querySelectorAll('nav a');
for (var i = 0; i < navLinks.length - 1; i++) {
    navLinks[i].addEventListener('click', function() {
        var x = document.getElementById("navbar");
        x.className = "navbar";
    });
}

// const sections = document.querySelectorAll('section');
// const navLinks = document.querySelectorAll('nav a');
//
// const container = document.querySelector('.skillsWrapper')
//
// let activeSectionId = null;
// let previousSectionId = null;
//
// const options = {
//     threshold: 0.8
// };
//
// const observer = new IntersectionObserver(function(entries) {
//     entries.forEach(entry => {
//         const id = entry.target.getAttribute('id');
//         const correspondingNavLink = document.querySelector(`nav a[href="#${id}"]`);
//
//         if (entry.intersectionRatio > 0) {
//
//             updateURLFragment(id)
//             console.log(id)
//             console.log(correspondingNavLink)
//
//             setActiveNavLink(correspondingNavLink);
//             previousSectionId = activeSectionId;
//             activeSectionId = id;
//             console.log("active: " + activeSectionId)
//         }
//     });
// }, options);
//
// function updateURLFragment(id) {
//     history.pushState(null, '', `#${id}`)
//     history.replaceState(null, '', `#${id}`);
// }
//
// sections.forEach(section => {
//     observer.observe(section);
// });
//
//
// function setActiveNavLink(activeNavLink) {
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//     });
//
//     sections.forEach(section => {
//         section.classList.remove('active');
//     });
//
//     activeNavLink.classList.add('active');
//     const sectionId = activeNavLink.getAttribute('href').substring(1);
//     const correspondingSection = document.getElementById(sectionId);
//     correspondingSection.classList.add('active');
//
//     if (correspondingSection.classList.contains('active')) {
//         container.style.display = 'grid'; // Show the hidden divs
//     } else {
//         container.style.display = 'none';
//     }
// }



const sections = document.querySelectorAll('section');
// const navLinks = document.querySelectorAll('nav a');

const expandButtons = document.querySelectorAll('.seeMore');
const containers = document.querySelectorAll('.project');

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






// function setActiveNavLink(activeNavLink) {
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//     });
//
//
//     activeNavLink.classList.add('active');
// }

const fillingAnimation = document.getElementsByClassName("innerSpan")

function startAnimation() {
    fillingAnimation.style.animation = 'fillingAnim 2s forwards'
    setTimeout(resetAnimation, 10000)
}

function resetAnimation() {
    fillingAnimation.style.animation = 'none'; // Remove the animation
    void fillingAnimation.offsetWidth; // Trigger a reflow
    fillingAnimation.style.animation = 'fillingAnim 2s forwards'; // Reapply the animation
    setTimeout(resetAnimation, 10000); // Reset after 10 seconds
}

startAnimation()

function increasePercentage() {
    let number = document.getElementById("percentage")
}
