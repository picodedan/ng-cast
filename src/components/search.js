angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  transclude: 'true',
  bindings: {
    result: '<',
    service: '<'
  },
  controller: function () {
    this.keyPress = () => {
      this.service.search(this.input, this.result);
    };
  }
});