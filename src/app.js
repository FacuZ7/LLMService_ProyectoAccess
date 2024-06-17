import express from 'express'
import dataRoutes from './routes/dataRoutes.js' 

const PORT = 3000 //process.env.PORT
const app = express()

app.use(express.json())
app.use('/api/data', dataRoutes)

app.listen(PORT, () => 
    console.log('Server express levantado')
)
