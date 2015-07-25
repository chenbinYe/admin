/**
 * Created by Game-netease on 2014/11/4.
 */



seajs.config({

    base: G.path.root,
    alias: {
        'angular': 'lib/common/angular.js',
        'jquery': 'lib/common/jquery.js',
        'zepto': 'lib/common/zepto.js',
    },
    'map': [
        [/^(.*\.(?:css|js|less))(?!\?)(.*)$/i, '$1?' + G.load_version]
    ],

    paths: {
        'app': 'src/app',
        'mod': 'src/mod',
        'lib': 'src/lib',
        'common': 'src/lib/common',
        'plugin': 'src/lib/plugin',
        'directive': 'src/directive',
        'theme': 'src/lib/theme'
    }
});



//基础库加载
seajs.use([
    'jquery',
    'theme/moment',
    'common/store',
], function() {
    //angular 模块库加载
    var bootstrap_ng = function() {
            seajs.use([

                //angular 基础库
                'angular',
                'common/angular-route',
                'common/angular-sanitize',
                'app/ngsea',
                'app/app',
                'app/route',
                'app/directive',
                'app/service',

                //admin
                'theme/jquery.ui',
                'theme/demo',
                'theme/fullcalendar',
                'theme/highcharts',
                'theme/main',
                'theme/utility',
                'theme/widgets',
            ], function() {
                //console.log('bootstrap_ng')
                angular.bootstrap(document, ["app"])

                seajs.use([
                'theme/init',])

            })
        }
        //定义网站头
    G.site_name = 'TestProject'
    bootstrap_ng()

})
