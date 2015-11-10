/*
*策略模式的表单验证
*/

/**************策略对象******************/
var strategies = {
    isNonEmpty: function(value, errorMsg) {
        if (value === '') {
            return errorMsg;
        };
    },
    minLength: function(value, length, errorMsg) {
        if (value.length < length) {
            return errorMsg;
        };
    },
    isMobile: function(value, errorMsg) {
        if (!/(^1[3|4|5|7|8][0-9]{9}$)/.test(value)) {
            return errorMsg;
        };
    }
};

/**************Validator 类******************/
var Validator = function() {
    this.cache = [];
};

Validator.prototype.add = function(dom, rules) {

    var self = this;

    for (var i = 0, rule; rule = rules[i++];) {

        (function(rule) {

            var strategyAry = rule.strategy.split(':');

            var errorMsg = rule.errorMsg;

            self.cache.push(function() {

                var strategy = strategyAry.shift();

                strategyAry.unshift(dom.value);

                strategyAry.push(errorMsg);

                return strategies[strategy].apply(dom, strategyAry);
            })

        })(rule)

    };
};

Validator.prototype.start = function() {
    for (var i = 0, validatorFuc; validatorFuc = this.cache[i++];) {
        var errorMsg = validatorFuc();
        if (errorMsg) {
            return errorMsg;
        };
    };
};

/**************客户端调用代码******************/


var loginForm = document.getElementById('J_login');

var validataFuc = function() {

    var validator = new Validator();

    validator.add(loginForm.uesrname, [{
        strategy: 'isNonEmpty',
        errorMsg: '用户名不能为空'
    },{
         strategy: 'isMobile',
        errorMsg: '手机号码格式不对'
    }]);

    validator.add(loginForm.password, [{
        strategy: 'isNonEmpty',
        errorMsg: '密码不能为空'
    }, {
        strategy: 'minLength:6',
        errorMsg: '密码长度不能小余6位'
    }]);

    var errorMsg = validator.start();
    return errorMsg;
}

loginForm .onsubmit = function() {

    var errorMsg = validataFuc();

    if (errorMsg) {
        alert(errorMsg);
        return false;
    };
};
