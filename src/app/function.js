define(['zepto'], function() {
    var _func_on_cache = {}
    G.windows_width = $(window).width()
    F = {
        /* img_url : function(product_id,$index,host){
         host = host|| G.api_host
         $index = $index||0
         return host+'/ecomm/products/product_image_url/'+product_id+'/'+$index
         },*/
         
        //监听函数
        on: function(name, fn) {
            _func_on_cache[name] = fn
        },
        trigger: function(name, once) {
            _func_on_cache[name] && _func_on_cache[name]()
            if (once) {
                this.off(name)
            }
        },
        off: function(name) {
            delete _func_on_cache[name]
        },
        json_length: function(o) {
            if (o) {
                return Object.keys(o).length
            }
        },
        //获取url 参数
        getQueryString: function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return unescape(r[2]);
            return null;
        },
        //检查设备
        check_device: function() {

            var mobile = 'other'
            var sUserAgent = navigator.userAgent.toLowerCase();

            if (sUserAgent.match(/iphone os/i)) {
                mobile = 'iphone'
            } else if (sUserAgent.match(/android/i)) {
                mobile = 'android'
            } else if (sUserAgent.match(/ipad/i)) {
                mobile = 'ipad'
            } else if (sUserAgent.match(/midp/i)) {
                mobile = 'midp'
            } else if (sUserAgent.match(/rv:1.2.3.4/i)) {
                mobile = 'rv'
            } else if (sUserAgent.match(/ucweb/i)) {
                mobile = 'ucweb'
            } else if (sUserAgent.match(/windows ce/i)) {
                mobile = 'wince'
            } else if (sUserAgent.match(/windows mobile/i)) {
                mobile = 'winphone'
            }

            return mobile;
        },

        changeTwoDecimal: function(x) {
            var f_x = parseFloat(x);
            if (isNaN(f_x)) {
                return 0
            }
            var f_x = Math.round(x * 100) / 100;

            return f_x;
        },

        time_format: function(time) {
            //传入时间转为时间戳
            var newstr = time.replace(/-/g, '/');
            var date = new Date(newstr);
            var time_str = date.getTime().toString();
            time_second = parseInt(time_str) / 1000
            var now, diff, ret, t;

            // 当前时间戳
            now = Date.parse(new Date()) / 1000;

            // 差值
            diff = now - time_second;

            // 开始判断
            if (diff > (60 * 60 * 24)) {
                ret = time
            } else if (diff > (60 * 60)) {
                ret = parseInt(diff / 3600) + "小时前";
            } else if (diff > 60) {
                ret = parseInt(diff / 60) + "分钟前";
            } else if (diff > 10) {
                ret = diff + "秒前";
            } else {
                ret = "10秒前";
            }
            return ret;
        }

    }

})
