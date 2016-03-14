dynamodb = require('./../lib/DynamoDB');
var Promise = require('bluebird');



var getAll = function(params) {
    var params = {"test": "test"};

    return new Promise(function(resolve, reject) {
        dynamodb.listTables(params, function(err, data) {
            if (err) {
                console.log(JSON.stringify(err, null, 2));
                reject(err);
            } else {
                console.log(JSON.stringify(data, null, 2));
                resolve(data);
            }
        });
    })
}

module.exports = {
    getAll : getAll
};