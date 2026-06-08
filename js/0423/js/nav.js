window.addEventListener('load',()=>{

    //nav작업
           const navLi =document.querySelectorAll('.nav > ul > li');
         
           for(let i=0; i <navLi.length; i++){
            navLi[i].addEventListener("mouseenter",(e)=>{
                let link = e.target.children[0]; // nav > ul > li > a
                let sub= e.target.children[1]; // nav > ul > li > ul.sub
                let subLi = e.target.children[1].children; // nav > ul > li > ul.sub > li

                link.classList.add('over');//a
                sub.style.display='block';//ul.sub
                
                for(let j=0; j < subLi.length; j++){
                    // subLi[0].addEventListener('mouseenter',()=>{})
                    // subLi[1].addEventListener('mouseenter',()=>{})
                    // subLi[2].addEventListener('mouseenter',()=>{}) ...
                    subLi[j].addEventListener('mouseenter',(e)=>{
                        e.target.classList.add('on');
                        
                    })
                    subLi[j].addEventListener('mouseleave',(e)=>{
                        e.target.classList.remove('on');
                        
                    })
                }
               
            })
            navLi[i].addEventListener("mouseleave",(e)=>{
                e.target.children[0].classList.remove('over');//a
                e.target.children[1].style.display='none';//ul.sub
            })
           }

})


