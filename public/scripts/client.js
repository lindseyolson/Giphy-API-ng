var app = angular.module ('app', []);

app.controller ('GiphyController', GiphyController);

function GiphyController( GiphyService ){
  console.log('NG');
  var vm = this;
  vm.showGif = true;

  vm.getRandomGiphy = function(){
  GiphyService.getRandomGiphy().then(function(response){
    vm.showGif = true;
    vm.responseRandom = response;
  });
}; // end getRandomGiphy

  vm.searchForGiphy = function(search) {
  GiphyService.searchForGiphy(search).then(function(response){
    console.log(response);
    vm.showGif = false;
    vm.response = response;
  });
}; // end searchForGiphy
} // end GiphyController
