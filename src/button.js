import { employee, position, selected } from "./init"

const addButton = document.querySelector("#add")
const removeButton = document.querySelector("#remove")
const field = document.querySelector("#field")

const clickHandler = event => {
    console.log(event.target)
    if (event.target.id === "add") {
        if (!selected.employee || !selected.organization) return
        const line = document.createElement("p")
        // line.classList.add("field__line")
        const emp = employee.find(e => e.name === selected.employee)
        const pos = position.find(p => p.id === emp.posId)
        const content = `${selected.employee} - ${pos.name} (${selected.organization})`
        line.textContent = content

        field.insertAdjacentElement("beforeend", line)
    } else {
        field.innerHTML = ""
    }
}

addButton.addEventListener("click", clickHandler)
removeButton.addEventListener("click", clickHandler)
