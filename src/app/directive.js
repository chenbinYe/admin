/**
 * Created by ken on 15/4/21.
 */
define(['angular'],function (require, exports, module) {

    //图片优化
    angular.module('app').directive('compressimage', ['$rootScope',
        function($rootScope) {
            var imageUrlRoot = G.debug===0 ? 'http://img3.wxpai.cn' : 'http://img2.wxpai.cn';
            return {
                restrict: 'AE',
                scope:{
                    url: '='
                },
                link: function(scope, element, attrs) {
                    scope.$watch('url', function(newValue){
                        if (newValue) {
                            var imgUrl = '';
                            var h = attrs.imgh || 150,
                                w = attrs.imgw || 150,
                                q = attrs.imgq || 90,
                                x = attrs.imgx || 1;
                            var subStr = '';
                            if (newValue.indexOf('.png') !== -1) {
                                subStr = '@' + w + 'w_' + h + 'h_' + x + 'x.png';
                            } else {
                                subStr = '@' + w + 'w_' + h + 'h_' + q + 'Q_' + x + 'x.jpg';
                            }
                            if (newValue.indexOf('http') == -1) {
                                imgUrl = imageUrlRoot + '/' + newValue + subStr;
                            } else {
                                imgUrl = imageUrlRoot + newValue.substring(newValue.indexOf('/', 8)) + subStr;
                            }
                            attrs.$set('src', imgUrl);
                            }
                    })
                }
            };
        }
    ]);
})
