(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(14),o=a.n(r),i=a(16),s=a(2),u=a.n(s),m=a(3),l=a(15),p=a(4),d=a.n(p),f=function(e){var t=e.icon,a=t.icon[t.icon.length-1];return c.a.createElement("div",{className:"icon"},c.a.createElement("i",{className:"owf owf-".concat(t.id,"-").concat(a)}))},v=function(e){var t=e.temperature,a=e.city,r=e.time;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"temp"},t," \xb0C"),c.a.createElement("div",{className:"city"},a),c.a.createElement("div",{className:"time"},r))},g=(a(41),function(){var e=Object(n.useState)({dataReady:!1,icon:void 0,temperature:void 0,city:void 0,time:(new Date).getHours()+":"+(new Date).getMinutes()}),t=Object(l.a)(e,2),a=t[0],r=t[1],o=function(){var e=Object(m.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(){var e=Object(m.a)(u.a.mark(function e(t){var a,n,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.coords.latitude,n=t.coords.longitude,alert("getting current position",a,n),e.prev=3,e.next=6,d.a.get("https://api.opencagedata.com/geocode/v1/json?q=".concat(a,"%2C+").concat(n,"&key=83cdb08ee1ff42b388fca37dd29a98a9&pretty=1"));case 6:c=e.sent,s(c.data.results[0].components.town),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[3,10]])}));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(m.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,d.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&APPID=").concat("4a7bba8e35b7bfadb8a039bd6b248e38","&units=metric"));case 4:200===(n=e.sent).status&&r(Object(i.a)({},a,{dataReady:!0,icon:n.data.weather[0],city:t,temperature:Math.round(n.data.main.temp)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){o()},[]),c.a.createElement("div",{className:"App time-".concat((new Date).getHours())},c.a.createElement("div",{className:"content"},a.dataReady?c.a.createElement(n.Fragment,null,c.a.createElement(f,{icon:a.icon,time:a.time}),c.a.createElement(v,{temperature:a.temperature,city:a.city,time:a.time})):"Loading..."))});o.a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.bd4fba48.chunk.js.map