
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

export async function RenderGallery(uid) {
  let data = FetchContent("gallery",uid) || false,
    frag = false;
  (data2?.entry?.images || data2?.entry?.image || []).forEach(
    (image) => {
      let img = RenderImage(image?.uid);
      if(!!img) {
        frag = fag || document.createElement('div');
        frag.append(img);
      }
    }
  );
  return frag;
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

export const tocChildren = {
  course: 'lessons',
  lesson: 'lesson_pages'
};

var params = {}, params2 = {};
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
  return !!param && !!uid ? `?type=${param}&uid=${uid}` : false;
};

export const makeLink = (data, suffix = '') => {
  let contentType = data?._content_type_uid,
    id = data?.uid,
    a = !!data && !!contentType && !!id ? document.createElement('a') : false;
  if(!a) return;
  a.innerHTML = data?.title || `${labelByContentType[contentType]}${suffix ? ` ${suffix}`: ''}`;
  a.setAttribute('href',makeHref(contentType, id));
  return a;
};

export function RenderToc(links){
  if(!links?.length || links?.length < 1) return false;
  let ol = document.createElement('ol');
  links.forEach((link,i) => {
    let li = RenderTocLi(link,i);
    ol.append(li);
  });
  return ol;
};

export function RenderTocLi(link,i){
  let data = !!contentType && !!uid 
      ? FetchContent(contentType, uid) 
      : false,
    a = makeLink(data,i),
    li = !!data ? document.createElement('li') : false;
  if(!li || !data) return false;
  li.append(a);
  if(link?._content_type_uid === 'lesson'){
    let ol = RenderToc(link?.content_pages);
    if(ol) li.append(ol);
  }
  return li;
};

export function RenderHeading(title,headingLevel = 1){
  let h = `h${headingLevel}`,
    heading = !!title ? document.createElement(h) : false;
  if(!heading) return;
  heading.innerHTML = title;
  return heading;
}

export function RenderPage(uid,headingLevel = 1){
  let data = FetchContent('lesson_page', uid),
    heading = !!data?.entry ? RenderHeading(data?.entry?.title,headingLevel) : false, 
    frag = !!data?.entry ? document.createDocumentFragment() : false,
    childHeading = headingLevel++;

  if(!frag) return false;
  if(!!heading) frag.append(heading);
  (data?.entry?.lesson_contents || []).forEach(contents => {
    let data = !!contents?._content_type_uid && !!contents?.uid ? FetchContent(contents?._content_type_uid, contents?.uid) : false;
    if(!data) return;
    frag.append(RenderContentSection(data,childHeading));
  })
  return frag;
}

export function RenderContentSection(data,headingLevel = 2){
  let heading = RenderHeading(data?.entry?.title,headingLevel), 
    frag,
    content;

  if (data?.entry?.rich_text_editor) {
    content = RenderRichText(uid);
  } else if (data?._content_type_uid === 'image'){
    content = RenderImage(uid)
  }  else if (data?._content_type_uid === 'gallery'){
    content = RenderGallery(uid)
  } 
  
  if(!heading && !content) return false;
  frag = document.createDocumentFragment();
  if(!!heading) frag.append(heading);
  if(!!content) frag.append(content);
  return frag;
}

export function RenderRichText(uid){
  let data = FetchContent('rich_text_editor', uid),
    frag = !!data?.entry ? document.createDocumentFragment() : false;

  if(!frag) return false;
  frag.innerHTML = data?.entry;
  return frag;
}

let search = window.location.search,
  searchParams = new URLSearchParams(search),
  requestType = !!searchParams?.get('type') ? searchParams?.get('type') : false,
  requestUid = !!searchParams?.get('uid') ? searchParams?.get('uid') : false,
  data = !!requestType && !!requestUid ?  FetchContent(requestType,requestUid) : false,
  bodyContents = false,
  bodyDesc = document.getElementById('description'),
  bodyHeading = document.getElementById('title');
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
  if(!!bodyHeading) bodyHeading.innerHTML = `Resource Not Found`;
  bodyContents = document.createElement('p');
  bodyContents.innerHTML = `The requested resource 
    ?type=${requestType}&uid=${requestUid} was not found. 
    Return to <a href="${makeHref('course','bltcd4215b62d8888b4')}">default page</a>.`
}
if(!!bodyContents && !!bodyDesc) bodyDesc.append(bodyContents);
