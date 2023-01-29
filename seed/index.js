const sequelize = require('../config/connection');
const seedUser = require('./userSeed');
const seedReview = require('./reviewSeed');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('***** DB Synced *****');
    await seedUser();
    console.log('***** Users Seeded *****');
    await seedReview();
    console.log('***** Reviews Seeded *****')

    process.exit(0);
};

seedAll();
