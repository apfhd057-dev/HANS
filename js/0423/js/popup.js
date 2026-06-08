window.addEventListener('load',()=>{
        const popup = document.querySelector('#popup');
        const pCloseBtn = popup.children[0];
            pCloseBtn.addEventListener('click',function(e){
                e.preventDefault();
                popup.style.display="none";

            })


       });