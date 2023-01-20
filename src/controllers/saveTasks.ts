import express, { Express } from 'express'
import { getData, saveData } from '../factories/data';
import { getApp } from "../factories/getApp";

const app: Express = getApp()
app.use(express.json())
app.post('/:name', (req, res) => {
    if (!req.params.name) res.status(403).send('Name not specified')
    saveData(req.params.name, req.body)
    res.status(200).send('ok')
})