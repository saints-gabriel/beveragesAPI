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
                return res.status(400).json({"msg":"missing name"});
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
    getAndCount: async (req, res) => {
        try {
            const allWines = await Wine.findAndCountAll()

            return res.status(200).json({"message": "total database items: " + allWines.count})
        } catch (e) {
            
        }
    },
    editWine: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description } = req.body;
            const wine = await Wine.findByPk(id);

            if (!id){
                return res.status(400).json({"msg": "missing parameter"});
            };

            wine.set({
                name: name,
                description: description
            });

            const newWine = await wine.save();
            return res.status(200).json(newWine);
        } catch (e) {
            return res.status(500).json(e);
        }
    }
}

export { wineController }