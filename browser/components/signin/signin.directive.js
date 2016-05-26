'use strict';

app.directive('signin', function () {
  return {
    scope: {
      userInfo: '=',
      text: '@',
      submit: '&'
    },
    templateUrl: '/browser/components/signin/signin.html'
  }
});
