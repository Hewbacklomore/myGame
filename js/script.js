'use strict';

document.addEventListener('DOMContentLoaded', function() {



let headerTable = document.querySelector('.header__table'),
    headerItem = document.querySelectorAll('.header__table_item-black img'),
    headerParent = document.querySelector('.header__table_item-black'),
    headerPicture = document.querySelectorAll('.header__picture'),
    firstPare = document.querySelectorAll('.firstPare'),
    secondPare = document.querySelectorAll('.secondPare'),
    thirdPare = document.querySelectorAll('.thirdPare'),
    fourthPare = document.querySelectorAll('.fourthPare'),
    preHeaderPicture = document.querySelectorAll('.preheader__picture');

    
    console.log(firstPare)

    headerTable.addEventListener('click', function(e) {
      /*   console.log(e) */
        
        if(e.target && e.target.tagName == 'IMG') {
            headerItem.forEach(function(item, i) {
               
                
            
               if(item == e.target ) {

                    
                    headerImg(i)
               
                    }
                
            })
        }
    })

    
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
                firstPare[0].classList.add('hide')
                firstPare[1].classList.add('hide')
            }
    }else {
        firstPare[0].classList.contains('show')
        headerPicture[i].classList.add('show')
    }
        if(secondPare[0].classList.contains('show')) {
            if(secondPare[1].classList.contains('show')) {
                secondPare[0].classList.add('hide')
                secondPare[1].classList.add('hide')
            }
}
        if(thirdPare[0].classList.contains('show')) {
            if(thirdPare[1].classList.contains('show')) {
                thirdPare[0].classList.add('hide')
                thirdPare[1].classList.add('hide')
        }
}
        if(fourthPare[0].classList.contains('show')) {
            if(fourthPare[1].classList.contains('show')) {
                fourthPare[0].classList.add('hide')
                fourthPare[1].classList.add('hide')
                
}
}
   
    }

    function hideTruePare () {
        if(firstPare[0].classList.contains('flash') && firstPare[1].classList.contains('flash')) {
            firstPare[0].classList.add('hide')
            firstPare[1].classList.add('hide')
        }
    }
hideTruePare()

   


   
   
 
});