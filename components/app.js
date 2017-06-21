angular.module('myApp',[])
.controller('MainCtrl', ['dataUtils',function MainCtrl(dataUtils) {
  var $ctrl = this;
  $ctrl.clientList = [];
  
  $ctrl.filterCustomer = function(value){
    if(value === '' || value === undefined){
      $ctrl.clientList = []
    }else{
      var clientRocord = dataUtils.filterData(["clientName","policyNumber"],value);
      if(clientRocord.length>0){
        $ctrl.clientList = clientRocord;
      }else{
        $ctrl.clientList = [];
      }
    }
  }
}]);
