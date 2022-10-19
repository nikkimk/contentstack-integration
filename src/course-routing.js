/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
import { ApiBehaviors } from "./api-behaviors.js";
import './course-toc.js';
 
 /**
  * `course-routing`
  * a single tab within `course-routings`
  * 
 ### Styling
 
 `<course-routing>` provides the following custom properties
 for styling:
 
 Custom property | Description | Default
 ----------------|-------------|----------
  *
  * @customElement
  * @extends LitElement
  */
 class CourseRouting extends ApiBehaviors(LitElement) {
 
    /**
     * Store the tag name to make it easier to obtain directly.
     */
    static get tag() {
      return "course-routing";
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
     };
   }
   constructor() {
     super();
   }
   
   render() {
     return html`
        <h1>${this.title}</h1>
        ${!this.rawData ? html`
            <p>The requested resource 
            <tt>${this.makeRoute(this.contentType,this.uid)}</tt> was not found.
            Return to <a href="${this.makeRoute('course','bltcd4215b62d8888b4')}">
                default page
            </a>.

        ` : this.contentType === "course" ? html`
            <course-toc 
              .raw-data="${this.rawData}"
              content-type="${this.contentType}"
              uid="${this.uid}"
            ></course-toc>
        ` : this.contentType === "lesson" ? html`
            LESSON
        ` : this.contentType === "lesson_page" ? html`
            PAGE
        ` : html`NONE`}
     `;
   }
   get notFound(){
       return 'Resource Not Found';
   }
 
   connectedCallback() {
     super.connectedCallback();
     let search = window.location.search,
       searchParams = new URLSearchParams(search);
    this.contentType = !!searchParams?.get('type') ? searchParams?.get('type') : false;
    this.uid = !!searchParams?.get('uid') ? searchParams?.get('uid') : false;
   }
 
    disconnectedCallback() {
        super.disconnectedCallback();
    }

    updated(changedProperties) {
        if(super.updated) super.updated(changedProperties);
        changedProperties.forEach((oldValue, propName) => {
            if(propName === 'rawData') console.log(document?.head?.title,this.title);
        });
    }
    firstUpdated(changedProperties) {
        if(super.firstUpdated) super.firstUpdated(changedProperties);
    }
 }
 window.customElements.define(CourseRouting.tag, CourseRouting);
 export { CourseRouting };
 