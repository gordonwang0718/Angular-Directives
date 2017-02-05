

angular.module('app',[]);
angular.module('app').controller('mainCtrl', function($scope) {
	$scope.user = {
		name: 'Gordon Wang',
		address: {
			street: '909 W Temple St',
			city: 'Los Angeles',
			nation: 'US'
		}
	}
});
angular.module('app').directive('userInfoCard', function(){
	return {
		template: "User Info Card: {{ user.name }} <br /> address: {{ user.address.street }} <br /> city: {{ user.address.city }} <br /> contry: {{ user.address.nation}} <br />"
		// restrict: "C";

	}
})
