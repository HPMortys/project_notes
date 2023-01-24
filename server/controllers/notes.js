
const note_model = require('../models/notes_model.js')

const getNotes = async (req, res) => {
    try {
        const notes = await note_model.find({user_id: req.params.id})
        res.status(200).json(notes)
    } catch(error) {
        console.log(error)
        res.status(500).json({message: 'Unknown error'})
    }

}

const getNotesSearch = async (req, res) => {
    const {userId, searchQuery, tags} = req.query
    try {
        const title = new RegExp(searchQuery, 'i');
        const notes = await note_model.find(
            { $or: [ {title: title }, { tags: { $in: tags.split(',') } } ], user_id: userId});
        res.status(200).json(notes)
    } catch(error) {
        console.log(error)
        res.status(500).json({message: 'Unknown error'})
    }
}

const createNote = async (req, res) => {
    try {
        const result = await note_model.create(req.body.params)
        res.status(200).json(result)
    } catch(error) {
        console.log(error)
        res.status(500).json({message: 'Unknown error'})
    }
}

const updateNote = async (req, res) => {
    try {
        const {id, user_id} = req.body.params
        const result = await note_model.replaceOne({ id, user_id }, req.body.params)
        res.status(200).json(result)
    } catch(error) {
        console.log(error)
        res.status(500).json({message: 'Unknown error'})
    }
}

const deleteNote = async (req, res) => {
    try {
        const {post_id: id, user_id} = req.params
        const result = await note_model.deleteOne({id, user_id})
        res.status(200).json({result})
    } catch(error) {
        console.log(error)
        res.status(500).json({message: 'Unknown error'})
    }
}


module.exports = {
    getNotes,
    createNote,
    updateNote,
    deleteNote,
    getNotesSearch
}
