(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(n){if(n.ep)return;n.ep=!0;const t=i(n);fetch(n.href,t)}})();const s=document.querySelector(".input");document.querySelector(".outgoing");const y=document.querySelector(".fa-right-to-bracket"),v=document.querySelector(".fa-trash-can"),h=document.querySelector("#theme"),L=document.querySelector(".current-date");let a;setInterval(()=>{var e=new Date;L.innerHTML=`<i class="fa-solid fa-calendar-days"></i> ${e.toLocaleString()}`},1e3);const d=()=>{let e=document.querySelector(".container-items");window.scrollTo(0,e.scrollHeight)};function u(e,o,i,r){if(s.value="",!e)return;const n=document.createElement("div");n.className="container-items";const t=document.createElement("div");t.className=o,t.innerHTML=`
    <div class="${i}">
      <div class="data">
        <div class="data-content">${e}</div>
      
      </div>
      <div class="profile">
        <i class="fa-solid ${r}"></i>
      </div>
    </div>
  `,document.querySelector(".container").appendChild(n),document.querySelector(".container-items").appendChild(t),d()}const p=()=>{let e=document.createElement("div");e.className="incoming-container animation",e.innerHTML=`
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
  `,setTimeout(()=>{document.querySelector(".container").appendChild(e);let o=document.querySelector(".container-items");window.scrollTo(0,o.scrollHeight)},600)};function T(e){setTimeout(()=>{document.querySelector(".animation").remove(),u(" ","incoming-container","incoming","fa-robot");let o=document.querySelectorAll(".incoming .data-content"),i=o[o.length-1];const r=(c,f)=>{setTimeout(function(){i.innerHTML+=f,d()},50*c)};let n=e.split(" ");console.log(n);for(let c=0;c<n.length;c++)r(c,n[c]+" ");let t=document.createElement("button");t.className="copy-btn",t.innerText="copy",t.innerHTML='<i class="fa-regular fa-copy"></i> copy',i.after(t)},3e3),d()}function b(e){let o;o=e.replace(new RegExp(`\r?

`,"g"),"<br>"),o=e.replace(new RegExp(`\r?
`,"g"),"<br>");let i=o.split("**"),r="";for(let t=0;t<i.length;t++)t==0||t%2,r+=i[t];return console.log(r),r.split("*").join("&#x25CF;")}const g=e=>{const i="https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCJmOq3PO5WWCcHiZB4519xPceyzegU9Us",r={method:"POST",body:JSON.stringify({contents:[{parts:[{text:e}]}]})};fetch(i,r).then(n=>{if(!n.ok)throw new Error("Network response was not ok");return n.json()}).then(n=>{let t=n.candidates[0].content.parts[0].text;t=b(t),T(t)}).catch(n=>{const t=document.createElement("div");t.className="error",t.innerHTML=`<i class="fa-solid fa-triangle-exclamation"></i><p>${n}</p>`,document.appendChild(t)}).finally(()=>{d()})},w=document.querySelector(".suggestion-container"),m=document.querySelector(".suggestion-wrapper");let l;w.addEventListener("click",e=>{l=e.target.innerText,console.log(l),m.style.display="none",p(),g(l),u(l,"outgoing-container","outgoing","fa-user")});y.addEventListener("click",e=>{m.style.display="none",p(),a=s.value.trim(),g(a),u(a,"outgoing-container","outgoing","fa-user")});s.addEventListener("keydown",e=>{a=s.value.trim(),e.key=="Enter"&&(m.style.display="none",p(),g(a),u(a,"outgoing-container","outgoing","fa-user"))});v.addEventListener("click",()=>{document.querySelector(".container-items").remove(),s.value="",m.style.display="block",window.scrollTo(0,0)});h.addEventListener("click",e=>{console.log(e),document.body.classList.toggle("dark-mode")});function E(e,o){if(navigator.clipboard)navigator.clipboard.writeText(o).then(()=>{console.log("Text copied to clipboard:",o),e.innerHTML='<i class="fa-solid fa-copy"></i> copied',setTimeout(()=>{e.innerHTML='<i class="fa-regular fa-copy"></i> copy'},1500)}).catch(r=>{console.error("Failed to copy text:",r)});else{var i=document.createElement("textarea");i.value=o,document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),console.log("Text copied to clipboard (fallback):",o),e.innerHTML='<i class="fa-solid fa-copy"></i> copied',setTimeout(()=>{e.innerHTML='<i class="fa-regular fa-copy"></i> copy'},1500)}}document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",function(e){if(e.target.classList.contains("copy-btn")){console.log(e);var o=e.target.parentElement.querySelector("p").textContent;E(e.target,o)}})});
