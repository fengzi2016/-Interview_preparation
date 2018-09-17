1. JS的数据类型

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

