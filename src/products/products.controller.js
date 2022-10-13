const uuid = require('uuid')
const Products = require('../models/products.models')

// -----------------------------------------------------
const getAllProducts = async () => {  

    const data = await Products.findAll() 
    return data
}

// getAllProducts()
// .then(console.log)
// .catch(console.log)
// -----------------------------------------------------


// insert into products (id, name, .....) values (uuid.v4, name, .....)
const createProduct = async (data) => {

    const newProduct = await Products.create({
        id: uuid.v4(),
        name: data.name,
        price: data.price,
    })

    return newProduct
}

// createProduct({
//     name: 'Sock',
//     price: 2.37,
// })
// .then(console.log)
// .catch(console.log)
// -----------------------------------------------------

//Select * from products where id ==== id
const getProductById = async (id) => {  

    const data = await Products.findOne({

        where: {
            id: id
        }
    }) 
    return data
}

// getProductById('a1862c0e-4b22-4d42-911b-6616fc3e4005')
// .then(console.log)
// .catch(console.log)
// -----------------------------------------------------

const editProduct = async (id, data) =>{

    const response = await Products.update(data, {
        where: {
            id
        }
    })
    return response
}

// editProduct('25e5b6ec-9cbd-41cc-9420-bff15e382d3c', {
//     name: 'Jean',
//     price: 27.99
// })
//     .then(console.log())
//     .catch(console.log())

// -----------------------------------------------------

const deleteProduct = async (id) =>{

    const data = await Products.destroy({
        where: {
            id
        }
    })
    return data
}

// editProduct('25e5b6ec-9cbd-41cc-9420-bff15e382d3c', {
//     name: 'Shirt',
//     price: 11.49
// })
//     .then(console.log())
//     .catch(console.log())
// -----------------------------------------------------

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    editProduct,
    deleteProduct
}