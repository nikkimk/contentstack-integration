/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
import { ApiBehaviors } from "./api-behaviors.js";
import './course-toc-item.js';

/**
 * `course-toc`
 * a single tab within `course-tocs`
 * 
### Styling

`<course-toc>` provides the following custom properties
for styling:

Custom property | Description | Default
----------------|-------------|----------
  *
* @customElement
 * @extends LitElement
 */
class CourseToc extends ApiBehaviors(LitElement) {
 
    /**
     * Store the tag name to make it easier to obtain directly.
     */
    static get tag() {
        return "course-toc";
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
        ...super.properties
        };
    }
    constructor() {
        super();
    }

    render() {
        return !this.childEntries ? '' : html`
        <ol>
            ${this.childEntries.map(child => html`<li>
                <course-toc-item 
                    content-type="${this.childType}"
                    uid="${child?.uid}">
                </course-toc-item>
            </li>`)}
        </ol><br><br>${JSON.stringify(this.childEntries)}
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
window.customElements.define(CourseToc.tag, CourseToc);
export { CourseToc };
 