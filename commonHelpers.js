import{S as w}from"./assets/vendor-d93afd35.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))m(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&m(d)}).observe(document,{childList:!0,subtree:!0});function s(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function m(o){if(o.ep)return;o.ep=!0;const t=s(o);fetch(o.href,t)}})();const h=document.querySelector(".button__wrapper"),g=document.querySelector(".button__wrapper.secondButton"),f=document.querySelector('[data-modal="modal-wholesale"]'),_=document.querySelector(".mClose-fix");h.addEventListener("click",y);g.addEventListener("click",y);_.addEventListener("click",E);function y(e){f.classList.remove("is-hidden")}function E(e){f.classList.add("is-hidden")}const a=window.screen.width;console.log(a);let u=0,v="";a<=1260&&(u=150,v="#slider");a>1260&&(u=200,v="#sliderR");$(`${v}`).roundSlider({handleShape:"dot",radius:`${u}`,value:0,handleSize:"+25",startAngle:90,lineCap:"square",sliderType:"min-range",width:12,change:function(e){console.log(e.value),$("#range").html(e.value)}});for(let e of document.querySelectorAll('input[type="range"].slider-progress'))e.style.setProperty("--value",e.value),e.style.setProperty("--min",e.min==""?"0":e.min),e.style.setProperty("--max",e.max==""?"100":e.max),e.addEventListener("input",()=>e.style.setProperty("--value",e.value));const p=document.querySelectorAll(".goods__item");p.forEach(e=>{e.addEventListener("click",n=>{p.forEach(s=>{s.classList.remove("goods__item-active"),s.children[0].classList.remove("goods__button-active")}),e.classList.add("goods__item-active"),e.children[0].classList.add("goods__button-active")})});new w(".swiper",{direction:"horizontal",loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"}});const k=document.querySelector(".hero__vidio"),r=document.querySelector(".video__backdrop");k.addEventListener("click",L);function L(e){r.classList.remove("is-hidden"),window.addEventListener("keydown",c),r.addEventListener("click",n=>{n.currentTarget.classList[0]==="video__backdrop"&&(r.classList.add("is-hidden"),window.removeEventListener("keydown",c))})}function c(e){e.code==="Escape"&&r.classList.add("is-hidden"),window.removeEventListener("keydown",c)}const b=document.querySelector(".hero__secondPartDesc");b.addEventListener("click",L);const S=document.querySelector(".goods__galery"),i=document.querySelector(".goodsGalery__backdrop");S.addEventListener("click",q);function q(e){console.log(e.target),i.classList.remove("is-hidden"),window.addEventListener("keydown",l),i.addEventListener("click",n=>{n.currentTarget.classList[0]==="goodsGalery__backdrop"&&(i.classList.add("is-hidden"),window.removeEventListener("keydown",l))})}function l(e){e.code==="Escape"&&i.classList.add("is-hidden"),window.removeEventListener("keydown",l)}
//# sourceMappingURL=commonHelpers.js.map
