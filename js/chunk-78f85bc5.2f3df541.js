(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-78f85bc5"],{"0c33":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{directives:[{name:"show",rawName:"v-show",value:e.showSlippage&&e.slippage<-.005,expression:"showSlippage && slippage < -0.005"}],staticClass:"simple-error",attrs:{id:"highslippage-warning"}},[a("span",{staticClass:"text"},[e._v(" Warning! High slippage(plus pricing): "),a("span",{staticClass:"percent"},[e._v(e._s((100*-e.slippage).toFixed(3)))]),e._v("% "),e._m(0)])]),a("p",{directives:[{name:"show",rawName:"v-show",value:e.showSlippage&&e.slippage<=0&&e.slippage>=-.005,expression:"showSlippage && slippage <= 0 && slippage >= -0.005"}],staticClass:"info-message",attrs:{id:"slippage-warning"}},[a("span",{staticClass:"text"},[e._v(" Slippage(plus pricing): ")]),a("span",{staticClass:"percent"},[e._v(e._s((100*-e.slippage).toFixed(3)))]),e._v("% "),e._m(1)]),a("p",{directives:[{name:"show",rawName:"v-show",value:e.showSlippage&&e.slippage>0,expression:"showSlippage && slippage > 0"}],staticClass:"success",attrs:{id:"bonus-window"}},[e._v(" Bonus(plus pricing): "),a("span",[e._v(e._s((100*e.slippage).toFixed(3)))]),e._v("% "),a("span",{staticClass:"tooltip"},[e._v("[?] "),a("span",{staticClass:"tooltiptext long"},[e._v(" Bonus comes as an advantage from current coin prices which usually appears for coins which are "+e._s("Deposit"==e.$route.name?"low":"high")+" in balance ")])])]),a("p",{directives:[{name:"show",rawName:"v-show",value:e.show_nobalance,expression:"show_nobalance"}],staticClass:"simple-error",attrs:{id:"nobalance-warning"}},[e._v(" Warning! Not enough balance for "+e._s(e.noBalanceText)+" token in the contract ")]),a("p",{directives:[{name:"show",rawName:"v-show",value:"susdv2"==e.currentPool&&e.showSlippage&&e.slippage<-.01,expression:"currentPool == 'susdv2' && showSlippage && slippage < -0.01"}],staticClass:"info-message gentle-message",attrs:{id:"susd-warning"}},[e._v(" Please add coins in a balanced proportion ")])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"tooltip"},[e._v("[?] "),a("span",{staticClass:"tooltiptext long"},[e._v(" Slippage comes from depositing too many coins not in balance, and current coin prices are additionally accounted for ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"tooltip"},[e._v("[?] "),a("span",{staticClass:"tooltiptext long"},[e._v(" Slippage comes from depositing too many coins not in balance, and current coin prices are additionally accounted for ")])])}],i=(a("4fad"),a("5530")),r=a("51bf"),o={props:["show_nobalance","show_nobalance_i"],computed:Object(i["a"])(Object(i["a"])({},r["g"]),{},{noBalanceText:function(){if(!this.show_nobalance)return"";var e=Object.entries(this.currencies)[this.show_nobalance_i];return 2==this.show_nobalance_i&&"usdt"==this.currentPool||"susdv2"==this.currentPool?e[1]:e[1]+" (in "+e[0]+")"}})},c=o,l=a("2877"),u=Object(l["a"])(c,n,s,!1,null,"556a4168",null);t["a"]=u.exports},9187:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"window white add-liquidity"},[a("fieldset",{staticClass:"percentage"},[a("legend",[e._v("Share of liquidity (%)")]),a("ul",[a("li",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.share,expression:"share"}],style:e.shareStyles,attrs:{type:"text",id:"liquidity-share",name:"liquidity-share"},domProps:{value:e.share},on:{input:[function(t){t.target.composing||(e.share=t.target.value)},e.handle_change_share],focus:e.handle_change_share}})])])]),a("fieldset",{staticClass:"currencies"},[a("legend",[e._v("Currencies:")]),a("ul",e._l(Object.keys(e.currencies),(function(t,n){return a("li",[a("label",{attrs:{for:"currency_"+n}},[e._v(e._s(e.currencies[t])+" (in "+e._s(e._f("capitalize")(t))+")")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.inputs[n],expression:"inputs[i]"}],style:e.inputStyles[n],attrs:{type:"text",id:"currency_"+n,name:"from_cur",value:"0.00"},domProps:{value:e.inputs[n]},on:{input:[function(t){t.target.composing||e.$set(e.inputs,n,t.target.value)},function(t){return e.handle_change_amounts(n)}],focus:function(t){return e.handle_change_amounts(n)}}})])})),0)]),a("p",{staticStyle:{"text-align":"center"}},[a("button",{staticClass:"simplebutton",attrs:{id:"remove-liquidity"},on:{click:e.handle_remove_liquidity}},[e._v("Withdraw")]),a("button",{staticClass:"simplebutton",attrs:{id:"migrate-new"},on:{click:e.handle_migrate_new}},[e._v("Migrate from old")]),a("Slippage",e._b({},"Slippage",{show_nobalance:e.show_nobalance,show_nobalance_i:e.show_nobalance_i},!1))],1)])},s=[],i=(a("cb29"),a("0d03"),a("b680"),a("d3b7"),a("e25e"),a("25f0"),a("96cf"),a("1da1")),r=a("5530"),o=a("2b0e"),c=a("cf45"),l=a("51bf"),u=a("901e"),p=a.n(u),h=a("0c33"),d=function(e){return new p.a(e)},_={components:{Slippage:h["a"]},data:function(){return{share:"100.00",shareStyles:{backgroundColor:"#707070",color:"#d0d0d0"},inputs:["0.00","0.00"],inputStyles:[],wallet_balances:[],balances:[],token_balance:0,token_supply:0,show_nobalance:!1,show_nobalance_i:0,bgColor:[],amounts:[]}},created:function(){var e=this;this.inputStyles=Array(l["e"].N_COINS).fill({backgroundColor:"#707070",color:"#d0d0d0"}),this.$watch((function(){return l["e"].default_account}),(function(t,a){a&&t.toLowerCase()!=a.toLowerCase()&&e.mounted()})),this.$watch((function(){return l["e"].initializedContracts}),(function(t){t&&e.mounted()}))},computed:Object(r["a"])({},l["g"]),mounted:function(){l["e"].initializedContracts&&this.mounted()},methods:{mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["update_fee_info"]("old");case 2:return t.next=4,e.update_balances();case 4:e.handle_change_share();case 5:case"end":return t.stop()}}),t)})))()},update_balances:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!l["e"].default_account){t.next=22;break}a=0;case 2:if(!(a<l["e"].N_COINS)){t.next=15;break}return t.t0=o["a"],t.t1=e.wallet_balances,t.t2=a,t.t3=parseInt,t.next=9,l["e"].coins[a].methods.balanceOf(l["e"].default_account).call();case 9:t.t4=t.sent,t.t5=(0,t.t3)(t.t4),t.t0.set.call(t.t0,t.t1,t.t2,t.t5);case 12:a++,t.next=2;break;case 15:return t.t6=parseInt,t.next=18,l["e"].old_swap_token.methods.balanceOf(l["e"].default_account).call();case 18:t.t7=t.sent,e.token_balance=(0,t.t6)(t.t7),t.next=23;break;case 22:e.token_balance=0;case 23:n=0;case 24:if(!(n<l["e"].N_COINS)){t.next=38;break}return t.t8=o["a"],t.t9=e.balances,t.t10=n,t.t11=parseInt,t.next=31,l["e"].old_swap.methods.balances(n).call();case 31:t.t12=t.sent,t.t13=(0,t.t11)(t.t12),t.t8.set.call(t.t8,t.t9,t.t10,t.t13),l["e"].default_account||o["a"].set(e.balances,n,0);case 35:n++,t.next=24;break;case 38:return t.t14=parseInt,t.next=41,l["e"].old_swap_token.methods.totalSupply().call();case 41:t.t15=t.sent,e.token_supply=(0,t.t14)(t.t15);case 43:case"end":return t.stop()}}),t)})))()},handle_change_amounts:function(e){return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",(function(){for(var t=0;t<l["e"].N_COINS;t++){$("#currency_"+t);this.value>this.balances[e]*l["e"].c_rates[e]*this.token_balance/this.token_supply&t==e?o["a"].set(this.inputStyles,t,Object.assign(this.inputStyles[t],{backgroundColor:"red"})):o["a"].set(this.inputStyles,t,Object.assign(this.inputStyles[t],{backgroundColor:"blue"})),o["a"].set(this.inputStyles,t,Object.assign(this.inputStyles[t],{color:"aqua"}))}this.share="---",this.shareStyles={backgroundColor:"#707070",color:"#d0d0d0"}}));case 1:case"end":return t.stop()}}),t)})))()},handle_remove_liquidity:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n,s,i,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(a=Math.floor((new Date).getTime()/1e3)+l["e"].trade_timeout,n=[],s=0;s<l["e"].N_COINS;s++)o["a"].set(e.amounts,s,d(Math.floor(e.inputs[s]/l["e"].c_rates[s]).toString()).toFixed(0,1)),n[s]=d(.97).multipliedBy(e.share/100).multipliedBy(d(e.balances[s])).multipliedBy(d(e.token_balance)).div(d(e.token_supply)).toFixed(0,1);if("---"!=e.share){t.next=8;break}return t.next=6,l["e"].swap.methods.remove_liquidity_imbalance(e.amounts,a).send({from:l["e"].default_account,gas:1e6});case 6:t.next=15;break;case 8:if(i=d(Math.floor(e.share/100*e.token_balance).toString()).toFixed(0,1),100!=e.share){t.next=13;break}return t.next=12,l["e"].old_swap_token.methods.balanceOf(l["e"].default_account).call();case 12:i=t.sent;case 13:return t.next=15,l["e"].old_swap.methods.remove_liquidity(i,a,n).send({from:l["e"].default_account,gas:6e5});case 15:if("---"!=share_val)for(r=0;r<l["e"].N_COINS;r++)e.handle_change_amounts(r)();return t.next=18,e.update_balances();case 18:c["update_fee_info"]("old");case 19:case"end":return t.stop()}}),t)})))()},handle_change_share:function(){try{this.shareStyles.backgroundColor="blue",this.shareStyles.color="aqua","---"==this.share?this.share=0:this.share>100|this.share<0&&(this.shareStyles.backgroundColor="red");for(var e=0;e<l["e"].N_COINS;e++)this.share>=0&this.share<=100?o["a"].set(this.inputs,e,(this.share/100*this.balances[e]*l["e"].c_rates[e]*this.token_balance/this.token_supply).toFixed(2)):o["a"].set(this.inputs,e,0),o["a"].set(this.inputStyles,e,{backgroundColor:"#707070",color:"#d0d0d0"})}catch(t){throw console.log("handle change share: withdraw"),t}},setAllInputBackground:function(e){for(var t=0;t<l["e"].N_COINS;t++)o["a"].set(this.inputStyles,t,Object.assign(this.inputStyles[t]||{},{backgroundColor:e}))},handle_migrate_new:function(){c["handle_migrate_new"]("old")}}},g=_,m=a("2877"),f=Object(m["a"])(g,n,s,!1,null,null,null);t["default"]=f.exports}}]);
//# sourceMappingURL=chunk-78f85bc5.2f3df541.js.map