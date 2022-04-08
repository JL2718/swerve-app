(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-593ff1e4"],{"0baa":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dfa6");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\nvar imTokenIcon = "\\n\\t<svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 93 93\\">\\n\\t\\t<defs>\\n\\t\\t\\t\\t<linearGradient id=\\"a\\" x1=\\"97.185%\\" x2=\\"-.038%\\" y1=\\"3.105%\\" y2=\\"99.699%\\">\\n\\t\\t\\t\\t\\t\\t<stop offset=\\"0%\\" stop-color=\\"#11C4D1\\"/>\\n\\t\\t\\t\\t\\t\\t<stop offset=\\"100%\\" stop-color=\\"#0062AD\\"/>\\n\\t\\t\\t\\t</linearGradient>\\n\\t\\t</defs>\\n\\t\\t<g fill=\\"none\\" fill-rule=\\"nonzero\\">\\n\\t\\t\\t\\t<path fill=\\"url(#a)\\" d=\\"M92.755 63.804s0 9.64-1.028 13.78c-1.028 4.187-2.985 7.06-5.09 9.202-2.154 2.142-4.993 4.09-9.3 5.112-4.356 1.023-13.754.974-13.754.974H29.417s-9.642 0-13.803-1.022c-4.16-1.071-7.097-2.97-9.25-5.113-2.155-2.142-4.112-4.966-5.091-9.3-1.028-4.333-.98-13.682-.98-13.682V29.671s0-9.64 1.029-13.78c1.027-4.187 2.985-7.06 5.09-9.202 2.154-2.142 4.993-4.09 9.3-5.113C20.068.554 29.466.603 29.466.603h34.166s9.642 0 13.803 1.022c4.16 1.071 7.097 2.97 9.25 5.113 2.154 2.142 4.112 4.966 5.091 9.3.98 4.333.98 13.682.98 13.682v34.084z\\"/>\\n\\t\\t\\t\\t<path fill=\\"#FFF\\" d=\\"M78.267 28.795c1.909 26.244-15.614 38.71-31.326 40.073-14.587 1.265-28.292-7.304-29.467-20.597-.979-10.955 6.07-15.678 11.6-16.117 5.679-.486 10.427 3.263 10.867 7.84.392 4.382-2.447 6.427-4.454 6.573-1.566.146-3.524-.78-3.72-2.727-.147-1.704.538-1.899.342-3.7-.293-3.214-3.181-3.555-4.747-3.409-1.91.146-5.385 2.338-4.944 7.694.49 5.404 5.874 9.69 12.922 9.056 7.636-.682 12.971-6.378 13.363-14.412 0-.439.098-.828.293-1.218.098-.146.147-.292.294-.438.196-.292.392-.536.636-.779l.686-.682c3.328-3.019 15.37-10.225 26.676-7.985.098 0 .196.049.245.097.44 0 .685.341.734.73\\"/>\\n\\t\\t</g>\\n\\t</svg>\\n";\n\nfunction imtoken(options) {\n  var preferred = options.preferred,\n      label = options.label,\n      iconSrc = options.iconSrc,\n      svg = options.svg,\n      rpcUrl = options.rpcUrl;\n  return {\n    name: label || \'imToken\',\n    iconSrc: iconSrc,\n    svg: svg || imTokenIcon,\n    wallet: function () {\n      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(helpers) {\n        var getProviderName, getBalance, imTokenProvider, isImToken, createProvider, provider, warned;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                getProviderName = helpers.getProviderName, getBalance = helpers.getBalance;\n                imTokenProvider = window.ethereum;\n                isImToken = getProviderName(imTokenProvider) === \'imToken\';\n\n                if (!(isImToken && rpcUrl)) {\n                  _context.next = 7;\n                  break;\n                }\n\n                _context.next = 6;\n                return Promise.all(/* import() */[__webpack_require__.e("chunk-143f66bc"), __webpack_require__.e("chunk-4b4d0214"), __webpack_require__.e("chunk-6760d4be")]).then(__webpack_require__.bind(null, "6b09"));\n\n              case 6:\n                createProvider = _context.sent["default"];\n\n              case 7:\n                provider = createProvider ? createProvider({\n                  rpcUrl: rpcUrl\n                }) : null;\n                warned = false;\n                return _context.abrupt("return", {\n                  provider: imTokenProvider,\n                  "interface": isImToken ? {\n                    address: {\n                      get: function get() {\n                        return Promise.resolve(imTokenProvider.selectedAddress);\n                      }\n                    },\n                    network: {\n                      get: function get() {\n                        return Promise.resolve(Number(imTokenProvider.networkVersion));\n                      }\n                    },\n                    balance: {\n                      get: function get() {\n                        if (!provider) {\n                          if (!warned) {\n                            console.warn(\'The imToken provider does not allow rpc calls preventing Onboard.js from getting the balance. You can pass in a "rpcUrl" to the imToken wallet initialization object to get the balance.\');\n                            warned = true;\n                          }\n\n                          return Promise.resolve(null);\n                        }\n\n                        return getBalance(provider, imTokenProvider.selectedAddress);\n                      }\n                    },\n                    name: getProviderName(imTokenProvider),\n                    connect: function connect() {\n                      return imTokenProvider.enable();\n                    }\n                  } : null\n                });\n\n              case 10:\n              case "end":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      function wallet(_x) {\n        return _wallet.apply(this, arguments);\n      }\n\n      return wallet;\n    }(),\n    type: \'injected\',\n    link: "imtokenv2://navigate?screen=DappView&url=".concat(window.location.href),\n    installMessage: _content_eeaca1cc_js__WEBPACK_IMPORTED_MODULE_0__[/* m */ "b"],\n    mobile: true,\n    preferred: preferred\n  };\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (imtoken);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm5jLW9uYm9hcmQvZGlzdC9lc20vaW10b2tlbi04NGZlMGRiZS5qcz8wYmFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSw0RUFBNEUsTUFBTSwwQkFBMEIsd0JBQXdCLEVBQUUsZ0JBQWdCLGVBQWUsUUFBUSxFQUFFLGlCQUFpQixnQkFBZ0IsRUFBRSxPQUFPLDRDQUE0QyxFQUFFOztBQUV2USxnQ0FBZ0MscUJBQXFCLG1DQUFtQyxnREFBZ0QsZ0NBQWdDLHdCQUF3Qix3RUFBd0UsRUFBRSx1QkFBdUIsdUVBQXVFLEVBQUUsa0JBQWtCLEVBQUUsRUFBRSxHQUFHOztBQUUzVDtBQUN4RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLG1NQUFzQzs7QUFFN0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQkFBb0IsOERBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHNFQUFPIiwiZmlsZSI6IjBiYWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5pbXBvcnQgeyBtIGFzIG1vYmlsZVdhbGxldEluc3RhbGxNZXNzYWdlIH0gZnJvbSAnLi9jb250ZW50LWVlYWNhMWNjLmpzJztcbnZhciBpbVRva2VuSWNvbiA9IFwiXFxuXFx0PHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHdpZHRoPVxcXCI0MFxcXCIgaGVpZ2h0PVxcXCI0MFxcXCIgdmlld0JveD1cXFwiMCAwIDkzIDkzXFxcIj5cXG5cXHRcXHQ8ZGVmcz5cXG5cXHRcXHRcXHRcXHQ8bGluZWFyR3JhZGllbnQgaWQ9XFxcImFcXFwiIHgxPVxcXCI5Ny4xODUlXFxcIiB4Mj1cXFwiLS4wMzglXFxcIiB5MT1cXFwiMy4xMDUlXFxcIiB5Mj1cXFwiOTkuNjk5JVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PHN0b3Agb2Zmc2V0PVxcXCIwJVxcXCIgc3RvcC1jb2xvcj1cXFwiIzExQzREMVxcXCIvPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxzdG9wIG9mZnNldD1cXFwiMTAwJVxcXCIgc3RvcC1jb2xvcj1cXFwiIzAwNjJBRFxcXCIvPlxcblxcdFxcdFxcdFxcdDwvbGluZWFyR3JhZGllbnQ+XFxuXFx0XFx0PC9kZWZzPlxcblxcdFxcdDxnIGZpbGw9XFxcIm5vbmVcXFwiIGZpbGwtcnVsZT1cXFwibm9uemVyb1xcXCI+XFxuXFx0XFx0XFx0XFx0PHBhdGggZmlsbD1cXFwidXJsKCNhKVxcXCIgZD1cXFwiTTkyLjc1NSA2My44MDRzMCA5LjY0LTEuMDI4IDEzLjc4Yy0xLjAyOCA0LjE4Ny0yLjk4NSA3LjA2LTUuMDkgOS4yMDItMi4xNTQgMi4xNDItNC45OTMgNC4wOS05LjMgNS4xMTItNC4zNTYgMS4wMjMtMTMuNzU0Ljk3NC0xMy43NTQuOTc0SDI5LjQxN3MtOS42NDIgMC0xMy44MDMtMS4wMjJjLTQuMTYtMS4wNzEtNy4wOTctMi45Ny05LjI1LTUuMTEzLTIuMTU1LTIuMTQyLTQuMTEyLTQuOTY2LTUuMDkxLTkuMy0xLjAyOC00LjMzMy0uOTgtMTMuNjgyLS45OC0xMy42ODJWMjkuNjcxczAtOS42NCAxLjAyOS0xMy43OGMxLjAyNy00LjE4NyAyLjk4NS03LjA2IDUuMDktOS4yMDIgMi4xNTQtMi4xNDIgNC45OTMtNC4wOSA5LjMtNS4xMTNDMjAuMDY4LjU1NCAyOS40NjYuNjAzIDI5LjQ2Ni42MDNoMzQuMTY2czkuNjQyIDAgMTMuODAzIDEuMDIyYzQuMTYgMS4wNzEgNy4wOTcgMi45NyA5LjI1IDUuMTEzIDIuMTU0IDIuMTQyIDQuMTEyIDQuOTY2IDUuMDkxIDkuMy45OCA0LjMzMy45OCAxMy42ODIuOTggMTMuNjgydjM0LjA4NHpcXFwiLz5cXG5cXHRcXHRcXHRcXHQ8cGF0aCBmaWxsPVxcXCIjRkZGXFxcIiBkPVxcXCJNNzguMjY3IDI4Ljc5NWMxLjkwOSAyNi4yNDQtMTUuNjE0IDM4LjcxLTMxLjMyNiA0MC4wNzMtMTQuNTg3IDEuMjY1LTI4LjI5Mi03LjMwNC0yOS40NjctMjAuNTk3LS45NzktMTAuOTU1IDYuMDctMTUuNjc4IDExLjYtMTYuMTE3IDUuNjc5LS40ODYgMTAuNDI3IDMuMjYzIDEwLjg2NyA3Ljg0LjM5MiA0LjM4Mi0yLjQ0NyA2LjQyNy00LjQ1NCA2LjU3My0xLjU2Ni4xNDYtMy41MjQtLjc4LTMuNzItMi43MjctLjE0Ny0xLjcwNC41MzgtMS44OTkuMzQyLTMuNy0uMjkzLTMuMjE0LTMuMTgxLTMuNTU1LTQuNzQ3LTMuNDA5LTEuOTEuMTQ2LTUuMzg1IDIuMzM4LTQuOTQ0IDcuNjk0LjQ5IDUuNDA0IDUuODc0IDkuNjkgMTIuOTIyIDkuMDU2IDcuNjM2LS42ODIgMTIuOTcxLTYuMzc4IDEzLjM2My0xNC40MTIgMC0uNDM5LjA5OC0uODI4LjI5My0xLjIxOC4wOTgtLjE0Ni4xNDctLjI5Mi4yOTQtLjQzOC4xOTYtLjI5Mi4zOTItLjUzNi42MzYtLjc3OWwuNjg2LS42ODJjMy4zMjgtMy4wMTkgMTUuMzctMTAuMjI1IDI2LjY3Ni03Ljk4NS4wOTggMCAuMTk2LjA0OS4yNDUuMDk3LjQ0IDAgLjY4NS4zNDEuNzM0LjczXFxcIi8+XFxuXFx0XFx0PC9nPlxcblxcdDwvc3ZnPlxcblwiO1xuXG5mdW5jdGlvbiBpbXRva2VuKG9wdGlvbnMpIHtcbiAgdmFyIHByZWZlcnJlZCA9IG9wdGlvbnMucHJlZmVycmVkLFxuICAgICAgbGFiZWwgPSBvcHRpb25zLmxhYmVsLFxuICAgICAgaWNvblNyYyA9IG9wdGlvbnMuaWNvblNyYyxcbiAgICAgIHN2ZyA9IG9wdGlvbnMuc3ZnLFxuICAgICAgcnBjVXJsID0gb3B0aW9ucy5ycGNVcmw7XG4gIHJldHVybiB7XG4gICAgbmFtZTogbGFiZWwgfHwgJ2ltVG9rZW4nLFxuICAgIGljb25TcmM6IGljb25TcmMsXG4gICAgc3ZnOiBzdmcgfHwgaW1Ub2tlbkljb24sXG4gICAgd2FsbGV0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3dhbGxldCA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZShoZWxwZXJzKSB7XG4gICAgICAgIHZhciBnZXRQcm92aWRlck5hbWUsIGdldEJhbGFuY2UsIGltVG9rZW5Qcm92aWRlciwgaXNJbVRva2VuLCBjcmVhdGVQcm92aWRlciwgcHJvdmlkZXIsIHdhcm5lZDtcbiAgICAgICAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGdldFByb3ZpZGVyTmFtZSA9IGhlbHBlcnMuZ2V0UHJvdmlkZXJOYW1lLCBnZXRCYWxhbmNlID0gaGVscGVycy5nZXRCYWxhbmNlO1xuICAgICAgICAgICAgICAgIGltVG9rZW5Qcm92aWRlciA9IHdpbmRvdy5ldGhlcmV1bTtcbiAgICAgICAgICAgICAgICBpc0ltVG9rZW4gPSBnZXRQcm92aWRlck5hbWUoaW1Ub2tlblByb3ZpZGVyKSA9PT0gJ2ltVG9rZW4nO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoaXNJbVRva2VuICYmIHJwY1VybCkpIHtcbiAgICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA3O1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDY7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGltcG9ydCgnLi9wcm92aWRlckVuZ2luZS04MWZmMTdlOS5qcycpO1xuXG4gICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBjcmVhdGVQcm92aWRlciA9IF9jb250ZXh0LnNlbnRbXCJkZWZhdWx0XCJdO1xuXG4gICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICBwcm92aWRlciA9IGNyZWF0ZVByb3ZpZGVyID8gY3JlYXRlUHJvdmlkZXIoe1xuICAgICAgICAgICAgICAgICAgcnBjVXJsOiBycGNVcmxcbiAgICAgICAgICAgICAgICB9KSA6IG51bGw7XG4gICAgICAgICAgICAgICAgd2FybmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgICBwcm92aWRlcjogaW1Ub2tlblByb3ZpZGVyLFxuICAgICAgICAgICAgICAgICAgXCJpbnRlcmZhY2VcIjogaXNJbVRva2VuID8ge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGltVG9rZW5Qcm92aWRlci5zZWxlY3RlZEFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbmV0d29yazoge1xuICAgICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShOdW1iZXIoaW1Ub2tlblByb3ZpZGVyLm5ldHdvcmtWZXJzaW9uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBiYWxhbmNlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3ZpZGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghd2FybmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdUaGUgaW1Ub2tlbiBwcm92aWRlciBkb2VzIG5vdCBhbGxvdyBycGMgY2FsbHMgcHJldmVudGluZyBPbmJvYXJkLmpzIGZyb20gZ2V0dGluZyB0aGUgYmFsYW5jZS4gWW91IGNhbiBwYXNzIGluIGEgXCJycGNVcmxcIiB0byB0aGUgaW1Ub2tlbiB3YWxsZXQgaW5pdGlhbGl6YXRpb24gb2JqZWN0IHRvIGdldCB0aGUgYmFsYW5jZS4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEJhbGFuY2UocHJvdmlkZXIsIGltVG9rZW5Qcm92aWRlci5zZWxlY3RlZEFkZHJlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZ2V0UHJvdmlkZXJOYW1lKGltVG9rZW5Qcm92aWRlciksXG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGltVG9rZW5Qcm92aWRlci5lbmFibGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSA6IG51bGxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICBjYXNlIFwiZW5kXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LnN0b3AoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIF9jYWxsZWUpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiB3YWxsZXQoX3gpIHtcbiAgICAgICAgcmV0dXJuIF93YWxsZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdhbGxldDtcbiAgICB9KCksXG4gICAgdHlwZTogJ2luamVjdGVkJyxcbiAgICBsaW5rOiBcImltdG9rZW52MjovL25hdmlnYXRlP3NjcmVlbj1EYXBwVmlldyZ1cmw9XCIuY29uY2F0KHdpbmRvdy5sb2NhdGlvbi5ocmVmKSxcbiAgICBpbnN0YWxsTWVzc2FnZTogbW9iaWxlV2FsbGV0SW5zdGFsbE1lc3NhZ2UsXG4gICAgbW9iaWxlOiB0cnVlLFxuICAgIHByZWZlcnJlZDogcHJlZmVycmVkXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGltdG9rZW47Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0baa\n')},dfa6:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extensionInstallMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mobileWalletInstallMessage; });\nvar extensionInstallMessage = function extensionInstallMessage(helpers) {\n  var currentWallet = helpers.currentWallet,\n      selectedWallet = helpers.selectedWallet;\n\n  if (currentWallet) {\n    return "\\n    <p style=\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\">\\n    We have detected that you already have\\n    <b>".concat(currentWallet, "</b>\\n    installed. If you would prefer to use\\n    <b>").concat(selectedWallet, "</b>\\n    instead, then click below to install.\\n    </p>\\n    <p style=\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\">\\n    <b>Tip:</b>\\n    If you already have ").concat(selectedWallet, " installed, check your\\n    browser extension settings to make sure that you have it enabled\\n    and that you have disabled any other browser extension wallets.\\n    <span\\n      class=\\"bn-onboard-clickable\\"\\n      style=\\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\\"\\n      onclick=\\"window.location.reload();\\">\\n      Then refresh the page.\\n    </span>\\n    </p>\\n    ");\n  } else {\n    return "\\n    <p style=\\"font-size: 0.889rem; font-family: inherit; margin: 0.889rem 0;\\">\\n    You\'ll need to install <b>".concat(selectedWallet, "</b> to continue. Once you have it installed, go ahead and\\n    <span\\n    class=\\"bn-onboard-clickable\\"\\n      style=\\"color: #4a90e2; font-size: 0.889rem; font-family: inherit;\\"\\n      onclick={window.location.reload();}>\\n      refresh the page.\\n    </span>\\n    ").concat(selectedWallet === \'Opera\' ? \'<br><br><i>Hint: If you already have Opera installed, make sure that your web3 wallet is <a style="color: #4a90e2; font-size: 0.889rem; font-family: inherit;" class="bn-onboard-clickable" href="https://help.opera.com/en/touch/crypto-wallet/" rel="noreferrer noopener" target="_blank">enabled</a></i>\' : \'\', "\\n    </p>\\n    ");\n  }\n};\n\nvar mobileWalletInstallMessage = function mobileWalletInstallMessage(helpers) {\n  var selectedWallet = helpers.selectedWallet;\n  return "\\n  <p style=\\"font-size: 0.889rem;\\">\\n    You\'ll need to install <b>".concat(selectedWallet, "</b> to continue. Click below to install and then load this Dapp with <b>").concat(selectedWallet, "</b>.\\n  </p>\\n  ");\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm5jLW9uYm9hcmQvZGlzdC9lc20vY29udGVudC1lZWFjYTFjYy5qcz9kZmE2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpREFBaUQsc0JBQXNCLG9CQUFvQixrUUFBa1Esc0JBQXNCLG9CQUFvQiwwVEFBMFQscUJBQXFCLHNCQUFzQiw2Q0FBNkM7QUFDenhCLEdBQUc7QUFDSCxpREFBaUQsc0JBQXNCLG9CQUFvQixxTUFBcU0scUJBQXFCLHNCQUFzQixtQkFBbUIsMEJBQTBCLHVNQUF1TSxxQkFBcUIsc0JBQXNCO0FBQzFtQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0MiLCJmaWxlIjoiZGZhNi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBleHRlbnNpb25JbnN0YWxsTWVzc2FnZSA9IGZ1bmN0aW9uIGV4dGVuc2lvbkluc3RhbGxNZXNzYWdlKGhlbHBlcnMpIHtcbiAgdmFyIGN1cnJlbnRXYWxsZXQgPSBoZWxwZXJzLmN1cnJlbnRXYWxsZXQsXG4gICAgICBzZWxlY3RlZFdhbGxldCA9IGhlbHBlcnMuc2VsZWN0ZWRXYWxsZXQ7XG5cbiAgaWYgKGN1cnJlbnRXYWxsZXQpIHtcbiAgICByZXR1cm4gXCJcXG4gICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBtYXJnaW46IDAuODg5cmVtIDA7XFxcIj5cXG4gICAgV2UgaGF2ZSBkZXRlY3RlZCB0aGF0IHlvdSBhbHJlYWR5IGhhdmVcXG4gICAgPGI+XCIuY29uY2F0KGN1cnJlbnRXYWxsZXQsIFwiPC9iPlxcbiAgICBpbnN0YWxsZWQuIElmIHlvdSB3b3VsZCBwcmVmZXIgdG8gdXNlXFxuICAgIDxiPlwiKS5jb25jYXQoc2VsZWN0ZWRXYWxsZXQsIFwiPC9iPlxcbiAgICBpbnN0ZWFkLCB0aGVuIGNsaWNrIGJlbG93IHRvIGluc3RhbGwuXFxuICAgIDwvcD5cXG4gICAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0OyBtYXJnaW46IDAuODg5cmVtIDA7XFxcIj5cXG4gICAgPGI+VGlwOjwvYj5cXG4gICAgSWYgeW91IGFscmVhZHkgaGF2ZSBcIikuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIiBpbnN0YWxsZWQsIGNoZWNrIHlvdXJcXG4gICAgYnJvd3NlciBleHRlbnNpb24gc2V0dGluZ3MgdG8gbWFrZSBzdXJlIHRoYXQgeW91IGhhdmUgaXQgZW5hYmxlZFxcbiAgICBhbmQgdGhhdCB5b3UgaGF2ZSBkaXNhYmxlZCBhbnkgb3RoZXIgYnJvd3NlciBleHRlbnNpb24gd2FsbGV0cy5cXG4gICAgPHNwYW5cXG4gICAgICBjbGFzcz1cXFwiYm4tb25ib2FyZC1jbGlja2FibGVcXFwiXFxuICAgICAgc3R5bGU9XFxcImNvbG9yOiAjNGE5MGUyOyBmb250LXNpemU6IDAuODg5cmVtOyBmb250LWZhbWlseTogaW5oZXJpdDtcXFwiXFxuICAgICAgb25jbGljaz1cXFwid2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xcXCI+XFxuICAgICAgVGhlbiByZWZyZXNoIHRoZSBwYWdlLlxcbiAgICA8L3NwYW4+XFxuICAgIDwvcD5cXG4gICAgXCIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlxcbiAgICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAwLjg4OXJlbTsgZm9udC1mYW1pbHk6IGluaGVyaXQ7IG1hcmdpbjogMC44ODlyZW0gMDtcXFwiPlxcbiAgICBZb3UnbGwgbmVlZCB0byBpbnN0YWxsIDxiPlwiLmNvbmNhdChzZWxlY3RlZFdhbGxldCwgXCI8L2I+IHRvIGNvbnRpbnVlLiBPbmNlIHlvdSBoYXZlIGl0IGluc3RhbGxlZCwgZ28gYWhlYWQgYW5kXFxuICAgIDxzcGFuXFxuICAgIGNsYXNzPVxcXCJibi1vbmJvYXJkLWNsaWNrYWJsZVxcXCJcXG4gICAgICBzdHlsZT1cXFwiY29sb3I6ICM0YTkwZTI7IGZvbnQtc2l6ZTogMC44ODlyZW07IGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcXCJcXG4gICAgICBvbmNsaWNrPXt3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7fT5cXG4gICAgICByZWZyZXNoIHRoZSBwYWdlLlxcbiAgICA8L3NwYW4+XFxuICAgIFwiKS5jb25jYXQoc2VsZWN0ZWRXYWxsZXQgPT09ICdPcGVyYScgPyAnPGJyPjxicj48aT5IaW50OiBJZiB5b3UgYWxyZWFkeSBoYXZlIE9wZXJhIGluc3RhbGxlZCwgbWFrZSBzdXJlIHRoYXQgeW91ciB3ZWIzIHdhbGxldCBpcyA8YSBzdHlsZT1cImNvbG9yOiAjNGE5MGUyOyBmb250LXNpemU6IDAuODg5cmVtOyBmb250LWZhbWlseTogaW5oZXJpdDtcIiBjbGFzcz1cImJuLW9uYm9hcmQtY2xpY2thYmxlXCIgaHJlZj1cImh0dHBzOi8vaGVscC5vcGVyYS5jb20vZW4vdG91Y2gvY3J5cHRvLXdhbGxldC9cIiByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+ZW5hYmxlZDwvYT48L2k+JyA6ICcnLCBcIlxcbiAgICA8L3A+XFxuICAgIFwiKTtcbiAgfVxufTtcblxudmFyIG1vYmlsZVdhbGxldEluc3RhbGxNZXNzYWdlID0gZnVuY3Rpb24gbW9iaWxlV2FsbGV0SW5zdGFsbE1lc3NhZ2UoaGVscGVycykge1xuICB2YXIgc2VsZWN0ZWRXYWxsZXQgPSBoZWxwZXJzLnNlbGVjdGVkV2FsbGV0O1xuICByZXR1cm4gXCJcXG4gIDxwIHN0eWxlPVxcXCJmb250LXNpemU6IDAuODg5cmVtO1xcXCI+XFxuICAgIFlvdSdsbCBuZWVkIHRvIGluc3RhbGwgPGI+XCIuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIjwvYj4gdG8gY29udGludWUuIENsaWNrIGJlbG93IHRvIGluc3RhbGwgYW5kIHRoZW4gbG9hZCB0aGlzIERhcHAgd2l0aCA8Yj5cIikuY29uY2F0KHNlbGVjdGVkV2FsbGV0LCBcIjwvYj4uXFxuICA8L3A+XFxuICBcIik7XG59O1xuXG5leHBvcnQgeyBleHRlbnNpb25JbnN0YWxsTWVzc2FnZSBhcyBlLCBtb2JpbGVXYWxsZXRJbnN0YWxsTWVzc2FnZSBhcyBtIH07Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///dfa6\n')}}]);