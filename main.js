var app = angular.module("myApp", [])
app.controller("mainCtrl", mainCtrl)

function mainCtrl($scope, $http){
    $scope.movies = [];
    

    $scope.Update = function(form){
        $scope.movielist = [];

        var url = "https://api.themoviedb.org/3/discover/movie?api_key=ba7b6743e0dbfac3faa0607ce7732674&language=en-US&sort_by=popularity.desc&page=1";
        
        var startDate = form.fromyear + "-01-01";
        var endDate = form.toyear + "-12-31";
        var dateQuery = "&primary_release_date.gte=" + startDate + "&primary_release_date.lte=" + endDate;
        
        var genreQuery = "&with_genres=" + form.genre;

        var completeUrl = url + dateQuery + genreQuery;
        $http.get(completeUrl).then(function(response){
            console.log(response);
            for(var i = 0; i < response.data.results.length; i++){
                $scope.movielist.push({
                    title: response.data.results[i].title,
                    overview: response.data.results[i].overview,
                    image: "https://image.tmdb.org/t/p/w500" + response.data.results[i].poster_path,
                    date: (response.data.results[i].release_date).substring(0,4)
                    
                });
            }
        });

    }
}

