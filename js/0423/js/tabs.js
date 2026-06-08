window.addEventListener('load',()=>{
            const tabs = document.getElementById('tabs');
            const tabsUl = tabs.children[0];
            const tabsLi = tabsUl.children;
            let n = 0;
            let divList = []; //tabs의 자식요소 중에서 div들만 저장하는 공간

            tabsLi[0].classList.add('on');

            for(let j=0; j < tabs.children.length; j++){
                        if(tabs.children[j].tagName=="DIV"){
                            divList.push(tabs.children[j]);
                        }

                    }
                    //console.log(divList);


            for(let i=0; i< tabsLi.length; i++){
                tabsLi[i].index =i;
                tabsLi[i].addEventListener('click', (e)=>{
                    n = e.currentTarget.index;
                    //console.log(n);
                    boxAni(n);
                    for(let j=0; j < tabsLi.length; j++){
                        //tabsLi[j].classList.remove('on');
                        if(n==j){
                            tabsLi[j].classList.add('on');
                        }else{
                            tabsLi[j].classList.remove('on');

                        }
                    }
                    

                });

                function boxAni(n){
                    for(let j=0; j < divList.length; j++){ //배열 개수만큼 반복
                        if(n==j){
                            divList[j].style.display="block";
                        }else{
                            divList[j].style.display="none";
                        }
                    }

                }
                
            }
            

        });