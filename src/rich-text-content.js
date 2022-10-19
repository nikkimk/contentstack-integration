/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
 /**
  * `rich-text-content`
  * a single tab within `rich-text-contents`
  * 
 ### Styling
 
 `<rich-text-content>` provides the following custom properties
 for styling:
 
 Custom property | Description | Default
 ----------------|-------------|----------
  *
  * @customElement
  * @extends LitElement
  */
class RichTextContent extends LitElement {

  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "rich-text-content";
  }

  static get styles() {
    return [
      css`
      `,
    ];
  }
  // properties available to the custom element for data binding
  static get properties() {
    return {
      richText: {
        type: String,
        attribute: "rich-text",
        reflect: true
      },
    };
  }
  constructor() {
    super();
  }
  
  render() {
    return html`<slot></slot>`;
  }
  updated(changedProperties) {
    if(super.updated) super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
      if(propName === 'richText' && !!this.richText) this.innerHTML = this.richText;
    });
  }
}
window.customElements.define(RichTextContent.tag, RichTextContent);
export { RichTextContent };
