(this["webpackJsonppremiership"] = this["webpackJsonppremiership"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  background: #fff !important;\n}\n\n.App {\n  /* text-align: center; */\n  max-width: 992px;\n  margin: 0 auto;\n}\n\n.App-header {\n  font-size: 1rem;\n  background: #fff;\n  color: #282c34;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n/* .select-cont { */\n/* width: 600px; */\n/* max-width: 600px; */\n/* } */\n\n.select-round-text {\n  text-align: right;\n  line-height: 38px;\n}\n\n.select-round-dropdown {\n  width: 110px !important;\n}\n\n.tables-container {\n  /* width: 900px; */\n  background: #fff;\n}\n\n.tables-container .nav-tabs .nav-link {\n  background: rgb(233, 233, 233);\n}\n\n.tables-container .nav-tabs .nav-link.active {\n  background: rgb(0, 123, 255);\n  color: #fff;\n}\n\n.standings-table,\n.round-table {\n  /* width: 100%; */\n  background: #fff;\n  text-align: center;\n}\n\n.standings-table td {\n  min-width: 36px;\n}\n.standings-table .last-5 {\n  min-width: 160px;\n  width: 160px;\n}\n\n.game-icon {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  font-size: 0.875rem;\n  margin-left: 2px;\n  margin-right: 2px;\n  border-radius: 50%;\n  color: #fff;\n}\n\n.game-W {\n  background: #4caf50;\n}\n.game-L {\n  background: #c62828;\n  background: #d32f2f;\n}\n\n.game-D {\n  background: #999;\n}\n\n@media screen and (min-width: 992px) {\n  body {\n    background: #eee !important;\n  }\n\n  .App {\n    max-width: 960px;\n    margin: 40px auto;\n  }\n\n  .App-header {\n    border-radius: 0.5rem;\n  }\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data.json */ "./src/data/data.json");
var _data_data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data.json */ "./src/data/data.json", 1);
/* harmony import */ var react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Tabs */ "./node_modules/react-bootstrap/esm/Tabs.js");
/* harmony import */ var react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Tab */ "./node_modules/react-bootstrap/esm/Tab.js");
/* harmony import */ var _SelectRound__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SelectRound */ "./src/components/SelectRound.js");
/* harmony import */ var _RoundTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./RoundTable */ "./src/components/RoundTable.js");
/* harmony import */ var _Standings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Standings */ "./src/components/Standings.js");
var _jsxFileName = "C:\\Users\\User\\Documents\\CODE\\Infobip Nogomet\\premiership\\src\\components\\App.js";

 // data

 // bootstrap


 // my components



 // calculate last round - round 38

const roundArray = _data_data_json__WEBPACK_IMPORTED_MODULE_2__.map(x => x.round);
const lastRound = Math.max(...roundArray);

function App() {
  const [roundNumber, setRoundNumber] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(lastRound);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.title = `Round ${roundNumber} - English Premier League 2016/2017`;
  });

  function handleChange(newRound) {
    setRoundNumber(newRound);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "App-header py-5 px-2 px-lg-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SelectRound__WEBPACK_IMPORTED_MODULE_5__["default"], {
    roundNumber: roundNumber,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Round ", roundNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tables-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
    defaultActiveKey: "matches",
    id: "uncontrolled-tab-example",
    className: "bg-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    eventKey: "matches",
    title: "Matches",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_RoundTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
    roundNumber: roundNumber,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Tab__WEBPACK_IMPORTED_MODULE_4__["default"], {
    eventKey: "standings",
    title: "Standings",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Standings__WEBPACK_IMPORTED_MODULE_7__["default"], {
    roundNumber: roundNumber,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/OneClub.js":
/*!***********************************!*\
  !*** ./src/components/OneClub.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\User\\Documents\\CODE\\Infobip Nogomet\\premiership\\src\\components\\OneClub.js";


const OneClub = props => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, props.club.ranking, "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "text-left px-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, props.club.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, props.club.matchesPlayed()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, props.club.wins), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, props.club.draws), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, props.club.loses), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, props.club.goalsFor), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, props.club.goalsAgainst), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, props.club.goalsDifference()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, props.club.points()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "last-5",
    title: "Last match played is left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, props.club.lastFive.reverse().map((el, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: i,
      className: `game-icon game-${el}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, el);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (OneClub);

/***/ }),

/***/ "./src/components/OneMatch.js":
/*!************************************!*\
  !*** ./src/components/OneMatch.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\User\\Documents\\CODE\\Infobip Nogomet\\premiership\\src\\components\\OneMatch.js";


const OneMatch = props => {
  const match = props.match;
  const objKeys = Object.keys(match);
  const hostName = objKeys[0];
  const guestName = objKeys[1];
  const hostScore = match[hostName];
  const guestScore = match[guestName];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, hostName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, hostScore), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, guestScore), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, guestName));
};

/* harmony default export */ __webpack_exports__["default"] = (OneMatch);

/***/ }),

/***/ "./src/components/RoundTable.js":
/*!**************************************!*\
  !*** ./src/components/RoundTable.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.json */ "./src/data/data.json");
var _data_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data.json */ "./src/data/data.json", 1);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var _OneMatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OneMatch */ "./src/components/OneMatch.js");
var _jsxFileName = "C:\\Users\\User\\Documents\\CODE\\Infobip Nogomet\\premiership\\src\\components\\RoundTable.js";
 // data

 // bootstrap

 // my components



function RoundTable(props) {
  const round = _data_data_json__WEBPACK_IMPORTED_MODULE_1__[props.roundNumber - 1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bordered: true,
    hover: true,
    size: "sm",
    responsive: true,
    className: "round-table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Host"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "Host goal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Guest Goals"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, "Guest"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, round.matches.map((match, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OneMatch__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      match: match,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 18
      }
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (RoundTable);

/***/ }),

/***/ "./src/components/SelectRound.js":
/*!***************************************!*\
  !*** ./src/components/SelectRound.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.json */ "./src/data/data.json");
var _data_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data.json */ "./src/data/data.json", 1);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Form */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Container */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Row */ "./node_modules/react-bootstrap/esm/Row.js");
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap/Col */ "./node_modules/react-bootstrap/esm/Col.js");
var _jsxFileName = "C:\\Users\\User\\Documents\\CODE\\Infobip Nogomet\\premiership\\src\\components\\SelectRound.js";
 // data with all matches







function SelectRound(props) {
  function handleChange(e) {
    props.onChange(e.target.value);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Group, {
    as: react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_4__["default"],
    controlId: "exampleForm.ControlSelect1",
    className: "select-cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Label, {
    column: "6",
    className: "select-round-text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Select Round"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    xs: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_2__["default"].Control, {
    as: "select",
    defaultValue: props.roundNumber,
    onChange: e => handleChange(e),
    className: "select-round-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, _data_data_json__WEBPACK_IMPORTED_MODULE_1__.map((x, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    key: x.round,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, x.round))))));
}

/* harmony default export */ __webpack_exports__["default"] = (SelectRound);

/***/ }),

/***/ "./src/components/Standings.js":
/*!*************************************!*\
  !*** ./src/components/Standings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/data.json */ "./src/data/data.json");
var _data_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/data.json */ "./src/data/data.json", 1);
/* harmony import */ var react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Table */ "./node_modules/react-bootstrap/esm/Table.js");
/* harmony import */ var _OneClub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OneClub */ "./src/components/OneClub.js");
var _jsxFileName = "C:\\Users\\User\\Documents\\CODE\\Infobip Nogomet\\premiership\\src\\components\\Standings.js";
 // data

 // bootstrap

 // my components



function Standings(props) {
  // 1. find all clubs from first round of matches
  // 2. push scores, points and data from all matches to array of clubs
  // 3. calculate ranking
  // 4. sort by rankings
  // 1. find all clubs and put them in array
  const firstRound = _data_data_json__WEBPACK_IMPORTED_MODULE_1__[0].matches;
  const allClubs = [];
  firstRound.forEach(match => {
    // both clubs from one match
    const twoClubs = Object.keys(match);
    twoClubs.forEach(el => {
      const club = {
        ranking: 0,
        name: el,
        wins: 0,
        draws: 0,
        loses: 0,
        goalsFor: 0,
        goalsAgainst: 0,

        matchesPlayed() {
          return this.wins + this.draws + this.loses;
        },

        goalsDifference() {
          return this.goalsFor - this.goalsAgainst;
        },

        points() {
          return this.wins * 3 + this.draws;
        },

        lastFive: []
      };
      allClubs.push(club);
    });
  }); // 2. push scores, points and data from all matches to array of clubs

  let i;

  for (i = 0; i < props.roundNumber; i++) {
    _data_data_json__WEBPACK_IMPORTED_MODULE_1__[i].matches.forEach(match => {
      const objKeys = Object.keys(match);
      const hostName = objKeys[0];
      const guestName = objKeys[1];
      const hostScore = match[hostName];
      const guestScore = match[guestName];
      allClubs.forEach(el => {
        if (el.name === hostName) {
          el.goalsFor += hostScore;
          el.goalsAgainst += guestScore;

          if (hostScore > guestScore) {
            el.wins++;
            el.lastFive.push("W");
          } else if (hostScore < guestScore) {
            el.loses++;
            el.lastFive.push("L");
          } else {
            el.draws++;
            el.lastFive.push("D");
          }

          if (el.lastFive && el.lastFive.length > 5) el.lastFive.shift();
        } else if (el.name === guestName) {
          el.goalsFor += guestScore;
          el.goalsAgainst += hostScore;

          if (hostScore > guestScore) {
            el.loses++;
            el.lastFive.push("L");
          } else if (hostScore < guestScore) {
            el.wins++;
            el.lastFive.push("W");
          } else {
            el.draws++;
            el.lastFive.push("D");
          }

          if (el.lastFive && el.lastFive.length > 5) el.lastFive.shift();
        }
      });
    });
  } // 3. Calculate ranking


  allClubs.sort(function (a, b) {
    // sort by points
    if (b.points() - a.points() !== 0) {
      return b.points() - a.points(); // if same points, sort by goal difference
    } else if (b.goalsDifference() - a.goalsDifference() !== 0) {
      return b.goalsDifference() - a.goalsDifference(); // if same goal difference, sort by more scored goals
    } else {
      return b.goalsFor - a.goalsFor;
    }
  }); // 4. add ranking number

  allClubs.forEach((club, i) => {
    club.ranking = i + 1;
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    bordered: true,
    hover: true,
    size: "sm",
    responsive: true,
    className: "standings-table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    title: "Position",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, "Pos."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    title: "Club",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "Club"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    title: "Matches Played",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }, "MP"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    title: "Win",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }, "W"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    title: "Draw",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, "D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    title: "Lose",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, "L"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    title: "Goals For",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 13
    }
  }, "GF"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    title: "Goals Against",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }, "GA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    title: "Goals Difference",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, "GD"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    title: "Points",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, "Pts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    title: "Last 5 Matches",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, "Last 5"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 9
    }
  }, allClubs.map((club, i) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OneClub__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: i,
      club: club,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 20
      }
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Standings);

/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"round\":1,\"matches\":[{\"Hull City\":2,\"Leicester City\":1},{\"Burnley\":0,\"Swansea\":1},{\"Crystal Palace\":0,\"West Bromwich Albion\":1},{\"Everton\":1,\"Tottenham Hotspur\":1},{\"Middlesbrough\":1,\"Stoke City\":1},{\"Southampton\":1,\"Watford\":1},{\"Manchester City\":2,\"Sunderland\":1},{\"Bournemouth\":1,\"Manchester United\":3},{\"Arsenal\":3,\"Liverpool\":4},{\"Chelsea\":2,\"West Ham United\":1}]},{\"round\":2,\"matches\":[{\"Manchester United\":2,\"Southampton\":0},{\"Stoke City\":1,\"Manchester City\":4},{\"Burnley\":2,\"Liverpool\":0},{\"Swansea\":0,\"Hull City\":2},{\"Tottenham Hotspur\":1,\"Crystal Palace\":0},{\"Watford\":1,\"Chelsea\":2},{\"West Bromwich Albion\":1,\"Everton\":2},{\"Leicester City\":0,\"Arsenal\":0},{\"Sunderland\":1,\"Middlesbrough\":2},{\"West Ham United\":1,\"Bournemouth\":0}]},{\"round\":3,\"matches\":[{\"Tottenham Hotspur\":1,\"Liverpool\":1},{\"Chelsea\":3,\"Burnley\":0},{\"Crystal Palace\":1,\"Bournemouth\":1},{\"Everton\":1,\"Stoke City\":0},{\"Leicester City\":2,\"Swansea\":1},{\"Southampton\":1,\"Sunderland\":1},{\"Watford\":1,\"Arsenal\":3},{\"Hull City\":0,\"Manchester United\":1},{\"West Bromwich Albion\":0,\"Middlesbrough\":0},{\"Manchester City\":3,\"West Ham United\":1}]},{\"round\":4,\"matches\":[{\"Manchester United\":1,\"Manchester City\":2},{\"Bournemouth\":1,\"West Bromwich Albion\":0},{\"Arsenal\":2,\"Southampton\":1},{\"Burnley\":1,\"Hull City\":1},{\"Middlesbrough\":1,\"Crystal Palace\":2},{\"Stoke City\":0,\"Tottenham Hotspur\":4},{\"West Ham United\":2,\"Watford\":4},{\"Liverpool\":4,\"Leicester City\":1},{\"Swansea\":2,\"Chelsea\":2},{\"Sunderland\":0,\"Everton\":3}]},{\"round\":5,\"matches\":[{\"Chelsea\":1,\"Liverpool\":2},{\"Hull City\":1,\"Arsenal\":4},{\"Leicester City\":3,\"Burnley\":0},{\"Manchester City\":4,\"Bournemouth\":0},{\"West Bromwich Albion\":4,\"West Ham United\":2},{\"Everton\":3,\"Middlesbrough\":1},{\"Watford\":3,\"Manchester United\":1},{\"Crystal Palace\":4,\"Stoke City\":1},{\"Southampton\":1,\"Swansea\":0},{\"Tottenham Hotspur\":1,\"Sunderland\":0}]},{\"round\":6,\"matches\":[{\"Manchester United\":4,\"Leicester City\":1},{\"Bournemouth\":1,\"Everton\":0},{\"Liverpool\":5,\"Hull City\":1},{\"Middlesbrough\":1,\"Tottenham Hotspur\":2},{\"Stoke City\":1,\"West Bromwich Albion\":1},{\"Sunderland\":2,\"Crystal Palace\":3},{\"Swansea\":1,\"Manchester City\":3},{\"Arsenal\":3,\"Chelsea\":0},{\"West Ham United\":0,\"Southampton\":3},{\"Burnley\":2,\"Watford\":0}]},{\"round\":7,\"matches\":[{\"Everton\":1,\"Crystal Palace\":1},{\"Swansea\":1,\"Liverpool\":2},{\"Hull City\":0,\"Chelsea\":2},{\"Sunderland\":1,\"West Bromwich Albion\":1},{\"Watford\":2,\"Bournemouth\":2},{\"West Ham United\":1,\"Middlesbrough\":1},{\"Manchester United\":1,\"Stoke City\":1},{\"Leicester City\":0,\"Southampton\":0},{\"Tottenham Hotspur\":2,\"Manchester City\":0},{\"Burnley\":0,\"Arsenal\":1}]},{\"round\":8,\"matches\":[{\"Chelsea\":3,\"Leicester City\":0},{\"Bournemouth\":6,\"Hull City\":1},{\"Arsenal\":3,\"Swansea\":2},{\"Manchester City\":1,\"Everton\":1},{\"Stoke City\":2,\"Sunderland\":0},{\"West Bromwich Albion\":1,\"Tottenham Hotspur\":1},{\"Crystal Palace\":0,\"West Ham United\":1},{\"Middlesbrough\":0,\"Watford\":1},{\"Southampton\":3,\"Burnley\":1},{\"Liverpool\":0,\"Manchester United\":0}]},{\"round\":9,\"matches\":[{\"Bournemouth\":0,\"Tottenham Hotspur\":0},{\"Arsenal\":0,\"Middlesbrough\":0},{\"Burnley\":2,\"Everton\":1},{\"Chelsea\":4,\"Manchester United\":0},{\"Hull City\":0,\"Stoke City\":2},{\"Leicester City\":3,\"Crystal Palace\":1},{\"Liverpool\":2,\"West Bromwich Albion\":1},{\"Manchester City\":1,\"Southampton\":1},{\"Swansea\":0,\"Watford\":0},{\"West Ham United\":1,\"Sunderland\":0}]},{\"round\":10,\"matches\":[{\"Crystal Palace\":2,\"Liverpool\":4},{\"Everton\":2,\"West Ham United\":0},{\"Manchester United\":0,\"Burnley\":0},{\"Middlesbrough\":2,\"Bournemouth\":0},{\"Southampton\":0,\"Chelsea\":2},{\"Stoke City\":3,\"Swansea\":1},{\"Sunderland\":1,\"Arsenal\":4},{\"Tottenham Hotspur\":1,\"Leicester City\":1},{\"Watford\":1,\"Hull City\":0},{\"West Bromwich Albion\":0,\"Manchester City\":4}]},{\"round\":11,\"matches\":[{\"Bournemouth\":1,\"Sunderland\":2},{\"Arsenal\":1,\"Tottenham Hotspur\":1},{\"Burnley\":3,\"Crystal Palace\":2},{\"Chelsea\":5,\"Everton\":0},{\"Hull City\":2,\"Southampton\":1},{\"Leicester City\":1,\"West Bromwich Albion\":2},{\"Liverpool\":6,\"Watford\":1},{\"Manchester City\":1,\"Middlesbrough\":1},{\"Swansea\":1,\"Manchester United\":3},{\"West Ham United\":1,\"Stoke City\":1}]},{\"round\":12,\"matches\":[{\"Crystal Palace\":1,\"Manchester City\":2},{\"Everton\":1,\"Swansea\":1},{\"Manchester United\":1,\"Arsenal\":1},{\"Middlesbrough\":0,\"Chelsea\":1},{\"Southampton\":0,\"Liverpool\":0},{\"Stoke City\":0,\"Bournemouth\":1},{\"Sunderland\":3,\"Hull City\":0},{\"Tottenham Hotspur\":3,\"West Ham United\":2},{\"Watford\":2,\"Leicester City\":1},{\"West Bromwich Albion\":4,\"Burnley\":0}]},{\"round\":13,\"matches\":[{\"Burnley\":1,\"Manchester City\":2},{\"Chelsea\":2,\"Tottenham Hotspur\":1},{\"Hull City\":1,\"West Bromwich Albion\":1},{\"Leicester City\":2,\"Middlesbrough\":2},{\"Liverpool\":2,\"Sunderland\":0},{\"Swansea\":5,\"Crystal Palace\":4},{\"Watford\":0,\"Stoke City\":1},{\"Arsenal\":3,\"Bournemouth\":1},{\"Manchester United\":1,\"West Ham United\":1},{\"Southampton\":1,\"Everton\":0}]},{\"round\":14,\"matches\":[{\"Crystal Palace\":3,\"Southampton\":0},{\"Manchester City\":1,\"Chelsea\":3},{\"Stoke City\":2,\"Burnley\":0},{\"Sunderland\":2,\"Leicester City\":1},{\"Tottenham Hotspur\":5,\"Swansea\":0},{\"West Bromwich Albion\":3,\"Watford\":1},{\"West Ham United\":1,\"Arsenal\":5},{\"Bournemouth\":4,\"Liverpool\":3},{\"Everton\":1,\"Manchester United\":1},{\"Middlesbrough\":1,\"Hull City\":0}]},{\"round\":15,\"matches\":[{\"Arsenal\":3,\"Stoke City\":1},{\"Burnley\":3,\"Bournemouth\":2},{\"Hull City\":3,\"Crystal Palace\":3},{\"Leicester City\":4,\"Manchester City\":2},{\"Swansea\":3,\"Sunderland\":0},{\"Watford\":3,\"Everton\":2},{\"Chelsea\":1,\"West Bromwich Albion\":0},{\"Manchester United\":1,\"Tottenham Hotspur\":0},{\"Southampton\":1,\"Middlesbrough\":0},{\"Liverpool\":2,\"West Ham United\":2}]},{\"round\":16,\"matches\":[{\"Bournemouth\":1,\"Leicester City\":0},{\"Everton\":2,\"Arsenal\":1},{\"Crystal Palace\":1,\"Manchester United\":2},{\"Middlesbrough\":0,\"Liverpool\":3},{\"Sunderland\":0,\"Chelsea\":1},{\"West Bromwich Albion\":3,\"Swansea\":1},{\"West Ham United\":1,\"Burnley\":0},{\"Manchester City\":2,\"Watford\":0},{\"Stoke City\":0,\"Southampton\":0},{\"Tottenham Hotspur\":3,\"Hull City\":0}]},{\"round\":17,\"matches\":[{\"Crystal Palace\":0,\"Chelsea\":1},{\"Middlesbrough\":3,\"Swansea\":0},{\"Stoke City\":2,\"Leicester City\":2},{\"Sunderland\":1,\"Watford\":0},{\"West Bromwich Albion\":0,\"Manchester United\":2},{\"West Ham United\":1,\"Hull City\":0},{\"Bournemouth\":1,\"Southampton\":3},{\"Manchester City\":2,\"Arsenal\":1},{\"Tottenham Hotspur\":2,\"Burnley\":1},{\"Everton\":0,\"Liverpool\":1}]},{\"round\":18,\"matches\":[{\"Arsenal\":1,\"West Bromwich Albion\":0},{\"Burnley\":1,\"Middlesbrough\":0},{\"Chelsea\":3,\"Bournemouth\":0},{\"Hull City\":0,\"Manchester City\":3},{\"Leicester City\":0,\"Everton\":2},{\"Manchester United\":3,\"Sunderland\":1},{\"Swansea\":1,\"West Ham United\":4},{\"Watford\":1,\"Crystal Palace\":1},{\"Liverpool\":4,\"Stoke City\":1},{\"Southampton\":1,\"Tottenham Hotspur\":4}]},{\"round\":19,\"matches\":[{\"Hull City\":2,\"Everton\":2},{\"Burnley\":4,\"Sunderland\":1},{\"Chelsea\":4,\"Stoke City\":2},{\"Leicester City\":1,\"West Ham United\":0},{\"Liverpool\":1,\"Manchester City\":0},{\"Manchester United\":2,\"Middlesbrough\":1},{\"Southampton\":1,\"West Bromwich Albion\":2},{\"Swansea\":0,\"Bournemouth\":3},{\"Watford\":1,\"Tottenham Hotspur\":4},{\"Arsenal\":2,\"Crystal Palace\":0}]},{\"round\":20,\"matches\":[{\"Bournemouth\":3,\"Arsenal\":3},{\"Crystal Palace\":1,\"Swansea\":2},{\"Everton\":3,\"Southampton\":0},{\"Manchester City\":2,\"Burnley\":1},{\"Middlesbrough\":0,\"Leicester City\":0},{\"Stoke City\":2,\"Watford\":0},{\"Sunderland\":2,\"Liverpool\":2},{\"Tottenham Hotspur\":2,\"Chelsea\":0},{\"West Bromwich Albion\":3,\"Hull City\":1},{\"West Ham United\":0,\"Manchester United\":2}]},{\"round\":21,\"matches\":[{\"Burnley\":1,\"Southampton\":0},{\"Everton\":4,\"Manchester City\":0},{\"Hull City\":3,\"Bournemouth\":1},{\"Leicester City\":0,\"Chelsea\":3},{\"Manchester United\":1,\"Liverpool\":1},{\"Sunderland\":1,\"Stoke City\":3},{\"Swansea\":0,\"Arsenal\":4},{\"Tottenham Hotspur\":4,\"West Bromwich Albion\":0},{\"Watford\":0,\"Middlesbrough\":0},{\"West Ham United\":3,\"Crystal Palace\":0}]},{\"round\":22,\"matches\":[{\"Bournemouth\":2,\"Watford\":2},{\"Arsenal\":2,\"Burnley\":1},{\"Chelsea\":2,\"Hull City\":0},{\"Crystal Palace\":0,\"Everton\":1},{\"Liverpool\":2,\"Swansea\":3},{\"Manchester City\":2,\"Tottenham Hotspur\":2},{\"Middlesbrough\":1,\"West Ham United\":3},{\"Southampton\":3,\"Leicester City\":0},{\"Stoke City\":1,\"Manchester United\":1},{\"West Bromwich Albion\":2,\"Sunderland\":0}]},{\"round\":23,\"matches\":[{\"Bournemouth\":0,\"Crystal Palace\":2},{\"Arsenal\":1,\"Watford\":2},{\"Burnley\":1,\"Leicester City\":0},{\"Manchester United\":0,\"Hull City\":0},{\"Middlesbrough\":1,\"West Bromwich Albion\":1},{\"Sunderland\":0,\"Tottenham Hotspur\":0},{\"Swansea\":2,\"Southampton\":1},{\"West Ham United\":0,\"Manchester City\":4},{\"Liverpool\":1,\"Chelsea\":1},{\"Stoke City\":1,\"Everton\":1}]},{\"round\":24,\"matches\":[{\"Chelsea\":3,\"Arsenal\":1},{\"Crystal Palace\":0,\"Sunderland\":4},{\"Everton\":6,\"Bournemouth\":3},{\"Hull City\":2,\"Liverpool\":0},{\"Southampton\":1,\"West Ham United\":3},{\"Tottenham Hotspur\":1,\"Middlesbrough\":0},{\"Watford\":2,\"Burnley\":1},{\"West Bromwich Albion\":1,\"Stoke City\":0},{\"Manchester City\":2,\"Swansea\":1},{\"Leicester City\":0,\"Manchester United\":3}]},{\"round\":25,\"matches\":[{\"Arsenal\":2,\"Hull City\":0},{\"Liverpool\":2,\"Tottenham Hotspur\":0},{\"Manchester United\":2,\"Watford\":0},{\"Middlesbrough\":0,\"Everton\":0},{\"Stoke City\":1,\"Crystal Palace\":0},{\"Sunderland\":0,\"Southampton\":4},{\"West Ham United\":2,\"West Bromwich Albion\":2},{\"Burnley\":1,\"Chelsea\":1},{\"Swansea\":2,\"Leicester City\":0},{\"Bournemouth\":0,\"Manchester City\":2}]},{\"round\":26,\"matches\":[{\"Chelsea\":3,\"Swansea\":1},{\"Crystal Palace\":1,\"Middlesbrough\":0},{\"Everton\":2,\"Sunderland\":0},{\"Hull City\":1,\"Burnley\":1},{\"Leicester City\":3,\"Liverpool\":1},{\"Manchester City\":0,\"Manchester United\":0},{\"Southampton\":0,\"Arsenal\":2},{\"Tottenham Hotspur\":4,\"Stoke City\":0},{\"Watford\":1,\"West Ham United\":1},{\"West Bromwich Albion\":2,\"Bournemouth\":1}]},{\"round\":27,\"matches\":[{\"Leicester City\":3,\"Hull City\":1},{\"Liverpool\":3,\"Arsenal\":1},{\"Manchester United\":1,\"Bournemouth\":1},{\"Stoke City\":2,\"Middlesbrough\":0},{\"Sunderland\":0,\"Manchester City\":2},{\"Swansea\":3,\"Burnley\":2},{\"Tottenham Hotspur\":3,\"Everton\":2},{\"Watford\":3,\"Southampton\":4},{\"West Bromwich Albion\":0,\"Crystal Palace\":2},{\"West Ham United\":1,\"Chelsea\":2}]},{\"round\":28,\"matches\":[{\"Bournemouth\":3,\"West Ham United\":2},{\"Arsenal\":1,\"Leicester City\":0},{\"Liverpool\":2,\"Burnley\":1},{\"Chelsea\":4,\"Watford\":3},{\"Everton\":3,\"West Bromwich Albion\":0},{\"Hull City\":2,\"Swansea\":1},{\"Manchester City\":0,\"Stoke City\":0},{\"Middlesbrough\":1,\"Sunderland\":0},{\"Southampton\":0,\"Manchester United\":0},{\"Crystal Palace\":0,\"Tottenham Hotspur\":1}]},{\"round\":29,\"matches\":[{\"Bournemouth\":2,\"Swansea\":0},{\"Crystal Palace\":1,\"Watford\":0},{\"Everton\":4,\"Hull City\":0},{\"Manchester City\":1,\"Liverpool\":1},{\"Middlesbrough\":1,\"Manchester United\":3},{\"Stoke City\":1,\"Chelsea\":2},{\"Sunderland\":0,\"Burnley\":0},{\"Tottenham Hotspur\":2,\"Southampton\":1},{\"West Bromwich Albion\":3,\"Arsenal\":1},{\"West Ham United\":2,\"Leicester City\":3}]},{\"round\":30,\"matches\":[{\"Arsenal\":2,\"Manchester City\":2},{\"Burnley\":0,\"Tottenham Hotspur\":2},{\"Chelsea\":1,\"Crystal Palace\":2},{\"Hull City\":2,\"West Ham United\":1},{\"Leicester City\":2,\"Stoke City\":0},{\"Liverpool\":3,\"Everton\":1},{\"Manchester United\":0,\"West Bromwich Albion\":0},{\"Southampton\":0,\"Bournemouth\":0},{\"Swansea\":0,\"Middlesbrough\":0},{\"Watford\":1,\"Sunderland\":0}]},{\"round\":31,\"matches\":[{\"Burnley\":1,\"Stoke City\":0},{\"Leicester City\":2,\"Sunderland\":0},{\"Manchester United\":1,\"Everton\":1},{\"Watford\":2,\"West Bromwich Albion\":0},{\"Chelsea\":2,\"Manchester City\":1},{\"Liverpool\":2,\"Bournemouth\":2},{\"Southampton\":3,\"Crystal Palace\":1},{\"Hull City\":4,\"Middlesbrough\":2},{\"Arsenal\":3,\"West Ham United\":0},{\"Swansea\":1,\"Tottenham Hotspur\":3}]},{\"round\":32,\"matches\":[{\"Bournemouth\":1,\"Chelsea\":3},{\"Crystal Palace\":3,\"Arsenal\":0},{\"Everton\":4,\"Leicester City\":2},{\"Manchester City\":3,\"Hull City\":1},{\"Middlesbrough\":0,\"Burnley\":0},{\"Stoke City\":1,\"Liverpool\":2},{\"Sunderland\":0,\"Manchester United\":3},{\"Tottenham Hotspur\":4,\"Watford\":0},{\"West Bromwich Albion\":0,\"Southampton\":1},{\"West Ham United\":1,\"Swansea\":0}]},{\"round\":33,\"matches\":[{\"Crystal Palace\":2,\"Leicester City\":2},{\"Everton\":3,\"Burnley\":1},{\"Manchester United\":2,\"Chelsea\":0},{\"Middlesbrough\":1,\"Arsenal\":2},{\"Southampton\":0,\"Manchester City\":3},{\"Stoke City\":3,\"Hull City\":1},{\"Sunderland\":2,\"West Ham United\":2},{\"Tottenham Hotspur\":4,\"Bournemouth\":0},{\"Watford\":1,\"Swansea\":0},{\"West Bromwich Albion\":0,\"Liverpool\":1}]},{\"round\":34,\"matches\":[{\"Bournemouth\":4,\"Middlesbrough\":0},{\"Arsenal\":2,\"Sunderland\":0},{\"Burnley\":0,\"Manchester United\":2},{\"Chelsea\":4,\"Southampton\":2},{\"Hull City\":2,\"Watford\":0},{\"Leicester City\":1,\"Tottenham Hotspur\":6},{\"Liverpool\":1,\"Crystal Palace\":2},{\"Manchester City\":3,\"West Bromwich Albion\":1},{\"Swansea\":2,\"Stoke City\":0},{\"West Ham United\":0,\"Everton\":0}]},{\"round\":35,\"matches\":[{\"Crystal Palace\":0,\"Burnley\":2},{\"Everton\":0,\"Chelsea\":3},{\"Manchester United\":1,\"Swansea\":1},{\"Middlesbrough\":2,\"Manchester City\":2},{\"Southampton\":0,\"Hull City\":0},{\"Stoke City\":0,\"West Ham United\":0},{\"Sunderland\":0,\"Bournemouth\":1},{\"Tottenham Hotspur\":2,\"Arsenal\":0},{\"Watford\":0,\"Liverpool\":1},{\"West Bromwich Albion\":0,\"Leicester City\":1}]},{\"round\":36,\"matches\":[{\"Bournemouth\":2,\"Stoke City\":2},{\"Arsenal\":2,\"Manchester United\":0},{\"Burnley\":2,\"West Bromwich Albion\":2},{\"Chelsea\":3,\"Middlesbrough\":0},{\"Hull City\":0,\"Sunderland\":2},{\"Leicester City\":3,\"Watford\":0},{\"Liverpool\":0,\"Southampton\":0},{\"Manchester City\":5,\"Crystal Palace\":0},{\"Swansea\":1,\"Everton\":0},{\"West Ham United\":1,\"Tottenham Hotspur\":0}]},{\"round\":37,\"matches\":[{\"Bournemouth\":2,\"Burnley\":1},{\"Crystal Palace\":4,\"Hull City\":0},{\"Everton\":1,\"Watford\":0},{\"Manchester City\":2,\"Leicester City\":1},{\"Middlesbrough\":1,\"Southampton\":2},{\"Stoke City\":1,\"Arsenal\":4},{\"Sunderland\":0,\"Swansea\":2},{\"Tottenham Hotspur\":2,\"Manchester United\":1},{\"West Bromwich Albion\":0,\"Chelsea\":1},{\"West Ham United\":0,\"Liverpool\":4}]},{\"round\":38,\"matches\":[{\"Arsenal\":3,\"Everton\":1},{\"Burnley\":1,\"West Ham United\":2},{\"Chelsea\":5,\"Sunderland\":1},{\"Hull City\":1,\"Tottenham Hotspur\":7},{\"Leicester City\":1,\"Bournemouth\":1},{\"Liverpool\":3,\"Middlesbrough\":0},{\"Manchester United\":2,\"Crystal Palace\":0},{\"Southampton\":0,\"Stoke City\":1},{\"Swansea\":2,\"West Bromwich Albion\":1},{\"Watford\":0,\"Manchester City\":5}]}]");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\User\\Documents\\CODE\\Infobip Nogomet\\premiership\\src\\index.js";






react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
})), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\User\Documents\CODE\Infobip Nogomet\premiership\node_modules\webpack\hot\dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! C:\Users\User\Documents\CODE\Infobip Nogomet\premiership\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\Users\User\Documents\CODE\Infobip Nogomet\premiership\src\index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map