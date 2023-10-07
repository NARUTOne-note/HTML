class UserCard extends HTMLElement {
  constructor() {
    super();

    // Custom Elements
    // var image = document.createElement('img');
    // image.src = 'https://semantic-ui.com/images/avatar2/large/kristy.png';
    // image.classList.add('image');

    // var container = document.createElement('div');
    // container.classList.add('container');

    // var name = document.createElement('p');
    // name.classList.add('name');
    // name.innerText = 'User Name';

    // var email = document.createElement('p');
    // email.classList.add('email');
    // email.innerText = 'yourmail@some-email.com';

    // var button = document.createElement('button');
    // button.classList.add('button');
    // button.innerText = 'Follow';

    // container.append(name, email, button);
    // this.append(image, container);

    // Shadow DOM
    this.$shadow = this.attachShadow( { mode: 'closed' } ); // 封闭状态，不允许外部访问
    
    // 采用 HTML Template
    var templateElem = document.getElementById('userCardTemplate');
    var content = templateElem.content.cloneNode(true); // 复用，true 递归克隆子元素
    content.querySelector('img').setAttribute('src', this.getAttribute('image'));
    content.querySelector('.container>.name').innerText = this.getAttribute('name');
    content.querySelector('.container>.email').innerText = this.getAttribute('email');
    this.$title = content.querySelector('.container>.title');
    this.$title.innerText = this.getAttribute('title');

    this.$Event = new CustomEvent('myEvent', {
      detail: '这是子组件传过来的消息'
    })

    this.$shadow.appendChild(content);
  }

  // 属性变化监听
  static get observedAttributes() {
    return ['title']
  }
  // 监听属性变化回调，元素增加、删除、修改自身属性时触发
  attributeChangedCallback(name, ov, nv) {
    const propTitle = this.getAttribute('title')
    console.log(propTitle, name, ov, nv)
    this.$title.innerText = propTitle
  }

  connectedCallback() {
    // 首次注入
    this.$button = this.$shadow.querySelector('button');
    this.$button.addEventListener('click', this.buttonClick);
  }

  disconnectedCallback() {
    // 卸载DOM
    this.$button.removeEventListener('click', this.buttonClick);
  }

  adoptedCallback() {
    // 元素被移动到新的文档时触发
  }

  errorCallback() {
    // 错误处理函数
  }

  buttonClick = () => {
    console.log('button click')
    this.dispatchEvent(this.$Event)
  }
}

window.customElements.define('user-card', UserCard);

const myComponent = document.querySelector('#myComponent')
myComponent.addEventListener('myEvent', val => {
  console.log('event', val)
})
myComponent.addEventListener('click', e => {
  const random = Math.random();
  console.log(random)
  e.target.setAttribute('title', '传入的标题被修改了' + random)
})