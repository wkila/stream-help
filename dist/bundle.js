(()=>{"use strict";new class{constructor(t,e,s){this.$container=document.querySelector(`.${t}`),this.$id=t,this.$delay=e,this.$tag=s,this.$container.addEventListener("click",this.clickHandler.bind(this))}clickHandler(t){(t.target.classList.contains("content")||"IMG"===t.target.nodeName)&&this.checkInfo(t.target)}getFather(t,e){return t.classList.contains(e)?t:this.getFather(t.parentElement,e)}getOpacity(t){t.style.opacity=0}checkInfo(t){let e=this.getFather(t,this.$id),s=[],i=e.querySelectorAll(".info");i.forEach((t=>{s.push(t)})),i.forEach((e=>{e.classList.contains(this.$tag)||this.getFather(e,this.$tag),e!=t&&(console.log(e,t),this.getOpacity(e))}))}}("types-blocks",1e3)})();