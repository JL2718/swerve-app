(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e1470ab"],{10:function(e,r){},"18ac":function(e,r,t){const{EthereumRpcError:n,EthereumProviderError:s}=t("f57b"),{getMessageFromCode:o}=t("f401"),a=t("3482");function i(e,r){const[t,s]=u(r);return new n(e,t||o(e),s)}function c(e,r){const[t,n]=u(r);return new s(e,t||o(e),n)}function u(e){let r,t;return e&&("string"===typeof e?r=e:"object"!==typeof e||Array.isArray(e)||(r=e.message,t=e.data)),[r,t]}e.exports={rpc:{parse:e=>i(a.rpc.parse,e),invalidRequest:e=>i(a.rpc.invalidRequest,e),invalidParams:e=>i(a.rpc.invalidParams,e),methodNotFound:e=>i(a.rpc.methodNotFound,e),internal:e=>i(a.rpc.internal,e),server:e=>{if(!e||"object"!==typeof e||Array.isArray(e))throw new Error("Ethereum RPC Server errors must provide single object argument.");const{code:r}=e;if(!Number.isInteger(r)||r>-32005||r<-32099)throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');return i(r,e)},invalidInput:e=>i(a.rpc.invalidInput,e),resourceNotFound:e=>i(a.rpc.resourceNotFound,e),resourceUnavailable:e=>i(a.rpc.resourceUnavailable,e),transactionRejected:e=>i(a.rpc.transactionRejected,e),methodNotSupported:e=>i(a.rpc.methodNotSupported,e)},provider:{userRejectedRequest:e=>c(a.provider.userRejectedRequest,e),unauthorized:e=>c(a.provider.unauthorized,e),unsupportedMethod:e=>c(a.provider.unsupportedMethod,e),custom:e=>{if(!e||"object"!==typeof e||Array.isArray(e))throw new Error("Ethereum Provider custom errors must provide single object argument.");const{code:r,message:t,data:n}=e;if(!t||"string"!==typeof t)throw new Error('"message" must be a nonempty string');return new s(r,t,n)}}}},2336:function(e,r,t){const{EthereumRpcError:n,EthereumProviderError:s}=t("f57b"),{serializeError:o,getMessageFromCode:a}=t("f401"),i=t("18ac"),c=t("3482");e.exports={ethErrors:i,EthereumRpcError:n,EthereumProviderError:s,serializeError:o,getMessageFromCode:a,ERROR_CODES:c}},3482:function(e){e.exports=JSON.parse('{"rpc":{"invalidInput":-32000,"resourceNotFound":-32001,"resourceUnavailable":-32002,"transactionRejected":-32003,"methodNotSupported":-32004,"parse":-32700,"invalidRequest":-32600,"methodNotFound":-32601,"invalidParams":-32602,"internal":-32603},"provider":{"userRejectedRequest":4001,"unauthorized":4100,"unsupportedMethod":4200}}')},"375a":function(e,r){e.exports=s,s.default=s,s.stable=i,s.stableStringify=i;var t=[],n=[];function s(e,r,s){var a;o(e,"",[],void 0),a=0===n.length?JSON.stringify(e,r,s):JSON.stringify(e,u(r),s);while(0!==t.length){var i=t.pop();4===i.length?Object.defineProperty(i[0],i[1],i[3]):i[0][i[1]]=i[2]}return a}function o(e,r,s,a){var i;if("object"===typeof e&&null!==e){for(i=0;i<s.length;i++)if(s[i]===e){var c=Object.getOwnPropertyDescriptor(a,r);return void(void 0!==c.get?c.configurable?(Object.defineProperty(a,r,{value:"[Circular]"}),t.push([a,r,e,c])):n.push([e,r]):(a[r]="[Circular]",t.push([a,r,e])))}if(s.push(e),Array.isArray(e))for(i=0;i<e.length;i++)o(e[i],i,s,e);else{var u=Object.keys(e);for(i=0;i<u.length;i++){var d=u[i];o(e[d],d,s,e)}}s.pop()}}function a(e,r){return e<r?-1:e>r?1:0}function i(e,r,s){var o,a=c(e,"",[],void 0)||e;o=0===n.length?JSON.stringify(a,r,s):JSON.stringify(a,u(r),s);while(0!==t.length){var i=t.pop();4===i.length?Object.defineProperty(i[0],i[1],i[3]):i[0][i[1]]=i[2]}return o}function c(e,r,s,o){var i;if("object"===typeof e&&null!==e){for(i=0;i<s.length;i++)if(s[i]===e){var u=Object.getOwnPropertyDescriptor(o,r);return void(void 0!==u.get?u.configurable?(Object.defineProperty(o,r,{value:"[Circular]"}),t.push([o,r,e,u])):n.push([e,r]):(o[r]="[Circular]",t.push([o,r,e])))}if("function"===typeof e.toJSON)return;if(s.push(e),Array.isArray(e))for(i=0;i<e.length;i++)c(e[i],i,s,e);else{var d={},p=Object.keys(e).sort(a);for(i=0;i<p.length;i++){var g=p[i];c(e[g],g,s,e),d[g]=e[g]}if(void 0===o)return d;t.push([o,r,e]),o[r]=d}s.pop()}}function u(e){return e=void 0!==e?e:function(e,r){return r},function(r,t){if(n.length>0)for(var s=0;s<n.length;s++){var o=n[s];if(o[1]===r&&o[0]===t){t="[Circular]",n.splice(s,1);break}}return e.call(this,r,t)}}},"58f4":function(e,r,t){(function(r){const n=r.browser?t("eec7"):t(10),s=t("3022").inherits,o=t("c506"),a=t("52ee"),{ethErrors:i,serializeError:c}=t("2336");function u(e){const r=this;r.rpcUrl=e.rpcUrl}function d(e){return{id:e.id,jsonrpc:e.jsonrpc,method:e.method,params:e.params}}e.exports=u,s(u,a),u.prototype.handleRequest=function(e,r,t){const s=this,a=s.rpcUrl,u=d(e),p=o(u);n({uri:a,method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(p),rejectUnauthorized:!1,timeout:2e4},(function(e,r,n){if(e)return t(c(e));switch(r.statusCode){case 405:return t(i.rpc.methodNotFound());case 504:return function(){let e="Gateway timeout. The request took too long to process. ";e+="This can happen when querying logs over too wide a block range.";const r=new Error(e);return t(c(r))}();case 429:return function(){const e=new Error("Too Many Requests");return t(c(e))}();default:if(200!=r.statusCode){const e="Unknown Error: "+r.body,n=new Error(e);return t(c(n))}}let s;try{s=JSON.parse(n)}catch(e){return console.error(e.stack),t(c(e))}if(s.error)return t(s.error);t(null,s.result)}))}}).call(this,t("4362"))},"63e6":function(e){e.exports=JSON.parse('{"4001":{"standard":"EIP 1193","message":"User rejected the request."},"4100":{"standard":"EIP 1193","message":"The requested account and/or method has not been authorized by the user."},"4200":{"standard":"EIP 1193","message":"The requested method is not supported by this Ethereum provider."},"-32700":{"standard":"JSON RPC 2.0","message":"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."},"-32600":{"standard":"JSON RPC 2.0","message":"The JSON sent is not a valid Request object."},"-32601":{"standard":"JSON RPC 2.0","message":"The method does not exist / is not available."},"-32602":{"standard":"JSON RPC 2.0","message":"Invalid method parameter(s)."},"-32603":{"standard":"JSON RPC 2.0","message":"Internal JSON-RPC error."},"-32000":{"standard":"EIP 1474","message":"Invalid input."},"-32001":{"standard":"EIP 1474","message":"Resource not found."},"-32002":{"standard":"EIP 1474","message":"Resource unavailable."},"-32003":{"standard":"EIP 1474","message":"Transaction rejected."},"-32004":{"standard":"EIP 1474","message":"Method not supported."}}')},"6b09":function(e,r,t){"use strict";t.r(r);var n=t("7f88"),s=t.n(n),o=t("58f4"),a=t.n(o),i=t("465b"),c=t.n(i),u=t("12a9"),d=t.n(u),p=t("702f"),g=t.n(p);function f(e){var r=e.getAccounts,t=e.signTransaction,n=e.rpcUrl,o=e.processMessage,i=e.processPersonalMessage,u=e.signMessage,p=e.signPersonalMessage,f=r&&new c.a({getAccounts:r,signTransaction:t,processMessage:o,processPersonalMessage:i,signMessage:u,signPersonalMessage:p}),h=new a.a({rpcUrl:n.includes("http")?n:"https://".concat(n)}),l=new s.a;return l.addProvider(new d.a),l.addProvider(new g.a),f&&l.addProvider(f),l.addProvider(h),l.start(),l}r["default"]=f},f401:function(e,r,t){const n=t("63e6"),s=t("3482").rpc.internal,{EthereumRpcError:o}=t("f57b"),a="Unspecified server error.",i="Unspecified error message. This is a bug, please report it.",c={code:s,message:u(s)};function u(e,r=i){if(Number.isInteger(e)){const r=e.toString();if(n[r])return n[r].message;if(g(e))return a}return r}function d(e){if(!Number.isInteger(e))return!1;const r=e.toString();return!!n[r]||!!g(e)}function p(e,r=c){if(!r||!Number.isInteger(r.code)||"string"!==typeof r.message)throw new Error("fallbackError must contain integer number code and string message.");if(e instanceof o)return e.serialize();const t={};return e&&d(e.code)?(t.code=e.code,e.message&&"string"===typeof e.message?(t.message=e.message,e.hasOwnProperty("data")&&(t.data=e.data)):(t.message=u(t.code),t.data={originalError:f(e)})):(t.code=r.code,t.message=e&&e.message?e.message:r.message,t.data={originalError:f(e)}),e&&e.stack&&(t.stack=e.stack),t}function g(e){return e>=-32099&&e<=-32e3}function f(e){return e&&"object"===typeof e&&!Array.isArray(e)?Object.assign({},e):e}e.exports={getMessageFromCode:u,isValidCode:d,serializeError:p,JSON_RPC_SERVER_ERROR_MESSAGE:a}},f57b:function(e,r,t){const n=t("375a");class s extends Error{constructor(e,r,t){if(!Number.isInteger(e))throw new Error('"code" must be an integer.');if(!r||"string"!==typeof r)throw new Error('"message" must be a nonempty string.');super(r),this.code=e,void 0!==t&&(this.data=t)}serialize(){const e={code:this.code,message:this.message};return void 0!==this.data&&(e.data=this.data),this.stack&&(e.stack=this.stack),e}toString(){return n(this.serialize(),i,2)}}class o extends s{constructor(e,r,t){if(!a(e))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(e,r,t)}}function a(e){return Number.isInteger(e)&&e>=1e3&&e<=4999}function i(e,r){if("[Circular]"!==r)return r}e.exports={EthereumRpcError:s,EthereumProviderError:o}}}]);
//# sourceMappingURL=chunk-0e1470ab.2efb1b07.js.map