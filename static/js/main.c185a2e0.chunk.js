(this["webpackJsonptimer-task"]=this["webpackJsonptimer-task"]||[]).push([[0],{78:function(e,t,a){e.exports=a(97)},83:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),i=a.n(o),l=(a(83),a(32)),c=a(136),s=a(99),m=a(138),u=Object(c.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),borderRadius:"0px"},"& .MuiButton-containedSecondary":{color:"#1432c8",backgroundColor:"white"}}}}));function d(e){var t=u(),a=e.name;return r.a.createElement("div",{className:t.root},r.a.createElement(m.a,{variant:"contained",color:"secondary"},a))}var p=a(67),g=a(148),f=a(151),b=a(147),E=a(146),v=a(150),S=a(141),y=a(145),h=a(144),N=a(140),O=a(142),x=a(143),T=a(15),k=a(20),j=a(49),L=a.n(j),I={btnName:"start",inputText:"",dataObject:{},tableLog:JSON.parse(localStorage.getItem("arrLog"))||[],taskId:0,statusNavBar:0};function w(e){return{type:"SET_LOG",payload:e}}var B=Object(c.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),borderRadius:"0px"},"& .MuiButton-containedSecondary":{color:"#1432c8",backgroundColor:"white"}}}}));var D=Object(T.b)((function(e){return{taskId:e.main.taskId}}),(function(e){return{removeRowLogAction:function(t){return e(function(e){return{type:"REMOVE_ROW_LOG",payload:e}}(t))}}}))((function(e){var t=B(),a=e.idTask,n=e.removeRowLogAction;return r.a.createElement("div",{className:t.root},r.a.createElement(m.a,{variant:"contained",color:"secondary",onClick:function(){n(a)}},"delete"))})),A=a(24),R=Object(c.a)({table:{minWidth:650},linkDecoration:{textDecoration:"none",color:"#1432c8"}});var M=Object(T.b)((function(e){return{tableLog:e.main.tableLog}}))((function(e){var t=e.tableLog,o=R(),i=a(53);return Object(n.useEffect)((function(){0===t.length?localStorage.setItem("arrLog",JSON.stringify([])):localStorage.setItem("arrLog",JSON.stringify(t))}),[t]),r.a.createElement(N.a,{component:s.a},r.a.createElement(S.a,{className:o.table,"aria-label":"simple table"},r.a.createElement(O.a,null,r.a.createElement(x.a,null,r.a.createElement(h.a,{align:"left"},"\u2116"),r.a.createElement(h.a,{align:"center"},"Task"),r.a.createElement(h.a,{align:"center"},"Time start"),r.a.createElement(h.a,{align:"center"},"Time end"),r.a.createElement(h.a,{align:"center"},"time spend"),r.a.createElement(h.a,{align:"center"},"info"),r.a.createElement(h.a,{align:"center"},"delete"))),r.a.createElement(y.a,null,t.map((function(e,t){return r.a.createElement(x.a,{key:i()},r.a.createElement(h.a,{component:"th",scope:"row"}," ",t+1," "),r.a.createElement(h.a,{align:"center"},e.task),r.a.createElement(h.a,{align:"center"},e.timeStart),r.a.createElement(h.a,{align:"center"},e.timeEnd),r.a.createElement(h.a,{align:"center"},e.timeSpend),r.a.createElement(h.a,{align:"center"},r.a.createElement(A.b,{className:o.linkDecoration,to:"/info/".concat(e.id)}," ",r.a.createElement(d,{name:"info"}))),r.a.createElement(h.a,{align:"center"},r.a.createElement(D,{idTask:e.id})))})))))})),W=a(54),C=a.n(W),J=a(65),_=a.n(J),F=Object(T.b)((function(e){return{tableLog:e.main.tableLog}}))((function(e){var t=new Array(24),a=Object(n.useState)(t.fill(0,0)),o=Object(l.a)(a,2),i=o[0],c=o[1],s=e.tableLog,m=new Date,u=m.getDate(),d=m.getMonth(),p=s.filter((function(e){return e.day===u&&e.month===d}));Object(n.useEffect)((function(){c(t.fill(0,0)),f()}),[s]);var g=function(e,t,a){var n=i,r=e.timeSpendMls,o=r/6e4,l=o-(60-+t[1]),s=Math.floor(l/60),m=+t[0],u=m+1;if(r<6e4*(60-+t[1]))n[m+1]+=parseFloat(o.toFixed());else{if(n[m+1]+=parseFloat(o.toFixed())-parseFloat(l.toFixed()),s>0)for(var d=0;d<s;d++)n[++u]=60;n[u+1]=parseFloat((l%60).toFixed()),c(n)}},f=function(){for(var e=0;e<p.length;e++){var t=p[e],a=t.timeStart.match(/\d+/g);+a[0]+1<24&&g(t,a)}},b={title:{text:"Time Chart",style:{color:"#1432c8"}},series:[{type:"column",data:i}],legend:{enabled:!1},xAxis:{categories:["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"]}},E=function(){return r.a.createElement("div",null,r.a.createElement(_.a,{onChange:f(),highcharts:C.a,constructorType:"chart",options:b}))};return r.a.createElement("div",null,r.a.createElement(E,null))}));function G(e){var t=e.children,a=e.value,n=e.index,o=Object(p.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"nav-tabpanel-".concat(n),"aria-labelledby":"nav-tab-".concat(n)},o),a===n&&r.a.createElement(v.a,{p:3},r.a.createElement(E.a,{component:"span"},t)))}function z(e){return{id:"nav-tab-".concat(e),"aria-controls":"nav-tabpanel-".concat(e)}}function V(e){return r.a.createElement(b.a,Object.assign({component:"a",onClick:function(e){e.preventDefault()}},e))}var H=Object(c.a)((function(e){return{root:{flexGrow:1,width:"90%",paddingTop:20,backgroundColor:e.palette.background.paper,"& .MuiAppBar-colorPrimary":{backgroundColor:"#00bcd6"}}}}));var P=Object(T.b)((function(e){return{statusNavBar:e.main.statusNavBar}}),(function(e){return{setNavBarStatusAction:function(t){return e(function(e){return{type:"SET_NAV_BAR",payload:e}}(t))}}}))((function(e){var t=e.setNavBarStatusAction,a=H(),n=r.a.useState(0),o=Object(l.a)(n,2),i=o[0],c=o[1];return r.a.createElement("div",{className:a.root},r.a.createElement(g.a,{position:"static"},r.a.createElement(f.a,{variant:"fullWidth",value:i,onChange:function(e,a){c(a),t(a)},"aria-label":"nav tabs example"},r.a.createElement(V,Object.assign({label:"tasks log",href:"/taskLog"},z(0))),r.a.createElement(V,Object.assign({label:"tasks chart",href:"/taskChart"},z(1))))),r.a.createElement(G,{value:i,index:0},r.a.createElement(M,null)),r.a.createElement(G,{value:i,index:1},r.a.createElement(F,null)))})),U=a(149),X=Object(c.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),marginTop:"50px",width:"25ch"},"& .MuiFormLabel-root":{color:"#1432c8",textAlign:"center",marginLeft:"40px"}},underline:{"& ::before":{borderBottom:"1px solid rgba(212, 212, 212, 0.42)"}},inputStyle:{display:"absolute",alignItems:"center"}}}));var q=Object(T.b)((function(e){return{inputText:e.main.inputText}}))((function(e){var t=X(),a=e.setInputText,n=e.inputText;return r.a.createElement("div",{id:"mainInput",className:t.inputStyle},r.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},r.a.createElement(U.a,{className:t.underline,id:"standard-basic",label:"Name of your task",value:n,onChange:function(e){a(e.target.value)}})))})),Y=a(152),$=Object(c.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1),width:e.spacing(0),height:e.spacing(0)}},divRoot:{display:"flex",justifyContent:"center",marginTop:"20%",outline:"0"},modelWiev:{width:"55%",height:"150px",display:"flex",flexDirection:"column",alignItems:"flex-start"},h1Style:{color:"#bd3063",fontWeight:"500",fontSize:"15pt",marginLeft:"5%",marginTop:"20px"},h2Style:{color:"#525252",marginLeft:"5%",marginTop:"20px"},closeBtnStyle:{cursor:"pointer",color:"#58daee",fontWeight:"400",fontSize:"14pt",marginLeft:"90%",marginTop:"20px"}}}));function K(e){var t=$(),a=e.display,n=e.setDisplay;return r.a.createElement(Y.a,{open:a,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},r.a.createElement("div",{className:t.divRoot},r.a.createElement(s.a,{variant:"outlined",square:!0,className:t.modelWiev},r.a.createElement("div",{className:t.h1Style},"Emty task name"),r.a.createElement("div",{className:t.h2Style},"You are trying close your task without name, enter the title and try again!"),r.a.createElement("div",{className:t.closeBtnStyle,onClick:function(){n(!1)}},"close"))))}var Q=Object(c.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),borderRadius:"0px"},"& .MuiButton-containedSecondary":{color:"#1432c8",backgroundColor:"white"}}}}));var Z=Object(T.b)((function(e){var t=e.main;return{tableLog:t.tableLog,statusNavBar:t.statusNavBar}}),(function(e){return{setLogAction:function(t){return e(w(t))}}}))((function(e){var t=Q(),n=e.setLogAction,o=e.statusNavBar;return r.a.createElement("div",{className:t.root},r.a.createElement(m.a,{variant:"contained",color:"secondary",onClick:function(){1!==o&&n(function(){for(var e=a(53),t=Date.now(),n=[],r=0;r<10;r++){var o=0===r?t-368e5:n[r-1],i=0===r?o:o.timeEndMls+6e5,l=Math.floor(54e5*Math.random()),c=l+i,s=new Date,m=s.getDate(),u=s.getMonth();n.push({id:e(),task:"task ".concat(r+1),timeStart:new Date(1,1,1,0,0,0,i).toLocaleTimeString(),timeEnd:new Date(1,1,1,0,0,0,c).toLocaleTimeString(),timeSpend:new Date(1,1,1,0,0,0,l).toLocaleTimeString(),timeStartMls:i,timeEndMls:c,timeSpendMls:l,day:m,month:u})}return localStorage.setItem("arrLog",JSON.stringify(n)),n}())}}," generate "))})),ee=Object(c.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(20),height:e.spacing(20),borderRadius:"50%"}},positionMainBlock:{display:"flex",flexDirection:"column",alignItems:"center"},timerAlign:{display:"flex",fontWeight:"500",fontSize:"18pt",color:"#1432c8",alignItems:"center",justifyContent:"center"},containerBtnGenerate:{display:"flex",flexDirection:"column",alignItems:"flex-end",paddingRight:"80px"}}}));var te=Object(T.b)((function(e){var t=e.main;return{btnName:t.btnName,inputText:t.inputText,tableLog:t.tableLog,statusNavBar:t.statusNavBar}}),(function(e){return{setBtnNameAction:function(t){return e(function(e){return{type:"SET_BTNNAME",payload:e}}(t))},setInputTextAction:function(t){return e(function(e){return{type:"SET_INPUTTEXT",payload:e}}(t))},setLogAction:function(t){return e(w(t))}}}))((function(e){var t=e.setBtnNameAction,o=e.btnName,i=e.setInputTextAction,c=e.inputText,m=e.setLogAction,u=e.tableLog,p=e.statusNavBar,g=ee(),f=Date.now(),b=Object(n.useState)(0),E=Object(l.a)(b,2),v=E[0],S=E[1],y=Object(n.useState)(0),h=Object(l.a)(y,2),N=h[0],O=h[1],x=Object(n.useState)(!1),T=Object(l.a)(x,2),k=T[0],j=T[1],I=new Date(1,1,1,0,0,v,0).toLocaleTimeString(),w=L.a.cloneDeep(u);Object(n.useEffect)((function(){null===JSON.parse(localStorage.getItem("timerStatus"))&&localStorage.setItem("timerStatus",!1),!0===JSON.parse(localStorage.getItem("timerStatus"))&&(t("stop"),S((f-JSON.parse(localStorage.getItem("dateTimerRun")))/1e3),B())}),[]);var B=function(){O(setInterval((function(){S((function(e){return e+1}))}),1e3))},D=function(){0==c?j(!0):1!==p&&(t("start"),clearInterval(N),m(function(e,t,n){var r=a(53),o=new Date,i=o.getDate(),l=o.getMonth();return e.push({id:r(),task:n,timeStart:new Date(1,1,1,0,0,0,JSON.parse(localStorage.getItem("dateTimerRun"))+72e5).toLocaleTimeString(),timeEnd:new Date(t).toLocaleTimeString(),timeSpend:new Date(1,1,1,0,0,0,t-JSON.parse(localStorage.getItem("dateTimerRun"))).toLocaleTimeString(),timeStartMls:JSON.parse(localStorage.getItem("dateTimerRun"))+72e5,timeEndMls:t,timeSpendMls:t-JSON.parse(localStorage.getItem("dateTimerRun")),day:i,month:l}),localStorage.setItem("arrLog",JSON.stringify(e)),e}(w,f,c)),i(""),localStorage.setItem("timerStatus",!1),S(0))};return r.a.createElement("div",null,r.a.createElement("div",{className:g.positionMainBlock},r.a.createElement(q,{setInputText:i}),r.a.createElement("div",{id:"mainTimer",className:g.positionMainBlock},r.a.createElement("div",{className:g.root},r.a.createElement(s.a,{elevation:3,className:g.timerAlign},I)),r.a.createElement("div",{onClick:function(){var e=Date.now();!1===JSON.parse(localStorage.getItem("timerStatus"))?(B(),t("stop"),localStorage.setItem("dateTimerRun",e),localStorage.setItem("timerStatus",!0)):D()}},r.a.createElement(d,{name:o}))),r.a.createElement(P,null)),r.a.createElement("div",{className:g.containerBtnGenerate},r.a.createElement(Z,null)),r.a.createElement(K,{display:k,setDisplay:j}))})),ae=a(11),ne=Object(c.a)((function(){return{mainStyleBlock:{display:"flex",flexDirection:"column",alignItems:"center"},h2StyleWarn:{color:"black",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:"18px",fontWeight:"500",paddingTop:"30px"},h1StyleWarn:{color:"rgb(189, 48, 99)",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:"28px",fontWeight:"500",paddingTop:"70px"},linkDecoration:{textDecoration:"none",color:"#1432c8"}}}));function re(){var e=ne();return r.a.createElement("div",{className:e.mainStyleBlock},r.a.createElement("div",{className:e.h1StyleWarn},"WARNING!!!"),r.a.createElement("div",{className:e.h2StyleWarn},"There is no such issue ID"),r.a.createElement(A.b,{className:e.linkDecoration,to:"/timer-task"},r.a.createElement(d,{name:"return"})))}var oe=Object(c.a)((function(){return{h2Style:{color:"#1432c8",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:"18px",fontWeight:"500",paddingTop:"30px"},h1Style:{color:"black",fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:"28px",fontWeight:"500",paddingTop:"70px"},mainStyleBlock:{display:"flex",flexDirection:"column",alignItems:"center"},spanStyle:{color:"black"},linkDecoration:{textDecoration:"none",color:"#1432c8"}}}));function ie(e){var t=e.infoObject,a=oe();return r.a.createElement("div",{className:a.mainStyleBlock},r.a.createElement("div",{className:a.h1Style},"Task information"),r.a.createElement("div",{className:a.h2Style},r.a.createElement("span",{className:a.spanStyle},"Task name :")," ",t.task),r.a.createElement("div",{className:a.h2Style},r.a.createElement("span",{className:a.spanStyle},"Time start :")," ",t.timeStart),r.a.createElement("div",{className:a.h2Style},r.a.createElement("span",{className:a.spanStyle},"Time stop :")," ",t.timeEnd),r.a.createElement("div",{className:a.h2Style},r.a.createElement("span",{className:a.spanStyle},"Time spend :")," ",t.timeSpend),r.a.createElement(A.b,{className:a.linkDecoration,to:"/timer-task"},r.a.createElement(d,{name:"return"})))}var le=Object(T.b)((function(e){return{tableLog:e.main.tableLog}}))((function(e){var t=e.tableLog,a=Object(ae.g)().id,n=t.filter((function(e){return e.id===a}))[0]||"none";return"none"===n?r.a.createElement(re,null):r.a.createElement(ie,{infoObject:n})}));function ce(){return r.a.createElement("div",null,r.a.createElement(A.a,null,r.a.createElement(ae.d,null,r.a.createElement(ae.b,{path:"/timer-task",component:te}),r.a.createElement(ae.b,{path:"/Info/:id",component:le}),r.a.createElement(ae.a,{from:"/",to:"/timer-task"}))))}a(96),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var se=a(34),me=Object(se.combineReducers)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BTNNAME":return Object(k.a)(Object(k.a)({},e),{},{btnName:t.payload});case"SET_INPUTTEXT":return Object(k.a)(Object(k.a)({},e),{},{inputText:t.payload});case"SET_LOG":return Object(k.a)(Object(k.a)({},e),{},{tableLog:t.payload});case"SET_NAV_BAR":return Object(k.a)(Object(k.a)({},e),{},{statusNavBar:t.payload});case"REMOVE_ROW_LOG":return Object(k.a)(Object(k.a)({},e),{},{tableLog:L.a.filter(e.tableLog,(function(e){return e.id!==t.payload}))});default:return e}}}),ue=a(66),de=Object(se.createStore)(me,Object(ue.devToolsEnhancer)());i.a.render(r.a.createElement(T.a,{store:de},r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[78,1,2]]]);
//# sourceMappingURL=main.c185a2e0.chunk.js.map