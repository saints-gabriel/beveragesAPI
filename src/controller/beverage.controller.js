import { Beverage } from "../model/beverage.model.js";
import { Op } from "sequelize";

const beverageController = {
    getAllDrinks: async (req, res) => {
       try {
           const allDrinks = await Beverage.findAll();
           return res.status(200).json(allDrinks);
       } catch(e){
            return res.status(500).json(e);
        }
    },
    getDrinkByID: async (req, res) => {
        try {
            const { id } = req.params;
            
            if (!id) {
                return res.status(400).json('missing id');
            }
            const findDrink = await Beverage.findByPk(id);
            return res.status(200).json(findDrink);
        } catch (e) {
            return res.status(500).json(e);
        }
    },
    findByName: async (req, res) => {
        try {
            const { name } = req.params;
            
            if (!name){
                return res.status(400).json({"msg":"missing name"});
            }
            
            const findDrink = await Beverage.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            });
            return res.status(200).json(findDrink);
        } catch (e) {
            return res.status(500).json(e)
        }

    },
    createDrink: async (req, res) => {
        try {
            const {name, description} = req.body;
            
            const drinkCreate = await Beverage.create({
                name: name,
                description: description,
            });
            
            const beverageResponse = drinkCreate.toJSON();
            return res.status(201).json(beverageResponse);
        } catch (e) {
            return res.status(500).json(e);
        }
    },
    getAndCount: async (req, res) => {
        try {
            const allDrinks = await Beverage.findAndCountAll()

            return res.status(200).json({"message": "total database items: " + allDrinks.count})
        } catch (e) {
            
        }
    },
    editDrink: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description } = req.body;
            const drink = await Beverage.findByPk(id);

            if (!id){
                return res.status(400).json({"msg": "missing parameter"});
            };

            drink.set({
                name: name,
                description: description
            });

            const newDrink = await drink.save();
            return res.status(200).json(newDrink);
        } catch (e) {
            return res.status(500).json(e);
        }
    }
}

export { beverageController }
