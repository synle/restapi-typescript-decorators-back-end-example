import {
  RestClient,
  RestApi,
  RequestBody,
  PathParam,
  QueryParams,
  CredentialProperty,
  ApiResponse,
} from 'restapi-typescript-decorators';

@RestClient({
  baseUrl: 'https://httpbin.org',
})
export class PublicApiDataStore {
  @RestApi('/post', {
    method: 'POST',
  })
  doSimpleHttpBinPost(@RequestBody _body): any {}

  @RestApi('/get')
  doSimpleHttpBinGet(@QueryParams _queryParams): any {}

  @RestApi('/anything/{messageId}')
  doSimpleHttpBinPathParamsGet(
    @PathParam('messageId') _targetMessageId: string,
    @QueryParams _queryParams,
  ): any {}
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
  doApiCallWithBearerToken(): any {}
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
  doApiCallWithBasicUsernameAndPassword(): any {}
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
const myApiResponse1 = <ApiResponse>(
  myPrivateBearerAuthApiDataStoreInstance.doApiCallWithBearerToken()
);
myApiResponse1.result.then((resp) => {
  console.log('\n\n\nmyPrivateBearerAuthApiDataStoreInstance.doApiCallWithBearerToken');
  console.log('url', myApiResponse1.url);
  console.log('status', myApiResponse1.status);
  console.log('resp', resp);
});

const myApiResponse2 = <ApiResponse>(
  myPublicApiStoreInstance.doSimpleHttpBinGet({ a: 1, b: 2, c: 3 })
);
myApiResponse2.result.then((resp) => {
  console.log('\n\n\nmyPublicApiStoreInstance.doSimpleHttpBinGet');
  console.log('url', myApiResponse2.url);
  console.log('status', myApiResponse2.status);
  console.log('resp', resp);
});

const myApiResponse3 = <ApiResponse>(
  myPublicApiStoreInstance.doSimpleHttpBinPathParamsGet('message_id_123', {
    aa: 11,
    bb: 22,
    cc: 33,
  })
);
myApiResponse3.result.then((resp) => {
  console.log('\n\n\nmyPublicApiStoreInstance.doSimpleHttpBinPathParamsGet');
  console.log('url', myApiResponse3.url);
  console.log('status', myApiResponse3.status);
  console.log('resp', resp);
});

const myApiResponse4 = <ApiResponse>myPublicApiStoreInstance.doSimpleHttpBinPost({
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

const myApiResponse5 = <ApiResponse>(
  myPrivateBasicAuthApiDataStoreInstance.doApiCallWithBasicUsernameAndPassword()
);
myApiResponse5.result.then((resp) => {
  console.log('\n\nmyPrivateBasicAuthApiDataStoreInstance.doApiCallWithBasicUsernameAndPassword');
  console.log('url', myApiResponse5.url);
  console.log('status', myApiResponse5.status);
  console.log('resp', resp);
});
