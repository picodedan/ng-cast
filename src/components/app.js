angular.module('video-player')
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function (youTube) {
    this.videos = window.exampleVideoData;
    this.currentVideo = window.exampleVideoData[0];
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    this.searchResults = (query) => {
      youTube.search(query, (videos) => {
        this.videos = videos;
      });
    };
  }
});
