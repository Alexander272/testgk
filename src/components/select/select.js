import "./select.css"

export class Select {
    constructor(selector, selected, text, options, classes) {
        this.$el = document.querySelector(selector)
        this.selected = selected
        this.text = text
        this.options = options
        this.classes = classes
        this.isOpen = false
    }

    render() {
        this.$el.innerHTML = ""
        this.$el.insertAdjacentElement("beforeend", this.toHTML())
    }

    toggleOpen = () => {
        this.isOpen = !this.isOpen
        const options = this.$el.querySelector(".select__options")
        options.classList.toggle("select__options--open")
    }

    selectHandler = event => {
        const name = event.target.dataset.name
        this.selected = name
        const selected = this.$el.querySelector(".select__selected")
        selected.firstChild.textContent = name

        this.isOpen = !this.isOpen
        const options = this.$el.querySelector(".select__options")
        options.classList.remove("select__options--open")
    }

    createSelected = () => {
        let selected = document.createElement("p")
        selected.classList.add("select__selected")
        selected.insertAdjacentHTML(
            "beforeend",
            `${this.selected || "Выберите организацию"} <span class='select__icon'>&#9658;</span>`
        )
        selected.addEventListener("click", this.toggleOpen)
        return selected
    }

    createOptions = () => {
        let options = document.createElement("ul")
        options.classList.add("select__options")

        this.options.forEach(opt => {
            const option = document.createElement("li")
            option.classList.add("select__option")
            option.dataset.name = opt.name
            option.innerHTML = opt.name
            option.addEventListener("click", this.selectHandler)

            options.insertAdjacentElement("beforeend", option)
        })

        return options
    }

    toHTML() {
        const root = document.createElement("div")
        root.classList.add("select")
        root.insertAdjacentHTML(
            "afterbegin",
            `<p class="select__title">${this.text}</p>
            <div class="select__container"></div>`
        )
        const container = root.querySelector(".select__container")

        const selected = this.createSelected()
        container.insertAdjacentElement("afterbegin", selected)

        const options = this.createOptions()
        container.insertAdjacentElement("afterbegin", options)

        return root
    }
}
