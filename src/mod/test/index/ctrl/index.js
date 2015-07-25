define(function(require, exports, module) {
    module.exports = function(app) {
        // var wx_share = require('weixin/share');
        app.controller(app.cname, ['$scope', '$routeParams', 'RQ', '$timeout', '$location', function($scope, $routeParams, RQ, $timeout, $location) {
            // var id = $location.search().id;
            F.title("Page1");


            // wx_share.all({
            //     title: '美的空调体验官-调查问卷',
            //     desc: '我们相信,最好的产品都来自于您的体验和参与！',
            //     link: 'http://100056.m.wxpai.cn/aio/res/mideakt/index.html#/survey/index/detail?id=',
            //     imgUrl: 'http://fs.wxpai.cn/upload/100056_2015528_1432807614627_62.jpeg'
            // });

            /*RQ.get('member', {}, function(res) {
                console.log(res)
            })*/


            $scope.action = {}
            $scope.action.title = 'heheheh'


        }])
    }
})
