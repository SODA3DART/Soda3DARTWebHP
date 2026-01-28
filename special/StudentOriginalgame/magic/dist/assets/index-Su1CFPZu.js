(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function zv(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var $f={exports:{}},bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function Ly(){if(Yg)return bo;Yg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return bo.Fragment=t,bo.jsx=i,bo.jsxs=i,bo}var jg;function Uy(){return jg||(jg=1,$f.exports=Ly()),$f.exports}var Dt=Uy(),th={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zg;function Ny(){if(Zg)return re;Zg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function M(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,_={};function x(N,et,Mt){this.props=N,this.context=et,this.refs=_,this.updater=Mt||T}x.prototype.isReactComponent={},x.prototype.setState=function(N,et){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,et,"setState")},x.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function U(){}U.prototype=x.prototype;function C(N,et,Mt){this.props=N,this.context=et,this.refs=_,this.updater=Mt||T}var L=C.prototype=new U;L.constructor=C,E(L,x.prototype),L.isPureReactComponent=!0;var j=Array.isArray;function B(){}var O={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function D(N,et,Mt){var X=Mt.ref;return{$$typeof:r,type:N,key:et,ref:X!==void 0?X:null,props:Mt}}function b(N,et){return D(N.type,et,N.props)}function F(N){return typeof N=="object"&&N!==null&&N.$$typeof===r}function J(N){var et={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Mt){return et[Mt]})}var H=/\/+/g;function st(N,et){return typeof N=="object"&&N!==null&&N.key!=null?J(""+N.key):et.toString(36)}function ot(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(B,B):(N.status="pending",N.then(function(et){N.status==="pending"&&(N.status="fulfilled",N.value=et)},function(et){N.status==="pending"&&(N.status="rejected",N.reason=et)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,et,Mt,X,ut){var Tt=typeof N;(Tt==="undefined"||Tt==="boolean")&&(N=null);var yt=!1;if(N===null)yt=!0;else switch(Tt){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(N.$$typeof){case r:case t:yt=!0;break;case g:return yt=N._init,z(yt(N._payload),et,Mt,X,ut)}}if(yt)return ut=ut(N),yt=X===""?"."+st(N,0):X,j(ut)?(Mt="",yt!=null&&(Mt=yt.replace(H,"$&/")+"/"),z(ut,et,Mt,"",function(K){return K})):ut!=null&&(F(ut)&&(ut=b(ut,Mt+(ut.key==null||N&&N.key===ut.key?"":(""+ut.key).replace(H,"$&/")+"/")+yt)),et.push(ut)),1;yt=0;var Yt=X===""?".":X+":";if(j(N))for(var Xt=0;Xt<N.length;Xt++)X=N[Xt],Tt=Yt+st(X,Xt),yt+=z(X,et,Mt,Tt,ut);else if(Xt=M(N),typeof Xt=="function")for(N=Xt.call(N),Xt=0;!(X=N.next()).done;)X=X.value,Tt=Yt+st(X,Xt++),yt+=z(X,et,Mt,Tt,ut);else if(Tt==="object"){if(typeof N.then=="function")return z(ot(N),et,Mt,X,ut);throw et=String(N),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return yt}function W(N,et,Mt){if(N==null)return N;var X=[],ut=0;return z(N,X,"","",function(Tt){return et.call(Mt,Tt,ut++)}),X}function k(N){if(N._status===-1){var et=N._result;et=et(),et.then(function(Mt){(N._status===0||N._status===-1)&&(N._status=1,N._result=Mt)},function(Mt){(N._status===0||N._status===-1)&&(N._status=2,N._result=Mt)}),N._status===-1&&(N._status=0,N._result=et)}if(N._status===1)return N._result.default;throw N._result}var dt=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},pt={map:W,forEach:function(N,et,Mt){W(N,function(){et.apply(this,arguments)},Mt)},count:function(N){var et=0;return W(N,function(){et++}),et},toArray:function(N){return W(N,function(et){return et})||[]},only:function(N){if(!F(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return re.Activity=v,re.Children=pt,re.Component=x,re.Fragment=i,re.Profiler=l,re.PureComponent=C,re.StrictMode=s,re.Suspense=p,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,re.__COMPILER_RUNTIME={__proto__:null,c:function(N){return O.H.useMemoCache(N)}},re.cache=function(N){return function(){return N.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(N,et,Mt){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var X=E({},N.props),ut=N.key;if(et!=null)for(Tt in et.key!==void 0&&(ut=""+et.key),et)!Z.call(et,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&et.ref===void 0||(X[Tt]=et[Tt]);var Tt=arguments.length-2;if(Tt===1)X.children=Mt;else if(1<Tt){for(var yt=Array(Tt),Yt=0;Yt<Tt;Yt++)yt[Yt]=arguments[Yt+2];X.children=yt}return D(N.type,ut,X)},re.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},re.createElement=function(N,et,Mt){var X,ut={},Tt=null;if(et!=null)for(X in et.key!==void 0&&(Tt=""+et.key),et)Z.call(et,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(ut[X]=et[X]);var yt=arguments.length-2;if(yt===1)ut.children=Mt;else if(1<yt){for(var Yt=Array(yt),Xt=0;Xt<yt;Xt++)Yt[Xt]=arguments[Xt+2];ut.children=Yt}if(N&&N.defaultProps)for(X in yt=N.defaultProps,yt)ut[X]===void 0&&(ut[X]=yt[X]);return D(N,Tt,ut)},re.createRef=function(){return{current:null}},re.forwardRef=function(N){return{$$typeof:d,render:N}},re.isValidElement=F,re.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:k}},re.memo=function(N,et){return{$$typeof:m,type:N,compare:et===void 0?null:et}},re.startTransition=function(N){var et=O.T,Mt={};O.T=Mt;try{var X=N(),ut=O.S;ut!==null&&ut(Mt,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(B,dt)}catch(Tt){dt(Tt)}finally{et!==null&&Mt.types!==null&&(et.types=Mt.types),O.T=et}},re.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},re.use=function(N){return O.H.use(N)},re.useActionState=function(N,et,Mt){return O.H.useActionState(N,et,Mt)},re.useCallback=function(N,et){return O.H.useCallback(N,et)},re.useContext=function(N){return O.H.useContext(N)},re.useDebugValue=function(){},re.useDeferredValue=function(N,et){return O.H.useDeferredValue(N,et)},re.useEffect=function(N,et){return O.H.useEffect(N,et)},re.useEffectEvent=function(N){return O.H.useEffectEvent(N)},re.useId=function(){return O.H.useId()},re.useImperativeHandle=function(N,et,Mt){return O.H.useImperativeHandle(N,et,Mt)},re.useInsertionEffect=function(N,et){return O.H.useInsertionEffect(N,et)},re.useLayoutEffect=function(N,et){return O.H.useLayoutEffect(N,et)},re.useMemo=function(N,et){return O.H.useMemo(N,et)},re.useOptimistic=function(N,et){return O.H.useOptimistic(N,et)},re.useReducer=function(N,et,Mt){return O.H.useReducer(N,et,Mt)},re.useRef=function(N){return O.H.useRef(N)},re.useState=function(N){return O.H.useState(N)},re.useSyncExternalStore=function(N,et,Mt){return O.H.useSyncExternalStore(N,et,Mt)},re.useTransition=function(){return O.H.useTransition()},re.version="19.2.4",re}var Kg;function td(){return Kg||(Kg=1,th.exports=Ny()),th.exports}var Oe=td();const Oy=zv(Oe);var eh={exports:{}},Ao={},nh={exports:{}},ih={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qg;function Py(){return Qg||(Qg=1,(function(r){function t(z,W){var k=z.length;z.push(W);t:for(;0<k;){var dt=k-1>>>1,pt=z[dt];if(0<l(pt,W))z[dt]=W,z[k]=pt,k=dt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var W=z[0],k=z.pop();if(k!==W){z[0]=k;t:for(var dt=0,pt=z.length,N=pt>>>1;dt<N;){var et=2*(dt+1)-1,Mt=z[et],X=et+1,ut=z[X];if(0>l(Mt,k))X<pt&&0>l(ut,Mt)?(z[dt]=ut,z[X]=k,dt=X):(z[dt]=Mt,z[et]=k,dt=et);else if(X<pt&&0>l(ut,k))z[dt]=ut,z[X]=k,dt=X;else break t}}return W}function l(z,W){var k=z.sortIndex-W.sortIndex;return k!==0?k:z.id-W.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,v=null,y=3,M=!1,T=!1,E=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function L(z){for(var W=i(m);W!==null;){if(W.callback===null)s(m);else if(W.startTime<=z)s(m),W.sortIndex=W.expirationTime,t(p,W);else break;W=i(m)}}function j(z){if(E=!1,L(z),!T)if(i(p)!==null)T=!0,B||(B=!0,J());else{var W=i(m);W!==null&&ot(j,W.startTime-z)}}var B=!1,O=-1,Z=5,D=-1;function b(){return _?!0:!(r.unstable_now()-D<Z)}function F(){if(_=!1,B){var z=r.unstable_now();D=z;var W=!0;try{t:{T=!1,E&&(E=!1,U(O),O=-1),M=!0;var k=y;try{e:{for(L(z),v=i(p);v!==null&&!(v.expirationTime>z&&b());){var dt=v.callback;if(typeof dt=="function"){v.callback=null,y=v.priorityLevel;var pt=dt(v.expirationTime<=z);if(z=r.unstable_now(),typeof pt=="function"){v.callback=pt,L(z),W=!0;break e}v===i(p)&&s(p),L(z)}else s(p);v=i(p)}if(v!==null)W=!0;else{var N=i(m);N!==null&&ot(j,N.startTime-z),W=!1}}break t}finally{v=null,y=k,M=!1}W=void 0}}finally{W?J():B=!1}}}var J;if(typeof C=="function")J=function(){C(F)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,st=H.port2;H.port1.onmessage=F,J=function(){st.postMessage(null)}}else J=function(){x(F,0)};function ot(z,W){O=x(function(){z(r.unstable_now())},W)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(z){switch(y){case 1:case 2:case 3:var W=3;break;default:W=y}var k=y;y=W;try{return z()}finally{y=k}},r.unstable_requestPaint=function(){_=!0},r.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var k=y;y=z;try{return W()}finally{y=k}},r.unstable_scheduleCallback=function(z,W,k){var dt=r.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?dt+k:dt):k=dt,z){case 1:var pt=-1;break;case 2:pt=250;break;case 5:pt=1073741823;break;case 4:pt=1e4;break;default:pt=5e3}return pt=k+pt,z={id:g++,callback:W,priorityLevel:z,startTime:k,expirationTime:pt,sortIndex:-1},k>dt?(z.sortIndex=k,t(m,z),i(p)===null&&z===i(m)&&(E?(U(O),O=-1):E=!0,ot(j,k-dt))):(z.sortIndex=pt,t(p,z),T||M||(T=!0,B||(B=!0,J()))),z},r.unstable_shouldYield=b,r.unstable_wrapCallback=function(z){var W=y;return function(){var k=y;y=W;try{return z.apply(this,arguments)}finally{y=k}}}})(ih)),ih}var Jg;function zy(){return Jg||(Jg=1,nh.exports=Py()),nh.exports}var ah={exports:{}},Sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $g;function By(){if($g)return Sn;$g=1;var r=td();function t(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Sn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return c(p,m,null,g)},Sn.flushSync=function(p){var m=f.T,g=s.p;try{if(f.T=null,s.p=2,p)return p()}finally{f.T=m,s.p=g,s.d.f()}},Sn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},Sn.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},Sn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,M=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:M}):g==="script"&&s.d.X(p,{crossOrigin:v,integrity:y,fetchPriority:M,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Sn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},Sn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Sn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},Sn.requestFormReset=function(p){s.d.r(p)},Sn.unstable_batchedUpdates=function(p,m){return p(m)},Sn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Sn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Sn.version="19.2.4",Sn}var t0;function Iy(){if(t0)return ah.exports;t0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ah.exports=By(),ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var e0;function Fy(){if(e0)return Ao;e0=1;var r=zy(),t=td(),i=Iy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===o)return p(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,A=u.child;A;){if(A===a){S=!0,a=u,o=h;break}if(A===o){S=!0,o=u,a=h;break}A=A.sibling}if(!S){for(A=h.child;A;){if(A===a){S=!0,a=h,o=u;break}if(A===o){S=!0,o=h,a=u;break}A=A.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),C=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),b=Symbol.for("react.memo_cache_sentinel"),F=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=F&&e[F]||e["@@iterator"],typeof e=="function"?e:null)}var H=Symbol.for("react.client.reference");function st(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===H?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case x:return"Profiler";case _:return"StrictMode";case j:return"Suspense";case B:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case C:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case L:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case O:return n=e.displayName||null,n!==null?n:st(e.type)||"Memo";case Z:n=e._payload,e=e._init;try{return st(e(n))}catch{}}return null}var ot=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},dt=[],pt=-1;function N(e){return{current:e}}function et(e){0>pt||(e.current=dt[pt],dt[pt]=null,pt--)}function Mt(e,n){pt++,dt[pt]=e.current,e.current=n}var X=N(null),ut=N(null),Tt=N(null),yt=N(null);function Yt(e,n){switch(Mt(Tt,n),Mt(ut,e),Mt(X,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?gg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=gg(n),e=vg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}et(X),Mt(X,e)}function Xt(){et(X),et(ut),et(Tt)}function K(e){e.memoizedState!==null&&Mt(yt,e);var n=X.current,a=vg(n,e.type);n!==a&&(Mt(ut,e),Mt(X,a))}function ue(e){ut.current===e&&(et(X),et(ut)),yt.current===e&&(et(yt),So._currentValue=k)}var ht,Rt;function gt(e){if(ht===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ht=n&&n[1]||"",Rt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ht+e+Rt}var Ct=!1;function bt(e,n){if(!e||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(lt){var nt=lt}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(lt){nt=lt}e.call(xt.prototype)}}else{try{throw Error()}catch(lt){nt=lt}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(lt){if(lt&&nt&&typeof lt.stack=="string")return[lt.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],A=h[1];if(S&&A){var I=S.split(`
`),tt=A.split(`
`);for(u=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===I.length||u===tt.length)for(o=I.length-1,u=tt.length-1;1<=o&&0<=u&&I[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(I[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||I[o]!==tt[u]){var ft=`
`+I[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?gt(a):""}function Ft(e,n){switch(e.tag){case 26:case 27:case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return e.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return bt(e.type,!1);case 11:return bt(e.type.render,!1);case 1:return bt(e.type,!0);case 31:return gt("Activity");default:return""}}function Zt(e){try{var n="",a=null;do n+=Ft(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var P=Object.prototype.hasOwnProperty,R=r.unstable_scheduleCallback,it=r.unstable_cancelCallback,St=r.unstable_shouldYield,At=r.unstable_requestPaint,_t=r.unstable_now,jt=r.unstable_getCurrentPriorityLevel,Ot=r.unstable_ImmediatePriority,Ut=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,wt=r.unstable_LowPriority,Wt=r.unstable_IdlePriority,pe=r.log,te=r.unstable_setDisableYieldValue,It=null,Jt=null;function se(e){if(typeof pe=="function"&&te(e),Jt&&typeof Jt.setStrictMode=="function")try{Jt.setStrictMode(It,e)}catch{}}var ye=Math.clz32?Math.clz32:Et,le=Math.log,q=Math.LN2;function Et(e){return e>>>=0,e===0?32:31-(le(e)/q|0)|0}var vt=256,Nt=262144,Bt=4194304;function fe(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Re(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=fe(o):(S&=A,S!==0?u=fe(S):a||(a=A&~e,a!==0&&(u=fe(a))))):(A=o&~h,A!==0?u=fe(A):S!==0?u=fe(S):a||(a=o&~e,a!==0&&(u=fe(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function De(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function cn(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var e=Bt;return Bt<<=1,(Bt&62914560)===0&&(Bt=4194304),e}function Un(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ye(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ko(e,n,a,o,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,I=e.expirationTimes,tt=e.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-ye(a),xt=1<<ft;A[ft]=0,I[ft]=-1;var nt=tt[ft];if(nt!==null)for(tt[ft]=null,ft=0;ft<nt.length;ft++){var lt=nt[ft];lt!==null&&(lt.lane&=-536870913)}a&=~xt}o!==0&&Nr(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function Nr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-ye(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Or(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-ye(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function ka(e,n){var a=n&-n;return a=(a&42)!==0?1:Ms(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ms(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function na(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pr(){var e=W.p;return e!==0?e:(e=window.event,e===void 0?32:Hg(e.type))}function zr(e,n){var a=W.p;try{return W.p=e,n()}finally{W.p=a}}var _i=Math.random().toString(36).slice(2),nn="__reactFiber$"+_i,_n="__reactProps$"+_i,w="__reactContainer$"+_i,Q="__reactEvents$"+_i,ct="__reactListeners$"+_i,rt="__reactHandles$"+_i,at="__reactResources$"+_i,Lt="__reactMarker$"+_i;function Vt(e){delete e[nn],delete e[_n],delete e[Q],delete e[ct],delete e[rt]}function Gt(e){var n=e[nn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[w]||a[nn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Tg(e);e!==null;){if(a=e[nn])return a;e=Tg(e)}return n}e=a,a=e.parentNode}return null}function Kt(e){if(e=e[nn]||e[w]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ee(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ne(e){var n=e[at];return n||(n=e[at]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function qt(e){e[Lt]=!0}var Ve=new Set,an={};function je(e,n){xn(e,n),xn(e+"Capture",n)}function xn(e,n){for(an[e]=n,e=0;e<n.length;e++)Ve.add(n[e])}var Ee=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ae={},ia={};function Be(e){return P.call(ia,e)?!0:P.call(ae,e)?!1:Ee.test(e)?ia[e]=!0:(ae[e]=!0,!1)}function Jn(e,n,a){if(Be(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Xa(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function An(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function yn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function xi(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Wa(e){if(!e._valueTracker){var n=sn(e)?"checked":"value";e._valueTracker=xi(e,n,""+e[n])}}function Rn(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=sn(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function aa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Wc=/[\n"\\]/g;function Cn(e){return e.replace(Wc,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function qc(e,n,a,o,u,h,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+yn(n)):e.value!==""+yn(n)&&(e.value=""+yn(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Yc(e,S,yn(n)):a!=null?Yc(e,S,yn(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+yn(A):e.removeAttribute("name")}function ud(e,n,a,o,u,h,S,A){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Wa(e);return}a=a!=null?""+yn(a):"",n=n!=null?""+yn(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Wa(e)}function Yc(e,n,a){n==="number"&&aa(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Es(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+yn(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function fd(e,n,a){if(n!=null&&(n=""+yn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+yn(a):""}function hd(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ot(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=yn(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Wa(e)}function Ts(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var A_=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dd(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||A_.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function pd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&dd(e,u,o)}else for(var h in n)n.hasOwnProperty(h)&&dd(e,h,n[h])}function jc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var R_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),C_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(e){return C_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Li(){}var Zc=null;function Kc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var bs=null,As=null;function md(e){var n=Kt(e);if(n&&(e=n.stateNode)){var a=e[_n]||null;t:switch(e=n.stateNode,n.type){case"input":if(qc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Cn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[_n]||null;if(!u)throw Error(s(90));qc(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Rn(o)}break t;case"textarea":fd(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Es(e,!!a.multiple,n,!1)}}}var Qc=!1;function gd(e,n,a){if(Qc)return e(n,a);Qc=!0;try{var o=e(n);return o}finally{if(Qc=!1,(bs!==null||As!==null)&&(Ll(),bs&&(n=bs,e=As,As=bs=null,md(n),e)))for(n=0;n<e.length;n++)md(e[n])}}function Br(e,n){var a=e.stateNode;if(a===null)return null;var o=a[_n]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ui=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=!1;if(Ui)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Jc=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Jc=!1}var sa=null,$c=null,Wo=null;function vd(){if(Wo)return Wo;var e,n=$c,a=n.length,o,u="value"in sa?sa.value:sa.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return Wo=u.slice(e,1<o?1-o:void 0)}function qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Yo(){return!0}function _d(){return!1}function Nn(e){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(h):h[A]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?Yo:_d,this.isPropagationStopped=_d,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=Nn(qa),Fr=v({},qa,{view:0,detail:0}),w_=Nn(Fr),tu,eu,Hr,Zo=v({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(tu=e.screenX-Hr.screenX,eu=e.screenY-Hr.screenY):eu=tu=0,Hr=e),tu)},movementY:function(e){return"movementY"in e?e.movementY:eu}}),xd=Nn(Zo),D_=v({},Zo,{dataTransfer:0}),L_=Nn(D_),U_=v({},Fr,{relatedTarget:0}),nu=Nn(U_),N_=v({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),O_=Nn(N_),P_=v({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),z_=Nn(P_),B_=v({},qa,{data:0}),yd=Nn(B_),I_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},F_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},H_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=H_[e])?!!n[e]:!1}function iu(){return G_}var V_=v({},Fr,{key:function(e){if(e.key){var n=I_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?F_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),k_=Nn(V_),X_=v({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Sd=Nn(X_),W_=v({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),q_=Nn(W_),Y_=v({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),j_=Nn(Y_),Z_=v({},Zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),K_=Nn(Z_),Q_=v({},qa,{newState:0,oldState:0}),J_=Nn(Q_),$_=[9,13,27,32],au=Ui&&"CompositionEvent"in window,Gr=null;Ui&&"documentMode"in document&&(Gr=document.documentMode);var tx=Ui&&"TextEvent"in window&&!Gr,Md=Ui&&(!au||Gr&&8<Gr&&11>=Gr),Ed=" ",Td=!1;function bd(e,n){switch(e){case"keyup":return $_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Rs=!1;function ex(e,n){switch(e){case"compositionend":return Ad(n);case"keypress":return n.which!==32?null:(Td=!0,Ed);case"textInput":return e=n.data,e===Ed&&Td?null:e;default:return null}}function nx(e,n){if(Rs)return e==="compositionend"||!au&&bd(e,n)?(e=vd(),Wo=$c=sa=null,Rs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Md&&n.locale!=="ko"?null:n.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!ix[e.type]:n==="textarea"}function Cd(e,n,a,o){bs?As?As.push(o):As=[o]:bs=o,n=Il(n,"onChange"),0<n.length&&(a=new jo("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Vr=null,kr=null;function ax(e){ug(e,0)}function Ko(e){var n=ee(e);if(Rn(n))return e}function wd(e,n){if(e==="change")return n}var Dd=!1;if(Ui){var su;if(Ui){var ru="oninput"in document;if(!ru){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),ru=typeof Ld.oninput=="function"}su=ru}else su=!1;Dd=su&&(!document.documentMode||9<document.documentMode)}function Ud(){Vr&&(Vr.detachEvent("onpropertychange",Nd),kr=Vr=null)}function Nd(e){if(e.propertyName==="value"&&Ko(kr)){var n=[];Cd(n,kr,e,Kc(e)),gd(ax,n)}}function sx(e,n,a){e==="focusin"?(Ud(),Vr=n,kr=a,Vr.attachEvent("onpropertychange",Nd)):e==="focusout"&&Ud()}function rx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ko(kr)}function ox(e,n){if(e==="click")return Ko(n)}function lx(e,n){if(e==="input"||e==="change")return Ko(n)}function cx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Vn=typeof Object.is=="function"?Object.is:cx;function Xr(e,n){if(Vn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!P.call(n,u)||!Vn(e[u],n[u]))return!1}return!0}function Od(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pd(e,n){var a=Od(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Od(a)}}function zd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=aa(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=aa(e.document)}return n}function ou(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var ux=Ui&&"documentMode"in document&&11>=document.documentMode,Cs=null,lu=null,Wr=null,cu=!1;function Id(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cu||Cs==null||Cs!==aa(o)||(o=Cs,"selectionStart"in o&&ou(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Wr&&Xr(Wr,o)||(Wr=o,o=Il(lu,"onSelect"),0<o.length&&(n=new jo("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Cs)))}function Ya(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var ws={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionrun:Ya("Transition","TransitionRun"),transitionstart:Ya("Transition","TransitionStart"),transitioncancel:Ya("Transition","TransitionCancel"),transitionend:Ya("Transition","TransitionEnd")},uu={},Fd={};Ui&&(Fd=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function ja(e){if(uu[e])return uu[e];if(!ws[e])return e;var n=ws[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Fd)return uu[e]=n[a];return e}var Hd=ja("animationend"),Gd=ja("animationiteration"),Vd=ja("animationstart"),fx=ja("transitionrun"),hx=ja("transitionstart"),dx=ja("transitioncancel"),kd=ja("transitionend"),Xd=new Map,fu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fu.push("scrollEnd");function ci(e,n){Xd.set(e,n),je(n,[e])}var Qo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},$n=[],Ds=0,hu=0;function Jo(){for(var e=Ds,n=hu=Ds=0;n<e;){var a=$n[n];$n[n++]=null;var o=$n[n];$n[n++]=null;var u=$n[n];$n[n++]=null;var h=$n[n];if($n[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&Wd(a,u,h)}}function $o(e,n,a,o){$n[Ds++]=e,$n[Ds++]=n,$n[Ds++]=a,$n[Ds++]=o,hu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function du(e,n,a,o){return $o(e,n,a,o),tl(e)}function Za(e,n){return $o(e,null,null,n),tl(e)}function Wd(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-ye(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function tl(e){if(50<po)throw po=0,Ef=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ls={};function px(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,a,o){return new px(e,n,a,o)}function pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ni(e,n){var a=e.alternate;return a===null?(a=kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function qd(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function el(e,n,a,o,u,h){var S=0;if(o=e,typeof e=="function")pu(e)&&(S=1);else if(typeof e=="string")S=xy(e,a,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case D:return e=kn(31,a,n,u),e.elementType=D,e.lanes=h,e;case E:return Ka(a.children,u,h,n);case _:S=8,u|=24;break;case x:return e=kn(12,a,n,u|2),e.elementType=x,e.lanes=h,e;case j:return e=kn(13,a,n,u),e.elementType=j,e.lanes=h,e;case B:return e=kn(19,a,n,u),e.elementType=B,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case C:S=10;break t;case U:S=9;break t;case L:S=11;break t;case O:S=14;break t;case Z:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=kn(S,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Ka(e,n,a,o){return e=kn(7,e,o,n),e.lanes=a,e}function mu(e,n,a){return e=kn(6,e,null,n),e.lanes=a,e}function Yd(e){var n=kn(18,null,null,0);return n.stateNode=e,n}function gu(e,n,a){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var jd=new WeakMap;function ti(e,n){if(typeof e=="object"&&e!==null){var a=jd.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Zt(n)},jd.set(e,n),n)}return{value:e,source:n,stack:Zt(n)}}var Us=[],Ns=0,nl=null,qr=0,ei=[],ni=0,ra=null,yi=1,Si="";function Oi(e,n){Us[Ns++]=qr,Us[Ns++]=nl,nl=e,qr=n}function Zd(e,n,a){ei[ni++]=yi,ei[ni++]=Si,ei[ni++]=ra,ra=e;var o=yi;e=Si;var u=32-ye(o)-1;o&=~(1<<u),a+=1;var h=32-ye(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,yi=1<<32-ye(n)+u|a<<u|o,Si=h+e}else yi=1<<h|a<<u|o,Si=e}function vu(e){e.return!==null&&(Oi(e,1),Zd(e,1,0))}function _u(e){for(;e===nl;)nl=Us[--Ns],Us[Ns]=null,qr=Us[--Ns],Us[Ns]=null;for(;e===ra;)ra=ei[--ni],ei[ni]=null,Si=ei[--ni],ei[ni]=null,yi=ei[--ni],ei[ni]=null}function Kd(e,n){ei[ni++]=yi,ei[ni++]=Si,ei[ni++]=ra,yi=n.id,Si=n.overflow,ra=e}var dn=null,Ie=null,Se=!1,oa=null,ii=!1,xu=Error(s(519));function la(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yr(ti(n,e)),xu}function Qd(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[nn]=e,n[_n]=o,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)ge(go[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),ud(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),hd(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||pg(n.textContent,a)?(o.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),o.onScroll!=null&&ge("scroll",n),o.onScrollEnd!=null&&ge("scrollend",n),o.onClick!=null&&(n.onclick=Li),n=!0):n=!1,n||la(e,!0)}function Jd(e){for(dn=e.return;dn;)switch(dn.tag){case 5:case 31:case 13:ii=!1;return;case 27:case 3:ii=!0;return;default:dn=dn.return}}function Os(e){if(e!==dn)return!1;if(!Se)return Jd(e),Se=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||If(e.type,e.memoizedProps)),a=!a),a&&Ie&&la(e),Jd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ie=Eg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ie=Eg(e)}else n===27?(n=Ie,Ma(e.type)?(e=kf,kf=null,Ie=e):Ie=n):Ie=dn?si(e.stateNode.nextSibling):null;return!0}function Qa(){Ie=dn=null,Se=!1}function yu(){var e=oa;return e!==null&&(Bn===null?Bn=e:Bn.push.apply(Bn,e),oa=null),e}function Yr(e){oa===null?oa=[e]:oa.push(e)}var Su=N(null),Ja=null,Pi=null;function ca(e,n,a){Mt(Su,n._currentValue),n._currentValue=a}function zi(e){e._currentValue=Su.current,et(Su)}function Mu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Eu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var A=h;h=u;for(var I=0;I<n.length;I++)if(A.context===n[I]){h.lanes|=a,A=h.alternate,A!==null&&(A.lanes|=a),Mu(h.return,a,e),o||(S=null);break t}h=A.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),Mu(S,a,e),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Ps(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var A=u.type;Vn(u.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(u===yt.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(So):e=[So])}u=u.return}e!==null&&Eu(n,e,a,o),n.flags|=262144}function il(e){for(e=e.firstContext;e!==null;){if(!Vn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){Ja=e,Pi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pn(e){return $d(Ja,e)}function al(e,n){return Ja===null&&$a(e),$d(e,n)}function $d(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Pi===null){if(e===null)throw Error(s(308));Pi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Pi=Pi.next=n;return a}var mx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},gx=r.unstable_scheduleCallback,vx=r.unstable_NormalPriority,Qe={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Tu(){return{controller:new mx,data:new Map,refCount:0}}function jr(e){e.refCount--,e.refCount===0&&gx(vx,function(){e.controller.abort()})}var Zr=null,bu=0,zs=0,Bs=null;function _x(e,n){if(Zr===null){var a=Zr=[];bu=0,zs=wf(),Bs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return bu++,n.then(tp,tp),n}function tp(){if(--bu===0&&Zr!==null){Bs!==null&&(Bs.status="fulfilled");var e=Zr;Zr=null,zs=0,Bs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function xx(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var ep=z.S;z.S=function(e,n){Im=_t(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&_x(e,n),ep!==null&&ep(e,n)};var ts=N(null);function Au(){var e=ts.current;return e!==null?e:ze.pooledCache}function sl(e,n){n===null?Mt(ts,ts.current):Mt(ts,n.pool)}function np(){var e=Au();return e===null?null:{parent:Qe._currentValue,pool:e}}var Is=Error(s(460)),Ru=Error(s(474)),rl=Error(s(542)),ol={then:function(){}};function ip(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ap(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Li,Li),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rp(e),e;default:if(typeof n.status=="string")n.then(Li,Li);else{if(e=ze,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rp(e),e}throw ns=n,Is}}function es(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ns=a,Is):a}}var ns=null;function sp(){if(ns===null)throw Error(s(459));var e=ns;return ns=null,e}function rp(e){if(e===Is||e===rl)throw Error(s(483))}var Fs=null,Kr=0;function ll(e){var n=Kr;return Kr+=1,Fs===null&&(Fs=[]),ap(Fs,e,n)}function Qr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function cl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function op(e){function n(Y,G){if(e){var $=Y.deletions;$===null?(Y.deletions=[G],Y.flags|=16):$.push(G)}}function a(Y,G){if(!e)return null;for(;G!==null;)n(Y,G),G=G.sibling;return null}function o(Y){for(var G=new Map;Y!==null;)Y.key!==null?G.set(Y.key,Y):G.set(Y.index,Y),Y=Y.sibling;return G}function u(Y,G){return Y=Ni(Y,G),Y.index=0,Y.sibling=null,Y}function h(Y,G,$){return Y.index=$,e?($=Y.alternate,$!==null?($=$.index,$<G?(Y.flags|=67108866,G):$):(Y.flags|=67108866,G)):(Y.flags|=1048576,G)}function S(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function A(Y,G,$,mt){return G===null||G.tag!==6?(G=mu($,Y.mode,mt),G.return=Y,G):(G=u(G,$),G.return=Y,G)}function I(Y,G,$,mt){var Qt=$.type;return Qt===E?ft(Y,G,$.props.children,mt,$.key):G!==null&&(G.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===Z&&es(Qt)===G.type)?(G=u(G,$.props),Qr(G,$),G.return=Y,G):(G=el($.type,$.key,$.props,null,Y.mode,mt),Qr(G,$),G.return=Y,G)}function tt(Y,G,$,mt){return G===null||G.tag!==4||G.stateNode.containerInfo!==$.containerInfo||G.stateNode.implementation!==$.implementation?(G=gu($,Y.mode,mt),G.return=Y,G):(G=u(G,$.children||[]),G.return=Y,G)}function ft(Y,G,$,mt,Qt){return G===null||G.tag!==7?(G=Ka($,Y.mode,mt,Qt),G.return=Y,G):(G=u(G,$),G.return=Y,G)}function xt(Y,G,$){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=mu(""+G,Y.mode,$),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case M:return $=el(G.type,G.key,G.props,null,Y.mode,$),Qr($,G),$.return=Y,$;case T:return G=gu(G,Y.mode,$),G.return=Y,G;case Z:return G=es(G),xt(Y,G,$)}if(ot(G)||J(G))return G=Ka(G,Y.mode,$,null),G.return=Y,G;if(typeof G.then=="function")return xt(Y,ll(G),$);if(G.$$typeof===C)return xt(Y,al(Y,G),$);cl(Y,G)}return null}function nt(Y,G,$,mt){var Qt=G!==null?G.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Qt!==null?null:A(Y,G,""+$,mt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===Qt?I(Y,G,$,mt):null;case T:return $.key===Qt?tt(Y,G,$,mt):null;case Z:return $=es($),nt(Y,G,$,mt)}if(ot($)||J($))return Qt!==null?null:ft(Y,G,$,mt,null);if(typeof $.then=="function")return nt(Y,G,ll($),mt);if($.$$typeof===C)return nt(Y,G,al(Y,$),mt);cl(Y,$)}return null}function lt(Y,G,$,mt,Qt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return Y=Y.get($)||null,A(G,Y,""+mt,Qt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return Y=Y.get(mt.key===null?$:mt.key)||null,I(G,Y,mt,Qt);case T:return Y=Y.get(mt.key===null?$:mt.key)||null,tt(G,Y,mt,Qt);case Z:return mt=es(mt),lt(Y,G,$,mt,Qt)}if(ot(mt)||J(mt))return Y=Y.get($)||null,ft(G,Y,mt,Qt,null);if(typeof mt.then=="function")return lt(Y,G,$,ll(mt),Qt);if(mt.$$typeof===C)return lt(Y,G,$,al(G,mt),Qt);cl(G,mt)}return null}function Ht(Y,G,$,mt){for(var Qt=null,Te=null,kt=G,ce=G=0,_e=null;kt!==null&&ce<$.length;ce++){kt.index>ce?(_e=kt,kt=null):_e=kt.sibling;var be=nt(Y,kt,$[ce],mt);if(be===null){kt===null&&(kt=_e);break}e&&kt&&be.alternate===null&&n(Y,kt),G=h(be,G,ce),Te===null?Qt=be:Te.sibling=be,Te=be,kt=_e}if(ce===$.length)return a(Y,kt),Se&&Oi(Y,ce),Qt;if(kt===null){for(;ce<$.length;ce++)kt=xt(Y,$[ce],mt),kt!==null&&(G=h(kt,G,ce),Te===null?Qt=kt:Te.sibling=kt,Te=kt);return Se&&Oi(Y,ce),Qt}for(kt=o(kt);ce<$.length;ce++)_e=lt(kt,Y,ce,$[ce],mt),_e!==null&&(e&&_e.alternate!==null&&kt.delete(_e.key===null?ce:_e.key),G=h(_e,G,ce),Te===null?Qt=_e:Te.sibling=_e,Te=_e);return e&&kt.forEach(function(Ra){return n(Y,Ra)}),Se&&Oi(Y,ce),Qt}function $t(Y,G,$,mt){if($==null)throw Error(s(151));for(var Qt=null,Te=null,kt=G,ce=G=0,_e=null,be=$.next();kt!==null&&!be.done;ce++,be=$.next()){kt.index>ce?(_e=kt,kt=null):_e=kt.sibling;var Ra=nt(Y,kt,be.value,mt);if(Ra===null){kt===null&&(kt=_e);break}e&&kt&&Ra.alternate===null&&n(Y,kt),G=h(Ra,G,ce),Te===null?Qt=Ra:Te.sibling=Ra,Te=Ra,kt=_e}if(be.done)return a(Y,kt),Se&&Oi(Y,ce),Qt;if(kt===null){for(;!be.done;ce++,be=$.next())be=xt(Y,be.value,mt),be!==null&&(G=h(be,G,ce),Te===null?Qt=be:Te.sibling=be,Te=be);return Se&&Oi(Y,ce),Qt}for(kt=o(kt);!be.done;ce++,be=$.next())be=lt(kt,Y,ce,be.value,mt),be!==null&&(e&&be.alternate!==null&&kt.delete(be.key===null?ce:be.key),G=h(be,G,ce),Te===null?Qt=be:Te.sibling=be,Te=be);return e&&kt.forEach(function(Dy){return n(Y,Dy)}),Se&&Oi(Y,ce),Qt}function Ne(Y,G,$,mt){if(typeof $=="object"&&$!==null&&$.type===E&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var Qt=$.key;G!==null;){if(G.key===Qt){if(Qt=$.type,Qt===E){if(G.tag===7){a(Y,G.sibling),mt=u(G,$.props.children),mt.return=Y,Y=mt;break t}}else if(G.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===Z&&es(Qt)===G.type){a(Y,G.sibling),mt=u(G,$.props),Qr(mt,$),mt.return=Y,Y=mt;break t}a(Y,G);break}else n(Y,G);G=G.sibling}$.type===E?(mt=Ka($.props.children,Y.mode,mt,$.key),mt.return=Y,Y=mt):(mt=el($.type,$.key,$.props,null,Y.mode,mt),Qr(mt,$),mt.return=Y,Y=mt)}return S(Y);case T:t:{for(Qt=$.key;G!==null;){if(G.key===Qt)if(G.tag===4&&G.stateNode.containerInfo===$.containerInfo&&G.stateNode.implementation===$.implementation){a(Y,G.sibling),mt=u(G,$.children||[]),mt.return=Y,Y=mt;break t}else{a(Y,G);break}else n(Y,G);G=G.sibling}mt=gu($,Y.mode,mt),mt.return=Y,Y=mt}return S(Y);case Z:return $=es($),Ne(Y,G,$,mt)}if(ot($))return Ht(Y,G,$,mt);if(J($)){if(Qt=J($),typeof Qt!="function")throw Error(s(150));return $=Qt.call($),$t(Y,G,$,mt)}if(typeof $.then=="function")return Ne(Y,G,ll($),mt);if($.$$typeof===C)return Ne(Y,G,al(Y,$),mt);cl(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,G!==null&&G.tag===6?(a(Y,G.sibling),mt=u(G,$),mt.return=Y,Y=mt):(a(Y,G),mt=mu($,Y.mode,mt),mt.return=Y,Y=mt),S(Y)):a(Y,G)}return function(Y,G,$,mt){try{Kr=0;var Qt=Ne(Y,G,$,mt);return Fs=null,Qt}catch(kt){if(kt===Is||kt===rl)throw kt;var Te=kn(29,kt,null,Y.mode);return Te.lanes=mt,Te.return=Y,Te}finally{}}}var is=op(!0),lp=op(!1),ua=!1;function Cu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function fa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ha(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ae&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=tl(e),Wd(e,null,a),n}return $o(e,o,n,a),tl(e)}function Jr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Or(e,a)}}function Du(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Lu=!1;function $r(){if(Lu){var e=Bs;if(e!==null)throw e}}function to(e,n,a,o){Lu=!1;var u=e.updateQueue;ua=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var I=A,tt=I.next;I.next=null,S===null?h=tt:S.next=tt,S=I;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==S&&(A===null?ft.firstBaseUpdate=tt:A.next=tt,ft.lastBaseUpdate=I))}if(h!==null){var xt=u.baseState;S=0,ft=tt=I=null,A=h;do{var nt=A.lane&-536870913,lt=nt!==A.lane;if(lt?(ve&nt)===nt:(o&nt)===nt){nt!==0&&nt===zs&&(Lu=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Ht=e,$t=A;nt=n;var Ne=a;switch($t.tag){case 1:if(Ht=$t.payload,typeof Ht=="function"){xt=Ht.call(Ne,xt,nt);break t}xt=Ht;break t;case 3:Ht.flags=Ht.flags&-65537|128;case 0:if(Ht=$t.payload,nt=typeof Ht=="function"?Ht.call(Ne,xt,nt):Ht,nt==null)break t;xt=v({},xt,nt);break t;case 2:ua=!0}}nt=A.callback,nt!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[nt]:lt.push(nt))}else lt={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(tt=ft=lt,I=xt):ft=ft.next=lt,S|=nt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ft===null&&(I=xt),u.baseState=I,u.firstBaseUpdate=tt,u.lastBaseUpdate=ft,h===null&&(u.shared.lanes=0),va|=S,e.lanes=S,e.memoizedState=xt}}function cp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function up(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)cp(a[e],n)}var Hs=N(null),ul=N(0);function fp(e,n){e=Wi,Mt(ul,e),Mt(Hs,n),Wi=e|n.baseLanes}function Uu(){Mt(ul,Wi),Mt(Hs,Hs.current)}function Nu(){Wi=ul.current,et(Hs),et(ul)}var Xn=N(null),ai=null;function da(e){var n=e.alternate;Mt(Ze,Ze.current&1),Mt(Xn,e),ai===null&&(n===null||Hs.current!==null||n.memoizedState!==null)&&(ai=e)}function Ou(e){Mt(Ze,Ze.current),Mt(Xn,e),ai===null&&(ai=e)}function hp(e){e.tag===22?(Mt(Ze,Ze.current),Mt(Xn,e),ai===null&&(ai=e)):pa()}function pa(){Mt(Ze,Ze.current),Mt(Xn,Xn.current)}function Wn(e){et(Xn),ai===e&&(ai=null),et(Ze)}var Ze=N(0);function fl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Gf(a)||Vf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Bi=0,oe=null,Le=null,Je=null,hl=!1,Gs=!1,as=!1,dl=0,eo=0,Vs=null,yx=0;function We(){throw Error(s(321))}function Pu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Vn(e[a],n[a]))return!1;return!0}function zu(e,n,a,o,u,h){return Bi=h,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Zp:Qu,as=!1,h=a(o,u),as=!1,Gs&&(h=pp(n,a,o,u)),dp(e),h}function dp(e){z.H=ao;var n=Le!==null&&Le.next!==null;if(Bi=0,Je=Le=oe=null,hl=!1,eo=0,Vs=null,n)throw Error(s(300));e===null||$e||(e=e.dependencies,e!==null&&il(e)&&($e=!0))}function pp(e,n,a,o){oe=e;var u=0;do{if(Gs&&(Vs=null),eo=0,Gs=!1,25<=u)throw Error(s(301));if(u+=1,Je=Le=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=Kp,h=n(a,o)}while(Gs);return h}function Sx(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?no(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(oe.flags|=1024),n}function Bu(){var e=dl!==0;return dl=0,e}function Iu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Fu(e){if(hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hl=!1}Bi=0,Je=Le=oe=null,Gs=!1,eo=dl=0,Vs=null}function wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?oe.memoizedState=Je=e:Je=Je.next=e,Je}function Ke(){if(Le===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=Je===null?oe.memoizedState:Je.next;if(n!==null)Je=n,Le=e;else{if(e===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Je===null?oe.memoizedState=Je=e:Je=Je.next=e}return Je}function pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(e){var n=eo;return eo+=1,Vs===null&&(Vs=[]),e=ap(Vs,e,n),n=oe,(Je===null?n.memoizedState:Je.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Zp:Qu),e}function ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return no(e);if(e.$$typeof===C)return pn(e)}throw Error(s(438,String(e)))}function Hu(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=pl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=b;return n.index++,a}function Ii(e,n){return typeof n=="function"?n(e):n}function gl(e){var n=Ke();return Gu(n,Le,e)}function Gu(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var A=S=null,I=null,tt=n,ft=!1;do{var xt=tt.lane&-536870913;if(xt!==tt.lane?(ve&xt)===xt:(Bi&xt)===xt){var nt=tt.revertLane;if(nt===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),xt===zs&&(ft=!0);else if((Bi&nt)===nt){tt=tt.next,nt===zs&&(ft=!0);continue}else xt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=xt,S=h):I=I.next=xt,oe.lanes|=nt,va|=nt;xt=tt.action,as&&a(h,xt),h=tt.hasEagerState?tt.eagerState:a(h,xt)}else nt={lane:xt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},I===null?(A=I=nt,S=h):I=I.next=nt,oe.lanes|=xt,va|=xt;tt=tt.next}while(tt!==null&&tt!==n);if(I===null?S=h:I.next=A,!Vn(h,e.memoizedState)&&($e=!0,ft&&(a=Bs,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=I,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Vu(e){var n=Ke(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);Vn(h,n.memoizedState)||($e=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function mp(e,n,a){var o=oe,u=Ke(),h=Se;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!Vn((Le||u).memoizedState,a);if(S&&(u.memoizedState=a,$e=!0),u=u.queue,Wu(_p.bind(null,o,u,e),[e]),u.getSnapshot!==n||S||Je!==null&&Je.memoizedState.tag&1){if(o.flags|=2048,ks(9,{destroy:void 0},vp.bind(null,o,u,a,n),null),ze===null)throw Error(s(349));h||(Bi&127)!==0||gp(o,n,a)}return a}function gp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=pl(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function vp(e,n,a,o){n.value=a,n.getSnapshot=o,xp(n)&&yp(e)}function _p(e,n,a){return a(function(){xp(n)&&yp(e)})}function xp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Vn(e,a)}catch{return!0}}function yp(e){var n=Za(e,2);n!==null&&In(n,e,2)}function ku(e){var n=wn();if(typeof e=="function"){var a=e;if(e=a(),as){se(!0);try{a()}finally{se(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:e},n}function Sp(e,n,a,o){return e.baseState=a,Gu(e,Le,typeof o=="function"?o:Ii)}function Mx(e,n,a,o,u){if(xl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};z.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Mp(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Mp(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=z.T,S={};z.T=S;try{var A=a(u,o),I=z.S;I!==null&&I(S,A),Ep(e,n,A)}catch(tt){Xu(e,n,tt)}finally{h!==null&&S.types!==null&&(h.types=S.types),z.T=h}}else try{h=a(u,o),Ep(e,n,h)}catch(tt){Xu(e,n,tt)}}function Ep(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Tp(e,n,o)},function(o){return Xu(e,n,o)}):Tp(e,n,a)}function Tp(e,n,a){n.status="fulfilled",n.value=a,bp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Mp(e,a)))}function Xu(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,bp(n),n=n.next;while(n!==o)}e.action=null}function bp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ap(e,n){return n}function Rp(e,n){if(Se){var a=ze.formState;if(a!==null){t:{var o=oe;if(Se){if(Ie){e:{for(var u=Ie,h=ii;u.nodeType!==8;){if(!h){u=null;break e}if(u=si(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Ie=si(u.nextSibling),o=u.data==="F!";break t}}la(o)}o=!1}o&&(n=a[0])}}return a=wn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ap,lastRenderedState:n},a.queue=o,a=qp.bind(null,oe,o),o.dispatch=a,o=ku(!1),h=Ku.bind(null,oe,!1,o.queue),o=wn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=Mx.bind(null,oe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Cp(e){var n=Ke();return wp(n,Le,e)}function wp(e,n,a){if(n=Gu(e,n,Ap)[0],e=gl(Ii)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=no(n)}catch(S){throw S===Is?rl:S}else o=n;n=Ke();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,ks(9,{destroy:void 0},Ex.bind(null,u,a),null)),[o,h,e]}function Ex(e,n){e.action=n}function Dp(e){var n=Ke(),a=Le;if(a!==null)return wp(n,a,e);Ke(),n=n.memoizedState,a=Ke();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function ks(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=oe.updateQueue,n===null&&(n=pl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Lp(){return Ke().memoizedState}function vl(e,n,a,o){var u=wn();oe.flags|=e,u.memoizedState=ks(1|n,{destroy:void 0},a,o===void 0?null:o)}function _l(e,n,a,o){var u=Ke();o=o===void 0?null:o;var h=u.memoizedState.inst;Le!==null&&o!==null&&Pu(o,Le.memoizedState.deps)?u.memoizedState=ks(n,h,a,o):(oe.flags|=e,u.memoizedState=ks(1|n,h,a,o))}function Up(e,n){vl(8390656,8,e,n)}function Wu(e,n){_l(2048,8,e,n)}function Tx(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=pl(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Np(e){var n=Ke().memoizedState;return Tx({ref:n,nextImpl:e}),function(){if((Ae&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Op(e,n){return _l(4,2,e,n)}function Pp(e,n){return _l(4,4,e,n)}function zp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bp(e,n,a){a=a!=null?a.concat([e]):null,_l(4,4,zp.bind(null,n,e),a)}function qu(){}function Ip(e,n){var a=Ke();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Pu(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Fp(e,n){var a=Ke();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Pu(n,o[1]))return o[0];if(o=e(),as){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[o,n],o}function Yu(e,n,a){return a===void 0||(Bi&1073741824)!==0&&(ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Hm(),oe.lanes|=e,va|=e,a)}function Hp(e,n,a,o){return Vn(a,n)?a:Hs.current!==null?(e=Yu(e,a,o),Vn(e,n)||($e=!0),e):(Bi&42)===0||(Bi&1073741824)!==0&&(ve&261930)===0?($e=!0,e.memoizedState=a):(e=Hm(),oe.lanes|=e,va|=e,n)}function Gp(e,n,a,o,u){var h=W.p;W.p=h!==0&&8>h?h:8;var S=z.T,A={};z.T=A,Ku(e,!1,n,a);try{var I=u(),tt=z.S;if(tt!==null&&tt(A,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ft=xx(I,o);io(e,n,ft,jn(e))}else io(e,n,o,jn(e))}catch(xt){io(e,n,{then:function(){},status:"rejected",reason:xt},jn())}finally{W.p=h,S!==null&&A.types!==null&&(S.types=A.types),z.T=S}}function bx(){}function ju(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Vp(e).queue;Gp(e,u,n,k,a===null?bx:function(){return kp(e),a(o)})}function Vp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ii,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function kp(e){var n=Vp(e);n.next===null&&(n=e.alternate.memoizedState),io(e,n.next.queue,{},jn())}function Zu(){return pn(So)}function Xp(){return Ke().memoizedState}function Wp(){return Ke().memoizedState}function Ax(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();e=fa(a);var o=ha(n,e,a);o!==null&&(In(o,n,a),Jr(o,n,a)),n={cache:Tu()},e.payload=n;return}n=n.return}}function Rx(e,n,a){var o=jn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},xl(e)?Yp(n,a):(a=du(e,n,a,o),a!==null&&(In(a,e,o),jp(a,n,o)))}function qp(e,n,a){var o=jn();io(e,n,a,o)}function io(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(xl(e))Yp(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,A=h(S,a);if(u.hasEagerState=!0,u.eagerState=A,Vn(A,S))return $o(e,n,u,0),ze===null&&Jo(),!1}catch{}finally{}if(a=du(e,n,u,o),a!==null)return In(a,e,o),jp(a,n,o),!0}return!1}function Ku(e,n,a,o){if(o={lane:2,revertLane:wf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},xl(e)){if(n)throw Error(s(479))}else n=du(e,a,o,2),n!==null&&In(n,e,2)}function xl(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function Yp(e,n){Gs=hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function jp(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Or(e,a)}}var ao={readContext:pn,use:ml,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useLayoutEffect:We,useInsertionEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useSyncExternalStore:We,useId:We,useHostTransitionStatus:We,useFormState:We,useActionState:We,useOptimistic:We,useMemoCache:We,useCacheRefresh:We};ao.useEffectEvent=We;var Zp={readContext:pn,use:ml,useCallback:function(e,n){return wn().memoizedState=[e,n===void 0?null:n],e},useContext:pn,useEffect:Up,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,vl(4194308,4,zp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return vl(4194308,4,e,n)},useInsertionEffect:function(e,n){vl(4,2,e,n)},useMemo:function(e,n){var a=wn();n=n===void 0?null:n;var o=e();if(as){se(!0);try{e()}finally{se(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=wn();if(a!==void 0){var u=a(n);if(as){se(!0);try{a(n)}finally{se(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=Rx.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var n=wn();return e={current:e},n.memoizedState=e},useState:function(e){e=ku(e);var n=e.queue,a=qp.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:qu,useDeferredValue:function(e,n){var a=wn();return Yu(a,e,n)},useTransition:function(){var e=ku(!1);return e=Gp.bind(null,oe,e.queue,!0,!1),wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=oe,u=wn();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ze===null)throw Error(s(349));(ve&127)!==0||gp(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Up(_p.bind(null,o,h,e),[e]),o.flags|=2048,ks(9,{destroy:void 0},vp.bind(null,o,h,a,n),null),a},useId:function(){var e=wn(),n=ze.identifierPrefix;if(Se){var a=Si,o=yi;a=(o&~(1<<32-ye(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=yx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Zu,useFormState:Rp,useActionState:Rp,useOptimistic:function(e){var n=wn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ku.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Hu,useCacheRefresh:function(){return wn().memoizedState=Ax.bind(null,oe)},useEffectEvent:function(e){var n=wn(),a={impl:e};return n.memoizedState=a,function(){if((Ae&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Qu={readContext:pn,use:ml,useCallback:Ip,useContext:pn,useEffect:Wu,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:Pp,useMemo:Fp,useReducer:gl,useRef:Lp,useState:function(){return gl(Ii)},useDebugValue:qu,useDeferredValue:function(e,n){var a=Ke();return Hp(a,Le.memoizedState,e,n)},useTransition:function(){var e=gl(Ii)[0],n=Ke().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:mp,useId:Xp,useHostTransitionStatus:Zu,useFormState:Cp,useActionState:Cp,useOptimistic:function(e,n){var a=Ke();return Sp(a,Le,e,n)},useMemoCache:Hu,useCacheRefresh:Wp};Qu.useEffectEvent=Np;var Kp={readContext:pn,use:ml,useCallback:Ip,useContext:pn,useEffect:Wu,useImperativeHandle:Bp,useInsertionEffect:Op,useLayoutEffect:Pp,useMemo:Fp,useReducer:Vu,useRef:Lp,useState:function(){return Vu(Ii)},useDebugValue:qu,useDeferredValue:function(e,n){var a=Ke();return Le===null?Yu(a,e,n):Hp(a,Le.memoizedState,e,n)},useTransition:function(){var e=Vu(Ii)[0],n=Ke().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:mp,useId:Xp,useHostTransitionStatus:Zu,useFormState:Dp,useActionState:Dp,useOptimistic:function(e,n){var a=Ke();return Le!==null?Sp(a,Le,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Hu,useCacheRefresh:Wp};Kp.useEffectEvent=Np;function Ju(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var $u={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=jn(),u=fa(o);u.payload=n,a!=null&&(u.callback=a),n=ha(e,u,o),n!==null&&(In(n,e,o),Jr(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=jn(),u=fa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ha(e,u,o),n!==null&&(In(n,e,o),Jr(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=jn(),o=fa(a);o.tag=2,n!=null&&(o.callback=n),n=ha(e,o,a),n!==null&&(In(n,e,a),Jr(n,e,a))}};function Qp(e,n,a,o,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!Xr(a,o)||!Xr(u,h):!0}function Jp(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&$u.enqueueReplaceState(n,n.state,null)}function ss(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=v({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function $p(e){Qo(e)}function tm(e){console.error(e)}function em(e){Qo(e)}function yl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function nm(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function tf(e,n,a){return a=fa(a),a.tag=3,a.payload={element:null},a.callback=function(){yl(e,n)},a}function im(e){return e=fa(e),e.tag=3,e}function am(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){nm(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){nm(n,a,o),typeof u!="function"&&(_a===null?_a=new Set([this]):_a.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function Cx(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ps(n,a,u,!0),a=Xn.current,a!==null){switch(a.tag){case 31:case 13:return ai===null?Ul():a.alternate===null&&qe===0&&(qe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Af(e,o,u)),!1;case 22:return a.flags|=65536,o===ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Af(e,o,u)),!1}throw Error(s(435,a.tag))}return Af(e,o,u),Ul(),!1}if(Se)return n=Xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==xu&&(e=Error(s(422),{cause:o}),Yr(ti(e,a)))):(o!==xu&&(n=Error(s(423),{cause:o}),Yr(ti(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=ti(o,a),u=tf(e.stateNode,o,u),Du(e,u),qe!==4&&(qe=2)),!1;var h=Error(s(520),{cause:o});if(h=ti(h,a),ho===null?ho=[h]:ho.push(h),qe!==4&&(qe=2),n===null)return!0;o=ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=tf(a.stateNode,o,e),Du(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(_a===null||!_a.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=im(u),am(u,e,a,o),Du(a,u),!1}a=a.return}while(a!==null);return!1}var ef=Error(s(461)),$e=!1;function mn(e,n,a,o){n.child=e===null?lp(n,null,a,o):is(n,e.child,a,o)}function sm(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var A in o)A!=="ref"&&(S[A]=o[A])}else S=o;return $a(n),o=zu(e,n,a,S,h,u),A=Bu(),e!==null&&!$e?(Iu(e,n,u),Fi(e,n,u)):(Se&&A&&vu(n),n.flags|=1,mn(e,n,o,u),n.child)}function rm(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!pu(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,om(e,n,h,o,u)):(e=el(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!uf(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:Xr,a(S,o)&&e.ref===n.ref)return Fi(e,n,u)}return n.flags|=1,e=Ni(h,o),e.ref=n.ref,e.return=n,n.child=e}function om(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Xr(h,o)&&e.ref===n.ref)if($e=!1,n.pendingProps=o=h,uf(e,u))(e.flags&131072)!==0&&($e=!0);else return n.lanes=e.lanes,Fi(e,n,u)}return nf(e,n,a,o,u)}function lm(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return cm(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&sl(n,h!==null?h.cachePool:null),h!==null?fp(n,h):Uu(),hp(n);else return o=n.lanes=536870912,cm(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(sl(n,h.cachePool),fp(n,h),pa(),n.memoizedState=null):(e!==null&&sl(n,null),Uu(),pa());return mn(e,n,u,a),n.child}function so(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function cm(e,n,a,o,u){var h=Au();return h=h===null?null:{parent:Qe._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&sl(n,null),Uu(),hp(n),e!==null&&Ps(e,n,o,!0),n.childLanes=u,null}function Sl(e,n){return n=El({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function um(e,n,a){return is(n,e.child,null,a),e=Sl(n,n.pendingProps),e.flags|=2,Wn(n),n.memoizedState=null,e}function wx(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Se){if(o.mode==="hidden")return e=Sl(n,o),n.lanes=536870912,so(null,e);if(Ou(n),(e=Ie)?(e=Mg(e,ii),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ra!==null?{id:yi,overflow:Si}:null,retryLane:536870912,hydrationErrors:null},a=Yd(e),a.return=n,n.child=a,dn=n,Ie=null)):e=null,e===null)throw la(n);return n.lanes=536870912,null}return Sl(n,o)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if(Ou(n),u)if(n.flags&256)n.flags&=-257,n=um(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if($e||Ps(e,n,a,!1),u=(a&e.childLanes)!==0,$e||u){if(o=ze,o!==null&&(S=ka(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,Za(e,S),In(o,e,S),ef;Ul(),n=um(e,n,a)}else e=h.treeContext,Ie=si(S.nextSibling),dn=n,Se=!0,oa=null,ii=!1,e!==null&&Kd(n,e),n=Sl(n,o),n.flags|=4096;return n}return e=Ni(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ml(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function nf(e,n,a,o,u){return $a(n),a=zu(e,n,a,o,void 0,u),o=Bu(),e!==null&&!$e?(Iu(e,n,u),Fi(e,n,u)):(Se&&o&&vu(n),n.flags|=1,mn(e,n,a,u),n.child)}function fm(e,n,a,o,u,h){return $a(n),n.updateQueue=null,a=pp(n,o,a,u),dp(e),o=Bu(),e!==null&&!$e?(Iu(e,n,h),Fi(e,n,h)):(Se&&o&&vu(n),n.flags|=1,mn(e,n,a,h),n.child)}function hm(e,n,a,o,u){if($a(n),n.stateNode===null){var h=Ls,S=a.contextType;typeof S=="object"&&S!==null&&(h=pn(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=$u,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Cu(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?pn(S):Ls,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Ju(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&$u.enqueueReplaceState(h,h.state,null),to(n,o,h,u),$r(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var A=n.memoizedProps,I=ss(a,A);h.props=I;var tt=h.context,ft=a.contextType;S=Ls,typeof ft=="object"&&ft!==null&&(S=pn(ft));var xt=a.getDerivedStateFromProps;ft=typeof xt=="function"||typeof h.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(A||tt!==S)&&Jp(n,h,o,S),ua=!1;var nt=n.memoizedState;h.state=nt,to(n,o,h,u),$r(),tt=n.memoizedState,A||nt!==tt||ua?(typeof xt=="function"&&(Ju(n,a,xt,o),tt=n.memoizedState),(I=ua||Qp(n,a,I,o,nt,tt,S))?(ft||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),h.props=o,h.state=tt,h.context=S,o=I):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,wu(e,n),S=n.memoizedProps,ft=ss(a,S),h.props=ft,xt=n.pendingProps,nt=h.context,tt=a.contextType,I=Ls,typeof tt=="object"&&tt!==null&&(I=pn(tt)),A=a.getDerivedStateFromProps,(tt=typeof A=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==xt||nt!==I)&&Jp(n,h,o,I),ua=!1,nt=n.memoizedState,h.state=nt,to(n,o,h,u),$r();var lt=n.memoizedState;S!==xt||nt!==lt||ua||e!==null&&e.dependencies!==null&&il(e.dependencies)?(typeof A=="function"&&(Ju(n,a,A,o),lt=n.memoizedState),(ft=ua||Qp(n,a,ft,o,nt,lt,I)||e!==null&&e.dependencies!==null&&il(e.dependencies))?(tt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,lt,I),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,lt,I)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),h.props=o,h.state=lt,h.context=I,o=ft):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Ml(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=is(n,e.child,null,u),n.child=is(n,null,a,u)):mn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Fi(e,n,u),e}function dm(e,n,a,o){return Qa(),n.flags|=256,mn(e,n,a,o),n.child}var af={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sf(e){return{baseLanes:e,cachePool:np()}}function rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Yn),e}function pm(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(Ze.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(u?da(n):pa(),(e=Ie)?(e=Mg(e,ii),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ra!==null?{id:yi,overflow:Si}:null,retryLane:536870912,hydrationErrors:null},a=Yd(e),a.return=n,n.child=a,dn=n,Ie=null)):e=null,e===null)throw la(n);return Vf(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(pa(),u=n.mode,A=El({mode:"hidden",children:A},u),o=Ka(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=sf(a),o.childLanes=rf(e,S,a),n.memoizedState=af,so(null,o)):(da(n),of(n,A))}var I=e.memoizedState;if(I!==null&&(A=I.dehydrated,A!==null)){if(h)n.flags&256?(da(n),n.flags&=-257,n=lf(e,n,a)):n.memoizedState!==null?(pa(),n.child=e.child,n.flags|=128,n=null):(pa(),A=o.fallback,u=n.mode,o=El({mode:"visible",children:o.children},u),A=Ka(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,is(n,e.child,null,a),o=n.child,o.memoizedState=sf(a),o.childLanes=rf(e,S,a),n.memoizedState=af,n=so(null,o));else if(da(n),Vf(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var tt=S.dgst;S=tt,o=Error(s(419)),o.stack="",o.digest=S,Yr({value:o,source:null,stack:null}),n=lf(e,n,a)}else if($e||Ps(e,n,a,!1),S=(a&e.childLanes)!==0,$e||S){if(S=ze,S!==null&&(o=ka(S,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,Za(e,o),In(S,e,o),ef;Gf(A)||Ul(),n=lf(e,n,a)}else Gf(A)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,Ie=si(A.nextSibling),dn=n,Se=!0,oa=null,ii=!1,e!==null&&Kd(n,e),n=of(n,o.children),n.flags|=4096);return n}return u?(pa(),A=o.fallback,u=n.mode,I=e.child,tt=I.sibling,o=Ni(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,tt!==null?A=Ni(tt,A):(A=Ka(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,so(null,o),o=n.child,A=e.child.memoizedState,A===null?A=sf(a):(u=A.cachePool,u!==null?(I=Qe._currentValue,u=u.parent!==I?{parent:I,pool:I}:u):u=np(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=rf(e,S,a),n.memoizedState=af,so(e.child,o)):(da(n),a=e.child,e=a.sibling,a=Ni(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function of(e,n){return n=El({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function El(e,n){return e=kn(22,e,null,n),e.lanes=0,e}function lf(e,n,a){return is(n,e.child,null,a),e=of(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function mm(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Mu(e.return,n,a)}function cf(e,n,a,o,u,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=h)}function gm(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=Ze.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,Mt(Ze,S),mn(e,n,o,a),o=Se?qr:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mm(e,a,n);else if(e.tag===19)mm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&fl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),cf(n,!1,u,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&fl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}cf(n,!0,a,null,h,o);break;case"together":cf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Fi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),va|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ps(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Ni(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ni(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function uf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&il(e)))}function Dx(e,n,a){switch(n.tag){case 3:Yt(n,n.stateNode.containerInfo),ca(n,Qe,e.memoizedState.cache),Qa();break;case 27:case 5:K(n);break;case 4:Yt(n,n.stateNode.containerInfo);break;case 10:ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ou(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(da(n),n.flags|=128,null):(a&n.child.childLanes)!==0?pm(e,n,a):(da(n),e=Fi(e,n,a),e!==null?e.sibling:null);da(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Ps(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return gm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(Ze,Ze.current),o)break;return null;case 22:return n.lanes=0,lm(e,n,a,n.pendingProps);case 24:ca(n,Qe,e.memoizedState.cache)}return Fi(e,n,a)}function vm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)$e=!0;else{if(!uf(e,a)&&(n.flags&128)===0)return $e=!1,Dx(e,n,a);$e=(e.flags&131072)!==0}else $e=!1,Se&&(n.flags&1048576)!==0&&Zd(n,qr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=es(n.elementType),n.type=e,typeof e=="function")pu(e)?(o=ss(e,o),n.tag=1,n=hm(null,n,e,o,a)):(n.tag=0,n=nf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===L){n.tag=11,n=sm(null,n,e,o,a);break t}else if(u===O){n.tag=14,n=rm(null,n,e,o,a);break t}}throw n=st(e)||e,Error(s(306,n,""))}}return n;case 0:return nf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=ss(o,n.pendingProps),hm(e,n,o,u,a);case 3:t:{if(Yt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,wu(e,n),to(n,o,null,a);var S=n.memoizedState;if(o=S.cache,ca(n,Qe,o),o!==h.cache&&Eu(n,[Qe],a,!0),$r(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=dm(e,n,o,a);break t}else if(o!==u){u=ti(Error(s(424)),n),Yr(u),n=dm(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ie=si(e.firstChild),dn=n,Se=!0,oa=null,ii=!0,a=lp(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Qa(),o===u){n=Fi(e,n,a);break t}mn(e,n,o,a)}n=n.child}return n;case 26:return Ml(e,n),e===null?(a=Cg(n.type,null,n.pendingProps,null))?n.memoizedState=a:Se||(a=n.type,e=n.pendingProps,o=Fl(Tt.current).createElement(a),o[nn]=n,o[_n]=e,gn(o,a,e),qt(o),n.stateNode=o):n.memoizedState=Cg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return K(n),e===null&&Se&&(o=n.stateNode=bg(n.type,n.pendingProps,Tt.current),dn=n,ii=!0,u=Ie,Ma(n.type)?(kf=u,Ie=si(o.firstChild)):Ie=u),mn(e,n,n.pendingProps.children,a),Ml(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Se&&((u=o=Ie)&&(o=ry(o,n.type,n.pendingProps,ii),o!==null?(n.stateNode=o,dn=n,Ie=si(o.firstChild),ii=!1,u=!0):u=!1),u||la(n)),K(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,If(u,h)?o=null:S!==null&&If(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=zu(e,n,Sx,null,null,a),So._currentValue=u),Ml(e,n),mn(e,n,o,a),n.child;case 6:return e===null&&Se&&((e=a=Ie)&&(a=oy(a,n.pendingProps,ii),a!==null?(n.stateNode=a,dn=n,Ie=null,e=!0):e=!1),e||la(n)),null;case 13:return pm(e,n,a);case 4:return Yt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=is(n,null,o,a):mn(e,n,o,a),n.child;case 11:return sm(e,n,n.type,n.pendingProps,a);case 7:return mn(e,n,n.pendingProps,a),n.child;case 8:return mn(e,n,n.pendingProps.children,a),n.child;case 12:return mn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,ca(n,n.type,o.value),mn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,$a(n),u=pn(u),o=o(u),n.flags|=1,mn(e,n,o,a),n.child;case 14:return rm(e,n,n.type,n.pendingProps,a);case 15:return om(e,n,n.type,n.pendingProps,a);case 19:return gm(e,n,a);case 31:return wx(e,n,a);case 22:return lm(e,n,a,n.pendingProps);case 24:return $a(n),o=pn(Qe),e===null?(u=Au(),u===null&&(u=ze,h=Tu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},Cu(n),ca(n,Qe,u)):((e.lanes&a)!==0&&(wu(e,n),to(n,null,null,a),$r()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ca(n,Qe,o)):(o=h.cache,ca(n,Qe,o),o!==u.cache&&Eu(n,[Qe],a,!0))),mn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Hi(e){e.flags|=4}function ff(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Xm())e.flags|=8192;else throw ns=ol,Ru}else e.flags&=-16777217}function _m(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Ng(n))if(Xm())e.flags|=8192;else throw ns=ol,Ru}function Tl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Me():536870912,e.lanes|=n,Ys|=n)}function ro(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Fe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Lx(e,n,a){var o=n.pendingProps;switch(_u(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(n),null;case 1:return Fe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),zi(Qe),Xt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Os(n)?Hi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,yu())),Fe(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(Hi(n),h!==null?(Fe(n),_m(n,h)):(Fe(n),ff(n,u,null,o,a))):h?h!==e.memoizedState?(Hi(n),Fe(n),_m(n,h)):(Fe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Hi(n),Fe(n),ff(n,u,e,o,a)),null;case 27:if(ue(n),a=Tt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Hi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Fe(n),null}e=X.current,Os(n)?Qd(n):(e=bg(u,o,a),n.stateNode=e,Hi(n))}return Fe(n),null;case 5:if(ue(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Hi(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Fe(n),null}if(h=X.current,Os(n))Qd(n);else{var S=Fl(Tt.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[nn]=n,h[_n]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;t:switch(gn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Hi(n)}}return Fe(n),ff(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Hi(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=Tt.current,Os(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=dn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[nn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||pg(e.nodeValue,a)),e||la(n,!0)}else e=Fl(e).createTextNode(o),e[nn]=n,n.stateNode=e}return Fe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Os(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[nn]=n}else Qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Fe(n),e=!1}else a=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Wn(n),n):(Wn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Fe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Os(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[nn]=n}else Qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Fe(n),u=!1}else u=yu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Wn(n),n):(Wn(n),null)}return Wn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),Fe(n),null);case 4:return Xt(),e===null&&Nf(n.stateNode.containerInfo),Fe(n),null;case 10:return zi(n.type),Fe(n),null;case 19:if(et(Ze),o=n.memoizedState,o===null)return Fe(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)ro(o,!1);else{if(qe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=fl(e),h!==null){for(n.flags|=128,ro(o,!1),e=h.updateQueue,n.updateQueue=e,Tl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)qd(a,e),a=a.sibling;return Mt(Ze,Ze.current&1|2),Se&&Oi(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&_t()>wl&&(n.flags|=128,u=!0,ro(o,!1),n.lanes=4194304)}else{if(!u)if(e=fl(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Tl(n,e),ro(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Se)return Fe(n),null}else 2*_t()-o.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,u=!0,ro(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=_t(),e.sibling=null,a=Ze.current,Mt(Ze,u?a&1|2:a&1),Se&&Oi(n,o.treeForkCount),e):(Fe(n),null);case 22:case 23:return Wn(n),Nu(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Fe(n),n.subtreeFlags&6&&(n.flags|=8192)):Fe(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&et(ts),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),zi(Qe),Fe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Ux(e,n){switch(_u(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return zi(Qe),Xt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ue(n),null;case 31:if(n.memoizedState!==null){if(Wn(n),n.alternate===null)throw Error(s(340));Qa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Wn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Qa()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return et(Ze),null;case 4:return Xt(),null;case 10:return zi(n.type),null;case 22:case 23:return Wn(n),Nu(),e!==null&&et(ts),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return zi(Qe),null;case 25:return null;default:return null}}function xm(e,n){switch(_u(n),n.tag){case 3:zi(Qe),Xt();break;case 26:case 27:case 5:ue(n);break;case 4:Xt();break;case 31:n.memoizedState!==null&&Wn(n);break;case 13:Wn(n);break;case 19:et(Ze);break;case 10:zi(n.type);break;case 22:case 23:Wn(n),Nu(),e!==null&&et(ts);break;case 24:zi(Qe)}}function oo(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(A){we(n,n.return,A)}}function ma(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var S=o.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,u=n;var I=a,tt=A;try{tt()}catch(ft){we(u,I,ft)}}}o=o.next}while(o!==h)}}catch(ft){we(n,n.return,ft)}}function ym(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{up(n,a)}catch(o){we(e,e.return,o)}}}function Sm(e,n,a){a.props=ss(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){we(e,n,o)}}function lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){we(e,n,u)}}function Mi(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){we(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){we(e,n,u)}else a.current=null}function Mm(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){we(e,e.return,u)}}function hf(e,n,a){try{var o=e.stateNode;ty(o,e.type,a,n),o[_n]=n}catch(u){we(e,e.return,u)}}function Em(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ma(e.type)||e.tag===4}function df(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Em(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Li));else if(o!==4&&(o===27&&Ma(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(pf(e,n,a),e=e.sibling;e!==null;)pf(e,n,a),e=e.sibling}function bl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(bl(e,n,a),e=e.sibling;e!==null;)bl(e,n,a),e=e.sibling}function Tm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);gn(n,o,a),n[nn]=e,n[_n]=a}catch(h){we(e,e.return,h)}}var Gi=!1,tn=!1,mf=!1,bm=typeof WeakSet=="function"?WeakSet:Set,un=null;function Nx(e,n){if(e=e.containerInfo,zf=ql,e=Bd(e),ou(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var S=0,A=-1,I=-1,tt=0,ft=0,xt=e,nt=null;e:for(;;){for(var lt;xt!==a||u!==0&&xt.nodeType!==3||(A=S+u),xt!==h||o!==0&&xt.nodeType!==3||(I=S+o),xt.nodeType===3&&(S+=xt.nodeValue.length),(lt=xt.firstChild)!==null;)nt=xt,xt=lt;for(;;){if(xt===e)break e;if(nt===a&&++tt===u&&(A=S),nt===h&&++ft===o&&(I=S),(lt=xt.nextSibling)!==null)break;xt=nt,nt=xt.parentNode}xt=lt}a=A===-1||I===-1?null:{start:A,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bf={focusedElem:e,selectionRange:a},ql=!1,un=n;un!==null;)if(n=un,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,un=e;else for(;un!==null;){switch(n=un,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,u=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var Ht=ss(a.type,u);e=o.getSnapshotBeforeUpdate(Ht,h),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){we(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Hf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Hf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,un=e;break}un=n.return}}function Am(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ki(e,a),o&4&&oo(5,a);break;case 1:if(ki(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){we(a,a.return,S)}else{var u=ss(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){we(a,a.return,S)}}o&64&&ym(a),o&512&&lo(a,a.return);break;case 3:if(ki(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{up(e,n)}catch(S){we(a,a.return,S)}}break;case 27:n===null&&o&4&&Tm(a);case 26:case 5:ki(e,a),n===null&&o&4&&Mm(a),o&512&&lo(a,a.return);break;case 12:ki(e,a);break;case 31:ki(e,a),o&4&&wm(e,a);break;case 13:ki(e,a),o&4&&Dm(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Vx.bind(null,a),ly(e,a))));break;case 22:if(o=a.memoizedState!==null||Gi,!o){n=n!==null&&n.memoizedState!==null||tn,u=Gi;var h=tn;Gi=o,(tn=n)&&!h?Xi(e,a,(a.subtreeFlags&8772)!==0):ki(e,a),Gi=u,tn=h}break;case 30:break;default:ki(e,a)}}function Rm(e){var n=e.alternate;n!==null&&(e.alternate=null,Rm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Vt(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ge=null,On=!1;function Vi(e,n,a){for(a=a.child;a!==null;)Cm(e,n,a),a=a.sibling}function Cm(e,n,a){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(It,a)}catch{}switch(a.tag){case 26:tn||Mi(a,n),Vi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:tn||Mi(a,n);var o=Ge,u=On;Ma(a.type)&&(Ge=a.stateNode,On=!1),Vi(e,n,a),_o(a.stateNode),Ge=o,On=u;break;case 5:tn||Mi(a,n);case 6:if(o=Ge,u=On,Ge=null,Vi(e,n,a),Ge=o,On=u,Ge!==null)if(On)try{(Ge.nodeType===9?Ge.body:Ge.nodeName==="HTML"?Ge.ownerDocument.body:Ge).removeChild(a.stateNode)}catch(h){we(a,n,h)}else try{Ge.removeChild(a.stateNode)}catch(h){we(a,n,h)}break;case 18:Ge!==null&&(On?(e=Ge,yg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),er(e)):yg(Ge,a.stateNode));break;case 4:o=Ge,u=On,Ge=a.stateNode.containerInfo,On=!0,Vi(e,n,a),Ge=o,On=u;break;case 0:case 11:case 14:case 15:ma(2,a,n),tn||ma(4,a,n),Vi(e,n,a);break;case 1:tn||(Mi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Sm(a,n,o)),Vi(e,n,a);break;case 21:Vi(e,n,a);break;case 22:tn=(o=tn)||a.memoizedState!==null,Vi(e,n,a),tn=o;break;default:Vi(e,n,a)}}function wm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{er(e)}catch(a){we(n,n.return,a)}}}function Dm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{er(e)}catch(a){we(n,n.return,a)}}function Ox(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new bm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new bm),n;default:throw Error(s(435,e.tag))}}function Al(e,n){var a=Ox(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=kx.bind(null,e,o);o.then(u,u)}})}function Pn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],h=e,S=n,A=S;t:for(;A!==null;){switch(A.tag){case 27:if(Ma(A.type)){Ge=A.stateNode,On=!1;break t}break;case 5:Ge=A.stateNode,On=!1;break t;case 3:case 4:Ge=A.stateNode.containerInfo,On=!0;break t}A=A.return}if(Ge===null)throw Error(s(160));Cm(h,S,u),Ge=null,On=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Lm(n,e),n=n.sibling}var ui=null;function Lm(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Pn(n,e),zn(e),o&4&&(ma(3,e,e.return),oo(3,e),ma(5,e,e.return));break;case 1:Pn(n,e),zn(e),o&512&&(tn||a===null||Mi(a,a.return)),o&64&&Gi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=ui;if(Pn(n,e),zn(e),o&512&&(tn||a===null||Mi(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[Lt]||h[nn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),gn(h,o,a),h[nn]=e,qt(h),o=h;break t;case"link":var S=Lg("link","href",u).get(o+(a.href||""));if(S){for(var A=0;A<S.length;A++)if(h=S[A],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(A,1);break e}}h=u.createElement(o),gn(h,o,a),u.head.appendChild(h);break;case"meta":if(S=Lg("meta","content",u).get(o+(a.content||""))){for(A=0;A<S.length;A++)if(h=S[A],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(A,1);break e}}h=u.createElement(o),gn(h,o,a),u.head.appendChild(h);break;default:throw Error(s(468,o))}h[nn]=e,qt(h),o=h}e.stateNode=o}else Ug(u,e.type,e.stateNode);else e.stateNode=Dg(u,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Ug(u,e.type,e.stateNode):Dg(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&hf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Pn(n,e),zn(e),o&512&&(tn||a===null||Mi(a,a.return)),a!==null&&o&4&&hf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Pn(n,e),zn(e),o&512&&(tn||a===null||Mi(a,a.return)),e.flags&32){u=e.stateNode;try{Ts(u,"")}catch(Ht){we(e,e.return,Ht)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,hf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(mf=!0);break;case 6:if(Pn(n,e),zn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Ht){we(e,e.return,Ht)}}break;case 3:if(Vl=null,u=ui,ui=Hl(n.containerInfo),Pn(n,e),ui=u,zn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{er(n.containerInfo)}catch(Ht){we(e,e.return,Ht)}mf&&(mf=!1,Um(e));break;case 4:o=ui,ui=Hl(e.stateNode.containerInfo),Pn(n,e),zn(e),ui=o;break;case 12:Pn(n,e),zn(e);break;case 31:Pn(n,e),zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Al(e,o)));break;case 13:Pn(n,e),zn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cl=_t()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Al(e,o)));break;case 22:u=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,tt=Gi,ft=tn;if(Gi=tt||u,tn=ft||I,Pn(n,e),tn=ft,Gi=tt,zn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||I||Gi||tn||rs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(h=I.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=I.stateNode;var xt=I.memoizedProps.style,nt=xt!=null&&xt.hasOwnProperty("display")?xt.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Ht){we(I,I.return,Ht)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=u?"":I.memoizedProps}catch(Ht){we(I,I.return,Ht)}}}else if(n.tag===18){if(a===null){I=n;try{var lt=I.stateNode;u?Sg(lt,!0):Sg(I.stateNode,!1)}catch(Ht){we(I,I.return,Ht)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Al(e,a))));break;case 19:Pn(n,e),zn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Al(e,o)));break;case 30:break;case 21:break;default:Pn(n,e),zn(e)}}function zn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Em(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,h=df(e);bl(e,h,u);break;case 5:var S=a.stateNode;a.flags&32&&(Ts(S,""),a.flags&=-33);var A=df(e);bl(e,A,S);break;case 3:case 4:var I=a.stateNode.containerInfo,tt=df(e);pf(e,tt,I);break;default:throw Error(s(161))}}catch(ft){we(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Um(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Um(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ki(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Am(e,n.alternate,n),n=n.sibling}function rs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ma(4,n,n.return),rs(n);break;case 1:Mi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Sm(n,n.return,a),rs(n);break;case 27:_o(n.stateNode);case 26:case 5:Mi(n,n.return),rs(n);break;case 22:n.memoizedState===null&&rs(n);break;case 30:rs(n);break;default:rs(n)}e=e.sibling}}function Xi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:Xi(u,h,a),oo(4,h);break;case 1:if(Xi(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){we(o,o.return,tt)}if(o=h,u=o.updateQueue,u!==null){var A=o.stateNode;try{var I=u.shared.hiddenCallbacks;if(I!==null)for(u.shared.hiddenCallbacks=null,u=0;u<I.length;u++)cp(I[u],A)}catch(tt){we(o,o.return,tt)}}a&&S&64&&ym(h),lo(h,h.return);break;case 27:Tm(h);case 26:case 5:Xi(u,h,a),a&&o===null&&S&4&&Mm(h),lo(h,h.return);break;case 12:Xi(u,h,a);break;case 31:Xi(u,h,a),a&&S&4&&wm(u,h);break;case 13:Xi(u,h,a),a&&S&4&&Dm(u,h);break;case 22:h.memoizedState===null&&Xi(u,h,a),lo(h,h.return);break;case 30:break;default:Xi(u,h,a)}n=n.sibling}}function gf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&jr(a))}function vf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&jr(e))}function fi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Nm(e,n,a,o),n=n.sibling}function Nm(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:fi(e,n,a,o),u&2048&&oo(9,n);break;case 1:fi(e,n,a,o);break;case 3:fi(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&jr(e)));break;case 12:if(u&2048){fi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,S=h.id,A=h.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){we(n,n.return,I)}}else fi(e,n,a,o);break;case 31:fi(e,n,a,o);break;case 13:fi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?fi(e,n,a,o):co(e,n):h._visibility&2?fi(e,n,a,o):(h._visibility|=2,Xs(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&gf(S,n);break;case 24:fi(e,n,a,o),u&2048&&vf(n.alternate,n);break;default:fi(e,n,a,o)}}function Xs(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,S=n,A=a,I=o,tt=S.flags;switch(S.tag){case 0:case 11:case 15:Xs(h,S,A,I,u),oo(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&2?Xs(h,S,A,I,u):co(h,S):(ft._visibility|=2,Xs(h,S,A,I,u)),u&&tt&2048&&gf(S.alternate,S);break;case 24:Xs(h,S,A,I,u),u&&tt&2048&&vf(S.alternate,S);break;default:Xs(h,S,A,I,u)}n=n.sibling}}function co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:co(a,o),u&2048&&gf(o.alternate,o);break;case 24:co(a,o),u&2048&&vf(o.alternate,o);break;default:co(a,o)}n=n.sibling}}var uo=8192;function Ws(e,n,a){if(e.subtreeFlags&uo)for(e=e.child;e!==null;)Om(e,n,a),e=e.sibling}function Om(e,n,a){switch(e.tag){case 26:Ws(e,n,a),e.flags&uo&&e.memoizedState!==null&&yy(a,ui,e.memoizedState,e.memoizedProps);break;case 5:Ws(e,n,a);break;case 3:case 4:var o=ui;ui=Hl(e.stateNode.containerInfo),Ws(e,n,a),ui=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=uo,uo=16777216,Ws(e,n,a),uo=o):Ws(e,n,a));break;default:Ws(e,n,a)}}function Pm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];un=o,Bm(o,e)}Pm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zm(e),e=e.sibling}function zm(e){switch(e.tag){case 0:case 11:case 15:fo(e),e.flags&2048&&ma(9,e,e.return);break;case 3:fo(e);break;case 12:fo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Rl(e)):fo(e);break;default:fo(e)}}function Rl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];un=o,Bm(o,e)}Pm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ma(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}e=e.sibling}}function Bm(e,n){for(;un!==null;){var a=un;switch(a.tag){case 0:case 11:case 15:ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:jr(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,un=o;else t:for(a=e;un!==null;){o=un;var u=o.sibling,h=o.return;if(Rm(o),o===a){un=null;break t}if(u!==null){u.return=h,un=u;break t}un=h}}}var Px={getCacheForType:function(e){var n=pn(Qe),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return pn(Qe).controller.signal}},zx=typeof WeakMap=="function"?WeakMap:Map,Ae=0,ze=null,me=null,ve=0,Ce=0,qn=null,ga=!1,qs=!1,_f=!1,Wi=0,qe=0,va=0,os=0,xf=0,Yn=0,Ys=0,ho=null,Bn=null,yf=!1,Cl=0,Im=0,wl=1/0,Dl=null,_a=null,rn=0,xa=null,js=null,qi=0,Sf=0,Mf=null,Fm=null,po=0,Ef=null;function jn(){return(Ae&2)!==0&&ve!==0?ve&-ve:z.T!==null?wf():Pr()}function Hm(){if(Yn===0)if((ve&536870912)===0||Se){var e=Nt;Nt<<=1,(Nt&3932160)===0&&(Nt=262144),Yn=e}else Yn=536870912;return e=Xn.current,e!==null&&(e.flags|=32),Yn}function In(e,n,a){(e===ze&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)&&(Zs(e,0),ya(e,ve,Yn,!1)),Ye(e,a),((Ae&2)===0||e!==ze)&&(e===ze&&((Ae&2)===0&&(os|=a),qe===4&&ya(e,ve,Yn,!1)),Ei(e))}function Gm(e,n,a){if((Ae&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||De(e,n),u=o?Fx(e,n):bf(e,n,!0),h=o;do{if(u===0){qs&&!o&&ya(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!Bx(a)){u=bf(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var A=e;u=ho;var I=A.current.memoizedState.isDehydrated;if(I&&(Zs(A,S).flags|=256),S=bf(A,S,!1),S!==2){if(_f&&!I){A.errorRecoveryDisabledLanes|=h,os|=h,u=4;break t}h=Bn,Bn=u,h!==null&&(Bn===null?Bn=h:Bn.push.apply(Bn,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){Zs(e,0),ya(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:ya(o,n,Yn,!ga);break t;case 2:Bn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Cl+300-_t(),10<u)){if(ya(o,n,Yn,!ga),Re(o,0,!0)!==0)break t;qi=n,o.timeoutHandle=_g(Vm.bind(null,o,a,Bn,Dl,yf,n,Yn,os,Ys,ga,h,"Throttled",-0,0),u);break t}Vm(o,a,Bn,Dl,yf,n,Yn,os,Ys,ga,h,null,-0,0)}}break}while(!0);Ei(e)}function Vm(e,n,a,o,u,h,S,A,I,tt,ft,xt,nt,lt){if(e.timeoutHandle=-1,xt=n.subtreeFlags,xt&8192||(xt&16785408)===16785408){xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Li},Om(n,h,xt);var Ht=(h&62914560)===h?Cl-_t():(h&4194048)===h?Im-_t():0;if(Ht=Sy(xt,Ht),Ht!==null){qi=h,e.cancelPendingCommit=Ht(Km.bind(null,e,n,h,a,o,u,S,A,I,ft,xt,null,nt,lt)),ya(e,h,S,!tt);return}}Km(e,n,h,a,o,u,S,A,I)}function Bx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!Vn(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ya(e,n,a,o){n&=~xf,n&=~os,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-ye(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&Nr(e,a,n)}function Ll(){return(Ae&6)===0?(mo(0),!1):!0}function Tf(){if(me!==null){if(Ce===0)var e=me.return;else e=me,Pi=Ja=null,Fu(e),Fs=null,Kr=0,e=me;for(;e!==null;)xm(e.alternate,e),e=e.return;me=null}}function Zs(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,iy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),qi=0,Tf(),ze=e,me=a=Ni(e.current,null),ve=n,Ce=0,qn=null,ga=!1,qs=De(e,n),_f=!1,Ys=Yn=xf=os=va=qe=0,Bn=ho=null,yf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-ye(o),h=1<<u;n|=e[u],o&=~h}return Wi=n,Jo(),a}function km(e,n){oe=null,z.H=ao,n===Is||n===rl?(n=sp(),Ce=3):n===Ru?(n=sp(),Ce=4):Ce=n===ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,qn=n,me===null&&(qe=1,yl(e,ti(n,e.current)))}function Xm(){var e=Xn.current;return e===null?!0:(ve&4194048)===ve?ai===null:(ve&62914560)===ve||(ve&536870912)!==0?e===ai:!1}function Wm(){var e=z.H;return z.H=ao,e===null?ao:e}function qm(){var e=z.A;return z.A=Px,e}function Ul(){qe=4,ga||(ve&4194048)!==ve&&Xn.current!==null||(qs=!0),(va&134217727)===0&&(os&134217727)===0||ze===null||ya(ze,ve,Yn,!1)}function bf(e,n,a){var o=Ae;Ae|=2;var u=Wm(),h=qm();(ze!==e||ve!==n)&&(Dl=null,Zs(e,n)),n=!1;var S=qe;t:do try{if(Ce!==0&&me!==null){var A=me,I=qn;switch(Ce){case 8:Tf(),S=6;break t;case 3:case 2:case 9:case 6:Xn.current===null&&(n=!0);var tt=Ce;if(Ce=0,qn=null,Ks(e,A,I,tt),a&&qs){S=0;break t}break;default:tt=Ce,Ce=0,qn=null,Ks(e,A,I,tt)}}Ix(),S=qe;break}catch(ft){km(e,ft)}while(!0);return n&&e.shellSuspendCounter++,Pi=Ja=null,Ae=o,z.H=u,z.A=h,me===null&&(ze=null,ve=0,Jo()),S}function Ix(){for(;me!==null;)Ym(me)}function Fx(e,n){var a=Ae;Ae|=2;var o=Wm(),u=qm();ze!==e||ve!==n?(Dl=null,wl=_t()+500,Zs(e,n)):qs=De(e,n);t:do try{if(Ce!==0&&me!==null){n=me;var h=qn;e:switch(Ce){case 1:Ce=0,qn=null,Ks(e,n,h,1);break;case 2:case 9:if(ip(h)){Ce=0,qn=null,jm(n);break}n=function(){Ce!==2&&Ce!==9||ze!==e||(Ce=7),Ei(e)},h.then(n,n);break t;case 3:Ce=7;break t;case 4:Ce=5;break t;case 7:ip(h)?(Ce=0,qn=null,jm(n)):(Ce=0,qn=null,Ks(e,n,h,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var A=me;if(S?Ng(S):A.stateNode.complete){Ce=0,qn=null;var I=A.sibling;if(I!==null)me=I;else{var tt=A.return;tt!==null?(me=tt,Nl(tt)):me=null}break e}}Ce=0,qn=null,Ks(e,n,h,5);break;case 6:Ce=0,qn=null,Ks(e,n,h,6);break;case 8:Tf(),qe=6;break t;default:throw Error(s(462))}}Hx();break}catch(ft){km(e,ft)}while(!0);return Pi=Ja=null,z.H=o,z.A=u,Ae=a,me!==null?0:(ze=null,ve=0,Jo(),qe)}function Hx(){for(;me!==null&&!St();)Ym(me)}function Ym(e){var n=vm(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?Nl(e):me=n}function jm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=fm(a,n,n.pendingProps,n.type,void 0,ve);break;case 11:n=fm(a,n,n.pendingProps,n.type.render,n.ref,ve);break;case 5:Fu(n);default:xm(a,n),n=me=qd(n,Wi),n=vm(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?Nl(e):me=n}function Ks(e,n,a,o){Pi=Ja=null,Fu(n),Fs=null,Kr=0;var u=n.return;try{if(Cx(e,u,n,a,ve)){qe=1,yl(e,ti(a,e.current)),me=null;return}}catch(h){if(u!==null)throw me=u,h;qe=1,yl(e,ti(a,e.current)),me=null;return}n.flags&32768?(Se||o===1?e=!0:qs||(ve&536870912)!==0?e=!1:(ga=e=!0,(o===2||o===9||o===3||o===6)&&(o=Xn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Zm(n,e)):Nl(n)}function Nl(e){var n=e;do{if((n.flags&32768)!==0){Zm(n,ga);return}e=n.return;var a=Lx(n.alternate,n,Wi);if(a!==null){me=a;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);qe===0&&(qe=5)}function Zm(e,n){do{var a=Ux(e.alternate,e);if(a!==null){a.flags&=32767,me=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=a}while(e!==null);qe=6,me=null}function Km(e,n,a,o,u,h,S,A,I){e.cancelPendingCommit=null;do Ol();while(rn!==0);if((Ae&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=hu,ko(e,a,h,S,A,I),e===ze&&(me=ze=null,ve=0),js=n,xa=e,qi=a,Sf=h,Mf=u,Fm=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xx(ie,function(){return eg(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,u=W.p,W.p=2,S=Ae,Ae|=4;try{Nx(e,n,a)}finally{Ae=S,W.p=u,z.T=o}}rn=1,Qm(),Jm(),$m()}}function Qm(){if(rn===1){rn=0;var e=xa,n=js,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=W.p;W.p=2;var u=Ae;Ae|=4;try{Lm(n,e);var h=Bf,S=Bd(e.containerInfo),A=h.focusedElem,I=h.selectionRange;if(S!==A&&A&&A.ownerDocument&&zd(A.ownerDocument.documentElement,A)){if(I!==null&&ou(A)){var tt=I.start,ft=I.end;if(ft===void 0&&(ft=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(ft,A.value.length);else{var xt=A.ownerDocument||document,nt=xt&&xt.defaultView||window;if(nt.getSelection){var lt=nt.getSelection(),Ht=A.textContent.length,$t=Math.min(I.start,Ht),Ne=I.end===void 0?$t:Math.min(I.end,Ht);!lt.extend&&$t>Ne&&(S=Ne,Ne=$t,$t=S);var Y=Pd(A,$t),G=Pd(A,Ne);if(Y&&G&&(lt.rangeCount!==1||lt.anchorNode!==Y.node||lt.anchorOffset!==Y.offset||lt.focusNode!==G.node||lt.focusOffset!==G.offset)){var $=xt.createRange();$.setStart(Y.node,Y.offset),lt.removeAllRanges(),$t>Ne?(lt.addRange($),lt.extend(G.node,G.offset)):($.setEnd(G.node,G.offset),lt.addRange($))}}}}for(xt=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&xt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<xt.length;A++){var mt=xt[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}ql=!!zf,Bf=zf=null}finally{Ae=u,W.p=o,z.T=a}}e.current=n,rn=2}}function Jm(){if(rn===2){rn=0;var e=xa,n=js,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=W.p;W.p=2;var u=Ae;Ae|=4;try{Am(e,n.alternate,n)}finally{Ae=u,W.p=o,z.T=a}}rn=3}}function $m(){if(rn===4||rn===3){rn=0,At();var e=xa,n=js,a=qi,o=Fm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?rn=5:(rn=0,js=xa=null,tg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(_a=null),na(a),n=n.stateNode,Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(It,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,u=W.p,W.p=2,z.T=null;try{for(var h=e.onRecoverableError,S=0;S<o.length;S++){var A=o[S];h(A.value,{componentStack:A.stack})}}finally{z.T=n,W.p=u}}(qi&3)!==0&&Ol(),Ei(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Ef?po++:(po=0,Ef=e):po=0,mo(0)}}function tg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,jr(n)))}function Ol(){return Qm(),Jm(),$m(),eg()}function eg(){if(rn!==5)return!1;var e=xa,n=Sf;Sf=0;var a=na(qi),o=z.T,u=W.p;try{W.p=32>a?32:a,z.T=null,a=Mf,Mf=null;var h=xa,S=qi;if(rn=0,js=xa=null,qi=0,(Ae&6)!==0)throw Error(s(331));var A=Ae;if(Ae|=4,zm(h.current),Nm(h,h.current,S,a),Ae=A,mo(0,!1),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(It,h)}catch{}return!0}finally{W.p=u,z.T=o,tg(e,n)}}function ng(e,n,a){n=ti(a,n),n=tf(e.stateNode,n,2),e=ha(e,n,2),e!==null&&(Ye(e,2),Ei(e))}function we(e,n,a){if(e.tag===3)ng(e,e,a);else for(;n!==null;){if(n.tag===3){ng(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(_a===null||!_a.has(o))){e=ti(a,e),a=im(2),o=ha(n,a,2),o!==null&&(am(a,o,n,e),Ye(o,2),Ei(o));break}}n=n.return}}function Af(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new zx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(_f=!0,u.add(a),e=Gx.bind(null,e,n,a),n.then(e,e))}function Gx(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ze===e&&(ve&a)===a&&(qe===4||qe===3&&(ve&62914560)===ve&&300>_t()-Cl?(Ae&2)===0&&Zs(e,0):xf|=a,Ys===ve&&(Ys=0)),Ei(e)}function ig(e,n){n===0&&(n=Me()),e=Za(e,n),e!==null&&(Ye(e,n),Ei(e))}function Vx(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),ig(e,a)}function kx(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),ig(e,a)}function Xx(e,n){return R(e,n)}var Pl=null,Qs=null,Rf=!1,zl=!1,Cf=!1,Sa=0;function Ei(e){e!==Qs&&e.next===null&&(Qs===null?Pl=Qs=e:Qs=Qs.next=e),zl=!0,Rf||(Rf=!0,qx())}function mo(e,n){if(!Cf&&zl){Cf=!0;do for(var a=!1,o=Pl;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,A=o.pingedLanes;h=(1<<31-ye(42|e)+1)-1,h&=u&~(S&~A),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,og(o,h))}else h=ve,h=Re(o,o===ze?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||De(o,h)||(a=!0,og(o,h));o=o.next}while(a);Cf=!1}}function Wx(){ag()}function ag(){zl=Rf=!1;var e=0;Sa!==0&&ny()&&(e=Sa);for(var n=_t(),a=null,o=Pl;o!==null;){var u=o.next,h=sg(o,n);h===0?(o.next=null,a===null?Pl=u:a.next=u,u===null&&(Qs=a)):(a=o,(e!==0||(h&3)!==0)&&(zl=!0)),o=u}rn!==0&&rn!==5||mo(e),Sa!==0&&(Sa=0)}function sg(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-ye(h),A=1<<S,I=u[S];I===-1?((A&a)===0||(A&o)!==0)&&(u[S]=cn(A,n)):I<=n&&(e.expiredLanes|=A),h&=~A}if(n=ze,a=ve,a=Re(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ce===2||Ce===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&it(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||De(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&it(o),na(a)){case 2:case 8:a=Ut;break;case 32:a=ie;break;case 268435456:a=Wt;break;default:a=ie}return o=rg.bind(null,e),a=R(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&it(o),e.callbackPriority=2,e.callbackNode=null,2}function rg(e,n){if(rn!==0&&rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ol()&&e.callbackNode!==a)return null;var o=ve;return o=Re(e,e===ze?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Gm(e,o,n),sg(e,_t()),e.callbackNode!=null&&e.callbackNode===a?rg.bind(null,e):null)}function og(e,n){if(Ol())return null;Gm(e,n,!0)}function qx(){ay(function(){(Ae&6)!==0?R(Ot,Wx):ag()})}function wf(){if(Sa===0){var e=zs;e===0&&(e=vt,vt<<=1,(vt&261888)===0&&(vt=256)),Sa=e}return Sa}function lg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Xo(""+e)}function cg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Yx(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=lg((u[_n]||null).action),S=o.submitter;S&&(n=(n=S[_n]||null)?lg(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var A=new jo("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Sa!==0){var I=S?cg(u,S):new FormData(u);ju(a,{pending:!0,data:I,method:u.method,action:h},null,I)}}else typeof h=="function"&&(A.preventDefault(),I=S?cg(u,S):new FormData(u),ju(a,{pending:!0,data:I,method:u.method,action:h},h,I))},currentTarget:u}]})}}for(var Df=0;Df<fu.length;Df++){var Lf=fu[Df],jx=Lf.toLowerCase(),Zx=Lf[0].toUpperCase()+Lf.slice(1);ci(jx,"on"+Zx)}ci(Hd,"onAnimationEnd"),ci(Gd,"onAnimationIteration"),ci(Vd,"onAnimationStart"),ci("dblclick","onDoubleClick"),ci("focusin","onFocus"),ci("focusout","onBlur"),ci(fx,"onTransitionRun"),ci(hx,"onTransitionStart"),ci(dx,"onTransitionCancel"),ci(kd,"onTransitionEnd"),xn("onMouseEnter",["mouseout","mouseover"]),xn("onMouseLeave",["mouseout","mouseover"]),xn("onPointerEnter",["pointerout","pointerover"]),xn("onPointerLeave",["pointerout","pointerover"]),je("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),je("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),je("onBeforeInput",["compositionend","keypress","textInput","paste"]),je("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),je("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),je("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function ug(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var A=o[S],I=A.instance,tt=A.currentTarget;if(A=A.listener,I!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=tt;try{h(u)}catch(ft){Qo(ft)}u.currentTarget=null,h=I}else for(S=0;S<o.length;S++){if(A=o[S],I=A.instance,tt=A.currentTarget,A=A.listener,I!==h&&u.isPropagationStopped())break t;h=A,u.currentTarget=tt;try{h(u)}catch(ft){Qo(ft)}u.currentTarget=null,h=I}}}}function ge(e,n){var a=n[Q];a===void 0&&(a=n[Q]=new Set);var o=e+"__bubble";a.has(o)||(fg(n,e,2,!1),a.add(o))}function Uf(e,n,a){var o=0;n&&(o|=4),fg(a,e,o,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function Nf(e){if(!e[Bl]){e[Bl]=!0,Ve.forEach(function(a){a!=="selectionchange"&&(Kx.has(a)||Uf(a,!1,e),Uf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,Uf("selectionchange",!1,n))}}function fg(e,n,a,o){switch(Hg(n)){case 2:var u=Ty;break;case 8:u=by;break;default:u=jf}a=u.bind(null,n,a,e),u=void 0,!Jc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Of(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var A=o.stateNode.containerInfo;if(A===u)break;if(S===4)for(S=o.return;S!==null;){var I=S.tag;if((I===3||I===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;A!==null;){if(S=Gt(A),S===null)return;if(I=S.tag,I===5||I===6||I===26||I===27){o=h=S;continue t}A=A.parentNode}}o=o.return}gd(function(){var tt=h,ft=Kc(a),xt=[];t:{var nt=Xd.get(e);if(nt!==void 0){var lt=jo,Ht=e;switch(e){case"keypress":if(qo(a)===0)break t;case"keydown":case"keyup":lt=k_;break;case"focusin":Ht="focus",lt=nu;break;case"focusout":Ht="blur",lt=nu;break;case"beforeblur":case"afterblur":lt=nu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=L_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=q_;break;case Hd:case Gd:case Vd:lt=O_;break;case kd:lt=j_;break;case"scroll":case"scrollend":lt=w_;break;case"wheel":lt=K_;break;case"copy":case"cut":case"paste":lt=z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Sd;break;case"toggle":case"beforetoggle":lt=J_}var $t=(n&4)!==0,Ne=!$t&&(e==="scroll"||e==="scrollend"),Y=$t?nt!==null?nt+"Capture":null:nt;$t=[];for(var G=tt,$;G!==null;){var mt=G;if($=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||$===null||Y===null||(mt=Br(G,Y),mt!=null&&$t.push(vo(G,mt,$))),Ne)break;G=G.return}0<$t.length&&(nt=new lt(nt,Ht,null,a,ft),xt.push({event:nt,listeners:$t}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",nt&&a!==Zc&&(Ht=a.relatedTarget||a.fromElement)&&(Gt(Ht)||Ht[w]))break t;if((lt||nt)&&(nt=ft.window===ft?ft:(nt=ft.ownerDocument)?nt.defaultView||nt.parentWindow:window,lt?(Ht=a.relatedTarget||a.toElement,lt=tt,Ht=Ht?Gt(Ht):null,Ht!==null&&(Ne=c(Ht),$t=Ht.tag,Ht!==Ne||$t!==5&&$t!==27&&$t!==6)&&(Ht=null)):(lt=null,Ht=tt),lt!==Ht)){if($t=xd,mt="onMouseLeave",Y="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&($t=Sd,mt="onPointerLeave",Y="onPointerEnter",G="pointer"),Ne=lt==null?nt:ee(lt),$=Ht==null?nt:ee(Ht),nt=new $t(mt,G+"leave",lt,a,ft),nt.target=Ne,nt.relatedTarget=$,mt=null,Gt(ft)===tt&&($t=new $t(Y,G+"enter",Ht,a,ft),$t.target=$,$t.relatedTarget=Ne,mt=$t),Ne=mt,lt&&Ht)e:{for($t=Qx,Y=lt,G=Ht,$=0,mt=Y;mt;mt=$t(mt))$++;mt=0;for(var Qt=G;Qt;Qt=$t(Qt))mt++;for(;0<$-mt;)Y=$t(Y),$--;for(;0<mt-$;)G=$t(G),mt--;for(;$--;){if(Y===G||G!==null&&Y===G.alternate){$t=Y;break e}Y=$t(Y),G=$t(G)}$t=null}else $t=null;lt!==null&&hg(xt,nt,lt,$t,!1),Ht!==null&&Ne!==null&&hg(xt,Ne,Ht,$t,!0)}}t:{if(nt=tt?ee(tt):window,lt=nt.nodeName&&nt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&nt.type==="file")var Te=wd;else if(Rd(nt))if(Dd)Te=lx;else{Te=rx;var kt=sx}else lt=nt.nodeName,!lt||lt.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&jc(tt.elementType)&&(Te=wd):Te=ox;if(Te&&(Te=Te(e,tt))){Cd(xt,Te,a,ft);break t}kt&&kt(e,nt,tt),e==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&Yc(nt,"number",nt.value)}switch(kt=tt?ee(tt):window,e){case"focusin":(Rd(kt)||kt.contentEditable==="true")&&(Cs=kt,lu=tt,Wr=null);break;case"focusout":Wr=lu=Cs=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,Id(xt,a,ft);break;case"selectionchange":if(ux)break;case"keydown":case"keyup":Id(xt,a,ft)}var ce;if(au)t:{switch(e){case"compositionstart":var _e="onCompositionStart";break t;case"compositionend":_e="onCompositionEnd";break t;case"compositionupdate":_e="onCompositionUpdate";break t}_e=void 0}else Rs?bd(e,a)&&(_e="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(_e="onCompositionStart");_e&&(Md&&a.locale!=="ko"&&(Rs||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Rs&&(ce=vd()):(sa=ft,$c="value"in sa?sa.value:sa.textContent,Rs=!0)),kt=Il(tt,_e),0<kt.length&&(_e=new yd(_e,e,null,a,ft),xt.push({event:_e,listeners:kt}),ce?_e.data=ce:(ce=Ad(a),ce!==null&&(_e.data=ce)))),(ce=tx?ex(e,a):nx(e,a))&&(_e=Il(tt,"onBeforeInput"),0<_e.length&&(kt=new yd("onBeforeInput","beforeinput",null,a,ft),xt.push({event:kt,listeners:_e}),kt.data=ce)),Yx(xt,e,tt,a,ft)}ug(xt,n)})}function vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Il(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Br(e,a),u!=null&&o.unshift(vo(e,u,h)),u=Br(e,n),u!=null&&o.push(vo(e,u,h))),e.tag===3)return o;e=e.return}return[]}function Qx(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hg(e,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var A=a,I=A.alternate,tt=A.stateNode;if(A=A.tag,I!==null&&I===o)break;A!==5&&A!==26&&A!==27||tt===null||(I=tt,u?(tt=Br(a,h),tt!=null&&S.unshift(vo(a,tt,I))):u||(tt=Br(a,h),tt!=null&&S.push(vo(a,tt,I)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var Jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function dg(e){return(typeof e=="string"?e:""+e).replace(Jx,`
`).replace($x,"")}function pg(e,n){return n=dg(n),dg(e)===n}function Ue(e,n,a,o,u,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Ts(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Ts(e,""+o);break;case"className":Xa(e,"class",o);break;case"tabIndex":Xa(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Xa(e,a,o);break;case"style":pd(e,o,h);break;case"data":if(n!=="object"){Xa(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Xo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ue(e,n,"name",u.name,u,null),Ue(e,n,"formEncType",u.formEncType,u,null),Ue(e,n,"formMethod",u.formMethod,u,null),Ue(e,n,"formTarget",u.formTarget,u,null)):(Ue(e,n,"encType",u.encType,u,null),Ue(e,n,"method",u.method,u,null),Ue(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Xo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Li);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Xo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ge("beforetoggle",e),ge("toggle",e),Jn(e,"popover",o);break;case"xlinkActuate":An(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":An(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":An(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":An(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":An(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":An(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":An(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":An(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":An(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Jn(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=R_.get(a)||a,Jn(e,a,o))}}function Pf(e,n,a,o,u,h){switch(a){case"style":pd(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Ts(e,o):(typeof o=="number"||typeof o=="bigint")&&Ts(e,""+o);break;case"onScroll":o!=null&&ge("scroll",e);break;case"onScrollEnd":o!=null&&ge("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Li);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!an.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),h=e[_n]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Jn(e,a,o)}}}function gn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ue(e,n,h,S,a,null)}}u&&Ue(e,n,"srcSet",a.srcSet,a,null),o&&Ue(e,n,"src",a.src,a,null);return;case"input":ge("invalid",e);var A=h=S=u=null,I=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":S=ft;break;case"checked":I=ft;break;case"defaultChecked":tt=ft;break;case"value":h=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Ue(e,n,o,ft,a,null)}}ud(e,h,A,I,tt,S,u,!1);return;case"select":ge("invalid",e),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":h=A;break;case"defaultValue":S=A;break;case"multiple":o=A;default:Ue(e,n,u,A,a,null)}n=h,a=S,e.multiple=!!o,n!=null?Es(e,!!o,n,!1):a!=null&&Es(e,!!o,a,!0);return;case"textarea":ge("invalid",e),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(A=a[S],A!=null))switch(S){case"value":o=A;break;case"defaultValue":u=A;break;case"children":h=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ue(e,n,S,A,a,null)}hd(e,o,u,h);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ue(e,n,I,o,a,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(o=0;o<go.length;o++)ge(go[o],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ue(e,n,tt,o,a,null)}return;default:if(jc(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Pf(e,n,ft,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ue(e,n,A,o,a,null))}function ty(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,A=null,I=null,tt=null,ft=null;for(lt in a){var xt=a[lt];if(a.hasOwnProperty(lt)&&xt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":I=xt;default:o.hasOwnProperty(lt)||Ue(e,n,lt,null,o,xt)}}for(var nt in o){var lt=o[nt];if(xt=a[nt],o.hasOwnProperty(nt)&&(lt!=null||xt!=null))switch(nt){case"type":h=lt;break;case"name":u=lt;break;case"checked":tt=lt;break;case"defaultChecked":ft=lt;break;case"value":S=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==xt&&Ue(e,n,nt,lt,o,xt)}}qc(e,S,A,I,tt,ft,h,u);return;case"select":lt=S=A=nt=null;for(h in a)if(I=a[h],a.hasOwnProperty(h)&&I!=null)switch(h){case"value":break;case"multiple":lt=I;default:o.hasOwnProperty(h)||Ue(e,n,h,null,o,I)}for(u in o)if(h=o[u],I=a[u],o.hasOwnProperty(u)&&(h!=null||I!=null))switch(u){case"value":nt=h;break;case"defaultValue":A=h;break;case"multiple":S=h;default:h!==I&&Ue(e,n,u,h,o,I)}n=A,a=S,o=lt,nt!=null?Es(e,!!a,nt,!1):!!o!=!!a&&(n!=null?Es(e,!!a,n,!0):Es(e,!!a,a?[]:"",!1));return;case"textarea":lt=nt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ue(e,n,A,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":nt=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ue(e,n,S,u,o,h)}fd(e,nt,lt);return;case"option":for(var Ht in a)if(nt=a[Ht],a.hasOwnProperty(Ht)&&nt!=null&&!o.hasOwnProperty(Ht))switch(Ht){case"selected":e.selected=!1;break;default:Ue(e,n,Ht,null,o,nt)}for(I in o)if(nt=o[I],lt=a[I],o.hasOwnProperty(I)&&nt!==lt&&(nt!=null||lt!=null))switch(I){case"selected":e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol";break;default:Ue(e,n,I,nt,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)nt=a[$t],a.hasOwnProperty($t)&&nt!=null&&!o.hasOwnProperty($t)&&Ue(e,n,$t,null,o,nt);for(tt in o)if(nt=o[tt],lt=a[tt],o.hasOwnProperty(tt)&&nt!==lt&&(nt!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Ue(e,n,tt,nt,o,lt)}return;default:if(jc(n)){for(var Ne in a)nt=a[Ne],a.hasOwnProperty(Ne)&&nt!==void 0&&!o.hasOwnProperty(Ne)&&Pf(e,n,Ne,void 0,o,nt);for(ft in o)nt=o[ft],lt=a[ft],!o.hasOwnProperty(ft)||nt===lt||nt===void 0&&lt===void 0||Pf(e,n,ft,nt,o,lt);return}}for(var Y in a)nt=a[Y],a.hasOwnProperty(Y)&&nt!=null&&!o.hasOwnProperty(Y)&&Ue(e,n,Y,null,o,nt);for(xt in o)nt=o[xt],lt=a[xt],!o.hasOwnProperty(xt)||nt===lt||nt==null&&lt==null||Ue(e,n,xt,nt,o,lt)}function mg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ey(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,S=u.initiatorType,A=u.duration;if(h&&A&&mg(S)){for(S=0,A=u.responseEnd,o+=1;o<a.length;o++){var I=a[o],tt=I.startTime;if(tt>A)break;var ft=I.transferSize,xt=I.initiatorType;ft&&mg(xt)&&(I=I.responseEnd,S+=ft*(I<A?1:(A-tt)/(I-tt)))}if(--o,n+=8*(h+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zf=null,Bf=null;function Fl(e){return e.nodeType===9?e:e.ownerDocument}function gg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function If(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ff=null;function ny(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var _g=typeof setTimeout=="function"?setTimeout:void 0,iy=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,ay=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(e){return xg.resolve(null).then(e).catch(sy)}:_g;function sy(e){setTimeout(function(){throw e})}function Ma(e){return e==="head"}function yg(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),er(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")_o(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,_o(a);for(var h=a.firstChild;h;){var S=h.nextSibling,A=h.nodeName;h[Lt]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&_o(e.ownerDocument.body);a=u}while(a);er(n)}function Sg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Hf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Hf(a),Vt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ry(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Lt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=si(e.nextSibling),e===null)break}return null}function oy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=si(e.nextSibling),e===null))return null;return e}function Mg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=si(e.nextSibling),e===null))return null;return e}function Gf(e){return e.data==="$?"||e.data==="$~"}function Vf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ly(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function si(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var kf=null;function Eg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return si(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Tg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function bg(e,n,a){switch(n=Fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function _o(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Vt(e)}var ri=new Map,Ag=new Set;function Hl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Yi=W.d;W.d={f:cy,r:uy,D:fy,C:hy,L:dy,m:py,X:gy,S:my,M:vy};function cy(){var e=Yi.f(),n=Ll();return e||n}function uy(e){var n=Kt(e);n!==null&&n.tag===5&&n.type==="form"?kp(n):Yi.r(e)}var Js=typeof document>"u"?null:document;function Rg(e,n,a){var o=Js;if(o&&typeof n=="string"&&n){var u=Cn(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Ag.has(u)||(Ag.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),gn(n,"link",e),qt(n),o.head.appendChild(n)))}}function fy(e){Yi.D(e),Rg("dns-prefetch",e,null)}function hy(e,n){Yi.C(e,n),Rg("preconnect",e,n)}function dy(e,n,a){Yi.L(e,n,a);var o=Js;if(o&&e&&n){var u='link[rel="preload"][as="'+Cn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Cn(a.imageSizes)+'"]')):u+='[href="'+Cn(e)+'"]';var h=u;switch(n){case"style":h=$s(e);break;case"script":h=tr(e)}ri.has(h)||(e=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ri.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(xo(h))||n==="script"&&o.querySelector(yo(h))||(n=o.createElement("link"),gn(n,"link",e),qt(n),o.head.appendChild(n)))}}function py(e,n){Yi.m(e,n);var a=Js;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Cn(o)+'"][href="'+Cn(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=tr(e)}if(!ri.has(h)&&(e=v({rel:"modulepreload",href:e},n),ri.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(yo(h)))return}o=a.createElement("link"),gn(o,"link",e),qt(o),a.head.appendChild(o)}}}function my(e,n,a){Yi.S(e,n,a);var o=Js;if(o&&e){var u=ne(o).hoistableStyles,h=$s(e);n=n||"default";var S=u.get(h);if(!S){var A={loading:0,preload:null};if(S=o.querySelector(xo(h)))A.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ri.get(h))&&Xf(e,a);var I=S=o.createElement("link");qt(I),gn(I,"link",e),I._p=new Promise(function(tt,ft){I.onload=tt,I.onerror=ft}),I.addEventListener("load",function(){A.loading|=1}),I.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Gl(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:A},u.set(h,S)}}}function gy(e,n){Yi.X(e,n);var a=Js;if(a&&e){var o=ne(a).hoistableScripts,u=tr(e),h=o.get(u);h||(h=a.querySelector(yo(u)),h||(e=v({src:e,async:!0},n),(n=ri.get(u))&&Wf(e,n),h=a.createElement("script"),qt(h),gn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function vy(e,n){Yi.M(e,n);var a=Js;if(a&&e){var o=ne(a).hoistableScripts,u=tr(e),h=o.get(u);h||(h=a.querySelector(yo(u)),h||(e=v({src:e,async:!0,type:"module"},n),(n=ri.get(u))&&Wf(e,n),h=a.createElement("script"),qt(h),gn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function Cg(e,n,a,o){var u=(u=Tt.current)?Hl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=$s(a.href),a=ne(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=$s(a.href);var h=ne(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(xo(e)))&&!h._p&&(S.instance=h,S.state.loading=5),ri.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ri.set(e,a),h||_y(u,e,a,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=tr(a),a=ne(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function $s(e){return'href="'+Cn(e)+'"'}function xo(e){return'link[rel="stylesheet"]['+e+"]"}function wg(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function _y(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),gn(n,"link",a),qt(n),e.head.appendChild(n))}function tr(e){return'[src="'+Cn(e)+'"]'}function yo(e){return"script[async]"+e}function Dg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Cn(a.href)+'"]');if(o)return n.instance=o,qt(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),qt(o),gn(o,"style",u),Gl(o,a.precedence,e),n.instance=o;case"stylesheet":u=$s(a.href);var h=e.querySelector(xo(u));if(h)return n.state.loading|=4,n.instance=h,qt(h),h;o=wg(a),(u=ri.get(u))&&Xf(o,u),h=(e.ownerDocument||e).createElement("link"),qt(h);var S=h;return S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),gn(h,"link",o),n.state.loading|=4,Gl(h,a.precedence,e),n.instance=h;case"script":return h=tr(a.src),(u=e.querySelector(yo(h)))?(n.instance=u,qt(u),u):(o=a,(u=ri.get(h))&&(o=v({},a),Wf(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),qt(u),gn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Gl(o,a.precedence,e));return n.instance}function Gl(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var A=o[S];if(A.dataset.precedence===n)h=A;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Xf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Vl=null;function Lg(e,n,a){if(Vl===null){var o=new Map,u=Vl=new Map;u.set(a,o)}else u=Vl,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Lt]||h[nn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var A=o.get(S);A?A.push(h):o.set(S,[h])}}return o}function Ug(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function xy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Ng(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function yy(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=$s(o.href),h=n.querySelector(xo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=kl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,qt(h);return}h=n.ownerDocument||n,o=wg(o),(u=ri.get(u))&&Xf(o,u),h=h.createElement("link"),qt(h);var S=h;S._p=new Promise(function(A,I){S.onload=A,S.onerror=I}),gn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=kl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var qf=0;function Sy(e,n){return e.stylesheets&&e.count===0&&Wl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&qf===0&&(qf=62500*ey());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>qf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Xl=null;function Wl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Xl=new Map,n.forEach(My,e),Xl=null,kl.call(e))}function My(e,n){if(!(n.state.loading&4)){var a=Xl.get(e);if(a)var o=a.get(null);else{a=new Map,Xl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=kl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var So={$$typeof:C,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Ey(e,n,a,o,u,h,S,A,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Un(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Un(0),this.hiddenUpdates=Un(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function Og(e,n,a,o,u,h,S,A,I,tt,ft,xt){return e=new Ey(e,n,a,S,I,tt,ft,xt,A),n=1,h===!0&&(n|=24),h=kn(3,null,null,n),e.current=h,h.stateNode=e,n=Tu(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Cu(h),e}function Pg(e){return e?(e=Ls,e):Ls}function zg(e,n,a,o,u,h){u=Pg(u),o.context===null?o.context=u:o.pendingContext=u,o=fa(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=ha(e,o,n),a!==null&&(In(a,e,n),Jr(a,e,n))}function Bg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Yf(e,n){Bg(e,n),(e=e.alternate)&&Bg(e,n)}function Ig(e){if(e.tag===13||e.tag===31){var n=Za(e,67108864);n!==null&&In(n,e,67108864),Yf(e,67108864)}}function Fg(e){if(e.tag===13||e.tag===31){var n=jn();n=Ms(n);var a=Za(e,n);a!==null&&In(a,e,n),Yf(e,n)}}var ql=!0;function Ty(e,n,a,o){var u=z.T;z.T=null;var h=W.p;try{W.p=2,jf(e,n,a,o)}finally{W.p=h,z.T=u}}function by(e,n,a,o){var u=z.T;z.T=null;var h=W.p;try{W.p=8,jf(e,n,a,o)}finally{W.p=h,z.T=u}}function jf(e,n,a,o){if(ql){var u=Zf(o);if(u===null)Of(e,n,o,Yl,a),Gg(e,o);else if(Ry(u,e,n,a,o))o.stopPropagation();else if(Gg(e,o),n&4&&-1<Ay.indexOf(e)){for(;u!==null;){var h=Kt(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=fe(h.pendingLanes);if(S!==0){var A=h;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var I=1<<31-ye(S);A.entanglements[1]|=I,S&=~I}Ei(h),(Ae&6)===0&&(wl=_t()+500,mo(0))}}break;case 31:case 13:A=Za(h,2),A!==null&&In(A,h,2),Ll(),Yf(h,2)}if(h=Zf(o),h===null&&Of(e,n,o,Yl,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Of(e,n,o,null,a)}}function Zf(e){return e=Kc(e),Kf(e)}var Yl=null;function Kf(e){if(Yl=null,e=Gt(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Yl=e,null}function Hg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(jt()){case Ot:return 2;case Ut:return 8;case ie:case wt:return 32;case Wt:return 268435456;default:return 32}default:return 32}}var Qf=!1,Ea=null,Ta=null,ba=null,Mo=new Map,Eo=new Map,Aa=[],Ay="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gg(e,n){switch(e){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":Mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Eo.delete(n.pointerId)}}function To(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Kt(n),n!==null&&Ig(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Ry(e,n,a,o,u){switch(n){case"focusin":return Ea=To(Ea,e,n,a,o,u),!0;case"dragenter":return Ta=To(Ta,e,n,a,o,u),!0;case"mouseover":return ba=To(ba,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return Mo.set(h,To(Mo.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Eo.set(h,To(Eo.get(h)||null,e,n,a,o,u)),!0}return!1}function Vg(e){var n=Gt(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,zr(e.priority,function(){Fg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,zr(e.priority,function(){Fg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Zf(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Zc=o,a.target.dispatchEvent(o),Zc=null}else return n=Kt(a),n!==null&&Ig(n),e.blockedOn=a,!1;n.shift()}return!0}function kg(e,n,a){jl(e)&&a.delete(n)}function Cy(){Qf=!1,Ea!==null&&jl(Ea)&&(Ea=null),Ta!==null&&jl(Ta)&&(Ta=null),ba!==null&&jl(ba)&&(ba=null),Mo.forEach(kg),Eo.forEach(kg)}function Zl(e,n){e.blockedOn===n&&(e.blockedOn=null,Qf||(Qf=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Cy)))}var Kl=null;function Xg(e){Kl!==e&&(Kl=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Kl===e&&(Kl=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Kf(o||a)===null)continue;break}var h=Kt(a);h!==null&&(e.splice(n,3),n-=3,ju(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function er(e){function n(I){return Zl(I,e)}Ea!==null&&Zl(Ea,e),Ta!==null&&Zl(Ta,e),ba!==null&&Zl(ba,e),Mo.forEach(n),Eo.forEach(n);for(var a=0;a<Aa.length;a++){var o=Aa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)Vg(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[_n]||null;if(typeof h=="function")S||Xg(a);else if(S){var A=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[_n]||null)A=S.formAction;else if(Kf(u)!==null)continue}else A=S.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Xg(a)}}}function Wg(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Jf(e){this._internalRoot=e}Ql.prototype.render=Jf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=jn();zg(a,o,e,n,null,null)},Ql.prototype.unmount=Jf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;zg(e.current,2,null,e,null,null),Ll(),n[w]=null}};function Ql(e){this._internalRoot=e}Ql.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Aa.length&&n!==0&&n<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&Vg(e)}};var qg=t.version;if(qg!=="19.2.4")throw Error(s(527,qg,"19.2.4"));W.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var wy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{It=Jl.inject(wy),Jt=Jl}catch{}}return Ao.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=$p,h=tm,S=em;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Og(e,1,!1,null,null,a,o,null,u,h,S,Wg),e[w]=n.current,Nf(e),new Jf(n)},Ao.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=$p,S=tm,A=em,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=Og(e,1,!0,n,a??null,o,u,I,h,S,A,Wg),n.context=Pg(null),a=n.current,o=jn(),o=Ms(o),u=fa(o),u.callback=null,ha(a,u,o),a=o,n.current.lanes=a,Ye(n,a),Ei(n),e[w]=n.current,Nf(e),new Ql(n)},Ao.version="19.2.4",Ao}var n0;function Hy(){if(n0)return eh.exports;n0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),eh.exports=Fy(),eh.exports}var Gy=Hy();const Vy=zv(Gy);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ed="164",ky=0,i0=1,Xy=2,Bv=1,Iv=2,$i=3,Fa=0,Hn=1,ta=2,za=0,Mr=1,a0=2,s0=3,r0=4,Wy=5,gs=100,qy=101,Yy=102,jy=103,Zy=104,Ky=200,Qy=201,Jy=202,$y=203,kh=204,Xh=205,tS=206,eS=207,nS=208,iS=209,aS=210,sS=211,rS=212,oS=213,lS=214,cS=0,uS=1,fS=2,wc=3,hS=4,dS=5,pS=6,mS=7,Fv=0,gS=1,vS=2,Ba=0,_S=1,xS=2,yS=3,SS=4,MS=5,ES=6,TS=7,Hv=300,br=301,Ar=302,Wh=303,qh=304,Ic=306,Yh=1e3,_s=1001,jh=1002,li=1003,bS=1004,$l=1005,gi=1006,sh=1007,xs=1008,Ha=1009,AS=1010,RS=1011,Gv=1012,Vv=1013,Rr=1014,Pa=1015,Fc=1016,kv=1017,Xv=1018,Go=1020,CS=35902,wS=1021,DS=1022,Ri=1023,LS=1024,US=1025,Er=1026,Bo=1027,NS=1028,Wv=1029,OS=1030,qv=1031,Yv=1033,rh=33776,oh=33777,lh=33778,ch=33779,o0=35840,l0=35841,c0=35842,u0=35843,f0=36196,h0=37492,d0=37496,p0=37808,m0=37809,g0=37810,v0=37811,_0=37812,x0=37813,y0=37814,S0=37815,M0=37816,E0=37817,T0=37818,b0=37819,A0=37820,R0=37821,uh=36492,C0=36494,w0=36495,PS=36283,D0=36284,L0=36285,U0=36286,zS=3200,BS=3201,jv=0,IS=1,Oa="",Ti="srgb",Va="srgb-linear",nd="display-p3",Hc="display-p3-linear",Dc="linear",He="srgb",Lc="rec709",Uc="p3",nr=7680,N0=519,FS=512,HS=513,GS=514,Zv=515,VS=516,kS=517,XS=518,WS=519,O0=35044,P0="300 es",ea=2e3,Nc=2001;class wr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){if(this._listeners===void 0)return!1;const s=this._listeners;return s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){if(this._listeners===void 0)return;const l=this._listeners[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const s=this._listeners[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=Math.PI/180,Zh=180/Math.PI;function Dr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[i&63|128]+Mn[i>>8&255]+"-"+Mn[i>>16&255]+Mn[i>>24&255]+Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]).toLowerCase()}function Tn(r,t,i){return Math.max(t,Math.min(i,r))}function qS(r,t){return(r%t+t)%t}function hh(r,t,i){return(1-i)*r+i*t}function Ro(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Fn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class zt{constructor(t=0,i=0){zt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Tn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class de{constructor(t,i,s,l,c,f,d,p,m){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m)}set(t,i,s,l,c,f,d,p,m){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=s,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],g=s[4],v=s[7],y=s[2],M=s[5],T=s[8],E=l[0],_=l[3],x=l[6],U=l[1],C=l[4],L=l[7],j=l[2],B=l[5],O=l[8];return c[0]=f*E+d*U+p*j,c[3]=f*_+d*C+p*B,c[6]=f*x+d*L+p*O,c[1]=m*E+g*U+v*j,c[4]=m*_+g*C+v*B,c[7]=m*x+g*L+v*O,c[2]=y*E+M*U+T*j,c[5]=y*_+M*C+T*B,c[8]=y*x+M*L+T*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8];return i*f*g-i*d*m-s*c*g+s*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],v=g*f-d*m,y=d*p-g*c,M=m*c-f*p,T=i*v+s*y+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/T;return t[0]=v*E,t[1]=(l*m-g*s)*E,t[2]=(d*s-l*f)*E,t[3]=y*E,t[4]=(g*i-l*p)*E,t[5]=(l*c-d*i)*E,t[6]=M*E,t[7]=(s*p-m*i)*E,t[8]=(f*i-s*c)*E,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(dh.makeScale(t,i)),this}rotate(t){return this.premultiply(dh.makeRotation(-t)),this}translate(t,i){return this.premultiply(dh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dh=new de;function Kv(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Oc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function YS(){const r=Oc("canvas");return r.style.display="block",r}const z0={};function jS(r){r in z0||(z0[r]=!0,console.warn(r))}const B0=new de().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),I0=new de().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tc={[Va]:{transfer:Dc,primaries:Lc,toReference:r=>r,fromReference:r=>r},[Ti]:{transfer:He,primaries:Lc,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Hc]:{transfer:Dc,primaries:Uc,toReference:r=>r.applyMatrix3(I0),fromReference:r=>r.applyMatrix3(B0)},[nd]:{transfer:He,primaries:Uc,toReference:r=>r.convertSRGBToLinear().applyMatrix3(I0),fromReference:r=>r.applyMatrix3(B0).convertLinearToSRGB()}},ZS=new Set([Va,Hc]),Pe={enabled:!0,_workingColorSpace:Va,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!ZS.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,i){if(this.enabled===!1||t===i||!t||!i)return r;const s=tc[t].toReference,l=tc[i].fromReference;return l(s(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return tc[r].primaries},getTransfer:function(r){return r===Oa?Dc:tc[r].transfer}};function Tr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ph(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ir;class KS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ir===void 0&&(ir=Oc("canvas")),ir.width=t.width,ir.height=t.height;const s=ir.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ir}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Oc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Tr(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Tr(i[s]/255)*255):i[s]=Tr(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let QS=0;class Qv{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Dr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(mh(l[f].image)):c.push(mh(l[f]))}else c=mh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function mh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?KS.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let JS=0;class Gn extends wr{constructor(t=Gn.DEFAULT_IMAGE,i=Gn.DEFAULT_MAPPING,s=_s,l=_s,c=gi,f=xs,d=Ri,p=Ha,m=Gn.DEFAULT_ANISOTROPY,g=Oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:JS++}),this.uuid=Dr(),this.name="",this.source=new Qv(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Hv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yh:t.x=t.x-Math.floor(t.x);break;case _s:t.x=t.x<0?0:1;break;case jh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yh:t.y=t.y-Math.floor(t.y);break;case _s:t.y=t.y<0?0:1;break;case jh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Hv;Gn.DEFAULT_ANISOTROPY=1;class hn{constructor(t=0,i=0,s=0,l=1){hn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],g=p[4],v=p[8],y=p[1],M=p[5],T=p[9],E=p[2],_=p[6],x=p[10];if(Math.abs(g-y)<.01&&Math.abs(v-E)<.01&&Math.abs(T-_)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+E)<.1&&Math.abs(T+_)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(m+1)/2,L=(M+1)/2,j=(x+1)/2,B=(g+y)/4,O=(v+E)/4,Z=(T+_)/4;return C>L&&C>j?C<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(C),l=B/s,c=O/s):L>j?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=B/l,c=Z/l):j<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(j),s=O/c,l=Z/c),this.set(s,l,c,i),this}let U=Math.sqrt((_-T)*(_-T)+(v-E)*(v-E)+(y-g)*(y-g));return Math.abs(U)<.001&&(U=1),this.x=(_-T)/U,this.y=(v-E)/U,this.z=(y-g)/U,this.w=Math.acos((m+M+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this.w=Math.max(t.w,Math.min(i.w,this.w)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this.w=Math.max(t,Math.min(i,this.w)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $S extends wr{constructor(t=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new hn(0,0,t,i),this.scissorTest=!1,this.viewport=new hn(0,0,t,i);const l={width:t,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Gn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let s=0,l=t.textures.length;s<l;s++)this.textures[s]=t.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const i=Object.assign({},t.texture.image);return this.texture.source=new Qv(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends $S{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Jv extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=li,this.minFilter=li,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tM extends Gn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=li,this.minFilter=li,this.wrapR=_s,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let p=s[l+0],m=s[l+1],g=s[l+2],v=s[l+3];const y=c[f+0],M=c[f+1],T=c[f+2],E=c[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v;return}if(d===1){t[i+0]=y,t[i+1]=M,t[i+2]=T,t[i+3]=E;return}if(v!==E||p!==y||m!==M||g!==T){let _=1-d;const x=p*y+m*M+g*T+v*E,U=x>=0?1:-1,C=1-x*x;if(C>Number.EPSILON){const j=Math.sqrt(C),B=Math.atan2(j,x*U);_=Math.sin(_*B)/j,d=Math.sin(d*B)/j}const L=d*U;if(p=p*_+y*L,m=m*_+M*L,g=g*_+T*L,v=v*_+E*L,_===1-d){const j=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=j,m*=j,g*=j,v*=j}}t[i]=p,t[i+1]=m,t[i+2]=g,t[i+3]=v}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],p=s[l+1],m=s[l+2],g=s[l+3],v=c[f],y=c[f+1],M=c[f+2],T=c[f+3];return t[i]=d*T+g*v+p*M-m*y,t[i+1]=p*T+g*y+m*v-d*M,t[i+2]=m*T+g*M+d*y-p*v,t[i+3]=g*T-d*v-p*y-m*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(l/2),v=d(c/2),y=p(s/2),M=p(l/2),T=p(c/2);switch(f){case"XYZ":this._x=y*g*v+m*M*T,this._y=m*M*v-y*g*T,this._z=m*g*T+y*M*v,this._w=m*g*v-y*M*T;break;case"YXZ":this._x=y*g*v+m*M*T,this._y=m*M*v-y*g*T,this._z=m*g*T-y*M*v,this._w=m*g*v+y*M*T;break;case"ZXY":this._x=y*g*v-m*M*T,this._y=m*M*v+y*g*T,this._z=m*g*T+y*M*v,this._w=m*g*v-y*M*T;break;case"ZYX":this._x=y*g*v-m*M*T,this._y=m*M*v+y*g*T,this._z=m*g*T-y*M*v,this._w=m*g*v+y*M*T;break;case"YZX":this._x=y*g*v+m*M*T,this._y=m*M*v+y*g*T,this._z=m*g*T-y*M*v,this._w=m*g*v-y*M*T;break;case"XZY":this._x=y*g*v-m*M*T,this._y=m*M*v-y*g*T,this._z=m*g*T+y*M*v,this._w=m*g*v+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],y=s+d+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-p)*M,this._y=(c-m)*M,this._z=(f-l)*M}else if(s>d&&s>v){const M=2*Math.sqrt(1+s-d-v);this._w=(g-p)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-s-v);this._w=(c-m)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(p+g)/M}else{const M=2*Math.sqrt(1+v-s-d);this._w=(f-l)/M,this._x=(c+m)/M,this._y=(p+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Tn(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-s*m,this._z=c*g+f*m+s*p-l*d,this._w=f*g-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-i)*g)/m,y=Math.sin(i*g)/m;return this._w=f*v+this._w*y,this._x=s*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,i=0,s=0){V.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(F0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(F0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*s),g=2*(d*i-c*l),v=2*(c*s-f*i);return this.x=i+p*m+f*v-d*g,this.y=s+p*g+d*m-c*v,this.z=l+p*v+c*g-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Math.max(t.x,Math.min(i.x,this.x)),this.y=Math.max(t.y,Math.min(i.y,this.y)),this.z=Math.max(t.z,Math.min(i.z,this.z)),this}clampScalar(t,i){return this.x=Math.max(t,Math.min(i,this.x)),this.y=Math.max(t,Math.min(i,this.y)),this.z=Math.max(t,Math.min(i,this.z)),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(t,Math.min(i,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-s*p,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return gh.copy(this).projectOnVector(t),this.sub(gh)}reflect(t){return this.sub(gh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Tn(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const gh=new V,F0=new Vo;class Qn{constructor(t=new V(1/0,1/0,1/0),i=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,hi):hi.fromBufferAttribute(c,f),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ec.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ec.copy(s.boundingBox)),ec.applyMatrix4(t.matrixWorld),this.union(ec)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Co),nc.subVectors(this.max,Co),ar.subVectors(t.a,Co),sr.subVectors(t.b,Co),rr.subVectors(t.c,Co),Ca.subVectors(sr,ar),wa.subVectors(rr,sr),ls.subVectors(ar,rr);let i=[0,-Ca.z,Ca.y,0,-wa.z,wa.y,0,-ls.z,ls.y,Ca.z,0,-Ca.x,wa.z,0,-wa.x,ls.z,0,-ls.x,-Ca.y,Ca.x,0,-wa.y,wa.x,0,-ls.y,ls.x,0];return!vh(i,ar,sr,rr,nc)||(i=[1,0,0,0,1,0,0,0,1],!vh(i,ar,sr,rr,nc))?!1:(ic.crossVectors(Ca,wa),i=[ic.x,ic.y,ic.z],vh(i,ar,sr,rr,nc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ji=[new V,new V,new V,new V,new V,new V,new V,new V],hi=new V,ec=new Qn,ar=new V,sr=new V,rr=new V,Ca=new V,wa=new V,ls=new V,Co=new V,nc=new V,ic=new V,cs=new V;function vh(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){cs.fromArray(r,c);const d=l.x*Math.abs(cs.x)+l.y*Math.abs(cs.y)+l.z*Math.abs(cs.z),p=t.dot(cs),m=i.dot(cs),g=s.dot(cs);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const eM=new Qn,wo=new V,_h=new V;class Gc{constructor(t=new V,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):eM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(wo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_h.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(_h)),this.expandByPoint(wo.copy(t.center).sub(_h))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new V,xh=new V,ac=new V,Da=new V,yh=new V,sc=new V,Sh=new V;class $v{constructor(t=new V,i=new V(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){xh.copy(t).add(i).multiplyScalar(.5),ac.copy(i).sub(t).normalize(),Da.copy(this.origin).sub(xh);const c=t.distanceTo(i)*.5,f=-this.direction.dot(ac),d=Da.dot(this.direction),p=-Da.dot(ac),m=Da.lengthSq(),g=Math.abs(1-f*f);let v,y,M,T;if(g>0)if(v=f*p-d,y=f*d-p,T=c*g,v>=0)if(y>=-T)if(y<=T){const E=1/g;v*=E,y*=E,M=v*(v+f*y+2*d)+y*(f*v+y+2*p)+m}else y=c,v=Math.max(0,-(f*y+d)),M=-v*v+y*(y+2*p)+m;else y=-c,v=Math.max(0,-(f*y+d)),M=-v*v+y*(y+2*p)+m;else y<=-T?(v=Math.max(0,-(-f*c+d)),y=v>0?-c:Math.min(Math.max(-c,-p),c),M=-v*v+y*(y+2*p)+m):y<=T?(v=0,y=Math.min(Math.max(-c,-p),c),M=y*(y+2*p)+m):(v=Math.max(0,-(f*c+d)),y=v>0?c:Math.min(Math.max(-c,-p),c),M=-v*v+y*(y+2*p)+m);else y=f>0?-c:c,v=Math.max(0,-(f*y+d)),M=-v*v+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(xh).addScaledVector(ac,y),M}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const s=Zi.dot(this.direction),l=Zi.dot(Zi)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(s=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(s=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),g>=0?(c=(t.min.y-y.y)*g,f=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,f=(t.min.y-y.y)*g),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(t.min.z-y.z)*v,p=(t.max.z-y.z)*v):(d=(t.max.z-y.z)*v,p=(t.min.z-y.z)*v),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,s,l,c){yh.subVectors(i,t),sc.subVectors(s,t),Sh.crossVectors(yh,sc);let f=this.direction.dot(Sh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Da.subVectors(this.origin,t);const p=d*this.direction.dot(sc.crossVectors(Da,sc));if(p<0)return null;const m=d*this.direction.dot(yh.cross(Da));if(m<0||p+m>f)return null;const g=-d*Da.dot(Sh);return g<0?null:this.at(g/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xe{constructor(t,i,s,l,c,f,d,p,m,g,v,y,M,T,E,_){Xe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m,g,v,y,M,T,E,_)}set(t,i,s,l,c,f,d,p,m,g,v,y,M,T,E,_){const x=this.elements;return x[0]=t,x[4]=i,x[8]=s,x[12]=l,x[1]=c,x[5]=f,x[9]=d,x[13]=p,x[2]=m,x[6]=g,x[10]=v,x[14]=y,x[3]=M,x[7]=T,x[11]=E,x[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/or.setFromMatrixColumn(t,0).length(),c=1/or.setFromMatrixColumn(t,1).length(),f=1/or.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(t.order==="XYZ"){const y=f*g,M=f*v,T=d*g,E=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=M+T*m,i[5]=y-E*m,i[9]=-d*p,i[2]=E-y*m,i[6]=T+M*m,i[10]=f*p}else if(t.order==="YXZ"){const y=p*g,M=p*v,T=m*g,E=m*v;i[0]=y+E*d,i[4]=T*d-M,i[8]=f*m,i[1]=f*v,i[5]=f*g,i[9]=-d,i[2]=M*d-T,i[6]=E+y*d,i[10]=f*p}else if(t.order==="ZXY"){const y=p*g,M=p*v,T=m*g,E=m*v;i[0]=y-E*d,i[4]=-f*v,i[8]=T+M*d,i[1]=M+T*d,i[5]=f*g,i[9]=E-y*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const y=f*g,M=f*v,T=d*g,E=d*v;i[0]=p*g,i[4]=T*m-M,i[8]=y*m+E,i[1]=p*v,i[5]=E*m+y,i[9]=M*m-T,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const y=f*p,M=f*m,T=d*p,E=d*m;i[0]=p*g,i[4]=E-y*v,i[8]=T*v+M,i[1]=v,i[5]=f*g,i[9]=-d*g,i[2]=-m*g,i[6]=M*v+T,i[10]=y-E*v}else if(t.order==="XZY"){const y=f*p,M=f*m,T=d*p,E=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=y*v+E,i[5]=f*g,i[9]=M*v-T,i[2]=T*v-M,i[6]=d*g,i[10]=E*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(nM,t,iM)}lookAt(t,i,s){const l=this.elements;return Zn.subVectors(t,i),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),La.crossVectors(s,Zn),La.lengthSq()===0&&(Math.abs(s.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),La.crossVectors(s,Zn)),La.normalize(),rc.crossVectors(Zn,La),l[0]=La.x,l[4]=rc.x,l[8]=Zn.x,l[1]=La.y,l[5]=rc.y,l[9]=Zn.y,l[2]=La.z,l[6]=rc.z,l[10]=Zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],g=s[1],v=s[5],y=s[9],M=s[13],T=s[2],E=s[6],_=s[10],x=s[14],U=s[3],C=s[7],L=s[11],j=s[15],B=l[0],O=l[4],Z=l[8],D=l[12],b=l[1],F=l[5],J=l[9],H=l[13],st=l[2],ot=l[6],z=l[10],W=l[14],k=l[3],dt=l[7],pt=l[11],N=l[15];return c[0]=f*B+d*b+p*st+m*k,c[4]=f*O+d*F+p*ot+m*dt,c[8]=f*Z+d*J+p*z+m*pt,c[12]=f*D+d*H+p*W+m*N,c[1]=g*B+v*b+y*st+M*k,c[5]=g*O+v*F+y*ot+M*dt,c[9]=g*Z+v*J+y*z+M*pt,c[13]=g*D+v*H+y*W+M*N,c[2]=T*B+E*b+_*st+x*k,c[6]=T*O+E*F+_*ot+x*dt,c[10]=T*Z+E*J+_*z+x*pt,c[14]=T*D+E*H+_*W+x*N,c[3]=U*B+C*b+L*st+j*k,c[7]=U*O+C*F+L*ot+j*dt,c[11]=U*Z+C*J+L*z+j*pt,c[15]=U*D+C*H+L*W+j*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],g=t[2],v=t[6],y=t[10],M=t[14],T=t[3],E=t[7],_=t[11],x=t[15];return T*(+c*p*v-l*m*v-c*d*y+s*m*y+l*d*M-s*p*M)+E*(+i*p*M-i*m*y+c*f*y-l*f*M+l*m*g-c*p*g)+_*(+i*m*v-i*d*M-c*f*v+s*f*M+c*d*g-s*m*g)+x*(-l*d*g-i*p*v+i*d*y+l*f*v-s*f*y+s*p*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],g=t[8],v=t[9],y=t[10],M=t[11],T=t[12],E=t[13],_=t[14],x=t[15],U=v*_*m-E*y*m+E*p*M-d*_*M-v*p*x+d*y*x,C=T*y*m-g*_*m-T*p*M+f*_*M+g*p*x-f*y*x,L=g*E*m-T*v*m+T*d*M-f*E*M-g*d*x+f*v*x,j=T*v*p-g*E*p-T*d*y+f*E*y+g*d*_-f*v*_,B=i*U+s*C+l*L+c*j;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return t[0]=U*O,t[1]=(E*y*c-v*_*c-E*l*M+s*_*M+v*l*x-s*y*x)*O,t[2]=(d*_*c-E*p*c+E*l*m-s*_*m-d*l*x+s*p*x)*O,t[3]=(v*p*c-d*y*c-v*l*m+s*y*m+d*l*M-s*p*M)*O,t[4]=C*O,t[5]=(g*_*c-T*y*c+T*l*M-i*_*M-g*l*x+i*y*x)*O,t[6]=(T*p*c-f*_*c-T*l*m+i*_*m+f*l*x-i*p*x)*O,t[7]=(f*y*c-g*p*c+g*l*m-i*y*m-f*l*M+i*p*M)*O,t[8]=L*O,t[9]=(T*v*c-g*E*c-T*s*M+i*E*M+g*s*x-i*v*x)*O,t[10]=(f*E*c-T*d*c+T*s*m-i*E*m-f*s*x+i*d*x)*O,t[11]=(g*d*c-f*v*c-g*s*m+i*v*m+f*s*M-i*d*M)*O,t[12]=j*O,t[13]=(g*E*l-T*v*l+T*s*y-i*E*y-g*s*_+i*v*_)*O,t[14]=(T*d*l-f*E*l-T*s*p+i*E*p+f*s*_-i*d*_)*O,t[15]=(f*v*l-g*d*l+g*s*p-i*v*p-f*s*y+i*d*y)*O,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,p=t.z,m=c*f,g=c*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+s,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,g=f+f,v=d+d,y=c*m,M=c*g,T=c*v,E=f*g,_=f*v,x=d*v,U=p*m,C=p*g,L=p*v,j=s.x,B=s.y,O=s.z;return l[0]=(1-(E+x))*j,l[1]=(M+L)*j,l[2]=(T-C)*j,l[3]=0,l[4]=(M-L)*B,l[5]=(1-(y+x))*B,l[6]=(_+U)*B,l[7]=0,l[8]=(T+C)*O,l[9]=(_-U)*O,l[10]=(1-(y+E))*O,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=or.set(l[0],l[1],l[2]).length();const f=or.set(l[4],l[5],l[6]).length(),d=or.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],di.copy(this);const m=1/c,g=1/f,v=1/d;return di.elements[0]*=m,di.elements[1]*=m,di.elements[2]*=m,di.elements[4]*=g,di.elements[5]*=g,di.elements[6]*=g,di.elements[8]*=v,di.elements[9]*=v,di.elements[10]*=v,i.setFromRotationMatrix(di),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=ea){const p=this.elements,m=2*c/(i-t),g=2*c/(s-l),v=(i+t)/(i-t),y=(s+l)/(s-l);let M,T;if(d===ea)M=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===Nc)M=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=m,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=ea){const p=this.elements,m=1/(i-t),g=1/(s-l),v=1/(f-c),y=(i+t)*m,M=(s+l)*g;let T,E;if(d===ea)T=(f+c)*v,E=-2*v;else if(d===Nc)T=c*v,E=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*m,p[4]=0,p[8]=0,p[12]=-y,p[1]=0,p[5]=2*g,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=E,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const or=new V,di=new Xe,nM=new V(0,0,0),iM=new V(1,1,1),La=new V,rc=new V,Zn=new V,H0=new Xe,G0=new Vo;class wi{constructor(t=0,i=0,s=0,l=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Tn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Tn(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Tn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return H0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(H0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return G0.setFromEuler(this),this.setFromQuaternion(G0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class t_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let aM=0;const V0=new V,lr=new Vo,Ki=new Xe,oc=new V,Do=new V,sM=new V,rM=new Vo,k0=new V(1,0,0),X0=new V(0,1,0),W0=new V(0,0,1),q0={type:"added"},oM={type:"removed"},cr={type:"childadded",child:null},Mh={type:"childremoved",child:null};class vn extends wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const t=new V,i=new wi,s=new Vo,l=new V(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Xe},normalMatrix:{value:new de}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new t_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return lr.setFromAxisAngle(t,i),this.quaternion.multiply(lr),this}rotateOnWorldAxis(t,i){return lr.setFromAxisAngle(t,i),this.quaternion.premultiply(lr),this}rotateX(t){return this.rotateOnAxis(k0,t)}rotateY(t){return this.rotateOnAxis(X0,t)}rotateZ(t){return this.rotateOnAxis(W0,t)}translateOnAxis(t,i){return V0.copy(t).applyQuaternion(this.quaternion),this.position.add(V0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(k0,t)}translateY(t){return this.translateOnAxis(X0,t)}translateZ(t){return this.translateOnAxis(W0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?oc.copy(t):oc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(Do,oc,this.up):Ki.lookAt(oc,Do,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),lr.setFromRotationMatrix(Ki),this.quaternion.premultiply(lr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(q0),cr.child=t,this.dispatchEvent(cr),cr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(oM),Mh.child=t,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(q0),cr.child=t,this.dispatchEvent(cr),cr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,sM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,rM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++){const c=i[s];(c.matrixWorldAutoUpdate===!0||t===!0)&&c.updateMatrixWorld(t)}}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++){const d=l[c];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(t.shapes,v)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),g=f(t.images),v=f(t.shapes),y=f(t.skeletons),M=f(t.animations),T=f(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}vn.DEFAULT_UP=new V(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new V,Qi=new V,Eh=new V,Ji=new V,ur=new V,fr=new V,Y0=new V,Th=new V,bh=new V,Ah=new V;class Ai{constructor(t=new V,i=new V,s=new V){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),pi.subVectors(t,i),l.cross(pi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){pi.subVectors(l,i),Qi.subVectors(s,i),Eh.subVectors(t,i);const f=pi.dot(pi),d=pi.dot(Qi),p=pi.dot(Eh),m=Qi.dot(Qi),g=Qi.dot(Eh),v=f*m-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,M=(m*p-d*g)*y,T=(f*g-d*p)*y;return c.set(1-M-T,T,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,s,l,c,f,d,p){return this.getBarycoord(t,i,s,l,Ji)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ji.x),p.addScaledVector(f,Ji.y),p.addScaledVector(d,Ji.z),p)}static isFrontFacing(t,i,s,l){return pi.subVectors(s,i),Qi.subVectors(t,i),pi.cross(Qi).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pi.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),pi.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ai.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;ur.subVectors(l,s),fr.subVectors(c,s),Th.subVectors(t,s);const p=ur.dot(Th),m=fr.dot(Th);if(p<=0&&m<=0)return i.copy(s);bh.subVectors(t,l);const g=ur.dot(bh),v=fr.dot(bh);if(g>=0&&v<=g)return i.copy(l);const y=p*v-g*m;if(y<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(s).addScaledVector(ur,f);Ah.subVectors(t,c);const M=ur.dot(Ah),T=fr.dot(Ah);if(T>=0&&M<=T)return i.copy(c);const E=M*m-p*T;if(E<=0&&m>=0&&T<=0)return d=m/(m-T),i.copy(s).addScaledVector(fr,d);const _=g*T-M*v;if(_<=0&&v-g>=0&&M-T>=0)return Y0.subVectors(c,l),d=(v-g)/(v-g+(M-T)),i.copy(l).addScaledVector(Y0,d);const x=1/(_+E+y);return f=E*x,d=y*x,i.copy(s).addScaledVector(ur,f).addScaledVector(fr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const e_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ua={h:0,s:0,l:0},lc={h:0,s:0,l:0};function Rh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class xe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Pe.toWorkingColorSpace(this,i),this}setRGB(t,i,s,l=Pe.workingColorSpace){return this.r=t,this.g=i,this.b=s,Pe.toWorkingColorSpace(this,l),this}setHSL(t,i,s,l=Pe.workingColorSpace){if(t=qS(t,1),i=Tn(i,0,1),s=Tn(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=Rh(f,c,t+1/3),this.g=Rh(f,c,t),this.b=Rh(f,c,t-1/3)}return Pe.toWorkingColorSpace(this,l),this}setStyle(t,i=Ti){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Ti){const s=e_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tr(t.r),this.g=Tr(t.g),this.b=Tr(t.b),this}copyLinearToSRGB(t){return this.r=ph(t.r),this.g=ph(t.g),this.b=ph(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ti){return Pe.fromWorkingColorSpace(En.copy(this),t),Math.round(Tn(En.r*255,0,255))*65536+Math.round(Tn(En.g*255,0,255))*256+Math.round(Tn(En.b*255,0,255))}getHexString(t=Ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Pe.workingColorSpace){Pe.fromWorkingColorSpace(En.copy(this),i);const s=En.r,l=En.g,c=En.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=g<=.5?v/(f+d):v/(2-f-d),f){case s:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-s)/v+2;break;case c:p=(s-l)/v+4;break}p/=6}return t.h=p,t.s=m,t.l=g,t}getRGB(t,i=Pe.workingColorSpace){return Pe.fromWorkingColorSpace(En.copy(this),i),t.r=En.r,t.g=En.g,t.b=En.b,t}getStyle(t=Ti){Pe.fromWorkingColorSpace(En.copy(this),t);const i=En.r,s=En.g,l=En.b;return t!==Ti?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ua),this.setHSL(Ua.h+t,Ua.s+i,Ua.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ua),t.getHSL(lc);const s=hh(Ua.h,lc.h,i),l=hh(Ua.s,lc.s,i),c=hh(Ua.l,lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new xe;xe.NAMES=e_;let lM=0;class Lr extends wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=Mr,this.side=Fa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=Xh,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xe(0,0,0),this.blendAlpha=0,this.depthFunc=wc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=N0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(s.blending=this.blending),this.side!==Fa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==kh&&(s.blendSrc=this.blendSrc),this.blendDst!==Xh&&(s.blendDst=this.blendDst),this.blendEquation!==gs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==wc&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==N0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class n_ extends Lr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Fv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const en=new V,cc=new zt;class Ci{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=O0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return jS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(t),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)en.fromBufferAttribute(this,i),en.applyMatrix3(t),this.setXYZ(i,en.x,en.y,en.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)en.fromBufferAttribute(this,i),en.applyMatrix4(t),this.setXYZ(i,en.x,en.y,en.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)en.fromBufferAttribute(this,i),en.applyNormalMatrix(t),this.setXYZ(i,en.x,en.y,en.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)en.fromBufferAttribute(this,i),en.transformDirection(t),this.setXYZ(i,en.x,en.y,en.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Fn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),s=Fn(s,this.array),l=Fn(l,this.array),c=Fn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==O0&&(t.usage=this.usage),t}}class i_ extends Ci{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class a_ extends Ci{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class bn extends Ci{constructor(t,i,s){super(new Float32Array(t),i,s)}}let cM=0;const oi=new Xe,Ch=new vn,hr=new V,Kn=new Qn,Lo=new Qn,fn=new V;class vi extends wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kv(t)?a_:i_)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new de().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return oi.makeRotationFromQuaternion(t),this.applyMatrix4(oi),this}rotateX(t){return oi.makeRotationX(t),this.applyMatrix4(oi),this}rotateY(t){return oi.makeRotationY(t),this.applyMatrix4(oi),this}rotateZ(t){return oi.makeRotationZ(t),this.applyMatrix4(oi),this}translate(t,i,s){return oi.makeTranslation(t,i,s),this.applyMatrix4(oi),this}scale(t,i,s){return oi.makeScale(t,i,s),this.applyMatrix4(oi),this}lookAt(t){return Ch.lookAt(t),Ch.updateMatrix(),this.applyMatrix4(Ch.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(hr).negate(),this.translate(hr.x,hr.y,hr.z),this}setFromPoints(t){const i=[];for(let s=0,l=t.length;s<l;s++){const c=t[s];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new bn(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];Kn.setFromBufferAttribute(c),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const s=this.boundingSphere.center;if(Kn.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(fn.addVectors(Kn.min,Lo.min),Kn.expandByPoint(fn),fn.addVectors(Kn.max,Lo.max),Kn.expandByPoint(fn)):(Kn.expandByPoint(Lo.min),Kn.expandByPoint(Lo.max))}Kn.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)fn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(fn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)fn.fromBufferAttribute(d,m),p&&(hr.fromBufferAttribute(t,m),fn.add(hr)),l=Math.max(l,s.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ci(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let Z=0;Z<s.count;Z++)d[Z]=new V,p[Z]=new V;const m=new V,g=new V,v=new V,y=new zt,M=new zt,T=new zt,E=new V,_=new V;function x(Z,D,b){m.fromBufferAttribute(s,Z),g.fromBufferAttribute(s,D),v.fromBufferAttribute(s,b),y.fromBufferAttribute(c,Z),M.fromBufferAttribute(c,D),T.fromBufferAttribute(c,b),g.sub(m),v.sub(m),M.sub(y),T.sub(y);const F=1/(M.x*T.y-T.x*M.y);isFinite(F)&&(E.copy(g).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(F),_.copy(v).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(F),d[Z].add(E),d[D].add(E),d[b].add(E),p[Z].add(_),p[D].add(_),p[b].add(_))}let U=this.groups;U.length===0&&(U=[{start:0,count:t.count}]);for(let Z=0,D=U.length;Z<D;++Z){const b=U[Z],F=b.start,J=b.count;for(let H=F,st=F+J;H<st;H+=3)x(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const C=new V,L=new V,j=new V,B=new V;function O(Z){j.fromBufferAttribute(l,Z),B.copy(j);const D=d[Z];C.copy(D),C.sub(j.multiplyScalar(j.dot(D))).normalize(),L.crossVectors(B,D);const F=L.dot(p[Z])<0?-1:1;f.setXYZW(Z,C.x,C.y,C.z,F)}for(let Z=0,D=U.length;Z<D;++Z){const b=U[Z],F=b.start,J=b.count;for(let H=F,st=F+J;H<st;H+=3)O(t.getX(H+0)),O(t.getX(H+1)),O(t.getX(H+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ci(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new V,c=new V,f=new V,d=new V,p=new V,m=new V,g=new V,v=new V;if(t)for(let y=0,M=t.count;y<M;y+=3){const T=t.getX(y+0),E=t.getX(y+1),_=t.getX(y+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,E),f.fromBufferAttribute(i,_),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,E),m.fromBufferAttribute(s,_),d.add(g),p.add(g),m.add(g),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(E,p.x,p.y,p.z),s.setXYZ(_,m.x,m.y,m.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)fn.fromBufferAttribute(t,i),fn.normalize(),t.setXYZ(i,fn.x,fn.y,fn.z)}toNonIndexed(){function t(d,p){const m=d.array,g=d.itemSize,v=d.normalized,y=new m.constructor(p.length*g);let M=0,T=0;for(let E=0,_=p.length;E<_;E++){d.isInterleavedBufferAttribute?M=p[E]*d.data.stride+d.offset:M=p[E]*g;for(let x=0;x<g;x++)y[T++]=m[M++]}return new Ci(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new vi,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,v=m.length;g<v;g++){const y=m[g],M=t(y,s);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,y=m.length;v<y;v++){const M=m[v];g.push(M.toJSON(t.data))}g.length>0&&(l[p]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone(i));const l=t.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=t.morphAttributes;for(const m in c){const g=[],v=c[m];for(let y=0,M=v.length;y<M;y++)g.push(v[y].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const j0=new Xe,us=new $v,uc=new Gc,Z0=new V,dr=new V,pr=new V,mr=new V,wh=new V,fc=new V,hc=new zt,dc=new zt,pc=new zt,K0=new V,Q0=new V,J0=new V,mc=new V,gc=new V;class Ln extends vn{constructor(t=new vi,i=new n_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){fc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],v=c[p];g!==0&&(wh.fromBufferAttribute(v,t),f?fc.addScaledVector(wh,g):fc.addScaledVector(wh.sub(i),g))}i.add(fc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),uc.copy(s.boundingSphere),uc.applyMatrix4(c),us.copy(t.ray).recast(t.near),!(uc.containsPoint(us.origin)===!1&&(us.intersectSphere(uc,Z0)===null||us.origin.distanceToSquared(Z0)>(t.far-t.near)**2))&&(j0.copy(c).invert(),us.copy(t.ray).applyMatrix4(j0),!(s.boundingBox!==null&&us.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,us)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,y=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(f))for(let T=0,E=y.length;T<E;T++){const _=y[T],x=f[_.materialIndex],U=Math.max(_.start,M.start),C=Math.min(d.count,Math.min(_.start+_.count,M.start+M.count));for(let L=U,j=C;L<j;L+=3){const B=d.getX(L),O=d.getX(L+1),Z=d.getX(L+2);l=vc(this,x,t,s,m,g,v,B,O,Z),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),E=Math.min(d.count,M.start+M.count);for(let _=T,x=E;_<x;_+=3){const U=d.getX(_),C=d.getX(_+1),L=d.getX(_+2);l=vc(this,f,t,s,m,g,v,U,C,L),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let T=0,E=y.length;T<E;T++){const _=y[T],x=f[_.materialIndex],U=Math.max(_.start,M.start),C=Math.min(p.count,Math.min(_.start+_.count,M.start+M.count));for(let L=U,j=C;L<j;L+=3){const B=L,O=L+1,Z=L+2;l=vc(this,x,t,s,m,g,v,B,O,Z),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=_.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),E=Math.min(p.count,M.start+M.count);for(let _=T,x=E;_<x;_+=3){const U=_,C=_+1,L=_+2;l=vc(this,f,t,s,m,g,v,U,C,L),l&&(l.faceIndex=Math.floor(_/3),i.push(l))}}}}function uM(r,t,i,s,l,c,f,d){let p;if(t.side===Hn?p=s.intersectTriangle(f,c,l,!0,d):p=s.intersectTriangle(l,c,f,t.side===Fa,d),p===null)return null;gc.copy(d),gc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(gc);return m<i.near||m>i.far?null:{distance:m,point:gc.clone(),object:r}}function vc(r,t,i,s,l,c,f,d,p,m){r.getVertexPosition(d,dr),r.getVertexPosition(p,pr),r.getVertexPosition(m,mr);const g=uM(r,t,i,s,dr,pr,mr,mc);if(g){l&&(hc.fromBufferAttribute(l,d),dc.fromBufferAttribute(l,p),pc.fromBufferAttribute(l,m),g.uv=Ai.getInterpolation(mc,dr,pr,mr,hc,dc,pc,new zt)),c&&(hc.fromBufferAttribute(c,d),dc.fromBufferAttribute(c,p),pc.fromBufferAttribute(c,m),g.uv1=Ai.getInterpolation(mc,dr,pr,mr,hc,dc,pc,new zt)),f&&(K0.fromBufferAttribute(f,d),Q0.fromBufferAttribute(f,p),J0.fromBufferAttribute(f,m),g.normal=Ai.getInterpolation(mc,dr,pr,mr,K0,Q0,J0,new V),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const v={a:d,b:p,c:m,normal:new V,materialIndex:0};Ai.getNormal(dr,pr,mr,v.normal),g.face=v}return g}class Ia extends vi{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],v=[];let y=0,M=0;T("z","y","x",-1,-1,s,i,t,f,c,0),T("z","y","x",1,-1,s,i,-t,f,c,1),T("x","z","y",1,1,t,s,i,l,f,2),T("x","z","y",1,-1,t,s,-i,l,f,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new bn(m,3)),this.setAttribute("normal",new bn(g,3)),this.setAttribute("uv",new bn(v,2));function T(E,_,x,U,C,L,j,B,O,Z,D){const b=L/O,F=j/Z,J=L/2,H=j/2,st=B/2,ot=O+1,z=Z+1;let W=0,k=0;const dt=new V;for(let pt=0;pt<z;pt++){const N=pt*F-H;for(let et=0;et<ot;et++){const Mt=et*b-J;dt[E]=Mt*U,dt[_]=N*C,dt[x]=st,m.push(dt.x,dt.y,dt.z),dt[E]=0,dt[_]=0,dt[x]=B>0?1:-1,g.push(dt.x,dt.y,dt.z),v.push(et/O),v.push(1-pt/Z),W+=1}}for(let pt=0;pt<Z;pt++)for(let N=0;N<O;N++){const et=y+N+ot*pt,Mt=y+N+ot*(pt+1),X=y+(N+1)+ot*(pt+1),ut=y+(N+1)+ot*pt;p.push(et,Mt,ut),p.push(Mt,X,ut),k+=6}d.addGroup(M,k,D),M+=k,y+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Dn(r){const t={};for(let i=0;i<r.length;i++){const s=Cr(r[i]);for(const l in s)t[l]=s[l]}return t}function fM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function s_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Pe.workingColorSpace}const hM={clone:Cr,merge:Dn};var dM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ga extends Lr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dM,this.fragmentShader=pM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=fM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class r_ extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=ea}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Na=new V,$0=new zt,tv=new zt;class mi extends r_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Zh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zh*2*Math.atan(Math.tan(fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Na.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Na.x,Na.y).multiplyScalar(-t/Na.z),Na.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Na.x,Na.y).multiplyScalar(-t/Na.z)}getViewSize(t,i){return this.getViewBounds(t,$0,tv),i.subVectors(tv,$0)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(fh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gr=-90,vr=1;class mM extends vn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi(gr,vr,t,i);l.layers=this.layers,this.add(l);const c=new mi(gr,vr,t,i);c.layers=this.layers,this.add(c);const f=new mi(gr,vr,t,i);f.layers=this.layers,this.add(f);const d=new mi(gr,vr,t,i);d.layers=this.layers,this.add(d);const p=new mi(gr,vr,t,i);p.layers=this.layers,this.add(p);const m=new mi(gr,vr,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===ea)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Nc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,v=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const E=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=E,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(v,y,M),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class o_ extends Gn{constructor(t,i,s,l,c,f,d,p,m,g){t=t!==void 0?t:[],i=i!==void 0?i:br,super(t,i,s,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class gM extends ys{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new o_(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:gi}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Ia(5,5,5),c=new Ga({name:"CubemapFromEquirect",uniforms:Cr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Hn,blending:za});c.uniforms.tEquirect.value=i;const f=new Ln(l,c),d=i.minFilter;return i.minFilter===xs&&(i.minFilter=gi),new mM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i,s,l){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}const Dh=new V,vM=new V,_M=new de;class ps{constructor(t=new V(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Dh.subVectors(s,i).cross(vM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Dh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||_M.getNormalMatrix(t),l=this.coplanarPoint(Dh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new Gc,_c=new V;class id{constructor(t=new ps,i=new ps,s=new ps,l=new ps,c=new ps,f=new ps){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ea){const s=this.planes,l=t.elements,c=l[0],f=l[1],d=l[2],p=l[3],m=l[4],g=l[5],v=l[6],y=l[7],M=l[8],T=l[9],E=l[10],_=l[11],x=l[12],U=l[13],C=l[14],L=l[15];if(s[0].setComponents(p-c,y-m,_-M,L-x).normalize(),s[1].setComponents(p+c,y+m,_+M,L+x).normalize(),s[2].setComponents(p+f,y+g,_+T,L+U).normalize(),s[3].setComponents(p-f,y-g,_-T,L-U).normalize(),s[4].setComponents(p-d,y-v,_-E,L-C).normalize(),i===ea)s[5].setComponents(p+d,y+v,_+E,L+C).normalize();else if(i===Nc)s[5].setComponents(d,v,E,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),fs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(_c.x=l.normal.x>0?t.max.x:t.min.x,_c.y=l.normal.y>0?t.max.y:t.min.y,_c.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(_c)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function l_(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function xM(r){const t=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,y=r.createBuffer();r.bindBuffer(p,y),r.bufferData(p,m,g),d.onUploadCallback();let M;if(m instanceof Float32Array)M=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=r.SHORT;else if(m instanceof Uint32Array)M=r.UNSIGNED_INT;else if(m instanceof Int32Array)M=r.INT;else if(m instanceof Int8Array)M=r.BYTE;else if(m instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,p,m){const g=p.array,v=p._updateRange,y=p.updateRanges;if(r.bindBuffer(m,d),v.count===-1&&y.length===0&&r.bufferSubData(m,0,g),y.length!==0){for(let M=0,T=y.length;M<T;M++){const E=y[M];r.bufferSubData(m,E.start*g.BYTES_PER_ELEMENT,g,E.start,E.count)}p.clearUpdateRanges()}v.count!==-1&&(r.bufferSubData(m,v.offset*g.BYTES_PER_ELEMENT,g,v.offset,v.count),v.count=-1),p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}class Vc extends vi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,g=p+1,v=t/d,y=i/p,M=[],T=[],E=[],_=[];for(let x=0;x<g;x++){const U=x*y-f;for(let C=0;C<m;C++){const L=C*v-c;T.push(L,-U,0),E.push(0,0,1),_.push(C/d),_.push(1-x/p)}}for(let x=0;x<p;x++)for(let U=0;U<d;U++){const C=U+m*x,L=U+m*(x+1),j=U+1+m*(x+1),B=U+1+m*x;M.push(C,L,B),M.push(L,j,B)}this.setIndex(M),this.setAttribute("position",new bn(T,3)),this.setAttribute("normal",new bn(E,3)),this.setAttribute("uv",new bn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vc(t.width,t.height,t.widthSegments,t.heightSegments)}}var yM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,SM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,MM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,EM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,RM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,CM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,DM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,kM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,XM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,KM="gl_FragColor = linearToOutputTexel( gl_FragColor );",QM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,JM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,oE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,hE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,dE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_E=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ME=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,AE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,CE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,LE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,NE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,PE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,zE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,BE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,IE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,FE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,VE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ZE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,JE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,eT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,aT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_T=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,MT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ET=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,RT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,IT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,QT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:yM,alphahash_pars_fragment:SM,alphamap_fragment:MM,alphamap_pars_fragment:EM,alphatest_fragment:TM,alphatest_pars_fragment:bM,aomap_fragment:AM,aomap_pars_fragment:RM,batching_pars_vertex:CM,batching_vertex:wM,begin_vertex:DM,beginnormal_vertex:LM,bsdfs:UM,iridescence_fragment:NM,bumpmap_pars_fragment:OM,clipping_planes_fragment:PM,clipping_planes_pars_fragment:zM,clipping_planes_pars_vertex:BM,clipping_planes_vertex:IM,color_fragment:FM,color_pars_fragment:HM,color_pars_vertex:GM,color_vertex:VM,common:kM,cube_uv_reflection_fragment:XM,defaultnormal_vertex:WM,displacementmap_pars_vertex:qM,displacementmap_vertex:YM,emissivemap_fragment:jM,emissivemap_pars_fragment:ZM,colorspace_fragment:KM,colorspace_pars_fragment:QM,envmap_fragment:JM,envmap_common_pars_fragment:$M,envmap_pars_fragment:tE,envmap_pars_vertex:eE,envmap_physical_pars_fragment:hE,envmap_vertex:nE,fog_vertex:iE,fog_pars_vertex:aE,fog_fragment:sE,fog_pars_fragment:rE,gradientmap_pars_fragment:oE,lightmap_pars_fragment:lE,lights_lambert_fragment:cE,lights_lambert_pars_fragment:uE,lights_pars_begin:fE,lights_toon_fragment:dE,lights_toon_pars_fragment:pE,lights_phong_fragment:mE,lights_phong_pars_fragment:gE,lights_physical_fragment:vE,lights_physical_pars_fragment:_E,lights_fragment_begin:xE,lights_fragment_maps:yE,lights_fragment_end:SE,logdepthbuf_fragment:ME,logdepthbuf_pars_fragment:EE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:bE,map_fragment:AE,map_pars_fragment:RE,map_particle_fragment:CE,map_particle_pars_fragment:wE,metalnessmap_fragment:DE,metalnessmap_pars_fragment:LE,morphinstance_vertex:UE,morphcolor_vertex:NE,morphnormal_vertex:OE,morphtarget_pars_vertex:PE,morphtarget_vertex:zE,normal_fragment_begin:BE,normal_fragment_maps:IE,normal_pars_fragment:FE,normal_pars_vertex:HE,normal_vertex:GE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:kE,clearcoat_normal_fragment_maps:XE,clearcoat_pars_fragment:WE,iridescence_pars_fragment:qE,opaque_fragment:YE,packing:jE,premultiplied_alpha_fragment:ZE,project_vertex:KE,dithering_fragment:QE,dithering_pars_fragment:JE,roughnessmap_fragment:$E,roughnessmap_pars_fragment:tT,shadowmap_pars_fragment:eT,shadowmap_pars_vertex:nT,shadowmap_vertex:iT,shadowmask_pars_fragment:aT,skinbase_vertex:sT,skinning_pars_vertex:rT,skinning_vertex:oT,skinnormal_vertex:lT,specularmap_fragment:cT,specularmap_pars_fragment:uT,tonemapping_fragment:fT,tonemapping_pars_fragment:hT,transmission_fragment:dT,transmission_pars_fragment:pT,uv_pars_fragment:mT,uv_pars_vertex:gT,uv_vertex:vT,worldpos_vertex:_T,background_vert:xT,background_frag:yT,backgroundCube_vert:ST,backgroundCube_frag:MT,cube_vert:ET,cube_frag:TT,depth_vert:bT,depth_frag:AT,distanceRGBA_vert:RT,distanceRGBA_frag:CT,equirect_vert:wT,equirect_frag:DT,linedashed_vert:LT,linedashed_frag:UT,meshbasic_vert:NT,meshbasic_frag:OT,meshlambert_vert:PT,meshlambert_frag:zT,meshmatcap_vert:BT,meshmatcap_frag:IT,meshnormal_vert:FT,meshnormal_frag:HT,meshphong_vert:GT,meshphong_frag:VT,meshphysical_vert:kT,meshphysical_frag:XT,meshtoon_vert:WT,meshtoon_frag:qT,points_vert:YT,points_frag:jT,shadow_vert:ZT,shadow_frag:KT,sprite_vert:QT,sprite_frag:JT},Pt={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},bi={basic:{uniforms:Dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new xe(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Dn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Dn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Dn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new xe(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Dn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Dn([Pt.points,Pt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Dn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Dn([Pt.common,Pt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Dn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Dn([Pt.sprite,Pt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Dn([Pt.common,Pt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Dn([Pt.lights,Pt.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};bi.physical={uniforms:Dn([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const xc={r:0,b:0,g:0},hs=new wi,$T=new Xe;function tb(r,t,i,s,l,c,f){const d=new xe(0);let p=c===!0?0:1,m,g,v=null,y=0,M=null;function T(U){let C=U.isScene===!0?U.background:null;return C&&C.isTexture&&(C=(U.backgroundBlurriness>0?i:t).get(C)),C}function E(U){let C=!1;const L=T(U);L===null?x(d,p):L&&L.isColor&&(x(L,1),C=!0);const j=r.xr.getEnvironmentBlendMode();j==="additive"?s.buffers.color.setClear(0,0,0,1,f):j==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||C)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil)}function _(U,C){const L=T(C);L&&(L.isCubeTexture||L.mapping===Ic)?(g===void 0&&(g=new Ln(new Ia(1,1,1),new Ga({name:"BackgroundCubeMaterial",uniforms:Cr(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(j,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),hs.copy(C.backgroundRotation),hs.x*=-1,hs.y*=-1,hs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),g.material.uniforms.envMap.value=L,g.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4($T.makeRotationFromEuler(hs)),g.material.toneMapped=Pe.getTransfer(L.colorSpace)!==He,(v!==L||y!==L.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,v=L,y=L.version,M=r.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new Ln(new Vc(2,2),new Ga({name:"BackgroundMaterial",uniforms:Cr(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:Fa,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Pe.getTransfer(L.colorSpace)!==He,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(v!==L||y!==L.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,v=L,y=L.version,M=r.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function x(U,C){U.getRGB(xc,s_(r)),s.buffers.color.setClear(xc.r,xc.g,xc.b,C,f)}return{getClearColor:function(){return d},setClearColor:function(U,C=1){d.set(U),p=C,x(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,x(d,p)},render:E,addToRenderList:_}}function eb(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,f=!1;function d(b,F,J,H,st){let ot=!1;const z=v(H,J,F);c!==z&&(c=z,m(c.object)),ot=M(b,H,J,st),ot&&T(b,H,J,st),st!==null&&t.update(st,r.ELEMENT_ARRAY_BUFFER),(ot||f)&&(f=!1,L(b,F,J,H),st!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function p(){return r.createVertexArray()}function m(b){return r.bindVertexArray(b)}function g(b){return r.deleteVertexArray(b)}function v(b,F,J){const H=J.wireframe===!0;let st=s[b.id];st===void 0&&(st={},s[b.id]=st);let ot=st[F.id];ot===void 0&&(ot={},st[F.id]=ot);let z=ot[H];return z===void 0&&(z=y(p()),ot[H]=z),z}function y(b){const F=[],J=[],H=[];for(let st=0;st<i;st++)F[st]=0,J[st]=0,H[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:J,attributeDivisors:H,object:b,attributes:{},index:null}}function M(b,F,J,H){const st=c.attributes,ot=F.attributes;let z=0;const W=J.getAttributes();for(const k in W)if(W[k].location>=0){const pt=st[k];let N=ot[k];if(N===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(N=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(N=b.instanceColor)),pt===void 0||pt.attribute!==N||N&&pt.data!==N.data)return!0;z++}return c.attributesNum!==z||c.index!==H}function T(b,F,J,H){const st={},ot=F.attributes;let z=0;const W=J.getAttributes();for(const k in W)if(W[k].location>=0){let pt=ot[k];pt===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(pt=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(pt=b.instanceColor));const N={};N.attribute=pt,pt&&pt.data&&(N.data=pt.data),st[k]=N,z++}c.attributes=st,c.attributesNum=z,c.index=H}function E(){const b=c.newAttributes;for(let F=0,J=b.length;F<J;F++)b[F]=0}function _(b){x(b,0)}function x(b,F){const J=c.newAttributes,H=c.enabledAttributes,st=c.attributeDivisors;J[b]=1,H[b]===0&&(r.enableVertexAttribArray(b),H[b]=1),st[b]!==F&&(r.vertexAttribDivisor(b,F),st[b]=F)}function U(){const b=c.newAttributes,F=c.enabledAttributes;for(let J=0,H=F.length;J<H;J++)F[J]!==b[J]&&(r.disableVertexAttribArray(J),F[J]=0)}function C(b,F,J,H,st,ot,z){z===!0?r.vertexAttribIPointer(b,F,J,st,ot):r.vertexAttribPointer(b,F,J,H,st,ot)}function L(b,F,J,H){E();const st=H.attributes,ot=J.getAttributes(),z=F.defaultAttributeValues;for(const W in ot){const k=ot[W];if(k.location>=0){let dt=st[W];if(dt===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(dt=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(dt=b.instanceColor)),dt!==void 0){const pt=dt.normalized,N=dt.itemSize,et=t.get(dt);if(et===void 0)continue;const Mt=et.buffer,X=et.type,ut=et.bytesPerElement,Tt=X===r.INT||X===r.UNSIGNED_INT||dt.gpuType===Vv;if(dt.isInterleavedBufferAttribute){const yt=dt.data,Yt=yt.stride,Xt=dt.offset;if(yt.isInstancedInterleavedBuffer){for(let K=0;K<k.locationSize;K++)x(k.location+K,yt.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let K=0;K<k.locationSize;K++)_(k.location+K);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let K=0;K<k.locationSize;K++)C(k.location+K,N/k.locationSize,X,pt,Yt*ut,(Xt+N/k.locationSize*K)*ut,Tt)}else{if(dt.isInstancedBufferAttribute){for(let yt=0;yt<k.locationSize;yt++)x(k.location+yt,dt.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let yt=0;yt<k.locationSize;yt++)_(k.location+yt);r.bindBuffer(r.ARRAY_BUFFER,Mt);for(let yt=0;yt<k.locationSize;yt++)C(k.location+yt,N/k.locationSize,X,pt,N*ut,N/k.locationSize*yt*ut,Tt)}}else if(z!==void 0){const pt=z[W];if(pt!==void 0)switch(pt.length){case 2:r.vertexAttrib2fv(k.location,pt);break;case 3:r.vertexAttrib3fv(k.location,pt);break;case 4:r.vertexAttrib4fv(k.location,pt);break;default:r.vertexAttrib1fv(k.location,pt)}}}}U()}function j(){Z();for(const b in s){const F=s[b];for(const J in F){const H=F[J];for(const st in H)g(H[st].object),delete H[st];delete F[J]}delete s[b]}}function B(b){if(s[b.id]===void 0)return;const F=s[b.id];for(const J in F){const H=F[J];for(const st in H)g(H[st].object),delete H[st];delete F[J]}delete s[b.id]}function O(b){for(const F in s){const J=s[F];if(J[b.id]===void 0)continue;const H=J[b.id];for(const st in H)g(H[st].object),delete H[st];delete J[b.id]}}function Z(){D(),f=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:D,dispose:j,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:_,disableUnusedAttributes:U}}function nb(r,t,i){let s;function l(m){s=m}function c(m,g){r.drawArrays(s,m,g),i.update(g,s,1)}function f(m,g,v){v!==0&&(r.drawArraysInstanced(s,m,g,v),i.update(g,s,v))}function d(m,g,v){if(v===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<v;M++)this.render(m[M],g[M]);else{y.multiDrawArraysWEBGL(s,m,0,g,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T];i.update(M,s,1)}}function p(m,g,v,y){if(v===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)f(m[T],g[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,g,0,y,0,v);let T=0;for(let E=0;E<v;E++)T+=g[E];for(let E=0;E<y.length;E++)i.update(T,s,y[E])}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function ib(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(B){return!(B!==Ri&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(B){const O=B===Fc&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Ha&&s.convert(B)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Pa&&!O)}function p(B){if(B==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),L=M>0,j=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,maxTextures:y,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:E,maxAttributes:_,maxVertexUniforms:x,maxVaryings:U,maxFragmentUniforms:C,vertexTextures:L,maxSamples:j}}function ab(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new ps,d=new de,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||s!==0||l;return l=y,s=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,M){const T=v.clippingPlanes,E=v.clipIntersection,_=v.clipShadows,x=r.get(v);if(!l||T===null||T.length===0||c&&!_)c?g(null):m();else{const U=c?0:s,C=U*4;let L=x.clippingState||null;p.value=L,L=g(T,y,C,M);for(let j=0;j!==C;++j)L[j]=i[j];x.clippingState=L,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=U}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(v,y,M,T){const E=v!==null?v.length:0;let _=null;if(E!==0){if(_=p.value,T!==!0||_===null){const x=M+E*4,U=y.matrixWorldInverse;d.getNormalMatrix(U),(_===null||_.length<x)&&(_=new Float32Array(x));for(let C=0,L=M;C!==E;++C,L+=4)f.copy(v[C]).applyMatrix4(U,d),f.normal.toArray(_,L),_[L+3]=f.constant}p.value=_,p.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,_}}function sb(r){let t=new WeakMap;function i(f,d){return d===Wh?f.mapping=br:d===qh&&(f.mapping=Ar),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Wh||d===qh)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new gM(p.height);return m.fromEquirectangularTexture(r,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}class ad extends r_{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const yr=4,ev=[.125,.215,.35,.446,.526,.582],vs=20,Lh=new ad,nv=new xe;let Uh=null,Nh=0,Oh=0,Ph=!1;const ms=(1+Math.sqrt(5))/2,_r=1/ms,iv=[new V(-ms,_r,0),new V(ms,_r,0),new V(-_r,0,ms),new V(_r,0,ms),new V(0,ms,-_r),new V(0,ms,_r),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)];class av{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100){Uh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,s,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Uh,Nh,Oh),this._renderer.xr.enabled=Ph,t.scissorTest=!1,yc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===br||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Uh=this._renderer.getRenderTarget(),Nh=this._renderer.getActiveCubeFace(),Oh=this._renderer.getActiveMipmapLevel(),Ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:gi,minFilter:gi,generateMipmaps:!1,type:Fc,format:Ri,colorSpace:Va,depthBuffer:!1},l=sv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sv(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rb(c)),this._blurMaterial=ob(c,t,i)}return l}_compileMaterial(t){const i=new Ln(this._lodPlanes[0],t);this._renderer.compile(i,Lh)}_sceneToCubeUV(t,i,s,l){const d=new mi(90,1,i,s),p=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,y=g.toneMapping;g.getClearColor(nv),g.toneMapping=Ba,g.autoClear=!1;const M=new n_({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),T=new Ln(new Ia,M);let E=!1;const _=t.background;_?_.isColor&&(M.color.copy(_),t.background=null,E=!0):(M.color.copy(nv),E=!0);for(let x=0;x<6;x++){const U=x%3;U===0?(d.up.set(0,p[x],0),d.lookAt(m[x],0,0)):U===1?(d.up.set(0,0,p[x]),d.lookAt(0,m[x],0)):(d.up.set(0,p[x],0),d.lookAt(0,0,m[x]));const C=this._cubeSize;yc(l,U*C,x>2?C:0,C,C),g.setRenderTarget(l),E&&g.render(T,d),g.render(t,d)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=y,g.autoClear=v,t.background=_}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===br||t.mapping===Ar;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new Ln(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;yc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Lh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=iv[(l-c-1)%iv.length];this._blur(t,c-1,c,f,d)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new Ln(this._lodPlanes[l],m),y=m.uniforms,M=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*vs-1),E=c/T,_=isFinite(c)?1+Math.floor(g*E):vs;_>vs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${vs}`);const x=[];let U=0;for(let O=0;O<vs;++O){const Z=O/E,D=Math.exp(-Z*Z/2);x.push(D),O===0?U+=D:O<_&&(U+=2*D)}for(let O=0;O<x.length;O++)x[O]=x[O]/U;y.envMap.value=t.texture,y.samples.value=_,y.weights.value=x,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:C}=this;y.dTheta.value=T,y.mipInt.value=C-s;const L=this._sizeLods[l],j=3*L*(l>C-yr?l-C+yr:0),B=4*(this._cubeSize-L);yc(i,j,B,3*L,2*L),p.setRenderTarget(i),p.render(v,Lh)}}function rb(r){const t=[],i=[],s=[];let l=r;const c=r-yr+1+ev.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>r-yr?p=ev[f-r+yr-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),g=-m,v=1+m,y=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,T=6,E=3,_=2,x=1,U=new Float32Array(E*T*M),C=new Float32Array(_*T*M),L=new Float32Array(x*T*M);for(let B=0;B<M;B++){const O=B%3*2/3-1,Z=B>2?0:-1,D=[O,Z,0,O+2/3,Z,0,O+2/3,Z+1,0,O,Z,0,O+2/3,Z+1,0,O,Z+1,0];U.set(D,E*T*B),C.set(y,_*T*B);const b=[B,B,B,B,B,B];L.set(b,x*T*B)}const j=new vi;j.setAttribute("position",new Ci(U,E)),j.setAttribute("uv",new Ci(C,_)),j.setAttribute("faceIndex",new Ci(L,x)),t.push(j),l>yr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function sv(r,t,i){const s=new ys(r,t,i);return s.texture.mapping=Ic,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function yc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function ob(r,t,i){const s=new Float32Array(vs),l=new V(0,1,0);return new Ga({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function rv(){return new Ga({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function ov(){return new Ga({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:za,depthTest:!1,depthWrite:!1})}function sd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lb(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Wh||p===qh,g=p===br||p===Ar;if(m||g){let v=t.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new av(r)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),v.texture;if(v!==void 0)return v.texture;{const M=d.image;return m&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new av(r)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,t.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function cb(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&console.warn("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function ub(r,t,i,s){const l={},c=new WeakMap;function f(v){const y=v.target;y.index!==null&&t.remove(y.index);for(const T in y.attributes)t.remove(y.attributes[T]);for(const T in y.morphAttributes){const E=y.morphAttributes[T];for(let _=0,x=E.length;_<x;_++)t.remove(E[_])}y.removeEventListener("dispose",f),delete l[y.id];const M=c.get(y);M&&(t.remove(M),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function p(v){const y=v.attributes;for(const T in y)t.update(y[T],r.ARRAY_BUFFER);const M=v.morphAttributes;for(const T in M){const E=M[T];for(let _=0,x=E.length;_<x;_++)t.update(E[_],r.ARRAY_BUFFER)}}function m(v){const y=[],M=v.index,T=v.attributes.position;let E=0;if(M!==null){const U=M.array;E=M.version;for(let C=0,L=U.length;C<L;C+=3){const j=U[C+0],B=U[C+1],O=U[C+2];y.push(j,B,B,O,O,j)}}else if(T!==void 0){const U=T.array;E=T.version;for(let C=0,L=U.length/3-1;C<L;C+=3){const j=C+0,B=C+1,O=C+2;y.push(j,B,B,O,O,j)}}else return;const _=new(Kv(y)?a_:i_)(y,1);_.version=E;const x=c.get(v);x&&t.remove(x),c.set(v,_)}function g(v){const y=c.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function fb(r,t,i){let s;function l(y){s=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function p(y,M){r.drawElements(s,M,c,y*f),i.update(M,s,1)}function m(y,M,T){T!==0&&(r.drawElementsInstanced(s,M,c,y*f,T),i.update(M,s,T))}function g(y,M,T){if(T===0)return;const E=t.get("WEBGL_multi_draw");if(E===null)for(let _=0;_<T;_++)this.render(y[_]/f,M[_]);else{E.multiDrawElementsWEBGL(s,M,0,c,y,0,T);let _=0;for(let x=0;x<T;x++)_+=M[x];i.update(_,s,1)}}function v(y,M,T,E){if(T===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let x=0;x<y.length;x++)m(y[x]/f,M[x],E[x]);else{_.multiDrawElementsInstancedWEBGL(s,M,0,c,y,0,E,0,T);let x=0;for(let U=0;U<T;U++)x+=M[U];for(let U=0;U<E.length;U++)i.update(x,s,E[U])}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function hb(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function db(r,t,i){const s=new WeakMap,l=new hn;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==v){let b=function(){Z.dispose(),s.delete(d),d.removeEventListener("dispose",b)};var M=b;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let L=0;T===!0&&(L=1),E===!0&&(L=2),_===!0&&(L=3);let j=d.attributes.position.count*L,B=1;j>t.maxTextureSize&&(B=Math.ceil(j/t.maxTextureSize),j=t.maxTextureSize);const O=new Float32Array(j*B*4*v),Z=new Jv(O,j,B,v);Z.type=Pa,Z.needsUpdate=!0;const D=L*4;for(let F=0;F<v;F++){const J=x[F],H=U[F],st=C[F],ot=j*B*4*F;for(let z=0;z<J.count;z++){const W=z*D;T===!0&&(l.fromBufferAttribute(J,z),O[ot+W+0]=l.x,O[ot+W+1]=l.y,O[ot+W+2]=l.z,O[ot+W+3]=0),E===!0&&(l.fromBufferAttribute(H,z),O[ot+W+4]=l.x,O[ot+W+5]=l.y,O[ot+W+6]=l.z,O[ot+W+7]=0),_===!0&&(l.fromBufferAttribute(st,z),O[ot+W+8]=l.x,O[ot+W+9]=l.y,O[ot+W+10]=l.z,O[ot+W+11]=st.itemSize===4?l.w:1)}}y={count:v,texture:Z,size:new zt(j,B)},s.set(d,y),d.addEventListener("dispose",b)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let T=0;for(let _=0;_<m.length;_++)T+=m[_];const E=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(r,"morphTargetBaseInfluence",E),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function pb(r,t,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,v=t.get(p,g);if(l.get(v)!==m&&(t.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return v}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}class c_ extends Gn{constructor(t,i,s,l,c,f,d,p,m,g){if(g=g!==void 0?g:Er,g!==Er&&g!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===Er&&(s=Rr),s===void 0&&g===Bo&&(s=Go),super(null,l,c,f,d,p,g,s,m),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:li,this.minFilter=p!==void 0?p:li,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const u_=new Gn,f_=new c_(1,1);f_.compareFunction=Zv;const h_=new Jv,d_=new tM,p_=new o_,lv=[],cv=[],uv=new Float32Array(16),fv=new Float32Array(9),hv=new Float32Array(4);function Ur(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=lv[l];if(c===void 0&&(c=new Float32Array(l),lv[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function on(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function ln(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function kc(r,t){let i=cv[t];i===void 0&&(i=new Int32Array(t),cv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function mb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function gb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;r.uniform2fv(this.addr,t),ln(i,t)}}function vb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(on(i,t))return;r.uniform3fv(this.addr,t),ln(i,t)}}function _b(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;r.uniform4fv(this.addr,t),ln(i,t)}}function xb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(on(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),ln(i,t)}else{if(on(i,s))return;hv.set(s),r.uniformMatrix2fv(this.addr,!1,hv),ln(i,s)}}function yb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(on(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),ln(i,t)}else{if(on(i,s))return;fv.set(s),r.uniformMatrix3fv(this.addr,!1,fv),ln(i,s)}}function Sb(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(on(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),ln(i,t)}else{if(on(i,s))return;uv.set(s),r.uniformMatrix4fv(this.addr,!1,uv),ln(i,s)}}function Mb(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function Eb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;r.uniform2iv(this.addr,t),ln(i,t)}}function Tb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(on(i,t))return;r.uniform3iv(this.addr,t),ln(i,t)}}function bb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;r.uniform4iv(this.addr,t),ln(i,t)}}function Ab(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function Rb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;r.uniform2uiv(this.addr,t),ln(i,t)}}function Cb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(on(i,t))return;r.uniform3uiv(this.addr,t),ln(i,t)}}function wb(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;r.uniform4uiv(this.addr,t),ln(i,t)}}function Db(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);const c=this.type===r.SAMPLER_2D_SHADOW?f_:u_;i.setTexture2D(t||c,l)}function Lb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||d_,l)}function Ub(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||p_,l)}function Nb(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||h_,l)}function Ob(r){switch(r){case 5126:return mb;case 35664:return gb;case 35665:return vb;case 35666:return _b;case 35674:return xb;case 35675:return yb;case 35676:return Sb;case 5124:case 35670:return Mb;case 35667:case 35671:return Eb;case 35668:case 35672:return Tb;case 35669:case 35673:return bb;case 5125:return Ab;case 36294:return Rb;case 36295:return Cb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Lb;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Nb}}function Pb(r,t){r.uniform1fv(this.addr,t)}function zb(r,t){const i=Ur(t,this.size,2);r.uniform2fv(this.addr,i)}function Bb(r,t){const i=Ur(t,this.size,3);r.uniform3fv(this.addr,i)}function Ib(r,t){const i=Ur(t,this.size,4);r.uniform4fv(this.addr,i)}function Fb(r,t){const i=Ur(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function Hb(r,t){const i=Ur(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function Gb(r,t){const i=Ur(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function Vb(r,t){r.uniform1iv(this.addr,t)}function kb(r,t){r.uniform2iv(this.addr,t)}function Xb(r,t){r.uniform3iv(this.addr,t)}function Wb(r,t){r.uniform4iv(this.addr,t)}function qb(r,t){r.uniform1uiv(this.addr,t)}function Yb(r,t){r.uniform2uiv(this.addr,t)}function jb(r,t){r.uniform3uiv(this.addr,t)}function Zb(r,t){r.uniform4uiv(this.addr,t)}function Kb(r,t,i){const s=this.cache,l=t.length,c=kc(i,l);on(s,c)||(r.uniform1iv(this.addr,c),ln(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||u_,c[f])}function Qb(r,t,i){const s=this.cache,l=t.length,c=kc(i,l);on(s,c)||(r.uniform1iv(this.addr,c),ln(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||d_,c[f])}function Jb(r,t,i){const s=this.cache,l=t.length,c=kc(i,l);on(s,c)||(r.uniform1iv(this.addr,c),ln(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||p_,c[f])}function $b(r,t,i){const s=this.cache,l=t.length,c=kc(i,l);on(s,c)||(r.uniform1iv(this.addr,c),ln(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||h_,c[f])}function tA(r){switch(r){case 5126:return Pb;case 35664:return zb;case 35665:return Bb;case 35666:return Ib;case 35674:return Fb;case 35675:return Hb;case 35676:return Gb;case 5124:case 35670:return Vb;case 35667:case 35671:return kb;case 35668:case 35672:return Xb;case 35669:case 35673:return Wb;case 5125:return qb;case 36294:return Yb;case 36295:return jb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return Jb;case 36289:case 36303:case 36311:case 36292:return $b}}class eA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Ob(i.type)}}class nA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=tA(i.type)}}class iA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const zh=/(\w+)(\])?(\[|\.)?/g;function dv(r,t){r.seq.push(t),r.map[t.id]=t}function aA(r,t,i){const s=r.name,l=s.length;for(zh.lastIndex=0;;){const c=zh.exec(s),f=zh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){dv(i,m===void 0?new eA(d,r,t):new nA(d,r,t));break}else{let v=i.map[d];v===void 0&&(v=new iA(d),dv(i,v)),i=v}}}class Cc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);aA(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function pv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const sA=37297;let rA=0;function oA(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}function lA(r){const t=Pe.getPrimaries(Pe.workingColorSpace),i=Pe.getPrimaries(r);let s;switch(t===i?s="":t===Uc&&i===Lc?s="LinearDisplayP3ToLinearSRGB":t===Lc&&i===Uc&&(s="LinearSRGBToLinearDisplayP3"),r){case Va:case Hc:return[s,"LinearTransferOETF"];case Ti:case nd:return[s,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[s,"LinearTransferOETF"]}}function mv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),l=r.getShaderInfoLog(t).trim();if(s&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+oA(r.getShaderSource(t),f)}else return l}function cA(r,t){const i=lA(t);return`vec4 ${r}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function uA(r,t){let i;switch(t){case _S:i="Linear";break;case xS:i="Reinhard";break;case yS:i="OptimizedCineon";break;case SS:i="ACESFilmic";break;case ES:i="AgX";break;case TS:i="Neutral";break;case MS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function fA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function hA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function dA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function No(r){return r!==""}function gv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const pA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kh(r){return r.replace(pA,gA)}const mA=new Map;function gA(r,t){let i=he[t];if(i===void 0){const s=mA.get(t);if(s!==void 0)i=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Kh(i)}const vA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _v(r){return r.replace(vA,_A)}function _A(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function xv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xA(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Bv?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Iv?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===$i&&(t="SHADOWMAP_TYPE_VSM"),t}function yA(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case br:case Ar:t="ENVMAP_TYPE_CUBE";break;case Ic:t="ENVMAP_TYPE_CUBE_UV";break}return t}function SA(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}function MA(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Fv:t="ENVMAP_BLENDING_MULTIPLY";break;case gS:t="ENVMAP_BLENDING_MIX";break;case vS:t="ENVMAP_BLENDING_ADD";break}return t}function EA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function TA(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=xA(i),m=yA(i),g=SA(i),v=MA(i),y=EA(i),M=fA(i),T=hA(c),E=l.createProgram();let _,x,U=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),_.length>0&&(_+=`
`),x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),x.length>0&&(x+=`
`)):(_=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),x=[xv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ba?"#define TONE_MAPPING":"",i.toneMapping!==Ba?he.tonemapping_pars_fragment:"",i.toneMapping!==Ba?uA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,cA("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),f=Kh(f),f=gv(f,i),f=vv(f,i),d=Kh(d),d=gv(d,i),d=vv(d,i),f=_v(f),d=_v(d),i.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,x=["#define varying in",i.glslVersion===P0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===P0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=U+_+f,L=U+x+d,j=pv(l,l.VERTEX_SHADER,C),B=pv(l,l.FRAGMENT_SHADER,L);l.attachShader(E,j),l.attachShader(E,B),i.index0AttributeName!==void 0?l.bindAttribLocation(E,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(E,0,"position"),l.linkProgram(E);function O(F){if(r.debug.checkShaderErrors){const J=l.getProgramInfoLog(E).trim(),H=l.getShaderInfoLog(j).trim(),st=l.getShaderInfoLog(B).trim();let ot=!0,z=!0;if(l.getProgramParameter(E,l.LINK_STATUS)===!1)if(ot=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,E,j,B);else{const W=mv(l,j,"vertex"),k=mv(l,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(E,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+J+`
`+W+`
`+k)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(H===""||st==="")&&(z=!1);z&&(F.diagnostics={runnable:ot,programLog:J,vertexShader:{log:H,prefix:_},fragmentShader:{log:st,prefix:x}})}l.deleteShader(j),l.deleteShader(B),Z=new Cc(l,E),D=dA(l,E)}let Z;this.getUniforms=function(){return Z===void 0&&O(this),Z};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(E,sA)),b},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(E),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=rA++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=j,this.fragmentShader=B,this}let bA=0;class AA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new RA(t),i.set(t,s)),s}}class RA{constructor(t){this.id=bA++,this.code=t,this.usedTimes=0}}function CA(r,t,i,s,l,c,f){const d=new t_,p=new AA,m=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(D){return m.add(D),D===0?"uv":`uv${D}`}function _(D,b,F,J,H){const st=J.fog,ot=H.geometry,z=D.isMeshStandardMaterial?J.environment:null,W=(D.isMeshStandardMaterial?i:t).get(D.envMap||z),k=W&&W.mapping===Ic?W.image.height:null,dt=T[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const pt=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,N=pt!==void 0?pt.length:0;let et=0;ot.morphAttributes.position!==void 0&&(et=1),ot.morphAttributes.normal!==void 0&&(et=2),ot.morphAttributes.color!==void 0&&(et=3);let Mt,X,ut,Tt;if(dt){const Me=bi[dt];Mt=Me.vertexShader,X=Me.fragmentShader}else Mt=D.vertexShader,X=D.fragmentShader,p.update(D),ut=p.getVertexShaderID(D),Tt=p.getFragmentShaderID(D);const yt=r.getRenderTarget(),Yt=H.isInstancedMesh===!0,Xt=H.isBatchedMesh===!0,K=!!D.map,ue=!!D.matcap,ht=!!W,Rt=!!D.aoMap,gt=!!D.lightMap,Ct=!!D.bumpMap,bt=!!D.normalMap,Ft=!!D.displacementMap,Zt=!!D.emissiveMap,P=!!D.metalnessMap,R=!!D.roughnessMap,it=D.anisotropy>0,St=D.clearcoat>0,At=D.dispersion>0,_t=D.iridescence>0,jt=D.sheen>0,Ot=D.transmission>0,Ut=it&&!!D.anisotropyMap,ie=St&&!!D.clearcoatMap,wt=St&&!!D.clearcoatNormalMap,Wt=St&&!!D.clearcoatRoughnessMap,pe=_t&&!!D.iridescenceMap,te=_t&&!!D.iridescenceThicknessMap,It=jt&&!!D.sheenColorMap,Jt=jt&&!!D.sheenRoughnessMap,se=!!D.specularMap,ye=!!D.specularColorMap,le=!!D.specularIntensityMap,q=Ot&&!!D.transmissionMap,Et=Ot&&!!D.thicknessMap,vt=!!D.gradientMap,Nt=!!D.alphaMap,Bt=D.alphaTest>0,fe=!!D.alphaHash,Re=!!D.extensions;let De=Ba;D.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(De=r.toneMapping);const cn={shaderID:dt,shaderType:D.type,shaderName:D.name,vertexShader:Mt,fragmentShader:X,defines:D.defines,customVertexShaderID:ut,customFragmentShaderID:Tt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Xt,instancing:Yt,instancingColor:Yt&&H.instanceColor!==null,instancingMorph:Yt&&H.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:yt===null?r.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:Va,alphaToCoverage:!!D.alphaToCoverage,map:K,matcap:ue,envMap:ht,envMapMode:ht&&W.mapping,envMapCubeUVHeight:k,aoMap:Rt,lightMap:gt,bumpMap:Ct,normalMap:bt,displacementMap:y&&Ft,emissiveMap:Zt,normalMapObjectSpace:bt&&D.normalMapType===IS,normalMapTangentSpace:bt&&D.normalMapType===jv,metalnessMap:P,roughnessMap:R,anisotropy:it,anisotropyMap:Ut,clearcoat:St,clearcoatMap:ie,clearcoatNormalMap:wt,clearcoatRoughnessMap:Wt,dispersion:At,iridescence:_t,iridescenceMap:pe,iridescenceThicknessMap:te,sheen:jt,sheenColorMap:It,sheenRoughnessMap:Jt,specularMap:se,specularColorMap:ye,specularIntensityMap:le,transmission:Ot,transmissionMap:q,thicknessMap:Et,gradientMap:vt,opaque:D.transparent===!1&&D.blending===Mr&&D.alphaToCoverage===!1,alphaMap:Nt,alphaTest:Bt,alphaHash:fe,combine:D.combine,mapUv:K&&E(D.map.channel),aoMapUv:Rt&&E(D.aoMap.channel),lightMapUv:gt&&E(D.lightMap.channel),bumpMapUv:Ct&&E(D.bumpMap.channel),normalMapUv:bt&&E(D.normalMap.channel),displacementMapUv:Ft&&E(D.displacementMap.channel),emissiveMapUv:Zt&&E(D.emissiveMap.channel),metalnessMapUv:P&&E(D.metalnessMap.channel),roughnessMapUv:R&&E(D.roughnessMap.channel),anisotropyMapUv:Ut&&E(D.anisotropyMap.channel),clearcoatMapUv:ie&&E(D.clearcoatMap.channel),clearcoatNormalMapUv:wt&&E(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Wt&&E(D.clearcoatRoughnessMap.channel),iridescenceMapUv:pe&&E(D.iridescenceMap.channel),iridescenceThicknessMapUv:te&&E(D.iridescenceThicknessMap.channel),sheenColorMapUv:It&&E(D.sheenColorMap.channel),sheenRoughnessMapUv:Jt&&E(D.sheenRoughnessMap.channel),specularMapUv:se&&E(D.specularMap.channel),specularColorMapUv:ye&&E(D.specularColorMap.channel),specularIntensityMapUv:le&&E(D.specularIntensityMap.channel),transmissionMapUv:q&&E(D.transmissionMap.channel),thicknessMapUv:Et&&E(D.thicknessMap.channel),alphaMapUv:Nt&&E(D.alphaMap.channel),vertexTangents:!!ot.attributes.tangent&&(bt||it),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!ot.attributes.uv&&(K||Nt),fog:!!st,useFog:D.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,skinning:H.isSkinnedMesh===!0,morphTargets:ot.morphAttributes.position!==void 0,morphNormals:ot.morphAttributes.normal!==void 0,morphColors:ot.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:et,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&F.length>0,shadowMapType:r.shadowMap.type,toneMapping:De,useLegacyLights:r._useLegacyLights,decodeVideoTexture:K&&D.map.isVideoTexture===!0&&Pe.getTransfer(D.map.colorSpace)===He,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ta,flipSided:D.side===Hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Re&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Re&&D.extensions.multiDraw===!0&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return cn.vertexUv1s=m.has(1),cn.vertexUv2s=m.has(2),cn.vertexUv3s=m.has(3),m.clear(),cn}function x(D){const b=[];if(D.shaderID?b.push(D.shaderID):(b.push(D.customVertexShaderID),b.push(D.customFragmentShaderID)),D.defines!==void 0)for(const F in D.defines)b.push(F),b.push(D.defines[F]);return D.isRawShaderMaterial===!1&&(U(b,D),C(b,D),b.push(r.outputColorSpace)),b.push(D.customProgramCacheKey),b.join()}function U(D,b){D.push(b.precision),D.push(b.outputColorSpace),D.push(b.envMapMode),D.push(b.envMapCubeUVHeight),D.push(b.mapUv),D.push(b.alphaMapUv),D.push(b.lightMapUv),D.push(b.aoMapUv),D.push(b.bumpMapUv),D.push(b.normalMapUv),D.push(b.displacementMapUv),D.push(b.emissiveMapUv),D.push(b.metalnessMapUv),D.push(b.roughnessMapUv),D.push(b.anisotropyMapUv),D.push(b.clearcoatMapUv),D.push(b.clearcoatNormalMapUv),D.push(b.clearcoatRoughnessMapUv),D.push(b.iridescenceMapUv),D.push(b.iridescenceThicknessMapUv),D.push(b.sheenColorMapUv),D.push(b.sheenRoughnessMapUv),D.push(b.specularMapUv),D.push(b.specularColorMapUv),D.push(b.specularIntensityMapUv),D.push(b.transmissionMapUv),D.push(b.thicknessMapUv),D.push(b.combine),D.push(b.fogExp2),D.push(b.sizeAttenuation),D.push(b.morphTargetsCount),D.push(b.morphAttributeCount),D.push(b.numDirLights),D.push(b.numPointLights),D.push(b.numSpotLights),D.push(b.numSpotLightMaps),D.push(b.numHemiLights),D.push(b.numRectAreaLights),D.push(b.numDirLightShadows),D.push(b.numPointLightShadows),D.push(b.numSpotLightShadows),D.push(b.numSpotLightShadowsWithMaps),D.push(b.numLightProbes),D.push(b.shadowMapType),D.push(b.toneMapping),D.push(b.numClippingPlanes),D.push(b.numClipIntersection),D.push(b.depthPacking)}function C(D,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),D.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.skinning&&d.enable(4),b.morphTargets&&d.enable(5),b.morphNormals&&d.enable(6),b.morphColors&&d.enable(7),b.premultipliedAlpha&&d.enable(8),b.shadowMapEnabled&&d.enable(9),b.useLegacyLights&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.alphaToCoverage&&d.enable(20),D.push(d.mask)}function L(D){const b=T[D.type];let F;if(b){const J=bi[b];F=hM.clone(J.uniforms)}else F=D.uniforms;return F}function j(D,b){let F;for(let J=0,H=g.length;J<H;J++){const st=g[J];if(st.cacheKey===b){F=st,++F.usedTimes;break}}return F===void 0&&(F=new TA(r,b,D,c),g.push(F)),F}function B(D){if(--D.usedTimes===0){const b=g.indexOf(D);g[b]=g[g.length-1],g.pop(),D.destroy()}}function O(D){p.remove(D)}function Z(){p.dispose()}return{getParameters:_,getProgramCacheKey:x,getUniforms:L,acquireProgram:j,releaseProgram:B,releaseShaderCache:O,programs:g,dispose:Z}}function wA(){let r=new WeakMap;function t(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function i(c){r.delete(c)}function s(c,f,d){r.get(c)[f]=d}function l(){r=new WeakMap}return{get:t,remove:i,update:s,dispose:l}}function DA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function yv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Sv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(v,y,M,T,E,_){let x=r[t];return x===void 0?(x={id:v.id,object:v,geometry:y,material:M,groupOrder:T,renderOrder:v.renderOrder,z:E,group:_},r[t]=x):(x.id=v.id,x.object=v,x.geometry=y,x.material=M,x.groupOrder=T,x.renderOrder=v.renderOrder,x.z=E,x.group=_),t++,x}function d(v,y,M,T,E,_){const x=f(v,y,M,T,E,_);M.transmission>0?s.push(x):M.transparent===!0?l.push(x):i.push(x)}function p(v,y,M,T,E,_){const x=f(v,y,M,T,E,_);M.transmission>0?s.unshift(x):M.transparent===!0?l.unshift(x):i.unshift(x)}function m(v,y){i.length>1&&i.sort(v||DA),s.length>1&&s.sort(y||yv),l.length>1&&l.sort(y||yv)}function g(){for(let v=t,y=r.length;v<y;v++){const M=r[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function LA(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Sv,r.set(s,[f])):l>=c.length?(f=new Sv,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function UA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new V,color:new xe};break;case"SpotLight":i={position:new V,direction:new V,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new V,color:new xe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new V,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":i={color:new xe,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=i,i}}}function NA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let OA=0;function PA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function zA(r){const t=new UA,i=NA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new V);const l=new V,c=new Xe,f=new Xe;function d(m,g){let v=0,y=0,M=0;for(let F=0;F<9;F++)s.probe[F].set(0,0,0);let T=0,E=0,_=0,x=0,U=0,C=0,L=0,j=0,B=0,O=0,Z=0;m.sort(PA);const D=g===!0?Math.PI:1;for(let F=0,J=m.length;F<J;F++){const H=m[F],st=H.color,ot=H.intensity,z=H.distance,W=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=st.r*ot*D,y+=st.g*ot*D,M+=st.b*ot*D;else if(H.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(H.sh.coefficients[k],ot);Z++}else if(H.isDirectionalLight){const k=t.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity*D),H.castShadow){const dt=H.shadow,pt=i.get(H);pt.shadowBias=dt.bias,pt.shadowNormalBias=dt.normalBias,pt.shadowRadius=dt.radius,pt.shadowMapSize=dt.mapSize,s.directionalShadow[T]=pt,s.directionalShadowMap[T]=W,s.directionalShadowMatrix[T]=H.shadow.matrix,C++}s.directional[T]=k,T++}else if(H.isSpotLight){const k=t.get(H);k.position.setFromMatrixPosition(H.matrixWorld),k.color.copy(st).multiplyScalar(ot*D),k.distance=z,k.coneCos=Math.cos(H.angle),k.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),k.decay=H.decay,s.spot[_]=k;const dt=H.shadow;if(H.map&&(s.spotLightMap[B]=H.map,B++,dt.updateMatrices(H),H.castShadow&&O++),s.spotLightMatrix[_]=dt.matrix,H.castShadow){const pt=i.get(H);pt.shadowBias=dt.bias,pt.shadowNormalBias=dt.normalBias,pt.shadowRadius=dt.radius,pt.shadowMapSize=dt.mapSize,s.spotShadow[_]=pt,s.spotShadowMap[_]=W,j++}_++}else if(H.isRectAreaLight){const k=t.get(H);k.color.copy(st).multiplyScalar(ot),k.halfWidth.set(H.width*.5,0,0),k.halfHeight.set(0,H.height*.5,0),s.rectArea[x]=k,x++}else if(H.isPointLight){const k=t.get(H);if(k.color.copy(H.color).multiplyScalar(H.intensity*D),k.distance=H.distance,k.decay=H.decay,H.castShadow){const dt=H.shadow,pt=i.get(H);pt.shadowBias=dt.bias,pt.shadowNormalBias=dt.normalBias,pt.shadowRadius=dt.radius,pt.shadowMapSize=dt.mapSize,pt.shadowCameraNear=dt.camera.near,pt.shadowCameraFar=dt.camera.far,s.pointShadow[E]=pt,s.pointShadowMap[E]=W,s.pointShadowMatrix[E]=H.shadow.matrix,L++}s.point[E]=k,E++}else if(H.isHemisphereLight){const k=t.get(H);k.skyColor.copy(H.color).multiplyScalar(ot*D),k.groundColor.copy(H.groundColor).multiplyScalar(ot*D),s.hemi[U]=k,U++}}x>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=y,s.ambient[2]=M;const b=s.hash;(b.directionalLength!==T||b.pointLength!==E||b.spotLength!==_||b.rectAreaLength!==x||b.hemiLength!==U||b.numDirectionalShadows!==C||b.numPointShadows!==L||b.numSpotShadows!==j||b.numSpotMaps!==B||b.numLightProbes!==Z)&&(s.directional.length=T,s.spot.length=_,s.rectArea.length=x,s.point.length=E,s.hemi.length=U,s.directionalShadow.length=C,s.directionalShadowMap.length=C,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=j,s.spotShadowMap.length=j,s.directionalShadowMatrix.length=C,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=j+B-O,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=Z,b.directionalLength=T,b.pointLength=E,b.spotLength=_,b.rectAreaLength=x,b.hemiLength=U,b.numDirectionalShadows=C,b.numPointShadows=L,b.numSpotShadows=j,b.numSpotMaps=B,b.numLightProbes=Z,s.version=OA++)}function p(m,g){let v=0,y=0,M=0,T=0,E=0;const _=g.matrixWorldInverse;for(let x=0,U=m.length;x<U;x++){const C=m[x];if(C.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(_),v++}else if(C.isSpotLight){const L=s.spot[M];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(_),M++}else if(C.isRectAreaLight){const L=s.rectArea[T];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(_),f.identity(),c.copy(C.matrixWorld),c.premultiply(_),f.extractRotation(c),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(f),L.halfHeight.applyMatrix4(f),T++}else if(C.isPointLight){const L=s.point[y];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(_),y++}else if(C.isHemisphereLight){const L=s.hemi[E];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(_),E++}}}return{setup:d,setupView:p,state:s}}function Mv(r){const t=new zA(r),i=[],s=[];function l(g){m.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function f(g){s.push(g)}function d(g){t.setup(i,g)}function p(g){t.setupView(i,g)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function BA(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Mv(r),t.set(l,[d])):c>=f.length?(d=new Mv(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}class IA extends Lr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class FA extends Lr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const HA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,GA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function VA(r,t,i){let s=new id;const l=new zt,c=new zt,f=new hn,d=new IA({depthPacking:BS}),p=new FA,m={},g=i.maxTextureSize,v={[Fa]:Hn,[Hn]:Fa,[ta]:ta},y=new Ga({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:HA,fragmentShader:GA}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new vi;T.setAttribute("position",new Ci(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Ln(T,y),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bv;let x=this.type;this.render=function(B,O,Z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||B.length===0)return;const D=r.getRenderTarget(),b=r.getActiveCubeFace(),F=r.getActiveMipmapLevel(),J=r.state;J.setBlending(za),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const H=x!==$i&&this.type===$i,st=x===$i&&this.type!==$i;for(let ot=0,z=B.length;ot<z;ot++){const W=B[ot],k=W.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;l.copy(k.mapSize);const dt=k.getFrameExtents();if(l.multiply(dt),c.copy(k.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/dt.x),l.x=c.x*dt.x,k.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/dt.y),l.y=c.y*dt.y,k.mapSize.y=c.y)),k.map===null||H===!0||st===!0){const N=this.type!==$i?{minFilter:li,magFilter:li}:{};k.map!==null&&k.map.dispose(),k.map=new ys(l.x,l.y,N),k.map.texture.name=W.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const pt=k.getViewportCount();for(let N=0;N<pt;N++){const et=k.getViewport(N);f.set(c.x*et.x,c.y*et.y,c.x*et.z,c.y*et.w),J.viewport(f),k.updateMatrices(W,N),s=k.getFrustum(),L(O,Z,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===$i&&U(k,Z),k.needsUpdate=!1}x=this.type,_.needsUpdate=!1,r.setRenderTarget(D,b,F)};function U(B,O){const Z=t.update(E);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ys(l.x,l.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(O,null,Z,y,E,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(O,null,Z,M,E,null)}function C(B,O,Z,D){let b=null;const F=Z.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(F!==void 0)b=F;else if(b=Z.isPointLight===!0?p:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const J=b.uuid,H=O.uuid;let st=m[J];st===void 0&&(st={},m[J]=st);let ot=st[H];ot===void 0&&(ot=b.clone(),st[H]=ot,O.addEventListener("dispose",j)),b=ot}if(b.visible=O.visible,b.wireframe=O.wireframe,D===$i?b.side=O.shadowSide!==null?O.shadowSide:O.side:b.side=O.shadowSide!==null?O.shadowSide:v[O.side],b.alphaMap=O.alphaMap,b.alphaTest=O.alphaTest,b.map=O.map,b.clipShadows=O.clipShadows,b.clippingPlanes=O.clippingPlanes,b.clipIntersection=O.clipIntersection,b.displacementMap=O.displacementMap,b.displacementScale=O.displacementScale,b.displacementBias=O.displacementBias,b.wireframeLinewidth=O.wireframeLinewidth,b.linewidth=O.linewidth,Z.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const J=r.properties.get(b);J.light=Z}return b}function L(B,O,Z,D,b){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&b===$i)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,B.matrixWorld);const H=t.update(B),st=B.material;if(Array.isArray(st)){const ot=H.groups;for(let z=0,W=ot.length;z<W;z++){const k=ot[z],dt=st[k.materialIndex];if(dt&&dt.visible){const pt=C(B,dt,D,b);B.onBeforeShadow(r,B,O,Z,H,pt,k),r.renderBufferDirect(Z,null,H,pt,B,k),B.onAfterShadow(r,B,O,Z,H,pt,k)}}}else if(st.visible){const ot=C(B,st,D,b);B.onBeforeShadow(r,B,O,Z,H,ot,null),r.renderBufferDirect(Z,null,H,ot,B,null),B.onAfterShadow(r,B,O,Z,H,ot,null)}}const J=B.children;for(let H=0,st=J.length;H<st;H++)L(J[H],O,Z,D,b)}function j(B){B.target.removeEventListener("dispose",j);for(const Z in m){const D=m[Z],b=B.target.uuid;b in D&&(D[b].dispose(),delete D[b])}}}function kA(r){function t(){let q=!1;const Et=new hn;let vt=null;const Nt=new hn(0,0,0,0);return{setMask:function(Bt){vt!==Bt&&!q&&(r.colorMask(Bt,Bt,Bt,Bt),vt=Bt)},setLocked:function(Bt){q=Bt},setClear:function(Bt,fe,Re,De,cn){cn===!0&&(Bt*=De,fe*=De,Re*=De),Et.set(Bt,fe,Re,De),Nt.equals(Et)===!1&&(r.clearColor(Bt,fe,Re,De),Nt.copy(Et))},reset:function(){q=!1,vt=null,Nt.set(-1,0,0,0)}}}function i(){let q=!1,Et=null,vt=null,Nt=null;return{setTest:function(Bt){Bt?Tt(r.DEPTH_TEST):yt(r.DEPTH_TEST)},setMask:function(Bt){Et!==Bt&&!q&&(r.depthMask(Bt),Et=Bt)},setFunc:function(Bt){if(vt!==Bt){switch(Bt){case cS:r.depthFunc(r.NEVER);break;case uS:r.depthFunc(r.ALWAYS);break;case fS:r.depthFunc(r.LESS);break;case wc:r.depthFunc(r.LEQUAL);break;case hS:r.depthFunc(r.EQUAL);break;case dS:r.depthFunc(r.GEQUAL);break;case pS:r.depthFunc(r.GREATER);break;case mS:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}vt=Bt}},setLocked:function(Bt){q=Bt},setClear:function(Bt){Nt!==Bt&&(r.clearDepth(Bt),Nt=Bt)},reset:function(){q=!1,Et=null,vt=null,Nt=null}}}function s(){let q=!1,Et=null,vt=null,Nt=null,Bt=null,fe=null,Re=null,De=null,cn=null;return{setTest:function(Me){q||(Me?Tt(r.STENCIL_TEST):yt(r.STENCIL_TEST))},setMask:function(Me){Et!==Me&&!q&&(r.stencilMask(Me),Et=Me)},setFunc:function(Me,Un,Ye){(vt!==Me||Nt!==Un||Bt!==Ye)&&(r.stencilFunc(Me,Un,Ye),vt=Me,Nt=Un,Bt=Ye)},setOp:function(Me,Un,Ye){(fe!==Me||Re!==Un||De!==Ye)&&(r.stencilOp(Me,Un,Ye),fe=Me,Re=Un,De=Ye)},setLocked:function(Me){q=Me},setClear:function(Me){cn!==Me&&(r.clearStencil(Me),cn=Me)},reset:function(){q=!1,Et=null,vt=null,Nt=null,Bt=null,fe=null,Re=null,De=null,cn=null}}}const l=new t,c=new i,f=new s,d=new WeakMap,p=new WeakMap;let m={},g={},v=new WeakMap,y=[],M=null,T=!1,E=null,_=null,x=null,U=null,C=null,L=null,j=null,B=new xe(0,0,0),O=0,Z=!1,D=null,b=null,F=null,J=null,H=null;const st=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ot=!1,z=0;const W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(W)[1]),ot=z>=1):W.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),ot=z>=2);let k=null,dt={};const pt=r.getParameter(r.SCISSOR_BOX),N=r.getParameter(r.VIEWPORT),et=new hn().fromArray(pt),Mt=new hn().fromArray(N);function X(q,Et,vt,Nt){const Bt=new Uint8Array(4),fe=r.createTexture();r.bindTexture(q,fe),r.texParameteri(q,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(q,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Re=0;Re<vt;Re++)q===r.TEXTURE_3D||q===r.TEXTURE_2D_ARRAY?r.texImage3D(Et,0,r.RGBA,1,1,Nt,0,r.RGBA,r.UNSIGNED_BYTE,Bt):r.texImage2D(Et+Re,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Bt);return fe}const ut={};ut[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),ut[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ut[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),Tt(r.DEPTH_TEST),c.setFunc(wc),Ct(!1),bt(i0),Tt(r.CULL_FACE),Rt(za);function Tt(q){m[q]!==!0&&(r.enable(q),m[q]=!0)}function yt(q){m[q]!==!1&&(r.disable(q),m[q]=!1)}function Yt(q,Et){return g[q]!==Et?(r.bindFramebuffer(q,Et),g[q]=Et,q===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Et),q===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Et),!0):!1}function Xt(q,Et){let vt=y,Nt=!1;if(q){vt=v.get(Et),vt===void 0&&(vt=[],v.set(Et,vt));const Bt=q.textures;if(vt.length!==Bt.length||vt[0]!==r.COLOR_ATTACHMENT0){for(let fe=0,Re=Bt.length;fe<Re;fe++)vt[fe]=r.COLOR_ATTACHMENT0+fe;vt.length=Bt.length,Nt=!0}}else vt[0]!==r.BACK&&(vt[0]=r.BACK,Nt=!0);Nt&&r.drawBuffers(vt)}function K(q){return M!==q?(r.useProgram(q),M=q,!0):!1}const ue={[gs]:r.FUNC_ADD,[qy]:r.FUNC_SUBTRACT,[Yy]:r.FUNC_REVERSE_SUBTRACT};ue[jy]=r.MIN,ue[Zy]=r.MAX;const ht={[Ky]:r.ZERO,[Qy]:r.ONE,[Jy]:r.SRC_COLOR,[kh]:r.SRC_ALPHA,[aS]:r.SRC_ALPHA_SATURATE,[nS]:r.DST_COLOR,[tS]:r.DST_ALPHA,[$y]:r.ONE_MINUS_SRC_COLOR,[Xh]:r.ONE_MINUS_SRC_ALPHA,[iS]:r.ONE_MINUS_DST_COLOR,[eS]:r.ONE_MINUS_DST_ALPHA,[sS]:r.CONSTANT_COLOR,[rS]:r.ONE_MINUS_CONSTANT_COLOR,[oS]:r.CONSTANT_ALPHA,[lS]:r.ONE_MINUS_CONSTANT_ALPHA};function Rt(q,Et,vt,Nt,Bt,fe,Re,De,cn,Me){if(q===za){T===!0&&(yt(r.BLEND),T=!1);return}if(T===!1&&(Tt(r.BLEND),T=!0),q!==Wy){if(q!==E||Me!==Z){if((_!==gs||C!==gs)&&(r.blendEquation(r.FUNC_ADD),_=gs,C=gs),Me)switch(q){case Mr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case a0:r.blendFunc(r.ONE,r.ONE);break;case s0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case r0:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Mr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case a0:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case s0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case r0:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}x=null,U=null,L=null,j=null,B.set(0,0,0),O=0,E=q,Z=Me}return}Bt=Bt||Et,fe=fe||vt,Re=Re||Nt,(Et!==_||Bt!==C)&&(r.blendEquationSeparate(ue[Et],ue[Bt]),_=Et,C=Bt),(vt!==x||Nt!==U||fe!==L||Re!==j)&&(r.blendFuncSeparate(ht[vt],ht[Nt],ht[fe],ht[Re]),x=vt,U=Nt,L=fe,j=Re),(De.equals(B)===!1||cn!==O)&&(r.blendColor(De.r,De.g,De.b,cn),B.copy(De),O=cn),E=q,Z=!1}function gt(q,Et){q.side===ta?yt(r.CULL_FACE):Tt(r.CULL_FACE);let vt=q.side===Hn;Et&&(vt=!vt),Ct(vt),q.blending===Mr&&q.transparent===!1?Rt(za):Rt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const Nt=q.stencilWrite;f.setTest(Nt),Nt&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Zt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Tt(r.SAMPLE_ALPHA_TO_COVERAGE):yt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(q){D!==q&&(q?r.frontFace(r.CW):r.frontFace(r.CCW),D=q)}function bt(q){q!==ky?(Tt(r.CULL_FACE),q!==b&&(q===i0?r.cullFace(r.BACK):q===Xy?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):yt(r.CULL_FACE),b=q}function Ft(q){q!==F&&(ot&&r.lineWidth(q),F=q)}function Zt(q,Et,vt){q?(Tt(r.POLYGON_OFFSET_FILL),(J!==Et||H!==vt)&&(r.polygonOffset(Et,vt),J=Et,H=vt)):yt(r.POLYGON_OFFSET_FILL)}function P(q){q?Tt(r.SCISSOR_TEST):yt(r.SCISSOR_TEST)}function R(q){q===void 0&&(q=r.TEXTURE0+st-1),k!==q&&(r.activeTexture(q),k=q)}function it(q,Et,vt){vt===void 0&&(k===null?vt=r.TEXTURE0+st-1:vt=k);let Nt=dt[vt];Nt===void 0&&(Nt={type:void 0,texture:void 0},dt[vt]=Nt),(Nt.type!==q||Nt.texture!==Et)&&(k!==vt&&(r.activeTexture(vt),k=vt),r.bindTexture(q,Et||ut[q]),Nt.type=q,Nt.texture=Et)}function St(){const q=dt[k];q!==void 0&&q.type!==void 0&&(r.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function At(){try{r.compressedTexImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _t(){try{r.compressedTexImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function jt(){try{r.texSubImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ot(){try{r.texSubImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ie(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function wt(){try{r.texStorage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Wt(){try{r.texStorage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function pe(){try{r.texImage2D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function te(){try{r.texImage3D.apply(r,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function It(q){et.equals(q)===!1&&(r.scissor(q.x,q.y,q.z,q.w),et.copy(q))}function Jt(q){Mt.equals(q)===!1&&(r.viewport(q.x,q.y,q.z,q.w),Mt.copy(q))}function se(q,Et){let vt=p.get(Et);vt===void 0&&(vt=new WeakMap,p.set(Et,vt));let Nt=vt.get(q);Nt===void 0&&(Nt=r.getUniformBlockIndex(Et,q.name),vt.set(q,Nt))}function ye(q,Et){const Nt=p.get(Et).get(q);d.get(Et)!==Nt&&(r.uniformBlockBinding(Et,Nt,q.__bindingPointIndex),d.set(Et,Nt))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),m={},k=null,dt={},g={},v=new WeakMap,y=[],M=null,T=!1,E=null,_=null,x=null,U=null,C=null,L=null,j=null,B=new xe(0,0,0),O=0,Z=!1,D=null,b=null,F=null,J=null,H=null,et.set(0,0,r.canvas.width,r.canvas.height),Mt.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:Tt,disable:yt,bindFramebuffer:Yt,drawBuffers:Xt,useProgram:K,setBlending:Rt,setMaterial:gt,setFlipSided:Ct,setCullFace:bt,setLineWidth:Ft,setPolygonOffset:Zt,setScissorTest:P,activeTexture:R,bindTexture:it,unbindTexture:St,compressedTexImage2D:At,compressedTexImage3D:_t,texImage2D:pe,texImage3D:te,updateUBOMapping:se,uniformBlockBinding:ye,texStorage2D:wt,texStorage3D:Wt,texSubImage2D:jt,texSubImage3D:Ot,compressedTexSubImage2D:Ut,compressedTexSubImage3D:ie,scissor:It,viewport:Jt,reset:le}}function XA(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new zt,g=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,R){return M?new OffscreenCanvas(P,R):Oc("canvas")}function E(P,R,it){let St=1;const At=Zt(P);if((At.width>it||At.height>it)&&(St=it/Math.max(At.width,At.height)),St<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const _t=Math.floor(St*At.width),jt=Math.floor(St*At.height);v===void 0&&(v=T(_t,jt));const Ot=R?T(_t,jt):v;return Ot.width=_t,Ot.height=jt,Ot.getContext("2d").drawImage(P,0,0,_t,jt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+_t+"x"+jt+")."),Ot}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),P;return P}function _(P){return P.generateMipmaps&&P.minFilter!==li&&P.minFilter!==gi}function x(P){r.generateMipmap(P)}function U(P,R,it,St,At=!1){if(P!==null){if(r[P]!==void 0)return r[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let _t=R;if(R===r.RED&&(it===r.FLOAT&&(_t=r.R32F),it===r.HALF_FLOAT&&(_t=r.R16F),it===r.UNSIGNED_BYTE&&(_t=r.R8)),R===r.RED_INTEGER&&(it===r.UNSIGNED_BYTE&&(_t=r.R8UI),it===r.UNSIGNED_SHORT&&(_t=r.R16UI),it===r.UNSIGNED_INT&&(_t=r.R32UI),it===r.BYTE&&(_t=r.R8I),it===r.SHORT&&(_t=r.R16I),it===r.INT&&(_t=r.R32I)),R===r.RG&&(it===r.FLOAT&&(_t=r.RG32F),it===r.HALF_FLOAT&&(_t=r.RG16F),it===r.UNSIGNED_BYTE&&(_t=r.RG8)),R===r.RG_INTEGER&&(it===r.UNSIGNED_BYTE&&(_t=r.RG8UI),it===r.UNSIGNED_SHORT&&(_t=r.RG16UI),it===r.UNSIGNED_INT&&(_t=r.RG32UI),it===r.BYTE&&(_t=r.RG8I),it===r.SHORT&&(_t=r.RG16I),it===r.INT&&(_t=r.RG32I)),R===r.RGB&&it===r.UNSIGNED_INT_5_9_9_9_REV&&(_t=r.RGB9_E5),R===r.RGBA){const jt=At?Dc:Pe.getTransfer(St);it===r.FLOAT&&(_t=r.RGBA32F),it===r.HALF_FLOAT&&(_t=r.RGBA16F),it===r.UNSIGNED_BYTE&&(_t=jt===He?r.SRGB8_ALPHA8:r.RGBA8),it===r.UNSIGNED_SHORT_4_4_4_4&&(_t=r.RGBA4),it===r.UNSIGNED_SHORT_5_5_5_1&&(_t=r.RGB5_A1)}return(_t===r.R16F||_t===r.R32F||_t===r.RG16F||_t===r.RG32F||_t===r.RGBA16F||_t===r.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function C(P,R){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==li&&P.minFilter!==gi?Math.log2(Math.max(R.width,R.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?R.mipmaps.length:1}function L(P){const R=P.target;R.removeEventListener("dispose",L),B(R),R.isVideoTexture&&g.delete(R)}function j(P){const R=P.target;R.removeEventListener("dispose",j),Z(R)}function B(P){const R=s.get(P);if(R.__webglInit===void 0)return;const it=P.source,St=y.get(it);if(St){const At=St[R.__cacheKey];At.usedTimes--,At.usedTimes===0&&O(P),Object.keys(St).length===0&&y.delete(it)}s.remove(P)}function O(P){const R=s.get(P);r.deleteTexture(R.__webglTexture);const it=P.source,St=y.get(it);delete St[R.__cacheKey],f.memory.textures--}function Z(P){const R=s.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let St=0;St<6;St++){if(Array.isArray(R.__webglFramebuffer[St]))for(let At=0;At<R.__webglFramebuffer[St].length;At++)r.deleteFramebuffer(R.__webglFramebuffer[St][At]);else r.deleteFramebuffer(R.__webglFramebuffer[St]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[St])}else{if(Array.isArray(R.__webglFramebuffer))for(let St=0;St<R.__webglFramebuffer.length;St++)r.deleteFramebuffer(R.__webglFramebuffer[St]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let St=0;St<R.__webglColorRenderbuffer.length;St++)R.__webglColorRenderbuffer[St]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[St]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const it=P.textures;for(let St=0,At=it.length;St<At;St++){const _t=s.get(it[St]);_t.__webglTexture&&(r.deleteTexture(_t.__webglTexture),f.memory.textures--),s.remove(it[St])}s.remove(P)}let D=0;function b(){D=0}function F(){const P=D;return P>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),D+=1,P}function J(P){const R=[];return R.push(P.wrapS),R.push(P.wrapT),R.push(P.wrapR||0),R.push(P.magFilter),R.push(P.minFilter),R.push(P.anisotropy),R.push(P.internalFormat),R.push(P.format),R.push(P.type),R.push(P.generateMipmaps),R.push(P.premultiplyAlpha),R.push(P.flipY),R.push(P.unpackAlignment),R.push(P.colorSpace),R.join()}function H(P,R){const it=s.get(P);if(P.isVideoTexture&&bt(P),P.isRenderTargetTexture===!1&&P.version>0&&it.__version!==P.version){const St=P.image;if(St===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(St.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(it,P,R);return}}i.bindTexture(r.TEXTURE_2D,it.__webglTexture,r.TEXTURE0+R)}function st(P,R){const it=s.get(P);if(P.version>0&&it.__version!==P.version){et(it,P,R);return}i.bindTexture(r.TEXTURE_2D_ARRAY,it.__webglTexture,r.TEXTURE0+R)}function ot(P,R){const it=s.get(P);if(P.version>0&&it.__version!==P.version){et(it,P,R);return}i.bindTexture(r.TEXTURE_3D,it.__webglTexture,r.TEXTURE0+R)}function z(P,R){const it=s.get(P);if(P.version>0&&it.__version!==P.version){Mt(it,P,R);return}i.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture,r.TEXTURE0+R)}const W={[Yh]:r.REPEAT,[_s]:r.CLAMP_TO_EDGE,[jh]:r.MIRRORED_REPEAT},k={[li]:r.NEAREST,[bS]:r.NEAREST_MIPMAP_NEAREST,[$l]:r.NEAREST_MIPMAP_LINEAR,[gi]:r.LINEAR,[sh]:r.LINEAR_MIPMAP_NEAREST,[xs]:r.LINEAR_MIPMAP_LINEAR},dt={[FS]:r.NEVER,[WS]:r.ALWAYS,[HS]:r.LESS,[Zv]:r.LEQUAL,[GS]:r.EQUAL,[XS]:r.GEQUAL,[VS]:r.GREATER,[kS]:r.NOTEQUAL};function pt(P,R){if(R.type===Pa&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===gi||R.magFilter===sh||R.magFilter===$l||R.magFilter===xs||R.minFilter===gi||R.minFilter===sh||R.minFilter===$l||R.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,W[R.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,W[R.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,W[R.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,k[R.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,k[R.minFilter]),R.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,dt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===li||R.minFilter!==$l&&R.minFilter!==xs||R.type===Pa&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function N(P,R){let it=!1;P.__webglInit===void 0&&(P.__webglInit=!0,R.addEventListener("dispose",L));const St=R.source;let At=y.get(St);At===void 0&&(At={},y.set(St,At));const _t=J(R);if(_t!==P.__cacheKey){At[_t]===void 0&&(At[_t]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,it=!0),At[_t].usedTimes++;const jt=At[P.__cacheKey];jt!==void 0&&(At[P.__cacheKey].usedTimes--,jt.usedTimes===0&&O(R)),P.__cacheKey=_t,P.__webglTexture=At[_t].texture}return it}function et(P,R,it){let St=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(St=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(St=r.TEXTURE_3D);const At=N(P,R),_t=R.source;i.bindTexture(St,P.__webglTexture,r.TEXTURE0+it);const jt=s.get(_t);if(_t.version!==jt.__version||At===!0){i.activeTexture(r.TEXTURE0+it);const Ot=Pe.getPrimaries(Pe.workingColorSpace),Ut=R.colorSpace===Oa?null:Pe.getPrimaries(R.colorSpace),ie=R.colorSpace===Oa||Ot===Ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let wt=E(R.image,!1,l.maxTextureSize);wt=Ft(R,wt);const Wt=c.convert(R.format,R.colorSpace),pe=c.convert(R.type);let te=U(R.internalFormat,Wt,pe,R.colorSpace,R.isVideoTexture);pt(St,R);let It;const Jt=R.mipmaps,se=R.isVideoTexture!==!0,ye=jt.__version===void 0||At===!0,le=_t.dataReady,q=C(R,wt);if(R.isDepthTexture)te=r.DEPTH_COMPONENT16,R.type===Pa?te=r.DEPTH_COMPONENT32F:R.type===Rr?te=r.DEPTH_COMPONENT24:R.type===Go&&(te=r.DEPTH24_STENCIL8),ye&&(se?i.texStorage2D(r.TEXTURE_2D,1,te,wt.width,wt.height):i.texImage2D(r.TEXTURE_2D,0,te,wt.width,wt.height,0,Wt,pe,null));else if(R.isDataTexture)if(Jt.length>0){se&&ye&&i.texStorage2D(r.TEXTURE_2D,q,te,Jt[0].width,Jt[0].height);for(let Et=0,vt=Jt.length;Et<vt;Et++)It=Jt[Et],se?le&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,It.width,It.height,Wt,pe,It.data):i.texImage2D(r.TEXTURE_2D,Et,te,It.width,It.height,0,Wt,pe,It.data);R.generateMipmaps=!1}else se?(ye&&i.texStorage2D(r.TEXTURE_2D,q,te,wt.width,wt.height),le&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,wt.width,wt.height,Wt,pe,wt.data)):i.texImage2D(r.TEXTURE_2D,0,te,wt.width,wt.height,0,Wt,pe,wt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){se&&ye&&i.texStorage3D(r.TEXTURE_2D_ARRAY,q,te,Jt[0].width,Jt[0].height,wt.depth);for(let Et=0,vt=Jt.length;Et<vt;Et++)It=Jt[Et],R.format!==Ri?Wt!==null?se?le&&i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,It.width,It.height,wt.depth,Wt,It.data,0,0):i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Et,te,It.width,It.height,wt.depth,0,It.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?le&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Et,0,0,0,It.width,It.height,wt.depth,Wt,pe,It.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Et,te,It.width,It.height,wt.depth,0,Wt,pe,It.data)}else{se&&ye&&i.texStorage2D(r.TEXTURE_2D,q,te,Jt[0].width,Jt[0].height);for(let Et=0,vt=Jt.length;Et<vt;Et++)It=Jt[Et],R.format!==Ri?Wt!==null?se?le&&i.compressedTexSubImage2D(r.TEXTURE_2D,Et,0,0,It.width,It.height,Wt,It.data):i.compressedTexImage2D(r.TEXTURE_2D,Et,te,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?le&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,It.width,It.height,Wt,pe,It.data):i.texImage2D(r.TEXTURE_2D,Et,te,It.width,It.height,0,Wt,pe,It.data)}else if(R.isDataArrayTexture)se?(ye&&i.texStorage3D(r.TEXTURE_2D_ARRAY,q,te,wt.width,wt.height,wt.depth),le&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,wt.width,wt.height,wt.depth,Wt,pe,wt.data)):i.texImage3D(r.TEXTURE_2D_ARRAY,0,te,wt.width,wt.height,wt.depth,0,Wt,pe,wt.data);else if(R.isData3DTexture)se?(ye&&i.texStorage3D(r.TEXTURE_3D,q,te,wt.width,wt.height,wt.depth),le&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,wt.width,wt.height,wt.depth,Wt,pe,wt.data)):i.texImage3D(r.TEXTURE_3D,0,te,wt.width,wt.height,wt.depth,0,Wt,pe,wt.data);else if(R.isFramebufferTexture){if(ye)if(se)i.texStorage2D(r.TEXTURE_2D,q,te,wt.width,wt.height);else{let Et=wt.width,vt=wt.height;for(let Nt=0;Nt<q;Nt++)i.texImage2D(r.TEXTURE_2D,Nt,te,Et,vt,0,Wt,pe,null),Et>>=1,vt>>=1}}else if(Jt.length>0){if(se&&ye){const Et=Zt(Jt[0]);i.texStorage2D(r.TEXTURE_2D,q,te,Et.width,Et.height)}for(let Et=0,vt=Jt.length;Et<vt;Et++)It=Jt[Et],se?le&&i.texSubImage2D(r.TEXTURE_2D,Et,0,0,Wt,pe,It):i.texImage2D(r.TEXTURE_2D,Et,te,Wt,pe,It);R.generateMipmaps=!1}else if(se){if(ye){const Et=Zt(wt);i.texStorage2D(r.TEXTURE_2D,q,te,Et.width,Et.height)}le&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Wt,pe,wt)}else i.texImage2D(r.TEXTURE_2D,0,te,Wt,pe,wt);_(R)&&x(St),jt.__version=_t.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function Mt(P,R,it){if(R.image.length!==6)return;const St=N(P,R),At=R.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+it);const _t=s.get(At);if(At.version!==_t.__version||St===!0){i.activeTexture(r.TEXTURE0+it);const jt=Pe.getPrimaries(Pe.workingColorSpace),Ot=R.colorSpace===Oa?null:Pe.getPrimaries(R.colorSpace),Ut=R.colorSpace===Oa||jt===Ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const ie=R.isCompressedTexture||R.image[0].isCompressedTexture,wt=R.image[0]&&R.image[0].isDataTexture,Wt=[];for(let vt=0;vt<6;vt++)!ie&&!wt?Wt[vt]=E(R.image[vt],!0,l.maxCubemapSize):Wt[vt]=wt?R.image[vt].image:R.image[vt],Wt[vt]=Ft(R,Wt[vt]);const pe=Wt[0],te=c.convert(R.format,R.colorSpace),It=c.convert(R.type),Jt=U(R.internalFormat,te,It,R.colorSpace),se=R.isVideoTexture!==!0,ye=_t.__version===void 0||St===!0,le=At.dataReady;let q=C(R,pe);pt(r.TEXTURE_CUBE_MAP,R);let Et;if(ie){se&&ye&&i.texStorage2D(r.TEXTURE_CUBE_MAP,q,Jt,pe.width,pe.height);for(let vt=0;vt<6;vt++){Et=Wt[vt].mipmaps;for(let Nt=0;Nt<Et.length;Nt++){const Bt=Et[Nt];R.format!==Ri?te!==null?se?le&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,0,0,Bt.width,Bt.height,te,Bt.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,Jt,Bt.width,Bt.height,0,Bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,0,0,Bt.width,Bt.height,te,It,Bt.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt,Jt,Bt.width,Bt.height,0,te,It,Bt.data)}}}else{if(Et=R.mipmaps,se&&ye){Et.length>0&&q++;const vt=Zt(Wt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,q,Jt,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(wt){se?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Wt[vt].width,Wt[vt].height,te,It,Wt[vt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Jt,Wt[vt].width,Wt[vt].height,0,te,It,Wt[vt].data);for(let Nt=0;Nt<Et.length;Nt++){const fe=Et[Nt].image[vt].image;se?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,0,0,fe.width,fe.height,te,It,fe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,Jt,fe.width,fe.height,0,te,It,fe.data)}}else{se?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,te,It,Wt[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,Jt,te,It,Wt[vt]);for(let Nt=0;Nt<Et.length;Nt++){const Bt=Et[Nt];se?le&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,0,0,te,It,Bt.image[vt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Nt+1,Jt,te,It,Bt.image[vt])}}}_(R)&&x(r.TEXTURE_CUBE_MAP),_t.__version=At.version,R.onUpdate&&R.onUpdate(R)}P.__version=R.version}function X(P,R,it,St,At,_t){const jt=c.convert(it.format,it.colorSpace),Ot=c.convert(it.type),Ut=U(it.internalFormat,jt,Ot,it.colorSpace);if(!s.get(R).__hasExternalTextures){const wt=Math.max(1,R.width>>_t),Wt=Math.max(1,R.height>>_t);At===r.TEXTURE_3D||At===r.TEXTURE_2D_ARRAY?i.texImage3D(At,_t,Ut,wt,Wt,R.depth,0,jt,Ot,null):i.texImage2D(At,_t,Ut,wt,Wt,0,jt,Ot,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Ct(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,St,At,s.get(it).__webglTexture,0,gt(R)):(At===r.TEXTURE_2D||At>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,St,At,s.get(it).__webglTexture,_t),i.bindFramebuffer(r.FRAMEBUFFER,null)}function ut(P,R,it){if(r.bindRenderbuffer(r.RENDERBUFFER,P),R.depthBuffer&&!R.stencilBuffer){let St=r.DEPTH_COMPONENT24;if(it||Ct(R)){const At=R.depthTexture;At&&At.isDepthTexture&&(At.type===Pa?St=r.DEPTH_COMPONENT32F:At.type===Rr&&(St=r.DEPTH_COMPONENT24));const _t=gt(R);Ct(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_t,St,R.width,R.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,St,R.width,R.height)}else r.renderbufferStorage(r.RENDERBUFFER,St,R.width,R.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,P)}else if(R.depthBuffer&&R.stencilBuffer){const St=gt(R);it&&Ct(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,r.DEPTH24_STENCIL8,R.width,R.height):Ct(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,r.DEPTH24_STENCIL8,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,P)}else{const St=R.textures;for(let At=0;At<St.length;At++){const _t=St[At],jt=c.convert(_t.format,_t.colorSpace),Ot=c.convert(_t.type),Ut=U(_t.internalFormat,jt,Ot,_t.colorSpace),ie=gt(R);it&&Ct(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,Ut,R.width,R.height):Ct(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,Ut,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Ut,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Tt(P,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!s.get(R.depthTexture).__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);const St=s.get(R.depthTexture).__webglTexture,At=gt(R);if(R.depthTexture.format===Er)Ct(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,St,0,At):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,St,0);else if(R.depthTexture.format===Bo)Ct(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,St,0,At):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function yt(P){const R=s.get(P),it=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!R.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");Tt(R.__webglFramebuffer,P)}else if(it){R.__webglDepthbuffer=[];for(let St=0;St<6;St++)i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[St]),R.__webglDepthbuffer[St]=r.createRenderbuffer(),ut(R.__webglDepthbuffer[St],P,!1)}else i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer=r.createRenderbuffer(),ut(R.__webglDepthbuffer,P,!1);i.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(P,R,it){const St=s.get(P);R!==void 0&&X(St.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),it!==void 0&&yt(P)}function Xt(P){const R=P.texture,it=s.get(P),St=s.get(R);P.addEventListener("dispose",j);const At=P.textures,_t=P.isWebGLCubeRenderTarget===!0,jt=At.length>1;if(jt||(St.__webglTexture===void 0&&(St.__webglTexture=r.createTexture()),St.__version=R.version,f.memory.textures++),_t){it.__webglFramebuffer=[];for(let Ot=0;Ot<6;Ot++)if(R.mipmaps&&R.mipmaps.length>0){it.__webglFramebuffer[Ot]=[];for(let Ut=0;Ut<R.mipmaps.length;Ut++)it.__webglFramebuffer[Ot][Ut]=r.createFramebuffer()}else it.__webglFramebuffer[Ot]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){it.__webglFramebuffer=[];for(let Ot=0;Ot<R.mipmaps.length;Ot++)it.__webglFramebuffer[Ot]=r.createFramebuffer()}else it.__webglFramebuffer=r.createFramebuffer();if(jt)for(let Ot=0,Ut=At.length;Ot<Ut;Ot++){const ie=s.get(At[Ot]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),f.memory.textures++)}if(P.samples>0&&Ct(P)===!1){it.__webglMultisampledFramebuffer=r.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let Ot=0;Ot<At.length;Ot++){const Ut=At[Ot];it.__webglColorRenderbuffer[Ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,it.__webglColorRenderbuffer[Ot]);const ie=c.convert(Ut.format,Ut.colorSpace),wt=c.convert(Ut.type),Wt=U(Ut.internalFormat,ie,wt,Ut.colorSpace,P.isXRRenderTarget===!0),pe=gt(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,pe,Wt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ot,r.RENDERBUFFER,it.__webglColorRenderbuffer[Ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(it.__webglDepthRenderbuffer=r.createRenderbuffer(),ut(it.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(_t){i.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),pt(r.TEXTURE_CUBE_MAP,R);for(let Ot=0;Ot<6;Ot++)if(R.mipmaps&&R.mipmaps.length>0)for(let Ut=0;Ut<R.mipmaps.length;Ut++)X(it.__webglFramebuffer[Ot][Ut],P,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,Ut);else X(it.__webglFramebuffer[Ot],P,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ot,0);_(R)&&x(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Ot=0,Ut=At.length;Ot<Ut;Ot++){const ie=At[Ot],wt=s.get(ie);i.bindTexture(r.TEXTURE_2D,wt.__webglTexture),pt(r.TEXTURE_2D,ie),X(it.__webglFramebuffer,P,ie,r.COLOR_ATTACHMENT0+Ot,r.TEXTURE_2D,0),_(ie)&&x(r.TEXTURE_2D)}i.unbindTexture()}else{let Ot=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ot=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ot,St.__webglTexture),pt(Ot,R),R.mipmaps&&R.mipmaps.length>0)for(let Ut=0;Ut<R.mipmaps.length;Ut++)X(it.__webglFramebuffer[Ut],P,R,r.COLOR_ATTACHMENT0,Ot,Ut);else X(it.__webglFramebuffer,P,R,r.COLOR_ATTACHMENT0,Ot,0);_(R)&&x(Ot),i.unbindTexture()}P.depthBuffer&&yt(P)}function K(P){const R=P.textures;for(let it=0,St=R.length;it<St;it++){const At=R[it];if(_(At)){const _t=P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,jt=s.get(At).__webglTexture;i.bindTexture(_t,jt),x(_t),i.unbindTexture()}}}const ue=[],ht=[];function Rt(P){if(P.samples>0){if(Ct(P)===!1){const R=P.textures,it=P.width,St=P.height;let At=r.COLOR_BUFFER_BIT;const _t=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,jt=s.get(P),Ot=R.length>1;if(Ot)for(let Ut=0;Ut<R.length;Ut++)i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let Ut=0;Ut<R.length;Ut++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(At|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(At|=r.STENCIL_BUFFER_BIT)),Ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,jt.__webglColorRenderbuffer[Ut]);const ie=s.get(R[Ut]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,it,St,0,0,it,St,At,r.NEAREST),p===!0&&(ue.length=0,ht.length=0,ue.push(r.COLOR_ATTACHMENT0+Ut),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ue.push(_t),ht.push(_t),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ht)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ue))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ot)for(let Ut=0;Ut<R.length;Ut++){i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.RENDERBUFFER,jt.__webglColorRenderbuffer[Ut]);const ie=s.get(R[Ut]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ut,r.TEXTURE_2D,ie,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const R=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function gt(P){return Math.min(l.maxSamples,P.samples)}function Ct(P){const R=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function bt(P){const R=f.render.frame;g.get(P)!==R&&(g.set(P,R),P.update())}function Ft(P,R){const it=P.colorSpace,St=P.format,At=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||it!==Va&&it!==Oa&&(Pe.getTransfer(it)===He?(St!==Ri||At!==Ha)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),R}function Zt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=F,this.resetTextureUnits=b,this.setTexture2D=H,this.setTexture2DArray=st,this.setTexture3D=ot,this.setTextureCube=z,this.rebindTextures=Yt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Rt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=X,this.useMultisampledRTT=Ct}function WA(r,t){function i(s,l=Oa){let c;const f=Pe.getTransfer(l);if(s===Ha)return r.UNSIGNED_BYTE;if(s===kv)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Xv)return r.UNSIGNED_SHORT_5_5_5_1;if(s===CS)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===AS)return r.BYTE;if(s===RS)return r.SHORT;if(s===Gv)return r.UNSIGNED_SHORT;if(s===Vv)return r.INT;if(s===Rr)return r.UNSIGNED_INT;if(s===Pa)return r.FLOAT;if(s===Fc)return r.HALF_FLOAT;if(s===wS)return r.ALPHA;if(s===DS)return r.RGB;if(s===Ri)return r.RGBA;if(s===LS)return r.LUMINANCE;if(s===US)return r.LUMINANCE_ALPHA;if(s===Er)return r.DEPTH_COMPONENT;if(s===Bo)return r.DEPTH_STENCIL;if(s===NS)return r.RED;if(s===Wv)return r.RED_INTEGER;if(s===OS)return r.RG;if(s===qv)return r.RG_INTEGER;if(s===Yv)return r.RGBA_INTEGER;if(s===rh||s===oh||s===lh||s===ch)if(f===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===rh)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===oh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===lh)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ch)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===rh)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===oh)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===lh)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ch)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===o0||s===l0||s===c0||s===u0)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===o0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===l0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===c0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===u0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===f0||s===h0||s===d0)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===f0||s===h0)return f===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===d0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===p0||s===m0||s===g0||s===v0||s===_0||s===x0||s===y0||s===S0||s===M0||s===E0||s===T0||s===b0||s===A0||s===R0)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===p0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===m0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===g0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===v0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===x0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===y0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===S0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===M0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===E0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===T0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===b0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===A0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===R0)return f===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===uh||s===C0||s===w0)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===uh)return f===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===C0)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===w0)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===PS||s===D0||s===L0||s===U0)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===uh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===D0)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===L0)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===U0)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Go?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}class qA extends mi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Sc extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YA={type:"move"};class Bh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const E of t.hand.values()){const _=i.getJointPose(E,s),x=this._getHandJoint(m,E);_!==null&&(x.matrix.fromArray(_.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=_.radius),x.visible=_!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=g.position.distanceTo(v.position),M=.02,T=.005;m.inputState.pinching&&y>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(YA)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Sc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}const jA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class KA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,s){if(this.texture===null){const l=new Gn,c=t.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=s.depthNear||i.depthFar!=s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(t,i){if(this.texture!==null){if(this.mesh===null){const s=i.cameras[0].viewport,l=new Ga({vertexShader:jA,fragmentShader:ZA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:s.z},depthHeight:{value:s.w}}});this.mesh=new Ln(new Vc(20,20),l)}t.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class QA extends wr{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,v=null,y=null,M=null,T=null;const E=new KA,_=i.getContextAttributes();let x=null,U=null;const C=[],L=[],j=new zt;let B=null;const O=new mi;O.layers.enable(1),O.viewport=new hn;const Z=new mi;Z.layers.enable(2),Z.viewport=new hn;const D=[O,Z],b=new qA;b.layers.enable(1),b.layers.enable(2);let F=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ut=C[X];return ut===void 0&&(ut=new Bh,C[X]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(X){let ut=C[X];return ut===void 0&&(ut=new Bh,C[X]=ut),ut.getGripSpace()},this.getHand=function(X){let ut=C[X];return ut===void 0&&(ut=new Bh,C[X]=ut),ut.getHandSpace()};function H(X){const ut=L.indexOf(X.inputSource);if(ut===-1)return;const Tt=C[ut];Tt!==void 0&&(Tt.update(X.inputSource,X.frame,m||f),Tt.dispatchEvent({type:X.type,data:X.inputSource}))}function st(){l.removeEventListener("select",H),l.removeEventListener("selectstart",H),l.removeEventListener("selectend",H),l.removeEventListener("squeeze",H),l.removeEventListener("squeezestart",H),l.removeEventListener("squeezeend",H),l.removeEventListener("end",st),l.removeEventListener("inputsourceschange",ot);for(let X=0;X<C.length;X++){const ut=L[X];ut!==null&&(L[X]=null,C[X].disconnect(ut))}F=null,J=null,E.reset(),t.setRenderTarget(x),M=null,y=null,v=null,l=null,U=null,Mt.stop(),s.isPresenting=!1,t.setPixelRatio(B),t.setSize(j.width,j.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(x=t.getRenderTarget(),l.addEventListener("select",H),l.addEventListener("selectstart",H),l.addEventListener("selectend",H),l.addEventListener("squeeze",H),l.addEventListener("squeezestart",H),l.addEventListener("squeezeend",H),l.addEventListener("end",st),l.addEventListener("inputsourceschange",ot),_.xrCompatible!==!0&&await i.makeXRCompatible(),B=t.getPixelRatio(),t.getSize(j),l.renderState.layers===void 0){const ut={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ut),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new ys(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:Ha,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let ut=null,Tt=null,yt=null;_.depth&&(yt=_.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ut=_.stencil?Bo:Er,Tt=_.stencil?Go:Rr);const Yt={colorFormat:i.RGBA8,depthFormat:yt,scaleFactor:c};v=new XRWebGLBinding(l,i),y=v.createProjectionLayer(Yt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),U=new ys(y.textureWidth,y.textureHeight,{format:Ri,type:Ha,depthTexture:new c_(y.textureWidth,y.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),Mt.setContext(l),Mt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function ot(X){for(let ut=0;ut<X.removed.length;ut++){const Tt=X.removed[ut],yt=L.indexOf(Tt);yt>=0&&(L[yt]=null,C[yt].disconnect(Tt))}for(let ut=0;ut<X.added.length;ut++){const Tt=X.added[ut];let yt=L.indexOf(Tt);if(yt===-1){for(let Xt=0;Xt<C.length;Xt++)if(Xt>=L.length){L.push(Tt),yt=Xt;break}else if(L[Xt]===null){L[Xt]=Tt,yt=Xt;break}if(yt===-1)break}const Yt=C[yt];Yt&&Yt.connect(Tt)}}const z=new V,W=new V;function k(X,ut,Tt){z.setFromMatrixPosition(ut.matrixWorld),W.setFromMatrixPosition(Tt.matrixWorld);const yt=z.distanceTo(W),Yt=ut.projectionMatrix.elements,Xt=Tt.projectionMatrix.elements,K=Yt[14]/(Yt[10]-1),ue=Yt[14]/(Yt[10]+1),ht=(Yt[9]+1)/Yt[5],Rt=(Yt[9]-1)/Yt[5],gt=(Yt[8]-1)/Yt[0],Ct=(Xt[8]+1)/Xt[0],bt=K*gt,Ft=K*Ct,Zt=yt/(-gt+Ct),P=Zt*-gt;ut.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(P),X.translateZ(Zt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=K+Zt,it=ue+Zt,St=bt-P,At=Ft+(yt-P),_t=ht*ue/it*R,jt=Rt*ue/it*R;X.projectionMatrix.makePerspective(St,At,_t,jt,R,it),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function dt(X,ut){ut===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ut.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;E.texture!==null&&(X.near=E.depthNear,X.far=E.depthFar),b.near=Z.near=O.near=X.near,b.far=Z.far=O.far=X.far,(F!==b.near||J!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),F=b.near,J=b.far,O.near=F,O.far=J,Z.near=F,Z.far=J,O.updateProjectionMatrix(),Z.updateProjectionMatrix(),X.updateProjectionMatrix());const ut=X.parent,Tt=b.cameras;dt(b,ut);for(let yt=0;yt<Tt.length;yt++)dt(Tt[yt],ut);Tt.length===2?k(b,O,Z):b.projectionMatrix.copy(O.projectionMatrix),pt(X,b,ut)};function pt(X,ut,Tt){Tt===null?X.matrix.copy(ut.matrixWorld):(X.matrix.copy(Tt.matrixWorld),X.matrix.invert(),X.matrix.multiply(ut.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ut.projectionMatrix),X.projectionMatrixInverse.copy(ut.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Zh*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(y===null&&M===null))return p},this.setFoveation=function(X){p=X,y!==null&&(y.fixedFoveation=X),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=X)},this.hasDepthSensing=function(){return E.texture!==null};let N=null;function et(X,ut){if(g=ut.getViewerPose(m||f),T=ut,g!==null){const Tt=g.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let yt=!1;Tt.length!==b.cameras.length&&(b.cameras.length=0,yt=!0);for(let Xt=0;Xt<Tt.length;Xt++){const K=Tt[Xt];let ue=null;if(M!==null)ue=M.getViewport(K);else{const Rt=v.getViewSubImage(y,K);ue=Rt.viewport,Xt===0&&(t.setRenderTargetTextures(U,Rt.colorTexture,y.ignoreDepthValues?void 0:Rt.depthStencilTexture),t.setRenderTarget(U))}let ht=D[Xt];ht===void 0&&(ht=new mi,ht.layers.enable(Xt),ht.viewport=new hn,D[Xt]=ht),ht.matrix.fromArray(K.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(K.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(ue.x,ue.y,ue.width,ue.height),Xt===0&&(b.matrix.copy(ht.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),yt===!0&&b.cameras.push(ht)}const Yt=l.enabledFeatures;if(Yt&&Yt.includes("depth-sensing")){const Xt=v.getDepthInformation(Tt[0]);Xt&&Xt.isValid&&Xt.texture&&E.init(t,Xt,l.renderState)}}for(let Tt=0;Tt<C.length;Tt++){const yt=L[Tt],Yt=C[Tt];yt!==null&&Yt!==void 0&&Yt.update(yt,ut,m||f)}E.render(t,b),N&&N(X,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),T=null}const Mt=new l_;Mt.setAnimationLoop(et),this.setAnimationLoop=function(X){N=X},this.dispose=function(){}}}const ds=new wi,JA=new Xe;function $A(r,t){function i(_,x){_.matrixAutoUpdate===!0&&_.updateMatrix(),x.value.copy(_.matrix)}function s(_,x){x.color.getRGB(_.fogColor.value,s_(r)),x.isFog?(_.fogNear.value=x.near,_.fogFar.value=x.far):x.isFogExp2&&(_.fogDensity.value=x.density)}function l(_,x,U,C,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(_,x):x.isMeshToonMaterial?(c(_,x),v(_,x)):x.isMeshPhongMaterial?(c(_,x),g(_,x)):x.isMeshStandardMaterial?(c(_,x),y(_,x),x.isMeshPhysicalMaterial&&M(_,x,L)):x.isMeshMatcapMaterial?(c(_,x),T(_,x)):x.isMeshDepthMaterial?c(_,x):x.isMeshDistanceMaterial?(c(_,x),E(_,x)):x.isMeshNormalMaterial?c(_,x):x.isLineBasicMaterial?(f(_,x),x.isLineDashedMaterial&&d(_,x)):x.isPointsMaterial?p(_,x,U,C):x.isSpriteMaterial?m(_,x):x.isShadowMaterial?(_.color.value.copy(x.color),_.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(_,x){_.opacity.value=x.opacity,x.color&&_.diffuse.value.copy(x.color),x.emissive&&_.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(_.map.value=x.map,i(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,i(x.alphaMap,_.alphaMapTransform)),x.bumpMap&&(_.bumpMap.value=x.bumpMap,i(x.bumpMap,_.bumpMapTransform),_.bumpScale.value=x.bumpScale,x.side===Hn&&(_.bumpScale.value*=-1)),x.normalMap&&(_.normalMap.value=x.normalMap,i(x.normalMap,_.normalMapTransform),_.normalScale.value.copy(x.normalScale),x.side===Hn&&_.normalScale.value.negate()),x.displacementMap&&(_.displacementMap.value=x.displacementMap,i(x.displacementMap,_.displacementMapTransform),_.displacementScale.value=x.displacementScale,_.displacementBias.value=x.displacementBias),x.emissiveMap&&(_.emissiveMap.value=x.emissiveMap,i(x.emissiveMap,_.emissiveMapTransform)),x.specularMap&&(_.specularMap.value=x.specularMap,i(x.specularMap,_.specularMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest);const U=t.get(x),C=U.envMap,L=U.envMapRotation;if(C&&(_.envMap.value=C,ds.copy(L),ds.x*=-1,ds.y*=-1,ds.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),_.envMapRotation.value.setFromMatrix4(JA.makeRotationFromEuler(ds)),_.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=x.reflectivity,_.ior.value=x.ior,_.refractionRatio.value=x.refractionRatio),x.lightMap){_.lightMap.value=x.lightMap;const j=r._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=x.lightMapIntensity*j,i(x.lightMap,_.lightMapTransform)}x.aoMap&&(_.aoMap.value=x.aoMap,_.aoMapIntensity.value=x.aoMapIntensity,i(x.aoMap,_.aoMapTransform))}function f(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,x.map&&(_.map.value=x.map,i(x.map,_.mapTransform))}function d(_,x){_.dashSize.value=x.dashSize,_.totalSize.value=x.dashSize+x.gapSize,_.scale.value=x.scale}function p(_,x,U,C){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.size.value=x.size*U,_.scale.value=C*.5,x.map&&(_.map.value=x.map,i(x.map,_.uvTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,i(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function m(_,x){_.diffuse.value.copy(x.color),_.opacity.value=x.opacity,_.rotation.value=x.rotation,x.map&&(_.map.value=x.map,i(x.map,_.mapTransform)),x.alphaMap&&(_.alphaMap.value=x.alphaMap,i(x.alphaMap,_.alphaMapTransform)),x.alphaTest>0&&(_.alphaTest.value=x.alphaTest)}function g(_,x){_.specular.value.copy(x.specular),_.shininess.value=Math.max(x.shininess,1e-4)}function v(_,x){x.gradientMap&&(_.gradientMap.value=x.gradientMap)}function y(_,x){_.metalness.value=x.metalness,x.metalnessMap&&(_.metalnessMap.value=x.metalnessMap,i(x.metalnessMap,_.metalnessMapTransform)),_.roughness.value=x.roughness,x.roughnessMap&&(_.roughnessMap.value=x.roughnessMap,i(x.roughnessMap,_.roughnessMapTransform)),x.envMap&&(_.envMapIntensity.value=x.envMapIntensity)}function M(_,x,U){_.ior.value=x.ior,x.sheen>0&&(_.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),_.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(_.sheenColorMap.value=x.sheenColorMap,i(x.sheenColorMap,_.sheenColorMapTransform)),x.sheenRoughnessMap&&(_.sheenRoughnessMap.value=x.sheenRoughnessMap,i(x.sheenRoughnessMap,_.sheenRoughnessMapTransform))),x.clearcoat>0&&(_.clearcoat.value=x.clearcoat,_.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(_.clearcoatMap.value=x.clearcoatMap,i(x.clearcoatMap,_.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,i(x.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(_.clearcoatNormalMap.value=x.clearcoatNormalMap,i(x.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Hn&&_.clearcoatNormalScale.value.negate())),x.dispersion>0&&(_.dispersion.value=x.dispersion),x.iridescence>0&&(_.iridescence.value=x.iridescence,_.iridescenceIOR.value=x.iridescenceIOR,_.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(_.iridescenceMap.value=x.iridescenceMap,i(x.iridescenceMap,_.iridescenceMapTransform)),x.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=x.iridescenceThicknessMap,i(x.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),x.transmission>0&&(_.transmission.value=x.transmission,_.transmissionSamplerMap.value=U.texture,_.transmissionSamplerSize.value.set(U.width,U.height),x.transmissionMap&&(_.transmissionMap.value=x.transmissionMap,i(x.transmissionMap,_.transmissionMapTransform)),_.thickness.value=x.thickness,x.thicknessMap&&(_.thicknessMap.value=x.thicknessMap,i(x.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=x.attenuationDistance,_.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(_.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(_.anisotropyMap.value=x.anisotropyMap,i(x.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=x.specularIntensity,_.specularColor.value.copy(x.specularColor),x.specularColorMap&&(_.specularColorMap.value=x.specularColorMap,i(x.specularColorMap,_.specularColorMapTransform)),x.specularIntensityMap&&(_.specularIntensityMap.value=x.specularIntensityMap,i(x.specularIntensityMap,_.specularIntensityMapTransform))}function T(_,x){x.matcap&&(_.matcap.value=x.matcap)}function E(_,x){const U=t.get(x).light;_.referencePosition.value.setFromMatrixPosition(U.matrixWorld),_.nearDistance.value=U.shadow.camera.near,_.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function t1(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(U,C){const L=C.program;s.uniformBlockBinding(U,L)}function m(U,C){let L=l[U.id];L===void 0&&(T(U),L=g(U),l[U.id]=L,U.addEventListener("dispose",_));const j=C.program;s.updateUBOMapping(U,j);const B=t.render.frame;c[U.id]!==B&&(y(U),c[U.id]=B)}function g(U){const C=v();U.__bindingPointIndex=C;const L=r.createBuffer(),j=U.__size,B=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,j,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,L),L}function v(){for(let U=0;U<d;U++)if(f.indexOf(U)===-1)return f.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(U){const C=l[U.id],L=U.uniforms,j=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let B=0,O=L.length;B<O;B++){const Z=Array.isArray(L[B])?L[B]:[L[B]];for(let D=0,b=Z.length;D<b;D++){const F=Z[D];if(M(F,B,D,j)===!0){const J=F.__offset,H=Array.isArray(F.value)?F.value:[F.value];let st=0;for(let ot=0;ot<H.length;ot++){const z=H[ot],W=E(z);typeof z=="number"||typeof z=="boolean"?(F.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,J+st,F.__data)):z.isMatrix3?(F.__data[0]=z.elements[0],F.__data[1]=z.elements[1],F.__data[2]=z.elements[2],F.__data[3]=0,F.__data[4]=z.elements[3],F.__data[5]=z.elements[4],F.__data[6]=z.elements[5],F.__data[7]=0,F.__data[8]=z.elements[6],F.__data[9]=z.elements[7],F.__data[10]=z.elements[8],F.__data[11]=0):(z.toArray(F.__data,st),st+=W.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,J,F.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(U,C,L,j){const B=U.value,O=C+"_"+L;if(j[O]===void 0)return typeof B=="number"||typeof B=="boolean"?j[O]=B:j[O]=B.clone(),!0;{const Z=j[O];if(typeof B=="number"||typeof B=="boolean"){if(Z!==B)return j[O]=B,!0}else if(Z.equals(B)===!1)return Z.copy(B),!0}return!1}function T(U){const C=U.uniforms;let L=0;const j=16;for(let O=0,Z=C.length;O<Z;O++){const D=Array.isArray(C[O])?C[O]:[C[O]];for(let b=0,F=D.length;b<F;b++){const J=D[b],H=Array.isArray(J.value)?J.value:[J.value];for(let st=0,ot=H.length;st<ot;st++){const z=H[st],W=E(z),k=L%j;k!==0&&j-k<W.boundary&&(L+=j-k),J.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=L,L+=W.storage}}}const B=L%j;return B>0&&(L+=j-B),U.__size=L,U.__cache={},this}function E(U){const C={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(C.boundary=4,C.storage=4):U.isVector2?(C.boundary=8,C.storage=8):U.isVector3||U.isColor?(C.boundary=16,C.storage=12):U.isVector4?(C.boundary=16,C.storage=16):U.isMatrix3?(C.boundary=48,C.storage=48):U.isMatrix4?(C.boundary=64,C.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),C}function _(U){const C=U.target;C.removeEventListener("dispose",_);const L=f.indexOf(C.__bindingPointIndex);f.splice(L,1),r.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function x(){for(const U in l)r.deleteBuffer(l[U]);f=[],l={},c={}}return{bind:p,update:m,dispose:x}}class e1{constructor(t={}){const{canvas:i=YS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=f;const M=new Uint32Array(4),T=new Int32Array(4);let E=null,_=null;const x=[],U=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ti,this._useLegacyLights=!1,this.toneMapping=Ba,this.toneMappingExposure=1;const C=this;let L=!1,j=0,B=0,O=null,Z=-1,D=null;const b=new hn,F=new hn;let J=null;const H=new xe(0);let st=0,ot=i.width,z=i.height,W=1,k=null,dt=null;const pt=new hn(0,0,ot,z),N=new hn(0,0,ot,z);let et=!1;const Mt=new id;let X=!1,ut=!1;const Tt=new Xe,yt=new V,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Xt(){return O===null?W:1}let K=s;function ue(w,Q){return i.getContext(w,Q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${ed}`),i.addEventListener("webglcontextlost",q,!1),i.addEventListener("webglcontextrestored",Et,!1),i.addEventListener("webglcontextcreationerror",vt,!1),K===null){const Q="webgl2";if(K=ue(Q,w),K===null)throw ue(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ht,Rt,gt,Ct,bt,Ft,Zt,P,R,it,St,At,_t,jt,Ot,Ut,ie,wt,Wt,pe,te,It,Jt,se;function ye(){ht=new cb(K),ht.init(),It=new WA(K,ht),Rt=new ib(K,ht,t,It),gt=new kA(K),Ct=new hb(K),bt=new wA,Ft=new XA(K,ht,gt,bt,Rt,It,Ct),Zt=new sb(C),P=new lb(C),R=new xM(K),Jt=new eb(K,R),it=new ub(K,R,Ct,Jt),St=new pb(K,it,R,Ct),Wt=new db(K,Rt,Ft),Ut=new ab(bt),At=new CA(C,Zt,P,ht,Rt,Jt,Ut),_t=new $A(C,bt),jt=new LA,Ot=new BA(ht),wt=new tb(C,Zt,P,gt,St,y,p),ie=new VA(C,St,Rt),se=new t1(K,Ct,Rt,gt),pe=new nb(K,ht,Ct),te=new fb(K,ht,Ct),Ct.programs=At.programs,C.capabilities=Rt,C.extensions=ht,C.properties=bt,C.renderLists=jt,C.shadowMap=ie,C.state=gt,C.info=Ct}ye();const le=new QA(C,K);this.xr=le,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const w=ht.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ht.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(w){w!==void 0&&(W=w,this.setSize(ot,z,!1))},this.getSize=function(w){return w.set(ot,z)},this.setSize=function(w,Q,ct=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ot=w,z=Q,i.width=Math.floor(w*W),i.height=Math.floor(Q*W),ct===!0&&(i.style.width=w+"px",i.style.height=Q+"px"),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(ot*W,z*W).floor()},this.setDrawingBufferSize=function(w,Q,ct){ot=w,z=Q,W=ct,i.width=Math.floor(w*ct),i.height=Math.floor(Q*ct),this.setViewport(0,0,w,Q)},this.getCurrentViewport=function(w){return w.copy(b)},this.getViewport=function(w){return w.copy(pt)},this.setViewport=function(w,Q,ct,rt){w.isVector4?pt.set(w.x,w.y,w.z,w.w):pt.set(w,Q,ct,rt),gt.viewport(b.copy(pt).multiplyScalar(W).round())},this.getScissor=function(w){return w.copy(N)},this.setScissor=function(w,Q,ct,rt){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,Q,ct,rt),gt.scissor(F.copy(N).multiplyScalar(W).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(w){gt.setScissorTest(et=w)},this.setOpaqueSort=function(w){k=w},this.setTransparentSort=function(w){dt=w},this.getClearColor=function(w){return w.copy(wt.getClearColor())},this.setClearColor=function(){wt.setClearColor.apply(wt,arguments)},this.getClearAlpha=function(){return wt.getClearAlpha()},this.setClearAlpha=function(){wt.setClearAlpha.apply(wt,arguments)},this.clear=function(w=!0,Q=!0,ct=!0){let rt=0;if(w){let at=!1;if(O!==null){const Lt=O.texture.format;at=Lt===Yv||Lt===qv||Lt===Wv}if(at){const Lt=O.texture.type,Vt=Lt===Ha||Lt===Rr||Lt===Gv||Lt===Go||Lt===kv||Lt===Xv,Gt=wt.getClearColor(),Kt=wt.getClearAlpha(),ee=Gt.r,ne=Gt.g,qt=Gt.b;Vt?(M[0]=ee,M[1]=ne,M[2]=qt,M[3]=Kt,K.clearBufferuiv(K.COLOR,0,M)):(T[0]=ee,T[1]=ne,T[2]=qt,T[3]=Kt,K.clearBufferiv(K.COLOR,0,T))}else rt|=K.COLOR_BUFFER_BIT}Q&&(rt|=K.DEPTH_BUFFER_BIT),ct&&(rt|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",q,!1),i.removeEventListener("webglcontextrestored",Et,!1),i.removeEventListener("webglcontextcreationerror",vt,!1),jt.dispose(),Ot.dispose(),bt.dispose(),Zt.dispose(),P.dispose(),St.dispose(),Jt.dispose(),se.dispose(),At.dispose(),le.dispose(),le.removeEventListener("sessionstart",Me),le.removeEventListener("sessionend",Un),Ye.stop()};function q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const w=Ct.autoReset,Q=ie.enabled,ct=ie.autoUpdate,rt=ie.needsUpdate,at=ie.type;ye(),Ct.autoReset=w,ie.enabled=Q,ie.autoUpdate=ct,ie.needsUpdate=rt,ie.type=at}function vt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Nt(w){const Q=w.target;Q.removeEventListener("dispose",Nt),Bt(Q)}function Bt(w){fe(w),bt.remove(w)}function fe(w){const Q=bt.get(w).programs;Q!==void 0&&(Q.forEach(function(ct){At.releaseProgram(ct)}),w.isShaderMaterial&&At.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,ct,rt,at,Lt){Q===null&&(Q=Yt);const Vt=at.isMesh&&at.matrixWorld.determinant()<0,Gt=_i(w,Q,ct,rt,at);gt.setMaterial(rt,Vt);let Kt=ct.index,ee=1;if(rt.wireframe===!0){if(Kt=it.getWireframeAttribute(ct),Kt===void 0)return;ee=2}const ne=ct.drawRange,qt=ct.attributes.position;let Ve=ne.start*ee,an=(ne.start+ne.count)*ee;Lt!==null&&(Ve=Math.max(Ve,Lt.start*ee),an=Math.min(an,(Lt.start+Lt.count)*ee)),Kt!==null?(Ve=Math.max(Ve,0),an=Math.min(an,Kt.count)):qt!=null&&(Ve=Math.max(Ve,0),an=Math.min(an,qt.count));const je=an-Ve;if(je<0||je===1/0)return;Jt.setup(at,rt,Gt,ct,Kt);let xn,Ee=pe;if(Kt!==null&&(xn=R.get(Kt),Ee=te,Ee.setIndex(xn)),at.isMesh)rt.wireframe===!0?(gt.setLineWidth(rt.wireframeLinewidth*Xt()),Ee.setMode(K.LINES)):Ee.setMode(K.TRIANGLES);else if(at.isLine){let ae=rt.linewidth;ae===void 0&&(ae=1),gt.setLineWidth(ae*Xt()),at.isLineSegments?Ee.setMode(K.LINES):at.isLineLoop?Ee.setMode(K.LINE_LOOP):Ee.setMode(K.LINE_STRIP)}else at.isPoints?Ee.setMode(K.POINTS):at.isSprite&&Ee.setMode(K.TRIANGLES);if(at.isBatchedMesh)at._multiDrawInstances!==null?Ee.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances):Ee.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else if(at.isInstancedMesh)Ee.renderInstances(Ve,je,at.count);else if(ct.isInstancedBufferGeometry){const ae=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,ia=Math.min(ct.instanceCount,ae);Ee.renderInstances(Ve,je,ia)}else Ee.render(Ve,je)};function Re(w,Q,ct){w.transparent===!0&&w.side===ta&&w.forceSinglePass===!1?(w.side=Hn,w.needsUpdate=!0,na(w,Q,ct),w.side=Fa,w.needsUpdate=!0,na(w,Q,ct),w.side=ta):na(w,Q,ct)}this.compile=function(w,Q,ct=null){ct===null&&(ct=w),_=Ot.get(ct),_.init(Q),U.push(_),ct.traverseVisible(function(at){at.isLight&&at.layers.test(Q.layers)&&(_.pushLight(at),at.castShadow&&_.pushShadow(at))}),w!==ct&&w.traverseVisible(function(at){at.isLight&&at.layers.test(Q.layers)&&(_.pushLight(at),at.castShadow&&_.pushShadow(at))}),_.setupLights(C._useLegacyLights);const rt=new Set;return w.traverse(function(at){const Lt=at.material;if(Lt)if(Array.isArray(Lt))for(let Vt=0;Vt<Lt.length;Vt++){const Gt=Lt[Vt];Re(Gt,ct,at),rt.add(Gt)}else Re(Lt,ct,at),rt.add(Lt)}),U.pop(),_=null,rt},this.compileAsync=function(w,Q,ct=null){const rt=this.compile(w,Q,ct);return new Promise(at=>{function Lt(){if(rt.forEach(function(Vt){bt.get(Vt).currentProgram.isReady()&&rt.delete(Vt)}),rt.size===0){at(w);return}setTimeout(Lt,10)}ht.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let De=null;function cn(w){De&&De(w)}function Me(){Ye.stop()}function Un(){Ye.start()}const Ye=new l_;Ye.setAnimationLoop(cn),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(w){De=w,le.setAnimationLoop(w),w===null?Ye.stop():Ye.start()},le.addEventListener("sessionstart",Me),le.addEventListener("sessionend",Un),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(Q),Q=le.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,Q,O),_=Ot.get(w,U.length),_.init(Q),U.push(_),Tt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Mt.setFromProjectionMatrix(Tt),ut=this.localClippingEnabled,X=Ut.init(this.clippingPlanes,ut),E=jt.get(w,x.length),E.init(),x.push(E),ko(w,Q,0,C.sortObjects),E.finish(),C.sortObjects===!0&&E.sort(k,dt);const ct=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1;ct&&wt.addToRenderList(E,w),this.info.render.frame++,X===!0&&Ut.beginShadows();const rt=_.state.shadowsArray;ie.render(rt,w,Q),X===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset();const at=E.opaque,Lt=E.transmissive;if(_.setupLights(C._useLegacyLights),Q.isArrayCamera){const Vt=Q.cameras;if(Lt.length>0)for(let Gt=0,Kt=Vt.length;Gt<Kt;Gt++){const ee=Vt[Gt];Or(at,Lt,w,ee)}ct&&wt.render(w);for(let Gt=0,Kt=Vt.length;Gt<Kt;Gt++){const ee=Vt[Gt];Nr(E,w,ee,ee.viewport)}}else Lt.length>0&&Or(at,Lt,w,Q),ct&&wt.render(w),Nr(E,w,Q);O!==null&&(Ft.updateMultisampleRenderTarget(O),Ft.updateRenderTargetMipmap(O)),w.isScene===!0&&w.onAfterRender(C,w,Q),Jt.resetDefaultState(),Z=-1,D=null,U.pop(),U.length>0?(_=U[U.length-1],X===!0&&Ut.setGlobalState(C.clippingPlanes,_.state.camera)):_=null,x.pop(),x.length>0?E=x[x.length-1]:E=null};function ko(w,Q,ct,rt){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)ct=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLight)_.pushLight(w),w.castShadow&&_.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Mt.intersectsSprite(w)){rt&&yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Tt);const Vt=St.update(w),Gt=w.material;Gt.visible&&E.push(w,Vt,Gt,ct,yt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Mt.intersectsObject(w))){const Vt=St.update(w),Gt=w.material;if(rt&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),yt.copy(w.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),yt.copy(Vt.boundingSphere.center)),yt.applyMatrix4(w.matrixWorld).applyMatrix4(Tt)),Array.isArray(Gt)){const Kt=Vt.groups;for(let ee=0,ne=Kt.length;ee<ne;ee++){const qt=Kt[ee],Ve=Gt[qt.materialIndex];Ve&&Ve.visible&&E.push(w,Vt,Ve,ct,yt.z,qt)}}else Gt.visible&&E.push(w,Vt,Gt,ct,yt.z,null)}}const Lt=w.children;for(let Vt=0,Gt=Lt.length;Vt<Gt;Vt++)ko(Lt[Vt],Q,ct,rt)}function Nr(w,Q,ct,rt){const at=w.opaque,Lt=w.transmissive,Vt=w.transparent;_.setupLightsView(ct),X===!0&&Ut.setGlobalState(C.clippingPlanes,ct),rt&&gt.viewport(b.copy(rt)),at.length>0&&ka(at,Q,ct),Lt.length>0&&ka(Lt,Q,ct),Vt.length>0&&ka(Vt,Q,ct),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Or(w,Q,ct,rt){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[rt.id]===void 0&&(_.state.transmissionRenderTarget[rt.id]=new ys(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?Fc:Ha,minFilter:xs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Lt=_.state.transmissionRenderTarget[rt.id],Vt=rt.viewport||b;Lt.setSize(Vt.z,Vt.w);const Gt=C.getRenderTarget();C.setRenderTarget(Lt),C.getClearColor(H),st=C.getClearAlpha(),st<1&&C.setClearColor(16777215,.5),C.clear();const Kt=C.toneMapping;C.toneMapping=Ba;const ee=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),_.setupLightsView(rt),X===!0&&Ut.setGlobalState(C.clippingPlanes,rt),ka(w,ct,rt),Ft.updateMultisampleRenderTarget(Lt),Ft.updateRenderTargetMipmap(Lt),ht.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let qt=0,Ve=Q.length;qt<Ve;qt++){const an=Q[qt],je=an.object,xn=an.geometry,Ee=an.material,ae=an.group;if(Ee.side===ta&&je.layers.test(rt.layers)){const ia=Ee.side;Ee.side=Hn,Ee.needsUpdate=!0,Ms(je,ct,rt,xn,Ee,ae),Ee.side=ia,Ee.needsUpdate=!0,ne=!0}}ne===!0&&(Ft.updateMultisampleRenderTarget(Lt),Ft.updateRenderTargetMipmap(Lt))}C.setRenderTarget(Gt),C.setClearColor(H,st),ee!==void 0&&(rt.viewport=ee),C.toneMapping=Kt}function ka(w,Q,ct){const rt=Q.isScene===!0?Q.overrideMaterial:null;for(let at=0,Lt=w.length;at<Lt;at++){const Vt=w[at],Gt=Vt.object,Kt=Vt.geometry,ee=rt===null?Vt.material:rt,ne=Vt.group;Gt.layers.test(ct.layers)&&Ms(Gt,Q,ct,Kt,ee,ne)}}function Ms(w,Q,ct,rt,at,Lt){w.onBeforeRender(C,Q,ct,rt,at,Lt),w.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),at.onBeforeRender(C,Q,ct,rt,w,Lt),at.transparent===!0&&at.side===ta&&at.forceSinglePass===!1?(at.side=Hn,at.needsUpdate=!0,C.renderBufferDirect(ct,Q,rt,at,w,Lt),at.side=Fa,at.needsUpdate=!0,C.renderBufferDirect(ct,Q,rt,at,w,Lt),at.side=ta):C.renderBufferDirect(ct,Q,rt,at,w,Lt),w.onAfterRender(C,Q,ct,rt,at,Lt)}function na(w,Q,ct){Q.isScene!==!0&&(Q=Yt);const rt=bt.get(w),at=_.state.lights,Lt=_.state.shadowsArray,Vt=at.state.version,Gt=At.getParameters(w,at.state,Lt,Q,ct),Kt=At.getProgramCacheKey(Gt);let ee=rt.programs;rt.environment=w.isMeshStandardMaterial?Q.environment:null,rt.fog=Q.fog,rt.envMap=(w.isMeshStandardMaterial?P:Zt).get(w.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,ee===void 0&&(w.addEventListener("dispose",Nt),ee=new Map,rt.programs=ee);let ne=ee.get(Kt);if(ne!==void 0){if(rt.currentProgram===ne&&rt.lightsStateVersion===Vt)return zr(w,Gt),ne}else Gt.uniforms=At.getUniforms(w),w.onBuild(ct,Gt,C),w.onBeforeCompile(Gt,C),ne=At.acquireProgram(Gt,Kt),ee.set(Kt,ne),rt.uniforms=Gt.uniforms;const qt=rt.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(qt.clippingPlanes=Ut.uniform),zr(w,Gt),rt.needsLights=_n(w),rt.lightsStateVersion=Vt,rt.needsLights&&(qt.ambientLightColor.value=at.state.ambient,qt.lightProbe.value=at.state.probe,qt.directionalLights.value=at.state.directional,qt.directionalLightShadows.value=at.state.directionalShadow,qt.spotLights.value=at.state.spot,qt.spotLightShadows.value=at.state.spotShadow,qt.rectAreaLights.value=at.state.rectArea,qt.ltc_1.value=at.state.rectAreaLTC1,qt.ltc_2.value=at.state.rectAreaLTC2,qt.pointLights.value=at.state.point,qt.pointLightShadows.value=at.state.pointShadow,qt.hemisphereLights.value=at.state.hemi,qt.directionalShadowMap.value=at.state.directionalShadowMap,qt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,qt.spotShadowMap.value=at.state.spotShadowMap,qt.spotLightMatrix.value=at.state.spotLightMatrix,qt.spotLightMap.value=at.state.spotLightMap,qt.pointShadowMap.value=at.state.pointShadowMap,qt.pointShadowMatrix.value=at.state.pointShadowMatrix),rt.currentProgram=ne,rt.uniformsList=null,ne}function Pr(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=Cc.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function zr(w,Q){const ct=bt.get(w);ct.outputColorSpace=Q.outputColorSpace,ct.batching=Q.batching,ct.instancing=Q.instancing,ct.instancingColor=Q.instancingColor,ct.instancingMorph=Q.instancingMorph,ct.skinning=Q.skinning,ct.morphTargets=Q.morphTargets,ct.morphNormals=Q.morphNormals,ct.morphColors=Q.morphColors,ct.morphTargetsCount=Q.morphTargetsCount,ct.numClippingPlanes=Q.numClippingPlanes,ct.numIntersection=Q.numClipIntersection,ct.vertexAlphas=Q.vertexAlphas,ct.vertexTangents=Q.vertexTangents,ct.toneMapping=Q.toneMapping}function _i(w,Q,ct,rt,at){Q.isScene!==!0&&(Q=Yt),Ft.resetTextureUnits();const Lt=Q.fog,Vt=rt.isMeshStandardMaterial?Q.environment:null,Gt=O===null?C.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Va,Kt=(rt.isMeshStandardMaterial?P:Zt).get(rt.envMap||Vt),ee=rt.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,ne=!!ct.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),qt=!!ct.morphAttributes.position,Ve=!!ct.morphAttributes.normal,an=!!ct.morphAttributes.color;let je=Ba;rt.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(je=C.toneMapping);const xn=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Ee=xn!==void 0?xn.length:0,ae=bt.get(rt),ia=_.state.lights;if(X===!0&&(ut===!0||w!==D)){const Rn=w===D&&rt.id===Z;Ut.setState(rt,w,Rn)}let Be=!1;rt.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==ia.state.version||ae.outputColorSpace!==Gt||at.isBatchedMesh&&ae.batching===!1||!at.isBatchedMesh&&ae.batching===!0||at.isInstancedMesh&&ae.instancing===!1||!at.isInstancedMesh&&ae.instancing===!0||at.isSkinnedMesh&&ae.skinning===!1||!at.isSkinnedMesh&&ae.skinning===!0||at.isInstancedMesh&&ae.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&ae.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&ae.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&ae.instancingMorph===!1&&at.morphTexture!==null||ae.envMap!==Kt||rt.fog===!0&&ae.fog!==Lt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Ut.numPlanes||ae.numIntersection!==Ut.numIntersection)||ae.vertexAlphas!==ee||ae.vertexTangents!==ne||ae.morphTargets!==qt||ae.morphNormals!==Ve||ae.morphColors!==an||ae.toneMapping!==je||ae.morphTargetsCount!==Ee)&&(Be=!0):(Be=!0,ae.__version=rt.version);let Jn=ae.currentProgram;Be===!0&&(Jn=na(rt,Q,at));let Xa=!1,An=!1,yn=!1;const sn=Jn.getUniforms(),xi=ae.uniforms;if(gt.useProgram(Jn.program)&&(Xa=!0,An=!0,yn=!0),rt.id!==Z&&(Z=rt.id,An=!0),Xa||D!==w){sn.setValue(K,"projectionMatrix",w.projectionMatrix),sn.setValue(K,"viewMatrix",w.matrixWorldInverse);const Rn=sn.map.cameraPosition;Rn!==void 0&&Rn.setValue(K,yt.setFromMatrixPosition(w.matrixWorld)),Rt.logarithmicDepthBuffer&&sn.setValue(K,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&sn.setValue(K,"isOrthographic",w.isOrthographicCamera===!0),D!==w&&(D=w,An=!0,yn=!0)}if(at.isSkinnedMesh){sn.setOptional(K,at,"bindMatrix"),sn.setOptional(K,at,"bindMatrixInverse");const Rn=at.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),sn.setValue(K,"boneTexture",Rn.boneTexture,Ft))}at.isBatchedMesh&&(sn.setOptional(K,at,"batchingTexture"),sn.setValue(K,"batchingTexture",at._matricesTexture,Ft));const Wa=ct.morphAttributes;if((Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0)&&Wt.update(at,ct,Jn),(An||ae.receiveShadow!==at.receiveShadow)&&(ae.receiveShadow=at.receiveShadow,sn.setValue(K,"receiveShadow",at.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(xi.envMap.value=Kt,xi.flipEnvMap.value=Kt.isCubeTexture&&Kt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&Q.environment!==null&&(xi.envMapIntensity.value=Q.environmentIntensity),An&&(sn.setValue(K,"toneMappingExposure",C.toneMappingExposure),ae.needsLights&&nn(xi,yn),Lt&&rt.fog===!0&&_t.refreshFogUniforms(xi,Lt),_t.refreshMaterialUniforms(xi,rt,W,z,_.state.transmissionRenderTarget[w.id]),Cc.upload(K,Pr(ae),xi,Ft)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Cc.upload(K,Pr(ae),xi,Ft),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&sn.setValue(K,"center",at.center),sn.setValue(K,"modelViewMatrix",at.modelViewMatrix),sn.setValue(K,"normalMatrix",at.normalMatrix),sn.setValue(K,"modelMatrix",at.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const Rn=rt.uniformsGroups;for(let aa=0,Wc=Rn.length;aa<Wc;aa++){const Cn=Rn[aa];se.update(Cn,Jn),se.bind(Cn,Jn)}}return Jn}function nn(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function _n(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(w,Q,ct){bt.get(w.texture).__webglTexture=Q,bt.get(w.depthTexture).__webglTexture=ct;const rt=bt.get(w);rt.__hasExternalTextures=!0,rt.__autoAllocateDepthBuffer=ct===void 0,rt.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),rt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,Q){const ct=bt.get(w);ct.__webglFramebuffer=Q,ct.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(w,Q=0,ct=0){O=w,j=Q,B=ct;let rt=!0,at=null,Lt=!1,Vt=!1;if(w){const Kt=bt.get(w);Kt.__useDefaultFramebuffer!==void 0?(gt.bindFramebuffer(K.FRAMEBUFFER,null),rt=!1):Kt.__webglFramebuffer===void 0?Ft.setupRenderTarget(w):Kt.__hasExternalTextures&&Ft.rebindTextures(w,bt.get(w.texture).__webglTexture,bt.get(w.depthTexture).__webglTexture);const ee=w.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Vt=!0);const ne=bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ne[Q])?at=ne[Q][ct]:at=ne[Q],Lt=!0):w.samples>0&&Ft.useMultisampledRTT(w)===!1?at=bt.get(w).__webglMultisampledFramebuffer:Array.isArray(ne)?at=ne[ct]:at=ne,b.copy(w.viewport),F.copy(w.scissor),J=w.scissorTest}else b.copy(pt).multiplyScalar(W).floor(),F.copy(N).multiplyScalar(W).floor(),J=et;if(gt.bindFramebuffer(K.FRAMEBUFFER,at)&&rt&&gt.drawBuffers(w,at),gt.viewport(b),gt.scissor(F),gt.setScissorTest(J),Lt){const Kt=bt.get(w.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Kt.__webglTexture,ct)}else if(Vt){const Kt=bt.get(w.texture),ee=Q||0;K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,Kt.__webglTexture,ct||0,ee)}Z=-1},this.readRenderTargetPixels=function(w,Q,ct,rt,at,Lt,Vt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(Gt=Gt[Vt]),Gt){gt.bindFramebuffer(K.FRAMEBUFFER,Gt);try{const Kt=w.texture,ee=Kt.format,ne=Kt.type;if(!Rt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-rt&&ct>=0&&ct<=w.height-at&&K.readPixels(Q,ct,rt,at,It.convert(ee),It.convert(ne),Lt)}finally{const Kt=O!==null?bt.get(O).__webglFramebuffer:null;gt.bindFramebuffer(K.FRAMEBUFFER,Kt)}}},this.copyFramebufferToTexture=function(w,Q,ct=0){const rt=Math.pow(2,-ct),at=Math.floor(Q.image.width*rt),Lt=Math.floor(Q.image.height*rt);Ft.setTexture2D(Q,0),K.copyTexSubImage2D(K.TEXTURE_2D,ct,0,0,w.x,w.y,at,Lt),gt.unbindTexture()},this.copyTextureToTexture=function(w,Q,ct,rt=0){const at=Q.image.width,Lt=Q.image.height,Vt=It.convert(ct.format),Gt=It.convert(ct.type);Ft.setTexture2D(ct,0),K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ct.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ct.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,ct.unpackAlignment),Q.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,rt,w.x,w.y,at,Lt,Vt,Gt,Q.image.data):Q.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,rt,w.x,w.y,Q.mipmaps[0].width,Q.mipmaps[0].height,Vt,Q.mipmaps[0].data):K.texSubImage2D(K.TEXTURE_2D,rt,w.x,w.y,Vt,Gt,Q.image),rt===0&&ct.generateMipmaps&&K.generateMipmap(K.TEXTURE_2D),gt.unbindTexture()},this.copyTextureToTexture3D=function(w,Q,ct,rt,at=0){const Lt=w.max.x-w.min.x,Vt=w.max.y-w.min.y,Gt=w.max.z-w.min.z,Kt=It.convert(rt.format),ee=It.convert(rt.type);let ne;if(rt.isData3DTexture)Ft.setTexture3D(rt,0),ne=K.TEXTURE_3D;else if(rt.isDataArrayTexture||rt.isCompressedArrayTexture)Ft.setTexture2DArray(rt,0),ne=K.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}K.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,rt.flipY),K.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,rt.premultiplyAlpha),K.pixelStorei(K.UNPACK_ALIGNMENT,rt.unpackAlignment);const qt=K.getParameter(K.UNPACK_ROW_LENGTH),Ve=K.getParameter(K.UNPACK_IMAGE_HEIGHT),an=K.getParameter(K.UNPACK_SKIP_PIXELS),je=K.getParameter(K.UNPACK_SKIP_ROWS),xn=K.getParameter(K.UNPACK_SKIP_IMAGES),Ee=ct.isCompressedTexture?ct.mipmaps[at]:ct.image;K.pixelStorei(K.UNPACK_ROW_LENGTH,Ee.width),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ee.height),K.pixelStorei(K.UNPACK_SKIP_PIXELS,w.min.x),K.pixelStorei(K.UNPACK_SKIP_ROWS,w.min.y),K.pixelStorei(K.UNPACK_SKIP_IMAGES,w.min.z),ct.isDataTexture||ct.isData3DTexture?K.texSubImage3D(ne,at,Q.x,Q.y,Q.z,Lt,Vt,Gt,Kt,ee,Ee.data):rt.isCompressedArrayTexture?K.compressedTexSubImage3D(ne,at,Q.x,Q.y,Q.z,Lt,Vt,Gt,Kt,Ee.data):K.texSubImage3D(ne,at,Q.x,Q.y,Q.z,Lt,Vt,Gt,Kt,ee,Ee),K.pixelStorei(K.UNPACK_ROW_LENGTH,qt),K.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Ve),K.pixelStorei(K.UNPACK_SKIP_PIXELS,an),K.pixelStorei(K.UNPACK_SKIP_ROWS,je),K.pixelStorei(K.UNPACK_SKIP_IMAGES,xn),at===0&&rt.generateMipmaps&&K.generateMipmap(ne),gt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ft.setTextureCube(w,0):w.isData3DTexture?Ft.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ft.setTexture2DArray(w,0):Ft.setTexture2D(w,0),gt.unbindTexture()},this.resetState=function(){j=0,B=0,O=null,gt.reset(),Jt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ea}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=t===nd?"display-p3":"srgb",i.unpackColorSpace=Pe.workingColorSpace===Hc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class rd{constructor(t,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new xe(t),this.near=i,this.far=s}clone(){return new rd(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class n1 extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class m_ extends Lr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pc=new V,zc=new V,Ev=new Xe,Uo=new $v,Mc=new Gc,Ih=new V,Tv=new V;class i1 extends vn{constructor(t=new vi,i=new m_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Pc.fromBufferAttribute(i,l-1),zc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Pc.distanceTo(zc);t.setAttribute("lineDistance",new bn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Mc.copy(s.boundingSphere),Mc.applyMatrix4(l),Mc.radius+=c,t.ray.intersectsSphere(Mc)===!1)return;Ev.copy(l).invert(),Uo.copy(t.ray).applyMatrix4(Ev);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const M=Math.max(0,f.start),T=Math.min(g.count,f.start+f.count);for(let E=M,_=T-1;E<_;E+=m){const x=g.getX(E),U=g.getX(E+1),C=Ec(this,t,Uo,p,x,U);C&&i.push(C)}if(this.isLineLoop){const E=g.getX(T-1),_=g.getX(M),x=Ec(this,t,Uo,p,E,_);x&&i.push(x)}}else{const M=Math.max(0,f.start),T=Math.min(y.count,f.start+f.count);for(let E=M,_=T-1;E<_;E+=m){const x=Ec(this,t,Uo,p,E,E+1);x&&i.push(x)}if(this.isLineLoop){const E=Ec(this,t,Uo,p,T-1,M);E&&i.push(E)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Ec(r,t,i,s,l,c){const f=r.geometry.attributes.position;if(Pc.fromBufferAttribute(f,l),zc.fromBufferAttribute(f,c),i.distanceSqToSegment(Pc,zc,Ih,Tv)>s)return;Ih.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Ih);if(!(p<t.near||p>t.far))return{distance:p,point:Tv.clone().applyMatrix4(r.matrixWorld),index:l,face:null,faceIndex:null,object:r}}const bv=new V,Av=new V;class a1 extends i1{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)bv.fromBufferAttribute(i,l),Av.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+bv.distanceTo(Av);t.setAttribute("lineDistance",new bn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===f)return l/(c-1);const g=s[l],y=s[l+1]-g,M=(f-g)/y;return(l+M)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),p=i||(f.isVector2?new zt:new V);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i){const s=new V,l=[],c=[],f=[],d=new V,p=new Xe;for(let M=0;M<=t;M++){const T=M/t;l[M]=this.getTangentAt(T,new V)}c[0]=new V,f[0]=new V;let m=Number.MAX_VALUE;const g=Math.abs(l[0].x),v=Math.abs(l[0].y),y=Math.abs(l[0].z);g<=m&&(m=g,s.set(1,0,0)),v<=m&&(m=v,s.set(0,1,0)),y<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let M=1;M<=t;M++){if(c[M]=c[M-1].clone(),f[M]=f[M-1].clone(),d.crossVectors(l[M-1],l[M]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(Tn(l[M-1].dot(l[M]),-1,1));c[M].applyMatrix4(p.makeRotationAxis(d,T))}f[M].crossVectors(l[M],c[M])}if(i===!0){let M=Math.acos(Tn(c[0].dot(c[t]),-1,1));M/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(M=-M);for(let T=1;T<=t;T++)c[T].applyMatrix4(p.makeRotationAxis(l[T],M*T)),f[T].crossVectors(l[T],c[T])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class od extends Di{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new zt){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),v=Math.sin(this.aRotation),y=p-this.aX,M=m-this.aY;p=y*g-M*v+this.aX,m=y*v+M*g+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class s1 extends od{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function ld(){let r=0,t=0,i=0,s=0;function l(c,f,d,p){r=c,t=d,i=-3*c+3*f-2*d-p,s=2*c-2*f+d+p}return{initCatmullRom:function(c,f,d,p,m){l(f,d,m*(d-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,d,p,m,g,v){let y=(f-c)/m-(d-c)/(m+g)+(d-f)/g,M=(d-f)/g-(p-f)/(g+v)+(p-d)/v;y*=g,M*=g,l(f,d,y,M)},calc:function(c){const f=c*c,d=f*c;return r+t*c+i*f+s*d}}}const Tc=new V,Fh=new ld,Hh=new ld,Gh=new ld;class r1 extends Di{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new V){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,g;this.closed||d>0?m=l[(d-1)%c]:(Tc.subVectors(l[0],l[1]).add(l[0]),m=Tc);const v=l[d%c],y=l[(d+1)%c];if(this.closed||d+2<c?g=l[(d+2)%c]:(Tc.subVectors(l[c-1],l[c-2]).add(l[c-1]),g=Tc),this.curveType==="centripetal"||this.curveType==="chordal"){const M=this.curveType==="chordal"?.5:.25;let T=Math.pow(m.distanceToSquared(v),M),E=Math.pow(v.distanceToSquared(y),M),_=Math.pow(y.distanceToSquared(g),M);E<1e-4&&(E=1),T<1e-4&&(T=E),_<1e-4&&(_=E),Fh.initNonuniformCatmullRom(m.x,v.x,y.x,g.x,T,E,_),Hh.initNonuniformCatmullRom(m.y,v.y,y.y,g.y,T,E,_),Gh.initNonuniformCatmullRom(m.z,v.z,y.z,g.z,T,E,_)}else this.curveType==="catmullrom"&&(Fh.initCatmullRom(m.x,v.x,y.x,g.x,this.tension),Hh.initCatmullRom(m.y,v.y,y.y,g.y,this.tension),Gh.initCatmullRom(m.z,v.z,y.z,g.z,this.tension));return s.set(Fh.calc(p),Hh.calc(p),Gh.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new V().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rv(r,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,d=r*r,p=r*d;return(2*i-2*s+c+f)*p+(-3*i+3*s-2*c-f)*d+c*r+i}function o1(r,t){const i=1-r;return i*i*t}function l1(r,t){return 2*(1-r)*r*t}function c1(r,t){return r*r*t}function Oo(r,t,i,s){return o1(r,t)+l1(r,i)+c1(r,s)}function u1(r,t){const i=1-r;return i*i*i*t}function f1(r,t){const i=1-r;return 3*i*i*r*t}function h1(r,t){return 3*(1-r)*r*r*t}function d1(r,t){return r*r*r*t}function Po(r,t,i,s,l){return u1(r,t)+f1(r,i)+h1(r,s)+d1(r,l)}class g_ extends Di{constructor(t=new zt,i=new zt,s=new zt,l=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new zt){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(Po(t,l.x,c.x,f.x,d.x),Po(t,l.y,c.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class p1 extends Di{constructor(t=new V,i=new V,s=new V,l=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new V){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(Po(t,l.x,c.x,f.x,d.x),Po(t,l.y,c.y,f.y,d.y),Po(t,l.z,c.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class v_ extends Di{constructor(t=new zt,i=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new zt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new zt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class m1 extends Di{constructor(t=new V,i=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new V){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new V){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class __ extends Di{constructor(t=new zt,i=new zt,s=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new zt){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(Oo(t,l.x,c.x,f.x),Oo(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class g1 extends Di{constructor(t=new V,i=new V,s=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new V){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(Oo(t,l.x,c.x,f.x),Oo(t,l.y,c.y,f.y),Oo(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class x_ extends Di{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new zt){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,p=l[f===0?f:f-1],m=l[f],g=l[f>l.length-2?l.length-1:f+1],v=l[f>l.length-3?l.length-1:f+2];return s.set(Rv(d,p.x,m.x,g.x,v.x),Rv(d,p.y,m.y,g.y,v.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new zt().fromArray(l))}return this}}var Qh=Object.freeze({__proto__:null,ArcCurve:s1,CatmullRomCurve3:r1,CubicBezierCurve:g_,CubicBezierCurve3:p1,EllipseCurve:od,LineCurve:v_,LineCurve3:m1,QuadraticBezierCurve:__,QuadraticBezierCurve3:g1,SplineCurve:x_});class v1 extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qh[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,d=this.curves[c],p=d.getLength(),m=p===0?0:1-f/p;return d.getPointAt(m,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,p=f.getPoints(d);for(let m=0;m<p.length;m++){const g=p[m];s&&s.equals(g)||(i.push(g),s=g)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new Qh[l.type]().fromJSON(l))}return this}}class Cv extends v1{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new v_(this.currentPoint.clone(),new zt(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const c=new __(this.currentPoint.clone(),new zt(t,i),new zt(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,c,f){const d=new g_(this.currentPoint.clone(),new zt(t,i),new zt(s,l),new zt(c,f));return this.curves.push(d),this.currentPoint.set(c,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new x_(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,c,f){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+d,i+p,s,l,c,f),this}absarc(t,i,s,l,c,f){return this.absellipse(t,i,s,s,l,c,f),this}ellipse(t,i,s,l,c,f,d,p){const m=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(t+m,i+g,s,l,c,f,d,p),this}absellipse(t,i,s,l,c,f,d,p){const m=new od(t,i,s,l,c,f,d,p);if(this.curves.length>0){const v=m.getPoint(0);v.equals(this.currentPoint)||this.lineTo(v.x,v.y)}this.curves.push(m);const g=m.getPoint(1);return this.currentPoint.copy(g),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Bc extends vi{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const g=[],v=[],y=[],M=[];let T=0;const E=[],_=s/2;let x=0;U(),f===!1&&(t>0&&C(!0),i>0&&C(!1)),this.setIndex(g),this.setAttribute("position",new bn(v,3)),this.setAttribute("normal",new bn(y,3)),this.setAttribute("uv",new bn(M,2));function U(){const L=new V,j=new V;let B=0;const O=(i-t)/s;for(let Z=0;Z<=c;Z++){const D=[],b=Z/c,F=b*(i-t)+t;for(let J=0;J<=l;J++){const H=J/l,st=H*p+d,ot=Math.sin(st),z=Math.cos(st);j.x=F*ot,j.y=-b*s+_,j.z=F*z,v.push(j.x,j.y,j.z),L.set(ot,O,z).normalize(),y.push(L.x,L.y,L.z),M.push(H,1-b),D.push(T++)}E.push(D)}for(let Z=0;Z<l;Z++)for(let D=0;D<c;D++){const b=E[D][Z],F=E[D+1][Z],J=E[D+1][Z+1],H=E[D][Z+1];g.push(b,F,H),g.push(F,J,H),B+=6}m.addGroup(x,B,0),x+=B}function C(L){const j=T,B=new zt,O=new V;let Z=0;const D=L===!0?t:i,b=L===!0?1:-1;for(let J=1;J<=l;J++)v.push(0,_*b,0),y.push(0,b,0),M.push(.5,.5),T++;const F=T;for(let J=0;J<=l;J++){const st=J/l*p+d,ot=Math.cos(st),z=Math.sin(st);O.x=D*z,O.y=_*b,O.z=D*ot,v.push(O.x,O.y,O.z),y.push(0,b,0),B.x=ot*.5+.5,B.y=z*.5*b+.5,M.push(B.x,B.y),T++}for(let J=0;J<l;J++){const H=j+J,st=F+J;L===!0?g.push(st,st+1,H):g.push(st+1,st,H),Z+=3}m.addGroup(x,Z,L===!0?1:2),x+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bc(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class y_ extends Cv{constructor(t){super(t),this.uuid=Dr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new Cv().fromJSON(l))}return this}}const _1={triangulate:function(r,t,i=2){const s=t&&t.length,l=s?t[0]*i:r.length;let c=S_(r,0,l,i,!0);const f=[];if(!c||c.next===c.prev)return f;let d,p,m,g,v,y,M;if(s&&(c=E1(r,t,c,i)),r.length>80*i){d=m=r[0],p=g=r[1];for(let T=i;T<l;T+=i)v=r[T],y=r[T+1],v<d&&(d=v),y<p&&(p=y),v>m&&(m=v),y>g&&(g=y);M=Math.max(m-d,g-p),M=M!==0?32767/M:0}return Io(c,f,i,d,p,M,0),f}};function S_(r,t,i,s,l){let c,f;if(l===O1(r,t,i,s)>0)for(c=t;c<i;c+=s)f=wv(c,r[c],r[c+1],f);else for(c=i-s;c>=t;c-=s)f=wv(c,r[c],r[c+1],f);return f&&Xc(f,f.next)&&(Ho(f),f=f.next),f}function Ss(r,t){if(!r)return r;t||(t=r);let i=r,s;do if(s=!1,!i.steiner&&(Xc(i,i.next)||ke(i.prev,i,i.next)===0)){if(Ho(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function Io(r,t,i,s,l,c,f){if(!r)return;!f&&c&&C1(r,s,l,c);let d=r,p,m;for(;r.prev!==r.next;){if(p=r.prev,m=r.next,c?y1(r,s,l,c):x1(r)){t.push(p.i/i|0),t.push(r.i/i|0),t.push(m.i/i|0),Ho(r),r=m.next,d=m.next;continue}if(r=m,r===d){f?f===1?(r=S1(Ss(r),t,i),Io(r,t,i,s,l,c,2)):f===2&&M1(r,t,i,s,l,c):Io(Ss(r),t,i,s,l,c,1);break}}}function x1(r){const t=r.prev,i=r,s=r.next;if(ke(t,i,s)>=0)return!1;const l=t.x,c=i.x,f=s.x,d=t.y,p=i.y,m=s.y,g=l<c?l<f?l:f:c<f?c:f,v=d<p?d<m?d:m:p<m?p:m,y=l>c?l>f?l:f:c>f?c:f,M=d>p?d>m?d:m:p>m?p:m;let T=s.next;for(;T!==t;){if(T.x>=g&&T.x<=y&&T.y>=v&&T.y<=M&&Sr(l,d,c,p,f,m,T.x,T.y)&&ke(T.prev,T,T.next)>=0)return!1;T=T.next}return!0}function y1(r,t,i,s){const l=r.prev,c=r,f=r.next;if(ke(l,c,f)>=0)return!1;const d=l.x,p=c.x,m=f.x,g=l.y,v=c.y,y=f.y,M=d<p?d<m?d:m:p<m?p:m,T=g<v?g<y?g:y:v<y?v:y,E=d>p?d>m?d:m:p>m?p:m,_=g>v?g>y?g:y:v>y?v:y,x=Jh(M,T,t,i,s),U=Jh(E,_,t,i,s);let C=r.prevZ,L=r.nextZ;for(;C&&C.z>=x&&L&&L.z<=U;){if(C.x>=M&&C.x<=E&&C.y>=T&&C.y<=_&&C!==l&&C!==f&&Sr(d,g,p,v,m,y,C.x,C.y)&&ke(C.prev,C,C.next)>=0||(C=C.prevZ,L.x>=M&&L.x<=E&&L.y>=T&&L.y<=_&&L!==l&&L!==f&&Sr(d,g,p,v,m,y,L.x,L.y)&&ke(L.prev,L,L.next)>=0))return!1;L=L.nextZ}for(;C&&C.z>=x;){if(C.x>=M&&C.x<=E&&C.y>=T&&C.y<=_&&C!==l&&C!==f&&Sr(d,g,p,v,m,y,C.x,C.y)&&ke(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;L&&L.z<=U;){if(L.x>=M&&L.x<=E&&L.y>=T&&L.y<=_&&L!==l&&L!==f&&Sr(d,g,p,v,m,y,L.x,L.y)&&ke(L.prev,L,L.next)>=0)return!1;L=L.nextZ}return!0}function S1(r,t,i){let s=r;do{const l=s.prev,c=s.next.next;!Xc(l,c)&&M_(l,s,s.next,c)&&Fo(l,c)&&Fo(c,l)&&(t.push(l.i/i|0),t.push(s.i/i|0),t.push(c.i/i|0),Ho(s),Ho(s.next),s=r=c),s=s.next}while(s!==r);return Ss(s)}function M1(r,t,i,s,l,c){let f=r;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&L1(f,d)){let p=E_(f,d);f=Ss(f,f.next),p=Ss(p,p.next),Io(f,t,i,s,l,c,0),Io(p,t,i,s,l,c,0);return}d=d.next}f=f.next}while(f!==r)}function E1(r,t,i,s){const l=[];let c,f,d,p,m;for(c=0,f=t.length;c<f;c++)d=t[c]*s,p=c<f-1?t[c+1]*s:r.length,m=S_(r,d,p,s,!1),m===m.next&&(m.steiner=!0),l.push(D1(m));for(l.sort(T1),c=0;c<l.length;c++)i=b1(l[c],i);return i}function T1(r,t){return r.x-t.x}function b1(r,t){const i=A1(r,t);if(!i)return t;const s=E_(i,r);return Ss(s,s.next),Ss(i,i.next)}function A1(r,t){let i=t,s=-1/0,l;const c=r.x,f=r.y;do{if(f<=i.y&&f>=i.next.y&&i.next.y!==i.y){const y=i.x+(f-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(y<=c&&y>s&&(s=y,l=i.x<i.next.x?i:i.next,y===c))return l}i=i.next}while(i!==t);if(!l)return null;const d=l,p=l.x,m=l.y;let g=1/0,v;i=l;do c>=i.x&&i.x>=p&&c!==i.x&&Sr(f<m?c:s,f,p,m,f<m?s:c,f,i.x,i.y)&&(v=Math.abs(f-i.y)/(c-i.x),Fo(i,r)&&(v<g||v===g&&(i.x>l.x||i.x===l.x&&R1(l,i)))&&(l=i,g=v)),i=i.next;while(i!==d);return l}function R1(r,t){return ke(r.prev,r,t.prev)<0&&ke(t.next,r,r.next)<0}function C1(r,t,i,s){let l=r;do l.z===0&&(l.z=Jh(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,w1(l)}function w1(r){let t,i,s,l,c,f,d,p,m=1;do{for(i=r,r=null,c=null,f=0;i;){for(f++,s=i,d=0,t=0;t<m&&(d++,s=s.nextZ,!!s);t++);for(p=m;d>0||p>0&&s;)d!==0&&(p===0||!s||i.z<=s.z)?(l=i,i=i.nextZ,d--):(l=s,s=s.nextZ,p--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;i=s}c.nextZ=null,m*=2}while(f>1);return r}function Jh(r,t,i,s,l){return r=(r-i)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function D1(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function Sr(r,t,i,s,l,c,f,d){return(l-f)*(t-d)>=(r-f)*(c-d)&&(r-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(c-d)>=(l-f)*(s-d)}function L1(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!U1(r,t)&&(Fo(r,t)&&Fo(t,r)&&N1(r,t)&&(ke(r.prev,r,t.prev)||ke(r,t.prev,t))||Xc(r,t)&&ke(r.prev,r,r.next)>0&&ke(t.prev,t,t.next)>0)}function ke(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function Xc(r,t){return r.x===t.x&&r.y===t.y}function M_(r,t,i,s){const l=Ac(ke(r,t,i)),c=Ac(ke(r,t,s)),f=Ac(ke(i,s,r)),d=Ac(ke(i,s,t));return!!(l!==c&&f!==d||l===0&&bc(r,i,t)||c===0&&bc(r,s,t)||f===0&&bc(i,r,s)||d===0&&bc(i,t,s))}function bc(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function Ac(r){return r>0?1:r<0?-1:0}function U1(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&M_(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function Fo(r,t){return ke(r.prev,r,r.next)<0?ke(r,t,r.next)>=0&&ke(r,r.prev,t)>=0:ke(r,t,r.prev)<0||ke(r,r.next,t)<0}function N1(r,t){let i=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==r);return s}function E_(r,t){const i=new $h(r.i,r.x,r.y),s=new $h(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,s.next=i,i.prev=s,c.next=s,s.prev=c,s}function wv(r,t,i,s){const l=new $h(r,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function Ho(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function $h(r,t,i){this.i=r,this.x=t,this.y=i,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function O1(r,t,i,s){let l=0;for(let c=t,f=i-s;c<i;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class zo{static area(t){const i=t.length;let s=0;for(let l=i-1,c=0;c<i;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return zo.area(t)<0}static triangulateShape(t,i){const s=[],l=[],c=[];Dv(t),Lv(s,t);let f=t.length;i.forEach(Dv);for(let p=0;p<i.length;p++)l.push(f),f+=i[p].length,Lv(s,i[p]);const d=_1.triangulate(s,l);for(let p=0;p<d.length;p+=3)c.push(d.slice(p,p+3));return c}}function Dv(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Lv(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class cd extends vi{constructor(t=new y_([new zt(.5,.5),new zt(-.5,.5),new zt(-.5,-.5),new zt(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const s=this,l=[],c=[];for(let d=0,p=t.length;d<p;d++){const m=t[d];f(m)}this.setAttribute("position",new bn(l,3)),this.setAttribute("uv",new bn(c,2)),this.computeVertexNormals();function f(d){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,g=i.steps!==void 0?i.steps:1,v=i.depth!==void 0?i.depth:1;let y=i.bevelEnabled!==void 0?i.bevelEnabled:!0,M=i.bevelThickness!==void 0?i.bevelThickness:.2,T=i.bevelSize!==void 0?i.bevelSize:M-.1,E=i.bevelOffset!==void 0?i.bevelOffset:0,_=i.bevelSegments!==void 0?i.bevelSegments:3;const x=i.extrudePath,U=i.UVGenerator!==void 0?i.UVGenerator:P1;let C,L=!1,j,B,O,Z;x&&(C=x.getSpacedPoints(g),L=!0,y=!1,j=x.computeFrenetFrames(g,!1),B=new V,O=new V,Z=new V),y||(_=0,M=0,T=0,E=0);const D=d.extractPoints(m);let b=D.shape;const F=D.holes;if(!zo.isClockWise(b)){b=b.reverse();for(let ht=0,Rt=F.length;ht<Rt;ht++){const gt=F[ht];zo.isClockWise(gt)&&(F[ht]=gt.reverse())}}const H=zo.triangulateShape(b,F),st=b;for(let ht=0,Rt=F.length;ht<Rt;ht++){const gt=F[ht];b=b.concat(gt)}function ot(ht,Rt,gt){return Rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ht.clone().addScaledVector(Rt,gt)}const z=b.length,W=H.length;function k(ht,Rt,gt){let Ct,bt,Ft;const Zt=ht.x-Rt.x,P=ht.y-Rt.y,R=gt.x-ht.x,it=gt.y-ht.y,St=Zt*Zt+P*P,At=Zt*it-P*R;if(Math.abs(At)>Number.EPSILON){const _t=Math.sqrt(St),jt=Math.sqrt(R*R+it*it),Ot=Rt.x-P/_t,Ut=Rt.y+Zt/_t,ie=gt.x-it/jt,wt=gt.y+R/jt,Wt=((ie-Ot)*it-(wt-Ut)*R)/(Zt*it-P*R);Ct=Ot+Zt*Wt-ht.x,bt=Ut+P*Wt-ht.y;const pe=Ct*Ct+bt*bt;if(pe<=2)return new zt(Ct,bt);Ft=Math.sqrt(pe/2)}else{let _t=!1;Zt>Number.EPSILON?R>Number.EPSILON&&(_t=!0):Zt<-Number.EPSILON?R<-Number.EPSILON&&(_t=!0):Math.sign(P)===Math.sign(it)&&(_t=!0),_t?(Ct=-P,bt=Zt,Ft=Math.sqrt(St)):(Ct=Zt,bt=P,Ft=Math.sqrt(St/2))}return new zt(Ct/Ft,bt/Ft)}const dt=[];for(let ht=0,Rt=st.length,gt=Rt-1,Ct=ht+1;ht<Rt;ht++,gt++,Ct++)gt===Rt&&(gt=0),Ct===Rt&&(Ct=0),dt[ht]=k(st[ht],st[gt],st[Ct]);const pt=[];let N,et=dt.concat();for(let ht=0,Rt=F.length;ht<Rt;ht++){const gt=F[ht];N=[];for(let Ct=0,bt=gt.length,Ft=bt-1,Zt=Ct+1;Ct<bt;Ct++,Ft++,Zt++)Ft===bt&&(Ft=0),Zt===bt&&(Zt=0),N[Ct]=k(gt[Ct],gt[Ft],gt[Zt]);pt.push(N),et=et.concat(N)}for(let ht=0;ht<_;ht++){const Rt=ht/_,gt=M*Math.cos(Rt*Math.PI/2),Ct=T*Math.sin(Rt*Math.PI/2)+E;for(let bt=0,Ft=st.length;bt<Ft;bt++){const Zt=ot(st[bt],dt[bt],Ct);yt(Zt.x,Zt.y,-gt)}for(let bt=0,Ft=F.length;bt<Ft;bt++){const Zt=F[bt];N=pt[bt];for(let P=0,R=Zt.length;P<R;P++){const it=ot(Zt[P],N[P],Ct);yt(it.x,it.y,-gt)}}}const Mt=T+E;for(let ht=0;ht<z;ht++){const Rt=y?ot(b[ht],et[ht],Mt):b[ht];L?(O.copy(j.normals[0]).multiplyScalar(Rt.x),B.copy(j.binormals[0]).multiplyScalar(Rt.y),Z.copy(C[0]).add(O).add(B),yt(Z.x,Z.y,Z.z)):yt(Rt.x,Rt.y,0)}for(let ht=1;ht<=g;ht++)for(let Rt=0;Rt<z;Rt++){const gt=y?ot(b[Rt],et[Rt],Mt):b[Rt];L?(O.copy(j.normals[ht]).multiplyScalar(gt.x),B.copy(j.binormals[ht]).multiplyScalar(gt.y),Z.copy(C[ht]).add(O).add(B),yt(Z.x,Z.y,Z.z)):yt(gt.x,gt.y,v/g*ht)}for(let ht=_-1;ht>=0;ht--){const Rt=ht/_,gt=M*Math.cos(Rt*Math.PI/2),Ct=T*Math.sin(Rt*Math.PI/2)+E;for(let bt=0,Ft=st.length;bt<Ft;bt++){const Zt=ot(st[bt],dt[bt],Ct);yt(Zt.x,Zt.y,v+gt)}for(let bt=0,Ft=F.length;bt<Ft;bt++){const Zt=F[bt];N=pt[bt];for(let P=0,R=Zt.length;P<R;P++){const it=ot(Zt[P],N[P],Ct);L?yt(it.x,it.y+C[g-1].y,C[g-1].x+gt):yt(it.x,it.y,v+gt)}}}X(),ut();function X(){const ht=l.length/3;if(y){let Rt=0,gt=z*Rt;for(let Ct=0;Ct<W;Ct++){const bt=H[Ct];Yt(bt[2]+gt,bt[1]+gt,bt[0]+gt)}Rt=g+_*2,gt=z*Rt;for(let Ct=0;Ct<W;Ct++){const bt=H[Ct];Yt(bt[0]+gt,bt[1]+gt,bt[2]+gt)}}else{for(let Rt=0;Rt<W;Rt++){const gt=H[Rt];Yt(gt[2],gt[1],gt[0])}for(let Rt=0;Rt<W;Rt++){const gt=H[Rt];Yt(gt[0]+z*g,gt[1]+z*g,gt[2]+z*g)}}s.addGroup(ht,l.length/3-ht,0)}function ut(){const ht=l.length/3;let Rt=0;Tt(st,Rt),Rt+=st.length;for(let gt=0,Ct=F.length;gt<Ct;gt++){const bt=F[gt];Tt(bt,Rt),Rt+=bt.length}s.addGroup(ht,l.length/3-ht,1)}function Tt(ht,Rt){let gt=ht.length;for(;--gt>=0;){const Ct=gt;let bt=gt-1;bt<0&&(bt=ht.length-1);for(let Ft=0,Zt=g+_*2;Ft<Zt;Ft++){const P=z*Ft,R=z*(Ft+1),it=Rt+Ct+P,St=Rt+bt+P,At=Rt+bt+R,_t=Rt+Ct+R;Xt(it,St,At,_t)}}}function yt(ht,Rt,gt){p.push(ht),p.push(Rt),p.push(gt)}function Yt(ht,Rt,gt){K(ht),K(Rt),K(gt);const Ct=l.length/3,bt=U.generateTopUV(s,l,Ct-3,Ct-2,Ct-1);ue(bt[0]),ue(bt[1]),ue(bt[2])}function Xt(ht,Rt,gt,Ct){K(ht),K(Rt),K(Ct),K(Rt),K(gt),K(Ct);const bt=l.length/3,Ft=U.generateSideWallUV(s,l,bt-6,bt-3,bt-2,bt-1);ue(Ft[0]),ue(Ft[1]),ue(Ft[3]),ue(Ft[1]),ue(Ft[2]),ue(Ft[3])}function K(ht){l.push(p[ht*3+0]),l.push(p[ht*3+1]),l.push(p[ht*3+2])}function ue(ht){c.push(ht.x),c.push(ht.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return z1(i,s,t)}static fromJSON(t,i){const s=[];for(let c=0,f=t.shapes.length;c<f;c++){const d=i[t.shapes[c]];s.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new Qh[l.type]().fromJSON(l)),new cd(s,t.options)}}const P1={generateTopUV:function(r,t,i,s,l){const c=t[i*3],f=t[i*3+1],d=t[s*3],p=t[s*3+1],m=t[l*3],g=t[l*3+1];return[new zt(c,f),new zt(d,p),new zt(m,g)]},generateSideWallUV:function(r,t,i,s,l,c){const f=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[s*3],g=t[s*3+1],v=t[s*3+2],y=t[l*3],M=t[l*3+1],T=t[l*3+2],E=t[c*3],_=t[c*3+1],x=t[c*3+2];return Math.abs(d-g)<Math.abs(f-m)?[new zt(f,1-p),new zt(m,1-v),new zt(y,1-T),new zt(E,1-x)]:[new zt(d,1-p),new zt(g,1-v),new zt(M,1-T),new zt(_,1-x)]}};function z1(r,t,i){if(i.shapes=[],Array.isArray(r))for(let s=0,l=r.length;s<l;s++){const c=r[s];i.shapes.push(c.uuid)}else i.shapes.push(r.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class xr extends Lr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jv,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class T_ extends vn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const Vh=new Xe,Uv=new V,Nv=new V;class B1{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new id,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new hn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Uv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Uv),Nv.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Nv),i.updateMatrixWorld(),Vh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Vh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class I1 extends B1{constructor(){super(new ad(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F1 extends T_{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new I1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class H1 extends T_{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class G1 extends a1{constructor(t=10,i=10,s=4473924,l=8947848){s=new xe(s),l=new xe(l);const c=i/2,f=t/i,d=t/2,p=[],m=[];for(let y=0,M=0,T=-d;y<=i;y++,T+=f){p.push(-d,0,T,d,0,T),p.push(T,0,-d,T,0,d);const E=y===c?s:l;E.toArray(m,M),M+=3,E.toArray(m,M),M+=3,E.toArray(m,M),M+=3,E.toArray(m,M),M+=3}const g=new vi;g.setAttribute("position",new bn(p,3)),g.setAttribute("color",new bn(m,3));const v=new m_({vertexColors:!0,toneMapped:!1});super(g,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ed}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ed);const V1=.015,Ov=.12,k1=.35,X1=.5,W1=.9,Pv=500,q1=.4,Y1=25,j1=({onWin:r,onLoseLife:t,onGainLife:i,isPaused:s,input:l})=>{const c=Oe.useRef(null),f=Oe.useRef(s);Oe.useEffect(()=>{f.current=s},[s]);const d=Oe.useRef({player:null,platforms:[],enemies:[],goal:null,healthItems:[],projectiles:[],playerVelocity:new V(0,0,0),isPlayerGrounded:!1,hasDoubleJumped:!1,jumpKeyWasDown:!1,isGameWon:!1,lastLifeLossTime:0,camera:null,scene:null,renderer:null,animationFrameId:0,lastAttackTime:0,playerDirection:1,cameraTargetX:0}),p=Oe.useCallback(()=>{const E=performance.now();if(E-d.current.lastLifeLossTime<1e3)return;d.current.lastLifeLossTime=E,t();const{player:_,playerVelocity:x}=d.current;_&&(_.position.set(0,2,0),x.set(0,0,0))},[t]),m=Oe.useCallback(E=>{const _=new xr({color:9159498,roughness:.8}),x=[[0,-2,0],[7,0,0],[14,2,0],[25,0,0],[38,2,0],[46,0,0],[58,4,0],[70,2,0],[83,0,0],[90,-2,0],[103,0,0],[110,2,0],[123,4,0],[135,2,0],[145,0,0],[158,2,0],[170,4,0]],U=[{position:new V(38,3.5,0),patrolRange:[36,40]},{position:new V(58,5.5,0),patrolRange:[56,60]},{position:new V(83,1.5,0),patrolRange:[81,85]},{position:new V(123,5.5,0),patrolRange:[121,125]},{position:new V(158,3.5,0),patrolRange:[156,160]},{position:new V(170,5.5,0),patrolRange:[168,172]}],C=new Set(U.map(z=>z.position.x)),L=[],j=6,B=10;x.forEach((z,W)=>{let k;W===0?k=5:W===9?k=4:C.has(z[0])?k=B:k=j;const dt=new Ia(k,1,5),pt=new Ln(dt,_);pt.position.set(z[0],z[1],z[2]),pt.receiveShadow=!0,E.add(pt),L.push(pt)}),d.current.platforms=L;const O=new Ia(1,1,1),Z=new xr({color:13369344,emissive:3342336,roughness:.5});d.current.enemies=U.map(z=>{const W=new Ln(O.clone(),Z.clone());return W.position.copy(z.position),W.castShadow=!0,E.add(W),{mesh:W,direction:1,speed:.015,patrolRange:z.patrolRange,isDefeated:!1}});const D=new Bc(.7,.7,2.5,16),b=new xr({color:16776960,emissive:16776960,emissiveIntensity:.7,transparent:!0,opacity:.6,roughness:.2}),F=new Ln(D,b);F.position.set(175,5.8,0),F.castShadow=!0,E.add(F),d.current.goal=F;const J=new y_;J.moveTo(.25,.25),J.bezierCurveTo(.25,.25,.2,0,0,0),J.bezierCurveTo(-.3,0,-.3,.35,-.3,.35),J.bezierCurveTo(-.3,.55,-.1,.77,.25,.95),J.bezierCurveTo(.6,.77,.8,.55,.8,.35),J.bezierCurveTo(.8,.35,.8,0,.5,0),J.bezierCurveTo(.35,0,.25,.25,.25,.25);const H=new cd(J,{depth:.1,bevelEnabled:!1});H.center(),H.scale(.7,.7,.7);const st=new xr({color:16711680,emissive:13382451,emissiveIntensity:.8,roughness:.3});[new V(25,1,0),new V(110,3,0)].forEach(z=>{const W=new Ln(H.clone(),st.clone());W.position.copy(z),W.castShadow=!0,E.add(W),W.userData.originalY=W.position.y,d.current.healthItems.push(W)})},[]),g=Oe.useCallback(()=>{d.current.enemies=d.current.enemies.filter(E=>{var _;if(E.isDefeated){E.mesh.scale.multiplyScalar(.95);const x=E.mesh.material;return x.opacity>0&&(x.opacity-=.05),E.mesh.scale.x<.05?((_=d.current.scene)==null||_.remove(E.mesh),E.mesh.geometry.dispose(),E.mesh.material.dispose(),!1):!0}return E.mesh.position.x+=E.speed*E.direction,(E.mesh.position.x>E.patrolRange[1]||E.mesh.position.x<E.patrolRange[0])&&(E.direction*=-1),!0})},[]),v=Oe.useCallback(()=>{const{projectiles:E,enemies:_,scene:x}=d.current;d.current.projectiles=E.filter(U=>{U.position.x+=q1*U.userData.direction;const C=new Qn().setFromObject(U);for(const L of _)if(!L.isDefeated){const j=new Qn().setFromObject(L.mesh);if(C.intersectsBox(j))return L.isDefeated=!0,L.mesh.material.transparent=!0,x==null||x.remove(U),U.geometry.dispose(),U.material.dispose(),!1}return Math.abs(U.position.x-U.userData.startX)>Y1?(x==null||x.remove(U),U.geometry.dispose(),U.material.dispose(),!1):!0})},[]),y=Oe.useCallback(()=>{const{player:E,playerVelocity:_,isPlayerGrounded:x,platforms:U,goal:C,isGameWon:L,enemies:j,scene:B}=d.current;if(!E||L)return;l.get("ArrowLeft")||l.get("KeyA")?_.x=-Ov:(l.get("ArrowRight")||l.get("KeyD"))&&(_.x=Ov),_.x*=W1,Math.abs(_.x)>.01&&(d.current.playerDirection=Math.sign(_.x));const O=l.get("Space")||l.get("ArrowUp")||l.get("KeyW");O&&!d.current.jumpKeyWasDown&&(x?(_.y=k1,d.current.isPlayerGrounded=!1,d.current.hasDoubleJumped=!1):d.current.hasDoubleJumped||(_.y=X1,d.current.hasDoubleJumped=!0)),d.current.jumpKeyWasDown=O,_.y-=V1;const D=performance.now();if(l.get("KeyF")&&D-d.current.lastAttackTime>Pv){d.current.lastAttackTime=D;const{player:F,scene:J,playerDirection:H}=d.current;if(F&&J){const st=new Bc(.1,.1,1.5,8),ot=new xr({color:65535,emissive:65535,emissiveIntensity:1}),z=new Ln(st,ot);z.rotation.z=Math.PI/2;const W=new Qn().setFromObject(F),k=new V;W.getSize(k);const dt=F.position.clone().add(new V(H*(k.x/2+.2),0,0));z.position.copy(dt),z.userData={direction:H,startX:dt.x},J.add(z),d.current.projectiles.push(z)}}E.position.x+=_.x,E.position.y+=_.y,d.current.isPlayerGrounded=!1;const b=new Qn().setFromObject(E);if(U.forEach(F=>{const J=new Qn().setFromObject(F);if(b.intersectsBox(J)){const H=new V;b.getCenter(H).sub(J.getCenter(new V));const st=new V;b.getSize(st);const ot=new V;J.getSize(ot);const z=(st.x+ot.x)/2-Math.abs(H.x);(st.y+ot.y)/2-Math.abs(H.y)<z?E.position.y>F.position.y&&_.y<=0?(E.position.y=F.position.y+ot.y/2+st.y/2-.001,_.y=0,d.current.isPlayerGrounded=!0,d.current.hasDoubleJumped=!1):E.position.y<F.position.y&&(E.position.y=F.position.y-ot.y/2-st.y/2+.001,_.y*=-.5):(H.x>0?E.position.x+=z:E.position.x-=z,_.x=0)}}),d.current.healthItems=d.current.healthItems.filter(F=>b.intersectsBox(new Qn().setFromObject(F))?(i(),B==null||B.remove(F),F.geometry.dispose(),F.material.dispose(),!1):!0),E.position.y<-20){p();return}for(const F of j)if(!F.isDefeated&&b.intersectsBox(new Qn().setFromObject(F.mesh))){p();return}C&&b.intersectsBox(new Qn().setFromObject(C))&&(d.current.isGameWon=!0,r())},[l,r,i,p]),M=Oe.useCallback(()=>{const{camera:E,player:_,playerDirection:x}=d.current;if(E&&_){const C=_.position.x+x*3,L=.04;d.current.cameraTargetX+=(C-d.current.cameraTargetX)*L;const j=.02;E.position.x+=(d.current.cameraTargetX-E.position.x)*j,E.lookAt(E.position.x,E.position.y,0)}},[]),T=Oe.useCallback(()=>{const{renderer:E,scene:_,camera:x,goal:U,isGameWon:C,healthItems:L}=d.current;if(!E||!_||!x){d.current.animationFrameId=requestAnimationFrame(T);return}if(!f.current){C||(y(),g(),v()),M(),U&&(U.rotation.y+=.02);const j=performance.now()*.002;L.forEach(B=>{B.rotation.y+=.03,B.position.y=B.userData.originalY+Math.sin(j+B.position.x)*.15})}E.render(_,x),d.current.animationFrameId=requestAnimationFrame(T)},[y,M,g,v]);return Oe.useLayoutEffect(()=>{if(!c.current)return;const E=c.current,_=new n1;_.background=new xe(8900331),_.fog=new rd(8900331,10,50),d.current.scene=_;const x=200,U=200,C=new G1(x,U);C.rotation.x=Math.PI/2,C.position.set(80,0,-10),C.material.opacity=.2,C.material.transparent=!0,_.add(C);const L=E.clientWidth/E.clientHeight,j=25,B=new ad(j*L/-2,j*L/2,j/2,j/-2,.1,1e3);B.position.set(0,2,20),d.current.camera=B;const O=new e1({antialias:!0});O.setSize(E.clientWidth,E.clientHeight),O.setPixelRatio(window.devicePixelRatio),O.shadowMap.enabled=!0,O.shadowMap.type=Iv,E.appendChild(O.domElement),d.current.renderer=O,_.add(new H1(16777215,.6));const Z=new F1(16777215,1.2);Z.position.set(5,20,15),Z.castShadow=!0,Z.shadow.mapSize.width=2048,Z.shadow.mapSize.height=2048,_.add(Z);const D=new Ln(new Ia(1,1,1),new xr({color:16729156,roughness:.6}));D.position.set(0,2,0),D.castShadow=!0,_.add(D),d.current.player=D,d.current.cameraTargetX=D.position.x,d.current.lastLifeLossTime=-1e3,d.current.lastAttackTime=-Pv,m(_);const b=()=>{const{camera:F,renderer:J}=d.current;if(F&&J&&E){const H=E.clientWidth/E.clientHeight;F.left=j*H/-2,F.right=j*H/2,F.top=j/2,F.bottom=j/-2,F.updateProjectionMatrix(),J.setSize(E.clientWidth,E.clientHeight)}};return window.addEventListener("resize",b),T(),()=>{cancelAnimationFrame(d.current.animationFrameId),window.removeEventListener("resize",b),E&&d.current.renderer&&E.removeChild(d.current.renderer.domElement),_.traverse(F=>{F.isMesh&&(F.geometry&&F.geometry.dispose(),F.material&&(Array.isArray(F.material)?F.material:[F.material]).forEach(J=>J.dispose()))}),d.current.renderer&&d.current.renderer.dispose()}},[T,m]),Dt.jsx("div",{ref:c,className:"w-full h-full"})},Rc=({label:r,code:t,onInput:i,className:s})=>{const l=f=>{f.preventDefault(),i(t,!0)},c=f=>{f.preventDefault(),i(t,!1)};return Dt.jsx("button",{onMouseDown:l,onMouseUp:c,onMouseLeave:c,onTouchStart:l,onTouchEnd:c,className:`select-none flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 active:scale-90 active:bg-white/30 transition-all duration-75 text-white font-bold shadow-xl ${s}`,children:r})},Z1=({onInput:r})=>Dt.jsx("div",{className:"absolute inset-0 pointer-events-none z-20 flex flex-col justify-end pb-8 px-8 sm:pb-12 sm:px-12",children:Dt.jsxs("div",{className:"flex justify-between items-end w-full",children:[Dt.jsxs("div",{className:"flex space-x-6 pointer-events-auto items-center mb-4",children:[Dt.jsx(Rc,{label:Dt.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Dt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M15 19l-7-7 7-7"})}),code:"KeyA",onInput:r,className:"w-20 h-20 sm:w-24 sm:h-24"}),Dt.jsx(Rc,{label:Dt.jsx("svg",{className:"w-8 h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:Dt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"3",d:"M9 5l7 7-7 7"})}),code:"KeyD",onInput:r,className:"w-20 h-20 sm:w-24 sm:h-24"})]}),Dt.jsxs("div",{className:"flex space-x-6 pointer-events-auto items-end mb-4",children:[Dt.jsx(Rc,{label:Dt.jsx("span",{className:"text-xs",children:"ATTACK"}),code:"KeyF",onInput:r,className:"w-20 h-20 sm:w-24 sm:h-24 bg-red-500/20 border-red-500/40"}),Dt.jsx(Rc,{label:Dt.jsx("span",{className:"text-sm",children:"JUMP"}),code:"Space",onInput:r,className:"w-24 h-24 sm:w-32 sm:h-32 bg-blue-500/20 border-blue-500/40"})]})]})}),K1=()=>{const r=Oe.useRef(new Map),t=Oe.useCallback((s,l)=>{r.current.set(s,l)},[]),i=Oe.useCallback(()=>{r.current.clear()},[]);return Oe.useEffect(()=>{const s=c=>{r.current.set(c.code,!0)},l=c=>{r.current.set(c.code,!1)};return window.addEventListener("keydown",s),window.addEventListener("keyup",l),()=>{window.removeEventListener("keydown",s),window.removeEventListener("keyup",l),r.current.clear()}},[]),Oe.useMemo(()=>({get:s=>r.current.get(s)||!1,setKey:t,reset:i}),[t,i])},Q1=()=>Dt.jsxs("div",{className:"fixed inset-0 bg-gray-900 z-[100] flex flex-col justify-center items-center p-8 text-center",children:[Dt.jsxs("div",{className:"w-24 h-40 border-4 border-white rounded-2xl mb-8 animate-rotate-phone relative",children:[Dt.jsx("div",{className:"absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full"}),Dt.jsx("div",{className:"absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 border-2 border-white rounded-full"})]}),Dt.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"画面を横にしてください"}),Dt.jsx("p",{className:"text-gray-400",children:"このゲームは横画面でのプレイに最適化されています。"})]}),J1=()=>{const t=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722"],i=Array.from({length:150}).map((s,l)=>{const c={left:`${Math.random()*100}%`,backgroundColor:t[Math.floor(Math.random()*t.length)],animationDuration:`${Math.random()*3+4}s`,animationDelay:`${Math.random()*5}s`,width:`${Math.random()*8+6}px`,height:`${Math.random()*10+8}px`};return Dt.jsx("div",{className:"confetti-piece",style:c},l)});return Dt.jsx("div",{className:"confetti-container",children:i})},$1=({onStart:r})=>Dt.jsxs("div",{className:"absolute inset-0 bg-gray-900 flex flex-col justify-center items-center z-20 animate-fade-in",children:[Dt.jsxs("div",{className:"text-center px-4",children:[Dt.jsx("h1",{className:"text-5xl md:text-8xl font-black text-white animate-bounce-in text-shadow-pop",children:"React 3D Platformer"}),Dt.jsx("p",{className:"mt-4 text-lg md:text-xl text-gray-300 animate-bounce-in",style:{animationDelay:"0.2s"},children:"A magical adventure awaits on any device."})]}),Dt.jsx("button",{onClick:r,className:"mt-12 px-10 py-4 bg-yellow-500 text-gray-900 font-bold text-xl rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-300 transition-transform transform animate-button-boing hover-animate-wiggle",children:"Start Game"})]}),t2=({onSelectStage:r})=>{const t=[{id:"1-1",name:"Grassy Plains",locked:!1},{id:"1-2",name:"???",locked:!0},{id:"1-3",name:"???",locked:!0},{id:"1-4",name:"???",locked:!0}];return Dt.jsxs("div",{className:"absolute inset-0 bg-gray-800 flex flex-col justify-center items-center z-20 animate-fade-in p-8",children:[Dt.jsx("h1",{className:"text-5xl md:text-7xl font-black text-white mb-12 animate-bounce-in text-shadow-pop",children:"Stage Select"}),Dt.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 overflow-y-auto max-h-[70vh] p-4",children:t.map((i,s)=>Dt.jsx("div",{onClick:()=>!i.locked&&r(i.id),className:`stage-card w-32 h-32 md:w-48 md:h-48 bg-sky-600 rounded-2xl flex flex-col justify-center items-center p-4 text-white font-bold shadow-lg cursor-pointer ${i.locked?"locked":"hover:bg-sky-500"} animate-bounce-in`,style:{animationDelay:`${.2+s*.1}s`},children:i.locked?Dt.jsx("svg",{className:"w-12 h-12 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",children:Dt.jsx("path",{d:"M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2V7a5 5 0 00-5-5zm0 2a3 3 0 013 3v2H7V7a3 3 0 013-3z"})}):Dt.jsxs(Dt.Fragment,{children:[Dt.jsx("p",{className:"text-3xl md:text-4xl",children:i.id}),Dt.jsx("p",{className:"text-sm md:text-lg mt-2",children:i.name})]})},i.id))})]})},e2=({onResume:r,onBackToStageSelect:t,onQuit:i})=>Dt.jsxs("div",{className:"absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col justify-center items-center z-40 animate-fade-in",children:[Dt.jsx("h2",{className:"text-6xl md:text-7xl font-black text-white mb-12 animate-bounce-in text-shadow-pop",children:"Paused"}),Dt.jsxs("div",{className:"flex flex-col space-y-4 px-6 w-full max-w-xs",children:[Dt.jsx("button",{onClick:r,className:"w-full px-6 py-4 bg-green-500 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform animate-button-boing hover-animate-wiggle",style:{animationDelay:"0.1s"},children:"Resume Game"}),Dt.jsx("button",{onClick:t,className:"w-full px-6 py-4 bg-cyan-500 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform animate-button-boing hover-animate-wiggle",style:{animationDelay:"0.2s"},children:"Stage Select"}),Dt.jsx("button",{onClick:i,className:"w-full px-6 py-4 bg-red-600 text-white font-bold text-lg rounded-full shadow-lg transition-transform transform animate-button-boing hover-animate-wiggle",style:{animationDelay:"0.3s"},children:"Quit Game"})]})]}),n2=()=>{const[r,t]=Oe.useState("start"),[i,s]=Oe.useState(!1),[l,c]=Oe.useState(3),[f,d]=Oe.useState(0),[p,m]=Oe.useState(window.innerHeight>window.innerWidth),g=K1();Oe.useEffect(()=>{const U=()=>{m(window.innerHeight>window.innerWidth)};return window.addEventListener("resize",U),()=>window.removeEventListener("resize",U)},[]);const v=Oe.useCallback(()=>{r==="playing"&&t("won")},[r]),y=Oe.useCallback(()=>{c(U=>U>0?U-1:0)},[]),M=Oe.useCallback(()=>{c(U=>Math.min(U+1,3))},[]);Oe.useEffect(()=>{l<=0&&r==="playing"&&t("game-over")},[l,r]);const T=()=>{g.reset(),t("playing"),c(3),d(U=>U+1)},E=()=>{g.reset(),t("stage-select"),c(3),d(U=>U+1)},_=()=>{g.reset(),t("start"),c(3),d(U=>U+1)},x=r==="playing"||r==="game-over"||r==="won";return Dt.jsxs("main",{className:"relative w-screen h-screen bg-gray-900 text-white overflow-hidden",children:[p&&Dt.jsx(Q1,{}),r==="start"&&Dt.jsx($1,{onStart:()=>t("stage-select")}),r==="stage-select"&&Dt.jsx(t2,{onSelectStage:U=>{U==="1-1"&&t("playing")}}),x&&Dt.jsxs(Dt.Fragment,{children:[Dt.jsxs("div",{className:"absolute top-0 left-0 p-4 sm:p-6 z-10 w-full flex justify-between items-start bg-gradient-to-b from-gray-900/90 to-transparent",children:[Dt.jsxs("div",{className:"flex items-center space-x-4",children:[Dt.jsxs("div",{children:[Dt.jsx("h1",{className:"text-xl sm:text-4xl font-bold tracking-tight text-white drop-shadow-lg",children:"Stage 1-1"}),Dt.jsx("p",{className:"mt-1 text-[10px] sm:text-xs text-gray-300 drop-shadow-md hidden md:block",children:"Move: Arrows/WASD, Jump: Space, Attack: F"})]}),r==="playing"&&Dt.jsx("button",{onClick:()=>s(!0),className:"p-2 bg-black/40 rounded-full text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white transition active:scale-90","aria-label":"Pause Game",children:Dt.jsx("svg",{className:"w-5 h-5 sm:w-8 sm:h-8",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:Dt.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),Dt.jsxs("div",{className:"flex items-center space-x-1 sm:space-x-2 p-2 bg-black/30 rounded-lg",children:[Dt.jsx("span",{className:"font-bold text-xs sm:text-lg hidden xs:inline",children:"Lives:"}),[...Array(3)].map((U,C)=>Dt.jsx("svg",{className:`w-4 h-4 sm:w-8 sm:h-8 ${C<l?"text-red-500":"text-gray-600"}`,fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Dt.jsx("path",{fillRule:"evenodd",d:"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z",clipRule:"evenodd"})},C))]})]}),r==="playing"&&!i&&Dt.jsx(Z1,{onInput:(U,C)=>g.setKey(U,C)})]}),Dt.jsx("div",{className:`w-full h-full absolute inset-0 transition-opacity duration-300 ${x?"opacity-100 z-0":"opacity-0 -z-10 pointer-events-none"}`,children:Dt.jsx(j1,{input:g,onWin:v,onLoseLife:y,onGainLife:M,isPaused:i||r!=="playing"},f)}),i&&Dt.jsx(e2,{onResume:()=>s(!1),onBackToStageSelect:()=>{s(!1),E()},onQuit:()=>{s(!1),_()}}),r==="game-over"&&Dt.jsxs("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col justify-center items-center z-30 animate-fade-in",children:[Dt.jsx("div",{className:"text-center px-4",children:Dt.jsx("h2",{className:"text-6xl md:text-9xl font-black text-yellow-400 font-sans animate-bounce-in text-shadow-pop",children:"Game Over"})}),Dt.jsx("button",{onClick:T,className:"mt-12 px-10 py-4 bg-pink-500 text-white font-bold text-xl rounded-full shadow-lg transition-transform transform animate-button-boing hover-animate-wiggle",children:"Try Again"})]}),r==="won"&&Dt.jsxs(Dt.Fragment,{children:[Dt.jsx(J1,{}),Dt.jsxs("div",{className:"absolute inset-0 bg-sky-900/80 backdrop-blur-md flex flex-col justify-center items-center z-30 animate-fade-in",children:[Dt.jsx("h2",{className:"text-6xl md:text-9xl font-black font-sans animate-bounce-in animate-shine text-shadow-win",children:"You Win!"}),Dt.jsx("button",{onClick:E,className:"mt-12 px-10 py-4 bg-cyan-500 text-white font-bold text-xl rounded-full shadow-lg transition-transform transform animate-button-boing hover-animate-wiggle",children:"Back to Stage Select"})]})]})]})},b_=document.getElementById("root");if(!b_)throw new Error("Could not find root element to mount to");const i2=Vy.createRoot(b_);i2.render(Dt.jsx(Oy.StrictMode,{children:Dt.jsx(n2,{})}));
