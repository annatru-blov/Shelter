/*(function Burger() {
    const burgerItem = document.querySelector('.burger');
    console.log(burgerItem);
    const menu = document.querySelector('.nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const menuLinks = document.querySelectorAll('.nav-link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('nav_active');
    });
    //console.log(window.innerWidth);
    if (window.innerWidth <= 1500) {

        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('nav_active');
            });
        }
    }

}());

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#benefits-left");
const ITEM_RIGHT = document.querySelector("#benefits-right");
const CARD = document.querySelectorAll("benefits_card_pic");



const createCardTemplate = () => {
    const img = document.createElement("img");
    img.classList.add("benefits_card_pic");
    return img;
  }
  createCardTemplate();



const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    
};

BTN_LEFT.addEventListener("click", moveLeft);


CAROUSEL.addEventListener("animationend", () => {
    CAROUSEL.classList.remove("transition-left");
    BTN_LEFT.addEventListener("click", moveLeft);
})

const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_RIGHT.removeEventListener("click", moveRight);
    BTN_LEFT.removeEventListener("click", moveLeft);
};

BTN_RIGHT.addEventListener("click", moveRight);

let dogs = {

    "Katrine" : "image1", 
    "Jennifer" : "image2", 
    "Woody" : "image3", 
    "Charly" : "image4", 
    "Scarlett" : "image5", 
    "Freddie" : "image6", 
    "Sophia" : "image7", 
    "Timmy" : "image8", 
}

let current_dogs = ["Katrine", "Jennifer", "Woody"]


function clickButton () {
  //  console.log(current_dogs);
    let findDogs = 0
    while (findDogs < 3) {
        let dogRandom = Math.floor(Math.random() * 8)
        Object.entries(dogs).map((item, index) => {
            if (dogRandom === index) {
                let isDog = true
                for (let j = 0; j < 3; j++) {
                    if (current_dogs[j] === item[0]) {
                        isDog = false
                    }
                }
                if (isDog) {
                    current_dogs[findDogs] = item[0];
                    findDogs++
                } 
            }
        })
    }
   // console.log(current_dogs);
}

//на выходе получаем новый массив догов - current_dogs

// в верстке : 
clickButton ();

current_dogs.map((item) => {
    dogs[`${item}`];
})

*/


const Popup =  document.querySelectorAll('.popup');

const Popup_close = document.querySelectorAll('.popup_close')

//console.log(card_title.textContent);
const Popup_title = document.querySelectorAll('.popap_title');
//console.log(Popup_title);
const Benefid_card = document.querySelectorAll('.benefids_card');
//console.log(Benefid_card);
const Card_title_text = document.querySelectorAll('.benefits_card-title');
//console.log(Card_title_text);

/*[].forEach.call(Benefid_card,function(el){
    el.addEventListener('click', function (e) {
        for (let i = 0; i < Card_title_text.length; i++){

            for (let j = 0; j < Popup_title.length; j++){
            if(Card_title_text[i].textContent === Popup_title[j].textContent){
           
    for (let k = 0; k < Popup.length; k++){
        Popup[k].classList.add('open');
    }
           
        }
        
        }}
       
    })
   

})*/

//   Benefid_card.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//                 for (let i = 0; i < Card_title_text.length; i++){

//          for (let j = 0; j < Popup_title.length; j++){
//              if(Card_title_text[i].textContent === Popup_title[j].textContent){
//            Popup[j].classList.add('open');
//         }
           
        
            
          
//         }}
//     });
//    }); 
//    Popup_close.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         Popup.forEach(function(item) {
//              item.classList.remove('open');
            
//            })
//      });
// }); 



// Benefid_card.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         for (let i = 0; i < Card_title_text.length; i++){

// console.log(Card_title_text[3].textContent);}
//     });
// }); 
// /*Popup_close.addEventListener('click', () => {
//     console.log('1');
//     //Popup.classList.remove('open');

// });*/

/* for (let i = 0; i < Popup_title.length; i++){
  console.log(Popup_title[i].textContent);
    
     }
    for (let i = 0; i < Card_title_text.length; i++){
        console.log(Card_title_text[i].textContent);
                      }

    for (let i = 0; i < Popup_close.length; i++){
       console.log(Popup_close);
    }
*/


            

                 Benefid_card.forEach(btn => {
                       btn.addEventListener('click', (e) => {
                        const id = e.target.id
                        for (let j = 0; j < Popup_title.length; j++){
                        if (id === Popup_title[j].textContent) {
                            Popup[j].classList.add('open');
                        }
                    }
                    })
                })

                    Popup_close.forEach(btn => {
    btn.addEventListener('click', (e) => {
        Popup.forEach(function(item) {
             item.classList.remove('open');
            
           })
     }); }); 