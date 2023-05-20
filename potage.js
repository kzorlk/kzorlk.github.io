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