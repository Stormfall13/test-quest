const popup = document.querySelector('.popup')
const infoBtn = document.querySelector('.info')
const closePopup = document.querySelector('.close')

infoBtn.addEventListener('click', () => {
    popup.style.display = 'flex'
    setTimeout(() => {
        popup.style.opacity = 1
    }, 600)
})

closePopup.addEventListener('click', () => {
    popup.style.opacity = ''
    setTimeout(() => {
        popup.style.display = ''
    }, 600)
})

popup.addEventListener('click', () => {
    popup.style.opacity = ''
    setTimeout(() => {
        popup.style.display = ''
    }, 600)
})


const burgerBtn = document.querySelector('.burger')
const closeBurger = document.querySelector('.close__burger')
const mainMenu = document.querySelector('.main__menu')
const linkMenu = document.querySelectorAll('.link__menu')

burgerBtn.addEventListener('click', () => {
    mainMenu.style.display = 'block'
    setTimeout(() => {
        mainMenu.style.opacity = '1'
    },750)
    setTimeout(() => {
        mainMenu.style.transform = 'translateY(0)'
    },800)
})

closeBurger.addEventListener('click', () => {
    mainMenu.style.transform = ''
    mainMenu.style.opacity = ''
    setTimeout(() => {
        mainMenu.style.display = ''
    },600)
})

for(let linksMenu of linkMenu){
    linksMenu.addEventListener('click', () => {
        mainMenu.style.transform = ''
        mainMenu.style.opacity = ''
        setTimeout(() => {
            mainMenu.style.display = ''
        },600)
    })
}


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });