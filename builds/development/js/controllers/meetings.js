myApp.controller('MeetingsController', 
	function($scope, $firebaseObject) {
	var ref = new Firebase('https://attendanceldcappv.firebaseio.com/meetings')
	var meetings = $firebaseObject(ref);
	// $scope.meetings = meetings.$asObject();
	$scope.meetings = meetings;
	$scope.addMeeting = function() {
		meetings.$save({
			name: $scope.meetingname,
			date: Firebase.ServerValue.TIMESTAMP
		}).then(function() {
			$scope.meetingname='';
		});
	}; // addMeeting
}); // MeetingsController