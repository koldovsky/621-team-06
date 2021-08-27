(function() {
    const bodyScrollLock = document.querySelector('.modal-open');
    const popupButtonYes = document.querySelector('.popup-confirm');
    const popupWrapper = document.querySelector('.popup')
    function popupButtonYesClick(){
        popupWrapper.style.display = 'none';
        bodyScrollLock.style.overflow = 'auto';
    }
    popupButtonYes.addEventListener('click', popupButtonYesClick);
})();