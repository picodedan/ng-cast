angular.module('video-player')

.component('search', {
  templateUrl: 'src/templates/search.html',
  bindings: {
    search: '<'
  },
  controller: function () {
    this.result = function () {
      console.log(this.input);
      this.search(this.input);
      this.input = '';
    };
  }

});
