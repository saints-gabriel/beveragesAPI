import { wine, wines } from '../model/winemodel.js'

export function getAllWines(req, res){
    res.json(wines)
}

export function getWineById(req, res){
    const { id } = req.params
    const foundWine = wines.find(w => w.id == id)

    if (!foundWine){
        res.json({
            msg: 'not found'
        })
    } else {
        res.json(foundWine)
    }
}

export function postWine(req, res){
    const { title, desc } = req.body

    const newWine = new wine(wines.length+1,title,desc);

    wines.push(newWine);
    res.json(newWine)
}