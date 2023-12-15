'use strict';

var dbm;
var type;
var seed;
var fs = require('fs');
var path = require('path');
var Promise;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
  Promise = options.Promise;
};

exports.up = function(db) {

// Array of additional SQL files to include
const additionalFiles = [
  '001_create_table.sql',
  '002_add_columns.sql',
  // Add more file names as needed
];


// Read and run the main migration SQL file
const mainFilePath = path.join(__dirname, 'sqls', '20231213173558-initialize-up.sql');
return new Promise(function (resolve, reject) {
  fs.readFile(mainFilePath, { encoding: 'utf-8' }, function (err, data) {
    if (err) return reject(err);
    console.log('received data from main file: ' + data);

    resolve(data);
  });
})
  .then(function (data) {
    // Run the main migration SQL
    return db.runSql(data);
  })
  .then(function () {
    // Read and run additional SQL files
    const additionalPromises = additionalFiles.map(function (fileName) {
      const filePath = path.join(__dirname, 'sqls', fileName);
      return new Promise(function (resolve, reject) {
        fs.readFile(filePath, { encoding: 'utf-8' }, function (err, additionalData) {
          if (err) return reject(err);
          console.log('received data from additional file ' + fileName + ': ' + additionalData);

          resolve(additionalData);
        });
      }).then(function (additionalData) {
        return db.runSql(additionalData);
      });
    });

    return Promise.all(additionalPromises);
  });
};

exports.down = function(db) {
  var filePath = path.join(__dirname, 'sqls', '20231213173558-initialize-down.sql');
  return new Promise( function( resolve, reject ) {
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err,data){
      if (err) return reject(err);
      console.log('received data: ' + data);

      resolve(data);
    });
  })
  .then(function(data) {
    return db.runSql(data);
  });
};

exports._meta = {
  "version": 1
};
