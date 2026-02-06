const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)
window.addEventListener('load', checkBoxes)

function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.8

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        }
    })
}
