import { Task } from "../models/task"

interface Data {
    [key: string]: Task[];
}

const data: Data = {
    'Egret': [
        {
            content: 'Homework',
            done: false
        },
        {
            content: 'Assignment',
            done: true
        }
    ]
}

function getData (name: string) {
    if (!data[name]) return []
    else return data[name]
}

function saveData (name: string, newTasks: Task[]) {
    data[name] = newTasks.map((task) => { return {...task} })
}

export { getData, saveData }