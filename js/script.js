feather.replace()

const mobile_overlay = document.querySelector(".mobile_overlay")
const bars = document.querySelector(".bars")
const side_menu = document.querySelector(".side_menu")
const close = document.querySelector(".close")

bars.addEventListener("click", () => {
    side_menu.classList.toggle("show")
    mobile_overlay.classList.toggle("show")
})
close.addEventListener("click", () => {
    side_menu.classList.remove("show")
    mobile_overlay.classList.remove("show")
})
// side_menu.addEventListener("focusout", function(){
//     console.log("lalala");
// })

  mobile_overlay.addEventListener("click", function(e){
    if (e.target.classList[0] == "mobile_overlay") {
        side_menu.classList.remove("show")
        this.classList.remove("show")
    }
  });