/*! For license information please see 526.main.js.LICENSE.txt */
"use strict";(self.webpackChunkgetting_started_using_a_configuration=self.webpackChunkgetting_started_using_a_configuration||[]).push([[526],{526:(t,e,s)=>{s.r(e),s.d(e,{CourseToc:()=>o});var i=s(897),r=s(769);class n extends((0,r.s)(i.oi)){static get tag(){return"course-toc-item"}static get styles(){return[i.iv`
        `]}static get properties(){return{...super.properties,index:{type:Number,attribute:"index"}}}constructor(){super()}render(){return this.rawData?i.dy`
            <a href="${this.makeRoute(this.contentType,this.uid)}">${this.title}</a>
            ${this.childEntries?i.dy`
                <course-toc
                    .raw-data="${this.rawData}"
                    content-type="${this.contentType}"
                    uid="${this.uid}">
                </course-toc>
            `:""}
        `:""}get notFound(){}get defaultTitle(){return`${this.titleCase(this.contentType)} ${this.index||this.uid}`}}window.customElements.define(n.tag,n);class o extends((0,r.s)(i.oi)){static get tag(){return"course-toc"}static get styles(){return[i.iv`
        `]}static get properties(){return{...super.properties}}constructor(){super()}render(){return this.childEntries||"lesson_page"===this.contentType?i.dy`
        <ol>
            ${this.childEntries.map((t=>i.dy`<li>
                <course-toc-item 
                    content-type="${this.childType}"
                    uid="${t?.uid}">
                </course-toc-item>
            </li>`))}
        </ol>
        `:""}}window.customElements.define(o.tag,o)}}]);