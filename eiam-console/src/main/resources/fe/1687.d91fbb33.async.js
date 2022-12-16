"use strict";(self.webpackChunktopiam_console=self.webpackChunktopiam_console||[]).push([[1687],{21687:function(De,Y,f){f.d(Y,{Z:function(){return Ae}});var l=f(4942),i=f(87462),b=f(97685),q=f(71002),_=f(94184),S=f.n(_),d=f(67294),H=f(53124),$=f(98423),ee=function(e){var t,a,n=e.prefixCls,s=e.className,c=e.style,o=e.size,u=e.shape,g=S()((t={},(0,l.Z)(t,n+"-lg",o==="large"),(0,l.Z)(t,n+"-sm",o==="small"),t)),m=S()((a={},(0,l.Z)(a,n+"-circle",u==="circle"),(0,l.Z)(a,n+"-square",u==="square"),(0,l.Z)(a,n+"-round",u==="round"),a)),v=d.useMemo(function(){return typeof o=="number"?{width:o,height:o,lineHeight:o+"px"}:{}},[o]);return d.createElement("span",{className:S()(n,g,m,s),style:(0,i.Z)((0,i.Z)({},v),c)})},N=ee,te=f(66981),le=f(67968),ae=f(45503),ne=new te.E4("ant-skeleton-loading",{"0%":{transform:"translateX(-37.5%)"},"100%":{transform:"translateX(37.5%)"}}),P=function(e){return{height:e,lineHeight:e+"px"}},I=function(e){return(0,i.Z)({width:e},P(e))},re=function(e){return{position:"relative",zIndex:0,overflow:"hidden",background:"transparent","&::after":{position:"absolute",top:0,insetInlineEnd:"-150%",bottom:0,insetInlineStart:"-150%",background:e.skeletonLoadingBackground,animationName:ne,animationDuration:e.skeletonLoadingMotionDuration,animationTimingFunction:"ease",animationIterationCount:"infinite",content:'""'}}},T=function(e){return(0,i.Z)({width:e*5,minWidth:e*5},P(e))},ie=function(e){var t,a=e.skeletonAvatarCls,n=e.color,s=e.controlHeight,c=e.controlHeightLG,o=e.controlHeightSM;return t={},(0,l.Z)(t,""+a,(0,i.Z)({display:"inline-block",verticalAlign:"top",background:n},I(s))),(0,l.Z)(t,""+a+a+"-circle",{borderRadius:"50%"}),(0,l.Z)(t,""+a+a+"-lg",(0,i.Z)({},I(c))),(0,l.Z)(t,""+a+a+"-sm",(0,i.Z)({},I(o))),t},oe=function(e){var t,a=e.controlHeight,n=e.borderRadiusSM,s=e.skeletonInputCls,c=e.controlHeightLG,o=e.controlHeightSM,u=e.color;return t={},(0,l.Z)(t,""+s,(0,i.Z)({display:"inline-block",verticalAlign:"top",background:u,borderRadius:n},T(a))),(0,l.Z)(t,s+"-lg",(0,i.Z)({},T(c))),(0,l.Z)(t,s+"-sm",(0,i.Z)({},T(o))),t},F=function(e){return(0,i.Z)({width:e},P(e))},se=function(e){var t,a,n=e.skeletonImageCls,s=e.imageSizeBase,c=e.color,o=e.borderRadiusSM;return a={},(0,l.Z)(a,""+n,(0,i.Z)((0,i.Z)({display:"flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",background:c,borderRadius:o},F(s*2)),(t={},(0,l.Z)(t,n+"-path",{fill:"#bfbfbf"}),(0,l.Z)(t,n+"-svg",(0,i.Z)((0,i.Z)({},F(s)),{maxWidth:s*4,maxHeight:s*4})),(0,l.Z)(t,n+"-svg"+n+"-svg-circle",{borderRadius:"50%"}),t))),(0,l.Z)(a,""+n+n+"-circle",{borderRadius:"50%"}),a},G=function(e,t,a){var n,s=e.skeletonButtonCls;return n={},(0,l.Z)(n,""+a+s+"-circle",{width:t,minWidth:t,borderRadius:"50%"}),(0,l.Z)(n,""+a+s+"-round",{borderRadius:t}),n},D=function(e){return(0,i.Z)({width:e*2,minWidth:e*2},P(e))},ce=function(e){var t=e.borderRadiusSM,a=e.skeletonButtonCls,n=e.controlHeight,s=e.controlHeightLG,c=e.controlHeightSM,o=e.color;return(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)((0,l.Z)({},""+a,(0,i.Z)({display:"inline-block",verticalAlign:"top",background:o,borderRadius:t,width:n*2,minWidth:n*2},D(n))),G(e,n,a)),(0,l.Z)({},a+"-lg",(0,i.Z)({},D(s)))),G(e,s,a+"-lg")),(0,l.Z)({},a+"-sm",(0,i.Z)({},D(c)))),G(e,c,a+"-sm"))},ue=function(e){var t,a,n,s,c,o=e.componentCls,u=e.skeletonAvatarCls,g=e.skeletonTitleCls,m=e.skeletonParagraphCls,v=e.skeletonButtonCls,h=e.skeletonInputCls,Z=e.skeletonImageCls,x=e.controlHeight,k=e.controlHeightLG,E=e.controlHeightSM,y=e.color,C=e.padding,W=e.marginSM,M=e.borderRadius,X=e.skeletonTitleHeight,A=e.skeletonBlockRadius,p=e.skeletonParagraphLineHeight,R=e.controlHeightXS,B=e.skeletonParagraphMarginTop;return c={},(0,l.Z)(c,""+o,(n={display:"table",width:"100%"},(0,l.Z)(n,o+"-header",(t={display:"table-cell",paddingInlineEnd:C,verticalAlign:"top"},(0,l.Z)(t,""+u,(0,i.Z)({display:"inline-block",verticalAlign:"top",background:y},I(x))),(0,l.Z)(t,u+"-circle",{borderRadius:"50%"}),(0,l.Z)(t,u+"-lg",(0,i.Z)({},I(k))),(0,l.Z)(t,u+"-sm",(0,i.Z)({},I(E))),t)),(0,l.Z)(n,o+"-content",(a={display:"table-cell",width:"100%",verticalAlign:"top"},(0,l.Z)(a,""+g,(0,l.Z)({width:"100%",height:X,background:y,borderRadius:A},"+ "+m,{marginBlockStart:E})),(0,l.Z)(a,""+m,{padding:0,"> li":{width:"100%",height:p,listStyle:"none",background:y,borderRadius:A,"+ li":{marginBlockStart:R}}}),(0,l.Z)(a,m+"> li:last-child:not(:first-child):not(:nth-child(2))",{width:"61%"}),a)),(0,l.Z)(n,"&-round "+o+"-content",(0,l.Z)({},g+", "+m+" > li",{borderRadius:M})),n)),(0,l.Z)(c,o+"-with-avatar "+o+"-content",(0,l.Z)({},""+g,(0,l.Z)({marginBlockStart:W},"+ "+m,{marginBlockStart:B}))),(0,l.Z)(c,""+o+o+"-element",(0,i.Z)((0,i.Z)((0,i.Z)((0,i.Z)({display:"inline-block",width:"auto"},ce(e)),ie(e)),oe(e)),se(e))),(0,l.Z)(c,""+o+o+"-block",(s={width:"100%"},(0,l.Z)(s,""+v,{width:"100%"}),(0,l.Z)(s,""+h,{width:"100%"}),s)),(0,l.Z)(c,""+o+o+"-active",(0,l.Z)({},`
        `+g+`,
        `+m+` > li,
        `+u+`,
        `+v+`,
        `+h+`,
        `+Z+`
      `,(0,i.Z)({},re(e)))),c},w=(0,le.Z)("Skeleton",function(r){var e=r.componentCls,t=(0,ae.TS)(r,{skeletonAvatarCls:e+"-avatar",skeletonTitleCls:e+"-title",skeletonParagraphCls:e+"-paragraph",skeletonButtonCls:e+"-button",skeletonInputCls:e+"-input",skeletonImageCls:e+"-image",imageSizeBase:r.controlHeight*1.5,skeletonTitleHeight:r.controlHeight/2,skeletonBlockRadius:r.borderRadiusSM,skeletonParagraphLineHeight:r.controlHeight/2,skeletonParagraphMarginTop:r.marginLG+r.marginXXS,borderRadius:100,skeletonLoadingBackground:"linear-gradient(90deg, "+r.color+" 25%, "+r.colorGradientEnd+" 37%, "+r.color+" 63%)",skeletonLoadingMotionDuration:"1.4s"});return[ue(t)]},function(r){var e=r.colorFillContent,t=r.colorFill;return{color:e,colorGradientEnd:t}}),de=function(e){var t=e.prefixCls,a=e.className,n=e.active,s=e.shape,c=s===void 0?"circle":s,o=e.size,u=o===void 0?"default":o,g=d.useContext(H.E_),m=g.getPrefixCls,v=m("skeleton",t),h=w(v),Z=(0,b.Z)(h,2),x=Z[0],k=Z[1],E=(0,$.Z)(e,["prefixCls","className"]),y=S()(v,v+"-element",(0,l.Z)({},v+"-active",n),a,k);return x(d.createElement("div",{className:y},d.createElement(N,(0,i.Z)({prefixCls:v+"-avatar",shape:c,size:u},E))))},ve=de,ge=function(e){var t,a=e.prefixCls,n=e.className,s=e.active,c=e.block,o=c===void 0?!1:c,u=e.size,g=u===void 0?"default":u,m=d.useContext(H.E_),v=m.getPrefixCls,h=v("skeleton",a),Z=w(h),x=(0,b.Z)(Z,2),k=x[0],E=x[1],y=(0,$.Z)(e,["prefixCls"]),C=S()(h,h+"-element",(t={},(0,l.Z)(t,h+"-active",s),(0,l.Z)(t,h+"-block",o),t),n,E);return k(d.createElement("div",{className:C},d.createElement(N,(0,i.Z)({prefixCls:h+"-button",size:g},y))))},me=ge,j=f(1413),he={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM288 604a64 64 0 10128 0 64 64 0 10-128 0zm118-224a48 48 0 1096 0 48 48 0 10-96 0zm158 228a96 96 0 10192 0 96 96 0 10-192 0zm148-314a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"dot-chart",theme:"outlined"},fe=he,Ze=f(84089),V=function(e,t){return d.createElement(Ze.Z,(0,j.Z)((0,j.Z)({},e),{},{ref:t,icon:fe}))};V.displayName="DotChartOutlined";var Ce=d.forwardRef(V),Se=function(e){var t=e.prefixCls,a=e.className,n=e.style,s=e.active,c=e.children,o=d.useContext(H.E_),u=o.getPrefixCls,g=u("skeleton",t),m=w(g),v=(0,b.Z)(m,2),h=v[0],Z=v[1],x=S()(g,g+"-element",(0,l.Z)({},g+"-active",s),Z,a),k=c!=null?c:d.createElement(Ce,null);return h(d.createElement("div",{className:x},d.createElement("div",{className:S()(g+"-image",a),style:n},k)))},xe=Se,ke="M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",ye=function(e){var t=e.prefixCls,a=e.className,n=e.style,s=e.active,c=d.useContext(H.E_),o=c.getPrefixCls,u=o("skeleton",t),g=w(u),m=(0,b.Z)(g,2),v=m[0],h=m[1],Z=S()(u,u+"-element",(0,l.Z)({},u+"-active",s),a,h);return v(d.createElement("div",{className:Z},d.createElement("div",{className:S()(u+"-image",a),style:n},d.createElement("svg",{viewBox:"0 0 1098 1024",xmlns:"http://www.w3.org/2000/svg",className:u+"-image-svg"},d.createElement("path",{d:ke,className:u+"-image-path"})))))},Ee=ye,pe=function(e){var t,a=e.prefixCls,n=e.className,s=e.active,c=e.block,o=e.size,u=o===void 0?"default":o,g=d.useContext(H.E_),m=g.getPrefixCls,v=m("skeleton",a),h=w(v),Z=(0,b.Z)(h,2),x=Z[0],k=Z[1],E=(0,$.Z)(e,["prefixCls"]),y=S()(v,v+"-element",(t={},(0,l.Z)(t,v+"-active",s),(0,l.Z)(t,v+"-block",c),t),n,k);return x(d.createElement("div",{className:y},d.createElement(N,(0,i.Z)({prefixCls:v+"-input",size:u},E))))},be=pe,He=f(74902),Ie=function(e){var t=function(g){var m=e.width,v=e.rows,h=v===void 0?2:v;if(Array.isArray(m))return m[g];if(h-1===g)return m},a=e.prefixCls,n=e.className,s=e.style,c=e.rows,o=(0,He.Z)(Array(c)).map(function(u,g){return d.createElement("li",{key:g,style:{width:t(g)}})});return d.createElement("ul",{className:S()(a,n),style:s},o)},we=Ie,ze=function(e){var t=e.prefixCls,a=e.className,n=e.width,s=e.style;return d.createElement("h3",{className:S()(t,a),style:(0,i.Z)({width:n},s)})},Re=ze;function O(r){return r&&(0,q.Z)(r)==="object"?r:{}}function Be(r,e){return r&&!e?{size:"large",shape:"square"}:{size:"large",shape:"circle"}}function Ne(r,e){return!r&&e?{width:"38%"}:r&&e?{width:"50%"}:{}}function Pe(r,e){var t={};return(!r||!e)&&(t.width="61%"),!r&&e?t.rows=3:t.rows=2,t}var z=function(e){var t=e.prefixCls,a=e.loading,n=e.className,s=e.style,c=e.children,o=e.avatar,u=o===void 0?!1:o,g=e.title,m=g===void 0?!0:g,v=e.paragraph,h=v===void 0?!0:v,Z=e.active,x=e.round,k=d.useContext(H.E_),E=k.getPrefixCls,y=k.direction,C=E("skeleton",t),W=w(C),M=(0,b.Z)(W,2),X=M[0],A=M[1];if(a||!("loading"in e)){var p,R=!!u,B=!!m,L=!!h,J;if(R){var Le=(0,i.Z)((0,i.Z)({prefixCls:C+"-avatar"},Be(B,L)),O(u));J=d.createElement("div",{className:C+"-header"},d.createElement(N,(0,i.Z)({},Le)))}var K;if(B||L){var Q;if(B){var $e=(0,i.Z)((0,i.Z)({prefixCls:C+"-title"},Ne(R,L)),O(m));Q=d.createElement(Re,(0,i.Z)({},$e))}var U;if(L){var Te=(0,i.Z)((0,i.Z)({prefixCls:C+"-paragraph"},Pe(R,B)),O(h));U=d.createElement(we,(0,i.Z)({},Te))}K=d.createElement("div",{className:C+"-content"},Q,U)}var Ge=S()(C,(p={},(0,l.Z)(p,C+"-with-avatar",R),(0,l.Z)(p,C+"-active",Z),(0,l.Z)(p,C+"-rtl",y==="rtl"),(0,l.Z)(p,C+"-round",x),p),n,A);return X(d.createElement("div",{className:Ge,style:s},J,K))}return typeof c!="undefined"?c:null};z.Button=me,z.Avatar=ve,z.Input=be,z.Image=Ee,z.Node=xe;var Me=z,Ae=Me}}]);
