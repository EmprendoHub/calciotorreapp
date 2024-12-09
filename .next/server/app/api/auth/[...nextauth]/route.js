"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fmnt%2F3TB%2FPORTOFLIO%2Fcalciotorreapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmnt%2F3TB%2FPORTOFLIO%2Fcalciotorreapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fmnt%2F3TB%2FPORTOFLIO%2Fcalciotorreapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmnt%2F3TB%2FPORTOFLIO%2Fcalciotorreapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mnt_3TB_PORTOFLIO_calciotorreapp_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.js */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"/mnt/3TB/PORTOFLIO/calciotorreapp/src/app/api/auth/[...nextauth]/route.js\",\n    nextConfigOutput,\n    userland: _mnt_3TB_PORTOFLIO_calciotorreapp_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj0lMkZtbnQlMkYzVEIlMkZQT1JUT0ZMSU8lMkZjYWxjaW90b3JyZWFwcCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGbW50JTJGM1RCJTJGUE9SVE9GTElPJTJGY2FsY2lvdG9ycmVhcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ3lCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FsY2lvdG9ycmVhcHAvPzMyYTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL21udC8zVEIvUE9SVE9GTElPL2NhbGNpb3RvcnJlYXBwL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvbW50LzNUQi9QT1JUT0ZMSU8vY2FsY2lvdG9ycmVhcHAvc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fmnt%2F3TB%2FPORTOFLIO%2Fcalciotorreapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmnt%2F3TB%2FPORTOFLIO%2Fcalciotorreapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/options.js":
/*!***************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/options.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   options: () => (/* binding */ options)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _backend_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/backend/models/User */ \"(rsc)/./src/backend/models/User.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/jwt */ \"(rsc)/./src/lib/jwt.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.js\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"(rsc)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\n\n\n\n\n\n\nconst options = {\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            type: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\",\n                    placeholder: \"Enter your user name\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\",\n                    placeholder: \" Enter your password\"\n                }\n            },\n            async authorize (credentials, request) {\n                const { email, password, recaptcha, honeypot, cookie } = credentials;\n                if (honeypot) {\n                    throw new Error(\"no bots thank you\");\n                }\n                if (!cookie) {\n                    // Not Signed in\n                    throw new Error(\"You are not authorized no no no\");\n                }\n                const secretKey = process?.env?.RECAPTCHA_SECRET_KEY;\n                const formData = `secret=${secretKey}&response=${recaptcha}`;\n                let response;\n                try {\n                    response = await axios__WEBPACK_IMPORTED_MODULE_8__[\"default\"].post(\"https://www.google.com/recaptcha/api/siteverify\", formData, {\n                        headers: {\n                            \"Content-Type\": \"application/x-www-form-urlencoded\"\n                        }\n                    });\n                } catch (error) {\n                    console.log(\"recaptcha error:\", error);\n                }\n                if (response && response.data?.success && response.data?.score > 0.5) {\n                    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n                    const user = await _backend_models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"]?.findOne({\n                        email\n                    }).select(\"+password\");\n                    if (!user) {\n                        console.log(\"no user error\");\n                        throw new Error(\"hubo un error al iniciar session\");\n                    }\n                    const comparePass = await bcrypt__WEBPACK_IMPORTED_MODULE_3___default().compare(password, user.password);\n                    if (!comparePass) {\n                        if (user) {\n                            user.loginAttempts += 1;\n                            await user.save();\n                            if (user.loginAttempts >= 3) {\n                                throw new Error(\"excediste el limite de intentos\");\n                            }\n                        }\n                        throw new Error(\"hubo un error al iniciar session\");\n                    } else {\n                        if (user.active === false) {\n                            throw new Error(\"verify your email\");\n                        }\n                        user.loginAttempts = 0;\n                        await user.save();\n                        const { password, ...currentUser } = user._doc;\n                        const accessToken = (0,_lib_jwt__WEBPACK_IMPORTED_MODULE_4__.signJwtToken)(currentUser, {\n                            expiresIn: \"6d\"\n                        });\n                        return {\n                            ...currentUser,\n                            accessToken\n                        };\n                    }\n                } else {\n                    console.log(\"fail: res.data?.score:\", response.data?.score);\n                    return next_server__WEBPACK_IMPORTED_MODULE_7__.NextResponse.json({\n                        success: false,\n                        email,\n                        score: response.data?.score\n                    });\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async signIn ({ user, account }) {\n            if (account?.provider == \"credentials\") {\n                return true;\n            }\n            if (account?.provider == \"google\") {\n                await (0,_lib_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n                try {\n                    const existinguser = await _backend_models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"]?.findOne({\n                        email: user.email\n                    }).select(\"+password\");\n                    if (!existinguser) {\n                        // Generate a random 64-byte token\n                        const verificationToken = crypto__WEBPACK_IMPORTED_MODULE_6___default().randomBytes(64).toString(\"hex\");\n                        const newUser = new _backend_models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n                            email: user.email,\n                            name: user.name,\n                            verificationToken: verificationToken,\n                            active: true\n                        });\n                        await newUser.save();\n                        return true;\n                    }\n                    return true;\n                } catch (error) {\n                    console.log(\"error saving google user\", error);\n                    return false;\n                }\n            }\n        },\n        async jwt ({ token, user, account }) {\n            if (account?.provider == \"google\") {\n                if (user) {\n                    const existinguser = await _backend_models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"]?.findOne({\n                        email: user.email\n                    }).select(\"+password\");\n                    const currentUser = {\n                        avatar: {\n                            url: user.image\n                        },\n                        _id: existinguser._id,\n                        name: user.name,\n                        email: user.email,\n                        phone: user.phone,\n                        role: existinguser.role,\n                        createdAt: existinguser.createdAt,\n                        updatedAt: existinguser.updatedAt,\n                        accessToken: account.access_token,\n                        stripeId: existinguser.stripe_id\n                    };\n                    token.accessToken = account.access_token;\n                    token._id = currentUser._id;\n                    token.user = currentUser;\n                }\n            } else {\n                if (user) {\n                    token.accessToken = user.accessToken;\n                    token._id = user._id;\n                    token.user = user;\n                    const updatedUser = await _backend_models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(token._id).select(\"+password\");\n                    token.user = updatedUser;\n                }\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user._id = token._id;\n                session.user.accessToken = token.accessToken;\n                session.user.createdAt = token.user.createdAt;\n                session.user.role = token.user.role;\n                session.user.phone = token.user.phone;\n                session.user.stripeId = token.user.stripe_id || token.user.stripeId;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/iniciar\",\n        error: \"/error\"\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vb3B0aW9ucy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDVTtBQUN6QjtBQUNiO0FBQ2E7QUFDUjtBQUNMO0FBQ0Y7QUFDaUI7QUFFcEMsTUFBTVMsVUFBVTtJQUNyQkMsV0FBVztRQUNUVixzRUFBY0EsQ0FBQztZQUNiVyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUN6QztRQUNBZiwyRUFBbUJBLENBQUM7WUFDbEJnQixNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQ0xDLE9BQU87b0JBQ1BILE1BQU07b0JBQ05JLGFBQWE7Z0JBQ2Y7Z0JBQ0FDLFVBQVU7b0JBQ1JGLE9BQU87b0JBQ1BILE1BQU07b0JBQ05JLGFBQWE7Z0JBQ2Y7WUFDRjtZQUVBLE1BQU1FLFdBQVVMLFdBQVcsRUFBRU0sT0FBTztnQkFDbEMsTUFBTSxFQUFFTCxLQUFLLEVBQUVHLFFBQVEsRUFBRUcsU0FBUyxFQUFFQyxRQUFRLEVBQUVDLE1BQU0sRUFBRSxHQUFHVDtnQkFDekQsSUFBSVEsVUFBVTtvQkFDWixNQUFNLElBQUlFLE1BQU07Z0JBQ2xCO2dCQUNBLElBQUksQ0FBQ0QsUUFBUTtvQkFDWCxnQkFBZ0I7b0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtnQkFDbEI7Z0JBQ0EsTUFBTUMsWUFBWWpCLFNBQVNDLEtBQUtpQjtnQkFDaEMsTUFBTUMsV0FBVyxDQUFDLE9BQU8sRUFBRUYsVUFBVSxVQUFVLEVBQUVKLFVBQVUsQ0FBQztnQkFDNUQsSUFBSU87Z0JBQ0osSUFBSTtvQkFDRkEsV0FBVyxNQUFNekIsNkNBQUtBLENBQUMwQixJQUFJLENBQ3pCLG1EQUNBRixVQUNBO3dCQUNFRyxTQUFTOzRCQUNQLGdCQUFnQjt3QkFDbEI7b0JBQ0Y7Z0JBRUosRUFBRSxPQUFPQyxPQUFPO29CQUNkQyxRQUFRQyxHQUFHLENB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Q1EsUUFBUXRDLElBQUksQ0FBQzZCLEtBQUssR0FBR0wsTUFBTXhCLElBQUksQ0FBQzZCLEtBQUs7Z0JBQ3JDUyxRQUFRdEMsSUFBSSxDQUFDa0MsUUFBUSxHQUFHVixNQUFNeEIsSUFBSSxDQUFDbUMsU0FBUyxJQUFJWCxNQUFNeEIsSUFBSSxDQUFDa0MsUUFBUTtZQUNyRTtZQUNBLE9BQU9JO1FBQ1Q7SUFDRjtJQUNBQyxPQUFPO1FBQ0x6QixRQUFRO1FBQ1JwQixPQUFPO0lBQ1Q7SUFFQThDLFFBQVFyRSxRQUFRQyxHQUFHLENBQUNxRSxlQUFlO0FBQ3JDLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxjaW90b3JyZWFwcC8uL3NyYy9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9vcHRpb25zLmpzP2VhNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCJAL2JhY2tlbmQvbW9kZWxzL1VzZXJcIjtcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xuaW1wb3J0IHsgc2lnbkp3dFRva2VuIH0gZnJvbSBcIkAvbGliL2p3dFwiO1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9saWIvZGJcIjtcbmltcG9ydCBjcnlwdG8gZnJvbSBcImNyeXB0b1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBvcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxuICAgIH0pLFxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgdHlwZTogXCJjcmVkZW50aWFsc1wiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHtcbiAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkVudGVyIHlvdXIgdXNlciBuYW1lXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgbGFiZWw6IFwiUGFzc3dvcmRcIixcbiAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwiIEVudGVyIHlvdXIgcGFzc3dvcmRcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG5cbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxdWVzdCkge1xuICAgICAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCwgcmVjYXB0Y2hhLCBob25leXBvdCwgY29va2llIH0gPSBjcmVkZW50aWFscztcbiAgICAgICAgaWYgKGhvbmV5cG90KSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm8gYm90cyB0aGFuayB5b3VcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjb29raWUpIHtcbiAgICAgICAgICAvLyBOb3QgU2lnbmVkIGluXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGFyZSBub3QgYXV0aG9yaXplZCBubyBubyBub1wiKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZWNyZXRLZXkgPSBwcm9jZXNzPy5lbnY/LlJFQ0FQVENIQV9TRUNSRVRfS0VZO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IGBzZWNyZXQ9JHtzZWNyZXRLZXl9JnJlc3BvbnNlPSR7cmVjYXB0Y2hhfWA7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgICBcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS9zaXRldmVyaWZ5XCIsXG4gICAgICAgICAgICBmb3JtRGF0YSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInJlY2FwdGNoYSBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZSAmJiByZXNwb25zZS5kYXRhPy5zdWNjZXNzICYmIHJlc3BvbnNlLmRhdGE/LnNjb3JlID4gMC41KSB7XG4gICAgICAgICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXI/LmZpbmRPbmUoeyBlbWFpbCB9KS5zZWxlY3QoXCIrcGFzc3dvcmRcIik7XG5cbiAgICAgICAgICBpZiAoIXVzZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibm8gdXNlciBlcnJvclwiKTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImh1Ym8gdW4gZXJyb3IgYWwgaW5pY2lhciBzZXNzaW9uXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNvbXBhcmVQYXNzID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuXG4gICAgICAgICAgaWYgKCFjb21wYXJlUGFzcykge1xuICAgICAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAgICAgdXNlci5sb2dpbkF0dGVtcHRzICs9IDE7XG4gICAgICAgICAgICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xuICAgICAgICAgICAgICBpZiAodXNlci5sb2dpbkF0dGVtcHRzID49IDMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJleGNlZGlzdGUgZWwgbGltaXRlIGRlIGludGVudG9zXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJodWJvIHVuIGVycm9yIGFsIGluaWNpYXIgc2Vzc2lvblwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHVzZXIuYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2ZXJpZnkgeW91ciBlbWFpbFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVzZXIubG9naW5BdHRlbXB0cyA9IDA7XG4gICAgICAgICAgICBhd2FpdCB1c2VyLnNhdmUoKTtcbiAgICAgICAgICAgIGNvbnN0IHsgcGFzc3dvcmQsIC4uLmN1cnJlbnRVc2VyIH0gPSB1c2VyLl9kb2M7XG4gICAgICAgICAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHNpZ25Kd3RUb2tlbihjdXJyZW50VXNlciwgeyBleHBpcmVzSW46IFwiNmRcIiB9KTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIC4uLmN1cnJlbnRVc2VyLFxuICAgICAgICAgICAgICBhY2Nlc3NUb2tlbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiZmFpbDogcmVzLmRhdGE/LnNjb3JlOlwiLCByZXNwb25zZS5kYXRhPy5zY29yZSk7XG4gICAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICBzY29yZTogcmVzcG9uc2UuZGF0YT8uc2NvcmUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQgfSkge1xuICAgICAgaWYgKGFjY291bnQ/LnByb3ZpZGVyID09IFwiY3JlZGVudGlhbHNcIikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChhY2NvdW50Py5wcm92aWRlciA9PSBcImdvb2dsZVwiKSB7XG4gICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5ndXNlciA9IGF3YWl0IFVzZXI/LmZpbmRPbmUoe1xuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgfSkuc2VsZWN0KFwiK3Bhc3N3b3JkXCIpO1xuXG4gICAgICAgICAgaWYgKCFleGlzdGluZ3VzZXIpIHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgcmFuZG9tIDY0LWJ5dGUgdG9rZW5cbiAgICAgICAgICAgIGNvbnN0IHZlcmlmaWNhdGlvblRva2VuID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDY0KS50b1N0cmluZyhcImhleFwiKTtcblxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHtcbiAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcbiAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uVG9rZW46IHZlcmlmaWNhdGlvblRva2VuLFxuICAgICAgICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYXdhaXQgbmV3VXNlci5zYXZlKCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciBzYXZpbmcgZ29vZ2xlIHVzZXJcIiwgZXJyb3IpO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIGFjY291bnQgfSkge1xuICAgICAgaWYgKGFjY291bnQ/LnByb3ZpZGVyID09IFwiZ29vZ2xlXCIpIHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZ3VzZXIgPSBhd2FpdCBVc2VyPy5maW5kT25lKHtcbiAgICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICAgIH0pLnNlbGVjdChcIitwYXNzd29yZFwiKTtcblxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0ge1xuICAgICAgICAgICAgYXZhdGFyOiB7IHVybDogdXNlci5pbWFnZSB9LFxuICAgICAgICAgICAgX2lkOiBleGlzdGluZ3VzZXIuX2lkLFxuICAgICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBwaG9uZTogdXNlci5waG9uZSxcbiAgICAgICAgICAgIHJvbGU6IGV4aXN0aW5ndXNlci5yb2xlLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBleGlzdGluZ3VzZXIuY3JlYXRlZEF0LFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBleGlzdGluZ3VzZXIudXBkYXRlZEF0LFxuICAgICAgICAgICAgYWNjZXNzVG9rZW46IGFjY291bnQuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgICAgc3RyaXBlSWQ6IGV4aXN0aW5ndXNlci5zdHJpcGVfaWQsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIHRva2VuLmFjY2Vzc1Rva2VuID0gYWNjb3VudC5hY2Nlc3NfdG9rZW47XG4gICAgICAgICAgdG9rZW4uX2lkID0gY3VycmVudFVzZXIuX2lkO1xuICAgICAgICAgIHRva2VuLnVzZXIgPSBjdXJyZW50VXNlcjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiA9IHVzZXIuYWNjZXNzVG9rZW47XG4gICAgICAgICAgdG9rZW4uX2lkID0gdXNlci5faWQ7XG4gICAgICAgICAgdG9rZW4udXNlciA9IHVzZXI7XG4gICAgICAgICAgY29uc3QgdXBkYXRlZFVzZXIgPSBhd2FpdCBVc2VyLmZpbmRCeUlkKHRva2VuLl9pZCkuc2VsZWN0KFxuICAgICAgICAgICAgXCIrcGFzc3dvcmRcIlxuICAgICAgICAgICk7XG4gICAgICAgICAgdG9rZW4udXNlciA9IHVwZGF0ZWRVc2VyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLl9pZCA9IHRva2VuLl9pZDtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmFjY2Vzc1Rva2VuID0gdG9rZW4uYWNjZXNzVG9rZW47XG4gICAgICAgIHNlc3Npb24udXNlci5jcmVhdGVkQXQgPSB0b2tlbi51c2VyLmNyZWF0ZWRBdDtcbiAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi51c2VyLnJvbGU7XG4gICAgICAgIHNlc3Npb24udXNlci5waG9uZSA9IHRva2VuLnVzZXIucGhvbmU7XG4gICAgICAgIHNlc3Npb24udXNlci5zdHJpcGVJZCA9IHRva2VuLnVzZXIuc3RyaXBlX2lkIHx8IHRva2VuLnVzZXIuc3RyaXBlSWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogXCIvaW5pY2lhclwiLFxuICAgIGVycm9yOiBcIi9lcnJvclwiLFxuICB9LFxuXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufTtcbiJdLCJuYW1lcyI6WyJHb29nbGVQcm92aWRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJVc2VyIiwiYmNyeXB0Iiwic2lnbkp3dFRva2VuIiwiZGJDb25uZWN0IiwiY3J5cHRvIiwiYXhpb3MiLCJOZXh0UmVzcG9uc2UiLCJvcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX1NFQ1JFVCIsInR5cGUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxdWVzdCIsInJlY2FwdGNoYSIsImhvbmV5cG90IiwiY29va2llIiwiRXJyb3IiLCJzZWNyZXRLZXkiLCJSRUNBUFRDSEFfU0VDUkVUX0tFWSIsImZvcm1EYXRhIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJzdWNjZXNzIiwic2NvcmUiLCJ1c2VyIiwiZmluZE9uZSIsInNlbGVjdCIsImNvbXBhcmVQYXNzIiwiY29tcGFyZSIsImxvZ2luQXR0ZW1wdHMiLCJzYXZlIiwiYWN0aXZlIiwiY3VycmVudFVzZXIiLCJfZG9jIiwiYWNjZXNzVG9rZW4iLCJleHBpcmVzSW4iLCJqc29uIiwiY2FsbGJhY2tzIiwic2lnbkluIiwiYWNjb3VudCIsInByb3ZpZGVyIiwiZXhpc3Rpbmd1c2VyIiwidmVyaWZpY2F0aW9uVG9rZW4iLCJyYW5kb21CeXRlcyIsInRvU3RyaW5nIiwibmV3VXNlciIsIm5hbWUiLCJqd3QiLCJ0b2tlbiIsImF2YXRhciIsInVybCIsImltYWdlIiwiX2lkIiwicGhvbmUiLCJyb2xlIiwiY3JlYXRlZEF0IiwidXBkYXRlZEF0IiwiYWNjZXNzX3Rva2VuIiwic3RyaXBlSWQiLCJzdHJpcGVfaWQiLCJ1cGRhdGVkVXNlciIsImZpbmRCeUlkIiwic2Vzc2lvbiIsInBhZ2VzIiwic2VjcmV0IiwiTkVYVEFVVEhfU0VDUkVUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/options.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options */ \"(rsc)/./src/app/api/auth/[...nextauth]/options.js\");\n\n\nconst handler = (0,next_auth_next__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_options__WEBPACK_IMPORTED_MODULE_1__.options);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFzQztBQUNGO0FBRXBDLE1BQU1FLFVBQVVGLDBEQUFRQSxDQUFDQyw2Q0FBT0E7QUFFVyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGNpb3RvcnJlYXBwLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzPzIzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aC9uZXh0JztcbmltcG9ydCB7IG9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMnO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgob3B0aW9ucyk7XG5cbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIm9wdGlvbnMiLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/backend/models/User.js":
/*!************************************!*\
  !*** ./src/backend/models/User.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    active: {\n        default: false,\n        type: Boolean\n    },\n    name: {\n        type: String,\n        require: true\n    },\n    email: {\n        type: String,\n        require: true,\n        unique: true\n    },\n    verificationToken: {\n        type: String\n    },\n    phone: {\n        type: String\n    },\n    stripe_id: {\n        type: String\n    },\n    password: {\n        type: String,\n        require: true,\n        select: false\n    },\n    avatar: {\n        type: String\n    },\n    permissions: [\n        {\n            name: {\n                type: String\n            },\n            active: {\n                default: false,\n                type: Boolean\n            }\n        }\n    ],\n    favorites: [\n        {\n            _id: {\n                type: String\n            },\n            title: {\n                type: String\n            },\n            price: {\n                type: Number\n            },\n            images: [\n                {\n                    url: {\n                        type: String\n                    }\n                }\n            ]\n        }\n    ],\n    loginAttempts: {\n        type: Number,\n        default: 0\n    },\n    points: {\n        type: Number\n    },\n    role: {\n        type: String,\n        default: \"cliente\"\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default())?.models?.User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYmFja2VuZC9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUNwQztJQUNFRyxRQUFRO1FBQ05DLFNBQVM7UUFDVEMsTUFBTUM7SUFDUjtJQUNBQyxNQUFNO1FBQ0pGLE1BQU1HO1FBQ05DLFNBQVM7SUFDWDtJQUNBQyxPQUFPO1FBQ0xMLE1BQU1HO1FBQ05DLFNBQVM7UUFDVEUsUUFBUTtJQUNWO0lBQ0FDLG1CQUFtQjtRQUNqQlAsTUFBTUc7SUFDUjtJQUNBSyxPQUFPO1FBQ0xSLE1BQU1HO0lBQ1I7SUFDQU0sV0FBVztRQUNUVCxNQUFNRztJQUNSO0lBQ0FPLFVBQVU7UUFDUlYsTUFBTUc7UUFDTkMsU0FBUztRQUNUTyxRQUFRO0lBQ1Y7SUFDQUMsUUFBUTtRQUNOWixNQUFNRztJQUNSO0lBQ0FVLGFBQWE7UUFDWDtZQUNFWCxNQUFNO2dCQUNKRixNQUFNRztZQUNSO1lBQ0FMLFFBQVE7Z0JBQ05DLFNBQVM7Z0JBQ1RDLE1BQU1DO1lBQ1I7UUFDRjtLQUNEO0lBQ0RhLFdBQVc7UUFDVDtZQUNFQyxLQUFLO2dCQUNIZixNQUFNRztZQUNSO1lBQ0FhLE9BQU87Z0JBQ0xoQixNQUFNRztZQUNSO1lBQ0FjLE9BQU87Z0JBQ0xqQixNQUFNa0I7WUFDUjtZQUNBQyxRQUFRO2dCQUNOO29CQUNFQyxLQUFLO3dCQUNIcEIsTUFBTUc7b0JBQ1I7Z0JBQ0Y7YUFDRDtRQUNIO0tBQ0Q7SUFDRGtCLGVBQWU7UUFDYnJCLE1BQU1rQjtRQUNObkIsU0FBUztJQUNYO0lBQ0F1QixRQUFRO1FBQ050QixNQUFNa0I7SUFDUjtJQUNBSyxNQUFNO1FBQ0p2QixNQUFNRztRQUNOSixTQUFTO0lBQ1g7QUFDRixHQUNBO0lBQUV5QixZQUFZO0FBQUs7QUFHckIsaUVBQWU3QixpREFBUUEsRUFBRThCLFFBQVFDLFFBQVEvQixxREFBYyxDQUFDLFFBQVFDLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxjaW90b3JyZWFwcC8uL3NyYy9iYWNrZW5kL21vZGVscy9Vc2VyLmpzP2NiNDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgVXNlclNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoXG4gIHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHJlcXVpcmU6IHRydWUsXG4gICAgfSxcbiAgICBlbWFpbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZTogdHJ1ZSxcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcbiAgICB9LFxuICAgIHZlcmlmaWNhdGlvblRva2VuOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBwaG9uZToge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG4gICAgc3RyaXBlX2lkOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcbiAgICBwYXNzd29yZDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgcmVxdWlyZTogdHJ1ZSxcbiAgICAgIHNlbGVjdDogZmFsc2UsXG4gICAgfSxcbiAgICBhdmF0YXI6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuICAgIHBlcm1pc3Npb25zOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgZmF2b3JpdGVzOiBbXG4gICAgICB7XG4gICAgICAgIF9pZDoge1xuICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlOiB7XG4gICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB9LFxuICAgICAgICBpbWFnZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1cmw6IHtcbiAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGxvZ2luQXR0ZW1wdHM6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDAsXG4gICAgfSxcbiAgICBwb2ludHM6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICB9LFxuICAgIHJvbGU6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIGRlZmF1bHQ6ICdjbGllbnRlJyxcbiAgICB9LFxuICB9LFxuICB7IHRpbWVzdGFtcHM6IHRydWUgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2U/Lm1vZGVscz8uVXNlciB8fCBtb25nb29zZS5tb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpO1xuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsImFjdGl2ZSIsImRlZmF1bHQiLCJ0eXBlIiwiQm9vbGVhbiIsIm5hbWUiLCJTdHJpbmciLCJyZXF1aXJlIiwiZW1haWwiLCJ1bmlxdWUiLCJ2ZXJpZmljYXRpb25Ub2tlbiIsInBob25lIiwic3RyaXBlX2lkIiwicGFzc3dvcmQiLCJzZWxlY3QiLCJhdmF0YXIiLCJwZXJtaXNzaW9ucyIsImZhdm9yaXRlcyIsIl9pZCIsInRpdGxlIiwicHJpY2UiLCJOdW1iZXIiLCJpbWFnZXMiLCJ1cmwiLCJsb2dpbkF0dGVtcHRzIiwicG9pbnRzIiwicm9sZSIsInRpbWVzdGFtcHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/backend/models/User.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.js":
/*!***********************!*\
  !*** ./src/lib/db.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URL = process.env.MONGO_URL;\nif (!MONGO_URL) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URL).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZQyxRQUFRQyxHQUFHLENBQUNGLFNBQVM7QUFDdkMsSUFBSSxDQUFDQSxXQUFXO0lBQ2QsTUFBTSxJQUFJRyxNQUNSO0FBRUo7QUFFQTs7OztDQUlDLEdBQ0QsSUFBSUMsU0FBU0MsT0FBT04sUUFBUTtBQUM1QixJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sUUFBUSxHQUFHO1FBQUVPLE1BQU07UUFBTUMsU0FBUztJQUFLO0FBQ3pEO0FBQ0EsZUFBZUM7SUFDYixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCO0lBRUEsSUFBSSxDQUFDRixPQUFPRyxPQUFPLEVBQUU7UUFDbkJILE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLFdBQVdVLElBQUksQ0FBQyxDQUFDWDtZQUNqRCxPQUFPQTtRQUNUO0lBQ0Y7SUFDQUssT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDbEMsT0FBT0gsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FsY2lvdG9ycmVhcHAvLi9zcmMvbGliL2RiLmpzPzdmOWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgTU9OR09fVVJMID0gcHJvY2Vzcy5lbnYuTU9OR09fVVJMO1xuaWYgKCFNT05HT19VUkwpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICdQbGVhc2UgZGVmaW5lIHRoZSBNT05HT0RCX1VSSSBlbnZpcm9ubWVudCB2YXJpYWJsZSBpbnNpZGUgLmVudi5sb2NhbCdcbiAgKTtcbn1cblxuLyoqXG4gKiBHbG9iYWwgaXMgdXNlZCBoZXJlIHRvIG1haW50YWluIGEgY2FjaGVkIGNvbm5lY3Rpb24gYWNyb3NzIGhvdCByZWxvYWRzXG4gKiBpbiBkZXZlbG9wbWVudC4gVGhpcyBwcmV2ZW50cyBjb25uZWN0aW9ucyBncm93aW5nIGV4cG9uZW50aWFsbHlcbiAqIGR1cmluZyBBUEkgUm91dGUgdXNhZ2UuXG4gKi9cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkwpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICByZXR1cm4gbW9uZ29vc2U7XG4gICAgfSk7XG4gIH1cbiAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBkYkNvbm5lY3Q7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT19VUkwiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImRiQ29ubmVjdCIsImNvbm5lY3QiLCJ0aGVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/jwt.js":
/*!************************!*\
  !*** ./src/lib/jwt.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   signJwtToken: () => (/* binding */ signJwtToken),\n/* harmony export */   verifyJwtToken: () => (/* binding */ verifyJwtToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/jwt */ \"(rsc)/./node_modules/next-auth/jwt/index.js\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// signing jwt\nfunction signJwtToken(payload, options = {}) {\n    const secret = process.env.NEXTAUTH_SECRET;\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign(payload, secret, options);\n    return token;\n}\n// verifying jwt\nasync function verifyJwtToken(sessionToken) {\n    try {\n        const decoded = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_1__.decode)({\n            token: sessionToken,\n            secre: process.env.NEXTAUTH_SECRET\n        });\n        return decoded;\n    } catch (error) {\n        console.error(error);\n        return null;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2p3dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBOEI7QUFDUztBQUV2QyxjQUFjO0FBQ1AsU0FBU0UsYUFBYUMsT0FBTyxFQUFFQyxVQUFVLENBQUMsQ0FBQztJQUM5QyxNQUFNQyxTQUFTQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7SUFDMUMsTUFBTUMsUUFBUVQsd0RBQVEsQ0FBQ0csU0FBU0UsUUFBUUQ7SUFDeEMsT0FBT0s7QUFDWDtBQUdBLGdCQUFnQjtBQUNULGVBQWVFLGVBQWVDLFlBQVk7SUFDN0MsSUFBSTtRQUNBLE1BQU1DLFVBQVUsTUFBTVoscURBQU1BLENBQUM7WUFDekJRLE9BQU9HO1lBQ1BFLE9BQU9SLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtRQUN0QztRQUVBLE9BQU9LO0lBQ1gsRUFBRSxPQUFPRSxPQUFPO1FBQ1pDLFFBQVFELEtBQUssQ0FBQ0E7UUFDZCxPQUFPO0lBQ1g7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2NhbGNpb3RvcnJlYXBwLy4vc3JjL2xpYi9qd3QuanM/ZTEwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbidcbmltcG9ydCB7IGRlY29kZSB9IGZyb20gJ25leHQtYXV0aC9qd3QnO1xuXG4vLyBzaWduaW5nIGp3dFxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25Kd3RUb2tlbihwYXlsb2FkLCBvcHRpb25zID0ge30pIHtcbiAgICBjb25zdCBzZWNyZXQgPSBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQ7XG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbihwYXlsb2FkLCBzZWNyZXQsIG9wdGlvbnMpO1xuICAgIHJldHVybiB0b2tlbjtcbn1cblxuXG4vLyB2ZXJpZnlpbmcgand0XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5Snd0VG9rZW4oc2Vzc2lvblRva2VuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVjb2RlZCA9IGF3YWl0IGRlY29kZSh7XG4gICAgICAgICAgICB0b2tlbjogc2Vzc2lvblRva2VuLFxuICAgICAgICAgICAgc2VjcmU6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVFxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRlY29kZWQ7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJqd3QiLCJkZWNvZGUiLCJzaWduSnd0VG9rZW4iLCJwYXlsb2FkIiwib3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJ0b2tlbiIsInNpZ24iLCJ2ZXJpZnlKd3RUb2tlbiIsInNlc3Npb25Ub2tlbiIsImRlY29kZWQiLCJzZWNyZSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/jwt.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/mime-db","vendor-chunks/axios","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/semver","vendor-chunks/@babel","vendor-chunks/follow-redirects","vendor-chunks/oauth","vendor-chunks/debug","vendor-chunks/form-data","vendor-chunks/jsonwebtoken","vendor-chunks/lodash.includes","vendor-chunks/asynckit","vendor-chunks/preact","vendor-chunks/uuid","vendor-chunks/combined-stream","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/jws","vendor-chunks/mime-types","vendor-chunks/lodash.once","vendor-chunks/proxy-from-env","vendor-chunks/jwa","vendor-chunks/ms","vendor-chunks/lodash.isinteger","vendor-chunks/supports-color","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/delayed-stream","vendor-chunks/lodash.isplainobject","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isboolean","vendor-chunks/safe-buffer","vendor-chunks/buffer-equal-constant-time","vendor-chunks/has-flag"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=%2Fmnt%2F3TB%2FPORTOFLIO%2Fcalciotorreapp%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmnt%2F3TB%2FPORTOFLIO%2Fcalciotorreapp&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();