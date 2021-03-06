const express  = require('express');
const { resolve } = require('path');
const app = express();
const helmet = require('helmet')
const cors = require('cors');

//meus módulos
require('./src/databases/index')
const Router = require('./Router')

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use('/images', express.static(resolve(__dirname,'uploads', 'images')))
app.use(express.urlencoded({ extended:true }))



app.use(Router)

app.listen(process.env.APP_PORT,()=>{
    console.log('Servidor rodando na porta 3000')
})

