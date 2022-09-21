const AWS = require("aws-sdk");

const EditTodo = async (event) => {
  // const dynamoDBClient = new AWS.DynamoDB.DocumentClient();
  // let { id, task, completed } = JSON.parse(event.body);
  // let req = {
  //   task,
  //   completed,
  // };
  // try {
  //   await dynamoDBClient
  //     .update({
  //       TableName: "TaskTable",
  //       Key: { id },
  //       UpdateExpression: "set #task = :x, #completed = :y",
  //       ExpressionAttributeNames: {
  //         "#task": "task",
  //         "#completed": "completed",
  //       },
  //       ExpressionAttributeValues: {
  //         ":x": task,
  //         ":y": completed,
  //       },
  //     })
  //     .promise();
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(req),
  //   };
  // } catch (e) {
  //   console.log(e);
  //   return {
  //     statusCode: 400,
  //     body: JSON.stringify({}),
  //   };
  // }
};

module.exports = {
  handler: EditTodo,
};
