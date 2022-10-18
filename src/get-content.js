
export async function FetchContentByURL(url = "") {
  const response = await fetch(url, {
    type: "GET",
    url: url,
    headers: {
      "Content-Type": "application/json",
      api_key: "blt7836b431547639d4",
      access_token: "cscae096889624674a41446817"
    },
    dataType: "json"
  });
  return response.json();
}

export async function FetchContent(contentType,uid) {
  let content = false;
  if (!!contentType && !!uid) {
    content = FetchContentByURL(`https://cdn.contentstack.io/v3/content_types/${contentType}/entries/${uid}?environment=production`);
  }
  return content;
};

export async function RenderImage(uid) {
  let data = FetchContent("image",uid) || false, 
    img = !!data ? document.createElement('img') : false;
  if(!image) return false;
  img.setAttribute("alt", data?.entry?.alt_text);
  img.setAttribute("src", data?.entry?.file?.url);
}

export async function RenderImage(uid) {
  let data = FetchContent("image",uid) || false, 
    img = !!data ? document.createElement('img') : false;
  if(!image) return false;
  img.setAttribute("alt", data?.entry?.alt_text);
  img.setAttribute("src", data?.entry?.file?.url);
}

export const labelByContentType = {
  'course': 'Course',
  'lesson': 'Lesson',
  'lesson_page': 'Page',
  'content_section': 'Content',
  'image': 'Image',
  'gallery': 'Gallery'
}
let params = {}, params2 = {};
Object.keys(labelByContentType || {}).forEach(key=>{
  let label = labelByContentType[key],
    param = !!label ? label.toLowerCase() : false;
  if(!param) return;
  params[param] = key;
  params2[key] = param;
});

export const paramByContentType = params;
export const contentTypeByParams = params2;

export const makeHref = (contentType,uid) => {
  let param = paramByContentType[contentType];
  return !!param && !!uid ? `?${param}=${uid}` : false;
};

export const makeLink = (contentType,uid, suffix = '') => {
  let data = !!contentType && !!uid 
      ? FetchContent(contentType, uid) 
      : false,
    a = !!data ? document.createElement('a') : false;
  if(!a) return;
  a.innerHTML = data?.title || `${labelByContentType[contentType]}${suffix ? ` ${suffix}`: ''}`;
  a.setAttribute('href',makeHref(contentType, uid));
  return a;
};

export function RenderTocLinks(links){
  if(!links?.length || links?.length < 1) return false;
  let ol = document.createElement('ol');
  links.forEach((link,i) => {
    let a = makeLink(link?._content_type_uid,link?.uid,i),
      li = !!data ? document.createElement('li') : false;
    if(!li) return false;
    li.append(a);
    return li;
  })
};

export function RenderTocLink(link,i){
  let a = makeLink(link?._content_type_uid,link?.uid,i),
    li = !!data ? document.createElement('li') : false;
  if(!li) return false;
  li.append(a);
  return li;
};
