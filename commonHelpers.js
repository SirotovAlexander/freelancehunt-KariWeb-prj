import{S as w}from"./assets/vendor-d93afd35.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const _=document.querySelectorAll(".hero__button"),p=document.querySelector('[data-modal="modal-wholesale"]'),E=document.querySelector(".mClose-fix");_.forEach(e=>{e.addEventListener("click",n=>{p.classList.toggle("is-hidden")})});E.addEventListener("click",S);function S(e){p.classList.add("is-hidden")}const k=document.querySelector(".product__valueFirst"),q=document.querySelector(".product__valueSecond"),b=document.querySelector(".styled-slider.slider-progress"),y=document.querySelector(".sliderValue");b.addEventListener("input",x);function x(e){q.textContent=`${e.currentTarget.valueAsNumber}`}const h=window.screen.width;let a=0,u="";h<=1260&&(a=150,u="#slider");h>1260&&(a=200,u="#sliderR");$(`${u}`).roundSlider({handleShape:"dot",radius:`${a}`,value:0,handleSize:"+25",startAngle:90,lineCap:"square",sliderType:"min-range",width:12,change:function(e){$("#range").html(e.value),k.textContent=e.value,y.textContent="",y.textContent=e.value+".шт"}});for(let e of document.querySelectorAll('input[type="range"].slider-progress'))e.style.setProperty("--value",e.value),e.style.setProperty("--min",e.min==""?"0":e.min),e.style.setProperty("--max",e.max==""?"100":e.max),e.addEventListener("input",()=>e.style.setProperty("--value",e.value));const f=document.querySelectorAll(".goods__item");f.forEach(e=>{e.addEventListener("click",n=>{f.forEach(r=>{r.classList.remove("goods__item-active"),r.children[0].classList.remove("goods__button-active")}),e.classList.add("goods__item-active"),e.children[0].classList.add("goods__button-active")})});new w(".swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});const C=document.querySelector(".hero__vidio"),s=document.querySelector(".video__backdrop");C.addEventListener("click",g);function g(e){s.classList.remove("is-hidden"),window.addEventListener("keydown",l),s.addEventListener("click",n=>{n.currentTarget.classList[0]==="video__backdrop"&&(s.classList.add("is-hidden"),window.removeEventListener("keydown",l))})}function l(e){e.code==="Escape"&&s.classList.add("is-hidden"),window.removeEventListener("keydown",l)}const P=document.querySelector(".hero__secondPartDesc");P.addEventListener("click",g);const L=window.screen.width;let v=null;L<=1260&&(v=document.querySelector(".goods__galery"));L>1260&&(v=document.querySelector(".goods__galery--Desktop"));const i=document.querySelector(".goodsGalery__backdrop");v.addEventListener("click",A);function A(e){console.log(e.target),i.classList.remove("is-hidden"),window.addEventListener("keydown",c),i.addEventListener("click",n=>{n.currentTarget.classList[0]==="goodsGalery__backdrop"&&(i.classList.add("is-hidden"),window.removeEventListener("keydown",c))})}function c(e){e.code==="Escape"&&i.classList.add("is-hidden"),window.removeEventListener("keydown",c)}
//# sourceMappingURL=commonHelpers.js.map
