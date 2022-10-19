/*! For license information please see 748.main.js.LICENSE.txt */
"use strict";(self.webpackChunkgetting_started_using_a_configuration=self.webpackChunkgetting_started_using_a_configuration||[]).push([[748],{748:(e,t,r)=>{r.r(t),r.d(t,{CoursePage:()=>a});var i=r(897),s=r(769);class a extends((0,s.s)(i.oi)){static get tag(){return"course-page"}static get styles(){return[i.iv`
      `]}static get properties(){return{...super.properties,headingLevel:{type:Number,attribute:"heading-level"}}}constructor(){super(),this.headingLevel=1}render(){return i.dy`
      ${this.rawData?.entry?.rich_text_editor?this.renderContentType("rich_text_editor",this.uid,this.rawData?.entry?.rich_text_editor):""}
      ${this.childEntries?this.childEntries.map((e=>i.dy`
          ${this.renderContentType(e?._content_type_uid,e?.uid,void 0,!0,this.headingLevel++)}
          <p>${JSON.stringify(e)}</p><br><br>
        `)):""}
    `}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback()}updated(e){super.updated&&super.updated(e),e.forEach(((e,t)=>{}))}firstUpdated(e){super.firstUpdated&&super.firstUpdated(e),e.forEach(((e,t)=>{}))}}window.customElements.define(a.tag,a)}}]);