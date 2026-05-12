import express from 'express';
import sequelize from './config/db.js';
import wineRouter from './router/wine.route.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(cors())
app.use(express.json());

app.use('/wines', wineRouter);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/api', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

sequelize.sync({ alter: true }).then( 
    ()=>{
        app.listen(process.env.api_port || 3000, ()=>{
            console.log(`Server rodando em localhost:${process.env.api_port}`);
        });
}).catch(err => console.log("Erro ao sicronizar ou iniciar o server: ", err));