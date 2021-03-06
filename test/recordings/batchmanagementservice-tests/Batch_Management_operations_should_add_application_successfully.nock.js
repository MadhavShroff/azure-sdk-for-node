// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'japaneast';
  process.env['AZURE_AUTOSTORAGE'] = 'nodesdkteststorage';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id?api-version=2019-08-01', '*')
  .reply(200, "{\"type\":\"Microsoft.Batch/batchAccounts/applications\",\"id\":\"/subscriptions/f30ef677-64a9-4768-934f-5fbbc0e1ad27/resourceGroups/default-azurebatch-japaneast/providers/Microsoft.Batch/batchAccounts/batchtestnodesdk/applications/my_application_id\",\"name\":\"my_application_id\",\"etag\":\"W/\\\"0x8D719D74DFD6121\\\"\",\"properties\":{\"displayName\":\"my_application_name\",\"allowUpdates\":true}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '375',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'last-modified': 'Mon, 05 Aug 2019 19:01:21 GMT',
  etag: 'W/"0x8D719D74DFD6121"',
  'x-ms-correlation-request-id': 'b2af2fad-a244-49e8-bc84-815d968fd0d2',
  'x-ms-request-id': 'b1ab181d-e7fa-4b2f-97d6-ca80bca4c4e1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  'x-ms-ratelimit-remaining-subscription-writes': '1197',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-routing-request-id':
   'WESTUS:20190805T190121Z:b2af2fad-a244-49e8-bc84-815d968fd0d2',
  date: 'Mon, 05 Aug 2019 19:01:21 GMT',
  connection: 'close' });
 return result; }]];