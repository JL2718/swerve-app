(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-548cb04a"],{3689:function(t,e,n){"use strict";n.r(e);var a=function(){var t,e=this,n=e.$createElement,a=e._self._c||n;return a("div",{class:(t={root:!0},t[e.$route.name]=!0,t),attrs:{id:"app"}},[a("div",{staticClass:"screencontainer"},[a("div",{staticClass:"top-menu-bar"},[a("label",{staticClass:"border-menu",attrs:{for:"hamburger"}}),a("input",{attrs:{type:"checkbox",id:"hamburger"}}),a("div",{staticClass:"poolsdropdown"},[a("button",{staticClass:"simplebutton"},[e._v("☰")]),a("div",{staticClass:"dropdown"},[a("button",{staticClass:"simplebutton",on:{click:e.changeWallets}},[e._v("Change wallet")]),a("button",{staticClass:"simplebutton",on:{click:e.changeAccounts}},[e._v("Logout")])])]),a("router-link",{attrs:{to:"/"}},[e._v("Pools")]),a("a",{attrs:{href:"./dao/"}},[e._v("Dao")]),a("router-link",{attrs:{to:"/swusd"}},[e._v("swUSD")]),a("router-link",{attrs:{to:"/risks"}},[e._v("Risks")]),a("div",{staticClass:"poolsdropdown right"},[a("span",[e._v("?")]),a("div",{staticClass:"dropdown"},[a("span",{staticClass:"simplebutton"},[a("router-link",{attrs:{to:"/contracts"}},[e._v("Contracts")])],1),e._m(0),e._m(1)])]),a("a",{staticClass:"showmobile",attrs:{target:"_blank",href:"https://uniswap.info/token/0xb8baa0e4287890a5f79863ab62b7f175cecbd433"}},[e._v("Uniswap")]),a("a",{staticClass:"showmobile",attrs:{target:"_blank",href:"https://github.com/swervefinance"}},[e._v("git@")]),a("button",{staticClass:"simplebutton showmobile",on:{click:e.changeWallets}},[e._v("Change wallet")]),a("button",{directives:[{name:"show",rawName:"v-show",value:["ledger","trezor"].includes(e.walletName),expression:"['ledger', 'trezor'].includes(walletName)"}],staticClass:"simplebutton showmobile",on:{click:e.changeAccounts}},[e._v("Logout")])],1),a("div",{attrs:{id:"screen"}},[a("div",{class:"blue window "+e.$route.name},[a("h1",[a("img",{attrs:{src:e.logoSrc,alt:"🌀 Swerve"}})])]),e.hasConnectedWallet?a("div",{staticClass:"info-message gentle-message window half-width gentle-message"},[e._v(" You haven't connected a wallet. "),a("button",{on:{click:e.changeWallets}},[e._v("Connect wallet")])]):e._e(),a("div",{directives:[{name:"show",rawName:"v-show",value:e.plsReturn,expression:"plsReturn"}],staticClass:"simple-error window"},[e._v(" Your recent withdrawal from Swerve resulted in getting 1000 more USDT because of another user mistakenly transferring funds to the contract. If you wish to return them - please contact us on twitter. ")]),a("router-view")],1)])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"simplebutton"},[n("a",{attrs:{target:"_blank",href:"https://uniswap.info/token/0xb8baa0e4287890a5f79863ab62b7f175cecbd433"}},[t._v("Uniswap")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"simplebutton"},[n("a",{attrs:{target:"_blank",href:"https://github.com/swervefinance"}},[t._v("git@")])])}],r=(n("caad"),n("b0c0"),n("96cf"),n("1da1")),o=n("5530"),i=n("51bf"),c=n("d99e"),l={metaInfo:{title:"Swerve.fi",meta:[{property:"og:title",content:"swerve.fi"},{property:"og:url",content:"https://swerve.fi"},{property:"og:type",content:"website"},{property:"og:description",content:"Swerve is an exchange liquidity pool on Ethereum designed for extremely efficient stablecoin trading"},{property:"og:image",content:"/swerve.png"}]},components:{},computed:Object(o["a"])(Object(o["a"])({},i["g"]),{},{poolMenu:function(){return i["j"]},publicPath:function(){return"/"},logoSrc:function(){return i["e"].swapbtc?this.publicPath+"logo_ren_beta_optimized.svg":this.publicPath+"logo_optimized.svg"},hasConnectedWallet:function(){return"0x0000000000000000000000000000000000000000"==this.default_account&&!["StatsDaily","Audits","Stats","Contracts"].includes(this.$route.name)},plsReturn:function(){return i["e"].currentContract.toLowerCase()=="0x72c20f89008729c91b6bb85f3104fda942494cef".toLowerCase()}}),methods:{changePools:function(t){Object(i["d"])(t)},changeWallets:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Object(c["a"])();case 1:case"end":return t.stop()}}),t)})))()},changeAccounts:function(){return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",c["e"].accountSelect());case 1:case"end":return t.stop()}}),t)})))()}}},u=l,p=(n("912e"),n("2877")),d=Object(p["a"])(u,a,s,!1,null,"7788872c",null);e["default"]=d.exports},"912e":function(t,e,n){"use strict";var a=n("ed68"),s=n.n(a);s.a},ed68:function(t,e,n){}}]);
//# sourceMappingURL=chunk-548cb04a.c318b30b.js.map