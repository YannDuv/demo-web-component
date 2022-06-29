import { html, css, LitElement } from "lit"
import { customElement, property } from "lit/decorators.js"

@customElement("my-element")
export class MyElement extends LitElement {
  static styles = css`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
      background: pink;
    }
  `

  @property()
  name = "World"
  @property({ type: Number })
  count = 0

  render() {
    return html`
      <h1>Salut, ${this.name}!</h1>
      <button @click=${this.increment} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `
  }

  private increment() {
    this.count++
    if (this.count === 10) {
      this.dispatchEvent(
        new CustomEvent("ten", {
          detail: { date: new Date() },
          bubbles: true,
          composed: true,
        })
      )
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement
  }
}
