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
[travis-image]: https://travis-ci.org/calidion/errorable-admin.svg?branch=master
[travis-url]: https://travis-ci.org/calidion/errorable-admin
[daviddm-image]: https://david-dm.org/calidion/errorable-admin.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/calidion/errorable-admin
[coveralls-image]: https://coveralls.io/repos/calidion/errorable-admin/badge.svg
[coveralls-url]: https://coveralls.io/r/calidion/errorable-admin
