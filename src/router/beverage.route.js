import { beverageController } from "../controller/beverage.controller.js";
import { Router } from "express";

const beverageRouter = Router();

beverageRouter.get('/', beverageController.getAllDrinks);
beverageRouter.get('/count', beverageController.getAndCount);
beverageRouter.get('/:id', beverageController.getDrinkByID);
beverageRouter.get('/search/:name', beverageController.findByName);
beverageRouter.post('/', beverageController.createDrink);
beverageRouter.put('/:id', beverageController.editDrink);

export default beverageRouter;
