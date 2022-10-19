/*! For license information please see 526.main.js.LICENSE.txt */
"use strict";(self.webpackChunkgetting_started_using_a_configuration=self.webpackChunkgetting_started_using_a_configuration||[]).push([[526],{526:(t,e,i)=>{i.r(e),i.d(e,{CourseToc:()=>u});var s=i(897),r=i(769);class n extends((0,r.s)(s.oi)){static get tag(){return"course-toc-item"}static get styles(){return[s.iv`
        `]}static get properties(){return{...super.properties,index:{type:Number,attribute:"index"}}}constructor(){super()}render(){return this.rawData?s.dy`
            <a href="${this.makeRoute(this.contentType,this.uid)}">${this.title}</a>
            ${this.childEntries?s.dy`
                <course-toc
                    .raw-data="${this.rawData}"
                    content-type="${this.contentType}"
                    uid="${this.uid}">
                </course-toc>
            `:""}
        `:""}get notFound(){}get defaultTitle(){return`${this.titleCase(this.contentType)} ${this.index||this.uid}`}}window.customElements.define(n.tag,n);class u extends((0,r.s)(s.oi)){static get tag(){return"course-toc"}static get styles(){return[s.iv`
        `]}static get properties(){return{...super.properties}}constructor(){super()}render(){return this.childEntries?s.dy`
        <ol>
            ${this.childEntries.map((t=>s.dy`<li>
                <course-toc-item 
                    content-type="${this.childType}"
                    uid="${t?.uid}">
                </course-toc-item>
            </li>`))}
        </ol><br><br>${JSON.stringify(this.childEntries)}
        `:""}}window.customElements.define(u.tag,u)}}]);