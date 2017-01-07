( function () {
angular.module('LunchCheck',[]) //Naming the app as LunchCheck
.controller('LunchCheckController', LunchCheckController); // Define LunchCheckController
LunchCheckController.inject = ['$scope']; //Protecting from minification

function LunchCheckController ($scope) {

$scope.list = "";

$scope.lunchcalculator = function () { //Create a function lunchcalculator
 var item =  $scope.list.split(',');  //Splitting the list of comma separated items
 var totalItems = item.length;
 $scope.totalValue = totalItems; // calculating the number of items

 $scope.$watch('totalValue', function(totalItems) {  //keeping an eye on number of items.
 if($scope.list === "")  //If the string is empty, display message
{
  $scope.message = "Please enter the items first";
}
else if(totalItems <=3) //Else, if the number of items is <=3, display enjoy

{
  $scope.message ="Enjoy!";
}
else
{   //If both of above conditions are not met, display too much.
  $scope.message = "Too much!";
}
});
};
}
})();
