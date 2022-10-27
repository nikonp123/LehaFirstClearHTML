export function iniModal() {

    const btnGetStarted = document.querySelector('.button_get-startdet');
    const overlay = document.querySelector('.overlay');
    const modalClose = document.querySelector('.modal__close');
    const modalSubmit = document.querySelector('.button_submit');
    const whatDoYouWant = document.getElementById('what-do-you-want');
    const formSubmit = document.querySelector('.feed-form');
    const whatWrite = document.querySelector('.what-write');
    
    function actionWithModal(what) {
        overlay.style.display = what;
        whatDoYouWant.style.display = what;
    };
        
    btnGetStarted.addEventListener('click', () => {
        actionWithModal('block');
    });
    
    modalClose.addEventListener('click', () => {
        actionWithModal('none');
    });
    
    formSubmit.addEventListener('submit', (event) => {
        console.log('Is under development');
        console.log('You write ',event.target[0].value);
        console.log('You write ',whatWrite.value);
        whatWrite.value='';
        actionWithModal('none');
    });    
};
