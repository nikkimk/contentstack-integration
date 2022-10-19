/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
 import { LitElement, html, css } from "lit";
 /**
  * `a11y-tab`
  * a single tab within `a11y-tabs`
  * 
 ### Styling
 
 `<a11y-tab>` provides the following custom properties
 for styling:
 
 Custom property | Description | Default
 ----------------|-------------|----------
  *
  * @customElement
  * @extends LitElement
  * @see ../a11y-tabs.js
  */
 class A11yTab extends LitElement {
 
    /**
     * Store the tag name to make it easier to obtain directly.
     */
    static get tag() {
      return "a11y-tab";
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
        
     };
   }
   constructor() {
     super();
   }
   
   render() {
     return html`
     `;
   }
 
   connectedCallback() {
     super.connectedCallback();
   }
 
   disconnectedCallback() {
     super.disconnectedCallback();
   }
   /**
    * @fires a11y-tab-changed
    */
   updated(changedProperties) {
     changedProperties.forEach((oldValue, propName) => {
     });
   }
 }
 window.customElements.define(A11yTab.tag, A11yTab);
 export { A11yTab };
 