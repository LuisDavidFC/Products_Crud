const { response } = require('express')
const productsControllers = require('./products.controller')
// -----------------------------------------------------

const getAllProducts = (req, res) =>{

    productsControllers.getAllProducts()
    .then( response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json({ message: err.message})
    })
}
// -----------------------------------------------------

const postProduct = (req, res) =>{

    const data  = req.body

    if( data.name && data.price ){

        productsControllers.createProduct(data)
        .then( response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({ message: err.message})
        })
    } else{
        res.status(400).json({ message: 'Missing Data!'})
    }
}
// -----------------------------------------------------

const getProductById = (req, res) =>{

    const id = req.params.id

    productsControllers.getProductById(id)
    .then( data => {
        if(data){
            res.status(200).json(data)
        }else{
            res.status(400).json({message: 'Invalid ID'})
        }
    })
    .catch(err => {
        res.status(404).json({ message: err.message })
    })
}
// -----------------------------------------------------

const patchProduct = (req, res) =>{

    const id = req.params.id
    const {name, category, price, isAviable} = req.body;
        
    productsControllers.editProduct(id, {name, category, price, isAviable})
    .then( (response) => {
        if(response){
            res.status(200).json({
                message: `Product with id ${id} edited succesfully!`
            })
        }else{
            res.status(400).json({message: 'Invalid ID'})
        }
    })
    .catch(error => {
        res.status(400).json({ message: error.message })
    })
    }
// -----------------------------------------------------

const deleteProduct = (req, res) =>{

    const id = req.params.id
        
    productsControllers.deleteProduct(id)
    .then( (response) => {
        if(response){
            res.status(200).json({
                message: `Product with id ${id} deleted succesfully!`
            })
        }else{
            res.status(400).json({message: 'Invalid ID'})
        }
    })
    .catch(error => {
        res.status(400).json({ message: error.message })
    })
    }
// -----------------------------------------------------

module.exports = {
    getAllProducts,
    postProduct,
    getProductById,
    patchProduct,
    deleteProduct
}