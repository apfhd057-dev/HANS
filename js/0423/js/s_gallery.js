 window.addEventListener('load',()=>{
            const gGnb = document.getElementById('g_gnb');
            const gGnbLi = gGnb.children;
            const gBody = document.getElementsByClassName('g_body')[0];
            const gBodyUl = gBody.children[0];
            let n = 0;
            let targetx=0;

            for(let i=0; i < gGnbLi.length; i++){
                gGnbLi[i].index = i;
                gGnbLi[i].addEventListener('click', (e)=>{
                    //n=i;
                    n = e.currentTarget.index;
                    //console.log(n);//0 1 2 3 4 5

                    targetx = n*1000*(-1);
                    gBodyUl.style.left=targetx + "px";

                    for(let j=0; j < gGnbLi.length; j++){
                        if(n==j){
                            gGnbLi[j].classList.add('on');

                        }else{
                            gGnbLi[j].classList.remove('on');

                        }
                    }
                    

                });
            }
                
        })