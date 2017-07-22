angular.module('video-player')
.component('app', {
  templateUrl: 'src/templates/app.html',
  controller: function (youTube) {
    this.videos = [];
    this.currentVideo = undefined;
    this.service = youTube;
    this.autoplay = false;

    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    
    this.result = (videos) => {
      this.videos = videos;
      if (this.videos.length > 0) {
        this.selectVideo(videos[0]);
      }
    };
      
    this.searchResults = (query, callback) => {
      youTube.search(query, callback);
    };

    this.$onInit = () => {
      this.searchResults('', this.result);
    };
  }
});
