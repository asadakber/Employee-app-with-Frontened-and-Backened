const mongoose = require('mongoose');

mongoose.connect('mongodb://admin:admin123@ds147534.mlab.com:47534/employee', (err) => {
    if(!err) 
        console.log('MongoDB connection succeeded');
    else 
        console.log('Error in DB connection: ' + JSON.stringify(err, undefined, 2));
});

module.exports = mongoose