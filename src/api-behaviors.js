/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
 /**
  * ApiBehaviors
  * provides connection to ContentStack API
  * 
  */
export const ApiBehaviors = function (SuperClass) {
    return class extends SuperClass {
        // properties available to the custom element for data binding
        static get properties() {
            return {
                rawData: {
                    type: Object,
                },
                contentType: {
                    type: String,
                },
                uid: {
                    type: String,
                }
            };
        }
        constructor() {
            super();
        }
        
        connectedCallback() {
            super.connectedCallback();
        }
        
        disconnectedCallback() {
            super.disconnectedCallback();
        }
        updated(changedProperties) {
            changedProperties.forEach((oldValue, propName) => {
                if(['contentType','uid'].includes(propName) && !!this.contentType && !!this.uid) this.updateData();
                if(propName === 'rawData') console.log('data updated',this.rawData);
            });
        }
        get apiURL(){
            return this.makeApiURL(this.contentType,this.uid);
        }
        makeApiURL(contentType,uid){
            !!contentType && !!uid ? `https://cdn.contentstack.io/v3/content_types/${contentType}/entries/${uid}?environment=production` : false
        }
        updateData(){
            let getData = async() => {
                const response = await fetch(url, {
                    type: "GET",
                    url: this.apiURL,
                    headers: {
                        "Content-Type": "application/json",
                        api_key: "blt7836b431547639d4",
                        access_token: "cscae096889624674a41446817"
                    },
                    dataType: "json"
                });
                return response.json();
            };
            console.log('updating');
            this.rawData = getData();
        }
    }
}
 