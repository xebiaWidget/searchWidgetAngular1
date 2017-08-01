searchModule.directive('searchBar', function() {
    return {
        templateUrl:'/app/search/directives/searchbar.html',
        restrict:'E',
        controller: ['$scope', 'policyData', function($scope, policyData) {
            $scope.policies = policyData
        }],
        link: function($scope, element, attrs, controller) {
            
        }
    }
})