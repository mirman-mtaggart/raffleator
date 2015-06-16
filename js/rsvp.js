angular.module("raffleApp")
.service("rsvps", function(){
	var rsvps = {};
	rsvps.guests = [

	];
	rsvps.getRsvps = function(){
		return rsvps.guests;
	};
	return rsvps;
});
