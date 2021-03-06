﻿/*js基础知识汇总，常见的一些用法*/
1.检测是不是数组Array方法：
	Object.prototype.toString.call(arr) === "[object Array]"; //推荐
	arr instanceof Array; //是数组就返回true,如果存在多个框架，可能有问题
	Array.isArray(arr); //新增的方法，兼容性不好

	console.log(Object.prototype.toString.call(123)) //[object Number]
	console.log(Object.prototype.toString.call('123')) //[object String]
	console.log(Object.prototype.toString.call(undefined)) //[object Undefined]
	console.log(Object.prototype.toString.call(true)) //[object Boolean]
	console.log(Object.prototype.toString.call({})) //[object Object]
	console.log(Object.prototype.toString.call([])) //[object Array]
	console.log(Object.prototype.toString.call(function(){})) //[object Function]

	所有类型都会得到不同的字符串，几乎完美。在JavaScript中，想要判断某个对象值属于哪种内置类型,最靠谱的做法就是通过 Object.prototype.toString.call() 方法.

2.字符转为数组的方法：
	var arr = string.split("");

3.数组转为字符的方法：
	var b = arr.join("");

4.判断数字是不是整数：
	var num;

	1) num%1 ===0;(0代表整数，其他的说明是小数)
	2) Math.floor(num) === num;(true说明是整数)
	3) Number.isInteger(num);(true说明是整数)
	4) /^\d+$/.test(num);(true说明是整数)

5.以特定的进制返回数值的字符串：
	var num = 10;
	return num.toString(2);  //二进制，1010
	return num.toString(8);  //八进制，12
	return num.toString(16);  //十六进制，a
	return num.toString(10);  //十进制，默认的

6.在字符串中查找某个字符：
	string.indexOf("a"); //返回该字符的索引，没有就返回-1
	string.lastIndexOf("a"); //从末尾开始查找

7.在数组中查找某个字符：
	arr.indexOf("a",index); //返回该字符的index，没有就返回-1，index为可选，没有就默认从0开始检索
	arr.lastIndexOf("a"); //从数组的末尾开始查找

8.+与- 操作符：
	var result = 5+5; //10
	var result = 5+ "5"; //55
	var result = 5 - true; //4,会自动转化
	var result = 5 - "2"; //3,会自动转化
	var result = 5 - null; //5,null转为0

9. 调用数组原生的sort()以及reverse()方法：
	arr.reverse(); //数组倒序输出
	arr.sort(function(a,b){
		return b-a;
	}); //数组排序 默认升序排列

10. 按照指定的小数位返回数值的字符串：
	var num = 10;
	return num.toFixed(2); //"10.00"

11. 用于返回字符串中的特定字符：
	var str = "hello";
	return str.charAt(1); //e
	return str.charCodeAt(1); //101，输出e的字符编码

12. 删除字符串的前置以及后置的所有空格：
	var str = "  hello world   ";
	return str.trim(); //hello world

13. 要找到数组中的最大或最小值，可以像下面这样使用apply()方法：
	var values = [1, 2, 3, 4, 5, 6, 7, 8];
	var max = Math.max.apply(Math, values); //8
	var min = Math.min.apply(Math,values); //1

	//解决IE8以下不支持数组的indexOf方法的写法
	if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(obj) {
            for (var i = 0; i < this.length; i++) {
                if (this[i] == obj) {
                    return i;
                }
            }
            return -1;
        }
    }
	var index = values.indexOf(Math.min.apply(Math,values)); //7,返回最小元素的索引值

14. 小数值舍入为整数的几个方法：Math.ceil()、Math.floor()和Math.round()：
	Math.ceil()执行向上舍入，即它总是将数值向上舍入为最接近的整数；
	Math.floor()执行向下舍入，即它总是将数值向下舍入为最接近的整数；
	Math.round()执行标准舍入，即它总是将数值四舍五入为最接近的整数。
	alert(Math.ceil(25.9)); //26
	alert(Math.ceil(25.5)); //26
	alert(Math.ceil(25.1)); //26
	alert(Math.round(25.9)); //26
	alert(Math.round(25.5)); //26
	alert(Math.round(25.1)); //25
	alert(Math.floor(25.9)); //25
	alert(Math.floor(25.5)); //25
	alert(Math.floor(25.1)); //25

15. 经典递归：
	1):使用arguments.callee 代替函数名，严格模式下会报错
	function factorial(num){
		if (num <= 1){
			return 1;
		} else {
			return num * arguments.callee(num-1);
		}
	}
	2):使用命名函数，即便把函数赋值给了另一个变量，函数的名字f仍然有效，所以递归调用照样能正确完成
	var factorial = (function f(num){
		if (num <= 1){
			return 1;
		} else {
			return num * f(num-1);
		}
	});
16. 跨浏览器取得窗口相对于屏幕左边和上边的位置：
	var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
	var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;

17. 获取页面的滚动高度：
	原生： document.body.scrollTop||document.documentElement.scrollTop;
	jq: $(document).scrollTop();

18. 可以快速打印一个五分制的评分情况。
	function getRating(rating) {
	    if(rating > 5 || rating < 0) throw new Error('数字不在范围内');
	    return '★★★★★☆☆☆☆☆'.substring(5 - rating, 10 - rating );
	}
	getRating(3);

19. 下面是将参数从一个函数传递到另一个函数的推荐做法。

	function foo() {
	    bar.apply(null, arguments);
	}
	function bar(a, b, c) {
	    console.log(a+b+c);
	}
	foo(1,2,3); //6

20. 判断是否为dom，dom的nodeType属性值为1。这里用!!强转为boolean值：
	var isElement = function(obj) {
		return !!(obj && obj.nodeType === 1);
	}

	判断是否为数组：
	var isArray = Array.isArray || function(obj) {
		return Object.prototype.toString.call(obj) === '[object Array]';
	}

	判断是否为对象(先用typeof判断数据类型。函数也属于对象，但是由于typeof null也是object，所以用!!obj来区分这种情况):
	var isObject = function(obj) {
		var type = typeof obj;
		return type === 'function' || type= 'object' && !!obj;
	}

	判断是否为NaN,这个值有两个特点：1.它是一个数；2.不等于它自己：
	var isNaN = function(obj) {
		return Object.prototype.toString.call(obj) === '[object Number]' && obj !== +obj;
	}

	判断是否为undefined,用void 0来表示undefined，非常有意思的小技巧。不过常用方式还是if(xxx)来判断是不是undefined。
	var isUndefined = function(obj) {
		return obj === void 0;
	}

21. 函数节流
	$.throttle = function(fn, delay){
	 	var timer = null;
	 	return function(){
	 		var context = this, args = arguments;
	 		clearTimeout(timer);
	 		timer = setTimeout(function(){
	 			fn.apply(context, args);
	 		}, delay);
	 	};
	 };

	调用：
	$(window).on("resize scroll", $.throttle(function() {

        //楼层锚点控制
        ctrlFloorPoint();

        //侧边栏控制
        showRightBar();

    }, 300));

