!function(){"use strict";var t="/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"ant-design-pro","b":"webpack","f":[["p__DataInput__index.be80ca0b.chunk.css",26],["p__DataInput__index.942eb86e.async.js",26],["28.bf30b0a0.async.js",28],["47.53502add.async.js",47],["112.b865d48c.async.js",112],["p__Dashboard__index.25739445.async.js",181],["245.4e2051e0.async.js",245],["255.9cc86b06.async.js",255],["t__plugin-layout__Layout.5012e1ab.chunk.css",301],["t__plugin-layout__Layout.580c441a.async.js",301],["326.f1c7acc7.async.js",326],["p__User__Login__index.47f5afd3.async.js",366],["p__Home__index.3ca765c1.chunk.css",371],["p__Home__index.012fbf37.async.js",371],["481.94a01c83.async.js",481],["p__404.0732ad90.async.js",571],["771.3f0ecfd7.async.js",771],["816.43e38443.async.js",816]],"r":{"/*":[3,15],"/":[3,4,6,8,9,17],"/dashboard":[4,5,10,3,6,8,9,17],"/input":[0,1,14],"/user/login":[2,4,6,11]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();