function supportsImports() {
  const link = document.createElement('link');
  console.log('import' in link)
	return true;
}

if (supportsImports()) {
  // 支持导入
  console.log(1)
  var content = document.querySelector('link[rel="import"]').import;
  console.log(content)
  var dom = document.createElement('div');
  dom.innerHTML = content || 'hello world';
  document.body.appendChild(dom);
} else {
  // 使用其他方法加载文件
  console.log(2)
}