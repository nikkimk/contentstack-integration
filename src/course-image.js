/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
 import { LitElement, html, css } from "lit";
 import { ApiBehaviors } from "./api-behaviors.js";
  /**
   * `course-image`
   * a single tab within `course-images`
   * 
  ### Styling
  
  `<course-image>` provides the following custom properties
  for styling:
  
  Custom property | Description | Default
  ----------------|-------------|----------
   *
   * @customElement
   * @extends LitElement
   */
 class CourseImage extends ApiBehaviors(LitElement) {
 
   /**
    * Store the tag name to make it easier to obtain directly.
    */
   static get tag() {
     return "course-image";
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
       showTitle: {
         type: Boolean,
         attribute: "show-title",
         reflect: true
       },
       headingLevel: {
         type: Number,
         attribute: "heading-level"
       }
       
     };
   }
   constructor() {
     super();
     this.headingLevel = 2;
   }
   
   render() {
        return html`
            ${!this.title || !this.showTitle 
                ? '' 
                : this.headingLevel === 1 
                ? html`<h1>${this.title}</h1>`
                : this.headingLevel === 2 
                    ? html`<h2>${this.title}</h2>`
                    : this.headingLevel === 3 
                    ? html`<h3>${this.title}</h3>`
                    : this.headingLevel === 4 
                        ? html`<h4>${this.title}</h4>`
                        : this.headingLevel === 5 
                        ? html`a<h5>${this.title}</h5>`
                        : html`<h6>${this.title}</h6>`
            }
            <figure>
                <img width="33%" src="${this.url}" alt="${this.alt}">
                <figcaption>${this.desc}</figcaption>
            </figure>
        `;
   }
   get file(){
    return this.rawData?.entry?.file;
   }
   get url(){
    return this.file?.url;
   }
   get alt(){
    return this.rawData?.entry?.alt_text;
   }
   get desc(){
    return this.rawData?.entry?.long_description;
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
     console.log(this,this.rawData?.entry);
   }
   firstUpdated(changedProperties) {
     if(super.firstUpdated) super.firstUpdated(changedProperties);
     changedProperties.forEach((oldValue, propName) => {
     });
   }
 }
 window.customElements.define(CourseImage.tag, CourseImage);
 export { CourseImage };
 