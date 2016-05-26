'use strict';

app.factory('Auth', function ($http, $rootScope, User) {
  var me = new User();
  $rootScope.isLoggedIn = function () {
    return !!me.id;
  };
  $rootScope.isAdmin = function () {
    return !!me.isAdmin;
  };
  $rootScope.isMe = function (user) {
    return !!user && (me.id == user.id || me == user);
  };
  function toData (response) {
    return response.data;
  }
  function setMe (user) {
    me = new User(user);
    return me;
  }
  function removeMe () {
    me = new User();
    return me;
  } 
  return {
    signup: function (credentials) {
      return $http.post('/auth/signup', credentials)
      .then(toData)
      .then(setMe);
    },
    login: function (credentials) {
      return $http.post('/auth/login', credentials)
      .then(toData)
      .then(setMe);
    },
    logout: function () {
      return $http.delete('/auth/me')
      .then(removeMe);
    },
    refreshMe: function () {
      return $http.get('/auth/me')
      .then(toData)
      .then(setMe);
    }
  };
});
