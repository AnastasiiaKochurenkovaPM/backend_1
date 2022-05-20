const uuid = require('uuid')
const path = require('path')
const {Adverts} = require('../model/models')
const {Shelters} = require('../model/models')


    //create advertations
    const createAdvert = async(req,res) => {

            const {nameAnimal, type, sex, age, nameperson, city, contact, ster, vac, ShelterId} = req.body;
            //const {ShelterId} = req.session.userId/////не зчитується
            const {img1} = req.files
            let fileName1 = uuid.v4() + ".jpg"
            img1.mv(path.resolve(__dirname, '..', 'static', fileName1))

            const {img2} = req.files
            let fileName2 = uuid.v4() + ".jpg"
            img2.mv(path.resolve(__dirname, '..', 'static', fileName2))

            const {img3} = req.files
            let fileName3 = uuid.v4() + ".jpg"
            img3.mv(path.resolve(__dirname, '..', 'static', fileName3))

            const adverts = await Adverts.create({nameAnimal, type, sex, age, nameperson, city, contact, ster, vac, img1: fileName1, img2: fileName2, img3: fileName3, ShelterId}).catch(err=>{console.log(err)})
            console.log(adverts);
            return res.json(adverts)
    }

    //all advertations
    const getAll = async(req, res) => {
        const adverts = await Adverts.findAll({
            raw:true
        }).catch(error=>console.log(error))
        console.log(adverts);
        return res.json(adverts).status(200)
    }

    //one advertations
    const getAllShel = async (req, res) => {
        //if (req.session.userId) {
            //const ShelterId = req.params;
            const advert = await Adverts.findAll({
                  where:{
                      ShelterId: "1"
                  },
                  raw:true
              }).catch(error=>console.log(error))
              console.log(advert);
              return res.json(advert).status(200)
          // }
    }

    const getOne = async (req, res) => {
        const {id} = req.params;
      const advert = await Adverts.findOne({
          where:{
              id:id
          },
          raw:true
      }).catch(error=>console.log(error))
        console.log(advert);
        return res.json(advert).status(200)
    }

module.exports = {
    createAdvert, getAll, getAllShel, getOne
}