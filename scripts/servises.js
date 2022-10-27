function initVisibleElements() {
    const pageUpSmooth = document.querySelector('.page-up-smooth');
    if (window.scrollY > 50) {
        pageUpSmooth.style.display = 'block';
    } else {
        pageUpSmooth.style.display = 'none';
    };
};


export function smoothScroll() {
    
    window.addEventListener('DOMContentLoaded', () => {
        window.addEventListener('scroll', () => {
            initVisibleElements();
        });        
    });
};

function eventClickOnAnchorLink() {
    window.addEventListener('DOMContentLoaded', () => {
        const pageUpSmooth = document.querySelector('.page-up-smooth');
        pageUpSmooth.addEventListener('click', (event) => {
            // event.preventDefault();
            // document.querySelector(this.getAttribute('href')).scrollIntoView({
            //     top: 0,
            //     behavior: 'smooth'
            // });
            // document.body.scrollIntoView({
            //     top: 0,
            //     behavior: 'smooth'
            // });
            window.scroll({
                top: 0,
                // left: 100,
                behavior: 'smooth'
            });            
        });
    });    
};

export function initListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        initVisibleElements();
    });    

    eventClickOnAnchorLink();
};



