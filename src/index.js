const shareButton = document.getElementById('shareButton');
const shareArrow = document.getElementById('shareArrow')
const shareMenu = document.getElementById('shareMenu')

function activate() {
    if (shareMenu.classList.contains('active')){
        shareButton.classList.remove('btn-active');
        shareArrow.classList.remove('arw-active');
        shareMenu.classList.remove('active');
    } else {
        shareButton.classList.add('btn-active');
        shareArrow.classList.add('arw-active');
        shareMenu.classList.add('active');
    }
}