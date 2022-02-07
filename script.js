let modalBtn = document.getElementById("modal-button")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-button")

modalBtn.onclick = function(){
  modal.style.display = "block"
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
