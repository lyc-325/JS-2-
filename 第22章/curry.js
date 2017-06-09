function curry(fn){
	var args = Array.prototype.slice.call(arguments,1);
	return function(){
		console.log(arguments);
		var innerArgs = Array.prototype.slice.call(arguments);
		
		var finArgs = args.concat(innerArgs);
		return fn.apply(null,finArgs);
	}
}

function add(num1,num2){
	return num1+num2;
}

var curriedAdd = curry(add,5,6);
alert(Object.prototype.toString.call(curriedAdd));