// const accordion = document.getElementsByClassName("contentBox");
// for (i = 0; i< accordion.length; i++ ){
//     accordion[i].addEventListener('click', function () {
//         this.classList.toggle('act')
//     })
// }
//
console.log("ok")
const accordions = document.querySelectorAll(".contentBox");
accordions.forEach((accordion) => {
    accordion.addEventListener("click", () => {
        accordion.classList.toggle('act')
        console.log("oui")
    })
})

console.log("non")