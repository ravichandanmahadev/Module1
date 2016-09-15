(function(){
  'use strict';

  angular.module('LunchCheck',[])

  .controller('LunchCheckController',LunchCheckControllerfunction);

  LunchCheckControllerfunction.$inject = ['$scope'];

   function LunchCheckControllerfunction($scope){
     $scope.lunch = '';
     $scope.message = '';
     $scope.DisplayMessage = function(){
       $scope.message = ValidateLunch($scope.lunch);
     }
   };

   function ValidateLunch(strLunch){
      if(!strLunch)
        return "Please enter data first!";
      var lunchList = strLunch.split(",");
      if(lunchList.length>3)
        return  "Too Much!";
      else
        return "Enjoy!";
    }
})();
