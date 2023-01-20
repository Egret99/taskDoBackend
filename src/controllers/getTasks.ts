import { Express } from 'express'
import { getData } from '../factories/data';
import { getApp } from "../factories/getApp";

const app: Express = getApp()
app.get('/', (req, res) => {
    if (!req.query.name) res.status(403).send('Name not specified')
    else {
        const tasks = getData(req.query.name.toString())
        res.send(JSON.stringify(tasks))
    }
})