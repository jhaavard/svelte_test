var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,r=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,o=(e,r,s)=>r in e?t(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,n=(t,n)=>{for(var a in n||(n={}))e.call(n,a)&&o(t,a,n[a]);if(r)for(var a of r(n))s.call(n,a)&&o(t,a,n[a]);return t};import{S as a,i,s as c,e as l,t as u,a as h,c as p,b as d,d as f,f as g,g as m,h as y,j as v,k as $,n as b,l as w,m as _,o as E,p as x,q,r as R,u as S,v as L,w as k,x as O,y as j,z as A,A as P,B as T,C as N,D as U,E as C,F as V,G as D}from"./chunks/vendor-2c107171.js";/* empty css                   */function I(t){let e,r,s,o,n,a=t[1].message+"";return{c(){e=l("h1"),r=u(t[0]),s=h(),o=l("h1"),n=u(a)},l(i){e=p(i,"H1",{});var c=d(e);r=f(c,t[0]),c.forEach(g),s=m(i),o=p(i,"H1",{});var l=d(o);n=f(l,a),l.forEach(g)},m(t,a){y(t,e,a),v(e,r),y(t,s,a),y(t,o,a),v(o,n)},p(t,[e]){1&e&&$(r,t[0]),2&e&&a!==(a=t[1].message+"")&&$(n,a)},i:b,o:b,d(t){t&&g(e),t&&g(s),t&&g(o)}}}function B(t,e,r){let{status:s}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&r(0,s=t.status),"error"in t&&r(1,o=t.error)},[s,o]}class H extends a{constructor(t){super(),i(this,t,B,I,c,{status:0,error:1})}}function K(t){let e,r,s;const o=[t[4]||{}];var n=t[2][1];function a(t){let e={};for(let r=0;r<o.length;r+=1)e=w(e,o[r]);return{props:e}}return n&&(e=new n(a())),{c(){e&&E(e.$$.fragment),r=x()},l(t){e&&q(e.$$.fragment,t),r=x()},m(t,o){e&&R(e,t,o),y(t,r,o),s=!0},p(t,s){const i=16&s?S(o,[L(t[4]||{})]):{};if(n!==(n=t[2][1])){if(e){N();const t=e;O(t.$$.fragment,1,0,(()=>{j(t,1)})),U()}n?(e=new n(a()),E(e.$$.fragment),k(e.$$.fragment,1),R(e,r.parentNode,r)):e=null}else n&&e.$set(i)},i(t){s||(e&&k(e.$$.fragment,t),s=!0)},o(t){e&&O(e.$$.fragment,t),s=!1},d(t){t&&g(r),e&&j(e,t)}}}function M(t){let e,r;return e=new H({props:{status:t[0],error:t[1]}}),{c(){E(e.$$.fragment)},l(t){q(e.$$.fragment,t)},m(t,s){R(e,t,s),r=!0},p(t,r){const s={};1&r&&(s.status=t[0]),2&r&&(s.error=t[1]),e.$set(s)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){O(e.$$.fragment,t),r=!1},d(t){j(e,t)}}}function z(t){let e,r,s,o;const n=[M,K],a=[];function i(t,e){return t[1]?0:1}return e=i(t),r=a[e]=n[e](t),{c(){r.c(),s=x()},l(t){r.l(t),s=x()},m(t,r){a[e].m(t,r),y(t,s,r),o=!0},p(t,o){let c=e;e=i(t),e===c?a[e].p(t,o):(N(),O(a[c],1,1,(()=>{a[c]=null})),U(),r=a[e],r?r.p(t,o):(r=a[e]=n[e](t),r.c()),k(r,1),r.m(s.parentNode,s))},i(t){o||(k(r),o=!0)},o(t){O(r),o=!1},d(t){a[e].d(t),t&&g(s)}}}function W(t){let e,r=t[6]&&G(t);return{c(){e=l("div"),r&&r.c(),this.h()},l(t){e=p(t,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var s=d(e);r&&r.l(s),s.forEach(g),this.h()},h(){_(e,"id","svelte-announcer"),_(e,"aria-live","assertive"),_(e,"aria-atomic","true"),_(e,"class","svelte-1j55zn5")},m(t,s){y(t,e,s),r&&r.m(e,null)},p(t,s){t[6]?r?r.p(t,s):(r=G(t),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(t){t&&g(e),r&&r.d()}}}function G(t){let e,r;return{c(){e=u("Navigated to "),r=u(t[7])},l(s){e=f(s,"Navigated to "),r=f(s,t[7])},m(t,s){y(t,e,s),y(t,r,s)},p(t,e){128&e&&$(r,t[7])},d(t){t&&g(e),t&&g(r)}}}function Y(t){let e,r,s,o;const n=[t[3]||{}];let a={$$slots:{default:[z]},$$scope:{ctx:t}};for(let c=0;c<n.length;c+=1)a=w(a,n[c]);e=new t[8]({props:a});let i=t[5]&&W(t);return{c(){E(e.$$.fragment),r=h(),i&&i.c(),s=x()},l(t){q(e.$$.fragment,t),r=m(t),i&&i.l(t),s=x()},m(t,n){R(e,t,n),y(t,r,n),i&&i.m(t,n),y(t,s,n),o=!0},p(t,[r]){const o=8&r?S(n,[L(t[3]||{})]):{};2071&r&&(o.$$scope={dirty:r,ctx:t}),e.$set(o),t[5]?i?i.p(t,r):(i=W(t),i.c(),i.m(s.parentNode,s)):i&&(i.d(1),i=null)},i(t){o||(k(e.$$.fragment,t),o=!0)},o(t){O(e.$$.fragment,t),o=!1},d(t){j(e,t),t&&g(r),i&&i.d(t),t&&g(s)}}}function F(t,e,r){let{status:s}=e,{error:o}=e,{stores:n}=e,{page:a}=e,{components:i}=e,{props_0:c=null}=e,{props_1:l=null}=e;const u=i[0];A("__svelte__",n),P(n.page.notify);let h=!1,p=!1,d=null;return T((()=>{const t=n.page.subscribe((()=>{h&&(r(6,p=!0),r(7,d=document.title))}));return r(5,h=!0),t})),t.$$set=t=>{"status"in t&&r(0,s=t.status),"error"in t&&r(1,o=t.error),"stores"in t&&r(9,n=t.stores),"page"in t&&r(10,a=t.page),"components"in t&&r(2,i=t.components),"props_0"in t&&r(3,c=t.props_0),"props_1"in t&&r(4,l=t.props_1)},t.$$.update=()=>{1536&t.$$.dirty&&n.page.set(a)},[s,o,i,c,l,h,p,d,u,n,a]}class J extends a{constructor(t){super(),i(this,t,F,Y,c,{status:0,error:1,stores:9,page:10,components:2,props_0:3,props_1:4})}}let X;const Q={},Z=function(t,e){if(!e)return t();if(void 0===X){const t=document.createElement("link").relList;X=t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(e.map((t=>{if(t in Q)return;Q[t]=!0;const e=t.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${r}`))return;const s=document.createElement("link");return s.rel=e?"stylesheet":X,e||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),e?new Promise(((t,e)=>{s.addEventListener("load",t),s.addEventListener("error",e)})):void 0}))).then((()=>t()))};function tt(t){let e,r,s,o,n,a,i,c;const $=t[1].default,b=C($,t,t[0],null);return{c(){e=l("nav"),r=l("a"),s=u("Home"),o=h(),n=l("a"),a=u("About"),i=h(),b&&b.c(),this.h()},l(t){e=p(t,"NAV",{});var c=d(e);r=p(c,"A",{href:!0});var l=d(r);s=f(l,"Home"),l.forEach(g),o=m(c),n=p(c,"A",{href:!0});var u=d(n);a=f(u,"About"),u.forEach(g),c.forEach(g),i=m(t),b&&b.l(t),this.h()},h(){_(r,"href","."),_(n,"href","about")},m(t,l){y(t,e,l),v(e,r),v(r,s),v(e,o),v(e,n),v(n,a),y(t,i,l),b&&b.m(t,l),c=!0},p(t,[e]){b&&b.p&&1&e&&V(b,$,t,t[0],e,null,null)},i(t){c||(k(b,t),c=!0)},o(t){O(b,t),c=!1},d(t){t&&g(e),t&&g(i),b&&b.d(t)}}}function et(t,e,r){let{$$slots:s={},$$scope:o}=e;return t.$$set=t=>{"$$scope"in t&&r(0,o=t.$$scope)},[o,s]}var rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:class extends a{constructor(t){super(),i(this,t,et,tt,c,{})}}});const st=[()=>Z((()=>import("./pages/index.svelte-4c710e56.js")),void 0),()=>Z((()=>import("./pages/about.svelte-914b56a4.js")),void 0)],ot=[[/^\/$/,[st[0]]],[/^\/about\/?$/,[st[1]]]];function nt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function at(){return{x:pageXOffset,y:pageYOffset}}class it{constructor({base:t,routes:e}){this.base=t,this.routes=e}init(t){let e;this.renderer=t,t.router=this,this.enabled=!0,"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{history.scrollRestoration="auto"})),addEventListener("load",(()=>{history.scrollRestoration="manual"})),addEventListener("scroll",(()=>{clearTimeout(e),e=setTimeout((()=>{const t=n(n({},history.state||{}),{"sveltekit:scroll":at()});history.replaceState(t,document.title,window.location.href)}),50)})),addEventListener("click",(t=>{if(!this.enabled)return;if(t.button||1!==t.which)return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=nt(t.target);if(!e)return;if(!e.href)return;const r="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(r?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(r?e.target.baseVal:e.target)return;const o=new URL(s);if(o.pathname===location.pathname&&o.search===location.search)return;const n=this.parse(o);if(n){const r=e.hasAttribute("sveltekit:noscroll");history.pushState({},"",o.href),this._navigate(n,r?at():null,[],o.hash),t.preventDefault()}})),addEventListener("popstate",(t=>{if(t.state&&this.enabled){const e=new URL(location.href),r=this.parse(e);r?this._navigate(r,t.state["sveltekit:scroll"],[]):location.href=location.href}})),document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}parse(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(this.base))return null;const e=t.pathname.slice(this.base.length)||"/",r=this.routes.filter((([t])=>t.test(e)));if(r.length>0){const s=new URLSearchParams(t.search);return{id:`${e}?${s}`,routes:r,path:e,query:s}}}async goto(t,{noscroll:e=!1,replaceState:r=!1}={},s){if(this.enabled){const o=new URL(t,function(t){let e=t.baseURI;if(!e){const r=t.getElementsByTagName("base");e=r.length?r[0].href:t.URL}return e}(document)),n=this.parse(o);if(n)return history[r?"replaceState":"pushState"]({},"",t),this._navigate(n,e?at():null,s,o.hash)}return location.href=t,new Promise((()=>{}))}async _navigate(t,e,r,s){this.renderer.notify({path:t.path,query:t.query}),location.pathname.endsWith("/")&&"/"!==location.pathname&&history.replaceState({},"",`${location.pathname.slice(0,-1)}${location.search}`),await this.renderer.update(t,r),document.body.focus();const o=s&&document.getElementById(s.slice(1));e?scrollTo(e.x,e.y):o?scrollTo(0,o.getBoundingClientRect().top+scrollY):scrollTo(0,0)}enable(){this.enabled=!0}disable(){this.enabled=!1}}function ct(t){if(t.error){const e="string"==typeof t.error?new Error(t.error):t.error,r=t.status;return e instanceof Error?!r||r<400||r>599?(console.warn('"error" returned from load() without a valid status code — defaulting to 500'),{status:500,error:e}):{status:r,error:e}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof e}"`)}}if(t.redirect){if(!t.status||3!==Math.floor(t.status/100))return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if("string"!=typeof t.redirect)return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}return t}function lt(t){const e=D(t);let r=!0;return{notify:function(){r=!0,e.update((t=>t))},set:function(t){r=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||r&&e!==s)&&t(s=e)}))}}}class ut{constructor({Root:t,layout:e,target:r,session:s,host:o}){this.Root=t,this.layout=e,this.host=o,this.router=null,this.target=r,this.started=!1,this.current={page:null,query:null,session_changed:!1,nodes:[],contexts:[]},this.caches=new Map,this.prefetching={id:null,promise:null},this.stores={page:lt({}),navigating:D(null),session:D(s)},this.$session=null,this.root=null;const n=t=>{const e=nt(t.target);e&&e.hasAttribute("sveltekit:prefetch")&&this.prefetch(new URL(e.href))};let a;addEventListener("touchstart",n),addEventListener("mousemove",(t=>{clearTimeout(a),a=setTimeout((()=>{n(t)}),20)}));let i=!1;this.stores.session.subscribe((async t=>{if(this.$session=t,!i)return;this.current.session_changed=!0;const e=this.router.parse(new URL(location.href));this.update(e,[])})),i=!0}async start(t,e,r){const s={stores:this.stores,error:r,status:e,page:t.page};if(r)s.components=[this.layout.default];else{const e=await this._hydrate(t);if(e.redirect)return void(location.href=new URL(e.redirect,location.href).href);Object.assign(s,e.props),this.current=e.state}this.root=new this.Root({target:this.target,props:s,hydrate:!0}),this.started=!0}notify({path:t,query:e}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t,query:e}})}async update(t,e){const r=this.token={},s=await this._get_navigation_result(t);if(r!==this.token)return;if(s.reload)location.reload();else if(s.redirect){if(!(e.length>10||e.includes(this.current.page.path)))return void(this.router?this.router.goto(s.redirect,{replaceState:!0},[...e,this.current.page.path]):location.href=new URL(s.redirect,location.href).href);this.root.$set({status:500,error:new Error("Redirect loop")})}else this.started?(this.current=s.state,this.root.$set(s.props),this.stores.navigating.set(null),await 0):this.start({nodes:s.nodes,page:s.page},s.props.status,s.props.error);dispatchEvent(new CustomEvent("sveltekit:navigation-end")),this.prefetching.promise=null,this.prefetching.id=null;!1===s.state.nodes[s.state.nodes.length-1].module.router?this.router.disable():this.router.enable()}prefetch(t){return Promise.resolve().then((async()=>{if(this.router){const e=this.router.parse(t);if(e)return this.prefetching.promise=this._get_navigation_result(e),this.prefetching.id=e.id,await this.prefetching.promise;throw new Error(`Could not prefetch ${t.href}`)}throw new Error("Router is disabled")}))}async _get_navigation_result(t){if(this.prefetching.id===t.id)return this.prefetching.promise;for(let e=0;e<t.routes.length;e+=1){const r=t.routes[e],[s,o,n]=r;if(1===r.length)return{reload:!0};let a=e+1;for(;a<t.routes.length;){const e=t.routes[a];if(e[0].toString()!==s.toString())break;1!==e.length&&e[1].forEach((t=>t())),a+=1}const i=o.map((t=>t())),c={host:this.host,path:t.path,params:n?n(r[0].exec(t.path)):{},query:t.query},l=await this._hydrate({nodes:i,page:c});if(l)return l}return{nodes:[],page:null,state:{page:null,query:null,session_changed:!1,contexts:[],nodes:[]},props:{status:404,error:new Error(`Not found: ${t.path}`)}}}async _hydrate({nodes:t,page:o}){const a=o.query.toString(),i={nodes:t,page:o,state:{page:o,query:a,session_changed:!1,nodes:[],contexts:[]},props:{status:200,error:null,components:[]}},c=(t,o)=>{if(!this.started){const o="string"==typeof t?t:t.url,n=document.querySelector(`script[type="svelte-data"][url="${o}"]`);if(n){const t=JSON.parse(n.textContent),{body:o}=t,a=((t,o)=>{var n={};for(var a in t)e.call(t,a)&&o.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&r)for(var a of r(t))o.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n})(t,["body"]);return Promise.resolve(new Response(o,a))}}return fetch(t,o)},l=[this.layout,...t],u=[];let h;const p={params:Object.keys(o.params).filter((t=>!this.current.page||this.current.page.params[t]!==o.params[t])),query:a!==this.current.query,session:this.current.session_changed,context:!1};try{for(let t=0;t<l.length;t+=1){const e=this.current.nodes[t],r=this.current.contexts[t],s=await l[t],{default:d,preload:f,load:g}=s;if(i.props.components[t]=d,f)throw new Error("preload has been deprecated in favour of load. Please consult the documentation: https://kit.svelte.dev/docs#load");if(!e||s!==e.module||p.params.some((t=>e.uses.params.has(t)))||p.query&&e.uses.query||p.session&&e.uses.session||p.context&&e.uses.context){const e=o.path+a,r=this.caches.get(s),l=r&&r.get(e);let d,f;if(!l||p.context&&l.node.uses.context){d={module:s,uses:{params:new Set,query:!1,session:!1,context:!1}};const t={};for(const r in o.params)Object.defineProperty(t,r,{get:()=>(d.uses.params.add(r),o.params[r]),enumerable:!0});const e=this.$session;if(g&&(f=await g.call(null,{page:{host:o.host,path:o.path,params:t,get query(){return d.uses.query=!0,o.query}},get session(){return d.uses.session=!0,e},get context(){return d.uses.context=!0,n({},h)},fetch:c}),!f))return}else({node:d,loaded:f}=l);if(f){if(f=ct(f),f.error)return i.props.error=f.error,i.props.status=f.status||500,i.state.nodes=[],i;if(f.redirect)return{redirect:f.redirect};if(f.context&&(p.context=!0,h=n(n({},h),f.context)),f.maxage){this.caches.has(s)||this.caches.set(s,new Map);const t=this.caches.get(s),r={node:d,loaded:f};t.set(e,r);let o=!1;const n=setTimeout((()=>{a()}),1e3*f.maxage),a=()=>{t.get(e)===r&&t.delete(e),i(),clearTimeout(n)},i=this.stores.session.subscribe((()=>{o&&a()}));o=!0}u[t]=f.props}i.state.nodes[t]=d,i.state.contexts[t]=h}else i.state.nodes[t]=e,i.state.contexts[t]=h=r}(await Promise.all(u)).forEach(((t,e)=>{t&&(i.props[`props_${e}`]=t)})),this.current.page&&o.path===this.current.page.path&&!p.query||(i.props.page=o)}catch(d){i.props.error=d,i.props.status=500,i.state.nodes=[]}return i}}async function ht({paths:t,target:e,session:r,error:s,status:o,host:n,route:a,hydrate:i}){const c=a&&new it({base:t.base,routes:ot}),l=new ut({Root:J,layout:rt,target:e,session:r,host:n});i&&await l.start(i,o,s),a&&c.init(l),dispatchEvent(new CustomEvent("sveltekit:start"))}export{ht as start};