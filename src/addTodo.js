const { v4 } = require("uuid");
const AWS = require("aws-sdk");
const dynamodbManager = require("../db/dbManager");

// const AddTodo = async (event) => {
//   const dynamoDBClient = new AWS.DynamoDB.DocumentClient();

//   let id = v4();
//   let { task, userId } = JSON.parse(event.body);
//   let createdAt = new Date().toISOString();
//   let req = {
//     id,
//     userId,
//     task,
//     createdAt,
//     completed: false,
//   };

// try {
//   await dynamoDBClient
//     .put({
//       TableName: "TaskTable",
//       Item: req,
//     })
//     .promise();
//   return {
//     statusCode: 200,
//     body: JSON.stringify(req),
//   };
// } catch (e) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({}),
//   };
// }
// };

module.exports.AddTodo = async (event) => {
  console.log("addNewTodo");
  let id = v4();
  let { task, userId } = JSON.parse(event.body);
  let createdAt = new Date().toISOString();
  let req = {
    taskId: id,
    userId,
    task,
    createdAt,
    completed: false,
  };
  console.log(req);
  const result = await dynamodbManager.saveItem(req);

  return {
    statusCode: 200,
    body: JSON.stringify(result),
    headers: {},
  };
};

module.exports.TodoByUserId = async (event) => {
  const userId = event.pathParameters.userId;
  console.log(userId);
  const propertiesFromDynamoDB = await dynamodbManager.queryIndex(
    userId,
    "userId"
  );
  return {
    statusCode: 200,
    body: JSON.stringify(propertiesFromDynamoDB),
    headers: {},
  };
};
