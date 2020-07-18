var createCompoundIndex = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('users');
    // Create the index
    collection.ensureIndex(
        "email", function(err, result){
            console.log(result);
      callback(result);
        });
  };