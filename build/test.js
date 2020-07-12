'use strict';
var __decorate =
  (this && this.__decorate) ||
  function(decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function(k, v) {
    if (typeof Reflect === 'object' && typeof Reflect.metadata === 'function')
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function(paramIndex, decorator) {
    return function(target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.PrivateApiDataStore = exports.PublicApiDataStore = void 0;
const restapi_typescript_decorators_1 = require('restapi-typescript-decorators');
let PublicApiDataStore = class PublicApiDataStore {
  doSimpleHttpBinPost(_body) {}
  doSimpleHttpBinGet(_queryParams) {}
  doSimpleHttpBinPathParamsGet(_targetMessageId, _queryParams) {}
};
__decorate(
  [
    restapi_typescript_decorators_1.RestApi('/post', {
      method: 'POST',
    }),
    __param(0, restapi_typescript_decorators_1.RequestBody),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', Object),
  ],
  PublicApiDataStore.prototype,
  'doSimpleHttpBinPost',
  null,
);
__decorate(
  [
    restapi_typescript_decorators_1.RestApi('/get'),
    __param(0, restapi_typescript_decorators_1.QueryParams),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [Object]),
    __metadata('design:returntype', Object),
  ],
  PublicApiDataStore.prototype,
  'doSimpleHttpBinGet',
  null,
);
__decorate(
  [
    restapi_typescript_decorators_1.RestApi('/anything/{messageId}'),
    __param(0, restapi_typescript_decorators_1.PathParam('messageId')),
    __param(1, restapi_typescript_decorators_1.QueryParams),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', [String, Object]),
    __metadata('design:returntype', Object),
  ],
  PublicApiDataStore.prototype,
  'doSimpleHttpBinPathParamsGet',
  null,
);
PublicApiDataStore = __decorate(
  [
    restapi_typescript_decorators_1.RestClient({
      baseUrl: 'https://httpbin.org',
    }),
  ],
  PublicApiDataStore,
);
exports.PublicApiDataStore = PublicApiDataStore;
let PrivateApiDataStore = class PrivateApiDataStore {
  constructor(newAccessToken = '') {
    this.accessToken = newAccessToken;
  }
  doApiCallWithBearerToken() {}
};
__decorate(
  [restapi_typescript_decorators_1.CredentialProperty, __metadata('design:type', String)],
  PrivateApiDataStore.prototype,
  'accessToken',
  void 0,
);
__decorate(
  [
    restapi_typescript_decorators_1.RestApi('/bearer', {
      method: 'GET',
    }),
    __metadata('design:type', Function),
    __metadata('design:paramtypes', []),
    __metadata('design:returntype', Object),
  ],
  PrivateApiDataStore.prototype,
  'doApiCallWithBearerToken',
  null,
);
PrivateApiDataStore = __decorate(
  [
    restapi_typescript_decorators_1.RestClient({
      baseUrl: 'https://httpbin.org',
      authType: 'Bearer',
    }),
    __metadata('design:paramtypes', [String]),
  ],
  PrivateApiDataStore,
);
exports.PrivateApiDataStore = PrivateApiDataStore;
// instantiate the data store
const myPublicApiStoreInstance = new PublicApiDataStore();
const testAccessToken = '<<some_strong_and_random_access_token>>';
const myPrivateApiDataStoreInstance = new PrivateApiDataStore(testAccessToken);
// begin api calls
const myApiResponse1 = myPrivateApiDataStoreInstance.doApiCallWithBearerToken();
myApiResponse1.result.then((resp) => {
  console.log('\n\n\nmyPrivateApiDataStoreInstance.doApiCallWithBearerToken');
  console.log('url', myApiResponse1.url);
  console.log('status', myApiResponse1.status);
  console.log('resp', resp);
});
const myApiResponse2 = myPublicApiStoreInstance.doSimpleHttpBinGet({ a: 1, b: 2, c: 3 });
myApiResponse2.result.then((resp) => {
  console.log('\n\n\nmyPublicApiStoreInstance.doSimpleHttpBinGet');
  console.log('url', myApiResponse2.url);
  console.log('status', myApiResponse2.status);
  console.log('resp', resp);
});
const myApiResponse3 = myPublicApiStoreInstance.doSimpleHttpBinPathParamsGet('message_id_123', {
  aa: 11,
  bb: 22,
  cc: 33,
});
myApiResponse3.result.then((resp) => {
  console.log('\n\n\nmyPublicApiStoreInstance.doSimpleHttpBinPathParamsGet');
  console.log('url', myApiResponse3.url);
  console.log('status', myApiResponse3.status);
  console.log('resp', resp);
});
const myApiResponse4 = myPublicApiStoreInstance.doSimpleHttpBinPost({
  d: 4,
  e: 5,
  f: 6,
});
myApiResponse4.result.then((resp) => {
  console.log('\n\n\nmyPublicApiStoreInstance.doSimpleHttpBinPost');
  console.log('url', myApiResponse4.url);
  console.log('status', myApiResponse4.status);
  console.log('resp', resp);
});
//# sourceMappingURL=test.js.map
