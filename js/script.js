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
            
       if(e.target.nodeName == 'IMG') {
        
        headerPictureVampire.forEach(function(item, i) {
            if(item == e.target) {
                item.classList.remove('show')
                item.classList.add('hide')
                headerImage[i].classList.remove('hide')
                headerImage[i].classList.add('show') 
                console.log(e);
                wrongPare();
                samePare()
            }
           

        })
           
       }
       headerImage.forEach(function(elem, i) {
        elem.addEventListener('click', () => {
            elem.classList.remove('show')
            elem.classList.add('hide')
            headerPictureVampire[i].classList.remove('hide')
            headerPictureVampire[i].classList.add('show')
            console.log(e)
            
        })
       })
    
    })

 
   function samePare() {
    
       
            if(firstPare[0].classList.contains('show')){
                if(firstPare[1].classList.contains('show')) {
                  firstPare[0].classList.add('shake')
                  firstPare[1].classList.add('shake')
                  firstPare[0].classList.add('shake')
                  setTimeout(deletePare, 3000)
                }
            }
            
            if(secondPare[0].classList.contains('show')){
                if(secondPare[1].classList.contains('show')) {
                  secondPare[0].classList.add('shake')
                  secondPare[1].classList.add('shake')
                  secondPare[0].classList.add('shake')
                  setTimeout(deletePare, 3000)
                }
            }
            if(thirdPare[0].classList.contains('show')){
                if(thirdPare[1].classList.contains('show')) {
                  thirdPare[0].classList.add('shake')
                  thirdPare[1].classList.add('shake')
                  thirdPare[0].classList.add('shake')
                  setTimeout(deletePare, 3000)
                }
            }
            if(fourthPare[0].classList.contains('show')){
                if(fourthPare[1].classList.contains('show')) {
                  fourthPare[0].classList.add('shake')
                  fourthPare[1].classList.add('shake')
                  fourthPare[0].classList.add('shake')
                  setTimeout(deletePare, 3000)
                }
            }
                
            function deletePare() {
                firstPare[0].classList.remove('show')
                firstPare[1].classList.remove('show')
                firstPare[0].classList.add('hide')
                firstPare[1].classList.add('hide')
                secondPare[0].classList.remove('show')
                secondPare[1].classList.remove('show')
                secondPare[0].classList.add('hide')
                secondPare[1].classList.add('hide')
                thirdPare[0].classList.remove('show')
                thirdPare[1].classList.remove('show')
                thirdPare[0].classList.add('hide')
                thirdPare[1].classList.add('hide')
                fourthPare[0].classList.remove('show')
                fourthPare[1].classList.remove('show')
                fourthPare[0].classList.add('hide')
                fourthPare[1].classList.add('hide')
            }
       
   }
   
   function wrongPare() {

    if(firstPare[0].classList.contains('show')) {
        if( secondPare[0].classList.contains('show')) {
            if(thirdPare[0].classList.contains('show')) {
                console.log('hello');
            }
        }
     
        
    }

   }

   
 
});
