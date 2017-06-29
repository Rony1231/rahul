/// <reference path="module.js" />
/// <reference path="angular.js" />

app.controller("directiveController", function ($scope) {

    function setupScopeData() {
        $scope.showSection = false;
        $scope.numberValue = 0;
        $scope.isNumberValueInvalid = false;
        $scope.buttonClickCount = 0;
        $scope.divClickCount = 0;

        $scope.listOfData = ["one", "two", "three", "Four"];
    };


    $scope.feedbackMessage = function () {
        var parsedNum = parseInt($scope.numberValue, 10);
        if (isNaN(parsedNum)) {
            $scope.isNumberValueInvalid = true;
            return "I said enter a number Idiot";

        }
        $scope.isNumberValueInvalid = false;
       
        if(parsedNum>100 || parsedNum <0)
        {
            return "Number Should be between 0 and 100";
        }

        return parsedNum < 50 ? "<50" : "in bw";
    };

    setupScopeData();

    $scope.buttonClickHandler = function () {
        $scope.buttonClickCount++;
    };

    $scope.divClickHandler = function () {
        $scope.divClickCount++;
    };

});