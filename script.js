const accordion = document.getElementsByClassName("acordeon_element");

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else {
            for (ii = 0; ii < accordion.length; ii++) {
                this.classList.toggle("active");
            }

        }
    })
}
