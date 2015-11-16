/*js基础知识汇总，常见的一些用法*/
1.检测是不是数组Array方法：
	Object.prototype.toString().call(arr) === "[object Array]";

2.字符转为数组的方法：
	var arr = string.split("");

3.数组转为字符的方法：
	var b = arr.join("");

4.判断是不是number类型的：
	typeof(num) == "number";

5.以特定的进制返回数值的字符串：
	var num = 10;
	return num.toString(2);  //二进制，1010
	return num.toString(8);  //八进制，12
	return num.toString(16);  //十六进制，a
	return num.toString(10);  //十进制，默认的

6.在字符串中查找某个字符：
	string.indexOf("a"); //返回该字符的index，没有就返回-1

7.在数组中查找某个字符：
	arr.indexOf("a"); //返回该字符的index，没有就返回-1