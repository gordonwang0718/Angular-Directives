

angular.module('app',[]);
angular.module('app').controller('mainCtrl', function($scope) {
	$scope.user1 = {
		name: 'Gordon Wang',
		address: {
			street: '909 W Temple St',
			city: 'Los Angeles',
			nation: 'US'
		},
		color: ['black', 'white', 'gray']
	}
	$scope.user2 = {
		name: 'Jenni Wang',
		address: {
			street: '909 W Temple St',
			city: 'Los Angeles',
			nation: 'China'
		},
		color: ['black', 'white', 'gray']
	}



});
angular.module('app').directive('userInfoCard', function(){
	return {
		templateUrl: "file:///Interview/Front-end_Practice/7.%20Angular%20Directives%20Fundamentals/2.%20Events%20&%20Scopr%20&%20Controllers/app/userInfoCard.html",
		// restrict: "E";
		scope: {
			user: '='
		},
		controller: function($scope){
			$scope.collapsed = false;
			$scope.clickMe = function(ele) {
				ele.show = "Yes Clicked";
			}
			$scope.collapse = function() {
				$scope.collapsed = !$scope.collapsed;
			}
		}
	}
});
angular.module('app').directive('addressInfo', function() {
	return {
		templateUrl: 'file:///Interview/Front-end_Practice/7.%20Angular%20Directives%20Fundamentals/2.%20Events%20&%20Scopr%20&%20Controllers/app/addressInfo.html',
		scope: true, // seperate scopr from derective 'userInfoCard'
		controller: function($scope) {
      $scope.collapsed = false;
      $scope.collapseAddress = function() {
        $scope.collapsed = true;
      }
      $scope.expandAddress = function() {
        $scope.collapsed = false;
			}
    }
	}
})
