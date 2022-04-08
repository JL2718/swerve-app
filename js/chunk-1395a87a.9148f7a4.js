(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1395a87a"],{"16a1":function(t,e,n){const r=n("417a"),o=n("364d"),i=n("f0f8"),{bnToHex:s,hexToInt:c,incrementHexInt:a,minBlockRef:u,blockRefIsNumber:l}=n("509d");class f extends i{constructor({provider:t,params:e}){super(),this.type="log",this.ethQuery=new r(t),this.params=Object.assign({fromBlock:"latest",toBlock:"latest",address:void 0,topics:[]},e),this.params.address&&(Array.isArray(this.params.address)||(this.params.address=[this.params.address]),this.params.address=this.params.address.map(t=>t.toLowerCase()))}async initialize({currentBlock:t}){let e=this.params.fromBlock;["latest","pending"].includes(e)&&(e=t),"earliest"===e&&(e="0x0"),this.params.fromBlock=e;const n=u(this.params.toBlock,t),r=Object.assign({},this.params,{toBlock:n}),o=await this._fetchLogs(r);this.addInitialResults(o)}async update({oldBlock:t,newBlock:e}){const n=e;let r;r=t?a(t):e;const o=Object.assign({},this.params,{fromBlock:r,toBlock:n}),i=await this._fetchLogs(o),s=i.filter(t=>this.matchLog(t));this.addResults(s)}async _fetchLogs(t){const e=await o(e=>this.ethQuery.getLogs(t,e))();return e}matchLog(t){if(c(this.params.fromBlock)>=c(t.blockNumber))return!1;if(l(this.params.toBlock)&&c(this.params.toBlock)<=c(t.blockNumber))return!1;const e=t.address&&t.address.toLowerCase();if(this.params.address&&e&&!this.params.address.includes(e))return!1;const n=this.params.topics.every((e,n)=>{let r=t.topics[n];if(!r)return!1;r=r.toLowerCase();let o=Array.isArray(e)?e:[e];const i=o.includes(null);if(i)return!0;o=o.map(t=>t.toLowerCase());const s=o.includes(r);return s});return n}}t.exports=f},"364d":function(t,e,n){"use strict";const r=(t,e)=>function(){const n=e.promiseModule,r=new Array(arguments.length);for(let t=0;t<arguments.length;t++)r[t]=arguments[t];return new n((n,o)=>{e.errorFirst?r.push((function(t,r){if(e.multiArgs){const e=new Array(arguments.length-1);for(let t=1;t<arguments.length;t++)e[t-1]=arguments[t];t?(e.unshift(t),o(e)):n(e)}else t?o(t):n(r)})):r.push((function(t){if(e.multiArgs){const t=new Array(arguments.length-1);for(let e=0;e<arguments.length;e++)t[e]=arguments[e];n(t)}else n(t)})),t.apply(this,r)})};t.exports=(t,e)=>{e=Object.assign({exclude:[/.+(Sync|Stream)$/],errorFirst:!0,promiseModule:Promise},e);const n=t=>{const n=e=>"string"===typeof e?t===e:e.test(t);return e.include?e.include.some(n):!e.exclude.some(n)};let o;o="function"===typeof t?function(){return e.excludeMain?t.apply(this,arguments):r(t,e).apply(this,arguments)}:Object.create(Object.getPrototypeOf(t));for(const i in t){const s=t[i];o[i]="function"===typeof s&&n(i)?r(s,e):s}return o}},"417a":function(t,e,n){const r=n("53a8"),o=n("d89d")();function i(t){const e=this;e.currentProvider=t}function s(t){return function(){const e=this;var n=[].slice.call(arguments),r=n.pop();e.sendAsync({method:t,params:n},r)}}function c(t,e){return function(){const n=this;var r=[].slice.call(arguments),o=r.pop();r.length<t&&r.push("latest"),n.sendAsync({method:e,params:r},o)}}function a(t){return r({id:o(),jsonrpc:"2.0",params:[]},t)}t.exports=i,i.prototype.getBalance=c(2,"eth_getBalance"),i.prototype.getCode=c(2,"eth_getCode"),i.prototype.getTransactionCount=c(2,"eth_getTransactionCount"),i.prototype.getStorageAt=c(3,"eth_getStorageAt"),i.prototype.call=c(2,"eth_call"),i.prototype.protocolVersion=s("eth_protocolVersion"),i.prototype.syncing=s("eth_syncing"),i.prototype.coinbase=s("eth_coinbase"),i.prototype.mining=s("eth_mining"),i.prototype.hashrate=s("eth_hashrate"),i.prototype.gasPrice=s("eth_gasPrice"),i.prototype.accounts=s("eth_accounts"),i.prototype.blockNumber=s("eth_blockNumber"),i.prototype.getBlockTransactionCountByHash=s("eth_getBlockTransactionCountByHash"),i.prototype.getBlockTransactionCountByNumber=s("eth_getBlockTransactionCountByNumber"),i.prototype.getUncleCountByBlockHash=s("eth_getUncleCountByBlockHash"),i.prototype.getUncleCountByBlockNumber=s("eth_getUncleCountByBlockNumber"),i.prototype.sign=s("eth_sign"),i.prototype.sendTransaction=s("eth_sendTransaction"),i.prototype.sendRawTransaction=s("eth_sendRawTransaction"),i.prototype.estimateGas=s("eth_estimateGas"),i.prototype.getBlockByHash=s("eth_getBlockByHash"),i.prototype.getBlockByNumber=s("eth_getBlockByNumber"),i.prototype.getTransactionByHash=s("eth_getTransactionByHash"),i.prototype.getTransactionByBlockHashAndIndex=s("eth_getTransactionByBlockHashAndIndex"),i.prototype.getTransactionByBlockNumberAndIndex=s("eth_getTransactionByBlockNumberAndIndex"),i.prototype.getTransactionReceipt=s("eth_getTransactionReceipt"),i.prototype.getUncleByBlockHashAndIndex=s("eth_getUncleByBlockHashAndIndex"),i.prototype.getUncleByBlockNumberAndIndex=s("eth_getUncleByBlockNumberAndIndex"),i.prototype.getCompilers=s("eth_getCompilers"),i.prototype.compileLLL=s("eth_compileLLL"),i.prototype.compileSolidity=s("eth_compileSolidity"),i.prototype.compileSerpent=s("eth_compileSerpent"),i.prototype.newFilter=s("eth_newFilter"),i.prototype.newBlockFilter=s("eth_newBlockFilter"),i.prototype.newPendingTransactionFilter=s("eth_newPendingTransactionFilter"),i.prototype.uninstallFilter=s("eth_uninstallFilter"),i.prototype.getFilterChanges=s("eth_getFilterChanges"),i.prototype.getFilterLogs=s("eth_getFilterLogs"),i.prototype.getLogs=s("eth_getLogs"),i.prototype.getWork=s("eth_getWork"),i.prototype.submitWork=s("eth_submitWork"),i.prototype.submitHashrate=s("eth_submitHashrate"),i.prototype.sendAsync=function(t,e){const n=this;n.currentProvider.sendAsync(a(t),(function(t,n){if(!t&&n.error&&(t=new Error("EthQuery - RPC Error - "+n.error.message)),t)return e(t);e(null,n.result)}))}},4465:function(t,e){var n,r,o,i,s={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},c=function(t){throw{name:"SyntaxError",message:t,at:n,text:o}},a=function(t){return t&&t!==r&&c("Expected '"+t+"' instead of '"+r+"'"),r=o.charAt(n),n+=1,r},u=function(){var t,e="";"-"===r&&(e="-",a("-"));while(r>="0"&&r<="9")e+=r,a();if("."===r){e+=".";while(a()&&r>="0"&&r<="9")e+=r}if("e"===r||"E"===r){e+=r,a(),"-"!==r&&"+"!==r||(e+=r,a());while(r>="0"&&r<="9")e+=r,a()}if(t=+e,isFinite(t))return t;c("Bad number")},l=function(){var t,e,n,o="";if('"'===r)while(a()){if('"'===r)return a(),o;if("\\"===r)if(a(),"u"===r){for(n=0,e=0;e<4;e+=1){if(t=parseInt(a(),16),!isFinite(t))break;n=16*n+t}o+=String.fromCharCode(n)}else{if("string"!==typeof s[r])break;o+=s[r]}else o+=r}c("Bad string")},f=function(){while(r&&r<=" ")a()},p=function(){switch(r){case"t":return a("t"),a("r"),a("u"),a("e"),!0;case"f":return a("f"),a("a"),a("l"),a("s"),a("e"),!1;case"n":return a("n"),a("u"),a("l"),a("l"),null}c("Unexpected '"+r+"'")},h=function(){var t=[];if("["===r){if(a("["),f(),"]"===r)return a("]"),t;while(r){if(t.push(i()),f(),"]"===r)return a("]"),t;a(","),f()}}c("Bad array")},d=function(){var t,e={};if("{"===r){if(a("{"),f(),"}"===r)return a("}"),e;while(r){if(t=l(),f(),a(":"),Object.hasOwnProperty.call(e,t)&&c('Duplicate key "'+t+'"'),e[t]=i(),f(),"}"===r)return a("}"),e;a(","),f()}}c("Bad object")};i=function(){switch(f(),r){case"{":return d();case"[":return h();case'"':return l();case"-":return u();default:return r>="0"&&r<="9"?u():p()}},t.exports=function(t,e){var s;return o=t,n=0,r=" ",s=i(),f(),r&&c("Syntax error"),"function"===typeof e?function t(n,r){var o,i,s=n[r];if(s&&"object"===typeof s)for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(i=t(s,o),void 0!==i?s[o]=i:delete s[o]);return e.call(n,r,s)}({"":s},""):s}},"509d":function(t,e){function n(...t){const e=o(t);return e[0]}function r(...t){const e=o(t);return e[e.length-1]}function o(t){return t.sort((t,e)=>"latest"===t||"earliest"===e?1:"latest"===e||"earliest"===t?-1:c(t)-c(e))}function i(t){return"0x"+t.toString(16)}function s(t){return t&&!["earliest","latest","pending"].includes(t)}function c(t){return void 0===t||null===t?t:Number.parseInt(t,16)}function a(t){if(void 0===t||null===t)return t;const e=c(t);return u(e+1)}function u(t){if(void 0===t||null===t)return t;let e=t.toString(16);const n=e.length%2;return n&&(e="0"+e),"0x"+e}function l(t){let e="0x";for(let n=0;n<t;n++)e+=f(),e+=f();return e}function f(){return Math.floor(16*Math.random()).toString(16)}t.exports={minBlockRef:n,maxBlockRef:r,sortBlockRefs:o,bnToHex:i,blockRefIsNumber:s,hexToInt:c,incrementHexInt:a,intToHex:u,unsafeRandomBytes:l}},"579c":function(t,e,n){const r=n("364d"),o=n("feef"),i=1e3;class s extends o{constructor(t={}){if(!t.provider)throw new Error("PollingBlockTracker - no provider specified.");const e=t.pollingInterval||20*i,n=t.retryTimeout||e/10,r=void 0===t.keepEventLoopActive||t.keepEventLoopActive,o=t.setSkipCacheFlag||!1;super(Object.assign({blockResetDuration:e},t)),this._provider=t.provider,this._pollingInterval=e,this._retryTimeout=n,this._keepEventLoopActive=r,this._setSkipCacheFlag=o}async checkForLatestBlock(){return await this._updateLatestBlock(),await this.getLatestBlock()}_start(){this._performSync().catch(t=>this.emit("error",t))}async _performSync(){while(this._isRunning)try{await this._updateLatestBlock(),await c(this._pollingInterval,!this._keepEventLoopActive)}catch(t){const n=new Error("PollingBlockTracker - encountered an error while attempting to update latest block:\n"+t.stack);try{this.emit("error",n)}catch(e){console.error(n)}await c(this._retryTimeout,!this._keepEventLoopActive)}}async _updateLatestBlock(){const t=await this._fetchLatestBlock();this._newPotentialLatest(t)}async _fetchLatestBlock(){const t={jsonrpc:"2.0",id:1,method:"eth_blockNumber",params:[]};this._setSkipCacheFlag&&(t.skipCache=!0);const e=await r(e=>this._provider.sendAsync(t,e))();if(e.error)throw new Error("PollingBlockTracker - encountered error fetching block:\n"+e.error);return e.result}}function c(t,e){return new Promise(n=>{const r=setTimeout(n,t);r.unref&&e&&r.unref()})}t.exports=s},7409:function(t,e,n){(function(t,n){var r=200,o="Expected a function",i="__lodash_hash_undefined__",s=1,c=2,a=1/0,u=9007199254740991,l="[object Arguments]",f="[object Array]",p="[object Boolean]",h="[object Date]",d="[object Error]",y="[object Function]",g="[object GeneratorFunction]",_="[object Map]",v="[object Number]",m="[object Object]",b="[object Promise]",w="[object RegExp]",k="[object Set]",B="[object String]",x="[object Symbol]",j="[object WeakMap]",A="[object ArrayBuffer]",R="[object DataView]",L="[object Float32Array]",T="[object Float64Array]",C="[object Int8Array]",F="[object Int16Array]",S="[object Int32Array]",O="[object Uint8Array]",E="[object Uint8ClampedArray]",I="[object Uint16Array]",N="[object Uint32Array]",H=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,P=/^\w*$/,U=/^\./,M=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,$=/[\\^$.*+?()[\]{}|]/g,J=/\\(\\)?/g,D=/^\[object .+?Constructor\]$/,q=/^(?:0|[1-9]\d*)$/,z={};z[L]=z[T]=z[C]=z[F]=z[S]=z[O]=z[E]=z[I]=z[N]=!0,z[l]=z[f]=z[A]=z[p]=z[R]=z[h]=z[d]=z[y]=z[_]=z[v]=z[m]=z[w]=z[k]=z[B]=z[j]=!1;var W="object"==typeof t&&t&&t.Object===Object&&t,G="object"==typeof self&&self&&self.Object===Object&&self,V=W||G||Function("return this")(),Q=e&&!e.nodeType&&e,X=Q&&"object"==typeof n&&n&&!n.nodeType&&n,K=X&&X.exports===Q,Y=K&&W.process,Z=function(){try{return Y&&Y.binding("util")}catch(t){}}(),tt=Z&&Z.isTypedArray;function et(t,e){var n=-1,r=t?t.length:0,o=Array(r);while(++n<r)o[n]=e(t[n],n,t);return o}function nt(t,e){var n=-1,r=e.length,o=t.length;while(++n<r)t[o+n]=e[n];return t}function rt(t,e){var n=-1,r=t?t.length:0;while(++n<r)if(e(t[n],n,t))return!0;return!1}function ot(t){return function(e){return null==e?void 0:e[t]}}function it(t,e){var n=-1,r=Array(t);while(++n<t)r[n]=e(n);return r}function st(t){return function(e){return t(e)}}function ct(t,e){return null==t?void 0:t[e]}function at(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(n){}return e}function ut(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function lt(t,e){return function(n){return t(e(n))}}function ft(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var pt=Array.prototype,ht=Function.prototype,dt=Object.prototype,yt=V["__core-js_shared__"],gt=function(){var t=/[^.]+$/.exec(yt&&yt.keys&&yt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),_t=ht.toString,vt=dt.hasOwnProperty,mt=dt.toString,bt=RegExp("^"+_t.call(vt).replace($,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),wt=V.Symbol,kt=V.Uint8Array,Bt=dt.propertyIsEnumerable,xt=pt.splice,jt=wt?wt.isConcatSpreadable:void 0,At=lt(Object.keys,Object),Rt=De(V,"DataView"),Lt=De(V,"Map"),Tt=De(V,"Promise"),Ct=De(V,"Set"),Ft=De(V,"WeakMap"),St=De(Object,"create"),Ot=nn(Rt),Et=nn(Lt),It=nn(Tt),Nt=nn(Ct),Ht=nn(Ft),Pt=wt?wt.prototype:void 0,Ut=Pt?Pt.valueOf:void 0,Mt=Pt?Pt.toString:void 0;function $t(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Jt(){this.__data__=St?St(null):{}}function Dt(t){return this.has(t)&&delete this.__data__[t]}function qt(t){var e=this.__data__;if(St){var n=e[t];return n===i?void 0:n}return vt.call(e,t)?e[t]:void 0}function zt(t){var e=this.__data__;return St?void 0!==e[t]:vt.call(e,t)}function Wt(t,e){var n=this.__data__;return n[t]=St&&void 0===e?i:e,this}function Gt(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function Vt(){this.__data__=[]}function Qt(t){var e=this.__data__,n=ye(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():xt.call(e,n,1),!0}function Xt(t){var e=this.__data__,n=ye(e,t);return n<0?void 0:e[n][1]}function Kt(t){return ye(this.__data__,t)>-1}function Yt(t,e){var n=this.__data__,r=ye(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}function Zt(t){var e=-1,n=t?t.length:0;this.clear();while(++e<n){var r=t[e];this.set(r[0],r[1])}}function te(){this.__data__={hash:new $t,map:new(Lt||Gt),string:new $t}}function ee(t){return $e(this,t)["delete"](t)}function ne(t){return $e(this,t).get(t)}function re(t){return $e(this,t).has(t)}function oe(t,e){return $e(this,t).set(t,e),this}function ie(t){var e=-1,n=t?t.length:0;this.__data__=new Zt;while(++e<n)this.add(t[e])}function se(t){return this.__data__.set(t,i),this}function ce(t){return this.__data__.has(t)}function ae(t){this.__data__=new Gt(t)}function ue(){this.__data__=new Gt}function le(t){return this.__data__["delete"](t)}function fe(t){return this.__data__.get(t)}function pe(t){return this.__data__.has(t)}function he(t,e){var n=this.__data__;if(n instanceof Gt){var o=n.__data__;if(!Lt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Zt(o)}return n.set(t,e),this}function de(t,e){var n=un(t)||an(t)?it(t.length,String):[],r=n.length,o=!!r;for(var i in t)!e&&!vt.call(t,i)||o&&("length"==i||Ge(i,r))||n.push(i);return n}function ye(t,e){var n=t.length;while(n--)if(cn(t[n][0],e))return n;return-1}$t.prototype.clear=Jt,$t.prototype["delete"]=Dt,$t.prototype.get=qt,$t.prototype.has=zt,$t.prototype.set=Wt,Gt.prototype.clear=Vt,Gt.prototype["delete"]=Qt,Gt.prototype.get=Xt,Gt.prototype.has=Kt,Gt.prototype.set=Yt,Zt.prototype.clear=te,Zt.prototype["delete"]=ee,Zt.prototype.get=ne,Zt.prototype.has=re,Zt.prototype.set=oe,ie.prototype.add=ie.prototype.push=se,ie.prototype.has=ce,ae.prototype.clear=ue,ae.prototype["delete"]=le,ae.prototype.get=fe,ae.prototype.has=pe,ae.prototype.set=he;var ge=Ne(me);function _e(t,e,n,r,o){var i=-1,s=t.length;n||(n=We),o||(o=[]);while(++i<s){var c=t[i];e>0&&n(c)?e>1?_e(c,e-1,n,r,o):nt(o,c):r||(o[o.length]=c)}return o}var ve=He();function me(t,e){return t&&ve(t,e,wn)}function be(t,e){e=Ve(e,t)?[e]:Ie(e);var n=0,r=e.length;while(null!=t&&n<r)t=t[en(e[n++])];return n&&n==r?t:void 0}function we(t){return mt.call(t)}function ke(t,e){return null!=t&&e in Object(t)}function Be(t,e,n,r,o){return t===e||(null==t||null==e||!dn(t)&&!yn(e)?t!==t&&e!==e:xe(t,e,Be,n,r,o))}function xe(t,e,n,r,o,i){var s=un(t),a=un(e),u=f,p=f;s||(u=qe(t),u=u==l?m:u),a||(p=qe(e),p=p==l?m:p);var h=u==m&&!at(t),d=p==m&&!at(e),y=u==p;if(y&&!h)return i||(i=new ae),s||_n(t)?Pe(t,e,n,r,o,i):Ue(t,e,u,n,r,o,i);if(!(o&c)){var g=h&&vt.call(t,"__wrapped__"),_=d&&vt.call(e,"__wrapped__");if(g||_){var v=g?t.value():t,b=_?e.value():e;return i||(i=new ae),n(v,b,r,o,i)}}return!!y&&(i||(i=new ae),Me(t,e,n,r,o,i))}function je(t,e,n,r){var o=n.length,i=o,a=!r;if(null==t)return!i;t=Object(t);while(o--){var u=n[o];if(a&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}while(++o<i){u=n[o];var l=u[0],f=t[l],p=u[1];if(a&&u[2]){if(void 0===f&&!(l in t))return!1}else{var h=new ae;if(r)var d=r(f,p,l,t,e,h);if(!(void 0===d?Be(p,f,r,s|c,h):d))return!1}}return!0}function Ae(t){if(!dn(t)||Xe(t))return!1;var e=pn(t)||at(t)?bt:D;return e.test(nn(t))}function Re(t){return yn(t)&&hn(t.length)&&!!z[mt.call(t)]}function Le(t){return"function"==typeof t?t:null==t?kn:"object"==typeof t?un(t)?Se(t[0],t[1]):Fe(t):Bn(t)}function Te(t){if(!Ke(t))return At(t);var e=[];for(var n in Object(t))vt.call(t,n)&&"constructor"!=n&&e.push(n);return e}function Ce(t,e){var n=-1,r=ln(t)?Array(t.length):[];return ge(t,(function(t,o,i){r[++n]=e(t,o,i)})),r}function Fe(t){var e=Je(t);return 1==e.length&&e[0][2]?Ze(e[0][0],e[0][1]):function(n){return n===t||je(n,t,e)}}function Se(t,e){return Ve(t)&&Ye(e)?Ze(en(t),e):function(n){var r=mn(n,t);return void 0===r&&r===e?bn(n,t):Be(e,r,void 0,s|c)}}function Oe(t){return function(e){return be(e,t)}}function Ee(t){if("string"==typeof t)return t;if(gn(t))return Mt?Mt.call(t):"";var e=t+"";return"0"==e&&1/t==-a?"-0":e}function Ie(t){return un(t)?t:tn(t)}function Ne(t,e){return function(n,r){if(null==n)return n;if(!ln(n))return t(n,r);var o=n.length,i=e?o:-1,s=Object(n);while(e?i--:++i<o)if(!1===r(s[i],i,s))break;return n}}function He(t){return function(e,n,r){var o=-1,i=Object(e),s=r(e),c=s.length;while(c--){var a=s[t?c:++o];if(!1===n(i[a],a,i))break}return e}}function Pe(t,e,n,r,o,i){var a=o&c,u=t.length,l=e.length;if(u!=l&&!(a&&l>u))return!1;var f=i.get(t);if(f&&i.get(e))return f==e;var p=-1,h=!0,d=o&s?new ie:void 0;i.set(t,e),i.set(e,t);while(++p<u){var y=t[p],g=e[p];if(r)var _=a?r(g,y,p,e,t,i):r(y,g,p,t,e,i);if(void 0!==_){if(_)continue;h=!1;break}if(d){if(!rt(e,(function(t,e){if(!d.has(e)&&(y===t||n(y,t,r,o,i)))return d.add(e)}))){h=!1;break}}else if(y!==g&&!n(y,g,r,o,i)){h=!1;break}}return i["delete"](t),i["delete"](e),h}function Ue(t,e,n,r,o,i,a){switch(n){case R:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case A:return!(t.byteLength!=e.byteLength||!r(new kt(t),new kt(e)));case p:case h:case v:return cn(+t,+e);case d:return t.name==e.name&&t.message==e.message;case w:case B:return t==e+"";case _:var u=ut;case k:var l=i&c;if(u||(u=ft),t.size!=e.size&&!l)return!1;var f=a.get(t);if(f)return f==e;i|=s,a.set(t,e);var y=Pe(u(t),u(e),r,o,i,a);return a["delete"](t),y;case x:if(Ut)return Ut.call(t)==Ut.call(e)}return!1}function Me(t,e,n,r,o,i){var s=o&c,a=wn(t),u=a.length,l=wn(e),f=l.length;if(u!=f&&!s)return!1;var p=u;while(p--){var h=a[p];if(!(s?h in e:vt.call(e,h)))return!1}var d=i.get(t);if(d&&i.get(e))return d==e;var y=!0;i.set(t,e),i.set(e,t);var g=s;while(++p<u){h=a[p];var _=t[h],v=e[h];if(r)var m=s?r(v,_,h,e,t,i):r(_,v,h,t,e,i);if(!(void 0===m?_===v||n(_,v,r,o,i):m)){y=!1;break}g||(g="constructor"==h)}if(y&&!g){var b=t.constructor,w=e.constructor;b==w||!("constructor"in t)||!("constructor"in e)||"function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w||(y=!1)}return i["delete"](t),i["delete"](e),y}function $e(t,e){var n=t.__data__;return Qe(e)?n["string"==typeof e?"string":"hash"]:n.map}function Je(t){var e=wn(t),n=e.length;while(n--){var r=e[n],o=t[r];e[n]=[r,o,Ye(o)]}return e}function De(t,e){var n=ct(t,e);return Ae(n)?n:void 0}var qe=we;function ze(t,e,n){e=Ve(e,t)?[e]:Ie(e);var r,o=-1,i=e.length;while(++o<i){var s=en(e[o]);if(!(r=null!=t&&n(t,s)))break;t=t[s]}if(r)return r;i=t?t.length:0;return!!i&&hn(i)&&Ge(s,i)&&(un(t)||an(t))}function We(t){return un(t)||an(t)||!!(jt&&t&&t[jt])}function Ge(t,e){return e=null==e?u:e,!!e&&("number"==typeof t||q.test(t))&&t>-1&&t%1==0&&t<e}function Ve(t,e){if(un(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!gn(t))||(P.test(t)||!H.test(t)||null!=e&&t in Object(e))}function Qe(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}function Xe(t){return!!gt&&gt in t}function Ke(t){var e=t&&t.constructor,n="function"==typeof e&&e.prototype||dt;return t===n}function Ye(t){return t===t&&!dn(t)}function Ze(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}(Rt&&qe(new Rt(new ArrayBuffer(1)))!=R||Lt&&qe(new Lt)!=_||Tt&&qe(Tt.resolve())!=b||Ct&&qe(new Ct)!=k||Ft&&qe(new Ft)!=j)&&(qe=function(t){var e=mt.call(t),n=e==m?t.constructor:void 0,r=n?nn(n):void 0;if(r)switch(r){case Ot:return R;case Et:return _;case It:return b;case Nt:return k;case Ht:return j}return e});var tn=sn((function(t){t=vn(t);var e=[];return U.test(t)&&e.push(""),t.replace(M,(function(t,n,r,o){e.push(r?o.replace(J,"$1"):n||t)})),e}));function en(t){if("string"==typeof t||gn(t))return t;var e=t+"";return"0"==e&&1/t==-a?"-0":e}function nn(t){if(null!=t){try{return _t.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function rn(t,e){return _e(on(t,e),1)}function on(t,e){var n=un(t)?et:Ce;return n(t,Le(e,3))}function sn(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(o);var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var s=t.apply(this,r);return n.cache=i.set(o,s),s};return n.cache=new(sn.Cache||Zt),n}function cn(t,e){return t===e||t!==t&&e!==e}function an(t){return fn(t)&&vt.call(t,"callee")&&(!Bt.call(t,"callee")||mt.call(t)==l)}sn.Cache=Zt;var un=Array.isArray;function ln(t){return null!=t&&hn(t.length)&&!pn(t)}function fn(t){return yn(t)&&ln(t)}function pn(t){var e=dn(t)?mt.call(t):"";return e==y||e==g}function hn(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=u}function dn(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function yn(t){return!!t&&"object"==typeof t}function gn(t){return"symbol"==typeof t||yn(t)&&mt.call(t)==x}var _n=tt?st(tt):Re;function vn(t){return null==t?"":Ee(t)}function mn(t,e,n){var r=null==t?void 0:be(t,e);return void 0===r?n:r}function bn(t,e){return null!=t&&ze(t,e,ke)}function wn(t){return ln(t)?de(t):Te(t)}function kn(t){return t}function Bn(t){return Ve(t)?ot(en(t)):Oe(t)}n.exports=rn}).call(this,n("c8ba"),n("62e4")(t))},"76cb":function(t,e,n){e.parse=n("4465"),e.stringify=n("b8f4")},8720:function(t,e,n){const r=n("7409"),o=n("cef4"),i=n("d109"),{incrementHexInt:s}=n("509d");class c extends o{constructor({provider:t}){super(),this.type="tx",this.provider=t}async update({oldBlock:t}){const e=t,n=s(t),o=await i({provider:this.provider,fromBlock:n,toBlock:e}),c=r(o,t=>t.transactions);this.addResults(c)}}t.exports=c},a1d9:function(t,e,n){(function(e){(function(n){"use strict";var r=function(t){setTimeout(t,0)};function o(t){var e={capacity:t||1,current:0,queue:[],firstHere:!1,take:function(){if(!1===e.firstHere){e.current++,e.firstHere=!0;var t=1}else t=0;var n={n:1};"function"==typeof arguments[0]?n.task=arguments[0]:n.n=arguments[0],arguments.length>=2&&("function"==typeof arguments[1]?n.task=arguments[1]:n.n=arguments[1]);var r=n.task;if(n.task=function(){r(e.leave)},e.current+n.n-t>e.capacity)return 1===t&&(e.current--,e.firstHere=!1),e.queue.push(n);e.current+=n.n-t,n.task(e.leave),1===t&&(e.firstHere=!1)},leave:function(t){if(t=t||1,e.current-=t,e.queue.length){var n=e.queue[0];n.n+e.current>e.capacity||(e.queue.shift(),e.current+=n.n,r(n.task))}else if(e.current<0)throw new Error("leave called too many times.")},available:function(t){return t=t||1,e.current+t<=e.capacity}};return e}"undefined"!=typeof e&&e&&"function"==typeof e.nextTick&&(r=e.nextTick),t.exports=o})()}).call(this,n("4362"))},ac4fc:function(t,e,n){var r="undefined"!==typeof JSON?JSON:n("76cb");t.exports=function(t,e){e||(e={}),"function"===typeof e&&(e={cmp:e});var n=e.space||"";"number"===typeof n&&(n=Array(n+1).join(" "));var s="boolean"===typeof e.cycles&&e.cycles,c=e.replacer||function(t,e){return e},a=e.cmp&&function(t){return function(e){return function(n,r){var o={key:n,value:e[n]},i={key:r,value:e[r]};return t(o,i)}}}(e.cmp),u=[];return function t(e,l,f,p){var h=n?"\n"+new Array(p+1).join(n):"",d=n?": ":":";if(f&&f.toJSON&&"function"===typeof f.toJSON&&(f=f.toJSON()),f=c.call(e,l,f),void 0!==f){if("object"!==typeof f||null===f)return r.stringify(f);if(o(f)){for(var y=[],g=0;g<f.length;g++){var _=t(f,g,f[g],p+1)||r.stringify(null);y.push(h+n+_)}return"["+y.join(",")+h+"]"}if(-1!==u.indexOf(f)){if(s)return r.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}u.push(f);var v=i(f).sort(a&&a(f));for(y=[],g=0;g<v.length;g++){l=v[g];var m=t(f,l,f[l],p+1);if(m){var b=r.stringify(l)+d+m;y.push(h+n+b)}}return u.splice(u.indexOf(f),1),"{"+y.join(",")+h+"}"}}({"":t},"",t,0)};var o=Array.isArray||function(t){return"[object Array]"==={}.toString.call(t)},i=Object.keys||function(t){var e=Object.prototype.hasOwnProperty||function(){return!0},n=[];for(var r in t)e.call(t,r)&&n.push(r);return n}},ad6e:function(t,e,n){const r=n("cef4"),o=n("d109"),{incrementHexInt:i}=n("509d");class s extends r{constructor({provider:t,params:e}){super(),this.type="block",this.provider=t}async update({oldBlock:t,newBlock:e}){const n=e,r=i(t),s=await o({provider:this.provider,fromBlock:r,toBlock:n}),c=s.map(t=>t.hash);this.addResults(c)}}t.exports=s},add0:function(t,e,n){"use strict";(function(t){class n{constructor(t){this.tasks=[],this.count=t}sched(){if(this.count>0&&this.tasks.length>0){this.count--;let t=this.tasks.shift();if(void 0===t)throw"Unexpected undefined value in tasks list";t()}}acquire(){return new Promise((e,n)=>{var r=()=>{var t=!1;e(()=>{t||(t=!0,this.count++,this.sched())})};this.tasks.push(r),t&&t.nextTick?t.nextTick(this.sched.bind(this)):setImmediate(this.sched.bind(this))})}use(t){return this.acquire().then(e=>t().then(t=>(e(),t)).catch(t=>{throw e(),t}))}}e.Semaphore=n;class r extends n{constructor(){super(1)}}e.Mutex=r}).call(this,n("4362"))},b7b4:function(t,e,n){const r=n("cb69"),o=n("fd46"),i=n("c3dd"),s=n("da78"),{unsafeRandomBytes:c,incrementHexInt:a}=n("509d"),u=n("d109");function l({blockTracker:t,provider:e}){const n={},l=s({blockTracker:t,provider:e});let p=!1;const h=new r,d=o({eth_subscribe:i(y),eth_unsubscribe:i(g)});return d.destroy=v,{events:h,middleware:d};async function y(r,o){if(p)throw new Error("SubscriptionManager - attempting to use after destroying");const i=r.params[0],s=c(16);let h;switch(i){case"newHeads":h=d({subId:s});break;case"logs":const t=r.params[1],e=await l.newLogFilter(t);h=y({subId:s,filter:e});break;default:throw new Error(`SubscriptionManager - unsupported subscription type "${i}"`)}return n[s]=h,void(o.result=s);function d({subId:n}){const r={type:i,destroy:async()=>{t.removeListener("sync",r.update)},update:async({oldBlock:t,newBlock:r})=>{const o=r,i=a(t),s=await u({provider:e,fromBlock:i,toBlock:o}),c=s.map(f);c.forEach(t=>{_(n,t)})}};return t.on("sync",r.update),r}function y({subId:t,filter:e}){e.on("update",e=>_(t,e));const n={type:i,destroy:async()=>await l.uninstallFilter(e.idHex)};return n}}async function g(t,e){if(p)throw new Error("SubscriptionManager - attempting to use after destroying");const r=t.params[0],o=n[r];o?(delete n[r],await o.destroy(),e.result=!0):e.result=!1}function _(t,e){h.emit("notification",{jsonrpc:"2.0",method:"eth_subscription",params:{subscription:t,result:e}})}function v(){h.removeAllListeners();for(const t in n)n[t].destroy(),delete n[t];p=!0}}function f(t){return{hash:t.hash,parentHash:t.parentHash,sha3Uncles:t.sha3Uncles,miner:t.miner,stateRoot:t.stateRoot,transactionsRoot:t.transactionsRoot,receiptsRoot:t.receiptsRoot,logsBloom:t.logsBloom,difficulty:t.difficulty,number:t.number,gasLimit:t.gasLimit,gasUsed:t.gasUsed,nonce:t.nonce,mixHash:t.mixHash,timestamp:t.timestamp,extraData:t.extraData}}t.exports=l},b8f4:function(t,e){var n,r,o,i=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,s={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function c(t){return i.lastIndex=0,i.test(t)?'"'+t.replace(i,(function(t){var e=s[t];return"string"===typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)}))+'"':'"'+t+'"'}function a(t,e){var i,s,u,l,f,p=n,h=e[t];switch(h&&"object"===typeof h&&"function"===typeof h.toJSON&&(h=h.toJSON(t)),"function"===typeof o&&(h=o.call(e,t,h)),typeof h){case"string":return c(h);case"number":return isFinite(h)?String(h):"null";case"boolean":case"null":return String(h);case"object":if(!h)return"null";if(n+=r,f=[],"[object Array]"===Object.prototype.toString.apply(h)){for(l=h.length,i=0;i<l;i+=1)f[i]=a(i,h)||"null";return u=0===f.length?"[]":n?"[\n"+n+f.join(",\n"+n)+"\n"+p+"]":"["+f.join(",")+"]",n=p,u}if(o&&"object"===typeof o)for(l=o.length,i=0;i<l;i+=1)s=o[i],"string"===typeof s&&(u=a(s,h),u&&f.push(c(s)+(n?": ":":")+u));else for(s in h)Object.prototype.hasOwnProperty.call(h,s)&&(u=a(s,h),u&&f.push(c(s)+(n?": ":":")+u));return u=0===f.length?"{}":n?"{\n"+n+f.join(",\n"+n)+"\n"+p+"}":"{"+f.join(",")+"}",n=p,u}}t.exports=function(t,e,i){var s;if(n="",r="","number"===typeof i)for(s=0;s<i;s+=1)r+=" ";else"string"===typeof i&&(r=i);if(o=e,e&&"function"!==typeof e&&("object"!==typeof e||"number"!==typeof e.length))throw new Error("JSON.stringify");return a("",{"":t})}},bcdf:function(t,e){function n(){}t.exports=n},c3dd:function(t,e){t.exports=function(t){return(e,n,r,o)=>{let i;const s=new Promise(t=>{i=t});let c,a;const u=async()=>{a=!0,r(t=>{c=t,i()}),await s};t(e,n,u).then(async()=>{a?(await s,c(null)):o(null)}).catch(t=>{c?c(t):o(t)})}}},cb69:function(t,e,n){const r=n("3022"),o=n("faa1");var i="object"===typeof Reflect?Reflect:null,s=i&&"function"===typeof i.apply?i.apply:function(t,e,n){return Function.prototype.apply.call(t,e,n)};function c(){o.call(this)}function a(t,e,n){try{s(t,e,n)}catch(r){setTimeout(()=>{throw r})}}function u(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t[r];return n}t.exports=c,r.inherits(c,o),c.prototype.emit=function(t){for(var e=[],n=1;n<arguments.length;n++)e.push(arguments[n]);var r="error"===t,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var i;if(e.length>0&&(i=e[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var c=o[t];if(void 0===c)return!1;if("function"===typeof c)a(c,this,e);else{var l=c.length,f=u(c,l);for(n=0;n<l;++n)a(f[n],this,e)}return!0}},cef4:function(t,e,n){const r=n("cb69");class o extends r{constructor(){super(),this.updates=[]}async initialize(){}async update(){throw new Error("BaseFilter - no update method specified")}addResults(t){this.updates=this.updates.concat(t),t.forEach(t=>this.emit("update",t))}addInitialResults(t){}getChangesAndClear(){const t=this.updates;return this.updates=[],t}}t.exports=o},d109:function(t,e){async function n({provider:t,fromBlock:e,toBlock:n}){e||(e=n);const s=r(e),c=r(n),a=c-s+1,u=Array(a).fill().map((t,e)=>s+e).map(o),l=await Promise.all(u.map(e=>i(t,"eth_getBlockByNumber",[e,!1])));return l}function r(t){return void 0===t||null===t?t:Number.parseInt(t,16)}function o(t){if(void 0===t||null===t)return t;const e=t.toString(16);return"0x"+e}function i(t,e,n){return new Promise((r,o)=>{t.sendAsync({id:1,jsonrpc:"2.0",method:e,params:n},(t,e)=>{if(t)return o(t);r(e.result)})})}t.exports=n},d5a1:function(t,e){t.exports=function(t){return(e,n,r,o)=>{const i=t[e.method];return void 0===i?r():"function"===typeof i?i(e,n,r,o):(n.result=i,o())}}},d89d:function(t,e){function n(t){t=t||{};var e=t.max||Number.MAX_SAFE_INTEGER,n="undefined"!==typeof t.start?t.start:Math.floor(Math.random()*e);return function(){return n%=e,n++}}t.exports=n},da78:function(t,e,n){const r=n("add0").Mutex,o=n("c3dd"),i=n("fd46"),s=n("16a1"),c=n("ad6e"),a=n("8720"),{intToHex:u,hexToInt:l}=n("509d");function f({blockTracker:t,provider:e}){let n=0,o={};const f=new r,g=d({mutex:f}),_=i({eth_newFilter:g(p(m)),eth_newBlockFilter:g(p(b)),eth_newPendingTransactionFilter:g(p(w)),eth_uninstallFilter:g(h(x)),eth_getFilterChanges:g(h(k)),eth_getFilterLogs:g(h(B))}),v=async({oldBlock:t,newBlock:e})=>{if(0===o.length)return;const n=await f.acquire();try{await Promise.all(y(o).map(async n=>{try{await n.update({oldBlock:t,newBlock:e})}catch(r){console.error(r)}}))}catch(r){console.error(r)}n()};return _.newLogFilter=m,_.newBlockFilter=b,_.newPendingTransactionFilter=w,_.uninstallFilter=x,_.getFilterChanges=k,_.getFilterLogs=B,_.destroy=()=>{R()},_;async function m(t){const n=new s({provider:e,params:t});await j(n);return n}async function b(){const t=new c({provider:e});await j(t);return t}async function w(){const t=new a({provider:e});await j(t);return t}async function k(t){const e=l(t),n=o[e];if(!n)throw new Error(`No filter for index "${e}"`);const r=n.getChangesAndClear();return r}async function B(t){const e=l(t),n=o[e];if(!n)throw new Error(`No filter for index "${e}"`);return"log"===n.type?results=n.getAllResults():results=[],results}async function x(t){const e=l(t),n=o[e],r=Boolean(n);return r&&await A(e),r}async function j(e){const r=y(o).length,i=await t.getLatestBlock();await e.initialize({currentBlock:i}),n++,o[n]=e,e.id=n,e.idHex=u(n);const s=y(o).length;return L({prevFilterCount:r,newFilterCount:s}),n}async function A(t){const e=y(o).length;delete o[t];const n=y(o).length;L({prevFilterCount:e,newFilterCount:n})}async function R(){const t=y(o).length;o={},L({prevFilterCount:t,newFilterCount:0})}function L({prevFilterCount:e,newFilterCount:n}){0===e&&n>0?t.on("sync",v):e>0&&0===n&&t.removeListener("sync",v)}}function p(t){return h(async(...e)=>{const n=await t(...e),r=u(n.id);return r})}function h(t){return o(async(e,n)=>{const r=await t.apply(null,e.params);n.result=r})}function d({mutex:t}){return e=>async(n,r,o,i)=>{const s=await t.acquire();s(),e(n,r,o,i)}}function y(t,e){const n=[];for(let r in t)n.push(t[r]);return n}t.exports=f},f0f8:function(t,e,n){const r=n("cef4");class o extends r{constructor(){super(),this.allResults=[]}async update(){throw new Error("BaseFilterWithHistory - no update method specified")}addResults(t){this.allResults=this.allResults.concat(t),super.addResults(t)}addInitialResults(t){this.allResults=this.allResults.concat(t),super.addInitialResults(t)}getAllResults(){return this.allResults}}t.exports=o},fd46:function(t,e,n){t.exports=n("d5a1")},feef:function(t,e,n){n("417a"),n("364d");const r=n("cb69"),o=1e3,i=(t,e)=>t+e,s=["sync","latest"];class c extends r{constructor(t={}){super(),this._blockResetDuration=t.blockResetDuration||20*o,this._blockResetTimeout,this._currentBlock=null,this._isRunning=!1,this._onNewListener=this._onNewListener.bind(this),this._onRemoveListener=this._onRemoveListener.bind(this),this._resetCurrentBlock=this._resetCurrentBlock.bind(this),this._setupInternalEvents()}isRunning(){return this._isRunning}getCurrentBlock(){return this._currentBlock}async getLatestBlock(){if(this._currentBlock)return this._currentBlock;const t=await new Promise(t=>this.once("latest",t));return t}removeAllListeners(t){t?super.removeAllListeners(t):super.removeAllListeners(),this._setupInternalEvents(),this._onRemoveListener()}_start(){}_end(){}_setupInternalEvents(){this.removeListener("newListener",this._onNewListener),this.removeListener("removeListener",this._onRemoveListener),this.on("newListener",this._onNewListener),this.on("removeListener",this._onRemoveListener)}_onNewListener(t,e){s.includes(t)&&this._maybeStart()}_onRemoveListener(t,e){this._getBlockTrackerEventCount()>0||this._maybeEnd()}_maybeStart(){this._isRunning||(this._isRunning=!0,this._cancelBlockResetTimeout(),this._start())}_maybeEnd(){this._isRunning&&(this._isRunning=!1,this._setupBlockResetTimeout(),this._end())}_getBlockTrackerEventCount(){return s.map(t=>this.listenerCount(t)).reduce(i)}_newPotentialLatest(t){const e=this._currentBlock;e&&a(t)<=a(e)||this._setCurrentBlock(t)}_setCurrentBlock(t){const e=this._currentBlock;this._currentBlock=t,this.emit("latest",t),this.emit("sync",{oldBlock:e,newBlock:t})}_setupBlockResetTimeout(){this._cancelBlockResetTimeout(),this._blockResetTimeout=setTimeout(this._resetCurrentBlock,this._blockResetDuration),this._blockResetTimeout.unref&&this._blockResetTimeout.unref()}_cancelBlockResetTimeout(){clearTimeout(this._blockResetTimeout)}_resetCurrentBlock(){this._currentBlock=null}}function a(t){return Number.parseInt(t,16)}t.exports=c}}]);
//# sourceMappingURL=chunk-1395a87a.9148f7a4.js.map