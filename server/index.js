import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

import userRoutes from './routes/user-routes.js'
import adminRoutes from './routes/admin-routes.js'

const app = express()
dotenv.config()

app.use((express.json({ limit: "30mb", extended: true })))
app.use((express.urlencoded({ limit: "30mb", extended: true })))
app.use((cors()))


// Admin Routes
app.use('/api', adminRoutes);

// User Routes
app.use('/', userRoutes)

app.get('/', (req, res) => {
    res.send('SERVER IS RUNNING')
})

const DB_URL = process.env.DB_URL
const PORT = process.env.PORT || 5000

console.log(DB_URL);

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true)

