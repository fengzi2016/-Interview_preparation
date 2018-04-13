
// example 1
function MyPromise(fn){
    this.value;//保存某些值->待定
    this.status = 'pending';
    this.resolveFunc = function(){};
    this.rejectFunc = function(){};
    fn(this.resolveFunc.bind(this),this.rejectFunc.bind(this));
    //.bind(this) 创建一个新的函数，函数体与调用函数一样，只是将对象指向调用时的this
}
MyPromise.prototype.resolve = function(val){
   var self = this;
   if(this.status == 'pending'){
       this.status = 'resolved';
       this.value = val;
       setTimeout(function(){
           self.resolveFunc(self.value);
       },0);
   }
}
MyPromise.prototype.reject =  function(val){
    var self = this;
    if(this.status == 'pending'){
        this.status = 'rejected';
        this.value = val;
        setTimeout(function(){
            self.rejectFunc(self.value);
        },0);
    }
}
MyPromise.prototype.then = function(resolveFunc,rejectFunc){
    var self = this;
    return new MyPromise(function(resolve_next,reject_next){
        function resolveFuncWrap(){
            var result = resolveFunc(self.value);
            if(result && typeof result.then == 'function'){
                result.then(resolve_next,reject_next);
            }else{
                resolve_next(result);
            }
           
        }
        function rejectFuncWrap(){
            var result = rejectFunc(self.value);
            if(result && result.then == 'function'){
                result.then(resolve_next,reject_next);
            }else{
                resolve_next(result);
            }
        }
        self.resolveFunc = resolveFunWrap;
        self.rejectFunc = rejectFuncWrap;
    })
}