import { App } from "./components/app"
import { Model } from "./model"
import "./styles/index.css"

const organization = [
    [1, "Lada"],
    [2, "Audi"],
    [3, "Toyoya"],
]
const position = [
    [10, "Директор"],
    [20, "Инженер"],
    [30, "Менеджер"],
]
const employee = [
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

new App(new Model(organization, position, employee)).init()
