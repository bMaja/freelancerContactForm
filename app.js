angular.module('Freelancer',[]);

angular.module('Freelancer').controller('MainController', function($scope) {
  
	$scope.works = [
		'Website',
		'AngularJS form',
		'Consulting'
	];
	
	$scope.submit = function () {
		alert("Your form has been successfully submitted. I'll contact you within 24 hours.");
	};

});