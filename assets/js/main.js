function openNav() {
    document.getElementById("open").style.display = 'none';
    document.getElementById("nav").style.width = '100%';
    document.getElementById("nav").style.opacity = '1';
    document.getElementById("nav").style.overflowX = 'visible';
}

function closeNav() {
    document.getElementById("open").style.display = 'block';
    document.getElementById("nav").style.width = '0%';
    document.getElementById("nav").style.opacity = '0';
    document.getElementById("nav").style.overflowX = 'hidden';
}


