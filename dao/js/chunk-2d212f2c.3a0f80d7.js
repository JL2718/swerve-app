(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d212f2c"],{ab1f:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("96cf");\n/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _onboard_20e047a9_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4630");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("901e");\n/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var bnc_sdk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fd33");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("337f");\n/* harmony import */ var bowser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bowser__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }\n\n\n\n\n\n\nvar fortmaticIcon = "\\n  <svg \\n    height=\\"40\\" \\n    viewBox=\\"0 0 40 40\\" \\n    width=\\"40\\" \\n    xmlns=\\"http://www.w3.org/2000/svg\\"\\n  >\\n    <path d=\\"m2744.99995 1155h9.99997 10.00008v9.98139h-10.00008-9.99997-9.99998v9.9814.64001 9.28323.05815 9.9234h-9.99997v-9.9234-.05815-9.28323-.64001-9.9814-9.98139h9.99997zm9.99961 29.88552h-9.94167v-9.92324h19.93595v10.27235c0 2.55359-1.01622 5.00299-2.82437 6.80909-1.80867 1.8061-4.26182 2.82181-6.82018 2.82335h-.34973z\\" \\n      fill=\\"#617bff\\" \\n      fill-rule=\\"evenodd\\" \\n      transform=\\"translate(-2725 -1155)\\"/>\\n  </svg>\\n";\n\nfunction fortmatic(options) {\n  var apiKey = options.apiKey,\n      networkId = options.networkId,\n      preferred = options.preferred,\n      label = options.label,\n      iconSrc = options.iconSrc,\n      svg = options.svg;\n  return {\n    name: label || \'Fortmatic\',\n    svg: svg || fortmaticIcon,\n    iconSrc: iconSrc,\n    wallet: function () {\n      var _wallet = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(helpers) {\n        var _yield$import, Fortmatic, instance, provider, BigNumber, getAddress, enabled;\n\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return __webpack_require__.e(/* import() */ "chunk-2d0f1539").then(__webpack_require__.t.bind(null, "9fc9", 7));\n\n              case 2:\n                _yield$import = _context2.sent;\n                Fortmatic = _yield$import["default"];\n                instance = new Fortmatic(apiKey, networkId === 1 ? undefined : Object(_onboard_20e047a9_js__WEBPACK_IMPORTED_MODULE_1__[/* n */ "f"])(networkId));\n                provider = instance.getProvider();\n                BigNumber = helpers.BigNumber, getAddress = helpers.getAddress;\n                return _context2.abrupt("return", {\n                  provider: provider,\n                  instance: instance,\n                  "interface": {\n                    name: \'Fortmatic\',\n                    connect: function connect() {\n                      return instance.user.login().then(function (res) {\n                        enabled = true;\n                        return res;\n                      });\n                    },\n                    disconnect: function disconnect() {\n                      return instance.user.logout();\n                    },\n                    address: {\n                      get: function get() {\n                        return enabled ? getAddress(provider) : Promise.resolve();\n                      }\n                    },\n                    network: {\n                      get: function get() {\n                        return Promise.resolve(networkId);\n                      }\n                    },\n                    balance: {\n                      get: function () {\n                        var _get = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n                          return regeneratorRuntime.wrap(function _callee$(_context) {\n                            while (1) {\n                              switch (_context.prev = _context.next) {\n                                case 0:\n                                  return _context.abrupt("return", enabled && instance.user.getBalances().then(function (res) {\n                                    return res[0] ? BigNumber(res[0].crypto_amount).times(BigNumber(\'1000000000000000000\')).toString(10) : null;\n                                  }));\n\n                                case 1:\n                                case "end":\n                                  return _context.stop();\n                              }\n                            }\n                          }, _callee);\n                        }));\n\n                        function get() {\n                          return _get.apply(this, arguments);\n                        }\n\n                        return get;\n                      }()\n                    },\n                    dashboard: function dashboard() {\n                      return instance.user.settings();\n                    }\n                  }\n                });\n\n              case 8:\n              case "end":\n                return _context2.stop();\n            }\n          }\n        }, _callee2);\n      }));\n\n      function wallet(_x) {\n        return _wallet.apply(this, arguments);\n      }\n\n      return wallet;\n    }(),\n    type: \'sdk\',\n    desktop: true,\n    mobile: true,\n    preferred: preferred\n  };\n}\n\n/* harmony default export */ __webpack_exports__["default"] = (fortmatic);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm5jLW9uYm9hcmQvZGlzdC9lc20vZm9ydG1hdGljLTk1NGNlM2QwLmpzP2FiMWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEVBQTRFLE1BQU0sMEJBQTBCLHdCQUF3QixFQUFFLGdCQUFnQixlQUFlLFFBQVEsRUFBRSxpQkFBaUIsZ0JBQWdCLEVBQUUsT0FBTyw0Q0FBNEMsRUFBRTs7QUFFdlEsZ0NBQWdDLHFCQUFxQixtQ0FBbUMsZ0RBQWdELGdDQUFnQyx3QkFBd0Isd0VBQXdFLEVBQUUsdUJBQXVCLHVFQUF1RSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsR0FBRzs7QUFFOVY7QUFDb0I7QUFDbkM7QUFDTDtBQUNEO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3R0FBbUI7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBLCtFQUErRSxzRUFBVztBQUMxRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQix5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHdFQUFTIiwiZmlsZSI6ImFiMWYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7IHRyeSB7IHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTsgdmFyIHZhbHVlID0gaW5mby52YWx1ZTsgfSBjYXRjaCAoZXJyb3IpIHsgcmVqZWN0KGVycm9yKTsgcmV0dXJuOyB9IGlmIChpbmZvLmRvbmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0gZWxzZSB7IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTsgfSB9XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7IHJldHVybiBmdW5jdGlvbiAoKSB7IHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50czsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpOyBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7IH0gZnVuY3Rpb24gX3Rocm93KGVycikgeyBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTsgfSBfbmV4dCh1bmRlZmluZWQpOyB9KTsgfTsgfVxuXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5pbXBvcnQgeyBuIGFzIG5ldHdvcmtOYW1lIH0gZnJvbSAnLi9vbmJvYXJkLTIwZTA0N2E5LmpzJztcbmltcG9ydCAnYmlnbnVtYmVyLmpzJztcbmltcG9ydCAnYm5jLXNkayc7XG5pbXBvcnQgJ2Jvd3Nlcic7XG52YXIgZm9ydG1hdGljSWNvbiA9IFwiXFxuICA8c3ZnIFxcbiAgICBoZWlnaHQ9XFxcIjQwXFxcIiBcXG4gICAgdmlld0JveD1cXFwiMCAwIDQwIDQwXFxcIiBcXG4gICAgd2lkdGg9XFxcIjQwXFxcIiBcXG4gICAgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIlxcbiAgPlxcbiAgICA8cGF0aCBkPVxcXCJtMjc0NC45OTk5NSAxMTU1aDkuOTk5OTcgMTAuMDAwMDh2OS45ODEzOWgtMTAuMDAwMDgtOS45OTk5Ny05Ljk5OTk4djkuOTgxNC42NDAwMSA5LjI4MzIzLjA1ODE1IDkuOTIzNGgtOS45OTk5N3YtOS45MjM0LS4wNTgxNS05LjI4MzIzLS42NDAwMS05Ljk4MTQtOS45ODEzOWg5Ljk5OTk3em05Ljk5OTYxIDI5Ljg4NTUyaC05Ljk0MTY3di05LjkyMzI0aDE5LjkzNTk1djEwLjI3MjM1YzAgMi41NTM1OS0xLjAxNjIyIDUuMDAyOTktMi44MjQzNyA2LjgwOTA5LTEuODA4NjcgMS44MDYxLTQuMjYxODIgMi44MjE4MS02LjgyMDE4IDIuODIzMzVoLS4zNDk3M3pcXFwiIFxcbiAgICAgIGZpbGw9XFxcIiM2MTdiZmZcXFwiIFxcbiAgICAgIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgXFxuICAgICAgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTI3MjUgLTExNTUpXFxcIi8+XFxuICA8L3N2Zz5cXG5cIjtcblxuZnVuY3Rpb24gZm9ydG1hdGljKG9wdGlvbnMpIHtcbiAgdmFyIGFwaUtleSA9IG9wdGlvbnMuYXBpS2V5LFxuICAgICAgbmV0d29ya0lkID0gb3B0aW9ucy5uZXR3b3JrSWQsXG4gICAgICBwcmVmZXJyZWQgPSBvcHRpb25zLnByZWZlcnJlZCxcbiAgICAgIGxhYmVsID0gb3B0aW9ucy5sYWJlbCxcbiAgICAgIGljb25TcmMgPSBvcHRpb25zLmljb25TcmMsXG4gICAgICBzdmcgPSBvcHRpb25zLnN2ZztcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBsYWJlbCB8fCAnRm9ydG1hdGljJyxcbiAgICBzdmc6IHN2ZyB8fCBmb3J0bWF0aWNJY29uLFxuICAgIGljb25TcmM6IGljb25TcmMsXG4gICAgd2FsbGV0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3dhbGxldCA9IF9hc3luY1RvR2VuZXJhdG9yKCAvKiNfX1BVUkVfXyovcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIoaGVscGVycykge1xuICAgICAgICB2YXIgX3lpZWxkJGltcG9ydCwgRm9ydG1hdGljLCBpbnN0YW5jZSwgcHJvdmlkZXIsIEJpZ051bWJlciwgZ2V0QWRkcmVzcywgZW5hYmxlZDtcblxuICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0Mi5uZXh0ID0gMjtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW1wb3J0KCdmb3J0bWF0aWMnKTtcblxuICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgX3lpZWxkJGltcG9ydCA9IF9jb250ZXh0Mi5zZW50O1xuICAgICAgICAgICAgICAgIEZvcnRtYXRpYyA9IF95aWVsZCRpbXBvcnRbXCJkZWZhdWx0XCJdO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IEZvcnRtYXRpYyhhcGlLZXksIG5ldHdvcmtJZCA9PT0gMSA/IHVuZGVmaW5lZCA6IG5ldHdvcmtOYW1lKG5ldHdvcmtJZCkpO1xuICAgICAgICAgICAgICAgIHByb3ZpZGVyID0gaW5zdGFuY2UuZ2V0UHJvdmlkZXIoKTtcbiAgICAgICAgICAgICAgICBCaWdOdW1iZXIgPSBoZWxwZXJzLkJpZ051bWJlciwgZ2V0QWRkcmVzcyA9IGhlbHBlcnMuZ2V0QWRkcmVzcztcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCB7XG4gICAgICAgICAgICAgICAgICBwcm92aWRlcjogcHJvdmlkZXIsXG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZTogaW5zdGFuY2UsXG4gICAgICAgICAgICAgICAgICBcImludGVyZmFjZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdGb3J0bWF0aWMnLFxuICAgICAgICAgICAgICAgICAgICBjb25uZWN0OiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS51c2VyLmxvZ2luKCkudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGRpc2Nvbm5lY3Q6IGZ1bmN0aW9uIGRpc2Nvbm5lY3QoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVzZXIubG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbmFibGVkID8gZ2V0QWRkcmVzcyhwcm92aWRlcikgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5ldHdvcms6IHtcbiAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV0d29ya0lkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJhbGFuY2U6IHtcbiAgICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZ2V0ID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChfY29udGV4dC5wcmV2ID0gX2NvbnRleHQubmV4dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBlbmFibGVkICYmIGluc3RhbmNlLnVzZXIuZ2V0QmFsYW5jZXMoKS50aGVuKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNbMF0gPyBCaWdOdW1iZXIocmVzWzBdLmNyeXB0b19hbW91bnQpLnRpbWVzKEJpZ051bWJlcignMTAwMDAwMDAwMDAwMDAwMDAwMCcpKS50b1N0cmluZygxMCkgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJlbmRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgX2NhbGxlZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9nZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldDtcbiAgICAgICAgICAgICAgICAgICAgICB9KClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkOiBmdW5jdGlvbiBkYXNoYm9hcmQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlLnVzZXIuc2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTIpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiB3YWxsZXQoX3gpIHtcbiAgICAgICAgcmV0dXJuIF93YWxsZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHdhbGxldDtcbiAgICB9KCksXG4gICAgdHlwZTogJ3NkaycsXG4gICAgZGVza3RvcDogdHJ1ZSxcbiAgICBtb2JpbGU6IHRydWUsXG4gICAgcHJlZmVycmVkOiBwcmVmZXJyZWRcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ydG1hdGljOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///ab1f\n')}}]);