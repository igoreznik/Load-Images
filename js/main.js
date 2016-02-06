var app = angular.module("myApp", []);
app.controller("mainController", MainController);

function MainController($http) {
  var vm = this;
  vm.img = [];
  $http.jsonp("http://api.tumblr.com/v2/blog/passport-life.tumblr.com/posts/photo?callback=JSON_CALLBACK&api_key=SOiME7M47zoEcQYKtnuzjO6Kcq2M1dAZESAQ9ipStoqvpMMYpT")
  .success(function(data) {
    vm.posts = data.response.posts;
    for(var i = 0; i<vm.posts.length; i++) {
      vm.photos = vm.posts[i].photos;
      for(var j = 0; j<vm.photos.length; j++) {
        vm.img.push(vm.photos[j].original_size.url);
      }
    }
   console.log(data);
 });
};

   









