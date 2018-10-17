var app = angular.module("myApp", [])
app.controller("mainCtrl", mainCtrl)
app.directive("movie", movieDirective);

function mainCtrl($scope, $http){
    alert("enetered mainCtrl!");
    $scope.movies = [];
    $scope.movies.genre="12";
    $scope.movies.rating="all"; //initial values set, but doesn't seem to be working

    $scope.Update = function(form){
        /*alert("called Update!!" + form.rating + form.genre); 
        $scope.movies.push({
            rating: form.rating,
            genre: form.genre
        });
        */
        var url = "https://api.themoviedb.org/3/discover/movie?api_key=ba7b6743e0dbfac3faa0607ce7732674&language=en-US&sort_by=popularity.desc&page=1&";
        
        var startDate = form.fromyear + "-01-01";
        var endDate = form.toyear + "-12-31";
        var dateQuery = "&primary_release_date.gte=" + startDate + "&primary_release_date.lte=" + endDate;
        
        var genreQuery = "&with_genres=" + form.genre;

        var completeUrl = url + dateQuery + genreQuery;
        $http.get(completeUrl).then(function(response){
            $scope.movies = response.data;
            console.log(response.data);
        });

    }

    /*$scope.searchMovies = function(stuff){
        var url = "https://api.themoviedb.org/3/discover/movie?api_key=ba7b6743e0dbfac3faa0607ce7732674&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2018-01-01&primary_release_date.lte=2018-12-31&vote_average.gte=6&with_genres=28";
        $http.get(url).then(function(response){
            $scope.movies = response.data;
        });
    }
    */
}

/*function movieDirective() {
    alert("We made it into the directive!");
    return {
        scope: {
            movie: "="
        },
        restrict: "E",
        replace: true,
        template: ("<div class='Movie'><h4>{{movies.rating}}</h4><h4>{{movies.genre}}</h4></div>")
    };
}

*/
