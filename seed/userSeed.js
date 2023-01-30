const { User } = require('../model');

const userData = [
    {
        name: 'test',
        email: 'test@gmail.com',
        password: 'testpass'
    },
    {
        name: 'test2',
        email: 'tests@gmail.com',
        password: 'testpass2!'
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
      

