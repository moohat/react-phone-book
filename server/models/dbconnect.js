// Using Node.js `require()`
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/phonebookdb', {
    // useCreateIndex: true, //membuat 
    useNewUrlParser: true
});