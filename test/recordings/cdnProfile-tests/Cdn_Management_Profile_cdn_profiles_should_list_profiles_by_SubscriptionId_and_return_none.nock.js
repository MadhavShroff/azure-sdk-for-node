// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/providers/Microsoft.Cdn/profiles?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'fbb73887-3696-41a2-985c-372ea1602f32',
  'x-ms-client-request-id': '0e8c7405-c658-4f6b-a2f6-86f5ca8c8217',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'ef234fcf-97dd-469e-b37d-b97f46bf3ab9',
  'x-ms-routing-request-id': 'WESTUS:20160511T223637Z:ef234fcf-97dd-469e-b37d-b97f46bf3ab9',
  date: 'Wed, 11 May 2016 22:36:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/providers/Microsoft.Cdn/profiles?api-version=2016-04-02')
  .reply(200, "{\r\n  \"value\":[\r\n    \r\n  ]\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '28',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'fbb73887-3696-41a2-985c-372ea1602f32',
  'x-ms-client-request-id': '0e8c7405-c658-4f6b-a2f6-86f5ca8c8217',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': 'ef234fcf-97dd-469e-b37d-b97f46bf3ab9',
  'x-ms-routing-request-id': 'WESTUS:20160511T223637Z:ef234fcf-97dd-469e-b37d-b97f46bf3ab9',
  date: 'Wed, 11 May 2016 22:36:36 GMT',
  connection: 'close' });
 return result; }]];