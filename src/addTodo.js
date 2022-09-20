const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const AddTodo = async (event) => {
  const dynamoDBClient = new AWS.DynamoDB.DocumentClient();

  let id = v4();
  let { task } = JSON.parse(event.body);
  let createdAt = new Date().toISOString();
  let req = {
    id,
    task,
    createdAt,
    completed: false,
  };

  try {
    await dynamoDBClient
      .put({
        TableName: "TaskTable",
        Item: req,
      })
      .promise();
    return {
      statusCode: 200,
      body: JSON.stringify(req),
    };
  } catch (e) {
    return {
      statusCode: 200,
      body: JSON.stringify({}),
    };
  }
};

module.exports = {
  handler: AddTodo,
};
