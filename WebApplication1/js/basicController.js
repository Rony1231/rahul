



app.controller('basicController', function ($scope) {

    function setupScopeData() {
        $scope.whatAmI = "Angular One Way Binding";

        $scope.someData = {
            text: "Some Text",
            currentDate: new Date(),
            amount: 150
        };

        debugger;

        $scope.listOfStuff = [
            { key: 1, text: "Item 1" },
            { key: 2, text: "Item 2" },
            { key: 3, text: "Item 3" },
            { key: 4, text: "Item 4" }
        ];
        $scope.listSelection = $scope.listOfStuff[2].key;

        $scope.listFilter = ""; /* Intially Nothing To Filter */

    }
    setupScopeData();

});
