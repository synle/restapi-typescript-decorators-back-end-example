import {
  RestClient,
  RestApi,
  RequestBody,
  PathParam,
  QueryParams,
  CredentialProperty,
  ApiResponse,
} from 'restapi-typescript-decorators';

export interface HttpBinResponse {
  args?: object;
  headers?: object;
  origin?: string;
  url?: string;
  data?: object;
  json?: string | object;
  form?: object;
}

@RestClient({
  baseUrl: 'https://httpbin.org',
})
export class PublicApiDataStore {
  @RestApi('/post', {
    method: 'POST',
  })
  doSimpleHttpBinPost(@RequestBody _body: any): ApiResponse<HttpBinResponse> {}

  @RestApi('/get')
  doSimpleHttpBinGet(@QueryParams _queryParam: any): ApiResponse<HttpBinResponse> {}

  @RestApi('/anything/{messageId}')
  doSimpleHttpBinPathParamsGet(
    @PathParam('messageId') _targetMessageId: string,
    @QueryParams _queryParams: any,
  ): ApiResponse<HttpBinResponse> {}
}

@RestClient({
  baseUrl: 'https://httpbin.org',
  authType: 'Bearer',
})
export class PrivateBearerAuthApiDataStore {
  @CredentialProperty('AccessToken')
  accessToken: string;

  constructor(newAccessToken: string = '') {
    this.accessToken = newAccessToken;
  }

  @RestApi('/bearer', {
    method: 'GET',
  })
  doApiCallWithBearerToken(): ApiResponse<HttpBinResponse> {}
}

@RestClient({
  baseUrl: 'https://httpbin.org',
  authType: 'Basic',
})
export class PrivateBasicAuthApiDataStore {
  @CredentialProperty('Username')
  username: string;

  @CredentialProperty('Password')
  password: string;

  constructor(newUsername: string = '', newPassword: string = '') {
    this.username = newUsername;
    this.password = newPassword;
  }

  @RestApi('/basic-auth/good_username/good_password', {
    method: 'GET',
  })
  doApiCallWithBasicUsernameAndPassword(): ApiResponse<HttpBinResponse> {}
}

// instantiate the data store
const myPublicApiStoreInstance = new PublicApiDataStore();

const myPrivateBearerAuthApiDataStoreInstance = new PrivateBearerAuthApiDataStore(
  '<<some_strong_and_random_access_token>>',
);

const myPrivateBasicAuthApiDataStoreInstance = new PrivateBasicAuthApiDataStore(
  'good_username',
  'good_password',
);

// begin api calls
const myApiResponse1 = myPrivateBearerAuthApiDataStoreInstance.doApiCallWithBearerToken()
if (myApiResponse1) {
  myApiResponse1.result.then((resp: HttpBinResponse) => {
    console.log('\n\n\nmyPrivateBearerAuthApiDataStoreInstance.doApiCallWithBearerToken');
    console.log('url', myApiResponse1.url);
    console.log('status', myApiResponse1.status);
    console.log('resp', resp);
  });
}

const myApiResponse2 = myPublicApiStoreInstance.doSimpleHttpBinGet({ a: 1, b: 2, c: 3 })
if (myApiResponse2) {
  myApiResponse2.result.then((resp: HttpBinResponse) => {
    console.log('\n\n\nmyPublicApiStoreInstance.doSimpleHttpBinGet');
    console.log('url', myApiResponse2.url);
    console.log('status', myApiResponse2.status);
    console.log('resp', resp);
  });
}

const myApiResponse3 = myPublicApiStoreInstance.doSimpleHttpBinPathParamsGet('message_id_123', {
    aa: 11,
    bb: 22,
    cc: 33,
  })
if (myApiResponse3) {
  myApiResponse3.result.then((resp: HttpBinResponse) => {
    console.log('\n\n\nmyPublicApiStoreInstance.doSimpleHttpBinPathParamsGet');
    console.log('url', myApiResponse3.url);
    console.log('status', myApiResponse3.status);
    console.log('resp', resp);
  });
}

const myApiResponse4 = myPublicApiStoreInstance.doSimpleHttpBinPost({
  d: 4,
  e: 5,
  f: 6,
});
if (myApiResponse4) {
  myApiResponse4.result.then((resp: HttpBinResponse) => {
    console.log('\n\n\nmyPublicApiStoreInstance.doSimpleHttpBinPost');
    console.log('url', myApiResponse4.url);
    console.log('status', myApiResponse4.status);
    console.log('resp', resp);
  });
}

const myApiResponse5 = myPrivateBasicAuthApiDataStoreInstance.doApiCallWithBasicUsernameAndPassword();
if (myApiResponse5) {
  myApiResponse5.result.then((resp: HttpBinResponse) => {
    console.log('\n\nmyPrivateBasicAuthApiDataStoreInstance.doApiCallWithBasicUsernameAndPassword');
    console.log('url', myApiResponse5.url);
    console.log('status', myApiResponse5.status);
    console.log('resp', resp);
  });
}
