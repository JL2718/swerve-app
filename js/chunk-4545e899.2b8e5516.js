(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4545e899"],{"06e9":function(e,r,t){"use strict";var n=t("0774"),i=t("8707").Buffer;e.exports=function(e){function r(r){var t=e(r);return n.encode(i.concat([r,t],r.length+4))}function t(r){var t=r.slice(0,-4),n=r.slice(-4),i=e(t);if(!(n[0]^i[0]|n[1]^i[1]|n[2]^i[2]|n[3]^i[3]))return t}function o(e){var r=n.decodeUnsafe(e);if(r)return t(r)}function a(r){var i=n.decode(r),o=t(i,e);if(!o)throw new Error("Invalid checksum");return o}return{encode:r,decode:a,decodeUnsafe:o}}},"0774":function(e,r,t){var n=t("42a71"),i="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";e.exports=n(i)},"0d54":function(e,r){const t={IMPOSSIBLE_CASE:"Impossible case. Please create issue.",TWEAK_ADD:"The tweak was out of range or the resulted private key is invalid",TWEAK_MUL:"The tweak was out of range or equal to zero",CONTEXT_RANDOMIZE_UNKNOW:"Unknow error on context randomization",SECKEY_INVALID:"Private Key is invalid",PUBKEY_PARSE:"Public Key could not be parsed",PUBKEY_SERIALIZE:"Public Key serialization error",PUBKEY_COMBINE:"The sum of the public keys is not valid",SIG_PARSE:"Signature could not be parsed",SIGN:"The nonce generation function failed, or the private key was invalid",RECOVER:"Public key could not be recover",ECDH:"Scalar was invalid (zero or overflow)"};function n(e,r){if(!e)throw new Error(r)}function i(e,r,t){if(n(r instanceof Uint8Array,`Expected ${e} to be an Uint8Array`),void 0!==t)if(Array.isArray(t)){const i=t.join(", "),o=`Expected ${e} to be an Uint8Array with length [${i}]`;n(t.includes(r.length),o)}else{const i=`Expected ${e} to be an Uint8Array with length ${t}`;n(r.length===t,i)}}function o(e){n("Boolean"===c(e),"Expected compressed to be a Boolean")}function a(e=(e=>new Uint8Array(e)),r){return"function"===typeof e&&(e=e(r)),i("output",e,r),e}function c(e){return Object.prototype.toString.call(e).slice(8,-1)}e.exports=e=>({contextRandomize(r){switch(n(null===r||r instanceof Uint8Array,"Expected seed to be an Uint8Array or null"),null!==r&&i("seed",r,32),e.contextRandomize(r)){case 1:throw new Error(t.CONTEXT_RANDOMIZE_UNKNOW)}},privateKeyVerify(r){return i("private key",r,32),0===e.privateKeyVerify(r)},privateKeyNegate(r){switch(i("private key",r,32),e.privateKeyNegate(r)){case 0:return r;case 1:throw new Error(t.IMPOSSIBLE_CASE)}},privateKeyTweakAdd(r,n){switch(i("private key",r,32),i("tweak",n,32),e.privateKeyTweakAdd(r,n)){case 0:return r;case 1:throw new Error(t.TWEAK_ADD)}},privateKeyTweakMul(r,n){switch(i("private key",r,32),i("tweak",n,32),e.privateKeyTweakMul(r,n)){case 0:return r;case 1:throw new Error(t.TWEAK_MUL)}},publicKeyVerify(r){return i("public key",r,[33,65]),0===e.publicKeyVerify(r)},publicKeyCreate(r,n=!0,c){switch(i("private key",r,32),o(n),c=a(c,n?33:65),e.publicKeyCreate(c,r)){case 0:return c;case 1:throw new Error(t.SECKEY_INVALID);case 2:throw new Error(t.PUBKEY_SERIALIZE)}},publicKeyConvert(r,n=!0,c){switch(i("public key",r,[33,65]),o(n),c=a(c,n?33:65),e.publicKeyConvert(c,r)){case 0:return c;case 1:throw new Error(t.PUBKEY_PARSE);case 2:throw new Error(t.PUBKEY_SERIALIZE)}},publicKeyNegate(r,n=!0,c){switch(i("public key",r,[33,65]),o(n),c=a(c,n?33:65),e.publicKeyNegate(c,r)){case 0:return c;case 1:throw new Error(t.PUBKEY_PARSE);case 2:throw new Error(t.IMPOSSIBLE_CASE);case 3:throw new Error(t.PUBKEY_SERIALIZE)}},publicKeyCombine(r,c=!0,s){n(Array.isArray(r),"Expected public keys to be an Array"),n(r.length>0,"Expected public keys array will have more than zero items");for(const e of r)i("public key",e,[33,65]);switch(o(c),s=a(s,c?33:65),e.publicKeyCombine(s,r)){case 0:return s;case 1:throw new Error(t.PUBKEY_PARSE);case 2:throw new Error(t.PUBKEY_COMBINE);case 3:throw new Error(t.PUBKEY_SERIALIZE)}},publicKeyTweakAdd(r,n,c=!0,s){switch(i("public key",r,[33,65]),i("tweak",n,32),o(c),s=a(s,c?33:65),e.publicKeyTweakAdd(s,r,n)){case 0:return s;case 1:throw new Error(t.PUBKEY_PARSE);case 2:throw new Error(t.TWEAK_ADD)}},publicKeyTweakMul(r,n,c=!0,s){switch(i("public key",r,[33,65]),i("tweak",n,32),o(c),s=a(s,c?33:65),e.publicKeyTweakMul(s,r,n)){case 0:return s;case 1:throw new Error(t.PUBKEY_PARSE);case 2:throw new Error(t.TWEAK_MUL)}},signatureNormalize(r){switch(i("signature",r,64),e.signatureNormalize(r)){case 0:return r;case 1:throw new Error(t.SIG_PARSE)}},signatureExport(r,n){i("signature",r,64),n=a(n,72);const o={output:n,outputlen:72};switch(e.signatureExport(o,r)){case 0:return n.slice(0,o.outputlen);case 1:throw new Error(t.SIG_PARSE);case 2:throw new Error(t.IMPOSSIBLE_CASE)}},signatureImport(r,n){switch(i("signature",r),n=a(n,64),e.signatureImport(n,r)){case 0:return n;case 1:throw new Error(t.SIG_PARSE);case 2:throw new Error(t.IMPOSSIBLE_CASE)}},ecdsaSign(r,o,s={},u){i("message",r,32),i("private key",o,32),n("Object"===c(s),"Expected options to be an Object"),void 0!==s.data&&i("options.data",s.data),void 0!==s.noncefn&&n("Function"===c(s.noncefn),"Expected options.noncefn to be a Function"),u=a(u,64);const l={signature:u,recid:null};switch(e.ecdsaSign(l,r,o,s.data,s.noncefn)){case 0:return l;case 1:throw new Error(t.SIGN);case 2:throw new Error(t.IMPOSSIBLE_CASE)}},ecdsaVerify(r,n,o){switch(i("signature",r,64),i("message",n,32),i("public key",o,[33,65]),e.ecdsaVerify(r,n,o)){case 0:return!0;case 3:return!1;case 1:throw new Error(t.SIG_PARSE);case 2:throw new Error(t.PUBKEY_PARSE)}},ecdsaRecover(r,s,u,l=!0,p){switch(i("signature",r,64),n("Number"===c(s)&&s>=0&&s<=3,"Expected recovery id to be a Number within interval [0, 3]"),i("message",u,32),o(l),p=a(p,l?33:65),e.ecdsaRecover(p,r,s,u)){case 0:return p;case 1:throw new Error(t.SIG_PARSE);case 2:throw new Error(t.RECOVER);case 3:throw new Error(t.IMPOSSIBLE_CASE)}},ecdh(r,o,s={},u){switch(i("public key",r,[33,65]),i("private key",o,32),n("Object"===c(s),"Expected options to be an Object"),void 0!==s.data&&i("options.data",s.data),void 0!==s.hashfn?(n("Function"===c(s.hashfn),"Expected options.hashfn to be a Function"),void 0!==s.xbuf&&i("options.xbuf",s.xbuf,32),void 0!==s.ybuf&&i("options.ybuf",s.ybuf,32),i("output",u)):u=a(u,32),e.ecdh(u,r,o,s.data,s.hashfn,s.xbuf,s.ybuf)){case 0:return u;case 1:throw new Error(t.PUBKEY_PARSE);case 2:throw new Error(t.ECDH)}}})},"123e":function(e,r,t){"use strict";t.r(r),t.d(r,"generateAddresses",(function(){return l})),t.d(r,"isValidPath",(function(){return p}));var n=t("bd46"),i=t.n(n),o=t("6437"),a=t("1c35"),c=o["publicToAddress"],s=o["toChecksumAddress"],u=5;function l(e,r){var t=e.publicKey,n=e.chainCode,o=e.path,l=new i.a;l.publicKey=new a["Buffer"](t,"hex"),l.chainCode=new a["Buffer"](n,"hex");for(var p=[],d=r;d<u+r;d++){var y=l.deriveChild(d),f=c(y.publicKey,!0).toString("hex");p.push({dPath:"".concat(o,"/").concat(d),address:s("0x".concat(f))})}return p}function p(e){var r=e.split("/");if("m"!==r[0])return!1;if("44'"!==r[1])return!1;if("60'"!==r[2]&&"1'"!==r[2])return!1;if(void 0===r[3])return!0;var t=Number(r[3][0]);if(isNaN(t)||t<0||"'"!==r[3][1])return!1;if(void 0===r[4])return!0;var n=Number(r[4][0]);if(isNaN(n)||n<0)return!1;if(void 0===r[5])return!0;var i=Number(r[5][0]);return!(isNaN(i)||i<0)}},"6f78":function(e,r,t){"use strict";var n=t("98e6"),i=t("06e9");function o(e){var r=n("sha256").update(e).digest();return n("sha256").update(r).digest()}e.exports=i(o)},9963:function(e,r,t){e.exports=t("0d54")(t("ffbf"))},bd46:function(e,r,t){var n=t("f654"),i=t("8707").Buffer,o=t("1c46"),a=t("6f78"),c=t("9963"),s=i.from("Bitcoin seed","utf8"),u=2147483648,l=78,p={private:76066276,public:76067358};function d(e){this.versions=e||p,this.depth=0,this.index=0,this._privateKey=null,this._publicKey=null,this.chainCode=null,this._fingerprint=0,this.parentFingerprint=0}function y(e,r,t){var n=i.allocUnsafe(l);n.writeUInt32BE(r,0),n.writeUInt8(e.depth,4);var o=e.depth?e.parentFingerprint:0;return n.writeUInt32BE(o,5),n.writeUInt32BE(e.index,9),e.chainCode.copy(n,13),t.copy(n,45),n}function f(e){var r=o.createHash("sha256").update(e).digest();return o.createHash("ripemd160").update(r).digest()}Object.defineProperty(d.prototype,"fingerprint",{get:function(){return this._fingerprint}}),Object.defineProperty(d.prototype,"identifier",{get:function(){return this._identifier}}),Object.defineProperty(d.prototype,"pubKeyHash",{get:function(){return this.identifier}}),Object.defineProperty(d.prototype,"privateKey",{get:function(){return this._privateKey},set:function(e){n.equal(e.length,32,"Private key must be 32 bytes."),n(!0===c.privateKeyVerify(e),"Invalid private key"),this._privateKey=e,this._publicKey=i.from(c.publicKeyCreate(e,!0)),this._identifier=f(this.publicKey),this._fingerprint=this._identifier.slice(0,4).readUInt32BE(0)}}),Object.defineProperty(d.prototype,"publicKey",{get:function(){return this._publicKey},set:function(e){n(33===e.length||65===e.length,"Public key must be 33 or 65 bytes."),n(!0===c.publicKeyVerify(e),"Invalid public key"),this._publicKey=i.from(c.publicKeyConvert(e,!0)),this._identifier=f(this.publicKey),this._fingerprint=this._identifier.slice(0,4).readUInt32BE(0),this._privateKey=null}}),Object.defineProperty(d.prototype,"privateExtendedKey",{get:function(){return this._privateKey?a.encode(y(this,this.versions.private,i.concat([i.alloc(1,0),this.privateKey]))):null}}),Object.defineProperty(d.prototype,"publicExtendedKey",{get:function(){return a.encode(y(this,this.versions.public,this.publicKey))}}),d.prototype.derive=function(e){if("m"===e||"M"===e||"m'"===e||"M'"===e)return this;var r=e.split("/"),t=this;return r.forEach((function(e,r){if(0!==r){var i=e.length>1&&"'"===e[e.length-1],o=parseInt(e,10);n(o<u,"Invalid index"),i&&(o+=u),t=t.deriveChild(o)}else n(/^[mM]{1}/.test(e),'Path must start with "m" or "M"')})),t},d.prototype.deriveChild=function(e){var r,t=e>=u,a=i.allocUnsafe(4);if(a.writeUInt32BE(e,0),t){n(this.privateKey,"Could not derive hardened child key");var s=this.privateKey,l=i.alloc(1,0);s=i.concat([l,s]),r=i.concat([s,a])}else r=i.concat([this.publicKey,a]);var p=o.createHmac("sha512",this.chainCode).update(r).digest(),y=p.slice(0,32),f=p.slice(32),h=new d(this.versions);if(this.privateKey)try{h.privateKey=i.from(c.privateKeyTweakAdd(i.from(this.privateKey),y))}catch(w){return this.deriveChild(e+1)}else try{h.publicKey=i.from(c.publicKeyTweakAdd(i.from(this.publicKey),y,!0))}catch(w){return this.deriveChild(e+1)}return h.chainCode=f,h.depth=this.depth+1,h.parentFingerprint=this.fingerprint,h.index=e,h},d.prototype.sign=function(e){return i.from(c.ecdsaSign(e,this.privateKey).signature)},d.prototype.verify=function(e,r){return c.ecdsaVerify(Uint8Array.from(r),Uint8Array.from(e),Uint8Array.from(this.publicKey))},d.prototype.wipePrivateData=function(){return this._privateKey&&o.randomBytes(this._privateKey.length).copy(this._privateKey),this._privateKey=null,this},d.prototype.toJSON=function(){return{xpriv:this.privateExtendedKey,xpub:this.publicExtendedKey}},d.fromMasterSeed=function(e,r){var t=o.createHmac("sha512",s).update(e).digest(),n=t.slice(0,32),i=t.slice(32),a=new d(r);return a.chainCode=i,a.privateKey=n,a},d.fromExtendedKey=function(e,r){r=r||p;var t=new d(r),i=a.decode(e),o=i.readUInt32BE(0);n(o===r.private||o===r.public,"Version mismatch: does not match private or public"),t.depth=i.readUInt8(4),t.parentFingerprint=i.readUInt32BE(5),t.index=i.readUInt32BE(9),t.chainCode=i.slice(13,45);var c=i.slice(45);return 0===c.readUInt8(0)?(n(o===r.private,"Version mismatch: version does not match private"),t.privateKey=c.slice(1)):(n(o===r.public,"Version mismatch: version does not match public"),t.publicKey=c),t},d.fromJSON=function(e){return d.fromExtendedKey(e.xpriv)},d.HARDENED_OFFSET=u,e.exports=d},ffbf:function(e,r,t){const n=t("3337").ec,i=new n("secp256k1"),o=i.curve,a=o.n.constructor;function c(e,r){let t=new a(r);if(t.cmp(o.p)>=0)return null;t=t.toRed(o.red);let n=t.redSqr().redIMul(t).redIAdd(o.b).redSqrt();return 3===e!==n.isOdd()&&(n=n.redNeg()),i.keyPair({pub:{x:t,y:n}})}function s(e,r,t){let n=new a(r),c=new a(t);if(n.cmp(o.p)>=0||c.cmp(o.p)>=0)return null;if(n=n.toRed(o.red),c=c.toRed(o.red),(6===e||7===e)&&c.isOdd()!==(7===e))return null;const s=n.redSqr().redIMul(n);return c.redSqr().redISub(s.redIAdd(o.b)).isZero()?i.keyPair({pub:{x:n,y:c}}):null}function u(e){const r=e[0];switch(r){case 2:case 3:return 33!==e.length?null:c(r,e.subarray(1,33));case 4:case 6:case 7:return 65!==e.length?null:s(r,e.subarray(1,33),e.subarray(33,65));default:return null}}function l(e,r){const t=r.encode(null,33===e.length);for(let n=0;n<e.length;++n)e[n]=t[n]}e.exports={contextRandomize(){return 0},privateKeyVerify(e){const r=new a(e);return r.cmp(o.n)<0&&!r.isZero()?0:1},privateKeyNegate(e){const r=new a(e),t=o.n.sub(r).umod(o.n).toArrayLike(Uint8Array,"be",32);return e.set(t),0},privateKeyTweakAdd(e,r){const t=new a(r);if(t.cmp(o.n)>=0)return 1;if(t.iadd(new a(e)),t.cmp(o.n)>=0&&t.isub(o.n),t.isZero())return 1;const n=t.toArrayLike(Uint8Array,"be",32);return e.set(n),0},privateKeyTweakMul(e,r){let t=new a(r);if(t.cmp(o.n)>=0||t.isZero())return 1;t.imul(new a(e)),t.cmp(o.n)>=0&&(t=t.umod(o.n));const n=t.toArrayLike(Uint8Array,"be",32);return e.set(n),0},publicKeyVerify(e){const r=u(e);return null===r?1:0},publicKeyCreate(e,r){const t=new a(r);if(t.cmp(o.n)>=0||t.isZero())return 1;const n=i.keyFromPrivate(r).getPublic();return l(e,n),0},publicKeyConvert(e,r){const t=u(r);if(null===t)return 1;const n=t.getPublic();return l(e,n),0},publicKeyNegate(e,r){const t=u(r);if(null===t)return 1;const n=t.getPublic();return n.y=n.y.redNeg(),l(e,n),0},publicKeyCombine(e,r){const t=new Array(r.length);for(let i=0;i<r.length;++i)if(t[i]=u(r[i]),null===t[i])return 1;let n=t[0].getPublic();for(let i=1;i<t.length;++i)n=n.add(t[i].pub);return n.isInfinity()?2:(l(e,n),0)},publicKeyTweakAdd(e,r,t){const n=u(r);if(null===n)return 1;if(t=new a(t),t.cmp(o.n)>=0)return 2;const i=n.getPublic().add(o.g.mul(t));return i.isInfinity()?2:(l(e,i),0)},publicKeyTweakMul(e,r,t){const n=u(r);if(null===n)return 1;if(t=new a(t),t.cmp(o.n)>=0||t.isZero())return 2;const i=n.getPublic().mul(t);return l(e,i),0},signatureNormalize(e){const r=new a(e.subarray(0,32)),t=new a(e.subarray(32,64));return r.cmp(o.n)>=0||t.cmp(o.n)>=0?1:(1===t.cmp(i.nh)&&e.set(o.n.sub(t).toArrayLike(Uint8Array,"be",32),32),0)},signatureExport(e,r){const t=r.subarray(0,32),n=r.subarray(32,64);if(new a(t).cmp(o.n)>=0)return 1;if(new a(n).cmp(o.n)>=0)return 1;const{output:i}=e;let c=i.subarray(4,37);c[0]=0,c.set(t,1);let s=33,u=0;for(;s>1&&0===c[u]&&!(128&c[u+1]);--s,++u);if(c=c.subarray(u),128&c[0])return 1;if(s>1&&0===c[0]&&!(128&c[1]))return 1;let l=i.subarray(39,72);l[0]=0,l.set(n,1);let p=33,d=0;for(;p>1&&0===l[d]&&!(128&l[d+1]);--p,++d);return l=l.subarray(d),128&l[0]||p>1&&0===l[0]&&!(128&l[1])?1:(e.outputlen=6+s+p,i[0]=48,i[1]=e.outputlen-2,i[2]=2,i[3]=c.length,i.set(c,4),i[4+s]=2,i[5+s]=l.length,i.set(l,6+s),0)},signatureImport(e,r){if(r.length<8)return 1;if(r.length>72)return 1;if(48!==r[0])return 1;if(r[1]!==r.length-2)return 1;if(2!==r[2])return 1;const t=r[3];if(0===t)return 1;if(5+t>=r.length)return 1;if(2!==r[4+t])return 1;const n=r[5+t];if(0===n)return 1;if(6+t+n!==r.length)return 1;if(128&r[4])return 1;if(t>1&&0===r[4]&&!(128&r[5]))return 1;if(128&r[t+6])return 1;if(n>1&&0===r[t+6]&&!(128&r[t+7]))return 1;let i=r.subarray(4,4+t);if(33===i.length&&0===i[0]&&(i=i.subarray(1)),i.length>32)return 1;let c=r.subarray(6+t);if(33===c.length&&0===c[0]&&(c=c.slice(1)),c.length>32)throw new Error("S length is too long");let s=new a(i);s.cmp(o.n)>=0&&(s=new a(0));let u=new a(r.subarray(6+t));return u.cmp(o.n)>=0&&(u=new a(0)),e.set(s.toArrayLike(Uint8Array,"be",32),0),e.set(u.toArrayLike(Uint8Array,"be",32),32),0},ecdsaSign(e,r,t,n,c){if(c){const e=c;c=i=>{const o=e(r,t,null,n,i),c=o instanceof Uint8Array&&32===o.length;if(!c)throw new Error("This is the way");return new a(o)}}const s=new a(t);if(s.cmp(o.n)>=0||s.isZero())return 1;let u;try{u=i.sign(r,t,{canonical:!0,k:c,pers:n})}catch(l){return 1}return e.signature.set(u.r.toArrayLike(Uint8Array,"be",32),0),e.signature.set(u.s.toArrayLike(Uint8Array,"be",32),32),e.recid=u.recoveryParam,0},ecdsaVerify(e,r,t){const n={r:e.subarray(0,32),s:e.subarray(32,64)},c=new a(n.r),s=new a(n.s);if(c.cmp(o.n)>=0||s.cmp(o.n)>=0)return 1;if(1===s.cmp(i.nh)||c.isZero()||s.isZero())return 3;const l=u(t);if(null===l)return 2;const p=l.getPublic(),d=i.verify(r,n,p);return d?0:3},ecdsaRecover(e,r,t,n){const c={r:r.slice(0,32),s:r.slice(32,64)},s=new a(c.r),u=new a(c.s);if(s.cmp(o.n)>=0||u.cmp(o.n)>=0)return 1;if(s.isZero()||u.isZero())return 2;let p;try{p=i.recoverPubKey(n,c,t)}catch(d){return 2}return l(e,p),0},ecdh(e,r,t,n,c,s,l){const p=u(r);if(null===p)return 1;const d=new a(t);if(d.cmp(o.n)>=0||d.isZero())return 2;const y=p.getPublic().mul(d);if(void 0===c){const r=y.encode(null,!0),t=i.hash().update(r).digest();for(let n=0;n<32;++n)e[n]=t[n]}else{s||(s=new Uint8Array(32));const r=y.getX().toArray("be",32);for(let e=0;e<32;++e)s[e]=r[e];l||(l=new Uint8Array(32));const t=y.getY().toArray("be",32);for(let e=0;e<32;++e)l[e]=t[e];const i=c(s,l,n),o=i instanceof Uint8Array&&i.length===e.length;if(!o)return 2;e.set(i)}return 0}}}}]);
//# sourceMappingURL=chunk-4545e899.2b8e5516.js.map