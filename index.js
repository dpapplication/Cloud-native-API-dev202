const express=require('express')
const connection=require('./config/connexionDB')

const app=express()
app.use(express.json())
connection()
app.use('/auteur',require('./routes/auteurRoutes'))
app.use('/livre',require('./routes/livreRoutes'))

app.listen(3000,console.log('serveur is running '))