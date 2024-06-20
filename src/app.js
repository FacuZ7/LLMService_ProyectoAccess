import express from 'express'
import routerMaster from './routes/index.js'

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(routerMaster)

app.listen(PORT, () => 
    console.log('Server levantado en http://localhost:3000')
)
