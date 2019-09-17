/* Add all the required libraries*/
var mongoose= require('mongoose');
var config= require('./config');
var listings= require('./ListingSchema');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, {useNewUrlParser: true});

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */

  listings.find({name: 'Library West'}, function(err, data){
    if(err){
      throw err;
    }
    console.log("Libary West found in database");
    console.log(data);
  });
};

var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  listings.findOneAndRemove({code: 'CABL'}, function(err, data){
    if(err){
      throw err;
    }
    console.log("CABL removed");
    console.log(data);
  });
};

var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
  listings.findOneAndUpdate({code: 'PHL'},
  {address: '1953 Museum Rd, Gainesville, FL 32603', latitude: 29.6446, longitude: -82.3489},
   function(err, data){
    if(err){
      throw err;
    }
    console.log("Phelps lab updated");
    console.log(data);
  });
};

var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  listings.find({}, function(err, data){
    if(err){
      throw err;
    }
    console.log("All listings: ");
    console.log(data.length + ' items found ');
    console.log(data);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
