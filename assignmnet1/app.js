(function(){
'use strict';


angular.module('lunchApp', [])

.controller('lunchController', function ($scope) {
    $scope.name = '';
    $scope.message = '';
    $scope.lunch = '';
    $scope.itemsSelected = 0
    $scope.checker = function() {
        $scope.message = '';
        $scope.countItems();
        if($scope.itemsSelected.length != 0){
            if($scope.itemsSelected.length <= 3 ){
                $scope.message = 'Enjoy!';
            }else if($scope.itemsSelected.length >= 4){
                $scope.message = 'Too Much!';
            }
        }else{
            $scope.message = 'Please enter data first';
        }
    
    }
    $scope.countItems = function(){
        $scope.itemsSelected  = $scope.lunch.split(',');
        $scope.itemsSelected  = $scope.itemsSelected.filter((e)=> e != '');
        console.log("items selected:"+ $scope.itemsSelected);
        return   $scope.itemsSelected.length;
    }
});


})();