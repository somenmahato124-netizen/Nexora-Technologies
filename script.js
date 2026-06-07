/* ===================================
   NEXORA TECHNOLOGIES
   COMPLETE SCRIPT.JS
=================================== */

/* MOBILE MENU */

const menuToggle =
document.getElementById("menu-toggle");

const navLinks =
document.getElementById("nav-links");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}


/* DARK MODE */

const darkModeBtn =
document.getElementById("dark-mode-toggle");

if(darkModeBtn){

    darkModeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        if(
            document.body.classList.contains(
                "dark-mode"
            )
        ){

            localStorage.setItem(
                "theme",
                "dark"
            );

            darkModeBtn.innerHTML =
            "☀️";

        }else{

            localStorage.setItem(
                "theme",
                "light"
            );

            darkModeBtn.innerHTML =
            "🌙";

        }

    });

}


/* LOAD SAVED THEME */

if(
    localStorage.getItem("theme")
    ===
    "dark"
){

    document.body.classList.add(
        "dark-mode"
    );

    if(darkModeBtn){

        darkModeBtn.innerHTML =
        "☀️";

    }

}


/* SCROLL REVEAL */

const reveals =
document.querySelectorAll(".reveal");

function revealElements(){

    reveals.forEach((element)=>{

        const top =
        element.getBoundingClientRect()
        .top;

        const trigger =
        window.innerHeight - 100;

        if(top < trigger){

            element.classList.add(
                "active"
            );

        }

    });

}

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();


/* COUNTER */

const counters =
document.querySelectorAll(".counter");

counters.forEach((counter)=>{

    function updateCounter(){

        const target =
        +counter.getAttribute(
            "data-target"
        );

        const count =
        +counter.innerText;

        const increment =
        Math.ceil(target / 100);

        if(count < target){

            counter.innerText =
            count + increment;

            setTimeout(
                updateCounter,
                20
            );

        }else{

            counter.innerText =
            target;

        }

    }

    updateCounter();

});


/* TESTIMONIAL SLIDER */

const testimonials =
document.querySelectorAll(
    ".testimonial"
);

let currentSlide = 0;

function showSlide(index){

    testimonials.forEach((slide)=>{

        slide.classList.remove(
            "active"
        );

    });

    if(testimonials[index]){

        testimonials[index]
        .classList.add(
            "active"
        );

    }

}

if(testimonials.length > 0){

    showSlide(currentSlide);

    setInterval(()=>{

        currentSlide++;

        if(
            currentSlide >=
            testimonials.length
        ){

            currentSlide = 0;

        }

        showSlide(currentSlide);

    },4000);

}


/* TYPING EFFECT */

const typingElement =
document.getElementById(
    "typing"
);

const typingText =
"Turning Ideas into Digital Reality.";

let typingIndex = 0;

function typeText(){

    if(
        typingElement &&
        typingIndex <
        typingText.length
    ){

        typingElement.innerHTML +=
        typingText.charAt(
            typingIndex
        );

        typingIndex++;

        setTimeout(
            typeText,
            80
        );

    }

}

typeText();


/* ACTIVE NAVIGATION */

const currentPage =
window.location.pathname
.split("/")
.pop();

const navItems =
document.querySelectorAll(
    ".nav-links a"
);

navItems.forEach((link)=>{

    const href =
    link.getAttribute("href");

    if(href === currentPage){

        link.classList.add(
            "active-link"
        );

    }

});


/* CONTACT FORM */

const contactForm =
document.getElementById(
    "contact-form"
);

if(contactForm){

    contactForm.addEventListener(
        "submit",
        (e)=>{

            e.preventDefault();

            const name =
            contactForm
            .querySelector(
                'input[name="fullName"]'
            )
            .value
            .trim();

            const email =
            contactForm
            .querySelector(
                'input[name="email"]'
            )
            .value
            .trim();

            const message =
            contactForm
            .querySelector(
                'textarea[name="message"]'
            )
            .value
            .trim();

            if(
                name === "" ||
                email === "" ||
                message === ""
            ){

                alert(
                    "Please fill all required fields."
                );

                return;

            }

            alert(
                "Thank you! Your message has been submitted."
            );

            contactForm.reset();

        }

    );

}


/* SMOOTH SCROLL */

document
.querySelectorAll(
    'a[href^="#"]'
)
.forEach((anchor)=>{

    anchor.addEventListener(
        "click",
        function(e){

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute(
                    "href"
                )
            );

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        }

    );

});


/* PAGE LOADED */

window.addEventListener(
    "load",
    ()=>{

        document.body.classList.add(
            "loaded"
        );

    }
);