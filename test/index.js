'use strict';

var assert = require('assert');
var errorableAdmin = require('../lib');
var errorable = require('errorable');
var Generator = errorable.Generator;
var cnErrors = new Generator(errorableUser, 'zh-CN').errors;
var enUsErrors = new Generator(errorableUser, 'en-US').errors;

var errorCount = 0;

for (var k in cnErrors) {
  if (cnErrors[k] instanceof Object) {
    console.log(cnErrors[k]);
    errorCount++;
  }
}

describe('errorable-admin', function () {
  it('should have administrator errors in zh-CN!', function () {
    var count = 0;
    var errors = {
      UserNotFound: '用户未找到！',
      UserNotLoggedIn: '用户未登录！',
      UserExisted: '用户已经存在！',
      UserNotFound: '用户未找到！',
      UserNotLoggedIn: '用户未登录！',
      UserExisted: '用户已经存在！'
    };
    console.log(errors);
    for (var k in errors) {
      if (typeof errors[k] === 'string') {
        assert.equal(true, cnErrors[k].message === errors[k]);
        count++;
      }
    }
    assert.equal(errorCount, count);
  });

  it('should have administrator errors in en-US!', function () {
    var count = 0;
    var errors = {
      UserNotFound: 'User Not Found!',
      UserNotLoggedIn: 'User Not Logged In!',
      UserExisted: 'User Existed!',
      UserNotFound: 'User Not Found!',
      UserNotLoggedIn: 'User Not Logged In!',
      UserExisted: 'User Existed!'
    };

    for (var k in errors) {
      if (typeof errors[k] === 'string') {
        assert.equal(true, enUsErrors[k].message === errors[k]);
        count++;
      }
    }
    assert.equal(errorCount, count);
  });
});
