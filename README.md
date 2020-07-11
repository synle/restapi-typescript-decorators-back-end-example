# restapi-typescript-decorators-example
Sample code that uses and tests the decorator code in restapi-typescript-decorators (https://github.com/synle/restapi-typescript-decorators)


## sample output
```
>>> npm run test

> restapi-typescript-decorators-example@1.0.0 test /mnt/d/_git/restapi-typescript-decorators-example
> npx ts-node test.ts

npx: installed 8 in 2s
HttpBinDataStore.doSimpleHttpBinGet 200 {
  args: { a: '1', b: '2', c: '3' },
  headers: {
    Accept: 'application/json',
    'Accept-Encoding': 'gzip,deflate',
    'Content-Type': 'application/json',
    Host: 'httpbin.org',
    'User-Agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
    'X-Amzn-Trace-Id': 'Root=1-5f0a41ff-d48ddd0a44d3d37c9e2ccfc6'
  },
  origin: '127.0.0.1',
  url: 'https://httpbin.org/get?a=1&b=2&c=3'
}
HttpBinDataStore.doSimpleHttpBinPost 200 {
  args: {},
  data: '{"a":1,"b":2,"c":3}',
  files: {},
  form: {},
  headers: {
    Accept: 'application/json',
    'Accept-Encoding': 'gzip,deflate',
    'Content-Length': '19',
    'Content-Type': 'application/json',
    Host: 'httpbin.org',
    'User-Agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
    'X-Amzn-Trace-Id': 'Root=1-5f0a41ff-70544ad46ff8c2c731f6c146'
  },
  json: { a: 1, b: 2, c: 3 },
  origin: '127.0.0.1',
  url: 'https://httpbin.org/post'
}
HttpBinDataStore.doSimpleHttpBinPathParamsGet 200 {
  args: { aa: '1', bb: '2', cc: '3' },
  data: '',
  files: {},
  form: {},
  headers: {
    Accept: 'application/json',
    'Accept-Encoding': 'gzip,deflate',
    'Content-Type': 'application/json',
    Host: 'httpbin.org',
    'User-Agent': 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)',
    'X-Amzn-Trace-Id': 'Root=1-5f0a41ff-c8a3d2a4e35b23d2da32eb7c'
  },
  json: null,
  method: 'GET',
  origin: '127.0.0.1',
  url: 'https://httpbin.org/anything/secret_message_id_123?aa=1&bb=2&cc=3'
}
```
