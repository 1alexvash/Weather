(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),o=a.n(r),i=a(2),l=a.n(i),s=a(3),u=a(4),m=a(16),d=a(5),v=a.n(d),p=function(){return c.a.createElement("div",{className:"lds-spinner"},c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null),c.a.createElement("div",null))},f=function(e){var t=e.icon,a=t.icon[t.icon.length-1];return c.a.createElement("div",{className:"icon"},c.a.createElement("i",{className:"owf owf-".concat(t.id,"-").concat(a)}))},E=function(e){var t=e.temperature,a=e.city,r=e.time;return c.a.createElement(n.Fragment,null,c.a.createElement("div",{className:"temp"},t," \xb0C"),c.a.createElement("div",{className:"city"},a),c.a.createElement("div",{className:"time"},r))},b=(a(41),function(){var e=Object(n.useState)({dataReady:!1,icon:void 0,temperature:void 0,city:void 0,time:"".concat((new Date).getHours(),":").concat((new Date).getMinutes()>=10?(new Date).getMinutes():"0"+(new Date).getMinutes()),status:c.a.createElement(p,null)}),t=Object(m.a)(e,2),a=t[0],r=t[1],o=function(){var e=Object(u.a)(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log(a),navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(){var e=Object(u.a)(l.a.mark(function e(t){var n,c,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.coords.latitude,c=t.coords.longitude,void 0===t&&r(Object(s.a)({},a,{status:"Location data is not available"})),e.prev=3,e.next=6,v.a.get("https://api.opencagedata.com/geocode/v1/json?q=".concat(n,"%2C+").concat(c,"&key=83cdb08ee1ff42b388fca37dd29a98a9&pretty=1"));case 6:o=e.sent,i(o.data.results[0].components.town),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(3),r(Object(s.a)({},a,{status:"Can't get location API"})),console.log(e.t0);case 14:case"end":return e.stop()}},e,null,[[3,10]])}));return function(t){return e.apply(this,arguments)}}(),function(e){r(Object(s.a)({},a,{status:"Geolocation data is not available"})),console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(u.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,v.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&APPID=").concat("4a7bba8e35b7bfadb8a039bd6b248e38","&units=metric"));case 4:200===(n=e.sent).status&&r(Object(s.a)({},a,{dataReady:!0,icon:n.data.weather[0],city:t,temperature:Math.round(n.data.main.temp)})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),r(Object(s.a)({},a,{status:"Weather API is not available"})),console.log(e.t0);case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){o()},[]);c.a.createElement(p,null);return c.a.createElement("div",{className:"App time-".concat((new Date).getHours())},c.a.createElement("div",{className:"content"},a.dataReady?c.a.createElement(n.Fragment,null,c.a.createElement(f,{icon:a.icon,time:a.time}),c.a.createElement(E,{temperature:a.temperature,city:a.city,time:a.time})):a.status))});o.a.render(c.a.createElement(b,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.88663f43.chunk.js.map