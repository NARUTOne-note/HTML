function supportsTemplate() {
	return 'content' in document.createElement('template');
}

if (supportsTemplate()) {
  // 检测通过！
  var t = document.querySelector('#mytemplate');
  // 在运行时填充 src。
  t.content.querySelector('img').src = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png';

  // 激活模版，渲染
  var clone = document.importNode(t.content, true);
  document.body.appendChild(clone);
} else {
  // 使用旧的模板技术或库。
}