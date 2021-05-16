// Write your "projects" router here!
const express = require('express')
const pModel = require('./projects-model')
const pRouter = express.Router()

// GET - ALL Projects - WORKING
pRouter.get('/', async (req, res) => {
    try {
        const projects = await pModel.get()
        res.json(projects)
    } catch (err) {
        res.status(500).json(err)
    }
})

// GET - Project by ID - WORKING
pRouter.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        if (!id) {
            res.status(404).json({ message: 'Project ID Required' })
        }
        const projects = await pModel.get(id)
        res.json(projects)
    } catch (err) {
        res.status(500).json(err)
    }
})

// POST - Create New Project - WORKING
pRouter.post('/', async (req, res) => {
    if (!req.body) {
        res.json({ message: 'Provide required information!' })
    }
    try {
        const project = await pModel.insert(req.body)
        res.status(201).json(project)
    } catch (err) {
        res.status(500).json(err)
    }
})

// PUT - Update Project - WORKING
pRouter.put('/:id', async (req, res) => {
    const id = req.params.id
    const body = req.body
    if (!id) {
        res.json({ message: 'Provide ID!' })
    }
    try {
        const project = await pModel.update(id, body)
        res.json(project)
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE - Delete Project - WORKING
pRouter.delete('/:id', async (req, res) => {
    const id = req.params.id
    if (!id) {
        res.json({ message: 'Provide ID!' })
    }
    try {
        const project = await pModel.remove(id)
        res.json(project)
    } catch (err) {
        res.status(500).json(err)
    }
})
// GET - Project Actions - WORKING
pRouter.get('/:id/actions', async (req, res) => {
    const id = req.params.id
    if (!id) {
        res.json({ message: 'Provide ID!' })
    }
    try {
        const project = await pModel.getProjectActions(id)
        res.json(project)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = pRouter
