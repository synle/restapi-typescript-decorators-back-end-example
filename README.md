# restapi-typescript-decorators-example
Sample code that uses and tests the decorator code in restapi-typescript-decorators (https://github.com/synle/restapi-typescript-decorators)

## to install the lib from npm
```
npm i --save restapi-typescript-decorators
```

## to run the sample code
```
npm test
```

or
```
npm run build
node build build/test.js
```


## sample code
```
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

const myPublicApiStoreInstance = new PublicApiDataStore();

const myApiResponse1 = <ApiResponse>(
  myPrivateBearerAuthApiDataStoreInstance.doApiCallWithBearerToken()
);
myApiResponse1.result.then((resp) => {
  console.log('\n\n\nmyPrivateBearerAuthApiDataStoreInstance.doApiCallWithBearerToken');
  console.log('url', myApiResponse1.url);
  console.log('status', myApiResponse1.status);
  console.log('resp', resp);
});
```

## sample output
```
> restapi-typescript-decorators-example@2.0.0 test /mnt/d/_git/restapi-typescript-decorators-example
> npx ts-node test.ts

npx: installed 8 in 2.232s



myPrivateBearerAuthApiDataStoreInstance.doApiCallWithBearerToken
url https://httpbin.org/bearer
status 200
resp {
  authenticated: true,
  token: '<<some_strong_and_random_access_token>>'
}



myPublicApiStoreInstance.doSimpleHttpBinPost
url https://httpbin.org/post
status 200
resp {
  args: {},
  data: '{"d":4,"e":5,"f":6}',
  files: {},
  form: {},
  headers: {
    Accept: 'application/json',
    'Accept-Encoding': 'gzip,deflate',
    'Content-Length': '19',
    'Content-Type': 'application/json',
    Host: 'httpbin.org',
    'User-Agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
    'X-Amzn-Trace-Id': 'Root=1-5f0b9e52-ea92472c1d8d301a196d370f'
  },
  json: { d: 4, e: 5, f: 6 },
  origin: '127.0.0.1',
  url: 'https://httpbin.org/post'
}



myPublicApiStoreInstance.doSimpleHttpBinPathParamsGet
url https://httpbin.org/anything/message_id_123?aa=11&bb=22&cc=33
status 200
resp {
  args: { aa: '11', bb: '22', cc: '33' },
  data: '',
  files: {},
  form: {},
  headers: {
    Accept: 'application/json',
    'Accept-Encoding': 'gzip,deflate',
    'Content-Type': 'application/json',
    Host: 'httpbin.org',
    'User-Agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
    'X-Amzn-Trace-Id': 'Root=1-5f0b9e52-cc1d815714490c8cedb68728'
  },
  json: null,
  method: 'GET',
  origin: '127.0.0.1',
  url: 'https://httpbin.org/anything/message_id_123?aa=11&bb=22&cc=33'
}


myPrivateBasicAuthApiDataStoreInstance.doApiCallWithBasicUsernameAndPassword
url https://httpbin.org/basic-auth/good_username/good_password
status 200
resp { authenticated: true, user: 'good_username' }



myPublicApiStoreInstance.doSimpleHttpBinGet
url https://httpbin.org/get?a=1&b=2&c=3
status 200
resp {
  args: { a: '1', b: '2', c: '3' },
  headers: {
    Accept: 'application/json',
    'Accept-Encoding': 'gzip,deflate',
    'Content-Type': 'application/json',
    Host: 'httpbin.org',
    'User-Agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
    'X-Amzn-Trace-Id': 'Root=1-5f0b9e53-d3951398f702e5ecbc82675c'
  },
  origin: '127.0.0.1',
  url: 'https://httpbin.org/get?a=1&b=2&c=3'
}
```
