/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
import { ApiBehaviors } from "./api-behaviors.js";
 
/**
  * `course-toc-item`
  * a single tab within `course-toc-items`
  * 
### Styling

`<course-toc-item>` provides the following custom properties
for styling:

Custom property | Description | Default
----------------|-------------|----------
*
* @customElement
* @extends LitElement
*/
class CourseTocItem extends ApiBehaviors(LitElement) {

    /**
     * Store the tag name to make it easier to obtain directly.
     */
    static get tag() {
        return "course-toc-item";
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
            index: {
                type: Number,
                attribute: 'index'
            }
        };
    }
    constructor() {
        super();
    }

    render() {
        return !this.rawData ? '' : html`
        <a href="">${this.title}</a>
        ${!this.childEntries ? '' : html`
            <course-toc
                .raw-data="${this.rawData}"
                content-type="${this.contentType}"
                uid="${this.uid}">
            </course-toc>
        `}<br><br>${JSON.stringify(this.childEntries)}
        `;
    }
    get notFound(){
        return undefined;
    }
    get defaultTitle(){
        return  `${this.titleCase(this.contentType)} ${this.index || this.uid}`;
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
window.customElements.define(CourseTocItem.tag, CourseTocItem);
export { CourseTocItem };
  