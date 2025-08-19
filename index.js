import{a as m,S as d,i}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const h="51864768-c4389465b0331a2f70f5d6290",L="https://pixabay.com/api/";async function w(s){const r={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await m.get(L,{params:r})).data}const v={getImagesByQuery:w},c=document.querySelector(".gallery"),u=document.querySelector(".loader-box"),b=new d(".gallery a",{captionsData:"alt",captionDelay:250});function S(s){const r=s.map(a=>{const{webformatURL:l,largeImageURL:e,tags:t,likes:o,views:y,comments:p,downloads:g}=a;return`
      <li class="gallery-item">
        <a href="${e}">
          <img src="${l}" alt="${t}" class="gallery-image" loading="lazy"/>
        </a>
        <ul class="gallery-info">
          <li class="gallery-info-item">
            <span class="gallery-info-title">Likes</span>
            <span class="gallery-info-value">${o}</span>
          </li>
          <li class="gallery-info-item">
            <span class="gallery-info-title">Views</span>
            <span class="gallery-info-value">${y}</span>
          </li>
          <li class="gallery-info-item">
            <span class="gallery-info-title">Comments</span>
            <span class="gallery-info-value">${p}</span>
          </li>
          <li class="gallery-info-item">
            <span class="gallery-info-title">Downloads</span>
            <span class="gallery-info-value">${g}</span>
          </li>
        </ul>
      </li>`}).join("");c.innerHTML=r,b.refresh()}function q(){c.innerHTML=""}function x(){u.classList.remove("hidden")}function P(){u.classList.add("hidden")}const n={createGallery:S,clearGallery:q,showLoader:x,hideLoader:P},f=document.querySelector(".form"),$=f.querySelector("input[name='search-text']");f.addEventListener("submit",async s=>{s.preventDefault();const r=$.value.trim();if(r){n.clearGallery(),n.showLoader();try{const a=await v.getImagesByQuery(r);if(!a.hits||a.hits.length===0){i.error({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}n.createGallery(a.hits)}catch(a){i.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(a)}finally{n.hideLoader()}}});
//# sourceMappingURL=index.js.map
