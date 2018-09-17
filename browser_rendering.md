# 浏览器渲染相关知识

## 浏览器优化

[参考链接](https://developers.google.com/speed/docs/insights/MinifyResources)
- **避免使用着陆页面重定向。** 通常是当需要根据不同客户端（PC端和移动端）才需要用页面重定向来实现页面内容格局动态响应。避免它可以对同一个页面进行响应式开发。

- **启用压缩功能**
- **缩短服务器响应用时**：服务器响应用时控制在 200 毫秒。
- **浏览器缓存**
- **缩减资源大小**
- **优化图片**


## 优化图片

- 设置图片的max-width = 100% 避免失真
- 用calc 来进行像素级控制,它可以对混合单位进行计算，下面是表示两个并排图片中间间距为10px自适应窗口大小的写法 :width:calc((100%)-10px)/2
如果是3个图片 ：width:calc((100%)-20px)/3
- Grunt:[参考链接](https://classroom.udacity.com/courses/ud882/lessons/3520939843/concepts/35820386070923)

    
- imageMagick 生成不同尺寸和格式的图片。

     其它图片处理工具：
     - ImageOptim (Mac)
     - Trimage - 和 ImageOptim 类似 (Windows, Mac, Linux)
      -  ImageAlpha
      - File Optimizer (Windows, Linux) 
- [网站测试](https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fwww.muxixyz.com&tab=desktop)

- 各种[Unicode字符](https://unicode-table.com/cn/#20BE)
- 各种[图标](https://fontawesome.com/get-started),[Fonts](http://weloveiconfonts.com/),[如何](https://css-tricks.com/examples/IconFont/)使用图标
- scrset , size(原图片宽度)
 例子:
 
  ```html
    <img  
      src="images/great_pic_800.jpg"
      sizes="(max-width: 400px) 100vw, (min-width: 401px) 50vw"
      srcset="images/great_pic_400.jpg 400w, images/great_pic_800.jpg 800w"
      alt="great picture">
  ```
## HTTP缓存

**[参考链接](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching#cache-control)**

例子：
![例子](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/images/http-request.png)

解释：当服务器返回响应时，会发出一组 HTTP 标头，用于描述响应的内容类型、长度、缓存指令、验证令牌等。例如，在上图的交互中，服务器返回一个 1024 字节的响应，指示客户端将其缓存最多 120 秒，并提供一个验证令牌（“x234dff”），可在响应过期后用来检查资源是否被修改。

1. 各种属性
    - 验证令牌ETag：服务器使用 ETag HTTP 标头传递验证令牌。验证令牌可实现高效的资源更新检查，发送请求时添加，在服务器端进行核对，资源未发生变化时不会传送任何数据。
    - Cache-Control：每个资源都可通过 Cache-Control HTTP 标头定义其缓存策略。Cache-Control 指令控制谁在什么条件下可以缓存响应以及可以缓存多久。
        Cache-Control中的各种属性
        -  **"no-cache"**：表示必须先与服务器确认返回的响应是否发生了变化

            **"no-store"**：直接禁止浏览器以及所有中间缓存存储任何版本的返回响应

        - **"public"**:即使它有关联的 HTTP 身份验证，甚至响应状态代码通常无法缓存，也可以缓存响应。有个max-age 就等于public

            **"private"**:这些响应通常只为单个用户缓存，因此不允许任何中间缓存对其进行缓存。

        - **“max-age”**:指令指定从请求的时间开始，允许获取的响应被重用的最长时间（单位：秒）。例如，“max-age=60”表示可在接下来的 60 秒缓存和重用响应。

2. 比较标准好用的实例
![example](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/images/http-cache-hierarchy.png)

解释：
- HTML 被标记为“no-cache”，这意味着浏览器在每次请求时都始终会重新验证文档，并在内容变化时获取最新版本。此外，在 HTML 标记内，您在 CSS 和 JavaScript 资产的网址中嵌入指纹：如果这些文件的内容发生变化，网页的 HTML 也会随之改变，并会下载 HTML 响应的新副本。
- 允许浏览器和中间缓存（例如 CDN）缓存 CSS，并将 CSS 设置为 1 年后到期。请注意，您可以放心地使用 1 年的“远期过期”，因为您在文件名中嵌入了文件的指纹：CSS 更新时网址也会随之变化。
- JavaScript 同样设置为 1 年后到期，但标记为 private，这或许是因为它包含的某些用户私人数据是 CDN 不应缓存的。
- 图像缓存时不包含版本或唯一指纹，并设置为 1 天后到期。
            


        