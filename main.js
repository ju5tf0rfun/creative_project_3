var app = angular.module("myApp", [])
app.controller("myCtrl", mainCtrl)

function mainCtrl($scope, $http){
    $scope.movies = [];
    
    $scope.searchMovies = function(stuff){
        var url = "https://api.themoviedb.org/3/discover/movie?api_key=ba7b6743e0dbfac3faa0607ce7732674&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2018-01-01&primary_release_date.lte=2018-12-31&vote_average.gte=6&with_genres=28";
        $http.get(url).then(function(response){
            $scope.movies = response.data;
        });
    }
}