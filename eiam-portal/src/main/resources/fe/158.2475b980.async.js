"use strict";(self.webpackChunktopiam_portal=self.webpackChunktopiam_portal||[]).push([[158],{51158:function(qe,oe,c){c.d(oe,{ZM:function(){return T},ZP:function(){return Le}});var J=c(74902),I=c(87462),t=c(4942),A=c(97685),se=c(71002),de=c(94184),$=c.n(de),a=c(67294),w=c(53124),me=c(88258),ce=c(92820),ge=c(25378),pe=c(18749),fe=c(57953),Y=c(24308),ue=c(21584),ve=c(96159),Q=function(r,e){var d={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(d[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(r);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(d[n[o]]=r[n[o]]);return d},xe=function(e){var d=e.prefixCls,n=e.className,o=e.avatar,l=e.title,s=e.description,m=Q(e,["prefixCls","className","avatar","title","description"]),i=(0,a.useContext)(w.E_),x=i.getPrefixCls,f=x("list",d),u=$()(f+"-item-meta",n),P=a.createElement("div",{className:f+"-item-meta-content"},l&&a.createElement("h4",{className:f+"-item-meta-title"},l),s&&a.createElement("div",{className:f+"-item-meta-description"},s));return a.createElement("div",(0,I.Z)({},m,{className:u}),o&&a.createElement("div",{className:f+"-item-meta-avatar"},o),(l||s)&&P)},Se=function(e,d){var n=e.prefixCls,o=e.children,l=e.actions,s=e.extra,m=e.className,i=e.colStyle,x=Q(e,["prefixCls","children","actions","extra","className","colStyle"]),f=(0,a.useContext)(T),u=f.grid,P=f.itemLayout,p=(0,a.useContext)(w.E_),C=p.getPrefixCls,z=function(){var y;return a.Children.forEach(o,function(H){typeof H=="string"&&(y=!0)}),y&&a.Children.count(o)>1},G=function(){return P==="vertical"?!!s:!z()},Z=C("list",n),L=l&&l.length>0&&a.createElement("ul",{className:Z+"-item-action",key:"actions"},l.map(function(S,y){return a.createElement("li",{key:Z+"-item-action-"+y},S,y!==l.length-1&&a.createElement("em",{className:Z+"-item-action-split"}))})),M=u?"div":"li",B=a.createElement(M,(0,I.Z)({},x,u?{}:{ref:d},{className:$()(Z+"-item",(0,t.Z)({},Z+"-item-no-flex",!G()),m)}),P==="vertical"&&s?[a.createElement("div",{className:Z+"-item-main",key:"content"},o,L),a.createElement("div",{className:Z+"-item-extra",key:"extra"},s)]:[o,L,(0,ve.Tm)(s,{key:"extra"})]);return u?a.createElement(ue.Z,{ref:d,flex:1,style:i},B):B},U=(0,a.forwardRef)(Se);U.Meta=xe;var he=U,Ze=c(67968),ye=c(45503),Ce=c(14747),Ee=function(e){var d,n,o=e.listBorderedCls,l=e.componentCls,s=e.paddingLG,m=e.margin,i=e.padding,x=e.listItemPaddingSM,f=e.marginLG,u=e.borderRadiusLG;return n={},(0,t.Z)(n,""+o,(d={border:e.lineWidth+"px "+e.lineType+" "+e.colorBorder,borderRadius:u},(0,t.Z)(d,l+"-header,"+l+"-footer,"+l+"-item",{paddingInline:s}),(0,t.Z)(d,l+"-pagination",{margin:m+"px "+f+"px"}),d)),(0,t.Z)(n,""+o+l+"-sm",(0,t.Z)({},l+"-item,"+l+"-header,"+l+"-footer",{padding:x})),(0,t.Z)(n,""+o+l+"-lg",(0,t.Z)({},l+"-item,"+l+"-header,"+l+"-footer",{padding:i+"px "+s+"px"})),n},Ie=function(e){var d,n,o,l,s=e.componentCls,m=e.screenSM,i=e.screenMD,x=e.marginLG,f=e.marginSM,u=e.margin;return l={},(0,t.Z)(l,"@media screen and (max-width:"+i+")",(d={},(0,t.Z)(d,""+s,(0,t.Z)({},s+"-item",(0,t.Z)({},s+"-item-action",{marginInlineStart:x}))),(0,t.Z)(d,s+"-vertical",(0,t.Z)({},s+"-item",(0,t.Z)({},s+"-item-extra",{marginInlineStart:x}))),d)),(0,t.Z)(l,"@media screen and (max-width: "+m+")",(o={},(0,t.Z)(o,""+s,(0,t.Z)({},s+"-item",(0,t.Z)({flexWrap:"wrap"},s+"-action",{marginInlineStart:f}))),(0,t.Z)(o,s+"-vertical",(0,t.Z)({},s+"-item",(n={flexWrap:"wrap-reverse"},(0,t.Z)(n,s+"-item-main",{minWidth:e.contentWidth}),(0,t.Z)(n,s+"-item-extra",{margin:"auto auto "+u+"px"}),n))),o)),l},Pe=function(e){var d,n,o,l,s,m,i=e.componentCls,x=e.antCls,f=e.controlHeight,u=e.minHeight,P=e.paddingSM,p=e.marginLG,C=e.padding,z=e.listItemPadding,G=e.colorPrimary,Z=e.listItemPaddingSM,L=e.listItemPaddingLG,M=e.paddingXS,B=e.margin,S=e.colorText,y=e.colorTextDescription,H=e.motionDurationSlow,D=e.lineWidth;return m={},(0,t.Z)(m,""+i,(0,I.Z)((0,I.Z)({},(0,Ce.Wf)(e)),(l={position:"relative","*":{outline:"none"}},(0,t.Z)(l,i+"-header, "+i+"-footer",{background:"transparent",paddingBlock:P}),(0,t.Z)(l,i+"-pagination",(0,t.Z)({marginBlockStart:p,textAlign:"end"},x+"-pagination-options",{textAlign:"start"})),(0,t.Z)(l,i+"-spin",{minHeight:u,textAlign:"center"}),(0,t.Z)(l,i+"-items",{margin:0,padding:0,listStyle:"none"}),(0,t.Z)(l,i+"-item",(o={display:"flex",alignItems:"center",justifyContent:"space-between",padding:z,color:S},(0,t.Z)(o,i+"-item-meta",(d={display:"flex",flex:1,alignItems:"flex-start",maxWidth:"100%"},(0,t.Z)(d,i+"-item-meta-avatar",{marginInlineEnd:C}),(0,t.Z)(d,i+"-item-meta-content",{flex:"1 0",width:0,color:S}),(0,t.Z)(d,i+"-item-meta-title",{marginBottom:e.marginXXS,color:S,fontSize:e.fontSize,lineHeight:e.lineHeight,"> a":(0,t.Z)({color:S,transition:"all "+H},"&:hover",{color:G})}),(0,t.Z)(d,i+"-item-meta-description",{color:y,fontSize:e.fontSize,lineHeight:e.lineHeight}),d)),(0,t.Z)(o,i+"-item-action",(n={flex:"0 0 auto",marginInlineStart:e.marginXXL,padding:0,fontSize:0,listStyle:"none"},(0,t.Z)(n,"& > li",(0,t.Z)({position:"relative",display:"inline-block",padding:"0 "+M+"px",color:y,fontSize:e.fontSize,lineHeight:e.lineHeight,textAlign:"center"},"&:first-child",{paddingInlineStart:0})),(0,t.Z)(n,i+"-item-action-split",{position:"absolute",insetBlockStart:"50%",insetInlineEnd:0,width:D,height:Math.ceil(e.fontSize*e.lineHeight)-e.marginXXS*2,transform:"translateY(-50%)",backgroundColor:e.colorSplit}),n)),o)),(0,t.Z)(l,i+"-empty",{padding:C+"px 0",color:y,fontSize:e.fontSizeSM,textAlign:"center"}),(0,t.Z)(l,i+"-empty-text",{padding:C,color:e.colorTextDisabled,fontSize:e.fontSize,textAlign:"center"}),(0,t.Z)(l,i+"-item-no-flex",{display:"block"}),l))),(0,t.Z)(m,i+"-grid "+x+"-col > "+i+"-item",{display:"block",maxWidth:"100%",marginBlockEnd:B,paddingBlock:0,borderBlockEnd:"none"}),(0,t.Z)(m,i+"-vertical "+i+"-item",(s={alignItems:"initial"},(0,t.Z)(s,i+"-item-main",{display:"block",flex:1}),(0,t.Z)(s,i+"-item-extra",{marginInlineStart:p}),(0,t.Z)(s,i+"-item-meta",(0,t.Z)({marginBlockEnd:C},i+"-item-meta-title",{marginBlockEnd:P,color:S,fontSize:e.fontSizeLG,lineHeight:e.lineHeightLG})),(0,t.Z)(s,i+"-item-action",{marginBlockStart:C,marginInlineStart:"auto","> li":(0,t.Z)({padding:"0 "+C+"px"},"&:first-child",{paddingInlineStart:0})}),s)),(0,t.Z)(m,i+"-split "+i+"-item",(0,t.Z)({borderBlockEnd:e.lineWidth+"px "+e.lineType+" "+e.colorSplit},"&:last-child",{borderBlockEnd:"none"})),(0,t.Z)(m,i+"-split "+i+"-header",{borderBlockEnd:e.lineWidth+"px "+e.lineType+" "+e.colorSplit}),(0,t.Z)(m,i+"-split"+i+"-empty "+i+"-footer",{borderTop:e.lineWidth+"px "+e.lineType+" "+e.colorSplit}),(0,t.Z)(m,i+"-loading "+i+"-spin-nested-loading",{minHeight:f}),(0,t.Z)(m,i+"-split"+i+"-something-after-last-item "+x+"-spin-container > "+i+"-items > "+i+"-item:last-child",{borderBlockEnd:e.lineWidth+"px "+e.lineType+" "+e.colorSplit}),(0,t.Z)(m,i+"-lg "+i+"-item",{padding:L}),(0,t.Z)(m,i+"-sm "+i+"-item",{padding:Z}),(0,t.Z)(m,i+":not("+i+"-vertical)",(0,t.Z)({},i+"-item-no-flex",(0,t.Z)({},i+"-item-action",{float:"right"}))),m},be=(0,Ze.Z)("List",function(r){var e=(0,ye.TS)(r,{listBorderedCls:r.componentCls+"-bordered",minHeight:r.controlHeightLG,listItemPadding:r.paddingContentVertical+"px "+r.paddingContentHorizontalLG+"px",listItemPaddingSM:r.paddingContentVerticalSM+"px "+r.paddingContentHorizontal+"px",listItemPaddingLG:r.paddingContentVerticalLG+"px "+r.paddingContentHorizontalLG+"px"});return[Pe(e),Ee(e),Ie(e)]},{contentWidth:220}),ze=function(r,e){var d={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(d[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(r);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(d[n[o]]=r[n[o]]);return d},T=a.createContext({}),ke=T.Consumer;function q(r){var e,d=r.pagination,n=d===void 0?!1:d,o=r.prefixCls,l=r.bordered,s=l===void 0?!1:l,m=r.split,i=m===void 0?!0:m,x=r.className,f=r.children,u=r.itemLayout,P=r.loadMore,p=r.grid,C=r.dataSource,z=C===void 0?[]:C,G=r.size,Z=r.header,L=r.footer,M=r.loading,B=M===void 0?!1:M,S=r.rowKey,y=r.renderItem,H=r.locale,D=ze(r,["pagination","prefixCls","bordered","split","className","children","itemLayout","loadMore","grid","dataSource","size","header","footer","loading","rowKey","renderItem","locale"]),k=n&&(0,se.Z)(n)==="object"?n:{},Ne=a.useState(k.defaultCurrent||1),_=(0,A.Z)(Ne,2),Me=_[0],Be=_[1],He=a.useState(k.defaultPageSize||10),ee=(0,A.Z)(He,2),Oe=ee[0],Ge=ee[1],X=a.useContext(w.E_),Te=X.getPrefixCls,We=X.renderEmpty,Re=X.direction,je={current:1,total:0},te=function(h){return function(N,b){Be(N),Ge(b),n&&n[h]&&n[h](N,b)}},Ae=te("onChange"),$e=te("onShowSizeChange"),we=function(h,N){if(!y)return null;var b;return typeof S=="function"?b=S(h):S?b=h[S]:b=h.key,b||(b="list-item-"+N),a.createElement(a.Fragment,{key:b},y(h,N))},De=function(){return!!(P||n||L)},Xe=function(h,N){return a.createElement("div",{className:h+"-empty-text"},H&&H.emptyText||N("List"))},v=Te("list",o),Fe=be(v),ie=(0,A.Z)(Fe,2),Ve=ie[0],Ke=ie[1],O=B;typeof O=="boolean"&&(O={spinning:O});var F=O&&O.spinning,W="";switch(G){case"large":W="lg";break;case"small":W="sm";break;default:break}var Je=$()(v,(e={},(0,t.Z)(e,v+"-vertical",u==="vertical"),(0,t.Z)(e,v+"-"+W,W),(0,t.Z)(e,v+"-split",i),(0,t.Z)(e,v+"-bordered",s),(0,t.Z)(e,v+"-loading",F),(0,t.Z)(e,v+"-grid",!!p),(0,t.Z)(e,v+"-something-after-last-item",De()),(0,t.Z)(e,v+"-rtl",Re==="rtl"),e),x,Ke),E=(0,I.Z)((0,I.Z)((0,I.Z)({},je),{total:z.length,current:Me,pageSize:Oe}),n||{}),ne=Math.ceil(E.total/E.pageSize);E.current>ne&&(E.current=ne);var re=n?a.createElement("div",{className:v+"-pagination"},a.createElement(pe.Z,(0,I.Z)({},E,{onChange:Ae,onShowSizeChange:$e}))):null,V=(0,J.Z)(z);n&&z.length>(E.current-1)*E.pageSize&&(V=(0,J.Z)(z).splice((E.current-1)*E.pageSize,E.pageSize));var Ye=Object.keys(p||{}).some(function(g){return["xs","sm","md","lg","xl","xxl"].includes(g)}),ae=(0,ge.Z)(Ye),R=a.useMemo(function(){for(var g=0;g<Y.c4.length;g+=1){var h=Y.c4[g];if(ae[h])return h}},[ae]),Qe=a.useMemo(function(){if(!!p){var g=R&&p[R]?p[R]:p.column;if(g)return{width:100/g+"%",maxWidth:100/g+"%"}}},[p==null?void 0:p.column,R]),K=F&&a.createElement("div",{style:{minHeight:53}});if(V.length>0){var le=V.map(function(g,h){return we(g,h)});K=p?a.createElement(ce.Z,{gutter:p.gutter},a.Children.map(le,function(g){return a.createElement("div",{key:g==null?void 0:g.key,style:Qe},g)})):a.createElement("ul",{className:v+"-items"},le)}else!f&&!F&&(K=Xe(v,We||me.Z));var j=E.position||"bottom",Ue=a.useMemo(function(){return{grid:p,itemLayout:u}},[JSON.stringify(p),u]);return Ve(a.createElement(T.Provider,{value:Ue},a.createElement("div",(0,I.Z)({className:Je},D),(j==="top"||j==="both")&&re,Z&&a.createElement("div",{className:v+"-header"},Z),a.createElement(fe.Z,(0,I.Z)({},O),K,f),L&&a.createElement("div",{className:v+"-footer"},L),P||(j==="bottom"||j==="both")&&re)))}q.Item=he;var Le=q}}]);
