## 报错信息如下
```js
ERROR in   Error: Child compilation failed:
  Module build failed (from ./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js):
  SyntaxError: C:\Users\lwz\Desktop\kalf\index.html: Unexpected token (1:0)
  > 1 | <!DOCTYPE html>
      | ^
    2 | <html lang="en">
    3 |
    4 |   <body>

  - index.js:6420 Object.raise
    [kalf]/[_@babel_parser@7.6.4@@babel]/parser/lib/index.js:6420:17

  - index.js:7773 Object.unexpected
    [kalf]/[_@babel_parser@7.6.4@@babel]/parser/lib/index.js:7773:16

  - index.js:8996 Object.parseExprAtom
    [kalf]/[_@babel_parser@7.6.4@@babel]/parser/lib/index.js:8996:20

  - index.js:3618 Object.parseExprAtom
    [kalf]/[_@babel_parser@7.6.4@@babel]/parser/lib/index.js:3618:20

  - index.js:8556 Object.parseExprSubscripts
    [kalf]/[_@babel_parser@7.6.4@@babel]/parser/lib/index.js:8556:23

  - index.js:8536 Object.parseMaybeUnary
    [kalf]/[_@babel_parser@7.6.4@@babel]/parser/lib/index.js:8536:21

  - index.js:8402 Object.parseExprOps
    [kalf]/[_@babel_parser@7.6.4@@babel]/parser/lib/index.js:8402:23

  - index.js:8375 Object.parseMaybeConditional
    [kalf]/[_@babel_parser@7.6.4@@babel]/parser/lib/index.js:8375:23

  - index.js:8325 Object.parseMaybeAssign
    [kalf]/[_@babel_parser@7.6.4@@babel]/parser/lib/index.js:8325:21


  - SyntaxError: C:\Users\lwz\Desktop\kalf\index.html: Unexpected token (1:0)

  - > 1 | <!DOCTYPE html>

  -     | ^

  -   2 | <html lang="en">

```
## 出现上述 错误的原因

>babel-loader配置写法错误

* 错误写法
```js
{
  test: /\.(jsx)|(js)?$/,//test: /\.(jsx)|(js)?$/,这里的正则不能加?号，否则会报错
                         //?表示匹配前面的子表达式零次或一次，或指明一个非贪婪限定符
                         //该正则表达式可以匹配到.html文件，所以报错
  exclude: /node_modules/,
  use: 'babel-loader'
},
```
* 正确写法
```js
{
  test: /\.(js|jsx)$/,
  exclude : /node_modules/,
  use: 'babel-loader'
  
},

```
