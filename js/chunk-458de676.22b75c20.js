(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-458de676"],{"07ac":function(e,t,n){var a=n("23e7"),r=n("6f53").values;a({target:"Object",stat:!0},{values:function(e){return r(e)}})},3746:function(e,t,n){"use strict";var a=n("42a71"),r=n.n(a),s=n("bf2b"),i=n.n(s),o=n("69f2"),c=n.n(o),u=n("1c35");const l=r()("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),d=e=>u["Buffer"].from(c()("sha256").update(e).digest()),p={0:{type:"p2pkh",network:"mainnet"},111:{type:"p2pkh",network:"testnet"},5:{type:"p2sh",network:"mainnet"},196:{type:"p2sh",network:"testnet"}},h=e=>{let t;try{t=i.a.decode(e)}catch(c){return!1}const n={bc:"mainnet",tb:"testnet",bcrt:"regtest"},a=n[t.prefix];if(void 0===a)return!1;const r=t.words[0];if(r<0||r>16)return!1;const s=i.a.fromWords(t.words.slice(1));let o;return 20===s.length?o="p2wpkh":32===s.length&&(o="p2wsh"),{bech32:!0,network:a,address:e,type:o}},w=e=>{if(!e)return!1;let t;const n=e.substr(0,2);if("bc"===n||"tb"===n)return h(e);try{t=l.decode(e)}catch(c){return!1}const{length:a}=t;if(25!==a)return!1;const r=t.readUInt8(0),s=t.slice(a-4,a),i=t.slice(0,a-4),o=d(d(i)).slice(0,4);return!!s.equals(o)&&(!!p[r]&&Object.assign({address:e,bech32:!1},p[r]))},m=(e,t)=>{const n=w(e);return!!n&&(t?n.network===t:n)};t["a"]=m},"5a6d":function(e,t,n){},b4a0:function(e,t,n){"use strict";var a=n("5a6d"),r=n.n(a);r.a},bf2b:function(e,t,n){"use strict";for(var a="qpzry9x8gf2tvdw0s3jn54khce6mua7l",r={},s=0;s<a.length;s++){var i=a.charAt(s);if(void 0!==r[i])throw new TypeError(i+" is ambiguous");r[i]=s}function o(e){var t=e>>25;return(33554431&e)<<5^996825010&-(t>>0&1)^642813549&-(t>>1&1)^513874426&-(t>>2&1)^1027748829&-(t>>3&1)^705979059&-(t>>4&1)}function c(e){for(var t=1,n=0;n<e.length;++n){var a=e.charCodeAt(n);if(a<33||a>126)return"Invalid prefix ("+e+")";t=o(t)^a>>5}for(t=o(t),n=0;n<e.length;++n){var r=e.charCodeAt(n);t=o(t)^31&r}return t}function u(e,t,n){if(n=n||90,e.length+7+t.length>n)throw new TypeError("Exceeds length limit");e=e.toLowerCase();var r=c(e);if("string"===typeof r)throw new Error(r);for(var s=e+"1",i=0;i<t.length;++i){var u=t[i];if(u>>5!==0)throw new Error("Non 5-bit word");r=o(r)^u,s+=a.charAt(u)}for(i=0;i<6;++i)r=o(r);for(r^=1,i=0;i<6;++i){var l=r>>5*(5-i)&31;s+=a.charAt(l)}return s}function l(e,t){if(t=t||90,e.length<8)return e+" too short";if(e.length>t)return"Exceeds length limit";var n=e.toLowerCase(),a=e.toUpperCase();if(e!==n&&e!==a)return"Mixed-case string "+e;e=n;var s=e.lastIndexOf("1");if(-1===s)return"No separator character for "+e;if(0===s)return"Missing prefix for "+e;var i=e.slice(0,s),u=e.slice(s+1);if(u.length<6)return"Data too short";var l=c(i);if("string"===typeof l)return l;for(var d=[],p=0;p<u.length;++p){var h=u.charAt(p),w=r[h];if(void 0===w)return"Unknown character "+h;l=o(l)^w,p+6>=u.length||d.push(w)}return 1!==l?"Invalid checksum for "+e:{prefix:i,words:d}}function d(){var e=l.apply(null,arguments);if("object"===typeof e)return e}function p(e){var t=l.apply(null,arguments);if("object"===typeof t)return t;throw new Error(t)}function h(e,t,n,a){for(var r=0,s=0,i=(1<<n)-1,o=[],c=0;c<e.length;++c){r=r<<t|e[c],s+=t;while(s>=n)s-=n,o.push(r>>s&i)}if(a)s>0&&o.push(r<<n-s&i);else{if(s>=t)return"Excess padding";if(r<<n-s&i)return"Non-zero padding"}return o}function w(e){var t=h(e,8,5,!0);if(Array.isArray(t))return t}function m(e){var t=h(e,8,5,!0);if(Array.isArray(t))return t;throw new Error(t)}function _(e){var t=h(e,5,8,!1);if(Array.isArray(t))return t}function g(e){var t=h(e,5,8,!1);if(Array.isArray(t))return t;throw new Error(t)}e.exports={decodeUnsafe:d,decode:p,encode:u,toWordsUnsafe:w,toWords:m,fromWordsUnsafe:_,fromWords:g}},cc13:function(e,t,n){"use strict";n.r(t);var a=function(){var e,t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"add-liquidity"},[a("fieldset",{staticClass:"percentage"},[a("legend",[t._v(" Share of liquidity (%) "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.showstaked,expression:"showstaked"}],attrs:{id:"showstaked",type:"checkbox",name:"showstaked"},domProps:{checked:Array.isArray(t.showstaked)?t._i(t.showstaked,null)>-1:t.showstaked},on:{change:function(e){var n=t.showstaked,a=e.target,r=!!a.checked;if(Array.isArray(n)){var s=null,i=t._i(n,s);a.checked?i<0&&(t.showstaked=n.concat([s])):i>-1&&(t.showstaked=n.slice(0,i).concat(n.slice(i+1)))}else t.showstaked=r}}}),a("label",{directives:[{name:"show",rawName:"v-show",value:"sbtc"==t.currentPool,expression:"currentPool == 'sbtc'"}],attrs:{for:"showstaked"}},[t._v(" Show staked ")])]),a("ul",[a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.share,expression:"share"}],style:t.shareStyles,attrs:{type:"text",id:"liquidity-share",name:"liquidity-share"},domProps:{value:t.share},on:{input:[function(e){e.target.composing||(t.share=e.target.value)},t.handle_change_share],focus:t.handle_change_share}})])])]),a("fieldset",{staticClass:"currencies"},[a("legend",[t._v("Currencies:")]),a("ul",t._l(Object.keys(t.currencies),(function(e,n){var r;return a("li",[a("label",{staticClass:"currency_label",attrs:{for:"currency_"+n}},[a("img",{class:(r={"token-icon":!0},r[e+"-icon"]=!0,r["y"]=t.withdrawc,r[t.currentPool]=!0,r),attrs:{src:t.getTokenIcon(0==n?"btc":e)}}),a("span",{directives:[{name:"show",rawName:"v-show",value:t.withdrawc,expression:"withdrawc"}]},[t._v(t._s(t.currencies[e])+" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!("usdt"==e&&"usdt"==t.currentPool)&&!["susdv2","ren","sbtc"].includes(t.currentPool),expression:"!(currency == 'usdt' && currentPool == 'usdt') && !['susdv2','ren','sbtc'].includes(currentPool)"}]},[t._v("(in "+t._s(t._f("capitalize")(e))+")")])]),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.withdrawc&&!["susdv2","tbtc","ren"].includes(t.currentPool),expression:"!withdrawc && !['susdv2', 'tbtc', 'ren'].includes(currentPool)"}]},[t._v(t._s(t._f("capitalize")(e)))]),a("span",{directives:[{name:"show",rawName:"v-show",value:!t.withdrawc&&["susdv2","tbtc","ren"].includes(t.currentPool),expression:"!withdrawc && ['susdv2', 'tbtc', 'ren'].includes(currentPool)"}]},[t._v(t._s(t.currencies[e]))])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputs[n],expression:"inputs[i]"}],ref:"inputs"+n,refInFor:!0,style:t.inputStyles[n],attrs:{type:"text",id:"currency_"+n,name:"from_cur",disabled:"susd"==t.currentPool},domProps:{value:t.inputs[n]},on:{input:[function(e){e.target.composing||t.$set(t.inputs,n,e.target.value)},function(e){return t.handle_change_amounts(n)}],focus:function(e){return t.handle_change_amounts(n)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:0==n&&t.amountAfterBTC>0,expression:"i == 0 && amountAfterBTC > 0"}]},[t._v(" BTC Amount received after renVM fees: "+t._s(t.amountAfterBTC)+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:0==n&&t.amountAfterBTC<0,expression:"i == 0 && amountAfterBTC < 0"}]},[t._v(" Minimum withdraw amount in BTC is "+t._s(t.minOrderSize)+" ")])])})),0)]),a("fieldset",{directives:[{name:"show",rawName:"v-show",value:"susd"!=t.currentPool,expression:"currentPool != 'susd'"}]},[t._m(0),a("ul",[a("li",{directives:[{name:"show",rawName:"v-show",value:!["susdv2","tbtc","ren","sbtc"].includes(t.currentPool),expression:"!['susdv2','tbtc','ren','sbtc'].includes(currentPool)"}]},[a("input",{attrs:{type:"radio",id:"to_cur_comb",name:"to_cur"},domProps:{value:10,checked:10===t.to_currency},on:{click:function(e){return t.handleCheck(10)}}}),a("label",{attrs:{for:"to_cur_comb"}},[t._v(" Combination of all coins "),t._l(Object.keys(t.currencies),(function(e,n){var r;return a("span",[a("span",{directives:[{name:"show",rawName:"v-show",value:n>0,expression:"i > 0"}]},[t._v("+")]),a("img",{class:(r={"token-icon":!0},r[e+"-icon"]=!0,r["y"]=t.withdrawc,r[t.currentPool]=!0,r),attrs:{src:t.getTokenIcon(0==n?"btc":e)}})])}))],2)]),a("li",{staticClass:"withdrawin"},[a("input",{attrs:{type:"radio",id:"to_cur_0",name:"to_cur"},domProps:{value:0,checked:0===t.to_currency},on:{click:function(e){return t.handleCheck(0)}}}),a("label",{attrs:{for:"to_cur_0"}},[a("img",{class:(e={"token-icon":!0},e["btc-icon"]=!0,e),attrs:{src:t.getTokenIcon("btc")}}),a("span",[t._v(" BTC ")])])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.showWithdrawSlippage,expression:"showWithdrawSlippage"}],attrs:{id:"max_slippage"}},[a("span",[t._v("Max slippage:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.maxSlippage,expression:"maxSlippage"}],attrs:{id:"slippage02",type:"radio",name:"slippage",value:"0.2"},domProps:{checked:t._q(t.maxSlippage,"0.2")},on:{change:function(e){t.maxSlippage="0.2"}}}),a("label",{attrs:{for:"slippage02"}},[t._v("0.2%")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.maxSlippage,expression:"maxSlippage"}],attrs:{id:"slippage1",type:"radio",name:"slippage",checked:"",value:"3"},domProps:{checked:t._q(t.maxSlippage,"3")},on:{change:function(e){t.maxSlippage="3"}}}),a("label",{attrs:{for:"slippage1"}},[t._v("3%")]),a("input",{attrs:{id:"custom_slippage",type:"radio",name:"slippage",value:"-"},on:{click:function(e){t.customippageDisabled=!1}}}),a("label",{attrs:{for:"custom_slippage"},on:{click:function(e){t.customSlippageDisabled=!1}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.maxInputSlippage,expression:"maxInputSlippage"}],attrs:{type:"text",id:"custom_slippage_input",disabled:t.customSlippageDisabled,name:"custom_slippage_input"},domProps:{value:t.maxInputSlippage},on:{input:function(e){e.target.composing||(t.maxInputSlippage=e.target.value)}}}),t._v(" % ")])]),a("div",{staticClass:"input address btc"},[a("label",{attrs:{for:"address"}},[t._v("BTC withdrawal address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.btcAddress,expression:"btcAddress"}],attrs:{id:"address",type:"text",placeholder:"Address"},domProps:{value:t.btcAddress},on:{input:function(e){e.target.composing||(t.btcAddress=e.target.value)}}})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.nobalance,expression:"nobalance"}],staticClass:"info-message gentle-message",attrs:{id:"amount-warning"}},[t._v(" You don't have any available amount to withdraw ")]),a("approve-chi"),a("gas-price"),a("div",{staticClass:"buttons",attrs:{id:"withdraw_buttons"}},[a("p",{directives:[{name:"show",rawName:"v-show",value:"ren"==t.currentPool,expression:"currentPool == 'ren'"}]},[a("a",{attrs:{href:"https://bridge.renproject.io/"}},[t._v(" Mint/redeem renBTC ")])]),a("p",{directives:[{name:"show",rawName:"v-show",value:t.btcAddress&&!t.checkAddress,expression:"btcAddress && !checkAddress"}],staticClass:"simple-error invalid-address"},[t._v(" Invalid "+t._s(0==t.from_currency?"ETH":"BTC")+" address ")]),a("button",{directives:[{name:"show",rawName:"v-show",value:"susd"!=t.currentPool,expression:"currentPool != 'susd'"}],staticClass:"simplebutton",attrs:{id:"remove-liquidity",disabled:!t.btcAddress||t.amountAfterBTC<0||!t.checkAddress},on:{click:function(e){return t.handle_remove_liquidity()}}},[t._v(" Withdraw "),a("span",{directives:[{name:"show",rawName:"v-show",value:1==t.loadingAction,expression:"loadingAction == 1"}],staticClass:"loading line"})]),a("button",{directives:[{name:"show",rawName:"v-show",value:["susdv2","sbtc"].includes(t.currentPool)&&t.staked_balance>0,expression:"['susdv2', 'sbtc'].includes(currentPool) && staked_balance > 0 "}],staticClass:"simplebutton",attrs:{id:"remove-liquidity-unstake",disabled:t.slippage<-.03||!t.btcAddress||t.amountAfterBTC<0||!t.checkAddress},on:{click:function(e){return t.handle_remove_liquidity(!0)}}},[t._v(" Withdraw & claim "),a("span",{directives:[{name:"show",rawName:"v-show",value:2==t.loadingAction,expression:"loadingAction == 2"}],staticClass:"loading line"})]),a("button",{directives:[{name:"show",rawName:"v-show",value:["susdv2","sbtc"].includes(t.currentPool)&&t.pendingSNXRewards>0,expression:"['susdv2', 'sbtc'].includes(currentPool) && pendingSNXRewards > 0"}],attrs:{id:"claim-snx"},on:{click:t.claim_SNX}},[t._v(" Claim "+t._s((t.pendingSNXRewards/1e18).toFixed(2))+" SNX "),a("span",{directives:[{name:"show",rawName:"v-show",value:"sbtc"==t.currentPool,expression:"currentPool == 'sbtc'"}]},[t._v(" + "+t._s((t.pendingRENRewards/1e18).toFixed(2))+" REN")])]),a("button",{directives:[{name:"show",rawName:"v-show",value:["susdv2","sbtc"].includes(t.currentPool)&&t.staked_balance>0,expression:"['susdv2', 'sbtc'].includes(currentPool) && staked_balance > 0"}],attrs:{id:"unstake-snx"},on:{click:function(e){return t.handle_remove_liquidity(!0,!0)}}},[t._v(" Unstake ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.show_loading,expression:"show_loading"}],staticClass:"info-message gentle-message"},[a("span",{domProps:{innerHTML:t._s(t.waitingMessage)}}),t._v(" "),a("span",{staticClass:"loading line"})]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.estimateGas,expression:"estimateGas"}],staticClass:"info-message gentle-message"},[t._v(" Estimated tx cost: "+t._s((t.estimateGas*t.gasPrice/1e9*t.ethPrice).toFixed(2))+"$ ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.warninglow,expression:"warninglow"}],staticClass:"simple-error"},[t._v(" You're withdrawing too little amount in one coin ")]),a("Slippage",t._b({},"Slippage",{show_nobalance:t.show_nobalance,show_nobalance_i:t.show_nobalance_i},!1))],1),a("tx-table")],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("legend",[e._v(" Withdraw % in: "),n("span",{staticClass:"tooltip"},[e._v(" [?] "),n("span",{staticClass:"tooltiptext long"},[e._v(" You can also withdraw in one coin by typing in a currency field ")])])])}],s=(n("cb29"),n("4de4"),n("c740"),n("4160"),n("caad"),n("d81d"),n("fb6a"),n("0d03"),n("a9e3"),n("b680"),n("b64b"),n("d3b7"),n("25f0"),n("3ca3"),n("159b"),n("ddb0"),n("4795"),n("2909")),i=(n("96cf"),n("1da1")),o=n("5530"),c=n("2b0e"),u=n("d99e"),l=n("cf45"),d=n("51bf"),p=n("5245"),h=n("2fa3"),w=n("901e"),m=n.n(w),_=n("0c33"),g=n("1079"),f=n("757b"),b=n("2bd5"),v=n("0a37"),k=n("e7e9"),x=n("0c7c"),y=n("cbc1"),N=n("3746"),C=(p["g"].compound,{components:{Slippage:_["a"],"tx-table":g["a"],"approve-chi":y["a"],GasPrice:k["a"]},data:function(){return{share:"100.00",shareStyles:{backgroundColor:"#707070",color:"#d0d0d0"},inputs:[],btcAddress:"",inputStyles:[],swapbtc:!1,loading:!1,wallet_balances:[],calc_balances:[],balances:[],staked_balance:null,token_balance:null,token_supply:0,show_nobalance:!1,show_nobalance_i:0,bgColor:[],amounts:[],to_currency:10,test:null,withdrawc:!1,donate_dust:!1,showstaked:!1,pendingSNXRewards:0,pendingRENRewards:0,balancerPool:null,show_loading:!1,waitingMessage:"",showWithdrawSlippage:!1,maxSlippage:.2,setSlippage:!1,maxInputSlippage:"",customSlippageDisabled:!0,estimateGas:0,customGasDisabled:!0,customGasInput:null,ethPrice:0,loadingAction:!1,warninglow:!1,slippagePromise:h["l"](Promise.resolve())}},created:function(){var e=this;this.$watch((function(){return d["e"].default_account}),(function(t,n){t&&n&&t.toLowerCase()!=n.toLowerCase()&&t&&e.mounted()})),this.$watch((function(){return d["e"].initializedContracts}),(function(t){t&&e.mounted()})),this.$watch((function(){return d["e"].currentContract}),(function(t,n){e.setInputStyles(!1,t,n),d["e"].initializedContracts&&e.mounted()}))},watch:{to_currency:function(e){0!=this.share&&"---"!=this.share||(this.share=100),this.setInputStyles(),null!==e&&this.handle_change_share()},withdrawc:function(e){"---"!=this.share&&(e||null!==this.to_currency||(this.to_currency=10),e&&null!==this.to_currency&&(this.to_currency=null))},maxSlippage:function(){this.setSlippage=!0},maxInputSlippage:function(e){e&&(this.setSlippage=!0)}},computed:Object(o["a"])(Object(o["a"])({},d["g"]),{},{currencies:function(){return"ren"==d["e"].currentContract?{btc:"BTC",wbtc:"WBTC"}:"sbtc"==d["e"].currentContract?{btc:"BTC",wbtc:"wBTC",sbtc:"sBTC"}:void 0},showMigrateNew:function(){return"compound"==this.currentPool&&this.oldBalance>0||"susd"==this.currentPool},nobalance:function(){return this.staked_balance&&this.token_balance.plus(this.staked_balance).eq(m()(0))},getMaxSlippage:function(){var e=this.maxSlippage;return this.maxInputSlippage&&(e=this.maxInputSlippage),(100+e)/100},minAmount:function(){return["tbtc","ren","sbtc"].includes(d["e"].currentContract)?1e-8:.01},calcFee:function(){var e=p["g"][d["e"].currentContract].N_COINS;return this.fee*e/(4*(e-1))},amountAfterBTC:function(){return m()(this.inputs[0]).times(1e8).times(1-b["b"].mintFee/1e4).minus(b["b"].minersLockFee).div(1e8).toFixed(8)},minOrderSize:function(){return((b["b"].minersReleaseFee+b["b"].burnFee/1e4)/1e8+547e-8).toFixed(8)},gasPrice:function(){return v["a"].gasPrice},gasPriceWei:function(){return v["a"].gasPriceWei},checkAddress:function(){return!1!==Object(N["a"])(this.btcAddress)}}),mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$emit("loaded"),e.$watch((function(){return e.showstaked}),e.handle_change_share),e.setInputStyles(!0),d["e"].initializedContracts&&e.mounted();case 4:case"end":return t.stop()}}),t)})))()},methods:{mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(["susdv2","tbtc","ren"].includes(e.currentPool)&&(e.withdrawc=!0,e.to_currency=null),"sbtc"==e.currentPool&&(e.showstaked=!0),d["e"].showSlippage=!1,d["e"].slippage=0,n=d["e"].curveRewards,!["sbtc"].includes(e.currentPool)){t.next=14;break}return e.balancerPool=new d["e"].web3.eth.Contract(p["d"],p["e"]),a=[[n._address,n.methods.earned(e.default_account).encodeABI()],[e.balancerPool._address,e.balancerPool.methods.totalSupply().encodeABI()],[e.balancerPool._address,e.balancerPool.methods.getBalance("0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f").encodeABI()],[e.balancerPool._address,e.balancerPool.methods.getBalance("0x408e41876cccdc0f92210600ef50372656052a38").encodeABI()]],t.next=10,d["e"].multicall.methods.aggregate(a).call();case 10:r=t.sent,s=r[1].map((function(e){return d["e"].web3.eth.abi.decodeParameter("uint256",e)})),e.pendingSNXRewards=s[0]*s[2]/s[1],e.pendingRENRewards=s[0]*s[3]/s[1];case 14:return t.next=16,l["update_fee_info"]();case 16:return t.next=18,e.update_balances();case 18:e.setCalcBalances(),e.handle_change_share();case 20:case"end":return t.stop()}}),t)})))()},getTokenIcon:function(e){return h["h"](e,this.withdrawc,this.currentPool)},toFixed:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(""==e||void 0==e||0==+e)return"0.00";2==t&&["tbtc","ren","sbtc"].includes(d["e"].currentContract)&&(t=8);var n=e.toFixed(t);return isNaN(n)?"0.00":n},inputsFormat:function(e){return this.inputs[e]?this.toFixed(+this.inputs[e]):"0.00"},setInputStyles:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;if(n){for(var a=0;a<p["g"][t].N_COINS-p["g"][n].N_COINS;a++)this.inputs.push("0.00");p["g"][n].N_COINS-p["g"][t].N_COINS>0&&(this.inputs=this.inputs.filter((function(e,n){return n<p["g"][t].N_COINS})))}else e&&(this.inputs=new Array(Object.keys(this.currencies).length).fill("0.00"));this.inputStyles=Array(Object.keys(this.currencies).length).fill({backgroundColor:"#707070",color:"#d0d0d0"})},calcSlippage:function(){var e=arguments,t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.slippagePromise.cancel(),t.slippagePromise=h["l"](l["calc_slippage"].apply(l,Object(s["a"])(e))),n.next=4,t.slippagePromise;case 4:case"end":return n.stop()}}),n)})))()},handleCheck:function(e){e===this.to_currency?(this.to_currency=null,d["e"].slippage=0,d["e"].showSlippage=!1):this.to_currency=e},setCalcBalances:function(){for(var e=0;e<d["e"].N_COINS;e++){var t=this.showstaked?this.token_balance.plus(this.staked_balance):this.token_balance,n=m()(1*this.balances[e]*d["e"].c_rates[e]*t/this.token_supply);c["a"].set(this.calc_balances,e,n)}},update_balances:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=[],d["e"].default_account){for(a=0;a<d["e"].N_COINS;a++)n.push([d["e"].underlying_coins[a]._address,d["e"].underlying_coins[a].methods.balanceOf(d["e"].default_account||"0x0000000000000000000000000000000000000000").encodeABI()]);n.push([d["e"].swap_token._address,d["e"].swap_token.methods.balanceOf(d["e"].default_account||"0x0000000000000000000000000000000000000000").encodeABI()])}else e.token_balance=m()(0);for(r=0;r<d["e"].N_COINS;r++)n.push([d["e"].swap._address,d["e"].swap.methods.balances(r).encodeABI()]);return["susdv2","sbtc"].includes(e.currentPool)&&n.push([d["e"].curveRewards._address,d["e"].curveRewards.methods.balanceOf(d["e"].default_account||"0x0000000000000000000000000000000000000000").encodeABI()]),n.push([d["e"].swap_token._address,d["e"].swap_token.methods.totalSupply().encodeABI()]),t.next=7,d["e"].multicall.methods.aggregate(n).call();case 7:s=t.sent,i=s[1].map((function(e){return d["e"].web3.eth.abi.decodeParameter("uint256",e)})),d["e"].default_account&&(i.slice(0,d["e"].N_COINS).map((function(t,n){c["a"].set(e.wallet_balances,n,+t/p["g"][e.currentPool].coin_precisions[n])})),e.token_balance=m()(i[d["e"].N_COINS]),i=i.slice(d["e"].N_COINS+1)),i.slice(0,d["e"].N_COINS+1+d["e"].N_COINS).map((function(t,n){c["a"].set(e.balances,n,+t),d["e"].default_account||c["a"].set(e.balances,n,0)})),["susdv2","sbtc"].includes(e.currentPool)?e.staked_balance=m()(i[i.length-2]):e.staked_balance=m()(0),e.token_supply=+i[i.length-1];case 13:case"end":return t.stop()}}),t)})))()},handle_change_amounts:function(e,t){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,i,o,c,u,l;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.showWithdrawSlippage=!0,n.show_nobalance=!1,!t){a.next=5;break}return n.inputs[e]=t.target.value,a.abrupt("return");case 5:return n.to_currency=null,r=n.inputs.map((function(e,t){return e/d["e"].c_rates[t]})),r=r.map((function(e){return m()(Math.floor(e).toString()).toFixed(0)})),n.show_nobalance=!1,n.show_nobalance_i=0,i=Object(s["a"])(Array(d["e"].N_COINS).keys()).map((function(e){return[d["e"].swap._address,d["e"].swap.methods.balances(e).encodeABI()]})),i.push([d["e"].swap._address,d["e"].swap.methods.calc_token_amount(r,!1).encodeABI()]),i.push([d["e"].swap_token._address,d["e"].swap_token.methods.balanceOf(d["e"].default_account||"0x0000000000000000000000000000000000000000").encodeABI()]),a.prev=13,a.next=16,d["e"].multicall.methods.aggregate(i).call();case 16:o=a.sent,c=o[1].map((function(e){return d["e"].web3.eth.abi.decodeParameter("uint256",e)})),c.slice(0,d["e"].N_COINS).forEach((function(e,t){var a=+e*d["e"].c_rates[t];a<n.inputs[t]?(n.show_nobalance|=!0,n.show_nobalance_i=t):n.show_nobalance|=!1})),u=m()(c[c.length-2]),u=u.div(m()(1-d["e"].fee*d["e"].N_COINS/(4*(d["e"].N_COINS-1)))),l=m()(c[c.length-1]),1==e&&u.gt(l.plus(m()(n.staked_balance)))||0==e&&n.amountAfterBTC<0?n.setAllInputBackground("red"):0==e&&n.amountAfterBTC>0&&n.setAllInputBackground("blue"),n.calcSlippage(n.inputs,!1),n.share="---",n.shareStyles={backgroundColor:"#707070",color:"#d0d0d0"},a.next=34;break;case 28:a.prev=28,a.t0=a["catch"](13),console.error(a.t0),n.show_nobalance=!0,n.show_nobalance_i=d["e"].bal_info.findIndex((function(e,t){return+n.inputs[t]>+e})),n.setAllInputBackground("red");case 34:case"end":return a.stop()}}),a,null,[[13,28]])})))()},getMinAmounts:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,l["update_fee_info"]();case 2:for(n=[],a=0;a<d["e"].N_COINS;a++)n[a]=m()(1).div(m()(e.getMaxSlippage)).times(e.share/100).times(m()(e.balances[a])),n[a]=n[a].times(m()(e.token_balance)).div(m()(e.token_supply)).toFixed(0,1);return t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))()},claim_SNX:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.show_loading=!0,e.waitingMessage="Claiming ".concat((e.pendingSNXRewards/1e18).toFixed(2)," SNX"),"sbtc"==e.currentPool&&(e.waitingMessage+=" and ".concat((e.pendingRENRewards/1e18).toFixed(2)," REN")),n=Object(u["d"])(e.waitingMessage),a=n.dismiss,t.next=6,d["e"].curveRewards.methods.earned(d["e"].default_account).call();case 6:return r=t.sent,t.next=9,new Promise((function(t,n){d["e"].curveRewards.methods.getReward().send({from:d["e"].default_account,gasPrice:e.gasPriceWei,gas:2e5}).once("transactionHash",(function(e){a(),Object(u["c"])(e),t()})).on("receipt",(function(){return e.pendingSNXRewards=0}))["catch"]((function(e){a(),x["a"](e),n(e)}))}));case 9:if("sbtc"!=e.currentPool){t.next=19;break}return t.prev=10,t.next=13,e.balancerPool.methods.exitPool(r,["0","0"]).send({from:d["e"].default_account,gasPrice:e.gasPriceWei,gas:6e5}).once("transactionHash",(function(e){Object(u["c"])(e)}));case 13:t.next=19;break;case 15:t.prev=15,t.t0=t["catch"](10),console.error(t.t0),x["a"](t.t0);case 19:case"end":return t.stop()}}),t,null,[[10,15]])})))()},unstake:function(e){var t=arguments,n=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,s,i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t.length>1&&void 0!==t[1]&&t[1],s=t.length>2&&void 0!==t[2]&&t[2],n.waitingMessage=s?"\n                        Unstaking ".concat(n.toFixed(e.div(m()(1e18)))," tokens from Mintr\n                    "):"\n                    Need to unstake ".concat(n.toFixed(e.div(m()(1e18)))," tokens from Mintr for withdrawal.\n                    <br>\n                    A bit more tokens are needed to unstake to ensure that withdrawal is successful.\n                    You'll see them in your unstaked balance afterwards.\n\n                "),i=Object(u["d"])(n.waitingMessage),o=i.dismiss,a.prev=4,a.next=7,new Promise((function(t,a){d["e"].curveRewards.methods.withdraw(e.toFixed(0,1)).send({from:d["e"].default_account,gasPrice:n.gasPriceWei,gas:125e3}).once("transactionHash",(function(e){o(),Object(u["c"])(e),t()})).on("receipt",(function(t){n.staked_balance=n.staked_balance.minus(e),d["e"].curveStakedBalance-=e,l["update_fee_info"]()}))["catch"]((function(e){o(),a(e)}))}));case 7:r&&n.claim_SNX(),a.next=17;break;case 10:throw a.prev=10,a.t0=a["catch"](4),console.error(a.t0),x["a"](a.t0),n.waitingMessage="",n.show_loading=!1,a.t0;case 17:case"end":return a.stop()}}),a,null,[[4,10]])})))()},setLoadingAction:function(e){var t=this;this.loadingAction=e,setTimeout((function(){return t.loadingAction=!1}),500)},handle_remove_liquidity:function(){var e=arguments,t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var a,r,s,i,o,w,_,g,b,v,k,x,y,N,C,S,P,A,O,I;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.length>0&&void 0!==e[0]&&e[0],r=e.length>1&&void 0!==e[1]&&e[1],s=0==a?1:2,t.loadingAction!=s){n.next=5;break}return n.abrupt("return");case 5:return t.setLoadingAction(s),n.next=8,Promise.all([h["g"]()]);case 8:for(i=n.sent,t.ethPrice=i[0],t.estimateGas=0,d["e"].deposit_zap,["tbtc","ren","sbtc"].includes(d["e"].currentContract)&&d["e"].swap,[],o=0;o<d["e"].N_COINS;o++)w=m()(t.calc_balances[o]).minus(m()(t.inputs[o])),_=t.calc_balances[o]>0&&w.lte(m()(t.minAmount))&&w>0,_?c["a"].set(t.amounts,o,m()(t.calc_balances[o]).div(d["e"].c_rates[o]).toFixed(0,1)):c["a"].set(t.amounts,o,m()(Math.floor(t.inputs[o]/d["e"].c_rates[o]).toString()).toFixed(0,1));if("---"!=t.share){n.next=52;break}return n.prev=16,n.next=19,d["e"].swap.methods.calc_token_amount(t.amounts,!1).call();case 19:g=n.sent,n.next=27;break;case 22:n.prev=22,n.t0=n["catch"](16),console.error(n.t0),t.show_nobalance=!0,t.show_nobalance_i=t.to_currency;case 27:if(g=m()(g).times(m()(1).plus(t.calcFee)),g=m()(Math.floor(g*t.getMaxSlippage).toString()).toFixed(0,1),!t.token_balance.lt(m()(g))&&!a||!["susdv2","sbtc"].includes(t.currentPool)){n.next=32;break}return n.next=32,t.unstake(m()(g).minus(m()(t.token_balance)),a&&!r,r);case 32:if(!r){n.next=34;break}return n.abrupt("return");case 34:return b=t.inputs.filter(Number).length,v=0|d["f"].withdraw[t.currentPool].imbalance(b),t.estimateGas=v/2,n.prev=37,n.next=40,l["ensure_allowance_zap_out"](g,void 0,p["g"][d["e"].currentContract].adapterBiconomyAddress);case 40:return k=Object(u["d"])("Please confirm withdrawal transaction"),x=k.dismiss,n.next=43,f["k"]({address:t.btcAddress,coinDestination:d["e"].default_account,amounts:t.amounts,renBTCAmount:t.inputs[0],max_burn_amount:g,gasPrice:t.gasPriceWei,dismiss:x});case 43:n.next=50;break;case 45:throw n.prev=45,n.t1=n["catch"](37),t.waitingMessage="",t.show_loading=!1,n.t1;case 50:n.next=106;break;case 52:if(y=m()(t.token_balance),100!=t.share){n.next=59;break}return n.t2=m.a,n.next=57,d["e"].swap_token.methods.balanceOf(d["e"].default_account).call();case 57:n.t3=n.sent,y=(0,n.t2)(n.t3);case 59:if(t.showstaked&&(y=y.plus(t.staked_balance)),N=m()(t.share).div(m()(100)).times(y),!t.token_balance.lt(m()(N))&&!a||!["susdv2","sbtc"].includes(t.currentPool)){n.next=64;break}return n.next=64,t.unstake(m()(N).minus(m()(t.token_balance)),a&&!r,r);case 64:if(!r){n.next=66;break}return n.abrupt("return");case 66:if(N=N.toFixed(0,1),!(null!==t.to_currency&&t.to_currency<10)){n.next=90;break}return t.waitingMessage="Please approve ".concat(t.toFixed(N/1e18)," tokens for withdrawal"),C=Object(u["d"])(t.waitingMessage),x=C.dismiss,t.estimateGas=d["f"].depositzap[t.currentPool].withdraw/2,n.prev=71,n.next=74,d["e"].swap.methods.calc_withdraw_one_coin(N,t.to_currency).call();case 74:S=n.sent,S=m()(S).times(m()(1).minus(t.calcFee)),n.next=83;break;case 78:n.prev=78,n.t4=n["catch"](71),console.error(n.t4),t.show_nobalance=!0,t.show_nobalance_i=t.to_currency;case 83:return t.waitingMessage="Please confirm withdrawal transaction",P=Object(u["d"])(t.waitingMessage),x=P.dismiss,console.log("remove liqudiity one coin then burn"),n.next=88,f["l"]({address:t.btcAddress,coinDestination:d["e"].default_account,token_amounts:N,renBTCAmount:t.inputs[0],min_amount:m()(S).times(m()(1).div(m()(t.getMaxSlippage))).toFixed(0,1),gasPrice:t.gasPriceWei,dismiss:x});case 88:n.next=106;break;case 90:return n.prev=90,n.next=93,t.getMinAmounts();case 93:return A=n.sent,t.waitingMessage="Please confirm withdrawal transaction",O=Object(u["d"])(t.waitingMessage),x=O.dismiss,t.estimateGas=6e5,n.next=99,f["m"]({address:t.btcAddress,coinDestination:d["e"].default_account,amount:N,renBTCAmount:t.inputs[0],min_amounts:A,gasPrice:t.gasPriceWei,dismiss:x});case 99:n.next=106;break;case 101:throw n.prev=101,n.t5=n["catch"](90),t.waitingMessage="",t.show_loading=!1,n.t5;case 106:if("---"==t.share)for(I=0;I<d["e"].N_COINS;I++)t.handle_change_amounts(I);return t.show_loading=!1,t.waitingMessage="",t.estimateGas=0,t.gasPrice=0,n.next=113,t.update_balances();case 113:return n.next=115,l["update_fee_info"]();case 115:case"end":return n.stop()}}),n,null,[[16,22],[37,45],[71,78],[90,101]])})))()},handle_change_share:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n,a,r,s,i,o,u,l,h;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=d["e"].deposit_zap,["tbtc","ren","sbtc"].includes(d["e"].currentContract)&&(n=d["e"].swap),e.warninglow=!1,e.showWithdrawSlippage=!1,e.show_nobalance=!1,null==e.to_currency&&0==e.withdrawc&&"---"==e.share&&(e.to_currency=10),"---"!=e.share&&null!=e.to_currency&&10!=e.to_currency&&(e.showWithdrawSlippage=!0),a=e.showstaked?e.token_balance.plus(e.staked_balance):e.token_balance,console.log(a,"TOKEN BALANCE"),d["e"].showSlippage=!1,d["e"].slippage=0,!(null!==e.to_currency&&e.to_currency<10)){t.next=40;break}if(r=m()(e.share).div(m()(100)).times(a).toFixed(0,1),100!=e.share){t.next=18;break}return t.next=16,d["e"].swap_token.methods.balanceOf(d["e"].default_account||"0x0000000000000000000000000000000000000000").call();case 16:r=t.sent,e.showstaked&&(r=m()(r).plus(m()(e.staked_balance)).toFixed(0,1));case 18:return s=p["g"][d["e"].currentContract].coin_precisions[e.to_currency],i=Array(d["e"].N_COINS).fill(0),t.prev=20,e.warninglow=!1,o=0,t.next=25,n.methods.calc_withdraw_one_coin(r,e.to_currency).call();case 25:o=t.sent,i[e.to_currency]=m()(o),i[e.to_currency].eq(m()(0))&&(e.warninglow=!0),t.next=34;break;case 30:t.prev=30,t.t0=t["catch"](20),console.log("calc withdraw one coin error 4444"),""!=e.share&&(e.show_nobalance=!0,e.show_nobalance_i=e.to_currency);case 34:return u=Array(d["e"].N_COINS).fill(0),u[e.to_currency]=i[e.to_currency].div(s),e.inputs=e.inputs.map((function(e){return 0})),e.inputs[e.to_currency]=e.toFixed(m()(u[e.to_currency]),2,1),t.next=40,e.calcSlippage([],!1,i,e.to_currency);case 40:if(e.shareStyles.backgroundColor="blue",e.shareStyles.color="aqua","---"==e.share?e.share=0:e.share>100|e.share<0&&(e.shareStyles.backgroundColor="red"),!(null!==e.to_currency&&e.to_currency<10)){t.next=45;break}return t.abrupt("return");case 45:for(l=0;l<d["e"].N_COINS;l++)e.share>=0&e.share<=100?(h=m()(e.share/100*e.balances[l]*d["e"].c_rates[l]*a/e.token_supply),c["a"].set(e.inputs,l,e.toFixed(h,2,1))):c["a"].set(e.inputs,l,0),c["a"].set(e.inputStyles,l,{backgroundColor:"#707070",color:"#d0d0d0"});case 46:case"end":return t.stop()}}),t,null,[[20,30]])})))()},setAllInputBackground:function(e){for(var t=0;t<d["e"].N_COINS;t++)c["a"].set(this.inputStyles,t,Object.assign(this.inputStyles[t]||{},{backgroundColor:e}))},handle_migrate_new:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("compound"!=e.currentPool){t.next=2;break}return t.abrupt("return",l["handle_migrate_new"]("new"));case 2:return e.share=100,t.next=5,e.handle_remove_liquidity();case 5:case"end":return t.stop()}}),t)})))()}}}),S=C,P=(n("b4a0"),n("2877")),A=Object(P["a"])(S,a,r,!1,null,null,null);t["default"]=A.exports}}]);
//# sourceMappingURL=chunk-458de676.22b75c20.js.map