const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Products = db.define('products', {

    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
        },
    name: {
        type: DataTypes.STRING,
        allowNull: false
        },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Clothes'
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    isAviable: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true        
    }
}) 

module.exports = Products