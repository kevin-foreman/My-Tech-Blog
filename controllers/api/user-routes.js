const router = require('express').Router();
const { User } = require('../../models');

// GET /api/users (all)
router.get('/', (req, res) => {});



// GET /api/users/1 (1 by ID)
router.get('/:id', (req, res) => {});



// POST /api/users (add a user)
router.post('/', (req, res) => {});



// PUT /api/users/1 (update a user info)
router.put('/:id', (req, res) => {});



// DELETE /api/users/1 (delete 1 user by ID)
router.delete('/:id', (req, res) => {});



module.exports = router;