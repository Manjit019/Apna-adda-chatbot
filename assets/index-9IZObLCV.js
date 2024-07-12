(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const s=document.querySelector(".input");document.querySelector(".outgoing");const f=document.querySelector(".fa-right-to-bracket"),v=document.querySelector(".fa-trash-can"),h=document.querySelector("#theme"),L=document.querySelector(".current-date");let a;setInterval(()=>{var t=new Date;L.innerHTML=`<i class="fa-solid fa-calendar-days"></i> ${t.toLocaleString()}`},1e3);const d=()=>{let t=document.querySelector(".container-items");window.scrollTo(0,t.scrollHeight)};function u(t,n,i,r){if(s.value="",!t)return;const e=document.createElement("div");e.className="container-items";const o=document.createElement("div");o.className=n,o.innerHTML=`
    <div class="${i}">
      <div class="data">
        <p>${t}</p>
        
      </div>
      <div class="profile">
        <i class="fa-solid ${r}"></i>
      </div>
    </div>
  `,document.querySelector(".container").appendChild(e),document.querySelector(".container-items").appendChild(o),d()}const p=()=>{let t=document.createElement("div");t.className="incoming-container animation",t.innerHTML=`
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
  `,setTimeout(()=>{document.querySelector(".container").appendChild(t);let n=document.querySelector(".container-items");window.scrollTo(0,n.scrollHeight)},600)};function b(t){setTimeout(()=>{document.querySelector(".animation").remove(),u(" ","incoming-container","incoming","fa-robot");let n=document.querySelectorAll(".incoming p").length-1,i=document.querySelectorAll(".incoming p")[n];const r=(c,y)=>{setTimeout(function(){i.innerHTML+=y,d()},50*c)};let e=t.split(" ");console.log(e);for(let c=0;c<e.length;c++)r(c,e[c]+" ");let o=document.createElement("button");o.className="copy-btn",o.innerText="copy",o.innerHTML='<i class="fa-regular fa-copy"></i> copy',i.after(o)},3e3),d()}function T(t){let n;n=t.replace(new RegExp(`\r?

`,"g"),"<br>"),n=t.replace(new RegExp(`\r?
`,"g"),"<br>");let i=n.split("**"),r="";for(let e=0;e<i.length;e++)e===0||e%2!==1?r+=i[e]:r+="&#x26A1;&nbsp"+i[e];return r=r.split("*").join("&#x25CF;"),r}const g=t=>{const i="https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyCJmOq3PO5WWCcHiZB4519xPceyzegU9Us",r={method:"POST",body:JSON.stringify({contents:[{parts:[{text:t}]}]})};fetch(i,r).then(e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()}).then(e=>{let o=e.candidates[0].content.parts[0].text;o=T(o),b(o)}).catch(e=>{const o=document.createElement("div");o.className="error",o.innerHTML=`<i class="fa-solid fa-triangle-exclamation"></i><p>${e}</p>`,document.appendChild(o)}).finally(()=>{d()})},w=document.querySelector(".suggestion-container"),m=document.querySelector(".suggestion-wrapper");let l;w.addEventListener("click",t=>{l=t.target.innerText,console.log(l),m.style.display="none",p(),g(l),u(l,"outgoing-container","outgoing","fa-user")});f.addEventListener("click",t=>{m.style.display="none",p(),a=s.value.trim(),g(a),u(a,"outgoing-container","outgoing","fa-user")});s.addEventListener("keydown",t=>{a=s.value.trim(),t.key=="Enter"&&(m.style.display="none",p(),g(a),u(a,"outgoing-container","outgoing","fa-user"))});v.addEventListener("click",()=>{document.querySelector(".container-items").remove(),s.value="",m.style.display="block",window.scrollTo(0,0)});h.addEventListener("click",t=>{console.log(t),document.body.classList.toggle("dark-mode")});function S(t,n){if(navigator.clipboard)navigator.clipboard.writeText(n).then(()=>{console.log("Text copied to clipboard:",n),t.innerHTML='<i class="fa-solid fa-copy"></i> copied',setTimeout(()=>{t.innerHTML='<i class="fa-regular fa-copy"></i> copy'},1500)}).catch(r=>{console.error("Failed to copy text:",r)});else{var i=document.createElement("textarea");i.value=n,document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),console.log("Text copied to clipboard (fallback):",n),t.innerHTML='<i class="fa-solid fa-copy"></i> copied',setTimeout(()=>{t.innerHTML='<i class="fa-regular fa-copy"></i> copy'},1500)}}document.addEventListener("DOMContentLoaded",function(){document.body.addEventListener("click",function(t){if(t.target.classList.contains("copy-btn")){console.log(t);var n=t.target.parentElement.querySelector("p").textContent;S(t.target,n)}})});
