angular.module('video-player')
.service('youTube', function($http) {
  this.search = (query, callback) => {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        q: query,
        maxResults: 5,
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true',
        key: window.YOUTUBE_API_KEY
      }
    }).then(function successCallback(response) {
      callback(response.data.items);
    }, function errorCallback(response) {
      console.log(response);
    });
  };
});

/*
.then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });
  
  */
