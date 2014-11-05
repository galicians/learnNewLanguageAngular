myApp.controller('EventController', function EventController($scope) {
	$scope.event = { name: 'pablo',
					score: 12,
					question: "A conventional expression of greeting or farewell used in the morning.",
					imageUrl: '/img/tree.jpeg',
					sessions: [
					{
					    def: "A conventional expression of greeting or farewell used in the morning."
					 }, 
					 {

					    def: "The round fruit of an apple tree, which typically has thin green or red skin."
					  
					  }, 
					  {

					    def: "A man or boy in relation to other sons and daughters of his parents."
					  
					  }
					]
				}
	}
)