angular.module("raffleApp")
.controller("raffleCtrl", ["$scope","rsvps",function($scope,rsvps){
	$scope.guests = rsvps.getRsvps();
	$scope.newGuest = {};
	$scope.winners = [];
	$scope.raffleTime = false;
	$scope.addGuest = function(){
		$scope.guests.push($scope.newGuest);
		$scope.newGuest = {};
	};
	$scope.getWinner = function(){
		var choice = Math.floor(Math.random()*$scope.guests.length);
		var newWinner = $scope.guests[choice];
		$scope.guests.splice(choice,1);
		$scope.winners.push(newWinner);
	};
	$scope.removeGuest = function(index){
		$scope.guests.splice(index,1);
	}
}]);