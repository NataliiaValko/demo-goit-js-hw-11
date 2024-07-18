import{S as u,i as c}from"./assets/vendor-0fc460d7.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="https://pixabay.com/api/",m="31000801-179358ed9db1a9fc0904af43d";function p(s){const a=new URLSearchParams({key:m,image_type:"photo",orientation:"horizontal",safesearch:!0,q:s});return fetch(`${f}?${a}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function y(s=[]){return s.map(({webformatURL:a,largeImageURL:t,tags:i,likes:e,views:r,comments:o,downloads:d})=>`
        <li class="gallery-item">
          <a href="${t}" class="gallery-link">
            <div class="card-wrapper-img">
              <img
                class="card-img"
                src="${a}"
                alt="${i}"
              />
            </div>
            <div class="card-info">
              <div class="card-info-colum">
                <p class="card-info-title">likes</p>
                <p class="card-info-value">${e}</p>
              </div>
              <div class="card-info-colum">
                <p class="card-info-title">views</p>
                <p class="card-info-value">${r}</p>
              </div>
              <div class="card-info-colum">
                <p class="card-info-title">comments</p>
                <p class="card-info-value">${o}</p>
              </div>
              <div class="card-info-colum">
                <p class="card-info-title">downloads</p>
                <p class="card-info-value">${d}</p>
              </div>
            </div>
          </a>
        </li>`).join("")}const g=new u(".gallery a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".search-form"),n=document.querySelector(".gallery");let l=document.querySelector(".preloader");function v(s){s.preventDefault();const a=Object.fromEntries(new FormData(s.target));a.message!==""&&(l.classList.add("show"),n.innerHTML="",p(a.message).then(({hits:t})=>{if(t.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}n.innerHTML=y(t),g.refresh()}).catch(t=>{c.error({message:"Error!!!"})}).finally(()=>{l.classList.remove("show")}))}h.addEventListener("submit",v);
//# sourceMappingURL=commonHelpers.js.map
