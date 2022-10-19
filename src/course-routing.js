/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
 import { LitElement, html, css } from "lit";
import { ApiBehaviors } from "./api-behaviors.js";
 
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
 class A11yTab extends LitElement(ApiBehaviors) {
 
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
            <tt>?type=${requestType}&uid=${requestUid}</tt> was not found.
            Return to <a href="${this.makeApiURL('course','bltcd4215b62d8888b4')}">
                default page
            </a>.

        ` : this.contentType === "course" ? html`
            COURSE
        ` : this.contentType === "lesson" ? html`
            LESSON
        ` : this.contentType === "lesson_page" ? html`
            PAGE
        ` : html`NONE`}
     `;
   }
 
   connectedCallback() {
     super.connectedCallback();
     let search = window.location.search,
       searchParams = new URLSearchParams(search);
       this.contentType = !!searchParams?.get('type') ? searchParams?.get('type') : false;
       this.uid = !!searchParams?.get('uid') ? searchParams?.get('uid') : false;
       console.log('init',search,requestType,requestUid,data);
     if(!!data) {
       if(bodyHeading) bodyHeading.innerHTML = data?.entry?.title || `${requestType} ${requestUid}`;
       if(requestType == "lesson_page") {
         bodyContents = RenderPage(requestUid);
       } else if(requestType == "lesson"){
         bodyContents = RenderToc(data?.entry?.lesson_pages);
       } else if(requestType == "course") {
         bodyContents = RenderToc(data?.entry?.lessons);
       }
     } else {
       console.log('404',bodyHeading,bodyContents);
       if(!!bodyHeading) bodyHeading.innerHTML = `Resource Not Found`;
       bodyContents = document.createElement('p');
       bodyContents.innerHTML = `The requested resource 
         ?type=${requestType}&uid=${requestUid} was not found. 
         Return to <a href="${makeHref('course','bltcd4215b62d8888b4')}">default page</a>.`
     }
     if(!!bodyContents && !!bodyDesc) bodyDesc.append(bodyContents);  
   }
 
    disconnectedCallback() {
        super.disconnectedCallback();
    }
    get title(){
        return !this.rawData ? 'Resource Not Found' : this.rawData?.entry?.title || `${this.contentType} ${this.uid}`;
    }
    /**
        * @fires a11y-tab-changed
        */
    updated(changedProperties) {
        if(super.updated) super.updated(changedProperties);
        changedProperties.forEach((oldValue, propName) => {
            if(propName === 'rawData') document.head.title.innerHTML = this.title;
        });
    }
 }
 window.customElements.define(A11yTab.tag, A11yTab);
 export { A11yTab };
 