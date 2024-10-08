import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.get("/", (req,res)=>{
    res.send("OK")
})

app.listen(process.env.PORT, ()=>{
    console.log(`Listening on PORT ${process.env.PORT}`)
})