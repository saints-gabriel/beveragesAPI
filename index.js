import express from 'express';
import cors from 'cors';
import path from 'path';
import { getAllWines, getWineById, postWine } from './src/controller/winecontroller.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/wine', getAllWines);
app.get('/wine/:id', getWineById);

app.post('/wine', postWine);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'wineapi', 'index.html'));
});

app.listen(3000, () => {
    console.log('starting wineAPI in port 3000');
});