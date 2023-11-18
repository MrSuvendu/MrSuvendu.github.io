// preloading 
var loader = document.getElementById("preloader");

setTimeout(() => {
    loader.style.display = "none"
}, 1000);

// navbar scrolling effect
var navbar = document.getElementById("navbar")
var topButton = document.getElementById("top-button")

navbar.classList.add("container", "px-0", "mt-4", "position-absolute", "navbar-absolute")
topButton.classList.add("d-none")

function navbarScrolling() {
    if (window.scrollY >= 8) {
        navbar.classList.add("position-fixed", "navbar-animation", "mb-5")
        navbar.classList.remove("container", "px-0", "mt-4", "position-absolute", "navbar-absolute")
        topButton.classList.remove("d-none")
    } else {
        navbar.classList.add("container", "px-0", "mt-4", "position-absolute", "navbar-absolute")
        navbar.classList.remove("position-fixed", "navbar-animation", "mb-5")
        topButton.classList.add("d-none")
    }

}
window.addEventListener('scroll', navbarScrolling)


// navbar link color change
let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll(".navbar-nav .nav-item a")

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let offsetHeight = section.offsetHeight;
        let id = section.getAttribute('id')

        if (top >= offset && top < offset + offsetHeight) {
            navLinks.forEach((links) => {
                links.classList.remove('active')
                document.querySelector('.navbar-nav .nav-item a[href*=' + id + ']').classList.add("active")
            })
        }
    });
}




// image modal
var imageModal = document.getElementById("image-modal-content")
var imageModalClose = document.getElementById("image-modal-close")


function handleImageModal(imageSrc) {
    const imgElement = imageModal.getElementsByTagName('img')

    if (imgElement.length === 0) {
        const image = document.createElement('img')
        image.src = imageSrc
        image.alt = "image"
        image.classList.add("rounded-3")
        imageModal.appendChild(image)
    }
}

imageModalClose.addEventListener('click', function () {
    const imgElement = imageModal.getElementsByTagName('img')
    const parentElement = imgElement[0].parentNode;
    parentElement.removeChild(imgElement[0]);
})