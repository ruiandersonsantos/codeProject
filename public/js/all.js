/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
 AngularJS v1.4.1
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(O,W,s){'use strict';function I(b){return function(){var a=arguments[0],c;c="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.4.1/"+(b?b+"/":"")+a;for(a=1;a<arguments.length;a++){c=c+(1==a?"?":"&")+"p"+(a-1)+"=";var d=encodeURIComponent,e;e=arguments[a];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;c+=d(e)}return Error(c)}}function Da(b){if(null==b||Va(b))return!1;var a="length"in Object(b)&&b.length;
return b.nodeType===qa&&a?!0:L(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function n(b,a,c){var d,e;if(b)if(E(b))for(d in b)"prototype"==d||"length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d)||a.call(c,b[d],d,b);else if(K(b)||Da(b)){var f="object"!==typeof b;d=0;for(e=b.length;d<e;d++)(f||d in b)&&a.call(c,b[d],d,b)}else if(b.forEach&&b.forEach!==n)b.forEach(a,c,b);else if(nc(b))for(d in b)a.call(c,b[d],d,b);else if("function"===typeof b.hasOwnProperty)for(d in b)b.hasOwnProperty(d)&&
a.call(c,b[d],d,b);else for(d in b)Wa.call(b,d)&&a.call(c,b[d],d,b);return b}function oc(b,a,c){for(var d=Object.keys(b).sort(),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function pc(b){return function(a,c){b(c,a)}}function Td(){return++mb}function qc(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function Nb(b,a,c){for(var d=b.$$hashKey,e=0,f=a.length;e<f;++e){var g=a[e];if(F(g)||E(g))for(var h=Object.keys(g),l=0,k=h.length;l<k;l++){var m=h[l],q=g[m];c&&F(q)?(F(b[m])||(b[m]=K(q)?[]:{}),Nb(b[m],
[q],!0)):b[m]=q}}qc(b,d);return b}function Q(b){return Nb(b,sa.call(arguments,1),!1)}function Ud(b){return Nb(b,sa.call(arguments,1),!0)}function X(b){return parseInt(b,10)}function Ob(b,a){return Q(Object.create(b),a)}function v(){}function Xa(b){return b}function ra(b){return function(){return b}}function w(b){return"undefined"===typeof b}function z(b){return"undefined"!==typeof b}function F(b){return null!==b&&"object"===typeof b}function nc(b){return null!==b&&"object"===typeof b&&!rc(b)}function L(b){return"string"===
typeof b}function V(b){return"number"===typeof b}function da(b){return"[object Date]"===ta.call(b)}function E(b){return"function"===typeof b}function Ya(b){return"[object RegExp]"===ta.call(b)}function Va(b){return b&&b.window===b}function Za(b){return b&&b.$evalAsync&&b.$watch}function $a(b){return"boolean"===typeof b}function sc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Vd(b){var a={};b=b.split(",");var c;for(c=0;c<b.length;c++)a[b[c]]=!0;return a}function ua(b){return G(b.nodeName||
b[0]&&b[0].nodeName)}function ab(b,a){var c=b.indexOf(a);0<=c&&b.splice(c,1);return c}function fa(b,a,c,d){if(Va(b)||Za(b))throw Ea("cpws");if(tc.test(ta.call(a)))throw Ea("cpta");if(a){if(b===a)throw Ea("cpi");c=c||[];d=d||[];F(b)&&(c.push(b),d.push(a));var e;if(K(b))for(e=a.length=0;e<b.length;e++)a.push(fa(b[e],null,c,d));else{var f=a.$$hashKey;K(a)?a.length=0:n(a,function(b,c){delete a[c]});if(nc(b))for(e in b)a[e]=fa(b[e],null,c,d);else if(b&&"function"===typeof b.hasOwnProperty)for(e in b)b.hasOwnProperty(e)&&
(a[e]=fa(b[e],null,c,d));else for(e in b)Wa.call(b,e)&&(a[e]=fa(b[e],null,c,d));qc(a,f)}}else if(a=b,F(b)){if(c&&-1!==(f=c.indexOf(b)))return d[f];if(K(b))return fa(b,[],c,d);if(tc.test(ta.call(b)))a=new b.constructor(b);else if(da(b))a=new Date(b.getTime());else if(Ya(b))a=new RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex;else return e=Object.create(rc(b)),fa(b,e,c,d);d&&(c.push(b),d.push(a))}return a}function ia(b,a){if(K(b)){a=a||[];for(var c=0,d=b.length;c<d;c++)a[c]=
b[c]}else if(F(b))for(c in a=a||{},b)if("$"!==c.charAt(0)||"$"!==c.charAt(1))a[c]=b[c];return a||b}function ka(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(K(b)){if(!K(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ka(b[d],a[d]))return!1;return!0}}else{if(da(b))return da(a)?ka(b.getTime(),a.getTime()):!1;if(Ya(b))return Ya(a)?b.toString()==a.toString():!1;if(Za(b)||Za(a)||Va(b)||Va(a)||K(a)||da(a)||Ya(a))return!1;
c=ga();for(d in b)if("$"!==d.charAt(0)&&!E(b[d])){if(!ka(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!(d in c||"$"===d.charAt(0)||a[d]===s||E(a[d])))return!1;return!0}return!1}function bb(b,a,c){return b.concat(sa.call(a,c))}function uc(b,a){var c=2<arguments.length?sa.call(arguments,2):[];return!E(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,bb(c,arguments,0)):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Wd(b,a){var c=
a;"string"===typeof b&&"$"===b.charAt(0)&&"$"===b.charAt(1)?c=s:Va(a)?c="$WINDOW":a&&W===a?c="$DOCUMENT":Za(a)&&(c="$SCOPE");return c}function cb(b,a){if("undefined"===typeof b)return s;V(a)||(a=a?2:null);return JSON.stringify(b,Wd,a)}function vc(b){return L(b)?JSON.parse(b):b}function wc(b,a){var c=Date.parse("Jan 01, 1970 00:00:00 "+b)/6E4;return isNaN(c)?a:c}function Pb(b,a,c){c=c?-1:1;var d=wc(a,b.getTimezoneOffset());a=b;b=c*(d-b.getTimezoneOffset());a=new Date(a.getTime());a.setMinutes(a.getMinutes()+
b);return a}function va(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return b[0].nodeType===Na?G(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+G(b)})}catch(d){return G(c)}}function xc(b){try{return decodeURIComponent(b)}catch(a){}}function yc(b){var a={},c,d;n((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=xc(c[0]),z(d)&&(b=z(c[1])?xc(c[1]):!0,Wa.call(a,d)?K(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}
function Qb(b){var a=[];n(b,function(b,d){K(b)?n(b,function(b){a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))}):a.push(ma(d,!0)+(!0===b?"":"="+ma(b,!0)))});return a.length?a.join("&"):""}function nb(b){return ma(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ma(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,a?"%20":"+")}function Xd(b,a){var c,d,e=Oa.length;for(d=0;d<
e;++d)if(c=Oa[d]+a,L(c=b.getAttribute(c)))return c;return null}function Yd(b,a){var c,d,e={};n(Oa,function(a){a+="app";!c&&b.hasAttribute&&b.hasAttribute(a)&&(c=b,d=b.getAttribute(a))});n(Oa,function(a){a+="app";var e;!c&&(e=b.querySelector("["+a.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(a))});c&&(e.strictDi=null!==Xd(c,"strict-di"),a(c,d?[d]:[],e))}function zc(b,a,c){F(c)||(c={});c=Q({strictDi:!1},c);var d=function(){b=A(b);if(b.injector()){var d=b[0]===W?"document":va(b);throw Ea("btstrpd",
d.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);c.debugInfoEnabled&&a.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);a.unshift("ng");d=db(a,c.strictDi);d.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return d},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;O&&e.test(O.name)&&(c.debugInfoEnabled=!0,O.name=O.name.replace(e,""));
if(O&&!f.test(O.name))return d();O.name=O.name.replace(f,"");$.resumeBootstrap=function(b){n(b,function(b){a.push(b)});return d()};E($.resumeDeferredBootstrap)&&$.resumeDeferredBootstrap()}function Zd(){O.name="NG_ENABLE_DEBUG_INFO!"+O.name;O.location.reload()}function $d(b){b=$.element(b).injector();if(!b)throw Ea("test");return b.get("$$testability")}function Ac(b,a){a=a||"_";return b.replace(ae,function(b,d){return(d?a:"")+b.toLowerCase()})}function be(){var b;if(!Bc){var a=ob();la=O.jQuery;z(a)&&
(la=null===a?s:O[a]);la&&la.fn.on?(A=la,Q(la.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),b=la.cleanData,la.cleanData=function(a){var d;if(Rb)Rb=!1;else for(var e=0,f;null!=(f=a[e]);e++)(d=la._data(f,"events"))&&d.$destroy&&la(f).triggerHandler("$destroy");b(a)}):A=R;$.element=A;Bc=!0}}function Sb(b,a,c){if(!b)throw Ea("areq",a||"?",c||"required");return b}function Qa(b,a,c){c&&K(b)&&(b=b[b.length-1]);Sb(E(b),a,"not a function, got "+
(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ra(b,a){if("hasOwnProperty"===b)throw Ea("badname",a);}function Cc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&E(b)?uc(e,b):b}function pb(b){var a=b[0];b=b[b.length-1];var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function ga(){return Object.create(null)}function ce(b){function a(a,b,c){return a[b]||(a[b]=c())}var c=I("$injector"),
d=I("ng");b=a(b,"angular",Object);b.$$minErr=b.$$minErr||I;return a(b,"module",function(){var b={};return function(f,g,h){if("hasOwnProperty"===f)throw d("badname","module");g&&b.hasOwnProperty(f)&&(b[f]=null);return a(b,f,function(){function a(b,c,e,f){f||(f=d);return function(){f[e||"push"]([b,c,arguments]);return C}}function b(a,c){return function(b,e){e&&E(e)&&(e.$$moduleName=f);d.push([a,c,arguments]);return C}}if(!g)throw c("nomod",f);var d=[],e=[],t=[],y=a("$injector","invoke","push",e),C=
{_invokeQueue:d,_configBlocks:e,_runBlocks:t,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:y,run:function(a){t.push(a);return this}};h&&y(h);return C})}})}
function de(b){Q(b,{bootstrap:zc,copy:fa,extend:Q,merge:Ud,equals:ka,element:A,forEach:n,injector:db,noop:v,bind:uc,toJson:cb,fromJson:vc,identity:Xa,isUndefined:w,isDefined:z,isString:L,isFunction:E,isObject:F,isNumber:V,isElement:sc,isArray:K,version:ee,isDate:da,lowercase:G,uppercase:qb,callbacks:{counter:0},getTestability:$d,$$minErr:I,$$csp:eb,reloadWithDebugInfo:Zd});fb=ce(O);try{fb("ngLocale")}catch(a){fb("ngLocale",[]).provider("$locale",fe)}fb("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:ge});
a.provider("$compile",Dc).directive({a:he,input:Ec,textarea:Ec,form:ie,script:je,select:ke,style:le,option:me,ngBind:ne,ngBindHtml:oe,ngBindTemplate:pe,ngClass:qe,ngClassEven:re,ngClassOdd:se,ngCloak:te,ngController:ue,ngForm:ve,ngHide:we,ngIf:xe,ngInclude:ye,ngInit:ze,ngNonBindable:Ae,ngPluralize:Be,ngRepeat:Ce,ngShow:De,ngStyle:Ee,ngSwitch:Fe,ngSwitchWhen:Ge,ngSwitchDefault:He,ngOptions:Ie,ngTransclude:Je,ngModel:Ke,ngList:Le,ngChange:Me,pattern:Fc,ngPattern:Fc,required:Gc,ngRequired:Gc,minlength:Hc,
ngMinlength:Hc,maxlength:Ic,ngMaxlength:Ic,ngValue:Ne,ngModelOptions:Oe}).directive({ngInclude:Pe}).directive(rb).directive(Jc);a.provider({$anchorScroll:Qe,$animate:Re,$$animateQueue:Se,$$AnimateRunner:Te,$browser:Ue,$cacheFactory:Ve,$controller:We,$document:Xe,$exceptionHandler:Ye,$filter:Kc,$interpolate:Ze,$interval:$e,$http:af,$httpParamSerializer:bf,$httpParamSerializerJQLike:cf,$httpBackend:df,$location:ef,$log:ff,$parse:gf,$rootScope:hf,$q:jf,$$q:kf,$sce:lf,$sceDelegate:mf,$sniffer:nf,$templateCache:of,
$templateRequest:pf,$$testability:qf,$timeout:rf,$window:sf,$$rAF:tf,$$asyncCallback:uf,$$jqLite:vf,$$HashMap:wf,$$cookieReader:xf})}])}function gb(b){return b.replace(yf,function(a,b,d,e){return e?d.toUpperCase():d}).replace(zf,"Moz$1")}function Lc(b){b=b.nodeType;return b===qa||!b||9===b}function Mc(b,a){var c,d,e=a.createDocumentFragment(),f=[];if(Tb.test(b)){c=c||e.appendChild(a.createElement("div"));d=(Af.exec(b)||["",""])[1].toLowerCase();d=na[d]||na._default;c.innerHTML=d[1]+b.replace(Bf,"<$1></$2>")+
d[2];for(d=d[0];d--;)c=c.lastChild;f=bb(f,c.childNodes);c=e.firstChild;c.textContent=""}else f.push(a.createTextNode(b));e.textContent="";e.innerHTML="";n(f,function(a){e.appendChild(a)});return e}function R(b){if(b instanceof R)return b;var a;L(b)&&(b=T(b),a=!0);if(!(this instanceof R)){if(a&&"<"!=b.charAt(0))throw Ub("nosel");return new R(b)}if(a){a=W;var c;b=(c=Cf.exec(b))?[a.createElement(c[1])]:(c=Mc(b,a))?c.childNodes:[]}Nc(this,b)}function Vb(b){return b.cloneNode(!0)}function sb(b,a){a||tb(b);
if(b.querySelectorAll)for(var c=b.querySelectorAll("*"),d=0,e=c.length;d<e;d++)tb(c[d])}function Oc(b,a,c,d){if(z(d))throw Ub("offargs");var e=(d=ub(b))&&d.events,f=d&&d.handle;if(f)if(a)n(a.split(" "),function(a){if(z(c)){var d=e[a];ab(d||[],c);if(d&&0<d.length)return}b.removeEventListener(a,f,!1);delete e[a]});else for(a in e)"$destroy"!==a&&b.removeEventListener(a,f,!1),delete e[a]}function tb(b,a){var c=b.ng339,d=c&&hb[c];d&&(a?delete d.data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),
Oc(b)),delete hb[c],b.ng339=s))}function ub(b,a){var c=b.ng339,c=c&&hb[c];a&&!c&&(b.ng339=c=++Df,c=hb[c]={events:{},data:{},handle:s});return c}function Wb(b,a,c){if(Lc(b)){var d=z(c),e=!d&&a&&!F(a),f=!a;b=(b=ub(b,!e))&&b.data;if(d)b[a]=c;else{if(f)return b;if(e)return b&&b[a];Q(b,a)}}}function vb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function wb(b,a){a&&b.setAttribute&&n(a.split(" "),function(a){b.setAttribute("class",T((" "+
(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+T(a)+" "," ")))})}function xb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");n(a.split(" "),function(a){a=T(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",T(c))}}function Nc(b,a){if(a)if(a.nodeType)b[b.length++]=a;else{var c=a.length;if("number"===typeof c&&a.window!==a){if(c)for(var d=0;d<c;d++)b[b.length++]=a[d]}else b[b.length++]=a}}function Pc(b,a){return yb(b,
"$"+(a||"ngController")+"Controller")}function yb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=K(a)?a:[a];b;){for(var d=0,e=a.length;d<e;d++)if((c=A.data(b,a[d]))!==s)return c;b=b.parentNode||11===b.nodeType&&b.host}}function Qc(b){for(sb(b,!0);b.firstChild;)b.removeChild(b.firstChild)}function Xb(b,a){a||sb(b);var c=b.parentNode;c&&c.removeChild(b)}function Ef(b,a){a=a||O;if("complete"===a.document.readyState)a.setTimeout(b);else A(a).on("load",b)}function Rc(b,a){var c=zb[a.toLowerCase()];
return c&&Sc[ua(b)]&&c}function Ff(b,a){var c=b.nodeName;return("INPUT"===c||"TEXTAREA"===c)&&Tc[a]}function Gf(b,a){var c=function(c,e){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=a[e||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};
1<g&&(f=ia(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||f[l].call(b,c)}};c.elem=b;return c}function vf(){this.$get=function(){return Q(R,{hasClass:function(b,a){b.attr&&(b=b[0]);return vb(b,a)},addClass:function(b,a){b.attr&&(b=b[0]);return xb(b,a)},removeClass:function(b,a){b.attr&&(b=b[0]);return wb(b,a)}})}}function Fa(b,a){var c=b&&b.$$hashKey;if(c)return"function"===typeof c&&(c=b.$$hashKey()),c;c=typeof b;return c="function"==c||"object"==c&&null!==b?b.$$hashKey=c+":"+(a||Td)():
c+":"+b}function Sa(b,a){if(a){var c=0;this.nextUid=function(){return++c}}n(b,this.put,this)}function Hf(b){return(b=b.toString().replace(Uc,"").match(Vc))?"function("+(b[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(b,a){function c(a){return function(b,c){if(F(b))n(b,pc(a));else return a(b,c)}}function d(a,b){Ra(a,"service");if(E(b)||K(b))b=t.instantiate(b);if(!b.$get)throw Ga("pget",a);return q[a+"Provider"]=b}function e(a,b){return function(){var c=C.invoke(b,this);if(w(c))throw Ga("undef",
a);return c}}function f(a,b,c){return d(a,{$get:!1!==c?e(a,b):b})}function g(a){var b=[],c;n(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=t.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{L(a)?(c=fb(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):E(a)?b.push(t.invoke(a)):K(a)?b.push(t.invoke(a)):Qa(a,"module")}catch(e){throw K(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+
"\n"+e.stack),Ga("modulerr",a,e.stack||e.message||e);}}});return b}function h(b,c){function d(a,e){if(b.hasOwnProperty(a)){if(b[a]===l)throw Ga("cdep",a+" <- "+k.join(" <- "));return b[a]}try{return k.unshift(a),b[a]=l,b[a]=c(a,e)}catch(f){throw b[a]===l&&delete b[a],f;}finally{k.shift()}}function e(b,c,f,g){"string"===typeof f&&(g=f,f=null);var k=[],h=db.$$annotate(b,a,g),l,t,m;t=0;for(l=h.length;t<l;t++){m=h[t];if("string"!==typeof m)throw Ga("itkn",m);k.push(f&&f.hasOwnProperty(m)?f[m]:d(m,g))}K(b)&&
(b=b[l]);return b.apply(c,k)}return{invoke:e,instantiate:function(a,b,c){var d=Object.create((K(a)?a[a.length-1]:a).prototype||null);a=e(a,d,b,c);return F(a)||E(a)?a:d},get:d,annotate:db.$$annotate,has:function(a){return q.hasOwnProperty(a+"Provider")||b.hasOwnProperty(a)}}}a=!0===a;var l={},k=[],m=new Sa([],!0),q={$provide:{provider:c(d),factory:c(f),service:c(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:c(function(a,b){return f(a,ra(b),!1)}),constant:c(function(a,
b){Ra(a,"constant");q[a]=b;y[a]=b}),decorator:function(a,b){var c=t.get(a+"Provider"),d=c.$get;c.$get=function(){var a=C.invoke(d,c);return C.invoke(b,null,{$delegate:a})}}}},t=q.$injector=h(q,function(a,b){$.isString(b)&&k.push(b);throw Ga("unpr",k.join(" <- "));}),y={},C=y.$injector=h(y,function(a,b){var c=t.get(a+"Provider",b);return C.invoke(c.$get,c,s,a)});n(g(b),function(a){a&&C.invoke(a)});return C}function Qe(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location",
"$rootScope",function(a,c,d){function e(a){var b=null;Array.prototype.some.call(a,function(a){if("a"===ua(a))return b=a,!0});return b}function f(b){if(b){b.scrollIntoView();var c;c=g.yOffset;E(c)?c=c():sc(c)?(c=c[0],c="fixed"!==a.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):V(c)||(c=0);c&&(b=b.getBoundingClientRect().top,a.scrollBy(0,b-c))}else a.scrollTo(0,0)}function g(a){a=L(a)?a:c.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):
f(null)}var h=a.document;b&&d.$watch(function(){return c.hash()},function(a,b){a===b&&""===a||Ef(function(){d.$evalAsync(g)})});return g}]}function ib(b,a){if(!b&&!a)return"";if(!b)return a;if(!a)return b;K(b)&&(b=b.join(" "));K(a)&&(a=a.join(" "));return b+" "+a}function If(b){L(b)&&(b=b.split(" "));var a=ga();n(b,function(b){b.length&&(a[b]=!0)});return a}function Ha(b){return F(b)?b:{}}function uf(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,
0,!1)}}]}function Jf(b,a,c,d){function e(a){try{a.apply(null,sa.call(arguments,1))}finally{if(C--,0===C)for(;N.length;)try{N.pop()()}catch(b){c.error(b)}}}function f(){g();h()}function g(){a:{try{u=m.state;break a}catch(a){}u=void 0}u=w(u)?null:u;ka(u,D)&&(u=D);D=u}function h(){if(x!==l.url()||p!==u)x=l.url(),p=u,n(B,function(a){a(l.url(),u)})}var l=this,k=b.location,m=b.history,q=b.setTimeout,t=b.clearTimeout,y={};l.isMock=!1;var C=0,N=[];l.$$completeOutstandingRequest=e;l.$$incOutstandingRequestCount=
function(){C++};l.notifyWhenNoOutstandingRequests=function(a){0===C?a():N.push(a)};var u,p,x=k.href,r=a.find("base"),H=null;g();p=u;l.url=function(a,c,e){w(e)&&(e=null);k!==b.location&&(k=b.location);m!==b.history&&(m=b.history);if(a){var f=p===e;if(x===a&&(!d.history||f))return l;var h=x&&Ia(x)===Ia(a);x=a;p=e;if(!d.history||h&&f){if(!h||H)H=a;c?k.replace(a):h?(c=k,e=a.indexOf("#"),a=-1===e?"":a.substr(e+1),c.hash=a):k.href=a}else m[c?"replaceState":"pushState"](e,"",a),g(),p=u;return l}return H||
k.href.replace(/%27/g,"'")};l.state=function(){return u};var B=[],M=!1,D=null;l.onUrlChange=function(a){if(!M){if(d.history)A(b).on("popstate",f);A(b).on("hashchange",f);M=!0}B.push(a);return a};l.$$applicationDestroyed=function(){A(b).off("hashchange popstate",f)};l.$$checkUrlChange=h;l.baseHref=function(){var a=r.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};l.defer=function(a,b){var c;C++;c=q(function(){delete y[c];e(a)},b||0);y[c]=!0;return c};l.defer.cancel=function(a){return y[a]?
(delete y[a],t(a),e(v),!0):!1}}function Ue(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new Jf(b,d,a,c)}]}function Ve(){this.$get=function(){function b(b,d){function e(a){a!=q&&(t?t==a&&(t=a.n):t=a,f(a.n,a.p),f(a,q),q=a,q.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw I("$cacheFactory")("iid",b);var g=0,h=Q({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},q=null,t=null;return a[b]={put:function(a,b){if(!w(b)){if(k<Number.MAX_VALUE){var c=
m[a]||(m[a]={key:a});e(c)}a in l||g++;l[a]=b;g>k&&this.remove(t.key);return b}},get:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return l[a]},remove:function(a){if(k<Number.MAX_VALUE){var b=m[a];if(!b)return;b==q&&(q=b.p);b==t&&(t=b.n);f(b.n,b.p);delete m[a]}delete l[a];g--},removeAll:function(){l={};g=0;m={};q=t=null},destroy:function(){m=h=l=null;delete a[b]},info:function(){return Q({},h,{size:g})}}}var a={};b.info=function(){var b={};n(a,function(a,e){b[e]=a.info()});return b};
b.get=function(b){return a[b]};return b}}function of(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function Dc(b,a){function c(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};n(a,function(a,f){var g=a.match(d);if(!g)throw ea("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}});return e}function d(a){var b=a.charAt(0);if(!b||b!==G(b))throw ea("baddir",a);if(a!==a.trim())throw ea("baddir",
a);}var e={},f=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,g=/(([\w\-]+)(?:\:([^;]+))?;?)/,h=Vd("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,k=/^(on[a-z]+|formaction)$/;this.directive=function t(a,f){Ra(a,"directive");L(a)?(d(a),Sb(f,"directiveFactory"),e.hasOwnProperty(a)||(e[a]=[],b.factory(a+"Directive",["$injector","$exceptionHandler",function(b,d){var f=[];n(e[a],function(e,g){try{var h=b.invoke(e);E(h)?h={compile:ra(h)}:!h.compile&&h.link&&(h.compile=ra(h.link));h.priority=h.priority||
0;h.index=g;h.name=h.name||a;h.require=h.require||h.controller&&h.name;h.restrict=h.restrict||"EA";var k=h,l=h,t=h.name,m={isolateScope:null,bindToController:null};F(l.scope)&&(!0===l.bindToController?(m.bindToController=c(l.scope,t,!0),m.isolateScope={}):m.isolateScope=c(l.scope,t,!1));F(l.bindToController)&&(m.bindToController=c(l.bindToController,t,!0));if(F(m.bindToController)){var C=l.controller,ba=l.controllerAs;if(!C)throw ea("noctrl",t);var ha;a:if(ba&&L(ba))ha=ba;else{if(L(C)){var n=Wc.exec(C);
if(n){ha=n[3];break a}}ha=void 0}if(!ha)throw ea("noident",t);}var r=k.$$bindings=m;F(r.isolateScope)&&(h.$$isolateBindings=r.isolateScope);h.$$moduleName=e.$$moduleName;f.push(h)}catch(s){d(s)}});return f}])),e[a].push(f)):n(a,pc(t));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};
var m=!0;this.debugInfoEnabled=function(a){return z(a)?(m=a,this):m};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,c,d,u,p,x,r,H,B,M){function D(a,b){try{a.addClass(b)}catch(c){}}function S(a,b,c,d,e){a instanceof A||(a=A(a));n(a,function(b,c){b.nodeType==Na&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=P(a,b,a,c,d,e);S.$$addScopeClass(a);
var g=null;return function(b,c,d){Sb(b,"scope");d=d||{};var e=d.parentBoundTranscludeFn,h=d.transcludeControllers;d=d.futureParentElement;e&&e.$$boundTransclude&&(e=e.$$boundTransclude);g||(g=(d=d&&d[0])?"foreignobject"!==ua(d)&&d.toString().match(/SVG/)?"svg":"html":"html");d="html"!==g?A(Yb(g,A("<div>").append(a).html())):c?Pa.clone.call(a):a;if(h)for(var l in h)d.data("$"+l+"Controller",h[l].instance);S.$$addScopeInfo(d,b);c&&c(d,b);f&&f(b,d,d,e);return d}}function P(a,b,c,d,e,f){function g(a,
c,d,e){var f,l,k,m,t,B,y;if(p)for(y=Array(c.length),m=0;m<h.length;m+=3)f=h[m],y[f]=c[f];else y=c;m=0;for(t=h.length;m<t;)if(l=y[h[m++]],c=h[m++],f=h[m++],c){if(c.scope){if(k=a.$new(),S.$$addScopeInfo(A(l),k),B=c.$$destroyBindings)c.$$destroyBindings=null,k.$on("$destroyed",B)}else k=a;B=c.transcludeOnThisElement?ba(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?ba(a,b):null;c(f,k,l,d,B,c)}else f&&f(a,l.childNodes,s,e)}for(var h=[],l,k,m,t,p,B=0;B<a.length;B++){l=new $;k=ha(a[B],[],l,0===B?
d:s,e);(f=k.length?J(k,a[B],l,b,c,null,[],[],f):null)&&f.scope&&S.$$addScopeClass(l.$$element);l=f&&f.terminal||!(m=a[B].childNodes)||!m.length?null:P(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||l)h.push(B,f,l),t=!0,p=p||f;f=null}return t?g:null}function ba(a,b,c){return function(d,e,f,g,h){d||(d=a.$new(!1,h),d.$$transcluded=!0);return b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})}}function ha(a,b,c,d,e){var h=c.$attr,l;switch(a.nodeType){case qa:w(b,
xa(ua(a)),"E",d,e);for(var k,m,t,p=a.attributes,B=0,y=p&&p.length;B<y;B++){var C=!1,N=!1;k=p[B];l=k.name;m=T(k.value);k=xa(l);if(t=ia.test(k))l=l.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});var P=k.replace(/(Start|End)$/,"");I(P)&&k===P+"Start"&&(C=l,N=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));k=xa(l.toLowerCase());h[k]=l;if(t||!c.hasOwnProperty(k))c[k]=m,Rc(a,k)&&(c[k]=!0);V(a,b,m,k,t);w(b,k,"A",d,e,C,N)}a=a.className;F(a)&&(a=a.animVal);if(L(a)&&
""!==a)for(;l=g.exec(a);)k=xa(l[2]),w(b,k,"C",d,e)&&(c[k]=T(l[3])),a=a.substr(l.index+l[0].length);break;case Na:if(11===Ta)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);za(b,a.nodeValue);break;case 8:try{if(l=f.exec(a.nodeValue))k=xa(l[1]),w(b,k,"M",d,e)&&(c[k]=T(l[2]))}catch(ba){}}b.sort(Ja);return b}function wa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ea("uterdir",b,
c);a.nodeType==qa&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function Xc(a,b,c){return function(d,e,f,g,h){e=wa(e[0],b,c);return a(d,e,f,g,h)}}function J(a,b,d,e,f,g,h,k,m){function t(a,b,c,d){if(a){c&&(a=Xc(a,c,d));a.require=J.require;a.directiveName=v;if(u===J||J.$$isolateScope)a=Y(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=Xc(b,c,d));b.require=J.require;b.directiveName=v;if(u===J||J.$$isolateScope)b=Y(b,{isolateScope:!0});k.push(b)}}
function B(a,b,c,d){var e;if(L(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;e||(d="$"+b+"Controller",e=g?c.inheritedData(d):c.data(d));if(!e&&!f)throw ea("ctreq",b,a);}else if(K(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=B(a,b[g],c,d);return e||null}function y(a,b,c,d,e,f){var g=ga(),h;for(h in d){var l=d[h],k={$scope:l===u||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=l.controller;"@"==m&&(m=b[l.name]);k=p(m,
k,!0,l.controllerAs);g[l.name]=k;r||a.data("$"+l.name+"Controller",k.instance)}return g}function N(a,c,e,f,g,l){function m(a,b,c){var d;Za(a)||(c=b,b=a,a=s);r&&(d=n);c||(c=r?ja.parent():ja);return g(a,b,d,c,J)}var t,p,C,P,n,ha,ja;b===e?(f=d,ja=d.$$element):(ja=A(e),f=new $(ja,d));u&&(P=c.$new(!0));g&&(ha=m,ha.$$boundTransclude=g);M&&(n=y(ja,f,ha,M,P,c));u&&(S.$$addScopeInfo(ja,P,!0,!(D&&(D===u||D===u.$$originalDirective))),S.$$addScopeClass(ja,!0),P.$$isolateBindings=u.$$isolateBindings,X(c,f,P,P.$$isolateBindings,
u,P));if(n){var x=u||ba,H;x&&n[x.name]&&(p=x.$$bindings.bindToController,(C=n[x.name])&&C.identifier&&p&&(H=C,l.$$destroyBindings=X(c,f,C.instance,p,x)));for(t in n){C=n[t];var wa=C();wa!==C.instance&&(C.instance=wa,ja.data("$"+t+"Controller",wa),C===H&&(l.$$destroyBindings(),l.$$destroyBindings=X(c,f,wa,p,x)))}}t=0;for(l=h.length;t<l;t++)p=h[t],Z(p,p.isolateScope?P:c,ja,f,p.require&&B(p.directiveName,p.require,ja,n),ha);var J=c;u&&(u.template||null===u.templateUrl)&&(J=P);a&&a(J,e.childNodes,s,g);
for(t=k.length-1;0<=t;t--)p=k[t],Z(p,p.isolateScope?P:c,ja,f,p.require&&B(p.directiveName,p.require,ja,n),ha)}m=m||{};for(var P=-Number.MAX_VALUE,ba,M=m.controllerDirectives,u=m.newIsolateScopeDirective,D=m.templateDirective,n=m.nonTlbTranscludeDirective,x=!1,H=!1,r=m.hasElementTranscludeDirective,aa=d.$$element=A(b),J,v,w,Ja=e,za,I=0,G=a.length;I<G;I++){J=a[I];var Ab=J.$$start,Q=J.$$end;Ab&&(aa=wa(b,Ab,Q));w=s;if(P>J.priority)break;if(w=J.scope)J.templateUrl||(F(w)?(O("new/isolated scope",u||ba,
J,aa),u=J):O("new/isolated scope",u,J,aa)),ba=ba||J;v=J.name;!J.templateUrl&&J.controller&&(w=J.controller,M=M||ga(),O("'"+v+"' controller",M[v],J,aa),M[v]=J);if(w=J.transclude)x=!0,J.$$tlb||(O("transclusion",n,J,aa),n=J),"element"==w?(r=!0,P=J.priority,w=aa,aa=d.$$element=A(W.createComment(" "+v+": "+d[v]+" ")),b=aa[0],U(f,sa.call(w,0),b),Ja=S(w,e,P,g&&g.name,{nonTlbTranscludeDirective:n})):(w=A(Vb(b)).contents(),aa.empty(),Ja=S(w,e));if(J.template)if(H=!0,O("template",D,J,aa),D=J,w=E(J.template)?
J.template(aa,d):J.template,w=fa(w),J.replace){g=J;w=Tb.test(w)?Zc(Yb(J.templateNamespace,T(w))):[];b=w[0];if(1!=w.length||b.nodeType!==qa)throw ea("tplrt",v,"");U(f,aa,b);G={$attr:{}};w=ha(b,[],G);var R=a.splice(I+1,a.length-(I+1));u&&z(w);a=a.concat(w).concat(R);$c(d,G);G=a.length}else aa.html(w);if(J.templateUrl)H=!0,O("template",D,J,aa),D=J,J.replace&&(g=J),N=Kf(a.splice(I,a.length-I),aa,d,f,x&&Ja,h,k,{controllerDirectives:M,newIsolateScopeDirective:u,templateDirective:D,nonTlbTranscludeDirective:n}),
G=a.length;else if(J.compile)try{za=J.compile(aa,d,Ja),E(za)?t(null,za,Ab,Q):za&&t(za.pre,za.post,Ab,Q)}catch(V){c(V,va(aa))}J.terminal&&(N.terminal=!0,P=Math.max(P,J.priority))}N.scope=ba&&!0===ba.scope;N.transcludeOnThisElement=x;N.templateOnThisElement=H;N.transclude=Ja;m.hasElementTranscludeDirective=r;return N}function z(a){for(var b=0,c=a.length;b<c;b++)a[b]=Ob(a[b],{$$isolateScope:!0})}function w(b,d,f,g,h,l,k){if(d===h)return null;h=null;if(e.hasOwnProperty(d)){var m;d=a.get(d+"Directive");
for(var p=0,B=d.length;p<B;p++)try{m=d[p],(g===s||g>m.priority)&&-1!=m.restrict.indexOf(f)&&(l&&(m=Ob(m,{$$start:l,$$end:k})),b.push(m),h=m)}catch(y){c(y)}}return h}function I(b){if(e.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,f=c.length;d<f;d++)if(b=c[d],b.multiElement)return!0;return!1}function $c(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;n(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});n(b,function(b,f){"class"==f?(D(e,b),a["class"]=
(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function Kf(a,b,c,e,f,g,h,l){var k=[],m,t,p=b[0],B=a.shift(),y=Ob(B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),C=E(B.templateUrl)?B.templateUrl(b,c):B.templateUrl,M=B.templateNamespace;b.empty();d(H.getTrustedResourceUrl(C)).then(function(d){var N,u;d=fa(d);if(B.replace){d=Tb.test(d)?Zc(Yb(M,
T(d))):[];N=d[0];if(1!=d.length||N.nodeType!==qa)throw ea("tplrt",B.name,C);d={$attr:{}};U(e,b,N);var x=ha(N,[],d);F(B.scope)&&z(x);a=x.concat(a);$c(c,d)}else N=p,b.html(d);a.unshift(y);m=J(a,N,c,f,b,B,g,h,l);n(e,function(a,c){a==N&&(e[c]=b[0])});for(t=P(b[0].childNodes,f);k.length;){d=k.shift();u=k.shift();var S=k.shift(),H=k.shift(),x=b[0];if(!d.$$destroyed){if(u!==p){var wa=u.className;l.hasElementTranscludeDirective&&B.replace||(x=Vb(N));U(S,A(u),x);D(A(x),wa)}u=m.transcludeOnThisElement?ba(d,
m.transclude,H):H;m(t,d,x,e,u,m)}}k=null});return function(a,b,c,d,e){a=e;b.$$destroyed||(k?k.push(b,c,d,a):(m.transcludeOnThisElement&&(a=ba(b,m.transclude,e)),m(t,b,c,d,a,m)))}}function Ja(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function O(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw ea("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,va(d));}function za(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=
a.parent();var b=!!a.length;b&&S.$$addBindingClass(a);return function(a,c){var e=c.parent();b||S.$$addBindingClass(e);S.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function Yb(a,b){a=G(a||"html");switch(a){case "svg":case "math":var c=W.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function R(a,b){if("srcdoc"==b)return H.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||
"ngSrc"==b))return H.RESOURCE_URL}function V(a,c,d,e,f){var g=R(a,e);f=h[e]||f;var l=b(d,!0,g,f);if(l){if("multiple"===e&&"select"===ua(a))throw ea("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,h){c=h.$$observers||(h.$$observers={});if(k.test(e))throw ea("nodomevents");var m=h[e];m!==d&&(l=m&&b(m,!0,g,f),d=m);l&&(h[e]=l(a),(c[e]||(c[e]=[])).$$inter=!0,(h.$$observers&&h.$$observers[e].$$scope||a).$watch(l,function(a,b){"class"===e&&a!=b?h.$updateClass(a,b):h.$set(e,
a)}))}}}})}}function U(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var l=a.length;g<l;g++,h++)h<l?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=W.createDocumentFragment();a.appendChild(d);A.hasData(d)&&(A(c).data(A(d).data()),la?(Rb=!0,la.cleanData([d])):delete A.cache[d[A.expando]]);d=1;for(e=b.length;d<e;d++)f=b[d],A(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function Y(a,
b){return Q(function(){return a.apply(null,arguments)},a,b)}function Z(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}function X(a,c,d,e,f,g){var h;n(e,function(e,g){var l=e.attrName,k=e.optional,m=e.mode,t,p,B,C;Wa.call(c,l)||(c[l]=s);switch(m){case "@":c[l]||k||(d[g]=s);c.$observe(l,function(a){d[g]=a});c.$$observers[l].$$scope=a;c[l]&&(d[g]=b(c[l])(a));break;case "=":if(k&&!c[l])break;p=u(c[l]);C=p.literal?ka:function(a,b){return a===b||a!==a&&b!==b};B=p.assign||function(){t=d[g]=p(a);throw ea("nonassign",
c[l],f.name);};t=d[g]=p(a);k=function(b){C(b,d[g])||(C(b,t)?B(a,b=d[g]):d[g]=b);return t=b};k.$stateful=!0;k=e.collection?a.$watchCollection(c[l],k):a.$watch(u(c[l],k),null,p.literal);h=h||[];h.push(k);break;case "&":p=u(c[l]);if(p===v&&k)break;d[g]=function(b){return p(a,b)}}});e=h?function(){for(var a=0,b=h.length;a<b;++a)h[a]()}:v;return g&&e!==v?(g.$on("$destroy",e),v):e}var $=function(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=
a};$.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&B.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&B.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=ad(a,b);c&&c.length&&B.addClass(this.$$element,c);(c=ad(b,a))&&c.length&&B.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=this.$$element[0],g=Rc(f,a),h=Ff(f,a),f=a;g?(this.$$element.prop(a,b),e=g):h&&(this[h]=b,f=h);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Ac(a,
"-"));g=ua(this.$$element);if("a"===g&&"href"===a||"img"===g&&"src"===a)this[a]=b=M(b,"src"===a);else if("img"===g&&"srcset"===a){for(var g="",h=T(b),l=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,l=/\s/.test(h)?l:/(,)/,h=h.split(l),l=Math.floor(h.length/2),k=0;k<l;k++)var m=2*k,g=g+M(T(h[m]),!0),g=g+(" "+T(h[m+1]));h=T(h[2*k]).split(/\s/);g+=M(T(h[0]),!0);2===h.length&&(g+=" "+T(h[1]));this[a]=b=g}!1!==d&&(null===b||b===s?this.$$element.removeAttr(e):this.$$element.attr(e,b));(a=this.$$observers)&&n(a[f],
function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=ga()),e=d[a]||(d[a]=[]);e.push(b);x.$evalAsync(function(){!e.$$inter&&c.hasOwnProperty(a)&&b(c[a])});return function(){ab(e,b)}}};var ca=b.startSymbol(),da=b.endSymbol(),fa="{{"==ca||"}}"==da?Xa:function(a){return a.replace(/\{\{/g,ca).replace(/}}/g,da)},ia=/^ngAttr[A-Z]/;S.$$addBindingInfo=m?function(a,b){var c=a.data("$binding")||[];K(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:v;S.$$addBindingClass=
m?function(a){D(a,"ng-binding")}:v;S.$$addScopeInfo=m?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:v;S.$$addScopeClass=m?function(a,b){D(a,b?"ng-isolate-scope":"ng-scope")}:v;return S}]}function xa(b){return gb(b.replace(Yc,""))}function ad(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Zc(b){b=A(b);var a=b.length;if(1>=a)return b;for(;a--;)8===
b[a].nodeType&&Lf.call(b,a,1);return b}function We(){var b={},a=!1;this.register=function(a,d){Ra(a,"controller");F(a)?Q(b,a):b[a]=d};this.allowGlobals=function(){a=!0};this.$get=["$injector","$window",function(c,d){function e(a,b,c,d){if(!a||!F(a.$scope))throw I("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,l){var k,m,q;h=!0===h;l&&L(l)&&(q=l);if(L(f)){l=f.match(Wc);if(!l)throw Mf("ctrlfmt",f);m=l[1];q=q||l[3];f=b.hasOwnProperty(m)?b[m]:Cc(g.$scope,m,!0)||(a?Cc(d,m,!0):s);Qa(f,
m,!0)}if(h)return h=(K(f)?f[f.length-1]:f).prototype,k=Object.create(h||null),q&&e(g,q,k,m||f.name),Q(function(){var a=c.invoke(f,k,g,m);a!==k&&(F(a)||E(a))&&(k=a,q&&e(g,q,k,m||f.name));return k},{instance:k,identifier:q});k=c.instantiate(f,g,m);q&&e(g,q,k,m||f.name);return k}}]}function Xe(){this.$get=["$window",function(b){return A(b.document)}]}function Ye(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function Zb(b){return F(b)?da(b)?b.toISOString():cb(b):b}
function bf(){this.$get=function(){return function(b){if(!b)return"";var a=[];oc(b,function(b,d){null===b||w(b)||(K(b)?n(b,function(b,c){a.push(ma(d)+"="+ma(Zb(b)))}):a.push(ma(d)+"="+ma(Zb(b))))});return a.join("&")}}}function cf(){this.$get=function(){return function(b){function a(b,e,f){null===b||w(b)||(K(b)?n(b,function(b){a(b,e+"[]")}):F(b)&&!da(b)?oc(b,function(b,c){a(b,e+(f?"":"[")+c+(f?"":"]"))}):c.push(ma(e)+"="+ma(Zb(b))))}if(!b)return"";var c=[];a(b,"",!0);return c.join("&")}}}function $b(b,
a){if(L(b)){var c=b.replace(Nf,"").trim();if(c){var d=a("Content-Type");(d=d&&0===d.indexOf(bd))||(d=(d=c.match(Of))&&Pf[d[0]].test(c));d&&(b=vc(c))}}return b}function cd(b){var a=ga(),c;L(b)?n(b.split("\n"),function(b){c=b.indexOf(":");var e=G(T(b.substr(0,c)));b=T(b.substr(c+1));e&&(a[e]=a[e]?a[e]+", "+b:b)}):F(b)&&n(b,function(b,c){var f=G(c),g=T(b);f&&(a[f]=a[f]?a[f]+", "+g:g)});return a}function dd(b){var a;return function(c){a||(a=cd(b));return c?(c=a[G(c)],void 0===c&&(c=null),c):a}}function ed(b,
a,c,d){if(E(d))return d(b,a,c);n(d,function(d){b=d(b,a,c)});return b}function af(){var b=this.defaults={transformResponse:[$b],transformRequest:[function(a){return F(a)&&"[object File]"!==ta.call(a)&&"[object Blob]"!==ta.call(a)&&"[object FormData]"!==ta.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ia(ac),put:ia(ac),patch:ia(ac)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},a=!1;this.useApplyAsync=function(b){return z(b)?
(a=!!b,this):a};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(d,e,f,g,h,l){function k(a){function c(a){var b=Q({},a);b.data=a.data?ed(a.data,a.headers,a.status,e.transformResponse):a.data;a=a.status;return 200<=a&&300>a?b:h.reject(b)}function d(a,b){var c,e={};n(a,function(a,d){E(a)?(c=a(b),null!=c&&(e[d]=c)):e[d]=a});return e}if(!$.isObject(a))throw I("$http")("badreq",a);var e=Q({method:"get",transformRequest:b.transformRequest,
transformResponse:b.transformResponse,paramSerializer:b.paramSerializer},a);e.headers=function(a){var c=b.headers,e=Q({},a.headers),f,g,h,c=Q({},c.common,c[G(a.method)]);a:for(f in c){g=G(f);for(h in e)if(G(h)===g)continue a;e[f]=c[f]}return d(e,ia(a))}(a);e.method=qb(e.method);e.paramSerializer=L(e.paramSerializer)?l.get(e.paramSerializer):e.paramSerializer;var f=[function(a){var d=a.headers,e=ed(a.data,dd(d),s,a.transformRequest);w(e)&&n(d,function(a,b){"content-type"===G(b)&&delete d[b]});w(a.withCredentials)&&
!w(b.withCredentials)&&(a.withCredentials=b.withCredentials);return m(a,e).then(c,c)},s],g=h.when(e);for(n(y,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),g=g.then(a,k)}g.success=function(a){Qa(a,"fn");g.then(function(b){a(b.data,b.status,b.headers,e)});return g};g.error=function(a){Qa(a,"fn");g.then(null,function(b){a(b.data,b.status,b.headers,e)});return g};return g}
function m(c,f){function l(b,c,d,e){function f(){m(c,b,d,e)}M&&(200<=b&&300>b?M.put(P,[b,c,cd(d),e]):M.remove(P));a?g.$applyAsync(f):(f(),g.$$phase||g.$apply())}function m(a,b,d,e){b=Math.max(b,0);(200<=b&&300>b?H.resolve:H.reject)({data:a,status:b,headers:dd(d),config:c,statusText:e})}function y(a){m(a.data,a.status,ia(a.headers()),a.statusText)}function n(){var a=k.pendingRequests.indexOf(c);-1!==a&&k.pendingRequests.splice(a,1)}var H=h.defer(),B=H.promise,M,D,S=c.headers,P=q(c.url,c.paramSerializer(c.params));
k.pendingRequests.push(c);B.then(n,n);!c.cache&&!b.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(M=F(c.cache)?c.cache:F(b.cache)?b.cache:t);M&&(D=M.get(P),z(D)?D&&E(D.then)?D.then(y,y):K(D)?m(D[1],D[0],ia(D[2]),D[3]):m(D,200,{},"OK"):M.put(P,B));w(D)&&((D=fd(c.url)?e()[c.xsrfCookieName||b.xsrfCookieName]:s)&&(S[c.xsrfHeaderName||b.xsrfHeaderName]=D),d(c.method,P,f,l,S,c.timeout,c.withCredentials,c.responseType));return B}function q(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);
return a}var t=f("$http");b.paramSerializer=L(b.paramSerializer)?l.get(b.paramSerializer):b.paramSerializer;var y=[];n(c,function(a){y.unshift(L(a)?l.get(a):l.invoke(a))});k.pendingRequests=[];(function(a){n(arguments,function(a){k[a]=function(b,c){return k(Q({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){n(arguments,function(a){k[a]=function(b,c,d){return k(Q({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");k.defaults=b;return k}]}function Qf(){return new O.XMLHttpRequest}
function df(){this.$get=["$browser","$window","$document",function(b,a,c){return Rf(b,Qf,b.defer,a.angular.callbacks,c[0])}]}function Rf(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",m,!1);e.body.removeChild(f);f=null;var g=-1,y="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),y=a.type,g="error"===a.type?404:200);c&&c(g,y)};f.addEventListener("load",
m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,l,k,m,q,t,y){function C(){p&&p();x&&x.abort()}function N(a,d,e,f,g){H!==s&&c.cancel(H);p=x=null;a(d,e,f,g);b.$$completeOutstandingRequest(v)}b.$$incOutstandingRequestCount();h=h||b.url();if("jsonp"==G(e)){var u="_"+(d.counter++).toString(36);d[u]=function(a){d[u].data=a;d[u].called=!0};var p=f(h.replace("JSON_CALLBACK","angular.callbacks."+u),u,function(a,b){N(k,a,d[u].data,"",b);d[u]=v})}else{var x=a();x.open(e,
h,!0);n(m,function(a,b){z(a)&&x.setRequestHeader(b,a)});x.onload=function(){var a=x.statusText||"",b="response"in x?x.response:x.responseText,c=1223===x.status?204:x.status;0===c&&(c=b?200:"file"==Aa(h).protocol?404:0);N(k,c,b,x.getAllResponseHeaders(),a)};e=function(){N(k,-1,null,null,"")};x.onerror=e;x.onabort=e;t&&(x.withCredentials=!0);if(y)try{x.responseType=y}catch(r){if("json"!==y)throw r;}x.send(l)}if(0<q)var H=c(C,q);else q&&E(q.then)&&q.then(C)}}function Ze(){var b="{{",a="}}";this.startSymbol=
function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,b).replace(q,a)}function h(f,h,m,q){function u(a){try{var b=a;a=m?e.getTrusted(m,b):e.valueOf(b);var c;if(q&&!z(a))c=a;else if(null==a)c="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}c=a}return c}catch(g){d(Ka.interr(f,g))}}q=!!q;for(var p,n,r=0,H=
[],B=[],M=f.length,D=[],S=[];r<M;)if(-1!=(p=f.indexOf(b,r))&&-1!=(n=f.indexOf(a,p+l)))r!==p&&D.push(g(f.substring(r,p))),r=f.substring(p+l,n),H.push(r),B.push(c(r,u)),r=n+k,S.push(D.length),D.push("");else{r!==M&&D.push(g(f.substring(r)));break}m&&1<D.length&&Ka.throwNoconcat(f);if(!h||H.length){var P=function(a){for(var b=0,c=H.length;b<c;b++){if(q&&w(a[b]))return;D[S[b]]=a[b]}return D.join("")};return Q(function(a){var b=0,c=H.length,e=Array(c);try{for(;b<c;b++)e[b]=B[b](a);return P(e)}catch(g){d(Ka.interr(f,
g))}},{exp:f,expressions:H,$$watchDelegate:function(a,b){var c;return a.$watchGroup(B,function(d,e){var f=P(d);E(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=b.length,k=a.length,m=new RegExp(b.replace(/./g,f),"g"),q=new RegExp(a.replace(/./g,f),"g");h.startSymbol=function(){return b};h.endSymbol=function(){return a};return h}]}function $e(){this.$get=["$rootScope","$window","$q","$$q",function(b,a,c,d){function e(e,h,l,k){var m=4<arguments.length,q=m?sa.call(arguments,4):[],t=a.setInterval,y=a.clearInterval,
C=0,N=z(k)&&!k,u=(N?d:c).defer(),p=u.promise;l=z(l)?l:0;p.then(null,null,m?function(){e.apply(null,q)}:e);p.$$intervalId=t(function(){u.notify(C++);0<l&&C>=l&&(u.resolve(C),y(p.$$intervalId),delete f[p.$$intervalId]);N||b.$apply()},h);f[p.$$intervalId]=u;return p}var f={};e.cancel=function(b){return b&&b.$$intervalId in f?(f[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete f[b.$$intervalId],!0):!1};return e}]}function fe(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",
GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(b){return 1===b?"one":"other"}}}}function bc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=nb(b[a]);return b.join("/")}function gd(b,a){var c=Aa(b);a.$$protocol=c.protocol;
a.$$host=c.hostname;a.$$port=X(c.port)||Sf[c.protocol]||null}function hd(b,a){var c="/"!==b.charAt(0);c&&(b="/"+b);var d=Aa(b);a.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname);a.$$search=yc(d.search);a.$$hash=decodeURIComponent(d.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ya(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ia(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Bb(b){return b.replace(/(#.+)|#$/,
"$1")}function cc(b){return b.substr(0,Ia(b).lastIndexOf("/")+1)}function dc(b,a){this.$$html5=!0;a=a||"";var c=cc(b);gd(b,this);this.$$parse=function(a){var b=ya(c,a);if(!L(b))throw Cb("ipthprfx",a,c);hd(b,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Qb(this.$$search),b=this.$$hash?"#"+nb(this.$$hash):"";this.$$url=bc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;(f=ya(b,d))!==s?(g=f,g=(f=ya(a,f))!==s?c+(ya("/",f)||f):b+g):(f=ya(c,d))!==s?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function ec(b,a){var c=cc(b);gd(b,this);this.$$parse=function(d){d=ya(b,d)||ya(c,d);var e;"#"===d.charAt(0)?(e=ya(a,d),w(e)&&(e=d)):e=this.$$html5?d:"";hd(e,this);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?
"#"+nb(this.$$hash):"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ia(b)==Ia(a)?(this.$$parse(a),!0):!1}}function id(b,a){this.$$html5=!0;ec.apply(this,arguments);var c=cc(b);this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;b==Ia(d)?f=d:(g=ya(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Qb(this.$$search),e=this.$$hash?"#"+nb(this.$$hash):
"";this.$$url=bc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function Db(b){return function(){return this[b]}}function jd(b,a){return function(c){if(w(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ef(){var b="",a={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return $a(b)?(a.enabled=b,this):F(b)?($a(b.enabled)&&(a.enabled=b.enabled),$a(b.requireBase)&&(a.requireBase=b.requireBase),$a(b.rewriteLinks)&&
(a.rewriteLinks=b.rewriteLinks),this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=k.url(),f=k.$$state;try{d.url(a,b,c),k.$$state=d.state()}catch(g){throw k.url(e),k.$$state=f,g;}}function l(a,b){c.$broadcast("$locationChangeSuccess",k.absUrl(),a,k.$$state,b)}var k,m;m=d.baseHref();var q=d.url(),t;if(a.enabled){if(!m&&a.requireBase)throw Cb("nobase");t=q.substring(0,q.indexOf("/",q.indexOf("//")+2))+(m||"/");m=e.history?dc:id}else t=
Ia(q),m=ec;k=new m(t,"#"+b);k.$$parseLinkUrl(q,q);k.$$state=d.state();var y=/^\s*(javascript|mailto):/i;f.on("click",function(b){if(a.rewriteLinks&&!b.ctrlKey&&!b.metaKey&&!b.shiftKey&&2!=b.which&&2!=b.button){for(var e=A(b.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),l=e.attr("href")||e.attr("xlink:href");F(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=Aa(h.animVal).href);y.test(h)||!h||e.attr("target")||b.isDefaultPrevented()||!k.$$parseLinkUrl(h,
l)||(b.preventDefault(),k.absUrl()!=d.url()&&(c.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});Bb(k.absUrl())!=Bb(q)&&d.url(k.absUrl(),!0);var C=!0;d.onUrlChange(function(a,b){c.$evalAsync(function(){var d=k.absUrl(),e=k.$$state,f;k.$$parse(a);k.$$state=b;f=c.$broadcast("$locationChangeStart",a,d,b,e).defaultPrevented;k.absUrl()===a&&(f?(k.$$parse(d),k.$$state=e,h(d,!1,e)):(C=!1,l(d,e)))});c.$$phase||c.$digest()});c.$watch(function(){var a=Bb(d.url()),b=Bb(k.absUrl()),f=d.state(),g=k.$$replace,
m=a!==b||k.$$html5&&e.history&&f!==k.$$state;if(C||m)C=!1,c.$evalAsync(function(){var b=k.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,k.$$state,f).defaultPrevented;k.absUrl()===b&&(d?(k.$$parse(a),k.$$state=f):(m&&h(b,g,f===k.$$state?null:k.$$state),l(a,f)))});k.$$replace=!1});return k}]}function ff(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?
"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(l){}return a?function(){var a=[];n(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function Ba(b,a){if("__defineGetter__"===
b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw ca("isecfld",a);return b}function oa(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b.window===b)throw ca("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw ca("isecdom",a);if(b===Object)throw ca("isecobj",a);}return b}function kd(b,a){if(b){if(b.constructor===b)throw ca("isecfn",a);if(b===Tf||b===Uf||b===Vf)throw ca("isecff",a);}}function Wf(b,a){return"undefined"!==typeof b?
b:a}function ld(b,a){return"undefined"===typeof b?a:"undefined"===typeof a?b:b+a}function U(b,a){var c,d;switch(b.type){case r.Program:c=!0;n(b.body,function(b){U(b.expression,a);c=c&&b.expression.constant});b.constant=c;break;case r.Literal:b.constant=!0;b.toWatch=[];break;case r.UnaryExpression:U(b.argument,a);b.constant=b.argument.constant;b.toWatch=b.argument.toWatch;break;case r.BinaryExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.left.toWatch.concat(b.right.toWatch);
break;case r.LogicalExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=b.constant?[]:[b];break;case r.ConditionalExpression:U(b.test,a);U(b.alternate,a);U(b.consequent,a);b.constant=b.test.constant&&b.alternate.constant&&b.consequent.constant;b.toWatch=b.constant?[]:[b];break;case r.Identifier:b.constant=!1;b.toWatch=[b];break;case r.MemberExpression:U(b.object,a);b.computed&&U(b.property,a);b.constant=b.object.constant&&(!b.computed||b.property.constant);b.toWatch=
[b];break;case r.CallExpression:c=b.filter?!a(b.callee.name).$stateful:!1;d=[];n(b.arguments,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=b.filter&&!a(b.callee.name).$stateful?d:[b];break;case r.AssignmentExpression:U(b.left,a);U(b.right,a);b.constant=b.left.constant&&b.right.constant;b.toWatch=[b];break;case r.ArrayExpression:c=!0;d=[];n(b.elements,function(b){U(b,a);c=c&&b.constant;b.constant||d.push.apply(d,b.toWatch)});b.constant=c;b.toWatch=
d;break;case r.ObjectExpression:c=!0;d=[];n(b.properties,function(b){U(b.value,a);c=c&&b.value.constant;b.value.constant||d.push.apply(d,b.value.toWatch)});b.constant=c;b.toWatch=d;break;case r.ThisExpression:b.constant=!1,b.toWatch=[]}}function md(b){if(1==b.length){b=b[0].expression;var a=b.toWatch;return 1!==a.length?a:a[0]!==b?a:s}}function nd(b){return b.type===r.Identifier||b.type===r.MemberExpression}function od(b){if(1===b.body.length&&nd(b.body[0].expression))return{type:r.AssignmentExpression,
left:b.body[0].expression,right:{type:r.NGValueParameter},operator:"="}}function pd(b){return 0===b.body.length||1===b.body.length&&(b.body[0].expression.type===r.Literal||b.body[0].expression.type===r.ArrayExpression||b.body[0].expression.type===r.ObjectExpression)}function qd(b,a){this.astBuilder=b;this.$filter=a}function rd(b,a){this.astBuilder=b;this.$filter=a}function Eb(b,a,c,d){oa(b,d);a=a.split(".");for(var e,f=0;1<a.length;f++){e=Ba(a.shift(),d);var g=oa(b[e],d);g||(g={},b[e]=g);b=g}e=Ba(a.shift(),
d);oa(b[e],d);return b[e]=c}function Fb(b){return"constructor"==b}function fc(b){return E(b.valueOf)?b.valueOf():Xf.call(b)}function gf(){var b=ga(),a=ga();this.$get=["$filter","$sniffer",function(c,d){function e(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=fc(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function f(a,b,c,d,f){var g=d.inputs,h;if(1===g.length){var l=e,g=g[0];return a.$watch(function(a){var b=g(a);e(b,l)||(h=d(a,s,s,[b]),l=b&&fc(b));return h},b,c,f)}for(var k=[],m=[],
q=0,n=g.length;q<n;q++)k[q]=e,m[q]=null;return a.$watch(function(a){for(var b=!1,c=0,f=g.length;c<f;c++){var l=g[c](a);if(b||(b=!e(l,k[c])))m[c]=l,k[c]=l&&fc(l)}b&&(h=d(a,s,s,m));return h},b,c,f)}function g(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;E(b)&&b.apply(this,arguments);z(a)&&d.$$postDigest(function(){z(f)&&e()})},c)}function h(a,b,c,d){function e(a){var b=!0;n(a,function(a){z(a)||(b=!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,
c,d){g=a;E(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function l(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){E(b)&&b.apply(this,arguments);e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,c=c!==h&&c!==g?function(c,d,e,f){e=a(c,d,e,f);return b(e,c,d)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return z(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==f?c.$$watchDelegate=a.$$watchDelegate:b.$stateful||(c.$$watchDelegate=f,c.inputs=
a.inputs?a.inputs:[a]);return c}var m={csp:d.csp,expensiveChecks:!1},q={csp:d.csp,expensiveChecks:!0};return function(d,e,C){var n,u,p;switch(typeof d){case "string":p=d=d.trim();var r=C?a:b;n=r[p];n||(":"===d.charAt(0)&&":"===d.charAt(1)&&(u=!0,d=d.substring(2)),C=C?q:m,n=new gc(C),n=(new hc(n,c,C)).parse(d),n.constant?n.$$watchDelegate=l:u?n.$$watchDelegate=n.literal?h:g:n.inputs&&(n.$$watchDelegate=f),r[p]=n);return k(n,e);case "function":return k(d,e);default:return v}}}]}function jf(){this.$get=
["$rootScope","$exceptionHandler",function(b,a){return sd(function(a){b.$evalAsync(a)},a)}]}function kf(){this.$get=["$browser","$exceptionHandler",function(b,a){return sd(function(a){b.defer(a)},a)}]}function sd(b,a){function c(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function d(){this.$$state={status:0}}function e(a,b){return function(c){b.call(a,c)}}function f(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,b(function(){var b,d,e;e=c.pending;
c.processScheduled=!1;c.pending=s;for(var f=0,g=e.length;f<g;++f){d=e[f][0];b=e[f][c.status];try{E(b)?d.resolve(b(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),a(h)}}}))}function g(){this.promise=new d;this.resolve=e(this,this.resolve);this.reject=e(this,this.reject);this.notify=e(this,this.notify)}var h=I("$q",TypeError);d.prototype={then:function(a,b,c){var d=new g;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&
f(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}};g.prototype={resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(h("qcycle",a)):this.$$resolve(a))},$$resolve:function(b){var d,e;e=c(this,this.$$resolve,this.$$reject);try{if(F(b)||E(b))d=b&&b.then;E(d)?(this.promise.$$state.status=-1,d.call(b,e[0],e[1],this.notify)):(this.promise.$$state.value=
b,this.promise.$$state.status=1,f(this.promise.$$state))}catch(g){e[1](g),a(g)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=2;f(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&b(function(){for(var b,e,f=0,g=d.length;f<g;f++){e=d[f][0];b=d[f][3];try{e.notify(E(b)?b(c):c)}catch(h){a(h)}}})}};var l=function(a,b){var c=new g;b?c.resolve(a):
c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{E(c)&&(d=c())}catch(e){return l(e,!1)}return d&&E(d.then)?d.then(function(){return l(a,b)},function(a){return l(a,!1)}):l(a,b)},m=function(a,b,c,d){var e=new g;e.resolve(a);return e.promise.then(b,c,d)},q=function y(a){if(!E(a))throw h("norslvr",a);if(!(this instanceof y))return new y(a);var b=new g;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};q.defer=function(){return new g};q.reject=function(a){var b=new g;
b.reject(a);return b.promise};q.when=m;q.resolve=m;q.all=function(a){var b=new g,c=0,d=K(a)?[]:{};n(a,function(a,e){c++;m(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return q}function tf(){this.$get=["$window","$timeout",function(b,a){function c(){for(var a=0;a<m.length;a++){var b=m[a];b&&(m[a]=null,b())}k=m.length=0}function d(a){var b=m.length;k++;m.push(a);0===b&&(l=h(c));return function(){0<=
b&&(b=m[b]=null,0===--k&&l&&(l(),l=null,m.length=0))}}var e=b.requestAnimationFrame||b.webkitRequestAnimationFrame,f=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,g=!!e,h=g?function(a){var b=e(a);return function(){f(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};d.supported=g;var l,k=0,m=[];return d}]}function hf(){function b(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners=
{};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++mb;this.$$ChildScope=null}b.prototype=a;return b}var a=10,c=I("$rootScope"),d=null,e=null;this.digestTtl=function(b){arguments.length&&(a=b);return a};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(f,g,h,l){function k(a){a.currentScope.$$destroyed=!0}function m(){this.$id=++mb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=
!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function q(a){if(p.$$phase)throw c("inprog",p.$$phase);p.$$phase=a}function t(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function y(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function r(){}function s(){for(;H.length;)try{H.shift()()}catch(a){g(a)}e=null}function u(){null===e&&(e=l.defer(function(){p.$apply(s)}))}m.prototype={constructor:m,
$new:function(a,c){var d;c=c||this;a?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=b(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d;(a||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,c,e){var f=h(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,c,f,a);var g=this,l=g.$$watchers,k={fn:b,last:r,get:f,exp:e||a,eq:!!c};d=null;E(b)||(k.fn=v);l||
(l=g.$$watchers=[]);l.unshift(k);t(this,1);return function(){0<=ab(l,k)&&t(g,-1);d=null}},$watchGroup:function(a,b){function c(){h=!1;l?(l=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,l=!0;if(!a.length){var k=!0;g.$evalAsync(function(){k&&b(e,e,g)});return function(){k=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});n(a,function(a,b){var l=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(l)});return function(){for(;f.length;)f.shift()()}},
$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!w(e)){if(F(e))if(Da(e))for(f!==q&&(f=q,n=f.length=0,k++),a=e.length,n!==a&&(k++,f.length=n=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(k++,f[b]=g);else{f!==t&&(f=t={},n=0,k++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(k++,f[b]=g)):(n++,f[b]=g,k++));if(n>a)for(b in k++,f)e.hasOwnProperty(b)||(n--,delete f[b])}else f!==e&&(f=e,k++);return k}}c.$stateful=!0;var d=this,e,f,g,l=1<
b.length,k=0,m=h(a,c),q=[],t={},p=!0,n=0;return this.$watch(m,function(){p?(p=!1,b(e,e,d)):b(e,g,d);if(l)if(F(e))if(Da(e)){g=Array(e.length);for(var a=0;a<e.length;a++)g[a]=e[a]}else for(a in g={},e)Wa.call(e,a)&&(g[a]=e[a]);else g=e})},$digest:function(){var b,f,h,k,m,t,n=a,y,u=[],H,w;q("$digest");l.$$checkUrlChange();this===p&&null!==e&&(l.defer.cancel(e),s());d=null;do{t=!1;for(y=this;x.length;){try{w=x.shift(),w.scope.$eval(w.expression,w.locals)}catch(v){g(v)}d=null}a:do{if(k=y.$$watchers)for(m=
k.length;m--;)try{if(b=k[m])if((f=b.get(y))!==(h=b.last)&&!(b.eq?ka(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))t=!0,d=b,b.last=b.eq?fa(f,null):f,b.fn(f,h===r?f:h,y),5>n&&(H=4-n,u[H]||(u[H]=[]),u[H].push({msg:E(b.exp)?"fn: "+(b.exp.name||b.exp.toString()):b.exp,newVal:f,oldVal:h}));else if(b===d){t=!1;break a}}catch(A){g(A)}if(!(k=y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(k=y.$$nextSibling);)y=y.$parent}while(y=k);if((t||x.length)&&!n--)throw p.$$phase=
null,c("infdig",a,u);}while(t||x.length);for(p.$$phase=null;z.length;)try{z.shift()()}catch(F){g(F)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===p&&l.$$applicationDestroyed();t(this,-this.$$watchersCount);for(var b in this.$$listenerCount)y(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=
this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=v;this.$on=this.$watch=this.$watchGroup=function(){return v};this.$$listeners={};this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(a,b){return h(a)(this,b)},$evalAsync:function(a,b){p.$$phase||x.length||l.defer(function(){x.length&&p.$digest()});x.push({scope:this,
expression:a,locals:b})},$$postDigest:function(a){z.push(a)},$apply:function(a){try{return q("$apply"),this.$eval(a)}catch(b){g(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw g(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&H.push(b);u()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);
-1!==d&&(c[d]=null,y(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,f=!1,h={name:a,targetScope:e,stopPropagation:function(){f=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},l=bb([h],arguments,1),k,m;do{d=e.$$listeners[a]||c;h.currentScope=e;k=0;for(m=d.length;k<m;k++)if(d[k])try{d[k].apply(null,l)}catch(q){g(q)}else d.splice(k,1),k--,m--;if(f)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,
targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var f=bb([e],arguments,1),h,l;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(l=d.length;h<l;h++)if(d[h])try{d[h].apply(null,f)}catch(k){g(k)}else d.splice(h,1),h--,l--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var p=new m,x=p.$$asyncQueue=[],z=p.$$postDigestQueue=
[],H=p.$$applyAsyncQueue=[];return p}]}function ge(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;f=Aa(c).href;return""===f||f.match(e)?c:"unsafe:"+f}}}function Yf(b){if("self"===b)return b;if(L(b)){if(-1<b.indexOf("***"))throw Ca("iwcard",b);b=td(b).replace("\\*\\*",
".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+b+"$")}if(Ya(b))return new RegExp("^"+b.source+"$");throw Ca("imatcher");}function ud(b){var a=[];z(b)&&n(b,function(b){a.push(Yf(b))});return a}function mf(){this.SCE_CONTEXTS=pa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=ud(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=ud(b));return a};this.$get=["$injector",function(c){function d(a,b){return"self"===a?fd(b):!!a.exec(b.href)}function e(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw Ca("unsafe");};c.has("$sanitize")&&(f=c.get("$sanitize"));var g=e(),h={};h[pa.HTML]=e(g);h[pa.CSS]=e(g);h[pa.URL]=e(g);h[pa.JS]=e(g);h[pa.RESOURCE_URL]=e(h[pa.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw Ca("icontext",
a,b);if(null===b||b===s||""===b)return b;if("string"!==typeof b)throw Ca("itype",a);return new c(b)},getTrusted:function(c,e){if(null===e||e===s||""===e)return e;var g=h.hasOwnProperty(c)?h[c]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(c===pa.RESOURCE_URL){var g=Aa(e.toString()),q,t,n=!1;q=0;for(t=b.length;q<t;q++)if(d(b[q],g)){n=!0;break}if(n)for(q=0,t=a.length;q<t;q++)if(d(a[q],g)){n=!1;break}if(n)return e;throw Ca("insecurl",e.toString());}if(c===pa.HTML)return f(e);throw Ca("unsafe");
},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function lf(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sceDelegate",function(a,c){if(b&&8>Ta)throw Ca("iequirks");var d=ia(pa);d.isEnabled=function(){return b};d.trustAs=c.trustAs;d.getTrusted=c.getTrusted;d.valueOf=c.valueOf;b||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=Xa);d.parseAs=function(b,c){var e=a(c);return e.literal&&e.constant?e:a(c,function(a){return d.getTrusted(b,
a)})};var e=d.parseAs,f=d.getTrusted,g=d.trustAs;n(pa,function(a,b){var c=G(b);d[gb("parse_as_"+c)]=function(b){return e(a,b)};d[gb("get_trusted_"+c)]=function(b){return f(a,b)};d[gb("trust_as_"+c)]=function(b){return g(a,b)}});return d}]}function nf(){this.$get=["$window","$document",function(b,a){var c={},d=X((/android (\d+)/.exec(G((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),f=a[0]||{},g,h=/^(Moz|webkit|ms)(?=[A-Z])/,l=f.body&&f.body.style,k=!1,m=!1;if(l){for(var q in l)if(k=
h.exec(q)){g=k[0];g=g.substr(0,1).toUpperCase()+g.substr(1);break}g||(g="WebkitOpacity"in l&&"webkit");k=!!("transition"in l||g+"Transition"in l);m=!!("animation"in l||g+"Animation"in l);!d||k&&m||(k=L(l.webkitTransition),m=L(l.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hasEvent:function(a){if("input"===a&&11>=Ta)return!1;if(w(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:eb(),vendorPrefix:g,transitions:k,animations:m,android:d}}]}function pf(){this.$get=
["$templateCache","$http","$q",function(b,a,c){function d(e,f){d.totalPendingRequests++;var g=a.defaults&&a.defaults.transformResponse;K(g)?g=g.filter(function(a){return a!==$b}):g===$b&&(g=null);return a.get(e,{cache:b,transformResponse:g})["finally"](function(){d.totalPendingRequests--}).then(function(a){b.put(e,a.data);return a.data},function(a){if(!f)throw ea("tpload",e,a.status,a.statusText);return c.reject(a)})}d.totalPendingRequests=0;return d}]}function qf(){this.$get=["$rootScope","$browser",
"$location",function(b,a,c){return{findBindings:function(a,b,c){a=a.getElementsByClassName("ng-binding");var g=[];n(a,function(a){var d=$.element(a).data("$binding");d&&n(d,function(d){c?(new RegExp("(^|\\s)"+td(b)+"(\\s|\\||$)")).test(d)&&g.push(a):-1!=d.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,c){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var l=a.querySelectorAll("["+g[h]+"model"+(c?"=":"*=")+'"'+b+'"]');if(l.length)return l}},getLocation:function(){return c.url()},
setLocation:function(a){a!==c.url()&&(c.url(a),b.$digest())},whenStable:function(b){a.notifyWhenNoOutstandingRequests(b)}}}]}function rf(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(b,a,c,d,e){function f(f,l,k){E(f)||(k=l,l=f,f=v);var m=sa.call(arguments,3),q=z(k)&&!k,t=(q?d:c).defer(),n=t.promise,r;r=a.defer(function(){try{t.resolve(f.apply(null,m))}catch(a){t.reject(a),e(a)}finally{delete g[n.$$timeoutId]}q||b.$apply()},l);n.$$timeoutId=r;g[r]=t;return n}var g={};
f.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return f}]}function Aa(b){Ta&&(Y.setAttribute("href",b),b=Y.href);Y.setAttribute("href",b);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function fd(b){b=
L(b)?Aa(b):b;return b.protocol===vd.protocol&&b.host===vd.host}function sf(){this.$get=ra(O)}function wd(b){function a(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=b[0]||{},d={},e="";return function(){var b,g,h,l,k;b=c.cookie||"";if(b!==e)for(e=b,b=e.split("; "),d={},h=0;h<b.length;h++)g=b[h],l=g.indexOf("="),0<l&&(k=a(g.substring(0,l)),d[k]===s&&(d[k]=a(g.substring(l+1))));return d}}function xf(){this.$get=wd}function Kc(b){function a(c,d){if(F(c)){var e={};n(c,function(b,c){e[c]=
a(c,b)});return e}return b.factory(c+"Filter",d)}this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];a("currency",xd);a("date",yd);a("filter",Zf);a("json",$f);a("limitTo",ag);a("lowercase",bg);a("number",zd);a("orderBy",Ad);a("uppercase",cg)}function Zf(){return function(b,a,c){if(!Da(b)){if(null==b)return b;throw I("filter")("notarray",b);}var d;switch(ic(a)){case "function":break;case "boolean":case "null":case "number":case "string":d=!0;case "object":a=
dg(a,c,d);break;default:return b}return Array.prototype.filter.call(b,a)}}function dg(b,a,c){var d=F(b)&&"$"in b;!0===a?a=ka:E(a)||(a=function(a,b){if(w(a))return!1;if(null===a||null===b)return a===b;var c;!(c=F(b))&&(c=F(a))&&(c=a,c=!(E(c.toString)&&c.toString!==Object.prototype.toString));if(c)return!1;a=G(""+a);b=G(""+b);return-1!==a.indexOf(b)});return function(e){return d&&!F(e)?La(e,b.$,a,!1):La(e,b,a,c)}}function La(b,a,c,d,e){var f=ic(b),g=ic(a);if("string"===g&&"!"===a.charAt(0))return!La(b,
a.substring(1),c,d);if(K(b))return b.some(function(b){return La(b,a,c,d)});switch(f){case "object":var h;if(d){for(h in b)if("$"!==h.charAt(0)&&La(b[h],a,c,!0))return!0;return e?!1:La(b,a,c,!1)}if("object"===g){for(h in a)if(e=a[h],!E(e)&&!w(e)&&(f="$"===h,!La(f?b:b[h],e,c,f,f)))return!1;return!0}return c(b,a);case "function":return!1;default:return c(b,a)}}function ic(b){return null===b?"null":typeof b}function xd(b){var a=b.NUMBER_FORMATS;return function(b,d,e){w(d)&&(d=a.CURRENCY_SYM);w(e)&&(e=
a.PATTERNS[1].maxFrac);return null==b?b:Bd(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,e).replace(/\u00A4/g,d)}}function zd(b){var a=b.NUMBER_FORMATS;return function(b,d){return null==b?b:Bd(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Bd(b,a,c,d,e){if(F(b))return"";var f=0>b;b=Math.abs(b);var g=Infinity===b;if(!g&&!isFinite(b))return"";var h=b+"",l="",k=!1,m=[];g&&(l="\u221e");if(!g&&-1!==h.indexOf("e")){var q=h.match(/([\d\.]+)e(-?)(\d+)/);q&&"-"==q[2]&&q[3]>e+1?b=0:(l=h,k=!0)}if(g||k)0<
e&&1>b&&(l=b.toFixed(e),b=parseFloat(l));else{g=(h.split(Cd)[1]||"").length;w(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);var g=(""+b).split(Cd),h=g[0],g=g[1]||"",q=0,t=a.lgSize,n=a.gSize;if(h.length>=t+n)for(q=h.length-t,k=0;k<q;k++)0===(q-k)%n&&0!==k&&(l+=c),l+=h.charAt(k);for(k=q;k<h.length;k++)0===(h.length-k)%t&&0!==k&&(l+=c),l+=h.charAt(k);for(;g.length<e;)g+="0";e&&"0"!==e&&(l+=d+g.substr(0,e))}0===b&&(f=!1);m.push(f?a.negPre:a.posPre,
l,f?a.negSuf:a.posSuf);return m.join("")}function Gb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Gb(e,a,d)}}function Hb(b,a){return function(c,d){var e=c["get"+b](),f=qb(a?"SHORT"+b:b);return d[f][e]}}function Dd(b){var a=(new Date(b,0,1)).getDay();return new Date(b,0,(4>=a?5:12)-a)}function Ed(b){return function(a){var c=Dd(a.getFullYear());
a=+new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))-+c;a=1+Math.round(a/6048E5);return Gb(a,b)}}function jc(b,a){return 0>=b.getFullYear()?a.ERAS[0]:a.ERAS[1]}function yd(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,l=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=X(b[9]+b[10]),g=X(b[9]+b[11]));h.call(a,X(b[1]),X(b[2])-1,X(b[3]));f=X(b[4]||0)-f;g=X(b[5]||0)-g;h=X(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,f,g,
h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e,f){var g="",h=[],l,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;L(c)&&(c=eg.test(c)?X(c):a(c));V(c)&&(c=new Date(c));if(!da(c)||!isFinite(c.getTime()))return c;for(;e;)(k=fg.exec(e))?(h=bb(h,k,1),e=h.pop()):(h.push(e),e=null);var m=c.getTimezoneOffset();f&&(m=wc(f,c.getTimezoneOffset()),c=Pb(c,f,!0));n(h,function(a){l=gg[a];g+=l?l(c,b.DATETIME_FORMATS,m):
a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function $f(){return function(b,a){w(a)&&(a=2);return cb(b,a)}}function ag(){return function(b,a,c){a=Infinity===Math.abs(Number(a))?Number(a):X(a);if(isNaN(a))return b;V(b)&&(b=b.toString());if(!K(b)&&!L(b))return b;c=!c||isNaN(c)?0:X(c);c=0>c&&c>=-b.length?b.length+c:c;return 0<=a?b.slice(c,c+a):0===c?b.slice(a,b.length):b.slice(Math.max(0,c+a),c)}}function Ad(b){return function(a,c,d){function e(a,b){return b?function(b,c){return a(c,b)}:
a}function f(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function g(a){return null===a?"null":"function"===typeof a.valueOf&&(a=a.valueOf(),f(a))||"function"===typeof a.toString&&(a=a.toString(),f(a))?a:""}function h(a,b){var c=typeof a,d=typeof b;c===d&&"object"===c&&(a=g(a),b=g(b));return c===d?("string"===c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Da(a))return a;c=K(c)?c:[c];0===c.length&&(c=["+"]);c=c.map(function(a){var c=
!1,d=a||Xa;if(L(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);if(""===a)return e(h,c);d=b(a);if(d.constant){var f=d();return e(function(a,b){return h(a[f],b[f])},c)}}return e(function(a,b){return h(d(a),d(b))},c)});return sa.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Ma(b){E(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ra(b)}function Fd(b,a,c,d,e){var f=this,g=[],h=f.$$parentForm=b.parent().controller("form")||
Ib;f.$error={};f.$$success={};f.$pending=s;f.$name=e(a.name||a.ngForm||"")(c);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;h.$addControl(f);f.$rollbackViewValue=function(){n(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){n(g,function(a){a.$commitViewValue()})};f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a)};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&
f[a.$name]===a&&delete f[a.$name];n(f.$pending,function(b,c){f.$setValidity(c,null,a)});n(f.$error,function(b,c){f.$setValidity(c,null,a)});n(f.$$success,function(b,c){f.$setValidity(c,null,a)});ab(g,a)};Gd({ctrl:this,$element:b,set:function(a,b,c){var d=a[b];d?-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(ab(d,c),0===d.length&&delete a[b])},parentForm:h,$animate:d});f.$setDirty=function(){d.removeClass(b,Ua);d.addClass(b,Jb);f.$dirty=!0;f.$pristine=!1;h.$setDirty()};
f.$setPristine=function(){d.setClass(b,Ua,Jb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;n(g,function(a){a.$setPristine()})};f.$setUntouched=function(){n(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){d.addClass(b,"ng-submitted");f.$submitted=!0;h.$setSubmitted()}}function kc(b){b.$formatters.push(function(a){return b.$isEmpty(a)?a:a.toString()})}function jb(b,a,c,d,e,f){var g=G(a[0].type);if(!e.android){var h=!1;a.on("compositionstart",function(a){h=!0});a.on("compositionend",
function(){h=!1;l()})}var l=function(b){k&&(f.defer.cancel(k),k=null);if(!h){var e=a.val();b=b&&b.type;"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=T(e));(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,b)}};if(e.hasEvent("input"))a.on("input",l);else{var k,m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};a.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))a.on("paste cut",m)}a.on("change",
l);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)}}function Kb(b,a){return function(c,d){var e,f;if(da(c))return c;if(L(c)){'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1));if(hg.test(c))return new Date(c);b.lastIndex=0;if(e=b.exec(c))return e.shift(),f=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},n(e,function(b,c){c<
a.length&&(f[a[c]]=+b)}),new Date(f.yyyy,f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function kb(b,a,c,d){return function(e,f,g,h,l,k,m){function q(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function t(a){return z(a)?da(a)?a:c(a):s}Hd(e,f,g,h);jb(e,f,g,h,l,k);var n=h&&h.$options&&h.$options.timezone,r;h.$$parserName=b;h.$parsers.push(function(b){return h.$isEmpty(b)?null:a.test(b)?(b=c(b,r),n&&(b=Pb(b,n)),b):s});h.$formatters.push(function(a){if(a&&!da(a))throw Lb("datefmt",
a);if(q(a))return(r=a)&&n&&(r=Pb(r,n,!0)),m("date")(a,d,n);r=null;return""});if(z(g.min)||g.ngMin){var N;h.$validators.min=function(a){return!q(a)||w(N)||c(a)>=N};g.$observe("min",function(a){N=t(a);h.$validate()})}if(z(g.max)||g.ngMax){var u;h.$validators.max=function(a){return!q(a)||w(u)||c(a)<=u};g.$observe("max",function(a){u=t(a);h.$validate()})}}}function Hd(b,a,c,d){(d.$$hasNativeValidators=F(a[0].validity))&&d.$parsers.push(function(b){var c=a.prop("validity")||{};return c.badInput&&!c.typeMismatch?
s:b})}function Id(b,a,c,d,e){if(z(d)){b=b(d);if(!b.constant)throw I("ngModel")("constexpr",c,d);return b(a)}return e}function lc(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return K(a)?(n(a,function(a){b=b.concat(e(a))}),b):L(a)?a.split(" "):F(a)?(n(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function l(a,
b){var c=g.data("$classCounts")||ga(),d=[];n(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function k(b){if(!0===a||f.$index%2===a){var k=e(b||[]);if(!m){var n=l(k,1);h.$addClass(n)}else if(!ka(b,m)){var r=e(m),n=d(k,r),k=d(r,k),n=l(n,1),k=l(k,-1);n&&n.length&&c.addClass(g,n);k&&k.length&&c.removeClass(g,k)}}m=ia(b)}var m;f.$watch(h[b],k,!0);h.$observe("class",function(a){k(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,
d){var g=c&1;if(g!==(d&1)){var k=e(f.$eval(h[b]));g===a?(g=l(k,1),h.$addClass(g)):(g=l(k,-1),h.$removeClass(g))}})}}}]}function Gd(b){function a(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function c(b,c){b=b?"-"+Ac(b,"-"):"";a(lb+b,!0===c);a(Jd+b,!1===c)}var d=b.ctrl,e=b.$element,f={},g=b.set,h=b.unset,l=b.parentForm,k=b.$animate;f[Jd]=!(f[lb]=e.hasClass(lb));d.$setValidity=function(b,e,f){e===s?(d.$pending||(d.$pending={}),g(d.$pending,b,f)):(d.$pending&&h(d.$pending,
b,f),Kd(d.$pending)&&(d.$pending=s));$a(e)?e?(h(d.$error,b,f),g(d.$$success,b,f)):(g(d.$error,b,f),h(d.$$success,b,f)):(h(d.$error,b,f),h(d.$$success,b,f));d.$pending?(a(Ld,!0),d.$valid=d.$invalid=s,c("",null)):(a(Ld,!1),d.$valid=Kd(d.$error),d.$invalid=!d.$valid,c("",d.$valid));e=d.$pending&&d.$pending[b]?s:d.$error[b]?!1:d.$$success[b]?!0:null;c(b,e);l.$setValidity(b,e,d)}}function Kd(b){if(b)for(var a in b)if(b.hasOwnProperty(a))return!1;return!0}var ig=/^\/(.+)\/([a-z]*)$/,G=function(b){return L(b)?
b.toLowerCase():b},Wa=Object.prototype.hasOwnProperty,qb=function(b){return L(b)?b.toUpperCase():b},Ta,A,la,sa=[].slice,Lf=[].splice,jg=[].push,ta=Object.prototype.toString,rc=Object.getPrototypeOf,Ea=I("ng"),$=O.angular||(O.angular={}),fb,mb=0;Ta=W.documentMode;v.$inject=[];Xa.$inject=[];var K=Array.isArray,tc=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,T=function(b){return L(b)?b.trim():b},td=function(b){return b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08")},eb=function(){if(z(eb.isActive_))return eb.isActive_;var b=!(!W.querySelector("[ng-csp]")&&!W.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return eb.isActive_=b},ob=function(){if(z(ob.name_))return ob.name_;var b,a,c=Oa.length,d,e;for(a=0;a<c;++a)if(d=Oa[a],b=W.querySelector("["+d.replace(":","\\:")+"jq]")){e=b.getAttribute(d+"jq");break}return ob.name_=e},Oa=["ng-","data-ng-","ng:","x-ng-"],ae=/[A-Z]/g,Bc=!1,Rb,qa=1,Na=3,ee={full:"1.4.1",
major:1,minor:4,dot:1,codeName:"hyperionic-illumination"};R.expando="ng339";var hb=R.cache={},Df=1;R._data=function(b){return this.cache[b[this.expando]]||{}};var yf=/([\:\-\_]+(.))/g,zf=/^moz([A-Z])/,kg={mouseleave:"mouseout",mouseenter:"mouseover"},Ub=I("jqLite"),Cf=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Tb=/<|&#?\w+;/,Af=/<([\w:]+)/,Bf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,na={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,
"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};na.optgroup=na.option;na.tbody=na.tfoot=na.colgroup=na.caption=na.thead;na.th=na.td;var Pa=R.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===W.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),R(O).on("load",a))},toString:function(){var b=[];n(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=
b?A(this[b]):A(this[this.length+b])},length:0,push:jg,sort:[].sort,splice:[].splice},zb={};n("multiple selected checked disabled readOnly required open".split(" "),function(b){zb[G(b)]=b});var Sc={};n("input select option textarea button form details".split(" "),function(b){Sc[b]=!0});var Tc={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};n({data:Wb,removeData:tb,hasData:function(b){for(var a in hb[b.ng339])return!0;return!1}},function(b,a){R[a]=b});n({data:Wb,
inheritedData:yb,scope:function(b){return A.data(b,"$scope")||yb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A.data(b,"$isolateScope")||A.data(b,"$isolateScopeNoTemplate")},controller:Pc,injector:function(b){return yb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:vb,css:function(b,a,c){a=gb(a);if(z(c))b.style[a]=c;else return b.style[a]},attr:function(b,a,c){var d=b.nodeType;if(d!==Na&&2!==d&&8!==d)if(d=G(a),zb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,
d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:s;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?s:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(a,b){if(w(b)){var d=a.nodeType;return d===qa||d===Na?a.textContent:""}a.textContent=b}b.$dv="";return b}(),val:function(b,a){if(w(a)){if(b.multiple&&"select"===ua(b)){var c=[];n(b.options,function(a){a.selected&&c.push(a.value||
a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(w(a))return b.innerHTML;sb(b,!0);b.innerHTML=a},empty:Qc},function(b,a){R.prototype[a]=function(a,d){var e,f,g=this.length;if(b!==Qc&&(2==b.length&&b!==vb&&b!==Pc?a:d)===s){if(F(a)){for(e=0;e<g;e++)if(b===Wb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===s?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});n({removeData:tb,
on:function a(c,d,e,f){if(z(f))throw Ub("onargs");if(Lc(c)){var g=ub(c,!0);f=g.events;var h=g.handle;h||(h=g.handle=Gf(c,f));for(var g=0<=d.indexOf(" ")?d.split(" "):[d],l=g.length;l--;){d=g[l];var k=f[d];k||(f[d]=[],"mouseenter"===d||"mouseleave"===d?a(c,kg[d],function(a){var c=a.relatedTarget;c&&(c===this||this.contains(c))||h(a,d)}):"$destroy"!==d&&c.addEventListener(d,h,!1),k=f[d]);k.push(e)}}},off:Oc,one:function(a,c,d){a=A(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,
c){var d,e=a.parentNode;sb(a);n(new R(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];n(a.childNodes,function(a){a.nodeType===qa&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){var d=a.nodeType;if(d===qa||11===d){c=new R(c);for(var d=0,e=c.length;d<e;d++)a.appendChild(c[d])}},prepend:function(a,c){if(a.nodeType===qa){var d=a.firstChild;n(new R(c),function(c){a.insertBefore(c,d)})}},
wrap:function(a,c){c=A(c).eq(0).clone()[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:Xb,detach:function(a){Xb(a,!0)},after:function(a,c){var d=a,e=a.parentNode;c=new R(c);for(var f=0,g=c.length;f<g;f++){var h=c[f];e.insertBefore(h,d.nextSibling);d=h}},addClass:xb,removeClass:wb,toggleClass:function(a,c,d){c&&n(c.split(" "),function(c){var f=d;w(f)&&(f=!vb(a,c));(f?xb:wb)(a,c)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},
find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Vb,triggerHandler:function(a,c,d){var e,f,g=c.type||c,h=ub(a);if(h=(h=h&&h.events)&&h[g])e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:v,type:g,target:a},c.type&&(e=Q(e,
c)),c=ia(h),f=d?[e].concat(d):[e],n(c,function(c){e.isImmediatePropagationStopped()||c.apply(a,f)})}},function(a,c){R.prototype[c]=function(c,e,f){for(var g,h=0,l=this.length;h<l;h++)w(g)?(g=a(this[h],c,e,f),z(g)&&(g=A(g))):Nc(g,a(this[h],c,e,f));return z(g)?g:this};R.prototype.bind=R.prototype.on;R.prototype.unbind=R.prototype.off});Sa.prototype={put:function(a,c){this[Fa(a,this.nextUid)]=c},get:function(a){return this[Fa(a,this.nextUid)]},remove:function(a){var c=this[a=Fa(a,this.nextUid)];delete this[a];
return c}};var wf=[function(){this.$get=[function(){return Sa}]}],Vc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,lg=/,/,mg=/^\s*(_?)(\S+?)\1\s*$/,Uc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ga=I("$injector");db.$$annotate=function(a,c,d){var e;if("function"===typeof a){if(!(e=a.$inject)){e=[];if(a.length){if(c)throw L(d)&&d||(d=a.name||Hf(a)),Ga("strictdi",d);c=a.toString().replace(Uc,"");c=c.match(Vc);n(c[1].split(lg),function(a){a.replace(mg,function(a,c,d){e.push(d)})})}a.$inject=e}}else K(a)?(c=a.length-1,
Qa(a[c],"fn"),e=a.slice(0,c)):Qa(a,"fn",!0);return e};var Md=I("$animate"),Te=function(){this.$get=["$q","$$rAF",function(a,c){function d(){}d.all=v;d.chain=v;d.prototype={end:v,cancel:v,resume:v,pause:v,complete:v,then:function(d,f){return a(function(a){c(function(){a()})}).then(d,f)}};return d}]},Se=function(){var a=new Sa,c=[];this.$get=["$$AnimateRunner","$rootScope",function(d,e){function f(d,f,l){var k=a.get(d);k||(a.put(d,k={}),c.push(d));f&&n(f.split(" "),function(a){a&&(k[a]=!0)});l&&n(l.split(" "),
function(a){a&&(k[a]=!1)});1<c.length||e.$$postDigest(function(){n(c,function(c){var d=a.get(c);if(d){var e=If(c.attr("class")),f="",g="";n(d,function(a,c){a!==!!e[c]&&(a?f+=(f.length?" ":"")+c:g+=(g.length?" ":"")+c)});n(c,function(a){f&&xb(a,f);g&&wb(a,g)});a.remove(c)}});c.length=0})}return{enabled:v,on:v,off:v,pin:v,push:function(a,c,e,k){k&&k();e=e||{};e.from&&a.css(e.from);e.to&&a.css(e.to);(e.addClass||e.removeClass)&&f(a,e.addClass,e.removeClass);return new d}}}]},Re=["$provide",function(a){var c=
this;this.$$registeredAnimations=Object.create(null);this.register=function(d,e){if(d&&"."!==d.charAt(0))throw Md("notcsel",d);var f=d+"-animation";c.$$registeredAnimations[d.substr(1)]=f;a.factory(f,e)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Md("nongcls","ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function c(a,
d,e){if(e){var l;a:{for(l=0;l<e.length;l++){var k=e[l];if(1===k.nodeType){l=k;break a}}l=void 0}!l||l.parentNode||l.previousElementSibling||(e=null)}e?e.after(a):d.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(f,g,h,l){g=g&&A(g);h=h&&A(h);g=g||h.parent();c(f,g,h);return a.push(f,"enter",Ha(l))},move:function(f,g,h,l){g=g&&A(g);h=h&&A(h);g=g||h.parent();c(f,g,h);return a.push(f,"move",Ha(l))},leave:function(c,e){return a.push(c,"leave",
Ha(e),function(){c.remove()})},addClass:function(c,e,h){h=Ha(h);h.addClass=ib(h.addclass,e);return a.push(c,"addClass",h)},removeClass:function(c,e,h){h=Ha(h);h.removeClass=ib(h.removeClass,e);return a.push(c,"removeClass",h)},setClass:function(c,e,h,l){l=Ha(l);l.addClass=ib(l.addClass,e);l.removeClass=ib(l.removeClass,h);return a.push(c,"setClass",l)},animate:function(c,e,h,l,k){k=Ha(k);k.from=k.from?Q(k.from,e):e;k.to=k.to?Q(k.to,h):h;k.tempClasses=ib(k.tempClasses,l||"ng-inline-animate");return a.push(c,
"animate",k)}}}]}],ea=I("$compile");Dc.$inject=["$provide","$$sanitizeUriProvider"];var Yc=/^((?:x|data)[\:\-_])/i,Mf=I("$controller"),Wc=/^(\S+)(\s+as\s+(\w+))?$/,bd="application/json",ac={"Content-Type":bd+";charset=utf-8"},Of=/^\[|^\{(?!\{)/,Pf={"[":/]$/,"{":/}$/},Nf=/^\)\]\}',?\n/,Ka=$.$interpolateMinErr=I("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,c){return Ka("interr",a,c.toString())};var ng=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Sf={http:80,https:443,
ftp:21},Cb=I("$location"),og={$$html5:!1,$$replace:!1,absUrl:Db("$$absUrl"),url:function(a){if(w(a))return this.$$url;var c=ng.exec(a);(c[1]||""===a)&&this.path(decodeURIComponent(c[1]));(c[2]||c[1]||""===a)&&this.search(c[3]||"");this.hash(c[5]||"");return this},protocol:Db("$$protocol"),host:Db("$$host"),port:Db("$$port"),path:jd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(L(a)||
V(a))a=a.toString(),this.$$search=yc(a);else if(F(a))a=fa(a,{}),n(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Cb("isrcharg");break;default:w(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:jd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};n([id,ec,dc],function(a){a.prototype=Object.create(og);a.prototype.state=function(c){if(!arguments.length)return this.$$state;if(a!==dc||!this.$$html5)throw Cb("nostate");
this.$$state=w(c)?null:c;return this}});var ca=I("$parse"),Tf=Function.prototype.call,Uf=Function.prototype.apply,Vf=Function.prototype.bind,Mb=ga();n("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Mb[a]=!0});var pg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},gc=function(a){this.options=a};gc.prototype={constructor:gc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);
else if(this.isNumber(a)||"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(a))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var c=a+this.peek(),d=c+this.peek(2),e=Mb[c],f=Mb[d];Mb[a]||e||f?(a=f?d:e?c:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},
is:function(a,c){return-1!==c.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+
this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ca("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=G(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:c,
text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var c=this.text.charAt(this.index);if(!this.isIdent(c)&&!this.isNumber(c))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||
this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=pg[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,constant:!0,value:d});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var r=function(a,c){this.lexer=a;this.options=c};r.Program="Program";r.ExpressionStatement="ExpressionStatement";r.AssignmentExpression="AssignmentExpression";r.ConditionalExpression="ConditionalExpression";
r.LogicalExpression="LogicalExpression";r.BinaryExpression="BinaryExpression";r.UnaryExpression="UnaryExpression";r.CallExpression="CallExpression";r.MemberExpression="MemberExpression";r.Identifier="Identifier";r.Literal="Literal";r.ArrayExpression="ArrayExpression";r.Property="Property";r.ObjectExpression="ObjectExpression";r.ThisExpression="ThisExpression";r.NGValueParameter="NGValueParameter";r.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&
this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:r.Program,body:a}},expressionStatement:function(){return{type:r.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary();this.expect("=")&&(a={type:r.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),c,d;return this.expect("?")&&(c=this.expression(),this.consume(":"))?(d=this.expression(),{type:r.ConditionalExpression,test:a,alternate:c,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:r.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=
this.equality();this.expect("&&");)a={type:r.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),c;c=this.expect("==","!=","===","!==");)a={type:r.BinaryExpression,operator:c.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),c;c=this.expect("<",">","<=",">=");)a={type:r.BinaryExpression,operator:c.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),
c;c=this.expect("+","-");)a={type:r.BinaryExpression,operator:c.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a={type:r.BinaryExpression,operator:c.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:r.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):
this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=fa(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var c;c=this.expect("(","[",".");)"("===c.text?(a={type:r.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===c.text?(a={type:r.MemberExpression,object:a,property:this.expression(),
computed:!0},this.consume("]")):"."===c.text?a={type:r.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var c={type:r.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.expression());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||
this.throwError("is not a valid identifier",a);return{type:r.Identifier,name:a.text}},constant:function(){return{type:r.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:r.ArrayExpression,elements:a}},object:function(){var a=[],c;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;c={type:r.Property,kind:"init"};this.peek().constant?
c.key=this.constant():this.peek().identifier?c.key=this.identifier():this.throwError("invalid key",this.peek());this.consume(":");c.value=this.expression();a.push(c)}while(this.expect(","))}this.consume("}");return{type:r.ObjectExpression,properties:a}},throwError:function(a,c){throw ca("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var c=this.expect(a);c||this.throwError("is unexpected, expecting ["+a+
"]",this.peek());return c},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){return this.peekAhead(0,a,c,d,e)},peekAhead:function(a,c,d,e,f){if(this.tokens.length>a){a=this.tokens[a];var g=a.text;if(g===c||g===d||g===e||g===f||!(c||d||e||f))return a}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},constants:{"true":{type:r.Literal,value:!0},"false":{type:r.Literal,value:!1},"null":{type:r.Literal,
value:null},undefined:{type:r.Literal,value:s},"this":{type:r.ThisExpression}}};qd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:c,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};U(e,d.$filter);var f="",g;this.stage="assign";if(g=od(e))this.state.computing="assign",f=this.nextId(),this.recurse(g,f),f="fn.assign="+this.generateFunction("assign","s,v,l");g=md(e.body);d.stage="inputs";n(g,function(a,c){var e=
"fn"+c;d.state[e]={vars:[],body:[],own:{}};d.state.computing=e;var f=d.nextId();d.recurse(a,f);d.return_(f);d.state.inputs.push(e);a.watchId=c});this.state.computing="fn";this.stage="main";this.recurse(e);f='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+f+this.watchFns()+"return fn;";f=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",f))(this.$filter,Ba,oa,kd,Wf,ld,a);this.state=
this.stage=s;f.literal=pd(e);f.constant=e.constant;return f},USE:"use",STRICT:"strict",watchFns:function(){var a=[],c=this.state.inputs,d=this;n(c,function(c){a.push("var "+c+"="+d.generateFunction(c,"s"))});c.length&&a.push("fn.inputs=["+c.join(",")+"];");return a.join("")},generateFunction:function(a,c){return"function("+c+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],c=this;n(this.state.filters,function(d,e){a.push(d+"=$filter("+c.escape(e)+")")});return a.length?
"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,c,d,e,f,g){var h,l,k=this,m,q;e=e||v;if(!g&&z(a.watchId))c=c||this.nextId(),this.if_("i",this.lazyAssign(c,this.computedMember("i",a.watchId)),this.lazyRecurse(a,c,d,e,f,!0));else switch(a.type){case r.Program:n(a.body,function(c,d){k.recurse(c.expression,s,s,function(a){l=a});d!==a.body.length-1?k.current().body.push(l,
";"):k.return_(l)});break;case r.Literal:q=this.escape(a.value);this.assign(c,q);e(q);break;case r.UnaryExpression:this.recurse(a.argument,s,s,function(a){l=a});q=a.operator+"("+this.ifDefined(l,0)+")";this.assign(c,q);e(q);break;case r.BinaryExpression:this.recurse(a.left,s,s,function(a){h=a});this.recurse(a.right,s,s,function(a){l=a});q="+"===a.operator?this.plus(h,l):"-"===a.operator?this.ifDefined(h,0)+a.operator+this.ifDefined(l,0):"("+h+")"+a.operator+"("+l+")";this.assign(c,q);e(q);break;case r.LogicalExpression:c=
c||this.nextId();k.recurse(a.left,c);k.if_("&&"===a.operator?c:k.not(c),k.lazyRecurse(a.right,c));e(c);break;case r.ConditionalExpression:c=c||this.nextId();k.recurse(a.test,c);k.if_(c,k.lazyRecurse(a.alternate,c),k.lazyRecurse(a.consequent,c));e(c);break;case r.Identifier:c=c||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ba(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),
function(){k.if_("inputs"===k.stage||"s",function(){f&&1!==f&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(c,k.nonComputedMember("s",a.name))})},c&&k.lazyAssign(c,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Fb(a.name))&&k.addEnsureSafeObject(c);e(c);break;case r.MemberExpression:h=d&&(d.context=this.nextId())||this.nextId();c=c||this.nextId();k.recurse(a.object,h,s,function(){k.if_(k.notNull(h),function(){if(a.computed)l=
k.nextId(),k.recurse(a.property,l),k.addEnsureSafeMemberName(l),f&&1!==f&&k.if_(k.not(k.computedMember(h,l)),k.lazyAssign(k.computedMember(h,l),"{}")),q=k.ensureSafeObject(k.computedMember(h,l)),k.assign(c,q),d&&(d.computed=!0,d.name=l);else{Ba(a.property.name);f&&1!==f&&k.if_(k.not(k.nonComputedMember(h,a.property.name)),k.lazyAssign(k.nonComputedMember(h,a.property.name),"{}"));q=k.nonComputedMember(h,a.property.name);if(k.state.expensiveChecks||Fb(a.property.name))q=k.ensureSafeObject(q);k.assign(c,
q);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(c,"undefined")});e(c)},!!f);break;case r.CallExpression:c=c||this.nextId();a.filter?(l=k.filter(a.callee.name),m=[],n(a.arguments,function(a){var c=k.nextId();k.recurse(a,c);m.push(c)}),q=l+"("+m.join(",")+")",k.assign(c,q),e(c)):(l=k.nextId(),h={},m=[],k.recurse(a.callee,l,h,function(){k.if_(k.notNull(l),function(){k.addEnsureSafeFunction(l);n(a.arguments,function(a){k.recurse(a,k.nextId(),s,function(a){m.push(k.ensureSafeObject(a))})});
h.name?(k.state.expensiveChecks||k.addEnsureSafeObject(h.context),q=k.member(h.context,h.name,h.computed)+"("+m.join(",")+")"):q=l+"("+m.join(",")+")";q=k.ensureSafeObject(q);k.assign(c,q)},function(){k.assign(c,"undefined")});e(c)}));break;case r.AssignmentExpression:l=this.nextId();h={};if(!nd(a.left))throw ca("lval");this.recurse(a.left,s,h,function(){k.if_(k.notNull(h.context),function(){k.recurse(a.right,l);k.addEnsureSafeObject(k.member(h.context,h.name,h.computed));q=k.member(h.context,h.name,
h.computed)+a.operator+l;k.assign(c,q);e(c||q)})},1);break;case r.ArrayExpression:m=[];n(a.elements,function(a){k.recurse(a,k.nextId(),s,function(a){m.push(a)})});q="["+m.join(",")+"]";this.assign(c,q);e(q);break;case r.ObjectExpression:m=[];n(a.properties,function(a){k.recurse(a.value,k.nextId(),s,function(c){m.push(k.escape(a.key.type===r.Identifier?a.key.name:""+a.key.value)+":"+c)})});q="{"+m.join(",")+"}";this.assign(c,q);e(q);break;case r.ThisExpression:this.assign(c,"s");e("s");break;case r.NGValueParameter:this.assign(c,
"v"),e("v")}},getHasOwnProperty:function(a,c){var d=a+"."+c,e=this.current().own;e.hasOwnProperty(d)||(e[d]=this.nextId(!1,a+"&&("+this.escape(c)+" in "+a+")"));return e[d]},assign:function(a,c){if(a)return this.current().body.push(a,"=",c,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));return this.state.filters[a]},ifDefined:function(a,c){return"ifDefined("+a+","+this.escape(c)+")"},plus:function(a,c){return"plus("+a+","+c+")"},return_:function(a){this.current().body.push("return ",
a,";")},if_:function(a,c,d){if(!0===a)c();else{var e=this.current().body;e.push("if(",a,"){");c();e.push("}");d&&(e.push("else{"),d(),e.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,c){return a+"."+c},computedMember:function(a,c){return a+"["+c+"]"},member:function(a,c,d){return d?this.computedMember(a,c):this.nonComputedMember(a,c)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),
";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,c,d,e,f,g){var h=this;return function(){h.recurse(a,c,d,e,f,g)}},lazyAssign:function(a,c){var d=this;return function(){d.assign(a,c)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,
stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(L(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(V(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,c){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(c?"="+c:""));return d},current:function(){return this.state[this.state.computing]}};
rd.prototype={compile:function(a,c){var d=this,e=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=c;U(e,d.$filter);var f,g;if(f=od(e))g=this.recurse(f);f=md(e.body);var h;f&&(h=[],n(f,function(a,c){var e=d.recurse(a);a.input=e;h.push(e);a.watchId=c}));var l=[];n(e.body,function(a){l.push(d.recurse(a.expression))});f=0===e.body.length?function(){}:1===e.body.length?l[0]:function(a,c){var d;n(l,function(e){d=e(a,c)});return d};g&&(f.assign=function(a,c,d){return g(a,d,c)});h&&(f.inputs=
h);f.literal=pd(e);f.constant=e.constant;return f},recurse:function(a,c,d){var e,f,g=this,h;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case r.Literal:return this.value(a.value,c);case r.UnaryExpression:return f=this.recurse(a.argument),this["unary"+a.operator](f,c);case r.BinaryExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,f,c);case r.LogicalExpression:return e=this.recurse(a.left),f=this.recurse(a.right),this["binary"+a.operator](e,
f,c);case r.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),c);case r.Identifier:return Ba(a.name,g.expression),g.identifier(a.name,g.expensiveChecks||Fb(a.name),c,d,g.expression);case r.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Ba(a.property.name,g.expression),f=a.property.name),a.computed&&(f=this.recurse(a.property)),a.computed?this.computedMember(e,f,c,d,g.expression):this.nonComputedMember(e,f,
g.expensiveChecks,c,d,g.expression);case r.CallExpression:return h=[],n(a.arguments,function(a){h.push(g.recurse(a))}),a.filter&&(f=this.$filter(a.callee.name)),a.filter||(f=this.recurse(a.callee,!0)),a.filter?function(a,d,e,g){for(var n=[],r=0;r<h.length;++r)n.push(h[r](a,d,e,g));a=f.apply(s,n,g);return c?{context:s,name:s,value:a}:a}:function(a,d,e,q){var n=f(a,d,e,q),r;if(null!=n.value){oa(n.context,g.expression);kd(n.value,g.expression);r=[];for(var s=0;s<h.length;++s)r.push(oa(h[s](a,d,e,q),
g.expression));r=oa(n.value.apply(n.context,r),g.expression)}return c?{value:r}:r};case r.AssignmentExpression:return e=this.recurse(a.left,!0,1),f=this.recurse(a.right),function(a,d,h,q){var n=e(a,d,h,q);a=f(a,d,h,q);oa(n.value,g.expression);n.context[n.name]=a;return c?{value:a}:a};case r.ArrayExpression:return h=[],n(a.elements,function(a){h.push(g.recurse(a))}),function(a,d,e,f){for(var g=[],n=0;n<h.length;++n)g.push(h[n](a,d,e,f));return c?{value:g}:g};case r.ObjectExpression:return h=[],n(a.properties,
function(a){h.push({key:a.key.type===r.Identifier?a.key.name:""+a.key.value,value:g.recurse(a.value)})}),function(a,d,e,f){for(var g={},n=0;n<h.length;++n)g[h[n].key]=h[n].value(a,d,e,f);return c?{value:g}:g};case r.ThisExpression:return function(a){return c?{value:a}:a};case r.NGValueParameter:return function(a,d,e,f){return c?{value:e}:e}}},"unary+":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);d=z(d)?+d:0;return c?{value:d}:d}},"unary-":function(a,c){return function(d,e,f,g){d=a(d,e,f,g);
d=z(d)?-d:0;return c?{value:d}:d}},"unary!":function(a,c){return function(d,e,f,g){d=!a(d,e,f,g);return c?{value:d}:d}},"binary+":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=ld(l,e);return d?{value:l}:l}},"binary-":function(a,c,d){return function(e,f,g,h){var l=a(e,f,g,h);e=c(e,f,g,h);l=(z(l)?l:0)-(z(e)?e:0);return d?{value:l}:l}},"binary*":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)*c(e,f,g,h);return d?{value:e}:e}},"binary/":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)/c(e,f,g,h);return d?{value:e}:e}},"binary%":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)%c(e,f,g,h);return d?{value:e}:e}},"binary===":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)===c(e,f,g,h);return d?{value:e}:e}},"binary!==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)!==c(e,f,g,h);return d?{value:e}:e}},"binary==":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)==c(e,f,g,h);return d?{value:e}:e}},"binary!=":function(a,c,d){return function(e,
f,g,h){e=a(e,f,g,h)!=c(e,f,g,h);return d?{value:e}:e}},"binary<":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<c(e,f,g,h);return d?{value:e}:e}},"binary>":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>c(e,f,g,h);return d?{value:e}:e}},"binary<=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)<=c(e,f,g,h);return d?{value:e}:e}},"binary>=":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)>=c(e,f,g,h);return d?{value:e}:e}},"binary&&":function(a,c,d){return function(e,f,g,h){e=
a(e,f,g,h)&&c(e,f,g,h);return d?{value:e}:e}},"binary||":function(a,c,d){return function(e,f,g,h){e=a(e,f,g,h)||c(e,f,g,h);return d?{value:e}:e}},"ternary?:":function(a,c,d,e){return function(f,g,h,l){f=a(f,g,h,l)?c(f,g,h,l):d(f,g,h,l);return e?{value:f}:f}},value:function(a,c){return function(){return c?{context:s,name:s,value:a}:a}},identifier:function(a,c,d,e,f){return function(g,h,l,k){g=h&&a in h?h:g;e&&1!==e&&g&&!g[a]&&(g[a]={});h=g?g[a]:s;c&&oa(h,f);return d?{context:g,name:a,value:h}:h}},
computedMember:function(a,c,d,e,f){return function(g,h,l,k){var m=a(g,h,l,k),n,t;null!=m&&(n=c(g,h,l,k),Ba(n,f),e&&1!==e&&m&&!m[n]&&(m[n]={}),t=m[n],oa(t,f));return d?{context:m,name:n,value:t}:t}},nonComputedMember:function(a,c,d,e,f,g){return function(h,l,k,m){h=a(h,l,k,m);f&&1!==f&&h&&!h[c]&&(h[c]={});l=null!=h?h[c]:s;(d||Fb(c))&&oa(l,g);return e?{context:h,name:c,value:l}:l}},inputs:function(a,c){return function(d,e,f,g){return g?g[c]:a(d,e,f)}}};var hc=function(a,c,d){this.lexer=a;this.$filter=
c;this.options=d;this.ast=new r(this.lexer);this.astCompiler=d.csp?new rd(this.ast,c):new qd(this.ast,c)};hc.prototype={constructor:hc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};ga();ga();var Xf=Object.prototype.valueOf,Ca=I("$sce"),pa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},ea=I("$compile"),Y=W.createElement("a"),vd=Aa(O.location.href);wd.$inject=["$document"];Kc.$inject=["$provide"];xd.$inject=["$locale"];zd.$inject=["$locale"];
var Cd=".",gg={yyyy:Z("FullYear",4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:Hb("Month"),MMM:Hb("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:Hb("Day"),EEE:Hb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a,c,d){a=-1*d;return a=(0<=a?"+":"")+(Gb(Math[0<a?"floor":
"ceil"](a/60),2)+Gb(Math.abs(a%60),2))},ww:Ed(2),w:Ed(1),G:jc,GG:jc,GGG:jc,GGGG:function(a,c){return 0>=a.getFullYear()?c.ERANAMES[0]:c.ERANAMES[1]}},fg=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,eg=/^\-?\d+$/;yd.$inject=["$locale"];var bg=ra(G),cg=ra(qb);Ad.$inject=["$parse"];var he=ra({restrict:"E",compile:function(a,c){if(!c.href&&!c.xlinkHref)return function(a,c){if("a"===c[0].nodeName.toLowerCase()){var f="[object SVGAnimatedString]"===ta.call(c.prop("href"))?
"xlink:href":"href";c.on("click",function(a){c.attr(f)||a.preventDefault()})}}}}),rb={};n(zb,function(a,c){function d(a,d,f){a.$watch(f[e],function(a){f.$set(c,!!a)})}if("multiple"!=a){var e=xa("ng-"+c),f=d;"checked"===a&&(f=function(a,c,f){f.ngModel!==f[e]&&d(a,c,f)});rb[e]=function(){return{restrict:"A",priority:100,link:f}}}});n(Tc,function(a,c){rb[c]=function(){return{priority:100,link:function(a,e,f){if("ngPattern"===c&&"/"==f.ngPattern.charAt(0)&&(e=f.ngPattern.match(ig))){f.$set("ngPattern",
new RegExp(e[1],e[2]));return}a.$watch(f[c],function(a){f.$set(c,a)})}}}});n(["src","srcset","href"],function(a){var c=xa("ng-"+a);rb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===ta.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),Ta&&g&&e.prop(g,f[h])):"href"===a&&f.$set(h,null)})}}}});var Ib={$addControl:v,$$renameControl:function(a,c){a.$name=c},$removeControl:v,$setValidity:v,
$setDirty:v,$setPristine:v,$setSubmitted:v};Fd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Nd=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Fd,compile:function(d,e){d.addClass(Ua).addClass(lb);var f=e.name?"name":a&&e.ngForm?"ngForm":!1;return{pre:function(a,d,e,k){if(!("action"in e)){var m=function(c){a.$apply(function(){k.$commitViewValue();k.$setSubmitted()});c.preventDefault()};d[0].addEventListener("submit",m,!1);d.on("$destroy",
function(){c(function(){d[0].removeEventListener("submit",m,!1)},0,!1)})}var n=k.$$parentForm;f&&(Eb(a,k.$name,k,k.$name),e.$observe(f,function(c){k.$name!==c&&(Eb(a,k.$name,s,k.$name),n.$$renameControl(k,c),Eb(a,k.$name,k,k.$name))}));d.on("$destroy",function(){n.$removeControl(k);f&&Eb(a,e[f],s,k.$name);Q(k,Ib)})}}}}}]},ie=Nd(),ve=Nd(!0),hg=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,qg=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
rg=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,sg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Od=/^(\d{4})-(\d{2})-(\d{2})$/,Pd=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,mc=/^(\d{4})-W(\d\d)$/,Qd=/^(\d{4})-(\d\d)$/,Rd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Sd={text:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);kc(e)},date:kb("date",Od,Kb(Od,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":kb("datetimelocal",Pd,Kb(Pd,
"yyyy MM dd HH mm ss sss".split(" ")),"yyyy-MM-ddTHH:mm:ss.sss"),time:kb("time",Rd,Kb(Rd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:kb("week",mc,function(a,c){if(da(a))return a;if(L(a)){mc.lastIndex=0;var d=mc.exec(a);if(d){var e=+d[1],f=+d[2],g=d=0,h=0,l=0,k=Dd(e),f=7*(f-1);c&&(d=c.getHours(),g=c.getMinutes(),h=c.getSeconds(),l=c.getMilliseconds());return new Date(e,0,k.getDate()+f,d,g,h,l)}}return NaN},"yyyy-Www"),month:kb("month",Qd,Kb(Qd,["yyyy","MM"]),"yyyy-MM"),number:function(a,c,d,e,f,g){Hd(a,
c,d,e);jb(a,c,d,e,f,g);e.$$parserName="number";e.$parsers.push(function(a){return e.$isEmpty(a)?null:sg.test(a)?parseFloat(a):s});e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!V(a))throw Lb("numfmt",a);a=a.toString()}return a});if(z(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||w(h)||a>=h};d.$observe("min",function(a){z(a)&&!V(a)&&(a=parseFloat(a,10));h=V(a)&&!isNaN(a)?a:s;e.$validate()})}if(z(d.max)||d.ngMax){var l;e.$validators.max=function(a){return e.$isEmpty(a)||
w(l)||a<=l};d.$observe("max",function(a){z(a)&&!V(a)&&(a=parseFloat(a,10));l=V(a)&&!isNaN(a)?a:s;e.$validate()})}},url:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);kc(e);e.$$parserName="url";e.$validators.url=function(a,c){var d=a||c;return e.$isEmpty(d)||qg.test(d)}},email:function(a,c,d,e,f,g){jb(a,c,d,e,f,g);kc(e);e.$$parserName="email";e.$validators.email=function(a,c){var d=a||c;return e.$isEmpty(d)||rg.test(d)}},radio:function(a,c,d,e){w(d.name)&&c.attr("name",++mb);c.on("click",function(a){c[0].checked&&
e.$setViewValue(d.value,a&&a.type)});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e,f,g,h,l){var k=Id(l,a,"ngTrueValue",d.ngTrueValue,!0),m=Id(l,a,"ngFalseValue",d.ngFalseValue,!1);c.on("click",function(a){e.$setViewValue(c[0].checked,a&&a.type)});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return!1===a};e.$formatters.push(function(a){return ka(a,k)});e.$parsers.push(function(a){return a?k:m})},hidden:v,
button:v,submit:v,reset:v,file:v},Ec=["$browser","$sniffer","$filter","$parse",function(a,c,d,e){return{restrict:"E",require:["?ngModel"],link:{pre:function(f,g,h,l){l[0]&&(Sd[G(h.type)]||Sd.text)(f,g,h,l[0],c,a,d,e)}}}}],tg=/^(true|false|\d+)$/,Ne=function(){return{restrict:"A",priority:100,compile:function(a,c){return tg.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},ne=["$compile",function(a){return{restrict:"AC",
compile:function(c){a.$$addBindingClass(c);return function(c,e,f){a.$$addBindingInfo(e,f.ngBind);e=e[0];c.$watch(f.ngBind,function(a){e.textContent=a===s?"":a})}}}}],pe=["$interpolate","$compile",function(a,c){return{compile:function(d){c.$$addBindingClass(d);return function(d,f,g){d=a(f.attr(g.$attr.ngBindTemplate));c.$$addBindingInfo(f,d.expressions);f=f[0];g.$observe("ngBindTemplate",function(a){f.textContent=a===s?"":a})}}}}],oe=["$sce","$parse","$compile",function(a,c,d){return{restrict:"A",
compile:function(e,f){var g=c(f.ngBindHtml),h=c(f.ngBindHtml,function(a){return(a||"").toString()});d.$$addBindingClass(e);return function(c,e,f){d.$$addBindingInfo(e,f.ngBindHtml);c.$watch(h,function(){e.html(a.getTrustedHtml(g(c))||"")})}}}}],Me=ra({restrict:"A",require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),qe=lc("",!0),se=lc("Odd",0),re=lc("Even",1),te=Ma({compile:function(a,c){c.$set("ngCloak",s);a.removeClass("ng-cloak")}}),ue=[function(){return{restrict:"A",
scope:!0,controller:"@",priority:500}}],Jc={},ug={blur:!0,focus:!0};n("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=xa("ng-"+a);Jc[c]=["$parse","$rootScope",function(d,e){return{restrict:"A",compile:function(f,g){var h=d(g[c],null,!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};ug[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var xe=["$animate",
function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,l,k;c.$watch(e.ngIf,function(c){c?l||g(function(c,f){l=f;c[c.length++]=W.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)}):(k&&(k.remove(),k=null),l&&(l.$destroy(),l=null),h&&(k=pb(h.clone),a.leave(k).then(function(){k=null}),h=null))})}}}],ye=["$templateRequest","$anchorScroll","$animate","$sce",function(a,c,d,e){return{restrict:"ECA",priority:400,
terminal:!0,transclude:"element",controller:$.noop,compile:function(f,g){var h=g.ngInclude||g.src,l=g.onload||"",k=g.autoscroll;return function(f,g,n,r,s){var w=0,u,p,x,v=function(){p&&(p.remove(),p=null);u&&(u.$destroy(),u=null);x&&(d.leave(x).then(function(){p=null}),p=x,x=null)};f.$watch(e.parseAsResourceUrl(h),function(e){var h=function(){!z(k)||k&&!f.$eval(k)||c()},n=++w;e?(a(e,!0).then(function(a){if(n===w){var c=f.$new();r.template=a;a=s(c,function(a){v();d.enter(a,null,g).then(h)});u=c;x=
a;u.$emit("$includeContentLoaded",e);f.$eval(l)}},function(){n===w&&(v(),f.$emit("$includeContentError",e))}),f.$emit("$includeContentRequested",e)):(v(),r.template=null)})}}}}],Pe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){/SVG/.test(d[0].toString())?(d.empty(),a(Mc(f.template,W).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),a(d.contents())(c))}}}],ze=Ma({priority:450,compile:function(){return{pre:function(a,
c,d){a.$eval(d.ngInit)}}}}),Le=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,c,d,e){var f=c.attr(d.$attr.ngList)||", ",g="false"!==d.ngTrim,h=g?T(f):f;e.$parsers.push(function(a){if(!w(a)){var c=[];a&&n(a.split(h),function(a){a&&c.push(g?T(a):a)});return c}});e.$formatters.push(function(a){return K(a)?a.join(f):s});e.$isEmpty=function(a){return!a||!a.length}}}},lb="ng-valid",Jd="ng-invalid",Ua="ng-pristine",Jb="ng-dirty",Ld="ng-pending",Lb=new I("ngModel"),vg=["$scope",
"$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,c,d,e,f,g,h,l,k,m){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=s;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=s;this.$name=m(d.name||"",!1)(a);var q=f(d.ngModel),
r=q.assign,y=q,C=r,N=null,u,p=this;this.$$setOptions=function(a){if((p.$options=a)&&a.getterSetter){var c=f(d.ngModel+"()"),g=f(d.ngModel+"($$$p)");y=function(a){var d=q(a);E(d)&&(d=c(a));return d};C=function(a,c){E(q(a))?g(a,{$$$p:p.$modelValue}):r(a,p.$modelValue)}}else if(!q.assign)throw Lb("nonassign",d.ngModel,va(e));};this.$render=v;this.$isEmpty=function(a){return w(a)||""===a||null===a||a!==a};var x=e.inheritedData("$formController")||Ib,A=0;Gd({ctrl:this,$element:e,set:function(a,c){a[c]=
!0},unset:function(a,c){delete a[c]},parentForm:x,$animate:g});this.$setPristine=function(){p.$dirty=!1;p.$pristine=!0;g.removeClass(e,Jb);g.addClass(e,Ua)};this.$setDirty=function(){p.$dirty=!0;p.$pristine=!1;g.removeClass(e,Ua);g.addClass(e,Jb);x.$setDirty()};this.$setUntouched=function(){p.$touched=!1;p.$untouched=!0;g.setClass(e,"ng-untouched","ng-touched")};this.$setTouched=function(){p.$touched=!0;p.$untouched=!1;g.setClass(e,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){h.cancel(N);
p.$viewValue=p.$$lastCommittedViewValue;p.$render()};this.$validate=function(){if(!V(p.$modelValue)||!isNaN(p.$modelValue)){var a=p.$$rawModelValue,c=p.$valid,d=p.$modelValue,e=p.$options&&p.$options.allowInvalid;p.$$runValidators(a,p.$$lastCommittedViewValue,function(f){e||c===f||(p.$modelValue=f?a:s,p.$modelValue!==d&&p.$$writeModelToScope())})}};this.$$runValidators=function(a,c,d){function e(){var d=!0;n(p.$validators,function(e,f){var h=e(a,c);d=d&&h;g(f,h)});return d?!0:(n(p.$asyncValidators,
function(a,c){g(c,null)}),!1)}function f(){var d=[],e=!0;n(p.$asyncValidators,function(f,h){var k=f(a,c);if(!k||!E(k.then))throw Lb("$asyncValidators",k);g(h,s);d.push(k.then(function(){g(h,!0)},function(a){e=!1;g(h,!1)}))});d.length?k.all(d).then(function(){h(e)},v):h(!0)}function g(a,c){l===A&&p.$setValidity(a,c)}function h(a){l===A&&d(a)}A++;var l=A;(function(){var a=p.$$parserName||"parse";if(u===s)g(a,null);else return u||(n(p.$validators,function(a,c){g(c,null)}),n(p.$asyncValidators,function(a,
c){g(c,null)})),g(a,u),u;return!0})()?e()?f():h(!1):h(!1)};this.$commitViewValue=function(){var a=p.$viewValue;h.cancel(N);if(p.$$lastCommittedViewValue!==a||""===a&&p.$$hasNativeValidators)p.$$lastCommittedViewValue=a,p.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var c=p.$$lastCommittedViewValue;if(u=w(c)?s:!0)for(var d=0;d<p.$parsers.length;d++)if(c=p.$parsers[d](c),w(c)){u=!1;break}V(p.$modelValue)&&isNaN(p.$modelValue)&&(p.$modelValue=y(a));var e=
p.$modelValue,f=p.$options&&p.$options.allowInvalid;p.$$rawModelValue=c;f&&(p.$modelValue=c,p.$modelValue!==e&&p.$$writeModelToScope());p.$$runValidators(c,p.$$lastCommittedViewValue,function(a){f||(p.$modelValue=a?c:s,p.$modelValue!==e&&p.$$writeModelToScope())})};this.$$writeModelToScope=function(){C(a,p.$modelValue);n(p.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}})};this.$setViewValue=function(a,c){p.$viewValue=a;p.$options&&!p.$options.updateOnDefault||p.$$debounceViewValueCommit(c)};
this.$$debounceViewValueCommit=function(c){var d=0,e=p.$options;e&&z(e.debounce)&&(e=e.debounce,V(e)?d=e:V(e[c])?d=e[c]:V(e["default"])&&(d=e["default"]));h.cancel(N);d?N=h(function(){p.$commitViewValue()},d):l.$$phase?p.$commitViewValue():a.$apply(function(){p.$commitViewValue()})};a.$watch(function(){var c=y(a);if(c!==p.$modelValue&&(p.$modelValue===p.$modelValue||c===c)){p.$modelValue=p.$$rawModelValue=c;u=s;for(var d=p.$formatters,e=d.length,f=c;e--;)f=d[e](f);p.$viewValue!==f&&(p.$viewValue=
p.$$lastCommittedViewValue=f,p.$render(),p.$$runValidators(c,f,v))}return c})}],Ke=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:vg,priority:1,compile:function(c){c.addClass(Ua).addClass("ng-untouched").addClass(lb);return{pre:function(a,c,f,g){var h=g[0],l=g[1]||Ib;h.$$setOptions(g[2]&&g[2].$options);l.$addControl(h);f.$observe("name",function(a){h.$name!==a&&l.$$renameControl(h,a)});a.$on("$destroy",function(){l.$removeControl(h)})},post:function(c,
e,f,g){var h=g[0];if(h.$options&&h.$options.updateOn)e.on(h.$options.updateOn,function(a){h.$$debounceViewValueCommit(a&&a.type)});e.on("blur",function(e){h.$touched||(a.$$phase?c.$evalAsync(h.$setTouched):c.$apply(h.$setTouched))})}}}}}],wg=/(\s+|^)default(\s+|$)/,Oe=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,c){var d=this;this.$options=fa(a.$eval(c.ngModelOptions));this.$options.updateOn!==s?(this.$options.updateOnDefault=!1,this.$options.updateOn=T(this.$options.updateOn.replace(wg,
function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ae=Ma({terminal:!0,priority:1E3}),xg=I("ngOptions"),yg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,Ie=["$compile","$parse",function(a,c){function d(a,d,e){function f(a,c,d,e,g){this.selectValue=a;this.viewValue=c;this.label=
d;this.group=e;this.disabled=g}var m=a.match(yg);if(!m)throw xg("iexp",a,va(d));var n=m[5]||m[7],r=m[6];a=/ as /.test(m[0])&&m[1];var s=m[9];d=c(m[2]?m[1]:n);var w=a&&c(a)||d,v=s&&c(s),u=s?function(a,c){return v(e,c)}:function(a){return Fa(a)},p=function(a,c){return u(a,D(a,c))},x=c(m[2]||m[1]),A=c(m[3]||""),z=c(m[4]||""),B=c(m[8]),M={},D=r?function(a,c){M[r]=c;M[n]=a;return M}:function(a){M[n]=a;return M};return{trackBy:s,getTrackByValue:p,getWatchables:c(B,function(a){var c=[];a=a||[];Object.keys(a).forEach(function(d){if("$"!==
d.charAt(0)){var f=D(a[d],d);d=u(a[d],f);c.push(d);if(m[2]||m[1])d=x(e,f),c.push(d);m[4]&&(f=z(e,f),c.push(f))}});return c}),getOptions:function(){var a=[],c={},d=B(e)||[],g;if(!r&&Da(d))g=d;else{g=[];for(var h in d)d.hasOwnProperty(h)&&"$"!==h.charAt(0)&&g.push(h)}h=g.length;for(var m=0;m<h;m++){var n=d===g?m:g[m],q=D(d[n],n),v=w(e,q),n=u(v,q),N=x(e,q),M=A(e,q),q=z(e,q),v=new f(n,v,N,M,q);a.push(v);c[n]=v}return{items:a,selectValueMap:c,getOptionFromViewValue:function(a){return c[p(a)]},getViewValueFromOption:function(a){return s?
$.copy(a.viewValue):a.viewValue}}}}}var e=W.createElement("option"),f=W.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(c,h,l,k){function m(a,c){a.element=c;c.disabled=a.disabled;a.value!==c.value&&(c.value=a.selectValue);a.label!==c.label&&(c.label=a.label,c.textContent=a.label)}function q(a,c,d,e){c&&G(c.nodeName)===d?d=c:(d=e.cloneNode(!1),c?a.insertBefore(d,c):a.appendChild(d));return d}function r(a){for(var c;a;)c=a.nextSibling,Xb(a),a=c}
function s(a){var c=p&&p[0],d=M&&M[0];if(c||d)for(;a&&(a===c||a===d);)a=a.nextSibling;return a}function w(){var a=D&&u.readValue();D=E.getOptions();var c={},d=h[0].firstChild;B&&h.prepend(p);d=s(d);D.items.forEach(function(a){var g,k;a.group?(g=c[a.group],g||(g=q(h[0],d,"optgroup",f),d=g.nextSibling,g.label=a.group,g=c[a.group]={groupElement:g,currentOptionElement:g.firstChild}),k=q(g.groupElement,g.currentOptionElement,"option",e),m(a,k),g.currentOptionElement=k.nextSibling):(k=q(h[0],d,"option",
e),m(a,k),d=k.nextSibling)});Object.keys(c).forEach(function(a){r(c[a].currentOptionElement)});r(d);v.$render();if(!v.$isEmpty(a)){var g=u.readValue();(E.trackBy?ka(a,g):a===g)||(v.$setViewValue(g),v.$render())}}var v=k[1];if(v){var u=k[0];k=l.multiple;for(var p,x=0,z=h.children(),H=z.length;x<H;x++)if(""===z[x].value){p=z.eq(x);break}var B=!!p,M=A(e.cloneNode(!1));M.val("?");var D,E=d(l.ngOptions,h,c);k?(v.$isEmpty=function(a){return!a||0===a.length},u.writeValue=function(a){D.items.forEach(function(a){a.element.selected=
!1});a&&a.forEach(function(a){(a=D.getOptionFromViewValue(a))&&!a.disabled&&(a.element.selected=!0)})},u.readValue=function(){var a=h.val()||[],c=[];n(a,function(a){a=D.selectValueMap[a];a.disabled||c.push(D.getViewValueFromOption(a))});return c},E.trackBy&&c.$watchCollection(function(){if(K(v.$viewValue))return v.$viewValue.map(function(a){return E.getTrackByValue(a)})},function(){v.$render()})):(u.writeValue=function(a){var c=D.getOptionFromViewValue(a);c&&!c.disabled?h[0].value!==c.selectValue&&
(M.remove(),B||p.remove(),h[0].value=c.selectValue,c.element.selected=!0,c.element.setAttribute("selected","selected")):null===a||B?(M.remove(),B||h.prepend(p),h.val(""),p.prop("selected",!0),p.attr("selected",!0)):(B||p.remove(),h.prepend(M),h.val("?"),M.prop("selected",!0),M.attr("selected",!0))},u.readValue=function(){var a=D.selectValueMap[h.val()];return a&&!a.disabled?(B||p.remove(),M.remove(),D.getViewValueFromOption(a)):null},E.trackBy&&c.$watch(function(){return E.getTrackByValue(v.$viewValue)},
function(){v.$render()}));B?(p.remove(),a(p)(c),p.removeClass("ng-scope")):p=A(e.cloneNode(!1));w();c.$watchCollection(E.getWatchables,w)}}}}],Be=["$locale","$interpolate","$log",function(a,c,d){var e=/{}/g,f=/^when(Minus)?(.+)$/;return{link:function(g,h,l){function k(a){h.text(a||"")}var m=l.count,q=l.$attr.when&&h.attr(l.$attr.when),r=l.offset||0,s=g.$eval(q)||{},C={},z=c.startSymbol(),u=c.endSymbol(),p=z+m+"-"+r+u,x=$.noop,A;n(l,function(a,c){var d=f.exec(c);d&&(d=(d[1]?"-":"")+G(d[2]),s[d]=h.attr(l.$attr[c]))});
n(s,function(a,d){C[d]=c(a.replace(e,p))});g.$watch(m,function(c){var e=parseFloat(c),f=isNaN(e);f||e in s||(e=a.pluralCat(e-r));e===A||f&&V(A)&&isNaN(A)||(x(),f=C[e],w(f)?(null!=c&&d.debug("ngPluralize: no rule defined for '"+e+"' in "+q),x=v,k()):x=g.$watch(f,k),A=e)})}}}],Ce=["$parse","$animate",function(a,c){var d=I("ngRepeat"),e=function(a,c,d,e,k,m,n){a[d]=e;k&&(a[k]=m);a.$index=c;a.$first=0===c;a.$last=c===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(c&1))};return{restrict:"A",
multiElement:!0,transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,l=W.createComment(" end ngRepeat: "+h+" "),k=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!k)throw d("iexp",h);var m=k[1],q=k[2],r=k[3],v=k[4],k=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!k)throw d("iidexp",m);var w=k[3]||k[1],z=k[2];if(r&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(r)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(r)))throw d("badident",
r);var u,p,x,E,H={$id:Fa};v?u=a(v):(x=function(a,c){return Fa(c)},E=function(a){return a});return function(a,f,g,k,m){u&&(p=function(c,d,e){z&&(H[z]=c);H[w]=d;H.$index=e;return u(a,H)});var v=ga();a.$watchCollection(q,function(g){var k,q,u=f[0],y,D=ga(),H,F,L,I,K,G,O;r&&(a[r]=g);if(Da(g))K=g,q=p||x;else for(O in q=p||E,K=[],g)g.hasOwnProperty(O)&&"$"!==O.charAt(0)&&K.push(O);H=K.length;O=Array(H);for(k=0;k<H;k++)if(F=g===K?k:K[k],L=g[F],I=q(F,L,k),v[I])G=v[I],delete v[I],D[I]=G,O[k]=G;else{if(D[I])throw n(O,
function(a){a&&a.scope&&(v[a.id]=a)}),d("dupes",h,I,L);O[k]={id:I,scope:s,clone:s};D[I]=!0}for(y in v){G=v[y];I=pb(G.clone);c.leave(I);if(I[0].parentNode)for(k=0,q=I.length;k<q;k++)I[k].$$NG_REMOVED=!0;G.scope.$destroy()}for(k=0;k<H;k++)if(F=g===K?k:K[k],L=g[F],G=O[k],G.scope){y=u;do y=y.nextSibling;while(y&&y.$$NG_REMOVED);G.clone[0]!=y&&c.move(pb(G.clone),null,A(u));u=G.clone[G.clone.length-1];e(G.scope,k,w,L,z,F,H)}else m(function(a,d){G.scope=d;var f=l.cloneNode(!1);a[a.length++]=f;c.enter(a,
null,A(u));u=f;G.clone=a;D[G.id]=G;e(G.scope,k,w,L,z,F,H)});v=D})}}}}],De=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngShow,function(c){a[c?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],we=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(c,d,e){c.$watch(e.ngHide,function(c){a[c?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=Ma(function(a,c,d){a.$watch(d.ngStyle,
function(a,d){d&&a!==d&&n(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Fe=["$animate",function(a){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],l=[],k=[],m=function(a,c){return function(){a.splice(c,1)}};c.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=l.length;d<e;++d)a.cancel(l[d]);d=l.length=0;for(e=k.length;d<e;++d){var r=pb(h[d].clone);k[d].$destroy();(l[d]=a.leave(r)).then(m(l,d))}h.length=0;k.length=0;(g=f.cases["!"+
c]||f.cases["?"])&&n(g,function(c){c.transclude(function(d,e){k.push(e);var f=c.element;d[d.length++]=W.createComment(" end ngSwitchWhen: ");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Ge=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),He=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Je=Ma({restrict:"EAC",link:function(a,c,d,e,f){if(!f)throw I("ngTransclude")("orphan",va(c));f(function(a){c.empty();c.append(a)})}}),je=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],zg={$setViewValue:v,$render:v},Ag=["$element","$scope","$attrs",function(a,c,d){var e=this,f=new Sa;e.ngModelCtrl=zg;e.unknownOption=A(W.createElement("option"));
e.renderUnknownOption=function(c){c="? "+Fa(c)+" ?";e.unknownOption.val(c);a.prepend(e.unknownOption);a.val(c)};c.$on("$destroy",function(){e.renderUnknownOption=v});e.removeUnknownOption=function(){e.unknownOption.parent()&&e.unknownOption.remove()};e.readValue=function(){e.removeUnknownOption();return a.val()};e.writeValue=function(c){e.hasOption(c)?(e.removeUnknownOption(),a.val(c),""===c&&e.emptyOption.prop("selected",!0)):null==c&&e.emptyOption?(e.removeUnknownOption(),a.val("")):e.renderUnknownOption(c)};
e.addOption=function(a,c){Ra(a,'"option value"');""===a&&(e.emptyOption=c);var d=f.get(a)||0;f.put(a,d+1)};e.removeOption=function(a){var c=f.get(a);c&&(1===c?(f.remove(a),""===a&&(e.emptyOption=s)):f.put(a,c-1))};e.hasOption=function(a){return!!f.get(a)}}],ke=function(){return{restrict:"E",require:["select","?ngModel"],controller:Ag,link:function(a,c,d,e){var f=e[1];if(f){var g=e[0];g.ngModelCtrl=f;f.$render=function(){g.writeValue(f.$viewValue)};c.on("change",function(){a.$apply(function(){f.$setViewValue(g.readValue())})});
if(d.multiple){g.readValue=function(){var a=[];n(c.find("option"),function(c){c.selected&&a.push(c.value)});return a};g.writeValue=function(a){var d=new Sa(a);n(c.find("option"),function(a){a.selected=z(d.get(a.value))})};var h,l=NaN;a.$watch(function(){l!==f.$viewValue||ka(h,f.$viewValue)||(h=ia(f.$viewValue),f.$render());l=f.$viewValue});f.$isEmpty=function(a){return!a||0===a.length}}}}}},me=["$interpolate",function(a){function c(a){a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",
priority:100,compile:function(d,e){if(w(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.ngModelCtrl&&(f?a.$watch(f,function(a,f){e.$set("value",a);f!==a&&m.removeOption(f);m.addOption(a,d);m.ngModelCtrl.$render();c(d)}):(m.addOption(e.value,d),m.ngModelCtrl.$render(),c(d)),d.on("$destroy",function(){m.removeOption(e.value);m.ngModelCtrl.$render()}))}}}}],le=ra({restrict:"E",
terminal:!1}),Gc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){e&&(d.required=!0,e.$validators.required=function(a,c){return!d.required||!e.$isEmpty(c)},d.$observe("required",function(){e.$validate()}))}}},Fc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f,g=d.ngPattern||d.pattern;d.$observe("pattern",function(a){L(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw I("ngPattern")("noregexp",g,a,va(c));f=a||s;e.$validate()});
e.$validators.pattern=function(a){return e.$isEmpty(a)||w(f)||f.test(a)}}}}},Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=-1;d.$observe("maxlength",function(a){a=X(a);f=isNaN(a)?-1:a;e.$validate()});e.$validators.maxlength=function(a,c){return 0>f||e.$isEmpty(c)||c.length<=f}}}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,c,d,e){if(e){var f=0;d.$observe("minlength",function(a){f=X(a)||0;e.$validate()});e.$validators.minlength=function(a,
c){return e.$isEmpty(c)||c.length>=f}}}}};O.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):(be(),de($),A(W).ready(function(){Yd(W,zc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.4.1
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,d,C){'use strict';function v(r,k,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,f,b,c,y){function z(){l&&(h.cancel(l),l=null);m&&(m.$destroy(),m=null);n&&(l=h.leave(n),l.then(function(){l=null}),n=null)}function x(){var b=r.current&&r.current.locals;if(d.isDefined(b&&b.$template)){var b=a.$new(),c=r.current;n=y(b,function(b){h.enter(b,null,n||f).then(function(){!d.isDefined(t)||t&&!a.$eval(t)||k()});z()});m=c.scope=b;m.$emit("$viewContentLoaded");
m.$eval(w)}else z()}var m,n,l,t=b.autoscroll,w=b.onload||"";a.$on("$routeChangeSuccess",x);x()}}}function A(d,k,h){return{restrict:"ECA",priority:-400,link:function(a,f){var b=h.current,c=b.locals;f.html(c.$template);var y=d(f.contents());b.controller&&(c.$scope=a,c=k(b.controller,c),b.controllerAs&&(a[b.controllerAs]=c),f.data("$ngControllerController",c),f.children().data("$ngControllerController",c));y(a)}}}q=d.module("ngRoute",["ng"]).provider("$route",function(){function r(a,f){return d.extend(Object.create(a),
f)}function k(a,d){var b=d.caseInsensitiveMatch,c={originalPath:a,regexp:a},h=c.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,d,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});d=d||"";return""+(a?"":d)+"(?:"+(a?d:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");c.regexp=new RegExp("^"+a+"$",b?"i":"");return c}var h={};this.when=function(a,f){var b=d.copy(f);d.isUndefined(b.reloadOnSearch)&&(b.reloadOnSearch=!0);
d.isUndefined(b.caseInsensitiveMatch)&&(b.caseInsensitiveMatch=this.caseInsensitiveMatch);h[a]=d.extend(b,a&&k(a,b));if(a){var c="/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[c]=d.extend({redirectTo:a},k(c,b))}return this};this.caseInsensitiveMatch=!1;this.otherwise=function(a){"string"===typeof a&&(a={redirectTo:a});this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(a,f,b,c,k,q,x){function m(b){var e=s.current;
(v=(p=l())&&e&&p.$$route===e.$$route&&d.equals(p.pathParams,e.pathParams)&&!p.reloadOnSearch&&!w)||!e&&!p||a.$broadcast("$routeChangeStart",p,e).defaultPrevented&&b&&b.preventDefault()}function n(){var u=s.current,e=p;if(v)u.params=e.params,d.copy(u.params,b),a.$broadcast("$routeUpdate",u);else if(e||u)w=!1,(s.current=e)&&e.redirectTo&&(d.isString(e.redirectTo)?f.path(t(e.redirectTo,e.params)).search(e.params).replace():f.url(e.redirectTo(e.pathParams,f.path(),f.search())).replace()),c.when(e).then(function(){if(e){var a=
d.extend({},e.resolve),b,g;d.forEach(a,function(b,e){a[e]=d.isString(b)?k.get(b):k.invoke(b,null,null,e)});d.isDefined(b=e.template)?d.isFunction(b)&&(b=b(e.params)):d.isDefined(g=e.templateUrl)&&(d.isFunction(g)&&(g=g(e.params)),g=x.getTrustedResourceUrl(g),d.isDefined(g)&&(e.loadedTemplateUrl=g,b=q(g)));d.isDefined(b)&&(a.$template=b);return c.all(a)}}).then(function(c){e==s.current&&(e&&(e.locals=c,d.copy(e.params,b)),a.$broadcast("$routeChangeSuccess",e,u))},function(b){e==s.current&&a.$broadcast("$routeChangeError",
e,u,b)})}function l(){var a,b;d.forEach(h,function(c,h){var g;if(g=!b){var k=f.path();g=c.keys;var m={};if(c.regexp)if(k=c.regexp.exec(k)){for(var l=1,n=k.length;l<n;++l){var p=g[l-1],q=k[l];p&&q&&(m[p.name]=q)}g=m}else g=null;else g=null;g=a=g}g&&(b=r(c,{params:d.extend({},f.search(),a),pathParams:a}),b.$$route=c)});return b||h[null]&&r(h[null],{params:{},pathParams:{}})}function t(a,b){var c=[];d.forEach((a||"").split(":"),function(a,d){if(0===d)c.push(a);else{var f=a.match(/(\w+)(?:[?*])?(.*)/),
h=f[1];c.push(b[h]);c.push(f[2]||"");delete b[h]}});return c.join("")}var w=!1,p,v,s={routes:h,reload:function(){w=!0;a.$evalAsync(function(){m();n()})},updateParams:function(a){if(this.current&&this.current.$$route)a=d.extend({},this.current.params,a),f.path(t(this.current.$$route.originalPath,a)),f.search(a);else throw B("norout");}};a.$on("$locationChangeStart",m);a.$on("$locationChangeSuccess",n);return s}]});var B=d.$$minErr("ngRoute");q.provider("$routeParams",function(){this.$get=function(){return{}}});
q.directive("ngView",v);q.directive("ngView",A);v.$inject=["$route","$anchorScroll","$animate"];A.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.4.1
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(I,d,B){'use strict';function D(f,q){q=q||{};d.forEach(q,function(d,h){delete q[h]});for(var h in f)!f.hasOwnProperty(h)||"$"===h.charAt(0)&&"$"===h.charAt(1)||(q[h]=f[h]);return q}var x=d.$$minErr("$resource"),C=/^(\.[a-zA-Z_$@][0-9a-zA-Z_$@]*)+$/;d.module("ngResource",["ng"]).provider("$resource",function(){var f=this;this.defaults={stripTrailingSlashes:!0,actions:{get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}}};
this.$get=["$http","$q",function(q,h){function u(d,g){this.template=d;this.defaults=s({},f.defaults,g);this.urlParams={}}function w(y,g,l,m){function c(b,k){var c={};k=s({},g,k);r(k,function(a,k){v(a)&&(a=a());var d;if(a&&a.charAt&&"@"==a.charAt(0)){d=b;var e=a.substr(1);if(null==e||""===e||"hasOwnProperty"===e||!C.test("."+e))throw x("badmember",e);for(var e=e.split("."),n=0,g=e.length;n<g&&d!==B;n++){var h=e[n];d=null!==d?d[h]:B}}else d=a;c[k]=d});return c}function F(b){return b.resource}function e(b){D(b||
{},this)}var G=new u(y,m);l=s({},f.defaults.actions,l);e.prototype.toJSON=function(){var b=s({},this);delete b.$promise;delete b.$resolved;return b};r(l,function(b,k){var g=/^(POST|PUT|PATCH)$/i.test(b.method);e[k]=function(a,z,m,y){var n={},f,l,A;switch(arguments.length){case 4:A=y,l=m;case 3:case 2:if(v(z)){if(v(a)){l=a;A=z;break}l=z;A=m}else{n=a;f=z;l=m;break}case 1:v(a)?l=a:g?f=a:n=a;break;case 0:break;default:throw x("badargs",arguments.length);}var u=this instanceof e,p=u?f:b.isArray?[]:new e(f),
t={},w=b.interceptor&&b.interceptor.response||F,C=b.interceptor&&b.interceptor.responseError||B;r(b,function(b,a){"params"!=a&&"isArray"!=a&&"interceptor"!=a&&(t[a]=H(b))});g&&(t.data=f);G.setUrlParams(t,s({},c(f,b.params||{}),n),b.url);n=q(t).then(function(a){var c=a.data,g=p.$promise;if(c){if(d.isArray(c)!==!!b.isArray)throw x("badcfg",k,b.isArray?"array":"object",d.isArray(c)?"array":"object",t.method,t.url);b.isArray?(p.length=0,r(c,function(a){"object"===typeof a?p.push(new e(a)):p.push(a)})):
(D(c,p),p.$promise=g)}p.$resolved=!0;a.resource=p;return a},function(a){p.$resolved=!0;(A||E)(a);return h.reject(a)});n=n.then(function(a){var b=w(a);(l||E)(b,a.headers);return b},C);return u?n:(p.$promise=n,p.$resolved=!1,p)};e.prototype["$"+k]=function(a,b,c){v(a)&&(c=b,b=a,a={});a=e[k].call(this,a,this,b,c);return a.$promise||a}});e.bind=function(b){return w(y,s({},g,b),l)};return e}var E=d.noop,r=d.forEach,s=d.extend,H=d.copy,v=d.isFunction;u.prototype={setUrlParams:function(f,g,l){var m=this,
c=l||m.template,h,e,q=m.urlParams={};r(c.split(/\W/),function(b){if("hasOwnProperty"===b)throw x("badname");!/^\d+$/.test(b)&&b&&(new RegExp("(^|[^\\\\]):"+b+"(\\W|$)")).test(c)&&(q[b]=!0)});c=c.replace(/\\:/g,":");g=g||{};r(m.urlParams,function(b,k){h=g.hasOwnProperty(k)?g[k]:m.defaults[k];d.isDefined(h)&&null!==h?(e=encodeURIComponent(h).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,
"+"),c=c.replace(new RegExp(":"+k+"(\\W|$)","g"),function(b,a){return e+a})):c=c.replace(new RegExp("(/?):"+k+"(\\W|$)","g"),function(b,a,c){return"/"==c.charAt(0)?c:a+c})});m.defaults.stripTrailingSlashes&&(c=c.replace(/\/+$/,"")||"/");c=c.replace(/\/\.(?=\w+($|\?))/,".");f.url=c.replace(/\/\\\./,"/.");r(g,function(b,c){m.urlParams[c]||(f.params=f.params||{},f.params[c]=b)})}};return w}]})})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.4.1
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(F,t,W){'use strict';function ua(a,b,c){if(!a)throw ngMinErr("areq",b||"?",c||"required");return a}function va(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;X(a)&&(a=a.join(" "));X(b)&&(b=b.join(" "));return a+" "+b}function Ea(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function ba(a,b,c){var d="";a=X(a)?a:a&&U(a)&&a.length?a.split(/\s+/):[];u(a,function(a,s){a&&0<a.length&&(d+=0<s?" ":"",d+=c?b+a:a+b)});return d}function Fa(a){if(a instanceof G)switch(a.length){case 0:return[];
case 1:if(1===a[0].nodeType)return a;break;default:return G(ka(a))}if(1===a.nodeType)return G(a)}function ka(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Ga(a,b,c){u(b,function(b){a.addClass(b,c)})}function Ha(a,b,c){u(b,function(b){a.removeClass(b,c)})}function ha(a){return function(b,c){c.addClass&&(Ga(a,b,c.addClass),c.addClass=null);c.removeClass&&(Ha(a,b,c.removeClass),c.removeClass=null)}}function ia(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
H;a.domOperation=function(){a.$$domOperationFired=!0;b();b=H};a.$$prepared=!0}return a}function ca(a,b){wa(a,b);xa(a,b)}function wa(a,b){b.from&&(a.css(b.from),b.from=null)}function xa(a,b){b.to&&(a.css(b.to),b.to=null)}function R(a,b,c){var d=(b.addClass||"")+" "+(c.addClass||""),e=(b.removeClass||"")+" "+(c.removeClass||"");a=Ia(a.attr("class"),d,e);ya(b,c);b.addClass=a.addClass?a.addClass:null;b.removeClass=a.removeClass?a.removeClass:null;return b}function Ia(a,b,c){function d(a){U(a)&&(a=a.split(" "));
var b={};u(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);u(b,function(a,b){e[b]=1});c=d(c);u(c,function(a,b){e[b]=1===e[b]?null:-1});var s={addClass:"",removeClass:""};u(e,function(b,c){var d,e;1===b?(d="addClass",e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(s[d].length&&(s[d]+=" "),s[d]+=c)});return s}function A(a){return a instanceof t.element?a[0]:a}function za(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};u(c,function(a,b){var c=e[a];if(c){var l=c.charAt(0);
if("-"===l||"+"===l||0<=l)c=Ja(c);0===c&&(c=null);d[b]=c}});return d}function Ja(a){var b=0;a=a.split(/\s*,\s*/);u(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function la(a){return 0===a||null!=a}function Aa(a,b){var c=O,d=a+"s";b?c+="Duration":d+=" linear all";return[c,d]}function ja(a,b){var c=b?"-"+b+"s":"";da(a,[ea,c]);return[ea,c]}function ma(a,b){var c=b?"paused":"",d=V+"PlayState";da(a,[d,c]);return[d,c]}function da(a,
b){a.style[b[0]]=b[1]}function Ba(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}var H=t.noop,ya=t.extend,G=t.element,u=t.forEach,X=t.isArray,U=t.isString,na=t.isObject,Ka=t.isUndefined,La=t.isDefined,Ca=t.isFunction,oa=t.isElement,O,pa,V,qa;F.ontransitionend===W&&F.onwebkittransitionend!==W?(O="WebkitTransition",pa="webkitTransitionEnd transitionend"):
(O="transition",pa="transitionend");F.onanimationend===W&&F.onwebkitanimationend!==W?(V="WebkitAnimation",qa="webkitAnimationEnd animationend"):(V="animation",qa="animationend");var ra=V+"Delay",sa=V+"Duration",ea=O+"Delay";F=O+"Duration";var Ma={transitionDuration:F,transitionDelay:ea,transitionProperty:O+"Property",animationDuration:sa,animationDelay:ra,animationIterationCount:V+"IterationCount"},Na={transitionDuration:F,transitionDelay:ea,animationDuration:sa,animationDelay:ra};t.module("ngAnimate",
[]).directive("ngAnimateChildren",[function(){return function(a,b,c){a=c.ngAnimateChildren;t.isString(a)&&0===a.length?b.data("$$ngAnimateChildren",!0):c.$observe("ngAnimateChildren",function(a){b.data("$$ngAnimateChildren","on"===a||"true"===a)})}}]).factory("$$rAFMutex",["$$rAF",function(a){return function(){var b=!1;a(function(){b=!0});return function(c){b?c():a(c)}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d.push([].concat(a));c()}function c(){if(d.length){for(var b=[],n=
0;n<d.length;n++){var g=d[n];g.shift()();g.length&&b.push(g)}d=b;e||a(function(){e||c()})}}var d=[],e;b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).factory("$$AnimateRunner",["$q","$$rAFMutex",function(a,b){function c(a){this.setHost(a);this._doneCallbacks=[];this._runInAnimationFrame=b();this._state=0}c.chain=function(a,b){function c(){if(n===a.length)b(!0);else a[n](function(a){!1===a?b(!1):(n++,c())})}var n=0;c()};c.all=function(a,b){function c(s){g=g&&s;++n===
a.length&&b(g)}var n=0,g=!0;u(a,function(a){a.done(c)})};c.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:H,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&
this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=this;0===b._state&&(b._state=1,b._runInAnimationFrame(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(u(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return c}]).provider("$$animateQueue",["$animateProvider",
function(a){function b(a,b,c,g){return d[a].some(function(a){return a(b,c,g)})}function c(a,b){a=a||{};var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var d=this.rules={skip:[],cancel:[],join:[]};d.join.push(function(a,b,d){return!b.structural&&c(b.options)});d.skip.push(function(a,b,d){return!b.structural&&!c(b.options)});d.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});d.skip.push(function(a,b,c){return c.structural&&!b.structural});d.cancel.push(function(a,
b,c){return c.structural&&b.structural});d.cancel.push(function(a,b,c){return 2===c.state&&b.structural});d.cancel.push(function(a,b,c){a=b.options;c=c.options;return a.addClass&&a.addClass===c.removeClass||a.removeClass&&a.removeClass===c.addClass});this.$get=["$$rAF","$rootScope","$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite",function(d,s,n,g,l,D,z,Z,I){function w(a,b){var c=A(a),f=[],d=m[b];d&&u(d,function(a){a.node.contains(c)&&f.push(a.callback)});
return f}function B(a,b,c,f){d(function(){u(w(b,a),function(a){a(b,c,f)})})}function r(a,S,p){function d(b,c,f,p){B(c,a,f,p);b.progress(c,f,p)}function k(b){Da(a,p);ca(a,p);p.domOperation();m.complete(!b)}var P,E;if(a=Fa(a))P=A(a),E=a.parent();p=ia(p);var m=new z;if(!P)return k(),m;X(p.addClass)&&(p.addClass=p.addClass.join(" "));X(p.removeClass)&&(p.removeClass=p.removeClass.join(" "));p.from&&!na(p.from)&&(p.from=null);p.to&&!na(p.to)&&(p.to=null);var e=[P.className,p.addClass,p.removeClass].join(" ");
if(!v(e))return k(),m;var M=0<=["enter","move","leave"].indexOf(S),g=!x||L.get(P),e=!g&&h.get(P)||{},l=!!e.state;g||l&&1==e.state||(g=!ta(a,E,S));if(g)return k(),m;M&&K(a);g={structural:M,element:a,event:S,close:k,options:p,runner:m};if(l){if(b("skip",a,g,e)){if(2===e.state)return k(),m;R(a,e.options,p);return e.runner}if(b("cancel",a,g,e))2===e.state?e.runner.end():e.structural?e.close():R(a,g.options,e.options);else if(b("join",a,g,e))if(2===e.state)R(a,p,{});else return S=g.event=e.event,p=R(a,
e.options,g.options),m}else R(a,p,{});(l=g.structural)||(l="animate"===g.event&&0<Object.keys(g.options.to||{}).length||c(g.options));if(!l)return k(),C(a),m;M&&f(E);var r=(e.counter||0)+1;g.counter=r;ga(a,1,g);s.$$postDigest(function(){var b=h.get(P),v=!b,b=b||{},e=a.parent()||[],E=0<e.length&&("animate"===b.event||b.structural||c(b.options));if(v||b.counter!==r||!E){v&&(Da(a,p),ca(a,p));if(v||M&&b.event!==S)p.domOperation(),m.end();E||C(a)}else S=!b.structural&&c(b.options,!0)?"setClass":b.event,
b.structural&&f(e),ga(a,2),b=D(a,S,b.options),b.done(function(b){k(!b);(b=h.get(P))&&b.counter===r&&C(A(a));d(m,S,"close",{})}),m.setHost(b),d(m,S,"start",{})});return m}function K(a){a=A(a).querySelectorAll("[data-ng-animate]");u(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=h.get(a);switch(b){case 2:c.runner.end();case 1:c&&h.remove(a)}})}function C(a){a=A(a);a.removeAttribute("data-ng-animate");h.remove(a)}function E(a,b){return A(a)===A(b)}function f(a){a=A(a);do{if(!a||1!==
a.nodeType)break;var b=h.get(a);if(b){var f=a;!b.structural&&c(b.options)&&(2===b.state&&b.runner.end(),C(f))}a=a.parentNode}while(1)}function ta(a,b,c){var f=c=!1,d=!1,v;for((a=a.data("$ngAnimatePin"))&&(b=a);b&&b.length;){f||(f=E(b,n));a=b[0];if(1!==a.nodeType)break;var e=h.get(a)||{};d||(d=e.structural||L.get(a));if(Ka(v)||!0===v)a=b.data("$$ngAnimateChildren"),La(a)&&(v=a);if(d&&!1===v)break;f||(f=E(b,n),f||(a=b.data("$ngAnimatePin"))&&(b=a));c||(c=E(b,k));b=b.parent()}return(!d||v)&&f&&c}function ga(a,
b,c){c=c||{};c.state=b;a=A(a);a.setAttribute("data-ng-animate",b);c=(b=h.get(a))?ya(b,c):c;h.put(a,c)}var h=new l,L=new l,x=null,M=s.$watch(function(){return 0===Z.totalPendingRequests},function(a){a&&(M(),s.$$postDigest(function(){s.$$postDigest(function(){null===x&&(x=!0)})}))}),k=G(g[0].body),m={},P=a.classNameFilter(),v=P?function(a){return P.test(a)}:function(){return!0},Da=ha(I);return{on:function(a,b,c){b=ka(b);m[a]=m[a]||[];m[a].push({node:b,callback:c})},off:function(a,b,c){function f(a,
b,c){var d=ka(b);return a.filter(function(a){return!(a.node===d&&(!c||a.callback===c))})}var d=m[a];d&&(m[a]=1===arguments.length?null:f(d,b,c))},pin:function(a,b){ua(oa(a),"element","not an element");ua(oa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return r(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!x;else if(oa(a)){var f=A(a),d=L.get(f);1===c?b=!d:(b=!!b)?d&&L.remove(f):L.put(f,!0)}else b=x=!!a;return b}}}]}]).provider("$$animation",
["$animateProvider",function(a){function b(a){return a.data("$$animationRunner")}var c=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$rAFScheduler",function(a,e,s,n,g){var l=[],D=ha(a),z=0,Z=0,I=[];return function(w,B,r){function K(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];u(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&b.push(a)});return b}function C(a){var b=[],c={};u(a,function(a,f){var d=A(a.element),
e=0<=["enter","move"].indexOf(a.event),d=a.structural?K(d):[];if(d.length){var h=e?"to":"from";u(d,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][h]={animationID:f,element:G(a)}})}else b.push(a)});var f={},d={};u(c,function(c,e){var h=c.from,k=c.to;if(h&&k){var m=a[h.animationID],g=a[k.animationID],x=h.animationID.toString();if(!d[x]){var B=d[x]={structural:!0,beforeStart:function(){m.beforeStart();g.beforeStart()},close:function(){m.close();g.close()},classes:E(m.classes,g.classes),
from:m,to:g,anchors:[]};B.classes.length?b.push(B):(b.push(m),b.push(g))}d[x].anchors.push({out:h.element,"in":k.element})}else h=h?h.animationID:k.animationID,k=h.toString(),f[k]||(f[k]=!0,b.push(a[h]))});return b}function E(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],f=0;f<a.length;f++){var d=a[f];if("ng-"!==d.substring(0,3))for(var h=0;h<b.length;h++)if(d===b[h]){c.push(d);break}}return c.join(" ")}function f(a){for(var b=c.length-1;0<=b;b--){var f=c[b];if(s.has(f)&&(f=s.get(f)(a)))return f}}
function ta(a,c){a.from&&a.to?(b(a.from.element).setHost(c),b(a.to.element).setHost(c)):b(a.element).setHost(c)}function ga(){var a=b(w);!a||"leave"===B&&r.$$domOperationFired||a.end()}function h(b){w.off("$destroy",ga);w.removeData("$$animationRunner");D(w,r);ca(w,r);r.domOperation();k&&a.removeClass(w,k);w.removeClass("ng-animate");x.complete(!b)}r=ia(r);var L=0<=["enter","move","leave"].indexOf(B),x=new n({end:function(){h()},cancel:function(){h(!0)}});if(!c.length)return h(),x;w.data("$$animationRunner",
x);var M=va(w.attr("class"),va(r.addClass,r.removeClass)),k=r.tempClasses;k&&(M+=" "+k,r.tempClasses=null);var m;L||(m=z,z+=1);l.push({element:w,classes:M,event:B,classBasedIndex:m,structural:L,options:r,beforeStart:function(){w.addClass("ng-animate");k&&a.addClass(w,k)},close:h});w.on("$destroy",ga);if(1<l.length)return x;e.$$postDigest(function(){Z=z;z=0;I.length=0;var a=[];u(l,function(c){b(c.element)&&a.push(c)});l.length=0;u(C(a),function(a){function c(){a.beforeStart();var d,h=a.close;if(b(a.anchors?
a.from.element||a.to.element:a.element)){var k=f(a);k&&(d=k.start)}d?(d=d(),d.done(function(a){h(!a)}),ta(a,d)):h()}a.structural?c():(I.push({node:A(a.element),fn:c}),a.classBasedIndex===Z-1&&(I=I.sort(function(a,b){return b.node.contains(a.node)}).map(function(a){return a.fn}),g(I)))})});return x}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ba(),c=Ba();this.$get=["$window","$$jqLite","$$AnimateRunner","$timeout","$document","$sniffer","$$rAFScheduler",function(a,e,s,n,g,l,D){function z(a,
b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++r))+"-"+a.getAttribute("class")+"-"+b}function Z(g,f,B,l){var h;0<b.count(B)&&(h=c.get(B),h||(f=ba(f,"-stagger"),e.addClass(g,f),h=za(a,g,l),h.animationDuration=Math.max(h.animationDuration,0),h.transitionDuration=Math.max(h.transitionDuration,0),e.removeClass(g,f),c.put(B,h)));return h||{}}function I(a){C.push(a);D.waitUntilQuiet(function(){b.flush();c.flush();for(var a=K.offsetWidth+1,d=0;d<C.length;d++)C[d](a);C.length=
0})}function w(c,f,e){f=b.get(e);f||(f=za(a,c,Ma),"infinite"===f.animationIterationCount&&(f.animationIterationCount=1));b.put(e,f);c=f;e=c.animationDelay;f=c.transitionDelay;c.maxDelay=e&&f?Math.max(e,f):e||f;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var B=ha(e),r=0,K=A(g).body,C=[];return function(a,c){function d(){h()}function g(){h(!0)}function h(b){if(!(K||C&&D)){K=!0;D=!1;e.removeClass(a,Y);e.removeClass(a,W);ma(k,!1);ja(k,!1);u(m,function(a){k.style[a[0]]=
""});B(a,c);ca(a,c);if(c.onDone)c.onDone();p&&p.complete(!b)}}function L(a){q.blockTransition&&ja(k,a);q.blockKeyframeAnimation&&ma(k,!!a)}function x(){p=new s({end:d,cancel:g});h();return{$$willAnimate:!1,start:function(){return p},end:d}}function M(){function b(){if(!K){L(!1);u(m,function(a){k.style[a[0]]=a[1]});B(a,c);e.addClass(a,W);if(q.recalculateTimingStyles){fa=k.className+" "+Y;$=z(k,fa);y=w(k,fa,$);Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;if(0===J){h();return}q.hasTransitions=0<y.transitionDuration;
q.hasAnimations=0<y.animationDuration}if(q.applyTransitionDelay||q.applyAnimationDelay){Q="boolean"!==typeof c.delay&&la(c.delay)?parseFloat(c.delay):Q;H=Math.max(Q,0);var l;q.applyTransitionDelay&&(y.transitionDelay=Q,l=[ea,Q+"s"],m.push(l),k.style[l[0]]=l[1]);q.applyAnimationDelay&&(y.animationDelay=Q,l=[ra,Q+"s"],m.push(l),k.style[l[0]]=l[1])}F=1E3*H;G=1E3*J;if(c.easing){var r=c.easing;q.hasTransitions&&(l=O+"TimingFunction",m.push([l,r]),k.style[l]=r);q.hasAnimations&&(l=V+"TimingFunction",m.push([l,
r]),k.style[l]=r)}y.transitionDuration&&p.push(pa);y.animationDuration&&p.push(qa);x=Date.now();a.on(p.join(" "),g);n(d,F+1.5*G);xa(a,c)}}function d(){h()}function g(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||b.timeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-x,0)>=F&&b>=J&&(C=!0,h())}if(!K){var x,p=[],l=function(a){if(C)D&&a&&(D=!1,h());else if(D=!a,y.animationDuration)if(a=ma(k,D),D)m.push(a);else{var b=m,c=b.indexOf(a);0<=a&&b.splice(c,1)}},r=0<
U&&(y.transitionDuration&&0===T.transitionDuration||y.animationDuration&&0===T.animationDuration)&&Math.max(T.animationDelay,T.transitionDelay);r?n(b,Math.floor(r*U*1E3),!1):b();t.resume=function(){l(!0)};t.pause=function(){l(!1)}}}var k=A(a);c=ia(c);var m=[],r=a.attr("class"),v=Ea(c),K,D,C,p,t,H,F,J,G;if(0===c.duration||!l.animations&&!l.transitions)return x();var aa=c.event&&X(c.event)?c.event.join(" "):c.event,R="",N="";aa&&c.structural?R=ba(aa,"ng-",!0):aa&&(R=aa);c.addClass&&(N+=ba(c.addClass,
"-add"));c.removeClass&&(N.length&&(N+=" "),N+=ba(c.removeClass,"-remove"));c.applyClassesEarly&&N.length&&(B(a,c),N="");var Y=[R,N].join(" ").trim(),fa=r+" "+Y,W=ba(Y,"-active"),r=v.to&&0<Object.keys(v.to).length;if(!r&&!Y)return x();var $,T;0<c.stagger?(v=parseFloat(c.stagger),T={transitionDelay:v,animationDelay:v,transitionDuration:0,animationDuration:0}):($=z(k,fa),T=Z(k,Y,$,Na));e.addClass(a,Y);c.transitionStyle&&(v=[O,c.transitionStyle],da(k,v),m.push(v));0<=c.duration&&(v=0<k.style[O].length,
v=Aa(c.duration,v),da(k,v),m.push(v));c.keyframeStyle&&(v=[V,c.keyframeStyle],da(k,v),m.push(v));var U=T?0<=c.staggerIndex?c.staggerIndex:b.count($):0;(aa=0===U)&&ja(k,9999);var y=w(k,fa,$),Q=y.maxDelay;H=Math.max(Q,0);J=y.maxDuration;var q={};q.hasTransitions=0<y.transitionDuration;q.hasAnimations=0<y.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==y.transitionProperty;q.applyTransitionDuration=r&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=
c.duration&&q.hasAnimations;q.applyTransitionDelay=la(c.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=la(c.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<N.length;if(q.applyTransitionDuration||q.applyAnimationDuration)J=c.duration?parseFloat(c.duration):J,q.applyTransitionDuration&&(q.hasTransitions=!0,y.transitionDuration=J,v=0<k.style[O+"Property"].length,m.push(Aa(J,v))),q.applyAnimationDuration&&(q.hasAnimations=!0,y.animationDuration=J,m.push([sa,J+"s"]));if(0===
J&&!q.recalculateTimingStyles)return x();null==c.duration&&0<y.transitionDuration&&(q.recalculateTimingStyles=q.recalculateTimingStyles||aa);F=1E3*H;G=1E3*J;c.skipBlocking||(q.blockTransition=0<y.transitionDuration,q.blockKeyframeAnimation=0<y.animationDuration&&0<T.animationDelay&&0===T.animationDuration);wa(a,c);q.blockTransition||ja(k,!1);L(J);return{$$willAnimate:!0,end:d,start:function(){if(!K)return t={end:d,cancel:g,resume:null,pause:null},p=new s(t),I(M),p}}}}]}]).provider("$$animateCssDriver",
["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$document","$sniffer",function(a,c,d,e,s,n){function g(a){return a.replace(/\bng-\S+\b/g,"")}function l(a,b){U(a)&&(a=a.split(" "));U(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function D(c,e,z){function D(a){var b={},c=A(a).getBoundingClientRect();u(["width","height","top","left"],function(a){var d=c[a];switch(a){case "top":d+=
I.scrollTop;break;case "left":d+=I.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function s(){var c=g(z.attr("class")||""),d=l(c,t),c=l(t,c),d=a(n,{to:D(z),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function f(){n.remove();e.removeClass("ng-animate-shim");z.removeClass("ng-animate-shim")}var n=G(A(e).cloneNode(!0)),t=g(n.attr("class")||"");e.addClass("ng-animate-shim");z.addClass("ng-animate-shim");n.addClass("ng-anchor");w.append(n);var h;c=
function(){var c=a(n,{addClass:"ng-anchor-out",delay:!0,from:D(e)});return c.$$willAnimate?c:null}();if(!c&&(h=s(),!h))return f();var L=c||h;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!h&&(h=s()))return c=h.start(),c.done(function(){c=null;f();b.complete()}),c;f();b.complete()});return b=new d({end:a,cancel:a})}}}function z(a,b,c,e){var g=t(a),f=t(b),l=[];u(e,function(a){(a=D(c,a.out,a["in"]))&&l.push(a)});if(g||f||0!==l.length)return{start:function(){function a(){u(b,
function(a){a.end()})}var b=[];g&&b.push(g.start());f&&b.push(f.start());u(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function t(c){var d=c.element,e=c.options||{};c.structural?(e.structural=e.applyClassesEarly=!0,e.event=c.event,"leave"===e.event&&(e.onDone=e.domOperation)):e.event=null;c=a(d,e);return c.$$willAnimate?c:null}if(!n.animations&&!n.transitions)return H;var I=A(s).body;c=A(e);var w=G(I.parentNode===c?I:c);return function(a){return a.from&&
a.to?z(a.from,a.to,a.classes,a.anchors):t(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$rAFMutex","$$jqLite",function(b,c,d,e){function s(c){c=X(c)?c:c.split(" ");for(var d=[],e={},z=0;z<c.length;z++){var n=c[z],s=a.$$registeredAnimations[n];s&&!e[n]&&(d.push(b.get(s)),e[n]=!0)}return d}var n=ha(e);return function(a,b,d,e){function t(){e.domOperation();n(a,e)}function A(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=
[b,r,K,f];break;case "addClass":b=[b,r,f];break;case "removeClass":b=[b,K,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ca(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ca(a))return a;return H}function w(a,b,d,e,f){var m=[];u(e,function(e){var g=e[f];g&&m.push(function(){var e,f,m=!1,k=function(a){m||(m=!0,(f||H)(a),e.complete(!a))};e=new c({end:function(){k()},cancel:function(){k(!0)}});f=A(g,a,b,d,function(a){k(!1===a)});return e})});return m}function B(a,b,d,e,f){var m=w(a,
b,d,e,f);if(0===m.length){var g,l;"beforeSetClass"===f?(g=w(a,"removeClass",d,e,"beforeRemoveClass"),l=w(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(g=w(a,"removeClass",d,e,"removeClass"),l=w(a,"addClass",d,e,"addClass"));g&&(m=m.concat(g));l&&(m=m.concat(l))}if(0!==m.length)return function(a){var b=[];m.length&&u(m,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){u(b,function(b){a?b.cancel():b.end()})}}}3===arguments.length&&na(d)&&(e=d,d=null);e=ia(e);d||(d=a.attr("class")||
"",e.addClass&&(d+=" "+e.addClass),e.removeClass&&(d+=" "+e.removeClass));var r=e.addClass,K=e.removeClass,C=s(d),E,f;if(C.length){var F,G;"leave"==b?(G="leave",F="afterLeave"):(G="before"+b.charAt(0).toUpperCase()+b.substr(1),F=b);"enter"!==b&&"move"!==b&&(E=B(a,b,e,C,G));f=B(a,b,e,C,F)}if(E||f)return{start:function(){function b(c){n=!0;t();ca(a,e);k.complete(c)}var d,l=[];E&&l.push(function(a){d=E(a)});l.length?l.push(function(a){t();a(!0)}):t();f&&l.push(function(a){d=f(a)});var n=!1,k=new c({end:function(){n||
((d||H)(void 0),b(void 0))},cancel:function(){n||((d||H)(!0),b(!0))}});c.chain(l,b);return k}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){u(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());
n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

/*
 AngularJS v1.4.1
 (c) 2010-2015 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(A,h,B){'use strict';function v(h){return["$animate",function(q){return{restrict:"AE",transclude:"element",terminal:!0,require:"^^ngMessages",link:function(m,e,a,g,k){var c=e[0],n,l=a.ngMessage||a.when;a=a.ngMessageExp||a.whenExp;var p=function(d){n=d?w(d)?d:d.split(/[\s,]+/):null;g.reRender()};a?(p(m.$eval(a)),m.$watchCollection(a,p)):p(l);var f,r;g.register(c,r={test:function(d){var b=n;d=b?w(b)?0<=b.indexOf(d):b.hasOwnProperty(d):void 0;return d},attach:function(){f||k(m,function(d){q.enter(d,
null,e);f=d;f.on("$destroy",function(){f&&(g.deregister(c),r.detach())})})},detach:function(){if(f){var d=f;f=null;q.leave(d)}}})}}}]}var w=h.isArray,x=h.forEach,y=h.isString,z=h.element;h.module("ngMessages",[]).directive("ngMessages",["$animate",function(h){function q(e,a){return y(a)&&0===a.length||m(e.$eval(a))}function m(e){return y(e)?e.length:!!e}return{require:"ngMessages",restrict:"AE",controller:["$element","$scope","$attrs",function(e,a,g){function k(a,d){for(var b=d,e=[];b&&b!==a;){var c=
b.$$ngMessageNode;if(c&&c.length)return l[c];b.childNodes.length&&-1==e.indexOf(b)?(e.push(b),b=b.childNodes[b.childNodes.length-1]):b=b.previousSibling||b.parentNode}}var c=this,n=0,l=this.messages={},p,f;this.render=function(r){r=r||{};p=!1;f=r;for(var d=q(a,g.ngMessagesMultiple)||q(a,g.multiple),b=[],n={},s=c.head,k=!1,l=0;null!=s;){l++;var t=s.message,u=!1;k||x(r,function(b,a){!u&&m(b)&&t.test(a)&&!n[a]&&(u=n[a]=!0,t.attach())});u?k=!d:b.push(t);s=s.next}x(b,function(b){b.detach()});b.length!==
l?h.setClass(e,"ng-active","ng-inactive"):h.setClass(e,"ng-inactive","ng-active")};a.$watchCollection(g.ngMessages||g["for"],c.render);this.reRender=function(){p||(p=!0,a.$evalAsync(function(){p&&f&&c.render(f)}))};this.register=function(a,d){var b=n.toString();l[b]={message:d};var g=e[0],f=l[b];c.head?(g=k(g,a))?(f.next=g.next,g.next=f):(f.next=c.head,c.head=f):c.head=f;a.$$ngMessageNode=b;n++;c.reRender()};this.deregister=function(a){var d=a.$$ngMessageNode;delete a.$$ngMessageNode;var b=l[d];(a=
k(e[0],a))?a.next=b.next:c.head=b.next;delete l[d];c.reRender()}}]}}]).directive("ngMessagesInclude",["$templateRequest","$document","$compile",function(h,q,m){return{restrict:"AE",require:"^^ngMessages",link:function(e,a,g){var k=g.ngMessagesInclude||g.src;h(k).then(function(c){m(c)(e,function(c){a.after(c);c=z(q[0].createComment(" ngMessagesInclude: "+k+" "));a.after(c);a.remove()})})}}}]).directive("ngMessage",v("AE")).directive("ngMessageExp",v("A"))})(window,window.angular);
//# sourceMappingURL=angular-messages.min.js.map

/*
 * angular-ui-bootstrap
 * http://angular-ui.github.io/bootstrap/

 * Version: 0.13.0 - 2015-05-02
 * License: MIT
 */
angular.module("ui.bootstrap", ["ui.bootstrap.collapse","ui.bootstrap.accordion","ui.bootstrap.alert","ui.bootstrap.bindHtml","ui.bootstrap.buttons","ui.bootstrap.carousel","ui.bootstrap.dateparser","ui.bootstrap.position","ui.bootstrap.datepicker","ui.bootstrap.dropdown","ui.bootstrap.modal","ui.bootstrap.pagination","ui.bootstrap.tooltip","ui.bootstrap.popover","ui.bootstrap.progressbar","ui.bootstrap.rating","ui.bootstrap.tabs","ui.bootstrap.timepicker","ui.bootstrap.transition","ui.bootstrap.typeahead"]);
angular.module('ui.bootstrap.collapse', [])

  .directive('collapse', ['$animate', function ($animate) {

    return {
      link: function (scope, element, attrs) {
        function expand() {
          element.removeClass('collapse').addClass('collapsing');
          $animate.addClass(element, 'in', {
            to: { height: element[0].scrollHeight + 'px' }
          }).then(expandDone);
        }

        function expandDone() {
          element.removeClass('collapsing');
          element.css({height: 'auto'});
        }

        function collapse() {
          element
            // IMPORTANT: The height must be set before adding "collapsing" class.
            // Otherwise, the browser attempts to animate from height 0 (in
            // collapsing class) to the given height here.
            .css({height: element[0].scrollHeight + 'px'})
            // initially all panel collapse have the collapse class, this removal
            // prevents the animation from jumping to collapsed state
            .removeClass('collapse')
            .addClass('collapsing');

          $animate.removeClass(element, 'in', {
            to: {height: '0'}
          }).then(collapseDone);
        }

        function collapseDone() {
          element.css({height: '0'}); // Required so that collapse works when animation is disabled
          element.removeClass('collapsing');
          element.addClass('collapse');
        }

        scope.$watch(attrs.collapse, function (shouldCollapse) {
          if (shouldCollapse) {
            collapse();
          } else {
            expand();
          }
        });
      }
    };
  }]);

angular.module('ui.bootstrap.accordion', ['ui.bootstrap.collapse'])

.constant('accordionConfig', {
  closeOthers: true
})

.controller('AccordionController', ['$scope', '$attrs', 'accordionConfig', function ($scope, $attrs, accordionConfig) {

  // This array keeps track of the accordion groups
  this.groups = [];

  // Ensure that all the groups in this accordion are closed, unless close-others explicitly says not to
  this.closeOthers = function(openGroup) {
    var closeOthers = angular.isDefined($attrs.closeOthers) ? $scope.$eval($attrs.closeOthers) : accordionConfig.closeOthers;
    if ( closeOthers ) {
      angular.forEach(this.groups, function (group) {
        if ( group !== openGroup ) {
          group.isOpen = false;
        }
      });
    }
  };

  // This is called from the accordion-group directive to add itself to the accordion
  this.addGroup = function(groupScope) {
    var that = this;
    this.groups.push(groupScope);

    groupScope.$on('$destroy', function (event) {
      that.removeGroup(groupScope);
    });
  };

  // This is called from the accordion-group directive when to remove itself
  this.removeGroup = function(group) {
    var index = this.groups.indexOf(group);
    if ( index !== -1 ) {
      this.groups.splice(index, 1);
    }
  };

}])

// The accordion directive simply sets up the directive controller
// and adds an accordion CSS class to itself element.
.directive('accordion', function () {
  return {
    restrict:'EA',
    controller:'AccordionController',
    transclude: true,
    replace: false,
    templateUrl: 'template/accordion/accordion.html'
  };
})

// The accordion-group directive indicates a block of html that will expand and collapse in an accordion
.directive('accordionGroup', function() {
  return {
    require:'^accordion',         // We need this directive to be inside an accordion
    restrict:'EA',
    transclude:true,              // It transcludes the contents of the directive into the template
    replace: true,                // The element containing the directive will be replaced with the template
    templateUrl:'template/accordion/accordion-group.html',
    scope: {
      heading: '@',               // Interpolate the heading attribute onto this scope
      isOpen: '=?',
      isDisabled: '=?'
    },
    controller: function() {
      this.setHeading = function(element) {
        this.heading = element;
      };
    },
    link: function(scope, element, attrs, accordionCtrl) {
      accordionCtrl.addGroup(scope);

      scope.$watch('isOpen', function(value) {
        if ( value ) {
          accordionCtrl.closeOthers(scope);
        }
      });

      scope.toggleOpen = function() {
        if ( !scope.isDisabled ) {
          scope.isOpen = !scope.isOpen;
        }
      };
    }
  };
})

// Use accordion-heading below an accordion-group to provide a heading containing HTML
// <accordion-group>
//   <accordion-heading>Heading containing HTML - <img src="..."></accordion-heading>
// </accordion-group>
.directive('accordionHeading', function() {
  return {
    restrict: 'EA',
    transclude: true,   // Grab the contents to be used as the heading
    template: '',       // In effect remove this element!
    replace: true,
    require: '^accordionGroup',
    link: function(scope, element, attr, accordionGroupCtrl, transclude) {
      // Pass the heading to the accordion-group controller
      // so that it can be transcluded into the right place in the template
      // [The second parameter to transclude causes the elements to be cloned so that they work in ng-repeat]
      accordionGroupCtrl.setHeading(transclude(scope, angular.noop));
    }
  };
})

// Use in the accordion-group template to indicate where you want the heading to be transcluded
// You must provide the property on the accordion-group controller that will hold the transcluded element
// <div class="accordion-group">
//   <div class="accordion-heading" ><a ... accordion-transclude="heading">...</a></div>
//   ...
// </div>
.directive('accordionTransclude', function() {
  return {
    require: '^accordionGroup',
    link: function(scope, element, attr, controller) {
      scope.$watch(function() { return controller[attr.accordionTransclude]; }, function(heading) {
        if ( heading ) {
          element.html('');
          element.append(heading);
        }
      });
    }
  };
})

;

angular.module('ui.bootstrap.alert', [])

.controller('AlertController', ['$scope', '$attrs', function ($scope, $attrs) {
  $scope.closeable = 'close' in $attrs;
  this.close = $scope.close;
}])

.directive('alert', function () {
  return {
    restrict:'EA',
    controller:'AlertController',
    templateUrl:'template/alert/alert.html',
    transclude:true,
    replace:true,
    scope: {
      type: '@',
      close: '&'
    }
  };
})

.directive('dismissOnTimeout', ['$timeout', function($timeout) {
  return {
    require: 'alert',
    link: function(scope, element, attrs, alertCtrl) {
      $timeout(function(){
        alertCtrl.close();
      }, parseInt(attrs.dismissOnTimeout, 10));
    }
  };
}]);

angular.module('ui.bootstrap.bindHtml', [])

  .directive('bindHtmlUnsafe', function () {
    return function (scope, element, attr) {
      element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
      scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
        element.html(value || '');
      });
    };
  });
angular.module('ui.bootstrap.buttons', [])

.constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
})

.controller('ButtonsController', ['buttonConfig', function(buttonConfig) {
  this.activeClass = buttonConfig.activeClass || 'active';
  this.toggleEvent = buttonConfig.toggleEvent || 'click';
}])

.directive('btnRadio', function () {
  return {
    require: ['btnRadio', 'ngModel'],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, scope.$eval(attrs.btnRadio)));
      };

      //ui->model
      element.bind(buttonsCtrl.toggleEvent, function () {
        var isActive = element.hasClass(buttonsCtrl.activeClass);

        if (!isActive || angular.isDefined(attrs.uncheckable)) {
          scope.$apply(function () {
            ngModelCtrl.$setViewValue(isActive ? null : scope.$eval(attrs.btnRadio));
            ngModelCtrl.$render();
          });
        }
      });
    }
  };
})

.directive('btnCheckbox', function () {
  return {
    require: ['btnCheckbox', 'ngModel'],
    controller: 'ButtonsController',
    link: function (scope, element, attrs, ctrls) {
      var buttonsCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      function getTrueValue() {
        return getCheckboxValue(attrs.btnCheckboxTrue, true);
      }

      function getFalseValue() {
        return getCheckboxValue(attrs.btnCheckboxFalse, false);
      }

      function getCheckboxValue(attributeValue, defaultValue) {
        var val = scope.$eval(attributeValue);
        return angular.isDefined(val) ? val : defaultValue;
      }

      //model -> UI
      ngModelCtrl.$render = function () {
        element.toggleClass(buttonsCtrl.activeClass, angular.equals(ngModelCtrl.$modelValue, getTrueValue()));
      };

      //ui->model
      element.bind(buttonsCtrl.toggleEvent, function () {
        scope.$apply(function () {
          ngModelCtrl.$setViewValue(element.hasClass(buttonsCtrl.activeClass) ? getFalseValue() : getTrueValue());
          ngModelCtrl.$render();
        });
      });
    }
  };
});

/**
* @ngdoc overview
* @name ui.bootstrap.carousel
*
* @description
* AngularJS version of an image carousel.
*
*/
angular.module('ui.bootstrap.carousel', [])
.controller('CarouselController', ['$scope', '$interval', '$animate', function ($scope, $interval, $animate) {
  var self = this,
    slides = self.slides = $scope.slides = [],
    currentIndex = -1,
    currentInterval, isPlaying;
  self.currentSlide = null;

  var destroyed = false;
  /* direction: "prev" or "next" */
  self.select = $scope.select = function(nextSlide, direction) {
    var nextIndex = self.indexOfSlide(nextSlide);
    //Decide direction if it's not given
    if (direction === undefined) {
      direction = nextIndex > self.getCurrentIndex() ? 'next' : 'prev';
    }
    if (nextSlide && nextSlide !== self.currentSlide) {
      goNext();
    }
    function goNext() {
      // Scope has been destroyed, stop here.
      if (destroyed) { return; }

      angular.extend(nextSlide, {direction: direction, active: true});
      angular.extend(self.currentSlide || {}, {direction: direction, active: false});
      if ($animate.enabled() && !$scope.noTransition && nextSlide.$element) {
        $scope.$currentTransition = true;
        nextSlide.$element.one('$animate:close', function closeFn() {
          $scope.$currentTransition = null;
        });
      }

      self.currentSlide = nextSlide;
      currentIndex = nextIndex;
      //every time you change slides, reset the timer
      restartTimer();
    }
  };
  $scope.$on('$destroy', function () {
    destroyed = true;
  });

  function getSlideByIndex(index) {
    if (angular.isUndefined(slides[index].index)) {
      return slides[index];
    }
    var i, len = slides.length;
    for (i = 0; i < slides.length; ++i) {
      if (slides[i].index == index) {
        return slides[i];
      }
    }
  }

  self.getCurrentIndex = function() {
    if (self.currentSlide && angular.isDefined(self.currentSlide.index)) {
      return +self.currentSlide.index;
    }
    return currentIndex;
  };

  /* Allow outside people to call indexOf on slides array */
  self.indexOfSlide = function(slide) {
    return angular.isDefined(slide.index) ? +slide.index : slides.indexOf(slide);
  };

  $scope.next = function() {
    var newIndex = (self.getCurrentIndex() + 1) % slides.length;

    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (!$scope.$currentTransition) {
      return self.select(getSlideByIndex(newIndex), 'next');
    }
  };

  $scope.prev = function() {
    var newIndex = self.getCurrentIndex() - 1 < 0 ? slides.length - 1 : self.getCurrentIndex() - 1;

    //Prevent this user-triggered transition from occurring if there is already one in progress
    if (!$scope.$currentTransition) {
      return self.select(getSlideByIndex(newIndex), 'prev');
    }
  };

  $scope.isActive = function(slide) {
     return self.currentSlide === slide;
  };

  $scope.$watch('interval', restartTimer);
  $scope.$on('$destroy', resetTimer);

  function restartTimer() {
    resetTimer();
    var interval = +$scope.interval;
    if (!isNaN(interval) && interval > 0) {
      currentInterval = $interval(timerFn, interval);
    }
  }

  function resetTimer() {
    if (currentInterval) {
      $interval.cancel(currentInterval);
      currentInterval = null;
    }
  }

  function timerFn() {
    var interval = +$scope.interval;
    if (isPlaying && !isNaN(interval) && interval > 0) {
      $scope.next();
    } else {
      $scope.pause();
    }
  }

  $scope.play = function() {
    if (!isPlaying) {
      isPlaying = true;
      restartTimer();
    }
  };
  $scope.pause = function() {
    if (!$scope.noPause) {
      isPlaying = false;
      resetTimer();
    }
  };

  self.addSlide = function(slide, element) {
    slide.$element = element;
    slides.push(slide);
    //if this is the first slide or the slide is set to active, select it
    if(slides.length === 1 || slide.active) {
      self.select(slides[slides.length-1]);
      if (slides.length == 1) {
        $scope.play();
      }
    } else {
      slide.active = false;
    }
  };

  self.removeSlide = function(slide) {
    if (angular.isDefined(slide.index)) {
      slides.sort(function(a, b) {
        return +a.index > +b.index;
      });
    }
    //get the index of the slide inside the carousel
    var index = slides.indexOf(slide);
    slides.splice(index, 1);
    if (slides.length > 0 && slide.active) {
      if (index >= slides.length) {
        self.select(slides[index-1]);
      } else {
        self.select(slides[index]);
      }
    } else if (currentIndex > index) {
      currentIndex--;
    }
  };

}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.carousel.directive:carousel
 * @restrict EA
 *
 * @description
 * Carousel is the outer container for a set of image 'slides' to showcase.
 *
 * @param {number=} interval The time, in milliseconds, that it will take the carousel to go to the next slide.
 * @param {boolean=} noTransition Whether to disable transitions on the carousel.
 * @param {boolean=} noPause Whether to disable pausing on the carousel (by default, the carousel interval pauses on hover).
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <carousel>
      <slide>
        <img src="http://placekitten.com/150/150" style="margin:auto;">
        <div class="carousel-caption">
          <p>Beautiful!</p>
        </div>
      </slide>
      <slide>
        <img src="http://placekitten.com/100/150" style="margin:auto;">
        <div class="carousel-caption">
          <p>D'aww!</p>
        </div>
      </slide>
    </carousel>
  </file>
  <file name="demo.css">
    .carousel-indicators {
      top: auto;
      bottom: 15px;
    }
  </file>
</example>
 */
.directive('carousel', [function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    controller: 'CarouselController',
    require: 'carousel',
    templateUrl: 'template/carousel/carousel.html',
    scope: {
      interval: '=',
      noTransition: '=',
      noPause: '='
    }
  };
}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.carousel.directive:slide
 * @restrict EA
 *
 * @description
 * Creates a slide inside a {@link ui.bootstrap.carousel.directive:carousel carousel}.  Must be placed as a child of a carousel element.
 *
 * @param {boolean=} active Model binding, whether or not this slide is currently active.
 * @param {number=} index The index of the slide. The slides will be sorted by this parameter.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
<div ng-controller="CarouselDemoCtrl">
  <carousel>
    <slide ng-repeat="slide in slides" active="slide.active" index="$index">
      <img ng-src="{{slide.image}}" style="margin:auto;">
      <div class="carousel-caption">
        <h4>Slide {{$index}}</h4>
        <p>{{slide.text}}</p>
      </div>
    </slide>
  </carousel>
  Interval, in milliseconds: <input type="number" ng-model="myInterval">
  <br />Enter a negative number to stop the interval.
</div>
  </file>
  <file name="script.js">
function CarouselDemoCtrl($scope) {
  $scope.myInterval = 5000;
}
  </file>
  <file name="demo.css">
    .carousel-indicators {
      top: auto;
      bottom: 15px;
    }
  </file>
</example>
*/

.directive('slide', function() {
  return {
    require: '^carousel',
    restrict: 'EA',
    transclude: true,
    replace: true,
    templateUrl: 'template/carousel/slide.html',
    scope: {
      active: '=?',
      index: '=?'
    },
    link: function (scope, element, attrs, carouselCtrl) {
      carouselCtrl.addSlide(scope, element);
      //when the scope is destroyed then remove the slide from the current slides array
      scope.$on('$destroy', function() {
        carouselCtrl.removeSlide(scope);
      });

      scope.$watch('active', function(active) {
        if (active) {
          carouselCtrl.select(scope);
        }
      });
    }
  };
})

.animation('.item', [
         '$animate',
function ($animate) {
  return {
    beforeAddClass: function (element, className, done) {
      // Due to transclusion, noTransition property is on parent's scope
      if (className == 'active' && element.parent() &&
          !element.parent().scope().noTransition) {
        var stopped = false;
        var direction = element.isolateScope().direction;
        var directionClass = direction == 'next' ? 'left' : 'right';
        element.addClass(direction);
        $animate.addClass(element, directionClass).then(function () {
          if (!stopped) {
            element.removeClass(directionClass + ' ' + direction);
          }
          done();
        });

        return function () {
          stopped = true;
        };
      }
      done();
    },
    beforeRemoveClass: function (element, className, done) {
      // Due to transclusion, noTransition property is on parent's scope
      if (className == 'active' && element.parent() &&
          !element.parent().scope().noTransition) {
        var stopped = false;
        var direction = element.isolateScope().direction;
        var directionClass = direction == 'next' ? 'left' : 'right';
        $animate.addClass(element, directionClass).then(function () {
          if (!stopped) {
            element.removeClass(directionClass);
          }
          done();
        });
        return function () {
          stopped = true;
        };
      }
      done();
    }
  };

}])


;

angular.module('ui.bootstrap.dateparser', [])

.service('dateParser', ['$locale', 'orderByFilter', function($locale, orderByFilter) {
  // Pulled from https://github.com/mbostock/d3/blob/master/src/format/requote.js
  var SPECIAL_CHARACTERS_REGEXP = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;

  this.parsers = {};

  var formatCodeToRegex = {
    'yyyy': {
      regex: '\\d{4}',
      apply: function(value) { this.year = +value; }
    },
    'yy': {
      regex: '\\d{2}',
      apply: function(value) { this.year = +value + 2000; }
    },
    'y': {
      regex: '\\d{1,4}',
      apply: function(value) { this.year = +value; }
    },
    'MMMM': {
      regex: $locale.DATETIME_FORMATS.MONTH.join('|'),
      apply: function(value) { this.month = $locale.DATETIME_FORMATS.MONTH.indexOf(value); }
    },
    'MMM': {
      regex: $locale.DATETIME_FORMATS.SHORTMONTH.join('|'),
      apply: function(value) { this.month = $locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value); }
    },
    'MM': {
      regex: '0[1-9]|1[0-2]',
      apply: function(value) { this.month = value - 1; }
    },
    'M': {
      regex: '[1-9]|1[0-2]',
      apply: function(value) { this.month = value - 1; }
    },
    'dd': {
      regex: '[0-2][0-9]{1}|3[0-1]{1}',
      apply: function(value) { this.date = +value; }
    },
    'd': {
      regex: '[1-2]?[0-9]{1}|3[0-1]{1}',
      apply: function(value) { this.date = +value; }
    },
    'EEEE': {
      regex: $locale.DATETIME_FORMATS.DAY.join('|')
    },
    'EEE': {
      regex: $locale.DATETIME_FORMATS.SHORTDAY.join('|')
    },
    'HH': {
      regex: '(?:0|1)[0-9]|2[0-3]',
      apply: function(value) { this.hours = +value; }
    },
    'H': {
      regex: '1?[0-9]|2[0-3]',
      apply: function(value) { this.hours = +value; }
    },
    'mm': {
      regex: '[0-5][0-9]',
      apply: function(value) { this.minutes = +value; }
    },
    'm': {
      regex: '[0-9]|[1-5][0-9]',
      apply: function(value) { this.minutes = +value; }
    },
    'sss': {
      regex: '[0-9][0-9][0-9]',
      apply: function(value) { this.milliseconds = +value; }
    },
    'ss': {
      regex: '[0-5][0-9]',
      apply: function(value) { this.seconds = +value; }
    },
    's': {
      regex: '[0-9]|[1-5][0-9]',
      apply: function(value) { this.seconds = +value; }
    }
  };

  function createParser(format) {
    var map = [], regex = format.split('');

    angular.forEach(formatCodeToRegex, function(data, code) {
      var index = format.indexOf(code);

      if (index > -1) {
        format = format.split('');

        regex[index] = '(' + data.regex + ')';
        format[index] = '$'; // Custom symbol to define consumed part of format
        for (var i = index + 1, n = index + code.length; i < n; i++) {
          regex[i] = '';
          format[i] = '$';
        }
        format = format.join('');

        map.push({ index: index, apply: data.apply });
      }
    });

    return {
      regex: new RegExp('^' + regex.join('') + '$'),
      map: orderByFilter(map, 'index')
    };
  }

  this.parse = function(input, format, baseDate) {
    if ( !angular.isString(input) || !format ) {
      return input;
    }

    format = $locale.DATETIME_FORMATS[format] || format;
    format = format.replace(SPECIAL_CHARACTERS_REGEXP, '\\$&');

    if ( !this.parsers[format] ) {
      this.parsers[format] = createParser(format);
    }

    var parser = this.parsers[format],
        regex = parser.regex,
        map = parser.map,
        results = input.match(regex);

    if ( results && results.length ) {
      var fields, dt;
      if (baseDate) {
        fields = {
          year: baseDate.getFullYear(),
          month: baseDate.getMonth(),
          date: baseDate.getDate(),
          hours: baseDate.getHours(),
          minutes: baseDate.getMinutes(),
          seconds: baseDate.getSeconds(),
          milliseconds: baseDate.getMilliseconds()
        };
      } else {
        fields = { year: 1900, month: 0, date: 1, hours: 0, minutes: 0, seconds: 0, milliseconds: 0 };
      }

      for( var i = 1, n = results.length; i < n; i++ ) {
        var mapper = map[i-1];
        if ( mapper.apply ) {
          mapper.apply.call(fields, results[i]);
        }
      }

      if ( isValid(fields.year, fields.month, fields.date) ) {
        dt = new Date(fields.year, fields.month, fields.date, fields.hours, fields.minutes, fields.seconds,
          fields.milliseconds || 0);
      }

      return dt;
    }
  };

  // Check if date is valid for specific month (and year for February).
  // Month: 0 = Jan, 1 = Feb, etc
  function isValid(year, month, date) {
    if (date < 1) {
      return false;
    }

    if ( month === 1 && date > 28) {
        return date === 29 && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
    }

    if ( month === 3 || month === 5 || month === 8 || month === 10) {
        return date < 31;
    }

    return true;
  }
}]);

angular.module('ui.bootstrap.position', [])

/**
 * A set of utility methods that can be use to retrieve position of DOM elements.
 * It is meant to be used where we need to absolute-position DOM elements in
 * relation to other, existing elements (this is the case for tooltips, popovers,
 * typeahead suggestions etc.).
 */
  .factory('$position', ['$document', '$window', function ($document, $window) {

    function getStyle(el, cssprop) {
      if (el.currentStyle) { //IE
        return el.currentStyle[cssprop];
      } else if ($window.getComputedStyle) {
        return $window.getComputedStyle(el)[cssprop];
      }
      // finally try and get inline style
      return el.style[cssprop];
    }

    /**
     * Checks if a given element is statically positioned
     * @param element - raw DOM element
     */
    function isStaticPositioned(element) {
      return (getStyle(element, 'position') || 'static' ) === 'static';
    }

    /**
     * returns the closest, non-statically positioned parentOffset of a given element
     * @param element
     */
    var parentOffsetEl = function (element) {
      var docDomEl = $document[0];
      var offsetParent = element.offsetParent || docDomEl;
      while (offsetParent && offsetParent !== docDomEl && isStaticPositioned(offsetParent) ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || docDomEl;
    };

    return {
      /**
       * Provides read-only equivalent of jQuery's position function:
       * http://api.jquery.com/position/
       */
      position: function (element) {
        var elBCR = this.offset(element);
        var offsetParentBCR = { top: 0, left: 0 };
        var offsetParentEl = parentOffsetEl(element[0]);
        if (offsetParentEl != $document[0]) {
          offsetParentBCR = this.offset(angular.element(offsetParentEl));
          offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
          offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }

        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: elBCR.top - offsetParentBCR.top,
          left: elBCR.left - offsetParentBCR.left
        };
      },

      /**
       * Provides read-only equivalent of jQuery's offset function:
       * http://api.jquery.com/offset/
       */
      offset: function (element) {
        var boundingClientRect = element[0].getBoundingClientRect();
        return {
          width: boundingClientRect.width || element.prop('offsetWidth'),
          height: boundingClientRect.height || element.prop('offsetHeight'),
          top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
          left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
        };
      },

      /**
       * Provides coordinates for the targetEl in relation to hostEl
       */
      positionElements: function (hostEl, targetEl, positionStr, appendToBody) {

        var positionStrParts = positionStr.split('-');
        var pos0 = positionStrParts[0], pos1 = positionStrParts[1] || 'center';

        var hostElPos,
          targetElWidth,
          targetElHeight,
          targetElPos;

        hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);

        targetElWidth = targetEl.prop('offsetWidth');
        targetElHeight = targetEl.prop('offsetHeight');

        var shiftWidth = {
          center: function () {
            return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
          },
          left: function () {
            return hostElPos.left;
          },
          right: function () {
            return hostElPos.left + hostElPos.width;
          }
        };

        var shiftHeight = {
          center: function () {
            return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
          },
          top: function () {
            return hostElPos.top;
          },
          bottom: function () {
            return hostElPos.top + hostElPos.height;
          }
        };

        switch (pos0) {
          case 'right':
            targetElPos = {
              top: shiftHeight[pos1](),
              left: shiftWidth[pos0]()
            };
            break;
          case 'left':
            targetElPos = {
              top: shiftHeight[pos1](),
              left: hostElPos.left - targetElWidth
            };
            break;
          case 'bottom':
            targetElPos = {
              top: shiftHeight[pos0](),
              left: shiftWidth[pos1]()
            };
            break;
          default:
            targetElPos = {
              top: hostElPos.top - targetElHeight,
              left: shiftWidth[pos1]()
            };
            break;
        }

        return targetElPos;
      }
    };
  }]);

angular.module('ui.bootstrap.datepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.position'])

.constant('datepickerConfig', {
  formatDay: 'dd',
  formatMonth: 'MMMM',
  formatYear: 'yyyy',
  formatDayHeader: 'EEE',
  formatDayTitle: 'MMMM yyyy',
  formatMonthTitle: 'yyyy',
  datepickerMode: 'day',
  minMode: 'day',
  maxMode: 'year',
  showWeeks: true,
  startingDay: 0,
  yearRange: 20,
  minDate: null,
  maxDate: null,
  shortcutPropagation: false
})

.controller('DatepickerController', ['$scope', '$attrs', '$parse', '$interpolate', '$timeout', '$log', 'dateFilter', 'datepickerConfig', function($scope, $attrs, $parse, $interpolate, $timeout, $log, dateFilter, datepickerConfig) {
  var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }; // nullModelCtrl;

  // Modes chain
  this.modes = ['day', 'month', 'year'];

  // Configuration attributes
  angular.forEach(['formatDay', 'formatMonth', 'formatYear', 'formatDayHeader', 'formatDayTitle', 'formatMonthTitle',
                   'minMode', 'maxMode', 'showWeeks', 'startingDay', 'yearRange', 'shortcutPropagation'], function( key, index ) {
    self[key] = angular.isDefined($attrs[key]) ? (index < 8 ? $interpolate($attrs[key])($scope.$parent) : $scope.$parent.$eval($attrs[key])) : datepickerConfig[key];
  });

  // Watchable date attributes
  angular.forEach(['minDate', 'maxDate'], function( key ) {
    if ( $attrs[key] ) {
      $scope.$parent.$watch($parse($attrs[key]), function(value) {
        self[key] = value ? new Date(value) : null;
        self.refreshView();
      });
    } else {
      self[key] = datepickerConfig[key] ? new Date(datepickerConfig[key]) : null;
    }
  });

  $scope.datepickerMode = $scope.datepickerMode || datepickerConfig.datepickerMode;
  $scope.maxMode = self.maxMode;
  $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

  if(angular.isDefined($attrs.initDate)) {
    this.activeDate = $scope.$parent.$eval($attrs.initDate) || new Date();
    $scope.$parent.$watch($attrs.initDate, function(initDate){
      if(initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)){
        self.activeDate = initDate;
        self.refreshView();
      }
    });
  } else {
    this.activeDate =  new Date();
  }

  $scope.isActive = function(dateObject) {
    if (self.compare(dateObject.date, self.activeDate) === 0) {
      $scope.activeDateId = dateObject.uid;
      return true;
    }
    return false;
  };

  this.init = function( ngModelCtrl_ ) {
    ngModelCtrl = ngModelCtrl_;

    ngModelCtrl.$render = function() {
      self.render();
    };
  };

  this.render = function() {
    if ( ngModelCtrl.$viewValue ) {
      var date = new Date( ngModelCtrl.$viewValue ),
          isValid = !isNaN(date);

      if ( isValid ) {
        this.activeDate = date;
      } else {
        $log.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
      }
      ngModelCtrl.$setValidity('date', isValid);
    }
    this.refreshView();
  };

  this.refreshView = function() {
    if ( this.element ) {
      this._refreshView();

      var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
      ngModelCtrl.$setValidity('date-disabled', !date || (this.element && !this.isDisabled(date)));
    }
  };

  this.createDateObject = function(date, format) {
    var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
    return {
      date: date,
      label: dateFilter(date, format),
      selected: model && this.compare(date, model) === 0,
      disabled: this.isDisabled(date),
      current: this.compare(date, new Date()) === 0,
      customClass: this.customClass(date)
    };
  };

  this.isDisabled = function( date ) {
    return ((this.minDate && this.compare(date, this.minDate) < 0) || (this.maxDate && this.compare(date, this.maxDate) > 0) || ($attrs.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode})));
  };

    this.customClass = function( date ) {
      return $scope.customClass({date: date, mode: $scope.datepickerMode});
    };

  // Split array into smaller arrays
  this.split = function(arr, size) {
    var arrays = [];
    while (arr.length > 0) {
      arrays.push(arr.splice(0, size));
    }
    return arrays;
  };

  $scope.select = function( date ) {
    if ( $scope.datepickerMode === self.minMode ) {
      var dt = ngModelCtrl.$viewValue ? new Date( ngModelCtrl.$viewValue ) : new Date(0, 0, 0, 0, 0, 0, 0);
      dt.setFullYear( date.getFullYear(), date.getMonth(), date.getDate() );
      ngModelCtrl.$setViewValue( dt );
      ngModelCtrl.$render();
    } else {
      self.activeDate = date;
      $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) - 1 ];
    }
  };

  $scope.move = function( direction ) {
    var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
        month = self.activeDate.getMonth() + direction * (self.step.months || 0);
    self.activeDate.setFullYear(year, month, 1);
    self.refreshView();
  };

  $scope.toggleMode = function( direction ) {
    direction = direction || 1;

    if (($scope.datepickerMode === self.maxMode && direction === 1) || ($scope.datepickerMode === self.minMode && direction === -1)) {
      return;
    }

    $scope.datepickerMode = self.modes[ self.modes.indexOf( $scope.datepickerMode ) + direction ];
  };

  // Key event mapper
  $scope.keys = { 13:'enter', 32:'space', 33:'pageup', 34:'pagedown', 35:'end', 36:'home', 37:'left', 38:'up', 39:'right', 40:'down' };

  var focusElement = function() {
    $timeout(function() {
      self.element[0].focus();
    }, 0 , false);
  };

  // Listen for focus requests from popup directive
  $scope.$on('datepicker.focus', focusElement);

  $scope.keydown = function( evt ) {
    var key = $scope.keys[evt.which];

    if ( !key || evt.shiftKey || evt.altKey ) {
      return;
    }

    evt.preventDefault();
    if(!self.shortcutPropagation){
        evt.stopPropagation();
    }

    if (key === 'enter' || key === 'space') {
      if ( self.isDisabled(self.activeDate)) {
        return; // do nothing
      }
      $scope.select(self.activeDate);
      focusElement();
    } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
      $scope.toggleMode(key === 'up' ? 1 : -1);
      focusElement();
    } else {
      self.handleKeyDown(key, evt);
      self.refreshView();
    }
  };
}])

.directive( 'datepicker', function () {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/datepicker.html',
    scope: {
      datepickerMode: '=?',
      dateDisabled: '&',
      customClass: '&',
      shortcutPropagation: '&?'
    },
    require: ['datepicker', '?^ngModel'],
    controller: 'DatepickerController',
    link: function(scope, element, attrs, ctrls) {
      var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if ( ngModelCtrl ) {
        datepickerCtrl.init( ngModelCtrl );
      }
    }
  };
})

.directive('daypicker', ['dateFilter', function (dateFilter) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/day.html',
    require: '^datepicker',
    link: function(scope, element, attrs, ctrl) {
      scope.showWeeks = ctrl.showWeeks;

      ctrl.step = { months: 1 };
      ctrl.element = element;

      var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      function getDaysInMonth( year, month ) {
        return ((month === 1) && (year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0))) ? 29 : DAYS_IN_MONTH[month];
      }

      function getDates(startDate, n) {
        var dates = new Array(n), current = new Date(startDate), i = 0;
        current.setHours(12); // Prevent repeated dates because of timezone bug
        while ( i < n ) {
          dates[i++] = new Date(current);
          current.setDate( current.getDate() + 1 );
        }
        return dates;
      }

      ctrl._refreshView = function() {
        var year = ctrl.activeDate.getFullYear(),
          month = ctrl.activeDate.getMonth(),
          firstDayOfMonth = new Date(year, month, 1),
          difference = ctrl.startingDay - firstDayOfMonth.getDay(),
          numDisplayedFromPreviousMonth = (difference > 0) ? 7 - difference : - difference,
          firstDate = new Date(firstDayOfMonth);

        if ( numDisplayedFromPreviousMonth > 0 ) {
          firstDate.setDate( - numDisplayedFromPreviousMonth + 1 );
        }

        // 42 is the number of days on a six-month calendar
        var days = getDates(firstDate, 42);
        for (var i = 0; i < 42; i ++) {
          days[i] = angular.extend(ctrl.createDateObject(days[i], ctrl.formatDay), {
            secondary: days[i].getMonth() !== month,
            uid: scope.uniqueId + '-' + i
          });
        }

        scope.labels = new Array(7);
        for (var j = 0; j < 7; j++) {
          scope.labels[j] = {
            abbr: dateFilter(days[j].date, ctrl.formatDayHeader),
            full: dateFilter(days[j].date, 'EEEE')
          };
        }

        scope.title = dateFilter(ctrl.activeDate, ctrl.formatDayTitle);
        scope.rows = ctrl.split(days, 7);

        if ( scope.showWeeks ) {
          scope.weekNumbers = [];
          var thursdayIndex = (4 + 7 - ctrl.startingDay) % 7,
              numWeeks = scope.rows.length;
          for (var curWeek = 0; curWeek < numWeeks; curWeek++) {
            scope.weekNumbers.push(
              getISO8601WeekNumber( scope.rows[curWeek][thursdayIndex].date ));
          }
        }
      };

      ctrl.compare = function(date1, date2) {
        return (new Date( date1.getFullYear(), date1.getMonth(), date1.getDate() ) - new Date( date2.getFullYear(), date2.getMonth(), date2.getDate() ) );
      };

      function getISO8601WeekNumber(date) {
        var checkDate = new Date(date);
        checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7)); // Thursday
        var time = checkDate.getTime();
        checkDate.setMonth(0); // Compare with Jan 1
        checkDate.setDate(1);
        return Math.floor(Math.round((time - checkDate) / 86400000) / 7) + 1;
      }

      ctrl.handleKeyDown = function( key, evt ) {
        var date = ctrl.activeDate.getDate();

        if (key === 'left') {
          date = date - 1;   // up
        } else if (key === 'up') {
          date = date - 7;   // down
        } else if (key === 'right') {
          date = date + 1;   // down
        } else if (key === 'down') {
          date = date + 7;
        } else if (key === 'pageup' || key === 'pagedown') {
          var month = ctrl.activeDate.getMonth() + (key === 'pageup' ? - 1 : 1);
          ctrl.activeDate.setMonth(month, 1);
          date = Math.min(getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth()), date);
        } else if (key === 'home') {
          date = 1;
        } else if (key === 'end') {
          date = getDaysInMonth(ctrl.activeDate.getFullYear(), ctrl.activeDate.getMonth());
        }
        ctrl.activeDate.setDate(date);
      };

      ctrl.refreshView();
    }
  };
}])

.directive('monthpicker', ['dateFilter', function (dateFilter) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/month.html',
    require: '^datepicker',
    link: function(scope, element, attrs, ctrl) {
      ctrl.step = { years: 1 };
      ctrl.element = element;

      ctrl._refreshView = function() {
        var months = new Array(12),
            year = ctrl.activeDate.getFullYear();

        for ( var i = 0; i < 12; i++ ) {
          months[i] = angular.extend(ctrl.createDateObject(new Date(year, i, 1), ctrl.formatMonth), {
            uid: scope.uniqueId + '-' + i
          });
        }

        scope.title = dateFilter(ctrl.activeDate, ctrl.formatMonthTitle);
        scope.rows = ctrl.split(months, 3);
      };

      ctrl.compare = function(date1, date2) {
        return new Date( date1.getFullYear(), date1.getMonth() ) - new Date( date2.getFullYear(), date2.getMonth() );
      };

      ctrl.handleKeyDown = function( key, evt ) {
        var date = ctrl.activeDate.getMonth();

        if (key === 'left') {
          date = date - 1;   // up
        } else if (key === 'up') {
          date = date - 3;   // down
        } else if (key === 'right') {
          date = date + 1;   // down
        } else if (key === 'down') {
          date = date + 3;
        } else if (key === 'pageup' || key === 'pagedown') {
          var year = ctrl.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
          ctrl.activeDate.setFullYear(year);
        } else if (key === 'home') {
          date = 0;
        } else if (key === 'end') {
          date = 11;
        }
        ctrl.activeDate.setMonth(date);
      };

      ctrl.refreshView();
    }
  };
}])

.directive('yearpicker', ['dateFilter', function (dateFilter) {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/datepicker/year.html',
    require: '^datepicker',
    link: function(scope, element, attrs, ctrl) {
      var range = ctrl.yearRange;

      ctrl.step = { years: range };
      ctrl.element = element;

      function getStartingYear( year ) {
        return parseInt((year - 1) / range, 10) * range + 1;
      }

      ctrl._refreshView = function() {
        var years = new Array(range);

        for ( var i = 0, start = getStartingYear(ctrl.activeDate.getFullYear()); i < range; i++ ) {
          years[i] = angular.extend(ctrl.createDateObject(new Date(start + i, 0, 1), ctrl.formatYear), {
            uid: scope.uniqueId + '-' + i
          });
        }

        scope.title = [years[0].label, years[range - 1].label].join(' - ');
        scope.rows = ctrl.split(years, 5);
      };

      ctrl.compare = function(date1, date2) {
        return date1.getFullYear() - date2.getFullYear();
      };

      ctrl.handleKeyDown = function( key, evt ) {
        var date = ctrl.activeDate.getFullYear();

        if (key === 'left') {
          date = date - 1;   // up
        } else if (key === 'up') {
          date = date - 5;   // down
        } else if (key === 'right') {
          date = date + 1;   // down
        } else if (key === 'down') {
          date = date + 5;
        } else if (key === 'pageup' || key === 'pagedown') {
          date += (key === 'pageup' ? - 1 : 1) * ctrl.step.years;
        } else if (key === 'home') {
          date = getStartingYear( ctrl.activeDate.getFullYear() );
        } else if (key === 'end') {
          date = getStartingYear( ctrl.activeDate.getFullYear() ) + range - 1;
        }
        ctrl.activeDate.setFullYear(date);
      };

      ctrl.refreshView();
    }
  };
}])

.constant('datepickerPopupConfig', {
  datepickerPopup: 'yyyy-MM-dd',
  html5Types: {
    date: 'yyyy-MM-dd',
    'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
    'month': 'yyyy-MM'
  },
  currentText: 'Today',
  clearText: 'Clear',
  closeText: 'Done',
  closeOnDateSelection: true,
  appendToBody: false,
  showButtonBar: true
})

.directive('datepickerPopup', ['$compile', '$parse', '$document', '$position', 'dateFilter', 'dateParser', 'datepickerPopupConfig',
function ($compile, $parse, $document, $position, dateFilter, dateParser, datepickerPopupConfig) {
  return {
    restrict: 'EA',
    require: 'ngModel',
    scope: {
      isOpen: '=?',
      currentText: '@',
      clearText: '@',
      closeText: '@',
      dateDisabled: '&',
      customClass: '&'
    },
    link: function(scope, element, attrs, ngModel) {
      var dateFormat,
          closeOnDateSelection = angular.isDefined(attrs.closeOnDateSelection) ? scope.$parent.$eval(attrs.closeOnDateSelection) : datepickerPopupConfig.closeOnDateSelection,
          appendToBody = angular.isDefined(attrs.datepickerAppendToBody) ? scope.$parent.$eval(attrs.datepickerAppendToBody) : datepickerPopupConfig.appendToBody;

      scope.showButtonBar = angular.isDefined(attrs.showButtonBar) ? scope.$parent.$eval(attrs.showButtonBar) : datepickerPopupConfig.showButtonBar;

      scope.getText = function( key ) {
        return scope[key + 'Text'] || datepickerPopupConfig[key + 'Text'];
      };

      var isHtml5DateInput = false;
      if (datepickerPopupConfig.html5Types[attrs.type]) {
        dateFormat = datepickerPopupConfig.html5Types[attrs.type];
        isHtml5DateInput = true;
      } else {
        dateFormat = attrs.datepickerPopup || datepickerPopupConfig.datepickerPopup;
        attrs.$observe('datepickerPopup', function(value, oldValue) {
            var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
            // Invalidate the $modelValue to ensure that formatters re-run
            // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
            if (newDateFormat !== dateFormat) {
              dateFormat = newDateFormat;
              ngModel.$modelValue = null;

              if (!dateFormat) {
                throw new Error('datepickerPopup must have a date format specified.');
              }
            }
        });
      }

      if (!dateFormat) {
        throw new Error('datepickerPopup must have a date format specified.');
      }

      if (isHtml5DateInput && attrs.datepickerPopup) {
        throw new Error('HTML5 date input types do not support custom formats.');
      }

      // popup element used to display calendar
      var popupEl = angular.element('<div datepicker-popup-wrap><div datepicker></div></div>');
      popupEl.attr({
        'ng-model': 'date',
        'ng-change': 'dateSelection()'
      });

      function cameltoDash( string ){
        return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
      }

      // datepicker element
      var datepickerEl = angular.element(popupEl.children()[0]);
      if (isHtml5DateInput) {
        if (attrs.type == 'month') {
          datepickerEl.attr('datepicker-mode', '"month"');
          datepickerEl.attr('min-mode', 'month');
        }
      }

      if ( attrs.datepickerOptions ) {
        var options = scope.$parent.$eval(attrs.datepickerOptions);
        if(options.initDate) {
          scope.initDate = options.initDate;
          datepickerEl.attr( 'init-date', 'initDate' );
          delete options.initDate;
        }
        angular.forEach(options, function( value, option ) {
          datepickerEl.attr( cameltoDash(option), value );
        });
      }

      scope.watchData = {};
      angular.forEach(['minDate', 'maxDate', 'datepickerMode', 'initDate', 'shortcutPropagation'], function( key ) {
        if ( attrs[key] ) {
          var getAttribute = $parse(attrs[key]);
          scope.$parent.$watch(getAttribute, function(value){
            scope.watchData[key] = value;
          });
          datepickerEl.attr(cameltoDash(key), 'watchData.' + key);

          // Propagate changes from datepicker to outside
          if ( key === 'datepickerMode' ) {
            var setAttribute = getAttribute.assign;
            scope.$watch('watchData.' + key, function(value, oldvalue) {
              if ( value !== oldvalue ) {
                setAttribute(scope.$parent, value);
              }
            });
          }
        }
      });
      if (attrs.dateDisabled) {
        datepickerEl.attr('date-disabled', 'dateDisabled({ date: date, mode: mode })');
      }

      if (attrs.showWeeks) {
        datepickerEl.attr('show-weeks', attrs.showWeeks);
      }

      if (attrs.customClass){
        datepickerEl.attr('custom-class', 'customClass({ date: date, mode: mode })');
      }

      function parseDate(viewValue) {
        if (angular.isNumber(viewValue)) {
          // presumably timestamp to date object
          viewValue = new Date(viewValue);
        }

        if (!viewValue) {
          return null;
        } else if (angular.isDate(viewValue) && !isNaN(viewValue)) {
          return viewValue;
        } else if (angular.isString(viewValue)) {
          var date = dateParser.parse(viewValue, dateFormat, scope.date) || new Date(viewValue);
          if (isNaN(date)) {
            return undefined;
          } else {
            return date;
          }
        } else {
          return undefined;
        }
      }

      function validator(modelValue, viewValue) {
        var value = modelValue || viewValue;
        if (angular.isNumber(value)) {
          value = new Date(value);
        }
        if (!value) {
          return true;
        } else if (angular.isDate(value) && !isNaN(value)) {
          return true;
        } else if (angular.isString(value)) {
          var date = dateParser.parse(value, dateFormat) || new Date(value);
          return !isNaN(date);
        } else {
          return false;
        }
      }

      if (!isHtml5DateInput) {
        // Internal API to maintain the correct ng-invalid-[key] class
        ngModel.$$parserName = 'date';
        ngModel.$validators.date = validator;
        ngModel.$parsers.unshift(parseDate);
        ngModel.$formatters.push(function (value) {
          scope.date = value;
          return ngModel.$isEmpty(value) ? value : dateFilter(value, dateFormat);
        });
      }
      else {
        ngModel.$formatters.push(function (value) {
          scope.date = value;
          return value;
        });
      }

      // Inner change
      scope.dateSelection = function(dt) {
        if (angular.isDefined(dt)) {
          scope.date = dt;
        }
        var date = scope.date ? dateFilter(scope.date, dateFormat) : '';
        element.val(date);
        ngModel.$setViewValue(date);

        if ( closeOnDateSelection ) {
          scope.isOpen = false;
          element[0].focus();
        }
      };

      // Detect changes in the view from the text box
      ngModel.$viewChangeListeners.push(function () {
        scope.date = dateParser.parse(ngModel.$viewValue, dateFormat, scope.date) || new Date(ngModel.$viewValue);
      });

      var documentClickBind = function(event) {
        if (scope.isOpen && event.target !== element[0]) {
          scope.$apply(function() {
            scope.isOpen = false;
          });
        }
      };

      var keydown = function(evt, noApply) {
        scope.keydown(evt);
      };
      element.bind('keydown', keydown);

      scope.keydown = function(evt) {
        if (evt.which === 27) {
          evt.preventDefault();
          if (scope.isOpen) {
            evt.stopPropagation();
          }
          scope.close();
        } else if (evt.which === 40 && !scope.isOpen) {
          scope.isOpen = true;
        }
      };

      scope.$watch('isOpen', function(value) {
        if (value) {
          scope.$broadcast('datepicker.focus');
          scope.position = appendToBody ? $position.offset(element) : $position.position(element);
          scope.position.top = scope.position.top + element.prop('offsetHeight');

          $document.bind('click', documentClickBind);
        } else {
          $document.unbind('click', documentClickBind);
        }
      });

      scope.select = function( date ) {
        if (date === 'today') {
          var today = new Date();
          if (angular.isDate(scope.date)) {
            date = new Date(scope.date);
            date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
          } else {
            date = new Date(today.setHours(0, 0, 0, 0));
          }
        }
        scope.dateSelection( date );
      };

      scope.close = function() {
        scope.isOpen = false;
        element[0].focus();
      };

      var $popup = $compile(popupEl)(scope);
      // Prevent jQuery cache memory leak (template is now redundant after linking)
      popupEl.remove();

      if ( appendToBody ) {
        $document.find('body').append($popup);
      } else {
        element.after($popup);
      }

      scope.$on('$destroy', function() {
        $popup.remove();
        element.unbind('keydown', keydown);
        $document.unbind('click', documentClickBind);
      });
    }
  };
}])

.directive('datepickerPopupWrap', function() {
  return {
    restrict:'EA',
    replace: true,
    transclude: true,
    templateUrl: 'template/datepicker/popup.html',
    link:function (scope, element, attrs) {
      element.bind('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
      });
    }
  };
});

angular.module('ui.bootstrap.dropdown', ['ui.bootstrap.position'])

.constant('dropdownConfig', {
  openClass: 'open'
})

.service('dropdownService', ['$document', '$rootScope', function($document, $rootScope) {
  var openScope = null;

  this.open = function( dropdownScope ) {
    if ( !openScope ) {
      $document.bind('click', closeDropdown);
      $document.bind('keydown', escapeKeyBind);
    }

    if ( openScope && openScope !== dropdownScope ) {
        openScope.isOpen = false;
    }

    openScope = dropdownScope;
  };

  this.close = function( dropdownScope ) {
    if ( openScope === dropdownScope ) {
      openScope = null;
      $document.unbind('click', closeDropdown);
      $document.unbind('keydown', escapeKeyBind);
    }
  };

  var closeDropdown = function( evt ) {
    // This method may still be called during the same mouse event that
    // unbound this event handler. So check openScope before proceeding.
    if (!openScope) { return; }

    if( evt && openScope.getAutoClose() === 'disabled' )  { return ; }

    var toggleElement = openScope.getToggleElement();
    if ( evt && toggleElement && toggleElement[0].contains(evt.target) ) {
        return;
    }

    var $element = openScope.getElement();
    if( evt && openScope.getAutoClose() === 'outsideClick' && $element && $element[0].contains(evt.target) ) {
      return;
    }

    openScope.isOpen = false;

    if (!$rootScope.$$phase) {
      openScope.$apply();
    }
  };

  var escapeKeyBind = function( evt ) {
    if ( evt.which === 27 ) {
      openScope.focusToggleElement();
      closeDropdown();
    }
  };
}])

.controller('DropdownController', ['$scope', '$attrs', '$parse', 'dropdownConfig', 'dropdownService', '$animate', '$position', '$document', function($scope, $attrs, $parse, dropdownConfig, dropdownService, $animate, $position, $document) {
  var self = this,
      scope = $scope.$new(), // create a child scope so we are not polluting original one
      openClass = dropdownConfig.openClass,
      getIsOpen,
      setIsOpen = angular.noop,
      toggleInvoker = $attrs.onToggle ? $parse($attrs.onToggle) : angular.noop,
      appendToBody = false;

  this.init = function( element ) {
    self.$element = element;

    if ( $attrs.isOpen ) {
      getIsOpen = $parse($attrs.isOpen);
      setIsOpen = getIsOpen.assign;

      $scope.$watch(getIsOpen, function(value) {
        scope.isOpen = !!value;
      });
    }

    appendToBody = angular.isDefined($attrs.dropdownAppendToBody);

    if ( appendToBody && self.dropdownMenu ) {
      $document.find('body').append( self.dropdownMenu );
      element.on('$destroy', function handleDestroyEvent() {
        self.dropdownMenu.remove();
      });
    }
  };

  this.toggle = function( open ) {
    return scope.isOpen = arguments.length ? !!open : !scope.isOpen;
  };

  // Allow other directives to watch status
  this.isOpen = function() {
    return scope.isOpen;
  };

  scope.getToggleElement = function() {
    return self.toggleElement;
  };

  scope.getAutoClose = function() {
    return $attrs.autoClose || 'always'; //or 'outsideClick' or 'disabled'
  };

  scope.getElement = function() {
    return self.$element;
  };

  scope.focusToggleElement = function() {
    if ( self.toggleElement ) {
      self.toggleElement[0].focus();
    }
  };

  scope.$watch('isOpen', function( isOpen, wasOpen ) {
    if ( appendToBody && self.dropdownMenu ) {
      var pos = $position.positionElements(self.$element, self.dropdownMenu, 'bottom-left', true);
      self.dropdownMenu.css({
        top: pos.top + 'px',
        left: pos.left + 'px',
        display: isOpen ? 'block' : 'none'
      });
    }

    $animate[isOpen ? 'addClass' : 'removeClass'](self.$element, openClass);

    if ( isOpen ) {
      scope.focusToggleElement();
      dropdownService.open( scope );
    } else {
      dropdownService.close( scope );
    }

    setIsOpen($scope, isOpen);
    if (angular.isDefined(isOpen) && isOpen !== wasOpen) {
      toggleInvoker($scope, { open: !!isOpen });
    }
  });

  $scope.$on('$locationChangeSuccess', function() {
    scope.isOpen = false;
  });

  $scope.$on('$destroy', function() {
    scope.$destroy();
  });
}])

.directive('dropdown', function() {
  return {
    controller: 'DropdownController',
    link: function(scope, element, attrs, dropdownCtrl) {
      dropdownCtrl.init( element );
    }
  };
})

.directive('dropdownMenu', function() {
  return {
    restrict: 'AC',
    require: '?^dropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if ( !dropdownCtrl ) {
        return;
      }
      dropdownCtrl.dropdownMenu = element;
    }
  };
})

.directive('dropdownToggle', function() {
  return {
    require: '?^dropdown',
    link: function(scope, element, attrs, dropdownCtrl) {
      if ( !dropdownCtrl ) {
        return;
      }

      dropdownCtrl.toggleElement = element;

      var toggleDropdown = function(event) {
        event.preventDefault();

        if ( !element.hasClass('disabled') && !attrs.disabled ) {
          scope.$apply(function() {
            dropdownCtrl.toggle();
          });
        }
      };

      element.bind('click', toggleDropdown);

      // WAI-ARIA
      element.attr({ 'aria-haspopup': true, 'aria-expanded': false });
      scope.$watch(dropdownCtrl.isOpen, function( isOpen ) {
        element.attr('aria-expanded', !!isOpen);
      });

      scope.$on('$destroy', function() {
        element.unbind('click', toggleDropdown);
      });
    }
  };
});

angular.module('ui.bootstrap.modal', [])

/**
 * A helper, internal data structure that acts as a map but also allows getting / removing
 * elements in the LIFO order
 */
  .factory('$$stackedMap', function () {
    return {
      createNew: function () {
        var stack = [];

        return {
          add: function (key, value) {
            stack.push({
              key: key,
              value: value
            });
          },
          get: function (key) {
            for (var i = 0; i < stack.length; i++) {
              if (key == stack[i].key) {
                return stack[i];
              }
            }
          },
          keys: function() {
            var keys = [];
            for (var i = 0; i < stack.length; i++) {
              keys.push(stack[i].key);
            }
            return keys;
          },
          top: function () {
            return stack[stack.length - 1];
          },
          remove: function (key) {
            var idx = -1;
            for (var i = 0; i < stack.length; i++) {
              if (key == stack[i].key) {
                idx = i;
                break;
              }
            }
            return stack.splice(idx, 1)[0];
          },
          removeTop: function () {
            return stack.splice(stack.length - 1, 1)[0];
          },
          length: function () {
            return stack.length;
          }
        };
      }
    };
  })

/**
 * A helper directive for the $modal service. It creates a backdrop element.
 */
  .directive('modalBackdrop', ['$timeout', function ($timeout) {
    return {
      restrict: 'EA',
      replace: true,
      templateUrl: 'template/modal/backdrop.html',
      compile: function (tElement, tAttrs) {
        tElement.addClass(tAttrs.backdropClass);
        return linkFn;
      }
    };

    function linkFn(scope, element, attrs) {
      scope.animate = false;

      //trigger CSS transitions
      $timeout(function () {
        scope.animate = true;
      });
    }
  }])

  .directive('modalWindow', ['$modalStack', '$q', function ($modalStack, $q) {
    return {
      restrict: 'EA',
      scope: {
        index: '@',
        animate: '='
      },
      replace: true,
      transclude: true,
      templateUrl: function(tElement, tAttrs) {
        return tAttrs.templateUrl || 'template/modal/window.html';
      },
      link: function (scope, element, attrs) {
        element.addClass(attrs.windowClass || '');
        scope.size = attrs.size;

        scope.close = function (evt) {
          var modal = $modalStack.getTop();
          if (modal && modal.value.backdrop && modal.value.backdrop != 'static' && (evt.target === evt.currentTarget)) {
            evt.preventDefault();
            evt.stopPropagation();
            $modalStack.dismiss(modal.key, 'backdrop click');
          }
        };

        // This property is only added to the scope for the purpose of detecting when this directive is rendered.
        // We can detect that by using this property in the template associated with this directive and then use
        // {@link Attribute#$observe} on it. For more details please see {@link TableColumnResize}.
        scope.$isRendered = true;

        // Deferred object that will be resolved when this modal is render.
        var modalRenderDeferObj = $q.defer();
        // Observe function will be called on next digest cycle after compilation, ensuring that the DOM is ready.
        // In order to use this way of finding whether DOM is ready, we need to observe a scope property used in modal's template.
        attrs.$observe('modalRender', function (value) {
          if (value == 'true') {
            modalRenderDeferObj.resolve();
          }
        });

        modalRenderDeferObj.promise.then(function () {
          // trigger CSS transitions
          scope.animate = true;

          var inputsWithAutofocus = element[0].querySelectorAll('[autofocus]');
          /**
           * Auto-focusing of a freshly-opened modal element causes any child elements
           * with the autofocus attribute to lose focus. This is an issue on touch
           * based devices which will show and then hide the onscreen keyboard.
           * Attempts to refocus the autofocus element via JavaScript will not reopen
           * the onscreen keyboard. Fixed by updated the focusing logic to only autofocus
           * the modal element if the modal does not contain an autofocus element.
           */
          if (inputsWithAutofocus.length) {
            inputsWithAutofocus[0].focus();
          } else {
            element[0].focus();
          }

          // Notify {@link $modalStack} that modal is rendered.
          var modal = $modalStack.getTop();
          if (modal) {
            $modalStack.modalRendered(modal.key);
          }
        });
      }
    };
  }])

  .directive('modalAnimationClass', [
    function () {
      return {
        compile: function (tElement, tAttrs) {
          if (tAttrs.modalAnimation) {
            tElement.addClass(tAttrs.modalAnimationClass);
          }
        }
      };
    }])

  .directive('modalTransclude', function () {
    return {
      link: function($scope, $element, $attrs, controller, $transclude) {
        $transclude($scope.$parent, function(clone) {
          $element.empty();
          $element.append(clone);
        });
      }
    };
  })

  .factory('$modalStack', ['$animate', '$timeout', '$document', '$compile', '$rootScope', '$$stackedMap',
    function ($animate, $timeout, $document, $compile, $rootScope, $$stackedMap) {

      var OPENED_MODAL_CLASS = 'modal-open';

      var backdropDomEl, backdropScope;
      var openedWindows = $$stackedMap.createNew();
      var $modalStack = {};

      function backdropIndex() {
        var topBackdropIndex = -1;
        var opened = openedWindows.keys();
        for (var i = 0; i < opened.length; i++) {
          if (openedWindows.get(opened[i]).value.backdrop) {
            topBackdropIndex = i;
          }
        }
        return topBackdropIndex;
      }

      $rootScope.$watch(backdropIndex, function(newBackdropIndex){
        if (backdropScope) {
          backdropScope.index = newBackdropIndex;
        }
      });

      function removeModalWindow(modalInstance) {

        var body = $document.find('body').eq(0);
        var modalWindow = openedWindows.get(modalInstance).value;

        //clean up the stack
        openedWindows.remove(modalInstance);

        //remove window DOM element
        removeAfterAnimate(modalWindow.modalDomEl, modalWindow.modalScope, function() {
          body.toggleClass(OPENED_MODAL_CLASS, openedWindows.length() > 0);
          checkRemoveBackdrop();
        });
      }

      function checkRemoveBackdrop() {
          //remove backdrop if no longer needed
          if (backdropDomEl && backdropIndex() == -1) {
            var backdropScopeRef = backdropScope;
            removeAfterAnimate(backdropDomEl, backdropScope, function () {
              backdropScopeRef = null;
            });
            backdropDomEl = undefined;
            backdropScope = undefined;
          }
      }

      function removeAfterAnimate(domEl, scope, done) {
        // Closing animation
        scope.animate = false;

        if (domEl.attr('modal-animation') && $animate.enabled()) {
          // transition out
          domEl.one('$animate:close', function closeFn() {
            $rootScope.$evalAsync(afterAnimating);
          });
        } else {
          // Ensure this call is async
          $timeout(afterAnimating);
        }

        function afterAnimating() {
          if (afterAnimating.done) {
            return;
          }
          afterAnimating.done = true;

          domEl.remove();
          scope.$destroy();
          if (done) {
            done();
          }
        }
      }

      $document.bind('keydown', function (evt) {
        var modal;

        if (evt.which === 27) {
          modal = openedWindows.top();
          if (modal && modal.value.keyboard) {
            evt.preventDefault();
            $rootScope.$apply(function () {
              $modalStack.dismiss(modal.key, 'escape key press');
            });
          }
        }
      });

      $modalStack.open = function (modalInstance, modal) {

        var modalOpener = $document[0].activeElement;

        openedWindows.add(modalInstance, {
          deferred: modal.deferred,
          renderDeferred: modal.renderDeferred,
          modalScope: modal.scope,
          backdrop: modal.backdrop,
          keyboard: modal.keyboard
        });

        var body = $document.find('body').eq(0),
            currBackdropIndex = backdropIndex();

        if (currBackdropIndex >= 0 && !backdropDomEl) {
          backdropScope = $rootScope.$new(true);
          backdropScope.index = currBackdropIndex;
          var angularBackgroundDomEl = angular.element('<div modal-backdrop="modal-backdrop"></div>');
          angularBackgroundDomEl.attr('backdrop-class', modal.backdropClass);
          if (modal.animation) {
            angularBackgroundDomEl.attr('modal-animation', 'true');
          }
          backdropDomEl = $compile(angularBackgroundDomEl)(backdropScope);
          body.append(backdropDomEl);
        }

        var angularDomEl = angular.element('<div modal-window="modal-window"></div>');
        angularDomEl.attr({
          'template-url': modal.windowTemplateUrl,
          'window-class': modal.windowClass,
          'size': modal.size,
          'index': openedWindows.length() - 1,
          'animate': 'animate'
        }).html(modal.content);
        if (modal.animation) {
          angularDomEl.attr('modal-animation', 'true');
        }

        var modalDomEl = $compile(angularDomEl)(modal.scope);
        openedWindows.top().value.modalDomEl = modalDomEl;
        openedWindows.top().value.modalOpener = modalOpener;
        body.append(modalDomEl);
        body.addClass(OPENED_MODAL_CLASS);
      };

      function broadcastClosing(modalWindow, resultOrReason, closing) {
          return !modalWindow.value.modalScope.$broadcast('modal.closing', resultOrReason, closing).defaultPrevented;
      }

      $modalStack.close = function (modalInstance, result) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow && broadcastClosing(modalWindow, result, true)) {
          modalWindow.value.deferred.resolve(result);
          removeModalWindow(modalInstance);
          modalWindow.value.modalOpener.focus();
          return true;
        }
        return !modalWindow;
      };

      $modalStack.dismiss = function (modalInstance, reason) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow && broadcastClosing(modalWindow, reason, false)) {
          modalWindow.value.deferred.reject(reason);
          removeModalWindow(modalInstance);
          modalWindow.value.modalOpener.focus();
          return true;
        }
        return !modalWindow;
      };

      $modalStack.dismissAll = function (reason) {
        var topModal = this.getTop();
        while (topModal && this.dismiss(topModal.key, reason)) {
          topModal = this.getTop();
        }
      };

      $modalStack.getTop = function () {
        return openedWindows.top();
      };

      $modalStack.modalRendered = function (modalInstance) {
        var modalWindow = openedWindows.get(modalInstance);
        if (modalWindow) {
          modalWindow.value.renderDeferred.resolve();
        }
      };

      return $modalStack;
    }])

  .provider('$modal', function () {

    var $modalProvider = {
      options: {
        animation: true,
        backdrop: true, //can also be false or 'static'
        keyboard: true
      },
      $get: ['$injector', '$rootScope', '$q', '$templateRequest', '$controller', '$modalStack',
        function ($injector, $rootScope, $q, $templateRequest, $controller, $modalStack) {

          var $modal = {};

          function getTemplatePromise(options) {
            return options.template ? $q.when(options.template) :
              $templateRequest(angular.isFunction(options.templateUrl) ? (options.templateUrl)() : options.templateUrl);
          }

          function getResolvePromises(resolves) {
            var promisesArr = [];
            angular.forEach(resolves, function (value) {
              if (angular.isFunction(value) || angular.isArray(value)) {
                promisesArr.push($q.when($injector.invoke(value)));
              }
            });
            return promisesArr;
          }

          $modal.open = function (modalOptions) {

            var modalResultDeferred = $q.defer();
            var modalOpenedDeferred = $q.defer();
            var modalRenderDeferred = $q.defer();

            //prepare an instance of a modal to be injected into controllers and returned to a caller
            var modalInstance = {
              result: modalResultDeferred.promise,
              opened: modalOpenedDeferred.promise,
              rendered: modalRenderDeferred.promise,
              close: function (result) {
                return $modalStack.close(modalInstance, result);
              },
              dismiss: function (reason) {
                return $modalStack.dismiss(modalInstance, reason);
              }
            };

            //merge and clean up options
            modalOptions = angular.extend({}, $modalProvider.options, modalOptions);
            modalOptions.resolve = modalOptions.resolve || {};

            //verify options
            if (!modalOptions.template && !modalOptions.templateUrl) {
              throw new Error('One of template or templateUrl options is required.');
            }

            var templateAndResolvePromise =
              $q.all([getTemplatePromise(modalOptions)].concat(getResolvePromises(modalOptions.resolve)));


            templateAndResolvePromise.then(function resolveSuccess(tplAndVars) {

              var modalScope = (modalOptions.scope || $rootScope).$new();
              modalScope.$close = modalInstance.close;
              modalScope.$dismiss = modalInstance.dismiss;

              var ctrlInstance, ctrlLocals = {};
              var resolveIter = 1;

              //controllers
              if (modalOptions.controller) {
                ctrlLocals.$scope = modalScope;
                ctrlLocals.$modalInstance = modalInstance;
                angular.forEach(modalOptions.resolve, function (value, key) {
                  ctrlLocals[key] = tplAndVars[resolveIter++];
                });

                ctrlInstance = $controller(modalOptions.controller, ctrlLocals);
                if (modalOptions.controllerAs) {
                  modalScope[modalOptions.controllerAs] = ctrlInstance;
                }
              }

              $modalStack.open(modalInstance, {
                scope: modalScope,
                deferred: modalResultDeferred,
                renderDeferred: modalRenderDeferred,
                content: tplAndVars[0],
                animation: modalOptions.animation,
                backdrop: modalOptions.backdrop,
                keyboard: modalOptions.keyboard,
                backdropClass: modalOptions.backdropClass,
                windowClass: modalOptions.windowClass,
                windowTemplateUrl: modalOptions.windowTemplateUrl,
                size: modalOptions.size
              });

            }, function resolveError(reason) {
              modalResultDeferred.reject(reason);
            });

            templateAndResolvePromise.then(function () {
              modalOpenedDeferred.resolve(true);
            }, function (reason) {
              modalOpenedDeferred.reject(reason);
            });

            return modalInstance;
          };

          return $modal;
        }]
    };

    return $modalProvider;
  });

angular.module('ui.bootstrap.pagination', [])

.controller('PaginationController', ['$scope', '$attrs', '$parse', function ($scope, $attrs, $parse) {
  var self = this,
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
      setNumPages = $attrs.numPages ? $parse($attrs.numPages).assign : angular.noop;

  this.init = function(ngModelCtrl_, config) {
    ngModelCtrl = ngModelCtrl_;
    this.config = config;

    ngModelCtrl.$render = function() {
      self.render();
    };

    if ($attrs.itemsPerPage) {
      $scope.$parent.$watch($parse($attrs.itemsPerPage), function(value) {
        self.itemsPerPage = parseInt(value, 10);
        $scope.totalPages = self.calculateTotalPages();
      });
    } else {
      this.itemsPerPage = config.itemsPerPage;
    }

    $scope.$watch('totalItems', function() {
      $scope.totalPages = self.calculateTotalPages();
    });

    $scope.$watch('totalPages', function(value) {
      setNumPages($scope.$parent, value); // Readonly variable

      if ( $scope.page > value ) {
        $scope.selectPage(value);
      } else {
        ngModelCtrl.$render();
      }
    });
  };

  this.calculateTotalPages = function() {
    var totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil($scope.totalItems / this.itemsPerPage);
    return Math.max(totalPages || 0, 1);
  };

  this.render = function() {
    $scope.page = parseInt(ngModelCtrl.$viewValue, 10) || 1;
  };

  $scope.selectPage = function(page, evt) {
    if ( $scope.page !== page && page > 0 && page <= $scope.totalPages) {
      if (evt && evt.target) {
        evt.target.blur();
      }
      ngModelCtrl.$setViewValue(page);
      ngModelCtrl.$render();
    }
  };

  $scope.getText = function( key ) {
    return $scope[key + 'Text'] || self.config[key + 'Text'];
  };
  $scope.noPrevious = function() {
    return $scope.page === 1;
  };
  $scope.noNext = function() {
    return $scope.page === $scope.totalPages;
  };
}])

.constant('paginationConfig', {
  itemsPerPage: 10,
  boundaryLinks: false,
  directionLinks: true,
  firstText: 'First',
  previousText: 'Previous',
  nextText: 'Next',
  lastText: 'Last',
  rotate: true
})

.directive('pagination', ['$parse', 'paginationConfig', function($parse, paginationConfig) {
  return {
    restrict: 'EA',
    scope: {
      totalItems: '=',
      firstText: '@',
      previousText: '@',
      nextText: '@',
      lastText: '@'
    },
    require: ['pagination', '?ngModel'],
    controller: 'PaginationController',
    templateUrl: 'template/pagination/pagination.html',
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
         return; // do nothing if no ng-model
      }

      // Setup configuration parameters
      var maxSize = angular.isDefined(attrs.maxSize) ? scope.$parent.$eval(attrs.maxSize) : paginationConfig.maxSize,
          rotate = angular.isDefined(attrs.rotate) ? scope.$parent.$eval(attrs.rotate) : paginationConfig.rotate;
      scope.boundaryLinks = angular.isDefined(attrs.boundaryLinks) ? scope.$parent.$eval(attrs.boundaryLinks) : paginationConfig.boundaryLinks;
      scope.directionLinks = angular.isDefined(attrs.directionLinks) ? scope.$parent.$eval(attrs.directionLinks) : paginationConfig.directionLinks;

      paginationCtrl.init(ngModelCtrl, paginationConfig);

      if (attrs.maxSize) {
        scope.$parent.$watch($parse(attrs.maxSize), function(value) {
          maxSize = parseInt(value, 10);
          paginationCtrl.render();
        });
      }

      // Create page object used in template
      function makePage(number, text, isActive) {
        return {
          number: number,
          text: text,
          active: isActive
        };
      }

      function getPages(currentPage, totalPages) {
        var pages = [];

        // Default page limits
        var startPage = 1, endPage = totalPages;
        var isMaxSized = ( angular.isDefined(maxSize) && maxSize < totalPages );

        // recompute if maxSize
        if ( isMaxSized ) {
          if ( rotate ) {
            // Current page is displayed in the middle of the visible ones
            startPage = Math.max(currentPage - Math.floor(maxSize/2), 1);
            endPage   = startPage + maxSize - 1;

            // Adjust if limit is exceeded
            if (endPage > totalPages) {
              endPage   = totalPages;
              startPage = endPage - maxSize + 1;
            }
          } else {
            // Visible pages are paginated with maxSize
            startPage = ((Math.ceil(currentPage / maxSize) - 1) * maxSize) + 1;

            // Adjust last page if limit is exceeded
            endPage = Math.min(startPage + maxSize - 1, totalPages);
          }
        }

        // Add page number links
        for (var number = startPage; number <= endPage; number++) {
          var page = makePage(number, number, number === currentPage);
          pages.push(page);
        }

        // Add links to move between page sets
        if ( isMaxSized && ! rotate ) {
          if ( startPage > 1 ) {
            var previousPageSet = makePage(startPage - 1, '...', false);
            pages.unshift(previousPageSet);
          }

          if ( endPage < totalPages ) {
            var nextPageSet = makePage(endPage + 1, '...', false);
            pages.push(nextPageSet);
          }
        }

        return pages;
      }

      var originalRender = paginationCtrl.render;
      paginationCtrl.render = function() {
        originalRender();
        if (scope.page > 0 && scope.page <= scope.totalPages) {
          scope.pages = getPages(scope.page, scope.totalPages);
        }
      };
    }
  };
}])

.constant('pagerConfig', {
  itemsPerPage: 10,
  previousText: '« Previous',
  nextText: 'Next »',
  align: true
})

.directive('pager', ['pagerConfig', function(pagerConfig) {
  return {
    restrict: 'EA',
    scope: {
      totalItems: '=',
      previousText: '@',
      nextText: '@'
    },
    require: ['pager', '?ngModel'],
    controller: 'PaginationController',
    templateUrl: 'template/pagination/pager.html',
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var paginationCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if (!ngModelCtrl) {
         return; // do nothing if no ng-model
      }

      scope.align = angular.isDefined(attrs.align) ? scope.$parent.$eval(attrs.align) : pagerConfig.align;
      paginationCtrl.init(ngModelCtrl, pagerConfig);
    }
  };
}]);

/**
 * The following features are still outstanding: animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html tooltips, and selector delegation.
 */
angular.module( 'ui.bootstrap.tooltip', [ 'ui.bootstrap.position', 'ui.bootstrap.bindHtml' ] )

/**
 * The $tooltip service creates tooltip- and popover-like directives as well as
 * houses global options for them.
 */
.provider( '$tooltip', function () {
  // The default options tooltip and popover.
  var defaultOptions = {
    placement: 'top',
    animation: true,
    popupDelay: 0,
    useContentExp: false
  };

  // Default hide triggers for each show trigger
  var triggerMap = {
    'mouseenter': 'mouseleave',
    'click': 'click',
    'focus': 'blur'
  };

  // The options specified to the provider globally.
  var globalOptions = {};

  /**
   * `options({})` allows global configuration of all tooltips in the
   * application.
   *
   *   var app = angular.module( 'App', ['ui.bootstrap.tooltip'], function( $tooltipProvider ) {
   *     // place tooltips left instead of top by default
   *     $tooltipProvider.options( { placement: 'left' } );
   *   });
   */
	this.options = function( value ) {
		angular.extend( globalOptions, value );
	};

  /**
   * This allows you to extend the set of trigger mappings available. E.g.:
   *
   *   $tooltipProvider.setTriggers( 'openTrigger': 'closeTrigger' );
   */
  this.setTriggers = function setTriggers ( triggers ) {
    angular.extend( triggerMap, triggers );
  };

  /**
   * This is a helper function for translating camel-case to snake-case.
   */
  function snake_case(name){
    var regexp = /[A-Z]/g;
    var separator = '-';
    return name.replace(regexp, function(letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }

  /**
   * Returns the actual instance of the $tooltip service.
   * TODO support multiple triggers
   */
  this.$get = [ '$window', '$compile', '$timeout', '$document', '$position', '$interpolate', function ( $window, $compile, $timeout, $document, $position, $interpolate ) {
    return function $tooltip ( type, prefix, defaultTriggerShow, options ) {
      options = angular.extend( {}, defaultOptions, globalOptions, options );

      /**
       * Returns an object of show and hide triggers.
       *
       * If a trigger is supplied,
       * it is used to show the tooltip; otherwise, it will use the `trigger`
       * option passed to the `$tooltipProvider.options` method; else it will
       * default to the trigger supplied to this directive factory.
       *
       * The hide trigger is based on the show trigger. If the `trigger` option
       * was passed to the `$tooltipProvider.options` method, it will use the
       * mapped trigger from `triggerMap` or the passed trigger if the map is
       * undefined; otherwise, it uses the `triggerMap` value of the show
       * trigger; else it will just use the show trigger.
       */
      function getTriggers ( trigger ) {
        var show = trigger || options.trigger || defaultTriggerShow;
        var hide = triggerMap[show] || show;
        return {
          show: show,
          hide: hide
        };
      }

      var directiveName = snake_case( type );

      var startSym = $interpolate.startSymbol();
      var endSym = $interpolate.endSymbol();
      var template =
        '<div '+ directiveName +'-popup '+
          'title="'+startSym+'title'+endSym+'" '+
          (options.useContentExp ?
            'content-exp="contentExp()" ' :
            'content="'+startSym+'content'+endSym+'" ') +
          'placement="'+startSym+'placement'+endSym+'" '+
          'popup-class="'+startSym+'popupClass'+endSym+'" '+
          'animation="animation" '+
          'is-open="isOpen"'+
          'origin-scope="origScope" '+
          '>'+
        '</div>';

      return {
        restrict: 'EA',
        compile: function (tElem, tAttrs) {
          var tooltipLinker = $compile( template );

          return function link ( scope, element, attrs, tooltipCtrl ) {
            var tooltip;
            var tooltipLinkedScope;
            var transitionTimeout;
            var popupTimeout;
            var appendToBody = angular.isDefined( options.appendToBody ) ? options.appendToBody : false;
            var triggers = getTriggers( undefined );
            var hasEnableExp = angular.isDefined(attrs[prefix+'Enable']);
            var ttScope = scope.$new(true);

            var positionTooltip = function () {
              if (!tooltip) { return; }

              var ttPosition = $position.positionElements(element, tooltip, ttScope.placement, appendToBody);
              ttPosition.top += 'px';
              ttPosition.left += 'px';

              // Now set the calculated positioning.
              tooltip.css( ttPosition );
            };

            // Set up the correct scope to allow transclusion later
            ttScope.origScope = scope;

            // By default, the tooltip is not open.
            // TODO add ability to start tooltip opened
            ttScope.isOpen = false;

            function toggleTooltipBind () {
              if ( ! ttScope.isOpen ) {
                showTooltipBind();
              } else {
                hideTooltipBind();
              }
            }

            // Show the tooltip with delay if specified, otherwise show it immediately
            function showTooltipBind() {
              if(hasEnableExp && !scope.$eval(attrs[prefix+'Enable'])) {
                return;
              }

              prepareTooltip();

              if ( ttScope.popupDelay ) {
                // Do nothing if the tooltip was already scheduled to pop-up.
                // This happens if show is triggered multiple times before any hide is triggered.
                if (!popupTimeout) {
                  popupTimeout = $timeout( show, ttScope.popupDelay, false );
                  popupTimeout.then(function(reposition){reposition();});
                }
              } else {
                show()();
              }
            }

            function hideTooltipBind () {
              scope.$apply(function () {
                hide();
              });
            }

            // Show the tooltip popup element.
            function show() {

              popupTimeout = null;

              // If there is a pending remove transition, we must cancel it, lest the
              // tooltip be mysteriously removed.
              if ( transitionTimeout ) {
                $timeout.cancel( transitionTimeout );
                transitionTimeout = null;
              }

              // Don't show empty tooltips.
              if ( !(options.useContentExp ? ttScope.contentExp() : ttScope.content) ) {
                return angular.noop;
              }

              createTooltip();

              // Set the initial positioning.
              tooltip.css({ top: 0, left: 0, display: 'block' });
              ttScope.$digest();

              positionTooltip();

              // And show the tooltip.
              ttScope.isOpen = true;
              ttScope.$apply(); // digest required as $apply is not called

              // Return positioning function as promise callback for correct
              // positioning after draw.
              return positionTooltip;
            }

            // Hide the tooltip popup element.
            function hide() {
              // First things first: we don't show it anymore.
              ttScope.isOpen = false;

              //if tooltip is going to be shown after delay, we must cancel this
              $timeout.cancel( popupTimeout );
              popupTimeout = null;

              // And now we remove it from the DOM. However, if we have animation, we
              // need to wait for it to expire beforehand.
              // FIXME: this is a placeholder for a port of the transitions library.
              if ( ttScope.animation ) {
                if (!transitionTimeout) {
                  transitionTimeout = $timeout(removeTooltip, 500);
                }
              } else {
                removeTooltip();
              }
            }

            function createTooltip() {
              // There can only be one tooltip element per directive shown at once.
              if (tooltip) {
                removeTooltip();
              }
              tooltipLinkedScope = ttScope.$new();
              tooltip = tooltipLinker(tooltipLinkedScope, function (tooltip) {
                if ( appendToBody ) {
                  $document.find( 'body' ).append( tooltip );
                } else {
                  element.after( tooltip );
                }
              });

              tooltipLinkedScope.$watch(function () {
                $timeout(positionTooltip, 0, false);
              });

              if (options.useContentExp) {
                tooltipLinkedScope.$watch('contentExp()', function (val) {
                  if (!val && ttScope.isOpen ) {
                    hide();
                  }
                });
              }
            }

            function removeTooltip() {
              transitionTimeout = null;
              if (tooltip) {
                tooltip.remove();
                tooltip = null;
              }
              if (tooltipLinkedScope) {
                tooltipLinkedScope.$destroy();
                tooltipLinkedScope = null;
              }
            }

            function prepareTooltip() {
              prepPopupClass();
              prepPlacement();
              prepPopupDelay();
            }

            ttScope.contentExp = function () {
              return scope.$eval(attrs[type]);
            };

            /**
             * Observe the relevant attributes.
             */
            if (!options.useContentExp) {
              attrs.$observe( type, function ( val ) {
                ttScope.content = val;

                if (!val && ttScope.isOpen ) {
                  hide();
                }
              });
            }

            attrs.$observe( 'disabled', function ( val ) {
              if (val && ttScope.isOpen ) {
                hide();
              }
            });

            attrs.$observe( prefix+'Title', function ( val ) {
              ttScope.title = val;
            });

            function prepPopupClass() {
              ttScope.popupClass = attrs[prefix + 'Class'];
            }

            function prepPlacement() {
              var val = attrs[ prefix + 'Placement' ];
              ttScope.placement = angular.isDefined( val ) ? val : options.placement;
            }

            function prepPopupDelay() {
              var val = attrs[ prefix + 'PopupDelay' ];
              var delay = parseInt( val, 10 );
              ttScope.popupDelay = ! isNaN(delay) ? delay : options.popupDelay;
            }

            var unregisterTriggers = function () {
              element.unbind(triggers.show, showTooltipBind);
              element.unbind(triggers.hide, hideTooltipBind);
            };

            function prepTriggers() {
              var val = attrs[ prefix + 'Trigger' ];
              unregisterTriggers();

              triggers = getTriggers( val );

              if ( triggers.show === triggers.hide ) {
                element.bind( triggers.show, toggleTooltipBind );
              } else {
                element.bind( triggers.show, showTooltipBind );
                element.bind( triggers.hide, hideTooltipBind );
              }
            }
            prepTriggers();

            var animation = scope.$eval(attrs[prefix + 'Animation']);
            ttScope.animation = angular.isDefined(animation) ? !!animation : options.animation;

            var appendToBodyVal = scope.$eval(attrs[prefix + 'AppendToBody']);
            appendToBody = angular.isDefined(appendToBodyVal) ? appendToBodyVal : appendToBody;

            // if a tooltip is attached to <body> we need to remove it on
            // location change as its parent scope will probably not be destroyed
            // by the change.
            if ( appendToBody ) {
              scope.$on('$locationChangeSuccess', function closeTooltipOnLocationChangeSuccess () {
              if ( ttScope.isOpen ) {
                hide();
              }
            });
            }

            // Make sure tooltip is destroyed and removed.
            scope.$on('$destroy', function onDestroyTooltip() {
              $timeout.cancel( transitionTimeout );
              $timeout.cancel( popupTimeout );
              unregisterTriggers();
              removeTooltip();
              ttScope = null;
            });
          };
        }
      };
    };
  }];
})

// This is mostly ngInclude code but with a custom scope
.directive( 'tooltipTemplateTransclude', [
         '$animate', '$sce', '$compile', '$templateRequest',
function ($animate ,  $sce ,  $compile ,  $templateRequest) {
  return {
    link: function ( scope, elem, attrs ) {
      var origScope = scope.$eval(attrs.tooltipTemplateTranscludeScope);

      var changeCounter = 0,
        currentScope,
        previousElement,
        currentElement;

      var cleanupLastIncludeContent = function() {
        if (previousElement) {
          previousElement.remove();
          previousElement = null;
        }
        if (currentScope) {
          currentScope.$destroy();
          currentScope = null;
        }
        if (currentElement) {
          $animate.leave(currentElement).then(function() {
            previousElement = null;
          });
          previousElement = currentElement;
          currentElement = null;
        }
      };

      scope.$watch($sce.parseAsResourceUrl(attrs.tooltipTemplateTransclude), function (src) {
        var thisChangeId = ++changeCounter;

        if (src) {
          //set the 2nd param to true to ignore the template request error so that the inner
          //contents and scope can be cleaned up.
          $templateRequest(src, true).then(function(response) {
            if (thisChangeId !== changeCounter) { return; }
            var newScope = origScope.$new();
            var template = response;

            var clone = $compile(template)(newScope, function(clone) {
              cleanupLastIncludeContent();
              $animate.enter(clone, elem);
            });

            currentScope = newScope;
            currentElement = clone;

            currentScope.$emit('$includeContentLoaded', src);
          }, function() {
            if (thisChangeId === changeCounter) {
              cleanupLastIncludeContent();
              scope.$emit('$includeContentError', src);
            }
          });
          scope.$emit('$includeContentRequested', src);
        } else {
          cleanupLastIncludeContent();
        }
      });

      scope.$on('$destroy', cleanupLastIncludeContent);
    }
  };
}])

/**
 * Note that it's intentional that these classes are *not* applied through $animate.
 * They must not be animated as they're expected to be present on the tooltip on
 * initialization.
 */
.directive('tooltipClasses', function () {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      if (scope.placement) {
        element.addClass(scope.placement);
      }
      if (scope.popupClass) {
        element.addClass(scope.popupClass);
      }
      if (scope.animation()) {
        element.addClass(attrs.tooltipAnimationClass);
      }
    }
  };
})

.directive( 'tooltipPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-popup.html'
  };
})

.directive( 'tooltip', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'tooltip', 'tooltip', 'mouseenter' );
}])

.directive( 'tooltipTemplatePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
      originScope: '&' },
    templateUrl: 'template/tooltip/tooltip-template-popup.html'
  };
})

.directive( 'tooltipTemplate', [ '$tooltip', function ( $tooltip ) {
  return $tooltip('tooltipTemplate', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}])

.directive( 'tooltipHtmlPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-html-popup.html'
  };
})

.directive( 'tooltipHtml', [ '$tooltip', function ( $tooltip ) {
  return $tooltip('tooltipHtml', 'tooltip', 'mouseenter', {
    useContentExp: true
  });
}])

/*
Deprecated
*/
.directive( 'tooltipHtmlUnsafePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/tooltip/tooltip-html-unsafe-popup.html'
  };
})

.value('tooltipHtmlUnsafeSuppressDeprecated', false)
.directive( 'tooltipHtmlUnsafe', [
          '$tooltip', 'tooltipHtmlUnsafeSuppressDeprecated', '$log',
function ( $tooltip ,  tooltipHtmlUnsafeSuppressDeprecated ,  $log) {
  if (!tooltipHtmlUnsafeSuppressDeprecated) {
    $log.warn('tooltip-html-unsafe is now deprecated. Use tooltip-html or tooltip-template instead.');
  }
  return $tooltip( 'tooltipHtmlUnsafe', 'tooltip', 'mouseenter' );
}]);

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
angular.module( 'ui.bootstrap.popover', [ 'ui.bootstrap.tooltip' ] )

.directive( 'popoverTemplatePopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', contentExp: '&', placement: '@', popupClass: '@', animation: '&', isOpen: '&',
      originScope: '&' },
    templateUrl: 'template/popover/popover-template.html'
  };
})

.directive( 'popoverTemplate', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'popoverTemplate', 'popover', 'click', {
    useContentExp: true
  } );
}])

.directive( 'popoverPopup', function () {
  return {
    restrict: 'EA',
    replace: true,
    scope: { title: '@', content: '@', placement: '@', popupClass: '@', animation: '&', isOpen: '&' },
    templateUrl: 'template/popover/popover.html'
  };
})

.directive( 'popover', [ '$tooltip', function ( $tooltip ) {
  return $tooltip( 'popover', 'popover', 'click' );
}]);

angular.module('ui.bootstrap.progressbar', [])

.constant('progressConfig', {
  animate: true,
  max: 100
})

.controller('ProgressController', ['$scope', '$attrs', 'progressConfig', function($scope, $attrs, progressConfig) {
    var self = this,
        animate = angular.isDefined($attrs.animate) ? $scope.$parent.$eval($attrs.animate) : progressConfig.animate;

    this.bars = [];
    $scope.max = angular.isDefined($scope.max) ? $scope.max : progressConfig.max;

    this.addBar = function(bar, element) {
        if ( !animate ) {
            element.css({'transition': 'none'});
        }

        this.bars.push(bar);

        bar.$watch('value', function( value ) {
            bar.percent = +(100 * value / $scope.max).toFixed(2);
        });

        bar.$on('$destroy', function() {
            element = null;
            self.removeBar(bar);
        });
    };

    this.removeBar = function(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
}])

.directive('progress', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        controller: 'ProgressController',
        require: 'progress',
        scope: {},
        templateUrl: 'template/progressbar/progress.html'
    };
})

.directive('bar', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        require: '^progress',
        scope: {
            value: '=',
            max: '=?',
            type: '@'
        },
        templateUrl: 'template/progressbar/bar.html',
        link: function(scope, element, attrs, progressCtrl) {
            progressCtrl.addBar(scope, element);
        }
    };
})

.directive('progressbar', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        controller: 'ProgressController',
        scope: {
            value: '=',
            max: '=?',
            type: '@'
        },
        templateUrl: 'template/progressbar/progressbar.html',
        link: function(scope, element, attrs, progressCtrl) {
            progressCtrl.addBar(scope, angular.element(element.children()[0]));
        }
    };
});

angular.module('ui.bootstrap.rating', [])

.constant('ratingConfig', {
  max: 5,
  stateOn: null,
  stateOff: null
})

.controller('RatingController', ['$scope', '$attrs', 'ratingConfig', function($scope, $attrs, ratingConfig) {
  var ngModelCtrl  = { $setViewValue: angular.noop };

  this.init = function(ngModelCtrl_) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.push(function(value) {
      if (angular.isNumber(value) && value << 0 !== value) {
        value = Math.round(value);
      }
      return value;
    });

    this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
    this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;

    var ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) :
                        new Array( angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max );
    $scope.range = this.buildTemplateObjects(ratingStates);
  };

  this.buildTemplateObjects = function(states) {
    for (var i = 0, n = states.length; i < n; i++) {
      states[i] = angular.extend({ index: i }, { stateOn: this.stateOn, stateOff: this.stateOff }, states[i]);
    }
    return states;
  };

  $scope.rate = function(value) {
    if ( !$scope.readonly && value >= 0 && value <= $scope.range.length ) {
      ngModelCtrl.$setViewValue(value);
      ngModelCtrl.$render();
    }
  };

  $scope.enter = function(value) {
    if ( !$scope.readonly ) {
      $scope.value = value;
    }
    $scope.onHover({value: value});
  };

  $scope.reset = function() {
    $scope.value = ngModelCtrl.$viewValue;
    $scope.onLeave();
  };

  $scope.onKeydown = function(evt) {
    if (/(37|38|39|40)/.test(evt.which)) {
      evt.preventDefault();
      evt.stopPropagation();
      $scope.rate( $scope.value + (evt.which === 38 || evt.which === 39 ? 1 : -1) );
    }
  };

  this.render = function() {
    $scope.value = ngModelCtrl.$viewValue;
  };
}])

.directive('rating', function() {
  return {
    restrict: 'EA',
    require: ['rating', 'ngModel'],
    scope: {
      readonly: '=?',
      onHover: '&',
      onLeave: '&'
    },
    controller: 'RatingController',
    templateUrl: 'template/rating/rating.html',
    replace: true,
    link: function(scope, element, attrs, ctrls) {
      var ratingCtrl = ctrls[0], ngModelCtrl = ctrls[1];
      ratingCtrl.init( ngModelCtrl );
    }
  };
});

/**
 * @ngdoc overview
 * @name ui.bootstrap.tabs
 *
 * @description
 * AngularJS version of the tabs directive.
 */

angular.module('ui.bootstrap.tabs', [])

.controller('TabsetController', ['$scope', function TabsetCtrl($scope) {
  var ctrl = this,
      tabs = ctrl.tabs = $scope.tabs = [];

  ctrl.select = function(selectedTab) {
    angular.forEach(tabs, function(tab) {
      if (tab.active && tab !== selectedTab) {
        tab.active = false;
        tab.onDeselect();
      }
    });
    selectedTab.active = true;
    selectedTab.onSelect();
  };

  ctrl.addTab = function addTab(tab) {
    tabs.push(tab);
    // we can't run the select function on the first tab
    // since that would select it twice
    if (tabs.length === 1 && tab.active !== false) {
      tab.active = true;
    } else if (tab.active) {
      ctrl.select(tab);
    }
    else {
      tab.active = false;
    }
  };

  ctrl.removeTab = function removeTab(tab) {
    var index = tabs.indexOf(tab);
    //Select a new tab if the tab to be removed is selected and not destroyed
    if (tab.active && tabs.length > 1 && !destroyed) {
      //If this is the last tab, select the previous tab. else, the next tab.
      var newActiveIndex = index == tabs.length - 1 ? index - 1 : index + 1;
      ctrl.select(tabs[newActiveIndex]);
    }
    tabs.splice(index, 1);
  };

  var destroyed;
  $scope.$on('$destroy', function() {
    destroyed = true;
  });
}])

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabset
 * @restrict EA
 *
 * @description
 * Tabset is the outer container for the tabs directive
 *
 * @param {boolean=} vertical Whether or not to use vertical styling for the tabs.
 * @param {boolean=} justified Whether or not to use justified styling for the tabs.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <tabset>
      <tab heading="Tab 1"><b>First</b> Content!</tab>
      <tab heading="Tab 2"><i>Second</i> Content!</tab>
    </tabset>
    <hr />
    <tabset vertical="true">
      <tab heading="Vertical Tab 1"><b>First</b> Vertical Content!</tab>
      <tab heading="Vertical Tab 2"><i>Second</i> Vertical Content!</tab>
    </tabset>
    <tabset justified="true">
      <tab heading="Justified Tab 1"><b>First</b> Justified Content!</tab>
      <tab heading="Justified Tab 2"><i>Second</i> Justified Content!</tab>
    </tabset>
  </file>
</example>
 */
.directive('tabset', function() {
  return {
    restrict: 'EA',
    transclude: true,
    replace: true,
    scope: {
      type: '@'
    },
    controller: 'TabsetController',
    templateUrl: 'template/tabs/tabset.html',
    link: function(scope, element, attrs) {
      scope.vertical = angular.isDefined(attrs.vertical) ? scope.$parent.$eval(attrs.vertical) : false;
      scope.justified = angular.isDefined(attrs.justified) ? scope.$parent.$eval(attrs.justified) : false;
    }
  };
})

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tab
 * @restrict EA
 *
 * @param {string=} heading The visible heading, or title, of the tab. Set HTML headings with {@link ui.bootstrap.tabs.directive:tabHeading tabHeading}.
 * @param {string=} select An expression to evaluate when the tab is selected.
 * @param {boolean=} active A binding, telling whether or not this tab is selected.
 * @param {boolean=} disabled A binding, telling whether or not this tab is disabled.
 *
 * @description
 * Creates a tab with a heading and content. Must be placed within a {@link ui.bootstrap.tabs.directive:tabset tabset}.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <div ng-controller="TabsDemoCtrl">
      <button class="btn btn-small" ng-click="items[0].active = true">
        Select item 1, using active binding
      </button>
      <button class="btn btn-small" ng-click="items[1].disabled = !items[1].disabled">
        Enable/disable item 2, using disabled binding
      </button>
      <br />
      <tabset>
        <tab heading="Tab 1">First Tab</tab>
        <tab select="alertMe()">
          <tab-heading><i class="icon-bell"></i> Alert me!</tab-heading>
          Second Tab, with alert callback and html heading!
        </tab>
        <tab ng-repeat="item in items"
          heading="{{item.title}}"
          disabled="item.disabled"
          active="item.active">
          {{item.content}}
        </tab>
      </tabset>
    </div>
  </file>
  <file name="script.js">
    function TabsDemoCtrl($scope) {
      $scope.items = [
        { title:"Dynamic Title 1", content:"Dynamic Item 0" },
        { title:"Dynamic Title 2", content:"Dynamic Item 1", disabled: true }
      ];

      $scope.alertMe = function() {
        setTimeout(function() {
          alert("You've selected the alert tab!");
        });
      };
    };
  </file>
</example>
 */

/**
 * @ngdoc directive
 * @name ui.bootstrap.tabs.directive:tabHeading
 * @restrict EA
 *
 * @description
 * Creates an HTML heading for a {@link ui.bootstrap.tabs.directive:tab tab}. Must be placed as a child of a tab element.
 *
 * @example
<example module="ui.bootstrap">
  <file name="index.html">
    <tabset>
      <tab>
        <tab-heading><b>HTML</b> in my titles?!</tab-heading>
        And some content, too!
      </tab>
      <tab>
        <tab-heading><i class="icon-heart"></i> Icon heading?!?</tab-heading>
        That's right.
      </tab>
    </tabset>
  </file>
</example>
 */
.directive('tab', ['$parse', '$log', function($parse, $log) {
  return {
    require: '^tabset',
    restrict: 'EA',
    replace: true,
    templateUrl: 'template/tabs/tab.html',
    transclude: true,
    scope: {
      active: '=?',
      heading: '@',
      onSelect: '&select', //This callback is called in contentHeadingTransclude
                          //once it inserts the tab's content into the dom
      onDeselect: '&deselect'
    },
    controller: function() {
      //Empty controller so other directives can require being 'under' a tab
    },
    compile: function(elm, attrs, transclude) {
      return function postLink(scope, elm, attrs, tabsetCtrl) {
        scope.$watch('active', function(active) {
          if (active) {
            tabsetCtrl.select(scope);
          }
        });

        scope.disabled = false;
        if ( attrs.disable ) {
          scope.$parent.$watch($parse(attrs.disable), function(value) {
            scope.disabled = !! value;
          });
        }

        // Deprecation support of "disabled" parameter
        // fix(tab): IE9 disabled attr renders grey text on enabled tab #2677
        // This code is duplicated from the lines above to make it easy to remove once
        // the feature has been completely deprecated
        if ( attrs.disabled ) {
          $log.warn('Use of "disabled" attribute has been deprecated, please use "disable"');
          scope.$parent.$watch($parse(attrs.disabled), function(value) {
            scope.disabled = !! value;
          });
        }

        scope.select = function() {
          if ( !scope.disabled ) {
            scope.active = true;
          }
        };

        tabsetCtrl.addTab(scope);
        scope.$on('$destroy', function() {
          tabsetCtrl.removeTab(scope);
        });

        //We need to transclude later, once the content container is ready.
        //when this link happens, we're inside a tab heading.
        scope.$transcludeFn = transclude;
      };
    }
  };
}])

.directive('tabHeadingTransclude', [function() {
  return {
    restrict: 'A',
    require: '^tab',
    link: function(scope, elm, attrs, tabCtrl) {
      scope.$watch('headingElement', function updateHeadingElement(heading) {
        if (heading) {
          elm.html('');
          elm.append(heading);
        }
      });
    }
  };
}])

.directive('tabContentTransclude', function() {
  return {
    restrict: 'A',
    require: '^tabset',
    link: function(scope, elm, attrs) {
      var tab = scope.$eval(attrs.tabContentTransclude);

      //Now our tab is ready to be transcluded: both the tab heading area
      //and the tab content area are loaded.  Transclude 'em both.
      tab.$transcludeFn(tab.$parent, function(contents) {
        angular.forEach(contents, function(node) {
          if (isTabHeading(node)) {
            //Let tabHeadingTransclude know.
            tab.headingElement = node;
          } else {
            elm.append(node);
          }
        });
      });
    }
  };
  function isTabHeading(node) {
    return node.tagName &&  (
      node.hasAttribute('tab-heading') ||
      node.hasAttribute('data-tab-heading') ||
      node.tagName.toLowerCase() === 'tab-heading' ||
      node.tagName.toLowerCase() === 'data-tab-heading'
    );
  }
})

;

angular.module('ui.bootstrap.timepicker', [])

.constant('timepickerConfig', {
  hourStep: 1,
  minuteStep: 1,
  showMeridian: true,
  meridians: null,
  readonlyInput: false,
  mousewheel: true,
  arrowkeys: true
})

.controller('TimepickerController', ['$scope', '$attrs', '$parse', '$log', '$locale', 'timepickerConfig', function($scope, $attrs, $parse, $log, $locale, timepickerConfig) {
  var selected = new Date(),
      ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
      meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS;

  this.init = function( ngModelCtrl_, inputs ) {
    ngModelCtrl = ngModelCtrl_;
    ngModelCtrl.$render = this.render;

    ngModelCtrl.$formatters.unshift(function (modelValue) {
      return modelValue ? new Date( modelValue ) : null;
    });

    var hoursInputEl = inputs.eq(0),
        minutesInputEl = inputs.eq(1);

    var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;
    if ( mousewheel ) {
      this.setupMousewheelEvents( hoursInputEl, minutesInputEl );
    }

    var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
    if (arrowkeys) {
      this.setupArrowkeyEvents( hoursInputEl, minutesInputEl );
    }

    $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
    this.setupInputEvents( hoursInputEl, minutesInputEl );
  };

  var hourStep = timepickerConfig.hourStep;
  if ($attrs.hourStep) {
    $scope.$parent.$watch($parse($attrs.hourStep), function(value) {
      hourStep = parseInt(value, 10);
    });
  }

  var minuteStep = timepickerConfig.minuteStep;
  if ($attrs.minuteStep) {
    $scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
      minuteStep = parseInt(value, 10);
    });
  }

  // 12H / 24H mode
  $scope.showMeridian = timepickerConfig.showMeridian;
  if ($attrs.showMeridian) {
    $scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
      $scope.showMeridian = !!value;

      if ( ngModelCtrl.$error.time ) {
        // Evaluate from template
        var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
        if (angular.isDefined( hours ) && angular.isDefined( minutes )) {
          selected.setHours( hours );
          refresh();
        }
      } else {
        updateTemplate();
      }
    });
  }

  // Get $scope.hours in 24H mode if valid
  function getHoursFromTemplate ( ) {
    var hours = parseInt( $scope.hours, 10 );
    var valid = ( $scope.showMeridian ) ? (hours > 0 && hours < 13) : (hours >= 0 && hours < 24);
    if ( !valid ) {
      return undefined;
    }

    if ( $scope.showMeridian ) {
      if ( hours === 12 ) {
        hours = 0;
      }
      if ( $scope.meridian === meridians[1] ) {
        hours = hours + 12;
      }
    }
    return hours;
  }

  function getMinutesFromTemplate() {
    var minutes = parseInt($scope.minutes, 10);
    return ( minutes >= 0 && minutes < 60 ) ? minutes : undefined;
  }

  function pad( value ) {
    return ( angular.isDefined(value) && value.toString().length < 2 ) ? '0' + value : value.toString();
  }

  // Respond on mousewheel spin
  this.setupMousewheelEvents = function( hoursInputEl, minutesInputEl ) {
    var isScrollingUp = function(e) {
      if (e.originalEvent) {
        e = e.originalEvent;
      }
      //pick correct delta variable depending on event
      var delta = (e.wheelDelta) ? e.wheelDelta : -e.deltaY;
      return (e.detail || delta > 0);
    };

    hoursInputEl.bind('mousewheel wheel', function(e) {
      $scope.$apply( (isScrollingUp(e)) ? $scope.incrementHours() : $scope.decrementHours() );
      e.preventDefault();
    });

    minutesInputEl.bind('mousewheel wheel', function(e) {
      $scope.$apply( (isScrollingUp(e)) ? $scope.incrementMinutes() : $scope.decrementMinutes() );
      e.preventDefault();
    });

  };

  // Respond on up/down arrowkeys
  this.setupArrowkeyEvents = function( hoursInputEl, minutesInputEl ) {
    hoursInputEl.bind('keydown', function(e) {
      if ( e.which === 38 ) { // up
        e.preventDefault();
        $scope.incrementHours();
        $scope.$apply();
      }
      else if ( e.which === 40 ) { // down
        e.preventDefault();
        $scope.decrementHours();
        $scope.$apply();
      }
    });

    minutesInputEl.bind('keydown', function(e) {
      if ( e.which === 38 ) { // up
        e.preventDefault();
        $scope.incrementMinutes();
        $scope.$apply();
      }
      else if ( e.which === 40 ) { // down
        e.preventDefault();
        $scope.decrementMinutes();
        $scope.$apply();
      }
    });
  };

  this.setupInputEvents = function( hoursInputEl, minutesInputEl ) {
    if ( $scope.readonlyInput ) {
      $scope.updateHours = angular.noop;
      $scope.updateMinutes = angular.noop;
      return;
    }

    var invalidate = function(invalidHours, invalidMinutes) {
      ngModelCtrl.$setViewValue( null );
      ngModelCtrl.$setValidity('time', false);
      if (angular.isDefined(invalidHours)) {
        $scope.invalidHours = invalidHours;
      }
      if (angular.isDefined(invalidMinutes)) {
        $scope.invalidMinutes = invalidMinutes;
      }
    };

    $scope.updateHours = function() {
      var hours = getHoursFromTemplate();

      if ( angular.isDefined(hours) ) {
        selected.setHours( hours );
        refresh( 'h' );
      } else {
        invalidate(true);
      }
    };

    hoursInputEl.bind('blur', function(e) {
      if ( !$scope.invalidHours && $scope.hours < 10) {
        $scope.$apply( function() {
          $scope.hours = pad( $scope.hours );
        });
      }
    });

    $scope.updateMinutes = function() {
      var minutes = getMinutesFromTemplate();

      if ( angular.isDefined(minutes) ) {
        selected.setMinutes( minutes );
        refresh( 'm' );
      } else {
        invalidate(undefined, true);
      }
    };

    minutesInputEl.bind('blur', function(e) {
      if ( !$scope.invalidMinutes && $scope.minutes < 10 ) {
        $scope.$apply( function() {
          $scope.minutes = pad( $scope.minutes );
        });
      }
    });

  };

  this.render = function() {
    var date = ngModelCtrl.$viewValue;

    if ( isNaN(date) ) {
      ngModelCtrl.$setValidity('time', false);
      $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
    } else {
      if ( date ) {
        selected = date;
      }
      makeValid();
      updateTemplate();
    }
  };

  // Call internally when we know that model is valid.
  function refresh( keyboardChange ) {
    makeValid();
    ngModelCtrl.$setViewValue( new Date(selected) );
    updateTemplate( keyboardChange );
  }

  function makeValid() {
    ngModelCtrl.$setValidity('time', true);
    $scope.invalidHours = false;
    $scope.invalidMinutes = false;
  }

  function updateTemplate( keyboardChange ) {
    var hours = selected.getHours(), minutes = selected.getMinutes();

    if ( $scope.showMeridian ) {
      hours = ( hours === 0 || hours === 12 ) ? 12 : hours % 12; // Convert 24 to 12 hour system
    }

    $scope.hours = keyboardChange === 'h' ? hours : pad(hours);
    if (keyboardChange !== 'm') {
      $scope.minutes = pad(minutes);
    }
    $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
  }

  function addMinutes( minutes ) {
    var dt = new Date( selected.getTime() + minutes * 60000 );
    selected.setHours( dt.getHours(), dt.getMinutes() );
    refresh();
  }

  $scope.incrementHours = function() {
    addMinutes( hourStep * 60 );
  };
  $scope.decrementHours = function() {
    addMinutes( - hourStep * 60 );
  };
  $scope.incrementMinutes = function() {
    addMinutes( minuteStep );
  };
  $scope.decrementMinutes = function() {
    addMinutes( - minuteStep );
  };
  $scope.toggleMeridian = function() {
    addMinutes( 12 * 60 * (( selected.getHours() < 12 ) ? 1 : -1) );
  };
}])

.directive('timepicker', function () {
  return {
    restrict: 'EA',
    require: ['timepicker', '?^ngModel'],
    controller:'TimepickerController',
    replace: true,
    scope: {},
    templateUrl: 'template/timepicker/timepicker.html',
    link: function(scope, element, attrs, ctrls) {
      var timepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

      if ( ngModelCtrl ) {
        timepickerCtrl.init( ngModelCtrl, element.find('input') );
      }
    }
  };
});

angular.module('ui.bootstrap.transition', [])

.value('$transitionSuppressDeprecated', false)
/**
 * $transition service provides a consistent interface to trigger CSS 3 transitions and to be informed when they complete.
 * @param  {DOMElement} element  The DOMElement that will be animated.
 * @param  {string|object|function} trigger  The thing that will cause the transition to start:
 *   - As a string, it represents the css class to be added to the element.
 *   - As an object, it represents a hash of style attributes to be applied to the element.
 *   - As a function, it represents a function to be called that will cause the transition to occur.
 * @return {Promise}  A promise that is resolved when the transition finishes.
 */
.factory('$transition', [
        '$q', '$timeout', '$rootScope', '$log', '$transitionSuppressDeprecated',
function($q ,  $timeout ,  $rootScope ,  $log ,  $transitionSuppressDeprecated) {

  if (!$transitionSuppressDeprecated) {
    $log.warn('$transition is now deprecated. Use $animate from ngAnimate instead.');
  }

  var $transition = function(element, trigger, options) {
    options = options || {};
    var deferred = $q.defer();
    var endEventName = $transition[options.animation ? 'animationEndEventName' : 'transitionEndEventName'];

    var transitionEndHandler = function(event) {
      $rootScope.$apply(function() {
        element.unbind(endEventName, transitionEndHandler);
        deferred.resolve(element);
      });
    };

    if (endEventName) {
      element.bind(endEventName, transitionEndHandler);
    }

    // Wrap in a timeout to allow the browser time to update the DOM before the transition is to occur
    $timeout(function() {
      if ( angular.isString(trigger) ) {
        element.addClass(trigger);
      } else if ( angular.isFunction(trigger) ) {
        trigger(element);
      } else if ( angular.isObject(trigger) ) {
        element.css(trigger);
      }
      //If browser does not support transitions, instantly resolve
      if ( !endEventName ) {
        deferred.resolve(element);
      }
    });

    // Add our custom cancel function to the promise that is returned
    // We can call this if we are about to run a new transition, which we know will prevent this transition from ending,
    // i.e. it will therefore never raise a transitionEnd event for that transition
    deferred.promise.cancel = function() {
      if ( endEventName ) {
        element.unbind(endEventName, transitionEndHandler);
      }
      deferred.reject('Transition cancelled');
    };

    return deferred.promise;
  };

  // Work out the name of the transitionEnd event
  var transElement = document.createElement('trans');
  var transitionEndEventNames = {
    'WebkitTransition': 'webkitTransitionEnd',
    'MozTransition': 'transitionend',
    'OTransition': 'oTransitionEnd',
    'transition': 'transitionend'
  };
  var animationEndEventNames = {
    'WebkitTransition': 'webkitAnimationEnd',
    'MozTransition': 'animationend',
    'OTransition': 'oAnimationEnd',
    'transition': 'animationend'
  };
  function findEndEventName(endEventNames) {
    for (var name in endEventNames){
      if (transElement.style[name] !== undefined) {
        return endEventNames[name];
      }
    }
  }
  $transition.transitionEndEventName = findEndEventName(transitionEndEventNames);
  $transition.animationEndEventName = findEndEventName(animationEndEventNames);
  return $transition;
}]);

angular.module('ui.bootstrap.typeahead', ['ui.bootstrap.position', 'ui.bootstrap.bindHtml'])

/**
 * A helper service that can parse typeahead's syntax (string provided by users)
 * Extracted to a separate service for ease of unit testing
 */
  .factory('typeaheadParser', ['$parse', function ($parse) {

  //                      00000111000000000000022200000000000000003333333333333330000000000044000
  var TYPEAHEAD_REGEXP = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;

  return {
    parse:function (input) {

      var match = input.match(TYPEAHEAD_REGEXP);
      if (!match) {
        throw new Error(
          'Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_"' +
            ' but got "' + input + '".');
      }

      return {
        itemName:match[3],
        source:$parse(match[4]),
        viewMapper:$parse(match[2] || match[1]),
        modelMapper:$parse(match[1])
      };
    }
  };
}])

  .directive('typeahead', ['$compile', '$parse', '$q', '$timeout', '$document', '$position', 'typeaheadParser',
    function ($compile, $parse, $q, $timeout, $document, $position, typeaheadParser) {

  var HOT_KEYS = [9, 13, 27, 38, 40];

  return {
    require:'ngModel',
    link:function (originalScope, element, attrs, modelCtrl) {

      //SUPPORTED ATTRIBUTES (OPTIONS)

      //minimal no of characters that needs to be entered before typeahead kicks-in
      var minSearch = originalScope.$eval(attrs.typeaheadMinLength) || 1;

      //minimal wait time after last character typed before typeahead kicks-in
      var waitTime = originalScope.$eval(attrs.typeaheadWaitMs) || 0;

      //should it restrict model values to the ones selected from the popup only?
      var isEditable = originalScope.$eval(attrs.typeaheadEditable) !== false;

      //binding to a variable that indicates if matches are being retrieved asynchronously
      var isLoadingSetter = $parse(attrs.typeaheadLoading).assign || angular.noop;

      //a callback executed when a match is selected
      var onSelectCallback = $parse(attrs.typeaheadOnSelect);

      var inputFormatter = attrs.typeaheadInputFormatter ? $parse(attrs.typeaheadInputFormatter) : undefined;

      var appendToBody =  attrs.typeaheadAppendToBody ? originalScope.$eval(attrs.typeaheadAppendToBody) : false;

      var focusFirst = originalScope.$eval(attrs.typeaheadFocusFirst) !== false;

      //INTERNAL VARIABLES

      //model setter executed upon match selection
      var $setModelValue = $parse(attrs.ngModel).assign;

      //expressions used by typeahead
      var parserResult = typeaheadParser.parse(attrs.typeahead);

      var hasFocus;

      //create a child scope for the typeahead directive so we are not polluting original scope
      //with typeahead-specific data (matches, query etc.)
      var scope = originalScope.$new();
      originalScope.$on('$destroy', function(){
        scope.$destroy();
      });

      // WAI-ARIA
      var popupId = 'typeahead-' + scope.$id + '-' + Math.floor(Math.random() * 10000);
      element.attr({
        'aria-autocomplete': 'list',
        'aria-expanded': false,
        'aria-owns': popupId
      });

      //pop-up element used to display matches
      var popUpEl = angular.element('<div typeahead-popup></div>');
      popUpEl.attr({
        id: popupId,
        matches: 'matches',
        active: 'activeIdx',
        select: 'select(activeIdx)',
        query: 'query',
        position: 'position'
      });
      //custom item template
      if (angular.isDefined(attrs.typeaheadTemplateUrl)) {
        popUpEl.attr('template-url', attrs.typeaheadTemplateUrl);
      }

      var resetMatches = function() {
        scope.matches = [];
        scope.activeIdx = -1;
        element.attr('aria-expanded', false);
      };

      var getMatchId = function(index) {
        return popupId + '-option-' + index;
      };

      // Indicate that the specified match is the active (pre-selected) item in the list owned by this typeahead.
      // This attribute is added or removed automatically when the `activeIdx` changes.
      scope.$watch('activeIdx', function(index) {
        if (index < 0) {
          element.removeAttr('aria-activedescendant');
        } else {
          element.attr('aria-activedescendant', getMatchId(index));
        }
      });

      var getMatchesAsync = function(inputValue) {

        var locals = {$viewValue: inputValue};
        isLoadingSetter(originalScope, true);
        $q.when(parserResult.source(originalScope, locals)).then(function(matches) {

          //it might happen that several async queries were in progress if a user were typing fast
          //but we are interested only in responses that correspond to the current view value
          var onCurrentRequest = (inputValue === modelCtrl.$viewValue);
          if (onCurrentRequest && hasFocus) {
            if (matches && matches.length > 0) {

              scope.activeIdx = focusFirst ? 0 : -1;
              scope.matches.length = 0;

              //transform labels
              for(var i=0; i<matches.length; i++) {
                locals[parserResult.itemName] = matches[i];
                scope.matches.push({
                  id: getMatchId(i),
                  label: parserResult.viewMapper(scope, locals),
                  model: matches[i]
                });
              }

              scope.query = inputValue;
              //position pop-up with matches - we need to re-calculate its position each time we are opening a window
              //with matches as a pop-up might be absolute-positioned and position of an input might have changed on a page
              //due to other elements being rendered
              scope.position = appendToBody ? $position.offset(element) : $position.position(element);
              scope.position.top = scope.position.top + element.prop('offsetHeight');

              element.attr('aria-expanded', true);
            } else {
              resetMatches();
            }
          }
          if (onCurrentRequest) {
            isLoadingSetter(originalScope, false);
          }
        }, function(){
          resetMatches();
          isLoadingSetter(originalScope, false);
        });
      };

      resetMatches();

      //we need to propagate user's query so we can higlight matches
      scope.query = undefined;

      //Declare the timeout promise var outside the function scope so that stacked calls can be cancelled later
      var timeoutPromise;

      var scheduleSearchWithTimeout = function(inputValue) {
        timeoutPromise = $timeout(function () {
          getMatchesAsync(inputValue);
        }, waitTime);
      };

      var cancelPreviousTimeout = function() {
        if (timeoutPromise) {
          $timeout.cancel(timeoutPromise);
        }
      };

      //plug into $parsers pipeline to open a typeahead on view changes initiated from DOM
      //$parsers kick-in on all the changes coming from the view as well as manually triggered by $setViewValue
      modelCtrl.$parsers.unshift(function (inputValue) {

        hasFocus = true;

        if (inputValue && inputValue.length >= minSearch) {
          if (waitTime > 0) {
            cancelPreviousTimeout();
            scheduleSearchWithTimeout(inputValue);
          } else {
            getMatchesAsync(inputValue);
          }
        } else {
          isLoadingSetter(originalScope, false);
          cancelPreviousTimeout();
          resetMatches();
        }

        if (isEditable) {
          return inputValue;
        } else {
          if (!inputValue) {
            // Reset in case user had typed something previously.
            modelCtrl.$setValidity('editable', true);
            return inputValue;
          } else {
            modelCtrl.$setValidity('editable', false);
            return undefined;
          }
        }
      });

      modelCtrl.$formatters.push(function (modelValue) {

        var candidateViewValue, emptyViewValue;
        var locals = {};

        // The validity may be set to false via $parsers (see above) if
        // the model is restricted to selected values. If the model
        // is set manually it is considered to be valid.
        if (!isEditable) {
          modelCtrl.$setValidity('editable', true);
        }

        if (inputFormatter) {

          locals.$model = modelValue;
          return inputFormatter(originalScope, locals);

        } else {

          //it might happen that we don't have enough info to properly render input value
          //we need to check for this situation and simply return model value if we can't apply custom formatting
          locals[parserResult.itemName] = modelValue;
          candidateViewValue = parserResult.viewMapper(originalScope, locals);
          locals[parserResult.itemName] = undefined;
          emptyViewValue = parserResult.viewMapper(originalScope, locals);

          return candidateViewValue!== emptyViewValue ? candidateViewValue : modelValue;
        }
      });

      scope.select = function (activeIdx) {
        //called from within the $digest() cycle
        var locals = {};
        var model, item;

        locals[parserResult.itemName] = item = scope.matches[activeIdx].model;
        model = parserResult.modelMapper(originalScope, locals);
        $setModelValue(originalScope, model);
        modelCtrl.$setValidity('editable', true);
        modelCtrl.$setValidity('parse', true);

        onSelectCallback(originalScope, {
          $item: item,
          $model: model,
          $label: parserResult.viewMapper(originalScope, locals)
        });

        resetMatches();

        //return focus to the input element if a match was selected via a mouse click event
        // use timeout to avoid $rootScope:inprog error
        $timeout(function() { element[0].focus(); }, 0, false);
      };

      //bind keyboard events: arrows up(38) / down(40), enter(13) and tab(9), esc(27)
      element.bind('keydown', function (evt) {

        //typeahead is open and an "interesting" key was pressed
        if (scope.matches.length === 0 || HOT_KEYS.indexOf(evt.which) === -1) {
          return;
        }

        // if there's nothing selected (i.e. focusFirst) and enter is hit, don't do anything
        if (scope.activeIdx == -1 && (evt.which === 13 || evt.which === 9)) {
          return;
        }

        evt.preventDefault();

        if (evt.which === 40) {
          scope.activeIdx = (scope.activeIdx + 1) % scope.matches.length;
          scope.$digest();

        } else if (evt.which === 38) {
          scope.activeIdx = (scope.activeIdx > 0 ? scope.activeIdx : scope.matches.length) - 1;
          scope.$digest();

        } else if (evt.which === 13 || evt.which === 9) {
          scope.$apply(function () {
            scope.select(scope.activeIdx);
          });

        } else if (evt.which === 27) {
          evt.stopPropagation();

          resetMatches();
          scope.$digest();
        }
      });

      element.bind('blur', function (evt) {
        hasFocus = false;
      });

      // Keep reference to click handler to unbind it.
      var dismissClickHandler = function (evt) {
        if (element[0] !== evt.target) {
          resetMatches();
          scope.$digest();
        }
      };

      $document.bind('click', dismissClickHandler);

      originalScope.$on('$destroy', function(){
        $document.unbind('click', dismissClickHandler);
        if (appendToBody) {
          $popup.remove();
        }
        // Prevent jQuery cache memory leak
        popUpEl.remove();
      });

      var $popup = $compile(popUpEl)(scope);

      if (appendToBody) {
        $document.find('body').append($popup);
      } else {
        element.after($popup);
      }
    }
  };

}])

  .directive('typeaheadPopup', function () {
    return {
      restrict:'EA',
      scope:{
        matches:'=',
        query:'=',
        active:'=',
        position:'=',
        select:'&'
      },
      replace:true,
      templateUrl:'template/typeahead/typeahead-popup.html',
      link:function (scope, element, attrs) {

        scope.templateUrl = attrs.templateUrl;

        scope.isOpen = function () {
          return scope.matches.length > 0;
        };

        scope.isActive = function (matchIdx) {
          return scope.active == matchIdx;
        };

        scope.selectActive = function (matchIdx) {
          scope.active = matchIdx;
        };

        scope.selectMatch = function (activeIdx) {
          scope.select({activeIdx:activeIdx});
        };
      }
    };
  })

  .directive('typeaheadMatch', ['$templateRequest', '$compile', '$parse', function ($templateRequest, $compile, $parse) {
    return {
      restrict:'EA',
      scope:{
        index:'=',
        match:'=',
        query:'='
      },
      link:function (scope, element, attrs) {
        var tplUrl = $parse(attrs.templateUrl)(scope.$parent) || 'template/typeahead/typeahead-match.html';
        $templateRequest(tplUrl).then(function(tplContent) {
          $compile(tplContent.trim())(scope, function(clonedElement){
            element.replaceWith(clonedElement);
          });
        });
      }
    };
  }])

  .filter('typeaheadHighlight', function() {

    function escapeRegexp(queryToEscape) {
      return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    }

    return function(matchItem, query) {
      return query ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<strong>$&</strong>') : matchItem;
    };
  });
!angular.$$csp() && angular.element(document).find('head').prepend('<style type="text/css">.ng-animate.item:not(.left):not(.right){-webkit-transition:0s ease-in-out left;transition:0s ease-in-out left}</style>');
/**
 * angular-strap
 * @version v2.2.4 - 2015-05-28
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com> (https://github.com/mgcrea)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
'use strict';angular.module('mgcrea.ngStrap.navbar',[]).provider('$navbar',function(){var t=this.defaults={activeClass:'active',routeAttr:'data-match-route',strict:!1};this.$get=function(){return{defaults:t}}}).directive('bsNavbar',['$window','$location','$navbar',function(t,a,r){var e=r.defaults;return{restrict:'A',link:function(t,r,n,i){var c=angular.copy(e);angular.forEach(Object.keys(e),function(t){angular.isDefined(n[t])&&(c[t]=n[t])}),t.$watch(function(){return a.path()},function(t,a){var e=r[0].querySelectorAll('li['+c.routeAttr+']');angular.forEach(e,function(a){var r=angular.element(a),e=r.attr(c.routeAttr).replace('/','\\/');c.strict&&(e='^'+e+'$');var n=new RegExp(e,'i');n.test(t)?r.addClass(c.activeClass):r.removeClass(c.activeClass)})})}}}]);
//# sourceMappingURL=../modules/navbar.min.js.map
/*
 AngularJS v1.6.1
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,c){'use strict';function l(b,a,g){var d=g.baseHref(),k=b[0];return function(b,e,f){var g,h;f=f||{};h=f.expires;g=c.isDefined(f.path)?f.path:d;c.isUndefined(e)&&(h="Thu, 01 Jan 1970 00:00:00 GMT",e="");c.isString(h)&&(h=new Date(h));e=encodeURIComponent(b)+"="+encodeURIComponent(e);e=e+(g?";path="+g:"")+(f.domain?";domain="+f.domain:"");e+=h?";expires="+h.toUTCString():"";e+=f.secure?";secure":"";f=e.length+1;4096<f&&a.warn("Cookie '"+b+"' possibly not set or overflowed because it was too large ("+
f+" > 4096 bytes)!");k.cookie=e}}c.module("ngCookies",["ng"]).provider("$cookies",[function(){var b=this.defaults={};this.$get=["$$cookieReader","$$cookieWriter",function(a,g){return{get:function(d){return a()[d]},getObject:function(d){return(d=this.get(d))?c.fromJson(d):d},getAll:function(){return a()},put:function(d,a,m){g(d,a,m?c.extend({},b,m):b)},putObject:function(d,b,a){this.put(d,c.toJson(b),a)},remove:function(a,k){g(a,void 0,k?c.extend({},b,k):b)}}}]}]);c.module("ngCookies").factory("$cookieStore",
["$cookies",function(b){return{get:function(a){return b.getObject(a)},put:function(a,c){b.putObject(a,c)},remove:function(a){b.remove(a)}}}]);l.$inject=["$document","$log","$browser"];c.module("ngCookies").provider("$$cookieWriter",function(){this.$get=l})})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

/*!
	query-string
	Parse and stringify URL query strings
	https://github.com/sindresorhus/query-string
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';
	var queryString = {};

	queryString.parse = function (str) {
		if (typeof str !== 'string') {
			return {};
		}

		str = str.trim().replace(/^(\?|#)/, '');

		if (!str) {
			return {};
		}

		return str.trim().split('&').reduce(function (ret, param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			var key = parts[0];
			var val = parts[1];

			key = decodeURIComponent(key);
			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);

			if (!ret.hasOwnProperty(key)) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}

			return ret;
		}, {});
	};

	queryString.stringify = function (obj) {
		return obj ? Object.keys(obj).map(function (key) {
			var val = obj[key];

			if (Array.isArray(val)) {
				return val.map(function (val2) {
					return encodeURIComponent(key) + '=' + encodeURIComponent(val2);
				}).join('&');
			}

			return encodeURIComponent(key) + '=' + encodeURIComponent(val);
		}).join('&') : '';
	};

	if (typeof define === 'function' && define.amd) {
		define(function() { return queryString; });
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = queryString;
	} else {
		self.queryString = queryString;
	}
})();

!function(e,t){"function"==typeof define&&define.amd?define(["angular","angular-cookies","query-string"],t):"object"==typeof exports?module.exports=t(require("angular"),require("angular-cookies"),require("query-string")):e.angularOAuth2=t(e.angular,"ngCookies",e.queryString)}(this,function(e,t,n){function r(e,t,n){return{request:function(e){return e.headers=e.headers||{},!e.headers.hasOwnProperty("Authorization")&&n.getAuthorizationHeader()&&(e.headers.Authorization=n.getAuthorizationHeader()),e},responseError:function(r){return 400!==r.status||!r.data||"invalid_request"!==r.data.error&&"invalid_grant"!==r.data.error||(n.removeToken(),t.$emit("oauth:error",r)),(401===r.status&&r.data&&"invalid_token"===r.data.error||r.headers("www-authenticate")&&0===r.headers("www-authenticate").indexOf("Bearer"))&&t.$emit("oauth:error",r),e.reject(r)}}}function o(e){e.interceptors.push("oauthInterceptor")}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(){var t=this,r=function(t){if(!(t instanceof Object))throw new TypeError("Invalid argument: `config` must be an `Object`.");var n=e.extend({},f,t);return e.forEach(h,function(e){if(!n[e])throw new Error("Missing parameter: "+e+".")}),"/"===n.baseUrl.substr(-1)&&(n.baseUrl=n.baseUrl.slice(0,-1)),"/"!==n.grantPath[0]&&(n.grantPath="/"+n.grantPath),"/"!==n.revokePath[0]&&(n.revokePath="/"+n.revokePath),n};this.configure=function(e){t.defaultConfig=r(e)},this.$get=function(t,o){var a=function(){function a(e){i(this,a),this.config=e}return s(a,[{key:"configure",value:function(e){this.config=r(e)}},{key:"isAuthenticated",value:function(){return!!o.getToken()}},{key:"getAccessToken",value:function(r,i){return r=e.extend({client_id:this.config.clientId,grant_type:"password"},r),null!==this.config.clientSecret&&(r.client_secret=this.config.clientSecret),r=n.stringify(r),i=e.extend({headers:{Authorization:void 0,"Content-Type":"application/x-www-form-urlencoded"}},i),t.post(""+this.config.baseUrl+this.config.grantPath,r,i).then(function(e){return o.setToken(e.data),e})}},{key:"getRefreshToken",value:function(r,i){return r=e.extend({client_id:this.config.clientId,grant_type:"refresh_token",refresh_token:o.getRefreshToken()},r),null!==this.config.clientSecret&&(r.client_secret=this.config.clientSecret),r=n.stringify(r),i=e.extend({headers:{Authorization:void 0,"Content-Type":"application/x-www-form-urlencoded"}},i),t.post(""+this.config.baseUrl+this.config.grantPath,r,i).then(function(e){return o.setToken(e.data),e})}},{key:"revokeToken",value:function(r,i){var a=o.getRefreshToken();return r=e.extend({client_id:this.config.clientId,token:a?a:o.getAccessToken(),token_type_hint:a?"refresh_token":"access_token"},r),null!==this.config.clientSecret&&(r.client_secret=this.config.clientSecret),r=n.stringify(r),i=e.extend({headers:{"Content-Type":"application/x-www-form-urlencoded"}},i),t.post(""+this.config.baseUrl+this.config.revokePath,r,i).then(function(e){return o.removeToken(),e})}}]),a}();return new a(this.defaultConfig)},this.$get.$inject=["$http","OAuthToken"]}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(){var t={name:"token",options:{secure:!0}};this.configure=function(n){if(!(n instanceof Object))throw new TypeError("Invalid argument: `config` must be an `Object`.");return e.extend(t,n),t},this.$get=function(e){var n=function(){function n(){i(this,n)}return s(n,[{key:"setToken",value:function(n){return e.putObject(t.name,n,t.options)}},{key:"getToken",value:function(){return e.getObject(t.name)}},{key:"getAccessToken",value:function(){return this.getToken()?this.getToken().access_token:void 0}},{key:"getAuthorizationHeader",value:function(){if(this.getTokenType()&&this.getAccessToken())return this.getTokenType().charAt(0).toUpperCase()+this.getTokenType().substr(1)+" "+this.getAccessToken()}},{key:"getRefreshToken",value:function(){return this.getToken()?this.getToken().refresh_token:void 0}},{key:"getTokenType",value:function(){return this.getToken()?this.getToken().token_type:void 0}},{key:"removeToken",value:function(){return e.remove(t.name,t.options)}}]),n}();return new n},this.$get.$inject=["$cookies"]}var c=e.module("angular-oauth2",[t]).config(o).factory("oauthInterceptor",r).provider("OAuth",a).provider("OAuthToken",u);r.$inject=["$q","$rootScope","OAuthToken"],o.$inject=["$httpProvider"];var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f={baseUrl:null,clientId:null,clientSecret:null,grantPath:"/oauth2/token",revokePath:"/oauth2/revoke"},h=["baseUrl","clientId","grantPath","revokePath"],s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();return c});
var app = angular.module('app',['ngRoute','angular-oauth2','app.controllers']);

angular.module('app.controllers',['ngMessages','angular-oauth2']);

app.config(['$routeProvider','OAuthProvider', function($routeProvider, OAuthProvider){

    $routeProvider
        .when('/login',{
            templateUrl: 'build/views/login.html',
            controller: 'LoginController'
        })
        .when('/home',{
            templateUrl: 'build/views/home.html',
            controller: 'HomeController'
        });

    OAuthProvider.configure({
        baseUrl: 'http://localhost:8000',
        clientId: 'appid1',
        clientSecret: 'secret',
        grantPath: 'oauth/access_token'

    });
}]);

app.run(['$rootScope', '$window', 'OAuth', function($rootScope, $window, OAuth) {
    $rootScope.$on('oauth:error', function(event, rejection) {
        // Ignore `invalid_grant` error - should be catched on `LoginController`.
        if ('invalid_grant' === rejection.data.error) {
            return;
        }

        // Refresh token when a `invalid_token` error occurs.
        if ('invalid_token' === rejection.data.error) {
            return OAuth.getRefreshToken();
        }

        // Redirect to `/login` with the `error_reason`.
        return $window.location.href = '/login?error_reason=' + rejection.data.error;
    });
}]);
angular.module('app.controllers')
.controller('HomeController',['$scope',function ($scope) {

}]);
angular.module('app.controllers')
.controller('LoginController',['$scope','$location','OAuth',function ($scope,$location, OAuth) {

    $scope.user = {
        username: '',
        password: ''
    };

    $scope.login = function () {
         OAuth.getAccessToken($scope.user).then(function () {
            $location.path('home');
        },function () {
            alert('login invalido');
        });
    }
}]);
//# sourceMappingURL=all.js.map
