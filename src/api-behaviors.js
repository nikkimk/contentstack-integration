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
        updated(changedProperties) {
            changedProperties.forEach((oldValue, propName) => {
                if(['contentType','uid'].includes(propName) && !!this.contentType && !!this.uid) this.updateData();
                if(propName === 'rawData') console.log('data updated',this.rawData);
            });s
        }
        get apiURL(){
            return this.makeApiURL(this.contentType,this.uid);
        }
        get childType(){
         return this.contentType === "course" 
            ? "lessons" 
            : this.contentType === "lesson" 
                ? "lesson_pages"
                : this.contentType === "lesson_page" 
                    ? "content" 
                    : this.contentType === "gallery" 
                        ? "image" 
                        : undefined;
        }
        get children(){
            return !this.rawData?.entry || !this.childType ? undefined : this.rawData.entry[this.childType];
        }
        get fetchConfig(){
            console.log(this.apiURL);
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
        makeApiURL(contentType,uid){
            return !!contentType && !!uid ? `https://cdn.contentstack.io/v3/content_types/${contentType}/entries/${uid}?environment=production` : false;
        }
        makeRoute(contentType,uid){
            return !!contentType && !!uid ? `?type=${contentType}&uid=${uid}` : false;
        }
        updateData(){
            console.log('updating',this.fetchConfig);
            let getData = async() => {
                const response = await fetch(url, this.fetchConfig);
                return response.json();
            };
            this.rawData = getData();
        }
    };
};
 