const AWS = require("aws-sdk");

const FetchTodoByID = async (event) => {
  // const dynamoDBClient = new AWS.DynamoDB.DocumentClient();
  // let tasks;
  // const querystring = event.pathParameters;
  // const id = querystring.id || null;
  // if (id != null) {
  //   try {
  //     let meth = await dynamoDBClient
  //       .scan({
  //         TableName: "TaskTable",
  //         FilterExpression: "id = :id",
  //         ExpressionAttributeValues: { ":id": id },
  //       })
  //       .promise();
  //     tasks = meth.Items;
  //   } catch (e) {
  //     console.log(e);
  //   }
  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify(tasks),
  //   };
  // } else {
  //   return {
  //     statusCode: 404,
  //     body: JSON.stringify("No ID found"),
  //   };
  // }
};

module.exports = {
  handler: FetchTodoByID,
};
