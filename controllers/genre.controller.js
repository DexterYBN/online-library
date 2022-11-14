const Genre = require('../models/Genre.model')

module.exports.genreController = {
    postGenre: async (req, res) => {
        try {
            await Genre.create({
                name: req.body.name
            })
            res.json('Жанр добавлен')
        } catch (e) {
            res.json(e)
        }
    },
    getGenre: async (req, res) => {
        try {
            const genreGet = await Genre.find()
            res.json(genreGet)
        } catch (e) {
            res.json(e)
        }
    },
    deleteGenre: async (req, res) => {
        try {
            await Genre.findByIdAndDelete(req.params.id)
            res.json('Жанр удален')
        } catch (e) {
            res.json(e)
        }
    },
    patchGenre: async (req, res) => {
        try {
            await Genre.findByIdAndUpdate(req.params.id, { name: req.body.name })
            res.json('Название жанра изменено')
        } catch (e) {
            res.json(e)
        }
    }
}

