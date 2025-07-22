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