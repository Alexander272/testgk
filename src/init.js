const initOrganization = [
    [1, "Lada"],
    [2, "Audi"],
    [3, "Toyoya"],
]
const initPosition = [
    [10, "Директор"],
    [20, "Инженер"],
    [30, "Менеджер"],
]
const initEmployee = [
    [1, "Сидоров Иван Петрович", 1, 10],
    [2, "Клюквина Анастасия Викторовна", 1, 30],
    [3, "Yoshimoro Katsumi", 3, 10],
    [4, "Albrecht Wallenstein", 2, 20],
    [5, "Архипов Федот Ярополкович", 1, 20],
    [6, "Синицына Ксения Игоревна", 1, 30],
    [7, "Gustaf Grefberg", 2, 10],
    [8, "Simidzu Koyama", 3, 20],
    [9, "Miura Hirana", 3, 20],
    [10, "Кузьмин Егор Владимирович", 1, 30],
    [11, "Мазурик Алёна Васильевна", 1, 20],
    [12, "Gudrun Ensslin", 2, 30],
    [13, "Ernst Rommel", 2, 20],
]

export const selected = {
    organization: "",
    employee: "",
    position: ["10", "20", "30"],
}
export const organization = initOrganization.map(org => ({
    id: org[0],
    name: org[1],
}))
export const employee = initEmployee.map(emp => ({
    id: emp[0],
    name: emp[1],
    orgId: emp[2],
    posId: emp[3],
}))
export const position = initPosition.map(pos => ({
    id: pos[0],
    name: pos[1],
}))
