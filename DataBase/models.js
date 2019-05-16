const Sequelize = require("sequelize");
// I changed  you please work
const User = db.define('user', {
    id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true},
    username: {type: Sequelize.STRING, required: true, unique: true},
    email:{type:Sequelize.STRING, require:true,unique:true},
    password: {type: Sequelize.STRING, required: true},
    location:{type:Sequelize.STRING,require:true},
    phoneNumber:{type:Sequelize.STRING,require:true},
    carPlateNumber:{type:Sequelize.STRING,require:true},
    Role:{type:Sequelize.STRING,require:true}

});
module.exports.User = User;