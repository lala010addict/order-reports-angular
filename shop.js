angular.module('shop', ['ui.bootstrap', 'ng-bootstrap-datepicker'])
    .controller('products', ['$scope', function($scope) {
        $scope.data = data;
        $scope.datepickerOptions = {

            format: 'yyyy-mm-dd',
            language: 'fr',
            autoclose: true,
            weekStart: 0

        }

        $scope.dateFilter = function(date, startDate, endDate) {
            return function(item) {
                if (item[property] === null) return false;
                var itemDate = moment(item[property]);
                var s = moment(startDate, "DD-MM-YYYY");
                var e = moment(endDate, "DD-MM-YYYY");

                if (itemDate >= s && itemDate <= e) return true;
                return false;
            }
        }

        console.log( $scope.dateFilter('1-6-2016', '1-2-2016', '1-8-2016'))

        $scope.date = '2000-03-12'

    }])
