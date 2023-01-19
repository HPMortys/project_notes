const express = require('express')



const { getNotesByTitle, getNotes, createNote, updateNote, deleteNote} = require('../controllers/notes')


const router = express.Router()

router.get('/posts/:id', getNotes)
router.get('/search', getNotesByTitle)

router.post('/posts', createNote)

router.patch('/posts', updateNote)
router.delete('/posts/:user_id/:post_id', deleteNote)


module.exports = router

