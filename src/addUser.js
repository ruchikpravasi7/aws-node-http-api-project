const { v4 } = require("uuid");
const AWS = require("aws-sdk");

const AddUser = async (event) => {
  //   const dynamoDBClient = new AWS.DynamoDB.DocumentClient();
  //   let id = v4();
  //   let { name, email } = JSON.parse(event.body);
  //   let req = {
  //     id,
  //     name,
  //     email,
  //   };
  //   console.log(req);
  //   try {
  //     await dynamoDBClient
  //       .put({
  //         TableName: "UserTable",
  //         Item: req,
  //       })
  //       .promise();
  //     return {
  //       statusCode: 200,
  //       body: JSON.stringify(req),
  //     };
  //   } catch (e) {
  //     return {
  //       statusCode: 200,
  //       body: JSON.stringify({}),
  //     };
  //   }
};

module.exports = {
  handler: AddUser,
};
