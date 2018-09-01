!function(t){"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?module.exports=t():window.noUiSlider=t()}(function(){"use strict";function s(t){return null!=t}function K(t){t.preventDefault()}function i(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function Q(t,e,r){0<r&&(et(t,e),setTimeout(function(){rt(t,e)},r))}function Z(t){return Math.max(Math.min(t,100),0)}function tt(t){return Array.isArray(t)?t:[t]}function e(t){var e=(t=String(t)).split(".");return 1<e.length?e[1].length:0}function et(t,e){t.classList?t.classList.add(e):t.className+=" "+e}function rt(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function nt(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:r?t.documentElement.scrollLeft:t.body.scrollLeft,y:e?window.pageYOffset:r?t.documentElement.scrollTop:t.body.scrollTop}}function u(t,e){return 100/(e-t)}function p(t,e){return 100*e/(t[1]-t[0])}function f(t,e){for(var r=1;t>=e[r];)r+=1;return r}function r(t,e,r){if(r>=t.slice(-1)[0])return 100;var n,i,o=f(r,t),a=t[o-1],s=t[o],l=e[o-1],c=e[o];return l+(i=r,p(n=[a,s],n[0]<0?i+Math.abs(n[0]):i-n[0])/u(l,c))}function n(t,e,r,n){if(100===n)return n;var i,o,a=f(n,t),s=t[a-1],l=t[a];return r?(l-s)/2<n-s?l:s:e[a-1]?t[a-1]+(i=n-t[a-1],o=e[a-1],Math.round(i/o)*o):n}function o(t,e,r){var n;if("number"==typeof e&&(e=[e]),!Array.isArray(e))throw new Error("noUiSlider ("+ot+"): 'range' contains invalid value.");if(!i(n="min"===t?0:"max"===t?100:parseFloat(t))||!i(e[0]))throw new Error("noUiSlider ("+ot+"): 'range' value isn't numeric.");r.xPct.push(n),r.xVal.push(e[0]),n?r.xSteps.push(!isNaN(e[1])&&e[1]):isNaN(e[1])||(r.xSteps[0]=e[1]),r.xHighestCompleteStep.push(0)}function a(t,e,r){if(!e)return!0;r.xSteps[t]=p([r.xVal[t],r.xVal[t+1]],e)/u(r.xPct[t],r.xPct[t+1]);var n=(r.xVal[t+1]-r.xVal[t])/r.xNumSteps[t],i=Math.ceil(Number(n.toFixed(3))-1),o=r.xVal[t]+r.xNumSteps[t]*i;r.xHighestCompleteStep[t]=o}function l(t,e,r){this.xPct=[],this.xVal=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.xHighestCompleteStep=[],this.snap=e;var n,i=[];for(n in t)t.hasOwnProperty(n)&&i.push([t[n],n]);for(i.length&&"object"==typeof i[0][0]?i.sort(function(t,e){return t[0][0]-e[0][0]}):i.sort(function(t,e){return t[0]-e[0]}),n=0;n<i.length;n++)o(i[n][1],i[n][0],this);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)a(n,this.xNumSteps[n],this)}function c(t){if("object"==typeof(e=t)&&"function"==typeof e.to&&"function"==typeof e.from)return!0;var e;throw new Error("noUiSlider ("+ot+"): 'format' requires 'to' and 'from' methods.")}function d(t,e){if(!i(e))throw new Error("noUiSlider ("+ot+"): 'step' is not numeric.");t.singleStep=e}function h(t,e){if("object"!=typeof e||Array.isArray(e))throw new Error("noUiSlider ("+ot+"): 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider ("+ot+"): Missing 'min' or 'max' in 'range'.");if(e.min===e.max)throw new Error("noUiSlider ("+ot+"): 'range' 'min' and 'max' cannot be equal.");t.spectrum=new l(e,t.snap,t.singleStep)}function m(t,e){if(e=tt(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider ("+ot+"): 'start' option is incorrect.");t.handles=e.length,t.start=e}function g(t,e){if("boolean"!=typeof(t.snap=e))throw new Error("noUiSlider ("+ot+"): 'snap' option must be a boolean.")}function v(t,e){if("boolean"!=typeof(t.animate=e))throw new Error("noUiSlider ("+ot+"): 'animate' option must be a boolean.")}function b(t,e){if("number"!=typeof(t.animationDuration=e))throw new Error("noUiSlider ("+ot+"): 'animationDuration' option must be a number.")}function S(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider ("+ot+"): 'connect' option doesn't match handle count.");n=e}t.connect=n}function w(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider ("+ot+"): 'orientation' option is invalid.")}}function x(t,e){if(!i(e))throw new Error("noUiSlider ("+ot+"): 'margin' option must be numeric.");if(0!==e&&(t.margin=t.spectrum.getMargin(e),!t.margin))throw new Error("noUiSlider ("+ot+"): 'margin' option is only supported on linear sliders.")}function y(t,e){if(!i(e))throw new Error("noUiSlider ("+ot+"): 'limit' option must be numeric.");if(t.limit=t.spectrum.getMargin(e),!t.limit||t.handles<2)throw new Error("noUiSlider ("+ot+"): 'limit' option is only supported on linear sliders with 2 or more handles.")}function E(t,e){if(!i(e)&&!Array.isArray(e))throw new Error("noUiSlider ("+ot+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!i(e[0])&&!i(e[1]))throw new Error("noUiSlider ("+ot+"): 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){if(Array.isArray(e)||(e=[e,e]),!(t.padding=[t.spectrum.getMargin(e[0]),t.spectrum.getMargin(e[1])])===t.padding[0]||!1===t.padding[1])throw new Error("noUiSlider ("+ot+"): 'padding' option is only supported on linear sliders.");if(t.padding[0]<0||t.padding[1]<0)throw new Error("noUiSlider ("+ot+"): 'padding' option must be a positive number(s).");if(100<=t.padding[0]+t.padding[1])throw new Error("noUiSlider ("+ot+"): 'padding' option must not exceed 100% of the range.")}}function C(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider ("+ot+"): 'direction' option was not recognized.")}}function N(t,e){if("string"!=typeof e)throw new Error("noUiSlider ("+ot+"): 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),a=0<=e.indexOf("hover");if(i){if(2!==t.handles)throw new Error("noUiSlider ("+ot+"): 'fixed' behaviour must be used with 2 handles");x(t,t.start[1]-t.start[0])}t.events={tap:r||o,drag:n,fixed:i,snap:o,hover:a}}function U(t,e){if(!1!==e)if(!0===e){t.tooltips=[];for(var r=0;r<t.handles;r++)t.tooltips.push(!0)}else{if(t.tooltips=tt(e),t.tooltips.length!==t.handles)throw new Error("noUiSlider ("+ot+"): must pass a formatter for all handles.");t.tooltips.forEach(function(t){if("boolean"!=typeof t&&("object"!=typeof t||"function"!=typeof t.to))throw new Error("noUiSlider ("+ot+"): 'tooltips' must be passed a formatter or 'false'.")})}}function P(t,e){c(t.ariaFormat=e)}function A(t,e){c(t.format=e)}function M(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider ("+ot+"): 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function k(t,e){if("object"!=typeof e)throw new Error("noUiSlider ("+ot+"): 'cssClasses' must be an object.");if("string"==typeof t.cssPrefix)for(var r in t.cssClasses={},e)e.hasOwnProperty(r)&&(t.cssClasses[r]=t.cssPrefix+e[r]);else t.cssClasses=e}function it(e){var r={margin:0,limit:0,padding:0,animate:!0,animationDuration:300,ariaFormat:L,format:L},n={step:{r:!1,t:d},start:{r:!0,t:m},connect:{r:!0,t:S},direction:{r:!0,t:C},snap:{r:!1,t:g},animate:{r:!1,t:v},animationDuration:{r:!1,t:b},range:{r:!0,t:h},orientation:{r:!1,t:w},margin:{r:!1,t:x},limit:{r:!1,t:y},padding:{r:!1,t:E},behaviour:{r:!0,t:N},ariaFormat:{r:!1,t:P},format:{r:!1,t:A},tooltips:{r:!1,t:U},cssPrefix:{r:!0,t:M},cssClasses:{r:!0,t:k}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};e.format&&!e.ariaFormat&&(e.ariaFormat=e.format),Object.keys(n).forEach(function(t){if(!s(e[t])&&void 0===i[t]){if(n[t].r)throw new Error("noUiSlider ("+ot+"): '"+t+"' is required.");return!0}n[t].t(r,s(e[t])?e[t]:i[t])}),r.pips=e.pips;var t=document.createElement("div"),o=void 0!==t.style.msTransform,a=void 0!==t.style.transform;r.transformRule=a?"transform":o?"msTransform":"webkitTransform";return r.style=[["left","top"],["right","bottom"]][r.dir][r.ort],r}function V(t,p,o){function f(t,e){var r=_.createElement("div");return e&&et(r,e),t.appendChild(r),r}function s(t,e){return!!e&&f(t,p.cssClasses.connect)}function e(t,e){return!!p.tooltips[e]&&f(t.firstChild,p.cssClasses.tooltip)}function c(e,n,i){function o(t,e){var r=e===p.cssClasses.value,n=r?s:l;return e+" "+(r?c:u)[p.ort]+" "+n[t]}var a=_.createElement("div"),s=[p.cssClasses.valueNormal,p.cssClasses.valueLarge,p.cssClasses.valueSub],l=[p.cssClasses.markerNormal,p.cssClasses.markerLarge,p.cssClasses.markerSub],c=[p.cssClasses.valueHorizontal,p.cssClasses.valueVertical],u=[p.cssClasses.markerHorizontal,p.cssClasses.markerVertical];return et(a,p.cssClasses.pips),et(a,0===p.ort?p.cssClasses.pipsHorizontal:p.cssClasses.pipsVertical),Object.keys(e).forEach(function(t){!function(t,e){e[1]=e[1]&&n?n(e[0],e[1]):e[1];var r=f(a,!1);r.className=o(e[1],p.cssClasses.marker),r.style[p.style]=t+"%",e[1]&&((r=f(a,!1)).className=o(e[1],p.cssClasses.value),r.setAttribute("data-value",e[0]),r.style[p.style]=t+"%",r.innerText=i.to(e[0]))}(t,e[t])}),a}function u(){var t;z&&((t=z).parentElement.removeChild(t),z=null)}function a(t){u();var d,h,m,g,e,r,v,b,S,n=t.mode,i=t.density||1,o=t.filter||!1,a=function(t,e,r){if("range"===t||"steps"===t)return X.xVal;if("count"===t){if(e<2)throw new Error("noUiSlider ("+ot+"): 'values' (>= 2) required for mode 'count'.");var n=e-1,i=100/n;for(e=[];n--;)e[n]=n*i;e.push(100),t="positions"}return"positions"===t?e.map(function(t){return X.fromStepping(r?X.getStep(t):t)}):"values"===t?r?e.map(function(t){return X.fromStepping(X.getStep(X.toStepping(t)))}):e:void 0}(n,t.values||!1,t.stepped||!1),s=(d=i,h=n,m=a,g={},e=X.xVal[0],r=X.xVal[X.xVal.length-1],b=v=!1,S=0,(m=m.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==e&&(m.unshift(e),v=!0),m[m.length-1]!==r&&(m.push(r),b=!0),m.forEach(function(t,e){var r,n,i,o,a,s,l,c,u,p=t,f=m[e+1];if("steps"===h&&(r=X.xNumSteps[e]),r||(r=f-p),!1!==p&&void 0!==f)for(r=Math.max(r,1e-7),n=p;n<=f;n=(n+r).toFixed(7)/1){for(l=(a=(o=X.toStepping(n))-S)/d,u=a/(c=Math.round(l)),i=1;i<=c;i+=1)g[(S+i*u).toFixed(5)]=["x",0];s=-1<m.indexOf(n)?1:"steps"===h?2:0,!e&&v&&(s=0),n===f&&b||(g[o.toFixed(5)]=[n,s]),S=o}}),g),l=t.format||{to:Math.round};return z=I.appendChild(c(s,o,l))}function l(){var t=k.getBoundingClientRect(),e="offset"+["Width","Height"][p.ort];return 0===p.ort?t.width||k[e]:t.height||k[e]}function d(n,i,o,a){var e=function(t){return!!(t=function(t,e,r){var n,i,o=0===t.type.indexOf("touch"),a=0===t.type.indexOf("mouse"),s=0===t.type.indexOf("pointer");if(0===t.type.indexOf("MSPointer")&&(s=!0),o){var l=function(t){return t.target===r||r.contains(t.target)};if("touchstart"===t.type){var c=Array.prototype.filter.call(t.touches,l);if(1<c.length)return!1;n=c[0].pageX,i=c[0].pageY}else{var u=Array.prototype.find.call(t.changedTouches,l);if(!u)return!1;n=u.pageX,i=u.pageY}}return e=e||nt(_),(a||s)&&(n=t.clientX+e.x,i=t.clientY+e.y),t.pageOffset=e,t.points=[n,i],t.cursor=a||s,t}(t,a.pageOffset,a.target||i))&&!(I.hasAttribute("disabled")&&!a.doNotReject)&&(e=I,r=p.cssClasses.tap,!((e.classList?e.classList.contains(r):new RegExp("\\b"+r+"\\b").test(e.className))&&!a.doNotReject)&&!(n===D.start&&void 0!==t.buttons&&1<t.buttons)&&(!a.hover||!t.buttons)&&(T||t.preventDefault(),t.calcPoint=t.points[p.ort],void o(t,a)));var e,r},r=[];return n.split(" ").forEach(function(t){i.addEventListener(t,e,!!T&&{passive:!0}),r.push([t,e])}),r}function h(t){var e,r,n,i,o,a,s=100*(t-(e=k,r=p.ort,n=e.getBoundingClientRect(),i=e.ownerDocument,o=i.documentElement,a=nt(i),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(a.x=0),r?n.top+a.y-o.clientTop:n.left+a.x-o.clientLeft))/l();return s=Z(s),p.dir?100-s:s}function m(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&v(t,e)}function g(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return v(t,e);var r=(p.dir?-1:1)*(t.calcPoint-e.startCalcPoint);E(0<r,100*r/e.baseSize,e.locations,e.handleNumbers)}function v(t,e){e.handle&&(rt(e.handle,p.cssClasses.active),q-=1),e.listeners.forEach(function(t){W.removeEventListener(t[0],t[1])}),0===q&&(rt(I,p.cssClasses.drag),N(),t.cursor&&(G.style.cursor="",G.removeEventListener("selectstart",K))),e.handleNumbers.forEach(function(t){S("change",t),S("set",t),S("end",t)})}function b(t,e){var r;if(1===e.handleNumbers.length){var n=V[e.handleNumbers[0]];if(n.hasAttribute("disabled"))return!1;r=n.children[0],q+=1,et(r,p.cssClasses.active)}t.stopPropagation();var i=[],o=d(D.move,W,g,{target:t.target,handle:r,listeners:i,startCalcPoint:t.calcPoint,baseSize:l(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:R.slice()}),a=d(D.end,W,v,{target:t.target,handle:r,listeners:i,doNotReject:!0,handleNumbers:e.handleNumbers}),s=d("mouseout",W,m,{target:t.target,handle:r,listeners:i,doNotReject:!0,handleNumbers:e.handleNumbers});i.push.apply(i,o.concat(a,s)),t.cursor&&(G.style.cursor=getComputedStyle(t.target).cursor,1<V.length&&et(I,p.cssClasses.drag),G.addEventListener("selectstart",K,!1)),e.handleNumbers.forEach(function(t){S("start",t)})}function r(t){t.stopPropagation();var n,i,o,e=h(t.calcPoint),r=(n=e,o=!(i=100),V.forEach(function(t,e){if(!t.hasAttribute("disabled")){var r=Math.abs(R[e]-n);(r<i||100===r&&100===i)&&(o=e,i=r)}}),o);if(!1===r)return!1;p.events.snap||Q(I,p.cssClasses.tap,p.animationDuration),U(r,e,!0,!0),N(),S("slide",r,!0),S("update",r,!0),S("change",r,!0),S("set",r,!0),p.events.snap&&b(t,{handleNumbers:[r]})}function n(t){var e=h(t.calcPoint),r=X.getStep(e),n=X.fromStepping(r);Object.keys(Y).forEach(function(t){"hover"===t.split(".")[0]&&Y[t].forEach(function(t){t.call(O,n)})})}function i(t,e){Y[t]=Y[t]||[],Y[t].push(e),"update"===t.split(".")[0]&&V.forEach(function(t,e){S("update",e)})}function S(r,n,i){Object.keys(Y).forEach(function(t){var e=t.split(".")[0];r===e&&Y[t].forEach(function(t){t.call(O,$.map(p.format.to),n,$.slice(),i||!1,R.slice())})})}function w(t){return t+"%"}function x(t,e,r,n,i,o){return 1<V.length&&(n&&0<e&&(r=Math.max(r,t[e-1]+p.margin)),i&&e<V.length-1&&(r=Math.min(r,t[e+1]-p.margin))),1<V.length&&p.limit&&(n&&0<e&&(r=Math.min(r,t[e-1]+p.limit)),i&&e<V.length-1&&(r=Math.max(r,t[e+1]-p.limit))),p.padding&&(0===e&&(r=Math.max(r,p.padding[0])),e===V.length-1&&(r=Math.min(r,100-p.padding[1]))),!((r=Z(r=X.getStep(r)))===t[e]&&!o)&&r}function y(t,e){var r=p.ort;return(r?e:t)+", "+(r?t:e)}function E(t,n,r,e){var i=r.slice(),o=[!t,t],a=[t,!t];e=e.slice(),t&&e.reverse(),1<e.length?e.forEach(function(t,e){var r=x(i,t,i[t]+n,o[e],a[e],!1);!1===r?n=0:(n=r-i[t],i[t]=r)}):o=a=[!0];var s=!1;e.forEach(function(t,e){s=U(t,r[t]+n,o[e],a[e])||s}),s&&e.forEach(function(t){S("update",t),S("slide",t)})}function C(t,e){return p.dir?100-t-e:t}function N(){B.forEach(function(t){var e=50<R[t]?-1:1,r=3+(V.length+e*t);V[t].style.zIndex=r})}function U(t,e,r,n){return!1!==(e=x(R,t,e,r,n,!1))&&(function(t,e){R[t]=e,$[t]=X.fromStepping(e);var r="translate("+y(w(C(e,0)-J),"0")+")";V[t].style[p.transformRule]=r,P(t),P(t+1)}(t,e),!0)}function P(t){if(L[t]){var e=0,r=100;0!==t&&(e=R[t-1]),t!==L.length-1&&(r=R[t]);var n=r-e,i="translate("+y(w(C(e,n)),"0")+")",o="scale("+y(n/100,"1")+")";L[t].style[p.transformRule]=i+" "+o}}function A(t,e){var n=tt(t),r=void 0===R[0];e=void 0===e||!!e,p.animate&&!r&&Q(I,p.cssClasses.tap,p.animationDuration),B.forEach(function(t){var e,r;U(t,(e=n[t],r=t,null===e||!1===e||void 0===e?R[r]:("number"==typeof e&&(e=String(e)),e=p.format.from(e),!1===(e=X.toStepping(e))||isNaN(e)?R[r]:e)),!0,!1)}),B.forEach(function(t){U(t,R[t],!0,!0)}),N(),B.forEach(function(t){S("update",t),null!==n[t]&&e&&S("set",t)})}function M(){var t=$.map(p.format.to);return 1===t.length?t[0]:t}var k,V,L,O,z,j,F,H,D=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},T=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),I=t,R=[],B=[],q=0,X=p.spectrum,$=[],Y={},_=t.ownerDocument,W=_.documentElement,G=_.body,J="rtl"===_.dir||1===p.ort?0:100;return et(H=I,p.cssClasses.target),0===p.dir?et(H,p.cssClasses.ltr):et(H,p.cssClasses.rtl),0===p.ort?et(H,p.cssClasses.horizontal):et(H,p.cssClasses.vertical),k=f(H,p.cssClasses.base),function(t,e){var r,n,i,o=f(e,p.cssClasses.connects);V=[],(L=[]).push(s(o,t[0]));for(var a=0;a<p.handles;a++)V.push((r=a,i=void 0,n=f(e,p.cssClasses.origin),(i=f(n,p.cssClasses.handle)).setAttribute("data-handle",r),i.setAttribute("tabindex","0"),i.setAttribute("role","slider"),i.setAttribute("aria-orientation",p.ort?"vertical":"horizontal"),0===r?et(i,p.cssClasses.handleLower):r===p.handles-1&&et(i,p.cssClasses.handleUpper),n)),B[a]=a,L.push(s(o,t[a+1]))}(p.connect,k),(F=p.events).fixed||V.forEach(function(t,e){d(D.start,t.children[0],b,{handleNumbers:[e]})}),F.tap&&d(D.start,k,r,{}),F.hover&&d(D.move,k,n,{hover:!0}),F.drag&&L.forEach(function(t,e){if(!1!==t&&0!==e&&e!==L.length-1){var r=V[e-1],n=V[e],i=[t];et(t,p.cssClasses.draggable),F.fixed&&(i.push(r.children[0]),i.push(n.children[0])),i.forEach(function(t){d(D.start,t,b,{handles:[r,n],handleNumbers:[e-1,e]})})}}),A(p.start),O={destroy:function(){for(var t in p.cssClasses)p.cssClasses.hasOwnProperty(t)&&rt(I,p.cssClasses[t]);for(;I.firstChild;)I.removeChild(I.firstChild);delete I.noUiSlider},steps:function(){return R.map(function(t,e){var r=X.getNearbySteps(t),n=$[e],i=r.thisStep.step,o=null;!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),o=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===t?i=null:0===t&&(o=null);var a=X.countStepDecimals();return null!==i&&!1!==i&&(i=Number(i.toFixed(a))),null!==o&&!1!==o&&(o=Number(o.toFixed(a))),[o,i]})},on:i,off:function(t){var n=t&&t.split(".")[0],i=n&&t.substring(n.length);Object.keys(Y).forEach(function(t){var e=t.split(".")[0],r=t.substring(e.length);n&&n!==e||i&&i!==r||delete Y[t]})},get:M,set:A,reset:function(t){A(p.start,t)},__moveHandles:function(t,e,r){E(t,e,R,r)},options:o,updateOptions:function(e,t){var r=M(),n=["margin","limit","padding","range","animate","snap","step","format"];n.forEach(function(t){void 0!==e[t]&&(o[t]=e[t])});var i=it(o);n.forEach(function(t){void 0!==e[t]&&(p[t]=i[t])}),X=i.spectrum,p.margin=i.margin,p.limit=i.limit,p.padding=i.padding,p.pips&&a(p.pips),R=[],A(e.start||r,t)},target:I,removePips:u,pips:a},p.pips&&a(p.pips),p.tooltips&&(j=V.map(e),i("update",function(t,e,r){if(j[e]){var n=t[e];!0!==p.tooltips[e]&&(n=p.tooltips[e].to(r[e])),j[e].innerHTML=n}})),i("update",function(t,e,a,r,s){B.forEach(function(t){var e=V[t],r=x(R,t,0,!0,!0,!0),n=x(R,t,100,!0,!0,!0),i=s[t],o=p.ariaFormat.to(a[t]);e.children[0].setAttribute("aria-valuemin",r.toFixed(1)),e.children[0].setAttribute("aria-valuemax",n.toFixed(1)),e.children[0].setAttribute("aria-valuenow",i.toFixed(1)),e.children[0].setAttribute("aria-valuetext",o)})}),O}var ot="11.1.0";l.prototype.getMargin=function(t){var e=this.xNumSteps[0];if(e&&t/e%1!=0)throw new Error("noUiSlider ("+ot+"): 'limit', 'margin' and 'padding' must be divisible by step.");return 2===this.xPct.length&&p(this.xVal,t)},l.prototype.toStepping=function(t){return r(this.xVal,this.xPct,t)},l.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n,i=f(r,e),o=t[i-1],a=t[i],s=e[i-1];return n=[o,a],(r-s)*u(s,e[i])*(n[1]-n[0])/100+n[0]}(this.xVal,this.xPct,t)},l.prototype.getStep=function(t){return n(this.xPct,this.xSteps,this.snap,t)},l.prototype.getNearbySteps=function(t){var e=f(t,this.xPct);return{stepBefore:{startValue:this.xVal[e-2],step:this.xNumSteps[e-2],highestStep:this.xHighestCompleteStep[e-2]},thisStep:{startValue:this.xVal[e-1],step:this.xNumSteps[e-1],highestStep:this.xHighestCompleteStep[e-1]},stepAfter:{startValue:this.xVal[e-0],step:this.xNumSteps[e-0],highestStep:this.xHighestCompleteStep[e-0]}}},l.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(e);return Math.max.apply(null,t)},l.prototype.convert=function(t){return this.getStep(this.toStepping(t))};var L={to:function(t){return void 0!==t&&t.toFixed(2)},from:Number};return{version:ot,create:function(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider ("+ot+"): create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider ("+ot+"): Slider was already initialized.");var r=V(t,it(e),e);return t.noUiSlider=r}}}),function(){var t=document.getElementById("price-range-slider"),e=document.getElementById("price-range"),n=document.getElementById("price-range-min"),i=document.getElementById("price-range-max"),r=parseInt(n.value,10),o=parseInt(i.value,10),a=parseInt(e.dataset.min,10),s=parseInt(e.dataset.max,10),l=parseInt(e.dataset.step,10);noUiSlider.create(t,{start:[r,o],connect:!0,range:{min:a,max:s},step:l,tooltips:!0,format:{to:function(t){return"$"+t},from:function(t){return t.replace("$","")}}}),t.noUiSlider.on("update",function(t,e){var r=t[e];e?i.value=r.replace("$",""):n.value=r.replace("$","")});var c=localStorage.shopViewMode||"tile";"tile"!==c&&"line"!==c&&(c="tile");var u=document.querySelector("body"),p=document.querySelector("#navigation-tile"),f=document.querySelector("#navigation-line");function d(){switch("SPAN"===this.tagName&&(this===p&&(c="tile"),this===f&&(c="line")),c){case"line":u.classList.remove("view-mode-tile"),u.classList.add("view-mode-line"),p.classList.remove("active"),f.classList.add("active"),localStorage.shopViewMode="line";break;case"tile":default:u.classList.remove("view-mode-line"),u.classList.add("view-mode-tile"),p.classList.add("active"),f.classList.remove("active"),localStorage.shopViewMode="tile"}return!1}d(),p.addEventListener("click",d),f.addEventListener("click",d)}();