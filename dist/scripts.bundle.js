
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";function e(){return Yt.apply(null,arguments)}function t(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function n(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function s(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}function i(e){return void 0===e}function r(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function a(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function o(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function u(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function l(e,t){for(var n in t)u(t,n)&&(e[n]=t[n]);return u(t,"toString")&&(e.toString=t.toString),u(t,"valueOf")&&(e.valueOf=t.valueOf),e}function d(e,t,n,s){return je(e,t,n,s,!0).utc()}function h(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function c(e){return null==e._pf&&(e._pf=h()),e._pf}function f(e){if(null==e._isValid){var t=c(e),n=Ot.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function m(e){var t=d(NaN);return null!=e?l(c(t),e):c(t).userInvalidated=!0,t}function _(e,t){var n,s,r;if(i(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),i(t._i)||(e._i=t._i),i(t._f)||(e._f=t._f),i(t._l)||(e._l=t._l),i(t._strict)||(e._strict=t._strict),i(t._tzm)||(e._tzm=t._tzm),i(t._isUTC)||(e._isUTC=t._isUTC),i(t._offset)||(e._offset=t._offset),i(t._pf)||(e._pf=c(t)),i(t._locale)||(e._locale=t._locale),xt.length>0)for(n=0;n<xt.length;n++)i(r=t[s=xt[n]])||(e[s]=r);return e}function y(t){_(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===Tt&&(Tt=!0,e.updateOffset(this),Tt=!1)}function g(e){return e instanceof y||null!=e&&null!=e._isAMomentObject}function p(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function w(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=p(t)),n}function v(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&w(e[s])!==w(t[s]))&&a++;return a+r}function M(t){!1===e.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function k(t,n){var s=!0;return l(function(){if(null!=e.deprecationHandler&&e.deprecationHandler(null,t),s){for(var i,r=[],a=0;a<arguments.length;a++){if(i="","object"==typeof arguments[a]){i+="\n["+a+"] ";for(var o in arguments[0])i+=o+": "+arguments[0][o]+", ";i=i.slice(0,-2)}else i=arguments[a];r.push(i)}M(t+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),s=!1}return n.apply(this,arguments)},n)}function S(t,n){null!=e.deprecationHandler&&e.deprecationHandler(t,n),bt[t]||(M(n),bt[t]=!0)}function D(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function Y(e,t){var s,i=l({},e);for(s in t)u(t,s)&&(n(e[s])&&n(t[s])?(i[s]={},l(i[s],e[s]),l(i[s],t[s])):null!=t[s]?i[s]=t[s]:delete i[s]);for(s in e)u(e,s)&&!u(t,s)&&n(e[s])&&(i[s]=l({},i[s]));return i}function O(e){null!=e&&this.set(e)}function x(e,t){var n=e.toLowerCase();Ut[n]=Ut[n+"s"]=Ut[t]=e}function T(e){return"string"==typeof e?Ut[e]||Ut[e.toLowerCase()]:void 0}function b(e){var t,n,s={};for(n in e)u(e,n)&&(t=T(n))&&(s[t]=e[n]);return s}function P(e,t){Nt[e]=t}function W(e){var t=[];for(var n in e)t.push({unit:n,priority:Nt[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}function R(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}function C(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(Vt[e]=i),t&&(Vt[t[0]]=function(){return R(i.apply(this,arguments),t[1],t[2])}),n&&(Vt[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function F(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function U(e){var t,n,s=e.match(Ht);for(t=0,n=s.length;t<n;t++)Vt[s[t]]?s[t]=Vt[s[t]]:s[t]=F(s[t]);return function(t){var i,r="";for(i=0;i<n;i++)r+=D(s[i])?s[i].call(t,e):s[i];return r}}function N(e,t){return e.isValid()?(t=H(t,e.localeData()),Gt[t]=Gt[t]||U(t),Gt[t](e)):e.localeData().invalidDate()}function H(e,t){var n=5;for(Lt.lastIndex=0;n>=0&&Lt.test(e);)e=e.replace(Lt,function(e){return t.longDateFormat(e)||e}),Lt.lastIndex=0,n-=1;return e}function L(e,t,n){rn[e]=D(t)?t:function(e,s){return e&&n?n:t}}function G(e,t){return u(rn,e)?rn[e](t._strict,t._locale):new RegExp(V(e))}function V(e){return j(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i}))}function j(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function I(e,t){var n,s=t;for("string"==typeof e&&(e=[e]),r(t)&&(s=function(e,n){n[t]=w(e)}),n=0;n<e.length;n++)an[e[n]]=s}function E(e,t){I(e,function(e,n,s,i){s._w=s._w||{},t(e,s._w,s,i)})}function A(e,t,n){null!=t&&u(an,e)&&an[e](t,n._a,n,e)}function z(e){return Z(e)?366:365}function Z(e){return e%4==0&&e%100!=0||e%400==0}function $(t,n){return function(s){return null!=s?(J(this,t,s),e.updateOffset(this,n),this):q(this,t)}}function q(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function J(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&Z(e.year())?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Q(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function B(e,t){return(e%t+t)%t}function Q(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=B(t,12);return e+=(t-n)/12,1===n?Z(e)?29:28:31-n%7%2}function X(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=d([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=yn.call(this._shortMonthsParse,a))?i:null:-1!==(i=yn.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=yn.call(this._shortMonthsParse,a))?i:-1!==(i=yn.call(this._longMonthsParse,a))?i:null:-1!==(i=yn.call(this._longMonthsParse,a))?i:-1!==(i=yn.call(this._shortMonthsParse,a))?i:null}function K(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=w(t);else if(t=e.localeData().monthsParse(t),!r(t))return e;return n=Math.min(e.date(),Q(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function ee(t){return null!=t?(K(this,t),e.updateOffset(this,!0),this):q(this,"Month")}function te(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=d([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=j(s[t]),i[t]=j(i[t]);for(t=0;t<24;t++)r[t]=j(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function ne(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a);return e<100&&e>=0&&isFinite(o.getFullYear())&&o.setFullYear(e),o}function se(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function ie(e,t,n){var s=7+t-n;return-((7+se(e,0,s).getUTCDay()-t)%7)+s-1}function re(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+ie(e,s,i);return o<=0?a=z(r=e-1)+o:o>z(e)?(r=e+1,a=o-z(e)):(r=e,a=o),{year:r,dayOfYear:a}}function ae(e,t,n){var s,i,r=ie(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+oe(i=e.year()-1,t,n):a>oe(e.year(),t,n)?(s=a-oe(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function oe(e,t,n){var s=ie(e,t,n),i=ie(e+1,t,n);return(z(e)-s+i)/7}function ue(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}function le(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function de(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=d([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=yn.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=yn.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=yn.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=yn.call(this._weekdaysParse,a))?i:-1!==(i=yn.call(this._shortWeekdaysParse,a))?i:-1!==(i=yn.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=yn.call(this._shortWeekdaysParse,a))?i:-1!==(i=yn.call(this._weekdaysParse,a))?i:-1!==(i=yn.call(this._minWeekdaysParse,a))?i:null:-1!==(i=yn.call(this._minWeekdaysParse,a))?i:-1!==(i=yn.call(this._weekdaysParse,a))?i:-1!==(i=yn.call(this._shortWeekdaysParse,a))?i:null}function he(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=d([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=j(o[t]),u[t]=j(u[t]),l[t]=j(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function ce(){return this.hours()%12||12}function fe(e,t){C(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function me(e,t){return t._meridiemParse}function _e(e){return e?e.toLowerCase().replace("_","-"):e}function ye(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=_e(e[r]).split("-")).length,n=(n=_e(e[r+1]))?n.split("-"):null;t>0;){if(s=ge(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&v(i,n,!0)>=t-1)break;t--}r++}return null}function ge(e){var t=null;if(!Fn[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=Pn._abbr,require("./locale/"+e),pe(t)}catch(e){}return Fn[e]}function pe(e,t){var n;return e&&(n=i(t)?ve(e):we(e,t))&&(Pn=n),Pn._abbr}function we(e,t){if(null!==t){var n=Cn;if(t.abbr=e,null!=Fn[e])S("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=Fn[e]._config;else if(null!=t.parentLocale){if(null==Fn[t.parentLocale])return Un[t.parentLocale]||(Un[t.parentLocale]=[]),Un[t.parentLocale].push({name:e,config:t}),null;n=Fn[t.parentLocale]._config}return Fn[e]=new O(Y(n,t)),Un[e]&&Un[e].forEach(function(e){we(e.name,e.config)}),pe(e),Fn[e]}return delete Fn[e],null}function ve(e){var n;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Pn;if(!t(e)){if(n=ge(e))return n;e=[e]}return ye(e)}function Me(e){var t,n=e._a;return n&&-2===c(e).overflow&&(t=n[un]<0||n[un]>11?un:n[ln]<1||n[ln]>Q(n[on],n[un])?ln:n[dn]<0||n[dn]>24||24===n[dn]&&(0!==n[hn]||0!==n[cn]||0!==n[fn])?dn:n[hn]<0||n[hn]>59?hn:n[cn]<0||n[cn]>59?cn:n[fn]<0||n[fn]>999?fn:-1,c(e)._overflowDayOfYear&&(t<on||t>ln)&&(t=ln),c(e)._overflowWeeks&&-1===t&&(t=mn),c(e)._overflowWeekday&&-1===t&&(t=_n),c(e).overflow=t),e}function ke(e,t,n){return null!=e?e:null!=t?t:n}function Se(t){var n=new Date(e.now());return t._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function De(e){var t,n,s,i,r=[];if(!e._d){for(s=Se(e),e._w&&null==e._a[ln]&&null==e._a[un]&&Ye(e),null!=e._dayOfYear&&(i=ke(e._a[on],s[on]),(e._dayOfYear>z(i)||0===e._dayOfYear)&&(c(e)._overflowDayOfYear=!0),n=se(i,0,e._dayOfYear),e._a[un]=n.getUTCMonth(),e._a[ln]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=r[t]=s[t];for(;t<7;t++)e._a[t]=r[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[dn]&&0===e._a[hn]&&0===e._a[cn]&&0===e._a[fn]&&(e._nextDay=!0,e._a[dn]=0),e._d=(e._useUTC?se:ne).apply(null,r),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[dn]=24),e._w&&void 0!==e._w.d&&e._w.d!==e._d.getDay()&&(c(e).weekdayMismatch=!0)}}function Ye(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ke(t.GG,e._a[on],ae(Ie(),1,4).year),s=ke(t.W,1),((i=ke(t.E,1))<1||i>7)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=ae(Ie(),r,a);n=ke(t.gg,e._a[on],l.year),s=ke(t.w,l.week),null!=t.d?((i=t.d)<0||i>6)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||t.e>6)&&(u=!0)):i=r}s<1||s>oe(n,r,a)?c(e)._overflowWeeks=!0:null!=u?c(e)._overflowWeekday=!0:(o=re(n,s,i,r,a),e._a[on]=o.year,e._dayOfYear=o.dayOfYear)}function Oe(e){var t,n,s,i,r,a,o=e._i,u=Nn.exec(o)||Hn.exec(o);if(u){for(c(e).iso=!0,t=0,n=Gn.length;t<n;t++)if(Gn[t][1].exec(u[1])){i=Gn[t][0],s=!1!==Gn[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=Vn.length;t<n;t++)if(Vn[t][1].exec(u[3])){r=(u[2]||" ")+Vn[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!Ln.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),Fe(e)}else e._isValid=!1}function xe(e,t,n,s,i,r){var a=[Te(e),vn.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}function Te(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function be(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").trim()}function Pe(e,t,n){return!e||Yn.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(c(n).weekdayMismatch=!0,n._isValid=!1,!1)}function We(e,t,n){if(e)return En[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return 60*((s-i)/100)+i}function Re(e){var t=In.exec(be(e._i));if(t){var n=xe(t[4],t[3],t[2],t[5],t[6],t[7]);if(!Pe(t[1],n,e))return;e._a=n,e._tzm=We(t[8],t[9],t[10]),e._d=se.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),c(e).rfc2822=!0}else e._isValid=!1}function Ce(t){var n=jn.exec(t._i);null===n?(Oe(t),!1===t._isValid&&(delete t._isValid,Re(t),!1===t._isValid&&(delete t._isValid,e.createFromInputFallback(t)))):t._d=new Date(+n[1])}function Fe(t){if(t._f!==e.ISO_8601)if(t._f!==e.RFC_2822){t._a=[],c(t).empty=!0;var n,s,i,r,a,o=""+t._i,u=o.length,l=0;for(i=H(t._f,t._locale).match(Ht)||[],n=0;n<i.length;n++)r=i[n],(s=(o.match(G(r,t))||[])[0])&&((a=o.substr(0,o.indexOf(s))).length>0&&c(t).unusedInput.push(a),o=o.slice(o.indexOf(s)+s.length),l+=s.length),Vt[r]?(s?c(t).empty=!1:c(t).unusedTokens.push(r),A(r,s,t)):t._strict&&!s&&c(t).unusedTokens.push(r);c(t).charsLeftOver=u-l,o.length>0&&c(t).unusedInput.push(o),t._a[dn]<=12&&!0===c(t).bigHour&&t._a[dn]>0&&(c(t).bigHour=void 0),c(t).parsedDateParts=t._a.slice(0),c(t).meridiem=t._meridiem,t._a[dn]=Ue(t._locale,t._a[dn],t._meridiem),De(t),Me(t)}else Re(t);else Oe(t)}function Ue(e,t,n){var s;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0),t):t}function Ne(e){var t,n,s,i,r;if(0===e._f.length)return c(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<e._f.length;i++)r=0,t=_({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],Fe(t),f(t)&&(r+=c(t).charsLeftOver,r+=10*c(t).unusedTokens.length,c(t).score=r,(null==s||r<s)&&(s=r,n=t));l(e,n||t)}function He(e){if(!e._d){var t=b(e._i);e._a=o([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),De(e)}}function Le(e){var t=new y(Me(Ge(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Ge(e){var n=e._i,s=e._f;return e._locale=e._locale||ve(e._l),null===n||void 0===s&&""===n?m({nullInput:!0}):("string"==typeof n&&(e._i=n=e._locale.preparse(n)),g(n)?new y(Me(n)):(a(n)?e._d=n:t(s)?Ne(e):s?Fe(e):Ve(e),f(e)||(e._d=null),e))}function Ve(s){var u=s._i;i(u)?s._d=new Date(e.now()):a(u)?s._d=new Date(u.valueOf()):"string"==typeof u?Ce(s):t(u)?(s._a=o(u.slice(0),function(e){return parseInt(e,10)}),De(s)):n(u)?He(s):r(u)?s._d=new Date(u):e.createFromInputFallback(s)}function je(e,i,r,a,o){var u={};return!0!==r&&!1!==r||(a=r,r=void 0),(n(e)&&s(e)||t(e)&&0===e.length)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=o,u._l=r,u._i=e,u._f=i,u._strict=a,Le(u)}function Ie(e,t,n,s){return je(e,t,n,s,!1)}function Ee(e,n){var s,i;if(1===n.length&&t(n[0])&&(n=n[0]),!n.length)return Ie();for(s=n[0],i=1;i<n.length;++i)n[i].isValid()&&!n[i][e](s)||(s=n[i]);return s}function Ae(e){for(var t in e)if(-1===yn.call(Zn,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Zn.length;++s)if(e[Zn[s]]){if(n)return!1;parseFloat(e[Zn[s]])!==w(e[Zn[s]])&&(n=!0)}return!0}function ze(e){var t=b(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=Ae(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=ve(),this._bubble()}function Ze(e){return e instanceof ze}function $e(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function qe(e,t){C(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+R(~~(e/60),2)+t+R(~~e%60,2)})}function Je(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match($n)||["-",0,0],i=60*s[1]+w(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Be(t,n){var s,i;return n._isUTC?(s=n.clone(),i=(g(t)||a(t)?t.valueOf():Ie(t).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+i),e.updateOffset(s,!1),s):Ie(t).local()}function Qe(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Xe(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Ke(e,t){var n,s,i,a=e,o=null;return Ze(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:r(e)?(a={},t?a[t]=e:a.milliseconds=e):(o=qn.exec(e))?(n="-"===o[1]?-1:1,a={y:0,d:w(o[ln])*n,h:w(o[dn])*n,m:w(o[hn])*n,s:w(o[cn])*n,ms:w($e(1e3*o[fn]))*n}):(o=Jn.exec(e))?(n="-"===o[1]?-1:(o[1],1),a={y:et(o[2],n),M:et(o[3],n),w:et(o[4],n),d:et(o[5],n),h:et(o[6],n),m:et(o[7],n),s:et(o[8],n)}):null==a?a={}:"object"==typeof a&&("from"in a||"to"in a)&&(i=nt(Ie(a.from),Ie(a.to)),(a={}).ms=i.milliseconds,a.M=i.months),s=new ze(a),Ze(e)&&u(e,"_locale")&&(s._locale=e._locale),s}function et(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function tt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function nt(e,t){var n;return e.isValid()&&t.isValid()?(t=Be(t,e),e.isBefore(t)?n=tt(e,t):((n=tt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function st(e,t){return function(n,s){var i,r;return null===s||isNaN(+s)||(S(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=n,n=s,s=r),n="string"==typeof n?+n:n,i=Ke(n,s),it(this,i,e),this}}function it(t,n,s,i){var r=n._milliseconds,a=$e(n._days),o=$e(n._months);t.isValid()&&(i=null==i||i,o&&K(t,q(t,"Month")+o*s),a&&J(t,"Date",q(t,"Date")+a*s),r&&t._d.setTime(t._d.valueOf()+r*s),i&&e.updateOffset(t,a||o))}function rt(e,t){var n,s=12*(t.year()-e.year())+(t.month()-e.month()),i=e.clone().add(s,"months");return n=t-i<0?(t-i)/(i-e.clone().add(s-1,"months")):(t-i)/(e.clone().add(s+1,"months")-i),-(s+n)||0}function at(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ve(e))&&(this._locale=t),this)}function ot(){return this._locale}function ut(e,t){C(0,[e,e.length],0,t)}function lt(e,t,n,s,i){var r;return null==e?ae(this,s,i).year:(r=oe(e,s,i),t>r&&(t=r),dt.call(this,e,t,n,s,i))}function dt(e,t,n,s,i){var r=re(e,t,n,s,i),a=se(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}function ht(e){return e}function ct(e,t,n,s){var i=ve(),r=d().set(s,t);return i[n](r,e)}function ft(e,t,n){if(r(e)&&(t=e,e=void 0),e=e||"",null!=t)return ct(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=ct(e,s,n,"month");return i}function mt(e,t,n,s){"boolean"==typeof e?(r(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,r(t)&&(n=t,t=void 0),t=t||"");var i=ve(),a=e?i._week.dow:0;if(null!=n)return ct(t,(n+a)%7,s,"day");var o,u=[];for(o=0;o<7;o++)u[o]=ct(t,(o+a)%7,s,"day");return u}function _t(e,t,n,s){var i=Ke(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function yt(e){return e<0?Math.floor(e):Math.ceil(e)}function gt(e){return 4800*e/146097}function pt(e){return 146097*e/4800}function wt(e){return function(){return this.as(e)}}function vt(e){return function(){return this.isValid()?this._data[e]:NaN}}function Mt(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}function kt(e,t,n){var s=Ke(e).abs(),i=ks(s.as("s")),r=ks(s.as("m")),a=ks(s.as("h")),o=ks(s.as("d")),u=ks(s.as("M")),l=ks(s.as("y")),d=i<=Ss.ss&&["s",i]||i<Ss.s&&["ss",i]||r<=1&&["m"]||r<Ss.m&&["mm",r]||a<=1&&["h"]||a<Ss.h&&["hh",a]||o<=1&&["d"]||o<Ss.d&&["dd",o]||u<=1&&["M"]||u<Ss.M&&["MM",u]||l<=1&&["y"]||["yy",l];return d[2]=t,d[3]=+e>0,d[4]=n,Mt.apply(null,d)}function St(e){return(e>0)-(e<0)||+e}function Dt(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,s=Ds(this._milliseconds)/1e3,i=Ds(this._days),r=Ds(this._months);t=p((e=p(s/60))/60),s%=60,e%=60;var a=n=p(r/12),o=r%=12,u=i,l=t,d=e,h=s?s.toFixed(3).replace(/\.?0+$/,""):"",c=this.asSeconds();if(!c)return"P0D";var f=c<0?"-":"",m=St(this._months)!==St(c)?"-":"",_=St(this._days)!==St(c)?"-":"",y=St(this._milliseconds)!==St(c)?"-":"";return f+"P"+(a?m+a+"Y":"")+(o?m+o+"M":"")+(u?_+u+"D":"")+(l||d||h?"T":"")+(l?y+l+"H":"")+(d?y+d+"M":"")+(h?y+h+"S":"")}var Yt,Ot;Ot=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var xt=e.momentProperties=[],Tt=!1,bt={};e.suppressDeprecationWarnings=!1,e.deprecationHandler=null;var Pt;Pt=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)u(e,t)&&n.push(t);return n};var Wt={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Rt={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Ct=/\d{1,2}/,Ft={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ut={},Nt={},Ht=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Lt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Gt={},Vt={},jt=/\d/,It=/\d\d/,Et=/\d{3}/,At=/\d{4}/,zt=/[+-]?\d{6}/,Zt=/\d\d?/,$t=/\d\d\d\d?/,qt=/\d\d\d\d\d\d?/,Jt=/\d{1,3}/,Bt=/\d{1,4}/,Qt=/[+-]?\d{1,6}/,Xt=/\d+/,Kt=/[+-]?\d+/,en=/Z|[+-]\d\d:?\d\d/gi,tn=/Z|[+-]\d\d(?::?\d\d)?/gi,nn=/[+-]?\d+(\.\d{1,3})?/,sn=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,rn={},an={},on=0,un=1,ln=2,dn=3,hn=4,cn=5,fn=6,mn=7,_n=8;C("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),C(0,["YY",2],0,function(){return this.year()%100}),C(0,["YYYY",4],0,"year"),C(0,["YYYYY",5],0,"year"),C(0,["YYYYYY",6,!0],0,"year"),x("year","y"),P("year",1),L("Y",Kt),L("YY",Zt,It),L("YYYY",Bt,At),L("YYYYY",Qt,zt),L("YYYYYY",Qt,zt),I(["YYYYY","YYYYYY"],on),I("YYYY",function(t,n){n[on]=2===t.length?e.parseTwoDigitYear(t):w(t)}),I("YY",function(t,n){n[on]=e.parseTwoDigitYear(t)}),I("Y",function(e,t){t[on]=parseInt(e,10)}),e.parseTwoDigitYear=function(e){return w(e)+(w(e)>68?1900:2e3)};var yn,gn=$("FullYear",!0);yn=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},C("M",["MM",2],"Mo",function(){return this.month()+1}),C("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),C("MMMM",0,0,function(e){return this.localeData().months(this,e)}),x("month","M"),P("month",8),L("M",Zt),L("MM",Zt,It),L("MMM",function(e,t){return t.monthsShortRegex(e)}),L("MMMM",function(e,t){return t.monthsRegex(e)}),I(["M","MM"],function(e,t){t[un]=w(e)-1}),I(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[un]=i:c(n).invalidMonth=e});var pn=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,wn="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),vn="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Mn=sn,kn=sn;C("w",["ww",2],"wo","week"),C("W",["WW",2],"Wo","isoWeek"),x("week","w"),x("isoWeek","W"),P("week",5),P("isoWeek",5),L("w",Zt),L("ww",Zt,It),L("W",Zt),L("WW",Zt,It),E(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=w(e)});var Sn={dow:0,doy:6};C("d",0,"do","day"),C("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),C("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),C("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),C("e",0,0,"weekday"),C("E",0,0,"isoWeekday"),x("day","d"),x("weekday","e"),x("isoWeekday","E"),P("day",11),P("weekday",11),P("isoWeekday",11),L("d",Zt),L("e",Zt),L("E",Zt),L("dd",function(e,t){return t.weekdaysMinRegex(e)}),L("ddd",function(e,t){return t.weekdaysShortRegex(e)}),L("dddd",function(e,t){return t.weekdaysRegex(e)}),E(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:c(n).invalidWeekday=e}),E(["d","e","E"],function(e,t,n,s){t[s]=w(e)});var Dn="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Yn="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),On="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),xn=sn,Tn=sn,bn=sn;C("H",["HH",2],0,"hour"),C("h",["hh",2],0,ce),C("k",["kk",2],0,function(){return this.hours()||24}),C("hmm",0,0,function(){return""+ce.apply(this)+R(this.minutes(),2)}),C("hmmss",0,0,function(){return""+ce.apply(this)+R(this.minutes(),2)+R(this.seconds(),2)}),C("Hmm",0,0,function(){return""+this.hours()+R(this.minutes(),2)}),C("Hmmss",0,0,function(){return""+this.hours()+R(this.minutes(),2)+R(this.seconds(),2)}),fe("a",!0),fe("A",!1),x("hour","h"),P("hour",13),L("a",me),L("A",me),L("H",Zt),L("h",Zt),L("k",Zt),L("HH",Zt,It),L("hh",Zt,It),L("kk",Zt,It),L("hmm",$t),L("hmmss",qt),L("Hmm",$t),L("Hmmss",qt),I(["H","HH"],dn),I(["k","kk"],function(e,t,n){var s=w(e);t[dn]=24===s?0:s}),I(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),I(["h","hh"],function(e,t,n){t[dn]=w(e),c(n).bigHour=!0}),I("hmm",function(e,t,n){var s=e.length-2;t[dn]=w(e.substr(0,s)),t[hn]=w(e.substr(s)),c(n).bigHour=!0}),I("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[dn]=w(e.substr(0,s)),t[hn]=w(e.substr(s,2)),t[cn]=w(e.substr(i)),c(n).bigHour=!0}),I("Hmm",function(e,t,n){var s=e.length-2;t[dn]=w(e.substr(0,s)),t[hn]=w(e.substr(s))}),I("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[dn]=w(e.substr(0,s)),t[hn]=w(e.substr(s,2)),t[cn]=w(e.substr(i))});var Pn,Wn=/[ap]\.?m?\.?/i,Rn=$("Hours",!0),Cn={calendar:Wt,longDateFormat:Rt,invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:Ct,relativeTime:Ft,months:wn,monthsShort:vn,week:Sn,weekdays:Dn,weekdaysMin:On,weekdaysShort:Yn,meridiemParse:Wn},Fn={},Un={},Nn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Hn=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ln=/Z|[+-]\d\d(?::?\d\d)?/,Gn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Vn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],jn=/^\/?Date\((\-?\d+)/i,In=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,En={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};e.createFromInputFallback=k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),e.ISO_8601=function(){},e.RFC_2822=function(){};var An=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ie.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:m()}),zn=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Ie.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:m()}),Zn=["year","quarter","month","week","day","hour","minute","second","millisecond"];qe("Z",":"),qe("ZZ",""),L("Z",tn),L("ZZ",tn),I(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Je(tn,e)});var $n=/([\+\-]|\d\d)/gi;e.updateOffset=function(){};var qn=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Jn=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;Ke.fn=ze.prototype,Ke.invalid=function(){return Ke(NaN)};var Bn=st(1,"add"),Qn=st(-1,"subtract");e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xn=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});C(0,["gg",2],0,function(){return this.weekYear()%100}),C(0,["GG",2],0,function(){return this.isoWeekYear()%100}),ut("gggg","weekYear"),ut("ggggg","weekYear"),ut("GGGG","isoWeekYear"),ut("GGGGG","isoWeekYear"),x("weekYear","gg"),x("isoWeekYear","GG"),P("weekYear",1),P("isoWeekYear",1),L("G",Kt),L("g",Kt),L("GG",Zt,It),L("gg",Zt,It),L("GGGG",Bt,At),L("gggg",Bt,At),L("GGGGG",Qt,zt),L("ggggg",Qt,zt),E(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=w(e)}),E(["gg","GG"],function(t,n,s,i){n[i]=e.parseTwoDigitYear(t)}),C("Q",0,"Qo","quarter"),x("quarter","Q"),P("quarter",7),L("Q",jt),I("Q",function(e,t){t[un]=3*(w(e)-1)}),C("D",["DD",2],"Do","date"),x("date","D"),P("date",9),L("D",Zt),L("DD",Zt,It),L("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),I(["D","DD"],ln),I("Do",function(e,t){t[ln]=w(e.match(Zt)[0],10)});var Kn=$("Date",!0);C("DDD",["DDDD",3],"DDDo","dayOfYear"),x("dayOfYear","DDD"),P("dayOfYear",4),L("DDD",Jt),L("DDDD",Et),I(["DDD","DDDD"],function(e,t,n){n._dayOfYear=w(e)}),C("m",["mm",2],0,"minute"),x("minute","m"),P("minute",14),L("m",Zt),L("mm",Zt,It),I(["m","mm"],hn);var es=$("Minutes",!1);C("s",["ss",2],0,"second"),x("second","s"),P("second",15),L("s",Zt),L("ss",Zt,It),I(["s","ss"],cn);var ts=$("Seconds",!1);C("S",0,0,function(){return~~(this.millisecond()/100)}),C(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),C(0,["SSS",3],0,"millisecond"),C(0,["SSSS",4],0,function(){return 10*this.millisecond()}),C(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),C(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),C(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),C(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),C(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),x("millisecond","ms"),P("millisecond",16),L("S",Jt,jt),L("SS",Jt,It),L("SSS",Jt,Et);var ns;for(ns="SSSS";ns.length<=9;ns+="S")L(ns,Xt);for(ns="S";ns.length<=9;ns+="S")I(ns,function(e,t){t[fn]=w(1e3*("0."+e))});var ss=$("Milliseconds",!1);C("z",0,0,"zoneAbbr"),C("zz",0,0,"zoneName");var is=y.prototype;is.add=Bn,is.calendar=function(t,n){var s=t||Ie(),i=Be(s,this).startOf("day"),r=e.calendarFormat(this,i)||"sameElse",a=n&&(D(n[r])?n[r].call(this,s):n[r]);return this.format(a||this.localeData().calendar(r,this,Ie(s)))},is.clone=function(){return new y(this)},is.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Be(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=T(t)){case"year":r=rt(this,s)/12;break;case"month":r=rt(this,s);break;case"quarter":r=rt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:p(r)},is.endOf=function(e){return void 0===(e=T(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},is.format=function(t){t||(t=this.isUtc()?e.defaultFormatUtc:e.defaultFormat);var n=N(this,t);return this.localeData().postformat(n)},is.from=function(e,t){return this.isValid()&&(g(e)&&e.isValid()||Ie(e).isValid())?Ke({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},is.fromNow=function(e){return this.from(Ie(),e)},is.to=function(e,t){return this.isValid()&&(g(e)&&e.isValid()||Ie(e).isValid())?Ke({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},is.toNow=function(e){return this.to(Ie(),e)},is.get=function(e){return e=T(e),D(this[e])?this[e]():this},is.invalidAt=function(){return c(this).overflow},is.isAfter=function(e,t){var n=g(e)?e:Ie(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=T(i(t)?"millisecond":t))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},is.isBefore=function(e,t){var n=g(e)?e:Ie(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=T(i(t)?"millisecond":t))?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},is.isBetween=function(e,t,n,s){return("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))},is.isSame=function(e,t){var n,s=g(e)?e:Ie(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=T(t||"millisecond"))?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},is.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},is.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},is.isValid=function(){return f(this)},is.lang=Xn,is.locale=at,is.localeData=ot,is.max=zn,is.min=An,is.parsingFlags=function(){return l({},c(this))},is.set=function(e,t){if("object"==typeof e)for(var n=W(e=b(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(e=T(e),D(this[e]))return this[e](t);return this},is.startOf=function(e){switch(e=T(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},is.subtract=Qn,is.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},is.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},is.toDate=function(){return new Date(this.valueOf())},is.toISOString=function(){if(!this.isValid())return null;var e=this.clone().utc();return e.year()<0||e.year()>9999?N(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):D(Date.prototype.toISOString)?this.toDate().toISOString():N(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},is.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},is.toJSON=function(){return this.isValid()?this.toISOString():null},is.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},is.unix=function(){return Math.floor(this.valueOf()/1e3)},is.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},is.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},is.year=gn,is.isLeapYear=function(){return Z(this.year())},is.weekYear=function(e){return lt.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},is.isoWeekYear=function(e){return lt.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},is.quarter=is.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},is.month=ee,is.daysInMonth=function(){return Q(this.year(),this.month())},is.week=is.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},is.isoWeek=is.isoWeeks=function(e){var t=ae(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},is.weeksInYear=function(){var e=this.localeData()._week;return oe(this.year(),e.dow,e.doy)},is.isoWeeksInYear=function(){return oe(this.year(),1,4)},is.date=Kn,is.day=is.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=ue(e,this.localeData()),this.add(e-t,"d")):t},is.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},is.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=le(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7},is.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},is.hour=is.hours=Rn,is.minute=is.minutes=es,is.second=is.seconds=ts,is.millisecond=is.milliseconds=ss,is.utcOffset=function(t,n,s){var i,r=this._offset||0;if(!this.isValid())return null!=t?this:NaN;if(null!=t){if("string"==typeof t){if(null===(t=Je(tn,t)))return this}else Math.abs(t)<16&&!s&&(t*=60);return!this._isUTC&&n&&(i=Qe(this)),this._offset=t,this._isUTC=!0,null!=i&&this.add(i,"m"),r!==t&&(!n||this._changeInProgress?it(this,Ke(t-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:Qe(this)},is.utc=function(e){return this.utcOffset(0,e)},is.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Qe(this),"m")),this},is.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Je(en,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},is.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Ie(e).utcOffset():0,(this.utcOffset()-e)%60==0)},is.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},is.isLocal=function(){return!!this.isValid()&&!this._isUTC},is.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},is.isUtc=Xe,is.isUTC=Xe,is.zoneAbbr=function(){return this._isUTC?"UTC":""},is.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},is.dates=k("dates accessor is deprecated. Use date instead.",Kn),is.months=k("months accessor is deprecated. Use month instead",ee),is.years=k("years accessor is deprecated. Use year instead",gn),is.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),is.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!i(this._isDSTShifted))return this._isDSTShifted;var e={};if(_(e,this),(e=Ge(e))._a){var t=e._isUTC?d(e._a):Ie(e._a);this._isDSTShifted=this.isValid()&&v(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted});var rs=O.prototype;rs.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return D(s)?s.call(t,n):s},rs.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},rs.invalidDate=function(){return this._invalidDate},rs.ordinal=function(e){return this._ordinal.replace("%d",e)},rs.preparse=ht,rs.postformat=ht,rs.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return D(i)?i(e,t,n,s):i.replace(/%d/i,e)},rs.pastFuture=function(e,t){var n=this._relativeTime[e>0?"future":"past"];return D(n)?n(t):n.replace(/%s/i,t)},rs.set=function(e){var t,n;for(n in e)D(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},rs.months=function(e,n){return e?t(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||pn).test(n)?"format":"standalone"][e.month()]:t(this._months)?this._months:this._months.standalone},rs.monthsShort=function(e,n){return e?t(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[pn.test(n)?"format":"standalone"][e.month()]:t(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},rs.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return X.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=d([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},rs.monthsRegex=function(e){return this._monthsParseExact?(u(this,"_monthsRegex")||te.call(this),e?this._monthsStrictRegex:this._monthsRegex):(u(this,"_monthsRegex")||(this._monthsRegex=kn),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},rs.monthsShortRegex=function(e){return this._monthsParseExact?(u(this,"_monthsRegex")||te.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(u(this,"_monthsShortRegex")||(this._monthsShortRegex=Mn),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},rs.week=function(e){return ae(e,this._week.dow,this._week.doy).week},rs.firstDayOfYear=function(){return this._week.doy},rs.firstDayOfWeek=function(){return this._week.dow},rs.weekdays=function(e,n){return e?t(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(n)?"format":"standalone"][e.day()]:t(this._weekdays)?this._weekdays:this._weekdays.standalone},rs.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},rs.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},rs.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return de.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=d([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},rs.weekdaysRegex=function(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||he.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(u(this,"_weekdaysRegex")||(this._weekdaysRegex=xn),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},rs.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||he.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(u(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Tn),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},rs.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||he.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(u(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=bn),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},rs.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},rs.meridiem=function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},pe("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===w(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),e.lang=k("moment.lang is deprecated. Use moment.locale instead.",pe),e.langData=k("moment.langData is deprecated. Use moment.localeData instead.",ve);var as=Math.abs,os=wt("ms"),us=wt("s"),ls=wt("m"),ds=wt("h"),hs=wt("d"),cs=wt("w"),fs=wt("M"),ms=wt("y"),_s=vt("milliseconds"),ys=vt("seconds"),gs=vt("minutes"),ps=vt("hours"),ws=vt("days"),vs=vt("months"),Ms=vt("years"),ks=Math.round,Ss={ss:44,s:45,m:45,h:22,d:26,M:11},Ds=Math.abs,Ys=ze.prototype;return Ys.isValid=function(){return this._isValid},Ys.abs=function(){var e=this._data;return this._milliseconds=as(this._milliseconds),this._days=as(this._days),this._months=as(this._months),e.milliseconds=as(e.milliseconds),e.seconds=as(e.seconds),e.minutes=as(e.minutes),e.hours=as(e.hours),e.months=as(e.months),e.years=as(e.years),this},Ys.add=function(e,t){return _t(this,e,t,1)},Ys.subtract=function(e,t){return _t(this,e,t,-1)},Ys.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=T(e))||"year"===e)return t=this._days+s/864e5,n=this._months+gt(t),"month"===e?n:n/12;switch(t=this._days+Math.round(pt(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},Ys.asMilliseconds=os,Ys.asSeconds=us,Ys.asMinutes=ls,Ys.asHours=ds,Ys.asDays=hs,Ys.asWeeks=cs,Ys.asMonths=fs,Ys.asYears=ms,Ys.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*w(this._months/12):NaN},Ys._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return r>=0&&a>=0&&o>=0||r<=0&&a<=0&&o<=0||(r+=864e5*yt(pt(o)+a),a=0,o=0),u.milliseconds=r%1e3,e=p(r/1e3),u.seconds=e%60,t=p(e/60),u.minutes=t%60,n=p(t/60),u.hours=n%24,a+=p(n/24),i=p(gt(a)),o+=i,a-=yt(pt(i)),s=p(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},Ys.clone=function(){return Ke(this)},Ys.get=function(e){return e=T(e),this.isValid()?this[e+"s"]():NaN},Ys.milliseconds=_s,Ys.seconds=ys,Ys.minutes=gs,Ys.hours=ps,Ys.days=ws,Ys.weeks=function(){return p(this.days()/7)},Ys.months=vs,Ys.years=Ms,Ys.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t=this.localeData(),n=kt(this,!e,t);return e&&(n=t.pastFuture(+this,n)),t.postformat(n)},Ys.toISOString=Dt,Ys.toString=Dt,Ys.toJSON=Dt,Ys.locale=at,Ys.localeData=ot,Ys.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",Dt),Ys.lang=Xn,C("X",0,0,"unix"),C("x",0,0,"valueOf"),L("x",Kt),L("X",nn),I("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),I("x",function(e,t,n){n._d=new Date(w(e))}),e.version="2.19.1",function(e){Yt=e}(Ie),e.fn=is,e.min=function(){return Ee("isBefore",[].slice.call(arguments,0))},e.max=function(){return Ee("isAfter",[].slice.call(arguments,0))},e.now=function(){return Date.now?Date.now():+new Date},e.utc=d,e.unix=function(e){return Ie(1e3*e)},e.months=function(e,t){return ft(e,t,"months")},e.isDate=a,e.locale=pe,e.invalid=m,e.duration=Ke,e.isMoment=g,e.weekdays=function(e,t,n){return mt(e,t,n,"weekdays")},e.parseZone=function(){return Ie.apply(null,arguments).parseZone()},e.localeData=ve,e.isDuration=Ze,e.monthsShort=function(e,t){return ft(e,t,"monthsShort")},e.weekdaysMin=function(e,t,n){return mt(e,t,n,"weekdaysMin")},e.defineLocale=we,e.updateLocale=function(e,t){if(null!=t){var n,s=Cn;null!=Fn[e]&&(s=Fn[e]._config),(n=new O(t=Y(s,t))).parentLocale=Fn[e],Fn[e]=n,pe(e)}else null!=Fn[e]&&(null!=Fn[e].parentLocale?Fn[e]=Fn[e].parentLocale:null!=Fn[e]&&delete Fn[e]);return Fn[e]},e.locales=function(){return Pt(Fn)},e.weekdaysShort=function(e,t,n){return mt(e,t,n,"weekdaysShort")},e.normalizeUnits=T,e.relativeTimeRounding=function(e){return void 0===e?ks:"function"==typeof e&&(ks=e,!0)},e.relativeTimeThreshold=function(e,t){return void 0!==Ss[e]&&(void 0===t?Ss[e]:(Ss[e]=t,"s"===e&&(Ss.ss=t-1),!0))},e.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},e.prototype=is,e});
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.1
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Chart = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/* MIT license */
var colorNames = require(5);

module.exports = {
   getRgba: getRgba,
   getHsla: getHsla,
   getRgb: getRgb,
   getHsl: getHsl,
   getHwb: getHwb,
   getAlpha: getAlpha,

   hexString: hexString,
   rgbString: rgbString,
   rgbaString: rgbaString,
   percentString: percentString,
   percentaString: percentaString,
   hslString: hslString,
   hslaString: hslaString,
   hwbString: hwbString,
   keyword: keyword
}

function getRgba(string) {
   if (!string) {
      return;
   }
   var abbr =  /^#([a-fA-F0-9]{3})$/i,
       hex =  /^#([a-fA-F0-9]{6})$/i,
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
       keyword = /(\w+)/;

   var rgb = [0, 0, 0],
       a = 1,
       match = string.match(abbr);
   if (match) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i] + match[i], 16);
      }
   }
   else if (match = string.match(hex)) {
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
   }
   else if (match = string.match(rgba)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(per)) {
      for (var i = 0; i < rgb.length; i++) {
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
   }
   else if (match = string.match(keyword)) {
      if (match[1] == "transparent") {
         return [0, 0, 0, 0];
      }
      rgb = colorNames[match[1]];
      if (!rgb) {
         return;
      }
   }

   for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
   }
   if (!a && a != 0) {
      a = 1;
   }
   else {
      a = scale(a, 0, 1);
   }
   rgb[3] = a;
   return rgb;
}

function getHsla(string) {
   if (!string) {
      return;
   }
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hsl);
   if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          s = scale(parseFloat(match[2]), 0, 100),
          l = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
   }
}

function getHwb(string) {
   if (!string) {
      return;
   }
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
   var match = string.match(hwb);
   if (match) {
    var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
          w = scale(parseFloat(match[2]), 0, 100),
          b = scale(parseFloat(match[3]), 0, 100),
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
   }
}

function getRgb(string) {
   var rgba = getRgba(string);
   return rgba && rgba.slice(0, 3);
}

function getHsl(string) {
  var hsla = getHsla(string);
  return hsla && hsla.slice(0, 3);
}

function getAlpha(string) {
   var vals = getRgba(string);
   if (vals) {
      return vals[3];
   }
   else if (vals = getHsla(string)) {
      return vals[3];
   }
   else if (vals = getHwb(string)) {
      return vals[3];
   }
}

// generators
function hexString(rgb) {
   return "#" + hexDouble(rgb[0]) + hexDouble(rgb[1])
              + hexDouble(rgb[2]);
}

function rgbString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
   }
   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
}

function rgbaString(rgba, alpha) {
   if (alpha === undefined) {
      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
   }
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
           + ", " + alpha + ")";
}

function percentString(rgba, alpha) {
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
   }
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);

   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
}

function percentaString(rgba, alpha) {
   var r = Math.round(rgba[0]/255 * 100),
       g = Math.round(rgba[1]/255 * 100),
       b = Math.round(rgba[2]/255 * 100);
   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
}

function hslString(hsla, alpha) {
   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
   }
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
}

function hslaString(hsla, alpha) {
   if (alpha === undefined) {
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
   }
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
           + alpha + ")";
}

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
function hwbString(hwb, alpha) {
   if (alpha === undefined) {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
   }
   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
}

function keyword(rgb) {
  return reverseNames[rgb.slice(0, 3)];
}

// helpers
function scale(num, min, max) {
   return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
  var str = num.toString(16).toUpperCase();
  return (str.length < 2) ? "0" + str : str;
}


//create a list of reverse color names
var reverseNames = {};
for (var name in colorNames) {
   reverseNames[colorNames[name]] = name;
}

},{"5":5}],2:[function(require,module,exports){
/* MIT license */
var convert = require(4);
var string = require(1);

var Color = function (obj) {
	if (obj instanceof Color) {
		return obj;
	}
	if (!(this instanceof Color)) {
		return new Color(obj);
	}

	this.valid = false;
	this.values = {
		rgb: [0, 0, 0],
		hsl: [0, 0, 0],
		hsv: [0, 0, 0],
		hwb: [0, 0, 0],
		cmyk: [0, 0, 0, 0],
		alpha: 1
	};

	// parse Color() argument
	var vals;
	if (typeof obj === 'string') {
		vals = string.getRgba(obj);
		if (vals) {
			this.setValues('rgb', vals);
		} else if (vals = string.getHsla(obj)) {
			this.setValues('hsl', vals);
		} else if (vals = string.getHwb(obj)) {
			this.setValues('hwb', vals);
		}
	} else if (typeof obj === 'object') {
		vals = obj;
		if (vals.r !== undefined || vals.red !== undefined) {
			this.setValues('rgb', vals);
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
			this.setValues('hsl', vals);
		} else if (vals.v !== undefined || vals.value !== undefined) {
			this.setValues('hsv', vals);
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			this.setValues('hwb', vals);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
			this.setValues('cmyk', vals);
		}
	}
};

Color.prototype = {
	isValid: function () {
		return this.valid;
	},
	rgb: function () {
		return this.setSpace('rgb', arguments);
	},
	hsl: function () {
		return this.setSpace('hsl', arguments);
	},
	hsv: function () {
		return this.setSpace('hsv', arguments);
	},
	hwb: function () {
		return this.setSpace('hwb', arguments);
	},
	cmyk: function () {
		return this.setSpace('cmyk', arguments);
	},

	rgbArray: function () {
		return this.values.rgb;
	},
	hslArray: function () {
		return this.values.hsl;
	},
	hsvArray: function () {
		return this.values.hsv;
	},
	hwbArray: function () {
		var values = this.values;
		if (values.alpha !== 1) {
			return values.hwb.concat([values.alpha]);
		}
		return values.hwb;
	},
	cmykArray: function () {
		return this.values.cmyk;
	},
	rgbaArray: function () {
		var values = this.values;
		return values.rgb.concat([values.alpha]);
	},
	hslaArray: function () {
		var values = this.values;
		return values.hsl.concat([values.alpha]);
	},
	alpha: function (val) {
		if (val === undefined) {
			return this.values.alpha;
		}
		this.setValues('alpha', val);
		return this;
	},

	red: function (val) {
		return this.setChannel('rgb', 0, val);
	},
	green: function (val) {
		return this.setChannel('rgb', 1, val);
	},
	blue: function (val) {
		return this.setChannel('rgb', 2, val);
	},
	hue: function (val) {
		if (val) {
			val %= 360;
			val = val < 0 ? 360 + val : val;
		}
		return this.setChannel('hsl', 0, val);
	},
	saturation: function (val) {
		return this.setChannel('hsl', 1, val);
	},
	lightness: function (val) {
		return this.setChannel('hsl', 2, val);
	},
	saturationv: function (val) {
		return this.setChannel('hsv', 1, val);
	},
	whiteness: function (val) {
		return this.setChannel('hwb', 1, val);
	},
	blackness: function (val) {
		return this.setChannel('hwb', 2, val);
	},
	value: function (val) {
		return this.setChannel('hsv', 2, val);
	},
	cyan: function (val) {
		return this.setChannel('cmyk', 0, val);
	},
	magenta: function (val) {
		return this.setChannel('cmyk', 1, val);
	},
	yellow: function (val) {
		return this.setChannel('cmyk', 2, val);
	},
	black: function (val) {
		return this.setChannel('cmyk', 3, val);
	},

	hexString: function () {
		return string.hexString(this.values.rgb);
	},
	rgbString: function () {
		return string.rgbString(this.values.rgb, this.values.alpha);
	},
	rgbaString: function () {
		return string.rgbaString(this.values.rgb, this.values.alpha);
	},
	percentString: function () {
		return string.percentString(this.values.rgb, this.values.alpha);
	},
	hslString: function () {
		return string.hslString(this.values.hsl, this.values.alpha);
	},
	hslaString: function () {
		return string.hslaString(this.values.hsl, this.values.alpha);
	},
	hwbString: function () {
		return string.hwbString(this.values.hwb, this.values.alpha);
	},
	keyword: function () {
		return string.keyword(this.values.rgb, this.values.alpha);
	},

	rgbNumber: function () {
		var rgb = this.values.rgb;
		return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
	},

	luminosity: function () {
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
		var rgb = this.values.rgb;
		var lum = [];
		for (var i = 0; i < rgb.length; i++) {
			var chan = rgb[i] / 255;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
		}
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
	},

	contrast: function (color2) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		var lum1 = this.luminosity();
		var lum2 = color2.luminosity();
		if (lum1 > lum2) {
			return (lum1 + 0.05) / (lum2 + 0.05);
		}
		return (lum2 + 0.05) / (lum1 + 0.05);
	},

	level: function (color2) {
		var contrastRatio = this.contrast(color2);
		if (contrastRatio >= 7.1) {
			return 'AAA';
		}

		return (contrastRatio >= 4.5) ? 'AA' : '';
	},

	dark: function () {
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		var rgb = this.values.rgb;
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
		return yiq < 128;
	},

	light: function () {
		return !this.dark();
	},

	negate: function () {
		var rgb = [];
		for (var i = 0; i < 3; i++) {
			rgb[i] = 255 - this.values.rgb[i];
		}
		this.setValues('rgb', rgb);
		return this;
	},

	lighten: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] += hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	darken: function (ratio) {
		var hsl = this.values.hsl;
		hsl[2] -= hsl[2] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	saturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] += hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	desaturate: function (ratio) {
		var hsl = this.values.hsl;
		hsl[1] -= hsl[1] * ratio;
		this.setValues('hsl', hsl);
		return this;
	},

	whiten: function (ratio) {
		var hwb = this.values.hwb;
		hwb[1] += hwb[1] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	blacken: function (ratio) {
		var hwb = this.values.hwb;
		hwb[2] += hwb[2] * ratio;
		this.setValues('hwb', hwb);
		return this;
	},

	greyscale: function () {
		var rgb = this.values.rgb;
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
		this.setValues('rgb', [val, val, val]);
		return this;
	},

	clearer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha - (alpha * ratio));
		return this;
	},

	opaquer: function (ratio) {
		var alpha = this.values.alpha;
		this.setValues('alpha', alpha + (alpha * ratio));
		return this;
	},

	rotate: function (degrees) {
		var hsl = this.values.hsl;
		var hue = (hsl[0] + degrees) % 360;
		hsl[0] = hue < 0 ? 360 + hue : hue;
		this.setValues('hsl', hsl);
		return this;
	},

	/**
	 * Ported from sass implementation in C
	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
	 */
	mix: function (mixinColor, weight) {
		var color1 = this;
		var color2 = mixinColor;
		var p = weight === undefined ? 0.5 : weight;

		var w = 2 * p - 1;
		var a = color1.alpha() - color2.alpha();

		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
		var w2 = 1 - w1;

		return this
			.rgb(
				w1 * color1.red() + w2 * color2.red(),
				w1 * color1.green() + w2 * color2.green(),
				w1 * color1.blue() + w2 * color2.blue()
			)
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
	},

	toJSON: function () {
		return this.rgb();
	},

	clone: function () {
		// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
		// making the final build way to big to embed in Chart.js. So let's do it manually,
		// assuming that values to clone are 1 dimension arrays containing only numbers,
		// except 'alpha' which is a number.
		var result = new Color();
		var source = this.values;
		var target = result.values;
		var value, type;

		for (var prop in source) {
			if (source.hasOwnProperty(prop)) {
				value = source[prop];
				type = ({}).toString.call(value);
				if (type === '[object Array]') {
					target[prop] = value.slice(0);
				} else if (type === '[object Number]') {
					target[prop] = value;
				} else {
					console.error('unexpected color value:', value);
				}
			}
		}

		return result;
	}
};

Color.prototype.spaces = {
	rgb: ['red', 'green', 'blue'],
	hsl: ['hue', 'saturation', 'lightness'],
	hsv: ['hue', 'saturation', 'value'],
	hwb: ['hue', 'whiteness', 'blackness'],
	cmyk: ['cyan', 'magenta', 'yellow', 'black']
};

Color.prototype.maxes = {
	rgb: [255, 255, 255],
	hsl: [360, 100, 100],
	hsv: [360, 100, 100],
	hwb: [360, 100, 100],
	cmyk: [100, 100, 100, 100]
};

Color.prototype.getValues = function (space) {
	var values = this.values;
	var vals = {};

	for (var i = 0; i < space.length; i++) {
		vals[space.charAt(i)] = values[space][i];
	}

	if (values.alpha !== 1) {
		vals.a = values.alpha;
	}

	// {r: 255, g: 255, b: 255, a: 0.4}
	return vals;
};

Color.prototype.setValues = function (space, vals) {
	var values = this.values;
	var spaces = this.spaces;
	var maxes = this.maxes;
	var alpha = 1;
	var i;

	this.valid = true;

	if (space === 'alpha') {
		alpha = vals;
	} else if (vals.length) {
		// [10, 10, 10]
		values[space] = vals.slice(0, space.length);
		alpha = vals[space.length];
	} else if (vals[space.charAt(0)] !== undefined) {
		// {r: 10, g: 10, b: 10}
		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[space.charAt(i)];
		}

		alpha = vals.a;
	} else if (vals[spaces[space][0]] !== undefined) {
		// {red: 10, green: 10, blue: 10}
		var chans = spaces[space];

		for (i = 0; i < space.length; i++) {
			values[space][i] = vals[chans[i]];
		}

		alpha = vals.alpha;
	}

	values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));

	if (space === 'alpha') {
		return false;
	}

	var capped;

	// cap values of the space prior converting all values
	for (i = 0; i < space.length; i++) {
		capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
		values[space][i] = Math.round(capped);
	}

	// convert to all the other color spaces
	for (var sname in spaces) {
		if (sname !== space) {
			values[sname] = convert[space][sname](values[space]);
		}
	}

	return true;
};

Color.prototype.setSpace = function (space, args) {
	var vals = args[0];

	if (vals === undefined) {
		// color.rgb()
		return this.getValues(space);
	}

	// color.rgb(10, 10, 10)
	if (typeof vals === 'number') {
		vals = Array.prototype.slice.call(args);
	}

	this.setValues(space, vals);
	return this;
};

Color.prototype.setChannel = function (space, index, val) {
	var svalues = this.values[space];
	if (val === undefined) {
		// color.red()
		return svalues[index];
	} else if (val === svalues[index]) {
		// color.red(color.red())
		return this;
	}

	// color.red(100)
	svalues[index] = val;
	this.setValues(space, svalues);

	return this;
};

if (typeof window !== 'undefined') {
	window.Color = Color;
}

module.exports = Color;

},{"1":1,"4":4}],3:[function(require,module,exports){
/* MIT license */

module.exports = {
  rgb2hsl: rgb2hsl,
  rgb2hsv: rgb2hsv,
  rgb2hwb: rgb2hwb,
  rgb2cmyk: rgb2cmyk,
  rgb2keyword: rgb2keyword,
  rgb2xyz: rgb2xyz,
  rgb2lab: rgb2lab,
  rgb2lch: rgb2lch,

  hsl2rgb: hsl2rgb,
  hsl2hsv: hsl2hsv,
  hsl2hwb: hsl2hwb,
  hsl2cmyk: hsl2cmyk,
  hsl2keyword: hsl2keyword,

  hsv2rgb: hsv2rgb,
  hsv2hsl: hsv2hsl,
  hsv2hwb: hsv2hwb,
  hsv2cmyk: hsv2cmyk,
  hsv2keyword: hsv2keyword,

  hwb2rgb: hwb2rgb,
  hwb2hsl: hwb2hsl,
  hwb2hsv: hwb2hsv,
  hwb2cmyk: hwb2cmyk,
  hwb2keyword: hwb2keyword,

  cmyk2rgb: cmyk2rgb,
  cmyk2hsl: cmyk2hsl,
  cmyk2hsv: cmyk2hsv,
  cmyk2hwb: cmyk2hwb,
  cmyk2keyword: cmyk2keyword,

  keyword2rgb: keyword2rgb,
  keyword2hsl: keyword2hsl,
  keyword2hsv: keyword2hsv,
  keyword2hwb: keyword2hwb,
  keyword2cmyk: keyword2cmyk,
  keyword2lab: keyword2lab,
  keyword2xyz: keyword2xyz,

  xyz2rgb: xyz2rgb,
  xyz2lab: xyz2lab,
  xyz2lch: xyz2lch,

  lab2xyz: lab2xyz,
  lab2rgb: lab2rgb,
  lab2lch: lab2lch,

  lch2lab: lch2lab,
  lch2xyz: lch2xyz,
  lch2rgb: lch2rgb
}


function rgb2hsl(rgb) {
  var r = rgb[0]/255,
      g = rgb[1]/255,
      b = rgb[2]/255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, l;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g)/ delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  l = (min + max) / 2;

  if (max == min)
    s = 0;
  else if (l <= 0.5)
    s = delta / (max + min);
  else
    s = delta / (2 - max - min);

  return [h, s * 100, l * 100];
}

function rgb2hsv(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      delta = max - min,
      h, s, v;

  if (max == 0)
    s = 0;
  else
    s = (delta/max * 1000)/10;

  if (max == min)
    h = 0;
  else if (r == max)
    h = (g - b) / delta;
  else if (g == max)
    h = 2 + (b - r) / delta;
  else if (b == max)
    h = 4 + (r - g) / delta;

  h = Math.min(h * 60, 360);

  if (h < 0)
    h += 360;

  v = ((max / 255) * 1000) / 10;

  return [h, s, v];
}

function rgb2hwb(rgb) {
  var r = rgb[0],
      g = rgb[1],
      b = rgb[2],
      h = rgb2hsl(rgb)[0],
      w = 1/255 * Math.min(r, Math.min(g, b)),
      b = 1 - 1/255 * Math.max(r, Math.max(g, b));

  return [h, w * 100, b * 100];
}

function rgb2cmyk(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255,
      c, m, y, k;

  k = Math.min(1 - r, 1 - g, 1 - b);
  c = (1 - r - k) / (1 - k) || 0;
  m = (1 - g - k) / (1 - k) || 0;
  y = (1 - b - k) / (1 - k) || 0;
  return [c * 100, m * 100, y * 100, k * 100];
}

function rgb2keyword(rgb) {
  return reverseKeywords[JSON.stringify(rgb)];
}

function rgb2xyz(rgb) {
  var r = rgb[0] / 255,
      g = rgb[1] / 255,
      b = rgb[2] / 255;

  // assume sRGB
  r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
  g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
  b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);

  var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
  var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
  var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);

  return [x * 100, y *100, z * 100];
}

function rgb2lab(rgb) {
  var xyz = rgb2xyz(rgb),
        x = xyz[0],
        y = xyz[1],
        z = xyz[2],
        l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function rgb2lch(args) {
  return lab2lch(rgb2lab(args));
}

function hsl2rgb(hsl) {
  var h = hsl[0] / 360,
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      t1, t2, t3, rgb, val;

  if (s == 0) {
    val = l * 255;
    return [val, val, val];
  }

  if (l < 0.5)
    t2 = l * (1 + s);
  else
    t2 = l + s - l * s;
  t1 = 2 * l - t2;

  rgb = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    t3 = h + 1 / 3 * - (i - 1);
    t3 < 0 && t3++;
    t3 > 1 && t3--;

    if (6 * t3 < 1)
      val = t1 + (t2 - t1) * 6 * t3;
    else if (2 * t3 < 1)
      val = t2;
    else if (3 * t3 < 2)
      val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
    else
      val = t1;

    rgb[i] = val * 255;
  }

  return rgb;
}

function hsl2hsv(hsl) {
  var h = hsl[0],
      s = hsl[1] / 100,
      l = hsl[2] / 100,
      sv, v;

  if(l === 0) {
      // no need to do calc on black
      // also avoids divide by 0 error
      return [0, 0, 0];
  }

  l *= 2;
  s *= (l <= 1) ? l : 2 - l;
  v = (l + s) / 2;
  sv = (2 * s) / (l + s);
  return [h, sv * 100, v * 100];
}

function hsl2hwb(args) {
  return rgb2hwb(hsl2rgb(args));
}

function hsl2cmyk(args) {
  return rgb2cmyk(hsl2rgb(args));
}

function hsl2keyword(args) {
  return rgb2keyword(hsl2rgb(args));
}


function hsv2rgb(hsv) {
  var h = hsv[0] / 60,
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      hi = Math.floor(h) % 6;

  var f = h - Math.floor(h),
      p = 255 * v * (1 - s),
      q = 255 * v * (1 - (s * f)),
      t = 255 * v * (1 - (s * (1 - f))),
      v = 255 * v;

  switch(hi) {
    case 0:
      return [v, t, p];
    case 1:
      return [q, v, p];
    case 2:
      return [p, v, t];
    case 3:
      return [p, q, v];
    case 4:
      return [t, p, v];
    case 5:
      return [v, p, q];
  }
}

function hsv2hsl(hsv) {
  var h = hsv[0],
      s = hsv[1] / 100,
      v = hsv[2] / 100,
      sl, l;

  l = (2 - s) * v;
  sl = s * v;
  sl /= (l <= 1) ? l : 2 - l;
  sl = sl || 0;
  l /= 2;
  return [h, sl * 100, l * 100];
}

function hsv2hwb(args) {
  return rgb2hwb(hsv2rgb(args))
}

function hsv2cmyk(args) {
  return rgb2cmyk(hsv2rgb(args));
}

function hsv2keyword(args) {
  return rgb2keyword(hsv2rgb(args));
}

// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
function hwb2rgb(hwb) {
  var h = hwb[0] / 360,
      wh = hwb[1] / 100,
      bl = hwb[2] / 100,
      ratio = wh + bl,
      i, v, f, n;

  // wh + bl cant be > 1
  if (ratio > 1) {
    wh /= ratio;
    bl /= ratio;
  }

  i = Math.floor(6 * h);
  v = 1 - bl;
  f = 6 * h - i;
  if ((i & 0x01) != 0) {
    f = 1 - f;
  }
  n = wh + f * (v - wh);  // linear interpolation

  switch (i) {
    default:
    case 6:
    case 0: r = v; g = n; b = wh; break;
    case 1: r = n; g = v; b = wh; break;
    case 2: r = wh; g = v; b = n; break;
    case 3: r = wh; g = n; b = v; break;
    case 4: r = n; g = wh; b = v; break;
    case 5: r = v; g = wh; b = n; break;
  }

  return [r * 255, g * 255, b * 255];
}

function hwb2hsl(args) {
  return rgb2hsl(hwb2rgb(args));
}

function hwb2hsv(args) {
  return rgb2hsv(hwb2rgb(args));
}

function hwb2cmyk(args) {
  return rgb2cmyk(hwb2rgb(args));
}

function hwb2keyword(args) {
  return rgb2keyword(hwb2rgb(args));
}

function cmyk2rgb(cmyk) {
  var c = cmyk[0] / 100,
      m = cmyk[1] / 100,
      y = cmyk[2] / 100,
      k = cmyk[3] / 100,
      r, g, b;

  r = 1 - Math.min(1, c * (1 - k) + k);
  g = 1 - Math.min(1, m * (1 - k) + k);
  b = 1 - Math.min(1, y * (1 - k) + k);
  return [r * 255, g * 255, b * 255];
}

function cmyk2hsl(args) {
  return rgb2hsl(cmyk2rgb(args));
}

function cmyk2hsv(args) {
  return rgb2hsv(cmyk2rgb(args));
}

function cmyk2hwb(args) {
  return rgb2hwb(cmyk2rgb(args));
}

function cmyk2keyword(args) {
  return rgb2keyword(cmyk2rgb(args));
}


function xyz2rgb(xyz) {
  var x = xyz[0] / 100,
      y = xyz[1] / 100,
      z = xyz[2] / 100,
      r, g, b;

  r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
  g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
  b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);

  // assume sRGB
  r = r > 0.0031308 ? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
    : r = (r * 12.92);

  g = g > 0.0031308 ? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)
    : g = (g * 12.92);

  b = b > 0.0031308 ? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)
    : b = (b * 12.92);

  r = Math.min(Math.max(0, r), 1);
  g = Math.min(Math.max(0, g), 1);
  b = Math.min(Math.max(0, b), 1);

  return [r * 255, g * 255, b * 255];
}

function xyz2lab(xyz) {
  var x = xyz[0],
      y = xyz[1],
      z = xyz[2],
      l, a, b;

  x /= 95.047;
  y /= 100;
  z /= 108.883;

  x = x > 0.008856 ? Math.pow(x, 1/3) : (7.787 * x) + (16 / 116);
  y = y > 0.008856 ? Math.pow(y, 1/3) : (7.787 * y) + (16 / 116);
  z = z > 0.008856 ? Math.pow(z, 1/3) : (7.787 * z) + (16 / 116);

  l = (116 * y) - 16;
  a = 500 * (x - y);
  b = 200 * (y - z);

  return [l, a, b];
}

function xyz2lch(args) {
  return lab2lch(xyz2lab(args));
}

function lab2xyz(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      x, y, z, y2;

  if (l <= 8) {
    y = (l * 100) / 903.3;
    y2 = (7.787 * (y / 100)) + (16 / 116);
  } else {
    y = 100 * Math.pow((l + 16) / 116, 3);
    y2 = Math.pow(y / 100, 1/3);
  }

  x = x / 95.047 <= 0.008856 ? x = (95.047 * ((a / 500) + y2 - (16 / 116))) / 7.787 : 95.047 * Math.pow((a / 500) + y2, 3);

  z = z / 108.883 <= 0.008859 ? z = (108.883 * (y2 - (b / 200) - (16 / 116))) / 7.787 : 108.883 * Math.pow(y2 - (b / 200), 3);

  return [x, y, z];
}

function lab2lch(lab) {
  var l = lab[0],
      a = lab[1],
      b = lab[2],
      hr, h, c;

  hr = Math.atan2(b, a);
  h = hr * 360 / 2 / Math.PI;
  if (h < 0) {
    h += 360;
  }
  c = Math.sqrt(a * a + b * b);
  return [l, c, h];
}

function lab2rgb(args) {
  return xyz2rgb(lab2xyz(args));
}

function lch2lab(lch) {
  var l = lch[0],
      c = lch[1],
      h = lch[2],
      a, b, hr;

  hr = h / 360 * 2 * Math.PI;
  a = c * Math.cos(hr);
  b = c * Math.sin(hr);
  return [l, a, b];
}

function lch2xyz(args) {
  return lab2xyz(lch2lab(args));
}

function lch2rgb(args) {
  return lab2rgb(lch2lab(args));
}

function keyword2rgb(keyword) {
  return cssKeywords[keyword];
}

function keyword2hsl(args) {
  return rgb2hsl(keyword2rgb(args));
}

function keyword2hsv(args) {
  return rgb2hsv(keyword2rgb(args));
}

function keyword2hwb(args) {
  return rgb2hwb(keyword2rgb(args));
}

function keyword2cmyk(args) {
  return rgb2cmyk(keyword2rgb(args));
}

function keyword2lab(args) {
  return rgb2lab(keyword2rgb(args));
}

function keyword2xyz(args) {
  return rgb2xyz(keyword2rgb(args));
}

var cssKeywords = {
  aliceblue:  [240,248,255],
  antiquewhite: [250,235,215],
  aqua: [0,255,255],
  aquamarine: [127,255,212],
  azure:  [240,255,255],
  beige:  [245,245,220],
  bisque: [255,228,196],
  black:  [0,0,0],
  blanchedalmond: [255,235,205],
  blue: [0,0,255],
  blueviolet: [138,43,226],
  brown:  [165,42,42],
  burlywood:  [222,184,135],
  cadetblue:  [95,158,160],
  chartreuse: [127,255,0],
  chocolate:  [210,105,30],
  coral:  [255,127,80],
  cornflowerblue: [100,149,237],
  cornsilk: [255,248,220],
  crimson:  [220,20,60],
  cyan: [0,255,255],
  darkblue: [0,0,139],
  darkcyan: [0,139,139],
  darkgoldenrod:  [184,134,11],
  darkgray: [169,169,169],
  darkgreen:  [0,100,0],
  darkgrey: [169,169,169],
  darkkhaki:  [189,183,107],
  darkmagenta:  [139,0,139],
  darkolivegreen: [85,107,47],
  darkorange: [255,140,0],
  darkorchid: [153,50,204],
  darkred:  [139,0,0],
  darksalmon: [233,150,122],
  darkseagreen: [143,188,143],
  darkslateblue:  [72,61,139],
  darkslategray:  [47,79,79],
  darkslategrey:  [47,79,79],
  darkturquoise:  [0,206,209],
  darkviolet: [148,0,211],
  deeppink: [255,20,147],
  deepskyblue:  [0,191,255],
  dimgray:  [105,105,105],
  dimgrey:  [105,105,105],
  dodgerblue: [30,144,255],
  firebrick:  [178,34,34],
  floralwhite:  [255,250,240],
  forestgreen:  [34,139,34],
  fuchsia:  [255,0,255],
  gainsboro:  [220,220,220],
  ghostwhite: [248,248,255],
  gold: [255,215,0],
  goldenrod:  [218,165,32],
  gray: [128,128,128],
  green:  [0,128,0],
  greenyellow:  [173,255,47],
  grey: [128,128,128],
  honeydew: [240,255,240],
  hotpink:  [255,105,180],
  indianred:  [205,92,92],
  indigo: [75,0,130],
  ivory:  [255,255,240],
  khaki:  [240,230,140],
  lavender: [230,230,250],
  lavenderblush:  [255,240,245],
  lawngreen:  [124,252,0],
  lemonchiffon: [255,250,205],
  lightblue:  [173,216,230],
  lightcoral: [240,128,128],
  lightcyan:  [224,255,255],
  lightgoldenrodyellow: [250,250,210],
  lightgray:  [211,211,211],
  lightgreen: [144,238,144],
  lightgrey:  [211,211,211],
  lightpink:  [255,182,193],
  lightsalmon:  [255,160,122],
  lightseagreen:  [32,178,170],
  lightskyblue: [135,206,250],
  lightslategray: [119,136,153],
  lightslategrey: [119,136,153],
  lightsteelblue: [176,196,222],
  lightyellow:  [255,255,224],
  lime: [0,255,0],
  limegreen:  [50,205,50],
  linen:  [250,240,230],
  magenta:  [255,0,255],
  maroon: [128,0,0],
  mediumaquamarine: [102,205,170],
  mediumblue: [0,0,205],
  mediumorchid: [186,85,211],
  mediumpurple: [147,112,219],
  mediumseagreen: [60,179,113],
  mediumslateblue:  [123,104,238],
  mediumspringgreen:  [0,250,154],
  mediumturquoise:  [72,209,204],
  mediumvioletred:  [199,21,133],
  midnightblue: [25,25,112],
  mintcream:  [245,255,250],
  mistyrose:  [255,228,225],
  moccasin: [255,228,181],
  navajowhite:  [255,222,173],
  navy: [0,0,128],
  oldlace:  [253,245,230],
  olive:  [128,128,0],
  olivedrab:  [107,142,35],
  orange: [255,165,0],
  orangered:  [255,69,0],
  orchid: [218,112,214],
  palegoldenrod:  [238,232,170],
  palegreen:  [152,251,152],
  paleturquoise:  [175,238,238],
  palevioletred:  [219,112,147],
  papayawhip: [255,239,213],
  peachpuff:  [255,218,185],
  peru: [205,133,63],
  pink: [255,192,203],
  plum: [221,160,221],
  powderblue: [176,224,230],
  purple: [128,0,128],
  rebeccapurple: [102, 51, 153],
  red:  [255,0,0],
  rosybrown:  [188,143,143],
  royalblue:  [65,105,225],
  saddlebrown:  [139,69,19],
  salmon: [250,128,114],
  sandybrown: [244,164,96],
  seagreen: [46,139,87],
  seashell: [255,245,238],
  sienna: [160,82,45],
  silver: [192,192,192],
  skyblue:  [135,206,235],
  slateblue:  [106,90,205],
  slategray:  [112,128,144],
  slategrey:  [112,128,144],
  snow: [255,250,250],
  springgreen:  [0,255,127],
  steelblue:  [70,130,180],
  tan:  [210,180,140],
  teal: [0,128,128],
  thistle:  [216,191,216],
  tomato: [255,99,71],
  turquoise:  [64,224,208],
  violet: [238,130,238],
  wheat:  [245,222,179],
  white:  [255,255,255],
  whitesmoke: [245,245,245],
  yellow: [255,255,0],
  yellowgreen:  [154,205,50]
};

var reverseKeywords = {};
for (var key in cssKeywords) {
  reverseKeywords[JSON.stringify(cssKeywords[key])] = key;
}

},{}],4:[function(require,module,exports){
var conversions = require(3);

var convert = function() {
   return new Converter();
}

for (var func in conversions) {
  // export Raw versions
  convert[func + "Raw"] =  (function(func) {
    // accept array or plain args
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      return conversions[func](arg);
    }
  })(func);

  var pair = /(\w+)2(\w+)/.exec(func),
      from = pair[1],
      to = pair[2];

  // export rgb2hsl and ["rgb"]["hsl"]
  convert[from] = convert[from] || {};

  convert[from][to] = convert[func] = (function(func) { 
    return function(arg) {
      if (typeof arg == "number")
        arg = Array.prototype.slice.call(arguments);
      
      var val = conversions[func](arg);
      if (typeof val == "string" || val === undefined)
        return val; // keyword

      for (var i = 0; i < val.length; i++)
        val[i] = Math.round(val[i]);
      return val;
    }
  })(func);
}


/* Converter does lazy conversion and caching */
var Converter = function() {
   this.convs = {};
};

/* Either get the values for a space or
  set the values for a space, depending on args */
Converter.prototype.routeSpace = function(space, args) {
   var values = args[0];
   if (values === undefined) {
      // color.rgb()
      return this.getValues(space);
   }
   // color.rgb(10, 10, 10)
   if (typeof values == "number") {
      values = Array.prototype.slice.call(args);        
   }

   return this.setValues(space, values);
};
  
/* Set the values for a space, invalidating cache */
Converter.prototype.setValues = function(space, values) {
   this.space = space;
   this.convs = {};
   this.convs[space] = values;
   return this;
};

/* Get the values for a space. If there's already
  a conversion for the space, fetch it, otherwise
  compute it */
Converter.prototype.getValues = function(space) {
   var vals = this.convs[space];
   if (!vals) {
      var fspace = this.space,
          from = this.convs[fspace];
      vals = convert[fspace][space](from);

      this.convs[space] = vals;
   }
  return vals;
};

["rgb", "hsl", "hsv", "cmyk", "keyword"].forEach(function(space) {
   Converter.prototype[space] = function(vals) {
      return this.routeSpace(space, arguments);
   }
});

module.exports = convert;
},{"3":3}],5:[function(require,module,exports){
'use strict'

module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

},{}],6:[function(require,module,exports){
//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

;(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.moment = factory()
}(this, (function () { 'use strict';

var hookCallback;

function hooks () {
    return hookCallback.apply(null, arguments);
}

// This is done to register the method called with moment()
// without creating circular dependencies.
function setHookCallback (callback) {
    hookCallback = callback;
}

function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
}

function isObject(input) {
    // IE8 will treat undefined and null as object if it wasn't for
    // input != null
    return input != null && Object.prototype.toString.call(input) === '[object Object]';
}

function isObjectEmpty(obj) {
    var k;
    for (k in obj) {
        // even if its not own property I'd still call it non-empty
        return false;
    }
    return true;
}

function isUndefined(input) {
    return input === void 0;
}

function isNumber(input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
}

function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
}

function map(arr, fn) {
    var res = [], i;
    for (i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    return res;
}

function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}

function extend(a, b) {
    for (var i in b) {
        if (hasOwnProp(b, i)) {
            a[i] = b[i];
        }
    }

    if (hasOwnProp(b, 'toString')) {
        a.toString = b.toString;
    }

    if (hasOwnProp(b, 'valueOf')) {
        a.valueOf = b.valueOf;
    }

    return a;
}

function createUTC (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
}

function defaultParsingFlags() {
    // We need to deep clone this object.
    return {
        empty           : false,
        unusedTokens    : [],
        unusedInput     : [],
        overflow        : -2,
        charsLeftOver   : 0,
        nullInput       : false,
        invalidMonth    : null,
        invalidFormat   : false,
        userInvalidated : false,
        iso             : false,
        parsedDateParts : [],
        meridiem        : null,
        rfc2822         : false,
        weekdayMismatch : false
    };
}

function getParsingFlags(m) {
    if (m._pf == null) {
        m._pf = defaultParsingFlags();
    }
    return m._pf;
}

var some;
if (Array.prototype.some) {
    some = Array.prototype.some;
} else {
    some = function (fun) {
        var t = Object(this);
        var len = t.length >>> 0;

        for (var i = 0; i < len; i++) {
            if (i in t && fun.call(this, t[i], i, t)) {
                return true;
            }
        }

        return false;
    };
}

var some$1 = some;

function isValid(m) {
    if (m._isValid == null) {
        var flags = getParsingFlags(m);
        var parsedParts = some$1.call(flags.parsedDateParts, function (i) {
            return i != null;
        });
        var isNowValid = !isNaN(m._d.getTime()) &&
            flags.overflow < 0 &&
            !flags.empty &&
            !flags.invalidMonth &&
            !flags.invalidWeekday &&
            !flags.nullInput &&
            !flags.invalidFormat &&
            !flags.userInvalidated &&
            (!flags.meridiem || (flags.meridiem && parsedParts));

        if (m._strict) {
            isNowValid = isNowValid &&
                flags.charsLeftOver === 0 &&
                flags.unusedTokens.length === 0 &&
                flags.bigHour === undefined;
        }

        if (Object.isFrozen == null || !Object.isFrozen(m)) {
            m._isValid = isNowValid;
        }
        else {
            return isNowValid;
        }
    }
    return m._isValid;
}

function createInvalid (flags) {
    var m = createUTC(NaN);
    if (flags != null) {
        extend(getParsingFlags(m), flags);
    }
    else {
        getParsingFlags(m).userInvalidated = true;
    }

    return m;
}

// Plugins that add properties should also add the key here (null value),
// so we can properly clone ourselves.
var momentProperties = hooks.momentProperties = [];

function copyConfig(to, from) {
    var i, prop, val;

    if (!isUndefined(from._isAMomentObject)) {
        to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
        to._i = from._i;
    }
    if (!isUndefined(from._f)) {
        to._f = from._f;
    }
    if (!isUndefined(from._l)) {
        to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
        to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
        to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
        to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
        to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
        to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
        to._locale = from._locale;
    }

    if (momentProperties.length > 0) {
        for (i = 0; i < momentProperties.length; i++) {
            prop = momentProperties[i];
            val = from[prop];
            if (!isUndefined(val)) {
                to[prop] = val;
            }
        }
    }

    return to;
}

var updateInProgress = false;

// Moment prototype object
function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (!this.isValid()) {
        this._d = new Date(NaN);
    }
    // Prevent infinite loop in case updateOffset creates new moment
    // objects.
    if (updateInProgress === false) {
        updateInProgress = true;
        hooks.updateOffset(this);
        updateInProgress = false;
    }
}

function isMoment (obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
}

function absFloor (number) {
    if (number < 0) {
        // -0 -> 0
        return Math.ceil(number) || 0;
    } else {
        return Math.floor(number);
    }
}

function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;

    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
        value = absFloor(coercedNumber);
    }

    return value;
}

// compare two arrays, return the number of differences
function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
        if ((dontConvert && array1[i] !== array2[i]) ||
            (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
            diffs++;
        }
    }
    return diffs + lengthDiff;
}

function warn(msg) {
    if (hooks.suppressDeprecationWarnings === false &&
            (typeof console !==  'undefined') && console.warn) {
        console.warn('Deprecation warning: ' + msg);
    }
}

function deprecate(msg, fn) {
    var firstTime = true;

    return extend(function () {
        if (hooks.deprecationHandler != null) {
            hooks.deprecationHandler(null, msg);
        }
        if (firstTime) {
            var args = [];
            var arg;
            for (var i = 0; i < arguments.length; i++) {
                arg = '';
                if (typeof arguments[i] === 'object') {
                    arg += '\n[' + i + '] ';
                    for (var key in arguments[0]) {
                        arg += key + ': ' + arguments[0][key] + ', ';
                    }
                    arg = arg.slice(0, -2); // Remove trailing comma and space
                } else {
                    arg = arguments[i];
                }
                args.push(arg);
            }
            warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
            firstTime = false;
        }
        return fn.apply(this, arguments);
    }, fn);
}

var deprecations = {};

function deprecateSimple(name, msg) {
    if (hooks.deprecationHandler != null) {
        hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
        warn(msg);
        deprecations[name] = true;
    }
}

hooks.suppressDeprecationWarnings = false;
hooks.deprecationHandler = null;

function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
}

function set (config) {
    var prop, i;
    for (i in config) {
        prop = config[i];
        if (isFunction(prop)) {
            this[i] = prop;
        } else {
            this['_' + i] = prop;
        }
    }
    this._config = config;
    // Lenient ordinal parsing accepts just a number in addition to
    // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
    // TODO: Remove "ordinalParse" fallback in next major release.
    this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            '|' + (/\d{1,2}/).source);
}

function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig), prop;
    for (prop in childConfig) {
        if (hasOwnProp(childConfig, prop)) {
            if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
                res[prop] = {};
                extend(res[prop], parentConfig[prop]);
                extend(res[prop], childConfig[prop]);
            } else if (childConfig[prop] != null) {
                res[prop] = childConfig[prop];
            } else {
                delete res[prop];
            }
        }
    }
    for (prop in parentConfig) {
        if (hasOwnProp(parentConfig, prop) &&
                !hasOwnProp(childConfig, prop) &&
                isObject(parentConfig[prop])) {
            // make sure changes to properties don't modify parent config
            res[prop] = extend({}, res[prop]);
        }
    }
    return res;
}

function Locale(config) {
    if (config != null) {
        this.set(config);
    }
}

var keys;

if (Object.keys) {
    keys = Object.keys;
} else {
    keys = function (obj) {
        var i, res = [];
        for (i in obj) {
            if (hasOwnProp(obj, i)) {
                res.push(i);
            }
        }
        return res;
    };
}

var keys$1 = keys;

var defaultCalendar = {
    sameDay : '[Today at] LT',
    nextDay : '[Tomorrow at] LT',
    nextWeek : 'dddd [at] LT',
    lastDay : '[Yesterday at] LT',
    lastWeek : '[Last] dddd [at] LT',
    sameElse : 'L'
};

function calendar (key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}

var defaultLongDateFormat = {
    LTS  : 'h:mm:ss A',
    LT   : 'h:mm A',
    L    : 'MM/DD/YYYY',
    LL   : 'MMMM D, YYYY',
    LLL  : 'MMMM D, YYYY h:mm A',
    LLLL : 'dddd, MMMM D, YYYY h:mm A'
};

function longDateFormat (key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];

    if (format || !formatUpper) {
        return format;
    }

    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
        return val.slice(1);
    });

    return this._longDateFormat[key];
}

var defaultInvalidDate = 'Invalid date';

function invalidDate () {
    return this._invalidDate;
}

var defaultOrdinal = '%d';
var defaultDayOfMonthOrdinalParse = /\d{1,2}/;

function ordinal (number) {
    return this._ordinal.replace('%d', number);
}

var defaultRelativeTime = {
    future : 'in %s',
    past   : '%s ago',
    s  : 'a few seconds',
    ss : '%d seconds',
    m  : 'a minute',
    mm : '%d minutes',
    h  : 'an hour',
    hh : '%d hours',
    d  : 'a day',
    dd : '%d days',
    M  : 'a month',
    MM : '%d months',
    y  : 'a year',
    yy : '%d years'
};

function relativeTime (number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ?
        output(number, withoutSuffix, string, isFuture) :
        output.replace(/%d/i, number);
}

function pastFuture (diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
}

var aliases = {};

function addUnitAlias (unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
}

function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
}

function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;

    for (prop in inputObject) {
        if (hasOwnProp(inputObject, prop)) {
            normalizedProp = normalizeUnits(prop);
            if (normalizedProp) {
                normalizedInput[normalizedProp] = inputObject[prop];
            }
        }
    }

    return normalizedInput;
}

var priorities = {};

function addUnitPriority(unit, priority) {
    priorities[unit] = priority;
}

function getPrioritizedUnits(unitsObj) {
    var units = [];
    for (var u in unitsObj) {
        units.push({unit: u, priority: priorities[u]});
    }
    units.sort(function (a, b) {
        return a.priority - b.priority;
    });
    return units;
}

function makeGetSet (unit, keepTime) {
    return function (value) {
        if (value != null) {
            set$1(this, unit, value);
            hooks.updateOffset(this, keepTime);
            return this;
        } else {
            return get(this, unit);
        }
    };
}

function get (mom, unit) {
    return mom.isValid() ?
        mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
}

function set$1 (mom, unit, value) {
    if (mom.isValid()) {
        mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
}

// MOMENTS

function stringGet (units) {
    units = normalizeUnits(units);
    if (isFunction(this[units])) {
        return this[units]();
    }
    return this;
}


function stringSet (units, value) {
    if (typeof units === 'object') {
        units = normalizeObjectUnits(units);
        var prioritized = getPrioritizedUnits(units);
        for (var i = 0; i < prioritized.length; i++) {
            this[prioritized[i].unit](units[prioritized[i].unit]);
        }
    } else {
        units = normalizeUnits(units);
        if (isFunction(this[units])) {
            return this[units](value);
        }
    }
    return this;
}

function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
}

var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;

var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

var formatFunctions = {};

var formatTokenFunctions = {};

// token:    'M'
// padded:   ['MM', 2]
// ordinal:  'Mo'
// callback: function () { this.month() + 1 }
function addFormatToken (token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
        func = function () {
            return this[callback]();
        };
    }
    if (token) {
        formatTokenFunctions[token] = func;
    }
    if (padded) {
        formatTokenFunctions[padded[0]] = function () {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
        };
    }
    if (ordinal) {
        formatTokenFunctions[ordinal] = function () {
            return this.localeData().ordinal(func.apply(this, arguments), token);
        };
    }
}

function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
        return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
}

function makeFormatFunction(format) {
    var array = format.match(formattingTokens), i, length;

    for (i = 0, length = array.length; i < length; i++) {
        if (formatTokenFunctions[array[i]]) {
            array[i] = formatTokenFunctions[array[i]];
        } else {
            array[i] = removeFormattingTokens(array[i]);
        }
    }

    return function (mom) {
        var output = '', i;
        for (i = 0; i < length; i++) {
            output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
        }
        return output;
    };
}

// format date using native date object
function formatMoment(m, format) {
    if (!m.isValid()) {
        return m.localeData().invalidDate();
    }

    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);

    return formatFunctions[format](m);
}

function expandFormat(format, locale) {
    var i = 5;

    function replaceLongDateFormatTokens(input) {
        return locale.longDateFormat(input) || input;
    }

    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
        format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
        localFormattingTokens.lastIndex = 0;
        i -= 1;
    }

    return format;
}

var match1         = /\d/;            //       0 - 9
var match2         = /\d\d/;          //      00 - 99
var match3         = /\d{3}/;         //     000 - 999
var match4         = /\d{4}/;         //    0000 - 9999
var match6         = /[+-]?\d{6}/;    // -999999 - 999999
var match1to2      = /\d\d?/;         //       0 - 99
var match3to4      = /\d\d\d\d?/;     //     999 - 9999
var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
var match1to3      = /\d{1,3}/;       //       0 - 999
var match1to4      = /\d{1,4}/;       //       0 - 9999
var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

var matchUnsigned  = /\d+/;           //       0 - inf
var matchSigned    = /[+-]?\d+/;      //    -inf - inf

var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z

var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

// any word (or two) characters or numbers including two/three word month in arabic.
// includes scottish gaelic two word and hyphenated months
var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;


var regexes = {};

function addRegexToken (token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
        return (isStrict && strictRegex) ? strictRegex : regex;
    };
}

function getParseRegexForToken (token, config) {
    if (!hasOwnProp(regexes, token)) {
        return new RegExp(unescapeFormat(token));
    }

    return regexes[token](config._strict, config._locale);
}

// Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
        return p1 || p2 || p3 || p4;
    }));
}

function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

var tokens = {};

function addParseToken (token, callback) {
    var i, func = callback;
    if (typeof token === 'string') {
        token = [token];
    }
    if (isNumber(callback)) {
        func = function (input, array) {
            array[callback] = toInt(input);
        };
    }
    for (i = 0; i < token.length; i++) {
        tokens[token[i]] = func;
    }
}

function addWeekParseToken (token, callback) {
    addParseToken(token, function (input, array, config, token) {
        config._w = config._w || {};
        callback(input, config._w, config, token);
    });
}

function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
        tokens[token](input, config._a, config, token);
    }
}

var YEAR = 0;
var MONTH = 1;
var DATE = 2;
var HOUR = 3;
var MINUTE = 4;
var SECOND = 5;
var MILLISECOND = 6;
var WEEK = 7;
var WEEKDAY = 8;

var indexOf;

if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
} else {
    indexOf = function (o) {
        // I know
        var i;
        for (i = 0; i < this.length; ++i) {
            if (this[i] === o) {
                return i;
            }
        }
        return -1;
    };
}

var indexOf$1 = indexOf;

function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
}

// FORMATTING

addFormatToken('M', ['MM', 2], 'Mo', function () {
    return this.month() + 1;
});

addFormatToken('MMM', 0, 0, function (format) {
    return this.localeData().monthsShort(this, format);
});

addFormatToken('MMMM', 0, 0, function (format) {
    return this.localeData().months(this, format);
});

// ALIASES

addUnitAlias('month', 'M');

// PRIORITY

addUnitPriority('month', 8);

// PARSING

addRegexToken('M',    match1to2);
addRegexToken('MM',   match1to2, match2);
addRegexToken('MMM',  function (isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
});
addRegexToken('MMMM', function (isStrict, locale) {
    return locale.monthsRegex(isStrict);
});

addParseToken(['M', 'MM'], function (input, array) {
    array[MONTH] = toInt(input) - 1;
});

addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    // if we didn't find a month name, mark the date as invalid.
    if (month != null) {
        array[MONTH] = month;
    } else {
        getParsingFlags(config).invalidMonth = input;
    }
});

// LOCALES

var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
function localeMonths (m, format) {
    if (!m) {
        return isArray(this._months) ? this._months :
            this._months['standalone'];
    }
    return isArray(this._months) ? this._months[m.month()] :
        this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
}

var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
function localeMonthsShort (m, format) {
    if (!m) {
        return isArray(this._monthsShort) ? this._monthsShort :
            this._monthsShort['standalone'];
    }
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
        this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
}

function handleStrictParse(monthName, format, strict) {
    var i, ii, mom, llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
        // this is not used
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
        for (i = 0; i < 12; ++i) {
            mom = createUTC([2000, i]);
            this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
            this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'MMM') {
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._longMonthsParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._longMonthsParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortMonthsParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeMonthsParse (monthName, format, strict) {
    var i, mom, regex;

    if (this._monthsParseExact) {
        return handleStrictParse.call(this, monthName, format, strict);
    }

    if (!this._monthsParse) {
        this._monthsParse = [];
        this._longMonthsParse = [];
        this._shortMonthsParse = [];
    }

    // TODO: add sorting
    // Sorting makes sure if one month (or abbr) is a prefix of another
    // see sorting in computeMonthsParse
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        if (strict && !this._longMonthsParse[i]) {
            this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
            this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
        }
        if (!strict && !this._monthsParse[i]) {
            regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
            this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
            return i;
        } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
            return i;
        } else if (!strict && this._monthsParse[i].test(monthName)) {
            return i;
        }
    }
}

// MOMENTS

function setMonth (mom, value) {
    var dayOfMonth;

    if (!mom.isValid()) {
        // No op
        return mom;
    }

    if (typeof value === 'string') {
        if (/^\d+$/.test(value)) {
            value = toInt(value);
        } else {
            value = mom.localeData().monthsParse(value);
            // TODO: Another silent failure?
            if (!isNumber(value)) {
                return mom;
            }
        }
    }

    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
}

function getSetMonth (value) {
    if (value != null) {
        setMonth(this, value);
        hooks.updateOffset(this, true);
        return this;
    } else {
        return get(this, 'Month');
    }
}

function getDaysInMonth () {
    return daysInMonth(this.year(), this.month());
}

var defaultMonthsShortRegex = matchWord;
function monthsShortRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsShortStrictRegex;
        } else {
            return this._monthsShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsShortRegex')) {
            this._monthsShortRegex = defaultMonthsShortRegex;
        }
        return this._monthsShortStrictRegex && isStrict ?
            this._monthsShortStrictRegex : this._monthsShortRegex;
    }
}

var defaultMonthsRegex = matchWord;
function monthsRegex (isStrict) {
    if (this._monthsParseExact) {
        if (!hasOwnProp(this, '_monthsRegex')) {
            computeMonthsParse.call(this);
        }
        if (isStrict) {
            return this._monthsStrictRegex;
        } else {
            return this._monthsRegex;
        }
    } else {
        if (!hasOwnProp(this, '_monthsRegex')) {
            this._monthsRegex = defaultMonthsRegex;
        }
        return this._monthsStrictRegex && isStrict ?
            this._monthsStrictRegex : this._monthsRegex;
    }
}

function computeMonthsParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom;
    for (i = 0; i < 12; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, i]);
        shortPieces.push(this.monthsShort(mom, ''));
        longPieces.push(this.months(mom, ''));
        mixedPieces.push(this.months(mom, ''));
        mixedPieces.push(this.monthsShort(mom, ''));
    }
    // Sorting makes sure if one month (or abbr) is a prefix of another it
    // will match the longer piece.
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
    }
    for (i = 0; i < 24; i++) {
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
}

// FORMATTING

addFormatToken('Y', 0, 0, function () {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
});

addFormatToken(0, ['YY', 2], 0, function () {
    return this.year() % 100;
});

addFormatToken(0, ['YYYY',   4],       0, 'year');
addFormatToken(0, ['YYYYY',  5],       0, 'year');
addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

// ALIASES

addUnitAlias('year', 'y');

// PRIORITIES

addUnitPriority('year', 1);

// PARSING

addRegexToken('Y',      matchSigned);
addRegexToken('YY',     match1to2, match2);
addRegexToken('YYYY',   match1to4, match4);
addRegexToken('YYYYY',  match1to6, match6);
addRegexToken('YYYYYY', match1to6, match6);

addParseToken(['YYYYY', 'YYYYYY'], YEAR);
addParseToken('YYYY', function (input, array) {
    array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
});
addParseToken('YY', function (input, array) {
    array[YEAR] = hooks.parseTwoDigitYear(input);
});
addParseToken('Y', function (input, array) {
    array[YEAR] = parseInt(input, 10);
});

// HELPERS

function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

// HOOKS

hooks.parseTwoDigitYear = function (input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
};

// MOMENTS

var getSetYear = makeGetSet('FullYear', true);

function getIsLeapYear () {
    return isLeapYear(this.year());
}

function createDate (y, m, d, h, M, s, ms) {
    // can't just apply() to create a date:
    // https://stackoverflow.com/q/181348
    var date = new Date(y, m, d, h, M, s, ms);

    // the date constructor remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
        date.setFullYear(y);
    }
    return date;
}

function createUTCDate (y) {
    var date = new Date(Date.UTC.apply(null, arguments));

    // the Date.UTC function remaps years 0-99 to 1900-1999
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
        date.setUTCFullYear(y);
    }
    return date;
}

// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
        fwd = 7 + dow - doy,
        // first-week day local weekday -- which local weekday is fwd
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;

    return -fwdlw + fwd - 1;
}

// https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear, resDayOfYear;

    if (dayOfYear <= 0) {
        resYear = year - 1;
        resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
        resYear = year + 1;
        resDayOfYear = dayOfYear - daysInYear(year);
    } else {
        resYear = year;
        resDayOfYear = dayOfYear;
    }

    return {
        year: resYear,
        dayOfYear: resDayOfYear
    };
}

function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek, resYear;

    if (week < 1) {
        resYear = mom.year() - 1;
        resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
        resWeek = week - weeksInYear(mom.year(), dow, doy);
        resYear = mom.year() + 1;
    } else {
        resYear = mom.year();
        resWeek = week;
    }

    return {
        week: resWeek,
        year: resYear
    };
}

function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
}

// FORMATTING

addFormatToken('w', ['ww', 2], 'wo', 'week');
addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

// ALIASES

addUnitAlias('week', 'w');
addUnitAlias('isoWeek', 'W');

// PRIORITIES

addUnitPriority('week', 5);
addUnitPriority('isoWeek', 5);

// PARSING

addRegexToken('w',  match1to2);
addRegexToken('ww', match1to2, match2);
addRegexToken('W',  match1to2);
addRegexToken('WW', match1to2, match2);

addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
});

// HELPERS

// LOCALES

function localeWeek (mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
}

var defaultLocaleWeek = {
    dow : 0, // Sunday is the first day of the week.
    doy : 6  // The week that contains Jan 1st is the first week of the year.
};

function localeFirstDayOfWeek () {
    return this._week.dow;
}

function localeFirstDayOfYear () {
    return this._week.doy;
}

// MOMENTS

function getSetWeek (input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
}

function getSetISOWeek (input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
}

// FORMATTING

addFormatToken('d', 0, 'do', 'day');

addFormatToken('dd', 0, 0, function (format) {
    return this.localeData().weekdaysMin(this, format);
});

addFormatToken('ddd', 0, 0, function (format) {
    return this.localeData().weekdaysShort(this, format);
});

addFormatToken('dddd', 0, 0, function (format) {
    return this.localeData().weekdays(this, format);
});

addFormatToken('e', 0, 0, 'weekday');
addFormatToken('E', 0, 0, 'isoWeekday');

// ALIASES

addUnitAlias('day', 'd');
addUnitAlias('weekday', 'e');
addUnitAlias('isoWeekday', 'E');

// PRIORITY
addUnitPriority('day', 11);
addUnitPriority('weekday', 11);
addUnitPriority('isoWeekday', 11);

// PARSING

addRegexToken('d',    match1to2);
addRegexToken('e',    match1to2);
addRegexToken('E',    match1to2);
addRegexToken('dd',   function (isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
});
addRegexToken('ddd',   function (isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
});
addRegexToken('dddd',   function (isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
});

addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    // if we didn't get a weekday name, mark the date as invalid
    if (weekday != null) {
        week.d = weekday;
    } else {
        getParsingFlags(config).invalidWeekday = input;
    }
});

addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
    week[token] = toInt(input);
});

// HELPERS

function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
        return input;
    }

    if (!isNaN(input)) {
        return parseInt(input, 10);
    }

    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
        return input;
    }

    return null;
}

function parseIsoWeekday(input, locale) {
    if (typeof input === 'string') {
        return locale.weekdaysParse(input) % 7 || 7;
    }
    return isNaN(input) ? null : input;
}

// LOCALES

var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
function localeWeekdays (m, format) {
    if (!m) {
        return isArray(this._weekdays) ? this._weekdays :
            this._weekdays['standalone'];
    }
    return isArray(this._weekdays) ? this._weekdays[m.day()] :
        this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
}

var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
function localeWeekdaysShort (m) {
    return (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
}

var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
function localeWeekdaysMin (m) {
    return (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
}

function handleStrictParse$1(weekdayName, format, strict) {
    var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._minWeekdaysParse = [];

        for (i = 0; i < 7; ++i) {
            mom = createUTC([2000, 1]).day(i);
            this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
            this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
            this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
        }
    }

    if (strict) {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    } else {
        if (format === 'dddd') {
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else if (format === 'ddd') {
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        } else {
            ii = indexOf$1.call(this._minWeekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._weekdaysParse, llc);
            if (ii !== -1) {
                return ii;
            }
            ii = indexOf$1.call(this._shortWeekdaysParse, llc);
            return ii !== -1 ? ii : null;
        }
    }
}

function localeWeekdaysParse (weekdayName, format, strict) {
    var i, mom, regex;

    if (this._weekdaysParseExact) {
        return handleStrictParse$1.call(this, weekdayName, format, strict);
    }

    if (!this._weekdaysParse) {
        this._weekdaysParse = [];
        this._minWeekdaysParse = [];
        this._shortWeekdaysParse = [];
        this._fullWeekdaysParse = [];
    }

    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already

        mom = createUTC([2000, 1]).day(i);
        if (strict && !this._fullWeekdaysParse[i]) {
            this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
            this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
            this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
        }
        if (!this._weekdaysParse[i]) {
            regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
            this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
        }
        // test the regex
        if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
            return i;
        } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
            return i;
        }
    }
}

// MOMENTS

function getSetDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
        input = parseWeekday(input, this.localeData());
        return this.add(input - day, 'd');
    } else {
        return day;
    }
}

function getSetLocaleDayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
}

function getSetISODayOfWeek (input) {
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }

    // behaves the same as moment#day except
    // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
    // as a setter, sunday should belong to the previous week.

    if (input != null) {
        var weekday = parseIsoWeekday(input, this.localeData());
        return this.day(this.day() % 7 ? weekday : weekday - 7);
    } else {
        return this.day() || 7;
    }
}

var defaultWeekdaysRegex = matchWord;
function weekdaysRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysStrictRegex;
        } else {
            return this._weekdaysRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            this._weekdaysRegex = defaultWeekdaysRegex;
        }
        return this._weekdaysStrictRegex && isStrict ?
            this._weekdaysStrictRegex : this._weekdaysRegex;
    }
}

var defaultWeekdaysShortRegex = matchWord;
function weekdaysShortRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysShortStrictRegex;
        } else {
            return this._weekdaysShortRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysShortRegex')) {
            this._weekdaysShortRegex = defaultWeekdaysShortRegex;
        }
        return this._weekdaysShortStrictRegex && isStrict ?
            this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
}

var defaultWeekdaysMinRegex = matchWord;
function weekdaysMinRegex (isStrict) {
    if (this._weekdaysParseExact) {
        if (!hasOwnProp(this, '_weekdaysRegex')) {
            computeWeekdaysParse.call(this);
        }
        if (isStrict) {
            return this._weekdaysMinStrictRegex;
        } else {
            return this._weekdaysMinRegex;
        }
    } else {
        if (!hasOwnProp(this, '_weekdaysMinRegex')) {
            this._weekdaysMinRegex = defaultWeekdaysMinRegex;
        }
        return this._weekdaysMinStrictRegex && isStrict ?
            this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
}


function computeWeekdaysParse () {
    function cmpLenRev(a, b) {
        return b.length - a.length;
    }

    var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
        i, mom, minp, shortp, longp;
    for (i = 0; i < 7; i++) {
        // make the regex if we don't have it already
        mom = createUTC([2000, 1]).day(i);
        minp = this.weekdaysMin(mom, '');
        shortp = this.weekdaysShort(mom, '');
        longp = this.weekdays(mom, '');
        minPieces.push(minp);
        shortPieces.push(shortp);
        longPieces.push(longp);
        mixedPieces.push(minp);
        mixedPieces.push(shortp);
        mixedPieces.push(longp);
    }
    // Sorting makes sure if one weekday (or abbr) is a prefix of another it
    // will match the longer piece.
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
        shortPieces[i] = regexEscape(shortPieces[i]);
        longPieces[i] = regexEscape(longPieces[i]);
        mixedPieces[i] = regexEscape(mixedPieces[i]);
    }

    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;

    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
}

// FORMATTING

function hFormat() {
    return this.hours() % 12 || 12;
}

function kFormat() {
    return this.hours() || 24;
}

addFormatToken('H', ['HH', 2], 0, 'hour');
addFormatToken('h', ['hh', 2], 0, hFormat);
addFormatToken('k', ['kk', 2], 0, kFormat);

addFormatToken('hmm', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
});

addFormatToken('hmmss', 0, 0, function () {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

addFormatToken('Hmm', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
});

addFormatToken('Hmmss', 0, 0, function () {
    return '' + this.hours() + zeroFill(this.minutes(), 2) +
        zeroFill(this.seconds(), 2);
});

function meridiem (token, lowercase) {
    addFormatToken(token, 0, 0, function () {
        return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
}

meridiem('a', true);
meridiem('A', false);

// ALIASES

addUnitAlias('hour', 'h');

// PRIORITY
addUnitPriority('hour', 13);

// PARSING

function matchMeridiem (isStrict, locale) {
    return locale._meridiemParse;
}

addRegexToken('a',  matchMeridiem);
addRegexToken('A',  matchMeridiem);
addRegexToken('H',  match1to2);
addRegexToken('h',  match1to2);
addRegexToken('k',  match1to2);
addRegexToken('HH', match1to2, match2);
addRegexToken('hh', match1to2, match2);
addRegexToken('kk', match1to2, match2);

addRegexToken('hmm', match3to4);
addRegexToken('hmmss', match5to6);
addRegexToken('Hmm', match3to4);
addRegexToken('Hmmss', match5to6);

addParseToken(['H', 'HH'], HOUR);
addParseToken(['k', 'kk'], function (input, array, config) {
    var kInput = toInt(input);
    array[HOUR] = kInput === 24 ? 0 : kInput;
});
addParseToken(['a', 'A'], function (input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
});
addParseToken(['h', 'hh'], function (input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
});
addParseToken('hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
});
addParseToken('Hmm', function (input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
});
addParseToken('Hmmss', function (input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
});

// LOCALES

function localeIsPM (input) {
    // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
    // Using charAt should be more compatible.
    return ((input + '').toLowerCase().charAt(0) === 'p');
}

var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
function localeMeridiem (hours, minutes, isLower) {
    if (hours > 11) {
        return isLower ? 'pm' : 'PM';
    } else {
        return isLower ? 'am' : 'AM';
    }
}


// MOMENTS

// Setting the hour should keep the time, because the user explicitly
// specified which hour he wants. So trying to maintain the same hour (in
// a new timezone) makes sense. Adding/subtracting hours does not follow
// this rule.
var getSetHour = makeGetSet('Hours', true);

// months
// week
// weekdays
// meridiem
var baseConfig = {
    calendar: defaultCalendar,
    longDateFormat: defaultLongDateFormat,
    invalidDate: defaultInvalidDate,
    ordinal: defaultOrdinal,
    dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
    relativeTime: defaultRelativeTime,

    months: defaultLocaleMonths,
    monthsShort: defaultLocaleMonthsShort,

    week: defaultLocaleWeek,

    weekdays: defaultLocaleWeekdays,
    weekdaysMin: defaultLocaleWeekdaysMin,
    weekdaysShort: defaultLocaleWeekdaysShort,

    meridiemParse: defaultLocaleMeridiemParse
};

// internal storage for locale config files
var locales = {};
var localeFamilies = {};
var globalLocale;

function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
}

// pick the locale from the array
// try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
// substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
function chooseLocale(names) {
    var i = 0, j, next, locale, split;

    while (i < names.length) {
        split = normalizeLocale(names[i]).split('-');
        j = split.length;
        next = normalizeLocale(names[i + 1]);
        next = next ? next.split('-') : null;
        while (j > 0) {
            locale = loadLocale(split.slice(0, j).join('-'));
            if (locale) {
                return locale;
            }
            if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                //the next array item is better than a shallower substring of this one
                break;
            }
            j--;
        }
        i++;
    }
    return null;
}

function loadLocale(name) {
    var oldLocale = null;
    // TODO: Find a better way to register and load all the locales in Node
    if (!locales[name] && (typeof module !== 'undefined') &&
            module && module.exports) {
        try {
            oldLocale = globalLocale._abbr;
            require('./locale/' + name);
            // because defineLocale currently also sets the global locale, we
            // want to undo that for lazy loaded locales
            getSetGlobalLocale(oldLocale);
        } catch (e) { }
    }
    return locales[name];
}

// This function will load locale and then set the global locale.  If
// no arguments are passed in, it will simply return the current global
// locale key.
function getSetGlobalLocale (key, values) {
    var data;
    if (key) {
        if (isUndefined(values)) {
            data = getLocale(key);
        }
        else {
            data = defineLocale(key, values);
        }

        if (data) {
            // moment.duration._locale = moment._locale = data;
            globalLocale = data;
        }
    }

    return globalLocale._abbr;
}

function defineLocale (name, config) {
    if (config !== null) {
        var parentConfig = baseConfig;
        config.abbr = name;
        if (locales[name] != null) {
            deprecateSimple('defineLocaleOverride',
                    'use moment.updateLocale(localeName, config) to change ' +
                    'an existing locale. moment.defineLocale(localeName, ' +
                    'config) should only be used for creating a new locale ' +
                    'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
            parentConfig = locales[name]._config;
        } else if (config.parentLocale != null) {
            if (locales[config.parentLocale] != null) {
                parentConfig = locales[config.parentLocale]._config;
            } else {
                if (!localeFamilies[config.parentLocale]) {
                    localeFamilies[config.parentLocale] = [];
                }
                localeFamilies[config.parentLocale].push({
                    name: name,
                    config: config
                });
                return null;
            }
        }
        locales[name] = new Locale(mergeConfigs(parentConfig, config));

        if (localeFamilies[name]) {
            localeFamilies[name].forEach(function (x) {
                defineLocale(x.name, x.config);
            });
        }

        // backwards compat for now: also set the locale
        // make sure we set the locale AFTER all child locales have been
        // created, so we won't end up with the child locale set.
        getSetGlobalLocale(name);


        return locales[name];
    } else {
        // useful for testing
        delete locales[name];
        return null;
    }
}

function updateLocale(name, config) {
    if (config != null) {
        var locale, parentConfig = baseConfig;
        // MERGE
        if (locales[name] != null) {
            parentConfig = locales[name]._config;
        }
        config = mergeConfigs(parentConfig, config);
        locale = new Locale(config);
        locale.parentLocale = locales[name];
        locales[name] = locale;

        // backwards compat for now: also set the locale
        getSetGlobalLocale(name);
    } else {
        // pass null for config to unupdate, useful for tests
        if (locales[name] != null) {
            if (locales[name].parentLocale != null) {
                locales[name] = locales[name].parentLocale;
            } else if (locales[name] != null) {
                delete locales[name];
            }
        }
    }
    return locales[name];
}

// returns locale data
function getLocale (key) {
    var locale;

    if (key && key._locale && key._locale._abbr) {
        key = key._locale._abbr;
    }

    if (!key) {
        return globalLocale;
    }

    if (!isArray(key)) {
        //short-circuit everything else
        locale = loadLocale(key);
        if (locale) {
            return locale;
        }
        key = [key];
    }

    return chooseLocale(key);
}

function listLocales() {
    return keys$1(locales);
}

function checkOverflow (m) {
    var overflow;
    var a = m._a;

    if (a && getParsingFlags(m).overflow === -2) {
        overflow =
            a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
            a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
            a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
            a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
            a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
            a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
            -1;

        if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
            overflow = DATE;
        }
        if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
            overflow = WEEK;
        }
        if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
            overflow = WEEKDAY;
        }

        getParsingFlags(m).overflow = overflow;
    }

    return m;
}

// iso 8601 regex
// 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;

var isoDates = [
    ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
    ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
    ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
    ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
    ['YYYY-DDD', /\d{4}-\d{3}/],
    ['YYYY-MM', /\d{4}-\d\d/, false],
    ['YYYYYYMMDD', /[+-]\d{10}/],
    ['YYYYMMDD', /\d{8}/],
    // YYYYMM is NOT allowed by the standard
    ['GGGG[W]WWE', /\d{4}W\d{3}/],
    ['GGGG[W]WW', /\d{4}W\d{2}/, false],
    ['YYYYDDD', /\d{7}/]
];

// iso time formats and regexes
var isoTimes = [
    ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
    ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
    ['HH:mm:ss', /\d\d:\d\d:\d\d/],
    ['HH:mm', /\d\d:\d\d/],
    ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
    ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
    ['HHmmss', /\d\d\d\d\d\d/],
    ['HHmm', /\d\d\d\d/],
    ['HH', /\d\d/]
];

var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

// date from iso format
function configFromISO(config) {
    var i, l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime, dateFormat, timeFormat, tzFormat;

    if (match) {
        getParsingFlags(config).iso = true;

        for (i = 0, l = isoDates.length; i < l; i++) {
            if (isoDates[i][1].exec(match[1])) {
                dateFormat = isoDates[i][0];
                allowTime = isoDates[i][2] !== false;
                break;
            }
        }
        if (dateFormat == null) {
            config._isValid = false;
            return;
        }
        if (match[3]) {
            for (i = 0, l = isoTimes.length; i < l; i++) {
                if (isoTimes[i][1].exec(match[3])) {
                    // match[2] should be 'T' or space
                    timeFormat = (match[2] || ' ') + isoTimes[i][0];
                    break;
                }
            }
            if (timeFormat == null) {
                config._isValid = false;
                return;
            }
        }
        if (!allowTime && timeFormat != null) {
            config._isValid = false;
            return;
        }
        if (match[4]) {
            if (tzRegex.exec(match[4])) {
                tzFormat = 'Z';
            } else {
                config._isValid = false;
                return;
            }
        }
        config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
        configFromStringAndFormat(config);
    } else {
        config._isValid = false;
    }
}

// RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
var basicRfcRegex = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;

// date and time from ref 2822 format
function configFromRFC2822(config) {
    var string, match, dayFormat,
        dateFormat, timeFormat, tzFormat;
    var timezones = {
        ' GMT': ' +0000',
        ' EDT': ' -0400',
        ' EST': ' -0500',
        ' CDT': ' -0500',
        ' CST': ' -0600',
        ' MDT': ' -0600',
        ' MST': ' -0700',
        ' PDT': ' -0700',
        ' PST': ' -0800'
    };
    var military = 'YXWVUTSRQPONZABCDEFGHIKLM';
    var timezone, timezoneIndex;

    string = config._i
        .replace(/\([^\)]*\)|[\n\t]/g, ' ') // Remove comments and folding whitespace
        .replace(/(\s\s+)/g, ' ') // Replace multiple-spaces with a single space
        .replace(/^\s|\s$/g, ''); // Remove leading and trailing spaces
    match = basicRfcRegex.exec(string);

    if (match) {
        dayFormat = match[1] ? 'ddd' + ((match[1].length === 5) ? ', ' : ' ') : '';
        dateFormat = 'D MMM ' + ((match[2].length > 10) ? 'YYYY ' : 'YY ');
        timeFormat = 'HH:mm' + (match[4] ? ':ss' : '');

        // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
        if (match[1]) { // day of week given
            var momentDate = new Date(match[2]);
            var momentDay = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][momentDate.getDay()];

            if (match[1].substr(0,3) !== momentDay) {
                getParsingFlags(config).weekdayMismatch = true;
                config._isValid = false;
                return;
            }
        }

        switch (match[5].length) {
            case 2: // military
                if (timezoneIndex === 0) {
                    timezone = ' +0000';
                } else {
                    timezoneIndex = military.indexOf(match[5][1].toUpperCase()) - 12;
                    timezone = ((timezoneIndex < 0) ? ' -' : ' +') +
                        (('' + timezoneIndex).replace(/^-?/, '0')).match(/..$/)[0] + '00';
                }
                break;
            case 4: // Zone
                timezone = timezones[match[5]];
                break;
            default: // UT or +/-9999
                timezone = timezones[' GMT'];
        }
        match[5] = timezone;
        config._i = match.splice(1).join('');
        tzFormat = ' ZZ';
        config._f = dayFormat + dateFormat + timeFormat + tzFormat;
        configFromStringAndFormat(config);
        getParsingFlags(config).rfc2822 = true;
    } else {
        config._isValid = false;
    }
}

// date from iso format or fallback
function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);

    if (matched !== null) {
        config._d = new Date(+matched[1]);
        return;
    }

    configFromISO(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    configFromRFC2822(config);
    if (config._isValid === false) {
        delete config._isValid;
    } else {
        return;
    }

    // Final attempt, use Input Fallback
    hooks.createFromInputFallback(config);
}

hooks.createFromInputFallback = deprecate(
    'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
    'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
    'discouraged and will be removed in an upcoming major release. Please refer to ' +
    'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
    function (config) {
        config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
    }
);

// Pick the first defined of two or three arguments.
function defaults(a, b, c) {
    if (a != null) {
        return a;
    }
    if (b != null) {
        return b;
    }
    return c;
}

function currentDateArray(config) {
    // hooks is actually the exported moment object
    var nowValue = new Date(hooks.now());
    if (config._useUTC) {
        return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
}

// convert an array to a date.
// the array should mirror the parameters below
// note: all values past the year are optional and will default to the lowest possible value.
// [year, month, day , hour, minute, second, millisecond]
function configFromArray (config) {
    var i, date, input = [], currentDate, yearToUse;

    if (config._d) {
        return;
    }

    currentDate = currentDateArray(config);

    //compute day of the year from weeks and weekdays
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
        dayOfYearFromWeekInfo(config);
    }

    //if the day of the year is set, figure out what it is
    if (config._dayOfYear != null) {
        yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

        if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
            getParsingFlags(config)._overflowDayOfYear = true;
        }

        date = createUTCDate(yearToUse, 0, config._dayOfYear);
        config._a[MONTH] = date.getUTCMonth();
        config._a[DATE] = date.getUTCDate();
    }

    // Default to current date.
    // * if no year, month, day of month are given, default to today
    // * if day of month is given, default month and year
    // * if month is given, default only year
    // * if year is given, don't default anything
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
        config._a[i] = input[i] = currentDate[i];
    }

    // Zero out whatever was not defaulted, including time
    for (; i < 7; i++) {
        config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }

    // Check for 24:00:00.000
    if (config._a[HOUR] === 24 &&
            config._a[MINUTE] === 0 &&
            config._a[SECOND] === 0 &&
            config._a[MILLISECOND] === 0) {
        config._nextDay = true;
        config._a[HOUR] = 0;
    }

    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    // Apply timezone offset from input. The actual utcOffset can be changed
    // with parseZone.
    if (config._tzm != null) {
        config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }

    if (config._nextDay) {
        config._a[HOUR] = 24;
    }
}

function dayOfYearFromWeekInfo(config) {
    var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;

    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
        dow = 1;
        doy = 4;

        // TODO: We need to take the current isoWeekYear, but that depends on
        // how we interpret now (local, utc, fixed offset). So create
        // a now version of current config (take local/utc/offset flags, and
        // create now).
        weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
        week = defaults(w.W, 1);
        weekday = defaults(w.E, 1);
        if (weekday < 1 || weekday > 7) {
            weekdayOverflow = true;
        }
    } else {
        dow = config._locale._week.dow;
        doy = config._locale._week.doy;

        var curWeek = weekOfYear(createLocal(), dow, doy);

        weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);

        // Default to current week.
        week = defaults(w.w, curWeek.week);

        if (w.d != null) {
            // weekday -- low day numbers are considered next week
            weekday = w.d;
            if (weekday < 0 || weekday > 6) {
                weekdayOverflow = true;
            }
        } else if (w.e != null) {
            // local weekday -- counting starts from begining of week
            weekday = w.e + dow;
            if (w.e < 0 || w.e > 6) {
                weekdayOverflow = true;
            }
        } else {
            // default to begining of week
            weekday = dow;
        }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
        getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
        getParsingFlags(config)._overflowWeekday = true;
    } else {
        temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
        config._a[YEAR] = temp.year;
        config._dayOfYear = temp.dayOfYear;
    }
}

// constant that refers to the ISO standard
hooks.ISO_8601 = function () {};

// constant that refers to the RFC 2822 form
hooks.RFC_2822 = function () {};

// date from string and format string
function configFromStringAndFormat(config) {
    // TODO: Move this to another part of the creation flow to prevent circular deps
    if (config._f === hooks.ISO_8601) {
        configFromISO(config);
        return;
    }
    if (config._f === hooks.RFC_2822) {
        configFromRFC2822(config);
        return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;

    // This array is used to make a Date, either with `new Date` or `Date.UTC`
    var string = '' + config._i,
        i, parsedInput, tokens, token, skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;

    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

    for (i = 0; i < tokens.length; i++) {
        token = tokens[i];
        parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
        // console.log('token', token, 'parsedInput', parsedInput,
        //         'regex', getParseRegexForToken(token, config));
        if (parsedInput) {
            skipped = string.substr(0, string.indexOf(parsedInput));
            if (skipped.length > 0) {
                getParsingFlags(config).unusedInput.push(skipped);
            }
            string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
            totalParsedInputLength += parsedInput.length;
        }
        // don't parse if it's not a known token
        if (formatTokenFunctions[token]) {
            if (parsedInput) {
                getParsingFlags(config).empty = false;
            }
            else {
                getParsingFlags(config).unusedTokens.push(token);
            }
            addTimeToArrayFromToken(token, parsedInput, config);
        }
        else if (config._strict && !parsedInput) {
            getParsingFlags(config).unusedTokens.push(token);
        }
    }

    // add remaining unparsed input length to the string
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
        getParsingFlags(config).unusedInput.push(string);
    }

    // clear _12h flag if hour is <= 12
    if (config._a[HOUR] <= 12 &&
        getParsingFlags(config).bigHour === true &&
        config._a[HOUR] > 0) {
        getParsingFlags(config).bigHour = undefined;
    }

    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    // handle meridiem
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

    configFromArray(config);
    checkOverflow(config);
}


function meridiemFixWrap (locale, hour, meridiem) {
    var isPm;

    if (meridiem == null) {
        // nothing to do
        return hour;
    }
    if (locale.meridiemHour != null) {
        return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
        // Fallback
        isPm = locale.isPM(meridiem);
        if (isPm && hour < 12) {
            hour += 12;
        }
        if (!isPm && hour === 12) {
            hour = 0;
        }
        return hour;
    } else {
        // this is not supposed to happen
        return hour;
    }
}

// date from string and array of format strings
function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,

        scoreToBeat,
        i,
        currentScore;

    if (config._f.length === 0) {
        getParsingFlags(config).invalidFormat = true;
        config._d = new Date(NaN);
        return;
    }

    for (i = 0; i < config._f.length; i++) {
        currentScore = 0;
        tempConfig = copyConfig({}, config);
        if (config._useUTC != null) {
            tempConfig._useUTC = config._useUTC;
        }
        tempConfig._f = config._f[i];
        configFromStringAndFormat(tempConfig);

        if (!isValid(tempConfig)) {
            continue;
        }

        // if there is any input that was not parsed add a penalty for that format
        currentScore += getParsingFlags(tempConfig).charsLeftOver;

        //or tokens
        currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

        getParsingFlags(tempConfig).score = currentScore;

        if (scoreToBeat == null || currentScore < scoreToBeat) {
            scoreToBeat = currentScore;
            bestMoment = tempConfig;
        }
    }

    extend(config, bestMoment || tempConfig);
}

function configFromObject(config) {
    if (config._d) {
        return;
    }

    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
        return obj && parseInt(obj, 10);
    });

    configFromArray(config);
}

function createFromConfig (config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
        // Adding is smart enough around DST
        res.add(1, 'd');
        res._nextDay = undefined;
    }

    return res;
}

function prepareConfig (config) {
    var input = config._i,
        format = config._f;

    config._locale = config._locale || getLocale(config._l);

    if (input === null || (format === undefined && input === '')) {
        return createInvalid({nullInput: true});
    }

    if (typeof input === 'string') {
        config._i = input = config._locale.preparse(input);
    }

    if (isMoment(input)) {
        return new Moment(checkOverflow(input));
    } else if (isDate(input)) {
        config._d = input;
    } else if (isArray(format)) {
        configFromStringAndArray(config);
    } else if (format) {
        configFromStringAndFormat(config);
    }  else {
        configFromInput(config);
    }

    if (!isValid(config)) {
        config._d = null;
    }

    return config;
}

function configFromInput(config) {
    var input = config._i;
    if (isUndefined(input)) {
        config._d = new Date(hooks.now());
    } else if (isDate(input)) {
        config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
        configFromString(config);
    } else if (isArray(input)) {
        config._a = map(input.slice(0), function (obj) {
            return parseInt(obj, 10);
        });
        configFromArray(config);
    } else if (isObject(input)) {
        configFromObject(config);
    } else if (isNumber(input)) {
        // from milliseconds
        config._d = new Date(input);
    } else {
        hooks.createFromInputFallback(config);
    }
}

function createLocalOrUTC (input, format, locale, strict, isUTC) {
    var c = {};

    if (locale === true || locale === false) {
        strict = locale;
        locale = undefined;
    }

    if ((isObject(input) && isObjectEmpty(input)) ||
            (isArray(input) && input.length === 0)) {
        input = undefined;
    }
    // object construction must be done this way.
    // https://github.com/moment/moment/issues/1423
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;

    return createFromConfig(c);
}

function createLocal (input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
}

var prototypeMin = deprecate(
    'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other < this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

var prototypeMax = deprecate(
    'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
    function () {
        var other = createLocal.apply(null, arguments);
        if (this.isValid() && other.isValid()) {
            return other > this ? this : other;
        } else {
            return createInvalid();
        }
    }
);

// Pick a moment m from moments so that m[fn](other) is true for all
// other. This relies on the function fn to be transitive.
//
// moments should either be an array of moment objects or an array, whose
// first element is an array of moment objects.
function pickBy(fn, moments) {
    var res, i;
    if (moments.length === 1 && isArray(moments[0])) {
        moments = moments[0];
    }
    if (!moments.length) {
        return createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
        if (!moments[i].isValid() || moments[i][fn](res)) {
            res = moments[i];
        }
    }
    return res;
}

// TODO: Use [].sort instead?
function min () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isBefore', args);
}

function max () {
    var args = [].slice.call(arguments, 0);

    return pickBy('isAfter', args);
}

var now = function () {
    return Date.now ? Date.now() : +(new Date());
};

var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];

function isDurationValid(m) {
    for (var key in m) {
        if (!(ordering.indexOf(key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
            return false;
        }
    }

    var unitHasDecimal = false;
    for (var i = 0; i < ordering.length; ++i) {
        if (m[ordering[i]]) {
            if (unitHasDecimal) {
                return false; // only allow non-integers for smallest unit
            }
            if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
                unitHasDecimal = true;
            }
        }
    }

    return true;
}

function isValid$1() {
    return this._isValid;
}

function createInvalid$1() {
    return createDuration(NaN);
}

function Duration (duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;

    this._isValid = isDurationValid(normalizedInput);

    // representation for dateAddRemove
    this._milliseconds = +milliseconds +
        seconds * 1e3 + // 1000
        minutes * 6e4 + // 1000 * 60
        hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
    // Because of dateAddRemove treats 24 hours as different from a
    // day when working around DST, we need to store them separately
    this._days = +days +
        weeks * 7;
    // It is impossible translate months into days without knowing
    // which months you are are talking about, so we have to store
    // it separately.
    this._months = +months +
        quarters * 3 +
        years * 12;

    this._data = {};

    this._locale = getLocale();

    this._bubble();
}

function isDuration (obj) {
    return obj instanceof Duration;
}

function absRound (number) {
    if (number < 0) {
        return Math.round(-1 * number) * -1;
    } else {
        return Math.round(number);
    }
}

// FORMATTING

function offset (token, separator) {
    addFormatToken(token, 0, 0, function () {
        var offset = this.utcOffset();
        var sign = '+';
        if (offset < 0) {
            offset = -offset;
            sign = '-';
        }
        return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
}

offset('Z', ':');
offset('ZZ', '');

// PARSING

addRegexToken('Z',  matchShortOffset);
addRegexToken('ZZ', matchShortOffset);
addParseToken(['Z', 'ZZ'], function (input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
});

// HELPERS

// timezone chunker
// '+10:00' > ['10',  '00']
// '-1530'  > ['-15', '30']
var chunkOffset = /([\+\-]|\d\d)/gi;

function offsetFromString(matcher, string) {
    var matches = (string || '').match(matcher);

    if (matches === null) {
        return null;
    }

    var chunk   = matches[matches.length - 1] || [];
    var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);

    return minutes === 0 ?
      0 :
      parts[0] === '+' ? minutes : -minutes;
}

// Return a moment from input, that is local/utc/zone equivalent to model.
function cloneWithOffset(input, model) {
    var res, diff;
    if (model._isUTC) {
        res = model.clone();
        diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
        // Use low-level api, because this fn is low-level api.
        res._d.setTime(res._d.valueOf() + diff);
        hooks.updateOffset(res, false);
        return res;
    } else {
        return createLocal(input).local();
    }
}

function getDateOffset (m) {
    // On Firefox.24 Date#getTimezoneOffset returns a floating point.
    // https://github.com/moment/moment/pull/1871
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
}

// HOOKS

// This function will be called whenever a moment is mutated.
// It is intended to keep the offset in sync with the timezone.
hooks.updateOffset = function () {};

// MOMENTS

// keepLocalTime = true means only change the timezone, without
// affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
// 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
// +0200, so we adjust the time as needed, to be valid.
//
// Keeping the time actually adds/subtracts (one hour)
// from the actual represented time. That is why we call updateOffset
// a second time. In case it wants us to change the offset again
// _changeInProgress == true case, then we have to adjust, because
// there is no such time in the given timezone.
function getSetOffset (input, keepLocalTime, keepMinutes) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
        return input != null ? this : NaN;
    }
    if (input != null) {
        if (typeof input === 'string') {
            input = offsetFromString(matchShortOffset, input);
            if (input === null) {
                return this;
            }
        } else if (Math.abs(input) < 16 && !keepMinutes) {
            input = input * 60;
        }
        if (!this._isUTC && keepLocalTime) {
            localAdjust = getDateOffset(this);
        }
        this._offset = input;
        this._isUTC = true;
        if (localAdjust != null) {
            this.add(localAdjust, 'm');
        }
        if (offset !== input) {
            if (!keepLocalTime || this._changeInProgress) {
                addSubtract(this, createDuration(input - offset, 'm'), 1, false);
            } else if (!this._changeInProgress) {
                this._changeInProgress = true;
                hooks.updateOffset(this, true);
                this._changeInProgress = null;
            }
        }
        return this;
    } else {
        return this._isUTC ? offset : getDateOffset(this);
    }
}

function getSetZone (input, keepLocalTime) {
    if (input != null) {
        if (typeof input !== 'string') {
            input = -input;
        }

        this.utcOffset(input, keepLocalTime);

        return this;
    } else {
        return -this.utcOffset();
    }
}

function setOffsetToUTC (keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
}

function setOffsetToLocal (keepLocalTime) {
    if (this._isUTC) {
        this.utcOffset(0, keepLocalTime);
        this._isUTC = false;

        if (keepLocalTime) {
            this.subtract(getDateOffset(this), 'm');
        }
    }
    return this;
}

function setOffsetToParsedOffset () {
    if (this._tzm != null) {
        this.utcOffset(this._tzm, false, true);
    } else if (typeof this._i === 'string') {
        var tZone = offsetFromString(matchOffset, this._i);
        if (tZone != null) {
            this.utcOffset(tZone);
        }
        else {
            this.utcOffset(0, true);
        }
    }
    return this;
}

function hasAlignedHourOffset (input) {
    if (!this.isValid()) {
        return false;
    }
    input = input ? createLocal(input).utcOffset() : 0;

    return (this.utcOffset() - input) % 60 === 0;
}

function isDaylightSavingTime () {
    return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
    );
}

function isDaylightSavingTimeShifted () {
    if (!isUndefined(this._isDSTShifted)) {
        return this._isDSTShifted;
    }

    var c = {};

    copyConfig(c, this);
    c = prepareConfig(c);

    if (c._a) {
        var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
        this._isDSTShifted = this.isValid() &&
            compareArrays(c._a, other.toArray()) > 0;
    } else {
        this._isDSTShifted = false;
    }

    return this._isDSTShifted;
}

function isLocal () {
    return this.isValid() ? !this._isUTC : false;
}

function isUtcOffset () {
    return this.isValid() ? this._isUTC : false;
}

function isUtc () {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
}

// ASP.NET json date format regex
var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;

// from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
// somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
// and further modified to allow for strings containing both week and day
var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;

function createDuration (input, key) {
    var duration = input,
        // matching against regexp is expensive, do it on demand
        match = null,
        sign,
        ret,
        diffRes;

    if (isDuration(input)) {
        duration = {
            ms : input._milliseconds,
            d  : input._days,
            M  : input._months
        };
    } else if (isNumber(input)) {
        duration = {};
        if (key) {
            duration[key] = input;
        } else {
            duration.milliseconds = input;
        }
    } else if (!!(match = aspNetRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y  : 0,
            d  : toInt(match[DATE])                         * sign,
            h  : toInt(match[HOUR])                         * sign,
            m  : toInt(match[MINUTE])                       * sign,
            s  : toInt(match[SECOND])                       * sign,
            ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
        };
    } else if (!!(match = isoRegex.exec(input))) {
        sign = (match[1] === '-') ? -1 : 1;
        duration = {
            y : parseIso(match[2], sign),
            M : parseIso(match[3], sign),
            w : parseIso(match[4], sign),
            d : parseIso(match[5], sign),
            h : parseIso(match[6], sign),
            m : parseIso(match[7], sign),
            s : parseIso(match[8], sign)
        };
    } else if (duration == null) {// checks for null or undefined
        duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
        diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));

        duration = {};
        duration.ms = diffRes.milliseconds;
        duration.M = diffRes.months;
    }

    ret = new Duration(duration);

    if (isDuration(input) && hasOwnProp(input, '_locale')) {
        ret._locale = input._locale;
    }

    return ret;
}

createDuration.fn = Duration.prototype;
createDuration.invalid = createInvalid$1;

function parseIso (inp, sign) {
    // We'd normally use ~~inp for this, but unfortunately it also
    // converts floats to ints.
    // inp may be undefined, so careful calling replace on it.
    var res = inp && parseFloat(inp.replace(',', '.'));
    // apply sign while we're at it
    return (isNaN(res) ? 0 : res) * sign;
}

function positiveMomentsDifference(base, other) {
    var res = {milliseconds: 0, months: 0};

    res.months = other.month() - base.month() +
        (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
        --res.months;
    }

    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

    return res;
}

function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
        return {milliseconds: 0, months: 0};
    }

    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
        res = positiveMomentsDifference(base, other);
    } else {
        res = positiveMomentsDifference(other, base);
        res.milliseconds = -res.milliseconds;
        res.months = -res.months;
    }

    return res;
}

// TODO: remove 'name' arg after deprecation is removed
function createAdder(direction, name) {
    return function (val, period) {
        var dur, tmp;
        //invert the arguments, but complain about it
        if (period !== null && !isNaN(+period)) {
            deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
            'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
            tmp = val; val = period; period = tmp;
        }

        val = typeof val === 'string' ? +val : val;
        dur = createDuration(val, period);
        addSubtract(this, dur, direction);
        return this;
    };
}

function addSubtract (mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);

    if (!mom.isValid()) {
        // No op
        return;
    }

    updateOffset = updateOffset == null ? true : updateOffset;

    if (milliseconds) {
        mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
        set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
    }
    if (months) {
        setMonth(mom, get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
        hooks.updateOffset(mom, days || months);
    }
}

var add      = createAdder(1, 'add');
var subtract = createAdder(-1, 'subtract');

function getCalendarFormat(myMoment, now) {
    var diff = myMoment.diff(now, 'days', true);
    return diff < -6 ? 'sameElse' :
            diff < -1 ? 'lastWeek' :
            diff < 0 ? 'lastDay' :
            diff < 1 ? 'sameDay' :
            diff < 2 ? 'nextDay' :
            diff < 7 ? 'nextWeek' : 'sameElse';
}

function calendar$1 (time, formats) {
    // We want to compare the start of today, vs this.
    // Getting start-of-today depends on whether we're local/utc/offset or not.
    var now = time || createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        format = hooks.calendarFormat(this, sod) || 'sameElse';

    var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);

    return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
}

function clone () {
    return new Moment(this);
}

function isAfter (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() > localInput.valueOf();
    } else {
        return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
}

function isBefore (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() < localInput.valueOf();
    } else {
        return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
}

function isBetween (from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) &&
        (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
}

function isSame (input, units) {
    var localInput = isMoment(input) ? input : createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
        return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
        return this.valueOf() === localInput.valueOf();
    } else {
        inputMs = localInput.valueOf();
        return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
}

function isSameOrAfter (input, units) {
    return this.isSame(input, units) || this.isAfter(input,units);
}

function isSameOrBefore (input, units) {
    return this.isSame(input, units) || this.isBefore(input,units);
}

function diff (input, units, asFloat) {
    var that,
        zoneDelta,
        delta, output;

    if (!this.isValid()) {
        return NaN;
    }

    that = cloneWithOffset(input, this);

    if (!that.isValid()) {
        return NaN;
    }

    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;

    units = normalizeUnits(units);

    if (units === 'year' || units === 'month' || units === 'quarter') {
        output = monthDiff(this, that);
        if (units === 'quarter') {
            output = output / 3;
        } else if (units === 'year') {
            output = output / 12;
        }
    } else {
        delta = this - that;
        output = units === 'second' ? delta / 1e3 : // 1000
            units === 'minute' ? delta / 6e4 : // 1000 * 60
            units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
            units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
            units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
            delta;
    }
    return asFloat ? output : absFloor(output);
}

function monthDiff (a, b) {
    // difference in months
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        // b is in (anchor - 1 month, anchor + 1 month)
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2, adjust;

    if (b - anchor < 0) {
        anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor - anchor2);
    } else {
        anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
        // linear across the month
        adjust = (b - anchor) / (anchor2 - anchor);
    }

    //check for negative zero, return zero if negative zero
    return -(wholeMonthDiff + adjust) || 0;
}

hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';

function toString () {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
}

function toISOString() {
    if (!this.isValid()) {
        return null;
    }
    var m = this.clone().utc();
    if (m.year() < 0 || m.year() > 9999) {
        return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
    if (isFunction(Date.prototype.toISOString)) {
        // native implementation is ~50x faster, use it when we can
        return this.toDate().toISOString();
    }
    return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
}

/**
 * Return a human readable representation of a moment that can
 * also be evaluated to get a new moment which is the same
 *
 * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
 */
function inspect () {
    if (!this.isValid()) {
        return 'moment.invalid(/* ' + this._i + ' */)';
    }
    var func = 'moment';
    var zone = '';
    if (!this.isLocal()) {
        func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
        zone = 'Z';
    }
    var prefix = '[' + func + '("]';
    var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
    var datetime = '-MM-DD[T]HH:mm:ss.SSS';
    var suffix = zone + '[")]';

    return this.format(prefix + year + datetime + suffix);
}

function format (inputString) {
    if (!inputString) {
        inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
}

function from (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function fromNow (withoutSuffix) {
    return this.from(createLocal(), withoutSuffix);
}

function to (time, withoutSuffix) {
    if (this.isValid() &&
            ((isMoment(time) && time.isValid()) ||
             createLocal(time).isValid())) {
        return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
    } else {
        return this.localeData().invalidDate();
    }
}

function toNow (withoutSuffix) {
    return this.to(createLocal(), withoutSuffix);
}

// If passed a locale key, it will set the locale for this
// instance.  Otherwise, it will return the locale configuration
// variables for this instance.
function locale (key) {
    var newLocaleData;

    if (key === undefined) {
        return this._locale._abbr;
    } else {
        newLocaleData = getLocale(key);
        if (newLocaleData != null) {
            this._locale = newLocaleData;
        }
        return this;
    }
}

var lang = deprecate(
    'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
    function (key) {
        if (key === undefined) {
            return this.localeData();
        } else {
            return this.locale(key);
        }
    }
);

function localeData () {
    return this._locale;
}

function startOf (units) {
    units = normalizeUnits(units);
    // the following switch intentionally omits break keywords
    // to utilize falling through the cases.
    switch (units) {
        case 'year':
            this.month(0);
            /* falls through */
        case 'quarter':
        case 'month':
            this.date(1);
            /* falls through */
        case 'week':
        case 'isoWeek':
        case 'day':
        case 'date':
            this.hours(0);
            /* falls through */
        case 'hour':
            this.minutes(0);
            /* falls through */
        case 'minute':
            this.seconds(0);
            /* falls through */
        case 'second':
            this.milliseconds(0);
    }

    // weeks are a special case
    if (units === 'week') {
        this.weekday(0);
    }
    if (units === 'isoWeek') {
        this.isoWeekday(1);
    }

    // quarters are also special
    if (units === 'quarter') {
        this.month(Math.floor(this.month() / 3) * 3);
    }

    return this;
}

function endOf (units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
        return this;
    }

    // 'date' is an alias for 'day', so it should be considered as such.
    if (units === 'date') {
        units = 'day';
    }

    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
}

function valueOf () {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
}

function unix () {
    return Math.floor(this.valueOf() / 1000);
}

function toDate () {
    return new Date(this.valueOf());
}

function toArray () {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
}

function toObject () {
    var m = this;
    return {
        years: m.year(),
        months: m.month(),
        date: m.date(),
        hours: m.hours(),
        minutes: m.minutes(),
        seconds: m.seconds(),
        milliseconds: m.milliseconds()
    };
}

function toJSON () {
    // new Date(NaN).toJSON() === null
    return this.isValid() ? this.toISOString() : null;
}

function isValid$2 () {
    return isValid(this);
}

function parsingFlags () {
    return extend({}, getParsingFlags(this));
}

function invalidAt () {
    return getParsingFlags(this).overflow;
}

function creationData() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    };
}

// FORMATTING

addFormatToken(0, ['gg', 2], 0, function () {
    return this.weekYear() % 100;
});

addFormatToken(0, ['GG', 2], 0, function () {
    return this.isoWeekYear() % 100;
});

function addWeekYearFormatToken (token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
}

addWeekYearFormatToken('gggg',     'weekYear');
addWeekYearFormatToken('ggggg',    'weekYear');
addWeekYearFormatToken('GGGG',  'isoWeekYear');
addWeekYearFormatToken('GGGGG', 'isoWeekYear');

// ALIASES

addUnitAlias('weekYear', 'gg');
addUnitAlias('isoWeekYear', 'GG');

// PRIORITY

addUnitPriority('weekYear', 1);
addUnitPriority('isoWeekYear', 1);


// PARSING

addRegexToken('G',      matchSigned);
addRegexToken('g',      matchSigned);
addRegexToken('GG',     match1to2, match2);
addRegexToken('gg',     match1to2, match2);
addRegexToken('GGGG',   match1to4, match4);
addRegexToken('gggg',   match1to4, match4);
addRegexToken('GGGGG',  match1to6, match6);
addRegexToken('ggggg',  match1to6, match6);

addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
});

addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
    week[token] = hooks.parseTwoDigitYear(input);
});

// MOMENTS

function getSetWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input,
            this.week(),
            this.weekday(),
            this.localeData()._week.dow,
            this.localeData()._week.doy);
}

function getSetISOWeekYear (input) {
    return getSetWeekYearHelper.call(this,
            input, this.isoWeek(), this.isoWeekday(), 1, 4);
}

function getISOWeeksInYear () {
    return weeksInYear(this.year(), 1, 4);
}

function getWeeksInYear () {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
}

function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
        return weekOfYear(this, dow, doy).year;
    } else {
        weeksTarget = weeksInYear(input, dow, doy);
        if (week > weeksTarget) {
            week = weeksTarget;
        }
        return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
}

function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);

    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
}

// FORMATTING

addFormatToken('Q', 0, 'Qo', 'quarter');

// ALIASES

addUnitAlias('quarter', 'Q');

// PRIORITY

addUnitPriority('quarter', 7);

// PARSING

addRegexToken('Q', match1);
addParseToken('Q', function (input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
});

// MOMENTS

function getSetQuarter (input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
}

// FORMATTING

addFormatToken('D', ['DD', 2], 'Do', 'date');

// ALIASES

addUnitAlias('date', 'D');

// PRIOROITY
addUnitPriority('date', 9);

// PARSING

addRegexToken('D',  match1to2);
addRegexToken('DD', match1to2, match2);
addRegexToken('Do', function (isStrict, locale) {
    // TODO: Remove "ordinalParse" fallback in next major release.
    return isStrict ?
      (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
      locale._dayOfMonthOrdinalParseLenient;
});

addParseToken(['D', 'DD'], DATE);
addParseToken('Do', function (input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
});

// MOMENTS

var getSetDayOfMonth = makeGetSet('Date', true);

// FORMATTING

addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

// ALIASES

addUnitAlias('dayOfYear', 'DDD');

// PRIORITY
addUnitPriority('dayOfYear', 4);

// PARSING

addRegexToken('DDD',  match1to3);
addRegexToken('DDDD', match3);
addParseToken(['DDD', 'DDDD'], function (input, array, config) {
    config._dayOfYear = toInt(input);
});

// HELPERS

// MOMENTS

function getSetDayOfYear (input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
}

// FORMATTING

addFormatToken('m', ['mm', 2], 0, 'minute');

// ALIASES

addUnitAlias('minute', 'm');

// PRIORITY

addUnitPriority('minute', 14);

// PARSING

addRegexToken('m',  match1to2);
addRegexToken('mm', match1to2, match2);
addParseToken(['m', 'mm'], MINUTE);

// MOMENTS

var getSetMinute = makeGetSet('Minutes', false);

// FORMATTING

addFormatToken('s', ['ss', 2], 0, 'second');

// ALIASES

addUnitAlias('second', 's');

// PRIORITY

addUnitPriority('second', 15);

// PARSING

addRegexToken('s',  match1to2);
addRegexToken('ss', match1to2, match2);
addParseToken(['s', 'ss'], SECOND);

// MOMENTS

var getSetSecond = makeGetSet('Seconds', false);

// FORMATTING

addFormatToken('S', 0, 0, function () {
    return ~~(this.millisecond() / 100);
});

addFormatToken(0, ['SS', 2], 0, function () {
    return ~~(this.millisecond() / 10);
});

addFormatToken(0, ['SSS', 3], 0, 'millisecond');
addFormatToken(0, ['SSSS', 4], 0, function () {
    return this.millisecond() * 10;
});
addFormatToken(0, ['SSSSS', 5], 0, function () {
    return this.millisecond() * 100;
});
addFormatToken(0, ['SSSSSS', 6], 0, function () {
    return this.millisecond() * 1000;
});
addFormatToken(0, ['SSSSSSS', 7], 0, function () {
    return this.millisecond() * 10000;
});
addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
    return this.millisecond() * 100000;
});
addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
    return this.millisecond() * 1000000;
});


// ALIASES

addUnitAlias('millisecond', 'ms');

// PRIORITY

addUnitPriority('millisecond', 16);

// PARSING

addRegexToken('S',    match1to3, match1);
addRegexToken('SS',   match1to3, match2);
addRegexToken('SSS',  match1to3, match3);

var token;
for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
}

function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
}

for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
}
// MOMENTS

var getSetMillisecond = makeGetSet('Milliseconds', false);

// FORMATTING

addFormatToken('z',  0, 0, 'zoneAbbr');
addFormatToken('zz', 0, 0, 'zoneName');

// MOMENTS

function getZoneAbbr () {
    return this._isUTC ? 'UTC' : '';
}

function getZoneName () {
    return this._isUTC ? 'Coordinated Universal Time' : '';
}

var proto = Moment.prototype;

proto.add               = add;
proto.calendar          = calendar$1;
proto.clone             = clone;
proto.diff              = diff;
proto.endOf             = endOf;
proto.format            = format;
proto.from              = from;
proto.fromNow           = fromNow;
proto.to                = to;
proto.toNow             = toNow;
proto.get               = stringGet;
proto.invalidAt         = invalidAt;
proto.isAfter           = isAfter;
proto.isBefore          = isBefore;
proto.isBetween         = isBetween;
proto.isSame            = isSame;
proto.isSameOrAfter     = isSameOrAfter;
proto.isSameOrBefore    = isSameOrBefore;
proto.isValid           = isValid$2;
proto.lang              = lang;
proto.locale            = locale;
proto.localeData        = localeData;
proto.max               = prototypeMax;
proto.min               = prototypeMin;
proto.parsingFlags      = parsingFlags;
proto.set               = stringSet;
proto.startOf           = startOf;
proto.subtract          = subtract;
proto.toArray           = toArray;
proto.toObject          = toObject;
proto.toDate            = toDate;
proto.toISOString       = toISOString;
proto.inspect           = inspect;
proto.toJSON            = toJSON;
proto.toString          = toString;
proto.unix              = unix;
proto.valueOf           = valueOf;
proto.creationData      = creationData;

// Year
proto.year       = getSetYear;
proto.isLeapYear = getIsLeapYear;

// Week Year
proto.weekYear    = getSetWeekYear;
proto.isoWeekYear = getSetISOWeekYear;

// Quarter
proto.quarter = proto.quarters = getSetQuarter;

// Month
proto.month       = getSetMonth;
proto.daysInMonth = getDaysInMonth;

// Week
proto.week           = proto.weeks        = getSetWeek;
proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
proto.weeksInYear    = getWeeksInYear;
proto.isoWeeksInYear = getISOWeeksInYear;

// Day
proto.date       = getSetDayOfMonth;
proto.day        = proto.days             = getSetDayOfWeek;
proto.weekday    = getSetLocaleDayOfWeek;
proto.isoWeekday = getSetISODayOfWeek;
proto.dayOfYear  = getSetDayOfYear;

// Hour
proto.hour = proto.hours = getSetHour;

// Minute
proto.minute = proto.minutes = getSetMinute;

// Second
proto.second = proto.seconds = getSetSecond;

// Millisecond
proto.millisecond = proto.milliseconds = getSetMillisecond;

// Offset
proto.utcOffset            = getSetOffset;
proto.utc                  = setOffsetToUTC;
proto.local                = setOffsetToLocal;
proto.parseZone            = setOffsetToParsedOffset;
proto.hasAlignedHourOffset = hasAlignedHourOffset;
proto.isDST                = isDaylightSavingTime;
proto.isLocal              = isLocal;
proto.isUtcOffset          = isUtcOffset;
proto.isUtc                = isUtc;
proto.isUTC                = isUtc;

// Timezone
proto.zoneAbbr = getZoneAbbr;
proto.zoneName = getZoneName;

// Deprecations
proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);

function createUnix (input) {
    return createLocal(input * 1000);
}

function createInZone () {
    return createLocal.apply(null, arguments).parseZone();
}

function preParsePostFormat (string) {
    return string;
}

var proto$1 = Locale.prototype;

proto$1.calendar        = calendar;
proto$1.longDateFormat  = longDateFormat;
proto$1.invalidDate     = invalidDate;
proto$1.ordinal         = ordinal;
proto$1.preparse        = preParsePostFormat;
proto$1.postformat      = preParsePostFormat;
proto$1.relativeTime    = relativeTime;
proto$1.pastFuture      = pastFuture;
proto$1.set             = set;

// Month
proto$1.months            =        localeMonths;
proto$1.monthsShort       =        localeMonthsShort;
proto$1.monthsParse       =        localeMonthsParse;
proto$1.monthsRegex       = monthsRegex;
proto$1.monthsShortRegex  = monthsShortRegex;

// Week
proto$1.week = localeWeek;
proto$1.firstDayOfYear = localeFirstDayOfYear;
proto$1.firstDayOfWeek = localeFirstDayOfWeek;

// Day of Week
proto$1.weekdays       =        localeWeekdays;
proto$1.weekdaysMin    =        localeWeekdaysMin;
proto$1.weekdaysShort  =        localeWeekdaysShort;
proto$1.weekdaysParse  =        localeWeekdaysParse;

proto$1.weekdaysRegex       =        weekdaysRegex;
proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
proto$1.weekdaysMinRegex    =        weekdaysMinRegex;

// Hours
proto$1.isPM = localeIsPM;
proto$1.meridiem = localeMeridiem;

function get$1 (format, index, field, setter) {
    var locale = getLocale();
    var utc = createUTC().set(setter, index);
    return locale[field](utc, format);
}

function listMonthsImpl (format, index, field) {
    if (isNumber(format)) {
        index = format;
        format = undefined;
    }

    format = format || '';

    if (index != null) {
        return get$1(format, index, field, 'month');
    }

    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
        out[i] = get$1(format, i, field, 'month');
    }
    return out;
}

// ()
// (5)
// (fmt, 5)
// (fmt)
// (true)
// (true, 5)
// (true, fmt, 5)
// (true, fmt)
function listWeekdaysImpl (localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    } else {
        format = localeSorted;
        index = format;
        localeSorted = false;

        if (isNumber(format)) {
            index = format;
            format = undefined;
        }

        format = format || '';
    }

    var locale = getLocale(),
        shift = localeSorted ? locale._week.dow : 0;

    if (index != null) {
        return get$1(format, (index + shift) % 7, field, 'day');
    }

    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
        out[i] = get$1(format, (i + shift) % 7, field, 'day');
    }
    return out;
}

function listMonths (format, index) {
    return listMonthsImpl(format, index, 'months');
}

function listMonthsShort (format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
}

function listWeekdays (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
}

function listWeekdaysShort (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
}

function listWeekdaysMin (localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
}

getSetGlobalLocale('en', {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal : function (number) {
        var b = number % 10,
            output = (toInt(number % 100 / 10) === 1) ? 'th' :
            (b === 1) ? 'st' :
            (b === 2) ? 'nd' :
            (b === 3) ? 'rd' : 'th';
        return number + output;
    }
});

// Side effect imports
hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);

var mathAbs = Math.abs;

function abs () {
    var data           = this._data;

    this._milliseconds = mathAbs(this._milliseconds);
    this._days         = mathAbs(this._days);
    this._months       = mathAbs(this._months);

    data.milliseconds  = mathAbs(data.milliseconds);
    data.seconds       = mathAbs(data.seconds);
    data.minutes       = mathAbs(data.minutes);
    data.hours         = mathAbs(data.hours);
    data.months        = mathAbs(data.months);
    data.years         = mathAbs(data.years);

    return this;
}

function addSubtract$1 (duration, input, value, direction) {
    var other = createDuration(input, value);

    duration._milliseconds += direction * other._milliseconds;
    duration._days         += direction * other._days;
    duration._months       += direction * other._months;

    return duration._bubble();
}

// supports only 2.0-style add(1, 's') or add(duration)
function add$1 (input, value) {
    return addSubtract$1(this, input, value, 1);
}

// supports only 2.0-style subtract(1, 's') or subtract(duration)
function subtract$1 (input, value) {
    return addSubtract$1(this, input, value, -1);
}

function absCeil (number) {
    if (number < 0) {
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
}

function bubble () {
    var milliseconds = this._milliseconds;
    var days         = this._days;
    var months       = this._months;
    var data         = this._data;
    var seconds, minutes, hours, years, monthsFromDays;

    // if we have a mix of positive and negative values, bubble down first
    // check: https://github.com/moment/moment/issues/2166
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
            (milliseconds <= 0 && days <= 0 && months <= 0))) {
        milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
        days = 0;
        months = 0;
    }

    // The following code bubbles up values, see the tests for
    // examples of what that means.
    data.milliseconds = milliseconds % 1000;

    seconds           = absFloor(milliseconds / 1000);
    data.seconds      = seconds % 60;

    minutes           = absFloor(seconds / 60);
    data.minutes      = minutes % 60;

    hours             = absFloor(minutes / 60);
    data.hours        = hours % 24;

    days += absFloor(hours / 24);

    // convert days to months
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));

    // 12 months -> 1 year
    years = absFloor(months / 12);
    months %= 12;

    data.days   = days;
    data.months = months;
    data.years  = years;

    return this;
}

function daysToMonths (days) {
    // 400 years have 146097 days (taking into account leap year rules)
    // 400 years have 12 months === 4800
    return days * 4800 / 146097;
}

function monthsToDays (months) {
    // the reverse of daysToMonths
    return months * 146097 / 4800;
}

function as (units) {
    if (!this.isValid()) {
        return NaN;
    }
    var days;
    var months;
    var milliseconds = this._milliseconds;

    units = normalizeUnits(units);

    if (units === 'month' || units === 'year') {
        days   = this._days   + milliseconds / 864e5;
        months = this._months + daysToMonths(days);
        return units === 'month' ? months : months / 12;
    } else {
        // handle milliseconds separately because of floating point math errors (issue #1867)
        days = this._days + Math.round(monthsToDays(this._months));
        switch (units) {
            case 'week'   : return days / 7     + milliseconds / 6048e5;
            case 'day'    : return days         + milliseconds / 864e5;
            case 'hour'   : return days * 24    + milliseconds / 36e5;
            case 'minute' : return days * 1440  + milliseconds / 6e4;
            case 'second' : return days * 86400 + milliseconds / 1000;
            // Math.floor prevents floating point math errors here
            case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
            default: throw new Error('Unknown unit ' + units);
        }
    }
}

// TODO: Use this.as('ms')?
function valueOf$1 () {
    if (!this.isValid()) {
        return NaN;
    }
    return (
        this._milliseconds +
        this._days * 864e5 +
        (this._months % 12) * 2592e6 +
        toInt(this._months / 12) * 31536e6
    );
}

function makeAs (alias) {
    return function () {
        return this.as(alias);
    };
}

var asMilliseconds = makeAs('ms');
var asSeconds      = makeAs('s');
var asMinutes      = makeAs('m');
var asHours        = makeAs('h');
var asDays         = makeAs('d');
var asWeeks        = makeAs('w');
var asMonths       = makeAs('M');
var asYears        = makeAs('y');

function get$2 (units) {
    units = normalizeUnits(units);
    return this.isValid() ? this[units + 's']() : NaN;
}

function makeGetter(name) {
    return function () {
        return this.isValid() ? this._data[name] : NaN;
    };
}

var milliseconds = makeGetter('milliseconds');
var seconds      = makeGetter('seconds');
var minutes      = makeGetter('minutes');
var hours        = makeGetter('hours');
var days         = makeGetter('days');
var months       = makeGetter('months');
var years        = makeGetter('years');

function weeks () {
    return absFloor(this.days() / 7);
}

var round = Math.round;
var thresholds = {
    ss: 44,         // a few seconds to seconds
    s : 45,         // seconds to minute
    m : 45,         // minutes to hour
    h : 22,         // hours to day
    d : 26,         // days to month
    M : 11          // months to year
};

// helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
}

function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
    var duration = createDuration(posNegDuration).abs();
    var seconds  = round(duration.as('s'));
    var minutes  = round(duration.as('m'));
    var hours    = round(duration.as('h'));
    var days     = round(duration.as('d'));
    var months   = round(duration.as('M'));
    var years    = round(duration.as('y'));

    var a = seconds <= thresholds.ss && ['s', seconds]  ||
            seconds < thresholds.s   && ['ss', seconds] ||
            minutes <= 1             && ['m']           ||
            minutes < thresholds.m   && ['mm', minutes] ||
            hours   <= 1             && ['h']           ||
            hours   < thresholds.h   && ['hh', hours]   ||
            days    <= 1             && ['d']           ||
            days    < thresholds.d   && ['dd', days]    ||
            months  <= 1             && ['M']           ||
            months  < thresholds.M   && ['MM', months]  ||
            years   <= 1             && ['y']           || ['yy', years];

    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
}

// This function allows you to set the rounding function for relative time strings
function getSetRelativeTimeRounding (roundingFunction) {
    if (roundingFunction === undefined) {
        return round;
    }
    if (typeof(roundingFunction) === 'function') {
        round = roundingFunction;
        return true;
    }
    return false;
}

// This function allows you to set a threshold for relative time strings
function getSetRelativeTimeThreshold (threshold, limit) {
    if (thresholds[threshold] === undefined) {
        return false;
    }
    if (limit === undefined) {
        return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    if (threshold === 's') {
        thresholds.ss = limit - 1;
    }
    return true;
}

function humanize (withSuffix) {
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var locale = this.localeData();
    var output = relativeTime$1(this, !withSuffix, locale);

    if (withSuffix) {
        output = locale.pastFuture(+this, output);
    }

    return locale.postformat(output);
}

var abs$1 = Math.abs;

function toISOString$1() {
    // for ISO strings we do not use the normal bubbling rules:
    //  * milliseconds bubble up until they become hours
    //  * days do not bubble at all
    //  * months bubble up until they become years
    // This is because there is no context-free conversion between hours and days
    // (think of clock changes)
    // and also not between days and months (28-31 days per month)
    if (!this.isValid()) {
        return this.localeData().invalidDate();
    }

    var seconds = abs$1(this._milliseconds) / 1000;
    var days         = abs$1(this._days);
    var months       = abs$1(this._months);
    var minutes, hours, years;

    // 3600 seconds -> 60 minutes -> 1 hour
    minutes           = absFloor(seconds / 60);
    hours             = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;

    // 12 months -> 1 year
    years  = absFloor(months / 12);
    months %= 12;


    // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();

    if (!total) {
        // this is the same as C#'s (Noda) and python (isodate)...
        // but not other JS (goog.date)
        return 'P0D';
    }

    return (total < 0 ? '-' : '') +
        'P' +
        (Y ? Y + 'Y' : '') +
        (M ? M + 'M' : '') +
        (D ? D + 'D' : '') +
        ((h || m || s) ? 'T' : '') +
        (h ? h + 'H' : '') +
        (m ? m + 'M' : '') +
        (s ? s + 'S' : '');
}

var proto$2 = Duration.prototype;

proto$2.isValid        = isValid$1;
proto$2.abs            = abs;
proto$2.add            = add$1;
proto$2.subtract       = subtract$1;
proto$2.as             = as;
proto$2.asMilliseconds = asMilliseconds;
proto$2.asSeconds      = asSeconds;
proto$2.asMinutes      = asMinutes;
proto$2.asHours        = asHours;
proto$2.asDays         = asDays;
proto$2.asWeeks        = asWeeks;
proto$2.asMonths       = asMonths;
proto$2.asYears        = asYears;
proto$2.valueOf        = valueOf$1;
proto$2._bubble        = bubble;
proto$2.get            = get$2;
proto$2.milliseconds   = milliseconds;
proto$2.seconds        = seconds;
proto$2.minutes        = minutes;
proto$2.hours          = hours;
proto$2.days           = days;
proto$2.weeks          = weeks;
proto$2.months         = months;
proto$2.years          = years;
proto$2.humanize       = humanize;
proto$2.toISOString    = toISOString$1;
proto$2.toString       = toISOString$1;
proto$2.toJSON         = toISOString$1;
proto$2.locale         = locale;
proto$2.localeData     = localeData;

// Deprecations
proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
proto$2.lang = lang;

// Side effect imports

// FORMATTING

addFormatToken('X', 0, 0, 'unix');
addFormatToken('x', 0, 0, 'valueOf');

// PARSING

addRegexToken('x', matchSigned);
addRegexToken('X', matchTimestamp);
addParseToken('X', function (input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
});
addParseToken('x', function (input, array, config) {
    config._d = new Date(toInt(input));
});

// Side effect imports


hooks.version = '2.18.1';

setHookCallback(createLocal);

hooks.fn                    = proto;
hooks.min                   = min;
hooks.max                   = max;
hooks.now                   = now;
hooks.utc                   = createUTC;
hooks.unix                  = createUnix;
hooks.months                = listMonths;
hooks.isDate                = isDate;
hooks.locale                = getSetGlobalLocale;
hooks.invalid               = createInvalid;
hooks.duration              = createDuration;
hooks.isMoment              = isMoment;
hooks.weekdays              = listWeekdays;
hooks.parseZone             = createInZone;
hooks.localeData            = getLocale;
hooks.isDuration            = isDuration;
hooks.monthsShort           = listMonthsShort;
hooks.weekdaysMin           = listWeekdaysMin;
hooks.defineLocale          = defineLocale;
hooks.updateLocale          = updateLocale;
hooks.locales               = listLocales;
hooks.weekdaysShort         = listWeekdaysShort;
hooks.normalizeUnits        = normalizeUnits;
hooks.relativeTimeRounding = getSetRelativeTimeRounding;
hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
hooks.calendarFormat        = getCalendarFormat;
hooks.prototype             = proto;

return hooks;

})));

},{}],7:[function(require,module,exports){
/**
 * @namespace Chart
 */
var Chart = require(29)();

Chart.helpers = require(45);

// @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
require(27)(Chart);

Chart.defaults = require(25);
Chart.Element = require(26);
Chart.elements = require(40);
Chart.Interaction = require(28);
Chart.platform = require(48);

require(31)(Chart);
require(22)(Chart);
require(23)(Chart);
require(24)(Chart);
require(30)(Chart);
require(33)(Chart);
require(32)(Chart);
require(35)(Chart);

require(54)(Chart);
require(52)(Chart);
require(53)(Chart);
require(55)(Chart);
require(56)(Chart);
require(57)(Chart);

// Controllers must be loaded after elements
// See Chart.core.datasetController.dataElementType
require(15)(Chart);
require(16)(Chart);
require(17)(Chart);
require(18)(Chart);
require(19)(Chart);
require(20)(Chart);
require(21)(Chart);

require(8)(Chart);
require(9)(Chart);
require(10)(Chart);
require(11)(Chart);
require(12)(Chart);
require(13)(Chart);
require(14)(Chart);

// Loading built-it plugins
var plugins = [];

plugins.push(
	require(49)(Chart),
	require(50)(Chart),
	require(51)(Chart)
);

Chart.plugins.register(plugins);

Chart.platform.initialize();

module.exports = Chart;
if (typeof window !== 'undefined') {
	window.Chart = Chart;
}

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.canvas instead.
 * @namespace Chart.canvasHelpers
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
Chart.canvasHelpers = Chart.helpers.canvas;

},{"10":10,"11":11,"12":12,"13":13,"14":14,"15":15,"16":16,"17":17,"18":18,"19":19,"20":20,"21":21,"22":22,"23":23,"24":24,"25":25,"26":26,"27":27,"28":28,"29":29,"30":30,"31":31,"32":32,"33":33,"35":35,"40":40,"45":45,"48":48,"49":49,"50":50,"51":51,"52":52,"53":53,"54":54,"55":55,"56":56,"57":57,"8":8,"9":9}],8:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Bar = function(context, config) {
		config.type = 'bar';

		return new Chart(context, config);
	};

};

},{}],9:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Bubble = function(context, config) {
		config.type = 'bubble';
		return new Chart(context, config);
	};

};

},{}],10:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Doughnut = function(context, config) {
		config.type = 'doughnut';

		return new Chart(context, config);
	};

};

},{}],11:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Line = function(context, config) {
		config.type = 'line';

		return new Chart(context, config);
	};

};

},{}],12:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.PolarArea = function(context, config) {
		config.type = 'polarArea';

		return new Chart(context, config);
	};

};

},{}],13:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	Chart.Radar = function(context, config) {
		config.type = 'radar';

		return new Chart(context, config);
	};

};

},{}],14:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {
	Chart.Scatter = function(context, config) {
		config.type = 'scatter';
		return new Chart(context, config);
	};
};

},{}],15:[function(require,module,exports){
'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('bar', {
	hover: {
		mode: 'label'
	},

	scales: {
		xAxes: [{
			type: 'category',

			// Specific to Bar Controller
			categoryPercentage: 0.8,
			barPercentage: 0.9,

			// offset settings
			offset: true,

			// grid line settings
			gridLines: {
				offsetGridLines: true
			}
		}],

		yAxes: [{
			type: 'linear'
		}]
	}
});

defaults._set('horizontalBar', {
	hover: {
		mode: 'index',
		axis: 'y'
	},

	scales: {
		xAxes: [{
			type: 'linear',
			position: 'bottom'
		}],

		yAxes: [{
			position: 'left',
			type: 'category',

			// Specific to Horizontal Bar Controller
			categoryPercentage: 0.8,
			barPercentage: 0.9,

			// offset settings
			offset: true,

			// grid line settings
			gridLines: {
				offsetGridLines: true
			}
		}]
	},

	elements: {
		rectangle: {
			borderSkipped: 'left'
		}
	},

	tooltips: {
		callbacks: {
			title: function(item, data) {
				// Pick first xLabel for now
				var title = '';

				if (item.length > 0) {
					if (item[0].yLabel) {
						title = item[0].yLabel;
					} else if (data.labels.length > 0 && item[0].index < data.labels.length) {
						title = data.labels[item[0].index];
					}
				}

				return title;
			},

			label: function(item, data) {
				var datasetLabel = data.datasets[item.datasetIndex].label || '';
				return datasetLabel + ': ' + item.xLabel;
			}
		},
		mode: 'index',
		axis: 'y'
	}
});

module.exports = function(Chart) {

	Chart.controllers.bar = Chart.DatasetController.extend({

		dataElementType: elements.Rectangle,

		initialize: function() {
			var me = this;
			var meta;

			Chart.DatasetController.prototype.initialize.apply(me, arguments);

			meta = me.getMeta();
			meta.stack = me.getDataset().stack;
			meta.bar = true;
		},

		update: function(reset) {
			var me = this;
			var rects = me.getMeta().data;
			var i, ilen;

			me._ruler = me.getRuler();

			for (i = 0, ilen = rects.length; i < ilen; ++i) {
				me.updateElement(rects[i], i, reset);
			}
		},

		updateElement: function(rectangle, index, reset) {
			var me = this;
			var chart = me.chart;
			var meta = me.getMeta();
			var dataset = me.getDataset();
			var custom = rectangle.custom || {};
			var rectangleOptions = chart.options.elements.rectangle;

			rectangle._xScale = me.getScaleForId(meta.xAxisID);
			rectangle._yScale = me.getScaleForId(meta.yAxisID);
			rectangle._datasetIndex = me.index;
			rectangle._index = index;

			rectangle._model = {
				datasetLabel: dataset.label,
				label: chart.data.labels[index],
				borderSkipped: custom.borderSkipped ? custom.borderSkipped : rectangleOptions.borderSkipped,
				backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.valueAtIndexOrDefault(dataset.backgroundColor, index, rectangleOptions.backgroundColor),
				borderColor: custom.borderColor ? custom.borderColor : helpers.valueAtIndexOrDefault(dataset.borderColor, index, rectangleOptions.borderColor),
				borderWidth: custom.borderWidth ? custom.borderWidth : helpers.valueAtIndexOrDefault(dataset.borderWidth, index, rectangleOptions.borderWidth)
			};

			me.updateElementGeometry(rectangle, index, reset);

			rectangle.pivot();
		},

		/**
		 * @private
		 */
		updateElementGeometry: function(rectangle, index, reset) {
			var me = this;
			var model = rectangle._model;
			var vscale = me.getValueScale();
			var base = vscale.getBasePixel();
			var horizontal = vscale.isHorizontal();
			var ruler = me._ruler || me.getRuler();
			var vpixels = me.calculateBarValuePixels(me.index, index);
			var ipixels = me.calculateBarIndexPixels(me.index, index, ruler);

			model.horizontal = horizontal;
			model.base = reset ? base : vpixels.base;
			model.x = horizontal ? reset ? base : vpixels.head : ipixels.center;
			model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
			model.height = horizontal ? ipixels.size : undefined;
			model.width = horizontal ? undefined : ipixels.size;
		},

		/**
		 * @private
		 */
		getValueScaleId: function() {
			return this.getMeta().yAxisID;
		},

		/**
		 * @private
		 */
		getIndexScaleId: function() {
			return this.getMeta().xAxisID;
		},

		/**
		 * @private
		 */
		getValueScale: function() {
			return this.getScaleForId(this.getValueScaleId());
		},

		/**
		 * @private
		 */
		getIndexScale: function() {
			return this.getScaleForId(this.getIndexScaleId());
		},

		/**
		 * Returns the effective number of stacks based on groups and bar visibility.
		 * @private
		 */
		getStackCount: function(last) {
			var me = this;
			var chart = me.chart;
			var scale = me.getIndexScale();
			var stacked = scale.options.stacked;
			var ilen = last === undefined ? chart.data.datasets.length : last + 1;
			var stacks = [];
			var i, meta;

			for (i = 0; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				if (meta.bar && chart.isDatasetVisible(i) &&
					(stacked === false ||
					(stacked === true && stacks.indexOf(meta.stack) === -1) ||
					(stacked === undefined && (meta.stack === undefined || stacks.indexOf(meta.stack) === -1)))) {
					stacks.push(meta.stack);
				}
			}

			return stacks.length;
		},

		/**
		 * Returns the stack index for the given dataset based on groups and bar visibility.
		 * @private
		 */
		getStackIndex: function(datasetIndex) {
			return this.getStackCount(datasetIndex) - 1;
		},

		/**
		 * @private
		 */
		getRuler: function() {
			var me = this;
			var scale = me.getIndexScale();
			var stackCount = me.getStackCount();
			var datasetIndex = me.index;
			var pixels = [];
			var isHorizontal = scale.isHorizontal();
			var start = isHorizontal ? scale.left : scale.top;
			var end = start + (isHorizontal ? scale.width : scale.height);
			var i, ilen;

			for (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i) {
				pixels.push(scale.getPixelForValue(null, i, datasetIndex));
			}

			return {
				pixels: pixels,
				start: start,
				end: end,
				stackCount: stackCount,
				scale: scale
			};
		},

		/**
		 * Note: pixel values are not clamped to the scale area.
		 * @private
		 */
		calculateBarValuePixels: function(datasetIndex, index) {
			var me = this;
			var chart = me.chart;
			var meta = me.getMeta();
			var scale = me.getValueScale();
			var datasets = chart.data.datasets;
			var value = scale.getRightValue(datasets[datasetIndex].data[index]);
			var stacked = scale.options.stacked;
			var stack = meta.stack;
			var start = 0;
			var i, imeta, ivalue, base, head, size;

			if (stacked || (stacked === undefined && stack !== undefined)) {
				for (i = 0; i < datasetIndex; ++i) {
					imeta = chart.getDatasetMeta(i);

					if (imeta.bar &&
						imeta.stack === stack &&
						imeta.controller.getValueScaleId() === scale.id &&
						chart.isDatasetVisible(i)) {

						ivalue = scale.getRightValue(datasets[i].data[index]);
						if ((value < 0 && ivalue < 0) || (value >= 0 && ivalue > 0)) {
							start += ivalue;
						}
					}
				}
			}

			base = scale.getPixelForValue(start);
			head = scale.getPixelForValue(start + value);
			size = (head - base) / 2;

			return {
				size: size,
				base: base,
				head: head,
				center: head + size / 2
			};
		},

		/**
		 * @private
		 */
		calculateBarIndexPixels: function(datasetIndex, index, ruler) {
			var me = this;
			var options = ruler.scale.options;
			var stackIndex = me.getStackIndex(datasetIndex);
			var pixels = ruler.pixels;
			var base = pixels[index];
			var length = pixels.length;
			var start = ruler.start;
			var end = ruler.end;
			var leftSampleSize, rightSampleSize, leftCategorySize, rightCategorySize, fullBarSize, size;

			if (length === 1) {
				leftSampleSize = base > start ? base - start : end - base;
				rightSampleSize = base < end ? end - base : base - start;
			} else {
				if (index > 0) {
					leftSampleSize = (base - pixels[index - 1]) / 2;
					if (index === length - 1) {
						rightSampleSize = leftSampleSize;
					}
				}
				if (index < length - 1) {
					rightSampleSize = (pixels[index + 1] - base) / 2;
					if (index === 0) {
						leftSampleSize = rightSampleSize;
					}
				}
			}

			leftCategorySize = leftSampleSize * options.categoryPercentage;
			rightCategorySize = rightSampleSize * options.categoryPercentage;
			fullBarSize = (leftCategorySize + rightCategorySize) / ruler.stackCount;
			size = fullBarSize * options.barPercentage;

			size = Math.min(
				helpers.valueOrDefault(options.barThickness, size),
				helpers.valueOrDefault(options.maxBarThickness, Infinity));

			base -= leftCategorySize;
			base += fullBarSize * stackIndex;
			base += (fullBarSize - size) / 2;

			return {
				size: size,
				base: base,
				head: base + size,
				center: base + size / 2
			};
		},

		draw: function() {
			var me = this;
			var chart = me.chart;
			var scale = me.getValueScale();
			var rects = me.getMeta().data;
			var dataset = me.getDataset();
			var ilen = rects.length;
			var i = 0;

			helpers.canvas.clipArea(chart.ctx, chart.chartArea);

			for (; i < ilen; ++i) {
				if (!isNaN(scale.getRightValue(dataset.data[i]))) {
					rects[i].draw();
				}
			}

			helpers.canvas.unclipArea(chart.ctx);
		},

		setHoverStyle: function(rectangle) {
			var dataset = this.chart.data.datasets[rectangle._datasetIndex];
			var index = rectangle._index;
			var custom = rectangle.custom || {};
			var model = rectangle._model;

			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.valueAtIndexOrDefault(dataset.hoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.valueAtIndexOrDefault(dataset.hoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.valueAtIndexOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(rectangle) {
			var dataset = this.chart.data.datasets[rectangle._datasetIndex];
			var index = rectangle._index;
			var custom = rectangle.custom || {};
			var model = rectangle._model;
			var rectangleElementOptions = this.chart.options.elements.rectangle;

			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.valueAtIndexOrDefault(dataset.backgroundColor, index, rectangleElementOptions.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : helpers.valueAtIndexOrDefault(dataset.borderColor, index, rectangleElementOptions.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.valueAtIndexOrDefault(dataset.borderWidth, index, rectangleElementOptions.borderWidth);
		}
	});

	Chart.controllers.horizontalBar = Chart.controllers.bar.extend({
		/**
		 * @private
		 */
		getValueScaleId: function() {
			return this.getMeta().xAxisID;
		},

		/**
		 * @private
		 */
		getIndexScaleId: function() {
			return this.getMeta().yAxisID;
		}
	});
};

},{"25":25,"40":40,"45":45}],16:[function(require,module,exports){
'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('bubble', {
	hover: {
		mode: 'single'
	},

	scales: {
		xAxes: [{
			type: 'linear', // bubble should probably use a linear scale by default
			position: 'bottom',
			id: 'x-axis-0' // need an ID so datasets can reference the scale
		}],
		yAxes: [{
			type: 'linear',
			position: 'left',
			id: 'y-axis-0'
		}]
	},

	tooltips: {
		callbacks: {
			title: function() {
				// Title doesn't make sense for scatter since we format the data as a point
				return '';
			},
			label: function(item, data) {
				var datasetLabel = data.datasets[item.datasetIndex].label || '';
				var dataPoint = data.datasets[item.datasetIndex].data[item.index];
				return datasetLabel + ': (' + item.xLabel + ', ' + item.yLabel + ', ' + dataPoint.r + ')';
			}
		}
	}
});


module.exports = function(Chart) {

	Chart.controllers.bubble = Chart.DatasetController.extend({
		/**
		 * @protected
		 */
		dataElementType: elements.Point,

		/**
		 * @protected
		 */
		update: function(reset) {
			var me = this;
			var meta = me.getMeta();
			var points = meta.data;

			// Update Points
			helpers.each(points, function(point, index) {
				me.updateElement(point, index, reset);
			});
		},

		/**
		 * @protected
		 */
		updateElement: function(point, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var custom = point.custom || {};
			var xScale = me.getScaleForId(meta.xAxisID);
			var yScale = me.getScaleForId(meta.yAxisID);
			var options = me._resolveElementOptions(point, index);
			var data = me.getDataset().data[index];
			var dsIndex = me.index;

			var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex);
			var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex);

			point._xScale = xScale;
			point._yScale = yScale;
			point._options = options;
			point._datasetIndex = dsIndex;
			point._index = index;
			point._model = {
				backgroundColor: options.backgroundColor,
				borderColor: options.borderColor,
				borderWidth: options.borderWidth,
				hitRadius: options.hitRadius,
				pointStyle: options.pointStyle,
				radius: reset ? 0 : options.radius,
				skip: custom.skip || isNaN(x) || isNaN(y),
				x: x,
				y: y,
			};

			point.pivot();
		},

		/**
		 * @protected
		 */
		setHoverStyle: function(point) {
			var model = point._model;
			var options = point._options;

			model.backgroundColor = helpers.valueOrDefault(options.hoverBackgroundColor, helpers.getHoverColor(options.backgroundColor));
			model.borderColor = helpers.valueOrDefault(options.hoverBorderColor, helpers.getHoverColor(options.borderColor));
			model.borderWidth = helpers.valueOrDefault(options.hoverBorderWidth, options.borderWidth);
			model.radius = options.radius + options.hoverRadius;
		},

		/**
		 * @protected
		 */
		removeHoverStyle: function(point) {
			var model = point._model;
			var options = point._options;

			model.backgroundColor = options.backgroundColor;
			model.borderColor = options.borderColor;
			model.borderWidth = options.borderWidth;
			model.radius = options.radius;
		},

		/**
		 * @private
		 */
		_resolveElementOptions: function(point, index) {
			var me = this;
			var chart = me.chart;
			var datasets = chart.data.datasets;
			var dataset = datasets[me.index];
			var custom = point.custom || {};
			var options = chart.options.elements.point;
			var resolve = helpers.options.resolve;
			var data = dataset.data[index];
			var values = {};
			var i, ilen, key;

			// Scriptable options
			var context = {
				chart: chart,
				dataIndex: index,
				dataset: dataset,
				datasetIndex: me.index
			};

			var keys = [
				'backgroundColor',
				'borderColor',
				'borderWidth',
				'hoverBackgroundColor',
				'hoverBorderColor',
				'hoverBorderWidth',
				'hoverRadius',
				'hitRadius',
				'pointStyle'
			];

			for (i = 0, ilen = keys.length; i < ilen; ++i) {
				key = keys[i];
				values[key] = resolve([
					custom[key],
					dataset[key],
					options[key]
				], context, index);
			}

			// Custom radius resolution
			values.radius = resolve([
				custom.radius,
				data ? data.r : undefined,
				dataset.radius,
				options.radius
			], context, index);

			return values;
		}
	});
};

},{"25":25,"40":40,"45":45}],17:[function(require,module,exports){
'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('doughnut', {
	animation: {
		// Boolean - Whether we animate the rotation of the Doughnut
		animateRotate: true,
		// Boolean - Whether we animate scaling the Doughnut from the centre
		animateScale: false
	},
	hover: {
		mode: 'single'
	},
	legendCallback: function(chart) {
		var text = [];
		text.push('<ul class="' + chart.id + '-legend">');

		var data = chart.data;
		var datasets = data.datasets;
		var labels = data.labels;

		if (datasets.length) {
			for (var i = 0; i < datasets[0].data.length; ++i) {
				text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
				if (labels[i]) {
					text.push(labels[i]);
				}
				text.push('</li>');
			}
		}

		text.push('</ul>');
		return text.join('');
	},
	legend: {
		labels: {
			generateLabels: function(chart) {
				var data = chart.data;
				if (data.labels.length && data.datasets.length) {
					return data.labels.map(function(label, i) {
						var meta = chart.getDatasetMeta(0);
						var ds = data.datasets[0];
						var arc = meta.data[i];
						var custom = arc && arc.custom || {};
						var valueAtIndexOrDefault = helpers.valueAtIndexOrDefault;
						var arcOpts = chart.options.elements.arc;
						var fill = custom.backgroundColor ? custom.backgroundColor : valueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
						var stroke = custom.borderColor ? custom.borderColor : valueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
						var bw = custom.borderWidth ? custom.borderWidth : valueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

						return {
							text: label,
							fillStyle: fill,
							strokeStyle: stroke,
							lineWidth: bw,
							hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

							// Extra data used for toggling the correct item
							index: i
						};
					});
				}
				return [];
			}
		},

		onClick: function(e, legendItem) {
			var index = legendItem.index;
			var chart = this.chart;
			var i, ilen, meta;

			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				// toggle visibility of index if exists
				if (meta.data[index]) {
					meta.data[index].hidden = !meta.data[index].hidden;
				}
			}

			chart.update();
		}
	},

	// The percentage of the chart that we cut out of the middle.
	cutoutPercentage: 50,

	// The rotation of the chart, where the first data arc begins.
	rotation: Math.PI * -0.5,

	// The total circumference of the chart.
	circumference: Math.PI * 2.0,

	// Need to override these to give a nice default
	tooltips: {
		callbacks: {
			title: function() {
				return '';
			},
			label: function(tooltipItem, data) {
				var dataLabel = data.labels[tooltipItem.index];
				var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

				if (helpers.isArray(dataLabel)) {
					// show value on first line of multiline label
					// need to clone because we are changing the value
					dataLabel = dataLabel.slice();
					dataLabel[0] += value;
				} else {
					dataLabel += value;
				}

				return dataLabel;
			}
		}
	}
});

defaults._set('pie', helpers.clone(defaults.doughnut));
defaults._set('pie', {
	cutoutPercentage: 0
});

module.exports = function(Chart) {

	Chart.controllers.doughnut = Chart.controllers.pie = Chart.DatasetController.extend({

		dataElementType: elements.Arc,

		linkScales: helpers.noop,

		// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
		getRingIndex: function(datasetIndex) {
			var ringIndex = 0;

			for (var j = 0; j < datasetIndex; ++j) {
				if (this.chart.isDatasetVisible(j)) {
					++ringIndex;
				}
			}

			return ringIndex;
		},

		update: function(reset) {
			var me = this;
			var chart = me.chart;
			var chartArea = chart.chartArea;
			var opts = chart.options;
			var arcOpts = opts.elements.arc;
			var availableWidth = chartArea.right - chartArea.left - arcOpts.borderWidth;
			var availableHeight = chartArea.bottom - chartArea.top - arcOpts.borderWidth;
			var minSize = Math.min(availableWidth, availableHeight);
			var offset = {x: 0, y: 0};
			var meta = me.getMeta();
			var cutoutPercentage = opts.cutoutPercentage;
			var circumference = opts.circumference;

			// If the chart's circumference isn't a full circle, calculate minSize as a ratio of the width/height of the arc
			if (circumference < Math.PI * 2.0) {
				var startAngle = opts.rotation % (Math.PI * 2.0);
				startAngle += Math.PI * 2.0 * (startAngle >= Math.PI ? -1 : startAngle < -Math.PI ? 1 : 0);
				var endAngle = startAngle + circumference;
				var start = {x: Math.cos(startAngle), y: Math.sin(startAngle)};
				var end = {x: Math.cos(endAngle), y: Math.sin(endAngle)};
				var contains0 = (startAngle <= 0 && endAngle >= 0) || (startAngle <= Math.PI * 2.0 && Math.PI * 2.0 <= endAngle);
				var contains90 = (startAngle <= Math.PI * 0.5 && Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 2.5 && Math.PI * 2.5 <= endAngle);
				var contains180 = (startAngle <= -Math.PI && -Math.PI <= endAngle) || (startAngle <= Math.PI && Math.PI <= endAngle);
				var contains270 = (startAngle <= -Math.PI * 0.5 && -Math.PI * 0.5 <= endAngle) || (startAngle <= Math.PI * 1.5 && Math.PI * 1.5 <= endAngle);
				var cutout = cutoutPercentage / 100.0;
				var min = {x: contains180 ? -1 : Math.min(start.x * (start.x < 0 ? 1 : cutout), end.x * (end.x < 0 ? 1 : cutout)), y: contains270 ? -1 : Math.min(start.y * (start.y < 0 ? 1 : cutout), end.y * (end.y < 0 ? 1 : cutout))};
				var max = {x: contains0 ? 1 : Math.max(start.x * (start.x > 0 ? 1 : cutout), end.x * (end.x > 0 ? 1 : cutout)), y: contains90 ? 1 : Math.max(start.y * (start.y > 0 ? 1 : cutout), end.y * (end.y > 0 ? 1 : cutout))};
				var size = {width: (max.x - min.x) * 0.5, height: (max.y - min.y) * 0.5};
				minSize = Math.min(availableWidth / size.width, availableHeight / size.height);
				offset = {x: (max.x + min.x) * -0.5, y: (max.y + min.y) * -0.5};
			}

			chart.borderWidth = me.getMaxBorderWidth(meta.data);
			chart.outerRadius = Math.max((minSize - chart.borderWidth) / 2, 0);
			chart.innerRadius = Math.max(cutoutPercentage ? (chart.outerRadius / 100) * (cutoutPercentage) : 0, 0);
			chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
			chart.offsetX = offset.x * chart.outerRadius;
			chart.offsetY = offset.y * chart.outerRadius;

			meta.total = me.calculateTotal();

			me.outerRadius = chart.outerRadius - (chart.radiusLength * me.getRingIndex(me.index));
			me.innerRadius = Math.max(me.outerRadius - chart.radiusLength, 0);

			helpers.each(meta.data, function(arc, index) {
				me.updateElement(arc, index, reset);
			});
		},

		updateElement: function(arc, index, reset) {
			var me = this;
			var chart = me.chart;
			var chartArea = chart.chartArea;
			var opts = chart.options;
			var animationOpts = opts.animation;
			var centerX = (chartArea.left + chartArea.right) / 2;
			var centerY = (chartArea.top + chartArea.bottom) / 2;
			var startAngle = opts.rotation; // non reset case handled later
			var endAngle = opts.rotation; // non reset case handled later
			var dataset = me.getDataset();
			var circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / (2.0 * Math.PI));
			var innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius;
			var outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius;
			var valueAtIndexOrDefault = helpers.valueAtIndexOrDefault;

			helpers.extend(arc, {
				// Utility
				_datasetIndex: me.index,
				_index: index,

				// Desired view properties
				_model: {
					x: centerX + chart.offsetX,
					y: centerY + chart.offsetY,
					startAngle: startAngle,
					endAngle: endAngle,
					circumference: circumference,
					outerRadius: outerRadius,
					innerRadius: innerRadius,
					label: valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
				}
			});

			var model = arc._model;
			// Resets the visual styles
			this.removeHoverStyle(arc);

			// Set correct angles if not resetting
			if (!reset || !animationOpts.animateRotate) {
				if (index === 0) {
					model.startAngle = opts.rotation;
				} else {
					model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
				}

				model.endAngle = model.startAngle + model.circumference;
			}

			arc.pivot();
		},

		removeHoverStyle: function(arc) {
			Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
		},

		calculateTotal: function() {
			var dataset = this.getDataset();
			var meta = this.getMeta();
			var total = 0;
			var value;

			helpers.each(meta.data, function(element, index) {
				value = dataset.data[index];
				if (!isNaN(value) && !element.hidden) {
					total += Math.abs(value);
				}
			});

			/* if (total === 0) {
				total = NaN;
			}*/

			return total;
		},

		calculateCircumference: function(value) {
			var total = this.getMeta().total;
			if (total > 0 && !isNaN(value)) {
				return (Math.PI * 2.0) * (value / total);
			}
			return 0;
		},

		// gets the max border or hover width to properly scale pie charts
		getMaxBorderWidth: function(arcs) {
			var max = 0;
			var index = this.index;
			var length = arcs.length;
			var borderWidth;
			var hoverWidth;

			for (var i = 0; i < length; i++) {
				borderWidth = arcs[i]._model ? arcs[i]._model.borderWidth : 0;
				hoverWidth = arcs[i]._chart ? arcs[i]._chart.config.data.datasets[index].hoverBorderWidth : 0;

				max = borderWidth > max ? borderWidth : max;
				max = hoverWidth > max ? hoverWidth : max;
			}
			return max;
		}
	});
};

},{"25":25,"40":40,"45":45}],18:[function(require,module,exports){
'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('line', {
	showLines: true,
	spanGaps: false,

	hover: {
		mode: 'label'
	},

	scales: {
		xAxes: [{
			type: 'category',
			id: 'x-axis-0'
		}],
		yAxes: [{
			type: 'linear',
			id: 'y-axis-0'
		}]
	}
});

module.exports = function(Chart) {

	function lineEnabled(dataset, options) {
		return helpers.valueOrDefault(dataset.showLine, options.showLines);
	}

	Chart.controllers.line = Chart.DatasetController.extend({

		datasetElementType: elements.Line,

		dataElementType: elements.Point,

		update: function(reset) {
			var me = this;
			var meta = me.getMeta();
			var line = meta.dataset;
			var points = meta.data || [];
			var options = me.chart.options;
			var lineElementOptions = options.elements.line;
			var scale = me.getScaleForId(meta.yAxisID);
			var i, ilen, custom;
			var dataset = me.getDataset();
			var showLine = lineEnabled(dataset, options);

			// Update Line
			if (showLine) {
				custom = line.custom || {};

				// Compatibility: If the properties are defined with only the old name, use those values
				if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
					dataset.lineTension = dataset.tension;
				}

				// Utility
				line._scale = scale;
				line._datasetIndex = me.index;
				// Data
				line._children = points;
				// Model
				line._model = {
					// Appearance
					// The default behavior of lines is to break at null values, according
					// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
					// This option gives lines the ability to span gaps
					spanGaps: dataset.spanGaps ? dataset.spanGaps : options.spanGaps,
					tension: custom.tension ? custom.tension : helpers.valueOrDefault(dataset.lineTension, lineElementOptions.tension),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
					borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
					borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
					borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
					borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
					borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
					fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
					steppedLine: custom.steppedLine ? custom.steppedLine : helpers.valueOrDefault(dataset.steppedLine, lineElementOptions.stepped),
					cubicInterpolationMode: custom.cubicInterpolationMode ? custom.cubicInterpolationMode : helpers.valueOrDefault(dataset.cubicInterpolationMode, lineElementOptions.cubicInterpolationMode),
				};

				line.pivot();
			}

			// Update Points
			for (i = 0, ilen = points.length; i < ilen; ++i) {
				me.updateElement(points[i], i, reset);
			}

			if (showLine && line._model.tension !== 0) {
				me.updateBezierControlPoints();
			}

			// Now pivot the point for animation
			for (i = 0, ilen = points.length; i < ilen; ++i) {
				points[i].pivot();
			}
		},

		getPointBackgroundColor: function(point, index) {
			var backgroundColor = this.chart.options.elements.point.backgroundColor;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (custom.backgroundColor) {
				backgroundColor = custom.backgroundColor;
			} else if (dataset.pointBackgroundColor) {
				backgroundColor = helpers.valueAtIndexOrDefault(dataset.pointBackgroundColor, index, backgroundColor);
			} else if (dataset.backgroundColor) {
				backgroundColor = dataset.backgroundColor;
			}

			return backgroundColor;
		},

		getPointBorderColor: function(point, index) {
			var borderColor = this.chart.options.elements.point.borderColor;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (custom.borderColor) {
				borderColor = custom.borderColor;
			} else if (dataset.pointBorderColor) {
				borderColor = helpers.valueAtIndexOrDefault(dataset.pointBorderColor, index, borderColor);
			} else if (dataset.borderColor) {
				borderColor = dataset.borderColor;
			}

			return borderColor;
		},

		getPointBorderWidth: function(point, index) {
			var borderWidth = this.chart.options.elements.point.borderWidth;
			var dataset = this.getDataset();
			var custom = point.custom || {};

			if (!isNaN(custom.borderWidth)) {
				borderWidth = custom.borderWidth;
			} else if (!isNaN(dataset.pointBorderWidth) || helpers.isArray(dataset.pointBorderWidth)) {
				borderWidth = helpers.valueAtIndexOrDefault(dataset.pointBorderWidth, index, borderWidth);
			} else if (!isNaN(dataset.borderWidth)) {
				borderWidth = dataset.borderWidth;
			}

			return borderWidth;
		},

		updateElement: function(point, index, reset) {
			var me = this;
			var meta = me.getMeta();
			var custom = point.custom || {};
			var dataset = me.getDataset();
			var datasetIndex = me.index;
			var value = dataset.data[index];
			var yScale = me.getScaleForId(meta.yAxisID);
			var xScale = me.getScaleForId(meta.xAxisID);
			var pointOptions = me.chart.options.elements.point;
			var x, y;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
				dataset.pointRadius = dataset.radius;
			}
			if ((dataset.hitRadius !== undefined) && (dataset.pointHitRadius === undefined)) {
				dataset.pointHitRadius = dataset.hitRadius;
			}

			x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex);
			y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);

			// Utility
			point._xScale = xScale;
			point._yScale = yScale;
			point._datasetIndex = datasetIndex;
			point._index = index;

			// Desired view properties
			point._model = {
				x: x,
				y: y,
				skip: custom.skip || isNaN(x) || isNaN(y),
				// Appearance
				radius: custom.radius || helpers.valueAtIndexOrDefault(dataset.pointRadius, index, pointOptions.radius),
				pointStyle: custom.pointStyle || helpers.valueAtIndexOrDefault(dataset.pointStyle, index, pointOptions.pointStyle),
				backgroundColor: me.getPointBackgroundColor(point, index),
				borderColor: me.getPointBorderColor(point, index),
				borderWidth: me.getPointBorderWidth(point, index),
				tension: meta.dataset._model ? meta.dataset._model.tension : 0,
				steppedLine: meta.dataset._model ? meta.dataset._model.steppedLine : false,
				// Tooltip
				hitRadius: custom.hitRadius || helpers.valueAtIndexOrDefault(dataset.pointHitRadius, index, pointOptions.hitRadius)
			};
		},

		calculatePointY: function(value, index, datasetIndex) {
			var me = this;
			var chart = me.chart;
			var meta = me.getMeta();
			var yScale = me.getScaleForId(meta.yAxisID);
			var sumPos = 0;
			var sumNeg = 0;
			var i, ds, dsMeta;

			if (yScale.options.stacked) {
				for (i = 0; i < datasetIndex; i++) {
					ds = chart.data.datasets[i];
					dsMeta = chart.getDatasetMeta(i);
					if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id && chart.isDatasetVisible(i)) {
						var stackedRightValue = Number(yScale.getRightValue(ds.data[index]));
						if (stackedRightValue < 0) {
							sumNeg += stackedRightValue || 0;
						} else {
							sumPos += stackedRightValue || 0;
						}
					}
				}

				var rightValue = Number(yScale.getRightValue(value));
				if (rightValue < 0) {
					return yScale.getPixelForValue(sumNeg + rightValue);
				}
				return yScale.getPixelForValue(sumPos + rightValue);
			}

			return yScale.getPixelForValue(value);
		},

		updateBezierControlPoints: function() {
			var me = this;
			var meta = me.getMeta();
			var area = me.chart.chartArea;
			var points = (meta.data || []);
			var i, ilen, point, model, controlPoints;

			// Only consider points that are drawn in case the spanGaps option is used
			if (meta.dataset._model.spanGaps) {
				points = points.filter(function(pt) {
					return !pt._model.skip;
				});
			}

			function capControlPoint(pt, min, max) {
				return Math.max(Math.min(pt, max), min);
			}

			if (meta.dataset._model.cubicInterpolationMode === 'monotone') {
				helpers.splineCurveMonotone(points);
			} else {
				for (i = 0, ilen = points.length; i < ilen; ++i) {
					point = points[i];
					model = point._model;
					controlPoints = helpers.splineCurve(
						helpers.previousItem(points, i)._model,
						model,
						helpers.nextItem(points, i)._model,
						meta.dataset._model.tension
					);
					model.controlPointPreviousX = controlPoints.previous.x;
					model.controlPointPreviousY = controlPoints.previous.y;
					model.controlPointNextX = controlPoints.next.x;
					model.controlPointNextY = controlPoints.next.y;
				}
			}

			if (me.chart.options.elements.line.capBezierPoints) {
				for (i = 0, ilen = points.length; i < ilen; ++i) {
					model = points[i]._model;
					model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
					model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
					model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
					model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);
				}
			}
		},

		draw: function() {
			var me = this;
			var chart = me.chart;
			var meta = me.getMeta();
			var points = meta.data || [];
			var area = chart.chartArea;
			var ilen = points.length;
			var i = 0;

			helpers.canvas.clipArea(chart.ctx, area);

			if (lineEnabled(me.getDataset(), chart.options)) {
				meta.dataset.draw();
			}

			helpers.canvas.unclipArea(chart.ctx);

			// Draw the points
			for (; i < ilen; ++i) {
				points[i].draw(area);
			}
		},

		setHoverStyle: function(point) {
			// Point
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var index = point._index;
			var custom = point.custom || {};
			var model = point._model;

			model.radius = custom.hoverRadius || helpers.valueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
			model.backgroundColor = custom.hoverBackgroundColor || helpers.valueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor || helpers.valueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth || helpers.valueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(point) {
			var me = this;
			var dataset = me.chart.data.datasets[point._datasetIndex];
			var index = point._index;
			var custom = point.custom || {};
			var model = point._model;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
				dataset.pointRadius = dataset.radius;
			}

			model.radius = custom.radius || helpers.valueAtIndexOrDefault(dataset.pointRadius, index, me.chart.options.elements.point.radius);
			model.backgroundColor = me.getPointBackgroundColor(point, index);
			model.borderColor = me.getPointBorderColor(point, index);
			model.borderWidth = me.getPointBorderWidth(point, index);
		}
	});
};

},{"25":25,"40":40,"45":45}],19:[function(require,module,exports){
'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('polarArea', {
	scale: {
		type: 'radialLinear',
		angleLines: {
			display: false
		},
		gridLines: {
			circular: true
		},
		pointLabels: {
			display: false
		},
		ticks: {
			beginAtZero: true
		}
	},

	// Boolean - Whether to animate the rotation of the chart
	animation: {
		animateRotate: true,
		animateScale: true
	},

	startAngle: -0.5 * Math.PI,
	legendCallback: function(chart) {
		var text = [];
		text.push('<ul class="' + chart.id + '-legend">');

		var data = chart.data;
		var datasets = data.datasets;
		var labels = data.labels;

		if (datasets.length) {
			for (var i = 0; i < datasets[0].data.length; ++i) {
				text.push('<li><span style="background-color:' + datasets[0].backgroundColor[i] + '"></span>');
				if (labels[i]) {
					text.push(labels[i]);
				}
				text.push('</li>');
			}
		}

		text.push('</ul>');
		return text.join('');
	},
	legend: {
		labels: {
			generateLabels: function(chart) {
				var data = chart.data;
				if (data.labels.length && data.datasets.length) {
					return data.labels.map(function(label, i) {
						var meta = chart.getDatasetMeta(0);
						var ds = data.datasets[0];
						var arc = meta.data[i];
						var custom = arc.custom || {};
						var valueAtIndexOrDefault = helpers.valueAtIndexOrDefault;
						var arcOpts = chart.options.elements.arc;
						var fill = custom.backgroundColor ? custom.backgroundColor : valueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
						var stroke = custom.borderColor ? custom.borderColor : valueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
						var bw = custom.borderWidth ? custom.borderWidth : valueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

						return {
							text: label,
							fillStyle: fill,
							strokeStyle: stroke,
							lineWidth: bw,
							hidden: isNaN(ds.data[i]) || meta.data[i].hidden,

							// Extra data used for toggling the correct item
							index: i
						};
					});
				}
				return [];
			}
		},

		onClick: function(e, legendItem) {
			var index = legendItem.index;
			var chart = this.chart;
			var i, ilen, meta;

			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				meta = chart.getDatasetMeta(i);
				meta.data[index].hidden = !meta.data[index].hidden;
			}

			chart.update();
		}
	},

	// Need to override these to give a nice default
	tooltips: {
		callbacks: {
			title: function() {
				return '';
			},
			label: function(item, data) {
				return data.labels[item.index] + ': ' + item.yLabel;
			}
		}
	}
});

module.exports = function(Chart) {

	Chart.controllers.polarArea = Chart.DatasetController.extend({

		dataElementType: elements.Arc,

		linkScales: helpers.noop,

		update: function(reset) {
			var me = this;
			var chart = me.chart;
			var chartArea = chart.chartArea;
			var meta = me.getMeta();
			var opts = chart.options;
			var arcOpts = opts.elements.arc;
			var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
			chart.outerRadius = Math.max((minSize - arcOpts.borderWidth / 2) / 2, 0);
			chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);
			chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();

			me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
			me.innerRadius = me.outerRadius - chart.radiusLength;

			meta.count = me.countVisibleElements();

			helpers.each(meta.data, function(arc, index) {
				me.updateElement(arc, index, reset);
			});
		},

		updateElement: function(arc, index, reset) {
			var me = this;
			var chart = me.chart;
			var dataset = me.getDataset();
			var opts = chart.options;
			var animationOpts = opts.animation;
			var scale = chart.scale;
			var labels = chart.data.labels;

			var circumference = me.calculateCircumference(dataset.data[index]);
			var centerX = scale.xCenter;
			var centerY = scale.yCenter;

			// If there is NaN data before us, we need to calculate the starting angle correctly.
			// We could be way more efficient here, but its unlikely that the polar area chart will have a lot of data
			var visibleCount = 0;
			var meta = me.getMeta();
			for (var i = 0; i < index; ++i) {
				if (!isNaN(dataset.data[i]) && !meta.data[i].hidden) {
					++visibleCount;
				}
			}

			// var negHalfPI = -0.5 * Math.PI;
			var datasetStartAngle = opts.startAngle;
			var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
			var startAngle = datasetStartAngle + (circumference * visibleCount);
			var endAngle = startAngle + (arc.hidden ? 0 : circumference);

			var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);

			helpers.extend(arc, {
				// Utility
				_datasetIndex: me.index,
				_index: index,
				_scale: scale,

				// Desired view properties
				_model: {
					x: centerX,
					y: centerY,
					innerRadius: 0,
					outerRadius: reset ? resetRadius : distance,
					startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
					endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
					label: helpers.valueAtIndexOrDefault(labels, index, labels[index])
				}
			});

			// Apply border and fill style
			me.removeHoverStyle(arc);

			arc.pivot();
		},

		removeHoverStyle: function(arc) {
			Chart.DatasetController.prototype.removeHoverStyle.call(this, arc, this.chart.options.elements.arc);
		},

		countVisibleElements: function() {
			var dataset = this.getDataset();
			var meta = this.getMeta();
			var count = 0;

			helpers.each(meta.data, function(element, index) {
				if (!isNaN(dataset.data[index]) && !element.hidden) {
					count++;
				}
			});

			return count;
		},

		calculateCircumference: function(value) {
			var count = this.getMeta().count;
			if (count > 0 && !isNaN(value)) {
				return (2 * Math.PI) / count;
			}
			return 0;
		}
	});
};

},{"25":25,"40":40,"45":45}],20:[function(require,module,exports){
'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('radar', {
	scale: {
		type: 'radialLinear'
	},
	elements: {
		line: {
			tension: 0 // no bezier in radar
		}
	}
});

module.exports = function(Chart) {

	Chart.controllers.radar = Chart.DatasetController.extend({

		datasetElementType: elements.Line,

		dataElementType: elements.Point,

		linkScales: helpers.noop,

		update: function(reset) {
			var me = this;
			var meta = me.getMeta();
			var line = meta.dataset;
			var points = meta.data;
			var custom = line.custom || {};
			var dataset = me.getDataset();
			var lineElementOptions = me.chart.options.elements.line;
			var scale = me.chart.scale;

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.tension !== undefined) && (dataset.lineTension === undefined)) {
				dataset.lineTension = dataset.tension;
			}

			helpers.extend(meta.dataset, {
				// Utility
				_datasetIndex: me.index,
				_scale: scale,
				// Data
				_children: points,
				_loop: true,
				// Model
				_model: {
					// Appearance
					tension: custom.tension ? custom.tension : helpers.valueOrDefault(dataset.lineTension, lineElementOptions.tension),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : (dataset.backgroundColor || lineElementOptions.backgroundColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : (dataset.borderWidth || lineElementOptions.borderWidth),
					borderColor: custom.borderColor ? custom.borderColor : (dataset.borderColor || lineElementOptions.borderColor),
					fill: custom.fill ? custom.fill : (dataset.fill !== undefined ? dataset.fill : lineElementOptions.fill),
					borderCapStyle: custom.borderCapStyle ? custom.borderCapStyle : (dataset.borderCapStyle || lineElementOptions.borderCapStyle),
					borderDash: custom.borderDash ? custom.borderDash : (dataset.borderDash || lineElementOptions.borderDash),
					borderDashOffset: custom.borderDashOffset ? custom.borderDashOffset : (dataset.borderDashOffset || lineElementOptions.borderDashOffset),
					borderJoinStyle: custom.borderJoinStyle ? custom.borderJoinStyle : (dataset.borderJoinStyle || lineElementOptions.borderJoinStyle),
				}
			});

			meta.dataset.pivot();

			// Update Points
			helpers.each(points, function(point, index) {
				me.updateElement(point, index, reset);
			}, me);

			// Update bezier control points
			me.updateBezierControlPoints();
		},
		updateElement: function(point, index, reset) {
			var me = this;
			var custom = point.custom || {};
			var dataset = me.getDataset();
			var scale = me.chart.scale;
			var pointElementOptions = me.chart.options.elements.point;
			var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);

			// Compatibility: If the properties are defined with only the old name, use those values
			if ((dataset.radius !== undefined) && (dataset.pointRadius === undefined)) {
				dataset.pointRadius = dataset.radius;
			}
			if ((dataset.hitRadius !== undefined) && (dataset.pointHitRadius === undefined)) {
				dataset.pointHitRadius = dataset.hitRadius;
			}

			helpers.extend(point, {
				// Utility
				_datasetIndex: me.index,
				_index: index,
				_scale: scale,

				// Desired view properties
				_model: {
					x: reset ? scale.xCenter : pointPosition.x, // value not used in dataset scale, but we want a consistent API between scales
					y: reset ? scale.yCenter : pointPosition.y,

					// Appearance
					tension: custom.tension ? custom.tension : helpers.valueOrDefault(dataset.lineTension, me.chart.options.elements.line.tension),
					radius: custom.radius ? custom.radius : helpers.valueAtIndexOrDefault(dataset.pointRadius, index, pointElementOptions.radius),
					backgroundColor: custom.backgroundColor ? custom.backgroundColor : helpers.valueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor),
					borderColor: custom.borderColor ? custom.borderColor : helpers.valueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor),
					borderWidth: custom.borderWidth ? custom.borderWidth : helpers.valueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth),
					pointStyle: custom.pointStyle ? custom.pointStyle : helpers.valueAtIndexOrDefault(dataset.pointStyle, index, pointElementOptions.pointStyle),

					// Tooltip
					hitRadius: custom.hitRadius ? custom.hitRadius : helpers.valueAtIndexOrDefault(dataset.pointHitRadius, index, pointElementOptions.hitRadius)
				}
			});

			point._model.skip = custom.skip ? custom.skip : (isNaN(point._model.x) || isNaN(point._model.y));
		},
		updateBezierControlPoints: function() {
			var chartArea = this.chart.chartArea;
			var meta = this.getMeta();

			helpers.each(meta.data, function(point, index) {
				var model = point._model;
				var controlPoints = helpers.splineCurve(
					helpers.previousItem(meta.data, index, true)._model,
					model,
					helpers.nextItem(meta.data, index, true)._model,
					model.tension
				);

				// Prevent the bezier going outside of the bounds of the graph
				model.controlPointPreviousX = Math.max(Math.min(controlPoints.previous.x, chartArea.right), chartArea.left);
				model.controlPointPreviousY = Math.max(Math.min(controlPoints.previous.y, chartArea.bottom), chartArea.top);

				model.controlPointNextX = Math.max(Math.min(controlPoints.next.x, chartArea.right), chartArea.left);
				model.controlPointNextY = Math.max(Math.min(controlPoints.next.y, chartArea.bottom), chartArea.top);

				// Now pivot the point for animation
				point.pivot();
			});
		},

		setHoverStyle: function(point) {
			// Point
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var custom = point.custom || {};
			var index = point._index;
			var model = point._model;

			model.radius = custom.hoverRadius ? custom.hoverRadius : helpers.valueAtIndexOrDefault(dataset.pointHoverRadius, index, this.chart.options.elements.point.hoverRadius);
			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : helpers.valueAtIndexOrDefault(dataset.pointHoverBackgroundColor, index, helpers.getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : helpers.valueAtIndexOrDefault(dataset.pointHoverBorderColor, index, helpers.getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : helpers.valueAtIndexOrDefault(dataset.pointHoverBorderWidth, index, model.borderWidth);
		},

		removeHoverStyle: function(point) {
			var dataset = this.chart.data.datasets[point._datasetIndex];
			var custom = point.custom || {};
			var index = point._index;
			var model = point._model;
			var pointElementOptions = this.chart.options.elements.point;

			model.radius = custom.radius ? custom.radius : helpers.valueAtIndexOrDefault(dataset.pointRadius, index, pointElementOptions.radius);
			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : helpers.valueAtIndexOrDefault(dataset.pointBackgroundColor, index, pointElementOptions.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : helpers.valueAtIndexOrDefault(dataset.pointBorderColor, index, pointElementOptions.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : helpers.valueAtIndexOrDefault(dataset.pointBorderWidth, index, pointElementOptions.borderWidth);
		}
	});
};

},{"25":25,"40":40,"45":45}],21:[function(require,module,exports){
'use strict';

var defaults = require(25);

defaults._set('scatter', {
	hover: {
		mode: 'single'
	},

	scales: {
		xAxes: [{
			id: 'x-axis-1',    // need an ID so datasets can reference the scale
			type: 'linear',    // scatter should not use a category axis
			position: 'bottom'
		}],
		yAxes: [{
			id: 'y-axis-1',
			type: 'linear',
			position: 'left'
		}]
	},

	showLines: false,

	tooltips: {
		callbacks: {
			title: function() {
				return '';     // doesn't make sense for scatter since data are formatted as a point
			},
			label: function(item) {
				return '(' + item.xLabel + ', ' + item.yLabel + ')';
			}
		}
	}
});

module.exports = function(Chart) {

	// Scatter charts use line controllers
	Chart.controllers.scatter = Chart.controllers.line;

};

},{"25":25}],22:[function(require,module,exports){
/* global window: false */
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

defaults._set('global', {
	animation: {
		duration: 1000,
		easing: 'easeOutQuart',
		onProgress: helpers.noop,
		onComplete: helpers.noop
	}
});

module.exports = function(Chart) {

	Chart.Animation = Element.extend({
		chart: null, // the animation associated chart instance
		currentStep: 0, // the current animation step
		numSteps: 60, // default number of steps
		easing: '', // the easing to use for this animation
		render: null, // render function used by the animation service

		onAnimationProgress: null, // user specified callback to fire on each step of the animation
		onAnimationComplete: null, // user specified callback to fire when the animation finishes
	});

	Chart.animationService = {
		frameDuration: 17,
		animations: [],
		dropFrames: 0,
		request: null,

		/**
		 * @param {Chart} chart - The chart to animate.
		 * @param {Chart.Animation} animation - The animation that we will animate.
		 * @param {Number} duration - The animation duration in ms.
		 * @param {Boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
		 */
		addAnimation: function(chart, animation, duration, lazy) {
			var animations = this.animations;
			var i, ilen;

			animation.chart = chart;

			if (!lazy) {
				chart.animating = true;
			}

			for (i = 0, ilen = animations.length; i < ilen; ++i) {
				if (animations[i].chart === chart) {
					animations[i] = animation;
					return;
				}
			}

			animations.push(animation);

			// If there are no animations queued, manually kickstart a digest, for lack of a better word
			if (animations.length === 1) {
				this.requestAnimationFrame();
			}
		},

		cancelAnimation: function(chart) {
			var index = helpers.findIndex(this.animations, function(animation) {
				return animation.chart === chart;
			});

			if (index !== -1) {
				this.animations.splice(index, 1);
				chart.animating = false;
			}
		},

		requestAnimationFrame: function() {
			var me = this;
			if (me.request === null) {
				// Skip animation frame requests until the active one is executed.
				// This can happen when processing mouse events, e.g. 'mousemove'
				// and 'mouseout' events will trigger multiple renders.
				me.request = helpers.requestAnimFrame.call(window, function() {
					me.request = null;
					me.startDigest();
				});
			}
		},

		/**
		 * @private
		 */
		startDigest: function() {
			var me = this;
			var startTime = Date.now();
			var framesToDrop = 0;

			if (me.dropFrames > 1) {
				framesToDrop = Math.floor(me.dropFrames);
				me.dropFrames = me.dropFrames % 1;
			}

			me.advance(1 + framesToDrop);

			var endTime = Date.now();

			me.dropFrames += (endTime - startTime) / me.frameDuration;

			// Do we have more stuff to animate?
			if (me.animations.length > 0) {
				me.requestAnimationFrame();
			}
		},

		/**
		 * @private
		 */
		advance: function(count) {
			var animations = this.animations;
			var animation, chart;
			var i = 0;

			while (i < animations.length) {
				animation = animations[i];
				chart = animation.chart;

				animation.currentStep = (animation.currentStep || 0) + count;
				animation.currentStep = Math.min(animation.currentStep, animation.numSteps);

				helpers.callback(animation.render, [chart, animation], chart);
				helpers.callback(animation.onAnimationProgress, [animation], chart);

				if (animation.currentStep >= animation.numSteps) {
					helpers.callback(animation.onAnimationComplete, [animation], chart);
					chart.animating = false;
					animations.splice(i, 1);
				} else {
					++i;
				}
			}
		}
	};

	/**
	 * Provided for backward compatibility, use Chart.Animation instead
	 * @prop Chart.Animation#animationObject
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 */
	Object.defineProperty(Chart.Animation.prototype, 'animationObject', {
		get: function() {
			return this;
		}
	});

	/**
	 * Provided for backward compatibility, use Chart.Animation#chart instead
	 * @prop Chart.Animation#chartInstance
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 */
	Object.defineProperty(Chart.Animation.prototype, 'chartInstance', {
		get: function() {
			return this.chart;
		},
		set: function(value) {
			this.chart = value;
		}
	});

};

},{"25":25,"26":26,"45":45}],23:[function(require,module,exports){
'use strict';

var defaults = require(25);
var helpers = require(45);
var Interaction = require(28);
var platform = require(48);

module.exports = function(Chart) {
	var plugins = Chart.plugins;

	// Create a dictionary of chart types, to allow for extension of existing types
	Chart.types = {};

	// Store a reference to each instance - allowing us to globally resize chart instances on window resize.
	// Destroy method on the chart will remove the instance of the chart from this reference.
	Chart.instances = {};

	// Controllers available for dataset visualization eg. bar, line, slice, etc.
	Chart.controllers = {};

	/**
	 * Initializes the given config with global and chart default values.
	 */
	function initConfig(config) {
		config = config || {};

		// Do NOT use configMerge() for the data object because this method merges arrays
		// and so would change references to labels and datasets, preventing data updates.
		var data = config.data = config.data || {};
		data.datasets = data.datasets || [];
		data.labels = data.labels || [];

		config.options = helpers.configMerge(
			defaults.global,
			defaults[config.type],
			config.options || {});

		return config;
	}

	/**
	 * Updates the config of the chart
	 * @param chart {Chart} chart to update the options for
	 */
	function updateConfig(chart) {
		var newOptions = chart.options;

		// Update Scale(s) with options
		if (newOptions.scale) {
			chart.scale.options = newOptions.scale;
		} else if (newOptions.scales) {
			newOptions.scales.xAxes.concat(newOptions.scales.yAxes).forEach(function(scaleOptions) {
				chart.scales[scaleOptions.id].options = scaleOptions;
			});
		}

		// Tooltip
		chart.tooltip._options = newOptions.tooltips;
	}

	function positionIsHorizontal(position) {
		return position === 'top' || position === 'bottom';
	}

	helpers.extend(Chart.prototype, /** @lends Chart */ {
		/**
		 * @private
		 */
		construct: function(item, config) {
			var me = this;

			config = initConfig(config);

			var context = platform.acquireContext(item, config);
			var canvas = context && context.canvas;
			var height = canvas && canvas.height;
			var width = canvas && canvas.width;

			me.id = helpers.uid();
			me.ctx = context;
			me.canvas = canvas;
			me.config = config;
			me.width = width;
			me.height = height;
			me.aspectRatio = height ? width / height : null;
			me.options = config.options;
			me._bufferedRender = false;

			/**
			 * Provided for backward compatibility, Chart and Chart.Controller have been merged,
			 * the "instance" still need to be defined since it might be called from plugins.
			 * @prop Chart#chart
			 * @deprecated since version 2.6.0
			 * @todo remove at version 3
			 * @private
			 */
			me.chart = me;
			me.controller = me; // chart.chart.controller #inception

			// Add the chart instance to the global namespace
			Chart.instances[me.id] = me;

			// Define alias to the config data: `chart.data === chart.config.data`
			Object.defineProperty(me, 'data', {
				get: function() {
					return me.config.data;
				},
				set: function(value) {
					me.config.data = value;
				}
			});

			if (!context || !canvas) {
				// The given item is not a compatible context2d element, let's return before finalizing
				// the chart initialization but after setting basic chart / controller properties that
				// can help to figure out that the chart is not valid (e.g chart.canvas !== null);
				// https://github.com/chartjs/Chart.js/issues/2807
				console.error("Failed to create chart: can't acquire context from the given item");
				return;
			}

			me.initialize();
			me.update();
		},

		/**
		 * @private
		 */
		initialize: function() {
			var me = this;

			// Before init plugin notification
			plugins.notify(me, 'beforeInit');

			helpers.retinaScale(me, me.options.devicePixelRatio);

			me.bindEvents();

			if (me.options.responsive) {
				// Initial resize before chart draws (must be silent to preserve initial animations).
				me.resize(true);
			}

			// Make sure scales have IDs and are built before we build any controllers.
			me.ensureScalesHaveIDs();
			me.buildScales();
			me.initToolTip();

			// After init plugin notification
			plugins.notify(me, 'afterInit');

			return me;
		},

		clear: function() {
			helpers.canvas.clear(this);
			return this;
		},

		stop: function() {
			// Stops any current animation loop occurring
			Chart.animationService.cancelAnimation(this);
			return this;
		},

		resize: function(silent) {
			var me = this;
			var options = me.options;
			var canvas = me.canvas;
			var aspectRatio = (options.maintainAspectRatio && me.aspectRatio) || null;

			// the canvas render width and height will be casted to integers so make sure that
			// the canvas display style uses the same integer values to avoid blurring effect.

			// Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collased
			var newWidth = Math.max(0, Math.floor(helpers.getMaximumWidth(canvas)));
			var newHeight = Math.max(0, Math.floor(aspectRatio ? newWidth / aspectRatio : helpers.getMaximumHeight(canvas)));

			if (me.width === newWidth && me.height === newHeight) {
				return;
			}

			canvas.width = me.width = newWidth;
			canvas.height = me.height = newHeight;
			canvas.style.width = newWidth + 'px';
			canvas.style.height = newHeight + 'px';

			helpers.retinaScale(me, options.devicePixelRatio);

			if (!silent) {
				// Notify any plugins about the resize
				var newSize = {width: newWidth, height: newHeight};
				plugins.notify(me, 'resize', [newSize]);

				// Notify of resize
				if (me.options.onResize) {
					me.options.onResize(me, newSize);
				}

				me.stop();
				me.update(me.options.responsiveAnimationDuration);
			}
		},

		ensureScalesHaveIDs: function() {
			var options = this.options;
			var scalesOptions = options.scales || {};
			var scaleOptions = options.scale;

			helpers.each(scalesOptions.xAxes, function(xAxisOptions, index) {
				xAxisOptions.id = xAxisOptions.id || ('x-axis-' + index);
			});

			helpers.each(scalesOptions.yAxes, function(yAxisOptions, index) {
				yAxisOptions.id = yAxisOptions.id || ('y-axis-' + index);
			});

			if (scaleOptions) {
				scaleOptions.id = scaleOptions.id || 'scale';
			}
		},

		/**
		 * Builds a map of scale ID to scale object for future lookup.
		 */
		buildScales: function() {
			var me = this;
			var options = me.options;
			var scales = me.scales = {};
			var items = [];

			if (options.scales) {
				items = items.concat(
					(options.scales.xAxes || []).map(function(xAxisOptions) {
						return {options: xAxisOptions, dtype: 'category', dposition: 'bottom'};
					}),
					(options.scales.yAxes || []).map(function(yAxisOptions) {
						return {options: yAxisOptions, dtype: 'linear', dposition: 'left'};
					})
				);
			}

			if (options.scale) {
				items.push({
					options: options.scale,
					dtype: 'radialLinear',
					isDefault: true,
					dposition: 'chartArea'
				});
			}

			helpers.each(items, function(item) {
				var scaleOptions = item.options;
				var scaleType = helpers.valueOrDefault(scaleOptions.type, item.dtype);
				var scaleClass = Chart.scaleService.getScaleConstructor(scaleType);
				if (!scaleClass) {
					return;
				}

				if (positionIsHorizontal(scaleOptions.position) !== positionIsHorizontal(item.dposition)) {
					scaleOptions.position = item.dposition;
				}

				var scale = new scaleClass({
					id: scaleOptions.id,
					options: scaleOptions,
					ctx: me.ctx,
					chart: me
				});

				scales[scale.id] = scale;
				scale.mergeTicksOptions();

				// TODO(SB): I think we should be able to remove this custom case (options.scale)
				// and consider it as a regular scale part of the "scales"" map only! This would
				// make the logic easier and remove some useless? custom code.
				if (item.isDefault) {
					me.scale = scale;
				}
			});

			Chart.scaleService.addScalesToLayout(this);
		},

		buildOrUpdateControllers: function() {
			var me = this;
			var types = [];
			var newControllers = [];

			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				var meta = me.getDatasetMeta(datasetIndex);
				var type = dataset.type || me.config.type;

				if (meta.type && meta.type !== type) {
					me.destroyDatasetMeta(datasetIndex);
					meta = me.getDatasetMeta(datasetIndex);
				}
				meta.type = type;

				types.push(meta.type);

				if (meta.controller) {
					meta.controller.updateIndex(datasetIndex);
				} else {
					var ControllerClass = Chart.controllers[meta.type];
					if (ControllerClass === undefined) {
						throw new Error('"' + meta.type + '" is not a chart type.');
					}

					meta.controller = new ControllerClass(me, datasetIndex);
					newControllers.push(meta.controller);
				}
			}, me);

			return newControllers;
		},

		/**
		 * Reset the elements of all datasets
		 * @private
		 */
		resetElements: function() {
			var me = this;
			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				me.getDatasetMeta(datasetIndex).controller.reset();
			}, me);
		},

		/**
		* Resets the chart back to it's state before the initial animation
		*/
		reset: function() {
			this.resetElements();
			this.tooltip.initialize();
		},

		update: function(config) {
			var me = this;

			if (!config || typeof config !== 'object') {
				// backwards compatibility
				config = {
					duration: config,
					lazy: arguments[1]
				};
			}

			updateConfig(me);

			if (plugins.notify(me, 'beforeUpdate') === false) {
				return;
			}

			// In case the entire data object changed
			me.tooltip._data = me.data;

			// Make sure dataset controllers are updated and new controllers are reset
			var newControllers = me.buildOrUpdateControllers();

			// Make sure all dataset controllers have correct meta data counts
			helpers.each(me.data.datasets, function(dataset, datasetIndex) {
				me.getDatasetMeta(datasetIndex).controller.buildOrUpdateElements();
			}, me);

			me.updateLayout();

			// Can only reset the new controllers after the scales have been updated
			helpers.each(newControllers, function(controller) {
				controller.reset();
			});

			me.updateDatasets();

			// Need to reset tooltip in case it is displayed with elements that are removed
			// after update.
			me.tooltip.initialize();

			// Last active contains items that were previously in the tooltip.
			// When we reset the tooltip, we need to clear it
			me.lastActive = [];

			// Do this before render so that any plugins that need final scale updates can use it
			plugins.notify(me, 'afterUpdate');

			if (me._bufferedRender) {
				me._bufferedRequest = {
					duration: config.duration,
					easing: config.easing,
					lazy: config.lazy
				};
			} else {
				me.render(config);
			}
		},

		/**
		 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
		 * hook, in which case, plugins will not be called on `afterLayout`.
		 * @private
		 */
		updateLayout: function() {
			var me = this;

			if (plugins.notify(me, 'beforeLayout') === false) {
				return;
			}

			Chart.layoutService.update(this, this.width, this.height);

			/**
			 * Provided for backward compatibility, use `afterLayout` instead.
			 * @method IPlugin#afterScaleUpdate
			 * @deprecated since version 2.5.0
			 * @todo remove at version 3
			 * @private
			 */
			plugins.notify(me, 'afterScaleUpdate');
			plugins.notify(me, 'afterLayout');
		},

		/**
		 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
		 * @private
		 */
		updateDatasets: function() {
			var me = this;

			if (plugins.notify(me, 'beforeDatasetsUpdate') === false) {
				return;
			}

			for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
				me.updateDataset(i);
			}

			plugins.notify(me, 'afterDatasetsUpdate');
		},

		/**
		 * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
		 * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
		 * @private
		 */
		updateDataset: function(index) {
			var me = this;
			var meta = me.getDatasetMeta(index);
			var args = {
				meta: meta,
				index: index
			};

			if (plugins.notify(me, 'beforeDatasetUpdate', [args]) === false) {
				return;
			}

			meta.controller.update();

			plugins.notify(me, 'afterDatasetUpdate', [args]);
		},

		render: function(config) {
			var me = this;

			if (!config || typeof config !== 'object') {
				// backwards compatibility
				config = {
					duration: config,
					lazy: arguments[1]
				};
			}

			var duration = config.duration;
			var lazy = config.lazy;

			if (plugins.notify(me, 'beforeRender') === false) {
				return;
			}

			var animationOptions = me.options.animation;
			var onComplete = function(animation) {
				plugins.notify(me, 'afterRender');
				helpers.callback(animationOptions && animationOptions.onComplete, [animation], me);
			};

			if (animationOptions && ((typeof duration !== 'undefined' && duration !== 0) || (typeof duration === 'undefined' && animationOptions.duration !== 0))) {
				var animation = new Chart.Animation({
					numSteps: (duration || animationOptions.duration) / 16.66, // 60 fps
					easing: config.easing || animationOptions.easing,

					render: function(chart, animationObject) {
						var easingFunction = helpers.easing.effects[animationObject.easing];
						var currentStep = animationObject.currentStep;
						var stepDecimal = currentStep / animationObject.numSteps;

						chart.draw(easingFunction(stepDecimal), stepDecimal, currentStep);
					},

					onAnimationProgress: animationOptions.onProgress,
					onAnimationComplete: onComplete
				});

				Chart.animationService.addAnimation(me, animation, duration, lazy);
			} else {
				me.draw();

				// See https://github.com/chartjs/Chart.js/issues/3781
				onComplete(new Chart.Animation({numSteps: 0, chart: me}));
			}

			return me;
		},

		draw: function(easingValue) {
			var me = this;

			me.clear();

			if (helpers.isNullOrUndef(easingValue)) {
				easingValue = 1;
			}

			me.transition(easingValue);

			if (plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
				return;
			}

			// Draw all the scales
			helpers.each(me.boxes, function(box) {
				box.draw(me.chartArea);
			}, me);

			if (me.scale) {
				me.scale.draw();
			}

			me.drawDatasets(easingValue);
			me._drawTooltip(easingValue);

			plugins.notify(me, 'afterDraw', [easingValue]);
		},

		/**
		 * @private
		 */
		transition: function(easingValue) {
			var me = this;

			for (var i = 0, ilen = (me.data.datasets || []).length; i < ilen; ++i) {
				if (me.isDatasetVisible(i)) {
					me.getDatasetMeta(i).controller.transition(easingValue);
				}
			}

			me.tooltip.transition(easingValue);
		},

		/**
		 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
		 * @private
		 */
		drawDatasets: function(easingValue) {
			var me = this;

			if (plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {
				return;
			}

			// Draw datasets reversed to support proper line stacking
			for (var i = (me.data.datasets || []).length - 1; i >= 0; --i) {
				if (me.isDatasetVisible(i)) {
					me.drawDataset(i, easingValue);
				}
			}

			plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
		},

		/**
		 * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
		 * hook, in which case, plugins will not be called on `afterDatasetDraw`.
		 * @private
		 */
		drawDataset: function(index, easingValue) {
			var me = this;
			var meta = me.getDatasetMeta(index);
			var args = {
				meta: meta,
				index: index,
				easingValue: easingValue
			};

			if (plugins.notify(me, 'beforeDatasetDraw', [args]) === false) {
				return;
			}

			meta.controller.draw(easingValue);

			plugins.notify(me, 'afterDatasetDraw', [args]);
		},

		/**
		 * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
		 * hook, in which case, plugins will not be called on `afterTooltipDraw`.
		 * @private
		 */
		_drawTooltip: function(easingValue) {
			var me = this;
			var tooltip = me.tooltip;
			var args = {
				tooltip: tooltip,
				easingValue: easingValue
			};

			if (plugins.notify(me, 'beforeTooltipDraw', [args]) === false) {
				return;
			}

			tooltip.draw();

			plugins.notify(me, 'afterTooltipDraw', [args]);
		},

		// Get the single element that was clicked on
		// @return : An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
		getElementAtEvent: function(e) {
			return Interaction.modes.single(this, e);
		},

		getElementsAtEvent: function(e) {
			return Interaction.modes.label(this, e, {intersect: true});
		},

		getElementsAtXAxis: function(e) {
			return Interaction.modes['x-axis'](this, e, {intersect: true});
		},

		getElementsAtEventForMode: function(e, mode, options) {
			var method = Interaction.modes[mode];
			if (typeof method === 'function') {
				return method(this, e, options);
			}

			return [];
		},

		getDatasetAtEvent: function(e) {
			return Interaction.modes.dataset(this, e, {intersect: true});
		},

		getDatasetMeta: function(datasetIndex) {
			var me = this;
			var dataset = me.data.datasets[datasetIndex];
			if (!dataset._meta) {
				dataset._meta = {};
			}

			var meta = dataset._meta[me.id];
			if (!meta) {
				meta = dataset._meta[me.id] = {
					type: null,
					data: [],
					dataset: null,
					controller: null,
					hidden: null,			// See isDatasetVisible() comment
					xAxisID: null,
					yAxisID: null
				};
			}

			return meta;
		},

		getVisibleDatasetCount: function() {
			var count = 0;
			for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
				if (this.isDatasetVisible(i)) {
					count++;
				}
			}
			return count;
		},

		isDatasetVisible: function(datasetIndex) {
			var meta = this.getDatasetMeta(datasetIndex);

			// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
			// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
			return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
		},

		generateLegend: function() {
			return this.options.legendCallback(this);
		},

		/**
		 * @private
		 */
		destroyDatasetMeta: function(datasetIndex) {
			var id = this.id;
			var dataset = this.data.datasets[datasetIndex];
			var meta = dataset._meta && dataset._meta[id];

			if (meta) {
				meta.controller.destroy();
				delete dataset._meta[id];
			}
		},

		destroy: function() {
			var me = this;
			var canvas = me.canvas;
			var i, ilen;

			me.stop();

			// dataset controllers need to cleanup associated data
			for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
				me.destroyDatasetMeta(i);
			}

			if (canvas) {
				me.unbindEvents();
				helpers.canvas.clear(me);
				platform.releaseContext(me.ctx);
				me.canvas = null;
				me.ctx = null;
			}

			plugins.notify(me, 'destroy');

			delete Chart.instances[me.id];
		},

		toBase64Image: function() {
			return this.canvas.toDataURL.apply(this.canvas, arguments);
		},

		initToolTip: function() {
			var me = this;
			me.tooltip = new Chart.Tooltip({
				_chart: me,
				_chartInstance: me, // deprecated, backward compatibility
				_data: me.data,
				_options: me.options.tooltips
			}, me);
		},

		/**
		 * @private
		 */
		bindEvents: function() {
			var me = this;
			var listeners = me._listeners = {};
			var listener = function() {
				me.eventHandler.apply(me, arguments);
			};

			helpers.each(me.options.events, function(type) {
				platform.addEventListener(me, type, listener);
				listeners[type] = listener;
			});

			// Elements used to detect size change should not be injected for non responsive charts.
			// See https://github.com/chartjs/Chart.js/issues/2210
			if (me.options.responsive) {
				listener = function() {
					me.resize();
				};

				platform.addEventListener(me, 'resize', listener);
				listeners.resize = listener;
			}
		},

		/**
		 * @private
		 */
		unbindEvents: function() {
			var me = this;
			var listeners = me._listeners;
			if (!listeners) {
				return;
			}

			delete me._listeners;
			helpers.each(listeners, function(listener, type) {
				platform.removeEventListener(me, type, listener);
			});
		},

		updateHoverStyle: function(elements, mode, enabled) {
			var method = enabled ? 'setHoverStyle' : 'removeHoverStyle';
			var element, i, ilen;

			for (i = 0, ilen = elements.length; i < ilen; ++i) {
				element = elements[i];
				if (element) {
					this.getDatasetMeta(element._datasetIndex).controller[method](element);
				}
			}
		},

		/**
		 * @private
		 */
		eventHandler: function(e) {
			var me = this;
			var tooltip = me.tooltip;

			if (plugins.notify(me, 'beforeEvent', [e]) === false) {
				return;
			}

			// Buffer any update calls so that renders do not occur
			me._bufferedRender = true;
			me._bufferedRequest = null;

			var changed = me.handleEvent(e);
			changed |= tooltip && tooltip.handleEvent(e);

			plugins.notify(me, 'afterEvent', [e]);

			var bufferedRequest = me._bufferedRequest;
			if (bufferedRequest) {
				// If we have an update that was triggered, we need to do a normal render
				me.render(bufferedRequest);
			} else if (changed && !me.animating) {
				// If entering, leaving, or changing elements, animate the change via pivot
				me.stop();

				// We only need to render at this point. Updating will cause scales to be
				// recomputed generating flicker & using more memory than necessary.
				me.render(me.options.hover.animationDuration, true);
			}

			me._bufferedRender = false;
			me._bufferedRequest = null;

			return me;
		},

		/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event the event to handle
		 * @return {Boolean} true if the chart needs to re-render
		 */
		handleEvent: function(e) {
			var me = this;
			var options = me.options || {};
			var hoverOptions = options.hover;
			var changed = false;

			me.lastActive = me.lastActive || [];

			// Find Active Elements for hover and tooltips
			if (e.type === 'mouseout') {
				me.active = [];
			} else {
				me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
			}

			// Invoke onHover hook
			// Need to call with native event here to not break backwards compatibility
			helpers.callback(options.onHover || options.hover.onHover, [e.native, me.active], me);

			if (e.type === 'mouseup' || e.type === 'click') {
				if (options.onClick) {
					// Use e.native here for backwards compatibility
					options.onClick.call(me, e.native, me.active);
				}
			}

			// Remove styling for last active (even if it may still be active)
			if (me.lastActive.length) {
				me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
			}

			// Built in hover styling
			if (me.active.length && hoverOptions.mode) {
				me.updateHoverStyle(me.active, hoverOptions.mode, true);
			}

			changed = !helpers.arrayEquals(me.active, me.lastActive);

			// Remember Last Actives
			me.lastActive = me.active;

			return changed;
		}
	});

	/**
	 * Provided for backward compatibility, use Chart instead.
	 * @class Chart.Controller
	 * @deprecated since version 2.6.0
	 * @todo remove at version 3
	 * @private
	 */
	Chart.Controller = Chart;
};

},{"25":25,"28":28,"45":45,"48":48}],24:[function(require,module,exports){
'use strict';

var helpers = require(45);

module.exports = function(Chart) {

	var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];

	/**
	 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
	 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
	 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
	 */
	function listenArrayEvents(array, listener) {
		if (array._chartjs) {
			array._chartjs.listeners.push(listener);
			return;
		}

		Object.defineProperty(array, '_chartjs', {
			configurable: true,
			enumerable: false,
			value: {
				listeners: [listener]
			}
		});

		arrayEvents.forEach(function(key) {
			var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
			var base = array[key];

			Object.defineProperty(array, key, {
				configurable: true,
				enumerable: false,
				value: function() {
					var args = Array.prototype.slice.call(arguments);
					var res = base.apply(this, args);

					helpers.each(array._chartjs.listeners, function(object) {
						if (typeof object[method] === 'function') {
							object[method].apply(object, args);
						}
					});

					return res;
				}
			});
		});
	}

	/**
	 * Removes the given array event listener and cleanup extra attached properties (such as
	 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
	 */
	function unlistenArrayEvents(array, listener) {
		var stub = array._chartjs;
		if (!stub) {
			return;
		}

		var listeners = stub.listeners;
		var index = listeners.indexOf(listener);
		if (index !== -1) {
			listeners.splice(index, 1);
		}

		if (listeners.length > 0) {
			return;
		}

		arrayEvents.forEach(function(key) {
			delete array[key];
		});

		delete array._chartjs;
	}

	// Base class for all dataset controllers (line, bar, etc)
	Chart.DatasetController = function(chart, datasetIndex) {
		this.initialize(chart, datasetIndex);
	};

	helpers.extend(Chart.DatasetController.prototype, {

		/**
		 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
		 * @type {Chart.core.element}
		 */
		datasetElementType: null,

		/**
		 * Element type used to generate a meta data (e.g. Chart.element.Point).
		 * @type {Chart.core.element}
		 */
		dataElementType: null,

		initialize: function(chart, datasetIndex) {
			var me = this;
			me.chart = chart;
			me.index = datasetIndex;
			me.linkScales();
			me.addElements();
		},

		updateIndex: function(datasetIndex) {
			this.index = datasetIndex;
		},

		linkScales: function() {
			var me = this;
			var meta = me.getMeta();
			var dataset = me.getDataset();

			if (meta.xAxisID === null) {
				meta.xAxisID = dataset.xAxisID || me.chart.options.scales.xAxes[0].id;
			}
			if (meta.yAxisID === null) {
				meta.yAxisID = dataset.yAxisID || me.chart.options.scales.yAxes[0].id;
			}
		},

		getDataset: function() {
			return this.chart.data.datasets[this.index];
		},

		getMeta: function() {
			return this.chart.getDatasetMeta(this.index);
		},

		getScaleForId: function(scaleID) {
			return this.chart.scales[scaleID];
		},

		reset: function() {
			this.update(true);
		},

		/**
		 * @private
		 */
		destroy: function() {
			if (this._data) {
				unlistenArrayEvents(this._data, this);
			}
		},

		createMetaDataset: function() {
			var me = this;
			var type = me.datasetElementType;
			return type && new type({
				_chart: me.chart,
				_datasetIndex: me.index
			});
		},

		createMetaData: function(index) {
			var me = this;
			var type = me.dataElementType;
			return type && new type({
				_chart: me.chart,
				_datasetIndex: me.index,
				_index: index
			});
		},

		addElements: function() {
			var me = this;
			var meta = me.getMeta();
			var data = me.getDataset().data || [];
			var metaData = meta.data;
			var i, ilen;

			for (i = 0, ilen = data.length; i < ilen; ++i) {
				metaData[i] = metaData[i] || me.createMetaData(i);
			}

			meta.dataset = meta.dataset || me.createMetaDataset();
		},

		addElementAndReset: function(index) {
			var element = this.createMetaData(index);
			this.getMeta().data.splice(index, 0, element);
			this.updateElement(element, index, true);
		},

		buildOrUpdateElements: function() {
			var me = this;
			var dataset = me.getDataset();
			var data = dataset.data || (dataset.data = []);

			// In order to correctly handle data addition/deletion animation (an thus simulate
			// real-time charts), we need to monitor these data modifications and synchronize
			// the internal meta data accordingly.
			if (me._data !== data) {
				if (me._data) {
					// This case happens when the user replaced the data array instance.
					unlistenArrayEvents(me._data, me);
				}

				listenArrayEvents(data, me);
				me._data = data;
			}

			// Re-sync meta data in case the user replaced the data array or if we missed
			// any updates and so make sure that we handle number of datapoints changing.
			me.resyncElements();
		},

		update: helpers.noop,

		transition: function(easingValue) {
			var meta = this.getMeta();
			var elements = meta.data || [];
			var ilen = elements.length;
			var i = 0;

			for (; i < ilen; ++i) {
				elements[i].transition(easingValue);
			}

			if (meta.dataset) {
				meta.dataset.transition(easingValue);
			}
		},

		draw: function() {
			var meta = this.getMeta();
			var elements = meta.data || [];
			var ilen = elements.length;
			var i = 0;

			if (meta.dataset) {
				meta.dataset.draw();
			}

			for (; i < ilen; ++i) {
				elements[i].draw();
			}
		},

		removeHoverStyle: function(element, elementOpts) {
			var dataset = this.chart.data.datasets[element._datasetIndex];
			var index = element._index;
			var custom = element.custom || {};
			var valueOrDefault = helpers.valueAtIndexOrDefault;
			var model = element._model;

			model.backgroundColor = custom.backgroundColor ? custom.backgroundColor : valueOrDefault(dataset.backgroundColor, index, elementOpts.backgroundColor);
			model.borderColor = custom.borderColor ? custom.borderColor : valueOrDefault(dataset.borderColor, index, elementOpts.borderColor);
			model.borderWidth = custom.borderWidth ? custom.borderWidth : valueOrDefault(dataset.borderWidth, index, elementOpts.borderWidth);
		},

		setHoverStyle: function(element) {
			var dataset = this.chart.data.datasets[element._datasetIndex];
			var index = element._index;
			var custom = element.custom || {};
			var valueOrDefault = helpers.valueAtIndexOrDefault;
			var getHoverColor = helpers.getHoverColor;
			var model = element._model;

			model.backgroundColor = custom.hoverBackgroundColor ? custom.hoverBackgroundColor : valueOrDefault(dataset.hoverBackgroundColor, index, getHoverColor(model.backgroundColor));
			model.borderColor = custom.hoverBorderColor ? custom.hoverBorderColor : valueOrDefault(dataset.hoverBorderColor, index, getHoverColor(model.borderColor));
			model.borderWidth = custom.hoverBorderWidth ? custom.hoverBorderWidth : valueOrDefault(dataset.hoverBorderWidth, index, model.borderWidth);
		},

		/**
		 * @private
		 */
		resyncElements: function() {
			var me = this;
			var meta = me.getMeta();
			var data = me.getDataset().data;
			var numMeta = meta.data.length;
			var numData = data.length;

			if (numData < numMeta) {
				meta.data.splice(numData, numMeta - numData);
			} else if (numData > numMeta) {
				me.insertElements(numMeta, numData - numMeta);
			}
		},

		/**
		 * @private
		 */
		insertElements: function(start, count) {
			for (var i = 0; i < count; ++i) {
				this.addElementAndReset(start + i);
			}
		},

		/**
		 * @private
		 */
		onDataPush: function() {
			this.insertElements(this.getDataset().data.length - 1, arguments.length);
		},

		/**
		 * @private
		 */
		onDataPop: function() {
			this.getMeta().data.pop();
		},

		/**
		 * @private
		 */
		onDataShift: function() {
			this.getMeta().data.shift();
		},

		/**
		 * @private
		 */
		onDataSplice: function(start, count) {
			this.getMeta().data.splice(start, count);
			this.insertElements(start, arguments.length - 2);
		},

		/**
		 * @private
		 */
		onDataUnshift: function() {
			this.insertElements(0, arguments.length);
		}
	});

	Chart.DatasetController.extend = helpers.inherits;
};

},{"45":45}],25:[function(require,module,exports){
'use strict';

var helpers = require(45);

module.exports = {
	/**
	 * @private
	 */
	_set: function(scope, values) {
		return helpers.merge(this[scope] || (this[scope] = {}), values);
	}
};

},{"45":45}],26:[function(require,module,exports){
'use strict';

var color = require(2);
var helpers = require(45);

function interpolate(start, view, model, ease) {
	var keys = Object.keys(model);
	var i, ilen, key, actual, origin, target, type, c0, c1;

	for (i = 0, ilen = keys.length; i < ilen; ++i) {
		key = keys[i];

		target = model[key];

		// if a value is added to the model after pivot() has been called, the view
		// doesn't contain it, so let's initialize the view to the target value.
		if (!view.hasOwnProperty(key)) {
			view[key] = target;
		}

		actual = view[key];

		if (actual === target || key[0] === '_') {
			continue;
		}

		if (!start.hasOwnProperty(key)) {
			start[key] = actual;
		}

		origin = start[key];

		type = typeof target;

		if (type === typeof origin) {
			if (type === 'string') {
				c0 = color(origin);
				if (c0.valid) {
					c1 = color(target);
					if (c1.valid) {
						view[key] = c1.mix(c0, ease).rgbString();
						continue;
					}
				}
			} else if (type === 'number' && isFinite(origin) && isFinite(target)) {
				view[key] = origin + (target - origin) * ease;
				continue;
			}
		}

		view[key] = target;
	}
}

var Element = function(configuration) {
	helpers.extend(this, configuration);
	this.initialize.apply(this, arguments);
};

helpers.extend(Element.prototype, {

	initialize: function() {
		this.hidden = false;
	},

	pivot: function() {
		var me = this;
		if (!me._view) {
			me._view = helpers.clone(me._model);
		}
		me._start = {};
		return me;
	},

	transition: function(ease) {
		var me = this;
		var model = me._model;
		var start = me._start;
		var view = me._view;

		// No animation -> No Transition
		if (!model || ease === 1) {
			me._view = model;
			me._start = null;
			return me;
		}

		if (!view) {
			view = me._view = {};
		}

		if (!start) {
			start = me._start = {};
		}

		interpolate(start, view, model, ease);

		return me;
	},

	tooltipPosition: function() {
		return {
			x: this._model.x,
			y: this._model.y
		};
	},

	hasValue: function() {
		return helpers.isNumber(this._model.x) && helpers.isNumber(this._model.y);
	}
});

Element.extend = helpers.inherits;

module.exports = Element;

},{"2":2,"45":45}],27:[function(require,module,exports){
/* global window: false */
/* global document: false */
'use strict';

var color = require(2);
var defaults = require(25);
var helpers = require(45);

module.exports = function(Chart) {

	// -- Basic js utility methods

	helpers.configMerge = function(/* objects ... */) {
		return helpers.merge(helpers.clone(arguments[0]), [].slice.call(arguments, 1), {
			merger: function(key, target, source, options) {
				var tval = target[key] || {};
				var sval = source[key];

				if (key === 'scales') {
					// scale config merging is complex. Add our own function here for that
					target[key] = helpers.scaleMerge(tval, sval);
				} else if (key === 'scale') {
					// used in polar area & radar charts since there is only one scale
					target[key] = helpers.merge(tval, [Chart.scaleService.getScaleDefaults(sval.type), sval]);
				} else {
					helpers._merger(key, target, source, options);
				}
			}
		});
	};

	helpers.scaleMerge = function(/* objects ... */) {
		return helpers.merge(helpers.clone(arguments[0]), [].slice.call(arguments, 1), {
			merger: function(key, target, source, options) {
				if (key === 'xAxes' || key === 'yAxes') {
					var slen = source[key].length;
					var i, type, scale;

					if (!target[key]) {
						target[key] = [];
					}

					for (i = 0; i < slen; ++i) {
						scale = source[key][i];
						type = helpers.valueOrDefault(scale.type, key === 'xAxes' ? 'category' : 'linear');

						if (i >= target[key].length) {
							target[key].push({});
						}

						if (!target[key][i].type || (scale.type && scale.type !== target[key][i].type)) {
							// new/untyped scale or type changed: let's apply the new defaults
							// then merge source scale to correctly overwrite the defaults.
							helpers.merge(target[key][i], [Chart.scaleService.getScaleDefaults(type), scale]);
						} else {
							// scales type are the same
							helpers.merge(target[key][i], scale);
						}
					}
				} else {
					helpers._merger(key, target, source, options);
				}
			}
		});
	};

	helpers.where = function(collection, filterCallback) {
		if (helpers.isArray(collection) && Array.prototype.filter) {
			return collection.filter(filterCallback);
		}
		var filtered = [];

		helpers.each(collection, function(item) {
			if (filterCallback(item)) {
				filtered.push(item);
			}
		});

		return filtered;
	};
	helpers.findIndex = Array.prototype.findIndex ?
		function(array, callback, scope) {
			return array.findIndex(callback, scope);
		} :
		function(array, callback, scope) {
			scope = scope === undefined ? array : scope;
			for (var i = 0, ilen = array.length; i < ilen; ++i) {
				if (callback.call(scope, array[i], i, array)) {
					return i;
				}
			}
			return -1;
		};
	helpers.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to start of the array
		if (helpers.isNullOrUndef(startIndex)) {
			startIndex = -1;
		}
		for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};
	helpers.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
		// Default to end of the array
		if (helpers.isNullOrUndef(startIndex)) {
			startIndex = arrayToSearch.length;
		}
		for (var i = startIndex - 1; i >= 0; i--) {
			var currentItem = arrayToSearch[i];
			if (filterCallback(currentItem)) {
				return currentItem;
			}
		}
	};

	// -- Math methods
	helpers.isNumber = function(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};
	helpers.almostEquals = function(x, y, epsilon) {
		return Math.abs(x - y) < epsilon;
	};
	helpers.almostWhole = function(x, epsilon) {
		var rounded = Math.round(x);
		return (((rounded - epsilon) < x) && ((rounded + epsilon) > x));
	};
	helpers.max = function(array) {
		return array.reduce(function(max, value) {
			if (!isNaN(value)) {
				return Math.max(max, value);
			}
			return max;
		}, Number.NEGATIVE_INFINITY);
	};
	helpers.min = function(array) {
		return array.reduce(function(min, value) {
			if (!isNaN(value)) {
				return Math.min(min, value);
			}
			return min;
		}, Number.POSITIVE_INFINITY);
	};
	helpers.sign = Math.sign ?
		function(x) {
			return Math.sign(x);
		} :
		function(x) {
			x = +x; // convert to a number
			if (x === 0 || isNaN(x)) {
				return x;
			}
			return x > 0 ? 1 : -1;
		};
	helpers.log10 = Math.log10 ?
		function(x) {
			return Math.log10(x);
		} :
		function(x) {
			return Math.log(x) / Math.LN10;
		};
	helpers.toRadians = function(degrees) {
		return degrees * (Math.PI / 180);
	};
	helpers.toDegrees = function(radians) {
		return radians * (180 / Math.PI);
	};
	// Gets the angle from vertical upright to the point about a centre.
	helpers.getAngleFromPoint = function(centrePoint, anglePoint) {
		var distanceFromXCenter = anglePoint.x - centrePoint.x;
		var distanceFromYCenter = anglePoint.y - centrePoint.y;
		var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);

		var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

		if (angle < (-0.5 * Math.PI)) {
			angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
		}

		return {
			angle: angle,
			distance: radialDistanceFromCenter
		};
	};
	helpers.distanceBetweenPoints = function(pt1, pt2) {
		return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
	};
	helpers.aliasPixel = function(pixelWidth) {
		return (pixelWidth % 2 === 0) ? 0 : 0.5;
	};
	helpers.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
		// Props to Rob Spencer at scaled innovation for his post on splining between points
		// http://scaledinnovation.com/analytics/splines/aboutSplines.html

		// This function must also respect "skipped" points

		var previous = firstPoint.skip ? middlePoint : firstPoint;
		var current = middlePoint;
		var next = afterPoint.skip ? middlePoint : afterPoint;

		var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
		var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));

		var s01 = d01 / (d01 + d12);
		var s12 = d12 / (d01 + d12);

		// If all points are the same, s01 & s02 will be inf
		s01 = isNaN(s01) ? 0 : s01;
		s12 = isNaN(s12) ? 0 : s12;

		var fa = t * s01; // scaling factor for triangle Ta
		var fb = t * s12;

		return {
			previous: {
				x: current.x - fa * (next.x - previous.x),
				y: current.y - fa * (next.y - previous.y)
			},
			next: {
				x: current.x + fb * (next.x - previous.x),
				y: current.y + fb * (next.y - previous.y)
			}
		};
	};
	helpers.EPSILON = Number.EPSILON || 1e-14;
	helpers.splineCurveMonotone = function(points) {
		// This function calculates Bézier control points in a similar way than |splineCurve|,
		// but preserves monotonicity of the provided data and ensures no local extremums are added
		// between the dataset discrete points due to the interpolation.
		// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation

		var pointsWithTangents = (points || []).map(function(point) {
			return {
				model: point._model,
				deltaK: 0,
				mK: 0
			};
		});

		// Calculate slopes (deltaK) and initialize tangents (mK)
		var pointsLen = pointsWithTangents.length;
		var i, pointBefore, pointCurrent, pointAfter;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointAfter && !pointAfter.model.skip) {
				var slopeDeltaX = (pointAfter.model.x - pointCurrent.model.x);

				// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
				pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
			}

			if (!pointBefore || pointBefore.model.skip) {
				pointCurrent.mK = pointCurrent.deltaK;
			} else if (!pointAfter || pointAfter.model.skip) {
				pointCurrent.mK = pointBefore.deltaK;
			} else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
				pointCurrent.mK = 0;
			} else {
				pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
			}
		}

		// Adjust tangents to ensure monotonic properties
		var alphaK, betaK, tauK, squaredMagnitude;
		for (i = 0; i < pointsLen - 1; ++i) {
			pointCurrent = pointsWithTangents[i];
			pointAfter = pointsWithTangents[i + 1];
			if (pointCurrent.model.skip || pointAfter.model.skip) {
				continue;
			}

			if (helpers.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
				pointCurrent.mK = pointAfter.mK = 0;
				continue;
			}

			alphaK = pointCurrent.mK / pointCurrent.deltaK;
			betaK = pointAfter.mK / pointCurrent.deltaK;
			squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
			if (squaredMagnitude <= 9) {
				continue;
			}

			tauK = 3 / Math.sqrt(squaredMagnitude);
			pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
			pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
		}

		// Compute control points
		var deltaX;
		for (i = 0; i < pointsLen; ++i) {
			pointCurrent = pointsWithTangents[i];
			if (pointCurrent.model.skip) {
				continue;
			}

			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
			if (pointBefore && !pointBefore.model.skip) {
				deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
				pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
				pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
			}
			if (pointAfter && !pointAfter.model.skip) {
				deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
				pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
				pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;
			}
		}
	};
	helpers.nextItem = function(collection, index, loop) {
		if (loop) {
			return index >= collection.length - 1 ? collection[0] : collection[index + 1];
		}
		return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
	};
	helpers.previousItem = function(collection, index, loop) {
		if (loop) {
			return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
		}
		return index <= 0 ? collection[0] : collection[index - 1];
	};
	// Implementation of the nice number algorithm used in determining where axis labels will go
	helpers.niceNum = function(range, round) {
		var exponent = Math.floor(helpers.log10(range));
		var fraction = range / Math.pow(10, exponent);
		var niceFraction;

		if (round) {
			if (fraction < 1.5) {
				niceFraction = 1;
			} else if (fraction < 3) {
				niceFraction = 2;
			} else if (fraction < 7) {
				niceFraction = 5;
			} else {
				niceFraction = 10;
			}
		} else if (fraction <= 1.0) {
			niceFraction = 1;
		} else if (fraction <= 2) {
			niceFraction = 2;
		} else if (fraction <= 5) {
			niceFraction = 5;
		} else {
			niceFraction = 10;
		}

		return niceFraction * Math.pow(10, exponent);
	};
	// Request animation polyfill - http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
	helpers.requestAnimFrame = (function() {
		if (typeof window === 'undefined') {
			return function(callback) {
				callback();
			};
		}
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	}());
	// -- DOM methods
	helpers.getRelativePosition = function(evt, chart) {
		var mouseX, mouseY;
		var e = evt.originalEvent || evt;
		var canvas = evt.currentTarget || evt.srcElement;
		var boundingRect = canvas.getBoundingClientRect();

		var touches = e.touches;
		if (touches && touches.length > 0) {
			mouseX = touches[0].clientX;
			mouseY = touches[0].clientY;

		} else {
			mouseX = e.clientX;
			mouseY = e.clientY;
		}

		// Scale mouse coordinates into canvas coordinates
		// by following the pattern laid out by 'jerryj' in the comments of
		// http://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
		var paddingLeft = parseFloat(helpers.getStyle(canvas, 'padding-left'));
		var paddingTop = parseFloat(helpers.getStyle(canvas, 'padding-top'));
		var paddingRight = parseFloat(helpers.getStyle(canvas, 'padding-right'));
		var paddingBottom = parseFloat(helpers.getStyle(canvas, 'padding-bottom'));
		var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
		var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

		// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
		// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
		mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
		mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);

		return {
			x: mouseX,
			y: mouseY
		};

	};

	// Private helper function to convert max-width/max-height values that may be percentages into a number
	function parseMaxStyle(styleValue, node, parentProperty) {
		var valueInPixels;
		if (typeof styleValue === 'string') {
			valueInPixels = parseInt(styleValue, 10);

			if (styleValue.indexOf('%') !== -1) {
				// percentage * size in dimension
				valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
			}
		} else {
			valueInPixels = styleValue;
		}

		return valueInPixels;
	}

	/**
	 * Returns if the given value contains an effective constraint.
	 * @private
	 */
	function isConstrainedValue(value) {
		return value !== undefined && value !== null && value !== 'none';
	}

	// Private helper to get a constraint dimension
	// @param domNode : the node to check the constraint on
	// @param maxStyle : the style that defines the maximum for the direction we are using (maxWidth / maxHeight)
	// @param percentageProperty : property of parent to use when calculating width as a percentage
	// @see http://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser
	function getConstraintDimension(domNode, maxStyle, percentageProperty) {
		var view = document.defaultView;
		var parentNode = domNode.parentNode;
		var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
		var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
		var hasCNode = isConstrainedValue(constrainedNode);
		var hasCContainer = isConstrainedValue(constrainedContainer);
		var infinity = Number.POSITIVE_INFINITY;

		if (hasCNode || hasCContainer) {
			return Math.min(
				hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
				hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
		}

		return 'none';
	}
	// returns Number or undefined if no constraint
	helpers.getConstraintWidth = function(domNode) {
		return getConstraintDimension(domNode, 'max-width', 'clientWidth');
	};
	// returns Number or undefined if no constraint
	helpers.getConstraintHeight = function(domNode) {
		return getConstraintDimension(domNode, 'max-height', 'clientHeight');
	};
	helpers.getMaximumWidth = function(domNode) {
		var container = domNode.parentNode;
		if (!container) {
			return domNode.clientWidth;
		}

		var paddingLeft = parseInt(helpers.getStyle(container, 'padding-left'), 10);
		var paddingRight = parseInt(helpers.getStyle(container, 'padding-right'), 10);
		var w = container.clientWidth - paddingLeft - paddingRight;
		var cw = helpers.getConstraintWidth(domNode);
		return isNaN(cw) ? w : Math.min(w, cw);
	};
	helpers.getMaximumHeight = function(domNode) {
		var container = domNode.parentNode;
		if (!container) {
			return domNode.clientHeight;
		}

		var paddingTop = parseInt(helpers.getStyle(container, 'padding-top'), 10);
		var paddingBottom = parseInt(helpers.getStyle(container, 'padding-bottom'), 10);
		var h = container.clientHeight - paddingTop - paddingBottom;
		var ch = helpers.getConstraintHeight(domNode);
		return isNaN(ch) ? h : Math.min(h, ch);
	};
	helpers.getStyle = function(el, property) {
		return el.currentStyle ?
			el.currentStyle[property] :
			document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
	};
	helpers.retinaScale = function(chart, forceRatio) {
		var pixelRatio = chart.currentDevicePixelRatio = forceRatio || window.devicePixelRatio || 1;
		if (pixelRatio === 1) {
			return;
		}

		var canvas = chart.canvas;
		var height = chart.height;
		var width = chart.width;

		canvas.height = height * pixelRatio;
		canvas.width = width * pixelRatio;
		chart.ctx.scale(pixelRatio, pixelRatio);

		// If no style has been set on the canvas, the render size is used as display size,
		// making the chart visually bigger, so let's enforce it to the "correct" values.
		// See https://github.com/chartjs/Chart.js/issues/3575
		canvas.style.height = height + 'px';
		canvas.style.width = width + 'px';
	};
	// -- Canvas methods
	helpers.fontString = function(pixelSize, fontStyle, fontFamily) {
		return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
	};
	helpers.longestText = function(ctx, font, arrayOfThings, cache) {
		cache = cache || {};
		var data = cache.data = cache.data || {};
		var gc = cache.garbageCollect = cache.garbageCollect || [];

		if (cache.font !== font) {
			data = cache.data = {};
			gc = cache.garbageCollect = [];
			cache.font = font;
		}

		ctx.font = font;
		var longest = 0;
		helpers.each(arrayOfThings, function(thing) {
			// Undefined strings and arrays should not be measured
			if (thing !== undefined && thing !== null && helpers.isArray(thing) !== true) {
				longest = helpers.measureText(ctx, data, gc, longest, thing);
			} else if (helpers.isArray(thing)) {
				// if it is an array lets measure each element
				// to do maybe simplify this function a bit so we can do this more recursively?
				helpers.each(thing, function(nestedThing) {
					// Undefined strings and arrays should not be measured
					if (nestedThing !== undefined && nestedThing !== null && !helpers.isArray(nestedThing)) {
						longest = helpers.measureText(ctx, data, gc, longest, nestedThing);
					}
				});
			}
		});

		var gcLen = gc.length / 2;
		if (gcLen > arrayOfThings.length) {
			for (var i = 0; i < gcLen; i++) {
				delete data[gc[i]];
			}
			gc.splice(0, gcLen);
		}
		return longest;
	};
	helpers.measureText = function(ctx, data, gc, longest, string) {
		var textWidth = data[string];
		if (!textWidth) {
			textWidth = data[string] = ctx.measureText(string).width;
			gc.push(string);
		}
		if (textWidth > longest) {
			longest = textWidth;
		}
		return longest;
	};
	helpers.numberOfLabelLines = function(arrayOfThings) {
		var numberOfLines = 1;
		helpers.each(arrayOfThings, function(thing) {
			if (helpers.isArray(thing)) {
				if (thing.length > numberOfLines) {
					numberOfLines = thing.length;
				}
			}
		});
		return numberOfLines;
	};

	helpers.color = !color ?
		function(value) {
			console.error('Color.js not found!');
			return value;
		} :
		function(value) {
			/* global CanvasGradient */
			if (value instanceof CanvasGradient) {
				value = defaults.global.defaultColor;
			}

			return color(value);
		};

	helpers.getHoverColor = function(colorValue) {
		/* global CanvasPattern */
		return (colorValue instanceof CanvasPattern) ?
			colorValue :
			helpers.color(colorValue).saturate(0.5).darken(0.1).rgbString();
	};
};

},{"2":2,"25":25,"45":45}],28:[function(require,module,exports){
'use strict';

var helpers = require(45);

/**
 * Helper function to get relative position for an event
 * @param {Event|IEvent} event - The event to get the position for
 * @param {Chart} chart - The chart
 * @returns {Point} the event position
 */
function getRelativePosition(e, chart) {
	if (e.native) {
		return {
			x: e.x,
			y: e.y
		};
	}

	return helpers.getRelativePosition(e, chart);
}

/**
 * Helper function to traverse all of the visible elements in the chart
 * @param chart {chart} the chart
 * @param handler {Function} the callback to execute for each visible item
 */
function parseVisibleItems(chart, handler) {
	var datasets = chart.data.datasets;
	var meta, i, j, ilen, jlen;

	for (i = 0, ilen = datasets.length; i < ilen; ++i) {
		if (!chart.isDatasetVisible(i)) {
			continue;
		}

		meta = chart.getDatasetMeta(i);
		for (j = 0, jlen = meta.data.length; j < jlen; ++j) {
			var element = meta.data[j];
			if (!element._view.skip) {
				handler(element);
			}
		}
	}
}

/**
 * Helper function to get the items that intersect the event position
 * @param items {ChartElement[]} elements to filter
 * @param position {Point} the point to be nearest to
 * @return {ChartElement[]} the nearest items
 */
function getIntersectItems(chart, position) {
	var elements = [];

	parseVisibleItems(chart, function(element) {
		if (element.inRange(position.x, position.y)) {
			elements.push(element);
		}
	});

	return elements;
}

/**
 * Helper function to get the items nearest to the event position considering all visible items in teh chart
 * @param chart {Chart} the chart to look at elements from
 * @param position {Point} the point to be nearest to
 * @param intersect {Boolean} if true, only consider items that intersect the position
 * @param distanceMetric {Function} function to provide the distance between points
 * @return {ChartElement[]} the nearest items
 */
function getNearestItems(chart, position, intersect, distanceMetric) {
	var minDistance = Number.POSITIVE_INFINITY;
	var nearestItems = [];

	parseVisibleItems(chart, function(element) {
		if (intersect && !element.inRange(position.x, position.y)) {
			return;
		}

		var center = element.getCenterPoint();
		var distance = distanceMetric(position, center);

		if (distance < minDistance) {
			nearestItems = [element];
			minDistance = distance;
		} else if (distance === minDistance) {
			// Can have multiple items at the same distance in which case we sort by size
			nearestItems.push(element);
		}
	});

	return nearestItems;
}

/**
 * Get a distance metric function for two points based on the
 * axis mode setting
 * @param {String} axis the axis mode. x|y|xy
 */
function getDistanceMetricForAxis(axis) {
	var useX = axis.indexOf('x') !== -1;
	var useY = axis.indexOf('y') !== -1;

	return function(pt1, pt2) {
		var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
		var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
		return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
	};
}

function indexMode(chart, e, options) {
	var position = getRelativePosition(e, chart);
	// Default axis for index mode is 'x' to match old behaviour
	options.axis = options.axis || 'x';
	var distanceMetric = getDistanceMetricForAxis(options.axis);
	var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
	var elements = [];

	if (!items.length) {
		return [];
	}

	chart.data.datasets.forEach(function(dataset, datasetIndex) {
		if (chart.isDatasetVisible(datasetIndex)) {
			var meta = chart.getDatasetMeta(datasetIndex);
			var element = meta.data[items[0]._index];

			// don't count items that are skipped (null data)
			if (element && !element._view.skip) {
				elements.push(element);
			}
		}
	});

	return elements;
}

/**
 * @interface IInteractionOptions
 */
/**
 * If true, only consider items that intersect the point
 * @name IInterfaceOptions#boolean
 * @type Boolean
 */

/**
 * Contains interaction related functions
 * @namespace Chart.Interaction
 */
module.exports = {
	// Helper function for different modes
	modes: {
		single: function(chart, e) {
			var position = getRelativePosition(e, chart);
			var elements = [];

			parseVisibleItems(chart, function(element) {
				if (element.inRange(position.x, position.y)) {
					elements.push(element);
					return elements;
				}
			});

			return elements.slice(0, 1);
		},

		/**
		 * @function Chart.Interaction.modes.label
		 * @deprecated since version 2.4.0
		 * @todo remove at version 3
		 * @private
		 */
		label: indexMode,

		/**
		 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
		 * @function Chart.Interaction.modes.index
		 * @since v2.4.0
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		index: indexMode,

		/**
		 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
		 * If the options.intersect is false, we find the nearest item and return the items in that dataset
		 * @function Chart.Interaction.modes.dataset
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use during interaction
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		dataset: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			options.axis = options.axis || 'xy';
			var distanceMetric = getDistanceMetricForAxis(options.axis);
			var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);

			if (items.length > 0) {
				items = chart.getDatasetMeta(items[0]._datasetIndex).data;
			}

			return items;
		},

		/**
		 * @function Chart.Interaction.modes.x-axis
		 * @deprecated since version 2.4.0. Use index mode and intersect == true
		 * @todo remove at version 3
		 * @private
		 */
		'x-axis': function(chart, e) {
			return indexMode(chart, e, {intersect: false});
		},

		/**
		 * Point mode returns all elements that hit test based on the event position
		 * of the event
		 * @function Chart.Interaction.modes.intersect
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		point: function(chart, e) {
			var position = getRelativePosition(e, chart);
			return getIntersectItems(chart, position);
		},

		/**
		 * nearest mode returns the element closest to the point
		 * @function Chart.Interaction.modes.intersect
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		nearest: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			options.axis = options.axis || 'xy';
			var distanceMetric = getDistanceMetricForAxis(options.axis);
			var nearestItems = getNearestItems(chart, position, options.intersect, distanceMetric);

			// We have multiple items at the same distance from the event. Now sort by smallest
			if (nearestItems.length > 1) {
				nearestItems.sort(function(a, b) {
					var sizeA = a.getArea();
					var sizeB = b.getArea();
					var ret = sizeA - sizeB;

					if (ret === 0) {
						// if equal sort by dataset index
						ret = a._datasetIndex - b._datasetIndex;
					}

					return ret;
				});
			}

			// Return only 1 item
			return nearestItems.slice(0, 1);
		},

		/**
		 * x mode returns the elements that hit-test at the current x coordinate
		 * @function Chart.Interaction.modes.x
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		x: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			var items = [];
			var intersectsItem = false;

			parseVisibleItems(chart, function(element) {
				if (element.inXRange(position.x)) {
					items.push(element);
				}

				if (element.inRange(position.x, position.y)) {
					intersectsItem = true;
				}
			});

			// If we want to trigger on an intersect and we don't have any items
			// that intersect the position, return nothing
			if (options.intersect && !intersectsItem) {
				items = [];
			}
			return items;
		},

		/**
		 * y mode returns the elements that hit-test at the current y coordinate
		 * @function Chart.Interaction.modes.y
		 * @param chart {chart} the chart we are returning items from
		 * @param e {Event} the event we are find things at
		 * @param options {IInteractionOptions} options to use
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		 */
		y: function(chart, e, options) {
			var position = getRelativePosition(e, chart);
			var items = [];
			var intersectsItem = false;

			parseVisibleItems(chart, function(element) {
				if (element.inYRange(position.y)) {
					items.push(element);
				}

				if (element.inRange(position.x, position.y)) {
					intersectsItem = true;
				}
			});

			// If we want to trigger on an intersect and we don't have any items
			// that intersect the position, return nothing
			if (options.intersect && !intersectsItem) {
				items = [];
			}
			return items;
		}
	}
};

},{"45":45}],29:[function(require,module,exports){
'use strict';

var defaults = require(25);

defaults._set('global', {
	responsive: true,
	responsiveAnimationDuration: 0,
	maintainAspectRatio: true,
	events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
	hover: {
		onHover: null,
		mode: 'nearest',
		intersect: true,
		animationDuration: 400
	},
	onClick: null,
	defaultColor: 'rgba(0,0,0,0.1)',
	defaultFontColor: '#666',
	defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	defaultFontSize: 12,
	defaultFontStyle: 'normal',
	showLines: true,

	// Element defaults defined in element extensions
	elements: {},

	// Layout options such as padding
	layout: {
		padding: {
			top: 0,
			right: 0,
			bottom: 0,
			left: 0
		}
	}
});

module.exports = function() {

	// Occupy the global variable of Chart, and create a simple base class
	var Chart = function(item, config) {
		this.construct(item, config);
		return this;
	};

	Chart.Chart = Chart;

	return Chart;
};

},{"25":25}],30:[function(require,module,exports){
'use strict';

var helpers = require(45);

module.exports = function(Chart) {

	function filterByPosition(array, position) {
		return helpers.where(array, function(v) {
			return v.position === position;
		});
	}

	function sortByWeight(array, reverse) {
		array.forEach(function(v, i) {
			v._tmpIndex_ = i;
			return v;
		});
		array.sort(function(a, b) {
			var v0 = reverse ? b : a;
			var v1 = reverse ? a : b;
			return v0.weight === v1.weight ?
				v0._tmpIndex_ - v1._tmpIndex_ :
				v0.weight - v1.weight;
		});
		array.forEach(function(v) {
			delete v._tmpIndex_;
		});
	}

	/**
	 * @interface ILayoutItem
	 * @prop {String} position - The position of the item in the chart layout. Possible values are
	 * 'left', 'top', 'right', 'bottom', and 'chartArea'
	 * @prop {Number} weight - The weight used to sort the item. Higher weights are further away from the chart area
	 * @prop {Boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
	 * @prop {Function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
	 * @prop {Function} update - Takes two parameters: width and height. Returns size of item
	 * @prop {Function} getPadding -  Returns an object with padding on the edges
	 * @prop {Number} width - Width of item. Must be valid after update()
	 * @prop {Number} height - Height of item. Must be valid after update()
	 * @prop {Number} left - Left edge of the item. Set by layout system and cannot be used in update
	 * @prop {Number} top - Top edge of the item. Set by layout system and cannot be used in update
	 * @prop {Number} right - Right edge of the item. Set by layout system and cannot be used in update
	 * @prop {Number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
	 */

	// The layout service is very self explanatory.  It's responsible for the layout within a chart.
	// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
	// It is this service's responsibility of carrying out that layout.
	Chart.layoutService = {
		defaults: {},

		/**
		 * Register a box to a chart.
		 * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
		 * @param {Chart} chart - the chart to use
		 * @param {ILayoutItem} item - the item to add to be layed out
		 */
		addBox: function(chart, item) {
			if (!chart.boxes) {
				chart.boxes = [];
			}

			// initialize item with default values
			item.fullWidth = item.fullWidth || false;
			item.position = item.position || 'top';
			item.weight = item.weight || 0;

			chart.boxes.push(item);
		},

		/**
		 * Remove a layoutItem from a chart
		 * @param {Chart} chart - the chart to remove the box from
		 * @param {Object} layoutItem - the item to remove from the layout
		 */
		removeBox: function(chart, layoutItem) {
			var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
			if (index !== -1) {
				chart.boxes.splice(index, 1);
			}
		},

		/**
		 * Sets (or updates) options on the given `item`.
		 * @param {Chart} chart - the chart in which the item lives (or will be added to)
		 * @param {Object} item - the item to configure with the given options
		 * @param {Object} options - the new item options.
		 */
		configure: function(chart, item, options) {
			var props = ['fullWidth', 'position', 'weight'];
			var ilen = props.length;
			var i = 0;
			var prop;

			for (; i < ilen; ++i) {
				prop = props[i];
				if (options.hasOwnProperty(prop)) {
					item[prop] = options[prop];
				}
			}
		},

		/**
		 * Fits boxes of the given chart into the given size by having each box measure itself
		 * then running a fitting algorithm
		 * @param {Chart} chart - the chart
		 * @param {Number} width - the width to fit into
		 * @param {Number} height - the height to fit into
		 */
		update: function(chart, width, height) {
			if (!chart) {
				return;
			}

			var layoutOptions = chart.options.layout || {};
			var padding = helpers.options.toPadding(layoutOptions.padding);
			var leftPadding = padding.left;
			var rightPadding = padding.right;
			var topPadding = padding.top;
			var bottomPadding = padding.bottom;

			var leftBoxes = filterByPosition(chart.boxes, 'left');
			var rightBoxes = filterByPosition(chart.boxes, 'right');
			var topBoxes = filterByPosition(chart.boxes, 'top');
			var bottomBoxes = filterByPosition(chart.boxes, 'bottom');
			var chartAreaBoxes = filterByPosition(chart.boxes, 'chartArea');

			// Sort boxes by weight. A higher weight is further away from the chart area
			sortByWeight(leftBoxes, true);
			sortByWeight(rightBoxes, false);
			sortByWeight(topBoxes, true);
			sortByWeight(bottomBoxes, false);

			// Essentially we now have any number of boxes on each of the 4 sides.
			// Our canvas looks like the following.
			// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
			// B1 is the bottom axis
			// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
			// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
			// an error will be thrown.
			//
			// |----------------------------------------------------|
			// |                  T1 (Full Width)                   |
			// |----------------------------------------------------|
			// |    |    |                 T2                  |    |
			// |    |----|-------------------------------------|----|
			// |    |    | C1 |                           | C2 |    |
			// |    |    |----|                           |----|    |
			// |    |    |                                     |    |
			// | L1 | L2 |           ChartArea (C0)            | R1 |
			// |    |    |                                     |    |
			// |    |    |----|                           |----|    |
			// |    |    | C3 |                           | C4 |    |
			// |    |----|-------------------------------------|----|
			// |    |    |                 B1                  |    |
			// |----------------------------------------------------|
			// |                  B2 (Full Width)                   |
			// |----------------------------------------------------|
			//
			// What we do to find the best sizing, we do the following
			// 1. Determine the minimum size of the chart area.
			// 2. Split the remaining width equally between each vertical axis
			// 3. Split the remaining height equally between each horizontal axis
			// 4. Give each layout the maximum size it can be. The layout will return it's minimum size
			// 5. Adjust the sizes of each axis based on it's minimum reported size.
			// 6. Refit each axis
			// 7. Position each axis in the final location
			// 8. Tell the chart the final location of the chart area
			// 9. Tell any axes that overlay the chart area the positions of the chart area

			// Step 1
			var chartWidth = width - leftPadding - rightPadding;
			var chartHeight = height - topPadding - bottomPadding;
			var chartAreaWidth = chartWidth / 2; // min 50%
			var chartAreaHeight = chartHeight / 2; // min 50%

			// Step 2
			var verticalBoxWidth = (width - chartAreaWidth) / (leftBoxes.length + rightBoxes.length);

			// Step 3
			var horizontalBoxHeight = (height - chartAreaHeight) / (topBoxes.length + bottomBoxes.length);

			// Step 4
			var maxChartAreaWidth = chartWidth;
			var maxChartAreaHeight = chartHeight;
			var minBoxSizes = [];

			function getMinimumBoxSize(box) {
				var minSize;
				var isHorizontal = box.isHorizontal();

				if (isHorizontal) {
					minSize = box.update(box.fullWidth ? chartWidth : maxChartAreaWidth, horizontalBoxHeight);
					maxChartAreaHeight -= minSize.height;
				} else {
					minSize = box.update(verticalBoxWidth, chartAreaHeight);
					maxChartAreaWidth -= minSize.width;
				}

				minBoxSizes.push({
					horizontal: isHorizontal,
					minSize: minSize,
					box: box,
				});
			}

			helpers.each(leftBoxes.concat(rightBoxes, topBoxes, bottomBoxes), getMinimumBoxSize);

			// If a horizontal box has padding, we move the left boxes over to avoid ugly charts (see issue #2478)
			var maxHorizontalLeftPadding = 0;
			var maxHorizontalRightPadding = 0;
			var maxVerticalTopPadding = 0;
			var maxVerticalBottomPadding = 0;

			helpers.each(topBoxes.concat(bottomBoxes), function(horizontalBox) {
				if (horizontalBox.getPadding) {
					var boxPadding = horizontalBox.getPadding();
					maxHorizontalLeftPadding = Math.max(maxHorizontalLeftPadding, boxPadding.left);
					maxHorizontalRightPadding = Math.max(maxHorizontalRightPadding, boxPadding.right);
				}
			});

			helpers.each(leftBoxes.concat(rightBoxes), function(verticalBox) {
				if (verticalBox.getPadding) {
					var boxPadding = verticalBox.getPadding();
					maxVerticalTopPadding = Math.max(maxVerticalTopPadding, boxPadding.top);
					maxVerticalBottomPadding = Math.max(maxVerticalBottomPadding, boxPadding.bottom);
				}
			});

			// At this point, maxChartAreaHeight and maxChartAreaWidth are the size the chart area could
			// be if the axes are drawn at their minimum sizes.
			// Steps 5 & 6
			var totalLeftBoxesWidth = leftPadding;
			var totalRightBoxesWidth = rightPadding;
			var totalTopBoxesHeight = topPadding;
			var totalBottomBoxesHeight = bottomPadding;

			// Function to fit a box
			function fitBox(box) {
				var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minBox) {
					return minBox.box === box;
				});

				if (minBoxSize) {
					if (box.isHorizontal()) {
						var scaleMargin = {
							left: Math.max(totalLeftBoxesWidth, maxHorizontalLeftPadding),
							right: Math.max(totalRightBoxesWidth, maxHorizontalRightPadding),
							top: 0,
							bottom: 0
						};

						// Don't use min size here because of label rotation. When the labels are rotated, their rotation highly depends
						// on the margin. Sometimes they need to increase in size slightly
						box.update(box.fullWidth ? chartWidth : maxChartAreaWidth, chartHeight / 2, scaleMargin);
					} else {
						box.update(minBoxSize.minSize.width, maxChartAreaHeight);
					}
				}
			}

			// Update, and calculate the left and right margins for the horizontal boxes
			helpers.each(leftBoxes.concat(rightBoxes), fitBox);

			helpers.each(leftBoxes, function(box) {
				totalLeftBoxesWidth += box.width;
			});

			helpers.each(rightBoxes, function(box) {
				totalRightBoxesWidth += box.width;
			});

			// Set the Left and Right margins for the horizontal boxes
			helpers.each(topBoxes.concat(bottomBoxes), fitBox);

			// Figure out how much margin is on the top and bottom of the vertical boxes
			helpers.each(topBoxes, function(box) {
				totalTopBoxesHeight += box.height;
			});

			helpers.each(bottomBoxes, function(box) {
				totalBottomBoxesHeight += box.height;
			});

			function finalFitVerticalBox(box) {
				var minBoxSize = helpers.findNextWhere(minBoxSizes, function(minSize) {
					return minSize.box === box;
				});

				var scaleMargin = {
					left: 0,
					right: 0,
					top: totalTopBoxesHeight,
					bottom: totalBottomBoxesHeight
				};

				if (minBoxSize) {
					box.update(minBoxSize.minSize.width, maxChartAreaHeight, scaleMargin);
				}
			}

			// Let the left layout know the final margin
			helpers.each(leftBoxes.concat(rightBoxes), finalFitVerticalBox);

			// Recalculate because the size of each layout might have changed slightly due to the margins (label rotation for instance)
			totalLeftBoxesWidth = leftPadding;
			totalRightBoxesWidth = rightPadding;
			totalTopBoxesHeight = topPadding;
			totalBottomBoxesHeight = bottomPadding;

			helpers.each(leftBoxes, function(box) {
				totalLeftBoxesWidth += box.width;
			});

			helpers.each(rightBoxes, function(box) {
				totalRightBoxesWidth += box.width;
			});

			helpers.each(topBoxes, function(box) {
				totalTopBoxesHeight += box.height;
			});
			helpers.each(bottomBoxes, function(box) {
				totalBottomBoxesHeight += box.height;
			});

			// We may be adding some padding to account for rotated x axis labels
			var leftPaddingAddition = Math.max(maxHorizontalLeftPadding - totalLeftBoxesWidth, 0);
			totalLeftBoxesWidth += leftPaddingAddition;
			totalRightBoxesWidth += Math.max(maxHorizontalRightPadding - totalRightBoxesWidth, 0);

			var topPaddingAddition = Math.max(maxVerticalTopPadding - totalTopBoxesHeight, 0);
			totalTopBoxesHeight += topPaddingAddition;
			totalBottomBoxesHeight += Math.max(maxVerticalBottomPadding - totalBottomBoxesHeight, 0);

			// Figure out if our chart area changed. This would occur if the dataset layout label rotation
			// changed due to the application of the margins in step 6. Since we can only get bigger, this is safe to do
			// without calling `fit` again
			var newMaxChartAreaHeight = height - totalTopBoxesHeight - totalBottomBoxesHeight;
			var newMaxChartAreaWidth = width - totalLeftBoxesWidth - totalRightBoxesWidth;

			if (newMaxChartAreaWidth !== maxChartAreaWidth || newMaxChartAreaHeight !== maxChartAreaHeight) {
				helpers.each(leftBoxes, function(box) {
					box.height = newMaxChartAreaHeight;
				});

				helpers.each(rightBoxes, function(box) {
					box.height = newMaxChartAreaHeight;
				});

				helpers.each(topBoxes, function(box) {
					if (!box.fullWidth) {
						box.width = newMaxChartAreaWidth;
					}
				});

				helpers.each(bottomBoxes, function(box) {
					if (!box.fullWidth) {
						box.width = newMaxChartAreaWidth;
					}
				});

				maxChartAreaHeight = newMaxChartAreaHeight;
				maxChartAreaWidth = newMaxChartAreaWidth;
			}

			// Step 7 - Position the boxes
			var left = leftPadding + leftPaddingAddition;
			var top = topPadding + topPaddingAddition;

			function placeBox(box) {
				if (box.isHorizontal()) {
					box.left = box.fullWidth ? leftPadding : totalLeftBoxesWidth;
					box.right = box.fullWidth ? width - rightPadding : totalLeftBoxesWidth + maxChartAreaWidth;
					box.top = top;
					box.bottom = top + box.height;

					// Move to next point
					top = box.bottom;

				} else {

					box.left = left;
					box.right = left + box.width;
					box.top = totalTopBoxesHeight;
					box.bottom = totalTopBoxesHeight + maxChartAreaHeight;

					// Move to next point
					left = box.right;
				}
			}

			helpers.each(leftBoxes.concat(topBoxes), placeBox);

			// Account for chart width and height
			left += maxChartAreaWidth;
			top += maxChartAreaHeight;

			helpers.each(rightBoxes, placeBox);
			helpers.each(bottomBoxes, placeBox);

			// Step 8
			chart.chartArea = {
				left: totalLeftBoxesWidth,
				top: totalTopBoxesHeight,
				right: totalLeftBoxesWidth + maxChartAreaWidth,
				bottom: totalTopBoxesHeight + maxChartAreaHeight
			};

			// Step 9
			helpers.each(chartAreaBoxes, function(box) {
				box.left = chart.chartArea.left;
				box.top = chart.chartArea.top;
				box.right = chart.chartArea.right;
				box.bottom = chart.chartArea.bottom;

				box.update(maxChartAreaWidth, maxChartAreaHeight);
			});
		}
	};
};

},{"45":45}],31:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

defaults._set('global', {
	plugins: {}
});

module.exports = function(Chart) {

	/**
	 * The plugin service singleton
	 * @namespace Chart.plugins
	 * @since 2.1.0
	 */
	Chart.plugins = {
		/**
		 * Globally registered plugins.
		 * @private
		 */
		_plugins: [],

		/**
		 * This identifier is used to invalidate the descriptors cache attached to each chart
		 * when a global plugin is registered or unregistered. In this case, the cache ID is
		 * incremented and descriptors are regenerated during following API calls.
		 * @private
		 */
		_cacheId: 0,

		/**
		 * Registers the given plugin(s) if not already registered.
		 * @param {Array|Object} plugins plugin instance(s).
		 */
		register: function(plugins) {
			var p = this._plugins;
			([]).concat(plugins).forEach(function(plugin) {
				if (p.indexOf(plugin) === -1) {
					p.push(plugin);
				}
			});

			this._cacheId++;
		},

		/**
		 * Unregisters the given plugin(s) only if registered.
		 * @param {Array|Object} plugins plugin instance(s).
		 */
		unregister: function(plugins) {
			var p = this._plugins;
			([]).concat(plugins).forEach(function(plugin) {
				var idx = p.indexOf(plugin);
				if (idx !== -1) {
					p.splice(idx, 1);
				}
			});

			this._cacheId++;
		},

		/**
		 * Remove all registered plugins.
		 * @since 2.1.5
		 */
		clear: function() {
			this._plugins = [];
			this._cacheId++;
		},

		/**
		 * Returns the number of registered plugins?
		 * @returns {Number}
		 * @since 2.1.5
		 */
		count: function() {
			return this._plugins.length;
		},

		/**
		 * Returns all registered plugin instances.
		 * @returns {Array} array of plugin objects.
		 * @since 2.1.5
		 */
		getAll: function() {
			return this._plugins;
		},

		/**
		 * Calls enabled plugins for `chart` on the specified hook and with the given args.
		 * This method immediately returns as soon as a plugin explicitly returns false. The
		 * returned value can be used, for instance, to interrupt the current action.
		 * @param {Object} chart - The chart instance for which plugins should be called.
		 * @param {String} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
		 * @param {Array} [args] - Extra arguments to apply to the hook call.
		 * @returns {Boolean} false if any of the plugins return false, else returns true.
		 */
		notify: function(chart, hook, args) {
			var descriptors = this.descriptors(chart);
			var ilen = descriptors.length;
			var i, descriptor, plugin, params, method;

			for (i = 0; i < ilen; ++i) {
				descriptor = descriptors[i];
				plugin = descriptor.plugin;
				method = plugin[hook];
				if (typeof method === 'function') {
					params = [chart].concat(args || []);
					params.push(descriptor.options);
					if (method.apply(plugin, params) === false) {
						return false;
					}
				}
			}

			return true;
		},

		/**
		 * Returns descriptors of enabled plugins for the given chart.
		 * @returns {Array} [{ plugin, options }]
		 * @private
		 */
		descriptors: function(chart) {
			var cache = chart._plugins || (chart._plugins = {});
			if (cache.id === this._cacheId) {
				return cache.descriptors;
			}

			var plugins = [];
			var descriptors = [];
			var config = (chart && chart.config) || {};
			var options = (config.options && config.options.plugins) || {};

			this._plugins.concat(config.plugins || []).forEach(function(plugin) {
				var idx = plugins.indexOf(plugin);
				if (idx !== -1) {
					return;
				}

				var id = plugin.id;
				var opts = options[id];
				if (opts === false) {
					return;
				}

				if (opts === true) {
					opts = helpers.clone(defaults.global.plugins[id]);
				}

				plugins.push(plugin);
				descriptors.push({
					plugin: plugin,
					options: opts || {}
				});
			});

			cache.descriptors = descriptors;
			cache.id = this._cacheId;
			return descriptors;
		}
	};

	/**
	 * Plugin extension hooks.
	 * @interface IPlugin
	 * @since 2.1.0
	 */
	/**
	 * @method IPlugin#beforeInit
	 * @desc Called before initializing `chart`.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#afterInit
	 * @desc Called after `chart` has been initialized and before the first update.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeUpdate
	 * @desc Called before updating `chart`. If any plugin returns `false`, the update
	 * is cancelled (and thus subsequent render(s)) until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart update.
	 */
	/**
	 * @method IPlugin#afterUpdate
	 * @desc Called after `chart` has been updated and before rendering. Note that this
	 * hook will not be called if the chart update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDatasetsUpdate
 	 * @desc Called before updating the `chart` datasets. If any plugin returns `false`,
	 * the datasets update is cancelled until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} false to cancel the datasets update.
	 * @since version 2.1.5
	 */
	/**
	 * @method IPlugin#afterDatasetsUpdate
	 * @desc Called after the `chart` datasets have been updated. Note that this hook
	 * will not be called if the datasets update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @since version 2.1.5
	 */
	/**
	 * @method IPlugin#beforeDatasetUpdate
 	 * @desc Called before updating the `chart` dataset at the given `args.index`. If any plugin
	 * returns `false`, the datasets update is cancelled until another `update` is triggered.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Number} args.index - The dataset index.
	 * @param {Object} args.meta - The dataset metadata.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart datasets drawing.
	 */
	/**
	 * @method IPlugin#afterDatasetUpdate
 	 * @desc Called after the `chart` datasets at the given `args.index` has been updated. Note
	 * that this hook will not be called if the datasets update has been previously cancelled.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Number} args.index - The dataset index.
	 * @param {Object} args.meta - The dataset metadata.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeLayout
	 * @desc Called before laying out `chart`. If any plugin returns `false`,
	 * the layout update is cancelled until another `update` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart layout.
	 */
	/**
	 * @method IPlugin#afterLayout
	 * @desc Called after the `chart` has been layed out. Note that this hook will not
	 * be called if the layout update has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeRender
	 * @desc Called before rendering `chart`. If any plugin returns `false`,
	 * the rendering is cancelled until another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart rendering.
	 */
	/**
	 * @method IPlugin#afterRender
	 * @desc Called after the `chart` has been fully rendered (and animation completed). Note
	 * that this hook will not be called if the rendering has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDraw
	 * @desc Called before drawing `chart` at every animation frame specified by the given
	 * easing value. If any plugin returns `false`, the frame drawing is cancelled until
	 * another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart drawing.
	 */
	/**
	 * @method IPlugin#afterDraw
	 * @desc Called after the `chart` has been drawn for the specific easing value. Note
	 * that this hook will not be called if the drawing has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDatasetsDraw
 	 * @desc Called before drawing the `chart` datasets. If any plugin returns `false`,
	 * the datasets drawing is cancelled until another `render` is triggered.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart datasets drawing.
	 */
	/**
	 * @method IPlugin#afterDatasetsDraw
	 * @desc Called after the `chart` datasets have been drawn. Note that this hook
	 * will not be called if the datasets drawing has been previously cancelled.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#beforeDatasetDraw
 	 * @desc Called before drawing the `chart` dataset at the given `args.index` (datasets
	 * are drawn in the reverse order). If any plugin returns `false`, the datasets drawing
	 * is cancelled until another `render` is triggered.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Number} args.index - The dataset index.
	 * @param {Object} args.meta - The dataset metadata.
	 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart datasets drawing.
	 */
	/**
	 * @method IPlugin#afterDatasetDraw
 	 * @desc Called after the `chart` datasets at the given `args.index` have been drawn
	 * (datasets are drawn in the reverse order). Note that this hook will not be called
	 * if the datasets drawing has been previously cancelled.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Number} args.index - The dataset index.
	 * @param {Object} args.meta - The dataset metadata.
	 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 */
	/**
  	 * @method IPlugin#beforeTooltipDraw
	 * @desc Called before drawing the `tooltip`. If any plugin returns `false`,
	 * the tooltip drawing is cancelled until another `render` is triggered.
	 * @param {Chart} chart - The chart instance.
	 * @param {Object} args - The call arguments.
	 * @param {Object} args.tooltip - The tooltip.
	 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
	 * @param {Object} options - The plugin options.
	 * @returns {Boolean} `false` to cancel the chart tooltip drawing.
  	 */
	/**
 	 * @method IPlugin#afterTooltipDraw
  	 * @desc Called after drawing the `tooltip`. Note that this hook will not
 	 * be called if the tooltip drawing has been previously cancelled.
 	 * @param {Chart} chart - The chart instance.
 	 * @param {Object} args - The call arguments.
 	 * @param {Object} args.tooltip - The tooltip.
	 * @param {Number} args.easingValue - The current animation value, between 0.0 and 1.0.
 	 * @param {Object} options - The plugin options.
 	 */
	/**
	 * @method IPlugin#beforeEvent
 	 * @desc Called before processing the specified `event`. If any plugin returns `false`,
	 * the event will be discarded.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {IEvent} event - The event object.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#afterEvent
	 * @desc Called after the `event` has been consumed. Note that this hook
	 * will not be called if the `event` has been previously discarded.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {IEvent} event - The event object.
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#resize
	 * @desc Called after the chart as been resized.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Number} size - The new canvas display size (eq. canvas.style width & height).
	 * @param {Object} options - The plugin options.
	 */
	/**
	 * @method IPlugin#destroy
	 * @desc Called after the chart as been destroyed.
	 * @param {Chart.Controller} chart - The chart instance.
	 * @param {Object} options - The plugin options.
	 */

	/**
	 * Provided for backward compatibility, use Chart.plugins instead
	 * @namespace Chart.pluginService
	 * @deprecated since version 2.1.5
	 * @todo remove at version 3
	 * @private
	 */
	Chart.pluginService = Chart.plugins;

	/**
	 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
	 * effect, instead simply create/register plugins via plain JavaScript objects.
	 * @interface Chart.PluginBase
	 * @deprecated since version 2.5.0
	 * @todo remove at version 3
	 * @private
	 */
	Chart.PluginBase = Element.extend({});
};

},{"25":25,"26":26,"45":45}],32:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);
var Ticks = require(34);

defaults._set('scale', {
	display: true,
	position: 'left',
	offset: false,

	// grid line settings
	gridLines: {
		display: true,
		color: 'rgba(0, 0, 0, 0.1)',
		lineWidth: 1,
		drawBorder: true,
		drawOnChartArea: true,
		drawTicks: true,
		tickMarkLength: 10,
		zeroLineWidth: 1,
		zeroLineColor: 'rgba(0,0,0,0.25)',
		zeroLineBorderDash: [],
		zeroLineBorderDashOffset: 0.0,
		offsetGridLines: false,
		borderDash: [],
		borderDashOffset: 0.0
	},

	// scale label
	scaleLabel: {
		// display property
		display: false,

		// actual label
		labelString: '',

		// line height
		lineHeight: 1.2,

		// top/bottom padding
		padding: {
			top: 4,
			bottom: 4
		}
	},

	// label settings
	ticks: {
		beginAtZero: false,
		minRotation: 0,
		maxRotation: 50,
		mirror: false,
		padding: 0,
		reverse: false,
		display: true,
		autoSkip: true,
		autoSkipPadding: 0,
		labelOffset: 0,
		// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
		callback: Ticks.formatters.values,
		minor: {},
		major: {}
	}
});

function labelsFromTicks(ticks) {
	var labels = [];
	var i, ilen;

	for (i = 0, ilen = ticks.length; i < ilen; ++i) {
		labels.push(ticks[i].label);
	}

	return labels;
}

function getLineValue(scale, index, offsetGridLines) {
	var lineValue = scale.getPixelForTick(index);

	if (offsetGridLines) {
		if (index === 0) {
			lineValue -= (scale.getPixelForTick(1) - lineValue) / 2;
		} else {
			lineValue -= (lineValue - scale.getPixelForTick(index - 1)) / 2;
		}
	}
	return lineValue;
}

module.exports = function(Chart) {

	function computeTextSize(context, tick, font) {
		return helpers.isArray(tick) ?
			helpers.longestText(context, font, tick) :
			context.measureText(tick).width;
	}

	function parseFontOptions(options) {
		var valueOrDefault = helpers.valueOrDefault;
		var globalDefaults = defaults.global;
		var size = valueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
		var style = valueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle);
		var family = valueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily);

		return {
			size: size,
			style: style,
			family: family,
			font: helpers.fontString(size, style, family)
		};
	}

	function parseLineHeight(options) {
		return helpers.options.toLineHeight(
			helpers.valueOrDefault(options.lineHeight, 1.2),
			helpers.valueOrDefault(options.fontSize, defaults.global.defaultFontSize));
	}

	Chart.Scale = Element.extend({
		/**
		 * Get the padding needed for the scale
		 * @method getPadding
		 * @private
		 * @returns {Padding} the necessary padding
		 */
		getPadding: function() {
			var me = this;
			return {
				left: me.paddingLeft || 0,
				top: me.paddingTop || 0,
				right: me.paddingRight || 0,
				bottom: me.paddingBottom || 0
			};
		},

		/**
		 * Returns the scale tick objects ({label, major})
		 * @since 2.7
		 */
		getTicks: function() {
			return this._ticks;
		},

		// These methods are ordered by lifecyle. Utilities then follow.
		// Any function defined here is inherited by all scale types.
		// Any function can be extended by the scale type

		mergeTicksOptions: function() {
			var ticks = this.options.ticks;
			if (ticks.minor === false) {
				ticks.minor = {
					display: false
				};
			}
			if (ticks.major === false) {
				ticks.major = {
					display: false
				};
			}
			for (var key in ticks) {
				if (key !== 'major' && key !== 'minor') {
					if (typeof ticks.minor[key] === 'undefined') {
						ticks.minor[key] = ticks[key];
					}
					if (typeof ticks.major[key] === 'undefined') {
						ticks.major[key] = ticks[key];
					}
				}
			}
		},
		beforeUpdate: function() {
			helpers.callback(this.options.beforeUpdate, [this]);
		},
		update: function(maxWidth, maxHeight, margins) {
			var me = this;
			var i, ilen, labels, label, ticks, tick;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = helpers.extend({
				left: 0,
				right: 0,
				top: 0,
				bottom: 0
			}, margins);
			me.longestTextCache = me.longestTextCache || {};

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();

			// Data min/max
			me.beforeDataLimits();
			me.determineDataLimits();
			me.afterDataLimits();

			// Ticks - `this.ticks` is now DEPRECATED!
			// Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
			// and must not be accessed directly from outside this class. `this.ticks` being
			// around for long time and not marked as private, we can't change its structure
			// without unexpected breaking changes. If you need to access the scale ticks,
			// use scale.getTicks() instead.

			me.beforeBuildTicks();

			// New implementations should return an array of objects but for BACKWARD COMPAT,
			// we still support no return (`this.ticks` internally set by calling this method).
			ticks = me.buildTicks() || [];

			me.afterBuildTicks();

			me.beforeTickToLabelConversion();

			// New implementations should return the formatted tick labels but for BACKWARD
			// COMPAT, we still support no return (`this.ticks` internally changed by calling
			// this method and supposed to contain only string values).
			labels = me.convertTicksToLabels(ticks) || me.ticks;

			me.afterTickToLabelConversion();

			me.ticks = labels;   // BACKWARD COMPATIBILITY

			// IMPORTANT: from this point, we consider that `this.ticks` will NEVER change!

			// BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)
			for (i = 0, ilen = labels.length; i < ilen; ++i) {
				label = labels[i];
				tick = ticks[i];
				if (!tick) {
					ticks.push(tick = {
						label: label,
						major: false
					});
				} else {
					tick.label = label;
				}
			}

			me._ticks = ticks;

			// Tick Rotation
			me.beforeCalculateTickRotation();
			me.calculateTickRotation();
			me.afterCalculateTickRotation();
			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;

		},
		afterUpdate: function() {
			helpers.callback(this.options.afterUpdate, [this]);
		},

		//

		beforeSetDimensions: function() {
			helpers.callback(this.options.beforeSetDimensions, [this]);
		},
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;
		},
		afterSetDimensions: function() {
			helpers.callback(this.options.afterSetDimensions, [this]);
		},

		// Data limits
		beforeDataLimits: function() {
			helpers.callback(this.options.beforeDataLimits, [this]);
		},
		determineDataLimits: helpers.noop,
		afterDataLimits: function() {
			helpers.callback(this.options.afterDataLimits, [this]);
		},

		//
		beforeBuildTicks: function() {
			helpers.callback(this.options.beforeBuildTicks, [this]);
		},
		buildTicks: helpers.noop,
		afterBuildTicks: function() {
			helpers.callback(this.options.afterBuildTicks, [this]);
		},

		beforeTickToLabelConversion: function() {
			helpers.callback(this.options.beforeTickToLabelConversion, [this]);
		},
		convertTicksToLabels: function() {
			var me = this;
			// Convert ticks to strings
			var tickOpts = me.options.ticks;
			me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback, this);
		},
		afterTickToLabelConversion: function() {
			helpers.callback(this.options.afterTickToLabelConversion, [this]);
		},

		//

		beforeCalculateTickRotation: function() {
			helpers.callback(this.options.beforeCalculateTickRotation, [this]);
		},
		calculateTickRotation: function() {
			var me = this;
			var context = me.ctx;
			var tickOpts = me.options.ticks;
			var labels = labelsFromTicks(me._ticks);

			// Get the width of each grid by calculating the difference
			// between x offsets between 0 and 1.
			var tickFont = parseFontOptions(tickOpts);
			context.font = tickFont.font;

			var labelRotation = tickOpts.minRotation || 0;

			if (labels.length && me.options.display && me.isHorizontal()) {
				var originalLabelWidth = helpers.longestText(context, tickFont.font, labels, me.longestTextCache);
				var labelWidth = originalLabelWidth;
				var cosRotation, sinRotation;

				// Allow 3 pixels x2 padding either side for label readability
				var tickWidth = me.getPixelForTick(1) - me.getPixelForTick(0) - 6;

				// Max label rotation can be set or default to 90 - also act as a loop counter
				while (labelWidth > tickWidth && labelRotation < tickOpts.maxRotation) {
					var angleRadians = helpers.toRadians(labelRotation);
					cosRotation = Math.cos(angleRadians);
					sinRotation = Math.sin(angleRadians);

					if (sinRotation * originalLabelWidth > me.maxHeight) {
						// go back one step
						labelRotation--;
						break;
					}

					labelRotation++;
					labelWidth = cosRotation * originalLabelWidth;
				}
			}

			me.labelRotation = labelRotation;
		},
		afterCalculateTickRotation: function() {
			helpers.callback(this.options.afterCalculateTickRotation, [this]);
		},

		//

		beforeFit: function() {
			helpers.callback(this.options.beforeFit, [this]);
		},
		fit: function() {
			var me = this;
			// Reset
			var minSize = me.minSize = {
				width: 0,
				height: 0
			};

			var labels = labelsFromTicks(me._ticks);

			var opts = me.options;
			var tickOpts = opts.ticks;
			var scaleLabelOpts = opts.scaleLabel;
			var gridLineOpts = opts.gridLines;
			var display = opts.display;
			var isHorizontal = me.isHorizontal();

			var tickFont = parseFontOptions(tickOpts);
			var tickMarkLength = opts.gridLines.tickMarkLength;

			// Width
			if (isHorizontal) {
				// subtract the margins to line up with the chartArea if we are a full width scale
				minSize.width = me.isFullWidth() ? me.maxWidth - me.margins.left - me.margins.right : me.maxWidth;
			} else {
				minSize.width = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
			}

			// height
			if (isHorizontal) {
				minSize.height = display && gridLineOpts.drawTicks ? tickMarkLength : 0;
			} else {
				minSize.height = me.maxHeight; // fill all the height
			}

			// Are we showing a title for the scale?
			if (scaleLabelOpts.display && display) {
				var scaleLabelLineHeight = parseLineHeight(scaleLabelOpts);
				var scaleLabelPadding = helpers.options.toPadding(scaleLabelOpts.padding);
				var deltaHeight = scaleLabelLineHeight + scaleLabelPadding.height;

				if (isHorizontal) {
					minSize.height += deltaHeight;
				} else {
					minSize.width += deltaHeight;
				}
			}

			// Don't bother fitting the ticks if we are not showing them
			if (tickOpts.display && display) {
				var largestTextWidth = helpers.longestText(me.ctx, tickFont.font, labels, me.longestTextCache);
				var tallestLabelHeightInLines = helpers.numberOfLabelLines(labels);
				var lineSpace = tickFont.size * 0.5;
				var tickPadding = me.options.ticks.padding;

				if (isHorizontal) {
					// A horizontal axis is more constrained by the height.
					me.longestLabelWidth = largestTextWidth;

					var angleRadians = helpers.toRadians(me.labelRotation);
					var cosRotation = Math.cos(angleRadians);
					var sinRotation = Math.sin(angleRadians);

					// TODO - improve this calculation
					var labelHeight = (sinRotation * largestTextWidth)
						+ (tickFont.size * tallestLabelHeightInLines)
						+ (lineSpace * (tallestLabelHeightInLines - 1))
						+ lineSpace; // padding

					minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);

					me.ctx.font = tickFont.font;
					var firstLabelWidth = computeTextSize(me.ctx, labels[0], tickFont.font);
					var lastLabelWidth = computeTextSize(me.ctx, labels[labels.length - 1], tickFont.font);

					// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
					// which means that the right padding is dominated by the font height
					if (me.labelRotation !== 0) {
						me.paddingLeft = opts.position === 'bottom' ? (cosRotation * firstLabelWidth) + 3 : (cosRotation * lineSpace) + 3; // add 3 px to move away from canvas edges
						me.paddingRight = opts.position === 'bottom' ? (cosRotation * lineSpace) + 3 : (cosRotation * lastLabelWidth) + 3;
					} else {
						me.paddingLeft = firstLabelWidth / 2 + 3; // add 3 px to move away from canvas edges
						me.paddingRight = lastLabelWidth / 2 + 3;
					}
				} else {
					// A vertical axis is more constrained by the width. Labels are the
					// dominant factor here, so get that length first and account for padding
					if (tickOpts.mirror) {
						largestTextWidth = 0;
					} else {
						// use lineSpace for consistency with horizontal axis
						// tickPadding is not implemented for horizontal
						largestTextWidth += tickPadding + lineSpace;
					}

					minSize.width = Math.min(me.maxWidth, minSize.width + largestTextWidth);

					me.paddingTop = tickFont.size / 2;
					me.paddingBottom = tickFont.size / 2;
				}
			}

			me.handleMargins();

			me.width = minSize.width;
			me.height = minSize.height;
		},

		/**
		 * Handle margins and padding interactions
		 * @private
		 */
		handleMargins: function() {
			var me = this;
			if (me.margins) {
				me.paddingLeft = Math.max(me.paddingLeft - me.margins.left, 0);
				me.paddingTop = Math.max(me.paddingTop - me.margins.top, 0);
				me.paddingRight = Math.max(me.paddingRight - me.margins.right, 0);
				me.paddingBottom = Math.max(me.paddingBottom - me.margins.bottom, 0);
			}
		},

		afterFit: function() {
			helpers.callback(this.options.afterFit, [this]);
		},

		// Shared Methods
		isHorizontal: function() {
			return this.options.position === 'top' || this.options.position === 'bottom';
		},
		isFullWidth: function() {
			return (this.options.fullWidth);
		},

		// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
		getRightValue: function(rawValue) {
			// Null and undefined values first
			if (helpers.isNullOrUndef(rawValue)) {
				return NaN;
			}
			// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
			if (typeof rawValue === 'number' && !isFinite(rawValue)) {
				return NaN;
			}
			// If it is in fact an object, dive in one more level
			if (rawValue) {
				if (this.isHorizontal()) {
					if (rawValue.x !== undefined) {
						return this.getRightValue(rawValue.x);
					}
				} else if (rawValue.y !== undefined) {
					return this.getRightValue(rawValue.y);
				}
			}

			// Value is good, return it
			return rawValue;
		},

		/**
		 * Used to get the value to display in the tooltip for the data at the given index
		 * @param index
		 * @param datasetIndex
		 */
		getLabelForIndex: helpers.noop,

		/**
		 * Returns the location of the given data point. Value can either be an index or a numerical value
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 * @param value
		 * @param index
		 * @param datasetIndex
		 */
		getPixelForValue: helpers.noop,

		/**
		 * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 * @param pixel
		 */
		getValueForPixel: helpers.noop,

		/**
		 * Returns the location of the tick at the given index
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */
		getPixelForTick: function(index) {
			var me = this;
			var offset = me.options.offset;
			if (me.isHorizontal()) {
				var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
				var tickWidth = innerWidth / Math.max((me._ticks.length - (offset ? 0 : 1)), 1);
				var pixel = (tickWidth * index) + me.paddingLeft;

				if (offset) {
					pixel += tickWidth / 2;
				}

				var finalVal = me.left + Math.round(pixel);
				finalVal += me.isFullWidth() ? me.margins.left : 0;
				return finalVal;
			}
			var innerHeight = me.height - (me.paddingTop + me.paddingBottom);
			return me.top + (index * (innerHeight / (me._ticks.length - 1)));
		},

		/**
		 * Utility for getting the pixel location of a percentage of scale
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */
		getPixelForDecimal: function(decimal) {
			var me = this;
			if (me.isHorizontal()) {
				var innerWidth = me.width - (me.paddingLeft + me.paddingRight);
				var valueOffset = (innerWidth * decimal) + me.paddingLeft;

				var finalVal = me.left + Math.round(valueOffset);
				finalVal += me.isFullWidth() ? me.margins.left : 0;
				return finalVal;
			}
			return me.top + (decimal * me.height);
		},

		/**
		 * Returns the pixel for the minimum chart value
		 * The coordinate (0, 0) is at the upper-left corner of the canvas
		 */
		getBasePixel: function() {
			return this.getPixelForValue(this.getBaseValue());
		},

		getBaseValue: function() {
			var me = this;
			var min = me.min;
			var max = me.max;

			return me.beginAtZero ? 0 :
				min < 0 && max < 0 ? max :
				min > 0 && max > 0 ? min :
				0;
		},

		/**
		 * Returns a subset of ticks to be plotted to avoid overlapping labels.
		 * @private
		 */
		_autoSkip: function(ticks) {
			var skipRatio;
			var me = this;
			var isHorizontal = me.isHorizontal();
			var optionTicks = me.options.ticks.minor;
			var tickCount = ticks.length;
			var labelRotationRadians = helpers.toRadians(me.labelRotation);
			var cosRotation = Math.cos(labelRotationRadians);
			var longestRotatedLabel = me.longestLabelWidth * cosRotation;
			var result = [];
			var i, tick, shouldSkip;

			// figure out the maximum number of gridlines to show
			var maxTicks;
			if (optionTicks.maxTicksLimit) {
				maxTicks = optionTicks.maxTicksLimit;
			}

			if (isHorizontal) {
				skipRatio = false;

				if ((longestRotatedLabel + optionTicks.autoSkipPadding) * tickCount > (me.width - (me.paddingLeft + me.paddingRight))) {
					skipRatio = 1 + Math.floor(((longestRotatedLabel + optionTicks.autoSkipPadding) * tickCount) / (me.width - (me.paddingLeft + me.paddingRight)));
				}

				// if they defined a max number of optionTicks,
				// increase skipRatio until that number is met
				if (maxTicks && tickCount > maxTicks) {
					skipRatio = Math.max(skipRatio, Math.floor(tickCount / maxTicks));
				}
			}

			for (i = 0; i < tickCount; i++) {
				tick = ticks[i];

				// Since we always show the last tick,we need may need to hide the last shown one before
				shouldSkip = (skipRatio > 1 && i % skipRatio > 0) || (i % skipRatio === 0 && i + skipRatio >= tickCount);
				if (shouldSkip && i !== tickCount - 1) {
					// leave tick in place but make sure it's not displayed (#4635)
					delete tick.label;
				}
				result.push(tick);
			}
			return result;
		},

		// Actually draw the scale on the canvas
		// @param {rectangle} chartArea : the area of the chart to draw full grid lines on
		draw: function(chartArea) {
			var me = this;
			var options = me.options;
			if (!options.display) {
				return;
			}

			var context = me.ctx;
			var globalDefaults = defaults.global;
			var optionTicks = options.ticks.minor;
			var optionMajorTicks = options.ticks.major || optionTicks;
			var gridLines = options.gridLines;
			var scaleLabel = options.scaleLabel;

			var isRotated = me.labelRotation !== 0;
			var isHorizontal = me.isHorizontal();

			var ticks = optionTicks.autoSkip ? me._autoSkip(me.getTicks()) : me.getTicks();
			var tickFontColor = helpers.valueOrDefault(optionTicks.fontColor, globalDefaults.defaultFontColor);
			var tickFont = parseFontOptions(optionTicks);
			var majorTickFontColor = helpers.valueOrDefault(optionMajorTicks.fontColor, globalDefaults.defaultFontColor);
			var majorTickFont = parseFontOptions(optionMajorTicks);

			var tl = gridLines.drawTicks ? gridLines.tickMarkLength : 0;

			var scaleLabelFontColor = helpers.valueOrDefault(scaleLabel.fontColor, globalDefaults.defaultFontColor);
			var scaleLabelFont = parseFontOptions(scaleLabel);
			var scaleLabelPadding = helpers.options.toPadding(scaleLabel.padding);
			var labelRotationRadians = helpers.toRadians(me.labelRotation);

			var itemsToDraw = [];

			var xTickStart = options.position === 'right' ? me.left : me.right - tl;
			var xTickEnd = options.position === 'right' ? me.left + tl : me.right;
			var yTickStart = options.position === 'bottom' ? me.top : me.bottom - tl;
			var yTickEnd = options.position === 'bottom' ? me.top + tl : me.bottom;

			helpers.each(ticks, function(tick, index) {
				// autoskipper skipped this tick (#4635)
				if (helpers.isNullOrUndef(tick.label)) {
					return;
				}

				var label = tick.label;
				var lineWidth, lineColor, borderDash, borderDashOffset;
				if (index === me.zeroLineIndex && options.offset === gridLines.offsetGridLines) {
					// Draw the first index specially
					lineWidth = gridLines.zeroLineWidth;
					lineColor = gridLines.zeroLineColor;
					borderDash = gridLines.zeroLineBorderDash;
					borderDashOffset = gridLines.zeroLineBorderDashOffset;
				} else {
					lineWidth = helpers.valueAtIndexOrDefault(gridLines.lineWidth, index);
					lineColor = helpers.valueAtIndexOrDefault(gridLines.color, index);
					borderDash = helpers.valueOrDefault(gridLines.borderDash, globalDefaults.borderDash);
					borderDashOffset = helpers.valueOrDefault(gridLines.borderDashOffset, globalDefaults.borderDashOffset);
				}

				// Common properties
				var tx1, ty1, tx2, ty2, x1, y1, x2, y2, labelX, labelY;
				var textAlign = 'middle';
				var textBaseline = 'middle';
				var tickPadding = optionTicks.padding;

				if (isHorizontal) {
					var labelYOffset = tl + tickPadding;

					if (options.position === 'bottom') {
						// bottom
						textBaseline = !isRotated ? 'top' : 'middle';
						textAlign = !isRotated ? 'center' : 'right';
						labelY = me.top + labelYOffset;
					} else {
						// top
						textBaseline = !isRotated ? 'bottom' : 'middle';
						textAlign = !isRotated ? 'center' : 'left';
						labelY = me.bottom - labelYOffset;
					}

					var xLineValue = getLineValue(me, index, gridLines.offsetGridLines && ticks.length > 1);
					if (xLineValue < me.left) {
						lineColor = 'rgba(0,0,0,0)';
					}
					xLineValue += helpers.aliasPixel(lineWidth);

					labelX = me.getPixelForTick(index) + optionTicks.labelOffset; // x values for optionTicks (need to consider offsetLabel option)

					tx1 = tx2 = x1 = x2 = xLineValue;
					ty1 = yTickStart;
					ty2 = yTickEnd;
					y1 = chartArea.top;
					y2 = chartArea.bottom;
				} else {
					var isLeft = options.position === 'left';
					var labelXOffset;

					if (optionTicks.mirror) {
						textAlign = isLeft ? 'left' : 'right';
						labelXOffset = tickPadding;
					} else {
						textAlign = isLeft ? 'right' : 'left';
						labelXOffset = tl + tickPadding;
					}

					labelX = isLeft ? me.right - labelXOffset : me.left + labelXOffset;

					var yLineValue = getLineValue(me, index, gridLines.offsetGridLines && ticks.length > 1);
					if (yLineValue < me.top) {
						lineColor = 'rgba(0,0,0,0)';
					}
					yLineValue += helpers.aliasPixel(lineWidth);

					labelY = me.getPixelForTick(index) + optionTicks.labelOffset;

					tx1 = xTickStart;
					tx2 = xTickEnd;
					x1 = chartArea.left;
					x2 = chartArea.right;
					ty1 = ty2 = y1 = y2 = yLineValue;
				}

				itemsToDraw.push({
					tx1: tx1,
					ty1: ty1,
					tx2: tx2,
					ty2: ty2,
					x1: x1,
					y1: y1,
					x2: x2,
					y2: y2,
					labelX: labelX,
					labelY: labelY,
					glWidth: lineWidth,
					glColor: lineColor,
					glBorderDash: borderDash,
					glBorderDashOffset: borderDashOffset,
					rotation: -1 * labelRotationRadians,
					label: label,
					major: tick.major,
					textBaseline: textBaseline,
					textAlign: textAlign
				});
			});

			// Draw all of the tick labels, tick marks, and grid lines at the correct places
			helpers.each(itemsToDraw, function(itemToDraw) {
				if (gridLines.display) {
					context.save();
					context.lineWidth = itemToDraw.glWidth;
					context.strokeStyle = itemToDraw.glColor;
					if (context.setLineDash) {
						context.setLineDash(itemToDraw.glBorderDash);
						context.lineDashOffset = itemToDraw.glBorderDashOffset;
					}

					context.beginPath();

					if (gridLines.drawTicks) {
						context.moveTo(itemToDraw.tx1, itemToDraw.ty1);
						context.lineTo(itemToDraw.tx2, itemToDraw.ty2);
					}

					if (gridLines.drawOnChartArea) {
						context.moveTo(itemToDraw.x1, itemToDraw.y1);
						context.lineTo(itemToDraw.x2, itemToDraw.y2);
					}

					context.stroke();
					context.restore();
				}

				if (optionTicks.display) {
					// Make sure we draw text in the correct color and font
					context.save();
					context.translate(itemToDraw.labelX, itemToDraw.labelY);
					context.rotate(itemToDraw.rotation);
					context.font = itemToDraw.major ? majorTickFont.font : tickFont.font;
					context.fillStyle = itemToDraw.major ? majorTickFontColor : tickFontColor;
					context.textBaseline = itemToDraw.textBaseline;
					context.textAlign = itemToDraw.textAlign;

					var label = itemToDraw.label;
					if (helpers.isArray(label)) {
						for (var i = 0, y = 0; i < label.length; ++i) {
							// We just make sure the multiline element is a string here..
							context.fillText('' + label[i], 0, y);
							// apply same lineSpacing as calculated @ L#320
							y += (tickFont.size * 1.5);
						}
					} else {
						context.fillText(label, 0, 0);
					}
					context.restore();
				}
			});

			if (scaleLabel.display) {
				// Draw the scale label
				var scaleLabelX;
				var scaleLabelY;
				var rotation = 0;
				var halfLineHeight = parseLineHeight(scaleLabel) / 2;

				if (isHorizontal) {
					scaleLabelX = me.left + ((me.right - me.left) / 2); // midpoint of the width
					scaleLabelY = options.position === 'bottom'
						? me.bottom - halfLineHeight - scaleLabelPadding.bottom
						: me.top + halfLineHeight + scaleLabelPadding.top;
				} else {
					var isLeft = options.position === 'left';
					scaleLabelX = isLeft
						? me.left + halfLineHeight + scaleLabelPadding.top
						: me.right - halfLineHeight - scaleLabelPadding.top;
					scaleLabelY = me.top + ((me.bottom - me.top) / 2);
					rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
				}

				context.save();
				context.translate(scaleLabelX, scaleLabelY);
				context.rotate(rotation);
				context.textAlign = 'center';
				context.textBaseline = 'middle';
				context.fillStyle = scaleLabelFontColor; // render in correct colour
				context.font = scaleLabelFont.font;
				context.fillText(scaleLabel.labelString, 0, 0);
				context.restore();
			}

			if (gridLines.drawBorder) {
				// Draw the line at the edge of the axis
				context.lineWidth = helpers.valueAtIndexOrDefault(gridLines.lineWidth, 0);
				context.strokeStyle = helpers.valueAtIndexOrDefault(gridLines.color, 0);
				var x1 = me.left;
				var x2 = me.right;
				var y1 = me.top;
				var y2 = me.bottom;

				var aliasPixel = helpers.aliasPixel(context.lineWidth);
				if (isHorizontal) {
					y1 = y2 = options.position === 'top' ? me.bottom : me.top;
					y1 += aliasPixel;
					y2 += aliasPixel;
				} else {
					x1 = x2 = options.position === 'left' ? me.right : me.left;
					x1 += aliasPixel;
					x2 += aliasPixel;
				}

				context.beginPath();
				context.moveTo(x1, y1);
				context.lineTo(x2, y2);
				context.stroke();
			}
		}
	});
};

},{"25":25,"26":26,"34":34,"45":45}],33:[function(require,module,exports){
'use strict';

var defaults = require(25);
var helpers = require(45);

module.exports = function(Chart) {

	Chart.scaleService = {
		// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
		// use the new chart options to grab the correct scale
		constructors: {},
		// Use a registration function so that we can move to an ES6 map when we no longer need to support
		// old browsers

		// Scale config defaults
		defaults: {},
		registerScaleType: function(type, scaleConstructor, scaleDefaults) {
			this.constructors[type] = scaleConstructor;
			this.defaults[type] = helpers.clone(scaleDefaults);
		},
		getScaleConstructor: function(type) {
			return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
		},
		getScaleDefaults: function(type) {
			// Return the scale defaults merged with the global settings so that we always use the latest ones
			return this.defaults.hasOwnProperty(type) ? helpers.merge({}, [defaults.scale, this.defaults[type]]) : {};
		},
		updateScaleDefaults: function(type, additions) {
			var me = this;
			if (me.defaults.hasOwnProperty(type)) {
				me.defaults[type] = helpers.extend(me.defaults[type], additions);
			}
		},
		addScalesToLayout: function(chart) {
			// Adds each scale to the chart.boxes array to be sized accordingly
			helpers.each(chart.scales, function(scale) {
				// Set ILayoutItem parameters for backwards compatibility
				scale.fullWidth = scale.options.fullWidth;
				scale.position = scale.options.position;
				scale.weight = scale.options.weight;
				Chart.layoutService.addBox(chart, scale);
			});
		}
	};
};

},{"25":25,"45":45}],34:[function(require,module,exports){
'use strict';

var helpers = require(45);

/**
 * Namespace to hold static tick generation functions
 * @namespace Chart.Ticks
 */
module.exports = {
	/**
	 * Namespace to hold generators for different types of ticks
	 * @namespace Chart.Ticks.generators
	 */
	generators: {
		/**
		 * Interface for the options provided to the numeric tick generator
		 * @interface INumericTickGenerationOptions
		 */
		/**
		 * The maximum number of ticks to display
		 * @name INumericTickGenerationOptions#maxTicks
		 * @type Number
		 */
		/**
		 * The distance between each tick.
		 * @name INumericTickGenerationOptions#stepSize
		 * @type Number
		 * @optional
		 */
		/**
		 * Forced minimum for the ticks. If not specified, the minimum of the data range is used to calculate the tick minimum
		 * @name INumericTickGenerationOptions#min
		 * @type Number
		 * @optional
		 */
		/**
		 * The maximum value of the ticks. If not specified, the maximum of the data range is used to calculate the tick maximum
		 * @name INumericTickGenerationOptions#max
		 * @type Number
		 * @optional
		 */

		/**
		 * Generate a set of linear ticks
		 * @method Chart.Ticks.generators.linear
		 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
		 * @param dataRange {IRange} the range of the data
		 * @returns {Array<Number>} array of tick values
		 */
		linear: function(generationOptions, dataRange) {
			var ticks = [];
			// To get a "nice" value for the tick spacing, we will use the appropriately named
			// "nice number" algorithm. See http://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
			// for details.

			var spacing;
			if (generationOptions.stepSize && generationOptions.stepSize > 0) {
				spacing = generationOptions.stepSize;
			} else {
				var niceRange = helpers.niceNum(dataRange.max - dataRange.min, false);
				spacing = helpers.niceNum(niceRange / (generationOptions.maxTicks - 1), true);
			}
			var niceMin = Math.floor(dataRange.min / spacing) * spacing;
			var niceMax = Math.ceil(dataRange.max / spacing) * spacing;

			// If min, max and stepSize is set and they make an evenly spaced scale use it.
			if (generationOptions.min && generationOptions.max && generationOptions.stepSize) {
				// If very close to our whole number, use it.
				if (helpers.almostWhole((generationOptions.max - generationOptions.min) / generationOptions.stepSize, spacing / 1000)) {
					niceMin = generationOptions.min;
					niceMax = generationOptions.max;
				}
			}

			var numSpaces = (niceMax - niceMin) / spacing;
			// If very close to our rounded value, use it.
			if (helpers.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
				numSpaces = Math.round(numSpaces);
			} else {
				numSpaces = Math.ceil(numSpaces);
			}

			// Put the values into the ticks array
			ticks.push(generationOptions.min !== undefined ? generationOptions.min : niceMin);
			for (var j = 1; j < numSpaces; ++j) {
				ticks.push(niceMin + (j * spacing));
			}
			ticks.push(generationOptions.max !== undefined ? generationOptions.max : niceMax);

			return ticks;
		},

		/**
		 * Generate a set of logarithmic ticks
		 * @method Chart.Ticks.generators.logarithmic
		 * @param generationOptions {INumericTickGenerationOptions} the options used to generate the ticks
		 * @param dataRange {IRange} the range of the data
		 * @returns {Array<Number>} array of tick values
		 */
		logarithmic: function(generationOptions, dataRange) {
			var ticks = [];
			var valueOrDefault = helpers.valueOrDefault;

			// Figure out what the max number of ticks we can support it is based on the size of
			// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
			// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
			// the graph
			var tickVal = valueOrDefault(generationOptions.min, Math.pow(10, Math.floor(helpers.log10(dataRange.min))));

			var endExp = Math.floor(helpers.log10(dataRange.max));
			var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
			var exp, significand;

			if (tickVal === 0) {
				exp = Math.floor(helpers.log10(dataRange.minNotZero));
				significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));

				ticks.push(tickVal);
				tickVal = significand * Math.pow(10, exp);
			} else {
				exp = Math.floor(helpers.log10(tickVal));
				significand = Math.floor(tickVal / Math.pow(10, exp));
			}

			do {
				ticks.push(tickVal);

				++significand;
				if (significand === 10) {
					significand = 1;
					++exp;
				}

				tickVal = significand * Math.pow(10, exp);
			} while (exp < endExp || (exp === endExp && significand < endSignificand));

			var lastTick = valueOrDefault(generationOptions.max, tickVal);
			ticks.push(lastTick);

			return ticks;
		}
	},

	/**
	 * Namespace to hold formatters for different types of ticks
	 * @namespace Chart.Ticks.formatters
	 */
	formatters: {
		/**
		 * Formatter for value labels
		 * @method Chart.Ticks.formatters.values
		 * @param value the value to display
		 * @return {String|Array} the label to display
		 */
		values: function(value) {
			return helpers.isArray(value) ? value : '' + value;
		},

		/**
		 * Formatter for linear numeric ticks
		 * @method Chart.Ticks.formatters.linear
		 * @param tickValue {Number} the value to be formatted
		 * @param index {Number} the position of the tickValue parameter in the ticks array
		 * @param ticks {Array<Number>} the list of ticks being converted
		 * @return {String} string representation of the tickValue parameter
		 */
		linear: function(tickValue, index, ticks) {
			// If we have lots of ticks, don't use the ones
			var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

			// If we have a number like 2.5 as the delta, figure out how many decimal places we need
			if (Math.abs(delta) > 1) {
				if (tickValue !== Math.floor(tickValue)) {
					// not an integer
					delta = tickValue - Math.floor(tickValue);
				}
			}

			var logDelta = helpers.log10(Math.abs(delta));
			var tickString = '';

			if (tickValue !== 0) {
				var numDecimal = -1 * Math.floor(logDelta);
				numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
				tickString = tickValue.toFixed(numDecimal);
			} else {
				tickString = '0'; // never show decimal places for 0
			}

			return tickString;
		},

		logarithmic: function(tickValue, index, ticks) {
			var remain = tickValue / (Math.pow(10, Math.floor(helpers.log10(tickValue))));

			if (tickValue === 0) {
				return '0';
			} else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {
				return tickValue.toExponential();
			}
			return '';
		}
	}
};

},{"45":45}],35:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

defaults._set('global', {
	tooltips: {
		enabled: true,
		custom: null,
		mode: 'nearest',
		position: 'average',
		intersect: true,
		backgroundColor: 'rgba(0,0,0,0.8)',
		titleFontStyle: 'bold',
		titleSpacing: 2,
		titleMarginBottom: 6,
		titleFontColor: '#fff',
		titleAlign: 'left',
		bodySpacing: 2,
		bodyFontColor: '#fff',
		bodyAlign: 'left',
		footerFontStyle: 'bold',
		footerSpacing: 2,
		footerMarginTop: 6,
		footerFontColor: '#fff',
		footerAlign: 'left',
		yPadding: 6,
		xPadding: 6,
		caretPadding: 2,
		caretSize: 5,
		cornerRadius: 6,
		multiKeyBackground: '#fff',
		displayColors: true,
		borderColor: 'rgba(0,0,0,0)',
		borderWidth: 0,
		callbacks: {
			// Args are: (tooltipItems, data)
			beforeTitle: helpers.noop,
			title: function(tooltipItems, data) {
				// Pick first xLabel for now
				var title = '';
				var labels = data.labels;
				var labelCount = labels ? labels.length : 0;

				if (tooltipItems.length > 0) {
					var item = tooltipItems[0];

					if (item.xLabel) {
						title = item.xLabel;
					} else if (labelCount > 0 && item.index < labelCount) {
						title = labels[item.index];
					}
				}

				return title;
			},
			afterTitle: helpers.noop,

			// Args are: (tooltipItems, data)
			beforeBody: helpers.noop,

			// Args are: (tooltipItem, data)
			beforeLabel: helpers.noop,
			label: function(tooltipItem, data) {
				var label = data.datasets[tooltipItem.datasetIndex].label || '';

				if (label) {
					label += ': ';
				}
				label += tooltipItem.yLabel;
				return label;
			},
			labelColor: function(tooltipItem, chart) {
				var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
				var activeElement = meta.data[tooltipItem.index];
				var view = activeElement._view;
				return {
					borderColor: view.borderColor,
					backgroundColor: view.backgroundColor
				};
			},
			labelTextColor: function() {
				return this._options.bodyFontColor;
			},
			afterLabel: helpers.noop,

			// Args are: (tooltipItems, data)
			afterBody: helpers.noop,

			// Args are: (tooltipItems, data)
			beforeFooter: helpers.noop,
			footer: helpers.noop,
			afterFooter: helpers.noop
		}
	}
});

module.exports = function(Chart) {

	/**
 	 * Helper method to merge the opacity into a color
 	 */
	function mergeOpacity(colorString, opacity) {
		var color = helpers.color(colorString);
		return color.alpha(opacity * color.alpha()).rgbaString();
	}

	// Helper to push or concat based on if the 2nd parameter is an array or not
	function pushOrConcat(base, toPush) {
		if (toPush) {
			if (helpers.isArray(toPush)) {
				// base = base.concat(toPush);
				Array.prototype.push.apply(base, toPush);
			} else {
				base.push(toPush);
			}
		}

		return base;
	}

	// Private helper to create a tooltip item model
	// @param element : the chart element (point, arc, bar) to create the tooltip item for
	// @return : new tooltip item
	function createTooltipItem(element) {
		var xScale = element._xScale;
		var yScale = element._yScale || element._scale; // handle radar || polarArea charts
		var index = element._index;
		var datasetIndex = element._datasetIndex;

		return {
			xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
			yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',
			index: index,
			datasetIndex: datasetIndex,
			x: element._model.x,
			y: element._model.y
		};
	}

	/**
	 * Helper to get the reset model for the tooltip
	 * @param tooltipOpts {Object} the tooltip options
	 */
	function getBaseModel(tooltipOpts) {
		var globalDefaults = defaults.global;
		var valueOrDefault = helpers.valueOrDefault;

		return {
			// Positioning
			xPadding: tooltipOpts.xPadding,
			yPadding: tooltipOpts.yPadding,
			xAlign: tooltipOpts.xAlign,
			yAlign: tooltipOpts.yAlign,

			// Body
			bodyFontColor: tooltipOpts.bodyFontColor,
			_bodyFontFamily: valueOrDefault(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),
			_bodyFontStyle: valueOrDefault(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
			_bodyAlign: tooltipOpts.bodyAlign,
			bodyFontSize: valueOrDefault(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
			bodySpacing: tooltipOpts.bodySpacing,

			// Title
			titleFontColor: tooltipOpts.titleFontColor,
			_titleFontFamily: valueOrDefault(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),
			_titleFontStyle: valueOrDefault(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
			titleFontSize: valueOrDefault(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
			_titleAlign: tooltipOpts.titleAlign,
			titleSpacing: tooltipOpts.titleSpacing,
			titleMarginBottom: tooltipOpts.titleMarginBottom,

			// Footer
			footerFontColor: tooltipOpts.footerFontColor,
			_footerFontFamily: valueOrDefault(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
			_footerFontStyle: valueOrDefault(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
			footerFontSize: valueOrDefault(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),
			_footerAlign: tooltipOpts.footerAlign,
			footerSpacing: tooltipOpts.footerSpacing,
			footerMarginTop: tooltipOpts.footerMarginTop,

			// Appearance
			caretSize: tooltipOpts.caretSize,
			cornerRadius: tooltipOpts.cornerRadius,
			backgroundColor: tooltipOpts.backgroundColor,
			opacity: 0,
			legendColorBackground: tooltipOpts.multiKeyBackground,
			displayColors: tooltipOpts.displayColors,
			borderColor: tooltipOpts.borderColor,
			borderWidth: tooltipOpts.borderWidth
		};
	}

	/**
	 * Get the size of the tooltip
	 */
	function getTooltipSize(tooltip, model) {
		var ctx = tooltip._chart.ctx;

		var height = model.yPadding * 2; // Tooltip Padding
		var width = 0;

		// Count of all lines in the body
		var body = model.body;
		var combinedBodyLength = body.reduce(function(count, bodyItem) {
			return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;
		}, 0);
		combinedBodyLength += model.beforeBody.length + model.afterBody.length;

		var titleLineCount = model.title.length;
		var footerLineCount = model.footer.length;
		var titleFontSize = model.titleFontSize;
		var bodyFontSize = model.bodyFontSize;
		var footerFontSize = model.footerFontSize;

		height += titleLineCount * titleFontSize; // Title Lines
		height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
		height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
		height += combinedBodyLength * bodyFontSize; // Body Lines
		height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
		height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
		height += footerLineCount * (footerFontSize); // Footer Lines
		height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing

		// Title width
		var widthPadding = 0;
		var maxLineWidth = function(line) {
			width = Math.max(width, ctx.measureText(line).width + widthPadding);
		};

		ctx.font = helpers.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
		helpers.each(model.title, maxLineWidth);

		// Body width
		ctx.font = helpers.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
		helpers.each(model.beforeBody.concat(model.afterBody), maxLineWidth);

		// Body lines may include some extra width due to the color box
		widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
		helpers.each(body, function(bodyItem) {
			helpers.each(bodyItem.before, maxLineWidth);
			helpers.each(bodyItem.lines, maxLineWidth);
			helpers.each(bodyItem.after, maxLineWidth);
		});

		// Reset back to 0
		widthPadding = 0;

		// Footer width
		ctx.font = helpers.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
		helpers.each(model.footer, maxLineWidth);

		// Add padding
		width += 2 * model.xPadding;

		return {
			width: width,
			height: height
		};
	}

	/**
	 * Helper to get the alignment of a tooltip given the size
	 */
	function determineAlignment(tooltip, size) {
		var model = tooltip._model;
		var chart = tooltip._chart;
		var chartArea = tooltip._chart.chartArea;
		var xAlign = 'center';
		var yAlign = 'center';

		if (model.y < size.height) {
			yAlign = 'top';
		} else if (model.y > (chart.height - size.height)) {
			yAlign = 'bottom';
		}

		var lf, rf; // functions to determine left, right alignment
		var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
		var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
		var midX = (chartArea.left + chartArea.right) / 2;
		var midY = (chartArea.top + chartArea.bottom) / 2;

		if (yAlign === 'center') {
			lf = function(x) {
				return x <= midX;
			};
			rf = function(x) {
				return x > midX;
			};
		} else {
			lf = function(x) {
				return x <= (size.width / 2);
			};
			rf = function(x) {
				return x >= (chart.width - (size.width / 2));
			};
		}

		olf = function(x) {
			return x + size.width > chart.width;
		};
		orf = function(x) {
			return x - size.width < 0;
		};
		yf = function(y) {
			return y <= midY ? 'top' : 'bottom';
		};

		if (lf(model.x)) {
			xAlign = 'left';

			// Is tooltip too wide and goes over the right side of the chart.?
			if (olf(model.x)) {
				xAlign = 'center';
				yAlign = yf(model.y);
			}
		} else if (rf(model.x)) {
			xAlign = 'right';

			// Is tooltip too wide and goes outside left edge of canvas?
			if (orf(model.x)) {
				xAlign = 'center';
				yAlign = yf(model.y);
			}
		}

		var opts = tooltip._options;
		return {
			xAlign: opts.xAlign ? opts.xAlign : xAlign,
			yAlign: opts.yAlign ? opts.yAlign : yAlign
		};
	}

	/**
	 * @Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
	 */
	function getBackgroundPoint(vm, size, alignment) {
		// Background Position
		var x = vm.x;
		var y = vm.y;

		var caretSize = vm.caretSize;
		var caretPadding = vm.caretPadding;
		var cornerRadius = vm.cornerRadius;
		var xAlign = alignment.xAlign;
		var yAlign = alignment.yAlign;
		var paddingAndSize = caretSize + caretPadding;
		var radiusAndPadding = cornerRadius + caretPadding;

		if (xAlign === 'right') {
			x -= size.width;
		} else if (xAlign === 'center') {
			x -= (size.width / 2);
		}

		if (yAlign === 'top') {
			y += paddingAndSize;
		} else if (yAlign === 'bottom') {
			y -= size.height + paddingAndSize;
		} else {
			y -= (size.height / 2);
		}

		if (yAlign === 'center') {
			if (xAlign === 'left') {
				x += paddingAndSize;
			} else if (xAlign === 'right') {
				x -= paddingAndSize;
			}
		} else if (xAlign === 'left') {
			x -= radiusAndPadding;
		} else if (xAlign === 'right') {
			x += radiusAndPadding;
		}

		return {
			x: x,
			y: y
		};
	}

	Chart.Tooltip = Element.extend({
		initialize: function() {
			this._model = getBaseModel(this._options);
			this._lastActive = [];
		},

		// Get the title
		// Args are: (tooltipItem, data)
		getTitle: function() {
			var me = this;
			var opts = me._options;
			var callbacks = opts.callbacks;

			var beforeTitle = callbacks.beforeTitle.apply(me, arguments);
			var title = callbacks.title.apply(me, arguments);
			var afterTitle = callbacks.afterTitle.apply(me, arguments);

			var lines = [];
			lines = pushOrConcat(lines, beforeTitle);
			lines = pushOrConcat(lines, title);
			lines = pushOrConcat(lines, afterTitle);

			return lines;
		},

		// Args are: (tooltipItem, data)
		getBeforeBody: function() {
			var lines = this._options.callbacks.beforeBody.apply(this, arguments);
			return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
		},

		// Args are: (tooltipItem, data)
		getBody: function(tooltipItems, data) {
			var me = this;
			var callbacks = me._options.callbacks;
			var bodyItems = [];

			helpers.each(tooltipItems, function(tooltipItem) {
				var bodyItem = {
					before: [],
					lines: [],
					after: []
				};
				pushOrConcat(bodyItem.before, callbacks.beforeLabel.call(me, tooltipItem, data));
				pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
				pushOrConcat(bodyItem.after, callbacks.afterLabel.call(me, tooltipItem, data));

				bodyItems.push(bodyItem);
			});

			return bodyItems;
		},

		// Args are: (tooltipItem, data)
		getAfterBody: function() {
			var lines = this._options.callbacks.afterBody.apply(this, arguments);
			return helpers.isArray(lines) ? lines : lines !== undefined ? [lines] : [];
		},

		// Get the footer and beforeFooter and afterFooter lines
		// Args are: (tooltipItem, data)
		getFooter: function() {
			var me = this;
			var callbacks = me._options.callbacks;

			var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
			var footer = callbacks.footer.apply(me, arguments);
			var afterFooter = callbacks.afterFooter.apply(me, arguments);

			var lines = [];
			lines = pushOrConcat(lines, beforeFooter);
			lines = pushOrConcat(lines, footer);
			lines = pushOrConcat(lines, afterFooter);

			return lines;
		},

		update: function(changed) {
			var me = this;
			var opts = me._options;

			// Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
			// that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
			// which breaks any animations.
			var existingModel = me._model;
			var model = me._model = getBaseModel(opts);
			var active = me._active;

			var data = me._data;

			// In the case where active.length === 0 we need to keep these at existing values for good animations
			var alignment = {
				xAlign: existingModel.xAlign,
				yAlign: existingModel.yAlign
			};
			var backgroundPoint = {
				x: existingModel.x,
				y: existingModel.y
			};
			var tooltipSize = {
				width: existingModel.width,
				height: existingModel.height
			};
			var tooltipPosition = {
				x: existingModel.caretX,
				y: existingModel.caretY
			};

			var i, len;

			if (active.length) {
				model.opacity = 1;

				var labelColors = [];
				var labelTextColors = [];
				tooltipPosition = Chart.Tooltip.positioners[opts.position].call(me, active, me._eventPosition);

				var tooltipItems = [];
				for (i = 0, len = active.length; i < len; ++i) {
					tooltipItems.push(createTooltipItem(active[i]));
				}

				// If the user provided a filter function, use it to modify the tooltip items
				if (opts.filter) {
					tooltipItems = tooltipItems.filter(function(a) {
						return opts.filter(a, data);
					});
				}

				// If the user provided a sorting function, use it to modify the tooltip items
				if (opts.itemSort) {
					tooltipItems = tooltipItems.sort(function(a, b) {
						return opts.itemSort(a, b, data);
					});
				}

				// Determine colors for boxes
				helpers.each(tooltipItems, function(tooltipItem) {
					labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, me._chart));
					labelTextColors.push(opts.callbacks.labelTextColor.call(me, tooltipItem, me._chart));
				});


				// Build the Text Lines
				model.title = me.getTitle(tooltipItems, data);
				model.beforeBody = me.getBeforeBody(tooltipItems, data);
				model.body = me.getBody(tooltipItems, data);
				model.afterBody = me.getAfterBody(tooltipItems, data);
				model.footer = me.getFooter(tooltipItems, data);

				// Initial positioning and colors
				model.x = Math.round(tooltipPosition.x);
				model.y = Math.round(tooltipPosition.y);
				model.caretPadding = opts.caretPadding;
				model.labelColors = labelColors;
				model.labelTextColors = labelTextColors;

				// data points
				model.dataPoints = tooltipItems;

				// We need to determine alignment of the tooltip
				tooltipSize = getTooltipSize(this, model);
				alignment = determineAlignment(this, tooltipSize);
				// Final Size and Position
				backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment);
			} else {
				model.opacity = 0;
			}

			model.xAlign = alignment.xAlign;
			model.yAlign = alignment.yAlign;
			model.x = backgroundPoint.x;
			model.y = backgroundPoint.y;
			model.width = tooltipSize.width;
			model.height = tooltipSize.height;

			// Point where the caret on the tooltip points to
			model.caretX = tooltipPosition.x;
			model.caretY = tooltipPosition.y;

			me._model = model;

			if (changed && opts.custom) {
				opts.custom.call(me, model);
			}

			return me;
		},
		drawCaret: function(tooltipPoint, size) {
			var ctx = this._chart.ctx;
			var vm = this._view;
			var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);

			ctx.lineTo(caretPosition.x1, caretPosition.y1);
			ctx.lineTo(caretPosition.x2, caretPosition.y2);
			ctx.lineTo(caretPosition.x3, caretPosition.y3);
		},
		getCaretPosition: function(tooltipPoint, size, vm) {
			var x1, x2, x3, y1, y2, y3;
			var caretSize = vm.caretSize;
			var cornerRadius = vm.cornerRadius;
			var xAlign = vm.xAlign;
			var yAlign = vm.yAlign;
			var ptX = tooltipPoint.x;
			var ptY = tooltipPoint.y;
			var width = size.width;
			var height = size.height;

			if (yAlign === 'center') {
				y2 = ptY + (height / 2);

				if (xAlign === 'left') {
					x1 = ptX;
					x2 = x1 - caretSize;
					x3 = x1;

					y1 = y2 + caretSize;
					y3 = y2 - caretSize;
				} else {
					x1 = ptX + width;
					x2 = x1 + caretSize;
					x3 = x1;

					y1 = y2 - caretSize;
					y3 = y2 + caretSize;
				}
			} else {
				if (xAlign === 'left') {
					x2 = ptX + cornerRadius + (caretSize);
					x1 = x2 - caretSize;
					x3 = x2 + caretSize;
				} else if (xAlign === 'right') {
					x2 = ptX + width - cornerRadius - caretSize;
					x1 = x2 - caretSize;
					x3 = x2 + caretSize;
				} else {
					x2 = ptX + (width / 2);
					x1 = x2 - caretSize;
					x3 = x2 + caretSize;
				}
				if (yAlign === 'top') {
					y1 = ptY;
					y2 = y1 - caretSize;
					y3 = y1;
				} else {
					y1 = ptY + height;
					y2 = y1 + caretSize;
					y3 = y1;
					// invert drawing order
					var tmp = x3;
					x3 = x1;
					x1 = tmp;
				}
			}
			return {x1: x1, x2: x2, x3: x3, y1: y1, y2: y2, y3: y3};
		},
		drawTitle: function(pt, vm, ctx, opacity) {
			var title = vm.title;

			if (title.length) {
				ctx.textAlign = vm._titleAlign;
				ctx.textBaseline = 'top';

				var titleFontSize = vm.titleFontSize;
				var titleSpacing = vm.titleSpacing;

				ctx.fillStyle = mergeOpacity(vm.titleFontColor, opacity);
				ctx.font = helpers.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);

				var i, len;
				for (i = 0, len = title.length; i < len; ++i) {
					ctx.fillText(title[i], pt.x, pt.y);
					pt.y += titleFontSize + titleSpacing; // Line Height and spacing

					if (i + 1 === title.length) {
						pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
					}
				}
			}
		},
		drawBody: function(pt, vm, ctx, opacity) {
			var bodyFontSize = vm.bodyFontSize;
			var bodySpacing = vm.bodySpacing;
			var body = vm.body;

			ctx.textAlign = vm._bodyAlign;
			ctx.textBaseline = 'top';
			ctx.font = helpers.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);

			// Before Body
			var xLinePadding = 0;
			var fillLineOfText = function(line) {
				ctx.fillText(line, pt.x + xLinePadding, pt.y);
				pt.y += bodyFontSize + bodySpacing;
			};

			// Before body lines
			ctx.fillStyle = mergeOpacity(vm.bodyFontColor, opacity);
			helpers.each(vm.beforeBody, fillLineOfText);

			var drawColorBoxes = vm.displayColors;
			xLinePadding = drawColorBoxes ? (bodyFontSize + 2) : 0;

			// Draw body lines now
			helpers.each(body, function(bodyItem, i) {
				var textColor = mergeOpacity(vm.labelTextColors[i], opacity);
				ctx.fillStyle = textColor;
				helpers.each(bodyItem.before, fillLineOfText);

				helpers.each(bodyItem.lines, function(line) {
					// Draw Legend-like boxes if needed
					if (drawColorBoxes) {
						// Fill a white rect so that colours merge nicely if the opacity is < 1
						ctx.fillStyle = mergeOpacity(vm.legendColorBackground, opacity);
						ctx.fillRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

						// Border
						ctx.lineWidth = 1;
						ctx.strokeStyle = mergeOpacity(vm.labelColors[i].borderColor, opacity);
						ctx.strokeRect(pt.x, pt.y, bodyFontSize, bodyFontSize);

						// Inner square
						ctx.fillStyle = mergeOpacity(vm.labelColors[i].backgroundColor, opacity);
						ctx.fillRect(pt.x + 1, pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
						ctx.fillStyle = textColor;
					}

					fillLineOfText(line);
				});

				helpers.each(bodyItem.after, fillLineOfText);
			});

			// Reset back to 0 for after body
			xLinePadding = 0;

			// After body lines
			helpers.each(vm.afterBody, fillLineOfText);
			pt.y -= bodySpacing; // Remove last body spacing
		},
		drawFooter: function(pt, vm, ctx, opacity) {
			var footer = vm.footer;

			if (footer.length) {
				pt.y += vm.footerMarginTop;

				ctx.textAlign = vm._footerAlign;
				ctx.textBaseline = 'top';

				ctx.fillStyle = mergeOpacity(vm.footerFontColor, opacity);
				ctx.font = helpers.fontString(vm.footerFontSize, vm._footerFontStyle, vm._footerFontFamily);

				helpers.each(footer, function(line) {
					ctx.fillText(line, pt.x, pt.y);
					pt.y += vm.footerFontSize + vm.footerSpacing;
				});
			}
		},
		drawBackground: function(pt, vm, ctx, tooltipSize, opacity) {
			ctx.fillStyle = mergeOpacity(vm.backgroundColor, opacity);
			ctx.strokeStyle = mergeOpacity(vm.borderColor, opacity);
			ctx.lineWidth = vm.borderWidth;
			var xAlign = vm.xAlign;
			var yAlign = vm.yAlign;
			var x = pt.x;
			var y = pt.y;
			var width = tooltipSize.width;
			var height = tooltipSize.height;
			var radius = vm.cornerRadius;

			ctx.beginPath();
			ctx.moveTo(x + radius, y);
			if (yAlign === 'top') {
				this.drawCaret(pt, tooltipSize);
			}
			ctx.lineTo(x + width - radius, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
			if (yAlign === 'center' && xAlign === 'right') {
				this.drawCaret(pt, tooltipSize);
			}
			ctx.lineTo(x + width, y + height - radius);
			ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
			if (yAlign === 'bottom') {
				this.drawCaret(pt, tooltipSize);
			}
			ctx.lineTo(x + radius, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
			if (yAlign === 'center' && xAlign === 'left') {
				this.drawCaret(pt, tooltipSize);
			}
			ctx.lineTo(x, y + radius);
			ctx.quadraticCurveTo(x, y, x + radius, y);
			ctx.closePath();

			ctx.fill();

			if (vm.borderWidth > 0) {
				ctx.stroke();
			}
		},
		draw: function() {
			var ctx = this._chart.ctx;
			var vm = this._view;

			if (vm.opacity === 0) {
				return;
			}

			var tooltipSize = {
				width: vm.width,
				height: vm.height
			};
			var pt = {
				x: vm.x,
				y: vm.y
			};

			// IE11/Edge does not like very small opacities, so snap to 0
			var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

			// Truthy/falsey value for empty tooltip
			var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;

			if (this._options.enabled && hasTooltipContent) {
				// Draw Background
				this.drawBackground(pt, vm, ctx, tooltipSize, opacity);

				// Draw Title, Body, and Footer
				pt.x += vm.xPadding;
				pt.y += vm.yPadding;

				// Titles
				this.drawTitle(pt, vm, ctx, opacity);

				// Body
				this.drawBody(pt, vm, ctx, opacity);

				// Footer
				this.drawFooter(pt, vm, ctx, opacity);
			}
		},

		/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event - The event to handle
		 * @returns {Boolean} true if the tooltip changed
		 */
		handleEvent: function(e) {
			var me = this;
			var options = me._options;
			var changed = false;

			me._lastActive = me._lastActive || [];

			// Find Active Elements for tooltips
			if (e.type === 'mouseout') {
				me._active = [];
			} else {
				me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);
			}

			// Remember Last Actives
			changed = !helpers.arrayEquals(me._active, me._lastActive);

			// If tooltip didn't change, do not handle the target event
			if (!changed) {
				return false;
			}

			me._lastActive = me._active;

			if (options.enabled || options.custom) {
				me._eventPosition = {
					x: e.x,
					y: e.y
				};

				var model = me._model;
				me.update(true);
				me.pivot();

				// See if our tooltip position changed
				changed |= (model.x !== me._model.x) || (model.y !== me._model.y);
			}

			return changed;
		}
	});

	/**
	 * @namespace Chart.Tooltip.positioners
	 */
	Chart.Tooltip.positioners = {
		/**
		 * Average mode places the tooltip at the average position of the elements shown
		 * @function Chart.Tooltip.positioners.average
		 * @param elements {ChartElement[]} the elements being displayed in the tooltip
		 * @returns {Point} tooltip position
		 */
		average: function(elements) {
			if (!elements.length) {
				return false;
			}

			var i, len;
			var x = 0;
			var y = 0;
			var count = 0;

			for (i = 0, len = elements.length; i < len; ++i) {
				var el = elements[i];
				if (el && el.hasValue()) {
					var pos = el.tooltipPosition();
					x += pos.x;
					y += pos.y;
					++count;
				}
			}

			return {
				x: Math.round(x / count),
				y: Math.round(y / count)
			};
		},

		/**
		 * Gets the tooltip position nearest of the item nearest to the event position
		 * @function Chart.Tooltip.positioners.nearest
		 * @param elements {Chart.Element[]} the tooltip elements
		 * @param eventPosition {Point} the position of the event in canvas coordinates
		 * @returns {Point} the tooltip position
		 */
		nearest: function(elements, eventPosition) {
			var x = eventPosition.x;
			var y = eventPosition.y;
			var minDistance = Number.POSITIVE_INFINITY;
			var i, len, nearestElement;

			for (i = 0, len = elements.length; i < len; ++i) {
				var el = elements[i];
				if (el && el.hasValue()) {
					var center = el.getCenterPoint();
					var d = helpers.distanceBetweenPoints(eventPosition, center);

					if (d < minDistance) {
						minDistance = d;
						nearestElement = el;
					}
				}
			}

			if (nearestElement) {
				var tp = nearestElement.tooltipPosition();
				x = tp.x;
				y = tp.y;
			}

			return {
				x: x,
				y: y
			};
		}
	};
};

},{"25":25,"26":26,"45":45}],36:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

defaults._set('global', {
	elements: {
		arc: {
			backgroundColor: defaults.global.defaultColor,
			borderColor: '#fff',
			borderWidth: 2
		}
	}
});

module.exports = Element.extend({
	inLabelRange: function(mouseX) {
		var vm = this._view;

		if (vm) {
			return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
		}
		return false;
	},

	inRange: function(chartX, chartY) {
		var vm = this._view;

		if (vm) {
			var pointRelativePosition = helpers.getAngleFromPoint(vm, {x: chartX, y: chartY});
			var	angle = pointRelativePosition.angle;
			var distance = pointRelativePosition.distance;

			// Sanitise angle range
			var startAngle = vm.startAngle;
			var endAngle = vm.endAngle;
			while (endAngle < startAngle) {
				endAngle += 2.0 * Math.PI;
			}
			while (angle > endAngle) {
				angle -= 2.0 * Math.PI;
			}
			while (angle < startAngle) {
				angle += 2.0 * Math.PI;
			}

			// Check if within the range of the open/close angle
			var betweenAngles = (angle >= startAngle && angle <= endAngle);
			var withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);

			return (betweenAngles && withinRadius);
		}
		return false;
	},

	getCenterPoint: function() {
		var vm = this._view;
		var halfAngle = (vm.startAngle + vm.endAngle) / 2;
		var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
		return {
			x: vm.x + Math.cos(halfAngle) * halfRadius,
			y: vm.y + Math.sin(halfAngle) * halfRadius
		};
	},

	getArea: function() {
		var vm = this._view;
		return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
	},

	tooltipPosition: function() {
		var vm = this._view;
		var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2);
		var rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;

		return {
			x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
			y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
		};
	},

	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var sA = vm.startAngle;
		var eA = vm.endAngle;

		ctx.beginPath();

		ctx.arc(vm.x, vm.y, vm.outerRadius, sA, eA);
		ctx.arc(vm.x, vm.y, vm.innerRadius, eA, sA, true);

		ctx.closePath();
		ctx.strokeStyle = vm.borderColor;
		ctx.lineWidth = vm.borderWidth;

		ctx.fillStyle = vm.backgroundColor;

		ctx.fill();
		ctx.lineJoin = 'bevel';

		if (vm.borderWidth) {
			ctx.stroke();
		}
	}
});

},{"25":25,"26":26,"45":45}],37:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

var globalDefaults = defaults.global;

defaults._set('global', {
	elements: {
		line: {
			tension: 0.4,
			backgroundColor: globalDefaults.defaultColor,
			borderWidth: 3,
			borderColor: globalDefaults.defaultColor,
			borderCapStyle: 'butt',
			borderDash: [],
			borderDashOffset: 0.0,
			borderJoinStyle: 'miter',
			capBezierPoints: true,
			fill: true, // do we fill in the area between the line and its base axis
		}
	}
});

module.exports = Element.extend({
	draw: function() {
		var me = this;
		var vm = me._view;
		var ctx = me._chart.ctx;
		var spanGaps = vm.spanGaps;
		var points = me._children.slice(); // clone array
		var globalOptionLineElements = globalDefaults.elements.line;
		var lastDrawnIndex = -1;
		var index, current, previous, currentVM;

		// If we are looping, adding the first point again
		if (me._loop && points.length) {
			points.push(points[0]);
		}

		ctx.save();

		// Stroke Line Options
		ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

		// IE 9 and 10 do not support line dash
		if (ctx.setLineDash) {
			ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
		}

		ctx.lineDashOffset = vm.borderDashOffset || globalOptionLineElements.borderDashOffset;
		ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
		ctx.lineWidth = vm.borderWidth || globalOptionLineElements.borderWidth;
		ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;

		// Stroke Line
		ctx.beginPath();
		lastDrawnIndex = -1;

		for (index = 0; index < points.length; ++index) {
			current = points[index];
			previous = helpers.previousItem(points, index);
			currentVM = current._view;

			// First point moves to it's starting position no matter what
			if (index === 0) {
				if (!currentVM.skip) {
					ctx.moveTo(currentVM.x, currentVM.y);
					lastDrawnIndex = index;
				}
			} else {
				previous = lastDrawnIndex === -1 ? previous : points[lastDrawnIndex];

				if (!currentVM.skip) {
					if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
						// There was a gap and this is the first point after the gap
						ctx.moveTo(currentVM.x, currentVM.y);
					} else {
						// Line to next point
						helpers.canvas.lineTo(ctx, previous._view, current._view);
					}
					lastDrawnIndex = index;
				}
			}
		}

		ctx.stroke();
		ctx.restore();
	}
});

},{"25":25,"26":26,"45":45}],38:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

var defaultColor = defaults.global.defaultColor;

defaults._set('global', {
	elements: {
		point: {
			radius: 3,
			pointStyle: 'circle',
			backgroundColor: defaultColor,
			borderColor: defaultColor,
			borderWidth: 1,
			// Hover
			hitRadius: 1,
			hoverRadius: 4,
			hoverBorderWidth: 1
		}
	}
});

function xRange(mouseX) {
	var vm = this._view;
	return vm ? (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
}

function yRange(mouseY) {
	var vm = this._view;
	return vm ? (Math.pow(mouseY - vm.y, 2) < Math.pow(vm.radius + vm.hitRadius, 2)) : false;
}

module.exports = Element.extend({
	inRange: function(mouseX, mouseY) {
		var vm = this._view;
		return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
	},

	inLabelRange: xRange,
	inXRange: xRange,
	inYRange: yRange,

	getCenterPoint: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y
		};
	},

	getArea: function() {
		return Math.PI * Math.pow(this._view.radius, 2);
	},

	tooltipPosition: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y,
			padding: vm.radius + vm.borderWidth
		};
	},

	draw: function(chartArea) {
		var vm = this._view;
		var model = this._model;
		var ctx = this._chart.ctx;
		var pointStyle = vm.pointStyle;
		var radius = vm.radius;
		var x = vm.x;
		var y = vm.y;
		var color = helpers.color;
		var errMargin = 1.01; // 1.01 is margin for Accumulated error. (Especially Edge, IE.)
		var ratio = 0;

		if (vm.skip) {
			return;
		}

		ctx.strokeStyle = vm.borderColor || defaultColor;
		ctx.lineWidth = helpers.valueOrDefault(vm.borderWidth, defaults.global.elements.point.borderWidth);
		ctx.fillStyle = vm.backgroundColor || defaultColor;

		// Cliping for Points.
		// going out from inner charArea?
		if ((chartArea !== undefined) && ((model.x < chartArea.left) || (chartArea.right * errMargin < model.x) || (model.y < chartArea.top) || (chartArea.bottom * errMargin < model.y))) {
			// Point fade out
			if (model.x < chartArea.left) {
				ratio = (x - model.x) / (chartArea.left - model.x);
			} else if (chartArea.right * errMargin < model.x) {
				ratio = (model.x - x) / (model.x - chartArea.right);
			} else if (model.y < chartArea.top) {
				ratio = (y - model.y) / (chartArea.top - model.y);
			} else if (chartArea.bottom * errMargin < model.y) {
				ratio = (model.y - y) / (model.y - chartArea.bottom);
			}
			ratio = Math.round(ratio * 100) / 100;
			ctx.strokeStyle = color(ctx.strokeStyle).alpha(ratio).rgbString();
			ctx.fillStyle = color(ctx.fillStyle).alpha(ratio).rgbString();
		}

		helpers.canvas.drawPoint(ctx, pointStyle, radius, x, y);
	}
});

},{"25":25,"26":26,"45":45}],39:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);

defaults._set('global', {
	elements: {
		rectangle: {
			backgroundColor: defaults.global.defaultColor,
			borderColor: defaults.global.defaultColor,
			borderSkipped: 'bottom',
			borderWidth: 0
		}
	}
});

function isVertical(bar) {
	return bar._view.width !== undefined;
}

/**
 * Helper function to get the bounds of the bar regardless of the orientation
 * @param bar {Chart.Element.Rectangle} the bar
 * @return {Bounds} bounds of the bar
 * @private
 */
function getBarBounds(bar) {
	var vm = bar._view;
	var x1, x2, y1, y2;

	if (isVertical(bar)) {
		// vertical
		var halfWidth = vm.width / 2;
		x1 = vm.x - halfWidth;
		x2 = vm.x + halfWidth;
		y1 = Math.min(vm.y, vm.base);
		y2 = Math.max(vm.y, vm.base);
	} else {
		// horizontal bar
		var halfHeight = vm.height / 2;
		x1 = Math.min(vm.x, vm.base);
		x2 = Math.max(vm.x, vm.base);
		y1 = vm.y - halfHeight;
		y2 = vm.y + halfHeight;
	}

	return {
		left: x1,
		top: y1,
		right: x2,
		bottom: y2
	};
}

module.exports = Element.extend({
	draw: function() {
		var ctx = this._chart.ctx;
		var vm = this._view;
		var left, right, top, bottom, signX, signY, borderSkipped;
		var borderWidth = vm.borderWidth;

		if (!vm.horizontal) {
			// bar
			left = vm.x - vm.width / 2;
			right = vm.x + vm.width / 2;
			top = vm.y;
			bottom = vm.base;
			signX = 1;
			signY = bottom > top ? 1 : -1;
			borderSkipped = vm.borderSkipped || 'bottom';
		} else {
			// horizontal bar
			left = vm.base;
			right = vm.x;
			top = vm.y - vm.height / 2;
			bottom = vm.y + vm.height / 2;
			signX = right > left ? 1 : -1;
			signY = 1;
			borderSkipped = vm.borderSkipped || 'left';
		}

		// Canvas doesn't allow us to stroke inside the width so we can
		// adjust the sizes to fit if we're setting a stroke on the line
		if (borderWidth) {
			// borderWidth shold be less than bar width and bar height.
			var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
			borderWidth = borderWidth > barSize ? barSize : borderWidth;
			var halfStroke = borderWidth / 2;
			// Adjust borderWidth when bar top position is near vm.base(zero).
			var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
			var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
			var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
			var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
			// not become a vertical line?
			if (borderLeft !== borderRight) {
				top = borderTop;
				bottom = borderBottom;
			}
			// not become a horizontal line?
			if (borderTop !== borderBottom) {
				left = borderLeft;
				right = borderRight;
			}
		}

		ctx.beginPath();
		ctx.fillStyle = vm.backgroundColor;
		ctx.strokeStyle = vm.borderColor;
		ctx.lineWidth = borderWidth;

		// Corner points, from bottom-left to bottom-right clockwise
		// | 1 2 |
		// | 0 3 |
		var corners = [
			[left, bottom],
			[left, top],
			[right, top],
			[right, bottom]
		];

		// Find first (starting) corner with fallback to 'bottom'
		var borders = ['bottom', 'left', 'top', 'right'];
		var startCorner = borders.indexOf(borderSkipped, 0);
		if (startCorner === -1) {
			startCorner = 0;
		}

		function cornerAt(index) {
			return corners[(startCorner + index) % 4];
		}

		// Draw rectangle from 'startCorner'
		var corner = cornerAt(0);
		ctx.moveTo(corner[0], corner[1]);

		for (var i = 1; i < 4; i++) {
			corner = cornerAt(i);
			ctx.lineTo(corner[0], corner[1]);
		}

		ctx.fill();
		if (borderWidth) {
			ctx.stroke();
		}
	},

	height: function() {
		var vm = this._view;
		return vm.base - vm.y;
	},

	inRange: function(mouseX, mouseY) {
		var inRange = false;

		if (this._view) {
			var bounds = getBarBounds(this);
			inRange = mouseX >= bounds.left && mouseX <= bounds.right && mouseY >= bounds.top && mouseY <= bounds.bottom;
		}

		return inRange;
	},

	inLabelRange: function(mouseX, mouseY) {
		var me = this;
		if (!me._view) {
			return false;
		}

		var inRange = false;
		var bounds = getBarBounds(me);

		if (isVertical(me)) {
			inRange = mouseX >= bounds.left && mouseX <= bounds.right;
		} else {
			inRange = mouseY >= bounds.top && mouseY <= bounds.bottom;
		}

		return inRange;
	},

	inXRange: function(mouseX) {
		var bounds = getBarBounds(this);
		return mouseX >= bounds.left && mouseX <= bounds.right;
	},

	inYRange: function(mouseY) {
		var bounds = getBarBounds(this);
		return mouseY >= bounds.top && mouseY <= bounds.bottom;
	},

	getCenterPoint: function() {
		var vm = this._view;
		var x, y;
		if (isVertical(this)) {
			x = vm.x;
			y = (vm.y + vm.base) / 2;
		} else {
			x = (vm.x + vm.base) / 2;
			y = vm.y;
		}

		return {x: x, y: y};
	},

	getArea: function() {
		var vm = this._view;
		return vm.width * Math.abs(vm.y - vm.base);
	},

	tooltipPosition: function() {
		var vm = this._view;
		return {
			x: vm.x,
			y: vm.y
		};
	}
});

},{"25":25,"26":26}],40:[function(require,module,exports){
'use strict';

module.exports = {};
module.exports.Arc = require(36);
module.exports.Line = require(37);
module.exports.Point = require(38);
module.exports.Rectangle = require(39);

},{"36":36,"37":37,"38":38,"39":39}],41:[function(require,module,exports){
'use strict';

var helpers = require(42);

/**
 * @namespace Chart.helpers.canvas
 */
var exports = module.exports = {
	/**
	 * Clears the entire canvas associated to the given `chart`.
	 * @param {Chart} chart - The chart for which to clear the canvas.
	 */
	clear: function(chart) {
		chart.ctx.clearRect(0, 0, chart.width, chart.height);
	},

	/**
	 * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
	 * given size (width, height) and the same `radius` for all corners.
	 * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
	 * @param {Number} x - The x axis of the coordinate for the rectangle starting point.
	 * @param {Number} y - The y axis of the coordinate for the rectangle starting point.
	 * @param {Number} width - The rectangle's width.
	 * @param {Number} height - The rectangle's height.
	 * @param {Number} radius - The rounded amount (in pixels) for the four corners.
	 * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
	 */
	roundedRect: function(ctx, x, y, width, height, radius) {
		if (radius) {
			var rx = Math.min(radius, width / 2);
			var ry = Math.min(radius, height / 2);

			ctx.moveTo(x + rx, y);
			ctx.lineTo(x + width - rx, y);
			ctx.quadraticCurveTo(x + width, y, x + width, y + ry);
			ctx.lineTo(x + width, y + height - ry);
			ctx.quadraticCurveTo(x + width, y + height, x + width - rx, y + height);
			ctx.lineTo(x + rx, y + height);
			ctx.quadraticCurveTo(x, y + height, x, y + height - ry);
			ctx.lineTo(x, y + ry);
			ctx.quadraticCurveTo(x, y, x + rx, y);
		} else {
			ctx.rect(x, y, width, height);
		}
	},

	drawPoint: function(ctx, style, radius, x, y) {
		var type, edgeLength, xOffset, yOffset, height, size;

		if (style && typeof style === 'object') {
			type = style.toString();
			if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
				ctx.drawImage(style, x - style.width / 2, y - style.height / 2, style.width, style.height);
				return;
			}
		}

		if (isNaN(radius) || radius <= 0) {
			return;
		}

		switch (style) {
		// Default includes circle
		default:
			ctx.beginPath();
			ctx.arc(x, y, radius, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fill();
			break;
		case 'triangle':
			ctx.beginPath();
			edgeLength = 3 * radius / Math.sqrt(3);
			height = edgeLength * Math.sqrt(3) / 2;
			ctx.moveTo(x - edgeLength / 2, y + height / 3);
			ctx.lineTo(x + edgeLength / 2, y + height / 3);
			ctx.lineTo(x, y - 2 * height / 3);
			ctx.closePath();
			ctx.fill();
			break;
		case 'rect':
			size = 1 / Math.SQRT2 * radius;
			ctx.beginPath();
			ctx.fillRect(x - size, y - size, 2 * size, 2 * size);
			ctx.strokeRect(x - size, y - size, 2 * size, 2 * size);
			break;
		case 'rectRounded':
			var offset = radius / Math.SQRT2;
			var leftX = x - offset;
			var topY = y - offset;
			var sideSize = Math.SQRT2 * radius;
			ctx.beginPath();
			this.roundedRect(ctx, leftX, topY, sideSize, sideSize, radius / 2);
			ctx.closePath();
			ctx.fill();
			break;
		case 'rectRot':
			size = 1 / Math.SQRT2 * radius;
			ctx.beginPath();
			ctx.moveTo(x - size, y);
			ctx.lineTo(x, y + size);
			ctx.lineTo(x + size, y);
			ctx.lineTo(x, y - size);
			ctx.closePath();
			ctx.fill();
			break;
		case 'cross':
			ctx.beginPath();
			ctx.moveTo(x, y + radius);
			ctx.lineTo(x, y - radius);
			ctx.moveTo(x - radius, y);
			ctx.lineTo(x + radius, y);
			ctx.closePath();
			break;
		case 'crossRot':
			ctx.beginPath();
			xOffset = Math.cos(Math.PI / 4) * radius;
			yOffset = Math.sin(Math.PI / 4) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x - xOffset, y + yOffset);
			ctx.lineTo(x + xOffset, y - yOffset);
			ctx.closePath();
			break;
		case 'star':
			ctx.beginPath();
			ctx.moveTo(x, y + radius);
			ctx.lineTo(x, y - radius);
			ctx.moveTo(x - radius, y);
			ctx.lineTo(x + radius, y);
			xOffset = Math.cos(Math.PI / 4) * radius;
			yOffset = Math.sin(Math.PI / 4) * radius;
			ctx.moveTo(x - xOffset, y - yOffset);
			ctx.lineTo(x + xOffset, y + yOffset);
			ctx.moveTo(x - xOffset, y + yOffset);
			ctx.lineTo(x + xOffset, y - yOffset);
			ctx.closePath();
			break;
		case 'line':
			ctx.beginPath();
			ctx.moveTo(x - radius, y);
			ctx.lineTo(x + radius, y);
			ctx.closePath();
			break;
		case 'dash':
			ctx.beginPath();
			ctx.moveTo(x, y);
			ctx.lineTo(x + radius, y);
			ctx.closePath();
			break;
		}

		ctx.stroke();
	},

	clipArea: function(ctx, area) {
		ctx.save();
		ctx.beginPath();
		ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
		ctx.clip();
	},

	unclipArea: function(ctx) {
		ctx.restore();
	},

	lineTo: function(ctx, previous, target, flip) {
		if (target.steppedLine) {
			if ((target.steppedLine === 'after' && !flip) || (target.steppedLine !== 'after' && flip)) {
				ctx.lineTo(previous.x, target.y);
			} else {
				ctx.lineTo(target.x, previous.y);
			}
			ctx.lineTo(target.x, target.y);
			return;
		}

		if (!target.tension) {
			ctx.lineTo(target.x, target.y);
			return;
		}

		ctx.bezierCurveTo(
			flip ? previous.controlPointPreviousX : previous.controlPointNextX,
			flip ? previous.controlPointPreviousY : previous.controlPointNextY,
			flip ? target.controlPointNextX : target.controlPointPreviousX,
			flip ? target.controlPointNextY : target.controlPointPreviousY,
			target.x,
			target.y);
	}
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
 * @namespace Chart.helpers.clear
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.clear = exports.clear;

/**
 * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
 * @namespace Chart.helpers.drawRoundedRectangle
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.drawRoundedRectangle = function(ctx) {
	ctx.beginPath();
	exports.roundedRect.apply(exports, arguments);
	ctx.closePath();
};

},{"42":42}],42:[function(require,module,exports){
'use strict';

/**
 * @namespace Chart.helpers
 */
var helpers = {
	/**
	 * An empty function that can be used, for example, for optional callback.
	 */
	noop: function() {},

	/**
	 * Returns a unique id, sequentially generated from a global variable.
	 * @returns {Number}
	 * @function
	 */
	uid: (function() {
		var id = 0;
		return function() {
			return id++;
		};
	}()),

	/**
	 * Returns true if `value` is neither null nor undefined, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @since 2.7.0
	 */
	isNullOrUndef: function(value) {
		return value === null || typeof value === 'undefined';
	},

	/**
	 * Returns true if `value` is an array, else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @function
	 */
	isArray: Array.isArray ? Array.isArray : function(value) {
		return Object.prototype.toString.call(value) === '[object Array]';
	},

	/**
	 * Returns true if `value` is an object (excluding null), else returns false.
	 * @param {*} value - The value to test.
	 * @returns {Boolean}
	 * @since 2.7.0
	 */
	isObject: function(value) {
		return value !== null && Object.prototype.toString.call(value) === '[object Object]';
	},

	/**
	 * Returns `value` if defined, else returns `defaultValue`.
	 * @param {*} value - The value to return if defined.
	 * @param {*} defaultValue - The value to return if `value` is undefined.
	 * @returns {*}
	 */
	valueOrDefault: function(value, defaultValue) {
		return typeof value === 'undefined' ? defaultValue : value;
	},

	/**
	 * Returns value at the given `index` in array if defined, else returns `defaultValue`.
	 * @param {Array} value - The array to lookup for value at `index`.
	 * @param {Number} index - The index in `value` to lookup for value.
	 * @param {*} defaultValue - The value to return if `value[index]` is undefined.
	 * @returns {*}
	 */
	valueAtIndexOrDefault: function(value, index, defaultValue) {
		return helpers.valueOrDefault(helpers.isArray(value) ? value[index] : value, defaultValue);
	},

	/**
	 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
	 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
	 * @param {Function} fn - The function to call.
	 * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
	 * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @returns {*}
	 */
	callback: function(fn, args, thisArg) {
		if (fn && typeof fn.call === 'function') {
			return fn.apply(thisArg, args);
		}
	},

	/**
	 * Note(SB) for performance sake, this method should only be used when loopable type
	 * is unknown or in none intensive code (not called often and small loopable). Else
	 * it's preferable to use a regular for() loop and save extra function calls.
	 * @param {Object|Array} loopable - The object or array to be iterated.
	 * @param {Function} fn - The function to call for each item.
	 * @param {Object} [thisArg] - The value of `this` provided for the call to `fn`.
	 * @param {Boolean} [reverse] - If true, iterates backward on the loopable.
	 */
	each: function(loopable, fn, thisArg, reverse) {
		var i, len, keys;
		if (helpers.isArray(loopable)) {
			len = loopable.length;
			if (reverse) {
				for (i = len - 1; i >= 0; i--) {
					fn.call(thisArg, loopable[i], i);
				}
			} else {
				for (i = 0; i < len; i++) {
					fn.call(thisArg, loopable[i], i);
				}
			}
		} else if (helpers.isObject(loopable)) {
			keys = Object.keys(loopable);
			len = keys.length;
			for (i = 0; i < len; i++) {
				fn.call(thisArg, loopable[keys[i]], keys[i]);
			}
		}
	},

	/**
	 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
	 * @see http://stackoverflow.com/a/14853974
	 * @param {Array} a0 - The array to compare
	 * @param {Array} a1 - The array to compare
	 * @returns {Boolean}
	 */
	arrayEquals: function(a0, a1) {
		var i, ilen, v0, v1;

		if (!a0 || !a1 || a0.length !== a1.length) {
			return false;
		}

		for (i = 0, ilen = a0.length; i < ilen; ++i) {
			v0 = a0[i];
			v1 = a1[i];

			if (v0 instanceof Array && v1 instanceof Array) {
				if (!helpers.arrayEquals(v0, v1)) {
					return false;
				}
			} else if (v0 !== v1) {
				// NOTE: two different object instances will never be equal: {x:20} != {x:20}
				return false;
			}
		}

		return true;
	},

	/**
	 * Returns a deep copy of `source` without keeping references on objects and arrays.
	 * @param {*} source - The value to clone.
	 * @returns {*}
	 */
	clone: function(source) {
		if (helpers.isArray(source)) {
			return source.map(helpers.clone);
		}

		if (helpers.isObject(source)) {
			var target = {};
			var keys = Object.keys(source);
			var klen = keys.length;
			var k = 0;

			for (; k < klen; ++k) {
				target[keys[k]] = helpers.clone(source[keys[k]]);
			}

			return target;
		}

		return source;
	},

	/**
	 * The default merger when Chart.helpers.merge is called without merger option.
	 * Note(SB): this method is also used by configMerge and scaleMerge as fallback.
	 * @private
	 */
	_merger: function(key, target, source, options) {
		var tval = target[key];
		var sval = source[key];

		if (helpers.isObject(tval) && helpers.isObject(sval)) {
			helpers.merge(tval, sval, options);
		} else {
			target[key] = helpers.clone(sval);
		}
	},

	/**
	 * Merges source[key] in target[key] only if target[key] is undefined.
	 * @private
	 */
	_mergerIf: function(key, target, source) {
		var tval = target[key];
		var sval = source[key];

		if (helpers.isObject(tval) && helpers.isObject(sval)) {
			helpers.mergeIf(tval, sval);
		} else if (!target.hasOwnProperty(key)) {
			target[key] = helpers.clone(sval);
		}
	},

	/**
	 * Recursively deep copies `source` properties into `target` with the given `options`.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {Object} target - The target object in which all sources are merged into.
	 * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
	 * @param {Object} [options] - Merging options:
	 * @param {Function} [options.merger] - The merge method (key, target, source, options)
	 * @returns {Object} The `target` object.
	 */
	merge: function(target, source, options) {
		var sources = helpers.isArray(source) ? source : [source];
		var ilen = sources.length;
		var merge, i, keys, klen, k;

		if (!helpers.isObject(target)) {
			return target;
		}

		options = options || {};
		merge = options.merger || helpers._merger;

		for (i = 0; i < ilen; ++i) {
			source = sources[i];
			if (!helpers.isObject(source)) {
				continue;
			}

			keys = Object.keys(source);
			for (k = 0, klen = keys.length; k < klen; ++k) {
				merge(keys[k], target, source, options);
			}
		}

		return target;
	},

	/**
	 * Recursively deep copies `source` properties into `target` *only* if not defined in target.
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	 * @param {Object} target - The target object in which all sources are merged into.
	 * @param {Object|Array(Object)} source - Object(s) to merge into `target`.
	 * @returns {Object} The `target` object.
	 */
	mergeIf: function(target, source) {
		return helpers.merge(target, source, {merger: helpers._mergerIf});
	},

	/**
	 * Applies the contents of two or more objects together into the first object.
	 * @param {Object} target - The target object in which all objects are merged into.
	 * @param {Object} arg1 - Object containing additional properties to merge in target.
	 * @param {Object} argN - Additional objects containing properties to merge in target.
	 * @returns {Object} The `target` object.
	 */
	extend: function(target) {
		var setFn = function(value, key) {
			target[key] = value;
		};
		for (var i = 1, ilen = arguments.length; i < ilen; ++i) {
			helpers.each(arguments[i], setFn);
		}
		return target;
	},

	/**
	 * Basic javascript inheritance based on the model created in Backbone.js
	 */
	inherits: function(extensions) {
		var me = this;
		var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
			return me.apply(this, arguments);
		};

		var Surrogate = function() {
			this.constructor = ChartElement;
		};

		Surrogate.prototype = me.prototype;
		ChartElement.prototype = new Surrogate();
		ChartElement.extend = helpers.inherits;

		if (extensions) {
			helpers.extend(ChartElement.prototype, extensions);
		}

		ChartElement.__super__ = me.prototype;
		return ChartElement;
	}
};

module.exports = helpers;

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.callback instead.
 * @function Chart.helpers.callCallback
 * @deprecated since version 2.6.0
 * @todo remove at version 3
 * @private
 */
helpers.callCallback = helpers.callback;

/**
 * Provided for backward compatibility, use Array.prototype.indexOf instead.
 * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
 * @function Chart.helpers.indexOf
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.indexOf = function(array, item, fromIndex) {
	return Array.prototype.indexOf.call(array, item, fromIndex);
};

/**
 * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
 * @function Chart.helpers.getValueOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.getValueOrDefault = helpers.valueOrDefault;

/**
 * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
 * @function Chart.helpers.getValueAtIndexOrDefault
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.getValueAtIndexOrDefault = helpers.valueAtIndexOrDefault;

},{}],43:[function(require,module,exports){
'use strict';

var helpers = require(42);

/**
 * Easing functions adapted from Robert Penner's easing equations.
 * @namespace Chart.helpers.easingEffects
 * @see http://www.robertpenner.com/easing/
 */
var effects = {
	linear: function(t) {
		return t;
	},

	easeInQuad: function(t) {
		return t * t;
	},

	easeOutQuad: function(t) {
		return -t * (t - 2);
	},

	easeInOutQuad: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t;
		}
		return -0.5 * ((--t) * (t - 2) - 1);
	},

	easeInCubic: function(t) {
		return t * t * t;
	},

	easeOutCubic: function(t) {
		return (t = t - 1) * t * t + 1;
	},

	easeInOutCubic: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t;
		}
		return 0.5 * ((t -= 2) * t * t + 2);
	},

	easeInQuart: function(t) {
		return t * t * t * t;
	},

	easeOutQuart: function(t) {
		return -((t = t - 1) * t * t * t - 1);
	},

	easeInOutQuart: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t * t;
		}
		return -0.5 * ((t -= 2) * t * t * t - 2);
	},

	easeInQuint: function(t) {
		return t * t * t * t * t;
	},

	easeOutQuint: function(t) {
		return (t = t - 1) * t * t * t * t + 1;
	},

	easeInOutQuint: function(t) {
		if ((t /= 0.5) < 1) {
			return 0.5 * t * t * t * t * t;
		}
		return 0.5 * ((t -= 2) * t * t * t * t + 2);
	},

	easeInSine: function(t) {
		return -Math.cos(t * (Math.PI / 2)) + 1;
	},

	easeOutSine: function(t) {
		return Math.sin(t * (Math.PI / 2));
	},

	easeInOutSine: function(t) {
		return -0.5 * (Math.cos(Math.PI * t) - 1);
	},

	easeInExpo: function(t) {
		return (t === 0) ? 0 : Math.pow(2, 10 * (t - 1));
	},

	easeOutExpo: function(t) {
		return (t === 1) ? 1 : -Math.pow(2, -10 * t) + 1;
	},

	easeInOutExpo: function(t) {
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if ((t /= 0.5) < 1) {
			return 0.5 * Math.pow(2, 10 * (t - 1));
		}
		return 0.5 * (-Math.pow(2, -10 * --t) + 2);
	},

	easeInCirc: function(t) {
		if (t >= 1) {
			return t;
		}
		return -(Math.sqrt(1 - t * t) - 1);
	},

	easeOutCirc: function(t) {
		return Math.sqrt(1 - (t = t - 1) * t);
	},

	easeInOutCirc: function(t) {
		if ((t /= 0.5) < 1) {
			return -0.5 * (Math.sqrt(1 - t * t) - 1);
		}
		return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	},

	easeInElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if (!p) {
			p = 0.3;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
	},

	easeOutElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if (t === 1) {
			return 1;
		}
		if (!p) {
			p = 0.3;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
	},

	easeInOutElastic: function(t) {
		var s = 1.70158;
		var p = 0;
		var a = 1;
		if (t === 0) {
			return 0;
		}
		if ((t /= 0.5) === 2) {
			return 1;
		}
		if (!p) {
			p = 0.45;
		}
		if (a < 1) {
			a = 1;
			s = p / 4;
		} else {
			s = p / (2 * Math.PI) * Math.asin(1 / a);
		}
		if (t < 1) {
			return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
		}
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
	},
	easeInBack: function(t) {
		var s = 1.70158;
		return t * t * ((s + 1) * t - s);
	},

	easeOutBack: function(t) {
		var s = 1.70158;
		return (t = t - 1) * t * ((s + 1) * t + s) + 1;
	},

	easeInOutBack: function(t) {
		var s = 1.70158;
		if ((t /= 0.5) < 1) {
			return 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s));
		}
		return 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
	},

	easeInBounce: function(t) {
		return 1 - effects.easeOutBounce(1 - t);
	},

	easeOutBounce: function(t) {
		if (t < (1 / 2.75)) {
			return 7.5625 * t * t;
		}
		if (t < (2 / 2.75)) {
			return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
		}
		if (t < (2.5 / 2.75)) {
			return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
		}
		return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;
	},

	easeInOutBounce: function(t) {
		if (t < 0.5) {
			return effects.easeInBounce(t * 2) * 0.5;
		}
		return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
	}
};

module.exports = {
	effects: effects
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
 * @function Chart.helpers.easingEffects
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.easingEffects = effects;

},{"42":42}],44:[function(require,module,exports){
'use strict';

var helpers = require(42);

/**
 * @alias Chart.helpers.options
 * @namespace
 */
module.exports = {
	/**
	 * Converts the given line height `value` in pixels for a specific font `size`.
	 * @param {Number|String} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
	 * @param {Number} size - The font size (in pixels) used to resolve relative `value`.
	 * @returns {Number} The effective line height in pixels (size * 1.2 if value is invalid).
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
	 * @since 2.7.0
	 */
	toLineHeight: function(value, size) {
		var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
		if (!matches || matches[1] === 'normal') {
			return size * 1.2;
		}

		value = +matches[2];

		switch (matches[3]) {
		case 'px':
			return value;
		case '%':
			value /= 100;
			break;
		default:
			break;
		}

		return size * value;
	},

	/**
	 * Converts the given value into a padding object with pre-computed width/height.
	 * @param {Number|Object} value - If a number, set the value to all TRBL component,
	 *  else, if and object, use defined properties and sets undefined ones to 0.
	 * @returns {Object} The padding values (top, right, bottom, left, width, height)
	 * @since 2.7.0
	 */
	toPadding: function(value) {
		var t, r, b, l;

		if (helpers.isObject(value)) {
			t = +value.top || 0;
			r = +value.right || 0;
			b = +value.bottom || 0;
			l = +value.left || 0;
		} else {
			t = r = b = l = +value || 0;
		}

		return {
			top: t,
			right: r,
			bottom: b,
			left: l,
			height: t + b,
			width: l + r
		};
	},

	/**
	 * Evaluates the given `inputs` sequentially and returns the first defined value.
	 * @param {Array[]} inputs - An array of values, falling back to the last value.
	 * @param {Object} [context] - If defined and the current value is a function, the value
	 * is called with `context` as first argument and the result becomes the new input.
	 * @param {Number} [index] - If defined and the current value is an array, the value
	 * at `index` become the new input.
	 * @since 2.7.0
	 */
	resolve: function(inputs, context, index) {
		var i, ilen, value;

		for (i = 0, ilen = inputs.length; i < ilen; ++i) {
			value = inputs[i];
			if (value === undefined) {
				continue;
			}
			if (context !== undefined && typeof value === 'function') {
				value = value(context);
			}
			if (index !== undefined && helpers.isArray(value)) {
				value = value[index];
			}
			if (value !== undefined) {
				return value;
			}
		}
	}
};

},{"42":42}],45:[function(require,module,exports){
'use strict';

module.exports = require(42);
module.exports.easing = require(43);
module.exports.canvas = require(41);
module.exports.options = require(44);

},{"41":41,"42":42,"43":43,"44":44}],46:[function(require,module,exports){
/**
 * Platform fallback implementation (minimal).
 * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
 */

module.exports = {
	acquireContext: function(item) {
		if (item && item.canvas) {
			// Support for any object associated to a canvas (including a context2d)
			item = item.canvas;
		}

		return item && item.getContext('2d') || null;
	}
};

},{}],47:[function(require,module,exports){
/**
 * Chart.Platform implementation for targeting a web browser
 */

'use strict';

var helpers = require(45);

var EXPANDO_KEY = '$chartjs';
var CSS_PREFIX = 'chartjs-';
var CSS_RENDER_MONITOR = CSS_PREFIX + 'render-monitor';
var CSS_RENDER_ANIMATION = CSS_PREFIX + 'render-animation';
var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart'];

/**
 * DOM event types -> Chart.js event types.
 * Note: only events with different types are mapped.
 * @see https://developer.mozilla.org/en-US/docs/Web/Events
 */
var EVENT_TYPES = {
	touchstart: 'mousedown',
	touchmove: 'mousemove',
	touchend: 'mouseup',
	pointerenter: 'mouseenter',
	pointerdown: 'mousedown',
	pointermove: 'mousemove',
	pointerup: 'mouseup',
	pointerleave: 'mouseout',
	pointerout: 'mouseout'
};

/**
 * The "used" size is the final value of a dimension property after all calculations have
 * been performed. This method uses the computed style of `element` but returns undefined
 * if the computed style is not expressed in pixels. That can happen in some cases where
 * `element` has a size relative to its parent and this last one is not yet displayed,
 * for example because of `display: none` on a parent node.
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
 * @returns {Number} Size in pixels or undefined if unknown.
 */
function readUsedSize(element, property) {
	var value = helpers.getStyle(element, property);
	var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
	return matches ? Number(matches[1]) : undefined;
}

/**
 * Initializes the canvas style and render size without modifying the canvas display size,
 * since responsiveness is handled by the controller.resize() method. The config is used
 * to determine the aspect ratio to apply in case no explicit height has been specified.
 */
function initCanvas(canvas, config) {
	var style = canvas.style;

	// NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
	// returns null or '' if no explicit value has been set to the canvas attribute.
	var renderHeight = canvas.getAttribute('height');
	var renderWidth = canvas.getAttribute('width');

	// Chart.js modifies some canvas values that we want to restore on destroy
	canvas[EXPANDO_KEY] = {
		initial: {
			height: renderHeight,
			width: renderWidth,
			style: {
				display: style.display,
				height: style.height,
				width: style.width
			}
		}
	};

	// Force canvas to display as block to avoid extra space caused by inline
	// elements, which would interfere with the responsive resize process.
	// https://github.com/chartjs/Chart.js/issues/2538
	style.display = style.display || 'block';

	if (renderWidth === null || renderWidth === '') {
		var displayWidth = readUsedSize(canvas, 'width');
		if (displayWidth !== undefined) {
			canvas.width = displayWidth;
		}
	}

	if (renderHeight === null || renderHeight === '') {
		if (canvas.style.height === '') {
			// If no explicit render height and style height, let's apply the aspect ratio,
			// which one can be specified by the user but also by charts as default option
			// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
			canvas.height = canvas.width / (config.options.aspectRatio || 2);
		} else {
			var displayHeight = readUsedSize(canvas, 'height');
			if (displayWidth !== undefined) {
				canvas.height = displayHeight;
			}
		}
	}

	return canvas;
}

/**
 * Detects support for options object argument in addEventListener.
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
 * @private
 */
var supportsEventListenerOptions = (function() {
	var supports = false;
	try {
		var options = Object.defineProperty({}, 'passive', {
			get: function() {
				supports = true;
			}
		});
		window.addEventListener('e', null, options);
	} catch (e) {
		// continue regardless of error
	}
	return supports;
}());

// Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
// https://github.com/chartjs/Chart.js/issues/4287
var eventListenerOptions = supportsEventListenerOptions ? {passive: true} : false;

function addEventListener(node, type, listener) {
	node.addEventListener(type, listener, eventListenerOptions);
}

function removeEventListener(node, type, listener) {
	node.removeEventListener(type, listener, eventListenerOptions);
}

function createEvent(type, chart, x, y, nativeEvent) {
	return {
		type: type,
		chart: chart,
		native: nativeEvent || null,
		x: x !== undefined ? x : null,
		y: y !== undefined ? y : null,
	};
}

function fromNativeEvent(event, chart) {
	var type = EVENT_TYPES[event.type] || event.type;
	var pos = helpers.getRelativePosition(event, chart);
	return createEvent(type, chart, pos.x, pos.y, event);
}

function throttled(fn, thisArg) {
	var ticking = false;
	var args = [];

	return function() {
		args = Array.prototype.slice.call(arguments);
		thisArg = thisArg || this;

		if (!ticking) {
			ticking = true;
			helpers.requestAnimFrame.call(window, function() {
				ticking = false;
				fn.apply(thisArg, args);
			});
		}
	};
}

// Implementation based on https://github.com/marcj/css-element-queries
function createResizer(handler) {
	var resizer = document.createElement('div');
	var cls = CSS_PREFIX + 'size-monitor';
	var maxSize = 1000000;
	var style =
		'position:absolute;' +
		'left:0;' +
		'top:0;' +
		'right:0;' +
		'bottom:0;' +
		'overflow:hidden;' +
		'pointer-events:none;' +
		'visibility:hidden;' +
		'z-index:-1;';

	resizer.style.cssText = style;
	resizer.className = cls;
	resizer.innerHTML =
		'<div class="' + cls + '-expand" style="' + style + '">' +
			'<div style="' +
				'position:absolute;' +
				'width:' + maxSize + 'px;' +
				'height:' + maxSize + 'px;' +
				'left:0;' +
				'top:0">' +
			'</div>' +
		'</div>' +
		'<div class="' + cls + '-shrink" style="' + style + '">' +
			'<div style="' +
				'position:absolute;' +
				'width:200%;' +
				'height:200%;' +
				'left:0; ' +
				'top:0">' +
			'</div>' +
		'</div>';

	var expand = resizer.childNodes[0];
	var shrink = resizer.childNodes[1];

	resizer._reset = function() {
		expand.scrollLeft = maxSize;
		expand.scrollTop = maxSize;
		shrink.scrollLeft = maxSize;
		shrink.scrollTop = maxSize;
	};
	var onScroll = function() {
		resizer._reset();
		handler();
	};

	addEventListener(expand, 'scroll', onScroll.bind(expand, 'expand'));
	addEventListener(shrink, 'scroll', onScroll.bind(shrink, 'shrink'));

	return resizer;
}

// https://davidwalsh.name/detect-node-insertion
function watchForRender(node, handler) {
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});
	var proxy = expando.renderProxy = function(e) {
		if (e.animationName === CSS_RENDER_ANIMATION) {
			handler();
		}
	};

	helpers.each(ANIMATION_START_EVENTS, function(type) {
		addEventListener(node, type, proxy);
	});

	// #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
	// is removed then added back immediately (same animation frame?). Accessing the
	// `offsetParent` property will force a reflow and re-evaluate the CSS animation.
	// https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
	// https://github.com/chartjs/Chart.js/issues/4737
	expando.reflow = !!node.offsetParent;

	node.classList.add(CSS_RENDER_MONITOR);
}

function unwatchForRender(node) {
	var expando = node[EXPANDO_KEY] || {};
	var proxy = expando.renderProxy;

	if (proxy) {
		helpers.each(ANIMATION_START_EVENTS, function(type) {
			removeEventListener(node, type, proxy);
		});

		delete expando.renderProxy;
	}

	node.classList.remove(CSS_RENDER_MONITOR);
}

function addResizeListener(node, listener, chart) {
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});

	// Let's keep track of this added resizer and thus avoid DOM query when removing it.
	var resizer = expando.resizer = createResizer(throttled(function() {
		if (expando.resizer) {
			return listener(createEvent('resize', chart));
		}
	}));

	// The resizer needs to be attached to the node parent, so we first need to be
	// sure that `node` is attached to the DOM before injecting the resizer element.
	watchForRender(node, function() {
		if (expando.resizer) {
			var container = node.parentNode;
			if (container && container !== resizer.parentNode) {
				container.insertBefore(resizer, container.firstChild);
			}

			// The container size might have changed, let's reset the resizer state.
			resizer._reset();
		}
	});
}

function removeResizeListener(node) {
	var expando = node[EXPANDO_KEY] || {};
	var resizer = expando.resizer;

	delete expando.resizer;
	unwatchForRender(node);

	if (resizer && resizer.parentNode) {
		resizer.parentNode.removeChild(resizer);
	}
}

function injectCSS(platform, css) {
	// http://stackoverflow.com/q/3922139
	var style = platform._style || document.createElement('style');
	if (!platform._style) {
		platform._style = style;
		css = '/* Chart.js */\n' + css;
		style.setAttribute('type', 'text/css');
		document.getElementsByTagName('head')[0].appendChild(style);
	}

	style.appendChild(document.createTextNode(css));
}

module.exports = {
	/**
	 * This property holds whether this platform is enabled for the current environment.
	 * Currently used by platform.js to select the proper implementation.
	 * @private
	 */
	_enabled: typeof window !== 'undefined' && typeof document !== 'undefined',

	initialize: function() {
		var keyframes = 'from{opacity:0.99}to{opacity:1}';

		injectCSS(this,
			// DOM rendering detection
			// https://davidwalsh.name/detect-node-insertion
			'@-webkit-keyframes ' + CSS_RENDER_ANIMATION + '{' + keyframes + '}' +
			'@keyframes ' + CSS_RENDER_ANIMATION + '{' + keyframes + '}' +
			'.' + CSS_RENDER_MONITOR + '{' +
				'-webkit-animation:' + CSS_RENDER_ANIMATION + ' 0.001s;' +
				'animation:' + CSS_RENDER_ANIMATION + ' 0.001s;' +
			'}'
		);
	},

	acquireContext: function(item, config) {
		if (typeof item === 'string') {
			item = document.getElementById(item);
		} else if (item.length) {
			// Support for array based queries (such as jQuery)
			item = item[0];
		}

		if (item && item.canvas) {
			// Support for any object associated to a canvas (including a context2d)
			item = item.canvas;
		}

		// To prevent canvas fingerprinting, some add-ons undefine the getContext
		// method, for example: https://github.com/kkapsner/CanvasBlocker
		// https://github.com/chartjs/Chart.js/issues/2807
		var context = item && item.getContext && item.getContext('2d');

		// `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
		// inside an iframe or when running in a protected environment. We could guess the
		// types from their toString() value but let's keep things flexible and assume it's
		// a sufficient condition if the item has a context2D which has item as `canvas`.
		// https://github.com/chartjs/Chart.js/issues/3887
		// https://github.com/chartjs/Chart.js/issues/4102
		// https://github.com/chartjs/Chart.js/issues/4152
		if (context && context.canvas === item) {
			initCanvas(item, config);
			return context;
		}

		return null;
	},

	releaseContext: function(context) {
		var canvas = context.canvas;
		if (!canvas[EXPANDO_KEY]) {
			return;
		}

		var initial = canvas[EXPANDO_KEY].initial;
		['height', 'width'].forEach(function(prop) {
			var value = initial[prop];
			if (helpers.isNullOrUndef(value)) {
				canvas.removeAttribute(prop);
			} else {
				canvas.setAttribute(prop, value);
			}
		});

		helpers.each(initial.style || {}, function(value, key) {
			canvas.style[key] = value;
		});

		// The canvas render size might have been changed (and thus the state stack discarded),
		// we can't use save() and restore() to restore the initial state. So make sure that at
		// least the canvas context is reset to the default state by setting the canvas width.
		// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
		canvas.width = canvas.width;

		delete canvas[EXPANDO_KEY];
	},

	addEventListener: function(chart, type, listener) {
		var canvas = chart.canvas;
		if (type === 'resize') {
			// Note: the resize event is not supported on all browsers.
			addResizeListener(canvas, listener, chart);
			return;
		}

		var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
		var proxies = expando.proxies || (expando.proxies = {});
		var proxy = proxies[chart.id + '_' + type] = function(event) {
			listener(fromNativeEvent(event, chart));
		};

		addEventListener(canvas, type, proxy);
	},

	removeEventListener: function(chart, type, listener) {
		var canvas = chart.canvas;
		if (type === 'resize') {
			// Note: the resize event is not supported on all browsers.
			removeResizeListener(canvas, listener);
			return;
		}

		var expando = listener[EXPANDO_KEY] || {};
		var proxies = expando.proxies || {};
		var proxy = proxies[chart.id + '_' + type];
		if (!proxy) {
			return;
		}

		removeEventListener(canvas, type, proxy);
	}
};

// DEPRECATIONS

/**
 * Provided for backward compatibility, use EventTarget.addEventListener instead.
 * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @function Chart.helpers.addEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.addEvent = addEventListener;

/**
 * Provided for backward compatibility, use EventTarget.removeEventListener instead.
 * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
 * @function Chart.helpers.removeEvent
 * @deprecated since version 2.7.0
 * @todo remove at version 3
 * @private
 */
helpers.removeEvent = removeEventListener;

},{"45":45}],48:[function(require,module,exports){
'use strict';

var helpers = require(45);
var basic = require(46);
var dom = require(47);

// @TODO Make possible to select another platform at build time.
var implementation = dom._enabled ? dom : basic;

/**
 * @namespace Chart.platform
 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
 * @since 2.4.0
 */
module.exports = helpers.extend({
	/**
	 * @since 2.7.0
	 */
	initialize: function() {},

	/**
	 * Called at chart construction time, returns a context2d instance implementing
	 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
	 * @param {*} item - The native item from which to acquire context (platform specific)
	 * @param {Object} options - The chart options
	 * @returns {CanvasRenderingContext2D} context2d instance
	 */
	acquireContext: function() {},

	/**
	 * Called at chart destruction time, releases any resources associated to the context
	 * previously returned by the acquireContext() method.
	 * @param {CanvasRenderingContext2D} context - The context2d instance
	 * @returns {Boolean} true if the method succeeded, else false
	 */
	releaseContext: function() {},

	/**
	 * Registers the specified listener on the given chart.
	 * @param {Chart} chart - Chart from which to listen for event
	 * @param {String} type - The ({@link IEvent}) type to listen for
	 * @param {Function} listener - Receives a notification (an object that implements
	 * the {@link IEvent} interface) when an event of the specified type occurs.
	 */
	addEventListener: function() {},

	/**
	 * Removes the specified listener previously registered with addEventListener.
	 * @param {Chart} chart -Chart from which to remove the listener
	 * @param {String} type - The ({@link IEvent}) type to remove
	 * @param {Function} listener - The listener function to remove from the event target.
	 */
	removeEventListener: function() {}

}, implementation);

/**
 * @interface IPlatform
 * Allows abstracting platform dependencies away from the chart
 * @borrows Chart.platform.acquireContext as acquireContext
 * @borrows Chart.platform.releaseContext as releaseContext
 * @borrows Chart.platform.addEventListener as addEventListener
 * @borrows Chart.platform.removeEventListener as removeEventListener
 */

/**
 * @interface IEvent
 * @prop {String} type - The event type name, possible values are:
 * 'contextmenu', 'mouseenter', 'mousedown', 'mousemove', 'mouseup', 'mouseout',
 * 'click', 'dblclick', 'keydown', 'keypress', 'keyup' and 'resize'
 * @prop {*} native - The original native event (null for emulated events, e.g. 'resize')
 * @prop {Number} x - The mouse x position, relative to the canvas (null for incompatible events)
 * @prop {Number} y - The mouse y position, relative to the canvas (null for incompatible events)
 */

},{"45":45,"46":46,"47":47}],49:[function(require,module,exports){
/**
 * Plugin based on discussion from the following Chart.js issues:
 * @see https://github.com/chartjs/Chart.js/issues/2380#issuecomment-279961569
 * @see https://github.com/chartjs/Chart.js/issues/2440#issuecomment-256461897
 */

'use strict';

var defaults = require(25);
var elements = require(40);
var helpers = require(45);

defaults._set('global', {
	plugins: {
		filler: {
			propagate: true
		}
	}
});

module.exports = function() {

	var mappers = {
		dataset: function(source) {
			var index = source.fill;
			var chart = source.chart;
			var meta = chart.getDatasetMeta(index);
			var visible = meta && chart.isDatasetVisible(index);
			var points = (visible && meta.dataset._children) || [];
			var length = points.length || 0;

			return !length ? null : function(point, i) {
				return (i < length && points[i]._view) || null;
			};
		},

		boundary: function(source) {
			var boundary = source.boundary;
			var x = boundary ? boundary.x : null;
			var y = boundary ? boundary.y : null;

			return function(point) {
				return {
					x: x === null ? point.x : x,
					y: y === null ? point.y : y,
				};
			};
		}
	};

	// @todo if (fill[0] === '#')
	function decodeFill(el, index, count) {
		var model = el._model || {};
		var fill = model.fill;
		var target;

		if (fill === undefined) {
			fill = !!model.backgroundColor;
		}

		if (fill === false || fill === null) {
			return false;
		}

		if (fill === true) {
			return 'origin';
		}

		target = parseFloat(fill, 10);
		if (isFinite(target) && Math.floor(target) === target) {
			if (fill[0] === '-' || fill[0] === '+') {
				target = index + target;
			}

			if (target === index || target < 0 || target >= count) {
				return false;
			}

			return target;
		}

		switch (fill) {
		// compatibility
		case 'bottom':
			return 'start';
		case 'top':
			return 'end';
		case 'zero':
			return 'origin';
		// supported boundaries
		case 'origin':
		case 'start':
		case 'end':
			return fill;
		// invalid fill values
		default:
			return false;
		}
	}

	function computeBoundary(source) {
		var model = source.el._model || {};
		var scale = source.el._scale || {};
		var fill = source.fill;
		var target = null;
		var horizontal;

		if (isFinite(fill)) {
			return null;
		}

		// Backward compatibility: until v3, we still need to support boundary values set on
		// the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
		// controllers might still use it (e.g. the Smith chart).

		if (fill === 'start') {
			target = model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;
		} else if (fill === 'end') {
			target = model.scaleTop === undefined ? scale.top : model.scaleTop;
		} else if (model.scaleZero !== undefined) {
			target = model.scaleZero;
		} else if (scale.getBasePosition) {
			target = scale.getBasePosition();
		} else if (scale.getBasePixel) {
			target = scale.getBasePixel();
		}

		if (target !== undefined && target !== null) {
			if (target.x !== undefined && target.y !== undefined) {
				return target;
			}

			if (typeof target === 'number' && isFinite(target)) {
				horizontal = scale.isHorizontal();
				return {
					x: horizontal ? target : null,
					y: horizontal ? null : target
				};
			}
		}

		return null;
	}

	function resolveTarget(sources, index, propagate) {
		var source = sources[index];
		var fill = source.fill;
		var visited = [index];
		var target;

		if (!propagate) {
			return fill;
		}

		while (fill !== false && visited.indexOf(fill) === -1) {
			if (!isFinite(fill)) {
				return fill;
			}

			target = sources[fill];
			if (!target) {
				return false;
			}

			if (target.visible) {
				return fill;
			}

			visited.push(fill);
			fill = target.fill;
		}

		return false;
	}

	function createMapper(source) {
		var fill = source.fill;
		var type = 'dataset';

		if (fill === false) {
			return null;
		}

		if (!isFinite(fill)) {
			type = 'boundary';
		}

		return mappers[type](source);
	}

	function isDrawable(point) {
		return point && !point.skip;
	}

	function drawArea(ctx, curve0, curve1, len0, len1) {
		var i;

		if (!len0 || !len1) {
			return;
		}

		// building first area curve (normal)
		ctx.moveTo(curve0[0].x, curve0[0].y);
		for (i = 1; i < len0; ++i) {
			helpers.canvas.lineTo(ctx, curve0[i - 1], curve0[i]);
		}

		// joining the two area curves
		ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y);

		// building opposite area curve (reverse)
		for (i = len1 - 1; i > 0; --i) {
			helpers.canvas.lineTo(ctx, curve1[i], curve1[i - 1], true);
		}
	}

	function doFill(ctx, points, mapper, view, color, loop) {
		var count = points.length;
		var span = view.spanGaps;
		var curve0 = [];
		var curve1 = [];
		var len0 = 0;
		var len1 = 0;
		var i, ilen, index, p0, p1, d0, d1;

		ctx.beginPath();

		for (i = 0, ilen = (count + !!loop); i < ilen; ++i) {
			index = i % count;
			p0 = points[index]._view;
			p1 = mapper(p0, index, view);
			d0 = isDrawable(p0);
			d1 = isDrawable(p1);

			if (d0 && d1) {
				len0 = curve0.push(p0);
				len1 = curve1.push(p1);
			} else if (len0 && len1) {
				if (!span) {
					drawArea(ctx, curve0, curve1, len0, len1);
					len0 = len1 = 0;
					curve0 = [];
					curve1 = [];
				} else {
					if (d0) {
						curve0.push(p0);
					}
					if (d1) {
						curve1.push(p1);
					}
				}
			}
		}

		drawArea(ctx, curve0, curve1, len0, len1);

		ctx.closePath();
		ctx.fillStyle = color;
		ctx.fill();
	}

	return {
		id: 'filler',

		afterDatasetsUpdate: function(chart, options) {
			var count = (chart.data.datasets || []).length;
			var propagate = options.propagate;
			var sources = [];
			var meta, i, el, source;

			for (i = 0; i < count; ++i) {
				meta = chart.getDatasetMeta(i);
				el = meta.dataset;
				source = null;

				if (el && el._model && el instanceof elements.Line) {
					source = {
						visible: chart.isDatasetVisible(i),
						fill: decodeFill(el, i, count),
						chart: chart,
						el: el
					};
				}

				meta.$filler = source;
				sources.push(source);
			}

			for (i = 0; i < count; ++i) {
				source = sources[i];
				if (!source) {
					continue;
				}

				source.fill = resolveTarget(sources, i, propagate);
				source.boundary = computeBoundary(source);
				source.mapper = createMapper(source);
			}
		},

		beforeDatasetDraw: function(chart, args) {
			var meta = args.meta.$filler;
			if (!meta) {
				return;
			}

			var ctx = chart.ctx;
			var el = meta.el;
			var view = el._view;
			var points = el._children || [];
			var mapper = meta.mapper;
			var color = view.backgroundColor || defaults.global.defaultColor;

			if (mapper && color && points.length) {
				helpers.canvas.clipArea(ctx, chart.chartArea);
				doFill(ctx, points, mapper, view, color, el._loop);
				helpers.canvas.unclipArea(ctx);
			}
		}
	};
};

},{"25":25,"40":40,"45":45}],50:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

defaults._set('global', {
	legend: {
		display: true,
		position: 'top',
		fullWidth: true,
		reverse: false,
		weight: 1000,

		// a callback that will handle
		onClick: function(e, legendItem) {
			var index = legendItem.datasetIndex;
			var ci = this.chart;
			var meta = ci.getDatasetMeta(index);

			// See controller.isDatasetVisible comment
			meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;

			// We hid a dataset ... rerender the chart
			ci.update();
		},

		onHover: null,

		labels: {
			boxWidth: 40,
			padding: 10,
			// Generates labels shown in the legend
			// Valid properties to return:
			// text : text to display
			// fillStyle : fill of coloured box
			// strokeStyle: stroke of coloured box
			// hidden : if this legend item refers to a hidden item
			// lineCap : cap style for line
			// lineDash
			// lineDashOffset :
			// lineJoin :
			// lineWidth :
			generateLabels: function(chart) {
				var data = chart.data;
				return helpers.isArray(data.datasets) ? data.datasets.map(function(dataset, i) {
					return {
						text: dataset.label,
						fillStyle: (!helpers.isArray(dataset.backgroundColor) ? dataset.backgroundColor : dataset.backgroundColor[0]),
						hidden: !chart.isDatasetVisible(i),
						lineCap: dataset.borderCapStyle,
						lineDash: dataset.borderDash,
						lineDashOffset: dataset.borderDashOffset,
						lineJoin: dataset.borderJoinStyle,
						lineWidth: dataset.borderWidth,
						strokeStyle: dataset.borderColor,
						pointStyle: dataset.pointStyle,

						// Below is extra data used for toggling the datasets
						datasetIndex: i
					};
				}, this) : [];
			}
		}
	},

	legendCallback: function(chart) {
		var text = [];
		text.push('<ul class="' + chart.id + '-legend">');
		for (var i = 0; i < chart.data.datasets.length; i++) {
			text.push('<li><span style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
			if (chart.data.datasets[i].label) {
				text.push(chart.data.datasets[i].label);
			}
			text.push('</li>');
		}
		text.push('</ul>');
		return text.join('');
	}
});

module.exports = function(Chart) {

	var layout = Chart.layoutService;
	var noop = helpers.noop;

	/**
	 * Helper function to get the box width based on the usePointStyle option
	 * @param labelopts {Object} the label options on the legend
	 * @param fontSize {Number} the label font size
	 * @return {Number} width of the color box area
	 */
	function getBoxWidth(labelOpts, fontSize) {
		return labelOpts.usePointStyle ?
			fontSize * Math.SQRT2 :
			labelOpts.boxWidth;
	}

	Chart.Legend = Element.extend({

		initialize: function(config) {
			helpers.extend(this, config);

			// Contains hit boxes for each dataset (in dataset order)
			this.legendHitBoxes = [];

			// Are we in doughnut mode which has a different data type
			this.doughnutMode = false;
		},

		// These methods are ordered by lifecycle. Utilities then follow.
		// Any function defined here is inherited by all legend types.
		// Any function can be extended by the legend type

		beforeUpdate: noop,
		update: function(maxWidth, maxHeight, margins) {
			var me = this;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = margins;

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();
			// Labels
			me.beforeBuildLabels();
			me.buildLabels();
			me.afterBuildLabels();

			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;
		},
		afterUpdate: noop,

		//

		beforeSetDimensions: noop,
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;

			// Reset minSize
			me.minSize = {
				width: 0,
				height: 0
			};
		},
		afterSetDimensions: noop,

		//

		beforeBuildLabels: noop,
		buildLabels: function() {
			var me = this;
			var labelOpts = me.options.labels || {};
			var legendItems = helpers.callback(labelOpts.generateLabels, [me.chart], me) || [];

			if (labelOpts.filter) {
				legendItems = legendItems.filter(function(item) {
					return labelOpts.filter(item, me.chart.data);
				});
			}

			if (me.options.reverse) {
				legendItems.reverse();
			}

			me.legendItems = legendItems;
		},
		afterBuildLabels: noop,

		//

		beforeFit: noop,
		fit: function() {
			var me = this;
			var opts = me.options;
			var labelOpts = opts.labels;
			var display = opts.display;

			var ctx = me.ctx;

			var globalDefault = defaults.global;
			var valueOrDefault = helpers.valueOrDefault;
			var fontSize = valueOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize);
			var fontStyle = valueOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle);
			var fontFamily = valueOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily);
			var labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);

			// Reset hit boxes
			var hitboxes = me.legendHitBoxes = [];

			var minSize = me.minSize;
			var isHorizontal = me.isHorizontal();

			if (isHorizontal) {
				minSize.width = me.maxWidth; // fill all the width
				minSize.height = display ? 10 : 0;
			} else {
				minSize.width = display ? 10 : 0;
				minSize.height = me.maxHeight; // fill all the height
			}

			// Increase sizes here
			if (display) {
				ctx.font = labelFont;

				if (isHorizontal) {
					// Labels

					// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
					var lineWidths = me.lineWidths = [0];
					var totalHeight = me.legendItems.length ? fontSize + (labelOpts.padding) : 0;

					ctx.textAlign = 'left';
					ctx.textBaseline = 'top';

					helpers.each(me.legendItems, function(legendItem, i) {
						var boxWidth = getBoxWidth(labelOpts, fontSize);
						var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

						if (lineWidths[lineWidths.length - 1] + width + labelOpts.padding >= me.width) {
							totalHeight += fontSize + (labelOpts.padding);
							lineWidths[lineWidths.length] = me.left;
						}

						// Store the hitbox width and height here. Final position will be updated in `draw`
						hitboxes[i] = {
							left: 0,
							top: 0,
							width: width,
							height: fontSize
						};

						lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
					});

					minSize.height += totalHeight;

				} else {
					var vPadding = labelOpts.padding;
					var columnWidths = me.columnWidths = [];
					var totalWidth = labelOpts.padding;
					var currentColWidth = 0;
					var currentColHeight = 0;
					var itemHeight = fontSize + vPadding;

					helpers.each(me.legendItems, function(legendItem, i) {
						var boxWidth = getBoxWidth(labelOpts, fontSize);
						var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;

						// If too tall, go to new column
						if (currentColHeight + itemHeight > minSize.height) {
							totalWidth += currentColWidth + labelOpts.padding;
							columnWidths.push(currentColWidth); // previous column width

							currentColWidth = 0;
							currentColHeight = 0;
						}

						// Get max width
						currentColWidth = Math.max(currentColWidth, itemWidth);
						currentColHeight += itemHeight;

						// Store the hitbox width and height here. Final position will be updated in `draw`
						hitboxes[i] = {
							left: 0,
							top: 0,
							width: itemWidth,
							height: fontSize
						};
					});

					totalWidth += currentColWidth;
					columnWidths.push(currentColWidth);
					minSize.width += totalWidth;
				}
			}

			me.width = minSize.width;
			me.height = minSize.height;
		},
		afterFit: noop,

		// Shared Methods
		isHorizontal: function() {
			return this.options.position === 'top' || this.options.position === 'bottom';
		},

		// Actually draw the legend on the canvas
		draw: function() {
			var me = this;
			var opts = me.options;
			var labelOpts = opts.labels;
			var globalDefault = defaults.global;
			var lineDefault = globalDefault.elements.line;
			var legendWidth = me.width;
			var lineWidths = me.lineWidths;

			if (opts.display) {
				var ctx = me.ctx;
				var valueOrDefault = helpers.valueOrDefault;
				var fontColor = valueOrDefault(labelOpts.fontColor, globalDefault.defaultFontColor);
				var fontSize = valueOrDefault(labelOpts.fontSize, globalDefault.defaultFontSize);
				var fontStyle = valueOrDefault(labelOpts.fontStyle, globalDefault.defaultFontStyle);
				var fontFamily = valueOrDefault(labelOpts.fontFamily, globalDefault.defaultFontFamily);
				var labelFont = helpers.fontString(fontSize, fontStyle, fontFamily);
				var cursor;

				// Canvas setup
				ctx.textAlign = 'left';
				ctx.textBaseline = 'middle';
				ctx.lineWidth = 0.5;
				ctx.strokeStyle = fontColor; // for strikethrough effect
				ctx.fillStyle = fontColor; // render in correct colour
				ctx.font = labelFont;

				var boxWidth = getBoxWidth(labelOpts, fontSize);
				var hitboxes = me.legendHitBoxes;

				// current position
				var drawLegendBox = function(x, y, legendItem) {
					if (isNaN(boxWidth) || boxWidth <= 0) {
						return;
					}

					// Set the ctx for the box
					ctx.save();

					ctx.fillStyle = valueOrDefault(legendItem.fillStyle, globalDefault.defaultColor);
					ctx.lineCap = valueOrDefault(legendItem.lineCap, lineDefault.borderCapStyle);
					ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, lineDefault.borderDashOffset);
					ctx.lineJoin = valueOrDefault(legendItem.lineJoin, lineDefault.borderJoinStyle);
					ctx.lineWidth = valueOrDefault(legendItem.lineWidth, lineDefault.borderWidth);
					ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, globalDefault.defaultColor);
					var isLineWidthZero = (valueOrDefault(legendItem.lineWidth, lineDefault.borderWidth) === 0);

					if (ctx.setLineDash) {
						// IE 9 and 10 do not support line dash
						ctx.setLineDash(valueOrDefault(legendItem.lineDash, lineDefault.borderDash));
					}

					if (opts.labels && opts.labels.usePointStyle) {
						// Recalculate x and y for drawPoint() because its expecting
						// x and y to be center of figure (instead of top left)
						var radius = fontSize * Math.SQRT2 / 2;
						var offSet = radius / Math.SQRT2;
						var centerX = x + offSet;
						var centerY = y + offSet;

						// Draw pointStyle as legend symbol
						helpers.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY);
					} else {
						// Draw box as legend symbol
						if (!isLineWidthZero) {
							ctx.strokeRect(x, y, boxWidth, fontSize);
						}
						ctx.fillRect(x, y, boxWidth, fontSize);
					}

					ctx.restore();
				};
				var fillText = function(x, y, legendItem, textWidth) {
					var halfFontSize = fontSize / 2;
					var xLeft = boxWidth + halfFontSize + x;
					var yMiddle = y + halfFontSize;

					ctx.fillText(legendItem.text, xLeft, yMiddle);

					if (legendItem.hidden) {
						// Strikethrough the text if hidden
						ctx.beginPath();
						ctx.lineWidth = 2;
						ctx.moveTo(xLeft, yMiddle);
						ctx.lineTo(xLeft + textWidth, yMiddle);
						ctx.stroke();
					}
				};

				// Horizontal
				var isHorizontal = me.isHorizontal();
				if (isHorizontal) {
					cursor = {
						x: me.left + ((legendWidth - lineWidths[0]) / 2),
						y: me.top + labelOpts.padding,
						line: 0
					};
				} else {
					cursor = {
						x: me.left + labelOpts.padding,
						y: me.top + labelOpts.padding,
						line: 0
					};
				}

				var itemHeight = fontSize + labelOpts.padding;
				helpers.each(me.legendItems, function(legendItem, i) {
					var textWidth = ctx.measureText(legendItem.text).width;
					var width = boxWidth + (fontSize / 2) + textWidth;
					var x = cursor.x;
					var y = cursor.y;

					if (isHorizontal) {
						if (x + width >= legendWidth) {
							y = cursor.y += itemHeight;
							cursor.line++;
							x = cursor.x = me.left + ((legendWidth - lineWidths[cursor.line]) / 2);
						}
					} else if (y + itemHeight > me.bottom) {
						x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
						y = cursor.y = me.top + labelOpts.padding;
						cursor.line++;
					}

					drawLegendBox(x, y, legendItem);

					hitboxes[i].left = x;
					hitboxes[i].top = y;

					// Fill the actual label
					fillText(x, y, legendItem, textWidth);

					if (isHorizontal) {
						cursor.x += width + (labelOpts.padding);
					} else {
						cursor.y += itemHeight;
					}

				});
			}
		},

		/**
		 * Handle an event
		 * @private
		 * @param {IEvent} event - The event to handle
		 * @return {Boolean} true if a change occured
		 */
		handleEvent: function(e) {
			var me = this;
			var opts = me.options;
			var type = e.type === 'mouseup' ? 'click' : e.type;
			var changed = false;

			if (type === 'mousemove') {
				if (!opts.onHover) {
					return;
				}
			} else if (type === 'click') {
				if (!opts.onClick) {
					return;
				}
			} else {
				return;
			}

			// Chart event already has relative position in it
			var x = e.x;
			var y = e.y;

			if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
				// See if we are touching one of the dataset boxes
				var lh = me.legendHitBoxes;
				for (var i = 0; i < lh.length; ++i) {
					var hitBox = lh[i];

					if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
						// Touching an element
						if (type === 'click') {
							// use e.native for backwards compatibility
							opts.onClick.call(me, e.native, me.legendItems[i]);
							changed = true;
							break;
						} else if (type === 'mousemove') {
							// use e.native for backwards compatibility
							opts.onHover.call(me, e.native, me.legendItems[i]);
							changed = true;
							break;
						}
					}
				}
			}

			return changed;
		}
	});

	function createNewLegendAndAttach(chart, legendOpts) {
		var legend = new Chart.Legend({
			ctx: chart.ctx,
			options: legendOpts,
			chart: chart
		});

		layout.configure(chart, legend, legendOpts);
		layout.addBox(chart, legend);
		chart.legend = legend;
	}

	return {
		id: 'legend',

		beforeInit: function(chart) {
			var legendOpts = chart.options.legend;

			if (legendOpts) {
				createNewLegendAndAttach(chart, legendOpts);
			}
		},

		beforeUpdate: function(chart) {
			var legendOpts = chart.options.legend;
			var legend = chart.legend;

			if (legendOpts) {
				helpers.mergeIf(legendOpts, defaults.global.legend);

				if (legend) {
					layout.configure(chart, legend, legendOpts);
					legend.options = legendOpts;
				} else {
					createNewLegendAndAttach(chart, legendOpts);
				}
			} else if (legend) {
				layout.removeBox(chart, legend);
				delete chart.legend;
			}
		},

		afterEvent: function(chart, e) {
			var legend = chart.legend;
			if (legend) {
				legend.handleEvent(e);
			}
		}
	};
};

},{"25":25,"26":26,"45":45}],51:[function(require,module,exports){
'use strict';

var defaults = require(25);
var Element = require(26);
var helpers = require(45);

defaults._set('global', {
	title: {
		display: false,
		fontStyle: 'bold',
		fullWidth: true,
		lineHeight: 1.2,
		padding: 10,
		position: 'top',
		text: '',
		weight: 2000         // by default greater than legend (1000) to be above
	}
});

module.exports = function(Chart) {

	var layout = Chart.layoutService;
	var noop = helpers.noop;

	Chart.Title = Element.extend({
		initialize: function(config) {
			var me = this;
			helpers.extend(me, config);

			// Contains hit boxes for each dataset (in dataset order)
			me.legendHitBoxes = [];
		},

		// These methods are ordered by lifecycle. Utilities then follow.

		beforeUpdate: noop,
		update: function(maxWidth, maxHeight, margins) {
			var me = this;

			// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			me.beforeUpdate();

			// Absorb the master measurements
			me.maxWidth = maxWidth;
			me.maxHeight = maxHeight;
			me.margins = margins;

			// Dimensions
			me.beforeSetDimensions();
			me.setDimensions();
			me.afterSetDimensions();
			// Labels
			me.beforeBuildLabels();
			me.buildLabels();
			me.afterBuildLabels();

			// Fit
			me.beforeFit();
			me.fit();
			me.afterFit();
			//
			me.afterUpdate();

			return me.minSize;

		},
		afterUpdate: noop,

		//

		beforeSetDimensions: noop,
		setDimensions: function() {
			var me = this;
			// Set the unconstrained dimension before label rotation
			if (me.isHorizontal()) {
				// Reset position before calculating rotation
				me.width = me.maxWidth;
				me.left = 0;
				me.right = me.width;
			} else {
				me.height = me.maxHeight;

				// Reset position before calculating rotation
				me.top = 0;
				me.bottom = me.height;
			}

			// Reset padding
			me.paddingLeft = 0;
			me.paddingTop = 0;
			me.paddingRight = 0;
			me.paddingBottom = 0;

			// Reset minSize
			me.minSize = {
				width: 0,
				height: 0
			};
		},
		afterSetDimensions: noop,

		//

		beforeBuildLabels: noop,
		buildLabels: noop,
		afterBuildLabels: noop,

		//

		beforeFit: noop,
		fit: function() {
			var me = this;
			var valueOrDefault = helpers.valueOrDefault;
			var opts = me.options;
			var display = opts.display;
			var fontSize = valueOrDefault(opts.fontSize, defaults.global.defaultFontSize);
			var minSize = me.minSize;
			var lineCount = helpers.isArray(opts.text) ? opts.text.length : 1;
			var lineHeight = helpers.options.toLineHeight(opts.lineHeight, fontSize);
			var textSize = display ? (lineCount * lineHeight) + (opts.padding * 2) : 0;

			if (me.isHorizontal()) {
				minSize.width = me.maxWidth; // fill all the width
				minSize.height = textSize;
			} else {
				minSize.width = textSize;
				minSize.height = me.maxHeight; // fill all the height
			}

			me.width = minSize.width;
			me.height = minSize.height;

		},
		afterFit: noop,

		// Shared Methods
		isHorizontal: function() {
			var pos = this.options.position;
			return pos === 'top' || pos === 'bottom';
		},

		// Actually draw the title block on the canvas
		draw: function() {
			var me = this;
			var ctx = me.ctx;
			var valueOrDefault = helpers.valueOrDefault;
			var opts = me.options;
			var globalDefaults = defaults.global;

			if (opts.display) {
				var fontSize = valueOrDefault(opts.fontSize, globalDefaults.defaultFontSize);
				var fontStyle = valueOrDefault(opts.fontStyle, globalDefaults.defaultFontStyle);
				var fontFamily = valueOrDefault(opts.fontFamily, globalDefaults.defaultFontFamily);
				var titleFont = helpers.fontString(fontSize, fontStyle, fontFamily);
				var lineHeight = helpers.options.toLineHeight(opts.lineHeight, fontSize);
				var offset = lineHeight / 2 + opts.padding;
				var rotation = 0;
				var top = me.top;
				var left = me.left;
				var bottom = me.bottom;
				var right = me.right;
				var maxWidth, titleX, titleY;

				ctx.fillStyle = valueOrDefault(opts.fontColor, globalDefaults.defaultFontColor); // render in correct colour
				ctx.font = titleFont;

				// Horizontal
				if (me.isHorizontal()) {
					titleX = left + ((right - left) / 2); // midpoint of the width
					titleY = top + offset;
					maxWidth = right - left;
				} else {
					titleX = opts.position === 'left' ? left + offset : right - offset;
					titleY = top + ((bottom - top) / 2);
					maxWidth = bottom - top;
					rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);
				}

				ctx.save();
				ctx.translate(titleX, titleY);
				ctx.rotate(rotation);
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';

				var text = opts.text;
				if (helpers.isArray(text)) {
					var y = 0;
					for (var i = 0; i < text.length; ++i) {
						ctx.fillText(text[i], 0, y, maxWidth);
						y += lineHeight;
					}
				} else {
					ctx.fillText(text, 0, 0, maxWidth);
				}

				ctx.restore();
			}
		}
	});

	function createNewTitleBlockAndAttach(chart, titleOpts) {
		var title = new Chart.Title({
			ctx: chart.ctx,
			options: titleOpts,
			chart: chart
		});

		layout.configure(chart, title, titleOpts);
		layout.addBox(chart, title);
		chart.titleBlock = title;
	}

	return {
		id: 'title',

		beforeInit: function(chart) {
			var titleOpts = chart.options.title;

			if (titleOpts) {
				createNewTitleBlockAndAttach(chart, titleOpts);
			}
		},

		beforeUpdate: function(chart) {
			var titleOpts = chart.options.title;
			var titleBlock = chart.titleBlock;

			if (titleOpts) {
				helpers.mergeIf(titleOpts, defaults.global.title);

				if (titleBlock) {
					layout.configure(chart, titleBlock, titleOpts);
					titleBlock.options = titleOpts;
				} else {
					createNewTitleBlockAndAttach(chart, titleOpts);
				}
			} else if (titleBlock) {
				Chart.layoutService.removeBox(chart, titleBlock);
				delete chart.titleBlock;
			}
		}
	};
};

},{"25":25,"26":26,"45":45}],52:[function(require,module,exports){
'use strict';

module.exports = function(Chart) {

	// Default config for a category scale
	var defaultConfig = {
		position: 'bottom'
	};

	var DatasetScale = Chart.Scale.extend({
		/**
		* Internal function to get the correct labels. If data.xLabels or data.yLabels are defined, use those
		* else fall back to data.labels
		* @private
		*/
		getLabels: function() {
			var data = this.chart.data;
			return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels;
		},

		determineDataLimits: function() {
			var me = this;
			var labels = me.getLabels();
			me.minIndex = 0;
			me.maxIndex = labels.length - 1;
			var findIndex;

			if (me.options.ticks.min !== undefined) {
				// user specified min value
				findIndex = labels.indexOf(me.options.ticks.min);
				me.minIndex = findIndex !== -1 ? findIndex : me.minIndex;
			}

			if (me.options.ticks.max !== undefined) {
				// user specified max value
				findIndex = labels.indexOf(me.options.ticks.max);
				me.maxIndex = findIndex !== -1 ? findIndex : me.maxIndex;
			}

			me.min = labels[me.minIndex];
			me.max = labels[me.maxIndex];
		},

		buildTicks: function() {
			var me = this;
			var labels = me.getLabels();
			// If we are viewing some subset of labels, slice the original array
			me.ticks = (me.minIndex === 0 && me.maxIndex === labels.length - 1) ? labels : labels.slice(me.minIndex, me.maxIndex + 1);
		},

		getLabelForIndex: function(index, datasetIndex) {
			var me = this;
			var data = me.chart.data;
			var isHorizontal = me.isHorizontal();

			if (data.yLabels && !isHorizontal) {
				return me.getRightValue(data.datasets[datasetIndex].data[index]);
			}
			return me.ticks[index - me.minIndex];
		},

		// Used to get data value locations.  Value can either be an index or a numerical value
		getPixelForValue: function(value, index) {
			var me = this;
			var offset = me.options.offset;
			// 1 is added because we need the length but we have the indexes
			var offsetAmt = Math.max((me.maxIndex + 1 - me.minIndex - (offset ? 0 : 1)), 1);

			// If value is a data object, then index is the index in the data array,
			// not the index of the scale. We need to change that.
			var valueCategory;
			if (value !== undefined && value !== null) {
				valueCategory = me.isHorizontal() ? value.x : value.y;
			}
			if (valueCategory !== undefined || (value !== undefined && isNaN(index))) {
				var labels = me.getLabels();
				value = valueCategory || value;
				var idx = labels.indexOf(value);
				index = idx !== -1 ? idx : index;
			}

			if (me.isHorizontal()) {
				var valueWidth = me.width / offsetAmt;
				var widthOffset = (valueWidth * (index - me.minIndex));

				if (offset) {
					widthOffset += (valueWidth / 2);
				}

				return me.left + Math.round(widthOffset);
			}
			var valueHeight = me.height / offsetAmt;
			var heightOffset = (valueHeight * (index - me.minIndex));

			if (offset) {
				heightOffset += (valueHeight / 2);
			}

			return me.top + Math.round(heightOffset);
		},
		getPixelForTick: function(index) {
			return this.getPixelForValue(this.ticks[index], index + this.minIndex, null);
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var offset = me.options.offset;
			var value;
			var offsetAmt = Math.max((me._ticks.length - (offset ? 0 : 1)), 1);
			var horz = me.isHorizontal();
			var valueDimension = (horz ? me.width : me.height) / offsetAmt;

			pixel -= horz ? me.left : me.top;

			if (offset) {
				pixel -= (valueDimension / 2);
			}

			if (pixel <= 0) {
				value = 0;
			} else {
				value = Math.round(pixel / valueDimension);
			}

			return value + me.minIndex;
		},
		getBasePixel: function() {
			return this.bottom;
		}
	});

	Chart.scaleService.registerScaleType('category', DatasetScale, defaultConfig);

};

},{}],53:[function(require,module,exports){
'use strict';

var defaults = require(25);
var helpers = require(45);
var Ticks = require(34);

module.exports = function(Chart) {

	var defaultConfig = {
		position: 'left',
		ticks: {
			callback: Ticks.formatters.linear
		}
	};

	var LinearScale = Chart.LinearScaleBase.extend({

		determineDataLimits: function() {
			var me = this;
			var opts = me.options;
			var chart = me.chart;
			var data = chart.data;
			var datasets = data.datasets;
			var isHorizontal = me.isHorizontal();
			var DEFAULT_MIN = 0;
			var DEFAULT_MAX = 1;

			function IDMatches(meta) {
				return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
			}

			// First Calculate the range
			me.min = null;
			me.max = null;

			var hasStacks = opts.stacked;
			if (hasStacks === undefined) {
				helpers.each(datasets, function(dataset, datasetIndex) {
					if (hasStacks) {
						return;
					}

					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
						meta.stack !== undefined) {
						hasStacks = true;
					}
				});
			}

			if (opts.stacked || hasStacks) {
				var valuesPerStack = {};

				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					var key = [
						meta.type,
						// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
						((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
						meta.stack
					].join('.');

					if (valuesPerStack[key] === undefined) {
						valuesPerStack[key] = {
							positiveValues: [],
							negativeValues: []
						};
					}

					// Store these per type
					var positiveValues = valuesPerStack[key].positiveValues;
					var negativeValues = valuesPerStack[key].negativeValues;

					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							positiveValues[index] = positiveValues[index] || 0;
							negativeValues[index] = negativeValues[index] || 0;

							if (opts.relativePoints) {
								positiveValues[index] = 100;
							} else if (value < 0) {
								negativeValues[index] += value;
							} else {
								positiveValues[index] += value;
							}
						});
					}
				});

				helpers.each(valuesPerStack, function(valuesForType) {
					var values = valuesForType.positiveValues.concat(valuesForType.negativeValues);
					var minVal = helpers.min(values);
					var maxVal = helpers.max(values);
					me.min = me.min === null ? minVal : Math.min(me.min, minVal);
					me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
				});

			} else {
				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							if (me.min === null) {
								me.min = value;
							} else if (value < me.min) {
								me.min = value;
							}

							if (me.max === null) {
								me.max = value;
							} else if (value > me.max) {
								me.max = value;
							}
						});
					}
				});
			}

			me.min = isFinite(me.min) && !isNaN(me.min) ? me.min : DEFAULT_MIN;
			me.max = isFinite(me.max) && !isNaN(me.max) ? me.max : DEFAULT_MAX;

			// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
			this.handleTickRangeOptions();
		},
		getTickLimit: function() {
			var maxTicks;
			var me = this;
			var tickOpts = me.options.ticks;

			if (me.isHorizontal()) {
				maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.width / 50));
			} else {
				// The factor of 2 used to scale the font size has been experimentally determined.
				var tickFontSize = helpers.valueOrDefault(tickOpts.fontSize, defaults.global.defaultFontSize);
				maxTicks = Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(me.height / (2 * tickFontSize)));
			}

			return maxTicks;
		},
		// Called after the ticks are built. We need
		handleDirectionalChanges: function() {
			if (!this.isHorizontal()) {
				// We are in a vertical orientation. The top value is the highest. So reverse the array
				this.ticks.reverse();
			}
		},
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		// Utils
		getPixelForValue: function(value) {
			// This must be called after fit has been run so that
			// this.left, this.top, this.right, and this.bottom have been defined
			var me = this;
			var start = me.start;

			var rightValue = +me.getRightValue(value);
			var pixel;
			var range = me.end - start;

			if (me.isHorizontal()) {
				pixel = me.left + (me.width / range * (rightValue - start));
				return Math.round(pixel);
			}

			pixel = me.bottom - (me.height / range * (rightValue - start));
			return Math.round(pixel);
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var isHorizontal = me.isHorizontal();
			var innerDimension = isHorizontal ? me.width : me.height;
			var offset = (isHorizontal ? pixel - me.left : me.bottom - pixel) / innerDimension;
			return me.start + ((me.end - me.start) * offset);
		},
		getPixelForTick: function(index) {
			return this.getPixelForValue(this.ticksAsNumbers[index]);
		}
	});
	Chart.scaleService.registerScaleType('linear', LinearScale, defaultConfig);

};

},{"25":25,"34":34,"45":45}],54:[function(require,module,exports){
'use strict';

var helpers = require(45);
var Ticks = require(34);

module.exports = function(Chart) {

	var noop = helpers.noop;

	Chart.LinearScaleBase = Chart.Scale.extend({
		getRightValue: function(value) {
			if (typeof value === 'string') {
				return +value;
			}
			return Chart.Scale.prototype.getRightValue.call(this, value);
		},

		handleTickRangeOptions: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;

			// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
			// do nothing since that would make the chart weird. If the user really wants a weird chart
			// axis, they can manually override it
			if (tickOpts.beginAtZero) {
				var minSign = helpers.sign(me.min);
				var maxSign = helpers.sign(me.max);

				if (minSign < 0 && maxSign < 0) {
					// move the top up to 0
					me.max = 0;
				} else if (minSign > 0 && maxSign > 0) {
					// move the bottom down to 0
					me.min = 0;
				}
			}

			var setMin = tickOpts.min !== undefined || tickOpts.suggestedMin !== undefined;
			var setMax = tickOpts.max !== undefined || tickOpts.suggestedMax !== undefined;

			if (tickOpts.min !== undefined) {
				me.min = tickOpts.min;
			} else if (tickOpts.suggestedMin !== undefined) {
				if (me.min === null) {
					me.min = tickOpts.suggestedMin;
				} else {
					me.min = Math.min(me.min, tickOpts.suggestedMin);
				}
			}

			if (tickOpts.max !== undefined) {
				me.max = tickOpts.max;
			} else if (tickOpts.suggestedMax !== undefined) {
				if (me.max === null) {
					me.max = tickOpts.suggestedMax;
				} else {
					me.max = Math.max(me.max, tickOpts.suggestedMax);
				}
			}

			if (setMin !== setMax) {
				// We set the min or the max but not both.
				// So ensure that our range is good
				// Inverted or 0 length range can happen when
				// ticks.min is set, and no datasets are visible
				if (me.min >= me.max) {
					if (setMin) {
						me.max = me.min + 1;
					} else {
						me.min = me.max - 1;
					}
				}
			}

			if (me.min === me.max) {
				me.max++;

				if (!tickOpts.beginAtZero) {
					me.min--;
				}
			}
		},
		getTickLimit: noop,
		handleDirectionalChanges: noop,

		buildTicks: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;

			// Figure out what the max number of ticks we can support it is based on the size of
			// the axis area. For now, we say that the minimum tick spacing in pixels must be 50
			// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
			// the graph. Make sure we always have at least 2 ticks
			var maxTicks = me.getTickLimit();
			maxTicks = Math.max(2, maxTicks);

			var numericGeneratorOptions = {
				maxTicks: maxTicks,
				min: tickOpts.min,
				max: tickOpts.max,
				stepSize: helpers.valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
			};
			var ticks = me.ticks = Ticks.generators.linear(numericGeneratorOptions, me);

			me.handleDirectionalChanges();

			// At this point, we need to update our max and min given the tick values since we have expanded the
			// range of the scale
			me.max = helpers.max(ticks);
			me.min = helpers.min(ticks);

			if (tickOpts.reverse) {
				ticks.reverse();

				me.start = me.max;
				me.end = me.min;
			} else {
				me.start = me.min;
				me.end = me.max;
			}
		},
		convertTicksToLabels: function() {
			var me = this;
			me.ticksAsNumbers = me.ticks.slice();
			me.zeroLineIndex = me.ticks.indexOf(0);

			Chart.Scale.prototype.convertTicksToLabels.call(me);
		}
	});
};

},{"34":34,"45":45}],55:[function(require,module,exports){
'use strict';

var helpers = require(45);
var Ticks = require(34);

module.exports = function(Chart) {

	var defaultConfig = {
		position: 'left',

		// label settings
		ticks: {
			callback: Ticks.formatters.logarithmic
		}
	};

	var LogarithmicScale = Chart.Scale.extend({
		determineDataLimits: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;
			var chart = me.chart;
			var data = chart.data;
			var datasets = data.datasets;
			var valueOrDefault = helpers.valueOrDefault;
			var isHorizontal = me.isHorizontal();
			function IDMatches(meta) {
				return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
			}

			// Calculate Range
			me.min = null;
			me.max = null;
			me.minNotZero = null;

			var hasStacks = opts.stacked;
			if (hasStacks === undefined) {
				helpers.each(datasets, function(dataset, datasetIndex) {
					if (hasStacks) {
						return;
					}

					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
						meta.stack !== undefined) {
						hasStacks = true;
					}
				});
			}

			if (opts.stacked || hasStacks) {
				var valuesPerStack = {};

				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					var key = [
						meta.type,
						// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
						((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
						meta.stack
					].join('.');

					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						if (valuesPerStack[key] === undefined) {
							valuesPerStack[key] = [];
						}

						helpers.each(dataset.data, function(rawValue, index) {
							var values = valuesPerStack[key];
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							values[index] = values[index] || 0;

							if (opts.relativePoints) {
								values[index] = 100;
							} else {
								// Don't need to split positive and negative since the log scale can't handle a 0 crossing
								values[index] += value;
							}
						});
					}
				});

				helpers.each(valuesPerStack, function(valuesForType) {
					var minVal = helpers.min(valuesForType);
					var maxVal = helpers.max(valuesForType);
					me.min = me.min === null ? minVal : Math.min(me.min, minVal);
					me.max = me.max === null ? maxVal : Math.max(me.max, maxVal);
				});

			} else {
				helpers.each(datasets, function(dataset, datasetIndex) {
					var meta = chart.getDatasetMeta(datasetIndex);
					if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
						helpers.each(dataset.data, function(rawValue, index) {
							var value = +me.getRightValue(rawValue);
							if (isNaN(value) || meta.data[index].hidden) {
								return;
							}

							if (me.min === null) {
								me.min = value;
							} else if (value < me.min) {
								me.min = value;
							}

							if (me.max === null) {
								me.max = value;
							} else if (value > me.max) {
								me.max = value;
							}

							if (value !== 0 && (me.minNotZero === null || value < me.minNotZero)) {
								me.minNotZero = value;
							}
						});
					}
				});
			}

			me.min = valueOrDefault(tickOpts.min, me.min);
			me.max = valueOrDefault(tickOpts.max, me.max);

			if (me.min === me.max) {
				if (me.min !== 0 && me.min !== null) {
					me.min = Math.pow(10, Math.floor(helpers.log10(me.min)) - 1);
					me.max = Math.pow(10, Math.floor(helpers.log10(me.max)) + 1);
				} else {
					me.min = 1;
					me.max = 10;
				}
			}
		},
		buildTicks: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;

			var generationOptions = {
				min: tickOpts.min,
				max: tickOpts.max
			};
			var ticks = me.ticks = Ticks.generators.logarithmic(generationOptions, me);

			if (!me.isHorizontal()) {
				// We are in a vertical orientation. The top value is the highest. So reverse the array
				ticks.reverse();
			}

			// At this point, we need to update our max and min given the tick values since we have expanded the
			// range of the scale
			me.max = helpers.max(ticks);
			me.min = helpers.min(ticks);

			if (tickOpts.reverse) {
				ticks.reverse();

				me.start = me.max;
				me.end = me.min;
			} else {
				me.start = me.min;
				me.end = me.max;
			}
		},
		convertTicksToLabels: function() {
			this.tickValues = this.ticks.slice();

			Chart.Scale.prototype.convertTicksToLabels.call(this);
		},
		// Get the correct tooltip label
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		getPixelForTick: function(index) {
			return this.getPixelForValue(this.tickValues[index]);
		},
		getPixelForValue: function(value) {
			var me = this;
			var start = me.start;
			var newVal = +me.getRightValue(value);
			var opts = me.options;
			var tickOpts = opts.ticks;
			var innerDimension, pixel, range;

			if (me.isHorizontal()) {
				range = helpers.log10(me.end) - helpers.log10(start); // todo: if start === 0
				if (newVal === 0) {
					pixel = me.left;
				} else {
					innerDimension = me.width;
					pixel = me.left + (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
				}
			} else {
				// Bottom - top since pixels increase downward on a screen
				innerDimension = me.height;
				if (start === 0 && !tickOpts.reverse) {
					range = helpers.log10(me.end) - helpers.log10(me.minNotZero);
					if (newVal === start) {
						pixel = me.bottom;
					} else if (newVal === me.minNotZero) {
						pixel = me.bottom - innerDimension * 0.02;
					} else {
						pixel = me.bottom - innerDimension * 0.02 - (innerDimension * 0.98 / range * (helpers.log10(newVal) - helpers.log10(me.minNotZero)));
					}
				} else if (me.end === 0 && tickOpts.reverse) {
					range = helpers.log10(me.start) - helpers.log10(me.minNotZero);
					if (newVal === me.end) {
						pixel = me.top;
					} else if (newVal === me.minNotZero) {
						pixel = me.top + innerDimension * 0.02;
					} else {
						pixel = me.top + innerDimension * 0.02 + (innerDimension * 0.98 / range * (helpers.log10(newVal) - helpers.log10(me.minNotZero)));
					}
				} else if (newVal === 0) {
					pixel = tickOpts.reverse ? me.top : me.bottom;
				} else {
					range = helpers.log10(me.end) - helpers.log10(start);
					innerDimension = me.height;
					pixel = me.bottom - (innerDimension / range * (helpers.log10(newVal) - helpers.log10(start)));
				}
			}
			return pixel;
		},
		getValueForPixel: function(pixel) {
			var me = this;
			var range = helpers.log10(me.end) - helpers.log10(me.start);
			var value, innerDimension;

			if (me.isHorizontal()) {
				innerDimension = me.width;
				value = me.start * Math.pow(10, (pixel - me.left) * range / innerDimension);
			} else { // todo: if start === 0
				innerDimension = me.height;
				value = Math.pow(10, (me.bottom - pixel) * range / innerDimension) / me.start;
			}
			return value;
		}
	});
	Chart.scaleService.registerScaleType('logarithmic', LogarithmicScale, defaultConfig);

};

},{"34":34,"45":45}],56:[function(require,module,exports){
'use strict';

var defaults = require(25);
var helpers = require(45);
var Ticks = require(34);

module.exports = function(Chart) {

	var globalDefaults = defaults.global;

	var defaultConfig = {
		display: true,

		// Boolean - Whether to animate scaling the chart from the centre
		animate: true,
		position: 'chartArea',

		angleLines: {
			display: true,
			color: 'rgba(0, 0, 0, 0.1)',
			lineWidth: 1
		},

		gridLines: {
			circular: false
		},

		// label settings
		ticks: {
			// Boolean - Show a backdrop to the scale label
			showLabelBackdrop: true,

			// String - The colour of the label backdrop
			backdropColor: 'rgba(255,255,255,0.75)',

			// Number - The backdrop padding above & below the label in pixels
			backdropPaddingY: 2,

			// Number - The backdrop padding to the side of the label in pixels
			backdropPaddingX: 2,

			callback: Ticks.formatters.linear
		},

		pointLabels: {
			// Boolean - if true, show point labels
			display: true,

			// Number - Point label font size in pixels
			fontSize: 10,

			// Function - Used to convert point labels
			callback: function(label) {
				return label;
			}
		}
	};

	function getValueCount(scale) {
		var opts = scale.options;
		return opts.angleLines.display || opts.pointLabels.display ? scale.chart.data.labels.length : 0;
	}

	function getPointLabelFontOptions(scale) {
		var pointLabelOptions = scale.options.pointLabels;
		var fontSize = helpers.valueOrDefault(pointLabelOptions.fontSize, globalDefaults.defaultFontSize);
		var fontStyle = helpers.valueOrDefault(pointLabelOptions.fontStyle, globalDefaults.defaultFontStyle);
		var fontFamily = helpers.valueOrDefault(pointLabelOptions.fontFamily, globalDefaults.defaultFontFamily);
		var font = helpers.fontString(fontSize, fontStyle, fontFamily);

		return {
			size: fontSize,
			style: fontStyle,
			family: fontFamily,
			font: font
		};
	}

	function measureLabelSize(ctx, fontSize, label) {
		if (helpers.isArray(label)) {
			return {
				w: helpers.longestText(ctx, ctx.font, label),
				h: (label.length * fontSize) + ((label.length - 1) * 1.5 * fontSize)
			};
		}

		return {
			w: ctx.measureText(label).width,
			h: fontSize
		};
	}

	function determineLimits(angle, pos, size, min, max) {
		if (angle === min || angle === max) {
			return {
				start: pos - (size / 2),
				end: pos + (size / 2)
			};
		} else if (angle < min || angle > max) {
			return {
				start: pos - size - 5,
				end: pos
			};
		}

		return {
			start: pos,
			end: pos + size + 5
		};
	}

	/**
	 * Helper function to fit a radial linear scale with point labels
	 */
	function fitWithPointLabels(scale) {
		/*
		 * Right, this is really confusing and there is a lot of maths going on here
		 * The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
		 *
		 * Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
		 *
		 * Solution:
		 *
		 * We assume the radius of the polygon is half the size of the canvas at first
		 * at each index we check if the text overlaps.
		 *
		 * Where it does, we store that angle and that index.
		 *
		 * After finding the largest index and angle we calculate how much we need to remove
		 * from the shape radius to move the point inwards by that x.
		 *
		 * We average the left and right distances to get the maximum shape radius that can fit in the box
		 * along with labels.
		 *
		 * Once we have that, we can find the centre point for the chart, by taking the x text protrusion
		 * on each side, removing that from the size, halving it and adding the left x protrusion width.
		 *
		 * This will mean we have a shape fitted to the canvas, as large as it can be with the labels
		 * and position it in the most space efficient manner
		 *
		 * https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
		 */

		var plFont = getPointLabelFontOptions(scale);

		// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
		// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
		var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
		var furthestLimits = {
			r: scale.width,
			l: 0,
			t: scale.height,
			b: 0
		};
		var furthestAngles = {};
		var i, textSize, pointPosition;

		scale.ctx.font = plFont.font;
		scale._pointLabelSizes = [];

		var valueCount = getValueCount(scale);
		for (i = 0; i < valueCount; i++) {
			pointPosition = scale.getPointPosition(i, largestPossibleRadius);
			textSize = measureLabelSize(scale.ctx, plFont.size, scale.pointLabels[i] || '');
			scale._pointLabelSizes[i] = textSize;

			// Add quarter circle to make degree 0 mean top of circle
			var angleRadians = scale.getIndexAngle(i);
			var angle = helpers.toDegrees(angleRadians) % 360;
			var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
			var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);

			if (hLimits.start < furthestLimits.l) {
				furthestLimits.l = hLimits.start;
				furthestAngles.l = angleRadians;
			}

			if (hLimits.end > furthestLimits.r) {
				furthestLimits.r = hLimits.end;
				furthestAngles.r = angleRadians;
			}

			if (vLimits.start < furthestLimits.t) {
				furthestLimits.t = vLimits.start;
				furthestAngles.t = angleRadians;
			}

			if (vLimits.end > furthestLimits.b) {
				furthestLimits.b = vLimits.end;
				furthestAngles.b = angleRadians;
			}
		}

		scale.setReductions(largestPossibleRadius, furthestLimits, furthestAngles);
	}

	/**
	 * Helper function to fit a radial linear scale with no point labels
	 */
	function fit(scale) {
		var largestPossibleRadius = Math.min(scale.height / 2, scale.width / 2);
		scale.drawingArea = Math.round(largestPossibleRadius);
		scale.setCenterPoint(0, 0, 0, 0);
	}

	function getTextAlignForAngle(angle) {
		if (angle === 0 || angle === 180) {
			return 'center';
		} else if (angle < 180) {
			return 'left';
		}

		return 'right';
	}

	function fillText(ctx, text, position, fontSize) {
		if (helpers.isArray(text)) {
			var y = position.y;
			var spacing = 1.5 * fontSize;

			for (var i = 0; i < text.length; ++i) {
				ctx.fillText(text[i], position.x, y);
				y += spacing;
			}
		} else {
			ctx.fillText(text, position.x, position.y);
		}
	}

	function adjustPointPositionForLabelHeight(angle, textSize, position) {
		if (angle === 90 || angle === 270) {
			position.y -= (textSize.h / 2);
		} else if (angle > 270 || angle < 90) {
			position.y -= textSize.h;
		}
	}

	function drawPointLabels(scale) {
		var ctx = scale.ctx;
		var valueOrDefault = helpers.valueOrDefault;
		var opts = scale.options;
		var angleLineOpts = opts.angleLines;
		var pointLabelOpts = opts.pointLabels;

		ctx.lineWidth = angleLineOpts.lineWidth;
		ctx.strokeStyle = angleLineOpts.color;

		var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);

		// Point Label Font
		var plFont = getPointLabelFontOptions(scale);

		ctx.textBaseline = 'top';

		for (var i = getValueCount(scale) - 1; i >= 0; i--) {
			if (angleLineOpts.display) {
				var outerPosition = scale.getPointPosition(i, outerDistance);
				ctx.beginPath();
				ctx.moveTo(scale.xCenter, scale.yCenter);
				ctx.lineTo(outerPosition.x, outerPosition.y);
				ctx.stroke();
				ctx.closePath();
			}

			if (pointLabelOpts.display) {
				// Extra 3px out for some label spacing
				var pointLabelPosition = scale.getPointPosition(i, outerDistance + 5);

				// Keep this in loop since we may support array properties here
				var pointLabelFontColor = valueOrDefault(pointLabelOpts.fontColor, globalDefaults.defaultFontColor);
				ctx.font = plFont.font;
				ctx.fillStyle = pointLabelFontColor;

				var angleRadians = scale.getIndexAngle(i);
				var angle = helpers.toDegrees(angleRadians);
				ctx.textAlign = getTextAlignForAngle(angle);
				adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
				fillText(ctx, scale.pointLabels[i] || '', pointLabelPosition, plFont.size);
			}
		}
	}

	function drawRadiusLine(scale, gridLineOpts, radius, index) {
		var ctx = scale.ctx;
		ctx.strokeStyle = helpers.valueAtIndexOrDefault(gridLineOpts.color, index - 1);
		ctx.lineWidth = helpers.valueAtIndexOrDefault(gridLineOpts.lineWidth, index - 1);

		if (scale.options.gridLines.circular) {
			// Draw circular arcs between the points
			ctx.beginPath();
			ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
			ctx.closePath();
			ctx.stroke();
		} else {
			// Draw straight lines connecting each index
			var valueCount = getValueCount(scale);

			if (valueCount === 0) {
				return;
			}

			ctx.beginPath();
			var pointPosition = scale.getPointPosition(0, radius);
			ctx.moveTo(pointPosition.x, pointPosition.y);

			for (var i = 1; i < valueCount; i++) {
				pointPosition = scale.getPointPosition(i, radius);
				ctx.lineTo(pointPosition.x, pointPosition.y);
			}

			ctx.closePath();
			ctx.stroke();
		}
	}

	function numberOrZero(param) {
		return helpers.isNumber(param) ? param : 0;
	}

	var LinearRadialScale = Chart.LinearScaleBase.extend({
		setDimensions: function() {
			var me = this;
			var opts = me.options;
			var tickOpts = opts.ticks;
			// Set the unconstrained dimension before label rotation
			me.width = me.maxWidth;
			me.height = me.maxHeight;
			me.xCenter = Math.round(me.width / 2);
			me.yCenter = Math.round(me.height / 2);

			var minSize = helpers.min([me.height, me.width]);
			var tickFontSize = helpers.valueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
			me.drawingArea = opts.display ? (minSize / 2) - (tickFontSize / 2 + tickOpts.backdropPaddingY) : (minSize / 2);
		},
		determineDataLimits: function() {
			var me = this;
			var chart = me.chart;
			var min = Number.POSITIVE_INFINITY;
			var max = Number.NEGATIVE_INFINITY;

			helpers.each(chart.data.datasets, function(dataset, datasetIndex) {
				if (chart.isDatasetVisible(datasetIndex)) {
					var meta = chart.getDatasetMeta(datasetIndex);

					helpers.each(dataset.data, function(rawValue, index) {
						var value = +me.getRightValue(rawValue);
						if (isNaN(value) || meta.data[index].hidden) {
							return;
						}

						min = Math.min(value, min);
						max = Math.max(value, max);
					});
				}
			});

			me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
			me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);

			// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
			me.handleTickRangeOptions();
		},
		getTickLimit: function() {
			var tickOpts = this.options.ticks;
			var tickFontSize = helpers.valueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
			return Math.min(tickOpts.maxTicksLimit ? tickOpts.maxTicksLimit : 11, Math.ceil(this.drawingArea / (1.5 * tickFontSize)));
		},
		convertTicksToLabels: function() {
			var me = this;

			Chart.LinearScaleBase.prototype.convertTicksToLabels.call(me);

			// Point labels
			me.pointLabels = me.chart.data.labels.map(me.options.pointLabels.callback, me);
		},
		getLabelForIndex: function(index, datasetIndex) {
			return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);
		},
		fit: function() {
			if (this.options.pointLabels.display) {
				fitWithPointLabels(this);
			} else {
				fit(this);
			}
		},
		/**
		 * Set radius reductions and determine new radius and center point
		 * @private
		 */
		setReductions: function(largestPossibleRadius, furthestLimits, furthestAngles) {
			var me = this;
			var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
			var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
			var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
			var radiusReductionBottom = -Math.max(furthestLimits.b - me.height, 0) / Math.cos(furthestAngles.b);

			radiusReductionLeft = numberOrZero(radiusReductionLeft);
			radiusReductionRight = numberOrZero(radiusReductionRight);
			radiusReductionTop = numberOrZero(radiusReductionTop);
			radiusReductionBottom = numberOrZero(radiusReductionBottom);

			me.drawingArea = Math.min(
				Math.round(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
				Math.round(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
			me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
		},
		setCenterPoint: function(leftMovement, rightMovement, topMovement, bottomMovement) {
			var me = this;
			var maxRight = me.width - rightMovement - me.drawingArea;
			var maxLeft = leftMovement + me.drawingArea;
			var maxTop = topMovement + me.drawingArea;
			var maxBottom = me.height - bottomMovement - me.drawingArea;

			me.xCenter = Math.round(((maxLeft + maxRight) / 2) + me.left);
			me.yCenter = Math.round(((maxTop + maxBottom) / 2) + me.top);
		},

		getIndexAngle: function(index) {
			var angleMultiplier = (Math.PI * 2) / getValueCount(this);
			var startAngle = this.chart.options && this.chart.options.startAngle ?
				this.chart.options.startAngle :
				0;

			var startAngleRadians = startAngle * Math.PI * 2 / 360;

			// Start from the top instead of right, so remove a quarter of the circle
			return index * angleMultiplier + startAngleRadians;
		},
		getDistanceFromCenterForValue: function(value) {
			var me = this;

			if (value === null) {
				return 0; // null always in center
			}

			// Take into account half font size + the yPadding of the top value
			var scalingFactor = me.drawingArea / (me.max - me.min);
			if (me.options.ticks.reverse) {
				return (me.max - value) * scalingFactor;
			}
			return (value - me.min) * scalingFactor;
		},
		getPointPosition: function(index, distanceFromCenter) {
			var me = this;
			var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
			return {
				x: Math.round(Math.cos(thisAngle) * distanceFromCenter) + me.xCenter,
				y: Math.round(Math.sin(thisAngle) * distanceFromCenter) + me.yCenter
			};
		},
		getPointPositionForValue: function(index, value) {
			return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
		},

		getBasePosition: function() {
			var me = this;
			var min = me.min;
			var max = me.max;

			return me.getPointPositionForValue(0,
				me.beginAtZero ? 0 :
				min < 0 && max < 0 ? max :
				min > 0 && max > 0 ? min :
				0);
		},

		draw: function() {
			var me = this;
			var opts = me.options;
			var gridLineOpts = opts.gridLines;
			var tickOpts = opts.ticks;
			var valueOrDefault = helpers.valueOrDefault;

			if (opts.display) {
				var ctx = me.ctx;
				var startAngle = this.getIndexAngle(0);

				// Tick Font
				var tickFontSize = valueOrDefault(tickOpts.fontSize, globalDefaults.defaultFontSize);
				var tickFontStyle = valueOrDefault(tickOpts.fontStyle, globalDefaults.defaultFontStyle);
				var tickFontFamily = valueOrDefault(tickOpts.fontFamily, globalDefaults.defaultFontFamily);
				var tickLabelFont = helpers.fontString(tickFontSize, tickFontStyle, tickFontFamily);

				helpers.each(me.ticks, function(label, index) {
					// Don't draw a centre value (if it is minimum)
					if (index > 0 || tickOpts.reverse) {
						var yCenterOffset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);

						// Draw circular lines around the scale
						if (gridLineOpts.display && index !== 0) {
							drawRadiusLine(me, gridLineOpts, yCenterOffset, index);
						}

						if (tickOpts.display) {
							var tickFontColor = valueOrDefault(tickOpts.fontColor, globalDefaults.defaultFontColor);
							ctx.font = tickLabelFont;

							ctx.save();
							ctx.translate(me.xCenter, me.yCenter);
							ctx.rotate(startAngle);

							if (tickOpts.showLabelBackdrop) {
								var labelWidth = ctx.measureText(label).width;
								ctx.fillStyle = tickOpts.backdropColor;
								ctx.fillRect(
									-labelWidth / 2 - tickOpts.backdropPaddingX,
									-yCenterOffset - tickFontSize / 2 - tickOpts.backdropPaddingY,
									labelWidth + tickOpts.backdropPaddingX * 2,
									tickFontSize + tickOpts.backdropPaddingY * 2
								);
							}

							ctx.textAlign = 'center';
							ctx.textBaseline = 'middle';
							ctx.fillStyle = tickFontColor;
							ctx.fillText(label, 0, -yCenterOffset);
							ctx.restore();
						}
					}
				});

				if (opts.angleLines.display || opts.pointLabels.display) {
					drawPointLabels(me);
				}
			}
		}
	});
	Chart.scaleService.registerScaleType('radialLinear', LinearRadialScale, defaultConfig);

};

},{"25":25,"34":34,"45":45}],57:[function(require,module,exports){
/* global window: false */
'use strict';

var moment = require(6);
moment = typeof moment === 'function' ? moment : window.moment;

var defaults = require(25);
var helpers = require(45);

// Integer constants are from the ES6 spec.
var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

var INTERVALS = {
	millisecond: {
		common: true,
		size: 1,
		steps: [1, 2, 5, 10, 20, 50, 100, 250, 500]
	},
	second: {
		common: true,
		size: 1000,
		steps: [1, 2, 5, 10, 30]
	},
	minute: {
		common: true,
		size: 60000,
		steps: [1, 2, 5, 10, 30]
	},
	hour: {
		common: true,
		size: 3600000,
		steps: [1, 2, 3, 6, 12]
	},
	day: {
		common: true,
		size: 86400000,
		steps: [1, 2, 5]
	},
	week: {
		common: false,
		size: 604800000,
		steps: [1, 2, 3, 4]
	},
	month: {
		common: true,
		size: 2.628e9,
		steps: [1, 2, 3]
	},
	quarter: {
		common: false,
		size: 7.884e9,
		steps: [1, 2, 3, 4]
	},
	year: {
		common: true,
		size: 3.154e10
	}
};

var UNITS = Object.keys(INTERVALS);

function sorter(a, b) {
	return a - b;
}

function arrayUnique(items) {
	var hash = {};
	var out = [];
	var i, ilen, item;

	for (i = 0, ilen = items.length; i < ilen; ++i) {
		item = items[i];
		if (!hash[item]) {
			hash[item] = true;
			out.push(item);
		}
	}

	return out;
}

/**
 * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
 * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
 * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
 * extremity (left + width or top + height). Note that it would be more optimized to directly
 * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
 * to create the lookup table. The table ALWAYS contains at least two items: min and max.
 *
 * @param {Number[]} timestamps - timestamps sorted from lowest to highest.
 * @param {String} distribution - If 'linear', timestamps will be spread linearly along the min
 * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
 * If 'series', timestamps will be positioned at the same distance from each other. In this
 * case, only timestamps that break the time linearity are registered, meaning that in the
 * best case, all timestamps are linear, the table contains only min and max.
 */
function buildLookupTable(timestamps, min, max, distribution) {
	if (distribution === 'linear' || !timestamps.length) {
		return [
			{time: min, pos: 0},
			{time: max, pos: 1}
		];
	}

	var table = [];
	var items = [min];
	var i, ilen, prev, curr, next;

	for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
		curr = timestamps[i];
		if (curr > min && curr < max) {
			items.push(curr);
		}
	}

	items.push(max);

	for (i = 0, ilen = items.length; i < ilen; ++i) {
		next = items[i + 1];
		prev = items[i - 1];
		curr = items[i];

		// only add points that breaks the scale linearity
		if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {
			table.push({time: curr, pos: i / (ilen - 1)});
		}
	}

	return table;
}

// @see adapted from http://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
function lookup(table, key, value) {
	var lo = 0;
	var hi = table.length - 1;
	var mid, i0, i1;

	while (lo >= 0 && lo <= hi) {
		mid = (lo + hi) >> 1;
		i0 = table[mid - 1] || null;
		i1 = table[mid];

		if (!i0) {
			// given value is outside table (before first item)
			return {lo: null, hi: i1};
		} else if (i1[key] < value) {
			lo = mid + 1;
		} else if (i0[key] > value) {
			hi = mid - 1;
		} else {
			return {lo: i0, hi: i1};
		}
	}

	// given value is outside table (after last item)
	return {lo: i1, hi: null};
}

/**
 * Linearly interpolates the given source `value` using the table items `skey` values and
 * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
 * returns the position for a timestamp equal to 42. If value is out of bounds, values at
 * index [0, 1] or [n - 1, n] are used for the interpolation.
 */
function interpolate(table, skey, sval, tkey) {
	var range = lookup(table, skey, sval);

	// Note: the lookup table ALWAYS contains at least 2 items (min and max)
	var prev = !range.lo ? table[0] : !range.hi ? table[table.length - 2] : range.lo;
	var next = !range.lo ? table[1] : !range.hi ? table[table.length - 1] : range.hi;

	var span = next[skey] - prev[skey];
	var ratio = span ? (sval - prev[skey]) / span : 0;
	var offset = (next[tkey] - prev[tkey]) * ratio;

	return prev[tkey] + offset;
}

/**
 * Convert the given value to a moment object using the given time options.
 * @see http://momentjs.com/docs/#/parsing/
 */
function momentify(value, options) {
	var parser = options.parser;
	var format = options.parser || options.format;

	if (typeof parser === 'function') {
		return parser(value);
	}

	if (typeof value === 'string' && typeof format === 'string') {
		return moment(value, format);
	}

	if (!(value instanceof moment)) {
		value = moment(value);
	}

	if (value.isValid()) {
		return value;
	}

	// Labels are in an incompatible moment format and no `parser` has been provided.
	// The user might still use the deprecated `format` option to convert his inputs.
	if (typeof format === 'function') {
		return format(value);
	}

	return value;
}

function parse(input, scale) {
	if (helpers.isNullOrUndef(input)) {
		return null;
	}

	var options = scale.options.time;
	var value = momentify(scale.getRightValue(input), options);
	if (!value.isValid()) {
		return null;
	}

	if (options.round) {
		value.startOf(options.round);
	}

	return value.valueOf();
}

/**
 * Returns the number of unit to skip to be able to display up to `capacity` number of ticks
 * in `unit` for the given `min` / `max` range and respecting the interval steps constraints.
 */
function determineStepSize(min, max, unit, capacity) {
	var range = max - min;
	var interval = INTERVALS[unit];
	var milliseconds = interval.size;
	var steps = interval.steps;
	var i, ilen, factor;

	if (!steps) {
		return Math.ceil(range / ((capacity || 1) * milliseconds));
	}

	for (i = 0, ilen = steps.length; i < ilen; ++i) {
		factor = steps[i];
		if (Math.ceil(range / (milliseconds * factor)) <= capacity) {
			break;
		}
	}

	return factor;
}

/**
 * Figures out what unit results in an appropriate number of auto-generated ticks
 */
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
	var ilen = UNITS.length;
	var i, interval, factor;

	for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
		interval = INTERVALS[UNITS[i]];
		factor = interval.steps ? interval.steps[interval.steps.length - 1] : MAX_INTEGER;

		if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
			return UNITS[i];
		}
	}

	return UNITS[ilen - 1];
}

/**
 * Figures out what unit to format a set of ticks with
 */
function determineUnitForFormatting(ticks, minUnit, min, max) {
	var duration = moment.duration(moment(max).diff(moment(min)));
	var ilen = UNITS.length;
	var i, unit;

	for (i = ilen - 1; i >= UNITS.indexOf(minUnit); i--) {
		unit = UNITS[i];
		if (INTERVALS[unit].common && duration.as(unit) >= ticks.length) {
			return unit;
		}
	}

	return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
}

function determineMajorUnit(unit) {
	for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
		if (INTERVALS[UNITS[i]].common) {
			return UNITS[i];
		}
	}
}

/**
 * Generates a maximum of `capacity` timestamps between min and max, rounded to the
 * `minor` unit, aligned on the `major` unit and using the given scale time `options`.
 * Important: this method can return ticks outside the min and max range, it's the
 * responsibility of the calling code to clamp values if needed.
 */
function generate(min, max, capacity, options) {
	var timeOpts = options.time;
	var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
	var major = determineMajorUnit(minor);
	var stepSize = helpers.valueOrDefault(timeOpts.stepSize, timeOpts.unitStepSize);
	var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
	var majorTicksEnabled = options.ticks.major.enabled;
	var interval = INTERVALS[minor];
	var first = moment(min);
	var last = moment(max);
	var ticks = [];
	var time;

	if (!stepSize) {
		stepSize = determineStepSize(min, max, minor, capacity);
	}

	// For 'week' unit, handle the first day of week option
	if (weekday) {
		first = first.isoWeekday(weekday);
		last = last.isoWeekday(weekday);
	}

	// Align first/last ticks on unit
	first = first.startOf(weekday ? 'day' : minor);
	last = last.startOf(weekday ? 'day' : minor);

	// Make sure that the last tick include max
	if (last < max) {
		last.add(1, minor);
	}

	time = moment(first);

	if (majorTicksEnabled && major && !weekday && !timeOpts.round) {
		// Align the first tick on the previous `minor` unit aligned on the `major` unit:
		// we first aligned time on the previous `major` unit then add the number of full
		// stepSize there is between first and the previous major time.
		time.startOf(major);
		time.add(~~((first - time) / (interval.size * stepSize)) * stepSize, minor);
	}

	for (; time < last; time.add(stepSize, minor)) {
		ticks.push(+time);
	}

	ticks.push(+time);

	return ticks;
}

/**
 * Returns the right and left offsets from edges in the form of {left, right}.
 * Offsets are added when the `offset` option is true.
 */
function computeOffsets(table, ticks, min, max, options) {
	var left = 0;
	var right = 0;
	var upper, lower;

	if (options.offset && ticks.length) {
		if (!options.time.min) {
			upper = ticks.length > 1 ? ticks[1] : max;
			lower = ticks[0];
			left = (
				interpolate(table, 'time', upper, 'pos') -
				interpolate(table, 'time', lower, 'pos')
			) / 2;
		}
		if (!options.time.max) {
			upper = ticks[ticks.length - 1];
			lower = ticks.length > 1 ? ticks[ticks.length - 2] : min;
			right = (
				interpolate(table, 'time', upper, 'pos') -
				interpolate(table, 'time', lower, 'pos')
			) / 2;
		}
	}

	return {left: left, right: right};
}

function ticksFromTimestamps(values, majorUnit) {
	var ticks = [];
	var i, ilen, value, major;

	for (i = 0, ilen = values.length; i < ilen; ++i) {
		value = values[i];
		major = majorUnit ? value === +moment(value).startOf(majorUnit) : false;

		ticks.push({
			value: value,
			major: major
		});
	}

	return ticks;
}

module.exports = function(Chart) {

	var defaultConfig = {
		position: 'bottom',

		/**
		 * Data distribution along the scale:
		 * - 'linear': data are spread according to their time (distances can vary),
		 * - 'series': data are spread at the same distance from each other.
		 * @see https://github.com/chartjs/Chart.js/pull/4507
		 * @since 2.7.0
		 */
		distribution: 'linear',

		/**
		 * Scale boundary strategy (bypassed by min/max time options)
		 * - `data`: make sure data are fully visible, ticks outside are removed
		 * - `ticks`: make sure ticks are fully visible, data outside are truncated
		 * @see https://github.com/chartjs/Chart.js/pull/4556
		 * @since 2.7.0
		 */
		bounds: 'data',

		time: {
			parser: false, // false == a pattern string from http://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
			format: false, // DEPRECATED false == date objects, moment object, callback or a pattern string from http://momentjs.com/docs/#/parsing/string-format/
			unit: false, // false == automatic or override with week, month, year, etc.
			round: false, // none, or override with week, month, year, etc.
			displayFormat: false, // DEPRECATED
			isoWeekday: false, // override week start day - see http://momentjs.com/docs/#/get-set/iso-weekday/
			minUnit: 'millisecond',

			// defaults to unit's corresponding unitFormat below or override using pattern string from http://momentjs.com/docs/#/displaying/format/
			displayFormats: {
				millisecond: 'h:mm:ss.SSS a', // 11:20:01.123 AM,
				second: 'h:mm:ss a', // 11:20:01 AM
				minute: 'h:mm a', // 11:20 AM
				hour: 'hA', // 5PM
				day: 'MMM D', // Sep 4
				week: 'll', // Week 46, or maybe "[W]WW - YYYY" ?
				month: 'MMM YYYY', // Sept 2015
				quarter: '[Q]Q - YYYY', // Q3
				year: 'YYYY' // 2015
			},
		},
		ticks: {
			autoSkip: false,

			/**
			 * Ticks generation input values:
			 * - 'auto': generates "optimal" ticks based on scale size and time options.
			 * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
			 * - 'labels': generates ticks from user given `data.labels` values ONLY.
			 * @see https://github.com/chartjs/Chart.js/pull/4507
			 * @since 2.7.0
			 */
			source: 'auto',

			major: {
				enabled: false
			}
		}
	};

	var TimeScale = Chart.Scale.extend({
		initialize: function() {
			if (!moment) {
				throw new Error('Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com');
			}

			this.mergeTicksOptions();

			Chart.Scale.prototype.initialize.call(this);
		},

		update: function() {
			var me = this;
			var options = me.options;

			// DEPRECATIONS: output a message only one time per update
			if (options.time && options.time.format) {
				console.warn('options.time.format is deprecated and replaced by options.time.parser.');
			}

			return Chart.Scale.prototype.update.apply(me, arguments);
		},

		/**
		 * Allows data to be referenced via 't' attribute
		 */
		getRightValue: function(rawValue) {
			if (rawValue && rawValue.t !== undefined) {
				rawValue = rawValue.t;
			}
			return Chart.Scale.prototype.getRightValue.call(this, rawValue);
		},

		determineDataLimits: function() {
			var me = this;
			var chart = me.chart;
			var timeOpts = me.options.time;
			var min = MAX_INTEGER;
			var max = MIN_INTEGER;
			var timestamps = [];
			var datasets = [];
			var labels = [];
			var i, j, ilen, jlen, data, timestamp;

			// Convert labels to timestamps
			for (i = 0, ilen = chart.data.labels.length; i < ilen; ++i) {
				labels.push(parse(chart.data.labels[i], me));
			}

			// Convert data to timestamps
			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
				if (chart.isDatasetVisible(i)) {
					data = chart.data.datasets[i].data;

					// Let's consider that all data have the same format.
					if (helpers.isObject(data[0])) {
						datasets[i] = [];

						for (j = 0, jlen = data.length; j < jlen; ++j) {
							timestamp = parse(data[j], me);
							timestamps.push(timestamp);
							datasets[i][j] = timestamp;
						}
					} else {
						timestamps.push.apply(timestamps, labels);
						datasets[i] = labels.slice(0);
					}
				} else {
					datasets[i] = [];
				}
			}

			if (labels.length) {
				// Sort labels **after** data have been converted
				labels = arrayUnique(labels).sort(sorter);
				min = Math.min(min, labels[0]);
				max = Math.max(max, labels[labels.length - 1]);
			}

			if (timestamps.length) {
				timestamps = arrayUnique(timestamps).sort(sorter);
				min = Math.min(min, timestamps[0]);
				max = Math.max(max, timestamps[timestamps.length - 1]);
			}

			min = parse(timeOpts.min, me) || min;
			max = parse(timeOpts.max, me) || max;

			// In case there is no valid min/max, let's use today limits
			min = min === MAX_INTEGER ? +moment().startOf('day') : min;
			max = max === MIN_INTEGER ? +moment().endOf('day') + 1 : max;

			// Make sure that max is strictly higher than min (required by the lookup table)
			me.min = Math.min(min, max);
			me.max = Math.max(min + 1, max);

			// PRIVATE
			me._horizontal = me.isHorizontal();
			me._table = [];
			me._timestamps = {
				data: timestamps,
				datasets: datasets,
				labels: labels
			};
		},

		buildTicks: function() {
			var me = this;
			var min = me.min;
			var max = me.max;
			var options = me.options;
			var timeOpts = options.time;
			var timestamps = [];
			var ticks = [];
			var i, ilen, timestamp;

			switch (options.ticks.source) {
			case 'data':
				timestamps = me._timestamps.data;
				break;
			case 'labels':
				timestamps = me._timestamps.labels;
				break;
			case 'auto':
			default:
				timestamps = generate(min, max, me.getLabelCapacity(min), options);
			}

			if (options.bounds === 'ticks' && timestamps.length) {
				min = timestamps[0];
				max = timestamps[timestamps.length - 1];
			}

			// Enforce limits with user min/max options
			min = parse(timeOpts.min, me) || min;
			max = parse(timeOpts.max, me) || max;

			// Remove ticks outside the min/max range
			for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
				timestamp = timestamps[i];
				if (timestamp >= min && timestamp <= max) {
					ticks.push(timestamp);
				}
			}

			me.min = min;
			me.max = max;

			// PRIVATE
			me._unit = timeOpts.unit || determineUnitForFormatting(ticks, timeOpts.minUnit, me.min, me.max);
			me._majorUnit = determineMajorUnit(me._unit);
			me._table = buildLookupTable(me._timestamps.data, min, max, options.distribution);
			me._offsets = computeOffsets(me._table, ticks, min, max, options);

			return ticksFromTimestamps(ticks, me._majorUnit);
		},

		getLabelForIndex: function(index, datasetIndex) {
			var me = this;
			var data = me.chart.data;
			var timeOpts = me.options.time;
			var label = data.labels && index < data.labels.length ? data.labels[index] : '';
			var value = data.datasets[datasetIndex].data[index];

			if (helpers.isObject(value)) {
				label = me.getRightValue(value);
			}
			if (timeOpts.tooltipFormat) {
				label = momentify(label, timeOpts).format(timeOpts.tooltipFormat);
			}

			return label;
		},

		/**
		 * Function to format an individual tick mark
		 * @private
		 */
		tickFormatFunction: function(tick, index, ticks, formatOverride) {
			var me = this;
			var options = me.options;
			var time = tick.valueOf();
			var formats = options.time.displayFormats;
			var minorFormat = formats[me._unit];
			var majorUnit = me._majorUnit;
			var majorFormat = formats[majorUnit];
			var majorTime = tick.clone().startOf(majorUnit).valueOf();
			var majorTickOpts = options.ticks.major;
			var major = majorTickOpts.enabled && majorUnit && majorFormat && time === majorTime;
			var label = tick.format(formatOverride ? formatOverride : major ? majorFormat : minorFormat);
			var tickOpts = major ? majorTickOpts : options.ticks.minor;
			var formatter = helpers.valueOrDefault(tickOpts.callback, tickOpts.userCallback);

			return formatter ? formatter(label, index, ticks) : label;
		},

		convertTicksToLabels: function(ticks) {
			var labels = [];
			var i, ilen;

			for (i = 0, ilen = ticks.length; i < ilen; ++i) {
				labels.push(this.tickFormatFunction(moment(ticks[i].value), i, ticks));
			}

			return labels;
		},

		/**
		 * @private
		 */
		getPixelForOffset: function(time) {
			var me = this;
			var size = me._horizontal ? me.width : me.height;
			var start = me._horizontal ? me.left : me.top;
			var pos = interpolate(me._table, 'time', time, 'pos');

			return start + size * (me._offsets.left + pos) / (me._offsets.left + 1 + me._offsets.right);
		},

		getPixelForValue: function(value, index, datasetIndex) {
			var me = this;
			var time = null;

			if (index !== undefined && datasetIndex !== undefined) {
				time = me._timestamps.datasets[datasetIndex][index];
			}

			if (time === null) {
				time = parse(value, me);
			}

			if (time !== null) {
				return me.getPixelForOffset(time);
			}
		},

		getPixelForTick: function(index) {
			var ticks = this.getTicks();
			return index >= 0 && index < ticks.length ?
				this.getPixelForOffset(ticks[index].value) :
				null;
		},

		getValueForPixel: function(pixel) {
			var me = this;
			var size = me._horizontal ? me.width : me.height;
			var start = me._horizontal ? me.left : me.top;
			var pos = (size ? (pixel - start) / size : 0) * (me._offsets.left + 1 + me._offsets.left) - me._offsets.right;
			var time = interpolate(me._table, 'pos', pos, 'time');

			return moment(time);
		},

		/**
		 * Crude approximation of what the label width might be
		 * @private
		 */
		getLabelWidth: function(label) {
			var me = this;
			var ticksOpts = me.options.ticks;
			var tickLabelWidth = me.ctx.measureText(label).width;
			var angle = helpers.toRadians(ticksOpts.maxRotation);
			var cosRotation = Math.cos(angle);
			var sinRotation = Math.sin(angle);
			var tickFontSize = helpers.valueOrDefault(ticksOpts.fontSize, defaults.global.defaultFontSize);

			return (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation);
		},

		/**
		 * @private
		 */
		getLabelCapacity: function(exampleTime) {
			var me = this;

			var formatOverride = me.options.time.displayFormats.millisecond;	// Pick the longest format for guestimation

			var exampleLabel = me.tickFormatFunction(moment(exampleTime), 0, [], formatOverride);
			var tickLabelWidth = me.getLabelWidth(exampleLabel);
			var innerWidth = me.isHorizontal() ? me.width : me.height;

			return Math.floor(innerWidth / tickLabelWidth);
		}
	});

	Chart.scaleService.registerScaleType('time', TimeScale, defaultConfig);
};

},{"25":25,"45":45,"6":6}]},{},[7])(7)
});
/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 2.7.1
 *
 * Copyright 2017 Nick Downie
 * Released under the MIT license
 * https://github.com/chartjs/Chart.js/blob/master/LICENSE.md
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).Chart=t()}}(function(){return function t(e,n,i){function a(r,l){if(!n[r]){if(!e[r]){var s="function"==typeof require&&require;if(!l&&s)return s(r,!0);if(o)return o(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[r]={exports:{}};e[r][0].call(d.exports,function(t){var n=e[r][1][t];return a(n||t)},d,d.exports,t,e,n,i)}return n[r].exports}for(var o="function"==typeof require&&require,r=0;r<i.length;r++)a(i[r]);return a}({1:[function(t,e,n){},{}],2:[function(t,e,n){function i(t){if(t){var e=[0,0,0],n=1,i=t.match(/^#([a-fA-F0-9]{3})$/i);if(i){i=i[1];for(a=0;a<e.length;a++)e[a]=parseInt(i[a]+i[a],16)}else if(i=t.match(/^#([a-fA-F0-9]{6})$/i)){i=i[1];for(a=0;a<e.length;a++)e[a]=parseInt(i.slice(2*a,2*a+2),16)}else if(i=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(a=0;a<e.length;a++)e[a]=parseInt(i[a+1]);n=parseFloat(i[4])}else if(i=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(a=0;a<e.length;a++)e[a]=Math.round(2.55*parseFloat(i[a+1]));n=parseFloat(i[4])}else if(i=t.match(/(\w+)/)){if("transparent"==i[1])return[0,0,0,0];if(!(e=c[i[1]]))return}for(var a=0;a<e.length;a++)e[a]=u(e[a],0,255);return n=n||0==n?u(n,0,1):1,e[3]=n,e}}function a(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[u(parseInt(e[1]),0,360),u(parseFloat(e[2]),0,100),u(parseFloat(e[3]),0,100),u(isNaN(n)?1:n,0,1)]}}}function o(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var n=parseFloat(e[4]);return[u(parseInt(e[1]),0,360),u(parseFloat(e[2]),0,100),u(parseFloat(e[3]),0,100),u(isNaN(n)?1:n,0,1)]}}}function r(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function l(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function s(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function u(t,e,n){return Math.min(Math.max(e,t),n)}function d(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var c=t(6);e.exports={getRgba:i,getHsla:a,getRgb:function(t){var e=i(t);return e&&e.slice(0,3)},getHsl:function(t){var e=a(t);return e&&e.slice(0,3)},getHwb:o,getAlpha:function(t){var e=i(t);return e?e[3]:(e=a(t))?e[3]:(e=o(t))?e[3]:void 0},hexString:function(t){return"#"+d(t[0])+d(t[1])+d(t[2])},rgbString:function(t,e){return e<1||t[3]&&t[3]<1?r(t,e):"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:r,percentString:function(t,e){return e<1||t[3]&&t[3]<1?l(t,e):"rgb("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%)"},percentaString:l,hslString:function(t,e){return e<1||t[3]&&t[3]<1?s(t,e):"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:s,hwbString:function(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return h[t.slice(0,3)]}};var h={};for(var f in c)h[c[f]]=f},{6:6}],3:[function(t,e,n){var i=t(5),a=t(2),o=function(t){if(t instanceof o)return t;if(!(this instanceof o))return new o(t);this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1};var e;"string"==typeof t?(e=a.getRgba(t))?this.setValues("rgb",e):(e=a.getHsla(t))?this.setValues("hsl",e):(e=a.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e))};o.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return a.hexString(this.values.rgb)},rgbString:function(){return a.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return a.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return a.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return a.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return a.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return a.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return a.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],n=0;n<t.length;n++){var i=t[n]/255;e[n]=i<=.03928?i/12.92:Math.pow((i+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),n=t.luminosity();return e>n?(e+.05)/(n+.05):(n+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,n=(e[0]+t)%360;return e[0]=n<0?360+n:n,this.setValues("hsl",e),this},mix:function(t,e){var n=this,i=t,a=void 0===e?.5:e,o=2*a-1,r=n.alpha()-i.alpha(),l=((o*r==-1?o:(o+r)/(1+o*r))+1)/2,s=1-l;return this.rgb(l*n.red()+s*i.red(),l*n.green()+s*i.green(),l*n.blue()+s*i.blue()).alpha(n.alpha()*a+i.alpha()*(1-a))},toJSON:function(){return this.rgb()},clone:function(){var t,e,n=new o,i=this.values,a=n.values;for(var r in i)i.hasOwnProperty(r)&&(t=i[r],"[object Array]"===(e={}.toString.call(t))?a[r]=t.slice(0):"[object Number]"===e?a[r]=t:console.error("unexpected color value:",t));return n}},o.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},o.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},o.prototype.getValues=function(t){for(var e=this.values,n={},i=0;i<t.length;i++)n[t.charAt(i)]=e[t][i];return 1!==e.alpha&&(n.a=e.alpha),n},o.prototype.setValues=function(t,e){var n,a=this.values,o=this.spaces,r=this.maxes,l=1;if(this.valid=!0,"alpha"===t)l=e;else if(e.length)a[t]=e.slice(0,t.length),l=e[t.length];else if(void 0!==e[t.charAt(0)]){for(n=0;n<t.length;n++)a[t][n]=e[t.charAt(n)];l=e.a}else if(void 0!==e[o[t][0]]){var s=o[t];for(n=0;n<t.length;n++)a[t][n]=e[s[n]];l=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===l?a.alpha:l)),"alpha"===t)return!1;var u;for(n=0;n<t.length;n++)u=Math.max(0,Math.min(r[t][n],a[t][n])),a[t][n]=Math.round(u);for(var d in o)d!==t&&(a[d]=i[t][d](a[t]));return!0},o.prototype.setSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n),this)},o.prototype.setChannel=function(t,e,n){var i=this.values[t];return void 0===n?i[e]:n===i[e]?this:(i[e]=n,this.setValues(t,i),this)},"undefined"!=typeof window&&(window.Color=o),e.exports=o},{2:2,5:5}],4:[function(t,e,n){function i(t){var e,n,i,a=t[0]/255,o=t[1]/255,r=t[2]/255,l=Math.min(a,o,r),s=Math.max(a,o,r),u=s-l;return s==l?e=0:a==s?e=(o-r)/u:o==s?e=2+(r-a)/u:r==s&&(e=4+(a-o)/u),(e=Math.min(60*e,360))<0&&(e+=360),i=(l+s)/2,n=s==l?0:i<=.5?u/(s+l):u/(2-s-l),[e,100*n,100*i]}function a(t){var e,n,i,a=t[0],o=t[1],r=t[2],l=Math.min(a,o,r),s=Math.max(a,o,r),u=s-l;return n=0==s?0:u/s*1e3/10,s==l?e=0:a==s?e=(o-r)/u:o==s?e=2+(r-a)/u:r==s&&(e=4+(a-o)/u),(e=Math.min(60*e,360))<0&&(e+=360),i=s/255*1e3/10,[e,n,i]}function o(t){var e=t[0],n=t[1],a=t[2];return[i(t)[0],100*(1/255*Math.min(e,Math.min(n,a))),100*(a=1-1/255*Math.max(e,Math.max(n,a)))]}function l(t){var e,n,i,a,o=t[0]/255,r=t[1]/255,l=t[2]/255;return a=Math.min(1-o,1-r,1-l),e=(1-o-a)/(1-a)||0,n=(1-r-a)/(1-a)||0,i=(1-l-a)/(1-a)||0,[100*e,100*n,100*i,100*a]}function s(t){return C[JSON.stringify(t)]}function u(t){var e=t[0]/255,n=t[1]/255,i=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)+.1805*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)),100*(.2126*e+.7152*n+.0722*i),100*(.0193*e+.1192*n+.9505*i)]}function d(t){var e,n,i,a=u(t),o=a[0],r=a[1],l=a[2];return o/=95.047,r/=100,l/=108.883,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,l=l>.008856?Math.pow(l,1/3):7.787*l+16/116,e=116*r-16,n=500*(o-r),i=200*(r-l),[e,n,i]}function c(t){var e,n,i,a,o,r=t[0]/360,l=t[1]/100,s=t[2]/100;if(0==l)return o=255*s,[o,o,o];e=2*s-(n=s<.5?s*(1+l):s+l-s*l),a=[0,0,0];for(var u=0;u<3;u++)(i=r+1/3*-(u-1))<0&&i++,i>1&&i--,o=6*i<1?e+6*(n-e)*i:2*i<1?n:3*i<2?e+(n-e)*(2/3-i)*6:e,a[u]=255*o;return a}function h(t){var e=t[0]/60,n=t[1]/100,i=t[2]/100,a=Math.floor(e)%6,o=e-Math.floor(e),r=255*i*(1-n),l=255*i*(1-n*o),s=255*i*(1-n*(1-o)),i=255*i;switch(a){case 0:return[i,s,r];case 1:return[l,i,r];case 2:return[r,i,s];case 3:return[r,l,i];case 4:return[s,r,i];case 5:return[i,r,l]}}function f(t){var e,n,i,a,o=t[0]/360,l=t[1]/100,s=t[2]/100,u=l+s;switch(u>1&&(l/=u,s/=u),e=Math.floor(6*o),n=1-s,i=6*o-e,0!=(1&e)&&(i=1-i),a=l+i*(n-l),e){default:case 6:case 0:r=n,g=a,b=l;break;case 1:r=a,g=n,b=l;break;case 2:r=l,g=n,b=a;break;case 3:r=l,g=a,b=n;break;case 4:r=a,g=l,b=n;break;case 5:r=n,g=l,b=a}return[255*r,255*g,255*b]}function p(t){var e,n,i,a=t[0]/100,o=t[1]/100,r=t[2]/100,l=t[3]/100;return e=1-Math.min(1,a*(1-l)+l),n=1-Math.min(1,o*(1-l)+l),i=1-Math.min(1,r*(1-l)+l),[255*e,255*n,255*i]}function v(t){var e,n,i,a=t[0]/100,o=t[1]/100,r=t[2]/100;return e=3.2406*a+-1.5372*o+-.4986*r,n=-.9689*a+1.8758*o+.0415*r,i=.0557*a+-.204*o+1.057*r,e=e>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,e=Math.min(Math.max(0,e),1),n=Math.min(Math.max(0,n),1),i=Math.min(Math.max(0,i),1),[255*e,255*n,255*i]}function m(t){var e,n,i,a=t[0],o=t[1],r=t[2];return a/=95.047,o/=100,r/=108.883,a=a>.008856?Math.pow(a,1/3):7.787*a+16/116,o=o>.008856?Math.pow(o,1/3):7.787*o+16/116,r=r>.008856?Math.pow(r,1/3):7.787*r+16/116,e=116*o-16,n=500*(a-o),i=200*(o-r),[e,n,i]}function x(t){var e,n,i,a,o=t[0],r=t[1],l=t[2];return o<=8?a=(n=100*o/903.3)/100*7.787+16/116:(n=100*Math.pow((o+16)/116,3),a=Math.pow(n/100,1/3)),e=e/95.047<=.008856?e=95.047*(r/500+a-16/116)/7.787:95.047*Math.pow(r/500+a,3),i=i/108.883<=.008859?i=108.883*(a-l/200-16/116)/7.787:108.883*Math.pow(a-l/200,3),[e,n,i]}function y(t){var e,n,i,a=t[0],o=t[1],r=t[2];return e=Math.atan2(r,o),(n=360*e/2/Math.PI)<0&&(n+=360),i=Math.sqrt(o*o+r*r),[a,i,n]}function k(t){return v(x(t))}function w(t){var e,n,i,a=t[0],o=t[1];return i=t[2]/360*2*Math.PI,e=o*Math.cos(i),n=o*Math.sin(i),[a,e,n]}function M(t){return S[t]}e.exports={rgb2hsl:i,rgb2hsv:a,rgb2hwb:o,rgb2cmyk:l,rgb2keyword:s,rgb2xyz:u,rgb2lab:d,rgb2lch:function(t){return y(d(t))},hsl2rgb:c,hsl2hsv:function(t){var e,n,i=t[0],a=t[1]/100,o=t[2]/100;return 0===o?[0,0,0]:(o*=2,a*=o<=1?o:2-o,n=(o+a)/2,e=2*a/(o+a),[i,100*e,100*n])},hsl2hwb:function(t){return o(c(t))},hsl2cmyk:function(t){return l(c(t))},hsl2keyword:function(t){return s(c(t))},hsv2rgb:h,hsv2hsl:function(t){var e,n,i=t[0],a=t[1]/100,o=t[2]/100;return n=(2-a)*o,e=a*o,e/=n<=1?n:2-n,e=e||0,n/=2,[i,100*e,100*n]},hsv2hwb:function(t){return o(h(t))},hsv2cmyk:function(t){return l(h(t))},hsv2keyword:function(t){return s(h(t))},hwb2rgb:f,hwb2hsl:function(t){return i(f(t))},hwb2hsv:function(t){return a(f(t))},hwb2cmyk:function(t){return l(f(t))},hwb2keyword:function(t){return s(f(t))},cmyk2rgb:p,cmyk2hsl:function(t){return i(p(t))},cmyk2hsv:function(t){return a(p(t))},cmyk2hwb:function(t){return o(p(t))},cmyk2keyword:function(t){return s(p(t))},keyword2rgb:M,keyword2hsl:function(t){return i(M(t))},keyword2hsv:function(t){return a(M(t))},keyword2hwb:function(t){return o(M(t))},keyword2cmyk:function(t){return l(M(t))},keyword2lab:function(t){return d(M(t))},keyword2xyz:function(t){return u(M(t))},xyz2rgb:v,xyz2lab:m,xyz2lch:function(t){return y(m(t))},lab2xyz:x,lab2rgb:k,lab2lch:y,lch2lab:w,lch2xyz:function(t){return x(w(t))},lch2rgb:function(t){return k(w(t))}};var S={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},C={};for(var _ in S)C[JSON.stringify(S[_])]=_},{}],5:[function(t,e,n){var i=t(4),a=function(){return new u};for(var o in i){a[o+"Raw"]=function(t){return function(e){return"number"==typeof e&&(e=Array.prototype.slice.call(arguments)),i[t](e)}}(o);var r=/(\w+)2(\w+)/.exec(o),l=r[1],s=r[2];(a[l]=a[l]||{})[s]=a[o]=function(t){return function(e){"number"==typeof e&&(e=Array.prototype.slice.call(arguments));var n=i[t](e);if("string"==typeof n||void 0===n)return n;for(var a=0;a<n.length;a++)n[a]=Math.round(n[a]);return n}}(o)}var u=function(){this.convs={}};u.prototype.routeSpace=function(t,e){var n=e[0];return void 0===n?this.getValues(t):("number"==typeof n&&(n=Array.prototype.slice.call(e)),this.setValues(t,n))},u.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},u.prototype.getValues=function(t){var e=this.convs[t];if(!e){var n=this.space,i=this.convs[n];e=a[n][t](i),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){u.prototype[t]=function(e){return this.routeSpace(t,arguments)}}),e.exports=a},{4:4}],6:[function(t,e,n){"use strict";e.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],7:[function(t,e,n){var i=t(29)();i.helpers=t(45),t(27)(i),i.defaults=t(25),i.Element=t(26),i.elements=t(40),i.Interaction=t(28),i.platform=t(48),t(31)(i),t(22)(i),t(23)(i),t(24)(i),t(30)(i),t(33)(i),t(32)(i),t(35)(i),t(54)(i),t(52)(i),t(53)(i),t(55)(i),t(56)(i),t(57)(i),t(15)(i),t(16)(i),t(17)(i),t(18)(i),t(19)(i),t(20)(i),t(21)(i),t(8)(i),t(9)(i),t(10)(i),t(11)(i),t(12)(i),t(13)(i),t(14)(i);var a=[];a.push(t(49)(i),t(50)(i),t(51)(i)),i.plugins.register(a),i.platform.initialize(),e.exports=i,"undefined"!=typeof window&&(window.Chart=i),i.canvasHelpers=i.helpers.canvas},{10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22,23:23,24:24,25:25,26:26,27:27,28:28,29:29,30:30,31:31,32:32,33:33,35:35,40:40,45:45,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,8:8,9:9}],8:[function(t,e,n){"use strict";e.exports=function(t){t.Bar=function(e,n){return n.type="bar",new t(e,n)}}},{}],9:[function(t,e,n){"use strict";e.exports=function(t){t.Bubble=function(e,n){return n.type="bubble",new t(e,n)}}},{}],10:[function(t,e,n){"use strict";e.exports=function(t){t.Doughnut=function(e,n){return n.type="doughnut",new t(e,n)}}},{}],11:[function(t,e,n){"use strict";e.exports=function(t){t.Line=function(e,n){return n.type="line",new t(e,n)}}},{}],12:[function(t,e,n){"use strict";e.exports=function(t){t.PolarArea=function(e,n){return n.type="polarArea",new t(e,n)}}},{}],13:[function(t,e,n){"use strict";e.exports=function(t){t.Radar=function(e,n){return n.type="radar",new t(e,n)}}},{}],14:[function(t,e,n){"use strict";e.exports=function(t){t.Scatter=function(e,n){return n.type="scatter",new t(e,n)}}},{}],15:[function(t,e,n){"use strict";var i=t(25),a=t(40),o=t(45);i._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),i._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{position:"left",type:"category",categoryPercentage:.8,barPercentage:.9,offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{callbacks:{title:function(t,e){var n="";return t.length>0&&(t[0].yLabel?n=t[0].yLabel:e.labels.length>0&&t[0].index<e.labels.length&&(n=e.labels[t[0].index])),n},label:function(t,e){return(e.datasets[t.datasetIndex].label||"")+": "+t.xLabel}},mode:"index",axis:"y"}}),e.exports=function(t){t.controllers.bar=t.DatasetController.extend({dataElementType:a.Rectangle,initialize:function(){var e,n=this;t.DatasetController.prototype.initialize.apply(n,arguments),(e=n.getMeta()).stack=n.getDataset().stack,e.bar=!0},update:function(t){var e,n,i=this,a=i.getMeta().data;for(i._ruler=i.getRuler(),e=0,n=a.length;e<n;++e)i.updateElement(a[e],e,t)},updateElement:function(t,e,n){var i=this,a=i.chart,r=i.getMeta(),l=i.getDataset(),s=t.custom||{},u=a.options.elements.rectangle;t._xScale=i.getScaleForId(r.xAxisID),t._yScale=i.getScaleForId(r.yAxisID),t._datasetIndex=i.index,t._index=e,t._model={datasetLabel:l.label,label:a.data.labels[e],borderSkipped:s.borderSkipped?s.borderSkipped:u.borderSkipped,backgroundColor:s.backgroundColor?s.backgroundColor:o.valueAtIndexOrDefault(l.backgroundColor,e,u.backgroundColor),borderColor:s.borderColor?s.borderColor:o.valueAtIndexOrDefault(l.borderColor,e,u.borderColor),borderWidth:s.borderWidth?s.borderWidth:o.valueAtIndexOrDefault(l.borderWidth,e,u.borderWidth)},i.updateElementGeometry(t,e,n),t.pivot()},updateElementGeometry:function(t,e,n){var i=this,a=t._model,o=i.getValueScale(),r=o.getBasePixel(),l=o.isHorizontal(),s=i._ruler||i.getRuler(),u=i.calculateBarValuePixels(i.index,e),d=i.calculateBarIndexPixels(i.index,e,s);a.horizontal=l,a.base=n?r:u.base,a.x=l?n?r:u.head:d.center,a.y=l?d.center:n?r:u.head,a.height=l?d.size:void 0,a.width=l?void 0:d.size},getValueScaleId:function(){return this.getMeta().yAxisID},getIndexScaleId:function(){return this.getMeta().xAxisID},getValueScale:function(){return this.getScaleForId(this.getValueScaleId())},getIndexScale:function(){return this.getScaleForId(this.getIndexScaleId())},getStackCount:function(t){var e,n,i=this,a=i.chart,o=i.getIndexScale().options.stacked,r=void 0===t?a.data.datasets.length:t+1,l=[];for(e=0;e<r;++e)(n=a.getDatasetMeta(e)).bar&&a.isDatasetVisible(e)&&(!1===o||!0===o&&-1===l.indexOf(n.stack)||void 0===o&&(void 0===n.stack||-1===l.indexOf(n.stack)))&&l.push(n.stack);return l.length},getStackIndex:function(t){return this.getStackCount(t)-1},getRuler:function(){var t,e,n=this,i=n.getIndexScale(),a=n.getStackCount(),o=n.index,r=[],l=i.isHorizontal(),s=l?i.left:i.top,u=s+(l?i.width:i.height);for(t=0,e=n.getMeta().data.length;t<e;++t)r.push(i.getPixelForValue(null,t,o));return{pixels:r,start:s,end:u,stackCount:a,scale:i}},calculateBarValuePixels:function(t,e){var n,i,a,o,r,l,s=this,u=s.chart,d=s.getMeta(),c=s.getValueScale(),h=u.data.datasets,f=c.getRightValue(h[t].data[e]),g=c.options.stacked,p=d.stack,v=0;if(g||void 0===g&&void 0!==p)for(n=0;n<t;++n)(i=u.getDatasetMeta(n)).bar&&i.stack===p&&i.controller.getValueScaleId()===c.id&&u.isDatasetVisible(n)&&(a=c.getRightValue(h[n].data[e]),(f<0&&a<0||f>=0&&a>0)&&(v+=a));return o=c.getPixelForValue(v),r=c.getPixelForValue(v+f),l=(r-o)/2,{size:l,base:o,head:r,center:r+l/2}},calculateBarIndexPixels:function(t,e,n){var i,a,r,l,s,u,d=this,c=n.scale.options,h=d.getStackIndex(t),f=n.pixels,g=f[e],p=f.length,v=n.start,m=n.end;return 1===p?(i=g>v?g-v:m-g,a=g<m?m-g:g-v):(e>0&&(i=(g-f[e-1])/2,e===p-1&&(a=i)),e<p-1&&(a=(f[e+1]-g)/2,0===e&&(i=a))),r=i*c.categoryPercentage,l=a*c.categoryPercentage,s=(r+l)/n.stackCount,u=s*c.barPercentage,u=Math.min(o.valueOrDefault(c.barThickness,u),o.valueOrDefault(c.maxBarThickness,1/0)),g-=r,g+=s*h,g+=(s-u)/2,{size:u,base:g,head:g+u,center:g+u/2}},draw:function(){var t=this,e=t.chart,n=t.getValueScale(),i=t.getMeta().data,a=t.getDataset(),r=i.length,l=0;for(o.canvas.clipArea(e.ctx,e.chartArea);l<r;++l)isNaN(n.getRightValue(a.data[l]))||i[l].draw();o.canvas.unclipArea(e.ctx)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,i=t.custom||{},a=t._model;a.backgroundColor=i.hoverBackgroundColor?i.hoverBackgroundColor:o.valueAtIndexOrDefault(e.hoverBackgroundColor,n,o.getHoverColor(a.backgroundColor)),a.borderColor=i.hoverBorderColor?i.hoverBorderColor:o.valueAtIndexOrDefault(e.hoverBorderColor,n,o.getHoverColor(a.borderColor)),a.borderWidth=i.hoverBorderWidth?i.hoverBorderWidth:o.valueAtIndexOrDefault(e.hoverBorderWidth,n,a.borderWidth)},removeHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,i=t.custom||{},a=t._model,r=this.chart.options.elements.rectangle;a.backgroundColor=i.backgroundColor?i.backgroundColor:o.valueAtIndexOrDefault(e.backgroundColor,n,r.backgroundColor),a.borderColor=i.borderColor?i.borderColor:o.valueAtIndexOrDefault(e.borderColor,n,r.borderColor),a.borderWidth=i.borderWidth?i.borderWidth:o.valueAtIndexOrDefault(e.borderWidth,n,r.borderWidth)}}),t.controllers.horizontalBar=t.controllers.bar.extend({getValueScaleId:function(){return this.getMeta().xAxisID},getIndexScaleId:function(){return this.getMeta().yAxisID}})}},{25:25,40:40,45:45}],16:[function(t,e,n){"use strict";var i=t(25),a=t(40),o=t(45);i._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.datasets[t.datasetIndex].label||"",i=e.datasets[t.datasetIndex].data[t.index];return n+": ("+t.xLabel+", "+t.yLabel+", "+i.r+")"}}}}),e.exports=function(t){t.controllers.bubble=t.DatasetController.extend({dataElementType:a.Point,update:function(t){var e=this,n=e.getMeta().data;o.each(n,function(n,i){e.updateElement(n,i,t)})},updateElement:function(t,e,n){var i=this,a=i.getMeta(),o=t.custom||{},r=i.getScaleForId(a.xAxisID),l=i.getScaleForId(a.yAxisID),s=i._resolveElementOptions(t,e),u=i.getDataset().data[e],d=i.index,c=n?r.getPixelForDecimal(.5):r.getPixelForValue("object"==typeof u?u:NaN,e,d),h=n?l.getBasePixel():l.getPixelForValue(u,e,d);t._xScale=r,t._yScale=l,t._options=s,t._datasetIndex=d,t._index=e,t._model={backgroundColor:s.backgroundColor,borderColor:s.borderColor,borderWidth:s.borderWidth,hitRadius:s.hitRadius,pointStyle:s.pointStyle,radius:n?0:s.radius,skip:o.skip||isNaN(c)||isNaN(h),x:c,y:h},t.pivot()},setHoverStyle:function(t){var e=t._model,n=t._options;e.backgroundColor=o.valueOrDefault(n.hoverBackgroundColor,o.getHoverColor(n.backgroundColor)),e.borderColor=o.valueOrDefault(n.hoverBorderColor,o.getHoverColor(n.borderColor)),e.borderWidth=o.valueOrDefault(n.hoverBorderWidth,n.borderWidth),e.radius=n.radius+n.hoverRadius},removeHoverStyle:function(t){var e=t._model,n=t._options;e.backgroundColor=n.backgroundColor,e.borderColor=n.borderColor,e.borderWidth=n.borderWidth,e.radius=n.radius},_resolveElementOptions:function(t,e){var n,i,a,r=this,l=r.chart,s=l.data.datasets[r.index],u=t.custom||{},d=l.options.elements.point,c=o.options.resolve,h=s.data[e],f={},g={chart:l,dataIndex:e,dataset:s,datasetIndex:r.index},p=["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle"];for(n=0,i=p.length;n<i;++n)f[a=p[n]]=c([u[a],s[a],d[a]],g,e);return f.radius=c([u.radius,h?h.r:void 0,s.radius,d.radius],g,e),f}})}},{25:25,40:40,45:45}],17:[function(t,e,n){"use strict";var i=t(25),a=t(40),o=t(45);i._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var o=0;o<i[0].data.length;++o)e.push('<li><span style="background-color:'+i[0].backgroundColor[o]+'"></span>'),a[o]&&e.push(a[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(n,i){var a=t.getDatasetMeta(0),r=e.datasets[0],l=a.data[i],s=l&&l.custom||{},u=o.valueAtIndexOrDefault,d=t.options.elements.arc;return{text:n,fillStyle:s.backgroundColor?s.backgroundColor:u(r.backgroundColor,i,d.backgroundColor),strokeStyle:s.borderColor?s.borderColor:u(r.borderColor,i,d.borderColor),lineWidth:s.borderWidth?s.borderWidth:u(r.borderWidth,i,d.borderWidth),hidden:isNaN(r.data[i])||a.data[i].hidden,index:i}}):[]}},onClick:function(t,e){var n,i,a,o=e.index,r=this.chart;for(n=0,i=(r.data.datasets||[]).length;n<i;++n)(a=r.getDatasetMeta(n)).data[o]&&(a.data[o].hidden=!a.data[o].hidden);r.update()}},cutoutPercentage:50,rotation:-.5*Math.PI,circumference:2*Math.PI,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var n=e.labels[t.index],i=": "+e.datasets[t.datasetIndex].data[t.index];return o.isArray(n)?(n=n.slice())[0]+=i:n+=i,n}}}}),i._set("pie",o.clone(i.doughnut)),i._set("pie",{cutoutPercentage:0}),e.exports=function(t){t.controllers.doughnut=t.controllers.pie=t.DatasetController.extend({dataElementType:a.Arc,linkScales:o.noop,getRingIndex:function(t){for(var e=0,n=0;n<t;++n)this.chart.isDatasetVisible(n)&&++e;return e},update:function(t){var e=this,n=e.chart,i=n.chartArea,a=n.options,r=a.elements.arc,l=i.right-i.left-r.borderWidth,s=i.bottom-i.top-r.borderWidth,u=Math.min(l,s),d={x:0,y:0},c=e.getMeta(),h=a.cutoutPercentage,f=a.circumference;if(f<2*Math.PI){var g=a.rotation%(2*Math.PI),p=(g+=2*Math.PI*(g>=Math.PI?-1:g<-Math.PI?1:0))+f,v={x:Math.cos(g),y:Math.sin(g)},m={x:Math.cos(p),y:Math.sin(p)},b=g<=0&&p>=0||g<=2*Math.PI&&2*Math.PI<=p,x=g<=.5*Math.PI&&.5*Math.PI<=p||g<=2.5*Math.PI&&2.5*Math.PI<=p,y=g<=-Math.PI&&-Math.PI<=p||g<=Math.PI&&Math.PI<=p,k=g<=.5*-Math.PI&&.5*-Math.PI<=p||g<=1.5*Math.PI&&1.5*Math.PI<=p,w=h/100,M={x:y?-1:Math.min(v.x*(v.x<0?1:w),m.x*(m.x<0?1:w)),y:k?-1:Math.min(v.y*(v.y<0?1:w),m.y*(m.y<0?1:w))},S={x:b?1:Math.max(v.x*(v.x>0?1:w),m.x*(m.x>0?1:w)),y:x?1:Math.max(v.y*(v.y>0?1:w),m.y*(m.y>0?1:w))},C={width:.5*(S.x-M.x),height:.5*(S.y-M.y)};u=Math.min(l/C.width,s/C.height),d={x:-.5*(S.x+M.x),y:-.5*(S.y+M.y)}}n.borderWidth=e.getMaxBorderWidth(c.data),n.outerRadius=Math.max((u-n.borderWidth)/2,0),n.innerRadius=Math.max(h?n.outerRadius/100*h:0,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),n.offsetX=d.x*n.outerRadius,n.offsetY=d.y*n.outerRadius,c.total=e.calculateTotal(),e.outerRadius=n.outerRadius-n.radiusLength*e.getRingIndex(e.index),e.innerRadius=Math.max(e.outerRadius-n.radiusLength,0),o.each(c.data,function(n,i){e.updateElement(n,i,t)})},updateElement:function(t,e,n){var i=this,a=i.chart,r=a.chartArea,l=a.options,s=l.animation,u=(r.left+r.right)/2,d=(r.top+r.bottom)/2,c=l.rotation,h=l.rotation,f=i.getDataset(),g=n&&s.animateRotate?0:t.hidden?0:i.calculateCircumference(f.data[e])*(l.circumference/(2*Math.PI)),p=n&&s.animateScale?0:i.innerRadius,v=n&&s.animateScale?0:i.outerRadius,m=o.valueAtIndexOrDefault;o.extend(t,{_datasetIndex:i.index,_index:e,_model:{x:u+a.offsetX,y:d+a.offsetY,startAngle:c,endAngle:h,circumference:g,outerRadius:v,innerRadius:p,label:m(f.label,e,a.data.labels[e])}});var b=t._model;this.removeHoverStyle(t),n&&s.animateRotate||(b.startAngle=0===e?l.rotation:i.getMeta().data[e-1]._model.endAngle,b.endAngle=b.startAngle+b.circumference),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},calculateTotal:function(){var t,e=this.getDataset(),n=this.getMeta(),i=0;return o.each(n.data,function(n,a){t=e.data[a],isNaN(t)||n.hidden||(i+=Math.abs(t))}),i},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?2*Math.PI*(t/e):0},getMaxBorderWidth:function(t){for(var e,n,i=0,a=this.index,o=t.length,r=0;r<o;r++)e=t[r]._model?t[r]._model.borderWidth:0,i=(n=t[r]._chart?t[r]._chart.config.data.datasets[a].hoverBorderWidth:0)>(i=e>i?e:i)?n:i;return i}})}},{25:25,40:40,45:45}],18:[function(t,e,n){"use strict";var i=t(25),a=t(40),o=t(45);i._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}}),e.exports=function(t){function e(t,e){return o.valueOrDefault(t.showLine,e.showLines)}t.controllers.line=t.DatasetController.extend({datasetElementType:a.Line,dataElementType:a.Point,update:function(t){var n,i,a,r=this,l=r.getMeta(),s=l.dataset,u=l.data||[],d=r.chart.options,c=d.elements.line,h=r.getScaleForId(l.yAxisID),f=r.getDataset(),g=e(f,d);for(g&&(a=s.custom||{},void 0!==f.tension&&void 0===f.lineTension&&(f.lineTension=f.tension),s._scale=h,s._datasetIndex=r.index,s._children=u,s._model={spanGaps:f.spanGaps?f.spanGaps:d.spanGaps,tension:a.tension?a.tension:o.valueOrDefault(f.lineTension,c.tension),backgroundColor:a.backgroundColor?a.backgroundColor:f.backgroundColor||c.backgroundColor,borderWidth:a.borderWidth?a.borderWidth:f.borderWidth||c.borderWidth,borderColor:a.borderColor?a.borderColor:f.borderColor||c.borderColor,borderCapStyle:a.borderCapStyle?a.borderCapStyle:f.borderCapStyle||c.borderCapStyle,borderDash:a.borderDash?a.borderDash:f.borderDash||c.borderDash,borderDashOffset:a.borderDashOffset?a.borderDashOffset:f.borderDashOffset||c.borderDashOffset,borderJoinStyle:a.borderJoinStyle?a.borderJoinStyle:f.borderJoinStyle||c.borderJoinStyle,fill:a.fill?a.fill:void 0!==f.fill?f.fill:c.fill,steppedLine:a.steppedLine?a.steppedLine:o.valueOrDefault(f.steppedLine,c.stepped),cubicInterpolationMode:a.cubicInterpolationMode?a.cubicInterpolationMode:o.valueOrDefault(f.cubicInterpolationMode,c.cubicInterpolationMode)},s.pivot()),n=0,i=u.length;n<i;++n)r.updateElement(u[n],n,t);for(g&&0!==s._model.tension&&r.updateBezierControlPoints(),n=0,i=u.length;n<i;++n)u[n].pivot()},getPointBackgroundColor:function(t,e){var n=this.chart.options.elements.point.backgroundColor,i=this.getDataset(),a=t.custom||{};return a.backgroundColor?n=a.backgroundColor:i.pointBackgroundColor?n=o.valueAtIndexOrDefault(i.pointBackgroundColor,e,n):i.backgroundColor&&(n=i.backgroundColor),n},getPointBorderColor:function(t,e){var n=this.chart.options.elements.point.borderColor,i=this.getDataset(),a=t.custom||{};return a.borderColor?n=a.borderColor:i.pointBorderColor?n=o.valueAtIndexOrDefault(i.pointBorderColor,e,n):i.borderColor&&(n=i.borderColor),n},getPointBorderWidth:function(t,e){var n=this.chart.options.elements.point.borderWidth,i=this.getDataset(),a=t.custom||{};return isNaN(a.borderWidth)?!isNaN(i.pointBorderWidth)||o.isArray(i.pointBorderWidth)?n=o.valueAtIndexOrDefault(i.pointBorderWidth,e,n):isNaN(i.borderWidth)||(n=i.borderWidth):n=a.borderWidth,n},updateElement:function(t,e,n){var i,a,r=this,l=r.getMeta(),s=t.custom||{},u=r.getDataset(),d=r.index,c=u.data[e],h=r.getScaleForId(l.yAxisID),f=r.getScaleForId(l.xAxisID),g=r.chart.options.elements.point;void 0!==u.radius&&void 0===u.pointRadius&&(u.pointRadius=u.radius),void 0!==u.hitRadius&&void 0===u.pointHitRadius&&(u.pointHitRadius=u.hitRadius),i=f.getPixelForValue("object"==typeof c?c:NaN,e,d),a=n?h.getBasePixel():r.calculatePointY(c,e,d),t._xScale=f,t._yScale=h,t._datasetIndex=d,t._index=e,t._model={x:i,y:a,skip:s.skip||isNaN(i)||isNaN(a),radius:s.radius||o.valueAtIndexOrDefault(u.pointRadius,e,g.radius),pointStyle:s.pointStyle||o.valueAtIndexOrDefault(u.pointStyle,e,g.pointStyle),backgroundColor:r.getPointBackgroundColor(t,e),borderColor:r.getPointBorderColor(t,e),borderWidth:r.getPointBorderWidth(t,e),tension:l.dataset._model?l.dataset._model.tension:0,steppedLine:!!l.dataset._model&&l.dataset._model.steppedLine,hitRadius:s.hitRadius||o.valueAtIndexOrDefault(u.pointHitRadius,e,g.hitRadius)}},calculatePointY:function(t,e,n){var i,a,o,r=this,l=r.chart,s=r.getMeta(),u=r.getScaleForId(s.yAxisID),d=0,c=0;if(u.options.stacked){for(i=0;i<n;i++)if(a=l.data.datasets[i],"line"===(o=l.getDatasetMeta(i)).type&&o.yAxisID===u.id&&l.isDatasetVisible(i)){var h=Number(u.getRightValue(a.data[e]));h<0?c+=h||0:d+=h||0}var f=Number(u.getRightValue(t));return f<0?u.getPixelForValue(c+f):u.getPixelForValue(d+f)}return u.getPixelForValue(t)},updateBezierControlPoints:function(){function t(t,e,n){return Math.max(Math.min(t,n),e)}var e,n,i,a,r=this,l=r.getMeta(),s=r.chart.chartArea,u=l.data||[];if(l.dataset._model.spanGaps&&(u=u.filter(function(t){return!t._model.skip})),"monotone"===l.dataset._model.cubicInterpolationMode)o.splineCurveMonotone(u);else for(e=0,n=u.length;e<n;++e)i=u[e]._model,a=o.splineCurve(o.previousItem(u,e)._model,i,o.nextItem(u,e)._model,l.dataset._model.tension),i.controlPointPreviousX=a.previous.x,i.controlPointPreviousY=a.previous.y,i.controlPointNextX=a.next.x,i.controlPointNextY=a.next.y;if(r.chart.options.elements.line.capBezierPoints)for(e=0,n=u.length;e<n;++e)(i=u[e]._model).controlPointPreviousX=t(i.controlPointPreviousX,s.left,s.right),i.controlPointPreviousY=t(i.controlPointPreviousY,s.top,s.bottom),i.controlPointNextX=t(i.controlPointNextX,s.left,s.right),i.controlPointNextY=t(i.controlPointNextY,s.top,s.bottom)},draw:function(){var t=this,n=t.chart,i=t.getMeta(),a=i.data||[],r=n.chartArea,l=a.length,s=0;for(o.canvas.clipArea(n.ctx,r),e(t.getDataset(),n.options)&&i.dataset.draw(),o.canvas.unclipArea(n.ctx);s<l;++s)a[s].draw(r)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,i=t.custom||{},a=t._model;a.radius=i.hoverRadius||o.valueAtIndexOrDefault(e.pointHoverRadius,n,this.chart.options.elements.point.hoverRadius),a.backgroundColor=i.hoverBackgroundColor||o.valueAtIndexOrDefault(e.pointHoverBackgroundColor,n,o.getHoverColor(a.backgroundColor)),a.borderColor=i.hoverBorderColor||o.valueAtIndexOrDefault(e.pointHoverBorderColor,n,o.getHoverColor(a.borderColor)),a.borderWidth=i.hoverBorderWidth||o.valueAtIndexOrDefault(e.pointHoverBorderWidth,n,a.borderWidth)},removeHoverStyle:function(t){var e=this,n=e.chart.data.datasets[t._datasetIndex],i=t._index,a=t.custom||{},r=t._model;void 0!==n.radius&&void 0===n.pointRadius&&(n.pointRadius=n.radius),r.radius=a.radius||o.valueAtIndexOrDefault(n.pointRadius,i,e.chart.options.elements.point.radius),r.backgroundColor=e.getPointBackgroundColor(t,i),r.borderColor=e.getPointBorderColor(t,i),r.borderWidth=e.getPointBorderWidth(t,i)}})}},{25:25,40:40,45:45}],19:[function(t,e,n){"use strict";var i=t(25),a=t(40),o=t(45);i._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');var n=t.data,i=n.datasets,a=n.labels;if(i.length)for(var o=0;o<i[0].data.length;++o)e.push('<li><span style="background-color:'+i[0].backgroundColor[o]+'"></span>'),a[o]&&e.push(a[o]),e.push("</li>");return e.push("</ul>"),e.join("")},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(n,i){var a=t.getDatasetMeta(0),r=e.datasets[0],l=a.data[i].custom||{},s=o.valueAtIndexOrDefault,u=t.options.elements.arc;return{text:n,fillStyle:l.backgroundColor?l.backgroundColor:s(r.backgroundColor,i,u.backgroundColor),strokeStyle:l.borderColor?l.borderColor:s(r.borderColor,i,u.borderColor),lineWidth:l.borderWidth?l.borderWidth:s(r.borderWidth,i,u.borderWidth),hidden:isNaN(r.data[i])||a.data[i].hidden,index:i}}):[]}},onClick:function(t,e){var n,i,a,o=e.index,r=this.chart;for(n=0,i=(r.data.datasets||[]).length;n<i;++n)(a=r.getDatasetMeta(n)).data[o].hidden=!a.data[o].hidden;r.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}}),e.exports=function(t){t.controllers.polarArea=t.DatasetController.extend({dataElementType:a.Arc,linkScales:o.noop,update:function(t){var e=this,n=e.chart,i=n.chartArea,a=e.getMeta(),r=n.options,l=r.elements.arc,s=Math.min(i.right-i.left,i.bottom-i.top);n.outerRadius=Math.max((s-l.borderWidth/2)/2,0),n.innerRadius=Math.max(r.cutoutPercentage?n.outerRadius/100*r.cutoutPercentage:1,0),n.radiusLength=(n.outerRadius-n.innerRadius)/n.getVisibleDatasetCount(),e.outerRadius=n.outerRadius-n.radiusLength*e.index,e.innerRadius=e.outerRadius-n.radiusLength,a.count=e.countVisibleElements(),o.each(a.data,function(n,i){e.updateElement(n,i,t)})},updateElement:function(t,e,n){for(var i=this,a=i.chart,r=i.getDataset(),l=a.options,s=l.animation,u=a.scale,d=a.data.labels,c=i.calculateCircumference(r.data[e]),h=u.xCenter,f=u.yCenter,g=0,p=i.getMeta(),v=0;v<e;++v)isNaN(r.data[v])||p.data[v].hidden||++g;var m=l.startAngle,b=t.hidden?0:u.getDistanceFromCenterForValue(r.data[e]),x=m+c*g,y=x+(t.hidden?0:c),k=s.animateScale?0:u.getDistanceFromCenterForValue(r.data[e]);o.extend(t,{_datasetIndex:i.index,_index:e,_scale:u,_model:{x:h,y:f,innerRadius:0,outerRadius:n?k:b,startAngle:n&&s.animateRotate?m:x,endAngle:n&&s.animateRotate?m:y,label:o.valueAtIndexOrDefault(d,e,d[e])}}),i.removeHoverStyle(t),t.pivot()},removeHoverStyle:function(e){t.DatasetController.prototype.removeHoverStyle.call(this,e,this.chart.options.elements.arc)},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),n=0;return o.each(e.data,function(e,i){isNaN(t.data[i])||e.hidden||n++}),n},calculateCircumference:function(t){var e=this.getMeta().count;return e>0&&!isNaN(t)?2*Math.PI/e:0}})}},{25:25,40:40,45:45}],20:[function(t,e,n){"use strict";var i=t(25),a=t(40),o=t(45);i._set("radar",{scale:{type:"radialLinear"},elements:{line:{tension:0}}}),e.exports=function(t){t.controllers.radar=t.DatasetController.extend({datasetElementType:a.Line,dataElementType:a.Point,linkScales:o.noop,update:function(t){var e=this,n=e.getMeta(),i=n.dataset,a=n.data,r=i.custom||{},l=e.getDataset(),s=e.chart.options.elements.line,u=e.chart.scale;void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),o.extend(n.dataset,{_datasetIndex:e.index,_scale:u,_children:a,_loop:!0,_model:{tension:r.tension?r.tension:o.valueOrDefault(l.lineTension,s.tension),backgroundColor:r.backgroundColor?r.backgroundColor:l.backgroundColor||s.backgroundColor,borderWidth:r.borderWidth?r.borderWidth:l.borderWidth||s.borderWidth,borderColor:r.borderColor?r.borderColor:l.borderColor||s.borderColor,fill:r.fill?r.fill:void 0!==l.fill?l.fill:s.fill,borderCapStyle:r.borderCapStyle?r.borderCapStyle:l.borderCapStyle||s.borderCapStyle,borderDash:r.borderDash?r.borderDash:l.borderDash||s.borderDash,borderDashOffset:r.borderDashOffset?r.borderDashOffset:l.borderDashOffset||s.borderDashOffset,borderJoinStyle:r.borderJoinStyle?r.borderJoinStyle:l.borderJoinStyle||s.borderJoinStyle}}),n.dataset.pivot(),o.each(a,function(n,i){e.updateElement(n,i,t)},e),e.updateBezierControlPoints()},updateElement:function(t,e,n){var i=this,a=t.custom||{},r=i.getDataset(),l=i.chart.scale,s=i.chart.options.elements.point,u=l.getPointPositionForValue(e,r.data[e]);void 0!==r.radius&&void 0===r.pointRadius&&(r.pointRadius=r.radius),void 0!==r.hitRadius&&void 0===r.pointHitRadius&&(r.pointHitRadius=r.hitRadius),o.extend(t,{_datasetIndex:i.index,_index:e,_scale:l,_model:{x:n?l.xCenter:u.x,y:n?l.yCenter:u.y,tension:a.tension?a.tension:o.valueOrDefault(r.lineTension,i.chart.options.elements.line.tension),radius:a.radius?a.radius:o.valueAtIndexOrDefault(r.pointRadius,e,s.radius),backgroundColor:a.backgroundColor?a.backgroundColor:o.valueAtIndexOrDefault(r.pointBackgroundColor,e,s.backgroundColor),borderColor:a.borderColor?a.borderColor:o.valueAtIndexOrDefault(r.pointBorderColor,e,s.borderColor),borderWidth:a.borderWidth?a.borderWidth:o.valueAtIndexOrDefault(r.pointBorderWidth,e,s.borderWidth),pointStyle:a.pointStyle?a.pointStyle:o.valueAtIndexOrDefault(r.pointStyle,e,s.pointStyle),hitRadius:a.hitRadius?a.hitRadius:o.valueAtIndexOrDefault(r.pointHitRadius,e,s.hitRadius)}}),t._model.skip=a.skip?a.skip:isNaN(t._model.x)||isNaN(t._model.y)},updateBezierControlPoints:function(){var t=this.chart.chartArea,e=this.getMeta();o.each(e.data,function(n,i){var a=n._model,r=o.splineCurve(o.previousItem(e.data,i,!0)._model,a,o.nextItem(e.data,i,!0)._model,a.tension);a.controlPointPreviousX=Math.max(Math.min(r.previous.x,t.right),t.left),a.controlPointPreviousY=Math.max(Math.min(r.previous.y,t.bottom),t.top),a.controlPointNextX=Math.max(Math.min(r.next.x,t.right),t.left),a.controlPointNextY=Math.max(Math.min(r.next.y,t.bottom),t.top),n.pivot()})},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t.custom||{},i=t._index,a=t._model;a.radius=n.hoverRadius?n.hoverRadius:o.valueAtIndexOrDefault(e.pointHoverRadius,i,this.chart.options.elements.point.hoverRadius),a.backgroundColor=n.hoverBackgroundColor?n.hoverBackgroundColor:o.valueAtIndexOrDefault(e.pointHoverBackgroundColor,i,o.getHoverColor(a.backgroundColor)),a.borderColor=n.hoverBorderColor?n.hoverBorderColor:o.valueAtIndexOrDefault(e.pointHoverBorderColor,i,o.getHoverColor(a.borderColor)),a.borderWidth=n.hoverBorderWidth?n.hoverBorderWidth:o.valueAtIndexOrDefault(e.pointHoverBorderWidth,i,a.borderWidth)},removeHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t.custom||{},i=t._index,a=t._model,r=this.chart.options.elements.point;a.radius=n.radius?n.radius:o.valueAtIndexOrDefault(e.pointRadius,i,r.radius),a.backgroundColor=n.backgroundColor?n.backgroundColor:o.valueAtIndexOrDefault(e.pointBackgroundColor,i,r.backgroundColor),a.borderColor=n.borderColor?n.borderColor:o.valueAtIndexOrDefault(e.pointBorderColor,i,r.borderColor),a.borderWidth=n.borderWidth?n.borderWidth:o.valueAtIndexOrDefault(e.pointBorderWidth,i,r.borderWidth)}})}},{25:25,40:40,45:45}],21:[function(t,e,n){"use strict";t(25)._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},showLines:!1,tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),e.exports=function(t){t.controllers.scatter=t.controllers.line}},{25:25}],22:[function(t,e,n){"use strict";var i=t(25),a=t(26),o=t(45);i._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:o.noop,onComplete:o.noop}}),e.exports=function(t){t.Animation=a.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),t.animationService={frameDuration:17,animations:[],dropFrames:0,request:null,addAnimation:function(t,e,n,i){var a,o,r=this.animations;for(e.chart=t,i||(t.animating=!0),a=0,o=r.length;a<o;++a)if(r[a].chart===t)return void(r[a]=e);r.push(e),1===r.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=o.findIndex(this.animations,function(e){return e.chart===t});-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=o.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){var t=this,e=Date.now(),n=0;t.dropFrames>1&&(n=Math.floor(t.dropFrames),t.dropFrames=t.dropFrames%1),t.advance(1+n);var i=Date.now();t.dropFrames+=(i-e)/t.frameDuration,t.animations.length>0&&t.requestAnimationFrame()},advance:function(t){for(var e,n,i=this.animations,a=0;a<i.length;)n=(e=i[a]).chart,e.currentStep=(e.currentStep||0)+t,e.currentStep=Math.min(e.currentStep,e.numSteps),o.callback(e.render,[n,e],n),o.callback(e.onAnimationProgress,[e],n),e.currentStep>=e.numSteps?(o.callback(e.onAnimationComplete,[e],n),n.animating=!1,i.splice(a,1)):++a}},Object.defineProperty(t.Animation.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(t.Animation.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}})}},{25:25,26:26,45:45}],23:[function(t,e,n){"use strict";var i=t(25),a=t(45),o=t(28),r=t(48);e.exports=function(t){function e(t){var e=(t=t||{}).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=a.configMerge(i.global,i[t.type],t.options||{}),t}function n(t){var e=t.options;e.scale?t.scale.options=e.scale:e.scales&&e.scales.xAxes.concat(e.scales.yAxes).forEach(function(e){t.scales[e.id].options=e}),t.tooltip._options=e.tooltips}function l(t){return"top"===t||"bottom"===t}var s=t.plugins;t.types={},t.instances={},t.controllers={},a.extend(t.prototype,{construct:function(n,i){var o=this;i=e(i);var l=r.acquireContext(n,i),s=l&&l.canvas,u=s&&s.height,d=s&&s.width;o.id=a.uid(),o.ctx=l,o.canvas=s,o.config=i,o.width=d,o.height=u,o.aspectRatio=u?d/u:null,o.options=i.options,o._bufferedRender=!1,o.chart=o,o.controller=o,t.instances[o.id]=o,Object.defineProperty(o,"data",{get:function(){return o.config.data},set:function(t){o.config.data=t}}),l&&s?(o.initialize(),o.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return s.notify(t,"beforeInit"),a.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.ensureScalesHaveIDs(),t.buildScales(),t.initToolTip(),s.notify(t,"afterInit"),t},clear:function(){return a.canvas.clear(this),this},stop:function(){return t.animationService.cancelAnimation(this),this},resize:function(t){var e=this,n=e.options,i=e.canvas,o=n.maintainAspectRatio&&e.aspectRatio||null,r=Math.max(0,Math.floor(a.getMaximumWidth(i))),l=Math.max(0,Math.floor(o?r/o:a.getMaximumHeight(i)));if((e.width!==r||e.height!==l)&&(i.width=e.width=r,i.height=e.height=l,i.style.width=r+"px",i.style.height=l+"px",a.retinaScale(e,n.devicePixelRatio),!t)){var u={width:r,height:l};s.notify(e,"resize",[u]),e.options.onResize&&e.options.onResize(e,u),e.stop(),e.update(e.options.responsiveAnimationDuration)}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},n=t.scale;a.each(e.xAxes,function(t,e){t.id=t.id||"x-axis-"+e}),a.each(e.yAxes,function(t,e){t.id=t.id||"y-axis-"+e}),n&&(n.id=n.id||"scale")},buildScales:function(){var e=this,n=e.options,i=e.scales={},o=[];n.scales&&(o=o.concat((n.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(n.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),n.scale&&o.push({options:n.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),a.each(o,function(n){var o=n.options,r=a.valueOrDefault(o.type,n.dtype),s=t.scaleService.getScaleConstructor(r);if(s){l(o.position)!==l(n.dposition)&&(o.position=n.dposition);var u=new s({id:o.id,options:o,ctx:e.ctx,chart:e});i[u.id]=u,u.mergeTicksOptions(),n.isDefault&&(e.scale=u)}}),t.scaleService.addScalesToLayout(this)},buildOrUpdateControllers:function(){var e=this,n=[],i=[];return a.each(e.data.datasets,function(a,o){var r=e.getDatasetMeta(o),l=a.type||e.config.type;if(r.type&&r.type!==l&&(e.destroyDatasetMeta(o),r=e.getDatasetMeta(o)),r.type=l,n.push(r.type),r.controller)r.controller.updateIndex(o);else{var s=t.controllers[r.type];if(void 0===s)throw new Error('"'+r.type+'" is not a chart type.');r.controller=new s(e,o),i.push(r.controller)}},e),i},resetElements:function(){var t=this;a.each(t.data.datasets,function(e,n){t.getDatasetMeta(n).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var e=this;if(t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]}),n(e),!1!==s.notify(e,"beforeUpdate")){e.tooltip._data=e.data;var i=e.buildOrUpdateControllers();a.each(e.data.datasets,function(t,n){e.getDatasetMeta(n).controller.buildOrUpdateElements()},e),e.updateLayout(),a.each(i,function(t){t.reset()}),e.updateDatasets(),e.tooltip.initialize(),e.lastActive=[],s.notify(e,"afterUpdate"),e._bufferedRender?e._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:e.render(t)}},updateLayout:function(){var e=this;!1!==s.notify(e,"beforeLayout")&&(t.layoutService.update(this,this.width,this.height),s.notify(e,"afterScaleUpdate"),s.notify(e,"afterLayout"))},updateDatasets:function(){var t=this;if(!1!==s.notify(t,"beforeDatasetsUpdate")){for(var e=0,n=t.data.datasets.length;e<n;++e)t.updateDataset(e);s.notify(t,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this,n=e.getDatasetMeta(t),i={meta:n,index:t};!1!==s.notify(e,"beforeDatasetUpdate",[i])&&(n.controller.update(),s.notify(e,"afterDatasetUpdate",[i]))},render:function(e){var n=this;e&&"object"==typeof e||(e={duration:e,lazy:arguments[1]});var i=e.duration,o=e.lazy;if(!1!==s.notify(n,"beforeRender")){var r=n.options.animation,l=function(t){s.notify(n,"afterRender"),a.callback(r&&r.onComplete,[t],n)};if(r&&(void 0!==i&&0!==i||void 0===i&&0!==r.duration)){var u=new t.Animation({numSteps:(i||r.duration)/16.66,easing:e.easing||r.easing,render:function(t,e){var n=a.easing.effects[e.easing],i=e.currentStep,o=i/e.numSteps;t.draw(n(o),o,i)},onAnimationProgress:r.onProgress,onAnimationComplete:l});t.animationService.addAnimation(n,u,i,o)}else n.draw(),l(new t.Animation({numSteps:0,chart:n}));return n}},draw:function(t){var e=this;e.clear(),a.isNullOrUndef(t)&&(t=1),e.transition(t),!1!==s.notify(e,"beforeDraw",[t])&&(a.each(e.boxes,function(t){t.draw(e.chartArea)},e),e.scale&&e.scale.draw(),e.drawDatasets(t),e._drawTooltip(t),s.notify(e,"afterDraw",[t]))},transition:function(t){for(var e=this,n=0,i=(e.data.datasets||[]).length;n<i;++n)e.isDatasetVisible(n)&&e.getDatasetMeta(n).controller.transition(t);e.tooltip.transition(t)},drawDatasets:function(t){var e=this;if(!1!==s.notify(e,"beforeDatasetsDraw",[t])){for(var n=(e.data.datasets||[]).length-1;n>=0;--n)e.isDatasetVisible(n)&&e.drawDataset(n,t);s.notify(e,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var n=this,i=n.getDatasetMeta(t),a={meta:i,index:t,easingValue:e};!1!==s.notify(n,"beforeDatasetDraw",[a])&&(i.controller.draw(e),s.notify(n,"afterDatasetDraw",[a]))},_drawTooltip:function(t){var e=this,n=e.tooltip,i={tooltip:n,easingValue:t};!1!==s.notify(e,"beforeTooltipDraw",[i])&&(n.draw(),s.notify(e,"afterTooltipDraw",[i]))},getElementAtEvent:function(t){return o.modes.single(this,t)},getElementsAtEvent:function(t){return o.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return o.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,n){var i=o.modes[e];return"function"==typeof i?i(this,t,n):[]},getDatasetAtEvent:function(t){return o.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this,n=e.data.datasets[t];n._meta||(n._meta={});var i=n._meta[e.id];return i||(i=n._meta[e.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,n=this.data.datasets.length;e<n;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,n=this.data.datasets[t],i=n._meta&&n._meta[e];i&&(i.controller.destroy(),delete n._meta[e])},destroy:function(){var e,n,i=this,o=i.canvas;for(i.stop(),e=0,n=i.data.datasets.length;e<n;++e)i.destroyDatasetMeta(e);o&&(i.unbindEvents(),a.canvas.clear(i),r.releaseContext(i.ctx),i.canvas=null,i.ctx=null),s.notify(i,"destroy"),delete t.instances[i.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var e=this;e.tooltip=new t.Tooltip({_chart:e,_chartInstance:e,_data:e.data,_options:e.options.tooltips},e)},bindEvents:function(){var t=this,e=t._listeners={},n=function(){t.eventHandler.apply(t,arguments)};a.each(t.options.events,function(i){r.addEventListener(t,i,n),e[i]=n}),t.options.responsive&&(n=function(){t.resize()},r.addEventListener(t,"resize",n),e.resize=n)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,a.each(e,function(e,n){r.removeEventListener(t,n,e)}))},updateHoverStyle:function(t,e,n){var i,a,o,r=n?"setHoverStyle":"removeHoverStyle";for(a=0,o=t.length;a<o;++a)(i=t[a])&&this.getDatasetMeta(i._datasetIndex).controller[r](i)},eventHandler:function(t){var e=this,n=e.tooltip;if(!1!==s.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var i=e.handleEvent(t);i|=n&&n.handleEvent(t),s.notify(e,"afterEvent",[t]);var a=e._bufferedRequest;return a?e.render(a):i&&!e.animating&&(e.stop(),e.render(e.options.hover.animationDuration,!0)),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e=this,n=e.options||{},i=n.hover,o=!1;return e.lastActive=e.lastActive||[],"mouseout"===t.type?e.active=[]:e.active=e.getElementsAtEventForMode(t,i.mode,i),a.callback(n.onHover||n.hover.onHover,[t.native,e.active],e),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(e,t.native,e.active),e.lastActive.length&&e.updateHoverStyle(e.lastActive,i.mode,!1),e.active.length&&i.mode&&e.updateHoverStyle(e.active,i.mode,!0),o=!a.arrayEquals(e.active,e.lastActive),e.lastActive=e.active,o}}),t.Controller=t}},{25:25,28:28,45:45,48:48}],24:[function(t,e,n){"use strict";var i=t(45);e.exports=function(t){function e(t,e){t._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),a.forEach(function(e){var n="onData"+e.charAt(0).toUpperCase()+e.slice(1),a=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),o=a.apply(this,e);return i.each(t._chartjs.listeners,function(t){"function"==typeof t[n]&&t[n].apply(t,e)}),o}})}))}function n(t,e){var n=t._chartjs;if(n){var i=n.listeners,o=i.indexOf(e);-1!==o&&i.splice(o,1),i.length>0||(a.forEach(function(e){delete t[e]}),delete t._chartjs)}}var a=["push","pop","shift","splice","unshift"];t.DatasetController=function(t,e){this.initialize(t,e)},i.extend(t.DatasetController.prototype,{datasetElementType:null,dataElementType:null,initialize:function(t,e){var n=this;n.chart=t,n.index=e,n.linkScales(),n.addElements()},updateIndex:function(t){this.index=t},linkScales:function(){var t=this,e=t.getMeta(),n=t.getDataset();null===e.xAxisID&&(e.xAxisID=n.xAxisID||t.chart.options.scales.xAxes[0].id),null===e.yAxisID&&(e.yAxisID=n.yAxisID||t.chart.options.scales.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},reset:function(){this.update(!0)},destroy:function(){this._data&&n(this._data,this)},createMetaDataset:function(){var t=this,e=t.datasetElementType;return e&&new e({_chart:t.chart,_datasetIndex:t.index})},createMetaData:function(t){var e=this,n=e.dataElementType;return n&&new n({_chart:e.chart,_datasetIndex:e.index,_index:t})},addElements:function(){var t,e,n=this,i=n.getMeta(),a=n.getDataset().data||[],o=i.data;for(t=0,e=a.length;t<e;++t)o[t]=o[t]||n.createMetaData(t);i.dataset=i.dataset||n.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t=this,i=t.getDataset(),a=i.data||(i.data=[]);t._data!==a&&(t._data&&n(t._data,t),e(a,t),t._data=a),t.resyncElements()},update:i.noop,transition:function(t){for(var e=this.getMeta(),n=e.data||[],i=n.length,a=0;a<i;++a)n[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],n=e.length,i=0;for(t.dataset&&t.dataset.draw();i<n;++i)e[i].draw()},removeHoverStyle:function(t,e){var n=this.chart.data.datasets[t._datasetIndex],a=t._index,o=t.custom||{},r=i.valueAtIndexOrDefault,l=t._model;l.backgroundColor=o.backgroundColor?o.backgroundColor:r(n.backgroundColor,a,e.backgroundColor),l.borderColor=o.borderColor?o.borderColor:r(n.borderColor,a,e.borderColor),l.borderWidth=o.borderWidth?o.borderWidth:r(n.borderWidth,a,e.borderWidth)},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],n=t._index,a=t.custom||{},o=i.valueAtIndexOrDefault,r=i.getHoverColor,l=t._model;l.backgroundColor=a.hoverBackgroundColor?a.hoverBackgroundColor:o(e.hoverBackgroundColor,n,r(l.backgroundColor)),l.borderColor=a.hoverBorderColor?a.hoverBorderColor:o(e.hoverBorderColor,n,r(l.borderColor)),l.borderWidth=a.hoverBorderWidth?a.hoverBorderWidth:o(e.hoverBorderWidth,n,l.borderWidth)},resyncElements:function(){var t=this,e=t.getMeta(),n=t.getDataset().data,i=e.data.length,a=n.length;a<i?e.data.splice(a,i-a):a>i&&t.insertElements(i,a-i)},insertElements:function(t,e){for(var n=0;n<e;++n)this.addElementAndReset(t+n)},onDataPush:function(){this.insertElements(this.getDataset().data.length-1,arguments.length)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),t.DatasetController.extend=i.inherits}},{45:45}],25:[function(t,e,n){"use strict";var i=t(45);e.exports={_set:function(t,e){return i.merge(this[t]||(this[t]={}),e)}}},{45:45}],26:[function(t,e,n){"use strict";function i(t,e,n,i){var o,r,l,s,u,d,c,h,f,g=Object.keys(n);for(o=0,r=g.length;o<r;++o)if(l=g[o],d=n[l],e.hasOwnProperty(l)||(e[l]=d),(s=e[l])!==d&&"_"!==l[0]){if(t.hasOwnProperty(l)||(t[l]=s),u=t[l],(c=typeof d)===typeof u)if("string"===c){if((h=a(u)).valid&&(f=a(d)).valid){e[l]=f.mix(h,i).rgbString();continue}}else if("number"===c&&isFinite(u)&&isFinite(d)){e[l]=u+(d-u)*i;continue}e[l]=d}}var a=t(3),o=t(45),r=function(t){o.extend(this,t),this.initialize.apply(this,arguments)};o.extend(r.prototype,{initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=o.clone(t._model)),t._start={},t},transition:function(t){var e=this,n=e._model,a=e._start,o=e._view;return n&&1!==t?(o||(o=e._view={}),a||(a=e._start={}),i(a,o,n,t),e):(e._view=n,e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return o.isNumber(this._model.x)&&o.isNumber(this._model.y)}}),r.extend=o.inherits,e.exports=r},{3:3,45:45}],27:[function(t,e,n){"use strict";var i=t(3),a=t(25),o=t(45);e.exports=function(t){function e(t,e,n){var i;return"string"==typeof t?(i=parseInt(t,10),-1!==t.indexOf("%")&&(i=i/100*e.parentNode[n])):i=t,i}function n(t){return void 0!==t&&null!==t&&"none"!==t}function r(t,i,a){var o=document.defaultView,r=t.parentNode,l=o.getComputedStyle(t)[i],s=o.getComputedStyle(r)[i],u=n(l),d=n(s),c=Number.POSITIVE_INFINITY;return u||d?Math.min(u?e(l,t,a):c,d?e(s,r,a):c):"none"}o.configMerge=function(){return o.merge(o.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(e,n,i,a){var r=n[e]||{},l=i[e];"scales"===e?n[e]=o.scaleMerge(r,l):"scale"===e?n[e]=o.merge(r,[t.scaleService.getScaleDefaults(l.type),l]):o._merger(e,n,i,a)}})},o.scaleMerge=function(){return o.merge(o.clone(arguments[0]),[].slice.call(arguments,1),{merger:function(e,n,i,a){if("xAxes"===e||"yAxes"===e){var r,l,s,u=i[e].length;for(n[e]||(n[e]=[]),r=0;r<u;++r)s=i[e][r],l=o.valueOrDefault(s.type,"xAxes"===e?"category":"linear"),r>=n[e].length&&n[e].push({}),!n[e][r].type||s.type&&s.type!==n[e][r].type?o.merge(n[e][r],[t.scaleService.getScaleDefaults(l),s]):o.merge(n[e][r],s)}else o._merger(e,n,i,a)}})},o.where=function(t,e){if(o.isArray(t)&&Array.prototype.filter)return t.filter(e);var n=[];return o.each(t,function(t){e(t)&&n.push(t)}),n},o.findIndex=Array.prototype.findIndex?function(t,e,n){return t.findIndex(e,n)}:function(t,e,n){n=void 0===n?t:n;for(var i=0,a=t.length;i<a;++i)if(e.call(n,t[i],i,t))return i;return-1},o.findNextWhere=function(t,e,n){o.isNullOrUndef(n)&&(n=-1);for(var i=n+1;i<t.length;i++){var a=t[i];if(e(a))return a}},o.findPreviousWhere=function(t,e,n){o.isNullOrUndef(n)&&(n=t.length);for(var i=n-1;i>=0;i--){var a=t[i];if(e(a))return a}},o.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},o.almostEquals=function(t,e,n){return Math.abs(t-e)<n},o.almostWhole=function(t,e){var n=Math.round(t);return n-e<t&&n+e>t},o.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},o.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},o.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0==(t=+t)||isNaN(t)?t:t>0?1:-1},o.log10=Math.log10?function(t){return Math.log10(t)}:function(t){return Math.log(t)/Math.LN10},o.toRadians=function(t){return t*(Math.PI/180)},o.toDegrees=function(t){return t*(180/Math.PI)},o.getAngleFromPoint=function(t,e){var n=e.x-t.x,i=e.y-t.y,a=Math.sqrt(n*n+i*i),o=Math.atan2(i,n);return o<-.5*Math.PI&&(o+=2*Math.PI),{angle:o,distance:a}},o.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},o.aliasPixel=function(t){return t%2==0?0:.5},o.splineCurve=function(t,e,n,i){var a=t.skip?e:t,o=e,r=n.skip?e:n,l=Math.sqrt(Math.pow(o.x-a.x,2)+Math.pow(o.y-a.y,2)),s=Math.sqrt(Math.pow(r.x-o.x,2)+Math.pow(r.y-o.y,2)),u=l/(l+s),d=s/(l+s),c=i*(u=isNaN(u)?0:u),h=i*(d=isNaN(d)?0:d);return{previous:{x:o.x-c*(r.x-a.x),y:o.y-c*(r.y-a.y)},next:{x:o.x+h*(r.x-a.x),y:o.y+h*(r.y-a.y)}}},o.EPSILON=Number.EPSILON||1e-14,o.splineCurveMonotone=function(t){var e,n,i,a,r=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),l=r.length;for(e=0;e<l;++e)if(!(i=r[e]).model.skip){if(n=e>0?r[e-1]:null,(a=e<l-1?r[e+1]:null)&&!a.model.skip){var s=a.model.x-i.model.x;i.deltaK=0!==s?(a.model.y-i.model.y)/s:0}!n||n.model.skip?i.mK=i.deltaK:!a||a.model.skip?i.mK=n.deltaK:this.sign(n.deltaK)!==this.sign(i.deltaK)?i.mK=0:i.mK=(n.deltaK+i.deltaK)/2}var u,d,c,h;for(e=0;e<l-1;++e)i=r[e],a=r[e+1],i.model.skip||a.model.skip||(o.almostEquals(i.deltaK,0,this.EPSILON)?i.mK=a.mK=0:(u=i.mK/i.deltaK,d=a.mK/i.deltaK,(h=Math.pow(u,2)+Math.pow(d,2))<=9||(c=3/Math.sqrt(h),i.mK=u*c*i.deltaK,a.mK=d*c*i.deltaK)));var f;for(e=0;e<l;++e)(i=r[e]).model.skip||(n=e>0?r[e-1]:null,a=e<l-1?r[e+1]:null,n&&!n.model.skip&&(f=(i.model.x-n.model.x)/3,i.model.controlPointPreviousX=i.model.x-f,i.model.controlPointPreviousY=i.model.y-f*i.mK),a&&!a.model.skip&&(f=(a.model.x-i.model.x)/3,i.model.controlPointNextX=i.model.x+f,i.model.controlPointNextY=i.model.y+f*i.mK))},o.nextItem=function(t,e,n){return n?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},o.previousItem=function(t,e,n){return n?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},o.niceNum=function(t,e){var n=Math.floor(o.log10(t)),i=t/Math.pow(10,n);return(e?i<1.5?1:i<3?2:i<7?5:10:i<=1?1:i<=2?2:i<=5?5:10)*Math.pow(10,n)},o.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},o.getRelativePosition=function(t,e){var n,i,a=t.originalEvent||t,r=t.currentTarget||t.srcElement,l=r.getBoundingClientRect(),s=a.touches;s&&s.length>0?(n=s[0].clientX,i=s[0].clientY):(n=a.clientX,i=a.clientY);var u=parseFloat(o.getStyle(r,"padding-left")),d=parseFloat(o.getStyle(r,"padding-top")),c=parseFloat(o.getStyle(r,"padding-right")),h=parseFloat(o.getStyle(r,"padding-bottom")),f=l.right-l.left-u-c,g=l.bottom-l.top-d-h;return n=Math.round((n-l.left-u)/f*r.width/e.currentDevicePixelRatio),i=Math.round((i-l.top-d)/g*r.height/e.currentDevicePixelRatio),{x:n,y:i}},o.getConstraintWidth=function(t){return r(t,"max-width","clientWidth")},o.getConstraintHeight=function(t){return r(t,"max-height","clientHeight")},o.getMaximumWidth=function(t){var e=t.parentNode;if(!e)return t.clientWidth;var n=parseInt(o.getStyle(e,"padding-left"),10),i=parseInt(o.getStyle(e,"padding-right"),10),a=e.clientWidth-n-i,r=o.getConstraintWidth(t);return isNaN(r)?a:Math.min(a,r)},o.getMaximumHeight=function(t){var e=t.parentNode;if(!e)return t.clientHeight;var n=parseInt(o.getStyle(e,"padding-top"),10),i=parseInt(o.getStyle(e,"padding-bottom"),10),a=e.clientHeight-n-i,r=o.getConstraintHeight(t);return isNaN(r)?a:Math.min(a,r)},o.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},o.retinaScale=function(t,e){var n=t.currentDevicePixelRatio=e||window.devicePixelRatio||1;if(1!==n){var i=t.canvas,a=t.height,o=t.width;i.height=a*n,i.width=o*n,t.ctx.scale(n,n),i.style.height=a+"px",i.style.width=o+"px"}},o.fontString=function(t,e,n){return e+" "+t+"px "+n},o.longestText=function(t,e,n,i){var a=(i=i||{}).data=i.data||{},r=i.garbageCollect=i.garbageCollect||[];i.font!==e&&(a=i.data={},r=i.garbageCollect=[],i.font=e),t.font=e;var l=0;o.each(n,function(e){void 0!==e&&null!==e&&!0!==o.isArray(e)?l=o.measureText(t,a,r,l,e):o.isArray(e)&&o.each(e,function(e){void 0===e||null===e||o.isArray(e)||(l=o.measureText(t,a,r,l,e))})});var s=r.length/2;if(s>n.length){for(var u=0;u<s;u++)delete a[r[u]];r.splice(0,s)}return l},o.measureText=function(t,e,n,i,a){var o=e[a];return o||(o=e[a]=t.measureText(a).width,n.push(a)),o>i&&(i=o),i},o.numberOfLabelLines=function(t){var e=1;return o.each(t,function(t){o.isArray(t)&&t.length>e&&(e=t.length)}),e},o.color=i?function(t){return t instanceof CanvasGradient&&(t=a.global.defaultColor),i(t)}:function(t){return console.error("Color.js not found!"),t},o.getHoverColor=function(t){return t instanceof CanvasPattern?t:o.color(t).saturate(.5).darken(.1).rgbString()}}},{25:25,3:3,45:45}],28:[function(t,e,n){"use strict";function i(t,e){return t.native?{x:t.x,y:t.y}:u.getRelativePosition(t,e)}function a(t,e){var n,i,a,o,r;for(i=0,o=t.data.datasets.length;i<o;++i)if(t.isDatasetVisible(i))for(a=0,r=(n=t.getDatasetMeta(i)).data.length;a<r;++a){var l=n.data[a];l._view.skip||e(l)}}function o(t,e){var n=[];return a(t,function(t){t.inRange(e.x,e.y)&&n.push(t)}),n}function r(t,e,n,i){var o=Number.POSITIVE_INFINITY,r=[];return a(t,function(t){if(!n||t.inRange(e.x,e.y)){var a=t.getCenterPoint(),l=i(e,a);l<o?(r=[t],o=l):l===o&&r.push(t)}}),r}function l(t){var e=-1!==t.indexOf("x"),n=-1!==t.indexOf("y");return function(t,i){var a=e?Math.abs(t.x-i.x):0,o=n?Math.abs(t.y-i.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(o,2))}}function s(t,e,n){var a=i(e,t);n.axis=n.axis||"x";var s=l(n.axis),u=n.intersect?o(t,a):r(t,a,!1,s),d=[];return u.length?(t.data.datasets.forEach(function(e,n){if(t.isDatasetVisible(n)){var i=t.getDatasetMeta(n).data[u[0]._index];i&&!i._view.skip&&d.push(i)}}),d):[]}var u=t(45);e.exports={modes:{single:function(t,e){var n=i(e,t),o=[];return a(t,function(t){if(t.inRange(n.x,n.y))return o.push(t),o}),o.slice(0,1)},label:s,index:s,dataset:function(t,e,n){var a=i(e,t);n.axis=n.axis||"xy";var s=l(n.axis),u=n.intersect?o(t,a):r(t,a,!1,s);return u.length>0&&(u=t.getDatasetMeta(u[0]._datasetIndex).data),u},"x-axis":function(t,e){return s(t,e,{intersect:!1})},point:function(t,e){return o(t,i(e,t))},nearest:function(t,e,n){var a=i(e,t);n.axis=n.axis||"xy";var o=l(n.axis),s=r(t,a,n.intersect,o);return s.length>1&&s.sort(function(t,e){var n=t.getArea()-e.getArea();return 0===n&&(n=t._datasetIndex-e._datasetIndex),n}),s.slice(0,1)},x:function(t,e,n){var o=i(e,t),r=[],l=!1;return a(t,function(t){t.inXRange(o.x)&&r.push(t),t.inRange(o.x,o.y)&&(l=!0)}),n.intersect&&!l&&(r=[]),r},y:function(t,e,n){var o=i(e,t),r=[],l=!1;return a(t,function(t){t.inYRange(o.y)&&r.push(t),t.inRange(o.x,o.y)&&(l=!0)}),n.intersect&&!l&&(r=[]),r}}}},{45:45}],29:[function(t,e,n){"use strict";t(25)._set("global",{responsive:!0,responsiveAnimationDuration:0,maintainAspectRatio:!0,events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",showLines:!0,elements:{},layout:{padding:{top:0,right:0,bottom:0,left:0}}}),e.exports=function(){var t=function(t,e){return this.construct(t,e),this};return t.Chart=t,t}},{25:25}],30:[function(t,e,n){"use strict";var i=t(45);e.exports=function(t){function e(t,e){return i.where(t,function(t){return t.position===e})}function n(t,e){t.forEach(function(t,e){return t._tmpIndex_=e,t}),t.sort(function(t,n){var i=e?n:t,a=e?t:n;return i.weight===a.weight?i._tmpIndex_-a._tmpIndex_:i.weight-a.weight}),t.forEach(function(t){delete t._tmpIndex_})}t.layoutService={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,t.boxes.push(e)},removeBox:function(t,e){var n=t.boxes?t.boxes.indexOf(e):-1;-1!==n&&t.boxes.splice(n,1)},configure:function(t,e,n){for(var i,a=["fullWidth","position","weight"],o=a.length,r=0;r<o;++r)i=a[r],n.hasOwnProperty(i)&&(e[i]=n[i])},update:function(t,a,o){function r(t){var e=i.findNextWhere(_,function(e){return e.box===t});if(e)if(t.isHorizontal()){var n={left:Math.max(T,D),right:Math.max(F,I),top:0,bottom:0};t.update(t.fullWidth?x:S,y/2,n)}else t.update(e.minSize.width,C)}function l(t){t.isHorizontal()?(t.left=t.fullWidth?d:T,t.right=t.fullWidth?a-c:T+S,t.top=V,t.bottom=V+t.height,V=t.bottom):(t.left=N,t.right=N+t.width,t.top=O,t.bottom=O+C,N=t.right)}if(t){var s=t.options.layout||{},u=i.options.toPadding(s.padding),d=u.left,c=u.right,h=u.top,f=u.bottom,g=e(t.boxes,"left"),p=e(t.boxes,"right"),v=e(t.boxes,"top"),m=e(t.boxes,"bottom"),b=e(t.boxes,"chartArea");n(g,!0),n(p,!1),n(v,!0),n(m,!1);var x=a-d-c,y=o-h-f,k=y/2,w=(a-x/2)/(g.length+p.length),M=(o-k)/(v.length+m.length),S=x,C=y,_=[];i.each(g.concat(p,v,m),function(t){var e,n=t.isHorizontal();n?(e=t.update(t.fullWidth?x:S,M),C-=e.height):(e=t.update(w,k),S-=e.width),_.push({horizontal:n,minSize:e,box:t})});var D=0,I=0,P=0,A=0;i.each(v.concat(m),function(t){if(t.getPadding){var e=t.getPadding();D=Math.max(D,e.left),I=Math.max(I,e.right)}}),i.each(g.concat(p),function(t){if(t.getPadding){var e=t.getPadding();P=Math.max(P,e.top),A=Math.max(A,e.bottom)}});var T=d,F=c,O=h,R=f;i.each(g.concat(p),r),i.each(g,function(t){T+=t.width}),i.each(p,function(t){F+=t.width}),i.each(v.concat(m),r),i.each(v,function(t){O+=t.height}),i.each(m,function(t){R+=t.height}),i.each(g.concat(p),function(t){var e=i.findNextWhere(_,function(e){return e.box===t}),n={left:0,right:0,top:O,bottom:R};e&&t.update(e.minSize.width,C,n)}),T=d,F=c,O=h,R=f,i.each(g,function(t){T+=t.width}),i.each(p,function(t){F+=t.width}),i.each(v,function(t){O+=t.height}),i.each(m,function(t){R+=t.height});var L=Math.max(D-T,0);T+=L,F+=Math.max(I-F,0);var z=Math.max(P-O,0);O+=z,R+=Math.max(A-R,0);var B=o-O-R,W=a-T-F;W===S&&B===C||(i.each(g,function(t){t.height=B}),i.each(p,function(t){t.height=B}),i.each(v,function(t){t.fullWidth||(t.width=W)}),i.each(m,function(t){t.fullWidth||(t.width=W)}),C=B,S=W);var N=d+L,V=h+z;i.each(g.concat(v),l),N+=S,V+=C,i.each(p,l),i.each(m,l),t.chartArea={left:T,top:O,right:T+S,bottom:O+C},i.each(b,function(e){e.left=t.chartArea.left,e.top=t.chartArea.top,e.right=t.chartArea.right,e.bottom=t.chartArea.bottom,e.update(S,C)})}}}}},{45:45}],31:[function(t,e,n){"use strict";var i=t(25),a=t(26),o=t(45);i._set("global",{plugins:{}}),e.exports=function(t){t.plugins={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,n){var i,a,o,r,l,s=this.descriptors(t),u=s.length;for(i=0;i<u;++i)if(a=s[i],o=a.plugin,"function"==typeof(l=o[e])&&((r=[t].concat(n||[])).push(a.options),!1===l.apply(o,r)))return!1;return!0},descriptors:function(t){var e=t._plugins||(t._plugins={});if(e.id===this._cacheId)return e.descriptors;var n=[],a=[],r=t&&t.config||{},l=r.options&&r.options.plugins||{};return this._plugins.concat(r.plugins||[]).forEach(function(t){if(-1===n.indexOf(t)){var e=t.id,r=l[e];!1!==r&&(!0===r&&(r=o.clone(i.global.plugins[e])),n.push(t),a.push({plugin:t,options:r||{}}))}}),e.descriptors=a,e.id=this._cacheId,a}},t.pluginService=t.plugins,t.PluginBase=a.extend({})}},{25:25,26:26,45:45}],32:[function(t,e,n){"use strict";function i(t){var e,n,i=[];for(e=0,n=t.length;e<n;++e)i.push(t[e].label);return i}function a(t,e,n){var i=t.getPixelForTick(e);return n&&(i-=0===e?(t.getPixelForTick(1)-i)/2:(i-t.getPixelForTick(e-1))/2),i}var o=t(25),r=t(26),l=t(45),s=t(34);o._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",lineHeight:1.2,padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:s.formatters.values,minor:{},major:{}}}),e.exports=function(t){function e(t,e,n){return l.isArray(e)?l.longestText(t,n,e):t.measureText(e).width}function n(t){var e=l.valueOrDefault,n=o.global,i=e(t.fontSize,n.defaultFontSize),a=e(t.fontStyle,n.defaultFontStyle),r=e(t.fontFamily,n.defaultFontFamily);return{size:i,style:a,family:r,font:l.fontString(i,a,r)}}function s(t){return l.options.toLineHeight(l.valueOrDefault(t.lineHeight,1.2),l.valueOrDefault(t.fontSize,o.global.defaultFontSize))}t.Scale=r.extend({getPadding:function(){var t=this;return{left:t.paddingLeft||0,top:t.paddingTop||0,right:t.paddingRight||0,bottom:t.paddingBottom||0}},getTicks:function(){return this._ticks},mergeTicksOptions:function(){var t=this.options.ticks;!1===t.minor&&(t.minor={display:!1}),!1===t.major&&(t.major={display:!1});for(var e in t)"major"!==e&&"minor"!==e&&(void 0===t.minor[e]&&(t.minor[e]=t[e]),void 0===t.major[e]&&(t.major[e]=t[e]))},beforeUpdate:function(){l.callback(this.options.beforeUpdate,[this])},update:function(t,e,n){var i,a,o,r,s,u,d=this;for(d.beforeUpdate(),d.maxWidth=t,d.maxHeight=e,d.margins=l.extend({left:0,right:0,top:0,bottom:0},n),d.longestTextCache=d.longestTextCache||{},d.beforeSetDimensions(),d.setDimensions(),d.afterSetDimensions(),d.beforeDataLimits(),d.determineDataLimits(),d.afterDataLimits(),d.beforeBuildTicks(),s=d.buildTicks()||[],d.afterBuildTicks(),d.beforeTickToLabelConversion(),o=d.convertTicksToLabels(s)||d.ticks,d.afterTickToLabelConversion(),d.ticks=o,i=0,a=o.length;i<a;++i)r=o[i],(u=s[i])?u.label=r:s.push(u={label:r,major:!1});return d._ticks=s,d.beforeCalculateTickRotation(),d.calculateTickRotation(),d.afterCalculateTickRotation(),d.beforeFit(),d.fit(),d.afterFit(),d.afterUpdate(),d.minSize},afterUpdate:function(){l.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){l.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){l.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){l.callback(this.options.beforeDataLimits,[this])},determineDataLimits:l.noop,afterDataLimits:function(){l.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){l.callback(this.options.beforeBuildTicks,[this])},buildTicks:l.noop,afterBuildTicks:function(){l.callback(this.options.afterBuildTicks,[this])},beforeTickToLabelConversion:function(){l.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this,e=t.options.ticks;t.ticks=t.ticks.map(e.userCallback||e.callback,this)},afterTickToLabelConversion:function(){l.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){l.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t=this,e=t.ctx,a=t.options.ticks,o=i(t._ticks),r=n(a);e.font=r.font;var s=a.minRotation||0;if(o.length&&t.options.display&&t.isHorizontal())for(var u,d=l.longestText(e,r.font,o,t.longestTextCache),c=d,h=t.getPixelForTick(1)-t.getPixelForTick(0)-6;c>h&&s<a.maxRotation;){var f=l.toRadians(s);if(u=Math.cos(f),Math.sin(f)*d>t.maxHeight){s--;break}s++,c=u*d}t.labelRotation=s},afterCalculateTickRotation:function(){l.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){l.callback(this.options.beforeFit,[this])},fit:function(){var t=this,a=t.minSize={width:0,height:0},o=i(t._ticks),r=t.options,u=r.ticks,d=r.scaleLabel,c=r.gridLines,h=r.display,f=t.isHorizontal(),g=n(u),p=r.gridLines.tickMarkLength;if(a.width=f?t.isFullWidth()?t.maxWidth-t.margins.left-t.margins.right:t.maxWidth:h&&c.drawTicks?p:0,a.height=f?h&&c.drawTicks?p:0:t.maxHeight,d.display&&h){var v=s(d)+l.options.toPadding(d.padding).height;f?a.height+=v:a.width+=v}if(u.display&&h){var m=l.longestText(t.ctx,g.font,o,t.longestTextCache),b=l.numberOfLabelLines(o),x=.5*g.size,y=t.options.ticks.padding;if(f){t.longestLabelWidth=m;var k=l.toRadians(t.labelRotation),w=Math.cos(k),M=Math.sin(k)*m+g.size*b+x*(b-1)+x;a.height=Math.min(t.maxHeight,a.height+M+y),t.ctx.font=g.font;var S=e(t.ctx,o[0],g.font),C=e(t.ctx,o[o.length-1],g.font);0!==t.labelRotation?(t.paddingLeft="bottom"===r.position?w*S+3:w*x+3,t.paddingRight="bottom"===r.position?w*x+3:w*C+3):(t.paddingLeft=S/2+3,t.paddingRight=C/2+3)}else u.mirror?m=0:m+=y+x,a.width=Math.min(t.maxWidth,a.width+m),t.paddingTop=g.size/2,t.paddingBottom=g.size/2}t.handleMargins(),t.width=a.width,t.height=a.height},handleMargins:function(){var t=this;t.margins&&(t.paddingLeft=Math.max(t.paddingLeft-t.margins.left,0),t.paddingTop=Math.max(t.paddingTop-t.margins.top,0),t.paddingRight=Math.max(t.paddingRight-t.margins.right,0),t.paddingBottom=Math.max(t.paddingBottom-t.margins.bottom,0))},afterFit:function(){l.callback(this.options.afterFit,[this])},isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(l.isNullOrUndef(t))return NaN;if("number"==typeof t&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},getLabelForIndex:l.noop,getPixelForValue:l.noop,getValueForPixel:l.noop,getPixelForTick:function(t){var e=this,n=e.options.offset;if(e.isHorizontal()){var i=(e.width-(e.paddingLeft+e.paddingRight))/Math.max(e._ticks.length-(n?0:1),1),a=i*t+e.paddingLeft;n&&(a+=i/2);var o=e.left+Math.round(a);return o+=e.isFullWidth()?e.margins.left:0}var r=e.height-(e.paddingTop+e.paddingBottom);return e.top+t*(r/(e._ticks.length-1))},getPixelForDecimal:function(t){var e=this;if(e.isHorizontal()){var n=(e.width-(e.paddingLeft+e.paddingRight))*t+e.paddingLeft,i=e.left+Math.round(n);return i+=e.isFullWidth()?e.margins.left:0}return e.top+t*e.height},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this,e=t.min,n=t.max;return t.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0},_autoSkip:function(t){var e,n,i,a,o=this,r=o.isHorizontal(),s=o.options.ticks.minor,u=t.length,d=l.toRadians(o.labelRotation),c=Math.cos(d),h=o.longestLabelWidth*c,f=[];for(s.maxTicksLimit&&(a=s.maxTicksLimit),r&&(e=!1,(h+s.autoSkipPadding)*u>o.width-(o.paddingLeft+o.paddingRight)&&(e=1+Math.floor((h+s.autoSkipPadding)*u/(o.width-(o.paddingLeft+o.paddingRight)))),a&&u>a&&(e=Math.max(e,Math.floor(u/a)))),n=0;n<u;n++)i=t[n],(e>1&&n%e>0||n%e==0&&n+e>=u)&&n!==u-1&&delete i.label,f.push(i);return f},draw:function(t){var e=this,i=e.options;if(i.display){var r=e.ctx,u=o.global,d=i.ticks.minor,c=i.ticks.major||d,h=i.gridLines,f=i.scaleLabel,g=0!==e.labelRotation,p=e.isHorizontal(),v=d.autoSkip?e._autoSkip(e.getTicks()):e.getTicks(),m=l.valueOrDefault(d.fontColor,u.defaultFontColor),b=n(d),x=l.valueOrDefault(c.fontColor,u.defaultFontColor),y=n(c),k=h.drawTicks?h.tickMarkLength:0,w=l.valueOrDefault(f.fontColor,u.defaultFontColor),M=n(f),S=l.options.toPadding(f.padding),C=l.toRadians(e.labelRotation),_=[],D="right"===i.position?e.left:e.right-k,I="right"===i.position?e.left+k:e.right,P="bottom"===i.position?e.top:e.bottom-k,A="bottom"===i.position?e.top+k:e.bottom;if(l.each(v,function(n,o){if(!l.isNullOrUndef(n.label)){var r,s,c,f,m=n.label;o===e.zeroLineIndex&&i.offset===h.offsetGridLines?(r=h.zeroLineWidth,s=h.zeroLineColor,c=h.zeroLineBorderDash,f=h.zeroLineBorderDashOffset):(r=l.valueAtIndexOrDefault(h.lineWidth,o),s=l.valueAtIndexOrDefault(h.color,o),c=l.valueOrDefault(h.borderDash,u.borderDash),f=l.valueOrDefault(h.borderDashOffset,u.borderDashOffset));var b,x,y,w,M,S,T,F,O,R,L="middle",z="middle",B=d.padding;if(p){var W=k+B;"bottom"===i.position?(z=g?"middle":"top",L=g?"right":"center",R=e.top+W):(z=g?"middle":"bottom",L=g?"left":"center",R=e.bottom-W);var N=a(e,o,h.offsetGridLines&&v.length>1);N<e.left&&(s="rgba(0,0,0,0)"),N+=l.aliasPixel(r),O=e.getPixelForTick(o)+d.labelOffset,b=y=M=T=N,x=P,w=A,S=t.top,F=t.bottom}else{var V,E="left"===i.position;d.mirror?(L=E?"left":"right",V=B):(L=E?"right":"left",V=k+B),O=E?e.right-V:e.left+V;var H=a(e,o,h.offsetGridLines&&v.length>1);H<e.top&&(s="rgba(0,0,0,0)"),H+=l.aliasPixel(r),R=e.getPixelForTick(o)+d.labelOffset,b=D,y=I,M=t.left,T=t.right,x=w=S=F=H}_.push({tx1:b,ty1:x,tx2:y,ty2:w,x1:M,y1:S,x2:T,y2:F,labelX:O,labelY:R,glWidth:r,glColor:s,glBorderDash:c,glBorderDashOffset:f,rotation:-1*C,label:m,major:n.major,textBaseline:z,textAlign:L})}}),l.each(_,function(t){if(h.display&&(r.save(),r.lineWidth=t.glWidth,r.strokeStyle=t.glColor,r.setLineDash&&(r.setLineDash(t.glBorderDash),r.lineDashOffset=t.glBorderDashOffset),r.beginPath(),h.drawTicks&&(r.moveTo(t.tx1,t.ty1),r.lineTo(t.tx2,t.ty2)),h.drawOnChartArea&&(r.moveTo(t.x1,t.y1),r.lineTo(t.x2,t.y2)),r.stroke(),r.restore()),d.display){r.save(),r.translate(t.labelX,t.labelY),r.rotate(t.rotation),r.font=t.major?y.font:b.font,r.fillStyle=t.major?x:m,r.textBaseline=t.textBaseline,r.textAlign=t.textAlign;var e=t.label;if(l.isArray(e))for(var n=0,i=0;n<e.length;++n)r.fillText(""+e[n],0,i),i+=1.5*b.size;else r.fillText(e,0,0);r.restore()}}),f.display){var T,F,O=0,R=s(f)/2;if(p)T=e.left+(e.right-e.left)/2,F="bottom"===i.position?e.bottom-R-S.bottom:e.top+R+S.top;else{var L="left"===i.position;T=L?e.left+R+S.top:e.right-R-S.top,F=e.top+(e.bottom-e.top)/2,O=L?-.5*Math.PI:.5*Math.PI}r.save(),r.translate(T,F),r.rotate(O),r.textAlign="center",r.textBaseline="middle",r.fillStyle=w,r.font=M.font,r.fillText(f.labelString,0,0),r.restore()}if(h.drawBorder){r.lineWidth=l.valueAtIndexOrDefault(h.lineWidth,0),r.strokeStyle=l.valueAtIndexOrDefault(h.color,0);var z=e.left,B=e.right,W=e.top,N=e.bottom,V=l.aliasPixel(r.lineWidth);p?(W=N="top"===i.position?e.bottom:e.top,W+=V,N+=V):(z=B="left"===i.position?e.right:e.left,z+=V,B+=V),r.beginPath(),r.moveTo(z,W),r.lineTo(B,N),r.stroke()}}}})}},{25:25,26:26,34:34,45:45}],33:[function(t,e,n){"use strict";var i=t(25),a=t(45);e.exports=function(t){t.scaleService={constructors:{},defaults:{},registerScaleType:function(t,e,n){this.constructors[t]=e,this.defaults[t]=a.clone(n)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?a.merge({},[i.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){var n=this;n.defaults.hasOwnProperty(t)&&(n.defaults[t]=a.extend(n.defaults[t],e))},addScalesToLayout:function(e){a.each(e.scales,function(n){n.fullWidth=n.options.fullWidth,n.position=n.options.position,n.weight=n.options.weight,t.layoutService.addBox(e,n)})}}}},{25:25,45:45}],34:[function(t,e,n){"use strict";var i=t(45);e.exports={generators:{linear:function(t,e){var n,a=[];if(t.stepSize&&t.stepSize>0)n=t.stepSize;else{var o=i.niceNum(e.max-e.min,!1);n=i.niceNum(o/(t.maxTicks-1),!0)}var r=Math.floor(e.min/n)*n,l=Math.ceil(e.max/n)*n;t.min&&t.max&&t.stepSize&&i.almostWhole((t.max-t.min)/t.stepSize,n/1e3)&&(r=t.min,l=t.max);var s=(l-r)/n;s=i.almostEquals(s,Math.round(s),n/1e3)?Math.round(s):Math.ceil(s),a.push(void 0!==t.min?t.min:r);for(var u=1;u<s;++u)a.push(r+u*n);return a.push(void 0!==t.max?t.max:l),a},logarithmic:function(t,e){var n,a,o=[],r=i.valueOrDefault,l=r(t.min,Math.pow(10,Math.floor(i.log10(e.min)))),s=Math.floor(i.log10(e.max)),u=Math.ceil(e.max/Math.pow(10,s));0===l?(n=Math.floor(i.log10(e.minNotZero)),a=Math.floor(e.minNotZero/Math.pow(10,n)),o.push(l),l=a*Math.pow(10,n)):(n=Math.floor(i.log10(l)),a=Math.floor(l/Math.pow(10,n)));do{o.push(l),10===++a&&(a=1,++n),l=a*Math.pow(10,n)}while(n<s||n===s&&a<u);var d=r(t.max,l);return o.push(d),o}},formatters:{values:function(t){return i.isArray(t)?t:""+t},linear:function(t,e,n){var a=n.length>3?n[2]-n[1]:n[1]-n[0];Math.abs(a)>1&&t!==Math.floor(t)&&(a=t-Math.floor(t));var o=i.log10(Math.abs(a)),r="";if(0!==t){var l=-1*Math.floor(o);l=Math.max(Math.min(l,20),0),r=t.toFixed(l)}else r="0";return r},logarithmic:function(t,e,n){var a=t/Math.pow(10,Math.floor(i.log10(t)));return 0===t?"0":1===a||2===a||5===a||0===e||e===n.length-1?t.toExponential():""}}}},{45:45}],35:[function(t,e,n){"use strict";var i=t(25),a=t(26),o=t(45);i._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:o.noop,title:function(t,e){var n="",i=e.labels,a=i?i.length:0;if(t.length>0){var o=t[0];o.xLabel?n=o.xLabel:a>0&&o.index<a&&(n=i[o.index])}return n},afterTitle:o.noop,beforeBody:o.noop,beforeLabel:o.noop,label:function(t,e){var n=e.datasets[t.datasetIndex].label||"";return n&&(n+=": "),n+=t.yLabel},labelColor:function(t,e){var n=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:n.borderColor,backgroundColor:n.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:o.noop,afterBody:o.noop,beforeFooter:o.noop,footer:o.noop,afterFooter:o.noop}}}),e.exports=function(t){function e(t,e){var n=o.color(t);return n.alpha(e*n.alpha()).rgbaString()}function n(t,e){return e&&(o.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function r(t){var e=t._xScale,n=t._yScale||t._scale,i=t._index,a=t._datasetIndex;return{xLabel:e?e.getLabelForIndex(i,a):"",yLabel:n?n.getLabelForIndex(i,a):"",index:i,datasetIndex:a,x:t._model.x,y:t._model.y}}function l(t){var e=i.global,n=o.valueOrDefault;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,bodyFontColor:t.bodyFontColor,_bodyFontFamily:n(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:n(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:n(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:n(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:n(t.titleFontStyle,e.defaultFontStyle),titleFontSize:n(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:n(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:n(t.footerFontStyle,e.defaultFontStyle),footerFontSize:n(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function s(t,e){var n=t._chart.ctx,i=2*e.yPadding,a=0,r=e.body,l=r.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);l+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,u=e.footer.length,d=e.titleFontSize,c=e.bodyFontSize,h=e.footerFontSize;i+=s*d,i+=s?(s-1)*e.titleSpacing:0,i+=s?e.titleMarginBottom:0,i+=l*c,i+=l?(l-1)*e.bodySpacing:0,i+=u?e.footerMarginTop:0,i+=u*h,i+=u?(u-1)*e.footerSpacing:0;var f=0,g=function(t){a=Math.max(a,n.measureText(t).width+f)};return n.font=o.fontString(d,e._titleFontStyle,e._titleFontFamily),o.each(e.title,g),n.font=o.fontString(c,e._bodyFontStyle,e._bodyFontFamily),o.each(e.beforeBody.concat(e.afterBody),g),f=e.displayColors?c+2:0,o.each(r,function(t){o.each(t.before,g),o.each(t.lines,g),o.each(t.after,g)}),f=0,n.font=o.fontString(h,e._footerFontStyle,e._footerFontFamily),o.each(e.footer,g),a+=2*e.xPadding,{width:a,height:i}}function u(t,e){var n=t._model,i=t._chart,a=t._chart.chartArea,o="center",r="center";n.y<e.height?r="top":n.y>i.height-e.height&&(r="bottom");var l,s,u,d,c,h=(a.left+a.right)/2,f=(a.top+a.bottom)/2;"center"===r?(l=function(t){return t<=h},s=function(t){return t>h}):(l=function(t){return t<=e.width/2},s=function(t){return t>=i.width-e.width/2}),u=function(t){return t+e.width>i.width},d=function(t){return t-e.width<0},c=function(t){return t<=f?"top":"bottom"},l(n.x)?(o="left",u(n.x)&&(o="center",r=c(n.y))):s(n.x)&&(o="right",d(n.x)&&(o="center",r=c(n.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:o,yAlign:g.yAlign?g.yAlign:r}}function d(t,e,n){var i=t.x,a=t.y,o=t.caretSize,r=t.caretPadding,l=t.cornerRadius,s=n.xAlign,u=n.yAlign,d=o+r,c=l+r;return"right"===s?i-=e.width:"center"===s&&(i-=e.width/2),"top"===u?a+=d:a-="bottom"===u?e.height+d:e.height/2,"center"===u?"left"===s?i+=d:"right"===s&&(i-=d):"left"===s?i-=c:"right"===s&&(i+=c),{x:i,y:a}}t.Tooltip=a.extend({initialize:function(){this._model=l(this._options),this._lastActive=[]},getTitle:function(){var t=this,e=t._options.callbacks,i=e.beforeTitle.apply(t,arguments),a=e.title.apply(t,arguments),o=e.afterTitle.apply(t,arguments),r=[];return r=n(r,i),r=n(r,a),r=n(r,o)},getBeforeBody:function(){var t=this._options.callbacks.beforeBody.apply(this,arguments);return o.isArray(t)?t:void 0!==t?[t]:[]},getBody:function(t,e){var i=this,a=i._options.callbacks,r=[];return o.each(t,function(t){var o={before:[],lines:[],after:[]};n(o.before,a.beforeLabel.call(i,t,e)),n(o.lines,a.label.call(i,t,e)),n(o.after,a.afterLabel.call(i,t,e)),r.push(o)}),r},getAfterBody:function(){var t=this._options.callbacks.afterBody.apply(this,arguments);return o.isArray(t)?t:void 0!==t?[t]:[]},getFooter:function(){var t=this,e=t._options.callbacks,i=e.beforeFooter.apply(t,arguments),a=e.footer.apply(t,arguments),o=e.afterFooter.apply(t,arguments),r=[];return r=n(r,i),r=n(r,a),r=n(r,o)},update:function(e){var n,i,a=this,c=a._options,h=a._model,f=a._model=l(c),g=a._active,p=a._data,v={xAlign:h.xAlign,yAlign:h.yAlign},m={x:h.x,y:h.y},b={width:h.width,height:h.height},x={x:h.caretX,y:h.caretY};if(g.length){f.opacity=1;var y=[],k=[];x=t.Tooltip.positioners[c.position].call(a,g,a._eventPosition);var w=[];for(n=0,i=g.length;n<i;++n)w.push(r(g[n]));c.filter&&(w=w.filter(function(t){return c.filter(t,p)})),c.itemSort&&(w=w.sort(function(t,e){return c.itemSort(t,e,p)})),o.each(w,function(t){y.push(c.callbacks.labelColor.call(a,t,a._chart)),k.push(c.callbacks.labelTextColor.call(a,t,a._chart))}),f.title=a.getTitle(w,p),f.beforeBody=a.getBeforeBody(w,p),f.body=a.getBody(w,p),f.afterBody=a.getAfterBody(w,p),f.footer=a.getFooter(w,p),f.x=Math.round(x.x),f.y=Math.round(x.y),f.caretPadding=c.caretPadding,f.labelColors=y,f.labelTextColors=k,f.dataPoints=w,m=d(f,b=s(this,f),v=u(this,b))}else f.opacity=0;return f.xAlign=v.xAlign,f.yAlign=v.yAlign,f.x=m.x,f.y=m.y,f.width=b.width,f.height=b.height,f.caretX=x.x,f.caretY=x.y,a._model=f,e&&c.custom&&c.custom.call(a,f),a},drawCaret:function(t,e){var n=this._chart.ctx,i=this._view,a=this.getCaretPosition(t,e,i);n.lineTo(a.x1,a.y1),n.lineTo(a.x2,a.y2),n.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,n){var i,a,o,r,l,s,u=n.caretSize,d=n.cornerRadius,c=n.xAlign,h=n.yAlign,f=t.x,g=t.y,p=e.width,v=e.height;if("center"===h)l=g+v/2,"left"===c?(a=(i=f)-u,o=i,r=l+u,s=l-u):(a=(i=f+p)+u,o=i,r=l-u,s=l+u);else if("left"===c?(i=(a=f+d+u)-u,o=a+u):"right"===c?(i=(a=f+p-d-u)-u,o=a+u):(i=(a=f+p/2)-u,o=a+u),"top"===h)l=(r=g)-u,s=r;else{l=(r=g+v)+u,s=r;var m=o;o=i,i=m}return{x1:i,x2:a,x3:o,y1:r,y2:l,y3:s}},drawTitle:function(t,n,i,a){var r=n.title;if(r.length){i.textAlign=n._titleAlign,i.textBaseline="top";var l=n.titleFontSize,s=n.titleSpacing;i.fillStyle=e(n.titleFontColor,a),i.font=o.fontString(l,n._titleFontStyle,n._titleFontFamily);var u,d;for(u=0,d=r.length;u<d;++u)i.fillText(r[u],t.x,t.y),t.y+=l+s,u+1===r.length&&(t.y+=n.titleMarginBottom-s)}},drawBody:function(t,n,i,a){var r=n.bodyFontSize,l=n.bodySpacing,s=n.body;i.textAlign=n._bodyAlign,i.textBaseline="top",i.font=o.fontString(r,n._bodyFontStyle,n._bodyFontFamily);var u=0,d=function(e){i.fillText(e,t.x+u,t.y),t.y+=r+l};i.fillStyle=e(n.bodyFontColor,a),o.each(n.beforeBody,d);var c=n.displayColors;u=c?r+2:0,o.each(s,function(l,s){var u=e(n.labelTextColors[s],a);i.fillStyle=u,o.each(l.before,d),o.each(l.lines,function(o){c&&(i.fillStyle=e(n.legendColorBackground,a),i.fillRect(t.x,t.y,r,r),i.lineWidth=1,i.strokeStyle=e(n.labelColors[s].borderColor,a),i.strokeRect(t.x,t.y,r,r),i.fillStyle=e(n.labelColors[s].backgroundColor,a),i.fillRect(t.x+1,t.y+1,r-2,r-2),i.fillStyle=u),d(o)}),o.each(l.after,d)}),u=0,o.each(n.afterBody,d),t.y-=l},drawFooter:function(t,n,i,a){var r=n.footer;r.length&&(t.y+=n.footerMarginTop,i.textAlign=n._footerAlign,i.textBaseline="top",i.fillStyle=e(n.footerFontColor,a),i.font=o.fontString(n.footerFontSize,n._footerFontStyle,n._footerFontFamily),o.each(r,function(e){i.fillText(e,t.x,t.y),t.y+=n.footerFontSize+n.footerSpacing}))},drawBackground:function(t,n,i,a,o){i.fillStyle=e(n.backgroundColor,o),i.strokeStyle=e(n.borderColor,o),i.lineWidth=n.borderWidth;var r=n.xAlign,l=n.yAlign,s=t.x,u=t.y,d=a.width,c=a.height,h=n.cornerRadius;i.beginPath(),i.moveTo(s+h,u),"top"===l&&this.drawCaret(t,a),i.lineTo(s+d-h,u),i.quadraticCurveTo(s+d,u,s+d,u+h),"center"===l&&"right"===r&&this.drawCaret(t,a),i.lineTo(s+d,u+c-h),i.quadraticCurveTo(s+d,u+c,s+d-h,u+c),"bottom"===l&&this.drawCaret(t,a),i.lineTo(s+h,u+c),i.quadraticCurveTo(s,u+c,s,u+c-h),"center"===l&&"left"===r&&this.drawCaret(t,a),i.lineTo(s,u+h),i.quadraticCurveTo(s,u,s+h,u),i.closePath(),i.fill(),n.borderWidth>0&&i.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var n={width:e.width,height:e.height},i={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,o=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&o&&(this.drawBackground(i,e,t,n,a),i.x+=e.xPadding,i.y+=e.yPadding,this.drawTitle(i,e,t,a),this.drawBody(i,e,t,a),this.drawFooter(i,e,t,a))}},handleEvent:function(t){var e=this,n=e._options,i=!1;if(e._lastActive=e._lastActive||[],"mouseout"===t.type?e._active=[]:e._active=e._chart.getElementsAtEventForMode(t,n.mode,n),!(i=!o.arrayEquals(e._active,e._lastActive)))return!1;if(e._lastActive=e._active,n.enabled||n.custom){e._eventPosition={x:t.x,y:t.y};var a=e._model;e.update(!0),e.pivot(),i|=a.x!==e._model.x||a.y!==e._model.y}return i}}),t.Tooltip.positioners={average:function(t){if(!t.length)return!1;var e,n,i=0,a=0,o=0;for(e=0,n=t.length;e<n;++e){var r=t[e];if(r&&r.hasValue()){var l=r.tooltipPosition();i+=l.x,a+=l.y,++o}}return{x:Math.round(i/o),y:Math.round(a/o)}},nearest:function(t,e){var n,i,a,r=e.x,l=e.y,s=Number.POSITIVE_INFINITY;for(n=0,i=t.length;n<i;++n){var u=t[n];if(u&&u.hasValue()){var d=u.getCenterPoint(),c=o.distanceBetweenPoints(e,d);c<s&&(s=c,a=u)}}if(a){var h=a.tooltipPosition();r=h.x,l=h.y}return{x:r,y:l}}}}},{25:25,26:26,45:45}],36:[function(t,e,n){"use strict";var i=t(25),a=t(26),o=t(45);i._set("global",{elements:{arc:{backgroundColor:i.global.defaultColor,borderColor:"#fff",borderWidth:2}}}),e.exports=a.extend({inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var n=this._view;if(n){for(var i=o.getAngleFromPoint(n,{x:t,y:e}),a=i.angle,r=i.distance,l=n.startAngle,s=n.endAngle;s<l;)s+=2*Math.PI;for(;a>s;)a-=2*Math.PI;for(;a<l;)a+=2*Math.PI;var u=a>=l&&a<=s,d=r>=n.innerRadius&&r<=n.outerRadius;return u&&d}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,n=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,n=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*n,y:t.y+Math.sin(e)*n}},draw:function(){var t=this._chart.ctx,e=this._view,n=e.startAngle,i=e.endAngle;t.beginPath(),t.arc(e.x,e.y,e.outerRadius,n,i),t.arc(e.x,e.y,e.innerRadius,i,n,!0),t.closePath(),t.strokeStyle=e.borderColor,t.lineWidth=e.borderWidth,t.fillStyle=e.backgroundColor,t.fill(),t.lineJoin="bevel",e.borderWidth&&t.stroke()}})},{25:25,26:26,45:45}],37:[function(t,e,n){"use strict";var i=t(25),a=t(26),o=t(45),r=i.global;i._set("global",{elements:{line:{tension:.4,backgroundColor:r.defaultColor,borderWidth:3,borderColor:r.defaultColor,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}}),e.exports=a.extend({draw:function(){var t,e,n,i,a=this,l=a._view,s=a._chart.ctx,u=l.spanGaps,d=a._children.slice(),c=r.elements.line,h=-1;for(a._loop&&d.length&&d.push(d[0]),s.save(),s.lineCap=l.borderCapStyle||c.borderCapStyle,s.setLineDash&&s.setLineDash(l.borderDash||c.borderDash),s.lineDashOffset=l.borderDashOffset||c.borderDashOffset,s.lineJoin=l.borderJoinStyle||c.borderJoinStyle,s.lineWidth=l.borderWidth||c.borderWidth,s.strokeStyle=l.borderColor||r.defaultColor,s.beginPath(),h=-1,t=0;t<d.length;++t)e=d[t],n=o.previousItem(d,t),i=e._view,0===t?i.skip||(s.moveTo(i.x,i.y),h=t):(n=-1===h?n:d[h],i.skip||(h!==t-1&&!u||-1===h?s.moveTo(i.x,i.y):o.canvas.lineTo(s,n._view,e._view),h=t));s.stroke(),s.restore()}})},{25:25,26:26,45:45}],38:[function(t,e,n){"use strict";function i(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hitRadius,2)}var a=t(25),o=t(26),r=t(45),l=a.global.defaultColor;a._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:l,borderColor:l,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}}),e.exports=o.extend({inRange:function(t,e){var n=this._view;return!!n&&Math.pow(t-n.x,2)+Math.pow(e-n.y,2)<Math.pow(n.hitRadius+n.radius,2)},inLabelRange:i,inXRange:i,inYRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.y,2)<Math.pow(e.radius+e.hitRadius,2)},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,n=this._model,i=this._chart.ctx,o=e.pointStyle,s=e.radius,u=e.x,d=e.y,c=r.color,h=0;e.skip||(i.strokeStyle=e.borderColor||l,i.lineWidth=r.valueOrDefault(e.borderWidth,a.global.elements.point.borderWidth),i.fillStyle=e.backgroundColor||l,void 0!==t&&(n.x<t.left||1.01*t.right<n.x||n.y<t.top||1.01*t.bottom<n.y)&&(n.x<t.left?h=(u-n.x)/(t.left-n.x):1.01*t.right<n.x?h=(n.x-u)/(n.x-t.right):n.y<t.top?h=(d-n.y)/(t.top-n.y):1.01*t.bottom<n.y&&(h=(n.y-d)/(n.y-t.bottom)),h=Math.round(100*h)/100,i.strokeStyle=c(i.strokeStyle).alpha(h).rgbString(),i.fillStyle=c(i.fillStyle).alpha(h).rgbString()),r.canvas.drawPoint(i,o,s,u,d))}})},{25:25,26:26,45:45}],39:[function(t,e,n){"use strict";function i(t){return void 0!==t._view.width}function a(t){var e,n,a,o,r=t._view;if(i(t)){var l=r.width/2;e=r.x-l,n=r.x+l,a=Math.min(r.y,r.base),o=Math.max(r.y,r.base)}else{var s=r.height/2;e=Math.min(r.x,r.base),n=Math.max(r.x,r.base),a=r.y-s,o=r.y+s}return{left:e,top:a,right:n,bottom:o}}var o=t(25),r=t(26);o._set("global",{elements:{rectangle:{backgroundColor:o.global.defaultColor,borderColor:o.global.defaultColor,borderSkipped:"bottom",borderWidth:0}}}),e.exports=r.extend({draw:function(){function t(t){return m[(b+t)%4]}var e,n,i,a,o,r,l,s=this._chart.ctx,u=this._view,d=u.borderWidth;if(u.horizontal?(e=u.base,n=u.x,i=u.y-u.height/2,a=u.y+u.height/2,o=n>e?1:-1,r=1,l=u.borderSkipped||"left"):(e=u.x-u.width/2,n=u.x+u.width/2,i=u.y,o=1,r=(a=u.base)>i?1:-1,l=u.borderSkipped||"bottom"),d){var c=Math.min(Math.abs(e-n),Math.abs(i-a)),h=(d=d>c?c:d)/2,f=e+("left"!==l?h*o:0),g=n+("right"!==l?-h*o:0),p=i+("top"!==l?h*r:0),v=a+("bottom"!==l?-h*r:0);f!==g&&(i=p,a=v),p!==v&&(e=f,n=g)}s.beginPath(),s.fillStyle=u.backgroundColor,s.strokeStyle=u.borderColor,s.lineWidth=d;var m=[[e,a],[e,i],[n,i],[n,a]],b=["bottom","left","top","right"].indexOf(l,0);-1===b&&(b=0);var x=t(0);s.moveTo(x[0],x[1]);for(var y=1;y<4;y++)x=t(y),s.lineTo(x[0],x[1]);s.fill(),d&&s.stroke()},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){var n=!1;if(this._view){var i=a(this);n=t>=i.left&&t<=i.right&&e>=i.top&&e<=i.bottom}return n},inLabelRange:function(t,e){var n=this;if(!n._view)return!1;var o=a(n);return i(n)?t>=o.left&&t<=o.right:e>=o.top&&e<=o.bottom},inXRange:function(t){var e=a(this);return t>=e.left&&t<=e.right},inYRange:function(t){var e=a(this);return t>=e.top&&t<=e.bottom},getCenterPoint:function(){var t,e,n=this._view;return i(this)?(t=n.x,e=(n.y+n.base)/2):(t=(n.x+n.base)/2,e=n.y),{x:t,y:e}},getArea:function(){var t=this._view;return t.width*Math.abs(t.y-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}})},{25:25,26:26}],40:[function(t,e,n){"use strict";e.exports={},e.exports.Arc=t(36),e.exports.Line=t(37),e.exports.Point=t(38),e.exports.Rectangle=t(39)},{36:36,37:37,38:38,39:39}],41:[function(t,e,n){"use strict";var i=t(42),n=e.exports={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,n,i,a,o){if(o){var r=Math.min(o,i/2),l=Math.min(o,a/2);t.moveTo(e+r,n),t.lineTo(e+i-r,n),t.quadraticCurveTo(e+i,n,e+i,n+l),t.lineTo(e+i,n+a-l),t.quadraticCurveTo(e+i,n+a,e+i-r,n+a),t.lineTo(e+r,n+a),t.quadraticCurveTo(e,n+a,e,n+a-l),t.lineTo(e,n+l),t.quadraticCurveTo(e,n,e+r,n)}else t.rect(e,n,i,a)},drawPoint:function(t,e,n,i,a){var o,r,l,s,u,d;if(!e||"object"!=typeof e||"[object HTMLImageElement]"!==(o=e.toString())&&"[object HTMLCanvasElement]"!==o){if(!(isNaN(n)||n<=0)){switch(e){default:t.beginPath(),t.arc(i,a,n,0,2*Math.PI),t.closePath(),t.fill();break;case"triangle":t.beginPath(),u=(r=3*n/Math.sqrt(3))*Math.sqrt(3)/2,t.moveTo(i-r/2,a+u/3),t.lineTo(i+r/2,a+u/3),t.lineTo(i,a-2*u/3),t.closePath(),t.fill();break;case"rect":d=1/Math.SQRT2*n,t.beginPath(),t.fillRect(i-d,a-d,2*d,2*d),t.strokeRect(i-d,a-d,2*d,2*d);break;case"rectRounded":var c=n/Math.SQRT2,h=i-c,f=a-c,g=Math.SQRT2*n;t.beginPath(),this.roundedRect(t,h,f,g,g,n/2),t.closePath(),t.fill();break;case"rectRot":d=1/Math.SQRT2*n,t.beginPath(),t.moveTo(i-d,a),t.lineTo(i,a+d),t.lineTo(i+d,a),t.lineTo(i,a-d),t.closePath(),t.fill();break;case"cross":t.beginPath(),t.moveTo(i,a+n),t.lineTo(i,a-n),t.moveTo(i-n,a),t.lineTo(i+n,a),t.closePath();break;case"crossRot":t.beginPath(),l=Math.cos(Math.PI/4)*n,s=Math.sin(Math.PI/4)*n,t.moveTo(i-l,a-s),t.lineTo(i+l,a+s),t.moveTo(i-l,a+s),t.lineTo(i+l,a-s),t.closePath();break;case"star":t.beginPath(),t.moveTo(i,a+n),t.lineTo(i,a-n),t.moveTo(i-n,a),t.lineTo(i+n,a),l=Math.cos(Math.PI/4)*n,s=Math.sin(Math.PI/4)*n,t.moveTo(i-l,a-s),t.lineTo(i+l,a+s),t.moveTo(i-l,a+s),t.lineTo(i+l,a-s),t.closePath();break;case"line":t.beginPath(),t.moveTo(i-n,a),t.lineTo(i+n,a),t.closePath();break;case"dash":t.beginPath(),t.moveTo(i,a),t.lineTo(i+n,a),t.closePath()}t.stroke()}}else t.drawImage(e,i-e.width/2,a-e.height/2,e.width,e.height)},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,n,i){if(n.steppedLine)return"after"===n.steppedLine&&!i||"after"!==n.steppedLine&&i?t.lineTo(e.x,n.y):t.lineTo(n.x,e.y),void t.lineTo(n.x,n.y);n.tension?t.bezierCurveTo(i?e.controlPointPreviousX:e.controlPointNextX,i?e.controlPointPreviousY:e.controlPointNextY,i?n.controlPointNextX:n.controlPointPreviousX,i?n.controlPointNextY:n.controlPointPreviousY,n.x,n.y):t.lineTo(n.x,n.y)}};i.clear=n.clear,i.drawRoundedRectangle=function(t){t.beginPath(),n.roundedRect.apply(n,arguments),t.closePath()}},{42:42}],42:[function(t,e,n){"use strict";var i={noop:function(){},uid:function(){var t=0;return function(){return t++}}(),isNullOrUndef:function(t){return null===t||void 0===t},isArray:Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,n){return i.valueOrDefault(i.isArray(t)?t[e]:t,n)},callback:function(t,e,n){if(t&&"function"==typeof t.call)return t.apply(n,e)},each:function(t,e,n,a){var o,r,l;if(i.isArray(t))if(r=t.length,a)for(o=r-1;o>=0;o--)e.call(n,t[o],o);else for(o=0;o<r;o++)e.call(n,t[o],o);else if(i.isObject(t))for(r=(l=Object.keys(t)).length,o=0;o<r;o++)e.call(n,t[l[o]],l[o])},arrayEquals:function(t,e){var n,a,o,r;if(!t||!e||t.length!==e.length)return!1;for(n=0,a=t.length;n<a;++n)if(o=t[n],r=e[n],o instanceof Array&&r instanceof Array){if(!i.arrayEquals(o,r))return!1}else if(o!==r)return!1;return!0},clone:function(t){if(i.isArray(t))return t.map(i.clone);if(i.isObject(t)){for(var e={},n=Object.keys(t),a=n.length,o=0;o<a;++o)e[n[o]]=i.clone(t[n[o]]);return e}return t},_merger:function(t,e,n,a){var o=e[t],r=n[t];i.isObject(o)&&i.isObject(r)?i.merge(o,r,a):e[t]=i.clone(r)},_mergerIf:function(t,e,n){var a=e[t],o=n[t];i.isObject(a)&&i.isObject(o)?i.mergeIf(a,o):e.hasOwnProperty(t)||(e[t]=i.clone(o))},merge:function(t,e,n){var a,o,r,l,s,u=i.isArray(e)?e:[e],d=u.length;if(!i.isObject(t))return t;for(a=(n=n||{}).merger||i._merger,o=0;o<d;++o)if(e=u[o],i.isObject(e))for(s=0,l=(r=Object.keys(e)).length;s<l;++s)a(r[s],t,e,n);return t},mergeIf:function(t,e){return i.merge(t,e,{merger:i._mergerIf})},extend:function(t){for(var e=1,n=arguments.length;e<n;++e)i.each(arguments[e],function(e,n){t[n]=e});return t},inherits:function(t){var e=this,n=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},a=function(){this.constructor=n};return a.prototype=e.prototype,n.prototype=new a,n.extend=i.inherits,t&&i.extend(n.prototype,t),n.__super__=e.prototype,n}};e.exports=i,i.callCallback=i.callback,i.indexOf=function(t,e,n){return Array.prototype.indexOf.call(t,e,n)},i.getValueOrDefault=i.valueOrDefault,i.getValueAtIndexOrDefault=i.valueAtIndexOrDefault},{}],43:[function(t,e,n){"use strict";var i=t(42),a={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===t?1:(n||(n=.3),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),-i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n))},easeOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:1===t?1:(n||(n=.3),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),i*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1)},easeInOutElastic:function(t){var e=1.70158,n=0,i=1;return 0===t?0:2==(t/=.5)?1:(n||(n=.45),i<1?(i=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/i),t<1?i*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*-.5:i*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-a.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*a.easeInBounce(2*t):.5*a.easeOutBounce(2*t-1)+.5}};e.exports={effects:a},i.easingEffects=a},{42:42}],44:[function(t,e,n){"use strict";var i=t(42);e.exports={toLineHeight:function(t,e){var n=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!n||"normal"===n[1])return 1.2*e;switch(t=+n[2],n[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,n,a,o;return i.isObject(t)?(e=+t.top||0,n=+t.right||0,a=+t.bottom||0,o=+t.left||0):e=n=a=o=+t||0,{top:e,right:n,bottom:a,left:o,height:e+a,width:o+n}},resolve:function(t,e,n){var a,o,r;for(a=0,o=t.length;a<o;++a)if(void 0!==(r=t[a])&&(void 0!==e&&"function"==typeof r&&(r=r(e)),void 0!==n&&i.isArray(r)&&(r=r[n]),void 0!==r))return r}}},{42:42}],45:[function(t,e,n){"use strict";e.exports=t(42),e.exports.easing=t(43),e.exports.canvas=t(41),e.exports.options=t(44)},{41:41,42:42,43:43,44:44}],46:[function(t,e,n){e.exports={acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}}},{}],47:[function(t,e,n){"use strict";function i(t,e){var n=v.getStyle(t,e),i=n&&n.match(/^(\d+)(\.\d+)?px$/);return i?Number(i[1]):void 0}function a(t,e){var n=t.style,a=t.getAttribute("height"),o=t.getAttribute("width");if(t[m]={initial:{height:a,width:o,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||"block",null===o||""===o){var r=i(t,"width");void 0!==r&&(t.width=r)}if(null===a||""===a)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var l=i(t,"height");void 0!==r&&(t.height=l)}return t}function o(t,e,n){t.addEventListener(e,n,M)}function r(t,e,n){t.removeEventListener(e,n,M)}function l(t,e,n,i,a){return{type:t,chart:e,native:a||null,x:void 0!==n?n:null,y:void 0!==i?i:null}}function s(t,e){var n=w[t.type]||t.type,i=v.getRelativePosition(t,e);return l(n,e,i.x,i.y,t)}function u(t,e){var n=!1,i=[];return function(){i=Array.prototype.slice.call(arguments),e=e||this,n||(n=!0,v.requestAnimFrame.call(window,function(){n=!1,t.apply(e,i)}))}}function d(t){var e=document.createElement("div"),n=b+"size-monitor",i="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;";e.style.cssText=i,e.className=n,e.innerHTML='<div class="'+n+'-expand" style="'+i+'"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="'+n+'-shrink" style="'+i+'"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div>';var a=e.childNodes[0],r=e.childNodes[1];e._reset=function(){a.scrollLeft=1e6,a.scrollTop=1e6,r.scrollLeft=1e6,r.scrollTop=1e6};var l=function(){e._reset(),t()};return o(a,"scroll",l.bind(a,"expand")),o(r,"scroll",l.bind(r,"shrink")),e}function c(t,e){var n=t[m]||(t[m]={}),i=n.renderProxy=function(t){t.animationName===y&&e()};v.each(k,function(e){o(t,e,i)}),n.reflow=!!t.offsetParent,t.classList.add(x)}function h(t){var e=t[m]||{},n=e.renderProxy;n&&(v.each(k,function(e){r(t,e,n)}),delete e.renderProxy),t.classList.remove(x)}function f(t,e,n){var i=t[m]||(t[m]={}),a=i.resizer=d(u(function(){if(i.resizer)return e(l("resize",n))}));c(t,function(){if(i.resizer){var e=t.parentNode;e&&e!==a.parentNode&&e.insertBefore(a,e.firstChild),a._reset()}})}function g(t){var e=t[m]||{},n=e.resizer;delete e.resizer,h(t),n&&n.parentNode&&n.parentNode.removeChild(n)}function p(t,e){var n=t._style||document.createElement("style");t._style||(t._style=n,e="/* Chart.js */\n"+e,n.setAttribute("type","text/css"),document.getElementsByTagName("head")[0].appendChild(n)),n.appendChild(document.createTextNode(e))}var v=t(45),m="$chartjs",b="chartjs-",x=b+"render-monitor",y=b+"render-animation",k=["animationstart","webkitAnimationStart"],w={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"},M=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};e.exports={_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,initialize:function(){var t="from{opacity:0.99}to{opacity:1}";p(this,"@-webkit-keyframes "+y+"{"+t+"}@keyframes "+y+"{"+t+"}."+x+"{-webkit-animation:"+y+" 0.001s;animation:"+y+" 0.001s;}")},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var n=t&&t.getContext&&t.getContext("2d");return n&&n.canvas===t?(a(t,e),n):null},releaseContext:function(t){var e=t.canvas;if(e[m]){var n=e[m].initial;["height","width"].forEach(function(t){var i=n[t];v.isNullOrUndef(i)?e.removeAttribute(t):e.setAttribute(t,i)}),v.each(n.style||{},function(t,n){e.style[n]=t}),e.width=e.width,delete e[m]}},addEventListener:function(t,e,n){var i=t.canvas;if("resize"!==e){var a=n[m]||(n[m]={});o(i,e,(a.proxies||(a.proxies={}))[t.id+"_"+e]=function(e){n(s(e,t))})}else f(i,n,t)},removeEventListener:function(t,e,n){var i=t.canvas;if("resize"!==e){var a=((n[m]||{}).proxies||{})[t.id+"_"+e];a&&r(i,e,a)}else g(i)}},v.addEvent=o,v.removeEvent=r},{45:45}],48:[function(t,e,n){"use strict";var i=t(45),a=t(46),o=t(47),r=o._enabled?o:a;e.exports=i.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},r)},{45:45,46:46,47:47}],49:[function(t,e,n){"use strict";var i=t(25),a=t(40),o=t(45);i._set("global",{plugins:{filler:{propagate:!0}}}),e.exports=function(){function t(t,e,n){var i,a=t._model||{},o=a.fill;if(void 0===o&&(o=!!a.backgroundColor),!1===o||null===o)return!1;if(!0===o)return"origin";if(i=parseFloat(o,10),isFinite(i)&&Math.floor(i)===i)return"-"!==o[0]&&"+"!==o[0]||(i=e+i),!(i===e||i<0||i>=n)&&i;switch(o){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return o;default:return!1}}function e(t){var e,n=t.el._model||{},i=t.el._scale||{},a=t.fill,o=null;if(isFinite(a))return null;if("start"===a?o=void 0===n.scaleBottom?i.bottom:n.scaleBottom:"end"===a?o=void 0===n.scaleTop?i.top:n.scaleTop:void 0!==n.scaleZero?o=n.scaleZero:i.getBasePosition?o=i.getBasePosition():i.getBasePixel&&(o=i.getBasePixel()),void 0!==o&&null!==o){if(void 0!==o.x&&void 0!==o.y)return o;if("number"==typeof o&&isFinite(o))return e=i.isHorizontal(),{x:e?o:null,y:e?null:o}}return null}function n(t,e,n){var i,a=t[e].fill,o=[e];if(!n)return a;for(;!1!==a&&-1===o.indexOf(a);){if(!isFinite(a))return a;if(!(i=t[a]))return!1;if(i.visible)return a;o.push(a),a=i.fill}return!1}function r(t){var e=t.fill,n="dataset";return!1===e?null:(isFinite(e)||(n="boundary"),d[n](t))}function l(t){return t&&!t.skip}function s(t,e,n,i,a){var r;if(i&&a){for(t.moveTo(e[0].x,e[0].y),r=1;r<i;++r)o.canvas.lineTo(t,e[r-1],e[r]);for(t.lineTo(n[a-1].x,n[a-1].y),r=a-1;r>0;--r)o.canvas.lineTo(t,n[r],n[r-1],!0)}}function u(t,e,n,i,a,o){var r,u,d,c,h,f,g,p=e.length,v=i.spanGaps,m=[],b=[],x=0,y=0;for(t.beginPath(),r=0,u=p+!!o;r<u;++r)h=n(c=e[d=r%p]._view,d,i),f=l(c),g=l(h),f&&g?(x=m.push(c),y=b.push(h)):x&&y&&(v?(f&&m.push(c),g&&b.push(h)):(s(t,m,b,x,y),x=y=0,m=[],b=[]));s(t,m,b,x,y),t.closePath(),t.fillStyle=a,t.fill()}var d={dataset:function(t){var e=t.fill,n=t.chart,i=n.getDatasetMeta(e),a=i&&n.isDatasetVisible(e)&&i.dataset._children||[],o=a.length||0;return o?function(t,e){return e<o&&a[e]._view||null}:null},boundary:function(t){var e=t.boundary,n=e?e.x:null,i=e?e.y:null;return function(t){return{x:null===n?t.x:n,y:null===i?t.y:i}}}};return{id:"filler",afterDatasetsUpdate:function(i,o){var l,s,u,d,c=(i.data.datasets||[]).length,h=o.propagate,f=[];for(s=0;s<c;++s)d=null,(u=(l=i.getDatasetMeta(s)).dataset)&&u._model&&u instanceof a.Line&&(d={visible:i.isDatasetVisible(s),fill:t(u,s,c),chart:i,el:u}),l.$filler=d,f.push(d);for(s=0;s<c;++s)(d=f[s])&&(d.fill=n(f,s,h),d.boundary=e(d),d.mapper=r(d))},beforeDatasetDraw:function(t,e){var n=e.meta.$filler;if(n){var a=t.ctx,r=n.el,l=r._view,s=r._children||[],d=n.mapper,c=l.backgroundColor||i.global.defaultColor;d&&c&&s.length&&(o.canvas.clipArea(a,t.chartArea),u(a,s,d,l,c,r._loop),o.canvas.unclipArea(a))}}}}},{25:25,40:40,45:45}],50:[function(t,e,n){"use strict";var i=t(25),a=t(26),o=t(45);i._set("global",{legend:{display:!0,position:"top",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var n=e.datasetIndex,i=this.chart,a=i.getDatasetMeta(n);a.hidden=null===a.hidden?!i.data.datasets[n].hidden:null,i.update()},onHover:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data;return o.isArray(e.datasets)?e.datasets.map(function(e,n){return{text:e.label,fillStyle:o.isArray(e.backgroundColor)?e.backgroundColor[0]:e.backgroundColor,hidden:!t.isDatasetVisible(n),lineCap:e.borderCapStyle,lineDash:e.borderDash,lineDashOffset:e.borderDashOffset,lineJoin:e.borderJoinStyle,lineWidth:e.borderWidth,strokeStyle:e.borderColor,pointStyle:e.pointStyle,datasetIndex:n}},this):[]}}},legendCallback:function(t){var e=[];e.push('<ul class="'+t.id+'-legend">');for(var n=0;n<t.data.datasets.length;n++)e.push('<li><span style="background-color:'+t.data.datasets[n].backgroundColor+'"></span>'),t.data.datasets[n].label&&e.push(t.data.datasets[n].label),e.push("</li>");return e.push("</ul>"),e.join("")}}),e.exports=function(t){function e(t,e){return t.usePointStyle?e*Math.SQRT2:t.boxWidth}function n(e,n){var i=new t.Legend({ctx:e.ctx,options:n,chart:e});r.configure(e,i,n),r.addBox(e,i),e.legend=i}var r=t.layoutService,l=o.noop;return t.Legend=a.extend({initialize:function(t){o.extend(this,t),this.legendHitBoxes=[],this.doughnutMode=!1},beforeUpdate:l,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:l,beforeSetDimensions:l,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:l,beforeBuildLabels:l,buildLabels:function(){var t=this,e=t.options.labels||{},n=o.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(n=n.filter(function(n){return e.filter(n,t.chart.data)})),t.options.reverse&&n.reverse(),t.legendItems=n},afterBuildLabels:l,beforeFit:l,fit:function(){var t=this,n=t.options,a=n.labels,r=n.display,l=t.ctx,s=i.global,u=o.valueOrDefault,d=u(a.fontSize,s.defaultFontSize),c=u(a.fontStyle,s.defaultFontStyle),h=u(a.fontFamily,s.defaultFontFamily),f=o.fontString(d,c,h),g=t.legendHitBoxes=[],p=t.minSize,v=t.isHorizontal();if(v?(p.width=t.maxWidth,p.height=r?10:0):(p.width=r?10:0,p.height=t.maxHeight),r)if(l.font=f,v){var m=t.lineWidths=[0],b=t.legendItems.length?d+a.padding:0;l.textAlign="left",l.textBaseline="top",o.each(t.legendItems,function(n,i){var o=e(a,d)+d/2+l.measureText(n.text).width;m[m.length-1]+o+a.padding>=t.width&&(b+=d+a.padding,m[m.length]=t.left),g[i]={left:0,top:0,width:o,height:d},m[m.length-1]+=o+a.padding}),p.height+=b}else{var x=a.padding,y=t.columnWidths=[],k=a.padding,w=0,M=0,S=d+x;o.each(t.legendItems,function(t,n){var i=e(a,d)+d/2+l.measureText(t.text).width;M+S>p.height&&(k+=w+a.padding,y.push(w),w=0,M=0),w=Math.max(w,i),M+=S,g[n]={left:0,top:0,width:i,height:d}}),k+=w,y.push(w),p.width+=k}t.width=p.width,t.height=p.height},afterFit:l,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,n=t.options,a=n.labels,r=i.global,l=r.elements.line,s=t.width,u=t.lineWidths;if(n.display){var d,c=t.ctx,h=o.valueOrDefault,f=h(a.fontColor,r.defaultFontColor),g=h(a.fontSize,r.defaultFontSize),p=h(a.fontStyle,r.defaultFontStyle),v=h(a.fontFamily,r.defaultFontFamily),m=o.fontString(g,p,v);c.textAlign="left",c.textBaseline="middle",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=m;var b=e(a,g),x=t.legendHitBoxes,y=function(t,e,i){if(!(isNaN(b)||b<=0)){c.save(),c.fillStyle=h(i.fillStyle,r.defaultColor),c.lineCap=h(i.lineCap,l.borderCapStyle),c.lineDashOffset=h(i.lineDashOffset,l.borderDashOffset),c.lineJoin=h(i.lineJoin,l.borderJoinStyle),c.lineWidth=h(i.lineWidth,l.borderWidth),c.strokeStyle=h(i.strokeStyle,r.defaultColor);var a=0===h(i.lineWidth,l.borderWidth);if(c.setLineDash&&c.setLineDash(h(i.lineDash,l.borderDash)),n.labels&&n.labels.usePointStyle){var s=g*Math.SQRT2/2,u=s/Math.SQRT2,d=t+u,f=e+u;o.canvas.drawPoint(c,i.pointStyle,s,d,f)}else a||c.strokeRect(t,e,b,g),c.fillRect(t,e,b,g);c.restore()}},k=function(t,e,n,i){var a=g/2,o=b+a+t,r=e+a;c.fillText(n.text,o,r),n.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(o,r),c.lineTo(o+i,r),c.stroke())},w=t.isHorizontal();d=w?{x:t.left+(s-u[0])/2,y:t.top+a.padding,line:0}:{x:t.left+a.padding,y:t.top+a.padding,line:0};var M=g+a.padding;o.each(t.legendItems,function(e,n){var i=c.measureText(e.text).width,o=b+g/2+i,r=d.x,l=d.y;w?r+o>=s&&(l=d.y+=M,d.line++,r=d.x=t.left+(s-u[d.line])/2):l+M>t.bottom&&(r=d.x=r+t.columnWidths[d.line]+a.padding,l=d.y=t.top+a.padding,d.line++),y(r,l,e),x[n].left=r,x[n].top=l,k(r,l,e,i),w?d.x+=o+a.padding:d.y+=M})}},handleEvent:function(t){var e=this,n=e.options,i="mouseup"===t.type?"click":t.type,a=!1;if("mousemove"===i){if(!n.onHover)return}else{if("click"!==i)return;if(!n.onClick)return}var o=t.x,r=t.y;if(o>=e.left&&o<=e.right&&r>=e.top&&r<=e.bottom)for(var l=e.legendHitBoxes,s=0;s<l.length;++s){var u=l[s];if(o>=u.left&&o<=u.left+u.width&&r>=u.top&&r<=u.top+u.height){if("click"===i){n.onClick.call(e,t.native,e.legendItems[s]),a=!0;break}if("mousemove"===i){n.onHover.call(e,t.native,e.legendItems[s]),a=!0;break}}}return a}}),{id:"legend",beforeInit:function(t){var e=t.options.legend;e&&n(t,e)},beforeUpdate:function(t){var e=t.options.legend,a=t.legend;e?(o.mergeIf(e,i.global.legend),a?(r.configure(t,a,e),a.options=e):n(t,e)):a&&(r.removeBox(t,a),delete t.legend)},afterEvent:function(t,e){var n=t.legend;n&&n.handleEvent(e)}}}},{25:25,26:26,45:45}],51:[function(t,e,n){"use strict";var i=t(25),a=t(26),o=t(45);i._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,lineHeight:1.2,padding:10,position:"top",text:"",weight:2e3}}),e.exports=function(t){function e(e,i){var a=new t.Title({ctx:e.ctx,options:i,chart:e});n.configure(e,a,i),n.addBox(e,a),e.titleBlock=a}var n=t.layoutService,r=o.noop;return t.Title=a.extend({initialize:function(t){var e=this;o.extend(e,t),e.legendHitBoxes=[]},beforeUpdate:r,update:function(t,e,n){var i=this;return i.beforeUpdate(),i.maxWidth=t,i.maxHeight=e,i.margins=n,i.beforeSetDimensions(),i.setDimensions(),i.afterSetDimensions(),i.beforeBuildLabels(),i.buildLabels(),i.afterBuildLabels(),i.beforeFit(),i.fit(),i.afterFit(),i.afterUpdate(),i.minSize},afterUpdate:r,beforeSetDimensions:r,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:r,beforeBuildLabels:r,buildLabels:r,afterBuildLabels:r,beforeFit:r,fit:function(){var t=this,e=o.valueOrDefault,n=t.options,a=n.display,r=e(n.fontSize,i.global.defaultFontSize),l=t.minSize,s=o.isArray(n.text)?n.text.length:1,u=o.options.toLineHeight(n.lineHeight,r),d=a?s*u+2*n.padding:0;t.isHorizontal()?(l.width=t.maxWidth,l.height=d):(l.width=d,l.height=t.maxHeight),t.width=l.width,t.height=l.height},afterFit:r,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,n=o.valueOrDefault,a=t.options,r=i.global;if(a.display){var l,s,u,d=n(a.fontSize,r.defaultFontSize),c=n(a.fontStyle,r.defaultFontStyle),h=n(a.fontFamily,r.defaultFontFamily),f=o.fontString(d,c,h),g=o.options.toLineHeight(a.lineHeight,d),p=g/2+a.padding,v=0,m=t.top,b=t.left,x=t.bottom,y=t.right;e.fillStyle=n(a.fontColor,r.defaultFontColor),e.font=f,t.isHorizontal()?(s=b+(y-b)/2,u=m+p,l=y-b):(s="left"===a.position?b+p:y-p,u=m+(x-m)/2,l=x-m,v=Math.PI*("left"===a.position?-.5:.5)),e.save(),e.translate(s,u),e.rotate(v),e.textAlign="center",e.textBaseline="middle";var k=a.text;if(o.isArray(k))for(var w=0,M=0;M<k.length;++M)e.fillText(k[M],0,w,l),w+=g;else e.fillText(k,0,0,l);e.restore()}}}),{id:"title",beforeInit:function(t){var n=t.options.title;n&&e(t,n)},beforeUpdate:function(a){var r=a.options.title,l=a.titleBlock;r?(o.mergeIf(r,i.global.title),l?(n.configure(a,l,r),l.options=r):e(a,r)):l&&(t.layoutService.removeBox(a,l),delete a.titleBlock)}}}},{25:25,26:26,45:45}],52:[function(t,e,n){"use strict";e.exports=function(t){var e=t.Scale.extend({getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},determineDataLimits:function(){var t=this,e=t.getLabels();t.minIndex=0,t.maxIndex=e.length-1;var n;void 0!==t.options.ticks.min&&(n=e.indexOf(t.options.ticks.min),t.minIndex=-1!==n?n:t.minIndex),void 0!==t.options.ticks.max&&(n=e.indexOf(t.options.ticks.max),t.maxIndex=-1!==n?n:t.maxIndex),t.min=e[t.minIndex],t.max=e[t.maxIndex]},buildTicks:function(){var t=this,e=t.getLabels();t.ticks=0===t.minIndex&&t.maxIndex===e.length-1?e:e.slice(t.minIndex,t.maxIndex+1)},getLabelForIndex:function(t,e){var n=this,i=n.chart.data,a=n.isHorizontal();return i.yLabels&&!a?n.getRightValue(i.datasets[e].data[t]):n.ticks[t-n.minIndex]},getPixelForValue:function(t,e){var n,i=this,a=i.options.offset,o=Math.max(i.maxIndex+1-i.minIndex-(a?0:1),1);if(void 0!==t&&null!==t&&(n=i.isHorizontal()?t.x:t.y),void 0!==n||void 0!==t&&isNaN(e)){var r=i.getLabels();t=n||t;var l=r.indexOf(t);e=-1!==l?l:e}if(i.isHorizontal()){var s=i.width/o,u=s*(e-i.minIndex);return a&&(u+=s/2),i.left+Math.round(u)}var d=i.height/o,c=d*(e-i.minIndex);return a&&(c+=d/2),i.top+Math.round(c)},getPixelForTick:function(t){return this.getPixelForValue(this.ticks[t],t+this.minIndex,null)},getValueForPixel:function(t){var e=this,n=e.options.offset,i=Math.max(e._ticks.length-(n?0:1),1),a=e.isHorizontal(),o=(a?e.width:e.height)/i;return t-=a?e.left:e.top,n&&(t-=o/2),(t<=0?0:Math.round(t/o))+e.minIndex},getBasePixel:function(){return this.bottom}});t.scaleService.registerScaleType("category",e,{position:"bottom"})}},{}],53:[function(t,e,n){"use strict";var i=t(25),a=t(45),o=t(34);e.exports=function(t){var e={position:"left",ticks:{callback:o.formatters.linear}},n=t.LinearScaleBase.extend({determineDataLimits:function(){function t(t){return r?t.xAxisID===e.id:t.yAxisID===e.id}var e=this,n=e.options,i=e.chart,o=i.data.datasets,r=e.isHorizontal();e.min=null,e.max=null;var l=n.stacked;if(void 0===l&&a.each(o,function(e,n){if(!l){var a=i.getDatasetMeta(n);i.isDatasetVisible(n)&&t(a)&&void 0!==a.stack&&(l=!0)}}),n.stacked||l){var s={};a.each(o,function(o,r){var l=i.getDatasetMeta(r),u=[l.type,void 0===n.stacked&&void 0===l.stack?r:"",l.stack].join(".");void 0===s[u]&&(s[u]={positiveValues:[],negativeValues:[]});var d=s[u].positiveValues,c=s[u].negativeValues;i.isDatasetVisible(r)&&t(l)&&a.each(o.data,function(t,i){var a=+e.getRightValue(t);isNaN(a)||l.data[i].hidden||(d[i]=d[i]||0,c[i]=c[i]||0,n.relativePoints?d[i]=100:a<0?c[i]+=a:d[i]+=a)})}),a.each(s,function(t){var n=t.positiveValues.concat(t.negativeValues),i=a.min(n),o=a.max(n);e.min=null===e.min?i:Math.min(e.min,i),e.max=null===e.max?o:Math.max(e.max,o)})}else a.each(o,function(n,o){var r=i.getDatasetMeta(o);i.isDatasetVisible(o)&&t(r)&&a.each(n.data,function(t,n){var i=+e.getRightValue(t);isNaN(i)||r.data[n].hidden||(null===e.min?e.min=i:i<e.min&&(e.min=i),null===e.max?e.max=i:i>e.max&&(e.max=i))})});e.min=isFinite(e.min)&&!isNaN(e.min)?e.min:0,e.max=isFinite(e.max)&&!isNaN(e.max)?e.max:1,this.handleTickRangeOptions()},getTickLimit:function(){var t,e=this,n=e.options.ticks;if(e.isHorizontal())t=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(e.width/50));else{var o=a.valueOrDefault(n.fontSize,i.global.defaultFontSize);t=Math.min(n.maxTicksLimit?n.maxTicksLimit:11,Math.ceil(e.height/(2*o)))}return t},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){var e,n=this,i=n.start,a=+n.getRightValue(t),o=n.end-i;return n.isHorizontal()?(e=n.left+n.width/o*(a-i),Math.round(e)):(e=n.bottom-n.height/o*(a-i),Math.round(e))},getValueForPixel:function(t){var e=this,n=e.isHorizontal(),i=n?e.width:e.height,a=(n?t-e.left:e.bottom-t)/i;return e.start+(e.end-e.start)*a},getPixelForTick:function(t){return this.getPixelForValue(this.ticksAsNumbers[t])}});t.scaleService.registerScaleType("linear",n,e)}},{25:25,34:34,45:45}],54:[function(t,e,n){"use strict";var i=t(45),a=t(34);e.exports=function(t){var e=i.noop;t.LinearScaleBase=t.Scale.extend({getRightValue:function(e){return"string"==typeof e?+e:t.Scale.prototype.getRightValue.call(this,e)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var n=i.sign(t.min),a=i.sign(t.max);n<0&&a<0?t.max=0:n>0&&a>0&&(t.min=0)}var o=void 0!==e.min||void 0!==e.suggestedMin,r=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),o!==r&&t.min>=t.max&&(o?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:e,handleDirectionalChanges:e,buildTicks:function(){var t=this,e=t.options.ticks,n=t.getTickLimit(),o={maxTicks:n=Math.max(2,n),min:e.min,max:e.max,stepSize:i.valueOrDefault(e.fixedStepSize,e.stepSize)},r=t.ticks=a.generators.linear(o,t);t.handleDirectionalChanges(),t.max=i.max(r),t.min=i.min(r),e.reverse?(r.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var e=this;e.ticksAsNumbers=e.ticks.slice(),e.zeroLineIndex=e.ticks.indexOf(0),t.Scale.prototype.convertTicksToLabels.call(e)}})}},{34:34,45:45}],55:[function(t,e,n){"use strict";var i=t(45),a=t(34);e.exports=function(t){var e={position:"left",ticks:{callback:a.formatters.logarithmic}},n=t.Scale.extend({determineDataLimits:function(){function t(t){return s?t.xAxisID===e.id:t.yAxisID===e.id}var e=this,n=e.options,a=n.ticks,o=e.chart,r=o.data.datasets,l=i.valueOrDefault,s=e.isHorizontal();e.min=null,e.max=null,e.minNotZero=null;var u=n.stacked;if(void 0===u&&i.each(r,function(e,n){if(!u){var i=o.getDatasetMeta(n);o.isDatasetVisible(n)&&t(i)&&void 0!==i.stack&&(u=!0)}}),n.stacked||u){var d={};i.each(r,function(a,r){var l=o.getDatasetMeta(r),s=[l.type,void 0===n.stacked&&void 0===l.stack?r:"",l.stack].join(".");o.isDatasetVisible(r)&&t(l)&&(void 0===d[s]&&(d[s]=[]),i.each(a.data,function(t,i){var a=d[s],o=+e.getRightValue(t);isNaN(o)||l.data[i].hidden||(a[i]=a[i]||0,n.relativePoints?a[i]=100:a[i]+=o)}))}),i.each(d,function(t){var n=i.min(t),a=i.max(t);e.min=null===e.min?n:Math.min(e.min,n),e.max=null===e.max?a:Math.max(e.max,a)})}else i.each(r,function(n,a){var r=o.getDatasetMeta(a);o.isDatasetVisible(a)&&t(r)&&i.each(n.data,function(t,n){var i=+e.getRightValue(t);isNaN(i)||r.data[n].hidden||(null===e.min?e.min=i:i<e.min&&(e.min=i),null===e.max?e.max=i:i>e.max&&(e.max=i),0!==i&&(null===e.minNotZero||i<e.minNotZero)&&(e.minNotZero=i))})});e.min=l(a.min,e.min),e.max=l(a.max,e.max),e.min===e.max&&(0!==e.min&&null!==e.min?(e.min=Math.pow(10,Math.floor(i.log10(e.min))-1),e.max=Math.pow(10,Math.floor(i.log10(e.max))+1)):(e.min=1,e.max=10))},buildTicks:function(){var t=this,e=t.options.ticks,n={min:e.min,max:e.max},o=t.ticks=a.generators.logarithmic(n,t);t.isHorizontal()||o.reverse(),t.max=i.max(o),t.min=i.min(o),e.reverse?(o.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),t.Scale.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){return this.getPixelForValue(this.tickValues[t])},getPixelForValue:function(t){var e,n,a,o=this,r=o.start,l=+o.getRightValue(t),s=o.options.ticks;return o.isHorizontal()?(a=i.log10(o.end)-i.log10(r),0===l?n=o.left:(e=o.width,n=o.left+e/a*(i.log10(l)-i.log10(r)))):(e=o.height,0!==r||s.reverse?0===o.end&&s.reverse?(a=i.log10(o.start)-i.log10(o.minNotZero),n=l===o.end?o.top:l===o.minNotZero?o.top+.02*e:o.top+.02*e+.98*e/a*(i.log10(l)-i.log10(o.minNotZero))):0===l?n=s.reverse?o.top:o.bottom:(a=i.log10(o.end)-i.log10(r),e=o.height,n=o.bottom-e/a*(i.log10(l)-i.log10(r))):(a=i.log10(o.end)-i.log10(o.minNotZero),n=l===r?o.bottom:l===o.minNotZero?o.bottom-.02*e:o.bottom-.02*e-.98*e/a*(i.log10(l)-i.log10(o.minNotZero)))),n},getValueForPixel:function(t){var e,n,a=this,o=i.log10(a.end)-i.log10(a.start);return a.isHorizontal()?(n=a.width,e=a.start*Math.pow(10,(t-a.left)*o/n)):(n=a.height,e=Math.pow(10,(a.bottom-t)*o/n)/a.start),e}});t.scaleService.registerScaleType("logarithmic",n,e)}},{34:34,45:45}],56:[function(t,e,n){"use strict";var i=t(25),a=t(45),o=t(34);e.exports=function(t){function e(t){var e=t.options;return e.angleLines.display||e.pointLabels.display?t.chart.data.labels.length:0}function n(t){var e=t.options.pointLabels,n=a.valueOrDefault(e.fontSize,v.defaultFontSize),i=a.valueOrDefault(e.fontStyle,v.defaultFontStyle),o=a.valueOrDefault(e.fontFamily,v.defaultFontFamily);return{size:n,style:i,family:o,font:a.fontString(n,i,o)}}function r(t,e,n){return a.isArray(n)?{w:a.longestText(t,t.font,n),h:n.length*e+1.5*(n.length-1)*e}:{w:t.measureText(n).width,h:e}}function l(t,e,n,i,a){return t===i||t===a?{start:e-n/2,end:e+n/2}:t<i||t>a?{start:e-n-5,end:e}:{start:e,end:e+n+5}}function s(t){var i,o,s,u=n(t),d=Math.min(t.height/2,t.width/2),c={r:t.width,l:0,t:t.height,b:0},h={};t.ctx.font=u.font,t._pointLabelSizes=[];var f=e(t);for(i=0;i<f;i++){s=t.getPointPosition(i,d),o=r(t.ctx,u.size,t.pointLabels[i]||""),t._pointLabelSizes[i]=o;var g=t.getIndexAngle(i),p=a.toDegrees(g)%360,v=l(p,s.x,o.w,0,180),m=l(p,s.y,o.h,90,270);v.start<c.l&&(c.l=v.start,h.l=g),v.end>c.r&&(c.r=v.end,h.r=g),m.start<c.t&&(c.t=m.start,h.t=g),m.end>c.b&&(c.b=m.end,h.b=g)}t.setReductions(d,c,h)}function u(t){var e=Math.min(t.height/2,t.width/2);t.drawingArea=Math.round(e),t.setCenterPoint(0,0,0,0)}function d(t){return 0===t||180===t?"center":t<180?"left":"right"}function c(t,e,n,i){if(a.isArray(e))for(var o=n.y,r=1.5*i,l=0;l<e.length;++l)t.fillText(e[l],n.x,o),o+=r;else t.fillText(e,n.x,n.y)}function h(t,e,n){90===t||270===t?n.y-=e.h/2:(t>270||t<90)&&(n.y-=e.h)}function f(t){var i=t.ctx,o=a.valueOrDefault,r=t.options,l=r.angleLines,s=r.pointLabels;i.lineWidth=l.lineWidth,i.strokeStyle=l.color;var u=t.getDistanceFromCenterForValue(r.ticks.reverse?t.min:t.max),f=n(t);i.textBaseline="top";for(var g=e(t)-1;g>=0;g--){if(l.display){var p=t.getPointPosition(g,u);i.beginPath(),i.moveTo(t.xCenter,t.yCenter),i.lineTo(p.x,p.y),i.stroke(),i.closePath()}if(s.display){var m=t.getPointPosition(g,u+5),b=o(s.fontColor,v.defaultFontColor);i.font=f.font,i.fillStyle=b;var x=t.getIndexAngle(g),y=a.toDegrees(x);i.textAlign=d(y),h(y,t._pointLabelSizes[g],m),c(i,t.pointLabels[g]||"",m,f.size)}}}function g(t,n,i,o){var r=t.ctx;if(r.strokeStyle=a.valueAtIndexOrDefault(n.color,o-1),r.lineWidth=a.valueAtIndexOrDefault(n.lineWidth,o-1),t.options.gridLines.circular)r.beginPath(),r.arc(t.xCenter,t.yCenter,i,0,2*Math.PI),r.closePath(),r.stroke();else{var l=e(t);if(0===l)return;r.beginPath();var s=t.getPointPosition(0,i);r.moveTo(s.x,s.y);for(var u=1;u<l;u++)s=t.getPointPosition(u,i),r.lineTo(s.x,s.y);r.closePath(),r.stroke()}}function p(t){return a.isNumber(t)?t:0}var v=i.global,m={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0, 0, 0, 0.1)",lineWidth:1},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:o.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}},b=t.LinearScaleBase.extend({setDimensions:function(){var t=this,e=t.options,n=e.ticks;t.width=t.maxWidth,t.height=t.maxHeight,t.xCenter=Math.round(t.width/2),t.yCenter=Math.round(t.height/2);var i=a.min([t.height,t.width]),o=a.valueOrDefault(n.fontSize,v.defaultFontSize);t.drawingArea=e.display?i/2-(o/2+n.backdropPaddingY):i/2},determineDataLimits:function(){var t=this,e=t.chart,n=Number.POSITIVE_INFINITY,i=Number.NEGATIVE_INFINITY;a.each(e.data.datasets,function(o,r){if(e.isDatasetVisible(r)){var l=e.getDatasetMeta(r);a.each(o.data,function(e,a){var o=+t.getRightValue(e);isNaN(o)||l.data[a].hidden||(n=Math.min(o,n),i=Math.max(o,i))})}}),t.min=n===Number.POSITIVE_INFINITY?0:n,t.max=i===Number.NEGATIVE_INFINITY?0:i,t.handleTickRangeOptions()},getTickLimit:function(){var t=this.options.ticks,e=a.valueOrDefault(t.fontSize,v.defaultFontSize);return Math.min(t.maxTicksLimit?t.maxTicksLimit:11,Math.ceil(this.drawingArea/(1.5*e)))},convertTicksToLabels:function(){var e=this;t.LinearScaleBase.prototype.convertTicksToLabels.call(e),e.pointLabels=e.chart.data.labels.map(e.options.pointLabels.callback,e)},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){this.options.pointLabels.display?s(this):u(this)},setReductions:function(t,e,n){var i=this,a=e.l/Math.sin(n.l),o=Math.max(e.r-i.width,0)/Math.sin(n.r),r=-e.t/Math.cos(n.t),l=-Math.max(e.b-i.height,0)/Math.cos(n.b);a=p(a),o=p(o),r=p(r),l=p(l),i.drawingArea=Math.min(Math.round(t-(a+o)/2),Math.round(t-(r+l)/2)),i.setCenterPoint(a,o,r,l)},setCenterPoint:function(t,e,n,i){var a=this,o=a.width-e-a.drawingArea,r=t+a.drawingArea,l=n+a.drawingArea,s=a.height-i-a.drawingArea;a.xCenter=Math.round((r+o)/2+a.left),a.yCenter=Math.round((l+s)/2+a.top)},getIndexAngle:function(t){return t*(2*Math.PI/e(this))+(this.chart.options&&this.chart.options.startAngle?this.chart.options.startAngle:0)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(null===t)return 0;var n=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*n:(t-e.min)*n},getPointPosition:function(t,e){var n=this,i=n.getIndexAngle(t)-Math.PI/2;return{x:Math.round(Math.cos(i)*e)+n.xCenter,y:Math.round(Math.sin(i)*e)+n.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(){var t=this,e=t.min,n=t.max;return t.getPointPositionForValue(0,t.beginAtZero?0:e<0&&n<0?n:e>0&&n>0?e:0)},draw:function(){var t=this,e=t.options,n=e.gridLines,i=e.ticks,o=a.valueOrDefault;if(e.display){var r=t.ctx,l=this.getIndexAngle(0),s=o(i.fontSize,v.defaultFontSize),u=o(i.fontStyle,v.defaultFontStyle),d=o(i.fontFamily,v.defaultFontFamily),c=a.fontString(s,u,d);a.each(t.ticks,function(e,a){if(a>0||i.reverse){var u=t.getDistanceFromCenterForValue(t.ticksAsNumbers[a]);if(n.display&&0!==a&&g(t,n,u,a),i.display){var d=o(i.fontColor,v.defaultFontColor);if(r.font=c,r.save(),r.translate(t.xCenter,t.yCenter),r.rotate(l),i.showLabelBackdrop){var h=r.measureText(e).width;r.fillStyle=i.backdropColor,r.fillRect(-h/2-i.backdropPaddingX,-u-s/2-i.backdropPaddingY,h+2*i.backdropPaddingX,s+2*i.backdropPaddingY)}r.textAlign="center",r.textBaseline="middle",r.fillStyle=d,r.fillText(e,0,-u),r.restore()}}}),(e.angleLines.display||e.pointLabels.display)&&f(t)}}});t.scaleService.registerScaleType("radialLinear",b,m)}},{25:25,34:34,45:45}],57:[function(t,e,n){"use strict";function i(t,e){return t-e}function a(t){var e,n,i,a={},o=[];for(e=0,n=t.length;e<n;++e)a[i=t[e]]||(a[i]=!0,o.push(i));return o}function o(t,e,n,i){if("linear"===i||!t.length)return[{time:e,pos:0},{time:n,pos:1}];var a,o,r,l,s,u=[],d=[e];for(a=0,o=t.length;a<o;++a)(l=t[a])>e&&l<n&&d.push(l);for(d.push(n),a=0,o=d.length;a<o;++a)s=d[a+1],r=d[a-1],l=d[a],void 0!==r&&void 0!==s&&Math.round((s+r)/2)===l||u.push({time:l,pos:a/(o-1)});return u}function r(t,e,n){for(var i,a,o,r=0,l=t.length-1;r>=0&&r<=l;){if(i=r+l>>1,a=t[i-1]||null,o=t[i],!a)return{lo:null,hi:o};if(o[e]<n)r=i+1;else{if(!(a[e]>n))return{lo:a,hi:o};l=i-1}}return{lo:o,hi:null}}function l(t,e,n,i){var a=r(t,e,n),o=a.lo?a.hi?a.lo:t[t.length-2]:t[0],l=a.lo?a.hi?a.hi:t[t.length-1]:t[1],s=l[e]-o[e],u=s?(n-o[e])/s:0,d=(l[i]-o[i])*u;return o[i]+d}function s(t,e){var n=e.parser,i=e.parser||e.format;return"function"==typeof n?n(t):"string"==typeof t&&"string"==typeof i?m(t,i):(t instanceof m||(t=m(t)),t.isValid()?t:"function"==typeof i?i(t):t)}function u(t,e){if(x.isNullOrUndef(t))return null;var n=e.options.time,i=s(e.getRightValue(t),n);return i.isValid()?(n.round&&i.startOf(n.round),i.valueOf()):null}function d(t,e,n,i){var a,o,r,l=e-t,s=w[n],u=s.size,d=s.steps;if(!d)return Math.ceil(l/((i||1)*u));for(a=0,o=d.length;a<o&&(r=d[a],!(Math.ceil(l/(u*r))<=i));++a);return r}function c(t,e,n,i){var a,o,r,l=M.length;for(a=M.indexOf(t);a<l-1;++a)if(o=w[M[a]],r=o.steps?o.steps[o.steps.length-1]:k,o.common&&Math.ceil((n-e)/(r*o.size))<=i)return M[a];return M[l-1]}function h(t,e,n,i){var a,o,r=m.duration(m(i).diff(m(n)));for(a=M.length-1;a>=M.indexOf(e);a--)if(o=M[a],w[o].common&&r.as(o)>=t.length)return o;return M[e?M.indexOf(e):0]}function f(t){for(var e=M.indexOf(t)+1,n=M.length;e<n;++e)if(w[M[e]].common)return M[e]}function g(t,e,n,i){var a,o=i.time,r=o.unit||c(o.minUnit,t,e,n),l=f(r),s=x.valueOrDefault(o.stepSize,o.unitStepSize),u="week"===r&&o.isoWeekday,h=i.ticks.major.enabled,g=w[r],p=m(t),v=m(e),b=[];for(s||(s=d(t,e,r,n)),u&&(p=p.isoWeekday(u),v=v.isoWeekday(u)),p=p.startOf(u?"day":r),(v=v.startOf(u?"day":r))<e&&v.add(1,r),a=m(p),h&&l&&!u&&!o.round&&(a.startOf(l),a.add(~~((p-a)/(g.size*s))*s,r));a<v;a.add(s,r))b.push(+a);return b.push(+a),b}function p(t,e,n,i,a){var o,r,s=0,u=0;return a.offset&&e.length&&(a.time.min||(o=e.length>1?e[1]:i,r=e[0],s=(l(t,"time",o,"pos")-l(t,"time",r,"pos"))/2),a.time.max||(o=e[e.length-1],r=e.length>1?e[e.length-2]:n,u=(l(t,"time",o,"pos")-l(t,"time",r,"pos"))/2)),{left:s,right:u}}function v(t,e){var n,i,a,o,r=[];for(n=0,i=t.length;n<i;++n)a=t[n],o=!!e&&a===+m(a).startOf(e),r.push({value:a,major:o});return r}var m=t(1);m="function"==typeof m?m:window.moment;var b=t(25),x=t(45),y=Number.MIN_SAFE_INTEGER||-9007199254740991,k=Number.MAX_SAFE_INTEGER||9007199254740991,w={millisecond:{common:!0,size:1,steps:[1,2,5,10,20,50,100,250,500]},second:{common:!0,size:1e3,steps:[1,2,5,10,30]},minute:{common:!0,size:6e4,steps:[1,2,5,10,30]},hour:{common:!0,size:36e5,steps:[1,2,3,6,12]},day:{common:!0,size:864e5,steps:[1,2,5]},week:{common:!1,size:6048e5,steps:[1,2,3,4]},month:{common:!0,size:2628e6,steps:[1,2,3]},quarter:{common:!1,size:7884e6,steps:[1,2,3,4]},year:{common:!0,size:3154e7}},M=Object.keys(w);e.exports=function(t){var e=t.Scale.extend({initialize:function(){if(!m)throw new Error("Chart.js - Moment.js could not be found! You must include it before Chart.js to use the time scale. Download at https://momentjs.com");this.mergeTicksOptions(),t.Scale.prototype.initialize.call(this)},update:function(){var e=this,n=e.options;return n.time&&n.time.format&&console.warn("options.time.format is deprecated and replaced by options.time.parser."),t.Scale.prototype.update.apply(e,arguments)},getRightValue:function(e){return e&&void 0!==e.t&&(e=e.t),t.Scale.prototype.getRightValue.call(this,e)},determineDataLimits:function(){var t,e,n,o,r,l,s=this,d=s.chart,c=s.options.time,h=k,f=y,g=[],p=[],v=[];for(t=0,n=d.data.labels.length;t<n;++t)v.push(u(d.data.labels[t],s));for(t=0,n=(d.data.datasets||[]).length;t<n;++t)if(d.isDatasetVisible(t))if(r=d.data.datasets[t].data,x.isObject(r[0]))for(p[t]=[],e=0,o=r.length;e<o;++e)l=u(r[e],s),g.push(l),p[t][e]=l;else g.push.apply(g,v),p[t]=v.slice(0);else p[t]=[];v.length&&(v=a(v).sort(i),h=Math.min(h,v[0]),f=Math.max(f,v[v.length-1])),g.length&&(g=a(g).sort(i),h=Math.min(h,g[0]),f=Math.max(f,g[g.length-1])),h=u(c.min,s)||h,f=u(c.max,s)||f,h=h===k?+m().startOf("day"):h,f=f===y?+m().endOf("day")+1:f,s.min=Math.min(h,f),s.max=Math.max(h+1,f),s._horizontal=s.isHorizontal(),s._table=[],s._timestamps={data:g,datasets:p,labels:v}},buildTicks:function(){var t,e,n,i=this,a=i.min,r=i.max,l=i.options,s=l.time,d=[],c=[];switch(l.ticks.source){case"data":d=i._timestamps.data;break;case"labels":d=i._timestamps.labels;break;case"auto":default:d=g(a,r,i.getLabelCapacity(a),l)}for("ticks"===l.bounds&&d.length&&(a=d[0],r=d[d.length-1]),a=u(s.min,i)||a,r=u(s.max,i)||r,t=0,e=d.length;t<e;++t)(n=d[t])>=a&&n<=r&&c.push(n);return i.min=a,i.max=r,i._unit=s.unit||h(c,s.minUnit,i.min,i.max),i._majorUnit=f(i._unit),i._table=o(i._timestamps.data,a,r,l.distribution),i._offsets=p(i._table,c,a,r,l),v(c,i._majorUnit)},getLabelForIndex:function(t,e){var n=this,i=n.chart.data,a=n.options.time,o=i.labels&&t<i.labels.length?i.labels[t]:"",r=i.datasets[e].data[t];return x.isObject(r)&&(o=n.getRightValue(r)),a.tooltipFormat&&(o=s(o,a).format(a.tooltipFormat)),o},tickFormatFunction:function(t,e,n,i){var a=this,o=a.options,r=t.valueOf(),l=o.time.displayFormats,s=l[a._unit],u=a._majorUnit,d=l[u],c=t.clone().startOf(u).valueOf(),h=o.ticks.major,f=h.enabled&&u&&d&&r===c,g=t.format(i||(f?d:s)),p=f?h:o.ticks.minor,v=x.valueOrDefault(p.callback,p.userCallback);return v?v(g,e,n):g},convertTicksToLabels:function(t){var e,n,i=[];for(e=0,n=t.length;e<n;++e)i.push(this.tickFormatFunction(m(t[e].value),e,t));return i},getPixelForOffset:function(t){var e=this,n=e._horizontal?e.width:e.height,i=e._horizontal?e.left:e.top,a=l(e._table,"time",t,"pos");return i+n*(e._offsets.left+a)/(e._offsets.left+1+e._offsets.right)},getPixelForValue:function(t,e,n){var i=this,a=null;if(void 0!==e&&void 0!==n&&(a=i._timestamps.datasets[n][e]),null===a&&(a=u(t,i)),null!==a)return i.getPixelForOffset(a)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this,n=e._horizontal?e.width:e.height,i=e._horizontal?e.left:e.top,a=(n?(t-i)/n:0)*(e._offsets.left+1+e._offsets.left)-e._offsets.right,o=l(e._table,"pos",a,"time");return m(o)},getLabelWidth:function(t){var e=this,n=e.options.ticks,i=e.ctx.measureText(t).width,a=x.toRadians(n.maxRotation),o=Math.cos(a),r=Math.sin(a);return i*o+x.valueOrDefault(n.fontSize,b.global.defaultFontSize)*r},getLabelCapacity:function(t){var e=this,n=e.options.time.displayFormats.millisecond,i=e.tickFormatFunction(m(t),0,[],n),a=e.getLabelWidth(i),o=e.isHorizontal()?e.width:e.height;return Math.floor(o/a)}});t.scaleService.registerScaleType("time",e,{position:"bottom",distribution:"linear",bounds:"data",time:{parser:!1,format:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}})}},{1:1,25:25,45:45}]},{},[7])(7)});