(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-08360fea"],{a783:function(e,t,s){},d5cf:function(e,t,s){"use strict";var a=s("a783"),r=s.n(a);r.a},faaa:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"window white"},[s("fieldset",{staticClass:"contractsdialog"},[s("legend",[s("button",{staticClass:"buttoncontracts",on:{click:function(t){e.showContracts=1}}},[e._v("Contracts")])]),e._m(0),s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.showContracts,expression:"showContracts == 1"}]},e._l(e.contractAddresses,(function(t,a){return s("fieldset",[s("legend",[e._v("swUSD")]),s("a",{attrs:{target:"_blank",href:"https://etherscan.io/address/"+t.swap}},[s("span",{staticClass:"text"},[e._v("swap address")])]),s("a",{attrs:{target:"_blank",href:"https://etherscan.io/address/"+t.token}},[s("span",{staticClass:"text"},[e._v("[ySwerve] ySWRV token address")])]),s("a",{directives:[{name:"show",rawName:"v-show",value:!["ren","sbtc"].includes(e.allPools[a]),expression:"!['ren', 'sbtc'].includes(allPools[i])"}],attrs:{target:"_blank",href:"https://etherscan.io/address/"+e.depositZaps[a].deposit}},[s("span",{staticClass:"text"},[e._v("deposit address")])]),s("a",{directives:[{name:"show",rawName:"v-show",value:["susdv2","sbtc","y","swusd"].includes(e.allPools[a]),expression:"['susdv2', 'sbtc', 'y', 'swusd'].includes(allPools[i])"}],attrs:{target:"_blank",href:"https://etherscan.io/address/"+e.rewardsAddresses[e.allPools[a]]}},[s("span",{staticClass:"text"},[e._v("staking rewards address")])]),s("a",{directives:[{name:"show",rawName:"v-show",value:["ren"].includes(e.allPools[a]),expression:"['ren'].includes(allPools[i])"}],attrs:{target:"_blank",href:"https://etherscan.io/address/0x9fe350DfA5F66bC086243F21A8F0932514316627"}},[s("span",{staticClass:"text"},[e._v("old adapter address")])]),s("a",{directives:[{name:"show",rawName:"v-show",value:["ren","sbtc"].includes(e.allPools[a]),expression:"['ren','sbtc'].includes(allPools[i])"}],attrs:{target:"_blank",href:"https://etherscan.io/address/"+e.adapterAddresses[e.allPools[a]]}},[s("span",{staticClass:"text"},[e._v("adapter address")])])])})),0)])])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"simple-error"},[e._v(" Do "),s("b",[e._v("not")]),e._v(" send funds directly to the Swerve contracts. You need to deposit them! ")])}],n=(s("4de4"),s("caad"),s("d81d"),s("b64b"),s("5245")),o={data:function(){return{allPools:["y"],tokenNames:[{name:"cCurve",ticker:"cCrv"},{name:"tCurve",ticker:"tCrv"},{name:"ySwerve",ticker:"ySwrv"},{name:"bCurve",ticker:"bCrv"},{name:"sCurve",ticker:"sCrv"},{name:"pCurve",ticker:"pCrv"},{name:"renCurve",ticker:"renCrv"},{name:"sbtcCurve",ticker:"sbtcCrv"}],showContracts:1}},computed:{contractAddresses:function(){return Object.keys(n["g"]).filter((function(e){return["y"].includes(e)})).map((function(e){return{swap:n["g"][e].swap_address,token:n["g"][e].token_address}}))},depositZaps:function(){return Object.keys(n["g"]).filter((function(e){return!["y","susd","tbtc"].includes(e)})).map((function(e){return{deposit:n["g"][e].deposit_address,token:n["g"][e].token_address}}))},publicPath:function(){return"/"},adapterAddresses:function(){return{ren:"0x73aB2Bd10aD10F7174a1AD5AFAe3ce3D991C5047",sbtc:"0xAEade605D01FE9a8e9C4B3AA0130A90d62167029"}},rewardsAddresses:function(){return{susdv2:"0xdcb6a51ea3ca5d3fd898fd6564757c7aaec3ca92",sbtc:"0x13C1542A468319688B89E323fe9A3Be3A90EBb27"}}},methods:{getTokenUrl:function(e){var t="/";return t+"curveIcons/"+this.tokenNames[e].ticker+".png"}},metaInfo:{title:"Swerve.fi :: Contracts",meta:[{property:"og:title",content:"https://swerve.fi/"},{property:"og:url",content:"https://swerve.fi/"},{property:"og:type",content:"website"},{property:"og:description",content:"Swerve is an exchange liquidity pool on Ethereum designed for extremely efficient stablecoin trading"},{property:"og:image",content:"/swerve.png"}]}},c=o,i=(s("d5cf"),s("2877")),d=Object(i["a"])(c,a,r,!1,null,"274dca4e",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-08360fea.73a3ba42.js.map