const Sequelize = require("sequelize");


const sequelize = new Sequelize('userdb', 'root', '', {
  host: 'localhost',
  dialect:'mysql'
});


db.sync({ force: false, logging: false  }).then(() => {
    console.log(`Database & tables created!`)
});

module.exports.db = db;