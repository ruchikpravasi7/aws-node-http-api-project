const AWS = require("aws-sdk");

const DeleteTodo = async (event) => {
  const dynamoDBClient = new AWS.DynamoDB.DocumentClient();

  const querystring = event.pathParameters;
  const id = querystring.id || null;
  if (id != null) {
    await dynamoDBClient
      .delete({
        TableName: "TaskTable",
        ExpressionAttributeNames: "id = :id",
        ExpressionAttributeValues: { ":id": id },
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Successfully deleted" }),
    };
  } else {
    return {
      statusCode: 404,
      body: JSON.stringify({ message: "No data found" }),
    };
  }
};

module.exports = {
  handler: DeleteTodo,
};
