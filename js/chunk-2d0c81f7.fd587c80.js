(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c81f7"],{5413:function(n,e,t){"use strict";t.r(e);t("96cf");var r=t("4630");t("901e"),t("fd33"),t("337f");function o(n,e,t,r,o,a,i){try{var u=n[a](i),c=u.value}catch(s){return void t(s)}u.done?e(c):Promise.resolve(c).then(r,o)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(r,a){var i=n.apply(e,t);function u(n){o(i,r,a,u,c,"next",n)}function c(n){o(i,r,a,u,c,"throw",n)}u(void 0)}))}}function i(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.heading,t=n.description,o=n.icon,i=n.html,u=n.button;return function(){var n=a(regeneratorRuntime.mark((function n(a){var c,s,d,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(c=a.wallet,s=a.address,d=a.stateSyncStatus,l=a.stateStore,null!==s){n.next=5;break}if(!d.address){n.next=5;break}return n.next=5,new Promise((function(n){d.address&&d.address.then(n),setTimeout((function(){null===s&&n()}),500)}));case 5:if(l.address.get()||!c||!c.name){n.next=7;break}return n.abrupt("return",{heading:e||"Login and Authorize Your Wallet",description:t||"This dapp requires access to your wallet, please login and authorize access to your ".concat(c.name," accounts to continue."),eventCode:"loginFail",action:c.connect,icon:o||r["c"],html:i,button:u});case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}e["default"]=i}}]);
//# sourceMappingURL=chunk-2d0c81f7.fd587c80.js.map