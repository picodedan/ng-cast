angular.module('video-player')
.service('youTube', function($http) {
  this.search = (query, callback) => {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        'q': query,
        'maxResults': 5,
        'part': 'snippet',
        'type': 'video',
        'videoEmbeddable': 'true',
        'key': window.YOUTUBE_API_KEY
      },
      success: function() {
        console.log('yay!');
        callback(data.items);
      }
    });
  };
});
