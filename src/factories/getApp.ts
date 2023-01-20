import express, { Express } from 'express'
import cors from 'cors'

const app = express()
const port = 3000

app.use(cors())

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

function getApp () {
    return app
}

export { getApp }