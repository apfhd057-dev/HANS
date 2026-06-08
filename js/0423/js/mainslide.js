window.addEventListener('load',()=>{
    //메인슬라이드
            const viewareaLi =  document.querySelectorAll('#main_img > .viewarea li');
            const btns = document.getElementsByClassName('btns')[0];
            const btnsLi = document.querySelectorAll('#main_img .btns > li');
            let n =0; //버튼의 인덱스값이 저장된 공간
            let current = 0; //자동실행하는 카운트 값이 저장되는 공간
            let setIntervalId

            viewareaLi[n].classList.add('act');//시작하면서 첫번째 보일 메인이미지
            btnsLi[n].classList.add('on');
            

           for(let i=0; i < btnsLi.length; i++){
                btnsLi[i].index = i;
                btnsLi[i].addEventListener('click',(e)=>{
                    e.preventDefault();
                    n = e.currentTarget.index;
                    //console.log(n);

                    ani(n);


                });

           }
            //-------------------------------------------------------------------
           

           //자동카운트
           function start(){
            setIntervalId = setInterval(()=>{
                //current++
                current += 1;

                if(current==5){
                    current = 0;

                }
                ani(current)


            },3000)
           }

           function stop(){
            clearInterval(setIntervalId);
            
           }

            btns.addEventListener('mouseenter',stop);
            btns.addEventListener('mouseleave',start); // 자동멈춤이 되었다가 다시 자동실행

           start()

           function ani(n){//0 1 2 3 4 중에 하나를 버튼의 인덱스로 받는다
                for(let j=0; j < viewareaLi.length; j++){
                    // viewareaLi[0].classList.add('act');
                    // ...
                    // viewareaLi[4].classList.add('act');
                    if(j==n){
                        viewareaLi[j].classList.add('act');
                        btnsLi[j].classList.add('on');
                    }else{
                        viewareaLi[j].classList.remove('act');
                        btnsLi[j].classList.remove('on');
                    }
                    
                }
                current = n;
                //버튼 인덱스값과 이미지 슬라이드 인덱스의 충돌 방지하기 위해
                // 버튼 인덱스 발생한 후에는 버튼의 인덱스값을 이미지 슬라이드에 초기값으로 설정


           }

           


})