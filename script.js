const accordion = document.getElementsByClassName("accordion_element");

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        hideAll();
        this.classList.toggle("active");
    })
}

function hideAll() {
    for (i = 0; i < accordion.length; i++) {
        accordion[i].classList.toggle("active", false);

    }
}

// https://gomakethings.com/the-mysterious-second-argument-on-the-vanilla-js-classlist.toggle-method/