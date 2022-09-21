"use strict";

const AWS = require("aws-sdk");
let dynamo = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = "DynamoDBTable";

module.exports.saveItem = async (item) => {
  try {
    await dynamo
      .put({
        TableName: TABLE_NAME,
        Item: item,
      })
      .promise();
    return {
      statusCode: 200,
      body: JSON.stringify(item),
    };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};

module.exports.queryIndex = async (primaryKey, primaryKeyName) => {
  const params = {
    TableName: TABLE_NAME,
    IndexName: "taskId",
    KeyConditionExpression: `${primaryKeyName}  = :HprimaryKey`,
    ExpressionAttributeValues: {
      ":HprimaryKey": primaryKey,
    },
  };

  try {
    return dynamo
      .query(params)
      .promise()
      .then((result) => {
        return result.Items;
      });
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: JSON.stringify(e),
    };
  }
};
