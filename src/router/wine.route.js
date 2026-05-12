import { wineController } from "../controller/wine.controller.js";
import { Router } from "express";

const wineRouter = Router();

wineRouter.get('/', wineController.getAllWines);
wineRouter.get('/count', wineController.getAndCount);
wineRouter.get('/:id', wineController.getWineByID);
wineRouter.get('/search/:name', wineController.findByName);
wineRouter.post('/', wineController.createWine);
wineRouter.put('/:id', wineController.editWine);

export default wineRouter;