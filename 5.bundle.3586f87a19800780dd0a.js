(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{96:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(82),i=n(10),c=n.n(i),l=n(17),u=function(t){var e=t.contactInfo;return o.a.createElement("address",null,e.street1,", ",e.street2,o.a.createElement("br",null),e.city,", ",e.province,", ",e.postalCode,o.a.createElement("br",null),o.a.createElement("a",{href:"tel:".concat(e.mobilePhone)},e.mobilePhone),o.a.createElement("br",null),o.a.createElement("a",{href:"mailto:".concat(e.email)},e.email),o.a.createElement("br",null),o.a.createElement(l.a,{url:e.linkedInURL,text:e.linkedInURL}))};u.propTypes={contactInfo:c.a.object.isRequired};var f=u,s=function(t){var e=t.thirdPartyCredits;return o.a.createElement("div",null,"This site was built using the following technologies:",o.a.createElement("ul",null,e.map((function(t,e){return o.a.createElement("li",{key:e},o.a.createElement(l.a,{url:t.url,text:t.name}))}))))};s.propTypes={thirdPartyCredits:c.a.array.isRequired};var p=s,y=n(23);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(t,e){return!e||"object"!==h(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function E(t,e){return(E=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var v=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(t=m(this,d(e).call(this))).state={profileText:"",contactInfo:null,thirdPartyCredits:[],githubURL:""},t}var n,r,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&E(t,e)}(e,t),n=e,(r=[{key:"contactInfo",value:function(){var t=null;return this.state.contactInfo&&(t=o.a.createElement(f,{contactInfo:this.state.contactInfo})),t}},{key:"componentDidMount",value:function(){var t=this;y.a().then((function(e){t.setState({profileText:e.profile,contactInfo:e.contactInfo,thirdPartyCredits:e.thirdPartyTechnologies,githubURL:e.github})}))}},{key:"render",value:function(){return o.a.createElement(a.a,null,o.a.createElement(a.a.Body,null,o.a.createElement("p",{className:"lead"},this.state.profileText),this.contactInfo(),o.a.createElement(p,{thirdPartyCredits:this.state.thirdPartyCredits}),o.a.createElement("p",null,"The source code is available on ",o.a.createElement(l.a,{url:this.state.githubURL,text:"Github"}),".")))}}])&&b(n.prototype,r),i&&b(n,i),e}(o.a.Component);e.default=v}}]);