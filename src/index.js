import _ from 'lodash';
import '@lrnwebcomponents/deduping-fix/deduping-fix.js';
import './get-content.js';
/*
let search = window.location.search,
  params = new URLSearchParams(search),
  contentType = !!params.get('content_section')
    ? 'content_section'
    : !!params.get('lesson_page')
    ? 'lesson_page'
    : !!params.get('lesson')
    ? 'lesson'
    : 'course',
  entity =
    params.get('content_section') ||
    params.get('lesson_page') ||
    params.get('lesson') ||
    params.get('course') ||
    'bltcd4215b62d8888b4';

async function getData(url = '') {
  const response = await fetch(url, {
    type: 'GET',
    url: url,
    headers: {
      'Content-Type': 'application/json',
      api_key: 'blt7836b431547639d4',
      access_token: 'cscae096889624674a41446817',
    },
    dataType: 'json',
  });
  console.log(response);
  return response.json();
}

const labelsByContentType = {
  course: 'course',
  lesson: 'lesson',
  lesson_page: 'page',
  content_section: 'content',
};
let description = document.getElementById('description');

getData(getURL(contentType, entity)).then((data) => {
  document.getElementById('title').innerHTML =
    data?.entry?.title || labelsByContentType[contentType] || 'Content';

  if (contentType === 'course' || contentType === 'lesson') {
    let ol = document.createElement('ol'),
      tocType = contentType === 'course' ? 'lesson' : 'lesson_page',
      children = contentType === 'course' ? 'lessons' : 'lesson_pages';
    if (description) description.append(ol);
    (data?.entry[children] || []).forEach((child) => {
      getTOC(tocType, child?.uid, ol);
    });
  } else if (contentType === 'lesson_page') {
    (data?.entry?.lesson_contents || []).forEach((contents) => {
      getData(getURL(contents?._content_type_uid, contents?.uid)).then(
        (data2) => {
          console.log(contents, data2);
          description.innerHTML += `<h2>${data2?.entry?.title}</h2>`;
          if (data2?.entry?.rich_text_editor) {
            description.innerHTML += data2?.entry?.rich_text_editor;
          } else if (contents?._content_type_uid === 'gallery') {
            console.log('data2', data2?.entry);
            (data2?.entry?.images || data2?.entry?.image || []).forEach(
              (image) => {
                let img = document.createElement('img');
                getImg(image?.uid, img);
                if (description) description.append(img);
              }
            );
          } else if (contents?._content_type_uid === 'image') {
            let img = document.createElement('img');
            getImg(contents?.uid, img);
            if (description) description.append(img);
          }
        }
      );
    });
  } else {
    console.log('nope');
  }
});

function getImg(entity, img) {
  getData(getURL('image', entity)).then((data) => {
    img.setAttribute('alt', data?.entry?.alt_text);
    img.setAttribute('src', data?.entry?.file?.url);
    console.log('image', data, img);
  });
}

function getTOC(contentType, entity, ol) {
  getData(getURL(contentType, entity)).then((data, i) => {
    let li = document.createElement('li'),
      title =
        data?.entry?.title ||
        `${labelsByContentType[contentType] || 'entity'} ${i}`;
    console.log(contentType, entity, data);
    li.innerHTML = `<a href="?${contentType}=${entity}">${title}</a>`;
    if (ol) ol.append(li);
    if (contentType === 'lesson') {
      console.log(data);
      let ol2 = document.createElement('ol');
      if (li) li.append(ol2);
      (data?.entry?.lesson_pages || []).forEach((page) => {
        console.log('pages -->', data, page, page?.uid);
        getTOC('lesson_page', page?.uid, ol2);
      });
    }
  });
}

function getURL(contentType, entry) {
  if (!!contentType && !!entry) {
    return `https://cdn.contentstack.io/v3/content_types/${contentType}/entries/${entry}?environment=production`;
  }
  return false;
}
*/
