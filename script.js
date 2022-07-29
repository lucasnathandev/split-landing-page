const left = document.querySelector(".left")
const right = document.querySelector(".right")
const container = document.querySelector(".container")

Element.prototype.addClass = function (className) {
  this.classList.add(className)
}

Element.prototype.removeClass = function (className) {
  this.classList.remove(className)
}

function main() {
  left.addEventListener("pointerover", () => {
    container.addClass("hover-left")
    container.removeClass("hover-right")
  })
  right.addEventListener("pointerover", () => {
    container.addClass("hover-right")
    container.removeClass("hover-left")
  })
}

main()
