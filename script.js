const contactEl = document.getElementById("contact")
const contactBtnEl = document.querySelectorAll(".contactbtn")

contactBtnEl.forEach(button=>{
    button.addEventListener('click', ()=>{
        contactEl.scrollIntoView({behavior:"smooth"})
    })
})
