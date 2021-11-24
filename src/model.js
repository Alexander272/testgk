export class Model {
    constructor(organization, position, employee) {
        this.selected = {
            organization: "",
            employee: "",
        }
        this.organization = organization.map(org => ({
            id: org[0],
            name: org[1],
        }))
        this.employee = employee.map(emp => ({
            id: emp[0],
            name: emp[1],
            orgId: emp[2],
            posId: emp[3],
        }))
        this.position = position.map(pos => ({
            id: pos[0],
            name: pos[1],
        }))
    }
}
