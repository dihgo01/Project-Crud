module.exports = {
    dialect:'postgres', 
    host: process.env.HOST,
    database:process.env.DATABASE, 
    username:process.env.USER_DATABASE,
    password:process.env.PASS_DATABASE,
    define:{
        timestamps: true,
        freezeTableName: true,
        quoteIdentifiers: false,
        operatorsAliases: false,
    },
}