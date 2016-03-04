# errorable-admin [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> admin errors for errorable

## Installation

```sh
$ npm install --save errorable-admin
```

## Usage

```js
var errorable = require('errorable');
var errorableAdmin = require('errorable-admin');
var Generator = errorable.Generator;
var cnErrors = new Generator(errorableAdmin, 'zh-CN').errors;
var enUsErrors = new Generator(errorableAdmin, 'en-US').errors;

// AdminNotFound
// AdminNotLoggedIn
// AdminExisted
// AdministratorNotFound
// AdministratorNotLoggedIn
// AdministratorExisted
```
## License

MIT © [calidion](calidion.github.io)


[npm-image]: https://badge.fury.io/js/errorable-admin.svg
[npm-url]: https://npmjs.org/package/errorable-admin
[travis-image]: https://travis-ci.org/Errorable/administrator.svg?branch=master
[travis-url]: https://travis-ci.org/Errorable/administrator
[daviddm-image]: https://david-dm.org/Errorable/administrator.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/Errorable/administrator
[coveralls-image]: https://coveralls.io/repos/Errorable/administrator/badge.svg
[coveralls-url]: https://coveralls.io/r/Errorable/administrator
