"use strict";(self.webpackChunktopiam_portal=self.webpackChunktopiam_portal||[]).push([[396],{80720:function(qe,ce,o){var Re;function J(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?J=function(c){return typeof c}:J=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},J(a)}Re={value:!0},ce.Z=g;var t=G(o(67294));function s(){if(typeof WeakMap!="function")return null;var a=new WeakMap;return s=function(){return a},a}function G(a){if(a&&a.__esModule)return a;if(a===null||J(a)!=="object"&&typeof a!="function")return{default:a};var d=s();if(d&&d.has(a))return d.get(a);var c={},R=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in a)if(Object.prototype.hasOwnProperty.call(a,w)){var B=R?Object.getOwnPropertyDescriptor(a,w):null;B&&(B.get||B.set)?Object.defineProperty(c,w,B):c[w]=a[w]}return c.default=a,d&&d.set(a,c),c}function i(a,d){return M(a)||ke(a,d)||We(a,d)||Ve()}function Ve(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function We(a,d){if(!!a){if(typeof a=="string")return se(a,d);var c=Object.prototype.toString.call(a).slice(8,-1);if(c==="Object"&&a.constructor&&(c=a.constructor.name),c==="Map"||c==="Set")return Array.from(a);if(c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return se(a,d)}}function se(a,d){(d==null||d>a.length)&&(d=a.length);for(var c=0,R=new Array(d);c<d;c++)R[c]=a[c];return R}function ke(a,d){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(a)))){var c=[],R=!0,w=!1,B=void 0;try{for(var Q=a[Symbol.iterator](),de;!(R=(de=Q.next()).done)&&(c.push(de.value),!(d&&c.length===d));R=!0);}catch(ue){w=!0,B=ue}finally{try{!R&&Q.return!=null&&Q.return()}finally{if(w)throw B}}return c}}function M(a){if(Array.isArray(a))return a}function g(a,d){var c=d||{},R=c.defaultValue,w=c.value,B=c.onChange,Q=c.postState,de=t.useState(function(){return w!==void 0?w:R!==void 0?typeof R=="function"?R():R:typeof a=="function"?a():a}),ue=i(de,2),Ue=ue[0],Be=ue[1],ne=w!==void 0?w:Ue;Q&&(ne=Q(ne));function Le(Ie){Be(Ie),ne!==Ie&&B&&B(Ie,ne)}var be=t.useRef(!0);return t.useEffect(function(){if(be.current){be.current=!1;return}w===void 0&&Be(w)},[w]),[ne,Le]}},46682:function(qe,ce){var o;o={value:!0},ce.Z=Re;function Re(J,t){for(var s=J,G=0;G<t.length;G+=1){if(s==null)return;s=s[t[G]]}return s}},76893:function(qe,ce,o){o.r(ce),o.d(ce,{default:function(){return En}});var Re=o(12741),J=o.n(Re),t=o(4942),s=o(1413),G=o(91),i=o(85893),Ve=o(65767),We=Ve.Z,se=o(46986),ke=o(94184),M=o.n(ke),g=o(67294),a=o(74902),d=o(97685),c=o(73964),R=o(51158),w=o(84164),B=o(58448),Q=o(93125),de=o(46682),ue=["title","subTitle","avatar","description","extra","content","actions","type"],Ue=ue.reduce(function(e,n){return e.set(n,!0),e},new Map),Be=o(18073),ne=o(84517),Le=o(98293),be=o(21687),Ie=o(80720),an=["title","subTitle","content","itemTitleRender","prefixCls","actions","item","recordKey","avatar","cardProps","description","isEditable","checkbox","index","selected","loading","expand","onExpand","expandable","rowSupportExpand","showActions","showExtra","type","style","className","record","onRow","onItem","itemHeaderRender","cardActionProps","extra"];function rn(e){var n,m=e.prefixCls,x=e.expandIcon,p=x===void 0?(0,i.jsx)(Be.Z,{}):x,l=e.onExpand,r=e.expanded,b=e.record,h=p,y="".concat(m,"-row-expand-icon"),u=function(I){l(!r),I.stopPropagation()};return typeof p=="function"&&(h=p({expanded:r,onExpand:l,record:b})),(0,i.jsx)("span",{className:M()(y,(n={},(0,t.Z)(n,"".concat(m,"-row-expanded"),r),(0,t.Z)(n,"".concat(m,"-row-collapsed"),!r),n)),onClick:u,children:h})}function on(e){var n,m,x,p,l,r=e.prefixCls,b=(0,g.useContext)(se.ZP.ConfigContext),h=b.getPrefixCls,y=(0,g.useContext)(c.L_),u=y.hashId,te=h("pro-list",r),I="".concat(te,"-row"),W=e.title,j=e.subTitle,X=e.content,N=e.itemTitleRender,me=e.prefixCls,A=e.actions,De=e.item,$e=e.recordKey,O=e.avatar,z=e.cardProps,T=e.description,Ee=e.isEditable,ae=e.checkbox,P=e.index,Pe=e.selected,q=e.loading,K=e.expand,fe=e.onExpand,re=e.expandable,ve=e.rowSupportExpand,Y=e.showActions,oe=e.showExtra,ie=e.type,k=e.style,le=e.className,L=le===void 0?I:le,f=e.record,E=e.onRow,C=e.onItem,U=e.itemHeaderRender,H=e.cardActionProps,xe=e.extra,pe=(0,G.Z)(e,an),_=re||{},je=_.expandedRowRender,ee=_.expandIcon,Ye=_.expandRowByClick,ge=_.indentSize,D=ge===void 0?8:ge,v=_.expandedRowClassName,Z=(0,Ie.Z)(!!K,{value:K,onChange:fe}),$=(0,d.Z)(Z,2),F=$[0],he=$[1],S=M()((n={},(0,t.Z)(n,"".concat(I,"-selected"),!z&&Pe),(0,t.Z)(n,"".concat(I,"-show-action-hover"),Y==="hover"),(0,t.Z)(n,"".concat(I,"-type-").concat(ie),!!ie),(0,t.Z)(n,"".concat(I,"-editable"),Ee),(0,t.Z)(n,"".concat(I,"-show-extra-hover"),oe==="hover"),n),u,I),ye=M()(u,(0,t.Z)({},"".concat(L,"-extra"),oe==="hover")),Ne=F||Object.values(re||{}).length===0,Me=je&&je(f,P,D,F),Ce=(0,g.useMemo)(function(){if(!(!A||H==="actions"))return[(0,i.jsx)("div",{onClick:function(Se){return Se.stopPropagation()},children:A},"action")]},[A,H]),Je=(0,g.useMemo)(function(){if(!(!A||!H||H==="extra"))return[(0,i.jsx)("div",{onClick:function(Se){return Se.stopPropagation()},children:A},"action")]},[A,H]),Ze=W||j?(0,i.jsxs)("div",{className:"".concat(S,"-header-title ").concat(u),children:[W&&(0,i.jsx)("div",{className:"".concat(S,"-title ").concat(u),children:W}),j&&(0,i.jsx)("div",{className:"".concat(S,"-subTitle ").concat(u),children:j})]}):null,V=(m=N&&(N==null?void 0:N(f,P,Ze)))!==null&&m!==void 0?m:Ze,we=V||O||j||T?(0,i.jsx)(R.ZP.Item.Meta,{avatar:O,title:V,description:T&&Ne&&(0,i.jsx)("div",{className:"".concat(S,"-description ").concat(u),children:T})}):null,Oe=M()(u,(x={},(0,t.Z)(x,"".concat(S,"-item-has-checkbox"),ae),(0,t.Z)(x,"".concat(S,"-item-has-avatar"),O),(0,t.Z)(x,S,S),x)),Ae=(0,g.useMemo)(function(){return O||W?(0,i.jsxs)(i.Fragment,{children:[O&&(0,i.jsx)(Le.C,{size:22,src:O,className:"".concat(h("list-item-meta-avatar")," ").concat(u)}),(0,i.jsx)("span",{className:"".concat(h("list-item-meta-title")," ").concat(u),children:W})]}):null},[O,h,u,W]),Te=z?(0,i.jsx)(ne.ZP,(0,s.Z)((0,s.Z)((0,s.Z)({bordered:!0,loading:q,hoverable:!0},z),{},{title:Ae,subTitle:j,extra:Ce,actions:Je,bodyStyle:(0,s.Z)({padding:24},z.bodyStyle)},C==null?void 0:C(f,P)),{},{children:(0,i.jsx)(be.Z,{avatar:!0,title:!1,loading:q,active:!0,children:(0,i.jsxs)("div",{className:"".concat(S,"-header ").concat(u),children:[N&&(N==null?void 0:N(f,P,Ze)),X]})})})):(0,i.jsx)(R.ZP.Item,(0,s.Z)((0,s.Z)((0,s.Z)((0,s.Z)({className:M()(Oe,(0,t.Z)({},L,L!==I))},pe),{},{actions:Ce,extra:!!xe&&(0,i.jsx)("div",{className:ye,children:xe})},E==null?void 0:E(f,P)),C==null?void 0:C(f,P)),{},{onClick:function(Se){var ze,Qe,He,Xe;E==null||(ze=E(f,P))===null||ze===void 0||(Qe=ze.onClick)===null||Qe===void 0||Qe.call(ze,Se),C==null||(He=C(f,P))===null||He===void 0||(Xe=He.onClick)===null||Xe===void 0||Xe.call(He,Se),Ye&&he(!F)},children:(0,i.jsxs)(be.Z,{avatar:!0,title:!1,loading:q,active:!0,children:[(0,i.jsxs)("div",{className:"".concat(S,"-header ").concat(u),children:[(0,i.jsxs)("div",{className:"".concat(S,"-header-option ").concat(u),children:[!!ae&&(0,i.jsx)("div",{className:"".concat(S,"-checkbox ").concat(u),children:ae}),Object.values(re||{}).length>0&&ve&&rn({prefixCls:te,expandIcon:ee,onExpand:he,expanded:F,record:f})]}),(p=U&&(U==null?void 0:U(f,P,we)))!==null&&p!==void 0?p:we]}),Ne&&(X||Me)&&(0,i.jsxs)("div",{className:"".concat(S,"-content ").concat(u),children:[X,je&&ve&&(0,i.jsx)("div",{className:v&&v(f,P,D),children:Me})]})]})}));return z?(0,i.jsx)("div",{className:M()(u,(l={},(0,t.Z)(l,"".concat(S,"-card"),z),(0,t.Z)(l,L,L!==I),l)),style:k,children:Te}):Te}var ln=on,cn=["dataSource","columns","rowKey","showActions","showExtra","prefixCls","actionRef","itemTitleRender","renderItem","itemCardProps","itemHeaderRender","expandable","rowSelection","pagination","onRow","onItem","rowClassName"];function sn(e){var n=e.dataSource,m=e.columns,x=e.rowKey,p=e.showActions,l=e.showExtra,r=e.prefixCls,b=e.actionRef,h=e.itemTitleRender,y=e.renderItem,u=e.itemCardProps,te=e.itemHeaderRender,I=e.expandable,W=e.rowSelection,j=e.pagination,X=e.onRow,N=e.onItem,me=e.rowClassName,A=(0,G.Z)(e,cn),De=(0,g.useContext)(c.L_),$e=De.hashId,O=(0,g.useContext)(se.ZP.ConfigContext),z=O.getPrefixCls,T=g.useMemo(function(){return typeof x=="function"?x:function(D,v){return D[x]||v}},[x]),Ee=(0,w.Z)(n,"children",T),ae=(0,d.Z)(Ee,1),P=ae[0],Pe=(0,B.ZP)(n.length,(0,s.Z)({responsive:!0},j),function(){}),q=(0,d.Z)(Pe,1),K=q[0],fe=g.useMemo(function(){if(j===!1||!K.pageSize||n.length<K.total)return n;var D=K.current,v=D===void 0?1:D,Z=K.pageSize,$=Z===void 0?10:Z,F=n.slice((v-1)*$,v*$);return F},[n,K,j]),re=z("pro-list",r),ve=(0,Q.ZP)(W,{getRowKey:T,getRecordByKey:P,prefixCls:re,data:n,pageData:fe,expandType:"row",childrenColumnName:"children",locale:{}}),Y=(0,d.Z)(ve,2),oe=Y[0],ie=Y[1],k=I||{},le=k.expandedRowKeys,L=k.defaultExpandedRowKeys,f=k.defaultExpandAllRows,E=f===void 0?!0:f,C=k.onExpand,U=k.onExpandedRowsChange,H=k.rowExpandable,xe=g.useState(function(){return L||(E!==!1?n.map(T):[])}),pe=(0,d.Z)(xe,2),_=pe[0],je=pe[1],ee=g.useMemo(function(){return new Set(le||_||[])},[le,_]),Ye=g.useCallback(function(D){var v=T(D,n.indexOf(D)),Z,$=ee.has(v);$?(ee.delete(v),Z=(0,a.Z)(ee)):Z=[].concat((0,a.Z)(ee),[v]),je(Z),C&&C(!$,D),U&&U(Z)},[T,ee,n,C,U]),ge=oe([])[0];return(0,i.jsx)(R.ZP,(0,s.Z)((0,s.Z)({},A),{},{className:M()(z("pro-list-container",r),$e,A.className),dataSource:fe,pagination:j&&K,renderItem:function(v,Z){var $,F,he,S={className:typeof me=="function"?me(v,Z):me};m==null||m.forEach(function(V){var we=V.listKey,Oe=V.cardActionProps;if(!!Ue.has(we)){var Ae=V.dataIndex||we||V.key,Te=Array.isArray(Ae)?(0,de.Z)(v,Ae):v[Ae];Oe==="actions"&&we==="actions"&&(S.cardActionProps=Oe);var Ke=V.render?V.render(Te,v,Z):Te;Ke!=="-"&&(S[V.listKey]=Ke)}});var ye;ge&&ge.render&&(ye=ge.render(v,v,Z)||void 0);var Ne=(($=b.current)===null||$===void 0?void 0:$.isEditable((0,s.Z)((0,s.Z)({},v),{},{index:Z})))||{},Me=Ne.isEditable,Ce=Ne.recordKey,Je=ie.has(Ce||Z),Ze=(0,i.jsx)(ln,(0,s.Z)((0,s.Z)({cardProps:A.grid?(0,s.Z)((0,s.Z)((0,s.Z)({},u),A.grid),{},{checked:Je,onChecked:g.isValidElement(ye)?(F=ye)===null||F===void 0||(he=F.props)===null||he===void 0?void 0:he.onChange:void 0}):void 0},S),{},{recordKey:Ce,isEditable:Me||!1,expandable:I,expand:ee.has(T(v,Z)),onExpand:function(){Ye(v)},index:Z,record:v,item:v,showActions:p,showExtra:l,itemTitleRender:h,itemHeaderRender:te,rowSupportExpand:!H||H&&H(v),selected:ie.has(T(v,Z)),checkbox:ye,onRow:X,onItem:N}),Ce);return y?y(v,Z,Ze):Ze}}))}var dn=sn,un=o(14855),mn=function(n){var m,x,p,l,r,b;return(0,t.Z)({},n.componentCls,(b={backgroundColor:"transparent"},(0,t.Z)(b,"".concat(n.proComponentsCls,"-table-alert"),{marginBlockEnd:"16px"}),(0,t.Z)(b,"&-row",(r={borderBlockEnd:"1px solid ".concat(n.colorSplit)},(0,t.Z)(r,"".concat(n.antCls,"-list-item-meta-title"),{borderBlockEnd:"none",margin:0}),(0,t.Z)(r,"&:last-child",(0,t.Z)({borderBlockEnd:"none"},"".concat(n.antCls,"-list-item"),{borderBlockEnd:"none"})),(0,t.Z)(r,"&:hover",(m={backgroundColor:"rgba(0, 0, 0, 0.02)",transition:"background-color 0.3s"},(0,t.Z)(m,"".concat(n.antCls,"-list-item-action"),{display:"block"}),(0,t.Z)(m,"".concat(n.antCls,"-list-item-extra"),{display:"flex"}),(0,t.Z)(m,"".concat(n.componentCls,"-row-extra"),{display:"block"}),(0,t.Z)(m,"".concat(n.componentCls,"-row-subheader-actions"),{display:"block"}),m)),(0,t.Z)(r,"&-card",(0,t.Z)({marginBlock:8,marginInline:0,paddingBlock:0,paddingInline:8,"&:hover":{backgroundColor:"transparent"}},"".concat(n.antCls,"-list-item-meta-title"),{flexShrink:9,marginBlock:0,marginInline:0,lineHeight:"22px"})),(0,t.Z)(r,"&".concat(n.componentCls,"-row-editable"),(0,t.Z)({},"".concat(n.componentCls,"-list-item"),{"&-meta":{"&-avatar,&-description,&-title":{paddingBlock:6,paddingInline:0}},"&-action":{display:"block"}})),(0,t.Z)(r,"&".concat(n.componentCls,"-row-selected"),{backgroundColor:n.colorPrimaryBgHover,"&:hover":{backgroundColor:n.colorPrimaryBgHover}}),(0,t.Z)(r,"&".concat(n.componentCls,"-row-type-new"),{animationName:"techUiListActive",animationDuration:"3s"}),(0,t.Z)(r,"&".concat(n.componentCls,"-row-type-inline"),(0,t.Z)({},"".concat(n.componentCls,"-row-title"),{fontWeight:"normal"})),(0,t.Z)(r,"&".concat(n.componentCls,"-row-type-top"),{backgroundImage:"url('https://gw.alipayobjects.com/zos/antfincdn/DehQfMbOJb/icon.svg')",backgroundRepeat:"no-repeat",backgroundPosition:"left top",backgroundSize:"12px 12px"}),(0,t.Z)(r,"&-show-action-hover",(x={},(0,t.Z)(x,"".concat(n.antCls,`-list-item-action,
            `).concat(n.proComponentsCls,`-card-extra,
            `).concat(n.proComponentsCls,"-card-actions"),{display:"none"}),(0,t.Z)(x,"&:hover",(0,t.Z)({},"".concat(n.proComponentsCls,"-card-extra,").concat(n.proComponentsCls,"-card-actions"),{display:"flex"})),x)),(0,t.Z)(r,"&-show-extra-hover",(0,t.Z)({},"".concat(n.antCls,"-list-item-extra"),{display:"none"})),(0,t.Z)(r,"&-extra",{display:"none"}),(0,t.Z)(r,"&-subheader",{display:"flex",alignItems:"center",justifyContent:"space-between",height:"44px",paddingInline:24,paddingBlock:0,color:n.colorTextSecondary,lineHeight:"44px",background:"rgba(0, 0, 0, 0.02)","&-actions":{display:"none"},"&-actions *":{marginInlineEnd:8,"&:last-child":{marginInlineEnd:0}}}),(0,t.Z)(r,"&-expand-icon",{marginInlineEnd:8,color:n.colorTextSecondary,"> .anticon > svg":{transition:"0.3s"}}),(0,t.Z)(r,"&-expanded",{" > .anticon > svg":{transform:"rotate(90deg)"}}),(0,t.Z)(r,"&-title",{marginInlineEnd:"16px",wordBreak:"break-all",cursor:"pointer","&:hover":{color:n.colorPrimary}}),(0,t.Z)(r,"&-content",{position:"relative",display:"flex",flex:"1",flexDirection:"column",marginBlock:0,marginInline:32}),(0,t.Z)(r,"&-subTitle",{color:"rgba(0, 0, 0, 0.45)"}),(0,t.Z)(r,"&-description",{marginBlockStart:"4px",wordBreak:"break-all"}),(0,t.Z)(r,"&-avatar",{display:"flex"}),(0,t.Z)(r,"&-header",{display:"flex",flex:"1",justifyContent:"flex-start",h4:{margin:0,padding:0}}),(0,t.Z)(r,"&-header-title",{display:"flex",alignItems:"center",justifyContent:"flex-start"}),(0,t.Z)(r,"&-header-option",{display:"flex"}),(0,t.Z)(r,"&-checkbox",{width:"16px",marginInlineEnd:"12px"}),(0,t.Z)(r,"&-no-split",(p={},(0,t.Z)(p,"".concat(n.componentCls,"-row"),{borderBlockEnd:"none"}),(0,t.Z)(p,"".concat(n.antCls,"-list ").concat(n.antCls,"-list-item"),{borderBlockEnd:"none"}),p)),(0,t.Z)(r,"&-bordered",(0,t.Z)({},"".concat(n.componentCls,"-toolbar"),{borderBlockEnd:"1px solid ".concat(n.colorSplit)})),(0,t.Z)(r,"".concat(n.antCls,"-list-vertical"),(l={},(0,t.Z)(l,"".concat(n.componentCls,"-row"),{borderBlockEnd:"12px 18px 12px 24px"}),(0,t.Z)(l,"&-header-title",{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}),(0,t.Z)(l,"&-content",{marginBlock:0,marginInline:0}),(0,t.Z)(l,"&-subTitle",{marginBlockStart:8}),(0,t.Z)(l,"".concat(n.antCls,"-list-item-extra"),(0,t.Z)({display:"flex",alignItems:"center",marginInlineStart:"32px"},"".concat(n.componentCls,"-row-description"),{marginBlockStart:16})),(0,t.Z)(l,"".concat(n.antCls,"-list-bordered ").concat(n.antCls,"-list-item"),{paddingInline:0}),(0,t.Z)(l,"".concat(n.componentCls,"-row-show-extra-hover"),(0,t.Z)({},"".concat(n.antCls,"-list-item-extra "),{display:"none"})),l)),(0,t.Z)(r,"".concat(n.antCls,"-list-pagination"),{marginBlockEnd:n.marginLG}),(0,t.Z)(r,"".concat(n.antCls,"-list-list"),{"&-item":{cursor:"pointer",paddingBlock:12,paddingInline:12}}),(0,t.Z)(r,"".concat(n.antCls,"-list-vertical .").concat(n.proComponentsCls,"-list-row ").concat(n.antCls,"-list"),(0,t.Z)({"&-header":{paddingBlock:0,paddingInline:0,borderBlockEnd:"none"}},"".concat(n.antCls,"-list-item"),{width:"100%",paddingBlock:12,paddingInlineStart:24,paddingInlineEnd:18,"&-meta-avatar":{display:"flex",alignItems:"center",marginInlineEnd:8},"&-action-split":{display:"none"},"&-meta-title":{marginBlock:0,marginInline:0}})),(0,t.Z)(r,"@keyframes techUiListActive",{"0%":{backgroundColor:"unset"},"30%":{background:"#fefbe6"},"100%":{backgroundColor:"unset"}}),r)),b))};function fn(e){return(0,un.Xj)("ProList",function(n){var m=(0,s.Z)((0,s.Z)({},n),{},{componentCls:".".concat(e)});return[mn(m)]})}var vn=["metas","split","footer","rowKey","tooltip","className","options","search","expandable","showActions","showExtra","rowSelection","pagination","itemLayout","renderItem","grid","itemCardProps","onRow","onItem","rowClassName","locale","itemHeaderRender","itemTitleRender"];function _e(e){var n=e.metas,m=e.split,x=e.footer,p=e.rowKey,l=e.tooltip,r=e.className,b=e.options,h=b===void 0?!1:b,y=e.search,u=y===void 0?!1:y,te=e.expandable,I=e.showActions,W=e.showExtra,j=e.rowSelection,X=j===void 0?!1:j,N=e.pagination,me=N===void 0?!1:N,A=e.itemLayout,De=e.renderItem,$e=e.grid,O=e.itemCardProps,z=e.onRow,T=e.onItem,Ee=e.rowClassName,ae=e.locale,P=e.itemHeaderRender,Pe=e.itemTitleRender,q=(0,G.Z)(e,vn),K=(0,g.useRef)();(0,g.useImperativeHandle)(q.actionRef,function(){return K.current});var fe=(0,g.useContext)(se.ZP.ConfigContext),re=fe.getPrefixCls,ve=(0,g.useMemo)(function(){var L=[];return Object.keys(n||{}).forEach(function(f){var E=n[f]||{},C=E.valueType;C||(f==="avatar"&&(C="avatar"),f==="actions"&&(C="option"),f==="description"&&(C="textarea")),L.push((0,s.Z)((0,s.Z)({listKey:f,dataIndex:(E==null?void 0:E.dataIndex)||f},E),{},{valueType:C}))}),L},[n]),Y=re("pro-list",e.prefixCls),oe=fn(Y),ie=oe.wrapSSR,k=oe.hashId,le=M()(Y,k,(0,t.Z)({},"".concat(Y,"-no-split"),!m));return ie((0,i.jsx)(We,(0,s.Z)((0,s.Z)({tooltip:l},q),{},{actionRef:K,pagination:me,type:"list",rowSelection:X,search:u,options:h,className:M()(Y,r,le),columns:ve,rowKey:p,tableViewRender:function(f){var E=f.columns,C=f.size,U=f.pagination,H=f.rowSelection,xe=f.dataSource,pe=f.loading;return(0,i.jsx)(dn,{grid:$e,itemCardProps:O,itemTitleRender:Pe,prefixCls:e.prefixCls,columns:E,renderItem:De,actionRef:K,dataSource:xe||[],size:C,footer:x,split:m,rowKey:p,expandable:te,rowSelection:X===!1?void 0:H,showActions:I,showExtra:W,pagination:U,itemLayout:A,loading:pe,itemHeaderRender:P,onRow:z,onItem:T,rowClassName:Ee,locale:ae})}})))}function Pn(e){return _jsx(_e,_objectSpread({cardProps:!1,search:!1,toolBarRender:!1},e))}var jn=null,xn=o(19847),pn=o(17057),gn=o(69677),hn=o(99138),en=o(4393),yn=o(97983),nn=o.n(yn),Cn=o(11281),Fe=o.n(Cn),Zn=o(40794),wn=o.n(Zn),tn=o(40367),Sn=o(98971);function Rn(e,n,m){return Ge.apply(this,arguments)}function Ge(){return Ge=wn()(nn()().mark(function e(n,m,x){var p,l,r;return nn()().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,(0,Sn.request)("/api/app/list",{params:Fe()(Fe()(Fe()({},n),(0,tn.YE)(m)),(0,tn.oH)(x))});case 2:return p=h.sent,l=p.result,r=p.success,h.abrupt("return",{data:l!=null&&l.list?l==null?void 0:l.list:[],success:r,total:l!=null&&l.pagination?l==null?void 0:l.pagination.total:0});case 6:case"end":return h.stop()}},e)})),Ge.apply(this,arguments)}var bn=pn.Z.Paragraph,In=function(){var n=(0,g.useRef)(),m=(0,g.useState)(),x=J()(m,2),p=x[0],l=x[1],r=(0,i.jsx)("div",{style:{textAlign:"center"},children:(0,i.jsx)(gn.Z.Search,{placeholder:"\u8BF7\u8F93\u5165",enterButton:"\u641C\u7D22",size:"large",style:{maxWidth:522,width:"100%"},onSearch:function(y){var u;l({name:y}),(u=n.current)===null||u===void 0||u.reload()}})}),b=function(y){var u=window.document.createElement("div");u.innerHTML="<form action='"+y+"' method='POST' name='auto_submit_form' style='display:none'>",document.body.appendChild(u),document.forms.auto_submit_form.setAttribute("target","_blank"),document.forms.auto_submit_form.submit(),document.body.removeChild(u)};return(0,i.jsxs)(xn._z,{content:r,children:[(0,i.jsx)(hn.Z,{message:"\u8BF7\u70B9\u51FB\u4E0B\u65B9\u7684\u5E94\u7528\u8FDB\u884C\u5355\u70B9\u767B\u5F55\u3002\u82E5\u5E0C\u671B\u4FEE\u6539\u5E94\u7528\u5185\u5BB9\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002",showIcon:!0}),(0,i.jsx)("br",{}),(0,i.jsx)(_e,{rowKey:"id",ghost:!0,grid:{xs:1,sm:2,md:2,lg:3,xl:4,xxl:5},request:Rn,pagination:{},params:p,actionRef:n,renderItem:function(y){return y&&y.id&&(0,i.jsx)(en.Z,{style:{margin:5},hoverable:!0,onClick:function(){b(y.idpInitUrl)},children:(0,i.jsx)(en.Z.Meta,{avatar:(0,i.jsx)(Le.C,{shape:"circle",size:50,src:y.icon},y.id),title:y.name,description:(0,i.jsx)(bn,{ellipsis:{rows:2,tooltip:!0},children:y.description})})})}})]})},En=In}}]);
