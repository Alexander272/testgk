import { employee, organization, selected } from "./init"
import { renderOptions } from "./select"

const directorCB = document.querySelector("#director")
const engineerCB = document.querySelector("#engineer")
const managerCB = document.querySelector("#manager")

const changePositionHandler = event => {
    const id = event.target.dataset.id
    if (event.target.checked) selected.position.push(id)
    else selected.position = selected.position.filter(posId => id != posId)

    const curOrg = organization.find(org => org.name === selected.organization)
    if (curOrg) {
        const newEmployee = employee.filter(
            emp => emp.orgId === curOrg.id && selected.position.includes(emp.posId.toString())
        )
        renderOptions(newEmployee, "employee")
    }
}

directorCB.addEventListener("change", changePositionHandler)
engineerCB.addEventListener("change", changePositionHandler)
managerCB.addEventListener("change", changePositionHandler)
