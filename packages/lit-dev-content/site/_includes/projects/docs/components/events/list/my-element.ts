import { LitElement, html, customElement, property } from '@polymer/lit-element';
@customElement('my-element')
class MyElement extends LitElement {
  @property() clicked = '';
  @property() focused = '';
  data = [1, 2, 3];
  protected render() {
    return html`
      <div key="container" @click=${this._clickHandler}>
        ${this.data.map(i => html`<p><button key=${i} @focus=${this._focusHandler}>Item ${i}</button></p>`)}
      </div>
      <p>Clicked: ${this.clicked}</p>
      <p>Focused: ${this.focused}</p>
    `;
  }
  private _clickHandler(e: Event) {
    this.clicked = (e.target as Element).getAttribute('key');
  }
  private _focusHandler(e: Event) {
    this.focused = (e.target as Element).textContent;
  }
}
