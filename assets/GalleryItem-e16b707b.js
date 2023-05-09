import{C as h,_ as j,a as k,b as y,c as S,d as w,e as M,f as C,g as I,h as G,i as E,j as $,k as q,l as z,m as x,n as D,o as L,p as R,q as B,r as N,s as T,t as F,u as K,v as U,w as V,x as H,y as O,z as W,A,B as J,D as P,E as Q,F as X,G as Y,H as Z,I as ss,J as es,K as _s,L as ts,M as as,N as is,O as os,P as ls,Q as gs,R as rs,S as cs,T as ns,U as ds,V as ps,W as bs,X as us,Y as vs,Z as ms,$ as fs,a0 as hs,a1 as js,a2 as ks,a3 as ys,a4 as Ss,a5 as ws,a6 as Ms,a7 as Cs,a8 as Is,a9 as Gs,aa as Es,ab as $s,ac as qs,ad as zs,ae as xs,af as Ds,ag as Ls,ah as Rs,ai as Bs,aj as Ns}from"./CenterGridItem-3441c460.js";import{_ as u,o as a,j as l,i as n,w as c,h as s,T as d,t as g,k as o,F as Ts,a as Fs,b as Ks,c as Us,d as Vs,e as Hs,f as Os,g as p,n as Ws,r as b}from"./index-04849949.js";const As={name:"GalleryItemModal",mounted:function(){document.addEventListener("keydown",this.onKeyDown)},beforeUnmount:function(){document.removeEventListener("keydown",this.onKeyDown)},methods:{closeModal:function(){this.$emit("modal-close")},onKeyDown:function(e){e.key==="Escape"&&this.closeModal()}},props:{imgSrc:{type:String,required:!0},caption:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null}},emits:["modal-close"]},Js={class:"modal",role:"dialog"},Ps={class:"btn-close"},Qs=["src"],Xs={class:"text-under-img"},Ys={key:0};function Zs(e,_,t,v,m,i){return a(),l(Ts,null,[n(d,{type:"transition",appear:""},{default:c(()=>[s("div",{class:"modal-overlay",onClick:_[0]||(_[0]=r=>i.closeModal())})]),_:1}),n(d,{type:"transition",appear:""},{default:c(()=>[s("div",Js,[s("div",Ps,[s("i",{onClick:_[1]||(_[1]=r=>i.closeModal()),id:"btn-close",class:"fa-regular fa-rectangle-xmark"})]),s("img",{class:"modal-img",src:this.imgSrc,alt:"bigger img"},null,8,Qs),s("div",Xs,[this.caption?(a(),l("h3",Ys,g(this.caption),1)):o("",!0),s("p",null,g(this.description),1)])])]),_:1})],64)}const se=u(As,[["render",Zs],["__scopeId","data-v-26c58c4f"]]);const ee={name:"GalleryItem",components:{GalleryItemModal:se,CenterGridItem:h},props:{gridSpan:{type:Number,required:!1,default:4},caption:{type:String,required:!1,default:null},description:{type:String,required:!1,default:"Gallery Item"},imgSrc:{type:String,required:!0}},methods:{onResize:function(){window.innerWidth>768?(this.modalEnabled=!0,this.gridSpanCalc=this.gridSpan):(this.modalEnabled=!1,this.gridSpanCalc=12)},doShowModal:function(){this.showModal=this.modalEnabled},doHideModal:function(){this.showModal=!1}},mounted(){this.onResize(),window.addEventListener("resize",this.onResize)},beforeUnmount:function(){window.removeEventListener("resize",this.onResize)},data:function(){return{showModal:!1,gridSpanCalc:this.gridSpan,pictureStatic:new URL(Object.assign({"/src/assets/aboutme.gif":j,"/src/assets/banner.gif":k,"/src/assets/banner.png":y,"/src/assets/bar.svg":S,"/src/assets/cd/Dino.jpg":w,"/src/assets/cd/Frontloading.jpg":M,"/src/assets/cd/Test.jpg":C,"/src/assets/cd/aliandude.jpg":I,"/src/assets/cd/beachrun.jpg":G,"/src/assets/cd/cdthumb.jpg":E,"/src/assets/cd/deer.jpg":$,"/src/assets/cd/dogcool.jpg":q,"/src/assets/cd/dogologos.jpg":z,"/src/assets/cd/dogpeople.jpg":x,"/src/assets/cd/elements.jpg":D,"/src/assets/cd/pandalady.jpg":L,"/src/assets/cd/rancher.jpg":R,"/src/assets/cd/tigersharker.jpg":B,"/src/assets/favicon.ico":N,"/src/assets/general.css":T,"/src/assets/gifs/belly_yel.gif":F,"/src/assets/gifs/dinoshok.gif":K,"/src/assets/gifs/dog1.gif":U,"/src/assets/gifs/dogjump1.gif":V,"/src/assets/gifs/dogjump2.gif":H,"/src/assets/gifs/dogorun.gif":O,"/src/assets/gifs/dogosit.gif":W,"/src/assets/gifs/fish1.gif":A,"/src/assets/gifs/kattaplle.gif":J,"/src/assets/gifs/runsmall.gif":P,"/src/assets/gifs/sleep.gif":Q,"/src/assets/golden/artwork.jpg":X,"/src/assets/golden/char.jpg":Y,"/src/assets/golden/goldenthumb.gif":Z,"/src/assets/golden/goldenthumb.jpg":ss,"/src/assets/golden/logo.jpg":es,"/src/assets/golden/monk.jpg":_s,"/src/assets/golden/poster.jpg":ts,"/src/assets/golden/shadow.jpg":as,"/src/assets/illust/Original_Tortellini.jpg":is,"/src/assets/illust/bear.jpg":os,"/src/assets/illust/bisli.jpg":ls,"/src/assets/illust/black.jpg":gs,"/src/assets/illust/bubbles.jpg":rs,"/src/assets/illust/camel.jpg":cs,"/src/assets/illust/dogskate.jpg":ns,"/src/assets/illust/dragon.jpg":ds,"/src/assets/illust/eat.jpg":ps,"/src/assets/illust/illustthumb.jpg":bs,"/src/assets/illust/karovka.jpg":us,"/src/assets/illust/parrot.jpg":vs,"/src/assets/illust/pidge.jpg":ms,"/src/assets/illust/pidgeon.jpg":fs,"/src/assets/illust/pig.jpg":hs,"/src/assets/illust/poster.jpg":js,"/src/assets/illust/salmon.jpg":ks,"/src/assets/json/dogo.json":Fs,"/src/assets/json/gifs.json":Ks,"/src/assets/json/golden.json":Us,"/src/assets/json/illust.json":Vs,"/src/assets/json/mapping.json":Hs,"/src/assets/json/sketch.json":Os,"/src/assets/logo.gif":ys,"/src/assets/sketch/bunnies.jpg":Ss,"/src/assets/sketch/bunns.jpg":ws,"/src/assets/sketch/cat_lady.jpg":Ms,"/src/assets/sketch/cats.jpg":Cs,"/src/assets/sketch/colors.jpg":Is,"/src/assets/sketch/comic.jpg":Gs,"/src/assets/sketch/comics1.jpg":Es,"/src/assets/sketch/cows.jpg":$s,"/src/assets/sketch/girl1.jpg":qs,"/src/assets/sketch/girl2.jpg":zs,"/src/assets/sketch/horse.jpg":xs,"/src/assets/sketch/lady.jpg":Ds,"/src/assets/sketch/pink.jpg":Ls,"/src/assets/sketch/sketchthumb.jpg":Rs,"/src/assets/sketch/tigers.jpg":Bs})[`/src/assets/${this.imgSrc}`],self.location).href,modalEnabled:!1}},computed:{spanId:function(){return`span-${Ns.v4()}`}}},_e=["src"],te={key:0},ae={key:0};function ie(e,_,t,v,m,i){const r=b("GalleryItemModal"),f=b("CenterGridItem");return a(),p(f,{gridSpan:this.gridSpan},{default:c(()=>[s("figure",null,[s("img",{onClick:_[0]||(_[0]=oe=>i.doShowModal()),class:Ws(`gallery-img img-grid-x${e.gridSpanCalc}-span`),src:e.pictureStatic,alt:"gallery image"},null,10,_e),e.modalEnabled?(a(),l("div",te,[e.showModal?(a(),p(r,{key:0,imgSrc:e.pictureStatic,caption:t.caption,description:t.description,onModalClose:i.doHideModal},null,8,["imgSrc","caption","description","onModalClose"])):o("",!0)])):o("",!0),s("figcaption",null,[t.caption?(a(),l("h3",ae,g(t.caption),1)):o("",!0),s("p",null,g(t.description),1)])])]),_:1},8,["gridSpan"])}const re=u(ee,[["render",ie],["__scopeId","data-v-7f93775d"]]);export{re as default};
