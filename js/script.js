'use strict';

document.addEventListener('DOMContentLoaded', function() {



let headerTable = document.querySelector('.header__table'),
    headerItem = document.querySelectorAll('.header__table_item-black img'),
    headerParent = document.querySelector('.header__table_item-black'),
    headerImage = document.querySelectorAll('.header__image'),
    headerPictureVampire = document.querySelectorAll('.vampire'),
    firstPare = document.querySelectorAll('.firstPare'),
    secondPare = document.querySelectorAll('.secondPare'),
    thirdPare = document.querySelectorAll('.thirdPare'),
    fourthPare = document.querySelectorAll('.fourthPare'),
    preHeaderPicture = document.querySelectorAll('.preheader__picture');

    
    console.log(firstPare)
    console.log(headerPictureVampire);
    

    headerTable.addEventListener('click', function(e) {
            
       if(e.target.className == 'header__picture vampire') {
        
        headerPictureVampire.forEach(function(item, i) {
            if(item == e.target) {
                item.classList.remove('show')
                item.classList.add('hide')
                headerImage[i].classList.remove('hide')
                headerImage[i].classList.add('show')
                console.log(e.target);
                headerImage.forEach(function(elem) {
                    elem.addEventListener('click', () => {
                        elem.classList.remove('show')
                        elem.classList.add('hide')
                        item.classList.remove('hide')
                        item.classList.add('show')
                    })
                   })
            }

        })
           
       }
    
    })


        
   
   

 
});
