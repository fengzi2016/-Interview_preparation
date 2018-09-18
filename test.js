
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



