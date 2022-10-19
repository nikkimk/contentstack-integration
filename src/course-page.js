/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
import { ApiBehaviors } from "./api-behaviors.js";
 /**
  * `course-page`
  * a single tab within `course-pages`
  * 
 ### Styling
 
 `<course-page>` provides the following custom properties
 for styling:
 
 Custom property | Description | Default
 ----------------|-------------|----------
  *
  * @customElement
  * @extends LitElement
  */
class CoursePage extends ApiBehaviors(LitElement) {

  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "course-page";
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
      ...super.properties,
      headingLevel: {
        type: Number,
        attribute: "heading-level"
      }
    };
  }
  constructor() {
    super();
    this.headingLevel = 1;
  }
  
  render() {
    return html`
      ${!this.rawData?.entry?.rich_text_editor ? '' : this.renderContentType('rich_text_editor',this.uid,this.rawData?.entry?.rich_text_editor)}
      ${!this.childEntries ? '' 
        : this.childEntries.map(child => html`
          <p>${JSON.stringify(child)}</p><br><br>
        `)
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
  }
  updated(changedProperties) {
    if(super.updated) super.updated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
    });
  }
  firstUpdated(changedProperties) {
    if(super.firstUpdated) super.firstUpdated(changedProperties);
    changedProperties.forEach((oldValue, propName) => {
    });
  }
}
window.customElements.define(CoursePage.tag, CoursePage);
export { CoursePage };
