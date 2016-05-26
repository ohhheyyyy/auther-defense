'use strict';

app.controller('UserDetailCtrl', function ($scope, user, Story, $state, Auth) {
  $scope.user = user;
  $scope.newStory = new Story({author_id: $scope.user.id});
  $scope.addStory = function () {
    $scope.newStory.save()
    .then(function (story) {
      $scope.newStory = new Story({author_id: $scope.user.id});
      $scope.user.stories.unshift(story);
    });
  };
  $scope.removeStory = function (story) {
    story.destroy()
    .then(function () {
      var idx = $scope.user.stories.indexOf(story);
      $scope.user.stories.splice(idx, 1);
    });
  };
  $scope.gotoUserList = function () {
    Auth.refreshMe();
    $state.go('users');
  };
});
