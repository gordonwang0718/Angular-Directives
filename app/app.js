

angular.module('app',[]);
angular.module('app').controller('mainCtrl', function($scope) {
	$scope.user = {
		name: 'Gordon Wang',
		address: {
			street: '909 W Temple St',
			city: 'Los Angeles',
			nation: 'US'
		},
		color: ['black', 'white', 'gray']
	}

 

});
angular.module('app').directive('userInfoCard', function(){
	return {
		templateUrl: "file:///Interview/Front-end_Practice/7.%20Angular%20Directives%20Fundamentals/2.%20Events%20&%20Scopr%20&%20Controllers/app/userInfoCard.html",
		// restrict: "E";
		controller: function($scope){
			$scope.clickMe = function(ele){
				ele.show = "Yes Clicked";
			}
		}
	}
})
