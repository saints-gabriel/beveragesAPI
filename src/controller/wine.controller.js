import { Wine } from "../model/wine.model.js";
import { Op } from "sequelize";

const wineController = {
    getAllWines: async (req, res) => {
       try {
           const allWines = await Wine.findAll();
           return res.status(200).json(allWines);
       } catch(e){
            return res.status(500).json(e);
        }
    },
    getWineByID: async (req, res) => {
        try {
            const { id } = req.params;
            
            if (!id) {
                return res.status(400).json('missing id');
            }
            const findWine = await Wine.findByPk(id);
            return res.status(200).json(findWine);
        } catch (e) {
            return res.status(500).json(e);
        }
    },
    findByName: async (req, res) => {
        try {
            const { name } = req.params;
            
            if (!name){
                return res.status(400).json("missing name");
            }
            
            const findWine = await Wine.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            });
            return res.status(200).json(findWine);            
        } catch (e) {
            return res.status(500).json(e)
        }

    },
    createWine: async (req, res) => {
        try {
            const {name, description} = req.body;
            
            const wineCreate = await Wine.create({
                name: name,
                description: description,
            });
            
            const wineResponse = wineCreate.toJSON();
            return res.status(201).json(wineResponse);
        } catch (e) {
            return res.status(500).json(e);
        }
    },

}

export { wineController }