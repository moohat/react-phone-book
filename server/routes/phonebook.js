var express = require('express');
var router = express.Router();
const PhoneBook = require('../models/PhonebookModels');


router.get('/', function (req, res, next) {
    PhoneBook.find().then(data => {
      res.status(200).json(data)
    }).catch(() => {
      res.status(401).json({
        message: 'data not found'
      })
    })
  
  });
  
  router.post('/', (req, res, next) => {
  
    const { idUser, name, phone } = req.body;
    let response = {
      status: true,
      message: 'data have been added',
      data: null
    }
    let phoneBook = new PhoneBook({ idUser, name, phone })
  
    phoneBook.save().then(data => {
      res.status(200).json(
        data
      )
    }).catch(err => {
      response.status = false,
        response.message = 'can not add'
    })
  })
  
  
  router.put('/:id', (req, res) => {
  
    console.log('data request >', req.body);
  
    PhoneBook.findOneAndUpdate(
      { idUser: req.params.id },
      { name: req.body.name, phone: req.body.phone }, { new: true }
    ).then(data => {
      res.status(201).json({
        success: true,
        message: 'data have been update',
        data
      })
    }).catch(err => {
      res.status(204).json({
        status: false,
        message: 'updated failed',
      })
    })
  })
  
  
  router.delete('/:id', (req, res) => {
    PhoneBook.findOneAndRemove({
      idUser: req.params.id
    })
      .then(data => {
        console.log('this >>', data)
        res.status(200).json({
          status: 'SUCCESS',
          data
        })
      })
      .catch(err => {
        res.status(401).json({
          status: 'FAILED'
        })
      })
  })
  
  module.exports = router;
  