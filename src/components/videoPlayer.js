angular.module('video-player')

.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    video: '<'
  },
  controller: function() {
    this.$onChanges = () => {
      if (this.video) {
        this.videoUrl = `https://www.youtube.com/embed/${this.video.id.videoId}`;
      }
    };
  },

});
