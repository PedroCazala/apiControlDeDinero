import express from 'express'
import dotenv from 'dotenv'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = 2000
const server = app.listen(PORT,()=> console.log(`Puerto corriendo en http://localhost:${PORT}`)
)