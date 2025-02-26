import{a as u,S as f,i}from"./assets/vendor-CI_1IWob.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",m="31000801-179358ed9db1a9fc0904af43d";function g(o){const a=new URLSearchParams({key:m,image_type:"photo",orientation:"horizontal",safesearch:!0,q:o});return u(`${p}?${a}`).then(({data:r})=>(console.log(r),r)).catch(r=>{throw console.log(r.message),r})}const n=document.querySelector(".gallery");let y=document.querySelector(".preloader");const h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function v(o=[]){return o.map(({webformatURL:a,largeImageURL:r,tags:c,likes:e,views:t,comments:s,downloads:d})=>`
        <li class="gallery-item">
          <a href="${r}" class="gallery-link">
            <div class="card-wrapper-img">
              <img
                class="card-img"
                src="${a}"
                alt="${c}"
              />
            </div>
            <div class="card-info">
              <div class="card-info-colum">
                <p class="card-info-title">likes</p>
                <p class="card-info-value">${e}</p>
              </div>
              <div class="card-info-colum">
                <p class="card-info-title">views</p>
                <p class="card-info-value">${t}</p>
              </div>
              <div class="card-info-colum">
                <p class="card-info-title">comments</p>
                <p class="card-info-value">${s}</p>
              </div>
              <div class="card-info-colum">
                <p class="card-info-title">downloads</p>
                <p class="card-info-value">${d}</p>
              </div>
            </div>
          </a>
        </li>`).join("")}function L(o){n.innerHTML=v(o),h.refresh()}function b(){n.innerHTML=""}function S(){y.classList.add("show")}const w=document.querySelector(".search-form button"),E=document.querySelector(".search-form button");function l(o){o.preventDefault();const a=Object.fromEntries(new FormData(o.target));a.message!==""&&(S(),b(),g(a.message).then(({hits:r})=>{if(r.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(r)}).catch(r=>{i.error({message:"Error!!!"})}).finally(()=>{}))}w.addEventListener("click",l);E.addEventListener("input",l);
//# sourceMappingURL=index.js.map
