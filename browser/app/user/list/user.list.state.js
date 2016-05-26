'use strict';

app.config(function ($stateProvider) {
  $stateProvider.state('users', {
    url: '/users',
    templateUrl: '/browser/app/user/list/user.list.html',
    controller: 'UserListCtrl',
    resolve: {
      currentUser: function (Auth) {
        return Auth.refreshMe()
        .then(function (me) {
          if (!me.id) throw Error('Not logged in');
          else return me;
        });
      },
      users: function (User) {
        return User.fetchAll();
      }
    }
  });
});
