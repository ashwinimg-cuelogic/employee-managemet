dynamodb = require('./DynamoDB');

var params = {
    TableName: "EmployeeTest",
    AttributeDefinitions:[
        {AttributeName: "Type", AttributeType: "S"},
        {AttributeName: "Experience", AttributeType: "N"}
    ],
    GlobalSecondaryIndexUpdates: [
        {
            Create: {
                IndexName: "EmployeeAndExperienceIndex",
                KeySchema: [
                    {AttributeName: "Type", KeyType: "HASH"},  //Partition key
                    {AttributeName: "Experience", KeyType: "RANGE"},  //Sort key
                ],
                Projection: {
                    "ProjectionType": "ALL"
                },
                ProvisionedThroughput: {
                    "ReadCapacityUnits": 1,"WriteCapacityUnits": 1
                }
            }
        }
    ]
};

dynamodb.updateTable(params, function(err, data) {
    if (err)
        console.log(JSON.stringify(err, null, 2));
    else
        console.log(JSON.stringify(data, null, 2));
});

