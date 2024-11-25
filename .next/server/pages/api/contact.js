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
exports.id = "pages/api/contact";
exports.ids = ["pages/api/contact"];
exports.modules = {

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ "(api)/./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const { name , email , message  } = req.body;\n        // Configure the transporter\n        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({\n            service: \"gmail\",\n            auth: {\n                user: \"margameguy@gmail.com\",\n                pass: \"Avatar1232\"\n            }\n        });\n        try {\n            // Send the email\n            await transporter.sendMail({\n                from: `\"Contact Form\" <${process.env.EMAIL_USER}>`,\n                to: \"margameguy@gmail.com\",\n                subject: \"New Contact Form Submission\",\n                text: `Name: ${name}\\nEmail: ${email}\\nMessage: ${message}`\n            });\n            res.status(200).json({\n                message: \"Email sent successfully\"\n            });\n        } catch (error) {\n            console.error(error);\n            res.status(500).json({\n                message: \"Failed to send email\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0M7QUFFckIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDekIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLE1BQUssRUFBRUMsUUFBTyxFQUFFLEdBQUdMLElBQUlNLElBQUk7UUFFekMsNEJBQTRCO1FBQzVCLE1BQU1DLGNBQWNULGlFQUEwQixDQUFDO1lBQzdDVyxTQUFTO1lBQ1RDLE1BQU07Z0JBQ0pDLE1BQU07Z0JBQ05DLE1BQU07WUFDUjtRQUNGO1FBRUEsSUFBSTtZQUNGLGlCQUFpQjtZQUNqQixNQUFNTCxZQUFZTSxRQUFRLENBQUM7Z0JBQ3pCQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUVDLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsQ0FBQztnQkFDbERDLElBQUk7Z0JBQ0pDLFNBQVM7Z0JBQ1RDLE1BQU0sQ0FBQyxNQUFNLEVBQUVqQixLQUFLLFNBQVMsRUFBRUMsTUFBTSxXQUFXLEVBQUVDLFFBQVEsQ0FBQztZQUM3RDtZQUVBSixJQUFJb0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRWpCLFNBQVM7WUFBMEI7UUFDNUQsRUFBRSxPQUFPa0IsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUNBO1lBQ2R0QixJQUFJb0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRWpCLFNBQVM7WUFBdUI7UUFDekQ7SUFDRixPQUFPO1FBQ0xKLElBQUlvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVqQixTQUFTO1FBQXFCO0lBQ3ZELENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2JhdXRvLy4vcGFnZXMvYXBpL2NvbnRhY3QuanM/MzQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbm9kZW1haWxlciBmcm9tIFwibm9kZW1haWxlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSA9IHJlcS5ib2R5O1xuXG4gICAgLy8gQ29uZmlndXJlIHRoZSB0cmFuc3BvcnRlclxuICAgIGNvbnN0IHRyYW5zcG9ydGVyID0gbm9kZW1haWxlci5jcmVhdGVUcmFuc3BvcnQoe1xuICAgICAgc2VydmljZTogXCJnbWFpbFwiLCAvLyBVc2UgeW91ciBlbWFpbCBwcm92aWRlclxuICAgICAgYXV0aDoge1xuICAgICAgICB1c2VyOiBcIm1hcmdhbWVndXlAZ21haWwuY29tXCIsIC8vIFlvdXIgZW1haWxcbiAgICAgICAgcGFzczogXCJBdmF0YXIxMjMyXCIsIC8vIFlvdXIgZW1haWwgcGFzc3dvcmQgb3IgYXBwIHBhc3N3b3JkXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFNlbmQgdGhlIGVtYWlsXG4gICAgICBhd2FpdCB0cmFuc3BvcnRlci5zZW5kTWFpbCh7XG4gICAgICAgIGZyb206IGBcIkNvbnRhY3QgRm9ybVwiIDwke3Byb2Nlc3MuZW52LkVNQUlMX1VTRVJ9PmAsIC8vIFNlbmRlciBhZGRyZXNzXG4gICAgICAgIHRvOiBcIm1hcmdhbWVndXlAZ21haWwuY29tXCIsIC8vIFJlY2lwaWVudCBlbWFpbFxuICAgICAgICBzdWJqZWN0OiBcIk5ldyBDb250YWN0IEZvcm0gU3VibWlzc2lvblwiLCAvLyBTdWJqZWN0IGxpbmVcbiAgICAgICAgdGV4dDogYE5hbWU6ICR7bmFtZX1cXG5FbWFpbDogJHtlbWFpbH1cXG5NZXNzYWdlOiAke21lc3NhZ2V9YCwgLy8gUGxhaW4gdGV4dCBib2R5XG4gICAgICB9KTtcblxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcIkVtYWlsIHNlbnQgc3VjY2Vzc2Z1bGx5XCIgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkZhaWxlZCB0byBzZW5kIGVtYWlsXCIgfSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIm5vZGVtYWlsZXIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwibmFtZSIsImVtYWlsIiwibWVzc2FnZSIsImJvZHkiLCJ0cmFuc3BvcnRlciIsImNyZWF0ZVRyYW5zcG9ydCIsInNlcnZpY2UiLCJhdXRoIiwidXNlciIsInBhc3MiLCJzZW5kTWFpbCIsImZyb20iLCJwcm9jZXNzIiwiZW52IiwiRU1BSUxfVVNFUiIsInRvIiwic3ViamVjdCIsInRleHQiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/contact.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/contact.js"));
module.exports = __webpack_exports__;

})();