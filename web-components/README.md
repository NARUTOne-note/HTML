# web components

- [web components](https://www.webcomponents.org/introduction)
- [web components MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components)

## 规范

- HTML Template
- HTML Imports (废弃)
- Shadow DOM
- Custom Elements

### HTML Template

用 `<template>` 来包裹内容为我们提供了几个重要属性：

- 它的内容在激活之前一直处于惰性状态。本质上，这些标记就是隐藏的 DOM，它们不会被渲染。
- 处于模板中的内容不会有副作用。脚本不会运行，图片不会加载，音频不会播放，...直到模板被使用。
- 内容不在文档中。在主页面使用 `document.getElementById()` 或 `querySelector()` 不会返回模板的子节点。
- 模板能够被放置在任何位置，包括 `<head>`，`<body>`，或 `<frameset>`，并且任何能够出现在以上元素中的内容都可以放到模板中。 注意，"任何位置"意味着 `<template>` 能够安全的出现在 HTML 解析器不允许出现的位置... 几乎可以作为任何内容模型的子节点， 它也可以作为 `<table>` 或 `<select>` 的子元素
