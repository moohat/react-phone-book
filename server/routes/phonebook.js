var express = require('express');
var router = express.Router();
const Phonebook = require('../models/PhonebookModels');



/* GET phonebook page. */
router.get('/', function (req, res, next) {
    //dengan callback
    Phonebook.find().then(data => {
        res.status(200).json(data)
    }).catch(() => {
        console.log('data not found');
        res.status(401).json({
            message: ' data not found'
        });
    });
});

//using save

// router.post('/add', function (req, res) {
//     const { idUser, name, phone } = req.body; 

//     let response = {
//         status: true,
//         message: 'success add data',
//         data: null,
//     }
//      let telp = new Phonebook({idUser, name, phone});

//      telp.save().then(data =>{
//          res.message;
//         res.status(201).json(data)
//      }).catch((err) => {
//          //error handling
//          res.status = false,
//          response.message = 'add data failed'
//         // res.send(err);
//     });

// });


//using create
router.post('/', function (req, res) {
    let idUser = Date.now();
    const { /* idUser, */ name, phone } = req.body;
    Phonebook.create({
        idUser: idUser,
        name: name,
        phone: phone
    }).then((data) => {
        res.status(201).json({
            status: 'SUCCESS',
            // data ==> jika ingin ditampilkan data tertentu saja, pake cara dibawah      
            data: {
                id: data.idUser,
                name: data.name,
                phone: data.phone
            }
        })
    }).catch((err) => {
        res.send(err);
        res.message = 'data failed'
    })
});

// edit
router.put('/:idUser', (req, res, next) => {
    Phonebook.findOneAndUpdate(req.params.idUser, {
        idUser: req.body.idUser,
        name: req.body.name,
        phone: req.body.phone
    }, { new: true },
        (err, data) => {
            if (err) return res.send(err)
            res.status(201).json({
                status: 'SUCCESS',
                data: {
                    id: data.idUser,
                    name: data.name,
                    phone: data.phone
                }
            })
        })
});

router.delete('/:idUser', function (req, res) {
    test = req.params.idUser;
    console.log(test);

    Phonebook.findOneAndRemove({ idUser: req.params.idUser }).then((data) => {
        res.status(201).json({
            status: 'SUCCESS',
            data: {
                id: data.idUser,
                name: data.name,
                phone: data.phone
            }
        })
    })
})

module.exports = router;