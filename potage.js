function showDropdown(id) {
        var dropdown = document.getElementById(id);
        var computedStyle = window.getComputedStyle(dropdown);
        console.log(dropdown);
        if (computedStyle.visibility == 'hidden') {
            dropdown.style.visibility = 'visible';
            dropdown.style.maxHeight = '100%';
        }
        else {
            dropdown.style.visibility = 'hidden';
            dropdown.style.maxHeight = '0px';
        }
}

function showSlide(n) {
    const slides = document.getElementsByClassName('slide');
    const dots = document.getElementsByClassName('dot');
    slideIndex = n;
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        dots[i].className = dots[i].className.replace(' activeDot', '');
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' activeDot';
    if (dots[slideIndex-1].className.includes('activeDot')) {console.log('on')}
}

function plusSlides(n) {
    showSlide(slideIndex + n)
}

function changeSlide(n) {
    showSlide(n)
}


let slideIndex = 1;
showSlide(slideIndex)