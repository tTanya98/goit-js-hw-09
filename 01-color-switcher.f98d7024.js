const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a;function o(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.addEventListener("click",(()=>{a||(a=setInterval(o,1e3))})),e.addEventListener("click",(()=>{clearInterval(a)}));
//# sourceMappingURL=01-color-switcher.f98d7024.js.map
