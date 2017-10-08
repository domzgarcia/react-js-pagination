"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}}(),_react=require("react"),_react2=_interopRequireDefault(_react),_propTypes=require("prop-types"),_propTypes2=_interopRequireDefault(_propTypes),_classnames=require("classnames"),_classnames2=_interopRequireDefault(_classnames),Page=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return _inherits(t,_react.Component),_createClass(t,[{key:"handleClick",value:function(e){var t=this.props,r=t.isDisabled,a=t.pageNumber;e.preventDefault(),r||this.props.onClick(a)}},{key:"render",value:function(){var e,t=this.props,r=t.pageText,a=(t.pageNumber,t.activeClass),n=t.itemClass,s=t.linkClass,i=t.activeLinkClass,o=t.disabledClass,l=t.isActive,c=t.isDisabled,u=(0,_classnames2.default)(n,(e={},_defineProperty(e,a,l),_defineProperty(e,o,c),e)),p=(0,_classnames2.default)(s,_defineProperty({},i,l));return _react2.default.createElement("li",{className:u,onClick:this.handleClick.bind(this)},_react2.default.createElement("a",{className:p,href:"#"},r))}}]),t}();Page.defaultProps={activeClass:"active",disabledClass:"disabled",itemClass:void 0,linkClass:void 0,activeLinkCLass:void 0,isActive:!1,isDisabled:!1},exports.default=Page;