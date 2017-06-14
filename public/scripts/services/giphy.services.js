app.service ('GiphyService', function($http){
  sv = this;

  sv.getRandomGiphy = function(){
    console.log('in getRandomGiphy function');
    var randomUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
    return $http.get(randomUrl).then(function(response){
      return response.data.data.image_url;
    });
  };

  sv.searchForGiphy = function(search){
    sv.showGif = false;
    console.log('in searchForGiphy function');
    var searchUrl = 'http://api.giphy.com/v1/gifs/search?q=';
    searchUrl += search;
    searchUrl += '&api_key=dc6zaTOxFJmzC';
    return $http.get(searchUrl).then(function(response){
      console.log(response.data.data);
      return response.data.data;
    });
  };
});
