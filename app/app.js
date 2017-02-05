

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
		template: "User Info Card: {{ user.name }} <br /> <br/> <div ng-show='!!user.address'> Address: {{ user.address.street }} <br /> City: {{ user.address.city }} <br /> Contry: {{ user.address.nation}} <br /></div> <br /> <div> Color: <div ng-repeat='element in user.color'> {{ element }} </div> </div>"
		// restrict: "C";

	}
})
