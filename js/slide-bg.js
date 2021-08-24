(function(){
    let i = 0;
    let images = [];
    var slideTime = 3000; 
    const header1 = document.querySelector('#slide-bg')

    images[0] = 'img/insta1.webp';
    images[1] = 'img/insta2.webp';
    images[2] = 'img/insta3.webp';
    images[3] = 'img/insta4.webp';

    function changePicture() {
        header1.style.backgroundImage = "url(" + images[i] + ")";

        if (i < images.length - 1) {
            i++;
        } else {
            i = 0;
        }
        setTimeout(changePicture, slideTime);
    }

    window.onload = changePicture;
})();