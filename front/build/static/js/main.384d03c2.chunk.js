(this.webpackJsonpavengersfront=this.webpackJsonpavengersfront||[]).push([[0],{32:function(e,t){var n=function(e,t){for(var n=0,r=t;n<r.length;n++){if(e===r[n])return!0}};e.exports.getIndexesOfMatches=function(e,t,r){var a=[],c=r;for(var o in e)n(e[o][c],t)&&a.push(o);return a}},36:function(e,t,n){e.exports=n(75)},72:function(e,t){},75:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(29),o=n(1),s=n.n(o),i=n(3),l=n(30),u=n(31),f=n(34),p=n(35),h=n(42),d=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,r,a,c,o,i=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:null,r=i.length>2&&void 0!==i[2]?i[2]:null,null==n?a={method:"get",headers:{"Content-Type":"application/json"}}:(c=JSON.stringify(r),a={method:"".concat(n),body:c,headers:{"Content-Type":"application/json"}}),e.next=5,h(t,a);case 5:return o=e.sent,e.abrupt("return",o.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=n(32),v=n.n(m),b=n(33),g=n.n(b),E=function(e){Object(p.a)(n,e);var t=Object(f.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).websockets=function(){var e=g.a.connect(r.server,{reconnection:!0,secure:!1});e.on("connect",(function(){console.log("Connection Succesfull")})),e.on("connect_error",(function(e){console.log("Conexion error. With the error ".concat(e))})),e.on("reconnect",(function(){console.log("Attempting to reconnect")})),e.on("disconnect",(function(){console.log("Client disconnected")})),e.on("characterDeleted",(function(e){r.delOneFromStat(e)})),e.on("fill",Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("revieving update"),e.next=3,r.update();case 3:console.log("done");case 4:case"end":return e.stop()}}),e)}))))},r.delOneFromStat=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[n=t._id],a=v.a.getIndexesOfMatches(r.state.hits,n,"_id"),(c=r.state.hits).splice(parseInt(a[0],10),1),r.setState(c);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.fill=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(r.APIDEL);case 2:case"end":return e.stop()}}),e)}))),r.update=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(r.API);case 2:t=e.sent,r.setState({hits:t});case 4:case"end":return e.stop()}}),e)}))),r.deleteChar=function(){var e=Object(i.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.target.value,a={_id:n},d(r.APIDEL,"DELETE",a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state=r.state={hits:[]},r.websockets(),r.server="http://localhost:8001/characters/all",r.API="http://localhost:8001/characters",r.APIDEL="http://localhost:8001",r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;d(this.API).then((function(t){return e.setState({hits:t})}))}},{key:"render",value:function(){var e=this,t=this.state.hits;return a.a.createElement("div",null,a.a.createElement("button",{className:"btn-fill",onClick:this.fill},"Fill with heroes"),t.map((function(t){return a.a.createElement("ul",{key:t._id},a.a.createElement("img",{src:t.imageURL,alt:"not found"}),a.a.createElement("label",{for:"c-name"}," Name :"),a.a.createElement("span",{id:"c-name"}," ",t.name),a.a.createElement("br",null),a.a.createElement("label",{for:"c-desc"},"Description: "),a.a.createElement("span",{id:"c-desc"}," ",t.description),a.a.createElement("br",null),a.a.createElement("button",{className:"btn-delete",onClick:e.deleteChar,value:t._id},"Delete"))})))}}]),n}(r.Component);Object(c.render)(a.a.createElement("div",null,a.a.createElement(E,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.384d03c2.chunk.js.map