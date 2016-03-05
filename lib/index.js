'use strict';

module.exports = {
  User: {
    Not: {
      Found: {
        messages: {
          'en-US': 'User Not Found!',
          'zh-CN': '用户未找到！'
        }
      },
      Logged: {
        In: {
          messages: {
            'en-US': 'User Not Logged In!',
            'zh-CN': '用户未登录！'
          }
        }
      }
    },
    Existed: {
      messages: {
        'en-US': 'User Existed!',
        'zh-CN': '用户已经存在！'
      }
    }
  },
  User: {
    alias: 'User'
  }
};
