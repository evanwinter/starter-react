window.addEventListener("DOMContentLoaded", () => {
  // window.addEventListener("DOMContentLoaded", () => {
  //   Array.from(document.querySelectorAll("[data-toggle]")).forEach((element) => {
  //     element.addEventListener("click", (e) => {
  //       const { target } = e.currentTarget.dataset
  //       const targetElements = Array.from(document.querySelectorAll(`[data-id="${target}"]`))
  //       targetElements.forEach((targetElement) => {
  //         if (targetElement.classList.contains("show")) {
  //           targetElement.classList.remove("show")
  //         } else {
  //           targetElement.classList.add("show")
  //         }
  //       })
  //     })
  //   })
  // })

  Toggle.init()
})

const Toggle = {
  TOGGLE_TRIGGER_SELECTOR: "[data-toggle]",

  triggers: [],

  listen: () => {
    this.triggers.forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        const { target } = e.currentTarget.dataset
        const containers = Array.from(document.querySelectorAll(`[data-id="${target}"]`))
        containers.forEach(({ classList }) => {
          if (classList.contains("show")) {
            classList.remove("show") 
          } else {
            classList.add("show")
          }
        })
      })
    })
  },

  init: () => {
    this.triggers = Array.from(document.querySelectorAll(Toggle.TOGGLE_TRIGGER_SELECTOR))
    Toggle.listen()
  }
}