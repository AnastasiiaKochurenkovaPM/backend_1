const { Files } = require('../model/models')

async function create(req, res) {
    try {
        const { file } = req.files;
        const created = await Files.create({
            data: file.data,
            mimetype: file.mimetype
        });
        console.log(created.toJSON());
        return res.status(200).json({
            url: `http://localhost:3001/files/${created.id}`
        })
    } catch (error) {
        console.error(error.message);
        return res.status(500)
    }
}

async function get(req, res) {
    const file = await Files.findOne({
        where: {
            id: req.params.id
        }
    });

    if (!file) {
        return res.status(404).json({
            message: 'File not found'
        })
    }

    res.setHeader('content-type', file.mimetype);

    return res.send(file.data);
}

module.exports = {
    create,
    get
}