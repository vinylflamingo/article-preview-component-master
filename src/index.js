const shareButton = document.getElementById('shareButton');
const shareArrow = document.getElementById('shareArrow');
const shareMenu = document.getElementById('shareMenu');




function activate() {
    console.log("share menu toggled")
    if (shareMenu.classList.contains('active')){
        shareButton.classList.remove('btn-active');
        shareArrow.classList.remove('arw-active');
        shareArrow.classList.add('fade-out');
        shareMenu.classList.remove('active');
        
    } else {
        shareButton.classList.add('btn-active');
        shareArrow.classList.add('arw-active');
        shareMenu.classList.add('fade-in');
        shareMenu.classList.add('active');
    }
}