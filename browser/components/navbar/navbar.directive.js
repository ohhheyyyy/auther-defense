'use strict';

app.directive('navbar', function (Auth, $state, $location) {
  return {
    restrict: 'E',
    templateUrl: '/browser/components/navbar/navbar.html',
    link: function (scope) {
      scope.pathStartsWithStatePath = function (state) {
        var partial = $state.href(state);
        var path = $location.path();
        return path.startsWith(partial);
      };
      scope.logout = function () {
        return Auth.logout()
        .then(function () {
          $state.go('home');
        });
      }
    }
  }
});
