'use strict';

angular.module('angularTestApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.jsonp('https://archive.org/advancedsearch.php?q=collection%3A%28RailroadEarth%29&fl%5B%5D=avg_rating&fl%5B%5D=title&fl%5B%5D=identifier&fl%5B%5D=format&fl%5B%5D=source&sort%5B%5D=date+desc&sort%5B%5D=&rows=2000&page=1&indent=yes&output=json&callback=JSON_CALLBACK')
      .success(function(data) {
        console.dir(data.response.docs)
        $scope.awesomeThings = data.response.docs;
      });
  });
