const contactEl = document.getElementById("contact")
const contactBtnEl = document.querySelectorAll(".contactbtn")

const scroll=()=>{
    contactBtnEl.forEach(button=>{
        button.addEventListener('click', button.scrollIntoView({behaviour:"smooth"}))
    })
}