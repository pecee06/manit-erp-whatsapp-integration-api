import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/", (req,res)=>{
    res.send("OK")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on PORT ${process.env.PORT}`)
})