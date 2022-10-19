/*! For license information please see 612.main.js.LICENSE.txt */
"use strict";(self.webpackChunkgetting_started_using_a_configuration=self.webpackChunkgetting_started_using_a_configuration||[]).push([[612],{612:(e,t,i)=>{i.r(t),i.d(t,{CoursePageSection:()=>h});var s=i(897),r=i(769);class h extends((0,r.s)(s.oi)){static get tag(){return"course-page-section"}static get styles(){return[s.iv`
      `]}static get properties(){return{...super.properties,showTitle:{type:Boolean,attribute:"show-title",reflect:!0},headingLevel:{type:Number,attribute:"heading-level"}}}constructor(){super(),this.headingLevel=2}render(){return s.dy`
      ${this.title&&this.showTitle?1===this.headingLevel?s.dy`<h1>${this.title}</h1>`:2===this.headingLevel?s.dy`<h2>${this.title}</h2>`:3===this.headingLevel?s.dy`<h3>${this.title}</h3>`:4===this.headingLevel?s.dy`<h4>${this.title}</h4>`:5===this.headingLevel?s.dy`<h5>${this.title}</h5>`:s.dy`<h6>${this.title}</h6>`:""}
      ${this.rawData?.entry?.rich_text_editor?this.renderContentType("rich_text_editor",this.uid,this.rawData?.entry?.rich_text_editor):""}
      ${this.childEntries?this.childEntries.map((e=>s.dy`
          ${this.renderContentType(e?._content_type_uid,e?.uid,void 0,!0,this.headingLevel++)}
        `)):""}
    `}s;connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(e){super.updated&&super.updated(e),e.forEach(((e,t)=>{}))}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),e.forEach(((e,t)=>{}))}}window.customElements.define(h.tag,h)}}]);