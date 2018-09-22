// function Parent() {
//     this.prototype = true;
// }
// Parent.prototype.getParentValue = function() {
//     return this.prototype;
// }
// function Child() {
//     this.ChildProperty = false;
// }
// Child.prototype = new Parent();
// Child.prototype.getChildValue = function() {
//     return this.ChildProperty;
// }
// let child = new Child();
// console.log(child.getChildValue());
// console.log(child.getParentValue());

// var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";
// var output = ["---------- Original String\n", names + "\n"];
// var pattern = /\s*;\s*/
// var nameList = names.split(pattern);
// pattern = /(\w+)\s+(\w+)/
// var bySurnameList = [];
// bySurnameList.sort();
// nameList[0].replace(pattern,"$2","$1");



// const a = (a,b) => {
//     console.log('this:');
//     console.log(this)
//     console.log('arguments:')
//     console.log(arguments[0])
    
//     console.log("target")
//     console.log(new.target)
// }
// a(2,3)
// function a() {
    
//     console.log(this);
//     console.log(this.c);
//   }
//   let b = {
//     c : a
//   }
//   b.c()

// function a(name) {
//     this.name = name;
//     console.log(this);
//   }
//   let b = new a('guan');
//   let c = new a('yun')


// function a() {
//     console.log(this);
//   }
// let c = new a();
// c.name = 'guan';
// console.log(c)
// let b = {
//     c:function a() {
//         console.log(this)
//     }
// }
// b.c()
// const a = {
//     fn:function(s,t) {
//         console.log(s);
//         console.log(t)
//     },
//     rge: /\go/g
// }
// const b = JSON.parse(JSON.stringify(a));
// console.log(b)
// const args = a.fn.length;
// let str = [];
// for(let i = 0 ; i<args;i++) {
//    str.push("a"+i);
// }
// str = str.join(',')
// const l = new Function( str,'return '+ a.fn.toString())();
// a.fn(1,2);

// 显示为毫秒
// 类
// Date.now();
// Date.UTC(year,month,day,hour,m,s,ms);
// Date.parse(instance);
// Date.parse(year,month,day,hour,m,s,ms)

// 实例
let date = new Date();

//2018-09-22T10:11:15.136Z
date.getTime();
date.setTime();

// 显示为字符串或数字

// 实例
let newdate = new Date();
//构造函数
newdate = new Date(123);
newdate = new Date('December 17, 1995 03:24:00');
newdate = new Date('1998-12-17T03:24:00');
newdate = new Date(1995,11,17,3,24,0);
date.getDay();
date.getDate();
date.getFullYear();
date.getHours();
date.getMilliseconds();
date.getMinutes();
date.getMonth();
date.getSeconds();
date.getUTCDate();
//get -> set
date.toDateString();
//Mon Jan 22 2018
date.toJSON();
// 2018-01-22T10:00:33.381Z
date.toTimeString();
// 18:00:33 GMT+0800 (中国标准时间)
date.toString()
// Sat Sep 22 2018 18:11:00 GMT+0800 (中国标准时间)
// date.getDate();
// date.getDay();
// date.getFullYear();
// date.getHours();
// date.getMilliseconds();
// date.getMinutes();
// date.getMonth();

// date.setMonth(0);
// console.log(date.toString())
// console.log(date.getUTCHours())
// console.log(date.toTimeString())
// console.log(date.toJSON())
// console.log(date.toDateString());
// console.log(date.getMonth())