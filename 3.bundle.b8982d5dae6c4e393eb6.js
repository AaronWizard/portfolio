(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{83:function(e,t,n){"use strict";var r=n(88);function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var i=/([A-Z])/g;var o=/^ms-/;function c(e){return function(e){return e.replace(i,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(c(t))||a(e).getPropertyValue(c(t));Object.keys(t).forEach((function(a){var i=t[a];i||0===i?!function(e){return!(!e||!s.test(e))}(a)?n+=c(a)+": "+i+";":r+=a+"("+i+") ":e.style.removeProperty(c(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},84:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},85:function(e,t,n){"use strict";var r=n(84),a=n(83),i=n(89),o=r.a&&"ontransitionend"in window;function c(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=Object(i.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}t.a=function(e,t,n){return o?(null==n&&(r=e,s=Object(a.a)(r,"transitionDuration")||"",u=-1===s.indexOf("ms")?1e3:1,n=parseFloat(s)*u||0),c(e,n),Object(i.a)(e,"transitionend",t)):c(e,0,0);var r,s,u}},86:function(e,t,n){"use strict";function r(e){e.offsetHeight}n.d(t,"a",(function(){return r}))},87:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(10),o=n.n(i),c=n(90),s={background:"lightgrey",padding:"1em",borderRadius:"4px"},u={height:"400px",display:"block",margin:"auto"},l=function(e){return"images/".concat(e)},d=function(e){var t=e.images;return a.a.createElement(c.a,{style:s},t.map((function(e,t){return a.a.createElement(c.a.Item,{key:t},a.a.createElement("a",{href:l(e),target:"_blank",rel:"noreferrer noopener"},a.a.createElement("img",{style:u,src:l(e)})))})))};d.propTypes={images:o.a.array.isRequired},t.a=d},88:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},89:function(e,t,n){"use strict";var r=n(84),a=!1,i=!1;try{var o={get passive(){return a=!0},get once(){return i=a=!0}};r.a&&(window.addEventListener("test",o,o),window.removeEventListener("test",o,!0))}catch(e){}var c=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!i){var o=r.once,c=r.capture,s=n;!i&&o&&(s=n.__once||function e(r){this.removeEventListener(t,e,c),n.call(this,r)},n.__once=s),e.addEventListener(t,s,a?r:c)}e.addEventListener(t,n,r)};var s=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return c(e,t,n,r),function(){s(e,t,n,r)}}},90:function(e,t,n){"use strict";var r=n(1),a=n(2),i=n(7),o=n(3),c=n.n(o),s=n(83),u=n(85),l=n(0),d=n.n(l),v=n(24),f=n(11),p=Object(f.a)("carousel-caption",{Component:"div"}),h=Object(f.a)("carousel-item");var m=n(25),y=n(4),b=n(86),x=function(e){return d.a.Children.toArray(e).filter(d.a.isValidElement).length},E={slide:!0,fade:!1,interval:5e3,keyboard:!0,pauseOnHover:!0,wrap:!0,indicators:!0,controls:!0,activeIndex:0,prevIcon:d.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:d.a.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next",touch:!0},g=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).state={prevClasses:"",currentClasses:"active",touchStartX:0},t.isUnmounted=!1,t.carousel=d.a.createRef(),t.handleTouchStart=function(e){t.setState({touchStartX:e.changedTouches[0].screenX})},t.handleTouchEnd=function(e){Math.abs(e.changedTouches[0].screenX-t.state.touchStartX)<40||(e.changedTouches[0].screenX<t.state.touchStartX?t.handleNext(e):t.handlePrev(e))},t.handleSlideEnd=function(){var e=t._pendingIndex;t._isSliding=!1,t._pendingIndex=null,null!=e?t.to(e):t.cycle()},t.handleMouseOut=function(){t.cycle()},t.handleMouseOver=function(){t.props.pauseOnHover&&t.pause()},t.handleKeyDown=function(e){if(!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":e.preventDefault(),t.handlePrev(e);break;case"ArrowRight":e.preventDefault(),t.handleNext(e)}},t.handleNextWhenVisible=function(){t.isUnmounted||document.hidden||"hidden"===Object(s.a)(t.carousel.current,"visibility")||t.handleNext()},t.handleNext=function(e){if(!t._isSliding){var n=t.props,r=n.wrap,a=n.activeIndex+1;if(a>x(t.props.children)-1){if(!r)return;a=0}t.select(a,e,"next")}},t.handlePrev=function(e){if(!t._isSliding){var n=t.props,r=n.wrap,a=n.activeIndex-1;if(a<0){if(!r)return;a=x(t.props.children)-1}t.select(a,e,"prev")}},t}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.cycle()},t.getDerivedStateFromProps=function(e,t){var n=t.activeIndex;if(e.activeIndex!==n){var r=x(e.children)-1,a=Math.max(0,Math.min(e.activeIndex,r));return{direction:0===a&&n>=r||n<=a?"next":"prev",previousActiveIndex:n,activeIndex:a}}return null},n.componentDidUpdate=function(e,t){var n=this,r=this.props,a=r.bsPrefix,i=r.slide,o=r.onSlideEnd;if(i&&this.state.activeIndex!==t.activeIndex&&!this._isSliding){var s,l,d=this.state,v=d.activeIndex,f=d.direction;"next"===f?(s=a+"-item-next",l=a+"-item-left"):"prev"===f&&(s=a+"-item-prev",l=a+"-item-right"),this._isSliding=!0,this.pause(),this.safeSetState({prevClasses:"active",currentClasses:s},(function(){var e=n.carousel.current.children[v];Object(b.a)(e),n.safeSetState({prevClasses:c()("active",l),currentClasses:c()(s,l)},(function(){return Object(u.a)(e,(function(){n.safeSetState({prevClasses:"",currentClasses:"active"},n.handleSlideEnd),o&&o()}))}))}))}},n.componentWillUnmount=function(){clearTimeout(this.timeout),this.isUnmounted=!0},n.safeSetState=function(e,t){var n=this;this.isUnmounted||this.setState(e,(function(){return!n.isUnmounted&&t()}))},n.pause=function(){this._isPaused=!0,clearInterval(this._interval),this._interval=null},n.cycle=function(){this._isPaused=!1,clearInterval(this._interval),this._interval=null,this.props.interval&&!this._isPaused&&(this._interval=setInterval(document.visibilityState?this.handleNextWhenVisible:this.handleNext,this.props.interval))},n.to=function(e,t){var n=this.props.children;e<0||e>x(n)-1||(this._isSliding?this._pendingIndex=e:this.select(e,t))},n.select=function(e,t,n){var r=this;clearTimeout(this.selectThrottle),t&&t.persist&&t.persist(),this.selectThrottle=setTimeout((function(){clearTimeout(r.timeout);var a=r.props,i=a.activeIndex,o=a.onSelect;e===i||r._isSliding||r.isUnmounted||o(e,n||(e<i?"prev":"next"),t)}),50)},n.renderControls=function(e){var t=this.props.bsPrefix,n=e.wrap,r=e.children,a=e.activeIndex,i=e.prevIcon,o=e.nextIcon,c=e.prevLabel,s=e.nextLabel,u=x(r);return[(n||0!==a)&&d.a.createElement(m.a,{key:"prev",className:t+"-control-prev",onClick:this.handlePrev},i,c&&d.a.createElement("span",{className:"sr-only"},c)),(n||a!==u-1)&&d.a.createElement(m.a,{key:"next",className:t+"-control-next",onClick:this.handleNext},o,s&&d.a.createElement("span",{className:"sr-only"},s))]},n.renderIndicators=function(e,t){var n=this,r=this.props.bsPrefix,a=[];return function(e,t){var n=0;d.a.Children.forEach(e,(function(e){d.a.isValidElement(e)&&t(e,n++)}))}(e,(function(e,r){a.push(d.a.createElement("li",{key:r,className:r===t?"active":null,onClick:function(e){return n.to(r,e)}})," ")})),d.a.createElement("ol",{className:r+"-indicators"},a)},n.render=function(){var e=this.props,t=e.as,n=void 0===t?"div":t,i=e.bsPrefix,o=e.slide,s=e.fade,u=e.indicators,v=e.controls,f=e.wrap,p=e.touch,h=e.prevIcon,m=e.prevLabel,y=e.nextIcon,b=e.nextLabel,x=e.className,E=e.children,g=e.keyboard,w=(e.activeIndex,e.pauseOnHover,e.interval,e.onSelect,e.onSlideEnd,Object(a.a)(e,["as","bsPrefix","slide","fade","indicators","controls","wrap","touch","prevIcon","prevLabel","nextIcon","nextLabel","className","children","keyboard","activeIndex","pauseOnHover","interval","onSelect","onSlideEnd"])),S=this.state,I=S.activeIndex,O=S.previousActiveIndex,_=S.prevClasses,k=S.currentClasses;return d.a.createElement(n,Object(r.a)({onTouchStart:p?this.handleTouchStart:void 0,onTouchEnd:p?this.handleTouchEnd:void 0},w,{className:c()(x,i,o&&"slide",s&&i+"-fade"),onKeyDown:g?this.handleKeyDown:void 0,onMouseOver:this.handleMouseOver,onMouseOut:this.handleMouseOut}),u&&this.renderIndicators(E,I),d.a.createElement("div",{className:i+"-inner",ref:this.carousel},function(e,t){var n=0;return d.a.Children.map(e,(function(e){return d.a.isValidElement(e)?t(e,n++):e}))}(E,(function(e,t){var n=t===I,r=t===O;return Object(l.cloneElement)(e,{className:c()(e.props.className,n&&k,r&&_)})}))),v&&this.renderControls({wrap:f,children:E,activeIndex:I,prevIcon:h,prevLabel:m,nextIcon:y,nextLabel:b}))},t}(d.a.Component);g.defaultProps=E;var w=Object(y.a)(Object(v.a)(g,{activeIndex:"onSelect"}),"carousel");w.Caption=p,w.Item=h;t.a=w},99:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(82),o=n(10),c=n.n(o),s=n(17),u=function(e){var t,n,r=e.activity;return a.a.createElement("li",null,r.item,(n=r.subItems)?a.a.createElement("ul",null,n.map((function(e,t){return a.a.createElement("li",{key:t},e)}))):null,(t=r.links)?a.a.createElement("ul",null,t.map((function(e,t){return a.a.createElement("li",{key:t},a.a.createElement(s.a,{url:e,text:e}))}))):null)};u.propTypes={activity:c.a.object.isRequired};var l=u,d=n(87),v=n(23);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=h(this,m(t).call(this))).state={activities:[],images:[]},e}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this;v.a().then((function(t){e.setState({activities:t.activities,images:t.activityImages})}))}},{key:"render",value:function(){return a.a.createElement(i.a,null,a.a.createElement(i.a.Body,null,a.a.createElement("ul",null,this.state.activities.map((function(e,t){return a.a.createElement(l,{key:t,activity:e})}))),a.a.createElement(d.a,{images:this.state.images})))}}])&&p(n.prototype,r),o&&p(n,o),t}(a.a.Component);t.default=b}}]);