const AWS = require("aws-sdk");

const FetchTodo = async (event) => {
  const dynamoDBClient = new AWS.DynamoDB.DocumentClient();
  let tasks;
  try {
    let meth = await dynamoDBClient
      .scan({
        TableName: "TaskTable",
      })
      .promise();
    tasks = meth.Items;
  } catch (e) {
    console.log(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(tasks),
  };
};

module.exports = {
  handler: FetchTodo,
};
