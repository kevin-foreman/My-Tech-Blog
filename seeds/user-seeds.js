const { User } = require('../models');

const userdata = [
    {
        "id": 1,
        "username": "Steve",
        "email": "steve@gmail.com"
    },
    {
        "id": 2,
        "username": "Kevin",
        "email": "kevin@gmail.com"
    },
    {
        "id": 3,
        "username": "Andre",
        "email": "andre@gmail.com"
    },
    {
        "id": 4,
        "username": "Usernumber2",
        "email": "usernumber2@gmail.com"
    }
]

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
