

angular.module('app',[]);
angular.module('app').controller('mainCtrl', function($scope) {

});
angular.module('app').directive('userInfoCard', function(){
	return {
		template:"User Info Card - Gordon"

		restrict:"E"
		// AngularJS has a default restriction for directives
		// "A"-attribute "E"-element "C"-class "M"-comment
	}
})
