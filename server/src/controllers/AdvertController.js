const uuid = require('uuid')
const path = require('path')
const { Adverts, Files } = require('../model/models')
const { Shelters } = require('../model/models')


//create advertations
const createAdvert = async (req, res) => {
    try {
        const { nameAnimal, type, sex, age, nameperson, city, phone, ster, vac, img1, img2, img3 } = req.body;
        const { userId: ShelterId } = req.session  //не зчитується
        console.log(req.session)
        const adverts = await Adverts.create({
            nameAnimal,
            type,
            sex,
            age,
            nameperson,
            city,
            phone,
            ster,
            vac,
            img1,
            img2,
            img3,
            ShelterId
        })
        console.log(adverts);
        return res.json(adverts)
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({error});
    }
}

//all advertations
const getAll = async (req, res) => {
    const adverts = await Adverts.findAll({
        raw: true
    }).catch(error => console.log(error))
    console.log(adverts);
    //return res.json(adverts).status(200)
}

//one advertations
const getAllShel = async (req, res) => {
    //if (req.session.userId) {
    //const ShelterId = req.params;
    const advert = await Adverts.findAll({
        where: {
            ShelterId: "1"
        },
        raw: true
    }).catch(error => console.log(error))
    console.log(advert);
    //return res.json(advert).status(200)
    // }
}

const getOne = async (req, res) => {
    const { id } = req.params;
    const advert = await Adverts.findOne({
        where: {
            id: id
        },
        raw: true
    }).catch(error => console.log(error))
    console.log(advert);
    return res.json(advert).status(200)
}

module.exports = {
    createAdvert, getAll, getAllShel, getOne
}