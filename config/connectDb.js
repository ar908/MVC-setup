const mongoose = require('mongoose');
const colors = require('colors');
const { connect } = require('http2');
const connectDb = async () =>{
    mongoose.connect('mongodb+srv://Artipatwa:sejal12345@cluster0.aqa1uwv.mongodb.net/?retryWrites=true&w=majority',
    { useNewUrlParser: true },
    (error) => {
        if (!error) {
            console.log('Successful connection');
        } else {
            console.log('Error while connecting');
        }
    });

    // catch(error){
    //     console.log(`${error}`.bgRed)
    // }
}

module.exports = connectDb;