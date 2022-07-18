const mongoose = require("mongoose");


const carSchema = mongoose.Schema({

    Name : {
        type: String,
        required: true
    },
    Miles_per_Gallon: {
        type: Number,
        required: true
    },
    Cylinders: {
        type: Number,
        required: true
    },
    Displacement: {
        type: Number,
        required: true
    },
    Horsepower : {
        type: Number,
        required: true
    },
    Weight_in_lbs :{
        type: Number,
        required: true
    },
    Acceleration: {
        type: Number,
        required: true
    },
    Year :{
        type: String,
        required: true
    },
    Origin : {
        type: String,
        required: true
    }
},{
        timestamps: true,
    }

)

const carModel = mongoose.model('cars', carSchema);

module.exports = carModel;
