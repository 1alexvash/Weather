(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),i=a.n(r),o=a(16),s=a(2),u=a.n(s),m=a(3),p=a(15),l=a(4),d=a.n(l),f=function(e){var t=e.icon,a=t.icon[t.icon.length-1];return c.a.createElement("div",{className:"icon"},c.a.createElement("i",{className:"owf owf-".concat(t.id,"-").concat(a)}))},v=function(e){var t=e.temperature,a=e.city,r=e.time;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"temp"},t," \xb0C"),c.a.createElement("div",{className:"city"},a),c.a.createElement("div",{className:"time"},r))},w=(a(41),function(){var e=Object(n.useState)({dataReady:!1,icon:void 0,temperature:void 0,city:void 0,time:(new Date).getHours()+":"+(new Date).getMinutes()}),t=Object(p.a)(e,2),a=t[0],r=t[1],i=function(){var e=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.a.get("http://api.ipstack.com/46.173.121.249?access_key=80d851c0cffdc633c1a7210ef2f454e7");case 3:t=e.sent,s(t.data.city),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:case"end":return e.stop()}},e,null,[[0,7]])}));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(m.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,d.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&APPID=").concat("4a7bba8e35b7bfadb8a039bd6b248e38","&units=metric"));case 4:200===(n=e.sent).status&&r(Object(o.a)({},a,{dataReady:!0,icon:n.data.weather[0],city:t,temperature:Math.round(n.data.main.temp)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){i()},[]),c.a.createElement("div",{className:"App time-".concat((new Date).getHours())},c.a.createElement("div",{className:"content"},a.dataReady?c.a.createElement(n.Fragment,null,c.a.createElement(f,{icon:a.icon,time:a.time}),c.a.createElement(v,{temperature:a.temperature,city:a.city,time:a.time})):"Loading..."))});i.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.40cfbe84.chunk.js.map