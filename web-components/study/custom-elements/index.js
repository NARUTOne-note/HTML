class FlagIcon extends HTMLElement {
  constructor() {
    super();
    this._countryCode = null;
    this.created?.();
  }

  static get observedAttributes() { return ["country"]; }

  attributeChangedCallback(name, oldValue, newValue) {
    // name will always be "country" due to observedAttributes
    this._countryCode = newValue + 2;
    this._updateRendering();
  }

  connectedCallback() {
    this.mounted?.();
    // 首次注入
    console.log('FlagIcon')
    this._updateRendering();

    // ! this 具有 DOM  Element api 所有方法
    // this.setAttribute()
  }

  disconnectedCallback() {
    // 卸载DOM
  }

  adoptedCallback() {
    // 元素被移动到新的文档时触发
  }

  attributeChangedCallback() {
    // 元素增加、删除、修改自身属性时触发
  }

  get country() {
    return this._countryCode;
  }

  _updateRendering() {
    console.log('mounted')
  }
}

class PlasticButton extends HTMLButtonElement {
  constructor() {
    super();

    this.addEventListener("click", () => {
        // 动效逻辑
    });
  }

  connectedCallback() {
    console.log('PlasticButton')
  }
}

class FlagIconExtend extends FlagIcon {
  constructor() {
    super();
  }

  created() {
    console.log('child created')
  }

  mounted() {
    console.log('child mounted')
  }
}

// 为了区别与非自定义组件，自定义组件名称通常以“-”分隔
//全局注册该元素，自定义元素
customElements.define("flag-icon", FlagIcon);
customElements.define("flag-icon-extend", FlagIconExtend);
/**
const flagIcon = document.createElement("flag-icon");
flagIcon.country = "cn";
document.body.appendChild(flagIcon);
 */

// 继承button, 自定义内置元素
customElements.define("plastic-button", PlasticButton, { extends: "button" });
/**
const plasticButton = document.createElement("button", { is: "plastic-button" });
plasticButton.textContent = "点我!";
document.body.appendChild(flagIcon);
 */