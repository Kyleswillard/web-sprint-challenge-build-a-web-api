// Write your "actions" router here!
const express = require('express')
const aModel = require('./actions-model')
const aRouter = express.Router()

aRouter.get('/', async (req, res) => {
    try {
        const actions = await aModel.get()
        res.json(actions)
    } catch (err) {
        res.status(500).json(err)
    }
})

aRouter.get('/:id', async (req, res) => {
    const id = req.params.id
    if (!id) {
        res.json({ message: 'Provide ID!' })
    }
    try {
        const action = await aModel.get(id)
        res.json(action)
    } catch (err) {
        res.status(500).json(err)
    }
})

aRouter.post('/', async (req, res) => {
    const body = req.body
    if (!body) {
        res.json({ message: 'Provide information' })
    }
    try {
        const action = await aModel.insert(body)
        res.json(action)
    } catch (err) {
        res.status(500).json(err)
    }
})

aRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    const body = req.body
    if (!id) {
        res.json({ message: 'Provide ID!' })
    }
    try {
        const action = await aModel.update(id, body)
        res.json(action)
    } catch (err) {
        res.status(500).json(err)
    }
})
aRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    if (!id) {
        res.json({ message: 'Provide ID!' })
    }
    try {
        const action = await aModel.remove(id)
        res.json(action)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = aRouter
