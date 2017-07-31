searchModule.controller('SearchController', function SearchController($scope, policyData) {
    $scope.policies = policyData.policies;
})