const Mongoose = require('mongoose');

const xlSchema = {
    'Name of the Candidate': String,
    'Email': {
        type: String,
        unique: true,
    },
    'Mobile No.': Number,
    'Date of Birth': Date,
    'Work Experience': String,
    'Resume Title': String,
    'Current Location': String,
    'Postal Address': String,
    'Current Employer': String,
    'Current Designation': String,
};

const Excels = Mongoose.model('Excels', xlSchema);


module.exports = Excels;