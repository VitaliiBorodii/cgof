(this.webpackJsonpcgof=this.webpackJsonpcgof||[]).push([[0],{33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r,c=n(2),a=n(13),s=n.n(a),i=n(11),o=n(9),l=function(e,t){return"".concat(e,"x").concat(t)},u=function(e){return e.split("x").map(Number)},d=function(e,t,n,r){return[[e-1,t-1],[e,t-1],[e+1,t-1],[e-1,t],[e+1,t],[e-1,t+1],[e,t+1],[e+1,t+1]].map((function(e){var t=Object(o.a)(e,2),c=t[0],a=t[1];return c<0?c+=n:c>=n&&(c-=n),a<0?a+=r:a>=r&&(a-=r),[c,a]}))},f=function(e,t){if(e.size!==t.size)return!1;var n=!0;return e.forEach((function(e,r){!e!==!t.get(r)&&(n=!1)})),n?(t.forEach((function(t,r){!e.get(r)!==!t&&(n=!1)})),n):n},b=function(e,t){var n=t.xCount,r=t.yCount,c=e.keys(),a=[],s=Array.from(c);s.forEach((function(t){var c=u(t),s=Object(o.a)(c,2),i=s[0],f=s[1];d(i,f,n,r).forEach((function(t){var n=Object(o.a)(t,2),r=n[0],c=n[1],s=l(r,c);e.has(s)||a.push(s)}))}));var i=new Map;return s.concat(a).forEach((function(t){var c=e.has(t),a=u(t),s=Object(o.a)(a,2),f=s[0],b=s[1],h=0;d(f,b,n,r).forEach((function(t){var n=Object(o.a)(t,2),r=n[0],c=n[1];e.get(l(r,c))&&h++})),c?h>1&&h<4&&i.set(t,1):3===h&&i.set(t,1)})),i},h=n(1),j="#FFF",m="#000",v="#EEE",p=function(e,t,n){if(!e.current)return console.warn("canvasRef is not rendered yet");var r=e.current.getContext("2d"),c=t.rectSize,a=t.xCount,s=t.yCount,i=t.cells.cells;n.forEach((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];r.fillStyle=j,r.fillRect(n*c+1,a*c+1,c-1,c-1)}));var f=[];return i.forEach((function(e,t){var n=u(t),b=Object(o.a)(n,2),h=b[0],v=b[1];e&&(d(h,v,a,s).forEach((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1],s=l(n,a),u=i.get(s);r.fillStyle=u?m:j,u&&f.push([n,a]),r.fillRect(n*c+1,a*c+1,c-1,c-1)})),f.push([h,v])),r.fillStyle=e?m:j,r.fillRect(h*c+1,v*c+1,c-1,c-1)})),f},x=function(e){var t=e.width,n=e.height,r=e.rectSize,a=e.onClick,s=e.xCount,i=e.yCount,l=e.cells,u=function(e){var t=Object(c.useRef)();return Object(c.useEffect)((function(){t.current=e})),t.current}(e),d=Object(c.useState)([]),b=Object(o.a)(d,2),j=b[0],m=b[1],x=Object(c.useRef)(null);Object(c.useEffect)((function(){!function(e,t){var n=!0;return Object.keys(e).forEach((function(r){e[r]!==t[r]&&(n=!1)})),n?(Object.keys(t).forEach((function(r){e[r]!==t[r]&&(n=!1)})),n):n}({width:null===u||void 0===u?void 0:u.width,height:null===u||void 0===u?void 0:u.height,rectSize:null===u||void 0===u?void 0:u.rectSize,xCount:null===u||void 0===u?void 0:u.xCount,yCount:null===u||void 0===u?void 0:u.yCount},{width:e.width,height:e.height,rectSize:e.rectSize,xCount:e.xCount,yCount:e.yCount})?m(function(e,t,n,r){if(!e.current)return console.warn("canvasRef is not rendered yet");var c=t.rectSize,a=t.width,s=t.height,i=e.current.getContext("2d");i.clearRect(0,0,a,s),i.strokeStyle=v,i.beginPath(),i.globalAlpha=1;for(var o=s;o--;)i.moveTo(0,c*o),i.lineTo(c*a,c*o);for(var l=a;l--;)i.moveTo(c*l,0),i.lineTo(c*l,c*s);return i.lineWidth=1,i.stroke(),i.closePath(),p(e,t,n)}(x,e,j)):f(e.cells.cells,u.cells.cells)||m(p(x,e,j))}),[t,n,r,s,i,l]);return Object(h.jsx)("canvas",{className:"app-canvas",width:t,height:n,onClick:function(e){var t=e.nativeEvent,n=t.offsetX,c=t.offsetY,s=Math.floor(n/r),i=Math.floor(c/r);a({x:s,y:i})},ref:x})},O="WINDOW_SIZE_CHANGE",y="SCALE_CHANGE",g="TOGGLE_CELL",w="TOGGLE_CELL_DONE",E="ADD_PATTERN",N="ADD_PATTERN_DONE",C="PLAY_LIFE",_="STOP_LIFE",k="NEXT_STEP",z="NEXT_STEP_DONE",S="NEXT_STEP_ERROR",R="CHANGE_FREQUENCY",P="RESET_LIFE",T="REQUEST_PREVIOUS_STEP",A="RECEIVE_PREVIOUS_STEP",L="REQUEST_LAST_STEP",I="RESTORE_LIFE",M=function(){return{type:_}},D=function(){return{type:C}},F=Object(i.b)((function(e){return{size:e.size,cells:e.cells}}))((function(e){var t=e.size,n=e.cells,r=e.dispatch,a=Object(c.useRef)(null);Object(c.useEffect)((function(){r({type:L});var e=function(){var e;r((e={width:a.current.clientWidth,height:a.current.clientHeight},{type:O,sizes:e}))};return window.addEventListener("resize",e),e(),function(){window.removeEventListener("resize",e)}}),[]);return Object(h.jsx)("div",{className:"mdl-layout__content container-container",children:Object(h.jsx)("div",{className:"page-content container-content",ref:a,children:Object(h.jsx)(x,{onClick:function(e){return r(function(e){return{type:g,coords:e}}(e))},width:t.canvasWidth,height:t.canvasHeight,xCount:t.xCount,yCount:t.yCount,rectSize:t.rectSize,cells:n})})})})),q=function(e){var t=e.onAddPattern,n=Object(c.useRef)(null);return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"pattern-textarea",children:Object(h.jsx)("textarea",{defaultValue:"\n        .*...\n        *.*.\n        *.**\n        .*...\n        ",ref:n,className:"mdl-textfield__input materialize-textarea pattern-textarea-input",name:"pattern",cols:"20",rows:"5"})}),Object(h.jsxs)("div",{className:"mdl-list",children:[Object(h.jsx)("output",{className:"mdl-list__item",children:"Paste a pattern into textarea above. Use symbol `*` - to make alive cells. Pattern will be inserted at the center of the canvas."}),Object(h.jsx)("div",{className:"pattern-inputs",children:Object(h.jsx)("div",{className:"buttons",children:Object(h.jsxs)("button",{onClick:function(){var e=n.current.value;n.current.value="",t(e)},className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored pattern-inputs-button",children:[Object(h.jsx)("i",{className:"material-icons",children:"content_paste"})," Add Pattern"]})})})]})]})},H=function(e){var t=e.onNext,n=e.onZoom,r=e.onPrev,c=e.onReset,a=e.onPlay,s=e.isPlaying;return Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:r,className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",id:"step-back",children:Object(h.jsx)("i",{className:"material-icons",children:"skip_previous"})}),Object(h.jsx)("button",{onClick:t,className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",id:"step-forward",children:Object(h.jsx)("i",{className:"material-icons",children:"skip_next"})}),Object(h.jsx)("button",{onClick:a,className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",children:Object(h.jsx)("i",{className:"material-icons",children:s?"pause":"play_arrow"})})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:function(){return n(1)},className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",id:"zoom-in",children:Object(h.jsx)("i",{className:"material-icons",children:"zoom_in"})}),Object(h.jsx)("button",{onClick:function(){return n(-1)},className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",id:"zoom-out",children:Object(h.jsx)("i",{className:"material-icons",children:"zoom_out"})}),Object(h.jsx)("button",{onClick:c,className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored",children:Object(h.jsx)("i",{className:"material-icons",children:"stop"})})]})]})},W=function(e){var t=e.frequency,n=e.onChange;return Object(h.jsxs)("div",{className:"slider mdl-list",children:[Object(h.jsxs)("label",{htmlFor:"timeout-input",className:"mdl-list__item slider-label",children:[Object(h.jsx)("div",{className:"slider-label-text",children:"Frequency:"}),Object(h.jsxs)("div",{className:"slider-label-text",children:[t," cycles per minute"]})]}),Object(h.jsx)("div",{className:"",children:Object(h.jsx)("input",{value:t,onChange:function(e){return n(Number(e.target.value))},className:"mdl-list__item mdl-slider mdl-js-slider",id:"timeout-input",type:"range",max:"5000",min:"1",step:"1"})})]})},G=function(e){var t=e.onClick;return Object(h.jsx)("div",{className:"buttons mdl-list",children:Object(h.jsxs)("div",{onClick:t,className:"mdl-button mdl-js-button mdl-button--raised mdl-button--colored pattern-inputs-button",children:[Object(h.jsx)("i",{className:"material-icons",children:"timeline"})," Draw chart"]})})};function U(e,t,n){return function(e){return r||(r=new Promise((function(t,n){var r=indexedDB.open("".concat(e,"-db"),1);r.onerror=function(){n(r.error)},r.onupgradeneeded=function(){r.result.createObjectStore(e)},r.onsuccess=function(){t(r.result)}}))),r}(e).then((function(r){return new Promise((function(c,a){var s=r.transaction(e,t);s.oncomplete=function(){c()},s.onerror=function(){a(s.error)},n(s.objectStore(e))}))}))}function Y(e){return this.name=e,this}Y.prototype={get:function(e){var t;return U(this.name,"readonly",(function(n){t=n.get(e)})).then((function(){return t.result}))},set:function(e,t){return U(this.name,"readwrite",(function(n){n.put(t,e)}))},delete:function(e){return U(this.name,"readwrite",(function(t){t.delete(e)}))},getAll:function(){var e;return U(this.name,"readonly",(function(t){e=t.getAll()})).then((function(){return e.result}))},getLast:function(){var e=this;return this.keys().then((function(t){var n=t.pop();return Number.isInteger(n)?e.get(n).then((function(e){return{step:n,cells:e}})):null}))},clear:function(){return U(this.name,"readwrite",(function(e){e.clear()}))},keys:function(){var e=[];return U(this.name,"readonly",(function(t){(t.openKeyCursor||t.openCursor).call(t).onsuccess=function(){this.result&&(e.push(this.result.key),this.result.continue())}})).then((function(){return e}))}};var X=new Y("life"),B=function(){var e=window.open();e&&X.getAll().then((function(t){var n=t.map((function(e){return e.size})),r='<!DOCTYPE html>\n    <style>\n    html,body,svg { height:100%; width:100%;}\n    </style>\n<svg width="100%" height="100%"></svg>\n<script src="https://d3js.org/d3.v4.min.js"><\/script>\n<script>\nvar data = ['.concat(n,']\nvar svg = d3.select("svg"),\n    margin = {top: 20, right: 20, bottom: 30, left: 50},\n    width = window.innerWidth - margin.left - margin.right,\n    height = window.innerHeight - margin.top - margin.bottom,\n    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");\nvar x = d3.scaleLinear()\n    .rangeRound([0, width]);\nvar y = d3.scaleLinear()\n    .rangeRound([height, 0]);\nvar area = d3.area()\n    .x(function(d, i) { return x(i); })\n    .y1(function(d) { return y(d); });\n  x.domain(d3.extent(data, function(d, i) { return i; }));\n  y.domain([0, d3.max(data, function(d) { return d; })]);\n  area.y0(y(0));\n  g.append("path")\n      .datum(data)\n      .attr("fill", "steelblue")\n      .attr("d", area);\n  g.append("g")\n      .attr("transform", "translate(0," + height + ")")\n      .call(d3.axisBottom(x))\n      .append("text")\n       .attr("fill", "#000")\n //      .attr("transform", "rotate(-90)")\n       .attr("x", width - 10)\n       .attr("y", 15)\n       .attr("dX", "0.7em")\n       .attr("text-anchor", "end")\n       .text("Cycles");\n      ;\n  g.append("g")\n      .call(d3.axisLeft(y))\n    .append("text")\n      .attr("fill", "#000")\n      .attr("transform", "rotate(-90)")\n      .attr("y", 6)\n      .attr("dy", "0.71em")\n      .attr("text-anchor", "end")\n      .text("Alive cells");\n<\/script>');e.document.write(r)}))},V=Object(i.b)((function(e){return{size:e.size,interval:e.interval}}))((function(e){var t=e.interval,n=e.dispatch;return Object(h.jsxs)("div",{className:"controls mdl-layout__drawer",children:[Object(h.jsx)(q,{isPlaying:t.running,onAddPattern:function(e){return n(function(e){return{type:E,pattern:e}}(e))}}),Object(h.jsx)(H,{isPlaying:t.running,onPlay:function(){return n(t.running?M():D())},onReset:function(){return n({type:P})},onPrev:function(){return n({type:T})},onZoom:function(e){return n(function(e){return{type:y,direction:e}}(e))},onNext:function(){return n({type:k})}}),Object(h.jsx)(W,{onChange:function(e){return n({type:R,frequency:e})},frequency:t.frequency}),Object(h.jsx)(G,{onClick:B})]})})),Q=function(e){var t=e.aliveCells,n=e.cycle,r=e.xSize,c=e.ySize,a=e.error;return Object(h.jsxs)("div",{className:"logs mdl-list",children:[Object(h.jsxs)("div",{className:"mdl-list__item logs-item",children:["Cycles: ",n]}),Object(h.jsxs)("div",{className:"mdl-list__item logs-item",children:["Board size: ",r,"x",c]}),Object(h.jsxs)("div",{className:"mdl-list__item logs-item",children:["Alive cells: ",t]}),Object(h.jsx)("div",{id:"info",className:"mdl-list__item logs-item error",children:a}),Object(h.jsx)("div",{className:"mdl-list__item message logs-item",children:"You can add or remove cells by clicking on canvas"})]})},Z=Object(i.b)((function(e){return{size:e.size,cells:e.cells,interval:e.interval}}))((function(e){var t=e.dispatch,n=e.interval,r=e.size,c=e.cells;return Object(h.jsx)("div",{className:"mdl-layout__header",children:Object(h.jsxs)("div",{className:"mdl-layout__header-row",children:[Object(h.jsx)("span",{className:"mdl-layout-title"}),Object(h.jsx)("div",{className:"mdl-layout-spacer",children:Object(h.jsx)("div",{className:"header-button",children:Object(h.jsx)("button",{onClick:function(){return t(n.running?M():D())},className:"mdl-button mdl-js-button mdl-button--raised",children:Object(h.jsx)("i",{className:"material-icons",children:n.running?"pause":"play_arrow"})})})}),Object(h.jsx)("div",{className:"mdl-navigation mdl-layout--large-screen-only",children:Object(h.jsx)(Q,{error:n.error,xSize:r.xCount,ySize:r.yCount,aliveCells:c.cells.size,cycle:c.step})})]})})})),J=n(12),K=n(20),$=n(7),ee=n.n($),te=n(5),ne=ee.a.mark(oe),re=ee.a.mark(le),ce=ee.a.mark(ue),ae=function(e){return e.cells};function se(){X.clear()}function ie(e){X.set(e.step,e.cells)}function oe(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=te.b,e.t1=I,e.next=4,X.getLast();case 4:return e.t2=e.sent,e.t3={type:e.t1,restore:e.t2},e.next=8,(0,e.t0)(e.t3);case 8:case"end":return e.stop()}}),ne)}function le(){var e,t;return ee.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(te.c)(ae);case 2:if(e=n.sent,!((t=e.step-1)<0)){n.next=6;break}return n.abrupt("return");case 6:return n.t0=te.b,n.t1=A,n.next=10,X.get(t);case 10:return n.t2=n.sent,n.t3={type:n.t1,cells:n.t2},n.next=14,(0,n.t0)(n.t3);case 14:case"end":return n.stop()}}),re)}function ue(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.d)(P,se);case 2:return e.next=4,Object(te.d)([N,z,w],ie);case 4:return e.next=6,Object(te.d)(L,oe);case 6:return e.next=8,Object(te.d)(T,le);case 8:setInterval((function(){X.keys().then((function(e){if(e.length>500){var t=e.slice(0,e.length-500);t.forEach((function(e){return X.delete(e)})),console.log("Removing ".concat(t.length," keys"))}}))}),6e4);case 9:case"end":return e.stop()}}),ce)}var de=ue,fe=ee.a.mark(ve),be=ee.a.mark(pe),he=ee.a.mark(xe),je=function(e){return e.cells},me=function(e){return e.size};function ve(e){var t,n,r,c,a,s;return ee.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.coords,n=t.x,r=t.y,i.next=3,Object(te.c)(je);case 3:return c=i.sent,a=new Map(c.cells),s=l(n,r),i.next=8,Object(te.b)({type:w,cells:a.has(s)?a.delete(s)&&a:a.set(s,1),step:c.step});case 8:case"end":return i.stop()}}),fe)}function pe(e){var t,n,r,c,a,s,i,o,u,d,f;return ee.a.wrap((function(b){for(;;)switch(b.prev=b.next){case 0:return t=e.pattern,b.next=3,Object(te.c)(je);case 3:return n=b.sent,b.next=6,Object(te.c)(me);case 6:if(r=b.sent,c=r.xCount,a=r.yCount,!n.readOnly){b.next=13;break}return b.next=12,Object(te.b)({type:"READ_ONLY_ERROR"});case 12:return b.abrupt("return",b.sent);case 13:return s=t.split("\n"),i=s.length,o=0,s.forEach((function(e){var t=e.length;t>o&&(o=t)})),u=Math.floor((a-i)/2),d=Math.floor((c-o)/2),f=[],s.forEach((function(e,t){e.split("").forEach((function(e,n){var r=d+n,c=u+t;"*"===e&&f.push(l(r,c))}))})),b.next=23,Object(te.b)({type:N,pattern:t,cells:f.reduce((function(e,t){return e.set(t,1)}),new Map(n.cells)),step:n.step});case 23:case"end":return b.stop()}}),be)}function xe(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.d)(E,pe);case 2:return e.next=4,Object(te.d)(g,ve);case 4:case"end":return e.stop()}}),he)}var Oe,ye=xe,ge=ee.a.mark(ze),we=ee.a.mark(Se),Ee=ee.a.mark(Re),Ne=ee.a.mark(Te),Ce=function(e){return e.cells},_e=function(e){return e.interval},ke=function(e){return e.size};function ze(){var e,t,n;return ee.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return Pe(),r.next=3,Object(te.c)(_e);case 3:if((e=r.sent).running){r.next=6;break}return r.abrupt("return");case 6:return t=Math.round(6e4/e.frequency),r.next=9,Re();case 9:return n=r.sent,r.next=12,Object(te.b)(n);case 12:return r.next=14,Object(te.a)(t);case 14:return Oe=r.sent,r.next=17,ze();case 17:case"end":return r.stop()}}),ge)}function Se(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Pe(),e.t0=te.b,e.next=4,Re();case 4:return e.t1=e.sent,e.next=7,(0,e.t0)(e.t1);case 7:case"end":return e.stop()}}),we)}function Re(){var e,t,n,r,c;return ee.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(te.c)(Ce);case 2:return e=a.sent,a.next=5,Object(te.c)(ke);case 5:if(t=a.sent,n=e.cells,r=e.step,c=b(n,t),!f(n,c)){a.next=10;break}return a.abrupt("return",{type:S,error:"Life is Stopped!!"});case 10:return a.abrupt("return",{type:z,step:r+1,cells:c});case 11:case"end":return a.stop()}}),Ee)}function Pe(){clearInterval(Oe)}function Te(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(te.d)(C,ze);case 2:return e.next=4,Object(te.d)(k,Se);case 4:return e.next=6,Object(te.d)([T,_,P],Pe);case 6:case"end":return e.stop()}}),Ne)}var Ae=Te,Le=n(6),Ie={cells:new Map,step:0,readOnly:!1},Me={rectSize:10,canvasHeight:0,canvasWidth:0,xCount:0,yCount:0},De={frequency:120,running:!1,error:null},Fe=Object(K.a)(),qe=Object(J.c)({cells:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(Le.a)(Object(Le.a)({},e),t.restore);case w:return e.readOnly?e:Object(Le.a)(Object(Le.a)({},e),{},{cells:t.cells});case N:return Object(Le.a)(Object(Le.a)({},e),{},{cells:t.cells});case z:return Object(Le.a)(Object(Le.a)({},e),{},{step:t.step,cells:t.cells,readOnly:!1});case A:return Object(Le.a)(Object(Le.a)({},e),{},{readOnly:!0,cells:t.cells,step:e.step-1});case P:return Object(Le.a)({},Ie);default:return e}},size:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:var n=e.rectSize,r=Math.floor(t.sizes.width/n),c=Math.floor(t.sizes.height/n);return Object(Le.a)(Object(Le.a)({},e),{},{xCount:r,yCount:c,canvasWidth:n*r,canvasHeight:n*c});case y:var a=e.rectSize,s=a+t.direction;return s<e.xCount&&s<e.yCount&&s>=2?Object(Le.a)(Object(Le.a)({},e),{},{rectSize:s,xCount:Math.floor(e.canvasWidth/s),yCount:Math.floor(e.canvasHeight/s)}):e;default:return e}},interval:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(Le.a)(Object(Le.a)({},e),{},{error:null,frequency:t.frequency});case C:return Object(Le.a)(Object(Le.a)({},e),{},{error:null,running:!0});case _:case P:case A:case k:return Object(Le.a)(Object(Le.a)({},e),{},{error:null,running:!1});case S:return Object(Le.a)(Object(Le.a)({},e),{},{running:!1,error:t.error});default:return e}}}),He=Object(J.e)(qe,Object(J.a)(Fe));Fe.run(ye),Fe.run(de),Fe.run(Ae);var We=He,Ge=(n(33),n(34),function(){return Object(h.jsx)(i.a,{store:We,className:"App",children:Object(h.jsxs)("div",{id:"App-root",className:"mdl-layout mdl-js-layout mdl-layout--fixed-header",children:[Object(h.jsx)(Z,{}),Object(h.jsx)(F,{}),Object(h.jsx)(V,{})]})})});n(35);s.a.render(Object(h.jsx)(Ge,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.6e77e789.chunk.js.map