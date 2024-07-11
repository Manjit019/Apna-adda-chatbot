(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const d=document.querySelector(".input");document.querySelector(".outgoing");const f=document.querySelector(".fa-right-to-bracket"),v=document.querySelector(".fa-trash-can"),h=document.querySelector("#theme"),w=document.querySelector(".curent-time");let l;setInterval(()=>{var t=new Date;w.textContent=t.toLocaleString()},1e3);function m(t,r,s,i){if(d.value="",!t)return;const e=document.createElement("div");e.className="container-items";const n=document.createElement("div");n.className=r,n.innerHTML=`
    <div class="${s}">
      <div class="data">
        <p>${t}</p>
      </div>
      <div class="profile">
        <i class="fa-solid ${i}"></i>
      </div>
    </div>
  `,document.querySelector(".container").appendChild(e),document.querySelector(".container-items").appendChild(n);let o=document.querySelector(".container-items");window.scrollTo(0,o.scrollHeight)}const p=()=>{let t=document.createElement("div");t.className="incoming-container animation",t.innerHTML=`
    <div class="incoming">
      <div class="data">
      <div class=dots>
      <div class="dot" style="-webkit-animation-delay:0.2s"></div>
      <div class="dot" style="-webkit-animation-delay:0.5s"></div>
      <div class="dot" style="-webkit-animation-delay:0.8s"></div>
      </div>
      </div>
      <div class="profile">
        <i class="fa-solid fa-robot"></i>
      </div>
    </div>
  `,setTimeout(()=>{document.querySelector(".container").appendChild(t);let r=document.querySelector(".container-items");window.scrollTo(0,r.scrollHeight)},600)};function S(t){setTimeout(()=>{document.querySelector(".animation").remove(),m(" ","incoming-container","incoming","fa-robot");let s=document.querySelectorAll(".incoming p").length-1,i=document.querySelectorAll(".incoming p")[s];const e=(o,a)=>{setTimeout(function(){i.innerHTML+=a;let c=document.querySelector(".container-items");window.scrollTo(0,c.scrollHeight)},50*o)};let n=t.split(" ");for(let o=0;o<n.length;o++)e(o,n[o]+" ")},3e3);let r=document.querySelector(".container-items");window.scrollTo(0,r.scrollHeight)}function q(t){return t.replace(new RegExp(`\r?

`,"g"),"<br>").replace(new RegExp(`\r?
`,"g"),"<br>")}const y=t=>{const s="https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCJmOq3PO5WWCcHiZB4519xPceyzegU9Us",i={method:"POST",body:JSON.stringify({contents:[{parts:[{text:t}]}]})};fetch(s,i).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{let n=e.candidates[0].content.parts[0].text;n=q(n);let o=n.split("**"),a="";for(let c=0;c<o.length;c++)c==0||c%2!==1?a+=o[c]:a+="<strong>"+o[c].split("*").join("&nbsp")+"</strong>";S(a)}).catch(e=>{}).finally(()=>{let e=document.querySelector(".container-items");window.scrollTo(0,e.scrollHeight)})},L=document.querySelector(".suggestion-container"),g=document.querySelector(".suggestion-wrapper");let u;L.addEventListener("click",t=>{u=t.target.innerText,console.log(u),g.style.display="none",p(),y(u),m(u,"outgoing-container","outgoing","fa-user")});f.addEventListener("click",t=>{g.style.display="none",p(),l=d.value.trim(),y(l),m(l,"outgoing-container","outgoing","fa-user")});d.addEventListener("keydown",t=>{l=d.value.trim(),t.key=="Enter"&&(g.style.display="none",p(),y(l),m(l,"outgoing-container","outgoing","fa-user"))});v.addEventListener("click",()=>{document.querySelector(".container-items").remove(),d.value="",g.style.display="block",window.scrollTo(0,0)});h.addEventListener("click",t=>{console.log(t),document.body.classList.toggle("dark-mode")});
