angular.module('video-player')

.component('videoPlayer', {
  templateUrl: 'src/templates/videoPlayer.html',
  bindings: {
    video: '<'
  },
  controller: function() {
    this.autoPlay = false;
    this.$onChanges = () => {
      if (this.video) {
        this.videoUrl = `
          https://www.youtube.com/embed/${this.video.id.videoId}?autoplay=${Number(this.autoPlay)}
        `;
      }
      //this.autoPlayClass = this.autoPlay ? 'on' : 'off';
    };
    
    this.toggleAutoPlay = () => {
      //debugger;
      this.autoPlay = !this.autoPlay;
    };
  },

});
