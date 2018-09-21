# 1. JS的数据类型

原始数据类型: Null,Boolean,String,Number,Undefined,Object,Symbol

- Null: 值为Null,转化为false
- Boolean: 值为true,false
- String: true:非空字符
- Number: true:非零
  特别的取值： +0,-0,+Infinity,-Infinity,NaN,Number.MAX_VALUE,Number.MAX_SAFE_INTEGER
- Symbol:
  特点：1.这个类型的值可以用来创建匿名的对象属性。2.Symbol()创建实例。3. 一个Symbol实例可以被赋值到一个左值变量，还可以通过标识符检查类型。4. 不能对改类型进行其它操作，比如与其它类型进行比较组合 5.不可枚举，即for...in ,JSON.stringify,Object.keys,Object.getOwnPropertyNames(obj)都无法获取到 6. 获取方法：Object.getOwnPropertySymbols()。6. 常用：Symbol.for(),Symbol.keyFor(),Symbol.search()
- Object
  一。特点： 
  1.数据属性: 
 ```js
    {
      Value:undefined,
      Writable:true,
      Enumerable:true,
      Configurable:true
    }
 ```
 2. 访问器属性
 ```js
 {
     Get:undefined,
     Set:undefined,
     Enumerable:true,
     Configurable:true
 }

 ```
 3. 对象类型
 一个 Javascript 对象就是键和值之间的映射.。键是一个字符串（或者 Symbol） ，值可以是任意类型的值。
```js
  Date;
  Array;
  类型数组如:Int8Array;
  Map;
  Set;
  WeakMap;(与Map相比，键不可枚举)
  WeakSet;
  JSON;

```
二。 Map

- 一个Object的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值，包括函数、对象、基本类型。
- Map 中的键值是有序的，而添加到对象中的键则不是。因此，当对它进行遍历时，Map 对象是按插入的顺序返回键值。
- 你可以通过 size 属性直接获取一个 Map 的键值对个数，而 Object 的键值对个数只能手动计算。
- Map 可直接进行迭代，而 Object 的迭代需要先获取它的键数组，然后再进行迭代。
- Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。虽然 ES5 开始可以用 map = Object.create(null) 来创建一个没有原型的对象，但是这种用法不太常见。
- Map 在涉及频繁增删键值对的场景下会有些性能优势。

三。Set
- Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。


四。其它对象
```js
  Date,
  Error,
  RegExp,
  Math,
  Arguments,
  Function
```

# 2. 浅拷贝，深拷贝

浅拷贝深拷贝只是形容引用数据类型，如Object，Array等，基本数据类型只有深拷贝

## 从因到果：
![思维导图](https://user-gold-cdn.xitu.io/2017/9/3/998e84124743f57f2f7e4005773baa0c?imageslim)

## 浅拷贝到深拷贝区别：

---    |和原数据是否指向同一对象 | 第一层数据为基本数据类型 | 原数据中包含子对象
:-------:|:-----------------------:| :----------------------: | :----------------:
赋值     |          是        |改变会使原数据一同改变|改变会使原数据一同改变|
浅拷贝 | 否 |改变不会使原数据一同改变|改变会使原数据一同改变|
深拷贝|否|改变不会使原数据一同改变|改变不会使原数据一同改变|

## 浅拷贝方法：

- 直接赋值，如
 ```js
    function shallowCopy(src) {
        var dst = {};
        for (var prop in src) {
            if (src.hasOwnProperty(prop)) {
                dst[prop] = src[prop];
            }
        }
        return dst;
    }
 ```
- Object: Object.assign({},obj) [目标对象，原对象]
- Array: array.concat(),array.slice()

## 深拷贝方法
- JSON.parse(JSON.stringify(obj)) ,当 obj有属性为函数，和正则表示式时失败
```js
  const a = {
    fn:function(s,t) {
        console.log(s);
        console.log(t)
    },
    rge: /\go/g
}
const b = JSON.parse(JSON.stringify(a));
console.log(b)//{ rge: {} }

```

- 分情况赋值，如果属性为基本数据类型则直接赋值，如果不是则浅拷贝递归，直到为基本数据类型
```js
  //注意属性为函数且有参数时
    const a = {
    fn:function(s,t) {
        console.log(s);
        console.log(t)
    }
}
const args = a.fn.length;
let str = [];
for(let i = 0 ; i<args;i++) {
   str.push("a"+i);
}
str = str.join(',')
const l = new Function( str,'return '+ a.fn.toString())();
a.fn(1,2);

```
# this
### 1. 非严格模式，作为函数,指向window
```js
  function a {
    console.log(this);
  }
  // this -> window
```
### 2.严格模式，作为函数，指向undefined
```js
'use strict'
  function a() {
    console.log(this);
  }
  // this -> undefined
```
### 3. 作为对象，指向对象
```js
  function a() {
    
    console.log(this);
    console.log(this.c);
  }
  let b = {
    c : a
  }
  b.c()
  //{ c: [Function: a] }
  //[Function: a]
 
  // this -> b
```
### 4. 作为构造器，指向创造出来的新对象
```js
  function a(name) {
    this.name = name
    console.log(this);
  }
  let b = new a('guan');
  let c = new a('yun');
  // this -> b -> {name:'guan'}
  // this -> c -> {name:'yun'}
```
### 5. 作为call ,apply 的参数，指向第一个参数

```js
  function a() {
    console.log(this);
  }
  a.call({})
  // this->{}
  a.call(null)
  // this->window
  
```
### 6.箭头函数MDN

- 箭头函数不会创建自己的this,它只会从自己的作用域链的上一层继承this
- 没有super,arguments,new.target
- 不能被new
- 不应该作为对象方法。如不应该作为object.defineProperty(obj,prop,{})的第三个参数，因为在对象里被创建则被指向window或undefined(严格模式)
- 通过call,apply,bind调用时，其第一个参数会被被忽略，当作参数传递。

## 继承

```js
 //1.
 Child.prototype = new Parent();
 //2.
function Child() {
  Parent.call(this,'x')
}
Child.prototype = new Parent();

//3. 
function Child() {
  Parent.call(this,'x');
}
Child.prototype = new Parent();
Child.prototype.constructor = Parent;
```

## 正则表达式
1. 表现形式
```js
//1
  var regexp = /ab/gi;
  var myArray = regexp.exec('abc');
//2
  var re = new RegExp('ab','gi'),;
  var arr = re.exec('abc')
//3
  var str = 'abc'
  var a = str.match(regexp)
```
regexp.lastIndex = 下一个匹配的索引值

regexp.source = 正则表达式，不包括标志

**RegExp.exec(str)**得出的结果：

myArray = [匹配到的字符串，所有被记住的子串]

myArray.index = 在输入的字符串中匹配到的以0开始的索引（匹配到的字符串的起始下标）

myArray.input = 初始字符串

myArray[0] = 匹配到的字符串

- \ 转义
- ^ 开始
- $ 结尾
- * >=0
- + >=1
- ? 非贪婪
- . 一切除换行符
- (x) 匹配'x'且记住匹配项，捕获符号，匹配用\1,\2..，替换用$1,$2..表示
- (?:x) 匹配'x'但是不记住x,用于匹配字符串
- x(?=y) 匹配'x'后面跟着y
- x(?!y) 匹配x后面不跟着y
- x|y 匹配x或y
- {n} 正好为n个
- {n.m} n至m个
- [xyz] 匹配其中之一
- [^xyz]匹配除了括号中的
- [\b] 退格
- \b 边界
- \B 非边界
- \cX 当X处于A-Z 匹配一个控制符，如-
- \d 数字
- \D 非数字
- \f 换页符
- \n 换行符
- \s 空白符号
- \S 非空白符
- \t 水平制表符
- \v 垂直制表符
- \w 字母，数字，或下划线
- \W 非字母数字，下划线


## 网页的生命周期
### 1.
1. HTML代码转化成DOM
2. CSS代码转化成CSSOM（CSS Object Model）
3. 结合DOM和CSSOM，生成一棵渲染树（包含每个节点的视觉信息）
4. 生成布局（layout），即将所有渲染树的所有节点进行平面合成
5. 将布局绘制（paint）在屏幕上

### 2.
- 下载html
- 根据html里的标签进行解析，发现并下载CSS,JS等其它资源（边解析边下载）
- 解析html时建立DOM树。CSS下载完成，解析CSS样式，定义html标签相关联样式，创建样式对象styleObject
>1、解析HTML以构建DOM树：渲染引擎开始解析HTML文档，转换树中的html标签或js生成的标签到DOM节点，它被称为 -- 内容树。

>2、构建渲染树：解析CSS（包括外部CSS文件和样式元素以及js生成的样式），根据CSS选择器计算出节点的样式，创建另一个树 —- 渲染树。

>3、布局渲染树: 从根节点递归调用，计算每一个元素的大小、位置等，给每个节点所应该出现在屏幕上的精确坐标。

>4、绘制渲染树: 遍历渲染树，每个节点将使用UI后端层来绘制。
- DOM tree ，样式对象构建完毕，建立渲染树。渲染树！=DOM树，比如display:none则不在渲染树中，
- reflow:由浏览器的定位引擎计算每个DOM项的大小及相对于整个页面的位置
- repaint:显示整个页面，这个工作是浏览器的绘画引擎完成，显示整个最终的效果


# little

- call和apply的功能基本相同，都是实现继承或者转换对象指针的作用；
