import{C as h,_ as j,a as k,b as y,c as S,d as w,e as M,f as C,g as I,h as E,i as G,j as $,k as q,l as z,m as D,n as L,o as R,p as B,q as N,r as T,s as x,t as F,u as K,v as U,w as V,x as H,y as O,z as W,A,B as J,D as P,E as Q,F as X,G as Y,H as Z,I as ss,J as es,K as _s,L as ts,M as as,N as is,O as os,P as ls,Q as gs,R as rs,S as cs,T as ns,U as ds,V as ps,W as bs,X as vs,Y as us,Z as ms,$ as fs,a0 as hs,a1 as js,a2 as ks,a3 as ys,a4 as Ss,a5 as ws,a6 as Ms,a7 as Cs,a8 as Is,a9 as Es,aa as Gs,ab as $s,ac as qs,ad as zs,ae as Ds,af as Ls,ag as Rs,ah as Bs,ai as Ns}from"./CenterGridItem-e-GEUEPr.js";import{_ as v,o as a,j as l,i as n,w as c,h as s,T as d,t as g,k as o,F as Ts,a as xs,b as Fs,c as Ks,d as Us,e as Vs,f as Hs,r as p,g as b,n as Os}from"./index-vlWv5bcV.js";const Ws={name:"GalleryItemModal",mounted:function(){document.addEventListener("keydown",this.onKeyDown)},beforeUnmount:function(){document.removeEventListener("keydown",this.onKeyDown)},methods:{closeModal:function(){this.$emit("modal-close")},onKeyDown:function(e){e.key==="Escape"&&this.closeModal()}},props:{imgSrc:{type:String,required:!0},caption:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null}},emits:["modal-close"]},As={class:"modal",role:"dialog"},Js={class:"btn-close"},Ps=["src"],Qs={class:"text-under-img"},Xs={key:0};function Ys(e,_,t,u,m,i){return a(),l(Ts,null,[n(d,{type:"transition",appear:""},{default:c(()=>[s("div",{class:"modal-overlay",onClick:_[0]||(_[0]=r=>i.closeModal())})]),_:1}),n(d,{type:"transition",appear:""},{default:c(()=>[s("div",As,[s("div",Js,[s("i",{onClick:_[1]||(_[1]=r=>i.closeModal()),id:"btn-close",class:"fa-regular fa-rectangle-xmark"})]),s("img",{class:"modal-img",src:this.imgSrc,alt:"bigger img"},null,8,Ps),s("div",Qs,[this.caption?(a(),l("h3",Xs,g(this.caption),1)):o("",!0),s("p",null,g(this.description),1)])])]),_:1})],64)}const Zs=v(Ws,[["render",Ys],["__scopeId","data-v-26c58c4f"]]),se={name:"GalleryItem",components:{GalleryItemModal:Zs,CenterGridItem:h},props:{gridSpan:{type:Number,required:!1,default:4},caption:{type:String,required:!1,default:null},description:{type:String,required:!1,default:"Gallery Item"},imgSrc:{type:String,required:!0}},methods:{onResize:function(){window.innerWidth>768?(this.modalEnabled=!0,this.gridSpanCalc=this.gridSpan):(this.modalEnabled=!1,this.gridSpanCalc=12)},doShowModal:function(){this.showModal=this.modalEnabled},doHideModal:function(){this.showModal=!1}},mounted(){this.onResize(),window.addEventListener("resize",this.onResize)},beforeUnmount:function(){window.removeEventListener("resize",this.onResize)},data:function(){return{showModal:!1,gridSpanCalc:this.gridSpan,pictureStatic:new URL(Object.assign({"/src/assets/aboutme.gif":j,"/src/assets/banner.gif":k,"/src/assets/banner.png":y,"/src/assets/bar.svg":S,"/src/assets/cd/Dino.jpg":w,"/src/assets/cd/Frontloading.jpg":M,"/src/assets/cd/Test.jpg":C,"/src/assets/cd/aliandude.jpg":I,"/src/assets/cd/beachrun.jpg":E,"/src/assets/cd/cdthumb.jpg":G,"/src/assets/cd/deer.jpg":$,"/src/assets/cd/dogcool.jpg":q,"/src/assets/cd/dogologos.jpg":z,"/src/assets/cd/dogpeople.jpg":D,"/src/assets/cd/elements.jpg":L,"/src/assets/cd/pandalady.jpg":R,"/src/assets/cd/rancher.jpg":B,"/src/assets/cd/tigersharker.jpg":N,"/src/assets/favicon.ico":T,"/src/assets/general.css":x,"/src/assets/gifs/belly_yel.gif":F,"/src/assets/gifs/dinoshok.gif":K,"/src/assets/gifs/dog1.gif":U,"/src/assets/gifs/dogjump1.gif":V,"/src/assets/gifs/dogjump2.gif":H,"/src/assets/gifs/dogorun.gif":O,"/src/assets/gifs/dogosit.gif":W,"/src/assets/gifs/fish1.gif":A,"/src/assets/gifs/kattaplle.gif":J,"/src/assets/gifs/runsmall.gif":P,"/src/assets/gifs/sleep.gif":Q,"/src/assets/golden/artwork.jpg":X,"/src/assets/golden/char.jpg":Y,"/src/assets/golden/goldenthumb.gif":Z,"/src/assets/golden/goldenthumb.jpg":ss,"/src/assets/golden/logo.jpg":es,"/src/assets/golden/monk.jpg":_s,"/src/assets/golden/poster.jpg":ts,"/src/assets/golden/shadow.jpg":as,"/src/assets/illust/Original_Tortellini.jpg":is,"/src/assets/illust/bear.jpg":os,"/src/assets/illust/bisli.jpg":ls,"/src/assets/illust/black.jpg":gs,"/src/assets/illust/bubbles.jpg":rs,"/src/assets/illust/camel.jpg":cs,"/src/assets/illust/dogskate.jpg":ns,"/src/assets/illust/dragon.jpg":ds,"/src/assets/illust/eat.jpg":ps,"/src/assets/illust/illustthumb.jpg":bs,"/src/assets/illust/karovka.jpg":vs,"/src/assets/illust/parrot.jpg":us,"/src/assets/illust/pidge.jpg":ms,"/src/assets/illust/pidgeon.jpg":fs,"/src/assets/illust/pig.jpg":hs,"/src/assets/illust/poster.jpg":js,"/src/assets/illust/salmon.jpg":ks,"/src/assets/json/dogo.json":xs,"/src/assets/json/gifs.json":Fs,"/src/assets/json/golden.json":Ks,"/src/assets/json/illust.json":Us,"/src/assets/json/mapping.json":Vs,"/src/assets/json/sketch.json":Hs,"/src/assets/logo.gif":ys,"/src/assets/sketch/bunnies.jpg":Ss,"/src/assets/sketch/bunns.jpg":ws,"/src/assets/sketch/cat_lady.jpg":Ms,"/src/assets/sketch/cats.jpg":Cs,"/src/assets/sketch/colors.jpg":Is,"/src/assets/sketch/comic.jpg":Es,"/src/assets/sketch/comics1.jpg":Gs,"/src/assets/sketch/cows.jpg":$s,"/src/assets/sketch/girl1.jpg":qs,"/src/assets/sketch/girl2.jpg":zs,"/src/assets/sketch/horse.jpg":Ds,"/src/assets/sketch/lady.jpg":Ls,"/src/assets/sketch/pink.jpg":Rs,"/src/assets/sketch/sketchthumb.jpg":Bs,"/src/assets/sketch/tigers.jpg":Ns})[`/src/assets/${this.imgSrc}`],import.meta.url).href,modalEnabled:!1}}},ee=["src"],_e={key:0},te={key:0};function ae(e,_,t,u,m,i){const r=p("GalleryItemModal"),f=p("CenterGridItem");return a(),b(f,{gridSpan:this.gridSpan},{default:c(()=>[s("figure",null,[s("img",{onClick:_[0]||(_[0]=ie=>i.doShowModal()),class:Os(`gallery-img img-grid-x${e.gridSpanCalc}-span`),src:e.pictureStatic,alt:"gallery image"},null,10,ee),e.modalEnabled?(a(),l("div",_e,[e.showModal?(a(),b(r,{key:0,imgSrc:e.pictureStatic,caption:t.caption,description:t.description,onModalClose:i.doHideModal},null,8,["imgSrc","caption","description","onModalClose"])):o("",!0)])):o("",!0),s("figcaption",null,[t.caption?(a(),l("h3",te,g(t.caption),1)):o("",!0),s("p",null,g(t.description),1)])])]),_:1},8,["gridSpan"])}const ge=v(se,[["render",ae],["__scopeId","data-v-baa652be"]]);export{ge as default};
