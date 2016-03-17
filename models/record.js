const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model( 'Record', new Schema({
    name: String,
    url: String
},
    {
    timestamps: true
    })
);







//const Record = new Schema({
//
//    id: {
//        type: String,
//        require: true
//    },
//
//    name: {
//        type: String,
//        require: true
//    },
//
//    url: {
//        type: String,
//        require: true
//    }
//
//});

//module.exports = mongoose.model( 'Record', Record );




