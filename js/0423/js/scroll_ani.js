window.addEventListener('load',()=>{
        const boxL = document.getElementsByClassName('box_l')[0];
        const boxR = document.getElementsByClassName('box_r')[0];
        console.log(boxL);
        console.log(boxR);

        window.addEventListener('scroll',function(){
            let st = window.pageYOffset;
            console.log(st);
            if(st > 1500){
                boxL.classList.add('on');
                boxR.classList.add('on');

            }else{
                boxL.classList.remove('on');
                boxR.classList.remove('on');
            }


        })


       })