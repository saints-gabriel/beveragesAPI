import express from 'express';
import sequelize from './config/db.js';
import wineRouter from './router/wine.route.js';

const app = express();
app.use(express.json());

app.use('/wines', wineRouter); 

sequelize.sync({ alter: true }).then( 
    ()=>{
        app.listen(process.env.api_port || 3000, ()=>{
            console.log(`Server rodando em localhost:${process.env.api_port}`);
        });
}).catch(err => console.log("Erro ao sicronizar ou iniciar o server: ", err));