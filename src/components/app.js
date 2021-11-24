import { Select } from "./select/select"

export class App {
    constructor(model) {
        this.model = model
    }

    init() {
        const selectOrg = new Select(
            "#organization",
            this.model.selected.organization,
            "Организация",
            this.model.organization,
            null
        )
        selectOrg.render()
        const selectEm = new Select(
            "#employee",
            this.model.selected.organization,
            "Сотрудник",
            this.model.employee,
            null
        )
        selectEm.render()
    }
}
