/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
//# sourceMappingURL=jquery.min.map
/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
 * jQuery Easing v1.3.2 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/
(function(h){h.easing.jswing=h.easing.swing;h.extend(h.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return h.easing[h.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){return 1>
(a/=d/2)?b/2*a*a*a+c:b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,a,
c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(e,a,c,b,d){return-b*
(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;f||(f=.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*--a)*Math.sin(2*(a*d-e)*Math.PI/f))+c},easeOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==
a)return c;if(1==(a/=d))return c+b;f||(f=.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin(2*(a*d-e)*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;f||(f=.3*d*1.5);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return 1>a?-.5*g*Math.pow(2,10*--a)*Math.sin(2*(a*d-e)*Math.PI/f)+c:g*Math.pow(2,-10*--a)*Math.sin(2*(a*d-e)*Math.PI/f)*.5+b+c},easeInBack:function(e,a,c,b,d,f){void 0==
f&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-h.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/2.75?7.5625*b*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+.75)+c:a<2.5/2.75?b*(7.5625*
(a-=2.25/2.75)*a+.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+.984375)+c},easeInOutBounce:function(e,a,c,b,d){return a<d/2?.5*h.easing.easeInBounce(e,2*a,0,b,d)+c:.5*h.easing.easeOutBounce(e,2*a-d,0,b,d)+.5*b+c}})})(jQuery);

/*! jQuery Migrate v1.2.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute===void 0&&(jQuery.migrateMute=!0),function(e,t,n){function r(n){var r=t.console;i[n]||(i[n]=!0,e.migrateWarnings.push(n),r&&r.warn&&!e.migrateMute&&(r.warn("JQMIGRATE: "+n),e.migrateTrace&&r.trace&&r.trace()))}function a(t,a,i,o){if(Object.defineProperty)try{return Object.defineProperty(t,a,{configurable:!0,enumerable:!0,get:function(){return r(o),i},set:function(e){r(o),i=e}}),n}catch(s){}e._definePropertyBroken=!0,t[a]=i}var i={};e.migrateWarnings=[],!e.migrateMute&&t.console&&t.console.log&&t.console.log("JQMIGRATE: Logging is active"),e.migrateTrace===n&&(e.migrateTrace=!0),e.migrateReset=function(){i={},e.migrateWarnings.length=0},"BackCompat"===document.compatMode&&r("jQuery is not compatible with Quirks Mode");var o=e("<input/>",{size:1}).attr("size")&&e.attrFn,s=e.attr,u=e.attrHooks.value&&e.attrHooks.value.get||function(){return null},c=e.attrHooks.value&&e.attrHooks.value.set||function(){return n},l=/^(?:input|button)$/i,d=/^[238]$/,p=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,f=/^(?:checked|selected)$/i;a(e,"attrFn",o||{},"jQuery.attrFn is deprecated"),e.attr=function(t,a,i,u){var c=a.toLowerCase(),g=t&&t.nodeType;return u&&(4>s.length&&r("jQuery.fn.attr( props, pass ) is deprecated"),t&&!d.test(g)&&(o?a in o:e.isFunction(e.fn[a])))?e(t)[a](i):("type"===a&&i!==n&&l.test(t.nodeName)&&t.parentNode&&r("Can't change the 'type' of an input or button in IE 6/7/8"),!e.attrHooks[c]&&p.test(c)&&(e.attrHooks[c]={get:function(t,r){var a,i=e.prop(t,r);return i===!0||"boolean"!=typeof i&&(a=t.getAttributeNode(r))&&a.nodeValue!==!1?r.toLowerCase():n},set:function(t,n,r){var a;return n===!1?e.removeAttr(t,r):(a=e.propFix[r]||r,a in t&&(t[a]=!0),t.setAttribute(r,r.toLowerCase())),r}},f.test(c)&&r("jQuery.fn.attr('"+c+"') may use property instead of attribute")),s.call(e,t,a,i))},e.attrHooks.value={get:function(e,t){var n=(e.nodeName||"").toLowerCase();return"button"===n?u.apply(this,arguments):("input"!==n&&"option"!==n&&r("jQuery.fn.attr('value') no longer gets properties"),t in e?e.value:null)},set:function(e,t){var a=(e.nodeName||"").toLowerCase();return"button"===a?c.apply(this,arguments):("input"!==a&&"option"!==a&&r("jQuery.fn.attr('value', val) no longer sets properties"),e.value=t,n)}};var g,h,v=e.fn.init,m=e.parseJSON,y=/^([^<]*)(<[\w\W]+>)([^>]*)$/;e.fn.init=function(t,n,a){var i;return t&&"string"==typeof t&&!e.isPlainObject(n)&&(i=y.exec(e.trim(t)))&&i[0]&&("<"!==t.charAt(0)&&r("$(html) HTML strings must start with '<' character"),i[3]&&r("$(html) HTML text after last tag is ignored"),"#"===i[0].charAt(0)&&(r("HTML string cannot start with a '#' character"),e.error("JQMIGRATE: Invalid selector string (XSS)")),n&&n.context&&(n=n.context),e.parseHTML)?v.call(this,e.parseHTML(i[2],n,!0),n,a):v.apply(this,arguments)},e.fn.init.prototype=e.fn,e.parseJSON=function(e){return e||null===e?m.apply(this,arguments):(r("jQuery.parseJSON requires a valid JSON string"),null)},e.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||0>e.indexOf("compatible")&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e.browser||(g=e.uaMatch(navigator.userAgent),h={},g.browser&&(h[g.browser]=!0,h.version=g.version),h.chrome?h.webkit=!0:h.webkit&&(h.safari=!0),e.browser=h),a(e,"browser",e.browser,"jQuery.browser is deprecated"),e.sub=function(){function t(e,n){return new t.fn.init(e,n)}e.extend(!0,t,this),t.superclass=this,t.fn=t.prototype=this(),t.fn.constructor=t,t.sub=this.sub,t.fn.init=function(r,a){return a&&a instanceof e&&!(a instanceof t)&&(a=t(a)),e.fn.init.call(this,r,a,n)},t.fn.init.prototype=t.fn;var n=t(document);return r("jQuery.sub() is deprecated"),t},e.ajaxSetup({converters:{"text json":e.parseJSON}});var b=e.fn.data;e.fn.data=function(t){var a,i,o=this[0];return!o||"events"!==t||1!==arguments.length||(a=e.data(o,t),i=e._data(o,t),a!==n&&a!==i||i===n)?b.apply(this,arguments):(r("Use of jQuery.fn.data('events') is deprecated"),i)};var j=/\/(java|ecma)script/i,w=e.fn.andSelf||e.fn.addBack;e.fn.andSelf=function(){return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),w.apply(this,arguments)},e.clean||(e.clean=function(t,a,i,o){a=a||document,a=!a.nodeType&&a[0]||a,a=a.ownerDocument||a,r("jQuery.clean() is deprecated");var s,u,c,l,d=[];if(e.merge(d,e.buildFragment(t,a).childNodes),i)for(c=function(e){return!e.type||j.test(e.type)?o?o.push(e.parentNode?e.parentNode.removeChild(e):e):i.appendChild(e):n},s=0;null!=(u=d[s]);s++)e.nodeName(u,"script")&&c(u)||(i.appendChild(u),u.getElementsByTagName!==n&&(l=e.grep(e.merge([],u.getElementsByTagName("script")),c),d.splice.apply(d,[s+1,0].concat(l)),s+=l.length));return d});var Q=e.event.add,x=e.event.remove,k=e.event.trigger,N=e.fn.toggle,T=e.fn.live,M=e.fn.die,S="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",C=RegExp("\\b(?:"+S+")\\b"),H=/(?:^|\s)hover(\.\S+|)\b/,A=function(t){return"string"!=typeof t||e.event.special.hover?t:(H.test(t)&&r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),t&&t.replace(H,"mouseenter$1 mouseleave$1"))};e.event.props&&"attrChange"!==e.event.props[0]&&e.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),e.event.dispatch&&a(e.event,"handle",e.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),e.event.add=function(e,t,n,a,i){e!==document&&C.test(t)&&r("AJAX events should be attached to document: "+t),Q.call(this,e,A(t||""),n,a,i)},e.event.remove=function(e,t,n,r,a){x.call(this,e,A(t)||"",n,r,a)},e.fn.error=function(){var e=Array.prototype.slice.call(arguments,0);return r("jQuery.fn.error() is deprecated"),e.splice(0,0,"error"),arguments.length?this.bind.apply(this,e):(this.triggerHandler.apply(this,e),this)},e.fn.toggle=function(t,n){if(!e.isFunction(t)||!e.isFunction(n))return N.apply(this,arguments);r("jQuery.fn.toggle(handler, handler...) is deprecated");var a=arguments,i=t.guid||e.guid++,o=0,s=function(n){var r=(e._data(this,"lastToggle"+t.guid)||0)%o;return e._data(this,"lastToggle"+t.guid,r+1),n.preventDefault(),a[r].apply(this,arguments)||!1};for(s.guid=i;a.length>o;)a[o++].guid=i;return this.click(s)},e.fn.live=function(t,n,a){return r("jQuery.fn.live() is deprecated"),T?T.apply(this,arguments):(e(this.context).on(t,this.selector,n,a),this)},e.fn.die=function(t,n){return r("jQuery.fn.die() is deprecated"),M?M.apply(this,arguments):(e(this.context).off(t,this.selector||"**",n),this)},e.event.trigger=function(e,t,n,a){return n||C.test(e)||r("Global events are undocumented and deprecated"),k.call(this,e,t,n||document,a)},e.each(S.split("|"),function(t,n){e.event.special[n]={setup:function(){var t=this;return t!==document&&(e.event.add(document,n+"."+e.guid,function(){e.event.trigger(n,null,t,!0)}),e._data(this,n,e.guid++)),!1},teardown:function(){return this!==document&&e.event.remove(document,n+"."+e._data(this,n)),!1}}})}(jQuery,window);
/**
 * @preserve
 * Project: Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Version: v2.1.3
 * Contributors: Mattia Larentis
 * Dependencies: Bootstrap's Dropdown plugin, jQuery
 * Description: A simple plugin to enable Bootstrap dropdowns to active on hover and provide a nice user experience.
 * License: MIT
 * Homepage: http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/
 */
!function(e,n){var o=e();e.fn.dropdownHover=function(t){return"ontouchstart"in document?this:(o=o.add(this.parent()),this.each(function(){function r(){n.clearTimeout(a),n.clearTimeout(i),i=n.setTimeout(function(){o.find(":focus").blur(),f.instantlyCloseOthers===!0&&o.removeClass("open"),n.clearTimeout(i),d.attr("aria-expanded","true"),s.addClass("open"),d.trigger(l)},f.hoverDelay)}var a,i,d=e(this),s=d.parent(),u={delay:500,hoverDelay:0,instantlyCloseOthers:!0},h={delay:e(this).data("delay"),hoverDelay:e(this).data("hover-delay"),instantlyCloseOthers:e(this).data("close-others")},l="show.bs.dropdown",c="hide.bs.dropdown",f=e.extend(!0,{},u,t,h);s.hover(function(e){return s.hasClass("open")||d.is(e.target)?void r(e):!0},function(){n.clearTimeout(i),a=n.setTimeout(function(){d.attr("aria-expanded","false"),s.removeClass("open"),d.trigger(c)},f.delay)}),d.hover(function(e){return s.hasClass("open")||s.is(e.target)?void r(e):!0}),s.find(".dropdown-submenu").each(function(){var o,t=e(this);t.hover(function(){n.clearTimeout(o),t.children(".dropdown-menu").show(),t.siblings().children(".dropdown-menu").hide()},function(){var e=t.children(".dropdown-menu");o=n.setTimeout(function(){e.hide()},f.delay)})})}))},e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})}(jQuery,window);
/* HTML5 Placeholder jQuery Plugin - v2.1.3
 * Copyright (c)2015 Mathias Bynens
 * 2015-09-23
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(a){function b(b){var c={},d=/^jQuery\d+$/;return a.each(b.attributes,function(a,b){b.specified&&!d.test(b.name)&&(c[b.name]=b.value)}),c}function c(b,c){var d=this,f=a(d);if(d.value===f.attr("placeholder")&&f.hasClass(m.customClass))if(d.value="",f.removeClass(m.customClass),f.data("placeholder-password")){if(f=f.hide().nextAll('input[type="password"]:first').show().attr("id",f.removeAttr("id").data("placeholder-id")),b===!0)return f[0].value=c,c;f.focus()}else d==e()&&d.select()}function d(d){var e,f=this,g=a(f),h=f.id;if(d&&"blur"===d.type){if(g.hasClass(m.customClass))return;if("password"===f.type&&(e=g.prevAll('input[type="text"]:first'),e.length>0&&e.is(":visible")))return}if(""===f.value){if("password"===f.type){if(!g.data("placeholder-textinput")){try{e=g.clone().prop({type:"text"})}catch(i){e=a("<input>").attr(a.extend(b(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-enabled":!0,"placeholder-password":g,"placeholder-id":h}).bind("focus.placeholder",c),g.data({"placeholder-textinput":e,"placeholder-id":h}).before(e)}f.value="",g=g.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",g.data("placeholder-id")).show()}else{var j=g.data("placeholder-password");j&&(j[0].value="",g.attr("id",g.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))}g.addClass(m.customClass),g[0].value=g.attr("placeholder")}else g.removeClass(m.customClass)}function e(){try{return document.activeElement}catch(a){}}var f,g,h="[object OperaMini]"===Object.prototype.toString.call(window.operamini),i="placeholder"in document.createElement("input")&&!h,j="placeholder"in document.createElement("textarea")&&!h,k=a.valHooks,l=a.propHooks,m={};i&&j?(g=a.fn.placeholder=function(){return this},g.input=!0,g.textarea=!0):(g=a.fn.placeholder=function(b){var e={customClass:"placeholder"};return m=a.extend({},e,b),this.filter((i?"textarea":":input")+"[placeholder]").not("."+m.customClass).bind({"focus.placeholder":c,"blur.placeholder":d}).data("placeholder-enabled",!0).trigger("blur.placeholder")},g.input=i,g.textarea=j,f={get:function(b){var c=a(b),d=c.data("placeholder-password");return d?d[0].value:c.data("placeholder-enabled")&&c.hasClass(m.customClass)?"":b.value},set:function(b,f){var g,h,i=a(b);return""!==f&&(g=i.data("placeholder-textinput"),h=i.data("placeholder-password"),g?(c.call(g[0],!0,f)||(b.value=f),g[0].value=f):h&&(c.call(b,!0,f)||(h[0].value=f),b.value=f)),i.data("placeholder-enabled")?(""===f?(b.value=f,b!=e()&&d.call(b)):(i.hasClass(m.customClass)&&c.call(b),b.value=f),i):(b.value=f,i)}},i||(k.input=f,l.value=f),j||(k.textarea=f,l.value=f),a(function(){a(document).delegate("form","submit.placeholder",function(){var b=a("."+m.customClass,this).each(function(){c.call(this,!0,"")});setTimeout(function(){b.each(d)},10)})}),a(window).bind("beforeunload.placeholder",function(){a("."+m.customClass).each(function(){this.value=""})}))});
// Sticky Plugin v1.0.4 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 02/14/2011
// Date: 07/20/2015
// Website: http://stickyjs.com/
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var slice = Array.prototype.slice; // save ref to original slice()
    var splice = Array.prototype.splice; // save ref to original slice()

  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: '',
      widthFromWrapper: true, // works only when .getWidthFrom is empty
      responsiveWidth: false,
      zIndex: 'auto'
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        //update height in case of dynamic content
        s.stickyWrapper.css('height', s.stickyElement.outerHeight());

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'z-index': ''
              });
            s.stickyElement.parent().removeClass(s.className);
            s.stickyElement.trigger('sticky-end', [s]);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop !== newTop) {
            var newWidth;
            if (s.getWidthFrom) {
                newWidth = $(s.getWidthFrom).width() || null;
            } else if (s.widthFromWrapper) {
                newWidth = s.stickyWrapper.width();
            }
            if (newWidth == null) {
                newWidth = s.stickyElement.width();
            }
            s.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop)
              .css('z-index', s.zIndex);

            s.stickyElement.parent().addClass(s.className);

            if (s.currentTop === null) {
              s.stickyElement.trigger('sticky-start', [s]);
            } else {
              // sticky is started but it have to be repositioned
              s.stickyElement.trigger('sticky-update', [s]);
            }

            if (s.currentTop === s.topSpacing && s.currentTop > newTop || s.currentTop === null && newTop < s.topSpacing) {
              // just reached bottom || just started to stick but bottom is already reached
              s.stickyElement.trigger('sticky-bottom-reached', [s]);
            } else if(s.currentTop !== null && newTop === s.topSpacing && s.currentTop < newTop) {
              // sticky is started && sticked at topSpacing && overflowing from top just finished
              s.stickyElement.trigger('sticky-bottom-unreached', [s]);
            }

            s.currentTop = newTop;
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = s.stickyWrapper.parent();
          var unstick = (s.stickyElement.offset().top + s.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (s.stickyElement.offset().top <= s.topSpacing);

          if( unstick ) {
            s.stickyElement
              .css('position', 'absolute')
              .css('top', '')
              .css('bottom', 0)
              .css('z-index', '');
          } else {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('bottom', '')
              .css('z-index', s.zIndex);
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();

      for (var i = 0, l = sticked.length; i < l; i++) {
        var s = sticked[i];
        var newWidth = null;
        if (s.getWidthFrom) {
            if (s.responsiveWidth) {
                newWidth = $(s.getWidthFrom).width();
            }
        } else if(s.widthFromWrapper) {
            newWidth = s.stickyWrapper.width();
        }
        if (newWidth != null) {
            s.stickyElement.css('width', newWidth);
        }
      }
    },
    methods = {
      init: function(options) {
        return this.each(function() {
          var o = $.extend({}, defaults, options);
          var stickyElement = $(this);

          var stickyId = stickyElement.attr('id');
          var wrapperId = stickyId ? stickyId + '-' + defaults.wrapperClassName : defaults.wrapperClassName;
          var wrapper = $('<div></div>')
            .attr('id', wrapperId)
            .addClass(o.wrapperClassName);

          stickyElement.wrapAll(function() {
            if ($(this).parent("#" + wrapperId).length == 0) {
                    return wrapper;
            }
});

          var stickyWrapper = stickyElement.parent();

          if (o.center) {
            stickyWrapper.css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") === "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          o.stickyElement = stickyElement;
          o.stickyWrapper = stickyWrapper;
          o.currentTop    = null;

          sticked.push(o);

          methods.setWrapperHeight(this);
          methods.setupChangeListeners(this);
        });
      },

      setWrapperHeight: function(stickyElement) {
        var element = $(stickyElement);
        var stickyWrapper = element.parent();
        if (stickyWrapper) {
          stickyWrapper.css('height', element.outerHeight());
        }
      },

      setupChangeListeners: function(stickyElement) {
        if (window.MutationObserver) {
          var mutationObserver = new window.MutationObserver(function(mutations) {
            if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) {
              methods.setWrapperHeight(stickyElement);
            }
          });
          mutationObserver.observe(stickyElement, {subtree: true, childList: true});
        } else {
          if (window.addEventListener) {
            stickyElement.addEventListener('DOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
            stickyElement.addEventListener('DOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            }, false);
          } else if (window.attachEvent) {
            stickyElement.attachEvent('onDOMNodeInserted', function() {
              methods.setWrapperHeight(stickyElement);
            });
            stickyElement.attachEvent('onDOMNodeRemoved', function() {
              methods.setWrapperHeight(stickyElement);
            });
          }
        }
      },
      update: scroller,
      unstick: function(options) {
        return this.each(function() {
          var that = this;
          var unstickyElement = $(that);

          var removeIdx = -1;
          var i = sticked.length;
          while (i-- > 0) {
            if (sticked[i].stickyElement.get(0) === that) {
                splice.call(sticked,i,1);
                removeIdx = i;
            }
          }
          if(removeIdx !== -1) {
            unstickyElement.unwrap();
            unstickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'float': '',
                'z-index': ''
              })
            ;
          }
        });
      }
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };

  $.fn.unstick = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.unstick.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
}));

/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,u="click touchend MSPointerUp",a="",f,l=r.vars.direction==="vertical",c=r.vars.reverse,h=r.vars.itemWidth>0,p=r.vars.animation==="fade",d=r.vars.asNavFor!=="",v={},m=!0;e.data(t,"flexslider",r);v={init:function(){r.animating=!1;r.currentSlide=parseInt(r.vars.startAt?r.vars.startAt:0,10);isNaN(r.currentSlide)&&(r.currentSlide=0);r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;r.vars.animation==="slide"&&(r.vars.animation="swing");r.prop=l?"top":"marginLeft";r.args={};r.manualPause=!1;r.stopped=!1;r.started=!1;r.startTimeout=null;r.transitions=!r.vars.video&&!p&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return!0}return!1}();r.vars.controlsContainer!==""&&(r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer));r.vars.manualControls!==""&&(r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls));if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();r.setup("init");r.vars.controlNav&&v.controlNav.setup();r.vars.directionNav&&v.directionNav.setup();r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):!1;r.flexAnimate(n,r.vars.pauseOnAction)}});r.vars.mousewheel&&r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)});r.vars.pausePlay&&v.pausePlay.setup();r.vars.slideshow&&r.vars.pauseInvisible&&v.pauseInvisible.init();if(r.vars.slideshow){r.vars.pauseOnHover&&r.hover(function(){!r.manualPlay&&!r.manualPause&&r.pause()},function(){!r.manualPause&&!r.manualPlay&&!r.stopped&&r.play()});if(!r.vars.pauseInvisible||!v.pauseInvisible.isHidden())r.vars.initDelay>0?r.startTimeout=setTimeout(r.play,r.vars.initDelay):r.play()}d&&v.asNav.setup();o&&r.vars.touch&&v.touch();(!p||p&&r.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",v.resize);r.find("img").attr("draggable","false");setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=!0;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");if(!s)r.slides.on(u,function(t){t.preventDefault();var n=e(this),s=n.index(),o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide"))r.flexAnimate(r.getTarget("prev"),!0);else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,!1,!0,!0)}});else{t._slider=r;r.slides.each(function(){var t=this;t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",function(e){e.preventDefault();e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1);t.addEventListener("MSGestureTap",function(t){t.preventDefault();var n=e(this),i=n.index();if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass("active")){r.direction=r.currentItem<i?"next":"prev";r.flexAnimate(i,r.vars.pauseOnAction,!1,!0,!0)}})})}}},controlNav:{setup:function(){r.manualControls?v.controlNav.setupManual():v.controlNav.setupPaging()},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s,o;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1)for(var f=0;f<r.pagingCount;f++){o=r.slides.eq(f);s=r.vars.controlNav==="thumbnails"?'<img src="'+o.attr("data-thumb")+'"/>':"<a>"+n+"</a>";if("thumbnails"===r.vars.controlNav&&!0===r.vars.thumbCaptions){var l=o.attr("data-thumbcaption");""!=l&&undefined!=l&&(s+='<span class="'+i+'caption">'+l+"</span>")}r.controlNavScaffold.append("<li>"+s+"</li>");n++}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);v.controlNav.set();v.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;v.controlNav.active();r.controlNav.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){r.pagingCount>1&&t==="add"?r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>")):r.pagingCount===1?r.controlNavScaffold.find("li").remove():r.controlNav.eq(n).closest("li").remove();v.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):v.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}v.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();var n;if(a===""||a===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";r.pagingCount===1?r.directionNav.addClass(e).attr("tabindex","-1"):r.vars.animationLoop?r.directionNav.removeClass(e).removeAttr("tabindex"):r.animatingTo===0?r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):r.animatingTo===r.last?r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):r.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}v.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(u,function(t){t.preventDefault();if(a===""||a===t.type)if(e(this).hasClass(i+"pause")){r.manualPause=!0;r.manualPlay=!1;r.pause()}else{r.manualPause=!1;r.manualPlay=!0;r.play()}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").html(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").html(r.vars.pauseText)}},touch:function(){var e,n,i,o,u,a,f=!1,d=0,v=0,m=0;if(!s){t.addEventListener("touchstart",g,!1);function g(s){if(r.animating)s.preventDefault();else if(window.navigator.msPointerEnabled||s.touches.length===1){r.pause();o=l?r.h:r.w;a=Number(new Date);d=s.touches[0].pageX;v=s.touches[0].pageY;i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o;e=l?v:d;n=l?d:v;t.addEventListener("touchmove",y,!1);t.addEventListener("touchend",b,!1)}}function y(t){d=t.touches[0].pageX;v=t.touches[0].pageY;u=l?e-v:e-d;f=l?Math.abs(u)<Math.abs(d-n):Math.abs(u)<Math.abs(v-n);var s=500;if(!f||Number(new Date)-a>s){t.preventDefault();if(!p&&r.transitions){r.vars.animationLoop||(u/=r.currentSlide===0&&u<0||r.currentSlide===r.last&&u>0?Math.abs(u)/o+2:1);r.setProps(i+u,"setTouch")}}}function b(s){t.removeEventListener("touchmove",y,!1);if(r.animatingTo===r.currentSlide&&!f&&u!==null){var l=c?-u:u,h=l>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(h)&&(Number(new Date)-a<550&&Math.abs(l)>50||Math.abs(l)>o/2)?r.flexAnimate(h,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}t.removeEventListener("touchend",b,!1);e=null;n=null;u=null;i=null}}else{t.style.msTouchAction="none";t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",w,!1);t._slider=r;t.addEventListener("MSGestureChange",E,!1);t.addEventListener("MSGestureEnd",S,!1);function w(e){e.stopPropagation();if(r.animating)e.preventDefault();else{r.pause();t._gesture.addPointer(e.pointerId);m=0;o=l?r.h:r.w;a=Number(new Date);i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o}}function E(e){e.stopPropagation();var n=e.target._slider;if(!n)return;var r=-e.translationX,s=-e.translationY;m+=l?s:r;u=m;f=l?Math.abs(m)<Math.abs(-r):Math.abs(m)<Math.abs(-s);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){t._gesture.stop()});return}if(!f||Number(new Date)-a>500){e.preventDefault();if(!p&&n.transitions){n.vars.animationLoop||(u=m/(n.currentSlide===0&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/o+2:1));n.setProps(i+u,"setTouch")}}}function S(t){t.stopPropagation();var r=t.target._slider;if(!r)return;if(r.animatingTo===r.currentSlide&&!f&&u!==null){var s=c?-u:u,l=s>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(l)&&(Number(new Date)-a<550&&Math.abs(s)>50||Math.abs(s)>o/2)?r.flexAnimate(l,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}e=null;n=null;u=null;i=null;m=0}}},resize:function(){if(!r.animating&&r.is(":visible")){h||r.doMath();if(p)v.smoothHeight();else if(h){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(l){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{r.vars.smoothHeight&&v.smoothHeight();r.newSlides.width(r.computedW);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!l||p){var t=p?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}},uniqueID:function(t){t.find("[id]").each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")});return t},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(v.pauseInvisible.visProp=e[t]+"Hidden");if(v.pauseInvisible.visProp){var n=v.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){v.pauseInvisible.isHidden()?r.startTimeout?clearTimeout(r.startTimeout):r.pause():r.started?r.play():r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()})}},isHidden:function(){return document[v.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(f);f=setTimeout(function(){a=""},3e3)}};r.flexAnimate=function(t,n,s,u,a){!r.vars.animationLoop&&t!==r.currentSlide&&(r.direction=t>r.currentSlide?"next":"prev");d&&r.pagingCount===1&&(r.direction=r.currentItem<t?"next":"prev");if(!r.animating&&(r.canAdvance(t,a)||s)&&r.is(":visible")){if(d&&u){var f=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;f.flexAnimate(t,!0,!1,!0,a);r.direction=r.currentItem<t?"next":"prev";f.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1===r.currentSlide||t===0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return!1}r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}r.animating=!0;r.animatingTo=t;n&&r.pause();r.vars.before(r);r.syncExists&&!a&&v.sync("animate");r.vars.controlNav&&v.controlNav.active();h||r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;r.vars.directionNav&&v.directionNav.update();if(t===r.last){r.vars.end(r);r.vars.animationLoop||r.pause()}if(!p){var m=l?r.slides.filter(":first").height():r.computedW,g,y,b;if(h){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"?y=c?(r.count+r.cloneOffset)*m:0:r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"?y=c?0:(r.count+1)*m:y=c?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m;r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=!1;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}else if(!o){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.wrapup(m)}r.vars.smoothHeight&&v.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){!p&&!h&&(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop?r.setProps(e,"jumpEnd"):r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop&&r.setProps(e,"jumpStart"));r.animating=!1;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){!r.animating&&m&&r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=!1;r.vars.pausePlay&&v.pausePlay.update("play");r.syncExists&&v.sync("pause")};r.play=function(){r.playing&&clearInterval(r.animatedSlides);r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.started=r.playing=!0;r.vars.pausePlay&&v.pausePlay.update("pause");r.syncExists&&v.sync("play")};r.stop=function(){r.pause();r.stopped=!0};r.canAdvance=function(e,t){var n=d?r.pagingCount-1:r.last;return t?!0:d&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?!0:d&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?!1:e===r.currentSlide&&!d?!1:r.vars.animationLoop?!0:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?!1:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?!1:!0};r.getTarget=function(e){r.direction=e;return e==="next"?r.currentSlide===r.last?0:r.currentSlide+1:r.currentSlide===0?r.last:r.currentSlide-1};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(h)return t==="setTouch"?e:c&&r.animatingTo===r.last?0:c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n;switch(t){case"setTotal":return c?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return c?e:e;case"jumpEnd":return c?e:r.count*e;case"jumpStart":return c?r.count*e:e;default:return e}}();return i*-1+"px"}();if(r.transitions){i=l?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n);r.container.css("transition-duration",n)}r.args[r.prop]=i;(r.transitions||n===undefined)&&r.container.css(r.args);r.container.css("transform",i)};r.setup=function(t){if(!p){var n,s;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(c){s=e.makeArray(r.slides).reverse();r.slides=e(s);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!h){r.cloneCount=2;r.cloneOffset=1;t!=="init"&&r.container.find(".clone").remove();r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden","true"));v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container)}r.newSlides=e(r.vars.selector,r);n=c?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(l&&!h){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});r.vars.smoothHeight&&v.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});t==="init"&&(o?r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2}):r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing));r.vars.smoothHeight&&v.smoothHeight()}h||r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide");r.vars.init(r)};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.viewport===undefined?r.width():r.viewport.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(h){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!h){e<r.currentSlide?r.currentSlide+=1:e<=r.currentSlide&&e!==0&&(r.currentSlide-=1);r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls)if(t==="add"&&!h||r.pagingCount>r.controlNav.length)v.controlNav.update("add");else if(t==="remove"&&!h||r.pagingCount<r.controlNav.length){if(h&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}v.controlNav.update("remove",r.last)}r.vars.directionNav&&v.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;l&&c?n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i):n!==undefined?r.slides.eq(n).before(i):r.container.append(i);r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;isNaN(t)?e(t,r.slides).remove():l&&c?r.slides.eq(r.last).remove():r.slides.eq(t).remove();r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};v.init()};e(window).blur(function(e){focused=!1}).focus(function(e){focused=!0});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};e.fn.flexslider=function(t){t===undefined&&(t={});if(typeof t=="object")return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1&&t.allowOneSlide===!0||i.length===0){i.fadeIn(400);t.start&&t.start(n)}else n.data("flexslider")===undefined&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:typeof t=="number"&&n.flexAnimate(t,!0)}}})(jQuery);(function(e){e.flexslider=function(t,n){var r=e(t);r.vars=e.extend({},e.flexslider.defaults,n);var i=r.vars.namespace,s=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,o=("ontouchstart"in window||s||window.DocumentTouch&&document instanceof DocumentTouch)&&r.vars.touch,u="click touchend MSPointerUp",a="",f,l=r.vars.direction==="vertical",c=r.vars.reverse,h=r.vars.itemWidth>0,p=r.vars.animation==="fade",d=r.vars.asNavFor!=="",v={},m=!0;e.data(t,"flexslider",r);v={init:function(){r.animating=!1;r.currentSlide=parseInt(r.vars.startAt?r.vars.startAt:0,10);isNaN(r.currentSlide)&&(r.currentSlide=0);r.animatingTo=r.currentSlide;r.atEnd=r.currentSlide===0||r.currentSlide===r.last;r.containerSelector=r.vars.selector.substr(0,r.vars.selector.search(" "));r.slides=e(r.vars.selector,r);r.container=e(r.containerSelector,r);r.count=r.slides.length;r.syncExists=e(r.vars.sync).length>0;r.vars.animation==="slide"&&(r.vars.animation="swing");r.prop=l?"top":"marginLeft";r.args={};r.manualPause=!1;r.stopped=!1;r.started=!1;r.startTimeout=null;r.transitions=!r.vars.video&&!p&&r.vars.useCSS&&function(){var e=document.createElement("div"),t=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var n in t)if(e.style[t[n]]!==undefined){r.pfx=t[n].replace("Perspective","").toLowerCase();r.prop="-"+r.pfx+"-transform";return!0}return!1}();r.vars.controlsContainer!==""&&(r.controlsContainer=e(r.vars.controlsContainer).length>0&&e(r.vars.controlsContainer));r.vars.manualControls!==""&&(r.manualControls=e(r.vars.manualControls).length>0&&e(r.vars.manualControls));if(r.vars.randomize){r.slides.sort(function(){return Math.round(Math.random())-.5});r.container.empty().append(r.slides)}r.doMath();r.setup("init");r.vars.controlNav&&v.controlNav.setup();r.vars.directionNav&&v.directionNav.setup();r.vars.keyboard&&(e(r.containerSelector).length===1||r.vars.multipleKeyboard)&&e(document).bind("keyup",function(e){var t=e.keyCode;if(!r.animating&&(t===39||t===37)){var n=t===39?r.getTarget("next"):t===37?r.getTarget("prev"):!1;r.flexAnimate(n,r.vars.pauseOnAction)}});r.vars.mousewheel&&r.bind("mousewheel",function(e,t,n,i){e.preventDefault();var s=t<0?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(s,r.vars.pauseOnAction)});r.vars.pausePlay&&v.pausePlay.setup();r.vars.slideshow&&r.vars.pauseInvisible&&v.pauseInvisible.init();if(r.vars.slideshow){r.vars.pauseOnHover&&r.hover(function(){!r.manualPlay&&!r.manualPause&&r.pause()},function(){!r.manualPause&&!r.manualPlay&&!r.stopped&&r.play()});if(!r.vars.pauseInvisible||!v.pauseInvisible.isHidden())r.vars.initDelay>0?r.startTimeout=setTimeout(r.play,r.vars.initDelay):r.play()}d&&v.asNav.setup();o&&r.vars.touch&&v.touch();(!p||p&&r.vars.smoothHeight)&&e(window).bind("resize orientationchange focus",v.resize);r.find("img").attr("draggable","false");setTimeout(function(){r.vars.start(r)},200)},asNav:{setup:function(){r.asNav=!0;r.animatingTo=Math.floor(r.currentSlide/r.move);r.currentItem=r.currentSlide;r.slides.removeClass(i+"active-slide").eq(r.currentItem).addClass(i+"active-slide");if(!s)r.slides.on(u,function(t){t.preventDefault();var n=e(this),s=n.index(),o=n.offset().left-e(r).scrollLeft();if(o<=0&&n.hasClass(i+"active-slide"))r.flexAnimate(r.getTarget("prev"),!0);else if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass(i+"active-slide")){r.direction=r.currentItem<s?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction,!1,!0,!0)}});else{t._slider=r;r.slides.each(function(){var t=this;t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",function(e){e.preventDefault();e.currentTarget._gesture&&e.currentTarget._gesture.addPointer(e.pointerId)},!1);t.addEventListener("MSGestureTap",function(t){t.preventDefault();var n=e(this),i=n.index();if(!e(r.vars.asNavFor).data("flexslider").animating&&!n.hasClass("active")){r.direction=r.currentItem<i?"next":"prev";r.flexAnimate(i,r.vars.pauseOnAction,!1,!0,!0)}})})}}},controlNav:{setup:function(){r.manualControls?v.controlNav.setupManual():v.controlNav.setupPaging()},setupPaging:function(){var t=r.vars.controlNav==="thumbnails"?"control-thumbs":"control-paging",n=1,s,o;r.controlNavScaffold=e('<ol class="'+i+"control-nav "+i+t+'"></ol>');if(r.pagingCount>1)for(var f=0;f<r.pagingCount;f++){o=r.slides.eq(f);s=r.vars.controlNav==="thumbnails"?'<img src="'+o.attr("data-thumb")+'"/>':"<a>"+n+"</a>";if("thumbnails"===r.vars.controlNav&&!0===r.vars.thumbCaptions){var l=o.attr("data-thumbcaption");""!=l&&undefined!=l&&(s+='<span class="'+i+'caption">'+l+"</span>")}r.controlNavScaffold.append("<li>"+s+"</li>");n++}r.controlsContainer?e(r.controlsContainer).append(r.controlNavScaffold):r.append(r.controlNavScaffold);v.controlNav.set();v.controlNav.active();r.controlNavScaffold.delegate("a, img",u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){r.direction=s>r.currentSlide?"next":"prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},setupManual:function(){r.controlNav=r.manualControls;v.controlNav.active();r.controlNav.bind(u,function(t){t.preventDefault();if(a===""||a===t.type){var n=e(this),s=r.controlNav.index(n);if(!n.hasClass(i+"active")){s>r.currentSlide?r.direction="next":r.direction="prev";r.flexAnimate(s,r.vars.pauseOnAction)}}a===""&&(a=t.type);v.setToClearWatchedEvent()})},set:function(){var t=r.vars.controlNav==="thumbnails"?"img":"a";r.controlNav=e("."+i+"control-nav li "+t,r.controlsContainer?r.controlsContainer:r)},active:function(){r.controlNav.removeClass(i+"active").eq(r.animatingTo).addClass(i+"active")},update:function(t,n){r.pagingCount>1&&t==="add"?r.controlNavScaffold.append(e("<li><a>"+r.count+"</a></li>")):r.pagingCount===1?r.controlNavScaffold.find("li").remove():r.controlNav.eq(n).closest("li").remove();v.controlNav.set();r.pagingCount>1&&r.pagingCount!==r.controlNav.length?r.update(n,t):v.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+i+'direction-nav"><li><a class="'+i+'prev" href="#">'+r.vars.prevText+'</a></li><li><a class="'+i+'next" href="#">'+r.vars.nextText+"</a></li></ul>");if(r.controlsContainer){e(r.controlsContainer).append(t);r.directionNav=e("."+i+"direction-nav li a",r.controlsContainer)}else{r.append(t);r.directionNav=e("."+i+"direction-nav li a",r)}v.directionNav.update();r.directionNav.bind(u,function(t){t.preventDefault();var n;if(a===""||a===t.type){n=e(this).hasClass(i+"next")?r.getTarget("next"):r.getTarget("prev");r.flexAnimate(n,r.vars.pauseOnAction)}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(){var e=i+"disabled";r.pagingCount===1?r.directionNav.addClass(e).attr("tabindex","-1"):r.vars.animationLoop?r.directionNav.removeClass(e).removeAttr("tabindex"):r.animatingTo===0?r.directionNav.removeClass(e).filter("."+i+"prev").addClass(e).attr("tabindex","-1"):r.animatingTo===r.last?r.directionNav.removeClass(e).filter("."+i+"next").addClass(e).attr("tabindex","-1"):r.directionNav.removeClass(e).removeAttr("tabindex")}},pausePlay:{setup:function(){var t=e('<div class="'+i+'pauseplay"><a></a></div>');if(r.controlsContainer){r.controlsContainer.append(t);r.pausePlay=e("."+i+"pauseplay a",r.controlsContainer)}else{r.append(t);r.pausePlay=e("."+i+"pauseplay a",r)}v.pausePlay.update(r.vars.slideshow?i+"pause":i+"play");r.pausePlay.bind(u,function(t){t.preventDefault();if(a===""||a===t.type)if(e(this).hasClass(i+"pause")){r.manualPause=!0;r.manualPlay=!1;r.pause()}else{r.manualPause=!1;r.manualPlay=!0;r.play()}a===""&&(a=t.type);v.setToClearWatchedEvent()})},update:function(e){e==="play"?r.pausePlay.removeClass(i+"pause").addClass(i+"play").html(r.vars.playText):r.pausePlay.removeClass(i+"play").addClass(i+"pause").html(r.vars.pauseText)}},touch:function(){var e,n,i,o,u,a,f=!1,d=0,v=0,m=0;if(!s){t.addEventListener("touchstart",g,!1);function g(s){if(r.animating)s.preventDefault();else if(window.navigator.msPointerEnabled||s.touches.length===1){r.pause();o=l?r.h:r.w;a=Number(new Date);d=s.touches[0].pageX;v=s.touches[0].pageY;i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o;e=l?v:d;n=l?d:v;t.addEventListener("touchmove",y,!1);t.addEventListener("touchend",b,!1)}}function y(t){d=t.touches[0].pageX;v=t.touches[0].pageY;u=l?e-v:e-d;f=l?Math.abs(u)<Math.abs(d-n):Math.abs(u)<Math.abs(v-n);var s=500;if(!f||Number(new Date)-a>s){t.preventDefault();if(!p&&r.transitions){r.vars.animationLoop||(u/=r.currentSlide===0&&u<0||r.currentSlide===r.last&&u>0?Math.abs(u)/o+2:1);r.setProps(i+u,"setTouch")}}}function b(s){t.removeEventListener("touchmove",y,!1);if(r.animatingTo===r.currentSlide&&!f&&u!==null){var l=c?-u:u,h=l>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(h)&&(Number(new Date)-a<550&&Math.abs(l)>50||Math.abs(l)>o/2)?r.flexAnimate(h,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}t.removeEventListener("touchend",b,!1);e=null;n=null;u=null;i=null}}else{t.style.msTouchAction="none";t._gesture=new MSGesture;t._gesture.target=t;t.addEventListener("MSPointerDown",w,!1);t._slider=r;t.addEventListener("MSGestureChange",E,!1);t.addEventListener("MSGestureEnd",S,!1);function w(e){e.stopPropagation();if(r.animating)e.preventDefault();else{r.pause();t._gesture.addPointer(e.pointerId);m=0;o=l?r.h:r.w;a=Number(new Date);i=h&&c&&r.animatingTo===r.last?0:h&&c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:h&&r.currentSlide===r.last?r.limit:h?(r.itemW+r.vars.itemMargin)*r.move*r.currentSlide:c?(r.last-r.currentSlide+r.cloneOffset)*o:(r.currentSlide+r.cloneOffset)*o}}function E(e){e.stopPropagation();var n=e.target._slider;if(!n)return;var r=-e.translationX,s=-e.translationY;m+=l?s:r;u=m;f=l?Math.abs(m)<Math.abs(-r):Math.abs(m)<Math.abs(-s);if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){t._gesture.stop()});return}if(!f||Number(new Date)-a>500){e.preventDefault();if(!p&&n.transitions){n.vars.animationLoop||(u=m/(n.currentSlide===0&&m<0||n.currentSlide===n.last&&m>0?Math.abs(m)/o+2:1));n.setProps(i+u,"setTouch")}}}function S(t){t.stopPropagation();var r=t.target._slider;if(!r)return;if(r.animatingTo===r.currentSlide&&!f&&u!==null){var s=c?-u:u,l=s>0?r.getTarget("next"):r.getTarget("prev");r.canAdvance(l)&&(Number(new Date)-a<550&&Math.abs(s)>50||Math.abs(s)>o/2)?r.flexAnimate(l,r.vars.pauseOnAction):p||r.flexAnimate(r.currentSlide,r.vars.pauseOnAction,!0)}e=null;n=null;u=null;i=null;m=0}}},resize:function(){if(!r.animating&&r.is(":visible")){h||r.doMath();if(p)v.smoothHeight();else if(h){r.slides.width(r.computedW);r.update(r.pagingCount);r.setProps()}else if(l){r.viewport.height(r.h);r.setProps(r.h,"setTotal")}else{r.vars.smoothHeight&&v.smoothHeight();r.newSlides.width(r.computedW
);r.setProps(r.computedW,"setTotal")}}},smoothHeight:function(e){if(!l||p){var t=p?r:r.viewport;e?t.animate({height:r.slides.eq(r.animatingTo).height()},e):t.height(r.slides.eq(r.animatingTo).height())}},sync:function(t){var n=e(r.vars.sync).data("flexslider"),i=r.animatingTo;switch(t){case"animate":n.flexAnimate(i,r.vars.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}},uniqueID:function(t){t.find("[id]").each(function(){var t=e(this);t.attr("id",t.attr("id")+"_clone")});return t},pauseInvisible:{visProp:null,init:function(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)e[t]+"Hidden"in document&&(v.pauseInvisible.visProp=e[t]+"Hidden");if(v.pauseInvisible.visProp){var n=v.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(n,function(){v.pauseInvisible.isHidden()?r.startTimeout?clearTimeout(r.startTimeout):r.pause():r.started?r.play():r.vars.initDelay>0?setTimeout(r.play,r.vars.initDelay):r.play()})}},isHidden:function(){return document[v.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(f);f=setTimeout(function(){a=""},3e3)}};r.flexAnimate=function(t,n,s,u,a){!r.vars.animationLoop&&t!==r.currentSlide&&(r.direction=t>r.currentSlide?"next":"prev");d&&r.pagingCount===1&&(r.direction=r.currentItem<t?"next":"prev");if(!r.animating&&(r.canAdvance(t,a)||s)&&r.is(":visible")){if(d&&u){var f=e(r.vars.asNavFor).data("flexslider");r.atEnd=t===0||t===r.count-1;f.flexAnimate(t,!0,!1,!0,a);r.direction=r.currentItem<t?"next":"prev";f.direction=r.direction;if(Math.ceil((t+1)/r.visible)-1===r.currentSlide||t===0){r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");return!1}r.currentItem=t;r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");t=Math.floor(t/r.visible)}r.animating=!0;r.animatingTo=t;n&&r.pause();r.vars.before(r);r.syncExists&&!a&&v.sync("animate");r.vars.controlNav&&v.controlNav.active();h||r.slides.removeClass(i+"active-slide").eq(t).addClass(i+"active-slide");r.atEnd=t===0||t===r.last;r.vars.directionNav&&v.directionNav.update();if(t===r.last){r.vars.end(r);r.vars.animationLoop||r.pause()}if(!p){var m=l?r.slides.filter(":first").height():r.computedW,g,y,b;if(h){g=r.vars.itemMargin;b=(r.itemW+g)*r.move*r.animatingTo;y=b>r.limit&&r.visible!==1?r.limit:b}else r.currentSlide===0&&t===r.count-1&&r.vars.animationLoop&&r.direction!=="next"?y=c?(r.count+r.cloneOffset)*m:0:r.currentSlide===r.last&&t===0&&r.vars.animationLoop&&r.direction!=="prev"?y=c?0:(r.count+1)*m:y=c?(r.count-1-t+r.cloneOffset)*m:(t+r.cloneOffset)*m;r.setProps(y,"",r.vars.animationSpeed);if(r.transitions){if(!r.vars.animationLoop||!r.atEnd){r.animating=!1;r.currentSlide=r.animatingTo}r.container.unbind("webkitTransitionEnd transitionend");r.container.bind("webkitTransitionEnd transitionend",function(){r.wrapup(m)})}else r.container.animate(r.args,r.vars.animationSpeed,r.vars.easing,function(){r.wrapup(m)})}else if(!o){r.slides.eq(r.currentSlide).css({zIndex:1}).animate({opacity:0},r.vars.animationSpeed,r.vars.easing);r.slides.eq(t).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing,r.wrapup)}else{r.slides.eq(r.currentSlide).css({opacity:0,zIndex:1});r.slides.eq(t).css({opacity:1,zIndex:2});r.wrapup(m)}r.vars.smoothHeight&&v.smoothHeight(r.vars.animationSpeed)}};r.wrapup=function(e){!p&&!h&&(r.currentSlide===0&&r.animatingTo===r.last&&r.vars.animationLoop?r.setProps(e,"jumpEnd"):r.currentSlide===r.last&&r.animatingTo===0&&r.vars.animationLoop&&r.setProps(e,"jumpStart"));r.animating=!1;r.currentSlide=r.animatingTo;r.vars.after(r)};r.animateSlides=function(){!r.animating&&m&&r.flexAnimate(r.getTarget("next"))};r.pause=function(){clearInterval(r.animatedSlides);r.animatedSlides=null;r.playing=!1;r.vars.pausePlay&&v.pausePlay.update("play");r.syncExists&&v.sync("pause")};r.play=function(){r.playing&&clearInterval(r.animatedSlides);r.animatedSlides=r.animatedSlides||setInterval(r.animateSlides,r.vars.slideshowSpeed);r.started=r.playing=!0;r.vars.pausePlay&&v.pausePlay.update("pause");r.syncExists&&v.sync("play")};r.stop=function(){r.pause();r.stopped=!0};r.canAdvance=function(e,t){var n=d?r.pagingCount-1:r.last;return t?!0:d&&r.currentItem===r.count-1&&e===0&&r.direction==="prev"?!0:d&&r.currentItem===0&&e===r.pagingCount-1&&r.direction!=="next"?!1:e===r.currentSlide&&!d?!1:r.vars.animationLoop?!0:r.atEnd&&r.currentSlide===0&&e===n&&r.direction!=="next"?!1:r.atEnd&&r.currentSlide===n&&e===0&&r.direction==="next"?!1:!0};r.getTarget=function(e){r.direction=e;return e==="next"?r.currentSlide===r.last?0:r.currentSlide+1:r.currentSlide===0?r.last:r.currentSlide-1};r.setProps=function(e,t,n){var i=function(){var n=e?e:(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo,i=function(){if(h)return t==="setTouch"?e:c&&r.animatingTo===r.last?0:c?r.limit-(r.itemW+r.vars.itemMargin)*r.move*r.animatingTo:r.animatingTo===r.last?r.limit:n;switch(t){case"setTotal":return c?(r.count-1-r.currentSlide+r.cloneOffset)*e:(r.currentSlide+r.cloneOffset)*e;case"setTouch":return c?e:e;case"jumpEnd":return c?e:r.count*e;case"jumpStart":return c?r.count*e:e;default:return e}}();return i*-1+"px"}();if(r.transitions){i=l?"translate3d(0,"+i+",0)":"translate3d("+i+",0,0)";n=n!==undefined?n/1e3+"s":"0s";r.container.css("-"+r.pfx+"-transition-duration",n);r.container.css("transition-duration",n)}r.args[r.prop]=i;(r.transitions||n===undefined)&&r.container.css(r.args);r.container.css("transform",i)};r.setup=function(t){if(!p){var n,s;if(t==="init"){r.viewport=e('<div class="'+i+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(r).append(r.container);r.cloneCount=0;r.cloneOffset=0;if(c){s=e.makeArray(r.slides).reverse();r.slides=e(s);r.container.empty().append(r.slides)}}if(r.vars.animationLoop&&!h){r.cloneCount=2;r.cloneOffset=1;t!=="init"&&r.container.find(".clone").remove();r.container.append(r.slides.first().clone().addClass("clone").attr("aria-hidden","true")).prepend(r.slides.last().clone().addClass("clone").attr("aria-hidden","true"));v.uniqueID(r.slides.first().clone().addClass("clone")).appendTo(r.container);v.uniqueID(r.slides.last().clone().addClass("clone")).prependTo(r.container)}r.newSlides=e(r.vars.selector,r);n=c?r.count-1-r.currentSlide+r.cloneOffset:r.currentSlide+r.cloneOffset;if(l&&!h){r.container.height((r.count+r.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){r.newSlides.css({display:"block"});r.doMath();r.viewport.height(r.h);r.setProps(n*r.h,"init")},t==="init"?100:0)}else{r.container.width((r.count+r.cloneCount)*200+"%");r.setProps(n*r.computedW,"init");setTimeout(function(){r.doMath();r.newSlides.css({width:r.computedW,"float":"left",display:"block"});r.vars.smoothHeight&&v.smoothHeight()},t==="init"?100:0)}}else{r.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"});t==="init"&&(o?r.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+r.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(r.currentSlide).css({opacity:1,zIndex:2}):r.slides.css({opacity:0,display:"block",zIndex:1}).eq(r.currentSlide).css({zIndex:2}).animate({opacity:1},r.vars.animationSpeed,r.vars.easing));r.vars.smoothHeight&&v.smoothHeight()}h||r.slides.removeClass(i+"active-slide").eq(r.currentSlide).addClass(i+"active-slide");r.vars.init(r)};r.doMath=function(){var e=r.slides.first(),t=r.vars.itemMargin,n=r.vars.minItems,i=r.vars.maxItems;r.w=r.viewport===undefined?r.width():r.viewport.width();r.h=e.height();r.boxPadding=e.outerWidth()-e.width();if(h){r.itemT=r.vars.itemWidth+t;r.minW=n?n*r.itemT:r.w;r.maxW=i?i*r.itemT-t:r.w;r.itemW=r.minW>r.w?(r.w-t*(n-1))/n:r.maxW<r.w?(r.w-t*(i-1))/i:r.vars.itemWidth>r.w?r.w:r.vars.itemWidth;r.visible=Math.floor(r.w/r.itemW);r.move=r.vars.move>0&&r.vars.move<r.visible?r.vars.move:r.visible;r.pagingCount=Math.ceil((r.count-r.visible)/r.move+1);r.last=r.pagingCount-1;r.limit=r.pagingCount===1?0:r.vars.itemWidth>r.w?r.itemW*(r.count-1)+t*(r.count-1):(r.itemW+t)*r.count-r.w-t}else{r.itemW=r.w;r.pagingCount=r.count;r.last=r.count-1}r.computedW=r.itemW-r.boxPadding};r.update=function(e,t){r.doMath();if(!h){e<r.currentSlide?r.currentSlide+=1:e<=r.currentSlide&&e!==0&&(r.currentSlide-=1);r.animatingTo=r.currentSlide}if(r.vars.controlNav&&!r.manualControls)if(t==="add"&&!h||r.pagingCount>r.controlNav.length)v.controlNav.update("add");else if(t==="remove"&&!h||r.pagingCount<r.controlNav.length){if(h&&r.currentSlide>r.last){r.currentSlide-=1;r.animatingTo-=1}v.controlNav.update("remove",r.last)}r.vars.directionNav&&v.directionNav.update()};r.addSlide=function(t,n){var i=e(t);r.count+=1;r.last=r.count-1;l&&c?n!==undefined?r.slides.eq(r.count-n).after(i):r.container.prepend(i):n!==undefined?r.slides.eq(n).before(i):r.container.append(i);r.update(n,"add");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.added(r)};r.removeSlide=function(t){var n=isNaN(t)?r.slides.index(e(t)):t;r.count-=1;r.last=r.count-1;isNaN(t)?e(t,r.slides).remove():l&&c?r.slides.eq(r.last).remove():r.slides.eq(t).remove();r.doMath();r.update(n,"remove");r.slides=e(r.vars.selector+":not(.clone)",r);r.setup();r.vars.removed(r)};v.init()};e(window).blur(function(e){focused=!1}).focus(function(e){focused=!0});e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};e.fn.flexslider=function(t){t===undefined&&(t={});if(typeof t=="object")return this.each(function(){var n=e(this),r=t.selector?t.selector:".slides > li",i=n.find(r);if(i.length===1&&t.allowOneSlide===!0||i.length===0){i.fadeIn(400);t.start&&t.start(n)}else n.data("flexslider")===undefined&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"stop":n.stop();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:typeof t=="number"&&n.flexAnimate(t,!0)}}})(jQuery);

/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.6
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, All Rights Reserved
* 
* http://mixitup.io
*/

(function($){
	
	// DECLARE METHODS
 
	var methods = {

		// "INIT" METHOD
	
	    init: function(settings){

			return this.each(function(){
				
				var browser = window.navigator.appVersion.match(/Chrome\/(\d+)\./),
					ver = browser ? parseInt(browser[1], 10) : false,
					chromeFix = function(grid){
						var parent = grid.parentElement,
					        placeholder = document.createElement('div'),
					        frag = document.createDocumentFragment();

					    parent.insertBefore(placeholder, grid);  
					    frag.appendChild(grid);
					    parent.replaceChild(grid, placeholder);
					    frag = null;
					    placeholder = null;
					};
				
				if(ver && ver == 31 || ver == 32){
					chromeFix(this);
				};
				
				// BUILD CONFIG OBJECT

				var config = {
					
					// PUBLIC PROPERTIES
					
					targetSelector : '.mix',
					filterSelector : '.filter',
					sortSelector : '.sort',
					buttonEvent: 'click',
					effects : ['fade', 'scale'],
					listEffects : null,
					easing : 'smooth',
					layoutMode: 'grid',
					targetDisplayGrid : 'inline-block',
					targetDisplayList: 'block',
					listClass : '',
					gridClass : '',
					transitionSpeed : 600,
					showOnLoad : 'all',
					sortOnLoad : false,
					multiFilter : false,
					filterLogic : 'or',
					resizeContainer : true,
					minHeight : 0,
					failClass : 'fail',
					perspectiveDistance : '3000',
					perspectiveOrigin : '50% 50%',
					animateGridList : true,
					onMixLoad: null,
					onMixStart : null,
					onMixEnd : null,

					// MISC

					container : null,
					origOrder : [],
					startOrder : [],
					newOrder : [],
					origSort: [],
					checkSort: [],
					filter : '',
					mixing : false,
					origDisplay : '',
					origLayout: '',
					origHeight : 0, 
					newHeight : 0,
					isTouch : false,
					resetDelay : 0,
					failsafe : null,

					// CSS
					
					prefix : '',
					easingFallback : 'ease-in-out',
					transition : {}, 
					perspective : {}, 
					clean : {},
					fade : '1',
					scale : '',
					rotateX : '',
					rotateY : '',
					rotateZ : '',
					blur : '',
					grayscale : ''
				};
				
				if(settings){
					$.extend(config, settings);
				};

				// ADD CONFIG OBJECT TO CONTAINER OBJECT PER INSTANTIATION
				
				this.config = config;
				
				// DETECT TOUCH
				
				$.support.touch = 'ontouchend' in document;

				if ($.support.touch) {
					config.isTouch = true;
					config.resetDelay = 350;
				};
				
				// LOCALIZE CONTAINER
	
				config.container = $(this);
				var $cont = config.container;
				
				// GET VENDOR PREFIX
				
				config.prefix = prefix($cont[0]);
				config.prefix = config.prefix ? '-'+config.prefix.toLowerCase()+'-' : '';
				
				// CACHE 'DEFAULT' SORTING ORDER
			
				$cont.find(config.targetSelector).each(function(){
					config.origOrder.push($(this));
				});
				
				// PERFORM SORT ON LOAD 
				
				if(config.sortOnLoad){
					var sortby, order;
					if($.isArray(config.sortOnLoad)){
						sortby = config.sortOnLoad[0], order = config.sortOnLoad[1];
						$(config.sortSelector+'[data-sort='+config.sortOnLoad[0]+'][data-order='+config.sortOnLoad[1]+']').addClass('active');
					} else {
						$(config.sortSelector+'[data-sort='+config.sortOnLoad+']').addClass('active');
						sortby = config.sortOnLoad, config.sortOnLoad = 'desc';
					};
					sort(sortby, order, $cont, config);
				};
				
				// BUILD TRANSITION AND PERSPECTIVE OBJECTS
				
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					config.transition[a+'transition'] = 'all '+config.transitionSpeed+'ms ease-in-out';
					config.perspective[a+'perspective'] = config.perspectiveDistance+'px';
					config.perspective[a+'perspective-origin'] = config.perspectiveOrigin;
				};
				
				// BUILD TRANSITION CLEANER
				
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					config.clean[a+'transition'] = 'none';
				};
	
				// CHOOSE GRID OR LIST
	
				if(config.layoutMode == 'list'){
					$cont.addClass(config.listClass);
					config.origDisplay = config.targetDisplayList;
				} else {
					$cont.addClass(config.gridClass);
					config.origDisplay = config.targetDisplayGrid;
				};
				config.origLayout = config.layoutMode;
				
				// PARSE 'SHOWONLOAD'
				
				var showOnLoadArray = config.showOnLoad.split(' ');
				
				// GIVE ACTIVE FILTER ACTIVE CLASS
				
				$.each(showOnLoadArray, function(){
					$(config.filterSelector+'[data-filter="'+this+'"]').addClass('active');
				});
				
				// RENAME "ALL" CATEGORY TO "MIX_ALL"
	
				$cont.find(config.targetSelector).addClass('mix_all');
				if(showOnLoadArray[0]  == 'all'){
					showOnLoadArray[0] = 'mix_all',
					config.showOnLoad = 'mix_all';
				};
				
				// FADE IN 'SHOWONLOAD'
				
				var $showOnLoad = $();
				$.each(showOnLoadArray, function(){
					$showOnLoad = $showOnLoad.add($('.'+this))
				});
				
				$showOnLoad.each(function(){
					var $t = $(this);
					if(config.layoutMode == 'list'){
						$t.css('display',config.targetDisplayList);
					} else {
						$t.css('display',config.targetDisplayGrid);
					};
					$t.css(config.transition);
				});
				
				// WRAP FADE-IN TO PREVENT RACE CONDITION
				
				var delay = setTimeout(function(){
					
					config.mixing = true;
					
					$showOnLoad.css('opacity','1');
					
					// CLEAN UP
					
					var reset = setTimeout(function(){
						if(config.layoutMode == 'list'){
							$showOnLoad.removeStyle(config.prefix+'transition, transition').css({
								display: config.targetDisplayList,
								opacity: 1
							});
						} else {
							$showOnLoad.removeStyle(config.prefix+'transition, transition').css({
								display: config.targetDisplayGrid,
								opacity: 1
							});
						};
						
						// FIRE "ONMIXLOAD" CALLBACK
						
						config.mixing = false;

						if(typeof config.onMixLoad == 'function') {
							var output = config.onMixLoad.call(this, config);

							// UPDATE CONFIG IF DATA RETURNED

							config = output ? output : config;
						};
						
					},config.transitionSpeed);
				},10);
				
				// PRESET ACTIVE FILTER
				
				config.filter = config.showOnLoad;
			
				// BIND SORT CLICK HANDLERS
			
				$(config.sortSelector).bind(config.buttonEvent,function(){
					
					if(!config.mixing){
						
						// PARSE SORT ARGUMENTS FROM BUTTON CLASSES
						
						var $t = $(this),
						sortby = $t.attr('data-sort'),
						order = $t.attr('data-order');
						
						if(!$t.hasClass('active')){
							$(config.sortSelector).removeClass('active');
							$t.addClass('active');
						} else {
							if(sortby != 'random')return false;
						};
						
						$cont.find(config.targetSelector).each(function(){
							config.startOrder.push($(this));
						});
				
						goMix(config.filter,sortby,order,$cont, config);
				
					};
				
				});

				// BIND FILTER CLICK HANDLERS

				$(config.filterSelector).bind(config.buttonEvent,function(){
				
					if(!config.mixing){
						
						var $t = $(this);
						
						// PARSE FILTER ARGUMENTS FROM BUTTON CLASSES
		
						if(config.multiFilter == false){
							
							// SINGLE ACTIVE BUTTON
							
							$(config.filterSelector).removeClass('active');
							$t.addClass('active');
						
							config.filter = $t.attr('data-filter');
						
							$(config.filterSelector+'[data-filter="'+config.filter+'"]').addClass('active');

						} else {
						
							// MULTIPLE ACTIVE BUTTONS
							
							var thisFilter = $t.attr('data-filter'); 
						
							if($t.hasClass('active')){
								$t.removeClass('active');
								
								// REMOVE FILTER FROM SPACE-SEPERATED STRING
								
								var re = new RegExp('(\\s|^)'+thisFilter);
								config.filter = config.filter.replace(re,'');
							} else {
								
								// ADD FILTER TO SPACE-SEPERATED STRING
								
								$t.addClass('active');
								config.filter = config.filter+' '+thisFilter;
								
							};
						};
						
						// GO MIX
						
						goMix(config.filter, null, null, $cont, config);

					};
				
				});
					
			});
		},
	
		// "TOGRID" METHOD
	
		toGrid: function(){
			return this.each(function(){
				var config = this.config;
				if(config.layoutMode != 'grid'){
					config.layoutMode = 'grid';
					goMix(config.filter, null, null, $(this), config);
				};
			});
		},
	
		// "TOLIST" METHOD
	
		toList: function(){
			return this.each(function(){
				var config = this.config;
				if(config.layoutMode != 'list'){
					config.layoutMode = 'list';
					goMix(config.filter, null, null, $(this), config);
				};
			});
		},
	
		// "FILTER" METHOD
	
		filter: function(arg){
			return this.each(function(){
				var config = this.config;
				if(!config.mixing){	
					$(config.filterSelector).removeClass('active');
					$(config.filterSelector+'[data-filter="'+arg+'"]').addClass('active');
					goMix(arg, null, null, $(this), config);
				};
			});	
		},
	
		// "SORT" METHOD
	
		sort: function(args){
			return this.each(function(){
				var config = this.config,
					$t = $(this);
				if(!config.mixing){
					$(config.sortSelector).removeClass('active');
					if($.isArray(args)){
						var sortby = args[0], order = args[1];
						$(config.sortSelector+'[data-sort="'+args[0]+'"][data-order="'+args[1]+'"]').addClass('active');
					} else {
						$(config.sortSelector+'[data-sort="'+args+'"]').addClass('active');
						var sortby = args, order = 'desc';
					};
					$t.find(config.targetSelector).each(function(){
						config.startOrder.push($(this));
					});
					
					goMix(config.filter,sortby,order, $t, config);
				
				};
			});
		},
		
		// "MULTIMIX" METHOD
		
		multimix: function(args){
			return this.each(function(){
				var config = this.config,
					$t = $(this);
					multiOut = {
						filter: config.filter,
						sort: null,
						order: 'desc',
						layoutMode: config.layoutMode
					};
				$.extend(multiOut, args);
				if(!config.mixing){
					$(config.filterSelector).add(config.sortSelector).removeClass('active');
					$(config.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass('active');
					if(typeof multiOut.sort !== 'undefined'){
						$(config.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass('active');
						$t.find(config.targetSelector).each(function(){
							config.startOrder.push($(this));
						});
					};
					config.layoutMode = multiOut.layoutMode;
					goMix(multiOut.filter,multiOut.sort,multiOut.order, $t, config);
				};
			});
		},
		
		// "REMIX" METHOD

		remix: function(arg){
			return this.each(function(){
				var config = this.config,
					$t = $(this);	
				config.origOrder = [];
				$t.find(config.targetSelector).each(function(){
					var $th = $(this);
					$th.addClass('mix_all'); 
				    config.origOrder.push($th);
				});
				if(!config.mixing && typeof arg !== 'undefined'){
					$(config.filterSelector).removeClass('active');
					$(config.filterSelector+'[data-filter="'+arg+'"]').addClass('active');
					goMix(arg, null, null, $t, config);
				};
			});
		}
	};
	
	// DECLARE PLUGIN

	$.fn.mixitup = function(method, arg){
		if (methods[method]) {
			return methods[method].apply( this, Array.prototype.slice.call(arguments,1));
		} else if (typeof method === 'object' || ! method){
			return methods.init.apply( this, arguments );
		};
	};
	
	/* ==== THE MAGIC ==== */
	
	function goMix(filter, sortby, order, $cont, config){
		
		// WE ARE NOW MIXING

		clearInterval(config.failsafe);
		config.mixing = true;	
		
		// APPLY ARGS TO CONFIG
		
		config.filter = filter;
		
		// FIRE "ONMIXSTART" CALLBACK
		
		if(typeof config.onMixStart == 'function') {
			var output = config.onMixStart.call(this, config);
			
			// UPDATE CONFIG IF DATA RETURNED
			
			config = output ? output : config;
		};
		
		// SHORT LOCAL VARS
		
		var speed = config.transitionSpeed;
		
		// REBUILD TRANSITION AND PERSPECTIVE OBJECTS
		
		for(var i = 0; i<2; i++){
			var a = i==0 ? a = config.prefix : '';
			config.transition[a+'transition'] = 'all '+speed+'ms linear';
			config.transition[a+'transform'] = a+'translate3d(0,0,0)';
			config.perspective[a+'perspective'] = config.perspectiveDistance+'px';
			config.perspective[a+'perspective-origin'] = config.perspectiveOrigin;
		};
		
		// CACHE TARGET ELEMENTS FOR QUICK ACCESS
		
		var mixSelector = config.targetSelector,
		$targets = $cont.find(mixSelector);
		
		// ADD DATA OBJECT TO EACH TARGET
		
		$targets.each(function(){
			this.data = {};
		});
		
		// RE-DEFINE CONTAINER INCASE NOT IMMEDIATE PARENT OF TARGET ELEMENTS 
		
		var $par = $targets.parent();
	
		// ADD PERSPECTIVE TO CONTAINER 
		
		$par.css(config.perspective);
		
		// SETUP EASING

		config.easingFallback = 'ease-in-out';
		if(config.easing == 'smooth')config.easing = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
		if(config.easing == 'snap')config.easing = 'cubic-bezier(0.77, 0, 0.175, 1)';
		if(config.easing == 'windback'){
			config.easing = 'cubic-bezier(0.175, 0.885, 0.320, 1.275)',
			config.easingFallback = 'cubic-bezier(0.175, 0.885, 0.320, 1)'; // Fall-back for old webkit, with no values > 1 or < 1
		};
		if(config.easing == 'windup'){
			config.easing = 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
			config.easingFallback = 'cubic-bezier(0.6, 0.28, 0.735, 0.045)';
		};
		
		// USE LIST SPECIFIC EFFECTS IF DECLARED
		
		var effectsOut = config.layoutMode == 'list' && config.listEffects != null ? config.listEffects : config.effects;
	
		// BUILD EFFECTS STRINGS & SKIP IF IE8
	
		if (Array.prototype.indexOf){
			config.fade = effectsOut.indexOf('fade') > -1 ? '0' : '';
			config.scale = effectsOut.indexOf('scale') > -1 ? 'scale(.01)' : '';
			config.rotateZ = effectsOut.indexOf('rotateZ') > -1 ? 'rotate(180deg)' : '';
			config.rotateY = effectsOut.indexOf('rotateY') > -1 ? 'rotateY(90deg)' : '';
			config.rotateX = effectsOut.indexOf('rotateX') > -1 ? 'rotateX(90deg)' : '';
			config.blur = effectsOut.indexOf('blur') > -1 ? 'blur(8px)' : '';
			config.grayscale = effectsOut.indexOf('grayscale') > -1 ? 'grayscale(100%)' : '';
		};
		
		// DECLARE NEW JQUERY OBJECTS FOR GROUPING
		
		var $show = $(), 
		$hide = $(),
		filterArray = [],
		multiDimensional = false;
		
		// BUILD FILTER ARRAY(S)
		
		if(typeof filter === 'string'){
			
			// SINGLE DIMENSIONAL FILTERING
			
			filterArray = buildFilterArray(filter);
			
		} else {
			
			// MULTI DIMENSIONAL FILTERING
			
			multiDimensional = true;
			
			$.each(filter,function(i){
				filterArray[i] = buildFilterArray(this);
			});
		};

		// "OR" LOGIC (DEFAULT)
		
		if(config.filterLogic == 'or'){
			
			if(filterArray[0] == '') filterArray.shift(); // IF FIRST ITEM IN ARRAY IS AN EMPTY SPACE, DELETE
			
			// IF NO ELEMENTS ARE DESIRED THEN HIDE ALL VISIBLE ELEMENTS
		
			if(filterArray.length < 1){
				
				$hide = $hide.add($cont.find(mixSelector+':visible'));
				
			} else {

			// ELSE CHECK EACH TARGET ELEMENT FOR ANY FILTER CATEGORY:
			
				$targets.each(function(){
					var $t = $(this);
					if(!multiDimensional){
						// IF HAS ANY FILTER, ADD TO "SHOW" OBJECT
						if($t.is('.'+filterArray.join(', .'))){
							$show = $show.add($t);
						// ELSE IF HAS NO FILTERS, ADD TO "HIDE" OBJECT
						} else {
							$hide = $hide.add($t);
						};
					} else {
						
						var pass = 0;
						// FOR EACH DIMENSION
						
						$.each(filterArray,function(i){
							if(this.length){
								if($t.is('.'+this.join(', .'))){
									pass++
								};
							} else if(pass > 0){
								pass++;
							};
						});
						// IF PASSES ALL DIMENSIONS, SHOW
						if(pass == filterArray.length){
							$show = $show.add($t);
						// ELSE HIDE
						} else {
							$hide = $hide.add($t);
						};
					};
				});
			
			};
	
		} else {
			
		// "AND" LOGIC
			
			// ADD "MIX_SHOW" CLASS TO ELEMENTS THAT HAVE ALL FILTERS
			
			$show = $show.add($par.find(mixSelector+'.'+filterArray.join('.')));
			
			// ADD "MIX_HIDE" CLASS TO EVERYTHING ELSE
			
			$hide = $hide.add($par.find(mixSelector+':not(.'+filterArray.join('.')+'):visible'));
		};
		
		// GET TOTAL NUMBER OF ELEMENTS TO SHOW
		
		var total = $show.length;
		
		// DECLARE NEW JQUERY OBJECTS

		var $tohide = $(),
		$toshow = $(),
		$pre = $();
		
		// FOR ELEMENTS TO BE HIDDEN, IF NOT ALREADY HIDDEN THEN ADD TO OBJECTS "TOHIDE" AND "PRE" 
		// TO INDICATE PRE-EXISTING ELEMENTS TO BE HIDDEN
		
		$hide.each(function(){
			var $t = $(this);
			if($t.css('display') != 'none'){
				$tohide = $tohide.add($t);
				$pre = $pre.add($t);
			};
		});
		
		// IF ALL ELEMENTS ARE ALREADY SHOWN AND THERE IS NOTHING TO HIDE, AND NOT PERFORMING A LAYOUT CHANGE OR SORT:
		
		if($show.filter(':visible').length == total && !$tohide.length && !sortby){
			
			if(config.origLayout == config.layoutMode){
				
				// THEN CLEAN UP AND GO HOME

				resetFilter();
				return false;
			} else {
				
				// IF ONLY ONE ITEM AND CHANGING FORM GRID TO LIST, MOST LIKELY POSITION WILL NOT CHANGE SO WE'RE DONE
			
				if($show.length == 1){ 
					
					if(config.layoutMode == 'list'){ 
						$cont.addClass(config.listClass);
						$cont.removeClass(config.gridClass);
						$pre.css('display',config.targetDisplayList);
					} else {
						$cont.addClass(config.gridClass);
						$cont.removeClass(config.listClass);
						$pre.css('display',config.targetDisplayGrid);
					};
					
					// THEN CLEAN UP AND GO HOME

					resetFilter();
					return false;
				}
			};
		};
		
		// GET CONTAINER'S STARTING HEIGHT

		config.origHeight = $par.height();
		
		// IF THERE IS SOMETHING TO BE SHOWN:

		if($show.length){
			
			// REMOVE "FAIL CLASS" FROM CONTAINER IF EXISTS
			
			$cont.removeClass(config.failClass);
			
			
			// FOR ELEMENTS TO BE SHOWN, IF NOT ALREADY SHOWN THEN ADD TO OBJECTS "TOSHOW" ELSE ADD CLASS "MIX_PRE"
			// TO INDICATE PRE-EXISTING ELEMENT

			$show.each(function(){ 
				var $t = $(this);
				if($t.css('display') == 'none'){
					$toshow = $toshow.add($t)
				} else {
					$pre = $pre.add($t);
				};
			});
	
			// IF NON-ANIMATED LAYOUT MODE TRANSITION:
		
			if((config.origLayout != config.layoutMode) && config.animateGridList == false){ 
			
				// ADD NEW DISPLAY TYPES, CLEAN UP AND GO HOME
				
				if(config.layoutMode == 'list'){ 
					$cont.addClass(config.listClass);
					$cont.removeClass(config.gridClass);
					$pre.css('display',config.targetDisplayList);
				} else {
					$cont.addClass(config.gridClass);
					$cont.removeClass(config.listClass);
					$pre.css('display',config.targetDisplayGrid);
				};
				
				resetFilter();
				return false;
			};
			
			// IF IE
		
			if(!window.atob){
				resetFilter();
				return false;
			};
			
			// OVERRIDE ANY EXISTING TRANSITION TIMING FOR CALCULATIONS
			
			$targets.css(config.clean);
			
			// FOR EACH PRE-EXISTING ELEMENT, ADD STARTING POSITION TO 'ORIGPOS' ARRAY
			
			$pre.each(function(){
				this.data.origPos = $(this).offset();
			});
	
			// TEMPORARILY SHOW ALL ELEMENTS TO SHOW (THAT ARE NOT ALREADY SHOWN), WITHOUT HIDING ELEMENTS TO HIDE
			// AND ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.layoutMode == 'list'){
				$cont.addClass(config.listClass);
				$cont.removeClass(config.gridClass);
				$toshow.css('display',config.targetDisplayList);
			} else {
				$cont.addClass(config.gridClass);
				$cont.removeClass(config.listClass);
				$toshow.css('display',config.targetDisplayGrid);
			};
			
			// FOR EACH ELEMENT NOW SHOWN, ADD ITS INTERMEDIATE POSITION TO 'SHOWINTERPOS' ARRAY
	
			$toshow.each(function(){
				this.data.showInterPos = $(this).offset();
			});
			
			// FOR EACH ELEMENT TO BE HIDDEN, BUT NOT YET HIDDEN, AND NOW MOVED DUE TO SHOWN ELEMENTS,
			// ADD ITS INTERMEDIATE POSITION TO 'HIDEINTERPOS' ARRAY

			$tohide.each(function(){
				this.data.hideInterPos = $(this).offset();
			});
			
			// FOR EACH PRE-EXISTING ELEMENT, NOW MOVED DUE TO SHOWN ELEMENTS, ADD ITS POSITION TO 'PREINTERPOS' ARRAY
	
			$pre.each(function(){
				this.data.preInterPos = $(this).offset();
			});
			
			// SET DISPLAY PROPERTY OF PRE-EXISTING ELEMENTS INCASE WE ARE CHANGING LAYOUT MODE
	
			if(config.layoutMode == 'list'){
				$pre.css('display',config.targetDisplayList);
			} else {
				$pre.css('display',config.targetDisplayGrid);
			};
			
			// IF A SORT ARGUMENT HAS BEEN SENT, RUN SORT FUNCTION SO OBJECTS WILL MOVE TO THEIR FINAL ORDER
			
			if(sortby){
				sort(sortby, order, $cont, config);	
			};
			
			// IF VISIBLE SORT ORDER IS THE SAME (WHICH WOULD NOT TRIGGER A TRANSITION EVENT)
		
			if(sortby && compareArr(config.origSort, config.checkSort)){
				
				// THEN CLEAN UP AND GO HOME
				resetFilter();
				return false;
			};
			
			// TEMPORARILY HIDE ALL SHOWN ELEMENTS TO HIDE

			$tohide.hide();
			
			// FOR EACH ELEMENT TO SHOW, AND NOW MOVED DUE TO HIDDEN ELEMENTS BEING REMOVED, 
			// ADD ITS POSITION TO 'FINALPOS' ARRAY
			
			$toshow.each(function(i){
				this.data.finalPos = $(this).offset();
			});
			
			// FOR EACH PRE-EXISTING ELEMENT NOW MOVED DUE TO HIDDEN ELEMENTS BEING REMOVED,
			// ADD ITS POSITION TO 'FINALPREPOS' ARRAY
	
			$pre.each(function(){
				this.data.finalPrePos = $(this).offset();
			});
			
			// SINCE WE ARE IN OUT FINAL STATE, GET NEW HEIGHT OF CONTAINER
	
			config.newHeight = $par.height();
			
			// IF A SORT ARGUMENT AS BEEN SENT, RUN SORT FUNCTION 'RESET' TO MOVE ELEMENTS BACK TO THEIR STARTING ORDER
			
			if(sortby){
				sort('reset', null, $cont, config);
			};
			
			// RE-HIDE ALL ELEMENTS TEMPORARILY SHOWN
			
			$toshow.hide();
			
			// SET DISPLAY PROPERTY OF PRE-EXISTING ELEMENTS BACK TO THEIR 
			// ORIGINAL PROPERTY, INCASE WE ARE CHANGING LAYOUT MODE
			
			$pre.css('display',config.origDisplay);
			
			// ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.origDisplay == 'block'){
				$cont.addClass(config.listClass);
				$toshow.css('display', config.targetDisplayList);
			} else {
				$cont.removeClass(config.listClass);
				$toshow.css('display', config.targetDisplayGrid);
			};
			
			// IF WE ARE ANIMATING CONTAINER, RESET IT TO ITS STARTING HEIGHT
		
			if(config.resizeContainer)$par.css('height', config.origHeight+'px');
	
			// ADD TRANSFORMS TO ALL ELEMENTS TO SHOW
			
			var toShowCSS = {};
			
			for(var i = 0; i<2; i++){
				var a = i==0 ? a = config.prefix : '';
				toShowCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
				toShowCSS[a+'filter'] = config.blur+' '+config.grayscale;
			};
			
			$toshow.css(toShowCSS);
	
			// FOR EACH PRE-EXISTING ELEMENT, SUBTRACT ITS INTERMEDIATE POSITION FROM ITS ORIGINAL POSITION 
			// TO GET ITS STARTING OFFSET
	
			$pre.each(function(){
				var data = this.data,
				$t = $(this);
				
				if ($t.hasClass('mix_tohide')){
					data.preTX = data.origPos.left - data.hideInterPos.left;
					data.preTY = data.origPos.top - data.hideInterPos.top;
				} else {
					data.preTX = data.origPos.left - data.preInterPos.left;
					data.preTY = data.origPos.top - data.preInterPos.top;
				};
				var preCSS = {};
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					preCSS[a+'transform'] = 'translate('+data.preTX+'px,'+data.preTY+'px)';
				};
				
				$t.css(preCSS);	
			});
			
			// ADD/REMOVE GRID AND LIST CLASSES FROM CONTAINER
	
			if(config.layoutMode == 'list'){
				$cont.addClass(config.listClass);
				$cont.removeClass(config.gridClass);
			} else {
				$cont.addClass(config.gridClass);
				$cont.removeClass(config.listClass);
			};
			
			// WRAP ANIMATION FUNCTIONS IN 10ms TIMEOUT TO PREVENT RACE CONDITION
			
			var delay = setTimeout(function(){
		
				// APPLY TRANSITION TIMING TO CONTAINER, AND BEGIN ANIMATION TO NEW HEIGHT
				
				if(config.resizeContainer){
					var containerCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						containerCSS[a+'transition'] = 'all '+speed+'ms ease-in-out';
						containerCSS['height'] = config.newHeight+'px';
					};
					$par.css(containerCSS);
				};
	
				// BEGIN FADING IN/OUT OF ALL ELEMENTS TO SHOW/HIDE
				$tohide.css('opacity',config.fade);
				$toshow.css('opacity',1);
	
				// FOR EACH ELEMENT BEING SHOWN, CALCULATE ITS TRAJECTORY BY SUBTRACTING
				// ITS INTERMEDIATE POSITION FROM ITS FINAL POSITION.
				// ALSO ADD SPEED AND EASING
				
				$toshow.each(function(){
					var data = this.data;
					data.tX = data.finalPos.left - data.showInterPos.left;
					data.tY = data.finalPos.top - data.showInterPos.top;
					
					var toShowCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						toShowCSS[a+'transition-property'] = a+'transform, '+a+'filter, opacity';
						toShowCSS[a+'transition-timing-function'] = config.easing+', linear, linear';
						toShowCSS[a+'transition-duration'] = speed+'ms';
						toShowCSS[a+'transition-delay'] = '0';
						toShowCSS[a+'transform'] = 'translate('+data.tX+'px,'+data.tY+'px)';
						toShowCSS[a+'filter'] = 'none';
					};
					
					$(this).css('-webkit-transition', 'all '+speed+'ms '+config.easingFallback).css(toShowCSS);
				});
				
				// FOR EACH PRE-EXISTING ELEMENT, IF IT HAS A FINAL POSITION, CALCULATE 
				// ITS TRAJETORY BY SUBTRACTING ITS INTERMEDIATE POSITION FROM ITS FINAL POSITION.
				// ALSO ADD SPEED AND EASING
				
				$pre.each(function(){
					var data = this.data
					data.tX = data.finalPrePos.left != 0 ? data.finalPrePos.left - data.preInterPos.left : 0;
					data.tY = data.finalPrePos.left != 0 ? data.finalPrePos.top - data.preInterPos.top : 0;
					
					var preCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						preCSS[a+'transition'] = 'all '+speed+'ms '+config.easing;
						preCSS[a+'transform'] = 'translate('+data.tX+'px,'+data.tY+'px)';
					};
					
					$(this).css('-webkit-transition', 'all '+speed+'ms '+config.easingFallback).css(preCSS);
				});
		
				// BEGIN TRANSFORMS ON ALL ELEMENTS TO BE HIDDEN
				
				var toHideCSS = {};
				for(var i = 0; i<2; i++){
					var a = i==0 ? a = config.prefix : '';
					toHideCSS[a+'transition'] = 'all '+speed+'ms '+config.easing+', '+a+'filter '+speed+'ms linear, opacity '+speed+'ms linear';
					toHideCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
					toHideCSS[a+'filter'] = config.blur+' '+config.grayscale;
					toHideCSS['opacity'] = config.fade;
				};
				
				$tohide.css(toHideCSS);
				
				// ALL ANIMATIONS HAVE NOW BEEN STARTED, NOW LISTEN FOR TRANSITION END:
				
				$par.bind('webkitTransitionEnd transitionend otransitionend oTransitionEnd',function(e){
					
					if (e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1){
						
						if(mixSelector.indexOf('.') > -1){
						
						// IF MIXSELECTOR IS A CLASS NAME
						
							if($(e.target).hasClass(mixSelector.replace('.',''))){
								resetFilter();
							};
						
						} else {
							
						// IF MIXSELECTOR IS A TAG
						
							if($(e.target).is(mixSelector)){
								resetFilter();
							};
							
						};
						
					};
				});	
	
			},10);
			
			// LAST RESORT EMERGENCY FAILSAFE
			
			config.failsafe = setTimeout(function(){
				if(config.mixing){
					resetFilter();
				};
			}, speed + 400);
	
		} else {
			
		// ELSE IF NOTHING TO SHOW, AND EVERYTHING TO BE HIDDEN
		
			// IF WE ARE RESIZING CONTAINER, SET ITS STARTING HEIGHT
	
			if(config.resizeContainer)$par.css('height', config.origHeight+'px');
			
			// IF IE
			
			if(!window.atob){
				resetFilter();
				return false;
			};
			
			// GROUP ALL ELEMENTS TO HIDE INTO JQUERY OBJECT
			
			$tohide = $hide;
			
			// WRAP ANIMATION FUNCTIONS IN A 10ms DELAY TO PREVENT RACE CONDITION
	
			var delay = setTimeout(function(){
				
				// APPLY PERSPECTIVE TO CONTAINER
	
				$par.css(config.perspective);
				
				// APPLY TRANSITION TIMING TO CONTAINER, AND BEGIN ANIMATION TO NEW HEIGHT
		
				if(config.resizeContainer){
					var containerCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						containerCSS[a+'transition'] = 'height '+speed+'ms ease-in-out';
						containerCSS['height'] = config.minHeight+'px';
					};
					$par.css(containerCSS);
				};
	
				// APPLY TRANSITION TIMING TO ALL TARGET ELEMENTS
				
				$targets.css(config.transition);
				
				// GET TOTAL NUMBER OF ELEMENTS TO HIDE
	
				var totalHide = $hide.length;
				
				// IF SOMETHING TO HIDE:
	
				if(totalHide){
					
					// BEGIN TRANSFORMS ON ALL ELEMENTS TO BE HIDDEN

					var toHideCSS = {};
					for(var i = 0; i<2; i++){
						var a = i==0 ? a = config.prefix : '';
						toHideCSS[a+'transform'] = config.scale+' '+config.rotateX+' '+config.rotateY+' '+config.rotateZ;
						toHideCSS[a+'filter'] = config.blur+' '+config.grayscale;
						toHideCSS['opacity'] = config.fade;
					};

					$tohide.css(toHideCSS);
					
					// ALL ANIMATIONS HAVE NOW BEEN STARTED, NOW LISTEN FOR TRANSITION END:

					$par.bind('webkitTransitionEnd transitionend otransitionend oTransitionEnd',function(e){
						if (e.originalEvent.propertyName.indexOf('transform') > -1 || e.originalEvent.propertyName.indexOf('opacity') > -1){
							$cont.addClass(config.failClass);
							resetFilter();
						};
					});
		
				} else {
					
				// ELSE, WE'RE DONE MIXING
				 	
					config.mixing = false;
				};
	
			}, 10);
		}; 
		
		// CLEAN UP AND RESET FUNCTION

		function resetFilter(){
			
			// UNBIND TRANSITION END EVENTS FROM CONTAINER
			
			$par.unbind('webkitTransitionEnd transitionend otransitionend oTransitionEnd');
			
			// IF A SORT ARGUMENT HAS BEEN SENT, SORT ELEMENTS TO THEIR FINAL ORDER
			
			if(sortby){
				sort(sortby, order, $cont, config);
			};
			
			// EMPTY SORTING ARRAYS
		
			config.startOrder = [], config.newOrder = [], config.origSort = [], config.checkSort = [];
		
			// REMOVE INLINE STYLES FROM ALL TARGET ELEMENTS AND SLAM THE BRAKES ON
			
			$targets.removeStyle(
				config.prefix+'filter, filter, '+config.prefix+'transform, transform, opacity, display'
			).css(config.clean).removeAttr('data-checksum');
			
			// BECAUSE IE SUCKS
			
			if(!window.atob){
				$targets.css({
					display: 'none',
					opacity: '0'
				});
			};
			
			// REMOVE HEIGHT FROM CONTAINER ONLY IF RESIZING
			
			var remH = config.resizeContainer ? 'height' : '';
			
			// REMOVE INLINE STYLES FROM CONTAINER
		
			$par.removeStyle(
				config.prefix+'transition, transition, '+config.prefix+'perspective, perspective, '+config.prefix+'perspective-origin, perspective-origin, '+remH
			);
			
			// ADD FINAL DISPLAY PROPERTIES AND OPACITY TO ALL SHOWN ELEMENTS
			// CACHE CURRENT LAYOUT MODE & SORT FOR NEXT MIX
			
			if(config.layoutMode == 'list'){
				$show.css({display:config.targetDisplayList, opacity:'1'});
				config.origDisplay = config.targetDisplayList;
			} else {
				$show.css({display:config.targetDisplayGrid, opacity:'1'});
				config.origDisplay = config.targetDisplayGrid;
			};
			config.origLayout = config.layoutMode;
				
			var wait = setTimeout(function(){
				
				// LET GO OF THE BRAKES
				
				$targets.removeStyle(config.prefix+'transition, transition');
			
				// WE'RE DONE MIXING
			
				config.mixing = false;
			
				// FIRE "ONMIXEND" CALLBACK
			
				if(typeof config.onMixEnd == 'function') {
					var output = config.onMixEnd.call(this, config);
				
					// UPDATE CONFIG IF DATA RETURNED
				
					config = output ? output : config;
				};
			});
		};
	};
	
	// SORT FUNCTION
	
	function sort(sortby, order, $cont, config){

		// COMPARE BY ATTRIBUTE

		function compare(a,b) {
			var sortAttrA = isNaN(a.attr(sortby) * 1) ? a.attr(sortby).toLowerCase() : a.attr(sortby) * 1,
				sortAttrB = isNaN(b.attr(sortby) * 1) ? b.attr(sortby).toLowerCase() : b.attr(sortby) * 1;
		  	if (sortAttrA < sortAttrB)
		    	return -1;
		  	if (sortAttrA > sortAttrB)
		    	return 1;
		  	return 0;
		};
		
		// REBUILD DOM

		function rebuild(element){
			if(order == 'asc'){
				$sortWrapper.prepend(element).prepend(' ');
			} else {
				$sortWrapper.append(element).append(' ');
			};
		};
		
		// RANDOMIZE ARRAY

		function arrayShuffle(oldArray){
			var newArray = oldArray.slice();
		 	var len = newArray.length;
			var i = len;
			while (i--){
			 	var p = parseInt(Math.random()*len);
				var t = newArray[i];
		  		newArray[i] = newArray[p];
			  	newArray[p] = t;
		 	};
			return newArray; 
		};
		
		// SORT
		
		$cont.find(config.targetSelector).wrapAll('<div class="mix_sorter"/>');
		
		var $sortWrapper = $cont.find('.mix_sorter');
		
		if(!config.origSort.length){
			$sortWrapper.find(config.targetSelector+':visible').each(function(){
				$(this).wrap('<s/>');
				config.origSort.push($(this).parent().html().replace(/\s+/g, ''));
				$(this).unwrap();
			});
		};
		
		
		
		$sortWrapper.empty();
		
		if(sortby == 'reset'){
			$.each(config.startOrder,function(){
				$sortWrapper.append(this).append(' ');
			});
		} else if(sortby == 'default'){
			$.each(config.origOrder,function(){
				rebuild(this);
			});
		} else if(sortby == 'random'){
			if(!config.newOrder.length){
				config.newOrder = arrayShuffle(config.startOrder);
			};
			$.each(config.newOrder,function(){
				$sortWrapper.append(this).append(' ');
			});	
		} else if(sortby == 'custom'){
			$.each(order, function(){
				rebuild(this);
			});
		} else { 
			// SORT BY ATTRIBUTE
			
			if(typeof config.origOrder[0].attr(sortby) === 'undefined'){
				console.log('No such attribute found. Terminating');
				return false;
			};
			
			if(!config.newOrder.length){
				$.each(config.origOrder,function(){
					config.newOrder.push($(this));
				});
				config.newOrder.sort(compare);
			};
			$.each(config.newOrder,function(){
				rebuild(this);
			});
			
		};
		config.checkSort = [];
		$sortWrapper.find(config.targetSelector+':visible').each(function(i){
			var $t = $(this);
			if(i == 0){
				
				// PREVENT COMPARE RETURNING FALSE POSITIVES ON ELEMENTS WITH NO CLASS/ATTRIBUTES
				
				$t.attr('data-checksum','1');
			};
			$t.wrap('<s/>');
			config.checkSort.push($t.parent().html().replace(/\s+/g, ''));
			$t.unwrap();
		});
		
		$cont.find(config.targetSelector).unwrap();
	};
	
	// FIND VENDOR PREFIX

	function prefix(el) {
	    var prefixes = ["Webkit", "Moz", "O", "ms"];
	    for (var i = 0; i < prefixes.length; i++){
	        if (prefixes[i] + "Transition" in el.style){
	            return prefixes[i];
	        };
	    };
	    return "transition" in el.style ? "" : false;
	};
	
	// REMOVE SPECIFIC STYLES
	
	$.fn.removeStyle = function(style){
		return this.each(function(){
			var obj = $(this);
			style = style.replace(/\s+/g, '');
			var styles = style.split(',');
			$.each(styles,function(){
				
				var search = new RegExp(this.toString() + '[^;]+;?', 'g');
				obj.attr('style', function(i, style){
					if(style) return style.replace(search, '');
			    });
			});
		});
    };

	// COMPARE ARRAYS 
	
	function compareArr(a,b){
	    if (a.length != b.length) return false;
	    for (var i = 0; i < b.length; i++){
	        if (a[i].compare) { 
	            if (!a[i].compare(b[i])) return false;
	        };
	        if (a[i] !== b[i]) return false;
	    };
	    return true;
	};
	
	// BUILD FILTER ARRAY(S)
	
	function buildFilterArray(str){
		// CLEAN FILTER STRING
		str = str.replace(/\s{2,}/g, ' ');
		// FOR EACH PEROID SEPERATED CLASS NAME, ADD STRING TO FILTER ARRAY
		var arr = str.split(' ');
		// IF ALL, REPLACE WITH MIX_ALL
		$.each(arr,function(i){
			if(this == 'all')arr[i] = 'mix_all';
		});
		if(arr[0] == "")arr.shift(); 
		return arr;
	};

	
})(jQuery);
!function(t,i,e,s){"use strict";function o(i,e){this.element=i,this.$context=t(i).data("api",this),this.$layers=this.$context.find(".layer");var s={calibrateX:this.$context.data("calibrate-x")||null,calibrateY:this.$context.data("calibrate-y")||null,invertX:this.$context.data("invert-x")||null,invertY:this.$context.data("invert-y")||null,limitX:parseFloat(this.$context.data("limit-x"))||null,limitY:parseFloat(this.$context.data("limit-y"))||null,scalarX:parseFloat(this.$context.data("scalar-x"))||null,scalarY:parseFloat(this.$context.data("scalar-y"))||null,frictionX:parseFloat(this.$context.data("friction-x"))||null,frictionY:parseFloat(this.$context.data("friction-y"))||null,originX:parseFloat(this.$context.data("origin-x"))||null,originY:parseFloat(this.$context.data("origin-y"))||null};for(var o in s)null===s[o]&&delete s[o];t.extend(this,r,e,s),this.calibrationTimer=null,this.calibrationFlag=!0,this.enabled=!1,this.depths=[],this.raf=null,this.bounds=null,this.ex=0,this.ey=0,this.ew=0,this.eh=0,this.ecx=0,this.ecy=0,this.erx=0,this.ery=0,this.cx=0,this.cy=0,this.ix=0,this.iy=0,this.mx=0,this.my=0,this.vx=0,this.vy=0,this.onMouseMove=this.onMouseMove.bind(this),this.onDeviceOrientation=this.onDeviceOrientation.bind(this),this.onOrientationTimer=this.onOrientationTimer.bind(this),this.onCalibrationTimer=this.onCalibrationTimer.bind(this),this.onAnimationFrame=this.onAnimationFrame.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.initialise()}var n="parallax",a=30,r={relativeInput:!1,clipRelativeInput:!1,calibrationThreshold:100,calibrationDelay:500,supportDelay:500,calibrateX:!1,calibrateY:!0,invertX:!0,invertY:!0,limitX:!1,limitY:!1,scalarX:10,scalarY:10,frictionX:.1,frictionY:.1,originX:.5,originY:.5};o.prototype.transformSupport=function(t){for(var o=e.createElement("div"),n=!1,a=null,r=!1,h=null,l=null,p=0,c=this.vendors.length;c>p;p++)if(null!==this.vendors[p]?(h=this.vendors[p][0]+"transform",l=this.vendors[p][1]+"Transform"):(h="transform",l="transform"),o.style[l]!==s){n=!0;break}switch(t){case"2D":r=n;break;case"3D":if(n){var m=e.body||e.createElement("body"),u=e.documentElement,y=u.style.overflow;e.body||(u.style.overflow="hidden",u.appendChild(m),m.style.overflow="hidden",m.style.background=""),m.appendChild(o),o.style[l]="translate3d(1px,1px,1px)",a=i.getComputedStyle(o).getPropertyValue(h),r=a!==s&&a.length>0&&"none"!==a,u.style.overflow=y,m.removeChild(o)}}return r},o.prototype.ww=null,o.prototype.wh=null,o.prototype.wcx=null,o.prototype.wcy=null,o.prototype.wrx=null,o.prototype.wry=null,o.prototype.portrait=null,o.prototype.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),o.prototype.vendors=[null,["-webkit-","webkit"],["-moz-","Moz"],["-o-","O"],["-ms-","ms"]],o.prototype.motionSupport=!!i.DeviceMotionEvent,o.prototype.orientationSupport=!!i.DeviceOrientationEvent,o.prototype.orientationStatus=0,o.prototype.transform2DSupport=o.prototype.transformSupport("2D"),o.prototype.transform3DSupport=o.prototype.transformSupport("3D"),o.prototype.propertyCache={},o.prototype.initialise=function(){"static"===this.$context.css("position")&&this.$context.css({position:"relative"}),this.accelerate(this.$context),this.updateLayers(),this.updateDimensions(),this.enable(),this.queueCalibration(this.calibrationDelay)},o.prototype.updateLayers=function(){this.$layers=this.$context.find(".layer"),this.depths=[],this.$layers.css({position:"absolute",display:"block",left:0,top:0}),this.$layers.first().css({position:"relative"}),this.accelerate(this.$layers),this.$layers.each(t.proxy(function(i,e){this.depths.push(t(e).data("depth")||0)},this))},o.prototype.updateDimensions=function(){this.ww=i.innerWidth,this.wh=i.innerHeight,this.wcx=this.ww*this.originX,this.wcy=this.wh*this.originY,this.wrx=Math.max(this.wcx,this.ww-this.wcx),this.wry=Math.max(this.wcy,this.wh-this.wcy)},o.prototype.updateBounds=function(){this.bounds=this.element.getBoundingClientRect(),this.ex=this.bounds.left,this.ey=this.bounds.top,this.ew=this.bounds.width,this.eh=this.bounds.height,this.ecx=this.ew*this.originX,this.ecy=this.eh*this.originY,this.erx=Math.max(this.ecx,this.ew-this.ecx),this.ery=Math.max(this.ecy,this.eh-this.ecy)},o.prototype.queueCalibration=function(t){clearTimeout(this.calibrationTimer),this.calibrationTimer=setTimeout(this.onCalibrationTimer,t)},o.prototype.enable=function(){this.enabled||(this.enabled=!0,this.orientationSupport?(this.portrait=null,i.addEventListener("deviceorientation",this.onDeviceOrientation),setTimeout(this.onOrientationTimer,this.supportDelay)):(this.cx=0,this.cy=0,this.portrait=!1,i.addEventListener("mousemove",this.onMouseMove)),i.addEventListener("resize",this.onWindowResize),this.raf=requestAnimationFrame(this.onAnimationFrame))},o.prototype.disable=function(){this.enabled&&(this.enabled=!1,this.orientationSupport?i.removeEventListener("deviceorientation",this.onDeviceOrientation):i.removeEventListener("mousemove",this.onMouseMove),i.removeEventListener("resize",this.onWindowResize),cancelAnimationFrame(this.raf))},o.prototype.calibrate=function(t,i){this.calibrateX=t===s?this.calibrateX:t,this.calibrateY=i===s?this.calibrateY:i},o.prototype.invert=function(t,i){this.invertX=t===s?this.invertX:t,this.invertY=i===s?this.invertY:i},o.prototype.friction=function(t,i){this.frictionX=t===s?this.frictionX:t,this.frictionY=i===s?this.frictionY:i},o.prototype.scalar=function(t,i){this.scalarX=t===s?this.scalarX:t,this.scalarY=i===s?this.scalarY:i},o.prototype.limit=function(t,i){this.limitX=t===s?this.limitX:t,this.limitY=i===s?this.limitY:i},o.prototype.origin=function(t,i){this.originX=t===s?this.originX:t,this.originY=i===s?this.originY:i},o.prototype.clamp=function(t,i,e){return t=Math.max(t,i),t=Math.min(t,e)},o.prototype.css=function(i,e,o){var n=this.propertyCache[e];if(!n)for(var a=0,r=this.vendors.length;r>a;a++)if(n=null!==this.vendors[a]?t.camelCase(this.vendors[a][1]+"-"+e):e,i.style[n]!==s){this.propertyCache[e]=n;break}i.style[n]=o},o.prototype.accelerate=function(t){for(var i=0,e=t.length;e>i;i++){var s=t[i];this.css(s,"transform","translate3d(0,0,0)"),this.css(s,"transform-style","preserve-3d"),this.css(s,"backface-visibility","hidden")}},o.prototype.setPosition=function(t,i,e){i+="px",e+="px",this.transform3DSupport?this.css(t,"transform","translate3d("+i+","+e+",0)"):this.transform2DSupport?this.css(t,"transform","translate("+i+","+e+")"):(t.style.left=i,t.style.top=e)},o.prototype.onOrientationTimer=function(){this.orientationSupport&&0===this.orientationStatus&&(this.disable(),this.orientationSupport=!1,this.enable())},o.prototype.onCalibrationTimer=function(){this.calibrationFlag=!0},o.prototype.onWindowResize=function(){this.updateDimensions()},o.prototype.onAnimationFrame=function(){this.updateBounds();var t=this.ix-this.cx,i=this.iy-this.cy;(Math.abs(t)>this.calibrationThreshold||Math.abs(i)>this.calibrationThreshold)&&this.queueCalibration(0),this.portrait?(this.mx=this.calibrateX?i:this.iy,this.my=this.calibrateY?t:this.ix):(this.mx=this.calibrateX?t:this.ix,this.my=this.calibrateY?i:this.iy),this.mx*=this.ew*(this.scalarX/100),this.my*=this.eh*(this.scalarY/100),isNaN(parseFloat(this.limitX))||(this.mx=this.clamp(this.mx,-this.limitX,this.limitX)),isNaN(parseFloat(this.limitY))||(this.my=this.clamp(this.my,-this.limitY,this.limitY)),this.vx+=(this.mx-this.vx)*this.frictionX,this.vy+=(this.my-this.vy)*this.frictionY;for(var e=0,s=this.$layers.length;s>e;e++){var o=this.depths[e],n=this.$layers[e],a=this.vx*o*(this.invertX?-1:1),r=this.vy*o*(this.invertY?-1:1);this.setPosition(n,a,r)}this.raf=requestAnimationFrame(this.onAnimationFrame)},o.prototype.onDeviceOrientation=function(t){if(!this.desktop&&null!==t.beta&&null!==t.gamma){this.orientationStatus=1;var e=(t.beta||0)/a,s=(t.gamma||0)/a,o=i.innerHeight>i.innerWidth;this.portrait!==o&&(this.portrait=o,this.calibrationFlag=!0),this.calibrationFlag&&(this.calibrationFlag=!1,this.cx=e,this.cy=s),this.ix=e,this.iy=s}},o.prototype.onMouseMove=function(t){var i=t.clientX,e=t.clientY;!this.orientationSupport&&this.relativeInput?(this.clipRelativeInput&&(i=Math.max(i,this.ex),i=Math.min(i,this.ex+this.ew),e=Math.max(e,this.ey),e=Math.min(e,this.ey+this.eh)),this.ix=(i-this.ex-this.ecx)/this.erx,this.iy=(e-this.ey-this.ecy)/this.ery):(this.ix=(i-this.wcx)/this.wrx,this.iy=(e-this.wcy)/this.wry)};var h={enable:o.prototype.enable,disable:o.prototype.disable,updateLayers:o.prototype.updateLayers,calibrate:o.prototype.calibrate,friction:o.prototype.friction,invert:o.prototype.invert,scalar:o.prototype.scalar,limit:o.prototype.limit,origin:o.prototype.origin};t.fn[n]=function(i){var e=arguments;return this.each(function(){var s=t(this),a=s.data(n);a||(a=new o(this,i),s.data(n,a)),h[i]&&a[i].apply(a,Array.prototype.slice.call(e,1))})}}(window.jQuery||window.Zepto,window,document),function(){for(var t=0,i=["ms","moz","webkit","o"],e=0;e<i.length&&!window.requestAnimationFrame;++e)window.requestAnimationFrame=window[i[e]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[e]+"CancelAnimationFrame"]||window[i[e]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i){var e=(new Date).getTime(),s=Math.max(0,16-(e-t)),o=window.setTimeout(function(){i(e+s)},s);return t=e+s,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();
/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _build_assets_img_pattern_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../build/assets/img/pattern.png */ \"./build/assets/img/pattern.png\");\n/* harmony import */ var _build_assets_img_bread_bg_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../build/assets/img/bread-bg.png */ \"./build/assets/img/bread-bg.png\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_build_assets_img_pattern_png__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_build_assets_img_bread_bg_png__WEBPACK_IMPORTED_MODULE_3__.default);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n* Theme Name: bizwrap\\n* Description: bizwrap Theme for those who want responsive, clean and useful layout.\\n* Author: design_mylife\\n* Version: v1.5\\n* last update: 08 Sep. 2015\\n*/\\n/* Basic Styles\\n================================================== */\\nbody {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  background: #fff;\\n  -webkit-font-smoothing: antialiased;\\n  -webkit-text-size-adjust: 100%;\\n  cursor: default;\\n  font-size: 14px;\\n  font-weight: 500;\\n  color: #7a7a7a;\\n  height: 100%;\\n}\\nhtml {\\n  -webkit-text-size-adjust: none;\\n}\\n* {\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box;\\n  outline: none;\\n}\\na {\\n  text-decoration: none;\\n}\\na:hover {\\n  text-decoration: none;\\n}\\na.hover-color {\\n  -moz-transition: all 0.3s ease-in;\\n  -o-transition: all 0.3s ease-in;\\n  -webkit-transition: all 0.3s ease-in;\\n  transition: all 0.3s ease-in;\\n}\\na.hover-color:hover {\\n  color: #0faf97 !important;\\n}\\nimg {\\n  max-width: 100%;\\n  height: auto;\\n  -moz-transition: all 0.3s ease-in;\\n  -o-transition: all 0.3s ease-in;\\n  -webkit-transition: all 0.3s ease-in;\\n  transition: all 0.3s ease-in;\\n}\\np.lead {\\n  font-weight: 400;\\n}\\ni {\\n  display: inline-block;\\n}\\n/*margin spaces*/\\n.space-10 {\\n  width: 100%;\\n  height: 10px;\\n  clear: both;\\n}\\n.space-20 {\\n  width: 100%;\\n  height: 20px;\\n  clear: both;\\n}\\n.space-30 {\\n  width: 100%;\\n  height: 30px;\\n  clear: both;\\n}\\n.space-40 {\\n  width: 100%;\\n  height: 40px;\\n  clear: both;\\n}\\n.space-50 {\\n  width: 100%;\\n  height: 50px;\\n  clear: both;\\n}\\n.space-70 {\\n  width: 100%;\\n  height: 50px;\\n  clear: both;\\n}\\n.margin-btm-20 {\\n  margin-bottom: 20px;\\n}\\n.margin-btm-40 {\\n  margin-bottom: 40px;\\n}\\n/*--------padding------------*/\\n.padding-40 {\\n  padding: 40px 0;\\n}\\n.no-padding {\\n  padding: 0px;\\n}\\n/* Enable custom submit button styling in Safari mobile */\\ninput[type=\\\"submit\\\"] {\\n  -webkit-appearance: none;\\n}\\n::-moz-selection {\\n  color: #fff;\\n  text-shadow: none;\\n  background-color: #0faf97;\\n}\\n::selection {\\n  color: #fff;\\n  text-shadow: none;\\n  background-color: #0faf97;\\n}\\np,\\nblockquote {\\n  line-height: 23px;\\n}\\np {\\n  font-weight: 400;\\n}\\nblockquote {\\n  font-style: italic;\\n}\\niframe,\\nfieldset {\\n  border: 0;\\n  margin: 0;\\n  padding: 0;\\n}\\n.responsive-video {\\n  width: 100%;\\n  position: relative;\\n  padding: 0;\\n  padding-top: 50.25%;\\n}\\n.responsive-video iframe {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n/*==================== ========*/\\n/*========= Forms =========*/\\n/*============================*/\\n.form-box {\\n  padding: 15px;\\n  background: #fff;\\n  -webkit-box-shadow: 0px 1px 2px #999;\\n  -moz-box-shadow: 0px 1px 2px #999;\\n  -ms-box-shadow: 0px 1px 2px #999;\\n  box-shadow: 0px 1px 2px #999;\\n}\\nselect,\\ntextarea,\\ninput[type=\\\"text\\\"],\\ninput[type=\\\"password\\\"],\\ninput[type=\\\"datetime\\\"],\\ninput[type=\\\"datetime-local\\\"],\\ninput[type=\\\"date\\\"],\\ninput[type=\\\"month\\\"],\\ninput[type=\\\"time\\\"],\\ninput[type=\\\"week\\\"],\\ninput[type=\\\"number\\\"],\\ninput[type=\\\"email\\\"],\\ninput[type=\\\"url\\\"],\\ninput[type=\\\"search\\\"],\\ninput[type=\\\"tel\\\"],\\ninput[type=\\\"color\\\"],\\n.form-control {\\n  display: inline-block;\\n  -webkit-border-radius: 1px;\\n  -moz-border-radius: 1px;\\n  -ms-border-radius: 1px;\\n  border-radius: 1px;\\n  background-color: #fff;\\n  border: 1px solid #ddd;\\n  -webkit-border-radius: 0 2px 5px rgba(0, 0, 0, 0.1) inset;\\n  -moz-border-radius: 0 2px 5px rgba(0, 0, 0, 0.1) inset;\\n  -ms-border-radius: 0 2px 5px rgba(0, 0, 0, 0.1) inset;\\n  border-radius: 0 2px 5px rgba(0, 0, 0, 0.1) inset;\\n  font-size: 12px;\\n  color: #7a7a7a;\\n  height: 40px;\\n  background: #fff;\\n  -moz-transition: all 0.3s ease-in;\\n  -o-transition: all 0.3s ease-in;\\n  -webkit-transition: all 0.3s ease-in;\\n  transition: all 0.3s ease-in;\\n}\\ntextarea:focus,\\ninput[type=\\\"text\\\"]:focus,\\ninput[type=\\\"password\\\"]:focus,\\ninput[type=\\\"datetime\\\"]:focus,\\ninput[type=\\\"datetime-local\\\"]:focus,\\ninput[type=\\\"date\\\"]:focus,\\ninput[type=\\\"month\\\"]:focus,\\ninput[type=\\\"time\\\"]:focus,\\ninput[type=\\\"week\\\"]:focus,\\ninput[type=\\\"number\\\"]:focus,\\ninput[type=\\\"email\\\"]:focus,\\ninput[type=\\\"url\\\"]:focus,\\ninput[type=\\\"search\\\"]:focus,\\ninput[type=\\\"tel\\\"]:focus,\\ninput[type=\\\"color\\\"]:focus,\\n.form-control:focus {\\n  border: 1px solid #b3b3b3;\\n  background: #fff;\\n  -webkit-box-shadow: none;\\n  -moz-box-shadow: none;\\n  -ms-box-shadow: none;\\n  box-shadow: none;\\n}\\n/* Typography\\n================================================== */\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  margin-top: 0;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\nh1 a,\\nh2 a,\\nh3 a,\\nh4 a,\\nh5 a,\\nh6 a {\\n  font-weight: inherit;\\n}\\nh1 {\\n  font-size: 46px;\\n  line-height: 50px;\\n  margin-bottom: 20px;\\n}\\nh2 {\\n  font-size: 35px;\\n  line-height: 40px;\\n  margin-bottom: 10px;\\n}\\nh3 {\\n  font-size: 28px;\\n  line-height: 34px;\\n  margin-bottom: 8px;\\n}\\nh4 {\\n  font-size: 21px;\\n  line-height: 30px;\\n  margin-bottom: 4px;\\n}\\nh5 {\\n  font-size: 17px;\\n  line-height: 24px;\\n}\\nh6 {\\n  font-size: 14px;\\n  line-height: 21px;\\n}\\nem {\\n  font-style: italic;\\n}\\nstrong {\\n  font-weight: bold;\\n}\\nsmall {\\n  font-size: 80%;\\n}\\nh3.subtitle {\\n  font-weight: 300;\\n  font-size: 18px;\\n  color: #b3b3b3;\\n  font-style: italic;\\n}\\nh4.heading-mini {\\n  font-weight: 600;\\n  text-transform: uppercase;\\n  font-size: 18px;\\n  color: #000;\\n  margin-bottom: 30px;\\n}\\nh3.heading-sec {\\n  font-weight: 500;\\n  display: block;\\n  margin-bottom: 40px;\\n  color: #000;\\n  font-size: 29px;\\n  text-transform: uppercase;\\n  text-align: center;\\n  letter-spacing: 1px;\\n}\\n.header-main {\\n  width: 100%;\\n}\\n.intro-row h2 {\\n  font-weight: 500;\\n  text-transform: uppercase;\\n  font-size: 24px;\\n}\\n/*******************bootstrap overrides **************************/\\n.navbar-default {\\n  background-color: #fff;\\n  border-color: #eeeeee;\\n  -webkit-box-shadow: 0 5px 6px -6px #ccc;\\n  -moz-box-shadow: 0 5px 6px -6px #ccc;\\n  -ms-box-shadow: 0 5px 6px -6px #ccc;\\n  box-shadow: 0 5px 6px -6px #ccc;\\n  width: 100%;\\n  padding: 5px 0;\\n}\\n.navbar {\\n  -webkit-border-radius: 0px;\\n  -moz-border-radius: 0px;\\n  -ms-border-radius: 0px;\\n  border-radius: 0px;\\n  margin-bottom: 0px;\\n}\\n.navbar-brand {\\n  color: #555 !important;\\n  font-weight: 700;\\n  font-size: 25px;\\n  text-transform: uppercase;\\n}\\n.navbar-default .navbar-nav > .active > a,\\n.navbar-default .navbar-nav > .active > a:hover,\\n.navbar-default .navbar-nav > .active > a:focus {\\n  color: #0faf97;\\n  background-color: #fff;\\n}\\n.navbar-default .navbar-nav > .open > a,\\n.navbar-default .navbar-nav > .open > a:hover,\\n.navbar-default .navbar-nav > .open > a:focus {\\n  background-color: #fff;\\n  color: #0faf97;\\n}\\n.navbar-default .navbar-nav > li > a:hover,\\n.navbar-default .navbar-nav > li > a:focus {\\n  color: #0faf97;\\n  background-color: transparent;\\n}\\n.navbar-default .navbar-nav > li > a {\\n  color: #000;\\n  font-size: 14px;\\n  font-weight: 500;\\n  text-transform: uppercase;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n.navbar-default .navbar-nav > li.social-nav i {\\n  font-size: 20px;\\n}\\n.navbar-inverse .navbar-nav > li.social-nav i {\\n  font-size: 20px;\\n}\\n/*sticky header*/\\n.sticky-nav {\\n  width: 100%;\\n  z-index: 999;\\n}\\n/*============================*/\\n/*======dropdowm menu=========*/\\n/*============================*/\\n.navbar .dropdown-menu {\\n  padding: 0;\\n  margin: 0;\\n  min-width: 190px;\\n  background-color: #fff;\\n  border: none;\\n  -webkit-border-radius: 0px;\\n  -moz-border-radius: 0px;\\n  -ms-border-radius: 0px;\\n  border-radius: 0px;\\n  border-top: 2px solid #0faf97 !important;\\n}\\n.navbar .dropdown-menu li a {\\n  color: #888;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  padding: 9px 20px;\\n  border-bottom: 1px solid #e7e7e7;\\n  font-weight: 400;\\n  font-size: 12px;\\n  text-transform: uppercase;\\n  -moz-transition: all 0.3s ease-in;\\n  -o-transition: all 0.3s ease-in;\\n  -webkit-transition: all 0.3s ease-in;\\n  transition: all 0.3s ease-in;\\n}\\n.navbar .dropdown-menu li a:hover {\\n  background: #0faf97;\\n  color: #fff;\\n}\\n/*top bar*/\\n.top-bar {\\n  background-color: #f9f9f9;\\n}\\n.top-bar .info {\\n  margin: 0px;\\n}\\n.top-bar .info li {\\n  font-size: 14px;\\n  display: table-cell;\\n  vertical-align: middle;\\n  height: 40px;\\n  color: #555;\\n  font-weight: 500;\\n  font-size: 13px;\\n}\\n.top-bar .info li a {\\n  color: #555;\\n  margin-right: 10px;\\n}\\n/*flex slider*/\\n.slider-reg {\\n  width: 100%;\\n}\\n.main-flex-slider {\\n  position: relative;\\n}\\n.main-flex-slider .flex-control-nav {\\n  bottom: 30px;\\n  margin: 0;\\n  height: 14px;\\n  z-index: 10;\\n}\\n.main-flex-slider .flex-control-paging li a {\\n  -webkit-box-shadow: none;\\n  -moz-box-shadow: none;\\n  -ms-box-shadow: none;\\n  box-shadow: none;\\n  background: transparent !important;\\n  border: 2px solid #ccc;\\n  width: 8px;\\n  height: 8px;\\n}\\n.main-flex-slider .flex-control-paging li a.flex-active {\\n  background: transparent !important;\\n  border: 2px solid #0faf97;\\n}\\n.portfolio-details .flex-control-paging li a {\\n  -webkit-box-shadow: none;\\n  -moz-box-shadow: none;\\n  -ms-box-shadow: none;\\n  box-shadow: none;\\n  background: transparent !important;\\n  border: 2px solid #ccc;\\n  width: 8px;\\n  height: 8px;\\n}\\n.portfolio-details .flex-control-paging li a.flex-active {\\n  background: transparent !important;\\n  border: 2px solid #0faf97;\\n}\\n.slider-overlay {\\n  background: rgba(0, 0, 0, 0.4);\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-repeat: repeat;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  bottom: 0;\\n  right: 0;\\n}\\n.slider-text {\\n  text-align: center;\\n}\\n.slider-text h1 {\\n  color: #fff;\\n  margin-top: 150px;\\n  font-size: 50px;\\n  font-weight: 400;\\n  margin-bottom: 25px;\\n  text-transform: uppercase;\\n  text-align: center;\\n}\\n@media (max-width: 1024px) {\\n  .slider-text h1 {\\n    margin-top: 100px;\\n  }\\n}\\n.slider-text p {\\n  color: #fff;\\n  font-family: \\\"Playfair Display\\\", serif;\\n  font-style: italic;\\n  font-size: 20px;\\n}\\n.slide-btn {\\n  margin-top: 40px;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-style: normal !important;\\n}\\n.slide-btn .btn-white {\\n  padding: 14px 25px;\\n}\\n/*-----------------------------------services and features------------------------------------------*/\\n.services-box {\\n  text-align: center;\\n  margin-bottom: 10px;\\n}\\n.services-box i {\\n  color: #0faf97;\\n  font-size: 44px;\\n  margin-bottom: 15px;\\n  display: inline-block;\\n  width: 90px;\\n  height: 90px;\\n  line-height: 90px;\\n  text-align: center;\\n  -webkit-border-radius: 50%;\\n  -moz-border-radius: 50%;\\n  -ms-border-radius: 50%;\\n  border-radius: 50%;\\n  border: 1px solid #0faf97;\\n  -moz-transition: all 0.3s ease-in;\\n  -o-transition: all 0.3s ease-in;\\n  -webkit-transition: all 0.3s ease-in;\\n  transition: all 0.3s ease-in;\\n}\\n.services-box h1 {\\n  font-size: 18px;\\n  margin-bottom: 0px;\\n  color: #333;\\n  font-weight: 500;\\n  text-transform: uppercase;\\n}\\n.services-box:hover i {\\n  border-color: #0faf97;\\n  background-color: #0faf97;\\n  color: #fff;\\n}\\n/*services option 2*/\\n.services-icon i {\\n  color: #fff;\\n  width: 80px;\\n  line-height: 80px;\\n  height: 80px;\\n  font-size: 34px;\\n  text-align: center;\\n  background-color: #0faf97;\\n  -webkit-border-radius: 50%;\\n  -moz-border-radius: 50%;\\n  -ms-border-radius: 50%;\\n  border-radius: 50%;\\n  display: inline-block;\\n}\\n.services-text h4 {\\n  color: #000;\\n  margin-bottom: 15px;\\n}\\n/***services box new v1.4****/\\n.services-boxv2 {\\n  margin: 0;\\n}\\n.services-boxv2 .servicev2-icon {\\n  float: left;\\n  width: 50px;\\n}\\n.services-boxv2 .servicev2-icon i {\\n  color: #0faf97;\\n  font-size: 30px;\\n}\\n.services-boxv2 .servicev2-text {\\n  overflow: hidden;\\n}\\n.services-boxv2 .servicev2-text h4 {\\n  color: #000;\\n  font-weight: 500;\\n  text-transform: uppercase;\\n  font-size: 20px;\\n}\\n/*features*/\\n.features h3 {\\n  font-weight: 400;\\n  color: #000;\\n  margin-bottom: 20px;\\n}\\n.features p {\\n  color: #777;\\n}\\n/*==========================content regions==========================*/\\n#content-region-1 {\\n  background-color: #f5f5f5;\\n}\\n#content-region-2 {\\n  padding: 80px 0;\\n  width: 100%;\\n  overflow: hidden;\\n  background-size: cover;\\n  background-attachment: fixed;\\n  position: relative;\\n}\\n#content-region-2 .flex-control-paging li a {\\n  -webkit-box-shadow: none;\\n  -moz-box-shadow: none;\\n  -ms-box-shadow: none;\\n  box-shadow: none;\\n  background: transparent !important;\\n  border: 2px solid #ccc;\\n  width: 8px;\\n  height: 8px;\\n}\\n#content-region-2 .flex-control-paging li a.flex-active {\\n  background: transparent !important;\\n  border: 2px solid #0faf97;\\n}\\n/*==========================portfolio ==========================*/\\n.portfolio-sec {\\n  border: 1px solid #eeeeee;\\n  color: #000000;\\n  background-color: #ffffff;\\n  position: relative;\\n}\\n.portfolio-thumnail img {\\n  width: 100%;\\n  height: auto;\\n}\\n.portfolio-desc {\\n  padding: 10px 0;\\n}\\nh4.portfolio-post-title {\\n  margin-bottom: 5px;\\n  font-size: 15px;\\n  font-weight: 700;\\n  letter-spacing: 0px;\\n  text-transform: uppercase;\\n}\\n.portfolio-post-cat {\\n  display: block;\\n  letter-spacing: 1px;\\n  text-transform: uppercase;\\n  font-size: 10px;\\n  color: #999999;\\n}\\n.portfolio-desc .theme-btn-default {\\n  margin-bottom: -50px;\\n}\\n.flexslider {\\n  -webkit-box-shadow: none;\\n  -moz-box-shadow: none;\\n  -ms-box-shadow: none;\\n  box-shadow: none;\\n}\\n.portfolio-single-desc h3 {\\n  color: #000;\\n  font-size: 23px;\\n  font-weight: 800;\\n}\\n/*mix it up filter*/\\n.portfolio-filters {\\n  margin-bottom: 30px;\\n  list-style: none;\\n  padding: 0;\\n}\\n.portfolio-filters li {\\n  display: inline-block;\\n  border: 1px solid #eeeeee;\\n  padding: 10px 16px;\\n  cursor: pointer;\\n  font-size: 12px;\\n  text-transform: uppercase;\\n  margin-bottom: 5px;\\n}\\n.portfolio-filters li.active {\\n  background-color: #0faf97;\\n  color: #fff;\\n  border-color: #0faf97;\\n}\\n#grid .mix {\\n  display: none;\\n  opacity: 0;\\n}\\n/***************************************news and blog sec**************************************/\\n/*latest news*/\\n.news-sec {\\n  border: 1px solid #eeeeee;\\n  color: #000000;\\n  background-color: #ffffff;\\n}\\n.blog-post-title {\\n  margin-bottom: 5px;\\n  line-height: 20px;\\n}\\n.blog-post-title a {\\n  font-size: 15px;\\n  font-weight: 500;\\n  letter-spacing: 0px;\\n  color: #000;\\n  text-transform: uppercase;\\n}\\n.news-desc {\\n  padding: 10px 20px;\\n}\\n.news-post-cat {\\n  display: block;\\n  letter-spacing: 1px;\\n  text-transform: uppercase;\\n  font-size: 10px;\\n  color: #999999;\\n  margin-bottom: 10px;\\n  margin-top: 10px;\\n}\\n.news-desc p {\\n  color: #7a7a7a;\\n}\\n.news-thumnail img {\\n  opacity: 0.8;\\n  filter: alpha(opacity=80);\\n}\\n.news-thumnail img:hover {\\n  opacity: 1;\\n  filter: alpha(opacity=100);\\n}\\n/*blog page*/\\n.blog-post-section {\\n  border: 1px solid #eee;\\n  padding: 15px 10px;\\n}\\n.blog-post-img {\\n  margin-bottom: 30px;\\n}\\n.blog-post-header {\\n  text-align: center;\\n}\\n.blog-post-header h3 {\\n  font-weight: 600;\\n  font-size: 24px;\\n  text-transform: uppercase;\\n  margin-bottom: 10px;\\n}\\n.blog-post-header h3 a {\\n  color: #000;\\n}\\n.blog-post-info {\\n  text-align: center;\\n  margin-bottom: 30px;\\n}\\n.blog-post-info span {\\n  font-weight: 600;\\n  font-size: 11px;\\n  text-transform: uppercase;\\n  color: #999;\\n}\\n.blog-post-info span a {\\n  color: #666;\\n}\\n.blog-post-detail {\\n  margin-bottom: 30px;\\n}\\n.blog-post-more {\\n  margin-bottom: 30px;\\n}\\n/*****************************sidebar css****************************/\\n.sidebar-box {\\n  margin-bottom: 30px;\\n}\\n.sidebar-box h4 {\\n  color: #000;\\n  font-size: 13px;\\n  font-weight: 800;\\n  text-transform: uppercase;\\n  margin-bottom: 15px;\\n}\\n.sidebar-box h4:first-letter {\\n  border-bottom: 5px solid #0faf97;\\n}\\n.widget-search .search-form {\\n  position: relative;\\n}\\n.widget-search .search-form i {\\n  position: absolute;\\n  top: 0;\\n  right: 10px;\\n  line-height: 38px;\\n  text-align: center;\\n  color: #999;\\n}\\n.cat-list {\\n  padding: 0px;\\n  list-style: none;\\n}\\n.cat-list li {\\n  padding: 3px 0;\\n}\\n.cat-list li a {\\n  color: #555;\\n  font-weight: 600;\\n  font-size: 12px;\\n  text-transform: uppercase;\\n}\\n.recent {\\n  width: 100%;\\n  margin-bottom: 20px;\\n  float: left;\\n}\\n.recent span img {\\n  float: left;\\n  margin-right: 10px;\\n  width: 105px;\\n  height: 70px;\\n}\\n.recent p {\\n  margin: 0;\\n  line-height: 18px;\\n  font-size: 13px;\\n  overflow: hidden;\\n}\\n.recent p a {\\n  color: #555;\\n}\\n.recent .recent-date {\\n  font-size: 10px;\\n  color: #999;\\n  font-weight: 600;\\n  text-transform: uppercase;\\n}\\n.sidebar-box .social-btn li a i {\\n  background-color: #000;\\n  color: #fff;\\n}\\n.post-comment-wrapper {\\n  padding: 50px 0;\\n  display: block;\\n  border-bottom: 1px solid #eeeeee;\\n  clear: both;\\n}\\n.post-comment-wrapper h3 {\\n  color: #000;\\n  font-size: 20px;\\n  text-transform: uppercase;\\n  margin-bottom: 20px;\\n}\\n.comment-box {\\n  margin: 15px 0;\\n  padding: 10px 0;\\n  border-top: 1px solid #eeeeee;\\n  border-bottom: 1px solid #eeeeee;\\n}\\n.comment-box img {\\n  float: left;\\n  margin-right: 15px;\\n  width: 120px;\\n  height: 80px;\\n}\\n.comment-box p {\\n  overflow: hidden;\\n}\\n.comment-box span {\\n  font-size: 12px;\\n  font-weight: 800;\\n  text-transform: uppercase;\\n  color: #000;\\n  display: block;\\n  margin-bottom: 5px;\\n}\\n.comment-form-wrapper {\\n  padding: 40px 0;\\n  border-bottom: 1px solid #eeeeee;\\n}\\n.comment-form-wrapper h3 {\\n  color: #000;\\n  font-size: 20px;\\n  text-transform: uppercase;\\n  margin-bottom: 20px;\\n}\\n.comment-form-wrapper .form-control {\\n  margin-bottom: 15px;\\n}\\n/*************************************buttons for bizwrap theme********************************/\\n.btn {\\n  font-weight: 500;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-size: 13px;\\n  text-shadow: none;\\n  text-transform: uppercase;\\n  -moz-transition: all 0.3s ease-in;\\n  -o-transition: all 0.3s ease-in;\\n  -webkit-transition: all 0.3s ease-in;\\n  transition: all 0.3s ease-in;\\n  -webkit-border-radius: 0px;\\n  -moz-border-radius: 0px;\\n  -ms-border-radius: 0px;\\n  border-radius: 0px;\\n  -webkit-box-shadow: none;\\n  -moz-box-shadow: none;\\n  -ms-box-shadow: none;\\n  box-shadow: none;\\n  display: inline-block;\\n  letter-spacing: 1px;\\n}\\n.btn:hover,\\n.btn:focus {\\n  color: #fff;\\n  outline: none;\\n}\\n/*button white for colored background*/\\n.btn-white {\\n  background-color: transparent;\\n  color: #fff;\\n  -webkit-border-radius: 0px;\\n  -moz-border-radius: 0px;\\n  -ms-border-radius: 0px;\\n  border-radius: 0px;\\n  border: 2px solid #fff;\\n}\\n.btn-white:hover {\\n  background-color: #fff;\\n  color: #222;\\n}\\n.btn-big {\\n  padding: 14px 25px;\\n}\\n/*button default*/\\n.theme-btn-default {\\n  background-color: #fff;\\n  border: 1px solid #eeeeee;\\n  color: #555;\\n}\\n.theme-btn-default:hover,\\n.theme-btn-default:focus {\\n  color: #fff;\\n  background-color: #000;\\n  border-color: #000;\\n}\\n/*theme color button*/\\n.theme-btn-color {\\n  background-color: #0faf97;\\n  border-color: #0faf97;\\n  color: #fff;\\n}\\n.theme-btn-color:hover {\\n  color: #fff;\\n  background-color: #000;\\n  border-color: #000;\\n}\\n.btn-sweet-alert {\\n  margin: 5px;\\n}\\n/***btn radius***/\\n.btn-radius {\\n  padding: 12px 50px;\\n  -webkit-border-radius: 30px;\\n  -moz-border-radius: 30px;\\n  -ms-border-radius: 30px;\\n  border-radius: 30px;\\n}\\n/**************************************testimonials******************************************/\\n.testimonials p.testi-text {\\n  color: #fff;\\n  font-size: 20px;\\n  font-weight: 300;\\n  margin-bottom: 20px;\\n}\\n.testimonials span.testi-person {\\n  font-weight: 500;\\n  color: #fff;\\n}\\n/**********************************************footer*****************************************/\\n#footer {\\n  background-color: #000000;\\n  padding: 60px 0;\\n}\\n.footer-col h3 {\\n  font-size: 15px;\\n  font-weight: 600;\\n  text-transform: uppercase;\\n  color: #fff;\\n  margin-bottom: 30px;\\n  letter-spacing: 2px;\\n}\\n.footer-col h3:first-letter {\\n  border-bottom: 5px solid #0faf97;\\n}\\n.footer-col p {\\n  font-size: 14px;\\n  color: #b3b3b3;\\n}\\n.post-list li a {\\n  color: #b3b3b3;\\n  font-weight: 400;\\n  font-size: 13px;\\n  display: block;\\n  padding: 8px 0;\\n  border-bottom: 1px solid #444;\\n}\\n.footer-col form .form-control {\\n  background-color: #111;\\n  border: none;\\n  color: #fff;\\n  margin-bottom: 15px;\\n}\\n.footer-col form .form-control:focus {\\n  background-color: #333;\\n  border: none;\\n}\\n.footer-col form textarea {\\n  background-color: #111;\\n  border: none;\\n  color: #fff;\\n}\\n.footer-col form textarea:focus {\\n  background-color: #333;\\n  border: none;\\n}\\n.footer-col .social-btn li a i {\\n  color: #fff;\\n  border: 2px solid #fff;\\n}\\n.footer-col .social-btn li a i:hover {\\n  background-color: #0faf97;\\n  border-color: #0faf97;\\n}\\n.footer-bottom {\\n  border-top: 1px solid #111;\\n  padding-top: 60px;\\n}\\n.footer-bottom span {\\n  color: #fff;\\n  font-weight: 400;\\n  font-size: 12px;\\n}\\n/*****************************social buttons************************/\\n.social-btn li a i {\\n  width: 35px;\\n  height: 35px;\\n  line-height: 35px;\\n  text-align: center;\\n  -webkit-border-radius: 50%;\\n  -moz-border-radius: 50%;\\n  -ms-border-radius: 50%;\\n  border-radius: 50%;\\n  margin-bottom: 5px;\\n  display: block;\\n}\\n.social-btn li a {\\n  display: block;\\n}\\n/****************breadcrumbs*********************************************/\\n.page-tree-bg {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  padding: 100px 0;\\n  width: 100%;\\n  position: relative;\\n  background-size: cover;\\n}\\nh3.page-tree-text {\\n  text-align: center;\\n  text-transform: uppercase;\\n  color: #fff;\\n  margin: 0px;\\n}\\n/***********************bootstrap pagination override***************************/\\n.pagination li a {\\n  color: #999;\\n}\\n.pagination li a:hover {\\n  color: #fff;\\n  background-color: #0faf97;\\n  border-color: #0faf97;\\n}\\n.pagination > .active > a,\\n.pagination > .active > span,\\n.pagination > .active > a:hover,\\n.pagination > .active > span:hover,\\n.pagination > .active > a:focus,\\n.pagination > .active > span:focus {\\n  z-index: 2;\\n  color: #fff;\\n  background-color: #0faf97;\\n  border-color: #0faf97;\\n  cursor: default;\\n}\\n/**************inner pages css**************************/\\n/*about page*/\\n.icon-list li {\\n  padding: 5px 0;\\n}\\n.icon-list li i {\\n  color: #0faf97;\\n  margin-right: 10px;\\n}\\n/*team person*/\\n.person-section {\\n  border: 1px solid #eeeeee;\\n}\\n.person-section img {\\n  display: block;\\n  margin: 0 auto;\\n}\\n.person-desc {\\n  padding: 10px 10px;\\n}\\n.person-desc h3 {\\n  color: #000;\\n  font-weight: 800;\\n  text-transform: uppercase;\\n  font-size: 14px;\\n  margin-bottom: 2px;\\n}\\n.person-desc span {\\n  font-weight: 700;\\n  text-transform: uppercase;\\n  font-size: 10px;\\n  color: #7a7a7a;\\n  margin-left: 10px;\\n}\\n.person-desc p {\\n  text-align: left;\\n}\\n.team.social-btn li a i {\\n  color: #7a7a7a;\\n  border: 2px solid #7a7a7a;\\n}\\n.hire-sec .services-icon i {\\n  background-color: #0faf97;\\n  color: #fff;\\n  margin-bottom: 20px;\\n}\\n.hire-sec .services-text .heading-mini {\\n  margin-bottom: 10px;\\n  color: #333;\\n}\\n/*process*/\\n.process-box {\\n  text-align: center;\\n  padding: 30px 0;\\n}\\n.process-box h2 {\\n  font-size: 25px;\\n}\\n.process-box i {\\n  font-size: 54px;\\n  color: #0faf97;\\n  margin-bottom: 20px;\\n}\\n/*progress bar*/\\nh3.heading-progress {\\n  font-size: 14px;\\n  font-weight: 400;\\n  margin-bottom: 3px;\\n}\\n.progress {\\n  height: 15px;\\n  line-height: 10px;\\n  -webkit-box-shadow: none;\\n  -moz-box-shadow: none;\\n  -ms-box-shadow: none;\\n  box-shadow: none;\\n  background: #e9e9e9;\\n  -webkit-border-radius: 0px;\\n  -moz-border-radius: 0px;\\n  -ms-border-radius: 0px;\\n  border-radius: 0px;\\n}\\n.progress-bar {\\n  line-height: 10px;\\n  background: #0faf97;\\n  -webkit-box-shadow: none;\\n  -moz-box-shadow: none;\\n  -ms-box-shadow: none;\\n  box-shadow: none;\\n}\\n/*************************login or signup form********************/\\n.my-login-form {\\n  padding: 30px 20px;\\n  border: 1px solid #eeeeee;\\n}\\n.form-btm-link a {\\n  color: #0faf97;\\n}\\n.form-btm-link a:hover {\\n  text-decoration: underline;\\n}\\n.form-btm-link span {\\n  margin: 0px 20px;\\n  font-family: \\\"Playfair Display\\\", serif;\\n  font-style: italic;\\n  font-size: 23px;\\n}\\n/*error page*/\\n.error-digit {\\n  font-size: 50px;\\n}\\n.error-text h3 {\\n  font-family: \\\"Playfair Display\\\", serif;\\n  font-style: italic;\\n}\\n/*contact*/\\n.my-contact-form form input {\\n  background-color: #f7f7f7;\\n}\\n.my-contact-form textarea {\\n  background-color: #f7f7f7;\\n}\\n#map-canvas {\\n  width: 100%;\\n  height: 400px;\\n}\\n/******************pricing************************/\\n.pricing-wrapper {\\n  border: 1px solid #eeeeee;\\n}\\n.pricing-head {\\n  padding: 20px 10px;\\n  background-color: #000000;\\n  text-align: center;\\n}\\n.pricing-head h3 {\\n  margin: 0px;\\n  color: #fff;\\n}\\n.pricing-rate {\\n  padding: 30px 10px;\\n  background-color: #0faf97;\\n  text-align: center;\\n}\\n.pricing-rate h1 {\\n  color: #fff;\\n  margin: 0px;\\n}\\n.pricing-rate h1 small {\\n  color: #e9e9e9;\\n  font-size: 10px;\\n  text-transform: uppercase;\\n  font-weight: 700;\\n}\\n.pricing-desc ul {\\n  padding-left: 0px;\\n  margin: 0;\\n}\\n.pricing-desc ul li {\\n  padding: 12px 20px;\\n  border-bottom: 1px solid #eeeeee;\\n  font-weight: 400;\\n}\\n.pricing-select {\\n  padding: 10px 20px;\\n  text-align: center;\\n}\\n.pricing-select a {\\n  display: block;\\n}\\n.price-faq-box {\\n  padding: 20px 0;\\n  border-bottom: 1px solid #eeeeee;\\n}\\n.price-faq-box h3 {\\n  font-size: 20px;\\n}\\n/*****************bootstrap tabs overrides*****************************/\\n/*tabs*/\\n.tabs .nav-tabs {\\n  border-bottom: none;\\n}\\n.tabs .nav-tabs li {\\n  margin-bottom: 0;\\n}\\n@media (max-width: 767px) {\\n  .tabs .nav-tabs li {\\n    width: 100%;\\n    float: none;\\n    margin-bottom: 2px;\\n  }\\n  .tabs .nav-tabs li a {\\n    margin-right: 0 !important;\\n  }\\n  .tabs .nav-tabs li.active a {\\n    border-bottom: 2px solid #dcdcdc !important;\\n  }\\n}\\n.tabs .nav-tabs li a {\\n  background: #f7f7f7;\\n  margin-right: 2px;\\n  border-left: 1px solid #f7f7f7;\\n  border-right: 1px solid #f7f7f7;\\n  border-bottom: none !important;\\n  -webkit-border-radius: 0px;\\n  -moz-border-radius: 0px;\\n  -ms-border-radius: 0px;\\n  border-radius: 0px;\\n  padding: 12px 20px;\\n  color: #6d6d6d;\\n  position: relative;\\n}\\n.tabs .nav-tabs li a:after {\\n  content: \\\"\\\";\\n  display: block;\\n  position: absolute;\\n  top: -1px;\\n  left: -1px;\\n  right: -1px;\\n  height: 3px;\\n}\\n.tabs .nav-tabs li a:before {\\n  content: \\\"\\\";\\n  display: block;\\n  position: absolute;\\n  bottom: -1px;\\n  left: 0;\\n  right: 0;\\n  height: 1px;\\n}\\n.tabs .nav-tabs li a:hover {\\n  border-color: #f7f7f7;\\n}\\n.tabs .nav-tabs > li > a .fa {\\n  margin-right: 4px;\\n}\\n.tabs .nav-tabs li.active a {\\n  color: #0faf97;\\n  border-left-color: #eee;\\n  border-right-color: #eee;\\n  background: #fff;\\n}\\n.tabs .nav-tabs li.active a:after {\\n  background: #0faf97;\\n}\\n.tabs .nav-tabs li.active a:before {\\n  background: #fff;\\n}\\n.tabs .nav-tabs li.active a:hover {\\n  border-bottom-color: #fff;\\n}\\n.tabs .tab-content {\\n  padding: 15px 8px;\\n  border: 1px solid #eee;\\n  background: #fff;\\n}\\n.tab-content p {\\n  overflow: hidden;\\n}\\n.tabs .tab-content:before,\\n.tabs .tab-content:after {\\n  content: \\\" \\\";\\n  display: table;\\n}\\n.tabs .tab-content:after {\\n  clear: both;\\n}\\n.tabs .tab-content p:last-child {\\n  margin-bottom: 0;\\n}\\n/***********************************************************************************\\n*************************   Responsive css start here    ***************************\\n***********************************************************************************/\\n@media (max-width: 768px) {\\n  .slider-text h1 {\\n    margin-top: 70px;\\n    font-size: 2em;\\n  }\\n  .slider-text p {\\n    display: none;\\n  }\\n  .main-flex-slider .flex-control-nav {\\n    bottom: 10px;\\n    margin: 0;\\n    height: 14px;\\n    z-index: 10;\\n  }\\n}\\n@media (max-width: 433px) {\\n  .slider-text h1 {\\n    margin-top: 30px;\\n    font-size: 16px;\\n  }\\n}\\n/************version v1.1 css here********************/\\n.home-slider {\\n  width: 100%;\\n}\\n.carousel {\\n  position: relative;\\n}\\n.home-slider .carousel-inner {\\n  position: relative;\\n  overflow: hidden;\\n  width: 100%;\\n}\\n.home-slider .carousel-inner .item {\\n  overflow: hidden;\\n  width: 100%;\\n  height: 550px;\\n  background-color: #333 !important;\\n  padding: 100px 0 0;\\n}\\n#item-1 {\\n  width: 100%;\\n}\\n#item-2 {\\n  width: 100%;\\n}\\n#item-3 {\\n  width: 100%;\\n}\\na.carousel-control {\\n  height: 50px;\\n  width: 50px;\\n  line-height: 50px;\\n  text-align: center;\\n  position: absolute;\\n  display: block;\\n  top: 50%;\\n  margin-top: -25px;\\n  background-image: none !important;\\n  font-size: 52px;\\n  font-weight: 300;\\n  cursor: pointer;\\n}\\na.carousel-control i {\\n  color: #fff;\\n}\\n.slider-wrapper {\\n  margin-top: 100px;\\n}\\n.slider-wrapper h1 {\\n  color: #fff;\\n  font-weight: 300;\\n}\\n.slider-wrapper p {\\n  color: #fff;\\n  font-size: 20px;\\n  font-weight: 300;\\n  margin-bottom: 30px;\\n}\\n.slider-wrapper-2 {\\n  margin-top: 60px;\\n}\\n.slider-wrapper-2 h1 {\\n  color: #fff;\\n  font-weight: 300;\\n}\\n.slider-2img {\\n  margin-top: 60px;\\n}\\n.slider-wrapper-2 p {\\n  color: #fff;\\n}\\n.slider-video-wrapper {\\n  margin-top: 60px;\\n}\\n.slider-wrapper-3 {\\n  margin-top: 60px;\\n}\\n.slider-wrapper-3 h1 {\\n  color: #fff;\\n  font-weight: 300;\\n}\\n.slider-wrapper-3 p {\\n  color: #fff;\\n  font-size: 18px;\\n  font-weight: 300;\\n}\\n/**slider carousel delay**/\\n.delay-1 {\\n  -webkit-animation-delay: 300ms;\\n  -moz-animation-delay: none;\\n  animation-delay: 300ms;\\n  -o-animation-delay: none;\\n}\\n.delay-2 {\\n  -webkit-animation-delay: 600ms;\\n  -moz-animation-delay: none;\\n  animation-delay: 600ms;\\n  -o-animation-delay: none;\\n}\\n.delay-3 {\\n  -webkit-animation-delay: 900ms;\\n  -moz-animation-delay: none;\\n  animation-delay: 900ms;\\n  -o-animation-delay: none;\\n}\\n.delay-4 {\\n  -webkit-animation-delay: 1200ms;\\n  -moz-animation-delay: none;\\n  animation-delay: 1200ms;\\n  -o-animation-delay: none;\\n}\\n.delay-5 {\\n  -webkit-animation-delay: 1500ms;\\n  -moz-animation-delay: none;\\n  animation-delay: 1500ms;\\n  -o-animation-delay: none;\\n}\\n.delay-6 {\\n  -webkit-animation-delay: 1800ms;\\n  -moz-animation-delay: none;\\n  animation-delay: 1800ms;\\n  -o-animation-delay: none;\\n}\\n@media (max-width: 767px) {\\n  .slider-wrapper {\\n    text-align: center;\\n  }\\n  .slider-wrapper-2 {\\n    text-align: center;\\n    margin-top: 50px;\\n  }\\n  .slider-wrapper-3 {\\n    text-align: center;\\n    margin-top: 50px;\\n  }\\n  .carousel-indicators {\\n    bottom: 20px;\\n  }\\n}\\n@media (max-width: 360px) {\\n  a.carousel-control {\\n    display: none;\\n  }\\n  .carousel-inner .item {\\n    padding: 20px 0 0;\\n  }\\n  .slider-wrapper,\\n  .slider-wrapper-2,\\n  .slider-wrapper-3 {\\n    margin-top: 20px;\\n  }\\n  .carousel-indicators {\\n    bottom: 0px;\\n  }\\n}\\n/**************footer option css here********************/\\n#footer-option {\\n  background: #121214;\\n  border-top: 8px solid #0faf97;\\n  margin-top: 50px;\\n  padding: 80px 0 0;\\n  position: relative;\\n  clear: both;\\n}\\n#footer-option .footer-col {\\n  font-size: 0.9em;\\n}\\n#footer-option .footer-col .theme-btn-color {\\n  height: 34px;\\n}\\n#footer-option .footer-col .form-control {\\n  height: 34px;\\n  background-color: #eeeeee;\\n  color: #333;\\n  margin-bottom: 0px;\\n}\\n.footer-col a.tweet-ac {\\n  display: block;\\n  color: #fff;\\n}\\n.footer-col .tweet-desc {\\n  margin: 5px 0;\\n}\\n.footer-col .tweet-desc i {\\n  margin-right: 10px;\\n}\\n.footer-col a.tweet-day {\\n  display: block;\\n  color: #fff;\\n  font-size: 0.9em;\\n}\\n.footer-col hr {\\n  border-color: #333;\\n}\\n.footer-copyright {\\n  background: #0c0c0c;\\n  border-top: 4px solid #111;\\n  margin-top: 40px;\\n  padding: 30px 0 30px;\\n}\\n.footer-nav {\\n  margin: 0;\\n  padding: 0;\\n  text-align: right;\\n}\\n.footer-nav li a {\\n  color: #fff;\\n  font-size: 0.9em;\\n}\\n.footer-nav li a:hover {\\n  color: #0faf97;\\n}\\n.footer-copyright span {\\n  font-size: 0.9em;\\n}\\n@media (max-width: 768px) {\\n  .footer-copyright .footer-logo {\\n    text-align: center;\\n    margin-bottom: 10px;\\n  }\\n  .footer-copyright p {\\n    text-align: center;\\n  }\\n  .footer-copyright .footer-nav {\\n    text-align: center;\\n  }\\n}\\n/*********************header option 2***************************/\\n.navbar-inverse {\\n  background-color: rgba(0, 0, 0, 0.9);\\n  border: none;\\n  -webkit-border-radius: 0px;\\n  -moz-border-radius: 0px;\\n  -ms-border-radius: 0px;\\n  border-radius: 0px;\\n  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);\\n  -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);\\n  -ms-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);\\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);\\n  padding: 10px 0;\\n  width: 100%;\\n}\\n.navbar-inverse .navbar-nav > li > a {\\n  color: #eee;\\n  font-weight: 400;\\n  font-size: 14px;\\n  text-transform: uppercase;\\n}\\n.navbar-inverse .navbar-nav > li > a:hover {\\n  color: #0faf97;\\n  background-color: transparent;\\n}\\n.navbar-inverse .navbar-nav > .active > a,\\n.navbar-inverse .navbar-nav > .active > a:hover,\\n.navbar-inverse .navbar-nav > .active > a:focus {\\n  color: #0faf97;\\n  background-color: transparent;\\n}\\n.navbar-inverse .navbar-nav > .open > a,\\n.navbar-inverse .navbar-nav > .open > a:hover,\\n.navbar-inverse .navbar-nav > .open > a:focus {\\n  background-color: transparent;\\n  color: #0faf97;\\n}\\n/******Version v1.2 css here********/\\n.mas-boxes-inner {\\n  margin-bottom: 30px;\\n}\\n.mas-boxes-inner .mas-link {\\n  color: #0faf97;\\n  display: inline-block;\\n  margin-bottom: 10px;\\n}\\n.mas-boxes-inner .mas-link i {\\n  margin-left: 7px;\\n  vertical-align: middle;\\n  display: inline-block;\\n}\\n.mas-boxes-inner .mas-link:hover {\\n  color: #999;\\n}\\n.direc-hover-box {\\n  overflow: hidden;\\n}\\n.direc-hover-box img {\\n  position: relative;\\n  overflow: hidden;\\n  -webkit-border-radius: 4px;\\n  -moz-border-radius: 4px;\\n  -ms-border-radius: 4px;\\n  border-radius: 4px;\\n}\\n.direc-hover-box a .direc-overlay {\\n  position: absolute;\\n  background: rgba(75, 75, 75, 0.7);\\n  width: 100%;\\n  height: 100%;\\n  -webkit-border-radius: 4px;\\n  -moz-border-radius: 4px;\\n  -ms-border-radius: 4px;\\n  border-radius: 4px;\\n}\\n.direc-overlay span {\\n  display: block;\\n  position: absolute;\\n  width: 100%;\\n  top: 50%;\\n  color: #fff;\\n  font-size: 20px;\\n  text-align: center;\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  font-weight: 400;\\n  text-transform: uppercase;\\n}\\n/*.direc-hover-box:hover .direc-overlay{\\n    display: block;\\n}*/\\nbody.boxed {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") repeat;\\n}\\n@media (min-width: 1200px) {\\n  .boxed-wrapper {\\n    margin: 0 auto;\\n    width: 1170px;\\n    background-color: white;\\n    -webkit-box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.16);\\n    -moz-box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.16);\\n    -ms-box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.16);\\n    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.16);\\n    border-top: 4px solid #0faf97;\\n  }\\n}\\n.boxed-wrapper .navbar-default.sticky {\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  -moz-transition: all 0.3s ease-in;\\n  -o-transition: all 0.3s ease-in;\\n  -webkit-transition: all 0.3s ease-in;\\n  transition: all 0.3s ease-in;\\n}\\n/******************\\n\\nMULTI LEVEL DROPDOWN CSS\\n\\n*********************/\\n.dropdown-submenu {\\n  position: relative;\\n}\\n.dropdown-submenu > .dropdown-menu {\\n  top: 0;\\n  left: 100%;\\n  margin-top: 0px;\\n  margin-left: 0px;\\n  -webkit-border-radius: 0px;\\n  -moz-border-radius: 0px;\\n  -ms-border-radius: 0px;\\n  border-radius: 0px;\\n}\\n@media (max-width: 767px) {\\n  .dropdown-submenu > .dropdown-menu {\\n    padding-left: 20px;\\n  }\\n}\\n.dropdown-submenu:hover > .dropdown-menu {\\n  display: block;\\n}\\n.dropdown-submenu > a:after {\\n  top: 11px;\\n  right: 9px;\\n  font-size: 11px;\\n  content: \\\"\\\\f3d3\\\" !important;\\n  font-family: \\\"Ionicons\\\" !important;\\n  position: absolute;\\n  font-weight: normal;\\n  display: inline-block;\\n  font-family: FontAwesome;\\n}\\n.dropdown-submenu.pull-left {\\n  float: none;\\n}\\n.dropdown-submenu.pull-left > .dropdown-menu {\\n  left: -100%;\\n  margin-left: 10px;\\n  -webkit-border-radius: 0px;\\n  -moz-border-radius: 0px;\\n  -ms-border-radius: 0px;\\n  border-radius: 0px;\\n}\\n@media (max-width: 767px) {\\n  .dropdown-submenu > .dropdown-menu {\\n    display: block;\\n    margin-left: 15px;\\n  }\\n}\\n.cta-bg {\\n  padding: 50px 0;\\n  background-color: #0faf97;\\n}\\n.cta-bg h3 {\\n  color: #fff;\\n  text-transform: uppercase;\\n  font-weight: 300;\\n}\\n@media (min-width: 768px) {\\n  .cta-bg a {\\n    margin-left: 100px;\\n  }\\n}\\n/**newsletter section**/\\n.newsletter-section {\\n  text-align: center;\\n  padding: 60px 0;\\n  background-color: #f5f5f5;\\n}\\n.newsletter-section h3 {\\n  text-transform: uppercase;\\n  font-weight: 500;\\n  color: #000;\\n  letter-spacing: 2px;\\n}\\n.newsletter-section p {\\n  margin-bottom: 30px;\\n}\\n.newsletter-section .form-control {\\n  margin-bottom: 15px;\\n}\\n.newsletter-section .error {\\n  color: #a84545;\\n  background-color: #ffb2b2;\\n}\\n.newsletter-section .success {\\n  color: green;\\n  border-color: green;\\n}\\n.footer-col p.success {\\n  color: green !important;\\n}\\n.footer-col p.error {\\n  color: red !important;\\n}\\n.my-contact-form p.success {\\n  color: green !important;\\n}\\n.my-contact-form p.error {\\n  color: red !important;\\n}\\n.hidden {\\n  display: none !important;\\n}\\n.slider-overlay {\\n  background-color: rgba(0, 0, 0, 0.05);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://coastalconcepts.co.za/./src/less/style.less?./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://coastalconcepts.co.za/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://coastalconcepts.co.za/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/less/style.less":
/*!*****************************!*\
  !*** ./src/less/style.less ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./style.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/less/style.less\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_style_less__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://coastalconcepts.co.za/./src/less/style.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://coastalconcepts.co.za/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dropdownHover\": () => (/* binding */ dropdownHover)\n/* harmony export */ });\n/* harmony import */ var _less_style_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./less/style.less */ \"./src/less/style.less\");\n/* harmony import */ var _js_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/analytics */ \"./src/js/analytics.js\");\n/* harmony import */ var _js_analytics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_analytics__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n$(\"#contact-footer\").on(\"sumbit\", function (e) {\n    e.preventDefault();\n    submitFooterContactForm();\n});\n$(\"#contactForm\").on(\"submit\", function (e) {\n    e.preventDefault();\n    submitContactForm();\n});\nfunction submitContactForm() {\n    //Get the input data\n    var contactInput = {\n        name: $(\"#name\").val(),\n        email: $(\"#email\").val(),\n        subject: $(\"#subject\").val(),\n        message: $(\"#message\").val(),\n        recaptchaResponse: grecaptcha.getResponse(contactWidgetID),\n    };\n    //Validation\n    if (contactInput.name === \"\" || contactInput.name === null) {\n        setContactError(\"Please enter your name.\");\n        return;\n    }\n    if (contactInput.email === \"\" || contactInput.email === null) {\n        setContactError(\"Please enter your email address.\");\n        return;\n    }\n    if (contactInput.subject === \"\" || contactInput.subject === null) {\n        setContactError(\"Please enter a subject line.\");\n        return;\n    }\n    if (contactInput.subject === \"\" || contactInput.subject === null) {\n        setContactError(\"Please enter a message body.\");\n        return;\n    }\n    if (contactInput.recaptchaResponse === \"\") {\n        setContactError(\"Please solve the CAPTCHA to confirm you are not a robot.\");\n        return;\n    }\n    $.ajax({\n        url: \"/api/contact\",\n        method: \"POST\",\n        data: JSON.stringify(contactInput),\n        headers: {\n            \"Content-Type\": \"application/json\",\n        },\n    })\n        .done(function () {\n        setContactSuccess(\"Successfully sent an email to Coastal Concepts. We will reply as soon as possible.\");\n    })\n        .fail(function () {\n        setContactError(\"An error occurred while sending the email to Coastal Concepts. Apologies for the inconvenience.\");\n    });\n}\nfunction submitFooterContactForm() {\n    //Get the input data\n    var contactInput = {};\n    contactInput.name = $(\"#contact-footer-name\").val();\n    contactInput.email = $(\"#contact-footer-email\").val();\n    contactInput.subject = $(\"#contact-footer-subject\").val();\n    contactInput.message = $(\"#contact-footer-message\").val();\n    contactInput.recaptchaResponse = grecaptcha.getResponse(footerWidgetID);\n    //Validation\n    if (contactInput.name === \"\" || contactInput.name === null) {\n        setFooterContactError(\"Please enter your name.\");\n        return;\n    }\n    if (contactInput.email === \"\" || contactInput.email === null) {\n        setFooterContactError(\"Please enter your email address.\");\n        return;\n    }\n    if (contactInput.subject === \"\" || contactInput.subject === null) {\n        setFooterContactError(\"Please enter a subject line.\");\n        return;\n    }\n    if (contactInput.subject === \"\" || contactInput.subject === null) {\n        setFooterContactError(\"Please enter a message body.\");\n        return;\n    }\n    if (contactInput.recaptchaResponse === \"\") {\n        setFooterContactError(\"Please solve the CAPTCHA to confirm you are not a robot.\");\n        return;\n    }\n    var ajaxSettings = {};\n    ajaxSettings.url = \"/api/contact\";\n    ajaxSettings.method = \"POST\";\n    ajaxSettings.data = JSON.stringify(contactInput);\n    ajaxSettings.headers = {\n        \"Content-Type\": \"application/json\",\n    };\n    $.ajax(ajaxSettings)\n        .done(function (data, statusCode, jqXHR) {\n        setFooterContactSuccess(\"Successfully sent an email to Coastal Concepts. We will reply as soon as possible.\");\n    })\n        .fail(function (jqXHR, statusCode, error) {\n        setFooterContactError(\"An error occurred while sending the email to Coastal Concepts. Apologies for the inconvenience.\");\n    });\n}\nfunction setFooterContactSuccess(message) {\n    unHideFooterContactStatus();\n    $(\"#contact-footer-status-message > p\")\n        .toggleClass(\"success\", true)\n        .toggleClass(\"error\", false)\n        .text(message);\n}\nfunction setFooterContactError(message) {\n    unHideFooterContactStatus();\n    $(\"#contact-footer-status-message > p\")\n        .toggleClass(\"success\", false)\n        .toggleClass(\"error\", true)\n        .text(message);\n}\nfunction unHideFooterContactStatus() {\n    $(\"#contact-footer-status-message\").toggleClass(\"hidden\", false);\n}\nfunction setContactSuccess(message) {\n    unHideContactStatus();\n    $(\"#contact-form-status-message > p\")\n        .toggleClass(\"success\", true)\n        .toggleClass(\"error\", false)\n        .text(message);\n}\nfunction setContactError(message) {\n    unHideContactStatus();\n    $(\"#contact-form-status-message > p\")\n        .toggleClass(\"success\", false)\n        .toggleClass(\"error\", true)\n        .text(message);\n}\nfunction unHideContactStatus() {\n    $(\"#contact-form-status-message\").toggleClass(\"hidden\", false);\n}\nvar footerWidgetID;\nvar contactWidgetID;\nwindow.onloadCallback = function () {\n    footerWidgetID = grecaptcha.render(\"contactFooterCaptcha\", {\n        sitekey: \"6LcuCAwTAAAAAH0a-M6a9YFW29PXgWBejcRdLZhO\",\n    });\n    contactWidgetID = grecaptcha.render(\"contactCaptcha\", {\n        sitekey: \"6LcuCAwTAAAAAH0a-M6a9YFW29PXgWBejcRdLZhO\",\n    });\n};\nfunction dropdownHover(arg0) {\n    throw new Error(\"Function not implemented.\");\n}\n\n\n//# sourceURL=webpack://coastalconcepts.co.za/./src/index.ts?");

/***/ }),

/***/ "./build/assets/img/bread-bg.png":
/*!***************************************!*\
  !*** ./build/assets/img/bread-bg.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/png;base64,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\");\n\n//# sourceURL=webpack://coastalconcepts.co.za/./build/assets/img/bread-bg.png?");

/***/ }),

/***/ "./build/assets/img/pattern.png":
/*!**************************************!*\
  !*** ./build/assets/img/pattern.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"data:image/png;base64,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\");\n\n//# sourceURL=webpack://coastalconcepts.co.za/./build/assets/img/pattern.png?");

/***/ }),

/***/ "./src/js/analytics.js":
/*!*****************************!*\
  !*** ./src/js/analytics.js ***!
  \*****************************/
/***/ (() => {

eval("(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\nm=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\nga('create', 'UA-78734817-1', 'auto');\nga('send', 'pageview');\n\n\n//# sourceURL=webpack://coastalconcepts.co.za/./src/js/analytics.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (function() {

eval("//bizwrap v1.3\r\n\r\n$(window).on(\"resize\", function () {\r\n    $(\".navbar-collapse\").css({\r\n        maxHeight: $(window).height() - $(\".navbar-header\").height() + \"px\",\r\n    });\r\n});\r\n/* ==============================================\r\n Sticky Navbar\r\n =============================================== */\r\n\r\n$(document).on(\"ready\", function () {\r\n    $(\".sticky\").sticky({ topSpacing: 0 });\r\n});\r\n\r\n/*=========================*/\r\n/*====main navigation hover dropdown====*/\r\n/*==========================*/\r\n$(document).on(\"ready\", function () {\r\n    $(\".js-activated\")\r\n        .dropdownHover({\r\n            instantlyCloseOthers: false,\r\n            delay: 0,\r\n        })\r\n        .dropdown();\r\n});\r\n\r\n/*====flex  slider for main slider or testimonials====*/\r\n$(\".main-flex-slider,.testimonials\").flexslider({\r\n    slideshowSpeed: 5000,\r\n    directionNav: false,\r\n    animation: \"fade\",\r\n});\r\n\r\n/*========portfolio mix====*/\r\n$(\"#grid\").mixitup();\r\n\r\n/*========tooltip and popovers====*/\r\n\r\n$(\"[data-toggle=popover]\").popover();\r\n\r\n$(\"[data-toggle=tooltip]\").tooltip();\r\n\r\n/*========flex-gallery slide====*/\r\n$(window).load(function () {\r\n    $(\".flexslider\").flexslider({\r\n        directionNav: false,\r\n        slideshowSpeed: 3000,\r\n        animation: \"fade\",\r\n    });\r\n});\r\n\r\n/*=========================*/\r\n/*========Animation on scroll with wow.js====*/\r\n/*==========================*/\r\n\r\nwow = new WOW({\r\n    animateClass: \"animated\",\r\n    offset: 100,\r\n    mobile: true,\r\n});\r\nwow.init();\r\n\r\n/* -------------------\r\n Parallax Sections\r\n ---------------------*/\r\n$(\".parallax-1\").parallax(\"50%\", 0.5);\r\n$(\".page-tree-bg\").parallax(\"50%\", 0.5);\r\n\r\n(function () {\r\n    var myLatlng;\r\n    var map;\r\n    var marker;\r\n\r\n    function initialize() {\r\n        myLatlng = new google.maps.LatLng(-33.937952, 18.862212);\r\n\r\n        var mapOptions = {\r\n            zoom: 17,\r\n            center: myLatlng,\r\n            mapTypeId: google.maps.MapTypeId.ROADMAP,\r\n            scrollwheel: false,\r\n            draggable: false,\r\n        };\r\n        map = new google.maps.Map(\r\n            document.getElementById(\"map-canvas\"),\r\n            mapOptions\r\n        );\r\n\r\n        var contentString =\r\n            '<p style=\"line-height: 20px;\"><strong>Coastal Concepts</strong></p><p>Old College Building, 35 Church Street, Stellenbosch</p>';\r\n\r\n        var infowindow = new google.maps.InfoWindow({\r\n            content: contentString,\r\n        });\r\n\r\n        marker = new google.maps.Marker({\r\n            position: myLatlng,\r\n            map: map,\r\n            title: \"Marker\",\r\n        });\r\n\r\n        google.maps.event.addListener(marker, \"click\", function () {\r\n            infowindow.open(map, marker);\r\n        });\r\n    }\r\n\r\n    google.maps.event.addDomListener(window, \"load\", initialize);\r\n}.call(this));\r\n\n\n//# sourceURL=webpack://coastalconcepts.co.za/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;