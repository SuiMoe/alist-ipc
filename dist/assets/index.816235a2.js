var ye=Object.defineProperty;var Z=Object.getOwnPropertySymbols;var Ce=Object.prototype.hasOwnProperty,ke=Object.prototype.propertyIsEnumerable;var ee=(e,n,o)=>n in e?ye(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,te=(e,n)=>{for(var o in n||(n={}))Ce.call(n,o)&&ee(e,o,n[o]);if(Z)for(var o of Z(n))ke.call(n,o)&&ee(e,o,n[o]);return e};var ne=(e,n,o)=>new Promise((a,r)=>{var s=i=>{try{d(o.next(i))}catch(u){r(u)}},c=i=>{try{d(o.throw(i))}catch(u){r(u)}},d=i=>i.done?a(i.value):Promise.resolve(i.value).then(s,c);d((o=o.apply(e,n)).next())});import{r as l,u as M,h as N,j as S,k as oe,l as L,R as t,n as y,I as ae,H as V,P as Se,F as ve,L as B,o as Ie,p as O,q as re,s as U,t as j,C as H,V as se,v as le,x as Fe,y as ce,z as ie,A as Me,D as W,E as Re,G as Pe,J as Te,K as Be,M as He,N as Ae,O as $e,Q as ze,U as Le,W as Oe,X as Ue}from"./vendor.e93814c3.js";import{a as ue,i as de,b as A,I as b,G as pe,M as je,B as De,c as Ne,d as Ve,F as We,g as Ke,e as Ge,O as qe,f as Je}from"./index.7184e46e.js";import{_ as me}from"./index.6f9fd387.js";import{c as Xe}from"./copy-clip.08e8f9de.js";const fe=(...e)=>e.join("/").replace(/\/{2,}/g,"/");let K;const Qe=ue.CancelToken,Ye=()=>{const{password:e,page:n}=l.exports.useContext(b),{pathname:o}=M();let a=o;return{path:()=>de.post("path",{path:a,password:e,page_num:n.page_num,page_size:n.page_size},{cancelToken:new Qe(function(s){K=s})}),cancelPath:()=>{K&&K()},mkdir:r=>{const s=fe(a,r);return A.post("mkdir",{path:s})},rename:(r,s)=>{const c=fe(a,s);return A.post("rename",{name:r,path:c})},move:(r,s)=>A.post("move",{src_dir:a,dst_dir:s,names:r}),copy:(r,s)=>A.post("copy",{src_dir:a,dst_dir:s,names:r}),refresh:()=>A.post("refresh",{path:a})}};function Ze(e){return pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M352 115h90c3.3 0 6-2.7 6-6 0-8.2-3.7-16-10-21.3l-77.1-64.2c-4.9-4.1-14.2-7.4-20.6-7.4-4.1 0-7.4 3.3-7.4 7.4V96c.1 10.5 8.6 19 19.1 19z"}},{tag:"path",attr:{d:"M307 96V16H176c-17.6 0-32 14.4-32 32v336c0 17.6 14.4 32 32 32h240c17.6 0 32-14.4 32-32V141h-96c-24.8 0-45-20.2-45-45z"}},{tag:"path",attr:{d:"M116 412V80H96c-17.6 0-32 14.4-32 32v352c0 17.6 14.4 32 32 32h256c17.6 0 32-14.4 32-32v-20H148c-17.6 0-32-14.4-32-32z"}}]})(e)}function kt(e){return pe({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 119c0-13.3-9.4-23-22.8-23H198.9c-2.8 0-4.3-.6-6.1-2.4l-22.5-22.5-.2-.2c-4.9-4.6-8.9-6.9-17.3-6.9H56.7C42.9 64 32 74.3 32 87v73.7c0 1.6 1.7 1.5 3 .7s5-1.4 7-1.4h428c2 0 5.7.6 7 1.4 1.3.8 3 .9 3-.7V119zM32 416.4c0 17.5 14.2 31.6 31.6 31.6H448c17.6 0 32-14.4 32-32V204c0-8.8-7.2-16-16-16H48c-8.8 0-16 7.2-16 16v212.4z"}}]})(e)}const et=(e=!1)=>{const{type:n}=l.exports.useContext(b);let{pathname:o}=M(),a="/";a==="/"&&(a=window.location.origin+"/");let r=o.endsWith("/")?o.slice(0,-1):o;return n==="file"&&(r=r.substring(0,r.lastIndexOf("/"))),e?`${a}p${r}`:`${a}d${r}`},tt=e=>je.hashStr(e),ge=e=>tt(e).slice(8,24),nt=()=>{const{getSetting:e,password:n,loggedIn:o}=l.exports.useContext(b);return(a,r=!0)=>{const s=r?encodeURI(a):a;if(e("check down link")!=="true")return s;const c=a.split("/").pop(),d=localStorage.getItem("admin-token");if(o){const u=ge(`alist-${d}-${c}`);return s+(r?encodeURI(`?sign=${u}`):`?sign=${u}`)}if(!n)return s;const i=ge(`alist-${n}-${c}`);return s+(r?encodeURI(`?pw=${i}`):`?pw=${i}`)}},he=(e=!1,n=!0)=>{const o=et(e),a=nt(),{files:r}=l.exports.useContext(b);return(s=void 0)=>{s||(s=r[0]);let c=o;return c.endsWith(s.name)||(c=`${c}/${s.name}`),a(c,n)}};function ot(e){return{all:e=e||new Map,on:function(n,o){var a=e.get(n);a?a.push(o):e.set(n,[o])},off:function(n,o){var a=e.get(n);a&&(o?a.splice(a.indexOf(o)>>>0,1):e.set(n,[]))},emit:function(n,o){var a=e.get(n);a&&a.slice().map(function(r){r(o)}),(a=e.get("*"))&&a.slice().map(function(r){r(n,o)})}}}const G=ot();function at(e){if(!e)return"-";const n=1024;return e<n?e+"B":e<Math.pow(n,2)?(e/n).toFixed(2)+"K":e<Math.pow(n,3)?(e/Math.pow(n,2)).toFixed(2)+"M":e<Math.pow(n,4)?(e/Math.pow(n,3)).toFixed(2)+"G":(e/Math.pow(n,4)).toFixed(2)+"T"}const St=(...e)=>e.join("/").replace(/\/{2,}/g,"/");let xe=new Date().valueOf(),Ee=0;const rt=l.exports.forwardRef((e,n)=>{l.exports.useImperativeHandle(n,()=>({upload:()=>{c(0),document.querySelector("#upload-input").click()}}));const{password:o}=l.exports.useContext(b),{pathname:a}=M(),r=N(),[s,c]=l.exports.useState(50),{t:d}=S(),{isOpen:i,onOpen:u,onClose:x}=oe(),v=L("gray.100","gray.600"),[C,E]=l.exports.useState("Uploading");return t.createElement(y,null,t.createElement(ae,{display:"none",type:"file",multiple:!0,id:"upload-input",onChange:p=>{const g=p.target.files,_=g[0];if(!g||!_)return;u();const w=new FormData;for(let m=0;m<g.length;m++)w.append("files",g[m],g[m].name);w.append("path",a),w.append("password",o),de.post("upload",w,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:m=>{if(m.lengthComputable){const k=m.loaded/m.total*100|0;console.log("complete",k),c(k);const I=new Date().valueOf(),$=(I-xe)/1e3;if($>1){const P=(m.loaded-Ee)/$,T=(m.total-m.loaded)/P;E(`${at(P)}/s  (${d("about remaining")} ${Math.round(T)}${d("s")})`),xe=I,Ee=m.loaded}k===100&&E("Back-end processing")}}}).then(m=>{x();const k=document.querySelector("#upload-input");k.value="";const I=m.data;r({title:d(I.message),status:I.code===200?"success":"error",duration:3e3,isClosable:!0}),G.emit("refresh")})}}),t.createElement(y,{zIndex:99,w:{base:"80vw",md:"40vw"},position:"fixed",bottom:"20px",right:"20px",bgColor:v,rounded:"lg",p:4,display:i?"block":"none"},t.createElement(V,{mb:2,fontSize:20},d(C),"..."),t.createElement(Se,{hasStripe:!0,isAnimated:!0,rounded:"lg",value:s})))}),st=()=>{const{t:e}=S(),n=he(),o=N(),{show:a,setShow:r,type:s,getSetting:c,files:d,multiSelect:i,selectFiles:u,meta:x,loggedIn:v}=l.exports.useContext(b),C=c("logo"),E=L(C.split(",").shift(),C.split(",").pop());M();const p=l.exports.useRef(null);return t.createElement(ve,{className:"header",px:"2",py:"2",justify:"space-between",w:"full"},t.createElement(B,{to:"/",className:"logo"},E.includes("http")?t.createElement(Ie,{fallback:t.createElement(O,{color:c("icon color")||"#1890ff"}),rounded:"lg",h:"44px",w:"auto",src:E}):t.createElement(V,null,E)),t.createElement(re,{className:"buttons",spacing:"2"},s==="file"&&t.createElement(U,{shouldWrapChildren:!0,hasArrow:!0,placement:"bottom",label:e("Download")},t.createElement(j,{cursor:"pointer",boxSize:6,as:De,onClick:()=>{if(s==="file"){let g=n();window.open(g,"_blank");return}}})),s==="folder"&&!c("no upload").split(",").includes(x.driver)&&(x.upload||v)&&t.createElement(y,null,t.createElement(U,{shouldWrapChildren:!0,hasArrow:!0,placement:"bottom",label:e("Upload file")},t.createElement(j,{cursor:"pointer",boxSize:6,as:Ne,onClick:()=>{p.current.upload()}})),t.createElement(rt,{ref:p})),s!=="error"&&t.createElement(U,{shouldWrapChildren:!0,hasArrow:!0,placement:"bottom",label:e("Copy direct link")},t.createElement(j,{cursor:"pointer",boxSize:6,as:Ze,onClick:()=>{let g="";if(s==="file")g=n();else{let _=d;i&&(_=u),g=_.filter(w=>w.type!==1).map(w=>n(w)).join(`
`)}Xe(g),o({title:e("Copied"),status:"success",duration:3e3,isClosable:!0})}})),t.createElement(U,{shouldWrapChildren:!0,hasArrow:!0,placement:"bottom",label:e("switch to layout view",{layout:e(a==="list"?"grid":"list")})},t.createElement(j,{boxSize:6,cursor:"pointer",onClick:()=>{r(a==="list"?"grid":"list"),localStorage.setItem("show",a==="list"?"grid":"list")},as:a==="list"?Ve:We}))))},lt=()=>{const{t:e}=S(),{getSetting:n}=l.exports.useContext(b);return t.createElement(H,{py:"4",className:"footer"},t.createElement(se,null,t.createElement(re,{spacing:"2",className:"line0"},t.createElement(le,{isExternal:!0,href:"https://github.com/Xhofe/alist"},e("Powered by {{project}}",{project:"Alist"})),t.createElement("span",null,"|"),t.createElement(B,{to:"/@manage"},e("Manage"))),n("site beian")&&t.createElement(le,{className:"line1",isExternal:!0,href:"https://beian.miit.gov.cn/"},n("site beian"))))},ct=()=>{const e=M(),{t:n}=S();return t.createElement(Fe,{spacing:"1",className:"nav",w:"full",px:"2"},t.createElement(ce,null,t.createElement(ie,{_hover:{textDecoration:"none",bg:"rgba(132,133,141,0.18)"},p:"1",rounded:"lg",as:B,to:"/"},Ke("home emoji"),n("Home"))),e.pathname.slice(1).split("/").map((o,a)=>{const r=a===e.pathname.split("/").length-2,s=e.pathname.split("/").slice(0,a+2).join("/");return t.createElement(ce,{key:s,isCurrentPage:r},t.createElement(ie,{isCurrentPage:r,wordBreak:"break-word",as:r?void 0:B,to:encodeURI(s),_hover:{textDecoration:"none",bg:"rgba(132,133,141,0.18)"},p:"1",rounded:"lg"},o))}))},it=({msg:e})=>{const{t:n}=S();return t.createElement(y,{className:"error",textAlign:"center",py:10,px:6},t.createElement(V,{display:"inline-block",size:"xl"},n("ERROR")),t.createElement(Me,{fontSize:"18px",my:3},n(e)),t.createElement(B,{to:"/"},t.createElement(W,{variant:"solid"},n("Back Home"))))},ut=5,dt=[],we=({file:e,readme:n})=>{L("light","dark");const[o,a]=t.useState(""),[r,s]=t.useState(""),{getSetting:c}=l.exports.useContext(b);let d=he(!0)(e);S();const i=e.name.endsWith(".html"),[u,x]=t.useState(!1),v=()=>{n&&e.type===-1&&(d=e.url),ue.get(d,{responseType:"blob"}).then(C=>ne(void 0,null,function*(){const E=C.data;let p=yield E.text();p.includes("\uFFFD")&&(p=new TextDecoder("gbk").decode(yield E.arrayBuffer())),i&&s(p),e.name.endsWith(".md")?a(p):a("```"+e.name.split(".").pop()+`
`+p+"\n```")}))};return l.exports.useEffect(()=>(v(),()=>{a("")}),[]),o?t.createElement(y,{w:"full"},i&&t.createElement(Re,{display:"flex",alignItems:"center",m:"1"},t.createElement(Pe,{htmlFor:"render",mb:"0"},"Render?"),t.createElement(Te,{id:"render",isChecked:u,onChange:()=>{x(!u)}})),u?t.createElement("iframe",{srcDoc:r,style:{width:"100%",borderRadius:"0.75rem",boxShadow:"#00000031 0px 1px 10px 5px",minHeight:"70vh"}}):t.createElement(y,{className:"markdown-body"},t.createElement(Ge,null,o))):t.createElement(H,{w:"full"},t.createElement(O,{color:c("icon color"),size:"xl"}))};var vt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",type:ut,exts:dt,default:we});const pt=l.exports.lazy(()=>me(()=>import(""+(window.__dynamicImportHandler__||function(e){return e})("./index.551b2cbd.js")+""),(window.__dynamicImportPreload__ || function(importer) { return importer; })(["assets/index.551b2cbd.js","assets/index.e3c95b11.css","assets/vendor.e93814c3.js","assets/index.7184e46e.js","assets/index.0d01f00c.css","assets/index.6f9fd387.js","assets/clsx.m.97c56b6d.js","assets/index.esm.e4ee276a.js","assets/copy-clip.08e8f9de.js"]))),mt=l.exports.lazy(()=>me(()=>import(""+(window.__dynamicImportHandler__||function(e){return e})("./file.d35cbb75.js")+""),(window.__dynamicImportPreload__ || function(importer) { return importer; })(["assets/file.d35cbb75.js","assets/file.1f390765.css","assets/vendor.e93814c3.js","assets/clsx.m.97c56b6d.js","assets/index.7184e46e.js","assets/index.0d01f00c.css","assets/index.6f9fd387.js","assets/index.esm.e4ee276a.js","assets/useTitle.b2d04281.js","assets/copy-clip.08e8f9de.js"]))),ft=()=>{const e=L("white","gray.700");S();const{getSetting:n,setPassword:o,password:a,settingLoaded:r,type:s,msg:c,files:d}=l.exports.useContext(b),i=l.exports.useMemo(()=>{if(s==="file")return;const u=d.find(x=>x.name.toLowerCase()==="readme.md");return u===void 0&&location.pathname==="/"&&n("home readme url")?{name:"README.md",size:0,type:-1,driver:"local",updated_at:"",thumbnail:"",url:n("home readme url")}:u},[d,s,r]);return t.createElement(H,{className:"index-box",w:"full"},t.createElement(qe,{list:!0}),t.createElement(se,{className:"root-box",w:{base:"95%",lg:"980px"}},t.createElement(st,null),t.createElement(ct,null),t.createElement(y,{className:"main-box",rounded:"xl",shadow:"lg",bgColor:e,w:"full"},s==="loading"?t.createElement(H,{w:"full",py:"4"},t.createElement(O,{color:n("icon color")||"#1890ff",size:"xl"})):t.createElement(y,{className:"content-box",w:"full",p:"2"},t.createElement(l.exports.Suspense,{fallback:t.createElement(H,{h:"full"},t.createElement(O,{color:n("icon color")||"#1890ff",size:"xl"}))},s==="folder"||s==="nexting"?t.createElement(pt,null):s==="file"?t.createElement(mt,null):t.createElement(it,{msg:c})))),s!=="loading"&&i&&t.createElement(y,{className:"readme-box",rounded:"xl",shadow:"lg",bgColor:e,w:"full",p:"4"},t.createElement(we,{file:i,readme:!0})),t.createElement(lt,null)))};const gt=(e,n)=>{const o=l.exports.useRef(!1);l.exports.useEffect(()=>{o.current?e():o.current=!0},n)},ht=e=>{const[n,o]=l.exports.useState({current:!1}),a=l.exports.useCallback(()=>{o({current:!0})},[n]);return l.exports.useEffect(()=>{n.current===!0&&o({current:!1})},[n]),l.exports.useEffect(()=>{n.current&&e()}),a};let q=!1,D=!1;const xt=e=>{const{type:n,setType:o,setSelectFiles:a,setFiles:r,setLastFiles:s,files:c,setMsg:d,sort:i,password:u,setPassword:x,setMeta:v,getSetting:C,setPage:E,page:p,settingLoaded:g}=l.exports.useContext(b),{t:_}=S(),w=Be(),m=M(),k=N(),{path:I,cancelPath:$}=Ye(),R=ht(()=>{if(!g)return;$(),console.log("refresh"),console.log(p);const h=C("load type");n==="folder"&&s(c),p.page_num===1||h==="all"||h==="pagination"?(o("loading"),a([]),r([])):o("nexting"),I().then(F=>{const f=F.data;d(f.message),f.code===200?(f.data.type==="file"?r(f.data.files):p.page_num===1||h==="all"||h==="pagination"?r(P(f.data.files)):r([...c,...f.data.files]),v(f.data.meta),o(f.data.type)):(f.code===401&&D&&(k({title:_(f.message),status:"error",duration:3e3,isClosable:!0}),D=!1),f.code===1001&&(k({title:_(f.message),status:"warning",duration:3e3,isClosable:!0}),w.push("/@manage")),f.code===401?o("unauthorized"):o("error"))})}),P=h=>{const{orderBy:F,reverse:f}=i;return F?h.sort((Q,Y)=>Q[F]<Y[F]?f?1:-1:Q[F]>Y[F]?f?-1:1:0):h},J=()=>{if(q){q=!1;return}R()},T=()=>{p.page_num!==1&&(q=!0,E({page_num:1,page_size:p.page_size})),R()};l.exports.useEffect(()=>{const h=P(c);r([...h])},[i]),l.exports.useEffect(()=>(T(),G.on("refresh",T),()=>{G.off("refresh",T)}),[m.pathname]),gt(()=>{J()},[p]);const{isOpen:_e,onClose:z,onOpen:be}=oe(),X=t.useRef();return l.exports.useEffect(()=>{n==="unauthorized"&&be()},[n]),t.createElement(t.Fragment,null,t.createElement(t.Fragment,te({},e)),t.createElement(He,{initialFocusRef:X,isOpen:_e,onClose:()=>{z()}},t.createElement(Ae,null),t.createElement($e,null,t.createElement(ze,null,_("Input password")),t.createElement(Le,null),t.createElement(Oe,{pb:6},t.createElement(ae,{type:"password",ref:X,value:u,onChange:h=>{x(h.target.value)},onKeyUp:h=>{h.key==="Enter"&&(localStorage.setItem("password",u),D=!0,R(),z())}})),t.createElement(Ue,null,t.createElement(W,{onClick:()=>{localStorage.setItem("password",u),D=!0,R(),z()},mr:3},_("Ok")),t.createElement(W,{colorScheme:"gray",onClick:()=>{w.goBack(),z()}},_("Cancel"))))))},Et=()=>t.createElement(Je,null,t.createElement(xt,null,t.createElement(ft,null)));var It=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Et});export{kt as I,vt as _,nt as a,Ye as b,G as c,he as d,at as g,It as i,St as p,et as u};
