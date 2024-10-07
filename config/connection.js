// //conection of mongodb

// const mongoClient = require('mongodb').MongoClient;

// //initally db data is null thats why create null value
// const state={
//     db:null
// }

// module.exports.connect = function(done){
//     const url = 'mongodb://localhost:27017'
//     const dbname = 'shopimgcart'


//     mongoClient.connect(url,(err,data)=>{
//         if(err) return done(err) // incase no data show error 
//         state.db=data.db(dbname) // if the data is insert the data must be show in the  


//         done()
        
//     })

// }
// module.exports.get = function(){ // to get the insert data to the client side 
//     return state.db
// }



// new method

const mongoose = require('mongoose');

// initially db data is null, that's why create null value
const state = {
    db: null
};

module.exports.connect = function(done) {
    const url = 'mongodb://localhost:27017/shopimgcart'; // the databse and port creation !

    mongoose.connect(url)   // if the databse connect the shopimgcart db is connected
        .then(() => {
            state.db = mongoose.connection.db;
            done();
        })
        .catch((err) => {  // incase db not connected the error must be occured
            done(err);
        });
};

module.exports.get = function() { // to get the inserted data to the client side
    return state.db;
};
