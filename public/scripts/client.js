var app = angular.module ('app', []);

app.controller ('GiphyController', GiphyController);

function GiphyController($http){
  console.log('NG');
  var vm = this;
  vm.showGif = true;


  vm.getRandomGiphy = function(){
    vm.showGif = true;
    console.log('in getRandomGiphy function');
    var randomUrl = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
    $http.get(randomUrl).then(function(response){
      vm.responseRandom = response.data.data.image_url;
    });
};// end getRandomGiphy

  vm.searchForGiphy = function(){
    vm.showGif = false;
    console.log('in searchForGiphy function');
    var searchUrl = 'http://api.giphy.com/v1/gifs/search?q=';
    searchUrl += vm.searchInput;
    searchUrl += '&api_key=dc6zaTOxFJmzC';
    $http.get(searchUrl).then(function(response){
      vm.response = response.data.data;
    });
  }; // end searchForGiphy

} // end GiphyController
