'use strict';

document.addEventListener('DOMContentLoaded', function() {



let headerTable = document.querySelector('.header__table'),
    headerItem = document.querySelectorAll('.header__table_item-black img'),
    headerParent = document.querySelectorAll('.header__table_item-black'),
    headerPicture = document.querySelectorAll('.header__picture'),
    firstPare = document.querySelectorAll('.firstPare'),
    secondPare = document.querySelectorAll('.secondPare'),
    thirdPare = document.querySelectorAll('.thirdPare'),
    fourthPare = document.querySelectorAll('.fourthPare'),
    preHeaderPicture = document.querySelectorAll('.preheader__picture');

    
   

    const caller = headerTable.addEventListener('click', function(e) {
        console.log(e.target)
        
        if(e.target && e.target.tagName == 'IMG') {
            headerItem.forEach(function(item, i) {
               if(item == e.target ) { 
                    headerImg(i)
                    } 
            });
        }

    }); 
    

     function againVampire () {
        headerParent.forEach(function(item, i) {
            if(!item.classList.contains('vampire')) {
                item.innerHTML = '<td class="header__table_item-black"><img class="header__picture vampire" src="icons/images.png" alt="vampireFon"><img class="header__picture hide firstPare" src="icons/firstPare/jlNsFWr.jpg" alt=""></td>'
            }else {
                caller();
            }
        })
    }
    
    function headerImg (i = 0) {

     

        if(!headerPicture[i].classList.contains('hide')) {
            headerPicture[i].classList.add('hide')
            headerPicture[i + 1].classList.remove('hide')
            headerPicture[i + 1].classList.add('show')
           
            
        }else {
            headerPicture[i].classList.remove('hide')
            headerPicture[i].classList.add('show')
            headerPicture[i + 1].classList.add('hide')
            headerPicture[i + 1].classList.remove('show')
        }

        if(firstPare[0].classList.contains('show')) {
            if(firstPare[1].classList.contains('show')) {
                firstPare[0].classList.add('flash')
                firstPare[1].classList.add('flash')
                setTimeout(hideTruePare, 2000);
            }else {
               if(firstPare[0] !== firstPare[1]) {
                firstPare[0].classList.add('shake')
                secondPare[0].classList.add('shake')
               /*  if(secondPare[0].classList.contains('show')) {
                    secondPare[0].previousElementSibling.remove()
                    setTimeout(againVampire, 1000);
                } */
                
               }
            }
    }/* else {
         firstPare[0].classList.add('hide') 
        headerPicture[i].classList.add('show')
    }  */
        if(secondPare[0].classList.contains('show')) {
            if(secondPare[1].classList.contains('show')) {
                secondPare[0].classList.add('flash')
                secondPare[1].classList.add('flash')
                setTimeout(hideTruePare, 2000);
            }else {
                if(secondPare[0] !== secondPare[1]) {
                secondPare[0].classList.add('shake')
                thirdPare[0].classList.add('shake')
                if(thirdPare[0].classList.contains('show')) {
                    thirdPare[0].previousElementSibling.remove()
                   setTimeout(backVampire, 1000); 
                   setTimeout(againVampire, 1000); 
                }
                thirdPare[1].classList.add('shake')
                fourthPare[0].classList.add('shake')
                }
            }
}
        if(thirdPare[0].classList.contains('show')) {
            if(thirdPare[1].classList.contains('show')) {
                thirdPare[0].classList.add('flash')
                thirdPare[1].classList.add('flash')
                setTimeout(hideTruePare, 2000);
        }
}
        if(fourthPare[0].classList.contains('show')) {
            if(fourthPare[1].classList.contains('show')) {
                fourthPare[0].classList.add('flash')
                fourthPare[1].classList.add('flash')
                setTimeout(hideTruePare, 2000);
                
            }
        }
    }

    function hideTruePare () {

        
        if(firstPare[0].classList.contains('flash') && firstPare[1].classList.contains('flash')) {
            firstPare[0].classList.add('hide')
            firstPare[1].classList.add('hide')
        }

         
        if(secondPare[0].classList.contains('flash') && secondPare[1].classList.contains('flash')) {
            secondPare[0].classList.add('hide')
            secondPare[1].classList.add('hide')
        }
        if(thirdPare[0].classList.contains('flash') && thirdPare[1].classList.contains('flash')) {
            thirdPare[0].classList.add('hide')
            thirdPare[1].classList.add('hide')
        }
        if(fourthPare[0].classList.contains('flash') && fourthPare[1].classList.contains('flash')) {
            fourthPare[0].classList.add('hide')
            fourthPare[1].classList.add('hide')
        }
    }

    function backVampire (i = 0) {
        thirdPare[0].classList.remove('show')
        thirdPare[0].classList.add('hide')
        if(!headerPicture[i].classList.contains('show')) {
            headerPicture[i].classList.add('show')
        }
         
       }

       


    

   function deleteWrongPare () {
    firstPare[0].classList.add('hide')
    secondPare[0].classList.add('hide')
    thirdPare[0].classList.add('hide')
    fourthPare[0].classList.add('hide')
   }




});





