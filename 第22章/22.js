//安全的类型检测
Object.prototype.tostring.call(value)


//作用域安全的构造函数
function Person(name,age,job){
	if (this instanceof Person) {		//避免没加new直接调用构造函数this指向window
		this.name = name;
		this.job = job;
		this.age = age;
	}else{
		return new Person(name,age,job)
	}
}


//惰性载入函数（优化if语句较多的函数）
function lyc(){
	if (true) {
		lyc = function(){
			a+b;
		}
	}else if(other true){
		lyc = function(){
			a-b;
		}
	}else{
		lyc = function(){
			a*b;
		}
	}
	return lyc();		//每一个if都给lyc函数重新赋值，最终输出lyc函数，下次调用时不再执行if语句
}

var lyc = (function(){
	if (true) {
		return function {
			a+b;
		}
	}else if(other true){
		return function(){
			a-b;
		}
	}else{
		return function(){
			a*b;
		}
	}

})();		//匿名自执行函数给lyc 函数赋值