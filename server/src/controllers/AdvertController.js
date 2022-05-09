const uuid = require('uuid')
const path = require('path')
const {Adverts} = require('../model/models')


    //create advertations
    const createAdvert = async(req,res) => {

            const {nameAnimal, type, sex, age, size, ster, vac, city, contact, ShelterId} = req.body;
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const adverts = await Adverts.create({nameAnimal, type, sex, age, size, ster, vac, city, contact, img: fileName, ShelterId})
            console.log(adverts);
            return res.json(adverts)
    }

    //all advertations
    const getAll = async(req, res) => {
        //const {}
    }

    //one advertations
    const getOne = async (req, res) => {
        
    }

module.exports = {
    createAdvert, getAll, getOne
}