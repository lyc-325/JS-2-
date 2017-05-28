///闭包中变量

function createFunction(){
	var result = new Array();

	for (var i = 10; i >= 0; i--) {
		result[i] = function(){
			return i ;		
		}
	}

	return result ;   //10,10,10... 外部函数只能取得内部函数变量的最后一个值
}

function createFuntion2(){
	var result = new Array();

	for (var i = 10; i >= 0; i--) {
		result[i] = function(num){
			return function(){		//再在内部添加一个直接return数字的函数
				return num ;
			}
		}(i);   //将i当作参数传入
	}
	return result;   //1，2，3...
}




///闭包中this对象
var name = "lyc";

var object = {
	name : "tmd";
	getNameFunc : function(){
		return function(){
			return this.name;		//lyc，由于是匿名函数，this指向window
		}
	}
}

var object = {
	name : "tmd";
	getNameFunc : function(){
		var that = this;
		return function(){
			return that.name;		//tmd,没啥好说的
		}
	}
}


///内存泄漏
function laji(){
	var element = document.getElementById('someElement');
	element.onclick = function(){
		alert(element.id);		//闭包作用域链中保存着html元素，内存无法回收
	}
}

function niubi(){
	var element = document.getElementById('someElement');
	var id = element.id;		//将id保存在一个变量中，实际html元素不参与作用域链

	element.onclick = function(){
		alert(id);		
	}；
	element = null;
}

///块级作用域，私有作用域
(function(){				
	///这里就是
})();		//开头括号用于将函数声明变为函数表达式，函数表达式后才能跟（）自执行