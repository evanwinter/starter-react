window.addEventListener("DOMContentLoaded", () => {
  Toggle.init()
})

const Toggle = {
  TOGGLE_TRIGGER_SELECTOR: "[data-toggle]",

  triggers: [],

  init: () => {
    Array.from(
      document.querySelectorAll(Toggle.TOGGLE_TRIGGER_SELECTOR)
    ).forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        const { target } = e.currentTarget.dataset
        const containers = Array.from(
          document.querySelectorAll(`[data-id="${target}"]`)
        )
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
}
