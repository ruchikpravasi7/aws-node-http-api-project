
var serverlessSDK = require('./serverless_sdk/index.js');
serverlessSDK = new serverlessSDK({
  orgId: 'ruchikpravasi',
  applicationName: 'aws-node-http-api-project',
  appUid: 'Wv4dKV99pTSDNWgfDL',
  orgUid: '4173eee5-a2d4-49ec-9620-44609c889dd8',
  deploymentUid: 'f63f84ac-9f56-4bd7-a801-87900923c0e4',
  serviceName: 'aws-node-http-api-project',
  shouldLogMeta: true,
  shouldCompressLogs: true,
  disableAwsSpans: false,
  disableHttpSpans: false,
  stageName: 'dev',
  serverlessPlatformStage: 'prod',
  devModeEnabled: false,
  accessKey: null,
  pluginVersion: '6.2.2',
  disableFrameworksInstrumentation: false
});

const handlerWrapperArgs = { functionName: 'aws-node-http-api-project-dev-addTask', timeout: 6 };

try {
  const userHandler = require('./src/addTodo.js');
  module.exports.handler = serverlessSDK.handler(userHandler.handler, handlerWrapperArgs);
} catch (error) {
  module.exports.handler = serverlessSDK.handler(() => { throw error }, handlerWrapperArgs);
}