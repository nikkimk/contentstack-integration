/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
 /**
  * ApiBehaviors
  * provides connection to ContentStack API
  * 
  */
import { html } from 'lit';

export const ApiBehaviors = function (SuperClass) {
    return class extends SuperClass {
        // properties available to the custom element for data binding
        static get properties() {
            return {
                rawData: {
                    type: Object,
                    attribute: "raw-data"
                },
                contentType: {
                    type: String,
                    attribute: "content-type",
                    reflect: true
                },
                uid: {
                    type: String,
                    attribute: "uid",
                    reflect: true
                }
            };
        }
        updated(changedProperties) {
            changedProperties.forEach((oldValue, propName) => {
                if(['contentType','uid'].includes(propName) && !!this.contentType && !!this.uid) this.updateData();
                if(propName === 'rawData') console.log('data updated',this,this.rawData);
            });
        }
        get notFound(){
            return undefined;
        }
        get defaultTitle(){
            return  `${this.titleCase(this.contentType)} ${this.uid}`;
        }
        get title(){
            return !this.rawData ? this.notFound : this.rawData?.entry?.title || this.defaultTitle;
        }
        get apiURL(){
            return this.makeApiURL(this.contentType,this.uid);
        }
        get childrenType(){
         return this.contentType === "course" 
            ? "lessons" 
            : this.contentType === "lesson" 
                ? "lesson_pages"
                : this.contentType === "lesson_page" 
                    ? "lesson_contents" 
                    : this.contentType === "gallery" 
                        ? "image" 
                        : undefined;
        }
        get childType(){
         return this.contentType === "course" 
            ? "lesson" 
            : this.contentType === "lesson" 
                ? "lesson_page"
                : this.contentType === "lesson_page" 
                    ? "content_section" 
                    : this.contentType === "rich_text_editor" 
                        ? "rich_text_editor" 
                    : this.contentType === "gallery" 
                        ? "image" 
                        : undefined;
        }

        get childEntries(){
            return !this.rawData?.entry || !this.childrenType ? undefined : this.rawData.entry[this.childrenType];
        }
        get fetchConfig(){
            console.log(this,this.apiURL);
            return {
                type: "GET",
                url: this.apiURL,
                headers: {
                    "Content-Type": "application/json",
                    api_key: "blt7836b431547639d4",
                    access_token: "cscae096889624674a41446817"
                },
                dataType: "json"
            };
        }
        renderContentType(contentType,uid,rawData,showTitle = false,headingLevel = 2){
            if(contentType === "course" || contentType === "lesson"){
                import('./course-toc.js');
                return html`
                    <course-toc 
                    .raw-data="${rawData}"
                    content-type="${contentType}"
                    uid="${uid}"
                    ></course-toc>
                `;
            } else if(contentType === "lesson_page" || contentType === "content_section" || contentType === "gallery"){
                import('./course-page-section.js');
                return html`
                    <course-page-section
                    .raw-data="${rawData}"
                    content-type="${contentType}"
                    uid="${uid}"
                    ?show-title="${showTitle}"
                    heading-level="${headingLevel}"
                    ></course-page-section>
                `
            } else if(contentType === "rich_text_editor"){
                import('./rich-text-content.js');
                return html`
                    <rich-text-content 
                    .raw-data="${rawData}"
                    ?show-title="${showTitle}"
                    heading-level="${headingLevel}"
                    ></rich-text-content>
                `;
            } else if(contentType === "image"){
                import('./course-image.js');
                return html`
                    <course-image 
                    .raw-data="${rawData}"
                    content-type="${contentType}"
                    uid="${uid}"
                    ?show-title="${showTitle}"
                    heading-level="${headingLevel}"
                    ></course-image>
                `;
            } else {
                return html`NONE ${contentType} / ${uid} <br>"${rawData}`;
            }
        }

        titleCase(str){
            return str.replace(
                /\w\S*/g,
                function(txt) {
                  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                }
            );
        }
        makeApiURL(contentType,uid){
            return !!contentType && !!uid ? `https://cdn.contentstack.io/v3/content_types/${contentType}/entries/${uid}?environment=production` : false;
        }
        makeRoute(contentType,uid){
            return !!contentType && !!uid ? `?type=${contentType}&uid=${uid}` : false;
        }
        updateData(){
            if(!this.apiURL) return;
            let getData = async() => {
                const response = await fetch(this.apiURL, this.fetchConfig);
                this.rawData = await response.json();
            };
            getData();
        }
    };
};
 