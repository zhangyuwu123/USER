'use strict';

var assert = require('assert');
var errorableAdmin = require('../lib');
var errorable = require('errorable');
var Generator = errorable.Generator;
var cnErrors = new Generator(errorableAdmin, 'zh-CN').errors;
var enUsErrors = new Generator(errorableAdmin, 'en-US').errors;

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
      AdminNotFound: '管理员未找到！',
      AdminNotLoggedIn: '管理员未登录！',
      AdminExisted: '管理员已经存在！',
      AdministratorNotFound: '管理员未找到！',
      AdministratorNotLoggedIn: '管理员未登录！',
      AdministratorExisted: '管理员已经存在！'
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
      AdminNotFound: 'Administrator Not Found!',
      AdminNotLoggedIn: 'Administrator Not Logged In!',
      AdminExisted: 'Administrator Existed!',
      AdministratorNotFound: 'Administrator Not Found!',
      AdministratorNotLoggedIn: 'Administrator Not Logged In!',
      AdministratorExisted: 'Administrator Existed!'
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
