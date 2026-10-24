(function(){
  "use strict";
  var BP=768, doc=document.documentElement;
  doc.className+=" js";
  var btn=document.getElementById("mob-toggle"), drawer=document.getElementById("mob-drawer"), overlay=document.getElementById("mob-overlay"), closeBtn=document.getElementById("mob-close");
  function openMenu(){drawer.hidden=false;overlay.classList.add("visible");btn.setAttribute("aria-expanded","true");doc.style.overflow="hidden";closeBtn.focus();}
  function closeMenu(){drawer.hidden=true;overlay.classList.remove("visible");btn.setAttribute("aria-expanded","false");doc.style.overflow="";}
  if(btn&&drawer){
    btn.addEventListener("click",function(){drawer.hidden?openMenu():closeMenu();});
    closeBtn.addEventListener("click",function(){closeMenu();btn.focus();});
    overlay.addEventListener("click",closeMenu);
    document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!drawer.hidden){closeMenu();btn.focus();}});
    window.addEventListener("resize",function(){if(window.innerWidth>BP&&!drawer.hidden)closeMenu();});
    drawer.addEventListener("click",function(e){if(e.target.tagName==="A")closeMenu();});
  }
  var items=document.querySelectorAll(".faq-item");
  Array.prototype.forEach.call(items,function(it){
    var q=it.querySelector(".faq-q"); if(!q)return;
    q.addEventListener("click",function(){
      var open=it.classList.toggle("open"); q.setAttribute("aria-expanded",open?"true":"false");
    });
  });
})();
