class HelloComponent extends HTMLElement {
  static get observedAttributes () {
    return ['data-name']
  }

  render () {
    this.innerHTML = `<h1>Hello  ${this.name}, <span>welcome</span></h1>`
  }

  get name () {
    return this.getAttribute('data-name')
  }

  connectedCallback () {
    this.render()
  }

  attributeChangedCallback (attrName, oldVal, newVal) {
    this.render()
  }
}

window.customElements.define('hello-component', HelloComponent)