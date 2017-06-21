angular.module('myApp')
.component('searchComponent', {
      templateUrl:'views/search.component.html',
      bindings: {
        clientList: '<',
        filterData: '&'
      },
});