const left = document.querySelector(".left")
const right = document.querySelector(".right")
const container = document.querySelector(".container")

function addClass(el, className) {
  el.classList.add(className)
}

function removeClass(el, className) {
  el.classList.remove(className)
}

function main() {
  left.addEventListener("pointerover", () => {
    addClass(container, "hover-left")
    removeClass(container, "hover-right")
  })
  right.addEventListener("pointerover", () => {
    addClass(container, "hover-right")
    removeClass(container, "hover-left")
  })
}

main()
