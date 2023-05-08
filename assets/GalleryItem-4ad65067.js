import{C as h,_ as k,a as y,b as w,c as S,d as I,e as $,f as C,g as G,h as M,i as B,j as q,k as z,l as W,m as R,n as N,o as T,p as E,q as F,r as L,s as O,t as V,u as D,v as U,w as A,x as H,y as J,z as K,A as P,B as Q,D as X,E as Y,F as Z,G as x,H as ss,I as es,J as _s,K as ts,L as as,M as is,N as os,O as ls,P as gs,Q as rs,R as cs,S as ns,T as ds,U as ps,V as bs,W as vs,X as us,Y as fs,Z as ms,$ as js,a0 as hs,a1 as ks,a2 as ys,a3 as ws,a4 as Ss,a5 as Is,a6 as $s,a7 as Cs,a8 as Gs,a9 as Ms,aa as Bs,ab as qs,ac as zs,ad as Ws,ae as Rs,af as Ns,ag as Ts,ah as Es,ai as Fs,aj as Ls}from"./CenterGridItem-47043db5.js";import{_ as b,o as a,j as o,i as c,w as r,h as e,T as n,t as l,k as i,F as Os,a as Vs,b as Ds,c as Us,d as As,e as Hs,f as Js,g as d,n as Ks,r as p}from"./index-21f1c90d.js";const Ps={name:"GalleryItemModal",props:{imgSrc:{type:String,required:!0},caption:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null}},emits:["modal-overlay-click"]},Qs={class:"modal",role:"dialog"},Xs={class:"btn-close"},Ys=["src"],Zs={class:"text-under-img"},xs={key:0};function se(s,_,t,v,u,f){return a(),o(Os,null,[c(n,{type:"transition",appear:""},{default:r(()=>[e("div",{class:"modal-overlay",onClick:_[0]||(_[0]=g=>s.$emit("modal-overlay-click"))})]),_:1}),c(n,{type:"transition",appear:""},{default:r(()=>[e("div",Qs,[e("div",Xs,[e("i",{onClick:_[1]||(_[1]=g=>s.$emit("modal-overlay-click")),id:"btn-close",class:"far fa-window-close"})]),e("img",{class:"modal-img",src:this.imgSrc,alt:"bigger img"},null,8,Ys),e("div",Zs,[this.caption?(a(),o("h3",xs,l(this.caption),1)):i("",!0),e("p",null,l(this.description),1)])])]),_:1})],64)}const ee=b(Ps,[["render",se],["__scopeId","data-v-fd8fcb0b"]]);const _e={name:"GalleryItem",components:{GalleryItemModal:ee,CenterGridItem:h},props:{gridSpan:{type:Number,required:!1,default:4},caption:{type:String,required:!1,default:null},description:{type:String,required:!1,default:"Gallery Item"},imgSrc:{type:String,required:!0}},methods:{onResize:function(){window.innerWidth>768?(this.windowInnerWidthBig=!0,this.gridSpanCalc=this.gridSpan):(this.windowInnerWidthBig=!1,this.gridSpanCalc=12)}},mounted(){this.onResize(),window.addEventListener("resize",this.onResize)},unmounted(){window.removeEventListener("resize",this.onResize)},data:function(){return{showModal:!1,gridSpanCalc:this.gridSpan,pictureStatic:new URL(Object.assign({"/src/assets/aboutme.gif":k,"/src/assets/banner.gif":y,"/src/assets/banner.png":w,"/src/assets/bar.svg":S,"/src/assets/cd/Dino.jpg":I,"/src/assets/cd/Frontloading.jpg":$,"/src/assets/cd/Test.jpg":C,"/src/assets/cd/aliandude.jpg":G,"/src/assets/cd/beachrun.jpg":M,"/src/assets/cd/cdthumb.jpg":B,"/src/assets/cd/deer.jpg":q,"/src/assets/cd/dogcool.jpg":z,"/src/assets/cd/dogologos.jpg":W,"/src/assets/cd/dogpeople.jpg":R,"/src/assets/cd/elements.jpg":N,"/src/assets/cd/pandalady.jpg":T,"/src/assets/cd/rancher.jpg":E,"/src/assets/cd/tigersharker.jpg":F,"/src/assets/favicon.ico":L,"/src/assets/general.css":O,"/src/assets/gifs/belly_yel.gif":V,"/src/assets/gifs/dinoshok.gif":D,"/src/assets/gifs/dog1.gif":U,"/src/assets/gifs/dogjump1.gif":A,"/src/assets/gifs/dogjump2.gif":H,"/src/assets/gifs/dogorun.gif":J,"/src/assets/gifs/dogosit.gif":K,"/src/assets/gifs/fish1.gif":P,"/src/assets/gifs/kattaplle.gif":Q,"/src/assets/gifs/runsmall.gif":X,"/src/assets/gifs/sleep.gif":Y,"/src/assets/golden/artwork.jpg":Z,"/src/assets/golden/char.jpg":x,"/src/assets/golden/goldenthumb.gif":ss,"/src/assets/golden/goldenthumb.jpg":es,"/src/assets/golden/logo.jpg":_s,"/src/assets/golden/monk.jpg":ts,"/src/assets/golden/poster.jpg":as,"/src/assets/golden/shadow.jpg":is,"/src/assets/illust/Original_Tortellini.jpg":os,"/src/assets/illust/bear.jpg":ls,"/src/assets/illust/bisli.jpg":gs,"/src/assets/illust/black.jpg":rs,"/src/assets/illust/bubbles.jpg":cs,"/src/assets/illust/camel.jpg":ns,"/src/assets/illust/dogskate.jpg":ds,"/src/assets/illust/dragon.jpg":ps,"/src/assets/illust/eat.jpg":bs,"/src/assets/illust/illustthumb.jpg":vs,"/src/assets/illust/karovka.jpg":us,"/src/assets/illust/parrot.jpg":fs,"/src/assets/illust/pidge.jpg":ms,"/src/assets/illust/pidgeon.jpg":js,"/src/assets/illust/pig.jpg":hs,"/src/assets/illust/poster.jpg":ks,"/src/assets/illust/salmon.jpg":ys,"/src/assets/json/dogo.json":Vs,"/src/assets/json/gifs.json":Ds,"/src/assets/json/golden.json":Us,"/src/assets/json/illust.json":As,"/src/assets/json/mapping.json":Hs,"/src/assets/json/sketch.json":Js,"/src/assets/logo.gif":ws,"/src/assets/sketch/bunnies.jpg":Ss,"/src/assets/sketch/bunns.jpg":Is,"/src/assets/sketch/cat_lady.jpg":$s,"/src/assets/sketch/cats.jpg":Cs,"/src/assets/sketch/colors.jpg":Gs,"/src/assets/sketch/comic.jpg":Ms,"/src/assets/sketch/comics1.jpg":Bs,"/src/assets/sketch/cows.jpg":qs,"/src/assets/sketch/girl1.jpg":zs,"/src/assets/sketch/girl2.jpg":Ws,"/src/assets/sketch/horse.jpg":Rs,"/src/assets/sketch/lady.jpg":Ns,"/src/assets/sketch/pink.jpg":Ts,"/src/assets/sketch/sketchthumb.jpg":Es,"/src/assets/sketch/tigers.jpg":Fs})[`/src/assets/${this.imgSrc}`],self.location).href,windowInnerWidthBig:!1}},computed:{spanId:function(){return`span-${Ls.v4()}`}}},te=["src"],ae={key:0},ie={key:0};function oe(s,_,t,v,u,f){const g=p("GalleryItemModal"),m=p("CenterGridItem");return a(),d(m,{gridSpan:this.gridSpan},{default:r(()=>[e("figure",null,[e("img",{onClick:_[0]||(_[0]=j=>s.showModal=s.windowInnerWidthBig),class:Ks(`gallery-img img-grid-x${s.gridSpanCalc}-span`),src:s.pictureStatic,alt:"gallery image"},null,10,te),s.windowInnerWidthBig?(a(),o("div",ae,[s.showModal?(a(),d(g,{key:0,imgSrc:s.pictureStatic,caption:t.caption,description:t.description,onModalOverlayClick:_[1]||(_[1]=j=>s.showModal=!1)},null,8,["imgSrc","caption","description"])):i("",!0)])):i("",!0),e("figcaption",null,[t.caption?(a(),o("h3",ie,l(t.caption),1)):i("",!0),e("p",null,l(t.description),1)])])]),_:1},8,["gridSpan"])}const re=b(_e,[["render",oe],["__scopeId","data-v-e4dd2fdc"]]);export{re as default};
