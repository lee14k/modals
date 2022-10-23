const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const show = document.querySelectorAll('.show')
Array.from(show)
const close = document.querySelector('.close-modal')

show.forEach(el => {
    el.addEventListener('click', popUp)
})


function popUp() {
    // let window = document.querySelector('.hidden')
    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')

}

function closeMe() {

    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')

}

close.addEventListener('click', closeMe)

overlay.addEventListener('click', closeMe)
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden'))
        closeMe()
})