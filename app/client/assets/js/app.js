/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
;!function t(e,n,i){function r(o,a){if(!n[o]){if(!e[o]){var u="function"==typeof require&&require;if(!a&&u)return u(o,!0);if(s)return s(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[o]={exports:{}};e[o][0].call(l.exports,function(t){var n=e[o][1][t];return r(n?n:t)},l,l.exports,t,e,n,i)}return n[o].exports}for(var s="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(t,e,n){var i=t("nofactor"),r=t("./defaults"),s=t("./template"),o=t("./parser");s.parser=o;var a=e.exports={accessors:r.accessors,runloop:r.runloop,document:i,Component:t("./components/base"),Attribute:t("./attributes/script"),template:s,components:r.components,attributes:r.attributes,modifiers:r.modifiers,parse:o.parse};"undefined"!=typeof window&&(window.paperclip=a,window.paperclip.noConflict=function(){return delete window.paperclip,a})},{"./attributes/script":16,"./components/base":19,"./defaults":25,"./parser":47,"./template":54,nofactor:79}],2:[function(t,e,n){function i(){}var r=t("protoclass");e.exports=r(i,{__isScope:!0})},{protoclass:80}],3:[function(t,e,n){function i(){r.call(this),this._getters={},this._callers={},this._watchers=[]}var r=t("./base"),s=t("../utils/set");e.exports=r.extend(i,{castObject:function(t){return t},call:function(t,e,n){var i;if(!(i=this._callers[e])){var r=["this"].concat(e.split("."));r.pop(),r=r.join("."),i=this._callers[e]=new Function("params","return this."+e+".apply("+r+", params);")}try{var s=i.call(t,n);return this.applyChanges(),s}catch(o){return void 0}},get:function(t,e){var n,i="string"!=typeof e?e.join("."):e;(n=this._getters[i])||(n=this._getters[i]=new Function("return this."+i));try{return n.call(t)}catch(r){return void 0}},set:function(t,e,n){"string"==typeof e&&(e=e.split("."));var i=s(t,e,n);return this.applyChanges(),i},watchProperty:function(t,e,n){var i,r=this,s=!0;return this._addWatcher(function(){var o=r.get(t,e);if(s||o!==i||"function"==typeof o){s=!1;i=o,n(o,i)}})},_addWatcher:function(t){var e=this,n={apply:t,trigger:t,dispose:function(){var t=e._watchers.indexOf(n);~t&&e._watchers.splice(t,1)}};return this._watchers.push(n),n},watchEvent:function(t,e,n){return"[object Array]"===Object.prototype.toString.call(t)&&"change"===e?this._watchArrayChangeEvent(t,n):{dispose:function(){}}},_watchArrayChangeEvent:function(t,e){var n=t.concat();return this._addWatcher(function(){var i=t.length!==n.length;if(!i)for(var r=0,s=n.length;s>r&&!(i=n[r]!==t[r]);r++);i&&(n=t.concat(),e())})},normalizeCollection:function(t){return t},normalizeObject:function(t){return t},apply:function(){this.applyChanges()},applyChanges:function(){for(var t=0,e=this._watchers.length;e>t;t++)this._watchers[t].apply()}})},{"../utils/set":74,"./base":2}],4:[function(t,e,n){function i(t){this.view=t.view,this.node=t.node,this.section=t.section,this.key=t.key,this.value=t.value,this.document=this.view.template.document,this.initialize()}var r=t("protoclass");e.exports=r(i,{initialize:function(){},bind:function(){},unbind:function(){}})},{protoclass:80}],5:[function(t,e,n){var i=t("./script");e.exports=i.extend({update:function(){var t=this.currentValue;if("string"==typeof t)return this.node.setAttribute("class",t);if(!t)return this.node.removeAttribute("class");var e=this.node.getAttribute("class");e=e?e.split(" "):[];for(var n in t)for(var i=t[n],r=n.split(/[,\s]+/g),s=0,o=r.length;o>s;s++){var a=r[s],u=e.indexOf(a);i?~u||e.push(a):~u&&e.splice(u,1)}this.node.setAttribute("class",e.join(" "))}}),e.exports.test=function(t){return"object"==typeof t&&!t.buffered}},{"./script":16}],6:[function(t,e,n){function i(t){this._onEvent=r(this._onEvent,this),s.call(this,t)}var r=(t("protoclass"),t("../utils/bind")),s=t("./base");s.extend(i,{initialize:function(){var t=this.event||(this.event=this.key.toLowerCase().replace(/^on/,""));this.node.addEventListener(t,this._onEvent)},bind:function(){s.prototype.bind.call(this),this.bound=!0},_onEvent:function(t){this.bound&&(this.view.set("event",t),this.value.evaluate(this.view))},unbind:function(){this.bound=!1}}),e.exports=i},{"../utils/bind":71,"./base":4,protoclass:80}],7:[function(t,e,n){var i=t("./keyCodedEvent");e.exports=i.extend({keyCodes:[8]})},{"./keyCodedEvent":15}],8:[function(t,e,n){var i=t("./base");e.exports=i.extend({initialize:function(){this.view.transitions.push(this)},enter:function(){var t=this.value;(t=t.evaluate(this.view))(this.node,function(){})}})},{"./base":4}],9:[function(t,e,n){var i=t("./base");e.exports=i.extend({initialize:function(){this.view.transitions.push(this)},exit:function(t){var e=this.value;(e=e.evaluate(this.view))(this.node,t)}})},{"./base":4}],10:[function(t,e,n){var i=t("./script");e.exports=i.extend({update:function(){this.currentValue?this.node.removeAttribute("disabled"):this.node.setAttribute("disabled","disabled")}})},{"./script":16}],11:[function(t,e,n){var i=t("./keyCodedEvent");e.exports=i.extend({keyCodes:[13]})},{"./keyCodedEvent":15}],12:[function(t,e,n){var i=t("./keyCodedEvent");e.exports=i.extend({keyCodes:[27]})},{"./keyCodedEvent":15}],13:[function(t,e,n){var i=t("./defaultEvent");e.exports=i.extend({_onEvent:function(t){t.preventDefault(),i.prototype._onEvent.apply(this,arguments)}})},{"./defaultEvent":6}],14:[function(t,e,n){(function(n){var i=t("./script");e.exports=i.extend({update:function(){if(this.currentValue&&this.node.focus){var t=this;if(!n.browser)return this.node.focus();setTimeout(function(){t.node.focus()},1)}}})}).call(this,t("_process"))},{"./script":16,_process:77}],15:[function(t,e,n){var i=t("./event");e.exports=i.extend({event:"keydown",keyCodes:[],_onEvent:function(t){~this.keyCodes.indexOf(t.keyCode)&&i.prototype._onEvent.apply(this,arguments)}})},{"./event":13}],16:[function(t,e,n){var i=t("./base");e.exports=i.extend({bind:function(){i.prototype.bind.call(this);var t=this;this.value.watch&&(this._binding=this.value.watch(this.view,function(e){e!==t.currentValue&&(t.currentValue=e,t.view.runloop.deferOnce(t))}),this.currentValue=this.value.evaluate(this.view)),null!=this.currentValue&&this.update()},update:function(){},unbind:function(){this._binding&&this._binding.dispose()}})},{"./base":4}],17:[function(t,e,n){var i=t("./script");e.exports=i.extend({bind:function(){this._currentStyles={},i.prototype.bind.call(this)},update:function(){var t=this.currentValue,e={};for(var n in t){var i=t[n];i!==this._currentStyles[n]&&(e[n]=this._currentStyles[n]=i||"")}if(this.node.__isNode)this.node.style.setProperties(e);else for(var r in e)this.node.style[r]=e[r]}}),e.exports.test=function(t){return"object"==typeof t&&!t.buffered}},{"./script":16}],18:[function(t,e,n){(function(n){function i(t){this._onInput=s(this._onInput,this),r.call(this,t)}var r=t("./script"),s=t("../utils/bind");r.extend(i,{_events:["change","keyup","input"],initialize:function(){var t=this;this._events.forEach(function(e){t.node.addEventListener(e,t._onInput)})},bind:function(){r.prototype.bind.call(this);var t=this;/^(text|password|email)$/.test(this.node.getAttribute("type"))&&(this._autocompleteCheckInterval=setInterval(function(){t._onInput()},n.browser?500:10))},unbind:function(){r.prototype.unbind.call(this),clearInterval(this._autocompleteCheckInterval)},update:function(){var t=this.model=this.currentValue;if(this._modelBindings&&this._modelBindings.dispose(),!t||!t.__isReference)throw new Error("input value must be a reference. Make sure you have <~> defined");var e=this;t.gettable&&(this._modelBindings=this.view.watch(t.path,function(t){e._elementValue(e._parseValue(t))}),this._modelBindings.trigger())},_parseValue:function(t){return null==t||""===t?void 0:t},_onInput:function(t){clearInterval(this._autocompleteCheckInterval),!t||t.keyCode&&~[27].indexOf(t.keyCode)||t.stopPropagation();var e=this._parseValue(this._elementValue());this.model&&String(this.model.value())!=String(e)&&this.model.value(e)},_elementValue:function(t){var e=/checkbox/.test(this.node.type),n=/radio/.test(this.node.type),i=e||n,r=Object.prototype.hasOwnProperty.call(this.node,"value"),s=r||/input|textarea|checkbox/.test(this.node.nodeName.toLowerCase());return arguments.length?(null==t?t="":clearInterval(this._autocompleteCheckInterval),void(i?n?String(t)===String(this.node.value)&&(this.node.checked=!0):this.node.checked=t:String(t)!==this._elementValue()&&(s?this.node.value=t:this.node.innerHTML=t))):e?Boolean(this.node.checked):s?this.node.value||"":this.node.innerHTML||""}}),i.test=function(t){return"object"==typeof t&&!t.buffered},e.exports=i}).call(this,t("_process"))},{"../utils/bind":71,"./script":16,_process:77}],19:[function(t,e,n){function i(t){this.attributes=t.attributes,this.childTemplate=t.childTemplate,this.view=t.view,this.section=t.section,this.document=this.view.template.document,this.didChange=s(this.didChange,this),this.initialize()}var r=t("protoclass"),s=t("../utils/bind");e.exports=r(i,{initialize:function(){},bind:function(){this.update()},didChange:function(){this.view.runloop.deferOnce(this)},unbind:function(){this._changeListener&&this._changeListener.dispose()},update:function(){}})},{"../utils/bind":71,protoclass:80}],20:[function(t,e,n){function i(t,e){if("[object Array]"===Object.prototype.toString.call(t))for(var n=0,i=t.length;i>n;n++)e(t[n],n);else for(var r in t)e(t[r],r)}var r=t("./base");e.exports=r.extend({update:function(){this._updateListener&&this._updateListener.dispose();var t=this.attributes.as,e=this.attributes.key||"index",n=this.attributes.each,r=this.view.accessor;n||(n=[]),this._updateListener=r.watchEvent(n,"change",function(){o.view.runloop.deferOnce(o)}),n=r.normalizeCollection(n),this._children||(this._children=[]);var s,o=this,a=0;i(n,function(n,i){if(t?(s={},s[e]=i,s[t]=n):s=n,i<o._children.length){var r=o._children[i];(r.context===n||r.context[t]!==n)&&r.bind(s)}else{var u=o.childTemplate.view(s,{parent:o.view});o._children.push(u),o.section.appendChild(u.render())}a++}),this._children.splice(a).forEach(function(t){t.dispose()})}})},{"./base":19}],21:[function(t,e,n){function i(t){r.call(this,t)}var r=t("./base");e.exports=r.extend(i,{update:function(){var t=!!this.attributes.when;this._show!==t&&(this._show=t,t?(this._view=this.childTemplate.view(this.view.context),this.section.appendChild(this._view.render())):(this._view&&this._view.dispose(),this._view=void 0))}})},{"./base":19}],22:[function(t,e,n){function i(t){r.call(this,t);var e=this;this.childTemplates=this.childTemplate.vnode.children.map(function(t){return e.childTemplate.child(t)})}var r=t("./base");e.exports=r.extend(i,{update:function(){var t,e=this.attributes.state;if("number"==typeof e)t=this.childTemplates[e];else for(var n=this.childTemplates.length;n--;){var i=this.childTemplates[n];if(i.vnode.attributes.name===e){t=i;break}}this.currentTemplate!==t&&(this.currentTemplate=t,this.currentView&&this.currentView.dispose(),t&&(this.currentView=t.view(this.view.context,{parent:this.view}),this.currentTemplate=t,this.section.appendChild(this.currentView.render())))}})},{"./base":19}],23:[function(t,e,n){function i(t){r.call(this,t);var e=this;this.childTemplates=this.childTemplate.vnode.children.map(function(t){return e.childTemplate.child(t)})}var r=t("./base"),s=t("../utils/bind");e.exports=r.extend(i,{bind:function(){r.prototype.bind.call(this),this.bindings=[];for(var t=(s(this.update,this),0),e=this.childTemplates.length;e>t;t++){var n=this.childTemplates[t].vnode.attributes.when;n&&this.bindings.push(n.watch(this.view,this.didChange))}},unbind:function(){for(var t=this.bindings.length;t--;)this.bindings[t].dispose()},update:function(){for(var t,e=0,n=this.childTemplates.length;n>e;e++){t=this.childTemplates[e];var i=t.vnode.attributes.when;if(!i||i.evaluate(this.view))break}if(this.currentChild==t)return void(this._view&&this._view.context!==this.context&&this._view.bind(this.view.context));if(this._view&&this._view.dispose(),e!=n){this.currentChild=t;var r=t.child(t.vnode.children,{accessor:this.view.accessor});this._view=r.view(this.view.context),this.section.appendChild(this._view.render())}}})},{"../utils/bind":71,"./base":19}],24:[function(t,e,n){(function(n){function i(t){r.call(this,t)}var r=t("./base");e.exports=r.extend(i,{update:function(){var t=this.attributes.html;if("object"==typeof t&&t.evaluate&&(t=void 0),this.currentValue&&this.currentValue.remove&&this.currentValue.remove(),this.currentValue=t,!t)return this.section.removeAll();var e;if(t.render)t.remove(),e=t.render();else if(null!=t.nodeType)e=t;else if(this.document!==n.document)e=this.document.createTextNode(String(t));else{var i=this.document.createElement("div");i.innerHTML=String(t),e=this.document.createDocumentFragment();for(var r=Array.prototype.slice.call(i.childNodes),s=0,o=r.length;o>s;s++)e.appendChild(r[s])}this.section.replaceChildNodes(e)}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./base":19}],25:[function(t,e,n){(function(n){var i=t("./runloop"),r=t("./accessors/pojo");e.exports={accessorClass:r,accessors:{pojo:t("./accessors/pojo")},components:{repeat:t("./components/repeat"),stack:t("./components/stack"),"switch":t("./components/switch"),show:t("./components/show"),unsafe:t("./components/unsafe")},attributes:{value:t("./attributes/value"),checked:t("./attributes/value"),enable:t("./attributes/enable"),focus:t("./attributes/focus"),style:t("./attributes/style"),"class":t("./attributes/class"),easein:t("./attributes/easeIn"),easeout:t("./attributes/easeOut"),onclick:t("./attributes/event"),ondoubleclick:t("./attributes/event"),onfocus:t("./attributes/event"),onload:t("./attributes/event"),onsubmit:t("./attributes/event"),onmousedown:t("./attributes/event"),onchange:t("./attributes/event"),onmouseup:t("./attributes/event"),onmouseover:t("./attributes/event"),onmouseout:t("./attributes/event"),onfocusin:t("./attributes/event"),onfocusout:t("./attributes/event"),onmousemove:t("./attributes/event"),onkeydown:t("./attributes/event"),onkeyup:t("./attributes/event"),ondragover:t("./attributes/event"),ondragenter:t("./attributes/event"),ondragleave:t("./attributes/event"),onselectstart:t("./attributes/event"),ondrop:t("./attributes/event"),onenter:t("./attributes/enter"),ondelete:t("./attributes/delete"),onescape:t("./attributes/escape"),ondragstart:t("./attributes/defaultEvent"),ondragend:t("./attributes/defaultEvent")},runloop:new i({tick:n.env.PC_DEBUG?n.nextTick:(n.env.browser,void 0)}),modifiers:{uppercase:function(t){return String(t).toUpperCase()},lowercase:function(t){return String(t).toLowerCase()},titlecase:function(t){var e;return e=String(t),e.substr(0,1).toUpperCase()+e.substr(1)},json:function(t,e,n){return JSON.stringify.apply(JSON,arguments)},isNaN:function(t){return isNaN(t)},round:Math.round}}}).call(this,t("_process"))},{"./accessors/pojo":3,"./attributes/class":5,"./attributes/defaultEvent":6,"./attributes/delete":7,"./attributes/easeIn":8,"./attributes/easeOut":9,"./attributes/enable":10,"./attributes/enter":11,"./attributes/escape":12,"./attributes/event":13,"./attributes/focus":14,"./attributes/style":17,"./attributes/value":18,"./components/repeat":20,"./components/show":21,"./components/stack":22,"./components/switch":23,"./components/unsafe":24,"./runloop":49,_process:77}],26:[function(t,e,n){function i(t){this.expressions=t||new s,r.apply(this,arguments)}var r=t("./base"),s=t("./parameters");r.extend(i,{type:"array",toJavaScript:function(){return"["+this.expressions.toJavaScript()+"]"}}),e.exports=i},{"./base":28,"./parameters":40}],27:[function(t,e,n){function i(t,e){r.apply(this,arguments),this.reference=t,this.value=e}var r=t("./base");r.extend(i,{type:"assignment",toJavaScript:function(){var t=this.reference.path.join(".");return"this.set('"+t+"', "+this.value.toJavaScript()+")"}}),e.exports=i},{"./base":28}],28:[function(t,e,n){function i(){this._children=[],this._addChildren(Array.prototype.slice.call(arguments,0))}var r=t("protoclass");r(i,{__isExpression:!0,_addChildren:function(t){for(var e=t.length;e--;){var n=t[e];if(n)if(n.__isExpression)this._children.push(n);else if("object"==typeof n)for(var i in n)this._addChildren([n[i]])}},filterAllChildren:function(t){var e=[];return this.traverseChildren(function(n){t(n)&&e.push(n)}),e},traverseChildren:function(t){t(this);for(var e=this._children.length;e--;){var n=this._children[e];n.traverseChildren(t)}}}),e.exports=i},{protoclass:80}],29:[function(t,e,n){function i(t,e,n){this.scripts=t,this.contentTemplate=e,this.childBlock=n,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"blockBinding",toJavaScript:function(){var t="block("+this.scripts.value.value.toJavaScript()+", ";return t+=this.contentTemplate?this.contentTemplate.toJavaScript():"void 0",this.childBlock&&(t+=", "+this.childBlock.toJavaScript()),t+")"}}),e.exports=i},{"./base":28}],30:[function(t,e,n){function i(t,e){this.reference=t,this.parameters=e,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"call",toJavaScript:function(){var t=this.reference.path.concat(),e="this.call(";return e+="'"+t.join(".")+"'",e+=", ["+this.parameters.toJavaScript()+"]",e+")"}}),e.exports=i},{"./base":28}],31:[function(t,e,n){function i(t){this.value=t,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"commentNode",toJavaScript:function(){return'comment("'+this.value.replace(/["]/g,'\\"')+'")'}}),e.exports=i},{"./base":28}],32:[function(t,e,n){function i(t){this.value=t,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"doctype",toJavaScript:function(){return"text('<!DOCTYPE "+this.value+">')"}}),e.exports=i},{"./base":28}],33:[function(t,e,n){function i(t,e,n){this.name=t,this.attributes=e,this.childNodes=n||new s,r.apply(this,arguments)}var r=t("./base"),s=t("./array");r.extend(i,{type:"elementNode",toJavaScript:function(){return'element("'+this.name+'", '+this.attributes.toJavaScript()+", "+this.childNodes.toJavaScript()+")"}}),e.exports=i},{"./array":26,"./base":28}],34:[function(t,e,n){function i(t){this.expression=t,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"call",toJavaScript:function(){return"("+this.expression.toJavaScript()+")"}}),e.exports=i},{"./base":28}],35:[function(t,e,n){function i(t){this.value=t,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"hash",toJavaScript:function(){var t=[];for(var e in this.value){var n=this.value[e];t.push("'"+e+"':"+n.toJavaScript())}return"{"+t.join(", ")+"}"}}),e.exports=i},{"./base":28}],36:[function(t,e,n){function i(t){this.value=t,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"literal",toJavaScript:function(){return String(this.value)}}),e.exports=i},{"./base":28}],37:[function(t,e,n){function i(t,e){this.name=t,this.parameters=e,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"modifier",toJavaScript:function(){var t="modifiers."+this.name+".call(this",e=this.parameters.toJavaScript();return e.length&&(t+=", "+e),t+")"}}),e.exports=i},{"./base":28}],38:[function(t,e,n){function i(t,e){this.operator=t,this.expression=e,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"!",toJavaScript:function(){return this.operator+this.expression.toJavaScript()}}),e.exports=i},{"./base":28}],39:[function(t,e,n){function i(t,e,n){this.operator=t,this.left=e,this.right=n,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"operator",toJavaScript:function(){return this.left.toJavaScript()+this.operator+this.right.toJavaScript()}}),e.exports=i},{"./base":28}],40:[function(t,e,n){function i(t){this.expressions=t||[],r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"parameters",toJavaScript:function(){return this.expressions.map(function(t){return t.toJavaScript()}).join(", ")}}),e.exports=i},{"./base":28}],41:[function(t,e,n){function i(t,e){this.path=t,this.bindingType=e,this.fast="^"===e,this.unbound=-1!==["~","~>"].indexOf(e),this._isBoundTo=~["<~","<~>","~>"].indexOf(this.bindingType),r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"reference",toJavaScript:function(){if(!this._isBoundTo&&this.fast)return"this.context."+this.path.join(".");var t=this.path.join(".");return this._isBoundTo?"this.reference('"+t+"', "+("<~"!==this.bindingType)+", "+("~>"!==this.bindingType)+")":"this.get('"+t+"')"}}),e.exports=i},{"./base":28}],42:[function(t,e,n){function i(t){this.childNodes=t,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"rootNode",toJavaScript:function(){var t,e="(function(fragment, block, element, text, comment, parser, modifiers) { ";if("array"===this.childNodes.type)if(this.childNodes.expressions.expressions.length>1)t="fragment("+this.childNodes.toJavaScript()+")";else{if(!this.childNodes.expressions.expressions.length)return e+"})";t=this.childNodes.expressions.expressions[0].toJavaScript()}else t=this.childNodes.toJavaScript();return e+"return "+t+"; })"}}),e.exports=i},{"./base":28}],43:[function(t,e,n){function i(t){this.value=t,r.apply(this,arguments)}var r=t("./base"),s=t("../../utils/uniq");r.extend(i,{type:"script",toJavaScript:function(){var t=this.filterAllChildren(function(t){return"reference"===t.type}).filter(function(t){return!t.unbound&&t.path}).map(function(t){return t.path});t=s(t.map(function(t){return t.join(".")}));var e="{";return e+="run: function() { return "+this.value.toJavaScript()+"; }",e+=", refs: "+JSON.stringify(t),e+"}"}}),e.exports=i},{"../../utils/uniq":76,"./base":28}],44:[function(t,e,n){function i(t){this.value=t,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"string",toJavaScript:function(){return'"'+this.value.replace(/"/g,'\\"')+'"'}}),e.exports=i},{"./base":28}],45:[function(t,e,n){function i(t,e,n){this.condition=t,this.tExpression=e,this.fExpression=n,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"ternaryCondition",toJavaScript:function(){return this.condition.toJavaScript()+"?"+this.tExpression.toJavaScript()+":"+this.fExpression.toJavaScript()}}),e.exports=i},{"./base":28}],46:[function(t,e,n){(function(n){function i(t){if(n.paperclip&&n.paperclip.he)this.value=n.paperclip.he.decode(t);else if("undefined"!=typeof window){var e=document.createElement("div");e.innerHTML=t,this.value=e.textContent}else this.value=t;this.decoded=this.value!==t,r.apply(this,arguments)}var r=t("./base");r.extend(i,{type:"textNode",toJavaScript:function(){return'text("'+this.value.replace(/["]/g,'\\"')+'")'}}),e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./base":28}],47:[function(t,e,n){(function(n){var i,r=t("./parser"),s={};e.exports={parse:i=function(t){return'"use strict";module.exports = '+r.parse(t).toJavaScript()},compile:function(t){var e;if(s[t])return s[t];e||(e=t);var n='"use strict";return '+r.parse(e).toJavaScript();return s[t]=new Function(n)()}},n.paperclip&&(n.paperclip.parse=e.exports.parse,n.paperclip.template.parser=e.exports)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./parser":48}],48:[function(t,e,n){e.exports=function(){function e(t,e){function n(){this.constructor=t}n.prototype=e.prototype,t.prototype=new n}function n(t,e,n,i,r,s){this.message=t,this.expected=e,this.found=n,this.offset=i,this.line=r,this.column=s,this.name="SyntaxError"}function i(e){function i(){return e.substring(x,$)}function r(t){throw a(null,[{type:"other",description:t}],x)}function s(t){function n(t,n,i){var r,s;for(r=n;i>r;r++)s=e.charAt(r),"\n"===s?(t.seenCR||t.line++,t.column=1,t.seenCR=!1):"\r"===s||"\u2028"===s||"\u2029"===s?(t.line++,t.column=1,t.seenCR=!0):(t.column++,t.seenCR=!1)}return _!==t&&(_>t&&(_=0,C={line:1,column:1,seenCR:!1}),n(C,_,t),_=t),C}function o(t){k>$||($>k&&(k=$,N=[]),N.push(t))}function a(t,i,r){function o(t){var e=1;for(t.sort(function(t,e){return t.description<e.description?-1:t.description>e.description?1:0});e<t.length;)t[e-1]===t[e]?t.splice(e,1):e++}function a(t,e){function n(t){function e(t){return t.charCodeAt(0).toString(16).toUpperCase()}return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,function(t){return"\\x0"+e(t)}).replace(/[\x10-\x1F\x80-\xFF]/g,function(t){return"\\x"+e(t)}).replace(/[\u0180-\u0FFF]/g,function(t){return"\\u0"+e(t)}).replace(/[\u1080-\uFFFF]/g,function(t){return"\\u"+e(t)})}var i,r,s,o=new Array(t.length);for(s=0;s<t.length;s++)o[s]=t[s].description;return i=t.length>1?o.slice(0,-1).join(", ")+" or "+o[t.length-1]:o[0],r=e?'"'+n(e)+'"':"end of input","Expected "+i+" but "+r+" found."}var u=s(r),c=r<e.length?e.charAt(r):null;return null!==i&&o(i),new n(null!==t?t:a(i,c),i,c,r,u.line,u.column)}function u(t){var e,n=new Array(t.length);for(e=0;e<t.length;e++)n[e]=t.charCodeAt(e)-32;return n}function c(t){function n(t){return"[object Array]"===Object.prototype.toString.apply(t)?[]:t}for(var i,r,s=w[t],a=0,u=[],l=s.length,h=[],p=[];;){for(;l>a;)switch(s[a]){case 0:p.push(n(y[s[a+1]])),a+=2;break;case 1:p.push($),a++;break;case 2:p.pop(),a++;break;case 3:$=p.pop(),a++;break;case 4:p.length-=s[a+1],a+=2;break;case 5:p.splice(-2,1),a++;break;case 6:p[p.length-2].push(p.pop()),a++;break;case 7:p.push(p.splice(p.length-s[a+1],s[a+1])),a+=2;break;case 8:p.pop(),p.push(e.substring(p[p.length-1],$)),a++;break;case 9:h.push(l),u.push(a+3+s[a+1]+s[a+2]),p[p.length-1]?(l=a+3+s[a+1],a+=3):(l=a+3+s[a+1]+s[a+2],a+=3+s[a+1]);break;case 10:h.push(l),u.push(a+3+s[a+1]+s[a+2]),p[p.length-1]===b?(l=a+3+s[a+1],a+=3):(l=a+3+s[a+1]+s[a+2],a+=3+s[a+1]);break;case 11:h.push(l),u.push(a+3+s[a+1]+s[a+2]),p[p.length-1]!==b?(l=a+3+s[a+1],a+=3):(l=a+3+s[a+1]+s[a+2],a+=3+s[a+1]);break;case 12:p[p.length-1]!==b?(h.push(l),u.push(a),l=a+2+s[a+1],a+=2):a+=2+s[a+1];break;case 13:h.push(l),u.push(a+3+s[a+1]+s[a+2]),e.length>$?(l=a+3+s[a+1],a+=3):(l=a+3+s[a+1]+s[a+2],a+=3+s[a+1]);break;case 14:h.push(l),u.push(a+4+s[a+2]+s[a+3]),e.substr($,y[s[a+1]].length)===y[s[a+1]]?(l=a+4+s[a+2],a+=4):(l=a+4+s[a+2]+s[a+3],a+=4+s[a+2]);break;case 15:h.push(l),u.push(a+4+s[a+2]+s[a+3]),e.substr($,y[s[a+1]].length).toLowerCase()===y[s[a+1]]?(l=a+4+s[a+2],a+=4):(l=a+4+s[a+2]+s[a+3],a+=4+s[a+2]);break;case 16:h.push(l),u.push(a+4+s[a+2]+s[a+3]),y[s[a+1]].test(e.charAt($))?(l=a+4+s[a+2],a+=4):(l=a+4+s[a+2]+s[a+3],a+=4+s[a+2]);break;case 17:p.push(e.substr($,s[a+1])),$+=s[a+1],a+=2;break;case 18:p.push(y[s[a+1]]),$+=y[s[a+1]].length,a+=2;break;case 19:p.push(b),0===S&&o(y[s[a+1]]),a+=2;break;case 20:x=p[p.length-1-s[a+1]],a+=2;break;case 21:x=$,a++;break;case 22:for(i=s.slice(a+4,a+4+s[a+3]),r=0;r<s[a+3];r++)i[r]=p[p.length-1-i[r]];p.splice(p.length-s[a+2],s[a+2],y[s[a+1]].apply(null,i)),a+=4+s[a+3];break;case 23:p.push(c(s[a+1])),a+=2;break;case 24:S++,a++;break;case 25:S--,a++;break;default:throw new Error("Invalid opcode: "+s[a]+".")}if(!(h.length>0))break;l=h.pop(),a=u.pop()}return p[0]}function l(t){return t.replace(/(^\s+)|(\s+$)/,"").replace(/[\r\n]/g,"\\n")}function h(t){return t.replace(/[ \r\n\t]+/g," ")}function p(t){return t=t.filter(function(t){return!/^[\n\t\r]+$/.test(t.value)}),t.length?1===t.length&&"string"===t[0].type?t[0]:new D(new U(t)):new P(!0)}function d(t){function e(t){for(var e,n=t.length;n--&&(e=t[n],"textNode"==e.type&&!/\S/.test(e.value)&&!e.decoded);)t.splice(n,1);return t}return e(e(t.reverse()).reverse())}var f,v=arguments.length>1?arguments[1]:{},b={},g={Start:0},m=0,y=[function(t){return new T(t)},b,"<!DOCTYPE",{type:"literal",value:"<!DOCTYPE",description:'"<!DOCTYPE"'},[],/^[^>]/,{type:"class",value:"[^>]",description:"[^>]"},">",{type:"literal",value:">",description:'">"'},function(t){return new V(t.join(""))},function(t){return new D(new U(d(t)))},"<!--",{type:"literal",value:"<!--",description:'"<!--"'},void 0,"-->",{type:"literal",value:"-->",description:'"-->"'},function(t){return t},function(t){return new E(l(t.join("")))},"<",{type:"literal",value:"<",description:'"<"'},"area",{type:"literal",value:"area",description:'"area"'},"base",{type:"literal",value:"base",description:'"base"'},"br",{type:"literal",value:"br",description:'"br"'},"col",{type:"literal",value:"col",description:'"col"'},"command",{type:"literal",value:"command",description:'"command"'},"embed",{type:"literal",value:"embed",description:'"embed"'},"hr",{type:"literal",value:"hr",description:'"hr"'},"img",{type:"literal",value:"img",description:'"img"'},"input",{type:"literal",value:"input",description:'"input"'},"keygen",{type:"literal",value:"keygen",description:'"keygen"'},"link",{type:"literal",value:"link",description:'"link"'},"meta",{type:"literal",value:"meta",description:'"meta"'},"param",{type:"literal",value:"param",description:'"param"'},"source",{type:"literal",value:"source",description:'"source"'},"track",{type:"literal",value:"track",description:'"track"'},"wbr",{type:"literal",value:"wbr",description:'"wbr"'},null,"/>",{type:"literal",value:"/>",description:'"/>"'},function(t,e,n){return n&&t!=n.name&&r("</"+t+">"),new J(t,e)},"</",{type:"literal",value:"</",description:'"</"'},function(t){return{name:t}},function(t,e,n){return t.name!=n.name&&r("</"+t.name+">"),new J(t.name,t.attributes,e)},function(t){return new A(h(t.join("")))},"{{",{type:"literal",value:"{{",description:'"{{"'},function(){return i()},function(t){return t},function(t){return new J(t.name,t.attributes)},function(t,e){return{name:t,attributes:e}},function(t){for(var e={},n=0,i=t.length;i>n;n++){var r=t[n];e[r.name]=r.value||!0}return new q(e)},/^[a-zA-Z0-9:_.\-]/,{type:"class",value:"[a-zA-Z0-9:_.\\-]",description:"[a-zA-Z0-9:_.\\-]"},function(t){return t.join("")},"=",{type:"literal",value:"=",description:'"="'},function(t,e){return{name:t,value:e}},function(t){return{name:t,value:new P(!0)}},'"',{type:"literal",value:'"',description:'"\\""'},/^[^"]/,{type:"class",value:'[^"]',description:'[^"]'},function(){return new z(h(i()))},function(t){return p(t)},"'",{type:"literal",value:"'",description:'"\'"'},/^[^']/,{type:"class",value:"[^']",description:"[^']"},function(t){return p([t])},"{{#",{type:"literal",value:"{{#",description:'"{{#"'},function(t){return t},function(t,e,n){return new O(t,e,n)},"{{/",{type:"literal",value:"{{/",description:'"{{/"'},function(t){return new T(t)},"{{/}}",{type:"literal",value:"{{/}}",description:'"{{/}}"'},function(){return void 0},"}}",{type:"literal",value:"}}",description:'"}}"'},function(t){return new O(t)},function(t){return t},function(t){var e={};return e[t]=new R(new P(!0)),new q(e)},function(t){for(var e in t)t[e]=new R(t[e]);return new q(t)},",",{type:"literal",value:",",description:'","'},function(t,e){var n={value:new R(t)};e=e.length?e[0][1]:[];for(var i=0,r=e.length;r>i;i++)n[e[i].key]=new R(e[i].value);return new q(n)},"?",{type:"literal",value:"?",description:'"?"'},":",{type:"literal",value:":",description:'":"'},function(t,e,n){return new Z(t,e,n)},"(",{type:"literal",value:"(",description:'"("'},")",{type:"literal",value:")",description:'")"'},function(t){return t},"()",{type:"literal",value:"()",description:'"()"'},function(){return[]},function(t,e){return[t].concat(e.map(function(t){return t[1]}))},function(t,e){return new j(t,e)},"&&",{type:"literal",value:"&&",description:'"&&"'},"||",{type:"literal",value:"||",description:'"||"'},"===",{type:"literal",value:"===",description:'"==="'},"==",{type:"literal",value:"==",description:'"=="'},"!==",{type:"literal",value:"!==",description:'"!=="'},"!=",{type:"literal",value:"!=",description:'"!="'},">==",{type:"literal",value:">==",description:'">=="'},">=",{type:"literal",value:">=",description:'">="'},"<==",{type:"literal",value:"<==",description:'"<=="'},"<=",{type:"literal",value:"<=",description:'"<="'},"+",{type:"literal",value:"+",description:'"+"'},"-",{type:"literal",value:"-",description:'"-"'},"%",{type:"literal",value:"%",description:'"%"'},"*",{type:"literal",value:"*",description:'"*"'},"/",{type:"literal",value:"/",description:'"/"'},function(t,e,n){
return new B(e,t,n)},function(t){return t},function(t,e){for(var n=0,i=e.length;i>n;n++)t=new I(e[n].name,new U([t].concat(e[n].parameters)));return t},"|",{type:"literal",value:"|",description:'"|"'},function(t,e){return{name:t,parameters:e||[]}},function(t){return t},"!",{type:"literal",value:"!",description:'"!"'},function(t,e){return new L(t,e)},/^[0-9]/,{type:"class",value:"[0-9]",description:"[0-9]"},function(t){return new P(parseFloat(i()))},".",{type:"literal",value:".",description:'"."'},function(t){return new H(t)},function(t){return new P(t.value)},"true",{type:"literal",value:"true",description:'"true"'},"false",{type:"literal",value:"false",description:'"false"'},function(t){return{type:"boolean",value:"true"===t}},"undefined",{type:"literal",value:"undefined",description:'"undefined"'},function(){return{type:"undefined",value:void 0}},"NaN",{type:"literal",value:"NaN",description:'"NaN"'},function(){return{type:"nan",value:0/0}},"Infinity",{type:"literal",value:"Infinity",description:'"Infinity"'},function(){return{type:"infinity",value:1/0}},"null",{type:"literal",value:"null",description:'"null"'},"NULL",{type:"literal",value:"NULL",description:'"NULL"'},function(){return{type:"null",value:null}},function(t,e){return new M(t,new U(e))},"^",{type:"literal",value:"^",description:'"^"'},"~>",{type:"literal",value:"~>",description:'"~>"'},"<~>",{type:"literal",value:"<~>",description:'"<~>"'},"~",{type:"literal",value:"~",description:'"~"'},"<~",{type:"literal",value:"<~",description:'"<~"'},function(t,e,n){return n=[e].concat(n.map(function(t){return t[1]})),new F(n,t)},/^[a-zA-Z_$0-9]/,{type:"class",value:"[a-zA-Z_$0-9]",description:"[a-zA-Z_$0-9]"},function(t){return i()},"{",{type:"literal",value:"{",description:'"{"'},"}",{type:"literal",value:"}",description:'"}"'},function(t){return new q(t)},function(t){for(var e={},n=0,i=t.length;i>n;n++)e[t[n].key]=t[n].value;return e},function(t,e){return[t].concat(e.length?e[0][1]:[])},function(t,e){return{key:t,value:e||new P(void 0)}},function(t){return t.value},function(t){return t},{type:"other",description:"string"},function(t){return new z(t.join(""))},"\\",{type:"literal",value:"\\",description:'"\\\\"'},function(){return i()},'\\"',{type:"literal",value:'\\"',description:'"\\\\\\""'},"\\'",{type:"literal",value:"\\'",description:'"\\\\\'"'},{type:"any",description:"any character"},/^[a-zA-Z]/,{type:"class",value:"[a-zA-Z]",description:"[a-zA-Z]"},function(t){return t.join("")},/^[ \n\r\t]/,{type:"class",value:"[ \\n\\r\\t]",description:"[ \\n\\r\\t]"},/^[\n\r\t]/,{type:"class",value:"[\\n\\r\\t]",description:"[\\n\\r\\t]"}],w=[u("7!"),u("!7#+' 4!6 !! %"),u('!."""2"3#+q$7Z+g% $0%""1!3&+,$,)&0%""1!3&""" !+B%7Z+8%.\'""2\'3(+(%4%6)%!"%$%# !$$# !$## !$"# !"# !'),u('! $7%*5 "7\'*/ "7$*) "7(*# "72,;&7%*5 "7\'*/ "7$*) "7(*# "72"+\' 4!6*!! %'),u('!7Z+Ç$.+""2+3,+·% $!!8..""2.3/9*$$"" -"# !+2$7X+(%4"60"! %$"# !"# !+T$,Q&!!8..""2.3/9*$$"" -"# !+2$7X+(%4"60"! %$"# !"# !""" !+B%..""2.3/+2%7Z+(%4%61%!"%$%# !$$# !$## !$"# !"# !*# "7"'),u('!.2""2233+Ĵ$.4""2435*Ñ ".6""2637*Å ".8""2839*¹ ".:""2:3;*­ ".<""2<3=*¡ ".>""2>3?* ".@""2@3A* ".B""2B3C*} ".D""2D3E*q ".F""2F3G*e ".H""2H3I*Y ".J""2J3K*M ".L""2L3M*A ".N""2N3O*5 ".P""2P3Q*) ".R""2R3S+p%7-+f%.\'""2\'3(*) ".U""2U3V*# " T+D%7Z+:%7&*# " T+*%4&6W&#$# %$&# !$%# !$$# !$## !$"# !"# !'),u('!.X""2X3Y+ü$.4""2435*Ñ ".6""2637*Å ".8""2839*¹ ".:""2:3;*­ ".<""2<3=*¡ ".>""2>3?* ".@""2@3A* ".B""2B3C*} ".D""2D3E*q ".F""2F3G*e ".H""2H3I*Y ".J""2J3K*M ".L""2L3M*A ".N""2N3O*5 ".P""2P3Q*) ".R""2R3S+8%.\'""2\'3(+(%4#6Z#!!%$## !$"# !"# !'),u('!7*+>$7#+4%7.+*%4#6[##"! %$## !$"# !"# !*# "7+'),u('! $7)+&$,#&7)""" !+\' 4!6\\!! %'),u('!!8.2""2233*) ".]""2]3^9*$$"" -"# !+1$7X+\'%4"6_" %$"# !"# !'),u('!7Z+\\$.2""2233+L%7,+B%.\'""2\'3(+2%7Z+(%4%6`%!"%$%# !$$# !$## !$"# !"# !'),u('!7Z+\\$.2""2233+L%7,+B%.U""2U3V+2%7Z+(%4%6a%!"%$%# !$$# !$## !$"# !"# !'),u('!7/+3$7-+)%4"6b""! %$"# !"# !'),u('!7Z+D$ $70,#&70"+2%7Z+(%4#6c#!!%$## !$"# !"# !'),u('!.X""2X3Y+B$7/+8%.\'""2\'3(+(%4#6Z#!!%$## !$"# !"# !'),u('!7Z+M$ $0d""1!3e+,$,)&0d""1!3e""" !+(%4"6f"! %$"# !"# !'),u('!7/+W$7Z+M%.g""2g3h+=%7Z+3%71+)%4%6i%"$ %$%# !$$# !$## !$"# !"# !*/ "!7/+\' 4!6j!! %'),u('!.k""2k3l+ņ$ $76* "! $!!8.]""2]3^9*$$"" -"# !+3$0m""1!3n+#%\'"%$"# !"# !+U$,R&!!8.]""2]3^9*$$"" -"# !+3$0m""1!3n+#%\'"%$"# !"# !""" !+& 4!6o! %,¡&76* "! $!!8.]""2]3^9*$$"" -"# !+3$0m""1!3n+#%\'"%$"# !"# !+U$,R&!!8.]""2]3^9*$$"" -"# !+3$0m""1!3n+#%\'"%$"# !"# !""" !+& 4!6o! %"+8%.k""2k3l+(%4#6p#!!%$## !$"# !"# !*ũ "!.q""2q3r+ņ$ $76* "! $!!8.]""2]3^9*$$"" -"# !+3$0s""1!3t+#%\'"%$"# !"# !+U$,R&!!8.]""2]3^9*$$"" -"# !+3$0s""1!3t+#%\'"%$"# !"# !""" !+& 4!6o! %,¡&76* "! $!!8.]""2]3^9*$$"" -"# !+3$0s""1!3t+#%\'"%$"# !"# !+U$,R&!!8.]""2]3^9*$$"" -"# !+3$0s""1!3t+#%\'"%$"# !"# !""" !+& 4!6o! %"+8%.q""2q3r+(%4#6p#!!%$## !$"# !"# !*/ "!76+\' 4!6u!! %'),u('!.v""2v3w+2$73+(%4"6x"! %$"# !"# !*# "75'),u('!77+R$7Z+H%7!+>%7Z+4%74+*%4%6y%#$" %$%# !$$# !$## !$"# !"# !'),u('!.z""2z3{+2$73+(%4"6|"! %$"# !"# !*B "!.}""2}3~+1$7Z+\'%4"6" %$"# !"# !'),u('!.]""2]3^+V$7Z+L%78+B%7Z+8%.""23+(%4%6%!"%$%# !$$# !$## !$"# !"# !'),u('!.]""2]3^+V$7Z+L%78+B%7Z+8%.""23+(%4%6%!"%$%# !$$# !$## !$"# !"# !'),u('!7Z+L$7O+B%7Z+8%.""23+(%4$6$!"%$$# !$## !$"# !"# !*M "!78+B$7Z+8%.""23+(%4#6#!"%$## !$"# !"# !'),u('!7Q+\' 4!6!! %* "!7Z+$79+{%7Z+q% $!.""23+-$7R+#%\'"%$"# !"# !,>&!.""23+-$7R+#%\'"%$"# !"# !"+)%4$6$"" %$$# !$## !$"# !"# !'),u('!7<+^$.""23+N%79+D%.""23+4%79+*%4%6%#$" %$%# !$$# !$## !$"# !"# !*# "7<'),u('!.""23+B$7;+8%.""23+(%4#6#!!%$## !$"# !"# !*4 "!.""23+& 4!6! %'),u('!79+q$ $!.""23+-$79+#%\'"%$"# !"# !,>&!.""23+-$79+#%\'"%$"# !"# !"+)%4"6""! %$"# !"# !'),u('!7A+C$.g""2g3h+3%7<+)%4#6#"" %$## !$"# !"# !*# "7='),u('!7>+Ą$.""23*Ý ".""23*Ñ ".""23*Å ".""23*¹ ". ""2 3¡*­ ".¢""2¢3£*¡ ".¤""2¤3¥* ".¦""2¦3§* ".\'""2\'3(*} ".¨""2¨3©*q ".ª""2ª3«*e ".2""2233*Y ".¬""2¬3­*M ".®""2®3¯*A ".°""2°3±*5 ".²""2²3³*) ".´""2´3µ+4%7=+*%4#6¶##"! %$## !$"# !"# !*# "7>'),u('!7Z+<$7?+2%7Z+(%4#6·#!!%$## !$"# !"# !'),u('!7B+;$ $7@,#&7@"+)%4"6¸""! %$"# !"# !*) "7M*# "7A'),u('!.¹""2¹3º+W$7Z+M%7O+C%7:*# " T+3%7Z+)%4%6»%""!%$%# !$$# !$## !$"# !"# !'),u('!7Z+<$7C+2%7Z+(%4#6¼#!!%$## !$"# !"# !'),u('!.½""2½3¾*) ".®""2®3¯+3$7B+)%4"6¿""! %$"# !"# !*/ "7G*) "7M*# "7A'),u('7F*5 "7P*/ "7D*) "7U*# "7N'),u('!!.®""2®3¯*# " T+i$! $0À""1!3Á+,$,)&0À""1!3Á""" !+3$7E*# " T+#%\'"%$"# !"# !*# "7E+#%\'"%$"# !"# !+\' 4!6Â!! %'),u('!.Ã""2Ã3Ä+H$ $0À""1!3Á+,$,)&0À""1!3Á""" !+#%\'"%$"# !"# !'),u('!.""23+B$79+8%.""23+(%4#6Å#!!%$## !$"# !"# !'),u('!7H*5 "7I*/ "7L*) "7J*# "7K+\' 4!6Æ!! %'),u('!.Ç""2Ç3È*) ".É""2É3Ê+\' 4!6Ë!! %'),u('!.Ì""2Ì3Í+& 4!6Î! %'),u('!.Ï""2Ï3Ð+& 4!6Ñ! %'),u('!.Ò""2Ò3Ó+& 4!6Ô! %'),u('!.Õ""2Õ3Ö*) ".×""2×3Ø+& 4!6Ù! %'),u('!7A+3$7:+)%4"6Ú""! %$"# !"# !'),u('!.Û""2Û3Ü*M ".Ý""2Ý3Þ*A ".ß""2ß3à*5 ".á""2á3â*) ".ã""2ã3ä*# " T+$7Z+%7O+|% $!.Ã""2Ã3Ä+-$7O+#%\'"%$"# !"# !,>&!.Ã""2Ã3Ä+-$7O+#%\'"%$"# !"# !"+4%7Z+*%4%6å%#$"!%$%# !$$# !$## !$"# !"# !'),u('! $0æ""1!3ç+,$,)&0æ""1!3ç""" !+\' 4!6è!! %'),u('!.é""2é3ê+\\$7Z+R%7Q*# " T+B%7Z+8%.ë""2ë3ì+(%4%6í%!"%$%# !$$# !$## !$"# !"# !'),u("!7R+' 4!6î!! %"),u('!7S+q$ $!.""23+-$7R+#%\'"%$"# !"# !,>&!.""23+-$7R+#%\'"%$"# !"# !"+)%4"6ï""! %$"# !"# !'),u('!7Z+]$7T+S%7Z+I%.""23+9%79*# " T+)%4%6ð%"# %$%# !$$# !$## !$"# !"# !'),u("!7U+' 4!6ñ!! %*/ \"!7O+' 4!6ò!! %"),u('8!.k""2k3l+J$ $7V,#&7V"+8%.k""2k3l+(%4#6ô#!!%$## !$"# !"# !*[ "!.q""2q3r+J$ $7W,#&7W"+8%.q""2q3r+(%4#6ô#!!%$## !$"# !"# !9*" 3ó'),u('!!8.k""2k3l*) ".õ""2õ3ö9*$$"" -"# !+1$7X+\'%4"6÷" %$"# !"# !*) ".ø""2ø3ù'),u('!!8.q""2q3r*) ".õ""2õ3ö9*$$"" -"# !+1$7X+\'%4"6÷" %$"# !"# !*) ".ú""2ú3û'),u('-""1!3ü'),u('! $0ý""1!3þ+,$,)&0ý""1!3þ""" !+\' 4!6ÿ!! %'),u(' $0Ā""1!3ā,)&0Ā""1!3ā"'),u(' $0Ă""1!3ă,)&0Ă""1!3ă"')],$=0,x=0,_=0,C={line:1,column:1,seenCR:!1},k=0,N=[],S=0;if("startRule"in v){if(!(v.startRule in g))throw new Error("Can't start parsing from rule \""+v.startRule+'".');m=g[v.startRule]}var T=(t("./ast/doctype"),t("./ast/rootNode")),A=t("./ast/textNode"),E=t("./ast/commentNode"),J=t("./ast/elementNode"),O=t("./ast/blockBinding"),V=t("./ast/doctype"),Z=t("./ast/ternaryCondition"),j=t("./ast/assignment"),B=t("./ast/operator"),L=t("./ast/not"),P=t("./ast/literal"),z=t("./ast/string"),F=t("./ast/reference"),q=t("./ast/hash"),R=t("./ast/script"),M=t("./ast/call"),I=t("./ast/modifier"),D=t("./ast/array"),U=t("./ast/parameters"),H=t("./ast/group");if(f=c(m),f!==b&&$===e.length)return f;throw f!==b&&$<e.length&&o({type:"end",description:"end of input"}),a(null,N,k)}return e(n,Error),{SyntaxError:n,parse:i}}()},{"./ast/array":26,"./ast/assignment":27,"./ast/blockBinding":29,"./ast/call":30,"./ast/commentNode":31,"./ast/doctype":32,"./ast/elementNode":33,"./ast/group":34,"./ast/hash":35,"./ast/literal":36,"./ast/modifier":37,"./ast/not":38,"./ast/operator":39,"./ast/parameters":40,"./ast/reference":41,"./ast/rootNode":42,"./ast/script":43,"./ast/string":44,"./ast/ternaryCondition":45,"./ast/textNode":46}],49:[function(t,e,n){(function(n,i){function r(t){this._animationQueue=[],this.tick=t.tick||a,this._id=t._id||2}var s=t("protoclass"),o=(i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||n.nextTick).bind(i);if(n.browser)var a=function(t){o(t)};else var a=function(t){t()};s(r,{child:function(){return this.__child||(this.__child=new r({tick:this.tick,_id:this._id<<2}))},deferOnce:function(t){if(t.__running||(t.__running=1),t.__running&this._id)return void(this._running&&this.child().deferOnce(t));if(t.__running|=this._id,this._animationQueue.push(t),!this._requestingFrame){this._requestingFrame=!0;var e=this;this.tick(function(){e.runNow(),e._requestingFrame=!1})}},runNow:function(){var t=this._animationQueue;this._animationQueue=[],this._running=!0;for(var e=0;e<t.length;e++){var n=t[e];n.update(),n.__running&=~this._id,this._animationQueue.length&&this.runNow()}this._running=!1}}),e.exports=r}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{_process:77,protoclass:80}],50:[function(t,e,n){function i(t){var e=t.run,n=t.refs;return{refs:n,evaluate:function(t){return e.call(t)},watch:function(t,i){function r(){if(a)return this;a=!0;var n=s;return i(s=e.call(t),n),a=!1,this}var s,o,a=!1;if(!n.length)return{dispose:function(){},trigger:r};if(1===n.length)o=t.watch(n[0],r).dispose;else{for(var u=[],c=n.length;c--;)u.push(t.watch(n[c],r));o=function(){for(var t=u.length;t--;)u[t].dispose()}}return{dispose:o,trigger:function(){return r(),this}}}}}function r(t,e){function n(e){return t.map(function(t){return"string"==typeof t?t:t.run.call(e)}).join("")}var i=t.filter(function(t){return"string"!=typeof t}).map(function(t){return t});return{buffered:!0,evaluate:function(t){return n(t)},watch:function(t,e){function r(){return e(n(t)),this}for(var s=[],o=i.length;o--;){var a=i[o];if(a.refs)for(var u=a.refs.length;u--;){var c=a.refs[u];s.push(t.watch(c,r))}}return{trigger:r,dispose:function(){for(var t=s.length;t--;)s[t].dispose()}}}}}function s(t,e){return{watch:function(e,n){return{trigger:function(){return n(t),this},dispose:function(){}}}}}e.exports=function(t){return"object"!=typeof t?s(t):t.length?1===t.length?i(t[0].value):r(t.map(function(t){return"object"==typeof t?t.value:t})):i(t)}},{}],51:[function(t,e,n){function i(t,e,n){s.call(this,t,e,n)}function r(t,e,n){this.document=t,this.startPath=e,this.endPath=n}var s=t("document-section").Section,o=t("protoclass"),a=t("../utils");s.extend(i,{rootNode:function(){return this.start.parentNode},createMarker:function(){return new r(this.document,a.getNodePath(this.start),a.getNodePath(this.end))},clone:function(){var t=s.prototype.clone.call(this);return new i(this.document,t.start,t.end)}}),o(r,{getSection:function(t){var e=a.getNodeByPath(t,this.startPath),n=a.getNodeByPath(t,this.endPath);return new i(this.document,e,n)}}),e.exports=i},{"../utils":73,"document-section":78,protoclass:80}],52:[function(t,e,n){function i(t,e,n){this.node=e,this.document=t}function r(t,e){this.nodePath=e,this.document=t}var s=(t("document-section").Section,t("protoclass")),o=t("../utils");s(i,{rootNode:function(){return this.node},createMarker:function(){return new r(this.document,o.getNodePath(this.node))},appendChild:function(t){this.node.appendChild(t)},removeAll:function(){this.node.innerHTML=""},render:function(){return this.node},remove:function(){this.node.parentNode&&this.node.parentNode.removeChild(this.node)},clone:function(){return new i(this.document,this.node.cloneNode(!0))}}),s(r,{getSection:function(t){var e=o.getNodeByPath(t,this.nodePath);return new i(this.document,e)}}),e.exports=i},{"../utils":73,"document-section":78,protoclass:80}],53:[function(t,e,n){function i(t){r.call(this,t)}{var r=t("../components/base");t("../utils/bind"),t("../utils/extend")}e.exports=r.extend(i,{bind:function(){this._bindings=[],this.childContext=new this.contextClass(this.attributes),this.childView?(this.childView.setOptions({parent:this.view}),this.childView.bind(this.childContext)):(this.childView=this.template.view(this.childContext,{parent:this.view}),this.section.appendChild(this.childView.render())),r.prototype.bind.call(this)},unbind:function(){this.childView&&this.childView.unbind()}})},{"../components/base":19,"../utils/bind":71,"../utils/extend":72}],54:[function(t,e,n){(function(n){function i(t,e){this.options=e,this.accessor=e.accessor,this.useCloneNode=void 0!=e.useCloneNode?!!e.useCloneNode:!g,this.accessorClass=e.accessorClass||v.accessorClass,this.components=e.components||v.components,this.modifiers=e.modifiers||v.modifiers,this.attributes=e.attributes||v.attributes,this.runloop=e.runloop||v.runloop,this.document=e.document||s,this.vnode="function"==typeof t?t(u.create,o.create,a.create,c.create,l.create,void 0,this.modifiers):t,this._viewPool=[],this.initialize()}var r=t("protoclass"),s=t("nofactor"),o=t("./vnode/block"),a=t("./vnode/element"),u=t("./vnode/fragment"),c=t("./vnode/text"),l=t("./vnode/comment"),h=t("./view"),p=t("../section/fragment"),d=t("../section/node"),f=t("./component"),v=t("../defaults"),b=t("../utils/extend"),g=!1;if(n.browser){var m=~navigator.userAgent.toLowerCase().indexOf("msie"),y=~navigator.userAgent.toLowerCase().indexOf("trident");g=!(!m&&!y)}e.exports=r(i,{initialize:function(){this.hydrators=[],this.section=new p(this.document);var t=this.vnode.initialize(this);11===t.nodeType?(this.section=new p(this.document),this.section.appendChild(t)):this.section=new d(this.document,t);for(var e=this.hydrators.length;e--;)this.hydrators[e].initialize()},createComponentClass:function(t){return f.extend({template:this,contextClass:t||Object})},child:function(t,e){return new i(t,b(e,{},this.options))},view:function(t,e){var n;this.useCloneNode?n=this.section.clone():(this.initialize(),n=this.section);var i=this._viewPool.pop();return i?i.setOptions(e||{}):i=new h(this,this._viewPool,n,this.hydrators,e||{}),i.setOptions(e||{}),t&&i.bind(t),i}}),e.exports=function(t,n){var r,s=typeof t;if("string"===s){if(!e.exports.parser)throw new Error("paperclip parser does not exist");r=e.exports.parser.compile(t)}else{if("function"!==s)throw new Error("source must either be type 'string' or 'function'");r=t}return new i(r,n||v)}}).call(this,t("_process"))},{"../defaults":25,"../section/fragment":51,"../section/node":52,"../utils/extend":72,"./component":53,"./view":55,"./vnode/block":60,"./vnode/comment":62,"./vnode/element":66,"./vnode/fragment":68,"./vnode/text":69,_process:77,nofactor:79,protoclass:80}],55:[function(t,e,n){(function(n){function i(t,e,n,i,r){this.template=t,this.section=n,this.bindings=[],this._pool=e,this.parent=r.parent,this.accessor=this.parent?this.parent.accessor:t.accessor||new t.accessorClass,this.rootNode=n.rootNode(),this.transitions=new s,this.runloop=t.runloop,this._watchers=[];for(var a=0,u=i.length;u>a;a++)i[a].hydrate(this);this._dispose=o(this._dispose,this)}var r=t("protoclass"),s=t("./transitions"),o=t("../../utils/bind"),a=t("../../utils/stringifyNode"),u=t("./reference");r(i,{setOptions:function(t){this.parent=t.parent,t.parent&&(this.accessor=this.parent.accessor)},get:function(t){var e=this.accessor.get(this.context,t);return null!=e?e:this.parent?this.parent.get(t):void 0},set:function(t,e){return this.accessor.set(this.context,t,e)},reference:function(t,e,n){return new u(this,t,e,n)},call:function(t,e){var n=this.accessor.get(this.context,t);return n?this.accessor.call(this.context,t,e):this.parent?this.parent.call(t,e):void 0},setProperties:function(t){for(var e in t)this.set(e,t[e])},watch:function(t,e){return this.accessor.watchProperty(this.context,t,e)},watchEvent:function(t,e,n){return this.accessor.watchEvent(t,e,n)},bind:function(t){this.context&&this.unbind(),t||(t={}),this.context=this.accessor.castObject(t);for(var e=0,n=this.bindings.length;n>e;e++)this.bindings[e].bind()},unbind:function(){for(var t=this.bindings.length;t--;)this.bindings[t].unbind()},render:function(){return this.context||this.bind({}),this.transitions.enter(),this.section.render()},remove:function(){return this.section.remove(),this},dispose:function(){return this.transitions.exit(this._dispose)?void 0:(this._dispose(),this)},_dispose:function(){this.unbind(),this.section.remove(),this._pool.push(this)},toString:function(){var t=this.render();return this.template.document===n.document?a(t):t.toString()}}),e.exports=i}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../utils/bind":71,"../../utils/stringifyNode":75,"./reference":56,"./transitions":57,protoclass:80}],56:[function(t,e,n){function i(t,e,n,i){this.view=t,this.path=e,this.settable=n!==!1,this.gettable=i!==!1}var r=t("protoclass");r(i,{__isReference:!0,value:function(t){return arguments.length?void(this.settable&&this.view.set(this.path,t)):this.gettable?this.view.get(this.path):void 0},toString:function(){return this.view.get(this.path)}}),e.exports=i},{protoclass:80}],57:[function(t,e,n){(function(n){function i(){this._enter=[],this._exit=[]}var r=t("protoclass"),s=t("../../utils/async");e.exports=r(i,{push:function(t){t.enter&&this._enter.push(t),t.exit&&this._exit.push(t)},enter:function(){if(!this._enter.length)return!1;for(var t=0,e=this._enter.length;e>t;t++)this._enter[t].enter()},exit:function(t){if(!this._exit.length)return!1;var e=this;return n.nextTick(function(){s.each(e._exit,function(t,e){t.exit(e)},t)}),!0}})}).call(this,t("_process"))},{"../../utils/async":70,_process:77,protoclass:80}],58:[function(t,e,n){(function(n){function i(t,e,n){this.view=n,this.document=n.template.document,this.script=e,this.node=t,this.didChange=s(this.didChange,this)}var r=t("protoclass"),s=(t("../../../utils"),t("../../../utils/bind"));e.exports=r(i,{bind:function(){var t=this;this.binding=this.script.watch(this.view,function(e,n){e!==t.currentValue&&(t.currentValue=e,t.didChange())}),this.currentValue=this.script.evaluate(this.view),null!=this.currentValue&&this.update()},didChange:function(){this.view.runloop.deferOnce(this)},update:function(){var t=String(null==this.currentValue?"":this.currentValue);this.document!==n.document?this.node.replaceText(t,!0):this.node.nodeValue=String(t)},unbind:function(){this.binding&&(this.binding.dispose(),this.binding=void 0)}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../utils":73,"../../../utils/bind":71,protoclass:80}],59:[function(t,e,n){function i(t,e,n){this.node=t,this.script=e,this.bindingClass=n}{var r=t("protoclass"),s=t("../../../utils");t("./binding")}e.exports=r(i,{initialize:function(){this.nodePath=s.getNodePath(this.node)},hydrate:function(t){var e=s.getNodeByPath(t.rootNode,this.nodePath);t.bindings.push(new this.bindingClass(e,this.script,t))}})},{"../../../utils":73,"./binding":58,protoclass:80}],60:[function(t,e,n){function i(t){this.script=s(t)}var r=t("protoclass"),s=(t("../../../utils"),t("../../../script")),o=t("./hydrator"),a=t("./binding"),u=t("./unbound");e.exports=r(i,{initialize:function(t){var e=t.document.createTextNode(""),n=this.script.refs.length?a:u;return t.hydrators.push(new o(e,this.script,n)),e}}),e.exports.create=function(t){return new i(t)}},{"../../../script":50,"../../../utils":73,"./binding":58,"./hydrator":59,"./unbound":61,protoclass:80}],61:[function(t,e,n){(function(n){function i(t,e,n){this.view=n,this.document=n.template.document,this.script=e,this.node=t}{var r=t("protoclass");t("../../../utils")}e.exports=r(i,{bind:function(){var t=this.script.evaluate(this.view);if(this.value!==t){this.value=t;var e=String(null==t?"":t);this.document!==n.document?this.node.replaceText(e,!0):this.node.nodeValue=String(e)}},unbind:function(){}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../../utils":73,protoclass:80}],62:[function(t,e,n){function i(t){this.value=t}var r=t("protoclass");e.exports=r(i,{initialize:function(t){return t.document.createComment(this.value)}}),e.exports.create=function(t){return new i(t)}},{protoclass:80}],63:[function(t,e,n){function i(t,e,n,i){this.node=i,this.key=e,this.value=n,this.attrClass=t}{var r=t("protoclass"),s=t("../../../utils");t("./attributesBinding")}e.exports=r(i,{initialize:function(){this.nodePath=s.getNodePath(this.node)},hydrate:function(t){var e=new this.attrClass({node:s.getNodeByPath(t.rootNode,this.nodePath),view:t,key:this.key,value:this.value});t.bindings.push(e)}})},{"../../../utils":73,"./attributesBinding":64,protoclass:80}],64:[function(t,e,n){function i(t,e,n,i){this.attributes=t,this.rawAttributes=e,this.component=n,this.view=i}{var r=t("protoclass");t("../../../utils")}e.exports=r(i,{bind:function(){this.bindings=[];for(var t in this.rawAttributes){var e=this.rawAttributes[t];e.watch&&e.evaluate?this._bindAttr(t,e):this.attributes[t]=e}},_bindAttr:function(t,e){var n=this;this.bindings.push(e.watch(this.view,function(e,i){n.attributes[t]=e,n.view.runloop.deferOnce(n.component)})),n.attributes[t]=e.evaluate(this.view)},unbind:function(){if(this.bindings){for(var t=this.bindings.length;t--;)this.bindings[t].dispose();this.bindings=[]}}})},{"../../../utils":73,protoclass:80}],65:[function(t,e,n){function i(t,e,n,i,r){this.name=t,this.attributes=e,this.childTemplate=n,this.section=i,this.componentClass=r}var r=t("protoclass"),s=t("./attributesBinding"),o=t("../../../utils/extend");e.exports=r(i,{initialize:function(){this.sectionMarker=this.section.createMarker()},hydrate:function(t){this.childTemplate.accessor=t.accessor;var e=this.sectionMarker.getSection(t.rootNode),n=o({},this.attributes),i=new this.componentClass({name:this.name,section:e,attributes:n,view:t,childTemplate:this.childTemplate});t.bindings.push(new s(n,this.attributes,i,t)),i.bind&&t.bindings.push(i)}})},{"../../../utils/extend":72,"./attributesBinding":64,protoclass:80}],66:[function(t,e,n){function i(t){return t.replace(/\-./,function(t){return t.substr(1).toUpperCase()})}function r(t,e,n){this.name=t,this.attributes=e,this.children=n}var s=t("protoclass"),o=t("../../../section/fragment"),a=t("../../../section/node"),u=t("../fragment"),c=(t("../../../utils"),t("../../../script")),l=t("./componentHydrator"),h=t("./attributeHydrator"),p=t("./valueAttribute"),d=t("../../../utils/set");e.exports=s(r,{initialize:function(t){var e=i(this.name),n=t.components[e];if(n){var r=new o(t.document);return t.hydrators.push(new l(e,this.attributes,t.child(this.children),r,n)),r.render()}var s,u,c=t.document.createElement(this.name),d=!1,f={};for(var v in this.attributes){var b=i(v);u=this.attributes[v];var g=typeof u,m=t.components[b],y=t.attributes[b];d=!!m||d,m?(s||(s=new a(t.document,c)),t.hydrators.push(new l(this.name,"object"==typeof u?u:this.attributes,t.child(this.children),s,m))):!y||y.test&&!y.test(u)?"object"!==g?f[v]=u:t.hydrators.push(new h(p,v,u,c)):t.hydrators.push(new h(y,v,u,c))}for(v in f)u=f[v],"object"!=typeof u&&c.setAttribute(v,f[v]);return d||c.appendChild(this.children.initialize(t)),c}}),e.exports.create=function(t,e,n){var i={};for(var s in e){var o=e[s];d(i,s.toLowerCase(),"object"==typeof o?c(o):o)}return new r(t,i,new u(n))}},{"../../../script":50,"../../../section/fragment":51,"../../../section/node":52,"../../../utils":73,"../../../utils/set":74,"../fragment":68,"./attributeHydrator":63,"./componentHydrator":65,"./valueAttribute":67,protoclass:80}],67:[function(t,e,n){var i=t("../../../attributes/script");e.exports=i.extend({update:function(){return null==this.currentValue?this.node.removeAttribute(this.key):void this.node.setAttribute(this.key,this.currentValue)}})},{"../../../attributes/script":16}],68:[function(t,e,n){function i(t){this.children=t}var r=t("protoclass");e.exports=r(i,{initialize:function(t){if(1===this.children.length)return this.children[0].initialize(t);var e=t.document.createDocumentFragment();return this.children.forEach(function(n){e.appendChild(n.initialize(t))}),e}}),e.exports.create=function(t){return new i(t)}},{protoclass:80}],69:[function(t,e,n){function i(t){this.value=t}var r=t("protoclass");e.exports=r(i,{initialize:function(t){return t.document.createTextNode(/^\s+$/.test(this.value)?" ":this.value)}}),e.exports.create=function(t){return new i(t)}},{protoclass:80}],70:[function(t,e,n){e.exports={each:function(t,e,n){var i=t.length,r=0;t.forEach(function(t){var s=!1;e(t,function(){if(s)throw new Error("callback called twice");s=!0,++r===i&&n&&n()})})}}},{}],71:[function(t,e,n){e.exports=function(t,e){return t.bind?t.bind.apply(t,[e].concat(Array.prototype.slice.call(arguments,2))):function(){return t.apply(e,arguments)}}},{}],72:[function(t,e,n){e.exports=function(t){t||(t={});for(var e=Array.prototype.slice.call(arguments,1),n=0,i=e.length;i>n;n++){var r=e[n];for(var s in r)t[s]=r[s]}return t}},{}],73:[function(t,e,n){t("document-section");e.exports={getNodePath:function(t){for(var e=[],n=t.parentNode,i=t;n;)e.unshift(Array.prototype.slice.call(n.childNodes).indexOf(i)),i=n,n=n.parentNode;return e},getNodeByPath:function(t,e){for(var n=t,i=0,r=e.length;r>i;i++)n=n.childNodes[e[i]];return n}}},{"document-section":78}],74:[function(t,e,n){e.exports=function(t,e,n){for(var i,r="string"==typeof e?e.split("."):e,s=t,o=0,a=r.length-1;a>o;o++)i=r[o],s[i]||(s[i]={}),s=s[i];return s[r[r.length-1]]=n,n}},{}],75:[function(t,e,n){function i(t){var e="";if(11===t.nodeType){for(var n=0,r=t.childNodes.length;r>n;n++)e+=i(t.childNodes[n]);return e}return e=t.nodeValue||t.outerHTML||"",8===t.nodeType&&(e="<!--"+e+"-->"),e}e.exports=i},{}],76:[function(t,e,n){e.exports=function(t){for(var e={},n=t.concat(),i=n.length;i--;){var r=n[i];e[r]||(e[r]=0),++e[r]>1&&n.splice(i,1)}return n}},{}],77:[function(t,e,n){function i(){if(!a){a=!0;for(var t,e=o.length;e;){t=o,o=[];for(var n=-1;++n<e;)t[n]();e=o.length}a=!1}}function r(){}var s=e.exports={},o=[],a=!1;s.nextTick=function(t){o.push(t),a||setTimeout(i,0)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=r,s.addListener=r,s.once=r,s.off=r,s.removeListener=r,s.removeAllListeners=r,s.emit=r,s.binding=function(t){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(t){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},{}],78:[function(t,e,n){var i=t("protoclass"),r=t("nofactor"),s=function(t,e,n){if(this.document=t=t||r,this.start=e||t.createTextNode(""),this.end=n||t.createTextNode(""),this.visible=!0,!this.start.parentNode){var i=t.createDocumentFragment();i.appendChild(this.start),i.appendChild(this.end)}};s=i(s,{__isLoafSection:!0,render:function(){return this.start.parentNode},clone:function(){var t;return 11===this.start.parentNode.nodeType?t=this.start.parentNode.cloneNode(!0):(t=this.document.createDocumentFragment(),this.getChildNodes().forEach(function(e){t.appendChild(e.cloneNode(!0))})),new s(this.document,t.childNodes[0],t.childNodes[t.childNodes.length-1])},remove:function(){return this._createFragment(this.getChildNodes())},_createFragment:function(t){var e=this.document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t)}),e},show:function(){return this._detached?(this.append.apply(this,this._detached.getInnerChildNodes()),this._detached=void 0,this.visible=!0,this):this},hide:function(){return this._detached=this.removeAll(),this.visible=!1,this},removeAll:function(){return this._section(this._removeAll())},_removeAll:function(){for(var t=this.start,e=this.end,n=t.nextSibling,i=[];n!=e;)n.parentNode.removeChild(n),i.push(n),n=this.start.nextSibling;return i},append:function(){var t=Array.prototype.slice.call(arguments);t.length&&(t=t.length>1?this._createFragment(t):t[0],this.end.parentNode.insertBefore(t,this.end))},appendChild:function(){this.append.apply(this,arguments)},prepend:function(){var t=Array.prototype.slice.call(arguments);t.length&&(t=t.length>1?this._createFragment(t):t[0],this.start.parentNode.insertBefore(t,this.start.nextSibling))},prependChild:function(){this.prepend.apply(this,arguments)},replaceChildNodes:function(){this.removeAll(),this.append.apply(this,arguments)},toString:function(){var t=this.getChildNodes().map(function(t){return t.outerHTML||(void 0!=t.nodeValue&&3==t.nodeType?t.nodeValue:String(t))});return t.join("")},dispose:function(){this._disposed||(this._disposed=!0,this.removeAll(),this.start.parentNode.removeChild(this.start),this.end.parentNode.removeChild(this.end))},getChildNodes:function(){for(var t=this.start,e=this.end.nextSibling,n=[];t!=e;)n.push(t),t=t.nextSibling;return n},getInnerChildNodes:function(){var t=this.getChildNodes();return t.shift(),t.pop(),t},_section:function(t){var e=new s(this.document);return e.append.apply(e,t),e}}),e.exports=function(t,e,n){return new s(t,e,n)},e.exports.Section=s},{nofactor:79,protoclass:80}],79:[function(t,e,n){e.exports=document},{}],80:[function(t,e,n){function i(t,e){for(var n=0,i=e.length;i>n;n++){var r=e[n];for(var s in r)t[s]=r[s]}return t}function r(t,e){function n(){this.constructor=e}var s=Array.prototype.slice.call(arguments,2);return"function"!=typeof e&&(e&&s.unshift(e),e=t,t=function(){}),i(e,t),n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e.parent=e.superclass=t,i(e.prototype,s),r.setup(e),e}r.setup=function(t){return t.extend||(t.extend=function(t){var e=Array.prototype.slice.call(arguments,0);return"function"!=typeof t&&e.unshift(t=function(){t.parent.apply(this,arguments)}),r.apply(this,[this].concat(e))},t.mixin=function(t){i(this.prototype,arguments)},t.create=function(){var e=Object.create(t.prototype);return t.apply(e,arguments),e}),t},e.exports=r},{}]},{},[1]);;/**
 * sifter.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('sifter', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.Sifter = factory();
	}
}(this, function() {

	/**
	 * Textually searches arrays and hashes of objects
	 * by property (or multiple properties). Designed
	 * specifically for autocomplete.
	 *
	 * @constructor
	 * @param {array|object} items
	 * @param {object} items
	 */
	var Sifter = function(items, settings) {
		this.items = items;
		this.settings = settings || {diacritics: true};
	};

	/**
	 * Splits a search string into an array of individual
	 * regexps to be used to match results.
	 *
	 * @param {string} query
	 * @returns {array}
	 */
	Sifter.prototype.tokenize = function(query) {
		query = trim(String(query || '').toLowerCase());
		if (!query || !query.length) return [];

		var i, n, regex, letter;
		var tokens = [];
		var words = query.split(/ +/);

		for (i = 0, n = words.length; i < n; i++) {
			regex = escape_regex(words[i]);
			if (this.settings.diacritics) {
				for (letter in DIACRITICS) {
					if (DIACRITICS.hasOwnProperty(letter)) {
						regex = regex.replace(new RegExp(letter, 'g'), DIACRITICS[letter]);
					}
				}
			}
			tokens.push({
				string : words[i],
				regex  : new RegExp(regex, 'i')
			});
		}

		return tokens;
	};

	/**
	 * Iterates over arrays and hashes.
	 *
	 * ```
	 * this.iterator(this.items, function(item, id) {
	 *    // invoked for each item
	 * });
	 * ```
	 *
	 * @param {array|object} object
	 */
	Sifter.prototype.iterator = function(object, callback) {
		var iterator;
		if (is_array(object)) {
			iterator = Array.prototype.forEach || function(callback) {
				for (var i = 0, n = this.length; i < n; i++) {
					callback(this[i], i, this);
				}
			};
		} else {
			iterator = function(callback) {
				for (var key in this) {
					if (this.hasOwnProperty(key)) {
						callback(this[key], key, this);
					}
				}
			};
		}

		iterator.apply(object, [callback]);
	};

	/**
	 * Returns a function to be used to score individual results.
	 *
	 * Good matches will have a higher score than poor matches.
	 * If an item is not a match, 0 will be returned by the function.
	 *
	 * @param {object|string} search
	 * @param {object} options (optional)
	 * @returns {function}
	 */
	Sifter.prototype.getScoreFunction = function(search, options) {
		var self, fields, tokens, token_count;

		self        = this;
		search      = self.prepareSearch(search, options);
		tokens      = search.tokens;
		fields      = search.options.fields;
		token_count = tokens.length;

		/**
		 * Calculates how close of a match the
		 * given value is against a search token.
		 *
		 * @param {mixed} value
		 * @param {object} token
		 * @return {number}
		 */
		var scoreValue = function(value, token) {
			var score, pos;

			if (!value) return 0;
			value = String(value || '');
			pos = value.search(token.regex);
			if (pos === -1) return 0;
			score = token.string.length / value.length;
			if (pos === 0) score += 0.5;
			return score;
		};

		/**
		 * Calculates the score of an object
		 * against the search query.
		 *
		 * @param {object} token
		 * @param {object} data
		 * @return {number}
		 */
		var scoreObject = (function() {
			var field_count = fields.length;
			if (!field_count) {
				return function() { return 0; };
			}
			if (field_count === 1) {
				return function(token, data) {
					return scoreValue(data[fields[0]], token);
				};
			}
			return function(token, data) {
				for (var i = 0, sum = 0; i < field_count; i++) {
					sum += scoreValue(data[fields[i]], token);
				}
				return sum / field_count;
			};
		})();

		if (!token_count) {
			return function() { return 0; };
		}
		if (token_count === 1) {
			return function(data) {
				return scoreObject(tokens[0], data);
			};
		}

		if (search.options.conjunction === 'and') {
			return function(data) {
				var score;
				for (var i = 0, sum = 0; i < token_count; i++) {
					score = scoreObject(tokens[i], data);
					if (score <= 0) return 0;
					sum += score;
				}
				return sum / token_count;
			};
		} else {
			return function(data) {
				for (var i = 0, sum = 0; i < token_count; i++) {
					sum += scoreObject(tokens[i], data);
				}
				return sum / token_count;
			};
		}
	};

	/**
	 * Returns a function that can be used to compare two
	 * results, for sorting purposes. If no sorting should
	 * be performed, `null` will be returned.
	 *
	 * @param {string|object} search
	 * @param {object} options
	 * @return function(a,b)
	 */
	Sifter.prototype.getSortFunction = function(search, options) {
		var i, n, self, field, fields, fields_count, multiplier, multipliers, get_field, implicit_score, sort;

		self   = this;
		search = self.prepareSearch(search, options);
		sort   = (!search.query && options.sort_empty) || options.sort;

		/**
		 * Fetches the specified sort field value
		 * from a search result item.
		 *
		 * @param  {string} name
		 * @param  {object} result
		 * @return {mixed}
		 */
		get_field = function(name, result) {
			if (name === '$score') return result.score;
			return self.items[result.id][name];
		};

		// parse options
		fields = [];
		if (sort) {
			for (i = 0, n = sort.length; i < n; i++) {
				if (search.query || sort[i].field !== '$score') {
					fields.push(sort[i]);
				}
			}
		}

		// the "$score" field is implied to be the primary
		// sort field, unless it's manually specified
		if (search.query) {
			implicit_score = true;
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					implicit_score = false;
					break;
				}
			}
			if (implicit_score) {
				fields.unshift({field: '$score', direction: 'desc'});
			}
		} else {
			for (i = 0, n = fields.length; i < n; i++) {
				if (fields[i].field === '$score') {
					fields.splice(i, 1);
					break;
				}
			}
		}

		multipliers = [];
		for (i = 0, n = fields.length; i < n; i++) {
			multipliers.push(fields[i].direction === 'desc' ? -1 : 1);
		}

		// build function
		fields_count = fields.length;
		if (!fields_count) {
			return null;
		} else if (fields_count === 1) {
			field = fields[0].field;
			multiplier = multipliers[0];
			return function(a, b) {
				return multiplier * cmp(
					get_field(field, a),
					get_field(field, b)
				);
			};
		} else {
			return function(a, b) {
				var i, result, a_value, b_value, field;
				for (i = 0; i < fields_count; i++) {
					field = fields[i].field;
					result = multipliers[i] * cmp(
						get_field(field, a),
						get_field(field, b)
					);
					if (result) return result;
				}
				return 0;
			};
		}
	};

	/**
	 * Parses a search query and returns an object
	 * with tokens and fields ready to be populated
	 * with results.
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.prepareSearch = function(query, options) {
		if (typeof query === 'object') return query;

		options = extend({}, options);

		var option_fields     = options.fields;
		var option_sort       = options.sort;
		var option_sort_empty = options.sort_empty;

		if (option_fields && !is_array(option_fields)) options.fields = [option_fields];
		if (option_sort && !is_array(option_sort)) options.sort = [option_sort];
		if (option_sort_empty && !is_array(option_sort_empty)) options.sort_empty = [option_sort_empty];

		return {
			options : options,
			query   : String(query || '').toLowerCase(),
			tokens  : this.tokenize(query),
			total   : 0,
			items   : []
		};
	};

	/**
	 * Searches through all items and returns a sorted array of matches.
	 *
	 * The `options` parameter can contain:
	 *
	 *   - fields {string|array}
	 *   - sort {array}
	 *   - score {function}
	 *   - filter {bool}
	 *   - limit {integer}
	 *
	 * Returns an object containing:
	 *
	 *   - options {object}
	 *   - query {string}
	 *   - tokens {array}
	 *   - total {int}
	 *   - items {array}
	 *
	 * @param {string} query
	 * @param {object} options
	 * @returns {object}
	 */
	Sifter.prototype.search = function(query, options) {
		var self = this, value, score, search, calculateScore;
		var fn_sort;
		var fn_score;

		search  = this.prepareSearch(query, options);
		options = search.options;
		query   = search.query;

		// generate result scoring function
		fn_score = options.score || self.getScoreFunction(search);

		// perform search and sort
		if (query.length) {
			self.iterator(self.items, function(item, id) {
				score = fn_score(item);
				if (options.filter === false || score > 0) {
					search.items.push({'score': score, 'id': id});
				}
			});
		} else {
			self.iterator(self.items, function(item, id) {
				search.items.push({'score': 1, 'id': id});
			});
		}

		fn_sort = self.getSortFunction(search, options);
		if (fn_sort) search.items.sort(fn_sort);

		// apply limits
		search.total = search.items.length;
		if (typeof options.limit === 'number') {
			search.items = search.items.slice(0, options.limit);
		}

		return search;
	};

	// utilities
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	var cmp = function(a, b) {
		if (typeof a === 'number' && typeof b === 'number') {
			return a > b ? 1 : (a < b ? -1 : 0);
		}
		a = asciifold(String(a || ''));
		b = asciifold(String(b || ''));
		if (a > b) return 1;
		if (b > a) return -1;
		return 0;
	};

	var extend = function(a, b) {
		var i, n, k, object;
		for (i = 1, n = arguments.length; i < n; i++) {
			object = arguments[i];
			if (!object) continue;
			for (k in object) {
				if (object.hasOwnProperty(k)) {
					a[k] = object[k];
				}
			}
		}
		return a;
	};

	var trim = function(str) {
		return (str + '').replace(/^\s+|\s+$|/g, '');
	};

	var escape_regex = function(str) {
		return (str + '').replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
	};

	var is_array = Array.isArray || ($ && $.isArray) || function(object) {
		return Object.prototype.toString.call(object) === '[object Array]';
	};

	var DIACRITICS = {
		'a': '[aÀÁÂÃÄÅàáâãäåĀāąĄ]',
		'c': '[cÇçćĆčČ]',
		'd': '[dđĐďĎ]',
		'e': '[eÈÉÊËèéêëěĚĒēęĘ]',
		'i': '[iÌÍÎÏìíîïĪī]',
		'l': '[lłŁ]',
		'n': '[nÑñňŇńŃ]',
		'o': '[oÒÓÔÕÕÖØòóôõöøŌō]',
		'r': '[rřŘ]',
		's': '[sŠšśŚ]',
		't': '[tťŤ]',
		'u': '[uÙÚÛÜùúûüůŮŪū]',
		'y': '[yŸÿýÝ]',
		'z': '[zŽžżŻźŹ]'
	};

	var asciifold = (function() {
		var i, n, k, chunk;
		var foreignletters = '';
		var lookup = {};
		for (k in DIACRITICS) {
			if (DIACRITICS.hasOwnProperty(k)) {
				chunk = DIACRITICS[k].substring(2, DIACRITICS[k].length - 1);
				foreignletters += chunk;
				for (i = 0, n = chunk.length; i < n; i++) {
					lookup[chunk.charAt(i)] = k;
				}
			}
		}
		var regexp = new RegExp('[' +  foreignletters + ']', 'g');
		return function(str) {
			return str.replace(regexp, function(foreignletter) {
				return lookup[foreignletter];
			}).toLowerCase();
		};
	})();


	// export
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

	return Sifter;
}));



/**
 * microplugin.js
 * Copyright (c) 2013 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('microplugin', factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.MicroPlugin = factory();
	}
}(this, function() {
	var MicroPlugin = {};

	MicroPlugin.mixin = function(Interface) {
		Interface.plugins = {};

		/**
		 * Initializes the listed plugins (with options).
		 * Acceptable formats:
		 *
		 * List (without options):
		 *   ['a', 'b', 'c']
		 *
		 * List (with options):
		 *   [{'name': 'a', options: {}}, {'name': 'b', options: {}}]
		 *
		 * Hash (with options):
		 *   {'a': { ... }, 'b': { ... }, 'c': { ... }}
		 *
		 * @param {mixed} plugins
		 */
		Interface.prototype.initializePlugins = function(plugins) {
			var i, n, key;
			var self  = this;
			var queue = [];

			self.plugins = {
				names     : [],
				settings  : {},
				requested : {},
				loaded    : {}
			};

			if (utils.isArray(plugins)) {
				for (i = 0, n = plugins.length; i < n; i++) {
					if (typeof plugins[i] === 'string') {
						queue.push(plugins[i]);
					} else {
						self.plugins.settings[plugins[i].name] = plugins[i].options;
						queue.push(plugins[i].name);
					}
				}
			} else if (plugins) {
				for (key in plugins) {
					if (plugins.hasOwnProperty(key)) {
						self.plugins.settings[key] = plugins[key];
						queue.push(key);
					}
				}
			}

			while (queue.length) {
				self.require(queue.shift());
			}
		};

		Interface.prototype.loadPlugin = function(name) {
			var self    = this;
			var plugins = self.plugins;
			var plugin  = Interface.plugins[name];

			if (!Interface.plugins.hasOwnProperty(name)) {
				throw new Error('Unable to find "' +  name + '" plugin');
			}

			plugins.requested[name] = true;
			plugins.loaded[name] = plugin.fn.apply(self, [self.plugins.settings[name] || {}]);
			plugins.names.push(name);
		};

		/**
		 * Initializes a plugin.
		 *
		 * @param {string} name
		 */
		Interface.prototype.require = function(name) {
			var self = this;
			var plugins = self.plugins;

			if (!self.plugins.loaded.hasOwnProperty(name)) {
				if (plugins.requested[name]) {
					throw new Error('Plugin has circular dependency ("' + name + '")');
				}
				self.loadPlugin(name);
			}

			return plugins.loaded[name];
		};

		/**
		 * Registers a plugin.
		 *
		 * @param {string} name
		 * @param {function} fn
		 */
		Interface.define = function(name, fn) {
			Interface.plugins[name] = {
				'name' : name,
				'fn'   : fn
			};
		};
	};

	var utils = {
		isArray: Array.isArray || function(vArg) {
			return Object.prototype.toString.call(vArg) === '[object Array]';
		}
	};

	return MicroPlugin;
}));

/**
 * selectize.js (v0.12.1)
 * Copyright (c) 2013–2015 Brian Reavis & contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this
 * file except in compliance with the License. You may obtain a copy of the License at:
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 *
 * @author Brian Reavis <brian@thirdroute.com>
 */

/*jshint curly:false */
/*jshint browser:true */

(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define('selectize', ['jquery','sifter','microplugin'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('jquery'), require('sifter'), require('microplugin'));
	} else {
		root.Selectize = factory(root.jQuery, root.Sifter, root.MicroPlugin);
	}
}(this, function($, Sifter, MicroPlugin) {
	'use strict';

	var highlight = function($element, pattern) {
		if (typeof pattern === 'string' && !pattern.length) return;
		var regex = (typeof pattern === 'string') ? new RegExp(pattern, 'i') : pattern;
	
		var highlight = function(node) {
			var skip = 0;
			if (node.nodeType === 3) {
				var pos = node.data.search(regex);
				if (pos >= 0 && node.data.length > 0) {
					var match = node.data.match(regex);
					var spannode = document.createElement('span');
					spannode.className = 'highlight';
					var middlebit = node.splitText(pos);
					var endbit = middlebit.splitText(match[0].length);
					var middleclone = middlebit.cloneNode(true);
					spannode.appendChild(middleclone);
					middlebit.parentNode.replaceChild(spannode, middlebit);
					skip = 1;
				}
			} else if (node.nodeType === 1 && node.childNodes && !/(script|style)/i.test(node.tagName)) {
				for (var i = 0; i < node.childNodes.length; ++i) {
					i += highlight(node.childNodes[i]);
				}
			}
			return skip;
		};
	
		return $element.each(function() {
			highlight(this);
		});
	};
	
	var MicroEvent = function() {};
	MicroEvent.prototype = {
		on: function(event, fct){
			this._events = this._events || {};
			this._events[event] = this._events[event] || [];
			this._events[event].push(fct);
		},
		off: function(event, fct){
			var n = arguments.length;
			if (n === 0) return delete this._events;
			if (n === 1) return delete this._events[event];
	
			this._events = this._events || {};
			if (event in this._events === false) return;
			this._events[event].splice(this._events[event].indexOf(fct), 1);
		},
		trigger: function(event /* , args... */){
			this._events = this._events || {};
			if (event in this._events === false) return;
			for (var i = 0; i < this._events[event].length; i++){
				this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1));
			}
		}
	};
	
	/**
	 * Mixin will delegate all MicroEvent.js function in the destination object.
	 *
	 * - MicroEvent.mixin(Foobar) will make Foobar able to use MicroEvent
	 *
	 * @param {object} the object which will support MicroEvent
	 */
	MicroEvent.mixin = function(destObject){
		var props = ['on', 'off', 'trigger'];
		for (var i = 0; i < props.length; i++){
			destObject.prototype[props[i]] = MicroEvent.prototype[props[i]];
		}
	};
	
	var IS_MAC        = /Mac/.test(navigator.userAgent);
	
	var KEY_A         = 65;
	var KEY_COMMA     = 188;
	var KEY_RETURN    = 13;
	var KEY_ESC       = 27;
	var KEY_LEFT      = 37;
	var KEY_UP        = 38;
	var KEY_P         = 80;
	var KEY_RIGHT     = 39;
	var KEY_DOWN      = 40;
	var KEY_N         = 78;
	var KEY_BACKSPACE = 8;
	var KEY_DELETE    = 46;
	var KEY_SHIFT     = 16;
	var KEY_CMD       = IS_MAC ? 91 : 17;
	var KEY_CTRL      = IS_MAC ? 18 : 17;
	var KEY_TAB       = 9;
	
	var TAG_SELECT    = 1;
	var TAG_INPUT     = 2;
	
	// for now, android support in general is too spotty to support validity
	var SUPPORTS_VALIDITY_API = !/android/i.test(window.navigator.userAgent) && !!document.createElement('form').validity;
	
	var isset = function(object) {
		return typeof object !== 'undefined';
	};
	
	/**
	 * Converts a scalar to its best string representation
	 * for hash keys and HTML attribute values.
	 *
	 * Transformations:
	 *   'str'     -> 'str'
	 *   null      -> ''
	 *   undefined -> ''
	 *   true      -> '1'
	 *   false     -> '0'
	 *   0         -> '0'
	 *   1         -> '1'
	 *
	 * @param {string} value
	 * @returns {string|null}
	 */
	var hash_key = function(value) {
		if (typeof value === 'undefined' || value === null) return null;
		if (typeof value === 'boolean') return value ? '1' : '0';
		return value + '';
	};
	
	/**
	 * Escapes a string for use within HTML.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_html = function(str) {
		return (str + '')
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	};
	
	/**
	 * Escapes "$" characters in replacement strings.
	 *
	 * @param {string} str
	 * @returns {string}
	 */
	var escape_replace = function(str) {
		return (str + '').replace(/\$/g, '$$$$');
	};
	
	var hook = {};
	
	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked before the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.before = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			fn.apply(self, arguments);
			return original.apply(self, arguments);
		};
	};
	
	/**
	 * Wraps `method` on `self` so that `fn`
	 * is invoked after the original method.
	 *
	 * @param {object} self
	 * @param {string} method
	 * @param {function} fn
	 */
	hook.after = function(self, method, fn) {
		var original = self[method];
		self[method] = function() {
			var result = original.apply(self, arguments);
			fn.apply(self, arguments);
			return result;
		};
	};
	
	/**
	 * Wraps `fn` so that it can only be invoked once.
	 *
	 * @param {function} fn
	 * @returns {function}
	 */
	var once = function(fn) {
		var called = false;
		return function() {
			if (called) return;
			called = true;
			fn.apply(this, arguments);
		};
	};
	
	/**
	 * Wraps `fn` so that it can only be called once
	 * every `delay` milliseconds (invoked on the falling edge).
	 *
	 * @param {function} fn
	 * @param {int} delay
	 * @returns {function}
	 */
	var debounce = function(fn, delay) {
		var timeout;
		return function() {
			var self = this;
			var args = arguments;
			window.clearTimeout(timeout);
			timeout = window.setTimeout(function() {
				fn.apply(self, args);
			}, delay);
		};
	};
	
	/**
	 * Debounce all fired events types listed in `types`
	 * while executing the provided `fn`.
	 *
	 * @param {object} self
	 * @param {array} types
	 * @param {function} fn
	 */
	var debounce_events = function(self, types, fn) {
		var type;
		var trigger = self.trigger;
		var event_args = {};
	
		// override trigger method
		self.trigger = function() {
			var type = arguments[0];
			if (types.indexOf(type) !== -1) {
				event_args[type] = arguments;
			} else {
				return trigger.apply(self, arguments);
			}
		};
	
		// invoke provided function
		fn.apply(self, []);
		self.trigger = trigger;
	
		// trigger queued events
		for (type in event_args) {
			if (event_args.hasOwnProperty(type)) {
				trigger.apply(self, event_args[type]);
			}
		}
	};
	
	/**
	 * A workaround for http://bugs.jquery.com/ticket/6696
	 *
	 * @param {object} $parent - Parent element to listen on.
	 * @param {string} event - Event name.
	 * @param {string} selector - Descendant selector to filter by.
	 * @param {function} fn - Event handler.
	 */
	var watchChildEvent = function($parent, event, selector, fn) {
		$parent.on(event, selector, function(e) {
			var child = e.target;
			while (child && child.parentNode !== $parent[0]) {
				child = child.parentNode;
			}
			e.currentTarget = child;
			return fn.apply(this, [e]);
		});
	};
	
	/**
	 * Determines the current selection within a text input control.
	 * Returns an object containing:
	 *   - start
	 *   - length
	 *
	 * @param {object} input
	 * @returns {object}
	 */
	var getSelection = function(input) {
		var result = {};
		if ('selectionStart' in input) {
			result.start = input.selectionStart;
			result.length = input.selectionEnd - result.start;
		} else if (document.selection) {
			input.focus();
			var sel = document.selection.createRange();
			var selLen = document.selection.createRange().text.length;
			sel.moveStart('character', -input.value.length);
			result.start = sel.text.length - selLen;
			result.length = selLen;
		}
		return result;
	};
	
	/**
	 * Copies CSS properties from one element to another.
	 *
	 * @param {object} $from
	 * @param {object} $to
	 * @param {array} properties
	 */
	var transferStyles = function($from, $to, properties) {
		var i, n, styles = {};
		if (properties) {
			for (i = 0, n = properties.length; i < n; i++) {
				styles[properties[i]] = $from.css(properties[i]);
			}
		} else {
			styles = $from.css();
		}
		$to.css(styles);
	};
	
	/**
	 * Measures the width of a string within a
	 * parent element (in pixels).
	 *
	 * @param {string} str
	 * @param {object} $parent
	 * @returns {int}
	 */
	var measureString = function(str, $parent) {
		if (!str) {
			return 0;
		}
	
		var $test = $('<test>').css({
			position: 'absolute',
			top: -99999,
			left: -99999,
			width: 'auto',
			padding: 0,
			whiteSpace: 'pre'
		}).text(str).appendTo('body');
	
		transferStyles($parent, $test, [
			'letterSpacing',
			'fontSize',
			'fontFamily',
			'fontWeight',
			'textTransform'
		]);
	
		var width = $test.width();
		$test.remove();
	
		return width;
	};
	
	/**
	 * Sets up an input to grow horizontally as the user
	 * types. If the value is changed manually, you can
	 * trigger the "update" handler to resize:
	 *
	 * $input.trigger('update');
	 *
	 * @param {object} $input
	 */
	var autoGrow = function($input) {
		var currentWidth = null;
	
		var update = function(e, options) {
			var value, keyCode, printable, placeholder, width;
			var shift, character, selection;
			e = e || window.event || {};
			options = options || {};
	
			if (e.metaKey || e.altKey) return;
			if (!options.force && $input.data('grow') === false) return;
	
			value = $input.val();
			if (e.type && e.type.toLowerCase() === 'keydown') {
				keyCode = e.keyCode;
				printable = (
					(keyCode >= 97 && keyCode <= 122) || // a-z
					(keyCode >= 65 && keyCode <= 90)  || // A-Z
					(keyCode >= 48 && keyCode <= 57)  || // 0-9
					keyCode === 32 // space
				);
	
				if (keyCode === KEY_DELETE || keyCode === KEY_BACKSPACE) {
					selection = getSelection($input[0]);
					if (selection.length) {
						value = value.substring(0, selection.start) + value.substring(selection.start + selection.length);
					} else if (keyCode === KEY_BACKSPACE && selection.start) {
						value = value.substring(0, selection.start - 1) + value.substring(selection.start + 1);
					} else if (keyCode === KEY_DELETE && typeof selection.start !== 'undefined') {
						value = value.substring(0, selection.start) + value.substring(selection.start + 1);
					}
				} else if (printable) {
					shift = e.shiftKey;
					character = String.fromCharCode(e.keyCode);
					if (shift) character = character.toUpperCase();
					else character = character.toLowerCase();
					value += character;
				}
			}
	
			placeholder = $input.attr('placeholder');
			if (!value && placeholder) {
				value = placeholder;
			}
	
			width = measureString(value, $input) + 4;
			if (width !== currentWidth) {
				currentWidth = width;
				$input.width(width);
				$input.triggerHandler('resize');
			}
		};
	
		$input.on('keydown keyup update blur', update);
		update();
	};
	
	var Selectize = function($input, settings) {
		var key, i, n, dir, input, self = this;
		input = $input[0];
		input.selectize = self;
	
		// detect rtl environment
		var computedStyle = window.getComputedStyle && window.getComputedStyle(input, null);
		dir = computedStyle ? computedStyle.getPropertyValue('direction') : input.currentStyle && input.currentStyle.direction;
		dir = dir || $input.parents('[dir]:first').attr('dir') || '';
	
		// setup default state
		$.extend(self, {
			order            : 0,
			settings         : settings,
			$input           : $input,
			tabIndex         : $input.attr('tabindex') || '',
			tagType          : input.tagName.toLowerCase() === 'select' ? TAG_SELECT : TAG_INPUT,
			rtl              : /rtl/i.test(dir),
	
			eventNS          : '.selectize' + (++Selectize.count),
			highlightedValue : null,
			isOpen           : false,
			isDisabled       : false,
			isRequired       : $input.is('[required]'),
			isInvalid        : false,
			isLocked         : false,
			isFocused        : false,
			isInputHidden    : false,
			isSetup          : false,
			isShiftDown      : false,
			isCmdDown        : false,
			isCtrlDown       : false,
			ignoreFocus      : false,
			ignoreBlur       : false,
			ignoreHover      : false,
			hasOptions       : false,
			currentResults   : null,
			lastValue        : '',
			caretPos         : 0,
			loading          : 0,
			loadedSearches   : {},
	
			$activeOption    : null,
			$activeItems     : [],
	
			optgroups        : {},
			options          : {},
			userOptions      : {},
			items            : [],
			renderCache      : {},
			onSearchChange   : settings.loadThrottle === null ? self.onSearchChange : debounce(self.onSearchChange, settings.loadThrottle)
		});
	
		// search system
		self.sifter = new Sifter(this.options, {diacritics: settings.diacritics});
	
		// build options table
		if (self.settings.options) {
			for (i = 0, n = self.settings.options.length; i < n; i++) {
				self.registerOption(self.settings.options[i]);
			}
			delete self.settings.options;
		}
	
		// build optgroup table
		if (self.settings.optgroups) {
			for (i = 0, n = self.settings.optgroups.length; i < n; i++) {
				self.registerOptionGroup(self.settings.optgroups[i]);
			}
			delete self.settings.optgroups;
		}
	
		// option-dependent defaults
		self.settings.mode = self.settings.mode || (self.settings.maxItems === 1 ? 'single' : 'multi');
		if (typeof self.settings.hideSelected !== 'boolean') {
			self.settings.hideSelected = self.settings.mode === 'multi';
		}
	
		self.initializePlugins(self.settings.plugins);
		self.setupCallbacks();
		self.setupTemplates();
		self.setup();
	};
	
	// mixins
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	MicroEvent.mixin(Selectize);
	MicroPlugin.mixin(Selectize);
	
	// methods
	// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
	
	$.extend(Selectize.prototype, {
	
		/**
		 * Creates all elements and sets up event bindings.
		 */
		setup: function() {
			var self      = this;
			var settings  = self.settings;
			var eventNS   = self.eventNS;
			var $window   = $(window);
			var $document = $(document);
			var $input    = self.$input;
	
			var $wrapper;
			var $control;
			var $control_input;
			var $dropdown;
			var $dropdown_content;
			var $dropdown_parent;
			var inputMode;
			var timeout_blur;
			var timeout_focus;
			var classes;
			var classes_plugins;
	
			inputMode         = self.settings.mode;
			classes           = $input.attr('class') || '';
	
			$wrapper          = $('<div>').addClass(settings.wrapperClass).addClass(classes).addClass(inputMode);
			$control          = $('<div>').addClass(settings.inputClass).addClass('items').appendTo($wrapper);
			$control_input    = $('<input type="text" autocomplete="off" />').appendTo($control).attr('tabindex', $input.is(':disabled') ? '-1' : self.tabIndex);
			$dropdown_parent  = $(settings.dropdownParent || $wrapper);
			$dropdown         = $('<div>').addClass(settings.dropdownClass).addClass(inputMode).hide().appendTo($dropdown_parent);
			$dropdown_content = $('<div>').addClass(settings.dropdownContentClass).appendTo($dropdown);
	
			if(self.settings.copyClassesToDropdown) {
				$dropdown.addClass(classes);
			}
	
			$wrapper.css({
				width: $input[0].style.width
			});
	
			if (self.plugins.names.length) {
				classes_plugins = 'plugin-' + self.plugins.names.join(' plugin-');
				$wrapper.addClass(classes_plugins);
				$dropdown.addClass(classes_plugins);
			}
	
			if ((settings.maxItems === null || settings.maxItems > 1) && self.tagType === TAG_SELECT) {
				$input.attr('multiple', 'multiple');
			}
	
			if (self.settings.placeholder) {
				$control_input.attr('placeholder', settings.placeholder);
			}
	
			// if splitOn was not passed in, construct it from the delimiter to allow pasting universally
			if (!self.settings.splitOn && self.settings.delimiter) {
				var delimiterEscaped = self.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
				self.settings.splitOn = new RegExp('\\s*' + delimiterEscaped + '+\\s*');
			}
	
			if ($input.attr('autocorrect')) {
				$control_input.attr('autocorrect', $input.attr('autocorrect'));
			}
	
			if ($input.attr('autocapitalize')) {
				$control_input.attr('autocapitalize', $input.attr('autocapitalize'));
			}
	
			self.$wrapper          = $wrapper;
			self.$control          = $control;
			self.$control_input    = $control_input;
			self.$dropdown         = $dropdown;
			self.$dropdown_content = $dropdown_content;
	
			$dropdown.on('mouseenter', '[data-selectable]', function() { return self.onOptionHover.apply(self, arguments); });
			$dropdown.on('mousedown click', '[data-selectable]', function() { return self.onOptionSelect.apply(self, arguments); });
			watchChildEvent($control, 'mousedown', '*:not(input)', function() { return self.onItemSelect.apply(self, arguments); });
			autoGrow($control_input);
	
			$control.on({
				mousedown : function() { return self.onMouseDown.apply(self, arguments); },
				click     : function() { return self.onClick.apply(self, arguments); }
			});
	
			$control_input.on({
				mousedown : function(e) { e.stopPropagation(); },
				keydown   : function() { return self.onKeyDown.apply(self, arguments); },
				keyup     : function() { return self.onKeyUp.apply(self, arguments); },
				keypress  : function() { return self.onKeyPress.apply(self, arguments); },
				resize    : function() { self.positionDropdown.apply(self, []); },
				blur      : function() { return self.onBlur.apply(self, arguments); },
				focus     : function() { self.ignoreBlur = false; return self.onFocus.apply(self, arguments); },
				paste     : function() { return self.onPaste.apply(self, arguments); }
			});
	
			$document.on('keydown' + eventNS, function(e) {
				self.isCmdDown = e[IS_MAC ? 'metaKey' : 'ctrlKey'];
				self.isCtrlDown = e[IS_MAC ? 'altKey' : 'ctrlKey'];
				self.isShiftDown = e.shiftKey;
			});
	
			$document.on('keyup' + eventNS, function(e) {
				if (e.keyCode === KEY_CTRL) self.isCtrlDown = false;
				if (e.keyCode === KEY_SHIFT) self.isShiftDown = false;
				if (e.keyCode === KEY_CMD) self.isCmdDown = false;
			});
	
			$document.on('mousedown' + eventNS, function(e) {
				if (self.isFocused) {
					// prevent events on the dropdown scrollbar from causing the control to blur
					if (e.target === self.$dropdown[0] || e.target.parentNode === self.$dropdown[0]) {
						return false;
					}
					// blur on click outside
					if (!self.$control.has(e.target).length && e.target !== self.$control[0]) {
						self.blur(e.target);
					}
				}
			});
	
			$window.on(['scroll' + eventNS, 'resize' + eventNS].join(' '), function() {
				if (self.isOpen) {
					self.positionDropdown.apply(self, arguments);
				}
			});
			$window.on('mousemove' + eventNS, function() {
				self.ignoreHover = false;
			});
	
			// store original children and tab index so that they can be
			// restored when the destroy() method is called.
			this.revertSettings = {
				$children : $input.children().detach(),
				tabindex  : $input.attr('tabindex')
			};
	
			$input.attr('tabindex', -1).hide().after(self.$wrapper);
	
			if ($.isArray(settings.items)) {
				self.setValue(settings.items);
				delete settings.items;
			}
	
			// feature detect for the validation API
			if (SUPPORTS_VALIDITY_API) {
				$input.on('invalid' + eventNS, function(e) {
					e.preventDefault();
					self.isInvalid = true;
					self.refreshState();
				});
			}
	
			self.updateOriginalInput();
			self.refreshItems();
			self.refreshState();
			self.updatePlaceholder();
			self.isSetup = true;
	
			if ($input.is(':disabled')) {
				self.disable();
			}
	
			self.on('change', this.onChange);
	
			$input.data('selectize', self);
			$input.addClass('selectized');
			self.trigger('initialize');
	
			// preload options
			if (settings.preload === true) {
				self.onSearchChange('');
			}
	
		},
	
		/**
		 * Sets up default rendering functions.
		 */
		setupTemplates: function() {
			var self = this;
			var field_label = self.settings.labelField;
			var field_optgroup = self.settings.optgroupLabelField;
	
			var templates = {
				'optgroup': function(data) {
					return '<div class="optgroup">' + data.html + '</div>';
				},
				'optgroup_header': function(data, escape) {
					return '<div class="optgroup-header">' + escape(data[field_optgroup]) + '</div>';
				},
				'option': function(data, escape) {
					return '<div class="option">' + escape(data[field_label]) + '</div>';
				},
				'item': function(data, escape) {
					return '<div class="item">' + escape(data[field_label]) + '</div>';
				},
				'option_create': function(data, escape) {
					return '<div class="create">Add <strong>' + escape(data.input) + '</strong>&hellip;</div>';
				}
			};
	
			self.settings.render = $.extend({}, templates, self.settings.render);
		},
	
		/**
		 * Maps fired events to callbacks provided
		 * in the settings used when creating the control.
		 */
		setupCallbacks: function() {
			var key, fn, callbacks = {
				'initialize'      : 'onInitialize',
				'change'          : 'onChange',
				'item_add'        : 'onItemAdd',
				'item_remove'     : 'onItemRemove',
				'clear'           : 'onClear',
				'option_add'      : 'onOptionAdd',
				'option_remove'   : 'onOptionRemove',
				'option_clear'    : 'onOptionClear',
				'optgroup_add'    : 'onOptionGroupAdd',
				'optgroup_remove' : 'onOptionGroupRemove',
				'optgroup_clear'  : 'onOptionGroupClear',
				'dropdown_open'   : 'onDropdownOpen',
				'dropdown_close'  : 'onDropdownClose',
				'type'            : 'onType',
				'load'            : 'onLoad',
				'focus'           : 'onFocus',
				'blur'            : 'onBlur'
			};
	
			for (key in callbacks) {
				if (callbacks.hasOwnProperty(key)) {
					fn = this.settings[callbacks[key]];
					if (fn) this.on(key, fn);
				}
			}
		},
	
		/**
		 * Triggered when the main control element
		 * has a click event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onClick: function(e) {
			var self = this;
	
			// necessary for mobile webkit devices (manual focus triggering
			// is ignored unless invoked within a click event)
			if (!self.isFocused) {
				self.focus();
				e.preventDefault();
			}
		},
	
		/**
		 * Triggered when the main control element
		 * has a mouse down event.
		 *
		 * @param {object} e
		 * @return {boolean}
		 */
		onMouseDown: function(e) {
			var self = this;
			var defaultPrevented = e.isDefaultPrevented();
			var $target = $(e.target);
	
			if (self.isFocused) {
				// retain focus by preventing native handling. if the
				// event target is the input it should not be modified.
				// otherwise, text selection within the input won't work.
				if (e.target !== self.$control_input[0]) {
					if (self.settings.mode === 'single') {
						// toggle dropdown
						self.isOpen ? self.close() : self.open();
					} else if (!defaultPrevented) {
						self.setActiveItem(null);
					}
					return false;
				}
			} else {
				// give control focus
				if (!defaultPrevented) {
					window.setTimeout(function() {
						self.focus();
					}, 0);
				}
			}
		},
	
		/**
		 * Triggered when the value of the control has been changed.
		 * This should propagate the event to the original DOM
		 * input / select element.
		 */
		onChange: function() {
			this.$input.trigger('change');
		},
	
		/**
		 * Triggered on <input> paste.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onPaste: function(e) {
			var self = this;
			if (self.isFull() || self.isInputHidden || self.isLocked) {
				e.preventDefault();
			} else {
				// If a regex or string is included, this will split the pasted
				// input and create Items for each separate value
				if (self.settings.splitOn) {
					setTimeout(function() {
						var splitInput = $.trim(self.$control_input.val() || '').split(self.settings.splitOn);
						for (var i = 0, n = splitInput.length; i < n; i++) {
							self.createItem(splitInput[i]);
						}
					}, 0);
				}
			}
		},
	
		/**
		 * Triggered on <input> keypress.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyPress: function(e) {
			if (this.isLocked) return e && e.preventDefault();
			var character = String.fromCharCode(e.keyCode || e.which);
			if (this.settings.create && this.settings.mode === 'multi' && character === this.settings.delimiter) {
				this.createItem();
				e.preventDefault();
				return false;
			}
		},
	
		/**
		 * Triggered on <input> keydown.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyDown: function(e) {
			var isInput = e.target === this.$control_input[0];
			var self = this;
	
			if (self.isLocked) {
				if (e.keyCode !== KEY_TAB) {
					e.preventDefault();
				}
				return;
			}
	
			switch (e.keyCode) {
				case KEY_A:
					if (self.isCmdDown) {
						self.selectAll();
						return;
					}
					break;
				case KEY_ESC:
					if (self.isOpen) {
						e.preventDefault();
						e.stopPropagation();
						self.close();
					}
					return;
				case KEY_N:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_DOWN:
					if (!self.isOpen && self.hasOptions) {
						self.open();
					} else if (self.$activeOption) {
						self.ignoreHover = true;
						var $next = self.getAdjacentOption(self.$activeOption, 1);
						if ($next.length) self.setActiveOption($next, true, true);
					}
					e.preventDefault();
					return;
				case KEY_P:
					if (!e.ctrlKey || e.altKey) break;
				case KEY_UP:
					if (self.$activeOption) {
						self.ignoreHover = true;
						var $prev = self.getAdjacentOption(self.$activeOption, -1);
						if ($prev.length) self.setActiveOption($prev, true, true);
					}
					e.preventDefault();
					return;
				case KEY_RETURN:
					if (self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
						e.preventDefault();
					}
					return;
				case KEY_LEFT:
					self.advanceSelection(-1, e);
					return;
				case KEY_RIGHT:
					self.advanceSelection(1, e);
					return;
				case KEY_TAB:
					if (self.settings.selectOnTab && self.isOpen && self.$activeOption) {
						self.onOptionSelect({currentTarget: self.$activeOption});
	
						// Default behaviour is to jump to the next field, we only want this
						// if the current field doesn't accept any more entries
						if (!self.isFull()) {
							e.preventDefault();
						}
					}
					if (self.settings.create && self.createItem()) {
						e.preventDefault();
					}
					return;
				case KEY_BACKSPACE:
				case KEY_DELETE:
					self.deleteSelection(e);
					return;
			}
	
			if ((self.isFull() || self.isInputHidden) && !(IS_MAC ? e.metaKey : e.ctrlKey)) {
				e.preventDefault();
				return;
			}
		},
	
		/**
		 * Triggered on <input> keyup.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onKeyUp: function(e) {
			var self = this;
	
			if (self.isLocked) return e && e.preventDefault();
			var value = self.$control_input.val() || '';
			if (self.lastValue !== value) {
				self.lastValue = value;
				self.onSearchChange(value);
				self.refreshOptions();
				self.trigger('type', value);
			}
		},
	
		/**
		 * Invokes the user-provide option provider / loader.
		 *
		 * Note: this function is debounced in the Selectize
		 * constructor (by `settings.loadDelay` milliseconds)
		 *
		 * @param {string} value
		 */
		onSearchChange: function(value) {
			var self = this;
			var fn = self.settings.load;
			if (!fn) return;
			if (self.loadedSearches.hasOwnProperty(value)) return;
			self.loadedSearches[value] = true;
			self.load(function(callback) {
				fn.apply(self, [value, callback]);
			});
		},
	
		/**
		 * Triggered on <input> focus.
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		onFocus: function(e) {
			var self = this;
			var wasFocused = self.isFocused;
	
			if (self.isDisabled) {
				self.blur();
				e && e.preventDefault();
				return false;
			}
	
			if (self.ignoreFocus) return;
			self.isFocused = true;
			if (self.settings.preload === 'focus') self.onSearchChange('');
	
			if (!wasFocused) self.trigger('focus');
	
			if (!self.$activeItems.length) {
				self.showInput();
				self.setActiveItem(null);
				self.refreshOptions(!!self.settings.openOnFocus);
			}
	
			self.refreshState();
		},
	
		/**
		 * Triggered on <input> blur.
		 *
		 * @param {object} e
		 * @param {Element} dest
		 */
		onBlur: function(e, dest) {
			var self = this;
			if (!self.isFocused) return;
			self.isFocused = false;
	
			if (self.ignoreFocus) {
				return;
			} else if (!self.ignoreBlur && document.activeElement === self.$dropdown_content[0]) {
				// necessary to prevent IE closing the dropdown when the scrollbar is clicked
				self.ignoreBlur = true;
				self.onFocus(e);
				return;
			}
	
			var deactivate = function() {
				self.close();
				self.setTextboxValue('');
				self.setActiveItem(null);
				self.setActiveOption(null);
				self.setCaret(self.items.length);
				self.refreshState();
	
				// IE11 bug: element still marked as active
				(dest || document.body).focus();
	
				self.ignoreFocus = false;
				self.trigger('blur');
			};
	
			self.ignoreFocus = true;
			if (self.settings.create && self.settings.createOnBlur) {
				self.createItem(null, false, deactivate);
			} else {
				deactivate();
			}
		},
	
		/**
		 * Triggered when the user rolls over
		 * an option in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionHover: function(e) {
			if (this.ignoreHover) return;
			this.setActiveOption(e.currentTarget, false);
		},
	
		/**
		 * Triggered when the user clicks on an option
		 * in the autocomplete dropdown menu.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onOptionSelect: function(e) {
			var value, $target, $option, self = this;
	
			if (e.preventDefault) {
				e.preventDefault();
				e.stopPropagation();
			}
	
			$target = $(e.currentTarget);
			if ($target.hasClass('create')) {
				self.createItem(null, function() {
					if (self.settings.closeAfterSelect) {
						self.close();
					}
				});
			} else {
				value = $target.attr('data-value');
				if (typeof value !== 'undefined') {
					self.lastQuery = null;
					self.setTextboxValue('');
					self.addItem(value);
					if (self.settings.closeAfterSelect) {
						self.close();
					} else if (!self.settings.hideSelected && e.type && /mouse/.test(e.type)) {
						self.setActiveOption(self.getOption(value));
					}
				}
			}
		},
	
		/**
		 * Triggered when the user clicks on an item
		 * that has been selected.
		 *
		 * @param {object} e
		 * @returns {boolean}
		 */
		onItemSelect: function(e) {
			var self = this;
	
			if (self.isLocked) return;
			if (self.settings.mode === 'multi') {
				e.preventDefault();
				self.setActiveItem(e.currentTarget, e);
			}
		},
	
		/**
		 * Invokes the provided method that provides
		 * results to a callback---which are then added
		 * as options to the control.
		 *
		 * @param {function} fn
		 */
		load: function(fn) {
			var self = this;
			var $wrapper = self.$wrapper.addClass(self.settings.loadingClass);
	
			self.loading++;
			fn.apply(self, [function(results) {
				self.loading = Math.max(self.loading - 1, 0);
				if (results && results.length) {
					self.addOption(results);
					self.refreshOptions(self.isFocused && !self.isInputHidden);
				}
				if (!self.loading) {
					$wrapper.removeClass(self.settings.loadingClass);
				}
				self.trigger('load', results);
			}]);
		},
	
		/**
		 * Sets the input field of the control to the specified value.
		 *
		 * @param {string} value
		 */
		setTextboxValue: function(value) {
			var $input = this.$control_input;
			var changed = $input.val() !== value;
			if (changed) {
				$input.val(value).triggerHandler('update');
				this.lastValue = value;
			}
		},
	
		/**
		 * Returns the value of the control. If multiple items
		 * can be selected (e.g. <select multiple>), this returns
		 * an array. If only one item can be selected, this
		 * returns a string.
		 *
		 * @returns {mixed}
		 */
		getValue: function() {
			if (this.tagType === TAG_SELECT && this.$input.attr('multiple')) {
				return this.items;
			} else {
				return this.items.join(this.settings.delimiter);
			}
		},
	
		/**
		 * Resets the selected items to the given value.
		 *
		 * @param {mixed} value
		 */
		setValue: function(value, silent) {
			var events = silent ? [] : ['change'];
	
			debounce_events(this, events, function() {
				this.clear(silent);
				this.addItems(value, silent);
			});
		},
	
		/**
		 * Sets the selected item.
		 *
		 * @param {object} $item
		 * @param {object} e (optional)
		 */
		setActiveItem: function($item, e) {
			var self = this;
			var eventName;
			var i, idx, begin, end, item, swap;
			var $last;
	
			if (self.settings.mode === 'single') return;
			$item = $($item);
	
			// clear the active selection
			if (!$item.length) {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [];
				if (self.isFocused) {
					self.showInput();
				}
				return;
			}
	
			// modify selection
			eventName = e && e.type.toLowerCase();
	
			if (eventName === 'mousedown' && self.isShiftDown && self.$activeItems.length) {
				$last = self.$control.children('.active:last');
				begin = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$last[0]]);
				end   = Array.prototype.indexOf.apply(self.$control[0].childNodes, [$item[0]]);
				if (begin > end) {
					swap  = begin;
					begin = end;
					end   = swap;
				}
				for (i = begin; i <= end; i++) {
					item = self.$control[0].childNodes[i];
					if (self.$activeItems.indexOf(item) === -1) {
						$(item).addClass('active');
						self.$activeItems.push(item);
					}
				}
				e.preventDefault();
			} else if ((eventName === 'mousedown' && self.isCtrlDown) || (eventName === 'keydown' && this.isShiftDown)) {
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
					$item.removeClass('active');
				} else {
					self.$activeItems.push($item.addClass('active')[0]);
				}
			} else {
				$(self.$activeItems).removeClass('active');
				self.$activeItems = [$item.addClass('active')[0]];
			}
	
			// ensure control has focus
			self.hideInput();
			if (!this.isFocused) {
				self.focus();
			}
		},
	
		/**
		 * Sets the selected item in the dropdown menu
		 * of available options.
		 *
		 * @param {object} $object
		 * @param {boolean} scroll
		 * @param {boolean} animate
		 */
		setActiveOption: function($option, scroll, animate) {
			var height_menu, height_item, y;
			var scroll_top, scroll_bottom;
			var self = this;
	
			if (self.$activeOption) self.$activeOption.removeClass('active');
			self.$activeOption = null;
	
			$option = $($option);
			if (!$option.length) return;
	
			self.$activeOption = $option.addClass('active');
	
			if (scroll || !isset(scroll)) {
	
				height_menu   = self.$dropdown_content.height();
				height_item   = self.$activeOption.outerHeight(true);
				scroll        = self.$dropdown_content.scrollTop() || 0;
				y             = self.$activeOption.offset().top - self.$dropdown_content.offset().top + scroll;
				scroll_top    = y;
				scroll_bottom = y - height_menu + height_item;
	
				if (y + height_item > height_menu + scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_bottom}, animate ? self.settings.scrollDuration : 0);
				} else if (y < scroll) {
					self.$dropdown_content.stop().animate({scrollTop: scroll_top}, animate ? self.settings.scrollDuration : 0);
				}
	
			}
		},
	
		/**
		 * Selects all items (CTRL + A).
		 */
		selectAll: function() {
			var self = this;
			if (self.settings.mode === 'single') return;
	
			self.$activeItems = Array.prototype.slice.apply(self.$control.children(':not(input)').addClass('active'));
			if (self.$activeItems.length) {
				self.hideInput();
				self.close();
			}
			self.focus();
		},
	
		/**
		 * Hides the input element out of view, while
		 * retaining its focus.
		 */
		hideInput: function() {
			var self = this;
	
			self.setTextboxValue('');
			self.$control_input.css({opacity: 0, position: 'absolute', left: self.rtl ? 10000 : -10000});
			self.isInputHidden = true;
		},
	
		/**
		 * Restores input visibility.
		 */
		showInput: function() {
			this.$control_input.css({opacity: 1, position: 'relative', left: 0});
			this.isInputHidden = false;
		},
	
		/**
		 * Gives the control focus.
		 */
		focus: function() {
			var self = this;
			if (self.isDisabled) return;
	
			self.ignoreFocus = true;
			self.$control_input[0].focus();
			window.setTimeout(function() {
				self.ignoreFocus = false;
				self.onFocus();
			}, 0);
		},
	
		/**
		 * Forces the control out of focus.
		 *
		 * @param {Element} dest
		 */
		blur: function(dest) {
			this.$control_input[0].blur();
			this.onBlur(null, dest);
		},
	
		/**
		 * Returns a function that scores an object
		 * to show how good of a match it is to the
		 * provided query.
		 *
		 * @param {string} query
		 * @param {object} options
		 * @return {function}
		 */
		getScoreFunction: function(query) {
			return this.sifter.getScoreFunction(query, this.getSearchOptions());
		},
	
		/**
		 * Returns search options for sifter (the system
		 * for scoring and sorting results).
		 *
		 * @see https://github.com/brianreavis/sifter.js
		 * @return {object}
		 */
		getSearchOptions: function() {
			var settings = this.settings;
			var sort = settings.sortField;
			if (typeof sort === 'string') {
				sort = [{field: sort}];
			}
	
			return {
				fields      : settings.searchField,
				conjunction : settings.searchConjunction,
				sort        : sort
			};
		},
	
		/**
		 * Searches through available options and returns
		 * a sorted array of matches.
		 *
		 * Returns an object containing:
		 *
		 *   - query {string}
		 *   - tokens {array}
		 *   - total {int}
		 *   - items {array}
		 *
		 * @param {string} query
		 * @returns {object}
		 */
		search: function(query) {
			var i, value, score, result, calculateScore;
			var self     = this;
			var settings = self.settings;
			var options  = this.getSearchOptions();
	
			// validate user-provided result scoring function
			if (settings.score) {
				calculateScore = self.settings.score.apply(this, [query]);
				if (typeof calculateScore !== 'function') {
					throw new Error('Selectize "score" setting must be a function that returns a function');
				}
			}
	
			// perform search
			if (query !== self.lastQuery) {
				self.lastQuery = query;
				result = self.sifter.search(query, $.extend(options, {score: calculateScore}));
				self.currentResults = result;
			} else {
				result = $.extend(true, {}, self.currentResults);
			}
	
			// filter out selected items
			if (settings.hideSelected) {
				for (i = result.items.length - 1; i >= 0; i--) {
					if (self.items.indexOf(hash_key(result.items[i].id)) !== -1) {
						result.items.splice(i, 1);
					}
				}
			}
	
			return result;
		},
	
		/**
		 * Refreshes the list of available options shown
		 * in the autocomplete dropdown menu.
		 *
		 * @param {boolean} triggerDropdown
		 */
		refreshOptions: function(triggerDropdown) {
			var i, j, k, n, groups, groups_order, option, option_html, optgroup, optgroups, html, html_children, has_create_option;
			var $active, $active_before, $create;
	
			if (typeof triggerDropdown === 'undefined') {
				triggerDropdown = true;
			}
	
			var self              = this;
			var query             = $.trim(self.$control_input.val());
			var results           = self.search(query);
			var $dropdown_content = self.$dropdown_content;
			var active_before     = self.$activeOption && hash_key(self.$activeOption.attr('data-value'));
	
			// build markup
			n = results.items.length;
			if (typeof self.settings.maxOptions === 'number') {
				n = Math.min(n, self.settings.maxOptions);
			}
	
			// render and group available options individually
			groups = {};
			groups_order = [];
	
			for (i = 0; i < n; i++) {
				option      = self.options[results.items[i].id];
				option_html = self.render('option', option);
				optgroup    = option[self.settings.optgroupField] || '';
				optgroups   = $.isArray(optgroup) ? optgroup : [optgroup];
	
				for (j = 0, k = optgroups && optgroups.length; j < k; j++) {
					optgroup = optgroups[j];
					if (!self.optgroups.hasOwnProperty(optgroup)) {
						optgroup = '';
					}
					if (!groups.hasOwnProperty(optgroup)) {
						groups[optgroup] = [];
						groups_order.push(optgroup);
					}
					groups[optgroup].push(option_html);
				}
			}
	
			// sort optgroups
			if (this.settings.lockOptgroupOrder) {
				groups_order.sort(function(a, b) {
					var a_order = self.optgroups[a].$order || 0;
					var b_order = self.optgroups[b].$order || 0;
					return a_order - b_order;
				});
			}
	
			// render optgroup headers & join groups
			html = [];
			for (i = 0, n = groups_order.length; i < n; i++) {
				optgroup = groups_order[i];
				if (self.optgroups.hasOwnProperty(optgroup) && groups[optgroup].length) {
					// render the optgroup header and options within it,
					// then pass it to the wrapper template
					html_children = self.render('optgroup_header', self.optgroups[optgroup]) || '';
					html_children += groups[optgroup].join('');
					html.push(self.render('optgroup', $.extend({}, self.optgroups[optgroup], {
						html: html_children
					})));
				} else {
					html.push(groups[optgroup].join(''));
				}
			}
	
			$dropdown_content.html(html.join(''));
	
			// highlight matching terms inline
			if (self.settings.highlight && results.query.length && results.tokens.length) {
				for (i = 0, n = results.tokens.length; i < n; i++) {
					highlight($dropdown_content, results.tokens[i].regex);
				}
			}
	
			// add "selected" class to selected options
			if (!self.settings.hideSelected) {
				for (i = 0, n = self.items.length; i < n; i++) {
					self.getOption(self.items[i]).addClass('selected');
				}
			}
	
			// add create option
			has_create_option = self.canCreate(query);
			if (has_create_option) {
				$dropdown_content.prepend(self.render('option_create', {input: query}));
				$create = $($dropdown_content[0].childNodes[0]);
			}
	
			// activate
			self.hasOptions = results.items.length > 0 || has_create_option;
			if (self.hasOptions) {
				if (results.items.length > 0) {
					$active_before = active_before && self.getOption(active_before);
					if ($active_before && $active_before.length) {
						$active = $active_before;
					} else if (self.settings.mode === 'single' && self.items.length) {
						$active = self.getOption(self.items[0]);
					}
					if (!$active || !$active.length) {
						if ($create && !self.settings.addPrecedence) {
							$active = self.getAdjacentOption($create, 1);
						} else {
							$active = $dropdown_content.find('[data-selectable]:first');
						}
					}
				} else {
					$active = $create;
				}
				self.setActiveOption($active);
				if (triggerDropdown && !self.isOpen) { self.open(); }
			} else {
				self.setActiveOption(null);
				if (triggerDropdown && self.isOpen) { self.close(); }
			}
		},
	
		/**
		 * Adds an available option. If it already exists,
		 * nothing will happen. Note: this does not refresh
		 * the options list dropdown (use `refreshOptions`
		 * for that).
		 *
		 * Usage:
		 *
		 *   this.addOption(data)
		 *
		 * @param {object|array} data
		 */
		addOption: function(data) {
			var i, n, value, self = this;
	
			if ($.isArray(data)) {
				for (i = 0, n = data.length; i < n; i++) {
					self.addOption(data[i]);
				}
				return;
			}
	
			if (value = self.registerOption(data)) {
				self.userOptions[value] = true;
				self.lastQuery = null;
				self.trigger('option_add', value, data);
			}
		},
	
		/**
		 * Registers an option to the pool of options.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */
		registerOption: function(data) {
			var key = hash_key(data[this.settings.valueField]);
			if (!key || this.options.hasOwnProperty(key)) return false;
			data.$order = data.$order || ++this.order;
			this.options[key] = data;
			return key;
		},
	
		/**
		 * Registers an option group to the pool of option groups.
		 *
		 * @param {object} data
		 * @return {boolean|string}
		 */
		registerOptionGroup: function(data) {
			var key = hash_key(data[this.settings.optgroupValueField]);
			if (!key) return false;
	
			data.$order = data.$order || ++this.order;
			this.optgroups[key] = data;
			return key;
		},
	
		/**
		 * Registers a new optgroup for options
		 * to be bucketed into.
		 *
		 * @param {string} id
		 * @param {object} data
		 */
		addOptionGroup: function(id, data) {
			data[this.settings.optgroupValueField] = id;
			if (id = this.registerOptionGroup(data)) {
				this.trigger('optgroup_add', id, data);
			}
		},
	
		/**
		 * Removes an existing option group.
		 *
		 * @param {string} id
		 */
		removeOptionGroup: function(id) {
			if (this.optgroups.hasOwnProperty(id)) {
				delete this.optgroups[id];
				this.renderCache = {};
				this.trigger('optgroup_remove', id);
			}
		},
	
		/**
		 * Clears all existing option groups.
		 */
		clearOptionGroups: function() {
			this.optgroups = {};
			this.renderCache = {};
			this.trigger('optgroup_clear');
		},
	
		/**
		 * Updates an option available for selection. If
		 * it is visible in the selected items or options
		 * dropdown, it will be re-rendered automatically.
		 *
		 * @param {string} value
		 * @param {object} data
		 */
		updateOption: function(value, data) {
			var self = this;
			var $item, $item_new;
			var value_new, index_item, cache_items, cache_options, order_old;
	
			value     = hash_key(value);
			value_new = hash_key(data[self.settings.valueField]);
	
			// sanity checks
			if (value === null) return;
			if (!self.options.hasOwnProperty(value)) return;
			if (typeof value_new !== 'string') throw new Error('Value must be set in option data');
	
			order_old = self.options[value].$order;
	
			// update references
			if (value_new !== value) {
				delete self.options[value];
				index_item = self.items.indexOf(value);
				if (index_item !== -1) {
					self.items.splice(index_item, 1, value_new);
				}
			}
			data.$order = data.$order || order_old;
			self.options[value_new] = data;
	
			// invalidate render cache
			cache_items = self.renderCache['item'];
			cache_options = self.renderCache['option'];
	
			if (cache_items) {
				delete cache_items[value];
				delete cache_items[value_new];
			}
			if (cache_options) {
				delete cache_options[value];
				delete cache_options[value_new];
			}
	
			// update the item if it's selected
			if (self.items.indexOf(value_new) !== -1) {
				$item = self.getItem(value);
				$item_new = $(self.render('item', data));
				if ($item.hasClass('active')) $item_new.addClass('active');
				$item.replaceWith($item_new);
			}
	
			// invalidate last query because we might have updated the sortField
			self.lastQuery = null;
	
			// update dropdown contents
			if (self.isOpen) {
				self.refreshOptions(false);
			}
		},
	
		/**
		 * Removes a single option.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		removeOption: function(value, silent) {
			var self = this;
			value = hash_key(value);
	
			var cache_items = self.renderCache['item'];
			var cache_options = self.renderCache['option'];
			if (cache_items) delete cache_items[value];
			if (cache_options) delete cache_options[value];
	
			delete self.userOptions[value];
			delete self.options[value];
			self.lastQuery = null;
			self.trigger('option_remove', value);
			self.removeItem(value, silent);
		},
	
		/**
		 * Clears all options.
		 */
		clearOptions: function() {
			var self = this;
	
			self.loadedSearches = {};
			self.userOptions = {};
			self.renderCache = {};
			self.options = self.sifter.items = {};
			self.lastQuery = null;
			self.trigger('option_clear');
			self.clear();
		},
	
		/**
		 * Returns the jQuery element of the option
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getOption: function(value) {
			return this.getElementWithValue(value, this.$dropdown_content.find('[data-selectable]'));
		},
	
		/**
		 * Returns the jQuery element of the next or
		 * previous selectable option.
		 *
		 * @param {object} $option
		 * @param {int} direction  can be 1 for next or -1 for previous
		 * @return {object}
		 */
		getAdjacentOption: function($option, direction) {
			var $options = this.$dropdown.find('[data-selectable]');
			var index    = $options.index($option) + direction;
	
			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		},
	
		/**
		 * Finds the first element with a "data-value" attribute
		 * that matches the given value.
		 *
		 * @param {mixed} value
		 * @param {object} $els
		 * @return {object}
		 */
		getElementWithValue: function(value, $els) {
			value = hash_key(value);
	
			if (typeof value !== 'undefined' && value !== null) {
				for (var i = 0, n = $els.length; i < n; i++) {
					if ($els[i].getAttribute('data-value') === value) {
						return $($els[i]);
					}
				}
			}
	
			return $();
		},
	
		/**
		 * Returns the jQuery element of the item
		 * matching the given value.
		 *
		 * @param {string} value
		 * @returns {object}
		 */
		getItem: function(value) {
			return this.getElementWithValue(value, this.$control.children());
		},
	
		/**
		 * "Selects" multiple items at once. Adds them to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		addItems: function(values, silent) {
			var items = $.isArray(values) ? values : [values];
			for (var i = 0, n = items.length; i < n; i++) {
				this.isPending = (i < n - 1);
				this.addItem(items[i], silent);
			}
		},
	
		/**
		 * "Selects" an item. Adds it to the list
		 * at the current caret position.
		 *
		 * @param {string} value
		 * @param {boolean} silent
		 */
		addItem: function(value, silent) {
			var events = silent ? [] : ['change'];
	
			debounce_events(this, events, function() {
				var $item, $option, $options;
				var self = this;
				var inputMode = self.settings.mode;
				var i, active, value_next, wasFull;
				value = hash_key(value);
	
				if (self.items.indexOf(value) !== -1) {
					if (inputMode === 'single') self.close();
					return;
				}
	
				if (!self.options.hasOwnProperty(value)) return;
				if (inputMode === 'single') self.clear(silent);
				if (inputMode === 'multi' && self.isFull()) return;
	
				$item = $(self.render('item', self.options[value]));
				wasFull = self.isFull();
				self.items.splice(self.caretPos, 0, value);
				self.insertAtCaret($item);
				if (!self.isPending || (!wasFull && self.isFull())) {
					self.refreshState();
				}
	
				if (self.isSetup) {
					$options = self.$dropdown_content.find('[data-selectable]');
	
					// update menu / remove the option (if this is not one item being added as part of series)
					if (!self.isPending) {
						$option = self.getOption(value);
						value_next = self.getAdjacentOption($option, 1).attr('data-value');
						self.refreshOptions(self.isFocused && inputMode !== 'single');
						if (value_next) {
							self.setActiveOption(self.getOption(value_next));
						}
					}
	
					// hide the menu if the maximum number of items have been selected or no options are left
					if (!$options.length || self.isFull()) {
						self.close();
					} else {
						self.positionDropdown();
					}
	
					self.updatePlaceholder();
					self.trigger('item_add', value, $item);
					self.updateOriginalInput({silent: silent});
				}
			});
		},
	
		/**
		 * Removes the selected item matching
		 * the provided value.
		 *
		 * @param {string} value
		 */
		removeItem: function(value, silent) {
			var self = this;
			var $item, i, idx;
	
			$item = (typeof value === 'object') ? value : self.getItem(value);
			value = hash_key($item.attr('data-value'));
			i = self.items.indexOf(value);
	
			if (i !== -1) {
				$item.remove();
				if ($item.hasClass('active')) {
					idx = self.$activeItems.indexOf($item[0]);
					self.$activeItems.splice(idx, 1);
				}
	
				self.items.splice(i, 1);
				self.lastQuery = null;
				if (!self.settings.persist && self.userOptions.hasOwnProperty(value)) {
					self.removeOption(value, silent);
				}
	
				if (i < self.caretPos) {
					self.setCaret(self.caretPos - 1);
				}
	
				self.refreshState();
				self.updatePlaceholder();
				self.updateOriginalInput({silent: silent});
				self.positionDropdown();
				self.trigger('item_remove', value, $item);
			}
		},
	
		/**
		 * Invokes the `create` method provided in the
		 * selectize options that should provide the data
		 * for the new item, given the user input.
		 *
		 * Once this completes, it will be added
		 * to the item list.
		 *
		 * @param {string} value
		 * @param {boolean} [triggerDropdown]
		 * @param {function} [callback]
		 * @return {boolean}
		 */
		createItem: function(input, triggerDropdown) {
			var self  = this;
			var caret = self.caretPos;
			input = input || $.trim(self.$control_input.val() || '');
	
			var callback = arguments[arguments.length - 1];
			if (typeof callback !== 'function') callback = function() {};
	
			if (typeof triggerDropdown !== 'boolean') {
				triggerDropdown = true;
			}
	
			if (!self.canCreate(input)) {
				callback();
				return false;
			}
	
			self.lock();
	
			var setup = (typeof self.settings.create === 'function') ? this.settings.create : function(input) {
				var data = {};
				data[self.settings.labelField] = input;
				data[self.settings.valueField] = input;
				return data;
			};
	
			var create = once(function(data) {
				self.unlock();
	
				if (!data || typeof data !== 'object') return callback();
				var value = hash_key(data[self.settings.valueField]);
				if (typeof value !== 'string') return callback();
	
				self.setTextboxValue('');
				self.addOption(data);
				self.setCaret(caret);
				self.addItem(value);
				self.refreshOptions(triggerDropdown && self.settings.mode !== 'single');
				callback(data);
			});
	
			var output = setup.apply(this, [input, create]);
			if (typeof output !== 'undefined') {
				create(output);
			}
	
			return true;
		},
	
		/**
		 * Re-renders the selected item lists.
		 */
		refreshItems: function() {
			this.lastQuery = null;
	
			if (this.isSetup) {
				this.addItem(this.items);
			}
	
			this.refreshState();
			this.updateOriginalInput();
		},
	
		/**
		 * Updates all state-dependent attributes
		 * and CSS classes.
		 */
		refreshState: function() {
			var invalid, self = this;
			if (self.isRequired) {
				if (self.items.length) self.isInvalid = false;
				self.$control_input.prop('required', invalid);
			}
			self.refreshClasses();
		},
	
		/**
		 * Updates all state-dependent CSS classes.
		 */
		refreshClasses: function() {
			var self     = this;
			var isFull   = self.isFull();
			var isLocked = self.isLocked;
	
			self.$wrapper
				.toggleClass('rtl', self.rtl);
	
			self.$control
				.toggleClass('focus', self.isFocused)
				.toggleClass('disabled', self.isDisabled)
				.toggleClass('required', self.isRequired)
				.toggleClass('invalid', self.isInvalid)
				.toggleClass('locked', isLocked)
				.toggleClass('full', isFull).toggleClass('not-full', !isFull)
				.toggleClass('input-active', self.isFocused && !self.isInputHidden)
				.toggleClass('dropdown-active', self.isOpen)
				.toggleClass('has-options', !$.isEmptyObject(self.options))
				.toggleClass('has-items', self.items.length > 0);
	
			self.$control_input.data('grow', !isFull && !isLocked);
		},
	
		/**
		 * Determines whether or not more items can be added
		 * to the control without exceeding the user-defined maximum.
		 *
		 * @returns {boolean}
		 */
		isFull: function() {
			return this.settings.maxItems !== null && this.items.length >= this.settings.maxItems;
		},
	
		/**
		 * Refreshes the original <select> or <input>
		 * element to reflect the current state.
		 */
		updateOriginalInput: function(opts) {
			var i, n, options, label, self = this;
			opts = opts || {};
	
			if (self.tagType === TAG_SELECT) {
				options = [];
				for (i = 0, n = self.items.length; i < n; i++) {
					label = self.options[self.items[i]][self.settings.labelField] || '';
					options.push('<option value="' + escape_html(self.items[i]) + '" selected="selected">' + escape_html(label) + '</option>');
				}
				if (!options.length && !this.$input.attr('multiple')) {
					options.push('<option value="" selected="selected"></option>');
				}
				self.$input.html(options.join(''));
			} else {
				self.$input.val(self.getValue());
				self.$input.attr('value',self.$input.val());
			}
	
			if (self.isSetup) {
				if (!opts.silent) {
					self.trigger('change', self.$input.val());
				}
			}
		},
	
		/**
		 * Shows/hide the input placeholder depending
		 * on if there items in the list already.
		 */
		updatePlaceholder: function() {
			if (!this.settings.placeholder) return;
			var $input = this.$control_input;
	
			if (this.items.length) {
				$input.removeAttr('placeholder');
			} else {
				$input.attr('placeholder', this.settings.placeholder);
			}
			$input.triggerHandler('update', {force: true});
		},
	
		/**
		 * Shows the autocomplete dropdown containing
		 * the available options.
		 */
		open: function() {
			var self = this;
	
			if (self.isLocked || self.isOpen || (self.settings.mode === 'multi' && self.isFull())) return;
			self.focus();
			self.isOpen = true;
			self.refreshState();
			self.$dropdown.css({visibility: 'hidden', display: 'block'});
			self.positionDropdown();
			self.$dropdown.css({visibility: 'visible'});
			self.trigger('dropdown_open', self.$dropdown);
		},
	
		/**
		 * Closes the autocomplete dropdown menu.
		 */
		close: function() {
			var self = this;
			var trigger = self.isOpen;
	
			if (self.settings.mode === 'single' && self.items.length) {
				self.hideInput();
			}
	
			self.isOpen = false;
			self.$dropdown.hide();
			self.setActiveOption(null);
			self.refreshState();
	
			if (trigger) self.trigger('dropdown_close', self.$dropdown);
		},
	
		/**
		 * Calculates and applies the appropriate
		 * position of the dropdown.
		 */
		positionDropdown: function() {
			var $control = this.$control;
			var offset = this.settings.dropdownParent === 'body' ? $control.offset() : $control.position();
			offset.top += $control.outerHeight(true);
	
			this.$dropdown.css({
				width : $control.outerWidth(),
				top   : offset.top,
				left  : offset.left
			});
		},
	
		/**
		 * Resets / clears all selected items
		 * from the control.
		 *
		 * @param {boolean} silent
		 */
		clear: function(silent) {
			var self = this;
	
			if (!self.items.length) return;
			self.$control.children(':not(input)').remove();
			self.items = [];
			self.lastQuery = null;
			self.setCaret(0);
			self.setActiveItem(null);
			self.updatePlaceholder();
			self.updateOriginalInput({silent: silent});
			self.refreshState();
			self.showInput();
			self.trigger('clear');
		},
	
		/**
		 * A helper method for inserting an element
		 * at the current caret position.
		 *
		 * @param {object} $el
		 */
		insertAtCaret: function($el) {
			var caret = Math.min(this.caretPos, this.items.length);
			if (caret === 0) {
				this.$control.prepend($el);
			} else {
				$(this.$control[0].childNodes[caret]).before($el);
			}
			this.setCaret(caret + 1);
		},
	
		/**
		 * Removes the current selected item(s).
		 *
		 * @param {object} e (optional)
		 * @returns {boolean}
		 */
		deleteSelection: function(e) {
			var i, n, direction, selection, values, caret, option_select, $option_select, $tail;
			var self = this;
	
			direction = (e && e.keyCode === KEY_BACKSPACE) ? -1 : 1;
			selection = getSelection(self.$control_input[0]);
	
			if (self.$activeOption && !self.settings.hideSelected) {
				option_select = self.getAdjacentOption(self.$activeOption, -1).attr('data-value');
			}
	
			// determine items that will be removed
			values = [];
	
			if (self.$activeItems.length) {
				$tail = self.$control.children('.active:' + (direction > 0 ? 'last' : 'first'));
				caret = self.$control.children(':not(input)').index($tail);
				if (direction > 0) { caret++; }
	
				for (i = 0, n = self.$activeItems.length; i < n; i++) {
					values.push($(self.$activeItems[i]).attr('data-value'));
				}
				if (e) {
					e.preventDefault();
					e.stopPropagation();
				}
			} else if ((self.isFocused || self.settings.mode === 'single') && self.items.length) {
				if (direction < 0 && selection.start === 0 && selection.length === 0) {
					values.push(self.items[self.caretPos - 1]);
				} else if (direction > 0 && selection.start === self.$control_input.val().length) {
					values.push(self.items[self.caretPos]);
				}
			}
	
			// allow the callback to abort
			if (!values.length || (typeof self.settings.onDelete === 'function' && self.settings.onDelete.apply(self, [values]) === false)) {
				return false;
			}
	
			// perform removal
			if (typeof caret !== 'undefined') {
				self.setCaret(caret);
			}
			while (values.length) {
				self.removeItem(values.pop());
			}
	
			self.showInput();
			self.positionDropdown();
			self.refreshOptions(true);
	
			// select previous option
			if (option_select) {
				$option_select = self.getOption(option_select);
				if ($option_select.length) {
					self.setActiveOption($option_select);
				}
			}
	
			return true;
		},
	
		/**
		 * Selects the previous / next item (depending
		 * on the `direction` argument).
		 *
		 * > 0 - right
		 * < 0 - left
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceSelection: function(direction, e) {
			var tail, selection, idx, valueLength, cursorAtEdge, $tail;
			var self = this;
	
			if (direction === 0) return;
			if (self.rtl) direction *= -1;
	
			tail = direction > 0 ? 'last' : 'first';
			selection = getSelection(self.$control_input[0]);
	
			if (self.isFocused && !self.isInputHidden) {
				valueLength = self.$control_input.val().length;
				cursorAtEdge = direction < 0
					? selection.start === 0 && selection.length === 0
					: selection.start === valueLength;
	
				if (cursorAtEdge && !valueLength) {
					self.advanceCaret(direction, e);
				}
			} else {
				$tail = self.$control.children('.active:' + tail);
				if ($tail.length) {
					idx = self.$control.children(':not(input)').index($tail);
					self.setActiveItem(null);
					self.setCaret(direction > 0 ? idx + 1 : idx);
				}
			}
		},
	
		/**
		 * Moves the caret left / right.
		 *
		 * @param {int} direction
		 * @param {object} e (optional)
		 */
		advanceCaret: function(direction, e) {
			var self = this, fn, $adj;
	
			if (direction === 0) return;
	
			fn = direction > 0 ? 'next' : 'prev';
			if (self.isShiftDown) {
				$adj = self.$control_input[fn]();
				if ($adj.length) {
					self.hideInput();
					self.setActiveItem($adj);
					e && e.preventDefault();
				}
			} else {
				self.setCaret(self.caretPos + direction);
			}
		},
	
		/**
		 * Moves the caret to the specified index.
		 *
		 * @param {int} i
		 */
		setCaret: function(i) {
			var self = this;
	
			if (self.settings.mode === 'single') {
				i = self.items.length;
			} else {
				i = Math.max(0, Math.min(self.items.length, i));
			}
	
			if(!self.isPending) {
				// the input must be moved by leaving it in place and moving the
				// siblings, due to the fact that focus cannot be restored once lost
				// on mobile webkit devices
				var j, n, fn, $children, $child;
				$children = self.$control.children(':not(input)');
				for (j = 0, n = $children.length; j < n; j++) {
					$child = $($children[j]).detach();
					if (j <  i) {
						self.$control_input.before($child);
					} else {
						self.$control.append($child);
					}
				}
			}
	
			self.caretPos = i;
		},
	
		/**
		 * Disables user input on the control. Used while
		 * items are being asynchronously created.
		 */
		lock: function() {
			this.close();
			this.isLocked = true;
			this.refreshState();
		},
	
		/**
		 * Re-enables user input on the control.
		 */
		unlock: function() {
			this.isLocked = false;
			this.refreshState();
		},
	
		/**
		 * Disables user input on the control completely.
		 * While disabled, it cannot receive focus.
		 */
		disable: function() {
			var self = this;
			self.$input.prop('disabled', true);
			self.$control_input.prop('disabled', true).prop('tabindex', -1);
			self.isDisabled = true;
			self.lock();
		},
	
		/**
		 * Enables the control so that it can respond
		 * to focus and user input.
		 */
		enable: function() {
			var self = this;
			self.$input.prop('disabled', false);
			self.$control_input.prop('disabled', false).prop('tabindex', self.tabIndex);
			self.isDisabled = false;
			self.unlock();
		},
	
		/**
		 * Completely destroys the control and
		 * unbinds all event listeners so that it can
		 * be garbage collected.
		 */
		destroy: function() {
			var self = this;
			var eventNS = self.eventNS;
			var revertSettings = self.revertSettings;
	
			self.trigger('destroy');
			self.off();
			self.$wrapper.remove();
			self.$dropdown.remove();
	
			self.$input
				.html('')
				.append(revertSettings.$children)
				.removeAttr('tabindex')
				.removeClass('selectized')
				.attr({tabindex: revertSettings.tabindex})
				.show();
	
			self.$control_input.removeData('grow');
			self.$input.removeData('selectize');
	
			$(window).off(eventNS);
			$(document).off(eventNS);
			$(document.body).off(eventNS);
	
			delete self.$input[0].selectize;
		},
	
		/**
		 * A helper method for rendering "item" and
		 * "option" templates, given the data.
		 *
		 * @param {string} templateName
		 * @param {object} data
		 * @returns {string}
		 */
		render: function(templateName, data) {
			var value, id, label;
			var html = '';
			var cache = false;
			var self = this;
			var regex_tag = /^[\t \r\n]*<([a-z][a-z0-9\-_]*(?:\:[a-z][a-z0-9\-_]*)?)/i;
	
			if (templateName === 'option' || templateName === 'item') {
				value = hash_key(data[self.settings.valueField]);
				cache = !!value;
			}
	
			// pull markup from cache if it exists
			if (cache) {
				if (!isset(self.renderCache[templateName])) {
					self.renderCache[templateName] = {};
				}
				if (self.renderCache[templateName].hasOwnProperty(value)) {
					return self.renderCache[templateName][value];
				}
			}
	
			// render markup
			html = self.settings.render[templateName].apply(this, [data, escape_html]);
	
			// add mandatory attributes
			if (templateName === 'option' || templateName === 'option_create') {
				html = html.replace(regex_tag, '<$1 data-selectable');
			}
			if (templateName === 'optgroup') {
				id = data[self.settings.optgroupValueField] || '';
				html = html.replace(regex_tag, '<$1 data-group="' + escape_replace(escape_html(id)) + '"');
			}
			if (templateName === 'option' || templateName === 'item') {
				html = html.replace(regex_tag, '<$1 data-value="' + escape_replace(escape_html(value || '')) + '"');
			}
	
			// update cache
			if (cache) {
				self.renderCache[templateName][value] = html;
			}
	
			return html;
		},
	
		/**
		 * Clears the render cache for a template. If
		 * no template is given, clears all render
		 * caches.
		 *
		 * @param {string} templateName
		 */
		clearCache: function(templateName) {
			var self = this;
			if (typeof templateName === 'undefined') {
				self.renderCache = {};
			} else {
				delete self.renderCache[templateName];
			}
		},
	
		/**
		 * Determines whether or not to display the
		 * create item prompt, given a user input.
		 *
		 * @param {string} input
		 * @return {boolean}
		 */
		canCreate: function(input) {
			var self = this;
			if (!self.settings.create) return false;
			var filter = self.settings.createFilter;
			return input.length
				&& (typeof filter !== 'function' || filter.apply(self, [input]))
				&& (typeof filter !== 'string' || new RegExp(filter).test(input))
				&& (!(filter instanceof RegExp) || filter.test(input));
		}
	
	});
	
	
	Selectize.count = 0;
	Selectize.defaults = {
		options: [],
		optgroups: [],
	
		plugins: [],
		delimiter: ',',
		splitOn: null, // regexp or string for splitting up values from a paste command
		persist: true,
		diacritics: true,
		create: false,
		createOnBlur: false,
		createFilter: null,
		highlight: true,
		openOnFocus: true,
		maxOptions: 1000,
		maxItems: null,
		hideSelected: null,
		addPrecedence: false,
		selectOnTab: false,
		preload: false,
		allowEmptyOption: false,
		closeAfterSelect: false,
	
		scrollDuration: 60,
		loadThrottle: 300,
		loadingClass: 'loading',
	
		dataAttr: 'data-data',
		optgroupField: 'optgroup',
		valueField: 'value',
		labelField: 'text',
		optgroupLabelField: 'label',
		optgroupValueField: 'value',
		lockOptgroupOrder: false,
	
		sortField: '$order',
		searchField: ['text'],
		searchConjunction: 'and',
	
		mode: null,
		wrapperClass: 'selectize-control',
		inputClass: 'selectize-input',
		dropdownClass: 'selectize-dropdown',
		dropdownContentClass: 'selectize-dropdown-content',
	
		dropdownParent: null,
	
		copyClassesToDropdown: true,
	
		/*
		load                 : null, // function(query, callback) { ... }
		score                : null, // function(search) { ... }
		onInitialize         : null, // function() { ... }
		onChange             : null, // function(value) { ... }
		onItemAdd            : null, // function(value, $item) { ... }
		onItemRemove         : null, // function(value) { ... }
		onClear              : null, // function() { ... }
		onOptionAdd          : null, // function(value, data) { ... }
		onOptionRemove       : null, // function(value) { ... }
		onOptionClear        : null, // function() { ... }
		onOptionGroupAdd     : null, // function(id, data) { ... }
		onOptionGroupRemove  : null, // function(id) { ... }
		onOptionGroupClear   : null, // function() { ... }
		onDropdownOpen       : null, // function($dropdown) { ... }
		onDropdownClose      : null, // function($dropdown) { ... }
		onType               : null, // function(str) { ... }
		onDelete             : null, // function(values) { ... }
		*/
	
		render: {
			/*
			item: null,
			optgroup: null,
			optgroup_header: null,
			option: null,
			option_create: null
			*/
		}
	};
	
	
	$.fn.selectize = function(settings_user) {
		var defaults             = $.fn.selectize.defaults;
		var settings             = $.extend({}, defaults, settings_user);
		var attr_data            = settings.dataAttr;
		var field_label          = settings.labelField;
		var field_value          = settings.valueField;
		var field_optgroup       = settings.optgroupField;
		var field_optgroup_label = settings.optgroupLabelField;
		var field_optgroup_value = settings.optgroupValueField;
	
		/**
		 * Initializes selectize from a <input type="text"> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_textbox = function($input, settings_element) {
			var i, n, values, option;
	
			var data_raw = $input.attr(attr_data);
	
			if (!data_raw) {
				var value = $.trim($input.val() || '');
				if (!settings.allowEmptyOption && !value.length) return;
				values = value.split(settings.delimiter);
				for (i = 0, n = values.length; i < n; i++) {
					option = {};
					option[field_label] = values[i];
					option[field_value] = values[i];
					settings_element.options.push(option);
				}
				settings_element.items = values;
			} else {
				settings_element.options = JSON.parse(data_raw);
				for (i = 0, n = settings_element.options.length; i < n; i++) {
					settings_element.items.push(settings_element.options[i][field_value]);
				}
			}
		};
	
		/**
		 * Initializes selectize from a <select> element.
		 *
		 * @param {object} $input
		 * @param {object} settings_element
		 */
		var init_select = function($input, settings_element) {
			var i, n, tagName, $children, order = 0;
			var options = settings_element.options;
			var optionsMap = {};
	
			var readData = function($el) {
				var data = attr_data && $el.attr(attr_data);
				if (typeof data === 'string' && data.length) {
					return JSON.parse(data);
				}
				return null;
			};
	
			var addOption = function($option, group) {
				$option = $($option);
	
				var value = hash_key($option.attr('value'));
				if (!value && !settings.allowEmptyOption) return;
	
				// if the option already exists, it's probably been
				// duplicated in another optgroup. in this case, push
				// the current group to the "optgroup" property on the
				// existing option so that it's rendered in both places.
				if (optionsMap.hasOwnProperty(value)) {
					if (group) {
						var arr = optionsMap[value][field_optgroup];
						if (!arr) {
							optionsMap[value][field_optgroup] = group;
						} else if (!$.isArray(arr)) {
							optionsMap[value][field_optgroup] = [arr, group];
						} else {
							arr.push(group);
						}
					}
					return;
				}
	
				var option             = readData($option) || {};
				option[field_label]    = option[field_label] || $option.text();
				option[field_value]    = option[field_value] || value;
				option[field_optgroup] = option[field_optgroup] || group;
	
				optionsMap[value] = option;
				options.push(option);
	
				if ($option.is(':selected')) {
					settings_element.items.push(value);
				}
			};
	
			var addGroup = function($optgroup) {
				var i, n, id, optgroup, $options;
	
				$optgroup = $($optgroup);
				id = $optgroup.attr('label');
	
				if (id) {
					optgroup = readData($optgroup) || {};
					optgroup[field_optgroup_label] = id;
					optgroup[field_optgroup_value] = id;
					settings_element.optgroups.push(optgroup);
				}
	
				$options = $('option', $optgroup);
				for (i = 0, n = $options.length; i < n; i++) {
					addOption($options[i], id);
				}
			};
	
			settings_element.maxItems = $input.attr('multiple') ? null : 1;
	
			$children = $input.children();
			for (i = 0, n = $children.length; i < n; i++) {
				tagName = $children[i].tagName.toLowerCase();
				if (tagName === 'optgroup') {
					addGroup($children[i]);
				} else if (tagName === 'option') {
					addOption($children[i]);
				}
			}
		};
	
		return this.each(function() {
			if (this.selectize) return;
	
			var instance;
			var $input = $(this);
			var tag_name = this.tagName.toLowerCase();
			var placeholder = $input.attr('placeholder') || $input.attr('data-placeholder');
			if (!placeholder && !settings.allowEmptyOption) {
				placeholder = $input.children('option[value=""]').text();
			}
	
			var settings_element = {
				'placeholder' : placeholder,
				'options'     : [],
				'optgroups'   : [],
				'items'       : []
			};
	
			if (tag_name === 'select') {
				init_select($input, settings_element);
			} else {
				init_textbox($input, settings_element);
			}
	
			instance = new Selectize($input, $.extend(true, {}, defaults, settings_element, settings_user));
		});
	};
	
	$.fn.selectize.defaults = Selectize.defaults;
	$.fn.selectize.support = {
		validity: SUPPORTS_VALIDITY_API
	};
	
	
	Selectize.define('drag_drop', function(options) {
		if (!$.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
		if (this.settings.mode !== 'multi') return;
		var self = this;
	
		self.lock = (function() {
			var original = self.lock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.disable();
				return original.apply(self, arguments);
			};
		})();
	
		self.unlock = (function() {
			var original = self.unlock;
			return function() {
				var sortable = self.$control.data('sortable');
				if (sortable) sortable.enable();
				return original.apply(self, arguments);
			};
		})();
	
		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(this, arguments);
	
				var $control = self.$control.sortable({
					items: '[data-value]',
					forcePlaceholderSize: true,
					disabled: self.isLocked,
					start: function(e, ui) {
						ui.placeholder.css('width', ui.helper.css('width'));
						$control.css({overflow: 'visible'});
					},
					stop: function() {
						$control.css({overflow: 'hidden'});
						var active = self.$activeItems ? self.$activeItems.slice() : null;
						var values = [];
						$control.children('[data-value]').each(function() {
							values.push($(this).attr('data-value'));
						});
						self.setValue(values);
						self.setActiveItem(active);
					}
				});
			};
		})();
	
	});
	
	Selectize.define('dropdown_header', function(options) {
		var self = this;
	
		options = $.extend({
			title         : 'Untitled',
			headerClass   : 'selectize-dropdown-header',
			titleRowClass : 'selectize-dropdown-header-title',
			labelClass    : 'selectize-dropdown-header-label',
			closeClass    : 'selectize-dropdown-header-close',
	
			html: function(data) {
				return (
					'<div class="' + data.headerClass + '">' +
						'<div class="' + data.titleRowClass + '">' +
							'<span class="' + data.labelClass + '">' + data.title + '</span>' +
							'<a href="javascript:void(0)" class="' + data.closeClass + '">&times;</a>' +
						'</div>' +
					'</div>'
				);
			}
		}, options);
	
		self.setup = (function() {
			var original = self.setup;
			return function() {
				original.apply(self, arguments);
				self.$dropdown_header = $(options.html(options));
				self.$dropdown.prepend(self.$dropdown_header);
			};
		})();
	
	});
	
	Selectize.define('optgroup_columns', function(options) {
		var self = this;
	
		options = $.extend({
			equalizeWidth  : true,
			equalizeHeight : true
		}, options);
	
		this.getAdjacentOption = function($option, direction) {
			var $options = $option.closest('[data-group]').find('[data-selectable]');
			var index    = $options.index($option) + direction;
	
			return index >= 0 && index < $options.length ? $options.eq(index) : $();
		};
	
		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, $option, $options, $optgroup;
	
				if (this.isOpen && (e.keyCode === KEY_LEFT || e.keyCode === KEY_RIGHT)) {
					self.ignoreHover = true;
					$optgroup = this.$activeOption.closest('[data-group]');
					index = $optgroup.find('[data-selectable]').index(this.$activeOption);
	
					if(e.keyCode === KEY_LEFT) {
						$optgroup = $optgroup.prev('[data-group]');
					} else {
						$optgroup = $optgroup.next('[data-group]');
					}
	
					$options = $optgroup.find('[data-selectable]');
					$option  = $options.eq(Math.min($options.length - 1, index));
					if ($option.length) {
						this.setActiveOption($option);
					}
					return;
				}
	
				return original.apply(this, arguments);
			};
		})();
	
		var getScrollbarWidth = function() {
			var div;
			var width = getScrollbarWidth.width;
			var doc = document;
	
			if (typeof width === 'undefined') {
				div = doc.createElement('div');
				div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
				div = div.firstChild;
				doc.body.appendChild(div);
				width = getScrollbarWidth.width = div.offsetWidth - div.clientWidth;
				doc.body.removeChild(div);
			}
			return width;
		};
	
		var equalizeSizes = function() {
			var i, n, height_max, width, width_last, width_parent, $optgroups;
	
			$optgroups = $('[data-group]', self.$dropdown_content);
			n = $optgroups.length;
			if (!n || !self.$dropdown_content.width()) return;
	
			if (options.equalizeHeight) {
				height_max = 0;
				for (i = 0; i < n; i++) {
					height_max = Math.max(height_max, $optgroups.eq(i).height());
				}
				$optgroups.css({height: height_max});
			}
	
			if (options.equalizeWidth) {
				width_parent = self.$dropdown_content.innerWidth() - getScrollbarWidth();
				width = Math.round(width_parent / n);
				$optgroups.css({width: width});
				if (n > 1) {
					width_last = width_parent - width * (n - 1);
					$optgroups.eq(n - 1).css({width: width_last});
				}
			}
		};
	
		if (options.equalizeHeight || options.equalizeWidth) {
			hook.after(this, 'positionDropdown', equalizeSizes);
			hook.after(this, 'refreshOptions', equalizeSizes);
		}
	
	
	});
	
	Selectize.define('remove_button', function(options) {
		if (this.settings.mode === 'single') return;
	
		options = $.extend({
			label     : '&times;',
			title     : 'Remove',
			className : 'remove',
			append    : true
		}, options);
	
		var self = this;
		var html = '<a href="javascript:void(0)" class="' + options.className + '" tabindex="-1" title="' + escape_html(options.title) + '">' + options.label + '</a>';
	
		/**
		 * Appends an element as a child (with raw HTML).
		 *
		 * @param {string} html_container
		 * @param {string} html_element
		 * @return {string}
		 */
		var append = function(html_container, html_element) {
			var pos = html_container.search(/(<\/[^>]+>\s*)$/);
			return html_container.substring(0, pos) + html_element + html_container.substring(pos);
		};
	
		this.setup = (function() {
			var original = self.setup;
			return function() {
				// override the item rendering method to add the button to each
				if (options.append) {
					var render_item = self.settings.render.item;
					self.settings.render.item = function(data) {
						return append(render_item.apply(this, arguments), html);
					};
				}
	
				original.apply(this, arguments);
	
				// add event listener
				this.$control.on('click', '.' + options.className, function(e) {
					e.preventDefault();
					if (self.isLocked) return;
	
					var $item = $(e.currentTarget).parent();
					self.setActiveItem($item);
					if (self.deleteSelection()) {
						self.setCaret(self.items.length);
					}
				});
	
			};
		})();
	
	});
	
	Selectize.define('restore_on_backspace', function(options) {
		var self = this;
	
		options.text = options.text || function(option) {
			return option[this.settings.labelField];
		};
	
		this.onKeyDown = (function() {
			var original = self.onKeyDown;
			return function(e) {
				var index, option;
				if (e.keyCode === KEY_BACKSPACE && this.$control_input.val() === '' && !this.$activeItems.length) {
					index = this.caretPos - 1;
					if (index >= 0 && index < this.items.length) {
						option = this.options[this.items[index]];
						if (this.deleteSelection(e)) {
							this.setTextboxValue(options.text.apply(this, [option]));
							this.refreshOptions(true);
						}
						e.preventDefault();
						return;
					}
				}
				return original.apply(this, arguments);
			};
		})();
	});
	

	return Selectize;
}));;/*! t3 v 1.5.1*/
/*!
Copyright 2015 Box, Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
!function(t){var e={};if(e.EventTarget=function(){"use strict";function t(){this._handlers={}}return t.prototype={constructor:t,on:function(t,e){var n,r,o=this._handlers[t];for("undefined"==typeof o&&(o=this._handlers[t]=[]),n=0,r=o.length;r>n;n++)if(o[n]===e)return;o.push(e)},fire:function(t,e){var n,r,o,i={type:t,data:e};if(n=this._handlers[i.type],n instanceof Array)for(n=n.concat(),r=0,o=n.length;o>r;r++)n[r].call(this,i)},off:function(t,e){var n,r,o=this._handlers[t];if(o instanceof Array)for(n=0,r=o.length;r>n;n++)if(o[n]===e){o.splice(n,1);break}}},t}(),e.JQueryDOM=function(){"use strict";return{type:"jquery",query:function(t,e){return $(t).find(e)[0]||null},queryAll:function(t,e){return $.makeArray($(t).find(e))},on:function(t,e,n){$(t).on(e,n)},off:function(t,e,n){$(t).off(e,n)}}}(),e.DOM=e.JQueryDOM,e.DOMEventDelegate=function(){"use strict";function t(t){return t&&t.hasAttribute("data-module")}function n(t){return t&&t.hasAttribute("data-type")}function r(e){for(var r=n(e);!r&&e&&!t(e);)e=e.parentNode,r=n(e);return r?e:null}function o(t,e,n){var r,o;for(r=0;r<a.length;r++)o=a[r],t["on"+o]&&e.call(n,o)}function i(t,e){this.element=t,this._handler=e,this._boundHandler={},this._attached=!1}var a=["click","mouseover","mouseout","mousedown","mouseup","mouseenter","mouseleave","keydown","keyup","submit","change","contextmenu","dblclick","input","focusin","focusout"];return i.prototype={constructor:i,_handleEvent:function(t){var e=r(t.target),n=e?e.getAttribute("data-type"):"";this._handler["on"+t.type](t,e,n)},attachEvents:function(){this._attached||(o(this._handler,function(t){function n(){r._handleEvent.apply(r,arguments)}var r=this;e.DOM.on(this.element,t,n),this._boundHandler[t]=n},this),this._attached=!0)},detachEvents:function(){o(this._handler,function(t){e.DOM.off(this.element,t,this._boundHandler[t])},this)}},i}(),e.Context=function(){"use strict";function t(t,e){this.application=t,this.element=e}return t.prototype={broadcast:function(t,e){this.application.broadcast(t,e)},getService:function(t){return this.application.getService(t)},getConfig:function(t){return this.application.getModuleConfig(this.element,t)},getGlobal:function(t){return this.application.getGlobal(t)},getGlobalConfig:function(t){return this.application.getGlobalConfig(t)},reportError:function(t){this.application.reportError(t)},getElement:function(){return this.element}},t}(),e.Application=function(){"use strict";function n(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function r(t,e){return function(){return t.apply(e,arguments)}}function o(t,e){for(var n=0,r=t.length;r>n;n++)if(t[n]===e)return n;return-1}function i(){m={},b={},w={},E=[],x={},A={},_=!1;for(var t=0;t<D.length;t++)delete C[D[t]],delete e.Context.prototype[D[t]];D=[]}function a(t){for(var e=0,n=E.length;n>e;e++)if(E[e]===t)return!0;return!1}function u(t){if(m.debug)throw t;C.fire("error",{exception:t})}function s(t,e){var n,r;for(n in t)r=t[n],"function"==typeof r&&(t[n]=function(t,n){return function(){var r=e+"."+t+"() - ";try{return n.apply(this,arguments)}catch(o){o.methodName=t,o.objectName=e,o.name=r+o.name,o.message=r+o.message,u(o)}}}(n,r))}function c(t){var e=t.getAttribute("data-module");return e?e.split(" ")[0]:""}function f(t,e){"function"==typeof t[e]&&t[e].apply(t,Array.prototype.slice.call(arguments,2))}function l(t){var e=w[t];return e?a(t)?(u(new ReferenceError("Circular service dependency: "+E.join(" -> ")+" -> "+t)),null):(E.push(t),e.instance||(e.instance=e.creator(C)),E.pop(),e.instance):null}function h(t){var e,n,r,o,i=[];for(n=t.instance.behaviors||[],e=0;e<n.length;e++)"behaviorInstances"in t||(t.behaviorInstances={}),o=t.behaviorInstances,r=x[n[e]],r?(o[n[e]]||(o[n[e]]=r.creator(t.context)),i.push(o[n[e]])):u(new Error('Behavior "'+n[e]+'" not found'));return i}function d(t,n,r){var o=new e.DOMEventDelegate(n,r);t.push(o),o.attachEvents()}function p(t){var e=t.eventDelegates,n=h(t);d(e,t.element,t.instance);for(var r=0;r<n.length;r++)d(e,t.element,n[r])}function g(t){for(var e=t.eventDelegates,n=0;n<e.length;n++)e[n].detachEvents();t.eventDelegates=[]}function v(t){return A[t.id]}var y="[data-module]",m={},b={},E=[],w={},x={},A={},D=[],_=!1,C=new e.EventTarget;return n(C,{init:function(t){return n(m,t||{}),this.startAll(document.documentElement),this.fire("init"),_=!0,this},destroy:function(){return this.stopAll(document.documentElement),i(),this},isStarted:function(t){var e=v(t);return"object"==typeof e},start:function(t){var n,r,o,i=c(t),a=b[i];if(!a)return u(new Error('Module type "'+i+'" is not defined.')),this;if(!this.isStarted(t)){t.id||(t.id="mod-"+i+"-"+a.counter),a.counter++,r=new e.Context(this,t),o=a.creator(r),m.debug||s(o,i),n={moduleName:i,instance:o,context:r,element:t,eventDelegates:[]},p(n),A[t.id]=n,f(n.instance,"init");for(var l,d=h(n),g=0,v=d.length;v>g;g++)l=d[g],f(l,"init")}return this},stop:function(t){var e=v(t);if(e){g(e);for(var n,r=h(e),o=r.length-1;o>=0;o--)n=r[o],f(n,"destroy");f(e.instance,"destroy"),delete A[t.id]}else if(m.debug)return u(new Error("Unable to stop module associated with element: "+t.id)),this;return this},startAll:function(t){for(var n=e.DOM.queryAll(t,y),r=0,o=n.length;o>r;r++)this.start(n[r]);return this},stopAll:function(t){for(var n=e.DOM.queryAll(t,y),r=0,o=n.length;o>r;r++)this.stop(n[r]);return this},addModule:function(t,e){return"undefined"!=typeof b[t]?(u(new Error("Module "+t+" has already been added.")),this):(b[t]={creator:e,counter:1},this)},getModuleConfig:function(t,n){var r,o=v(t);return o?(o.config||(r=e.DOM.query(t,'script[type="text/x-config"]'),r&&(o.config=JSON.parse(r.text))),o.config?"undefined"==typeof n?o.config:n in o.config?o.config[n]:null:null):null},addService:function(t,n,r){if("undefined"!=typeof w[t])return u(new Error("Service "+t+" has already been added.")),this;if(r=r||{},w[t]={creator:n,instance:null},r.exports){var o,i=r.exports.length;for(o=0;i>o;o++){var a=r.exports[o],s=function(e){return function(){var n=l(t);return n[e].apply(n,arguments)}}(a);if(a in this)return u(new Error(a+" already exists on Application object")),this;if(this[a]=s,a in e.Context.prototype)return u(new Error(a+" already exists on Context prototype")),this;e.Context.prototype[a]=s,D.push(a)}}return this},getService:l,addBehavior:function(t,e){return"undefined"!=typeof x[t]?(u(new Error("Behavior "+t+" has already been added.")),this):(x[t]={creator:e,instance:null},this)},broadcast:function(t,e){var n,i,a,u,s,c;for(i in A)if(A.hasOwnProperty(i)){for(c=[],a=A[i],-1!==o(a.instance.messages||[],t)&&c.push(r(a.instance.onmessage,a.instance)),s=h(a),n=0;n<s.length;n++)u=s[n],-1!==o(u.messages||[],t)&&c.push(r(u.onmessage,u));for(n=0;n<c.length;n++)c[n](t,e)}return this.fire("message",{message:t,messageData:e}),this},getGlobal:function(e){return e in t?t[e]:null},getGlobalConfig:function(t){return"undefined"==typeof t?m:t in m?m[t]:null},setGlobalConfig:function(t){return _?(u(new Error("Cannot set global configuration after application initialization")),this):(n(m,t),this)},reportError:u})}(),"function"==typeof define&&define.amd)define("t3",[],function(){return e});else if("object"==typeof module&&"object"==typeof module.exports)module.exports=e;else{t.Box=t.Box||{};for(var n in e)e.hasOwnProperty(n)&&(t.Box[n]=e[n])}}("undefined"!=typeof window?window:this);
//# sourceMappingURL=t3.min.js.map
;Box.Application.addBehavior('select', function(context) {
	'use strict';

	var $ = context.getGlobal('jQuery');

	return {
		init: function init(e) {
			var select = $(context.element).find('.select');

			if (select) {
				select.find('select').selectize({
					create: true,
					sortField: 'text',
				});
			}
		},
	};
});
;// (function count() {
// 	'use strict';
//
// 	function cmAddress($window) {
//
// 		function link($scope, element, attrs) {
// 			var map,
// 				marker,
// 				mapElement = $window.$('#address-map'),
// 				geocoder;
//
// 			map = new google.maps.Map(mapElement[0], {
// 				center: {lat: -34.397, lng: 150.644},
// 				zoom: 15,
// 				disableDefaultUI: true,
// 			});
//
// 			geocoder = new google.maps.Geocoder();
//
// 			$scope.location = {
// 				lat: '',
// 				lng: '',
// 			};
//
// 			function setCoords(lat, lng) {
// 				$scope.location = {
// 					lat: lat,
// 					lng: lng,
// 				};
//
// 				$scope.$apply();
// 			}
//
// 			$scope.setAddress = function set() {
// 				var marker;
//
// 				google.maps.event.trigger(map, 'resize');
//
// 				geocoder.geocode( { 'address': $scope.estates.address }, function address(results, status) {
// 					if (status === google.maps.GeocoderStatus.OK) {
// 						map.setCenter(results[0].geometry.location);
// 						marker = new google.maps.Marker({
// 							map: map,
// 							draggable: true,
// 							animation: google.maps.Animation.DROP,
// 							position: results[0].geometry.location,
// 						});
// 						marker.addListener('drag', function addListener(e) {
// 							setCoords(e.latLng.G, e.latLng.K);
// 						});
// 					} else {
// 						// Message
// 					}
// 				});
// 			};
// 		}
//
// 		return {
// 			restrict: 'A',
// 			link: link,
// 		};
// 	}
//
// 	cmAddress.$inject = ['$window'];
//
// 	angular
// 		.module('cm.widgets')
// 		.directive('cmAddress', cmAddress);
//
// }());
;// (function count() {
// 	'use strict';
//
// 	function cmFormSteps($window) {
//
// 		function link($scope, element, attrs) {
// 			$scope.step = 1;
//
// 			$scope.estates = {};
// 			$scope.config = {
// 				loading: false,
// 			};
//
// 			$scope.next = function next() {
// 				if ($scope.step < 4) {
// 					$scope.step = $scope.step + 1;
// 				}
// 			};
//
// 			$scope.prev = function next() {
//
// 				if ($scope.step > 1) {
// 					$scope.step = $scope.step - 1;
// 				}
// 			};
// 		}
//
// 		return {
// 			restrict: 'A',
// 			link: link,
// 		};
// 	}
//
// 	cmFormSteps.$inject = ['$window'];
//
// 	angular
// 		.module('cm.widgets')
// 		.directive('cmFormSteps', cmFormSteps);
//
// }());
;// (function count() {
// 	'use strict';
//
// 	function cmSelectMultiple($window) {
//
// 		function link($scope, element, attrs) {
// 			$(element[0]).selectize({
// 				persist: false,
// 				maxItems: null,
// 				valueField: 'email',
// 				labelField: 'name',
// 				searchField: ['name', 'email'],
// 				options: [
// 					{email: 'brian@thirdroute.com', name: 'Brian Reavis'},
// 					{email: 'nikola@tesla.com', name: 'Nikola Tesla'},
// 					{email: 'someone@gmail.com'},
// 				],
// 				render: {
// 					item: function render(option, escape) {
// 						return '<div>' +
// 							(option.name ? '<span class="name">' + escape(option.name) + '</span>' : '') +
// 							(option.email ? '<span class="email">' + escape(option.email) + '</span>' : '') +
// 						'</div>';
// 					},
// 					option: function select(option, escape) {
// 						var label = option.name || option.email;
// 						var caption = option.name ? option.email : null;
// 						return '<div>' +
// 							'<span class="label">' + escape(label) + '</span>' +
// 							(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
// 						'</div>';
// 					},
// 				},
// 			});
// 		}
//
// 		return {
// 			restrict: 'A',
// 			scope: true,
// 			link: link,
// 		};
// 	}
//
// 	cmSelectMultiple.$inject = ['$window'];
//
// 	angular
// 		.module('cm.widgets')
// 		.directive('cmSelectMultiple', cmSelectMultiple);
//
// }());
;// (function count() {
// 	'use strict';
//
// 	function cmSelectSingle($window) {
//
// 		function link($scope, element, attrs) {
// 			var model = element[0].dataset.model;
//
// 			function setModel(model, value) {
// 				if (model) $scope.estates[model] = value;
// 				$scope.$apply();
// 			}
//
// 			$(element[0]).selectize({
// 				create: true,
// 				onChange: function change(value) {
// 					setModel(model, value);
// 				},
// 			});
// 		}
//
// 		return {
// 			restrict: 'A',
// 			link: link,
// 		};
// 	}
//
// 	cmSelectSingle.$inject = ['$window'];
//
// 	angular
// 		.module('cm.widgets')
// 		.directive('cmSelectSingle', cmSelectSingle);
//
// }());
;// (function count() {
// 	'use strict';
//
// 	function cmUpload($window, $http, $timeout) {
//
// 		function link($scope, element, attrs) {
// 			var inputFile = angular.element(document.querySelector('#photos')),
// 				fileData;
//
// 			inputFile.bind('change', function change() {
// 				var fileReader,
// 					images = inputFile[0].files,
// 					thumbs = [],
// 					i = 0;
//
// 				$scope.config.loading = true;
//
// 				fileData = new FormData();
//
// 				function create(file) {
// 					return function create(e) {
// 						thumbs.push({
// 							url: e.target.result,
// 						});
// 					};
// 				}
//
// 				for (i; i < images.length; i++) {
// 					if (images[i]) {
// 						fileReader = new FileReader();
// 						if (/(\.|\/)(gif|jpe?g|png)$/i.test(images[i].type)) {
// 							fileReader.onload = create(images[i]);
// 							fileReader.readAsDataURL(images[i]);
// 							fileData.append('file', images[i]);
// 						}
// 					}
// 				}
//
// 				$scope.$apply();
//
// 				$timeout(function() {
// 					$scope.config.galleryloading = false;
// 					$scope.config.thumbnails = thumbs;
// 				}, 1000);
//
//
// 				// Select cover photos
// 				$scope.setCover = function set(e, cover) {
// 					var thumb = $('.js-thumb');
// 					thumb.removeClass('active');
// 					$(e.target).parent().addClass('active');
// 					$scope.estates.cover = cover;
// 					$scope.config.coverPreview = $scope.config.thumbnails[cover];
// 				};
// 			});
//
// 			// $http.patch('http://0.0.0.0:8081/estates/0007cede-e243-4a18-a629-6ad913c5a372/upload', fileData, {
// 			// 	withCredentials: false,
// 			// 	headers: {
// 			// 		'Content-Type': undefined,
// 			// 	},
// 			// 	transformRequest: angular.identity,
// 			// })
// 			// .success(function success(data) {
// 			// 	console.log('Success', data);
// 			// })
// 			// .error(function erros(data) {
// 			// 	console.log('Error', data);
// 			// });
// 		}
//
// 		return {
// 			restrict: 'A',
// 			link: link,
// 		};
// 	}
//
// 	cmUpload.$inject = ['$window', '$http', '$timeout'];
//
// 	angular
// 		.module('cm.widgets')
// 		.directive('cmUpload', cmUpload);
//
// }());
;// (function controller() {
// 	'use strict';
//
// 	function EstatesService($http, $q) {
// 		return {
// 			get: function get() {
// 				var defer = $q.defer();
//
// 				$http.get('http://0.0.0.0:8081/estates')
// 					.then(function success(result) {
// 						defer.resolve(result.data);
// 					}, function error(err) {
// 						defer.reject(err);
// 					});
//
// 				return defer.promise;
// 			},
// 			one: function get(id) {
// 				var defer = $q.defer();
//
// 				$http.get('http://0.0.0.0:8081/estates/' + id)
// 					.then(function success(result) {
// 						defer.resolve(result.data);
// 					}, function error(err) {
// 						defer.reject(err);
// 					});
//
// 				return defer.promise;
// 			},
// 		};
// 	}
//
// 	EstatesService.$inject = ['$http', '$q'];
//
// 	angular
// 		.module('cm.estates')
// 		.service('EstatesService', EstatesService);
// }());
;Box.Application.addService('render', function(application) {
	'use strict';

	var template = '<div class="small-3 columns" ng-repeat="estate in vm.estates | filter:searchEstate track by $index">' +
		'<a href="/estates/edit/{{ estate.ecmid }}" class="estate">' +
			'<div class="estate__image" style="background-image: url({{ estate.images.cover }})"></div>' +
			'<div class="estate__info">' +
				'<span class="neighborhood">{{ estate.keyDetails.neighborhood }}</span>' +
				'<span class="address">{{ estate.address }}</span>' +
				'<ul>' +
					'<li>' +
						'<span>Venda:</span>' +
						'<span>{{ estate.price | currency }}</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/square.svg" alt="" />' +
						'</span>' +
						'<span>{{ estate.keyDetails.area }} m²</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/bed.svg" alt="" />' +
						'</span>' +
						'<span>{{ estate.bedrooms }}</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/bath.svg" alt="" />' +
						'</span>' +
						'<span>{{ estate.bathrooms }}</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/park.svg" alt="" />' +
						'</span>' +
						'<span>{{ estate.garages }}</span>' +
					'</li>' +
				'</ul>' +
			'</div>' +
		'</a>' +
	'</div>';


	return {
		render: function render() {

		},
	};
});
;Box.Application.addModule('estates.filter', function(context) {
	'use strict';

	var _estates = context.getService('estates.service');
	var _render = context.getService('render.service');

	return {
		behaviors: ['select'],
		init: function init() {
			_estates.get().then(function(data) {
				_render.render(data);
			});
		},
	};
});
;Box.Application.addModule('header', function(context) {
	'use strict';
	// Globals
	var paperclip = context.getGlobal('paperclip');

	return {
		init: function init() {
			var t = '<h1>{{ title }}</h1>';
			var template = paperclip.template(t);
			var view;

			view = template.view({
				title: 'Marco',
			});

			view.render();

			setTimeout(function() {
				view.set('title', 'Marco99999');
			}, 3000);
		},
	};
});
;Box.Application.addService('estates.service', function(application) {
	'use strict';

	var $ = application.getGlobal('jQuery');

	return {
		get: function get() {
			return $.get('http://127.0.0.1:8081/estates');
		},
	};
});
;Box.Application.addService('render.service', function(application) {
	'use strict';

	var pc = application.getGlobal('paperclip');
	var estatesTemplate;

	estatesTemplate = '<repeat each="{{ estates }}" as="e">' +
	'<div class="small-3 columns">' +
		'<a href="/estates/edit/{{ e.ecmid }}" class="estate">' +
			'<div class="estate__image" style="background-image: url({{ e.images.cover }})"></div>' +
			'<div class="estate__info">' +
				'<span class="neighborhood">{{ e.keyDetails.neighborhood }}</span>' +
				'<span class="address">{{ e.address }}</span>' +
				'<ul>' +
					'<li>' +
						'<span>Venda:</span>' +
						'<span>{{ e.price }}</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/square.svg" alt="" />' +
						'</span>' +
						'<span>{{ e.keyDetails.area }} m²</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/bed.svg" alt="" />' +
						'</span>' +
						'<span>{{ e.bedrooms }}</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/bath.svg" alt="" />' +
						'</span>' +
						'<span>{{ e.bathrooms }}</span>' +
					'</li>' +
					'<li>' +
						'<span class="icon">' +
							'<img src="/public/assets/imgs/sprites/svg/park.svg" alt="" />' +
						'</span>' +
						'<span>{{ e.garages }}</span>' +
					'</li>' +
				'</ul>' +
			'</div>' +
		'</a>' +
	'</div>' +
	'</repeat>';


	return {
		render: function rndr(data) {
			var template = pc.template(estatesTemplate);
			var view;

			console.log(data);

			view = template.view({
				estates: data,
			});

			console.log(view);

			document.getElementById('estates').appendChild(view.render());
		},
	};
});
