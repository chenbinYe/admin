define(function(require, exports, module) {
    module.exports = function(app) {
        // var wx_share = require('weixin/share');
        app.controller(app.cname, ['$scope', '$routeParams', 'RQ', '$timeout', '$location', function($scope, $routeParams, RQ, $timeout, $location) {
            // var id = $location.search().id;
//            F.title("Page1");

            $scope.action = {}
            $scope.action.title = 'heheheh'

            console.log('test')
            console.log($routeParams)
            $scope.modOn  =$routeParams


        }])
    }
})
