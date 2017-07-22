angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    result: '<'
  },

  controller: function (youTube) {
    this.service = youTube;
    this.keyPress = (event) => {
      if (event.key === 'Enter') {
        this.service.search(this.input, this.result);
      }
    };
  }

});
