import { employee, organization, selected } from "./init"

const organizationSel = document.querySelector("#organization")
const employeeSel = document.querySelector("#employee")
const organiztionOpt = document.querySelector("#organization_options")
const employeeOpt = document.querySelector("#employee_options")

const toggleOpen = event => {
    const options = document.querySelector(`#${event.target.id}_options`)
    options.classList.toggle("select__options--open")
}

organizationSel.addEventListener("click", toggleOpen)
employeeSel.addEventListener("click", toggleOpen)

const selectHandler = event => {
    const { name, optionName } = event.target.dataset
    selected[optionName] = name

    let isOrganization = false
    let selectedField
    if (optionName === "organization") {
        selectedField = organizationSel
        isOrganization = true
    }
    if (optionName === "employee") selectedField = employeeSel
    selectedField.firstChild.textContent = name

    const options = document.querySelector(`#${optionName}_options`)
    options.classList.remove("select__options--open")

    if (isOrganization) {
        const curOrg = organization.find(org => org.name === name)
        const newEmployee = employee.filter(
            emp => emp.orgId === curOrg.id && selected.position.includes(emp.posId.toString())
        )
        renderOptions(newEmployee, "employee")
    }
}

export const init = () => {
    renderOptions(organization, "organization")
}

export const renderOptions = (data, optName) => {
    let root
    if (optName === "organization") root = organiztionOpt
    if (optName === "employee") root = employeeOpt
    root.innerHTML = ""

    data.forEach(d => {
        const option = document.createElement("li")
        option.classList.add("select__option")
        option.dataset.optionName = optName
        option.dataset.name = d.name
        option.innerHTML = d.name
        option.addEventListener("click", selectHandler)

        root.insertAdjacentElement("beforeend", option)
    })
}
