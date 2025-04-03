

(function(){
    const listElements = document.querySelectorAll('.nav-item--show');
    const list = document.querySelector('.nav-list');
    const menu = document.querySelector('.ham');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click',()=>{

                let subMenu = element.children[1]
                let height = 0;
                element.classList.toggle('menu-item--active');

                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }


    const deleteStyleHeight = ()=>{
        listElements.forEach(element =>{
            if(element.children[1].getAttribute ('style')){
                element.children[1].removeAttribute ('style');
                element.classList.remove('menu-item--active');
            }
        })
    }

    window.addEventListener('resize',()=>{
        if(window.innerWidth > 1200) {
            deleteStyleHeight();
            if (list.classList.contains('nav-list--show')) {
                list.classList.remove('nav-list--show');
            }
    
        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 1200) {
        addClick();
    }

    menu.addEventListener('click',()=>{
        list.classList.toggle('nav-list--show')
    })

})();  


//POPUP NEWS

document.querySelector(".close-btn").addEventListener('click',()=>{
    document.querySelector(".popup-center-news").classList.add('hide-popup-news');
    document.querySelector(".popup-background-news").classList.add('hide-popup-news');
})

document.querySelector(".btn-popup-news").addEventListener('click',()=>{
    document.querySelector(".popup-center-news").classList.add('hide-popup-news');
    document.querySelector(".popup-background-news").classList.add('hide-popup-news');
})

// Animación al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const qsSection = document.querySelector('#quienes-somos');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    if (qsSection) {
      observer.observe(qsSection);
    }
  });

//modal de inicio//

ddocument.addEventListener('DOMContentLoaded', function() {
    const popupNews = document.getElementById('popup-news');
    const popupBackground = document.querySelector('.popup-background-news');
    const popupCenter = document.querySelector('.popup-center-news');
    const closeBtn = document.querySelector('#popup-news .close-btn');
    
    // Verificar si ya se mostró el popup antes
    if (!localStorage.getItem('popupShown')) {
        // Mostrar ambos elementos (fondo y popup)
        popupBackground.style.display = 'block';
        popupCenter.style.display = 'block';
        
        // Animación de fade in
        setTimeout(() => {
            popupBackground.style.opacity = '1';
            popupCenter.style.opacity = '1';
        }, 10);
        
        // Cuando se cierra el popup
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Animación de fade out
            popupBackground.style.opacity = '0';
            popupCenter.style.opacity = '0';
            
            // Ocultar después de la animación
            setTimeout(() => {
                popupBackground.style.display = 'none';
                popupCenter.style.display = 'none';
                localStorage.setItem('popupShown', 'true');
            }, 300);
        });
        
        // También puedes guardar cuando se suscribe
        const subscribeBtn = document.querySelector('.btn-popup-news');
        if (subscribeBtn) {
            subscribeBtn.addEventListener('click', function() {
                popupBackground.style.opacity = '0';
                popupCenter.style.opacity = '0';
                
                setTimeout(() => {
                    popupBackground.style.display = 'none';
                    popupCenter.style.display = 'none';
                    localStorage.setItem('popupShown', 'true');
                }, 300);
            });
        }
    }
});

