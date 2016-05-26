'use strict';

app.controller('SignupCtrl', function ($scope, Auth, $state) {
  $scope.signupUser = function (credentials) {
    Auth.signup(credentials)
    .then(function (loggedinUser) {
      $state.go('user', {id: loggedinUser.id});
    });
  };
});
